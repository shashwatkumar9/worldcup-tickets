"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ticket, Loader2, AlertCircle, CheckCircle } from "lucide-react"

// Admin credentials for the platform
const ADMIN_EMAIL = "admin@worldcup-tickets.net"
const ADMIN_PASSWORD = "WorldCup2026Admin!"

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect") || "/admin"

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

    // Development mode without Supabase - use local auth
    if (!supabaseUrl) {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem("admin_authenticated", "true")
        localStorage.setItem("admin_email", email)
        router.push(redirect)
        return
      } else {
        setError("Invalid credentials. Check the credentials below.")
        setLoading(false)
        return
      }
    }

    // Production mode with Supabase
    try {
      const supabase = createClient()
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        return
      }

      // Check if user is an admin
      const { data: adminUser, error: adminError } = await supabase
        .from("admin_users")
        .select("id, role, is_active")
        .eq("email", email)
        .single()

      if (adminError || !adminUser) {
        await supabase.auth.signOut()
        setError("You do not have admin access")
        return
      }

      if (!adminUser.is_active) {
        await supabase.auth.signOut()
        setError("Your admin account has been deactivated")
        return
      }

      router.push(redirect)
      router.refresh()
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  const fillCredentials = () => {
    setEmail(ADMIN_EMAIL)
    setPassword(ADMIN_PASSWORD)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
          <Ticket className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl">WorldCup-Tickets.net</CardTitle>
        <CardDescription>
          Admin Panel - Sign in to manage content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@worldcup-tickets.net"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In to Admin Panel"
            )}
          </Button>
        </form>

        {/* Credentials section */}
        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <p className="text-sm font-semibold text-blue-800">Admin Credentials</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Email:</span>
              <code className="rounded bg-white px-2 py-0.5 text-xs">{ADMIN_EMAIL}</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Password:</span>
              <code className="rounded bg-white px-2 py-0.5 text-xs">{ADMIN_PASSWORD}</code>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-3 w-full bg-white"
            onClick={fillCredentials}
            type="button"
          >
            Auto-Fill Credentials
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          WorldCup-Tickets.net Admin Panel v1.0
        </p>
      </CardContent>
    </Card>
  )
}

function LoginFallback() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
          <Ticket className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl">WorldCup-Tickets.net</CardTitle>
        <CardDescription>
          Admin Panel - Loading...
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </CardContent>
    </Card>
  )
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 px-4">
      <Suspense fallback={<LoginFallback />}>
        <LoginForm />
      </Suspense>
    </div>
  )
}
