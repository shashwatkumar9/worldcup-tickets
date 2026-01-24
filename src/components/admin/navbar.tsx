"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Trophy,
  Users,
  Calendar,
  MapPin,
  Grid3X3,
  Plane,
  LinkIcon,
  FileText,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Settings,
  Home,
  Globe,
  Newspaper,
} from "lucide-react"

const navSections = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    items: null,
  },
  {
    title: "Competitions",
    icon: Trophy,
    items: [
      { label: "All Competitions", href: "/admin/competitions", icon: Trophy },
      { label: "Groups", href: "/admin/groups", icon: Grid3X3 },
      { label: "Fixtures & Matches", href: "/admin/fixtures", icon: Calendar },
    ],
  },
  {
    title: "Teams & Venues",
    icon: Users,
    items: [
      { label: "Teams", href: "/admin/teams", icon: Users },
      { label: "Venues & Stadiums", href: "/admin/venues", icon: MapPin },
    ],
  },
  {
    title: "Content",
    icon: FileText,
    items: [
      { label: "Articles & Blog", href: "/admin/articles", icon: Newspaper },
      { label: "Travel Guides", href: "/admin/travel-guides", icon: Plane },
      { label: "Page Content", href: "/admin/page-content", icon: FileText },
    ],
  },
  {
    title: "Marketing",
    icon: Globe,
    items: [
      { label: "Affiliate Links", href: "/admin/affiliates", icon: LinkIcon },
      { label: "SEO & Meta", href: "/admin/seo", icon: Globe },
    ],
  },
]

export function AdminNavbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleNavigation = (href: string) => {
    router.push(href)
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin"
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleNavigation("/admin")}
              className="flex items-center gap-2"
            >
              <Trophy className="h-8 w-8 text-blue-600" />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-slate-900">Sports CMS</div>
                <div className="text-xs text-slate-500">Admin Panel</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navSections.map((section) => {
                if (!section.items) {
                  const Icon = section.icon
                  const active = isActive(section.href!)
                  return (
                    <button
                      key={section.title}
                      onClick={() => handleNavigation(section.href!)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {section.title}
                    </button>
                  )
                }

                const Icon = section.icon
                const hasActiveItem = section.items.some((item) => isActive(item.href))

                return (
                  <div key={section.title} className="relative">
                    <button
                      onClick={() => toggleDropdown(section.title)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        hasActiveItem
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {section.title}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === section.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === section.title && (
                      <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                        {section.items.map((item) => {
                          const ItemIcon = item.icon
                          const active = isActive(item.href)
                          return (
                            <button
                              key={item.href}
                              onClick={() => handleNavigation(item.href)}
                              className={`flex w-full items-center gap-3 px-4 py-2 text-sm transition-colors ${
                                active
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <ItemIcon className="h-4 w-4" />
                              {item.label}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* View Site */}
            <button
              onClick={() => window.open("/", "_blank")}
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:flex"
            >
              <Home className="h-4 w-4" />
              <span>View Site</span>
            </button>

            {/* Settings */}
            <button
              onClick={() => handleNavigation("/admin/settings")}
              className="hidden rounded-lg p-2 text-slate-700 hover:bg-slate-50 sm:block"
            >
              <Settings className="h-5 w-5" />
            </button>

            {/* Logout */}
            <button className="hidden rounded-lg p-2 text-slate-700 hover:bg-slate-50 sm:block">
              <LogOut className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-50 md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navSections.map((section) => {
              if (!section.items) {
                const Icon = section.icon
                const active = isActive(section.href!)
                return (
                  <button
                    key={section.title}
                    onClick={() => handleNavigation(section.href!)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {section.title}
                  </button>
                )
              }

              const Icon = section.icon
              return (
                <div key={section.title}>
                  <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <Icon className="h-4 w-4" />
                    {section.title}
                  </div>
                  {section.items.map((item) => {
                    const ItemIcon = item.icon
                    const active = isActive(item.href)
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={`flex w-full items-center gap-3 rounded-lg px-6 py-2 text-sm ${
                          active
                            ? "bg-blue-50 text-blue-600"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <ItemIcon className="h-4 w-4" />
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              )
            })}

            <div className="border-t border-slate-200 pt-3">
              <button
                onClick={() => window.open("/", "_blank")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <Home className="h-5 w-5" />
                View Site
              </button>
              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
