import { createBrowserClient } from '@supabase/ssr'

// For browser/client-side, we need to make API calls to server-side endpoints
// since SQLite can't run in the browser
const createClientQueryBuilder = (tableName: string) => {
  let filters: any = {}
  let orderBy: { column: string; ascending: boolean } | null = null
  let limitValue: number | null = null
  let singleMode = false

  const builder: any = {
    select: (fields?: string) => builder,
    eq: (column: string, value: any) => {
      filters[column] = value
      return builder
    },
    order: (column: string, options?: { ascending?: boolean }) => {
      orderBy = { column, ascending: options?.ascending ?? true }
      return builder
    },
    limit: (count: number) => {
      limitValue = count
      return builder
    },
    single: async () => {
      singleMode = true
      const result = await builder.execute()
      return {
        data: result.data && result.data.length > 0 ? result.data[0] : null,
        error: result.error
      }
    },
    insert: async (values: any) => {
      try {
        const res = await fetch('/api/db', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'insert', table: tableName, values })
        })
        const data = await res.json()
        return data
      } catch (error: any) {
        return { data: null, error: { message: error.message } }
      }
    },
    update: (values: any) => ({
      eq: async (column: string, value: any) => {
        try {
          const res = await fetch('/api/db', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'update', table: tableName, values, where: { [column]: value } })
          })
          const data = await res.json()
          return data
        } catch (error: any) {
          return { data: null, error: { message: error.message } }
        }
      }
    }),
    delete: () => ({
      eq: async (column: string, value: any) => {
        try {
          const res = await fetch('/api/db', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'delete', table: tableName, where: { [column]: value } })
          })
          const data = await res.json()
          return data
        } catch (error: any) {
          return { error: { message: error.message } }
        }
      }
    }),
    execute: async () => {
      try {
        const res = await fetch('/api/db', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'select',
            table: tableName,
            filters,
            orderBy,
            limit: limitValue,
            single: singleMode
          })
        })
        const data = await res.json()
        return data
      } catch (error: any) {
        return { data: null, error: { message: error.message } }
      }
    }
  }

  builder.then = function(resolve: any) {
    return builder.execute().then(resolve)
  }

  return builder
}

const mockClient = {
  from: (tableName: string) => createClientQueryBuilder(tableName),
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
    signOut: async () => ({ error: null }),
  },
}

export function createClient(): any {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Return local database client if Supabase is not configured
  if (!supabaseUrl || !supabaseAnonKey) {
    return mockClient as any
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}
