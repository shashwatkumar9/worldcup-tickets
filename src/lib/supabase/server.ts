import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

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
  },
}

export async function createClient(): Promise<any> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Return mock client if Supabase is not configured (local development)
  if (!supabaseUrl || !supabaseAnonKey) {
    return mockClient as any
  }

  const cookieStore = await cookies()

  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
