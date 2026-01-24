"use client"

import { AdminNavbar } from "@/components/admin/navbar"
import { CompetitionSelector } from "@/components/admin/competition-selector"
import { CompetitionProvider } from "@/contexts/competition-context"
import { SessionProvider } from "next-auth/react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <CompetitionProvider>
        <div className="min-h-screen bg-slate-50">
          <AdminNavbar />
          <CompetitionSelector />
          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </CompetitionProvider>
    </SessionProvider>
  )
}
