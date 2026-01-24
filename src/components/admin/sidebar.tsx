"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils/cn"
import {
  LayoutDashboard,
  Trophy,
  Users,
  Calendar,
  MapPin,
  Languages,
  Link as LinkIcon,
  Menu,
  Home,
  Settings,
  BarChart3,
  LogOut,
  Ticket,
  FileText,
  Plane,
  Grid3X3,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Competitions",
    href: "/admin/competitions",
    icon: Trophy,
  },
  {
    name: "Teams",
    href: "/admin/teams",
    icon: Users,
  },
  {
    name: "Fixtures",
    href: "/admin/fixtures",
    icon: Calendar,
  },
  {
    name: "Venues",
    href: "/admin/venues",
    icon: MapPin,
  },
  {
    name: "Groups",
    href: "/admin/groups",
    icon: Grid3X3,
  },
  {
    name: "Travel Guides",
    href: "/admin/travel-guides",
    icon: Plane,
  },
  {
    name: "Affiliates",
    href: "/admin/affiliates",
    icon: LinkIcon,
  },
  {
    name: "Blog",
    href: "/admin/blog",
    icon: FileText,
  },
  {
    name: "Page Content",
    href: "/admin/page-content",
    icon: FileText,
  },
  {
    name: "Translations",
    href: "/admin/translations",
    icon: Languages,
  },
  {
    name: "Menu Builder",
    href: "/admin/menu-builder",
    icon: Menu,
  },
  {
    name: "Homepage Layout",
    href: "/admin/homepage-layout",
    icon: Home,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-slate-700 px-6">
        <Ticket className="h-8 w-8 text-blue-400" />
        <div>
          <span className="text-lg font-bold">WorldCup</span>
          <span className="text-xs text-slate-400 block">Admin Panel</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {!mounted ? (
          // Server-side render: show navigation without active states
          <ul className="space-y-1 px-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          // Client-side render: show navigation with active states
          <ul className="space-y-1 px-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href))

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-4">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          <Home className="h-4 w-4" />
          View Site
        </Link>
        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  )
}
