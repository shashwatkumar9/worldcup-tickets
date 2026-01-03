import { createBrowserClient } from '@supabase/ssr'

// Simple mock query builder that returns empty results immediately
const createMockQueryBuilder = () => {
  const mockResult = { data: [], error: null }
  const builder: any = {
    select: () => builder,
    from: () => builder,
    eq: () => builder,
    neq: () => builder,
    in: () => builder,
    order: () => builder,
    limit: () => builder,
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => builder,
    delete: () => builder,
    upsert: () => Promise.resolve({ data: null, error: null }),
    single: () => Promise.resolve({ data: null, error: null }),
    then: (resolve: any) => resolve(mockResult),
  }
  return builder
}

// Mock client for local development without Supabase
const mockClient = {
  from: () => createMockQueryBuilder(),
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
    signOut: async () => ({ error: null }),
  },
}

export function createClient(): any {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Return mock client if Supabase is not configured (local development)
  if (!supabaseUrl || !supabaseAnonKey) {
    return mockClient as any
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}
