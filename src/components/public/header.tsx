"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  User,
  Menu,
  X,
  ChevronDown,
  Globe,
  Ticket,
  Trophy,
  MapPin,
  Plane,
  Users,
  Calendar,
} from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

// World Cup 2026 specific data for mega menu
const wc2026Teams = {
  concacaf: [
    { name: "USA", flag: "🇺🇸", slug: "usa-world-cup-2026-tickets" },
    { name: "Mexico", flag: "🇲🇽", slug: "mexico-world-cup-2026-tickets" },
    { name: "Canada", flag: "🇨🇦", slug: "canada-world-cup-2026-tickets" },
    { name: "Panama", flag: "🇵🇦", slug: "panama-world-cup-2026-tickets" },
    { name: "Haiti", flag: "🇭🇹", slug: "haiti-world-cup-2026-tickets" },
    { name: "Curacao", flag: "🇨🇼", slug: "curacao-world-cup-2026-tickets" },
  ],
  uefa: [
    { name: "Spain", flag: "🇪🇸", slug: "spain-world-cup-2026-tickets" },
    { name: "France", flag: "🇫🇷", slug: "france-world-cup-2026-tickets" },
    { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", slug: "england-world-cup-2026-tickets" },
    { name: "Germany", flag: "🇩🇪", slug: "germany-world-cup-2026-tickets" },
    { name: "Portugal", flag: "🇵🇹", slug: "portugal-world-cup-2026-tickets" },
    { name: "Netherlands", flag: "🇳🇱", slug: "netherlands-world-cup-2026-tickets" },
    { name: "Belgium", flag: "🇧🇪", slug: "belgium-world-cup-2026-tickets" },
    { name: "Croatia", flag: "🇭🇷", slug: "croatia-world-cup-2026-tickets" },
    { name: "Italy", flag: "🇮🇹", slug: "italy-world-cup-2026-tickets" },
    { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", slug: "scotland-world-cup-2026-tickets" },
    { name: "Switzerland", flag: "🇨🇭", slug: "switzerland-world-cup-2026-tickets" },
    { name: "Norway", flag: "🇳🇴", slug: "norway-world-cup-2026-tickets" },
    { name: "Austria", flag: "🇦🇹", slug: "austria-world-cup-2026-tickets" },
    { name: "Denmark", flag: "🇩🇰", slug: "denmark-world-cup-2026-tickets" },
    { name: "Turkey", flag: "🇹🇷", slug: "turkey-world-cup-2026-tickets" },
    { name: "Ukraine", flag: "🇺🇦", slug: "ukraine-world-cup-2026-tickets" },
  ],
  conmebol: [
    { name: "Argentina", flag: "🇦🇷", slug: "argentina-world-cup-2026-tickets" },
    { name: "Brazil", flag: "🇧🇷", slug: "brazil-world-cup-2026-tickets" },
    { name: "Colombia", flag: "🇨🇴", slug: "colombia-world-cup-2026-tickets" },
    { name: "Uruguay", flag: "🇺🇾", slug: "uruguay-world-cup-2026-tickets" },
    { name: "Ecuador", flag: "🇪🇨", slug: "ecuador-world-cup-2026-tickets" },
    { name: "Paraguay", flag: "🇵🇾", slug: "paraguay-world-cup-2026-tickets" },
  ],
  afc: [
    { name: "Japan", flag: "🇯🇵", slug: "japan-world-cup-2026-tickets" },
    { name: "Australia", flag: "🇦🇺", slug: "australia-world-cup-2026-tickets" },
    { name: "Korea Republic", flag: "🇰🇷", slug: "korea-world-cup-2026-tickets" },
    { name: "Saudi Arabia", flag: "🇸🇦", slug: "saudi-arabia-world-cup-2026-tickets" },
    { name: "Iran", flag: "🇮🇷", slug: "iran-world-cup-2026-tickets" },
    { name: "Qatar", flag: "🇶🇦", slug: "qatar-world-cup-2026-tickets" },
    { name: "Uzbekistan", flag: "🇺🇿", slug: "uzbekistan-world-cup-2026-tickets" },
    { name: "Jordan", flag: "🇯🇴", slug: "jordan-world-cup-2026-tickets" },
  ],
  caf: [
    { name: "Morocco", flag: "🇲🇦", slug: "morocco-world-cup-2026-tickets" },
    { name: "Senegal", flag: "🇸🇳", slug: "senegal-world-cup-2026-tickets" },
    { name: "Egypt", flag: "🇪🇬", slug: "egypt-world-cup-2026-tickets" },
    { name: "Ivory Coast", flag: "🇨🇮", slug: "ivory-coast-world-cup-2026-tickets" },
    { name: "Algeria", flag: "🇩🇿", slug: "algeria-world-cup-2026-tickets" },
    { name: "South Africa", flag: "🇿🇦", slug: "south-africa-world-cup-2026-tickets" },
    { name: "Ghana", flag: "🇬🇭", slug: "ghana-world-cup-2026-tickets" },
    { name: "Tunisia", flag: "🇹🇳", slug: "tunisia-world-cup-2026-tickets" },
    { name: "Cape Verde", flag: "🇨🇻", slug: "cape-verde-world-cup-2026-tickets" },
  ],
  ofc: [
    { name: "New Zealand", flag: "🇳🇿", slug: "new-zealand-world-cup-2026-tickets" },
  ],
}

const wc2026Venues = {
  usa: [
    { name: "MetLife Stadium", city: "New York/NJ", slug: "metlife-stadium-world-cup-2026-tickets", highlight: "Final" },
    { name: "SoFi Stadium", city: "Los Angeles", slug: "sofi-stadium-world-cup-2026-tickets", highlight: "QF" },
    { name: "AT&T Stadium", city: "Dallas", slug: "att-stadium-world-cup-2026-tickets", highlight: "SF" },
    { name: "Mercedes-Benz", city: "Atlanta", slug: "mercedes-benz-stadium-world-cup-2026-tickets", highlight: "SF" },
    { name: "Hard Rock Stadium", city: "Miami", slug: "hard-rock-stadium-world-cup-2026-tickets", highlight: "QF" },
    { name: "NRG Stadium", city: "Houston", slug: "nrg-stadium-world-cup-2026-tickets" },
    { name: "Lincoln Financial", city: "Philadelphia", slug: "lincoln-financial-field-world-cup-2026-tickets" },
    { name: "Lumen Field", city: "Seattle", slug: "lumen-field-world-cup-2026-tickets" },
    { name: "Levi's Stadium", city: "San Francisco", slug: "levis-stadium-world-cup-2026-tickets" },
    { name: "Gillette Stadium", city: "Boston", slug: "gillette-stadium-world-cup-2026-tickets", highlight: "QF" },
    { name: "Arrowhead Stadium", city: "Kansas City", slug: "arrowhead-stadium-world-cup-2026-tickets", highlight: "QF" },
  ],
  mexico: [
    { name: "Estadio Azteca", city: "Mexico City", slug: "estadio-azteca-world-cup-2026-tickets", highlight: "Opening" },
    { name: "Estadio Akron", city: "Guadalajara", slug: "estadio-akron-world-cup-2026-tickets" },
    { name: "Estadio BBVA", city: "Monterrey", slug: "estadio-bbva-world-cup-2026-tickets" },
  ],
  canada: [
    { name: "BMO Field", city: "Toronto", slug: "bmo-field-world-cup-2026-tickets" },
    { name: "BC Place", city: "Vancouver", slug: "bc-place-world-cup-2026-tickets" },
  ],
}

const wc2026TravelGuides = [
  { city: "New York", country: "🇺🇸", slug: "new-york-world-cup-2026-travel-guide" },
  { city: "Los Angeles", country: "🇺🇸", slug: "los-angeles-world-cup-2026-travel-guide" },
  { city: "Dallas", country: "🇺🇸", slug: "dallas-world-cup-2026-travel-guide" },
  { city: "Atlanta", country: "🇺🇸", slug: "atlanta-world-cup-2026-travel-guide" },
  { city: "Miami", country: "🇺🇸", slug: "miami-world-cup-2026-travel-guide" },
  { city: "Houston", country: "🇺🇸", slug: "houston-world-cup-2026-travel-guide" },
  { city: "Philadelphia", country: "🇺🇸", slug: "philadelphia-world-cup-2026-travel-guide" },
  { city: "Seattle", country: "🇺🇸", slug: "seattle-world-cup-2026-travel-guide" },
  { city: "San Francisco", country: "🇺🇸", slug: "san-francisco-world-cup-2026-travel-guide" },
  { city: "Boston", country: "🇺🇸", slug: "boston-world-cup-2026-travel-guide" },
  { city: "Kansas City", country: "🇺🇸", slug: "kansas-city-world-cup-2026-travel-guide" },
  { city: "Mexico City", country: "🇲🇽", slug: "mexico-city-world-cup-2026-travel-guide" },
  { city: "Guadalajara", country: "🇲🇽", slug: "guadalajara-world-cup-2026-travel-guide" },
  { city: "Monterrey", country: "🇲🇽", slug: "monterrey-world-cup-2026-travel-guide" },
  { city: "Toronto", country: "🇨🇦", slug: "toronto-world-cup-2026-travel-guide" },
  { city: "Vancouver", country: "🇨🇦", slug: "vancouver-world-cup-2026-travel-guide" },
]

const megaMenuItems = [
  {
    label: "World Cup 2026",
    href: "/fifa-world-cup-2026-tickets",
    featured: true,
    megaMenu: "wc2026",
  },
  {
    label: "Olympics",
    href: "/olympics-tickets",
    columns: [
      {
        title: "Events",
        items: [
          { name: "Summer Olympics 2028", href: "/summer-olympics-2028-tickets", hot: true },
          { name: "Winter Olympics 2026", href: "/winter-olympics-2026-tickets" },
          { name: "Paralympic Games", href: "/paralympic-games-tickets" },
        ],
      },
      {
        title: "Popular Sports",
        items: [
          { name: "Athletics", href: "/olympics-athletics-tickets" },
          { name: "Swimming", href: "/olympics-swimming-tickets" },
          { name: "Basketball", href: "/olympics-basketball-tickets" },
          { name: "Gymnastics", href: "/olympics-gymnastics-tickets" },
        ],
      },
    ],
  },
  {
    label: "Euro 2028",
    href: "/euro-2028-tickets",
    simple: true,
  },
  {
    label: "NBA",
    href: "/nba-tickets",
    simple: true,
  },
  {
    label: "NFL",
    href: "/nfl-tickets",
    simple: true,
  },
  {
    label: "Venues",
    href: "/venues",
    simple: true,
  },
]

export function PublicHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [activeWc2026Tab, setActiveWc2026Tab] = useState<"teams" | "venues" | "fixtures" | "travel">("teams")

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b bg-slate-900 text-white">
        <div className="container mx-auto flex h-10 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-blue-400" />
            <span className="font-bold">WorldCup-Tickets</span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-4 text-sm md:flex">
              <Link href="/about" className="hover:text-blue-400">About</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
              <Link href="/help" className="hover:text-blue-400">Help</Link>
            </nav>

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 rounded px-2 py-1 text-sm hover:bg-slate-800"
              >
                <span>{selectedLanguage.flag}</span>
                <span className="hidden sm:inline">{selectedLanguage.code.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 rounded-lg border bg-white py-1 shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang)
                        setIsLangOpen(false)
                      }}
                      className="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="rounded p-1 hover:bg-slate-800"
            >
              <Search className="h-5 w-5" />
            </button>

            <button className="rounded p-1 hover:bg-slate-800">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <nav className="hidden lg:flex lg:items-center lg:gap-1">
              {megaMenuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => !item.simple && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100 ${
                      item.featured ? "text-blue-600" : "text-slate-700"
                    }`}
                  >
                    {item.featured && <Trophy className="h-4 w-4 text-yellow-500" />}
                    {item.label}
                    {!item.simple && <ChevronDown className="h-4 w-4" />}
                    {item.featured && (
                      <span className="ml-1 rounded bg-red-500 px-1.5 py-0.5 text-xs text-white">HOT</span>
                    )}
                  </Link>

                  {/* World Cup 2026 Mega Menu */}
                  {item.megaMenu === "wc2026" && activeMenu === item.label && (
                    <div className="absolute left-0 top-full z-50 w-[900px] rounded-lg border bg-white shadow-xl">
                      {/* Tabs */}
                      <div className="flex border-b bg-slate-50 px-4">
                        {[
                          { key: "teams", label: "Teams", icon: Users },
                          { key: "venues", label: "Venues", icon: MapPin },
                          { key: "fixtures", label: "Fixtures", icon: Calendar },
                          { key: "travel", label: "Travel Guides", icon: Plane },
                        ].map((tab) => (
                          <button
                            key={tab.key}
                            onClick={() => setActiveWc2026Tab(tab.key as typeof activeWc2026Tab)}
                            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                              activeWc2026Tab === tab.key
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-slate-600 hover:text-slate-900"
                            }`}
                          >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Teams Tab */}
                      {activeWc2026Tab === "teams" && (
                        <div className="p-6">
                          <div className="grid grid-cols-5 gap-6">
                            {/* CONCACAF */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 text-xs uppercase tracking-wide">CONCACAF (6)</h4>
                              <ul className="space-y-1">
                                {wc2026Teams.concacaf.map((team) => (
                                  <li key={team.slug}>
                                    <Link
                                      href={`/teams/${team.slug}`}
                                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 py-1"
                                    >
                                      <span>{team.flag}</span>
                                      {team.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* UEFA - Split into 2 columns */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 text-xs uppercase tracking-wide">UEFA (16)</h4>
                              <ul className="space-y-1">
                                {wc2026Teams.uefa.slice(0, 8).map((team) => (
                                  <li key={team.slug}>
                                    <Link
                                      href={`/teams/${team.slug}`}
                                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 py-1"
                                    >
                                      <span>{team.flag}</span>
                                      {team.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 text-xs uppercase tracking-wide">&nbsp;</h4>
                              <ul className="space-y-1">
                                {wc2026Teams.uefa.slice(8).map((team) => (
                                  <li key={team.slug}>
                                    <Link
                                      href={`/teams/${team.slug}`}
                                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 py-1"
                                    >
                                      <span>{team.flag}</span>
                                      {team.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* CONMEBOL + AFC */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 text-xs uppercase tracking-wide">CONMEBOL (6)</h4>
                              <ul className="space-y-1">
                                {wc2026Teams.conmebol.map((team) => (
                                  <li key={team.slug}>
                                    <Link
                                      href={`/teams/${team.slug}`}
                                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 py-1"
                                    >
                                      <span>{team.flag}</span>
                                      {team.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <h4 className="font-semibold text-slate-900 mb-2 mt-4 text-xs uppercase tracking-wide">OFC (1)</h4>
                              <ul className="space-y-1">
                                {wc2026Teams.ofc.map((team) => (
                                  <li key={team.slug}>
                                    <Link
                                      href={`/teams/${team.slug}`}
                                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 py-1"
                                    >
                                      <span>{team.flag}</span>
                                      {team.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* AFC + CAF */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 text-xs uppercase tracking-wide">AFC (8)</h4>
                              <ul className="space-y-1">
                                {wc2026Teams.afc.map((team) => (
                                  <li key={team.slug}>
                                    <Link
                                      href={`/teams/${team.slug}`}
                                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 py-1"
                                    >
                                      <span>{team.flag}</span>
                                      {team.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t">
                            <h4 className="font-semibold text-slate-900 mb-2 text-xs uppercase tracking-wide">CAF (9)</h4>
                            <div className="flex flex-wrap gap-3">
                              {wc2026Teams.caf.map((team) => (
                                <Link
                                  key={team.slug}
                                  href={`/teams/${team.slug}`}
                                  className="flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600"
                                >
                                  <span>{team.flag}</span>
                                  {team.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t text-center">
                            <Link
                              href="/fifa-world-cup-2026-tickets#teams"
                              className="text-blue-600 text-sm font-medium hover:underline"
                            >
                              View All 48 Teams →
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Venues Tab */}
                      {activeWc2026Tab === "venues" && (
                        <div className="p-6">
                          <div className="grid grid-cols-3 gap-6">
                            {/* USA Venues */}
                            <div className="col-span-2">
                              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                <span>🇺🇸</span> United States (11 Venues)
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {wc2026Venues.usa.map((venue) => (
                                  <Link
                                    key={venue.slug}
                                    href={`/venues/${venue.slug}`}
                                    className="flex items-center justify-between p-2 rounded hover:bg-slate-50 text-sm"
                                  >
                                    <div>
                                      <span className="font-medium text-slate-900">{venue.name}</span>
                                      <span className="text-slate-500 ml-1">({venue.city})</span>
                                    </div>
                                    {venue.highlight && (
                                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                                        venue.highlight === "Final" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"
                                      }`}>
                                        {venue.highlight}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Mexico + Canada */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                <span>🇲🇽</span> Mexico (3 Venues)
                              </h4>
                              <ul className="space-y-2">
                                {wc2026Venues.mexico.map((venue) => (
                                  <li key={venue.slug}>
                                    <Link
                                      href={`/venues/${venue.slug}`}
                                      className="flex items-center justify-between text-sm text-slate-600 hover:text-blue-600"
                                    >
                                      <span>{venue.name}</span>
                                      {venue.highlight && (
                                        <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                                          {venue.highlight}
                                        </span>
                                      )}
                                    </Link>
                                    <span className="text-xs text-slate-400">{venue.city}</span>
                                  </li>
                                ))}
                              </ul>

                              <h4 className="font-semibold text-slate-900 mb-3 mt-6 flex items-center gap-2">
                                <span>🇨🇦</span> Canada (2 Venues)
                              </h4>
                              <ul className="space-y-2">
                                {wc2026Venues.canada.map((venue) => (
                                  <li key={venue.slug}>
                                    <Link
                                      href={`/venues/${venue.slug}`}
                                      className="text-sm text-slate-600 hover:text-blue-600"
                                    >
                                      {venue.name}
                                    </Link>
                                    <span className="text-xs text-slate-400 block">{venue.city}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t text-center">
                            <Link
                              href="/fifa-world-cup-2026-tickets#venues"
                              className="text-blue-600 text-sm font-medium hover:underline"
                            >
                              View All 16 Venues →
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Fixtures Tab */}
                      {activeWc2026Tab === "fixtures" && (
                        <div className="p-6">
                          <div className="grid grid-cols-4 gap-6">
                            {/* Group Stage */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3">Group Stage</h4>
                              <ul className="space-y-2">
                                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((group) => (
                                  <li key={group}>
                                    <Link
                                      href={`/fixtures/group-${group.toLowerCase()}-world-cup-2026-tickets`}
                                      className="text-sm text-slate-600 hover:text-blue-600"
                                    >
                                      Group {group}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Knockout Rounds */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3">Knockout Stage</h4>
                              <ul className="space-y-2">
                                <li>
                                  <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    Round of 32
                                  </Link>
                                  <span className="text-xs text-slate-400 block">June 28 - July 3</span>
                                </li>
                                <li>
                                  <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    Round of 16
                                  </Link>
                                  <span className="text-xs text-slate-400 block">July 4-7</span>
                                </li>
                                <li>
                                  <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    Quarter-Finals
                                  </Link>
                                  <span className="text-xs text-slate-400 block">July 9-11</span>
                                </li>
                                <li>
                                  <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    Semi-Finals
                                  </Link>
                                  <span className="text-xs text-slate-400 block">July 14-15</span>
                                </li>
                              </ul>
                            </div>

                            {/* Special Matches */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3">Special Matches</h4>
                              <ul className="space-y-2">
                                <li>
                                  <Link href="/fixtures/mexico-vs-south-africa-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600 flex items-center gap-1">
                                    Opening Match
                                    <span className="text-xs bg-green-100 text-green-700 px-1 rounded">Jun 11</span>
                                  </Link>
                                  <span className="text-xs text-slate-400 block">Mexico vs South Africa</span>
                                </li>
                                <li>
                                  <Link href="/fixtures/third-place-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    Third Place Match
                                  </Link>
                                  <span className="text-xs text-slate-400 block">July 18, Miami</span>
                                </li>
                                <li>
                                  <Link href="/fixtures/final-world-cup-2026-tickets" className="text-sm font-medium text-yellow-600 hover:text-yellow-700 flex items-center gap-1">
                                    🏆 WORLD CUP FINAL
                                    <span className="text-xs bg-yellow-100 text-yellow-700 px-1 rounded">Jul 19</span>
                                  </Link>
                                  <span className="text-xs text-slate-400 block">MetLife Stadium, NJ</span>
                                </li>
                              </ul>
                            </div>

                            {/* Hot Fixtures */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3">Hot Fixtures</h4>
                              <ul className="space-y-2">
                                <li>
                                  <Link href="/fixtures/brazil-vs-morocco-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    🇧🇷 Brazil vs Morocco 🇲🇦
                                  </Link>
                                  <span className="text-xs text-slate-400 block">Jun 13, Philadelphia</span>
                                </li>
                                <li>
                                  <Link href="/fixtures/france-vs-norway-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    🇫🇷 France vs Norway 🇳🇴
                                  </Link>
                                  <span className="text-xs text-slate-400 block">Jun 22, Atlanta</span>
                                </li>
                                <li>
                                  <Link href="/fixtures/england-vs-croatia-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs Croatia 🇭🇷
                                  </Link>
                                  <span className="text-xs text-slate-400 block">Jun 17, Dallas</span>
                                </li>
                                <li>
                                  <Link href="/fixtures/usa-vs-paraguay-world-cup-2026-tickets" className="text-sm text-slate-600 hover:text-blue-600">
                                    🇺🇸 USA vs Paraguay 🇵🇾
                                  </Link>
                                  <span className="text-xs text-slate-400 block">Jun 12, Los Angeles</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t text-center">
                            <Link
                              href="/fifa-world-cup-2026-tickets"
                              className="text-blue-600 text-sm font-medium hover:underline"
                            >
                              View Full Match Schedule →
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Travel Guides Tab */}
                      {activeWc2026Tab === "travel" && (
                        <div className="p-6">
                          <div className="grid grid-cols-4 gap-4">
                            {wc2026TravelGuides.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/travel/${city.slug}`}
                                className="flex items-center gap-2 p-3 rounded-lg border hover:bg-slate-50 transition-colors"
                              >
                                <span className="text-xl">{city.country}</span>
                                <span className="font-medium text-sm">{city.city}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t">
                            <div className="text-center p-3 bg-slate-50 rounded-lg">
                              <h5 className="font-semibold text-sm">Visa Info</h5>
                              <p className="text-xs text-slate-500 mt-1">ESTA, ETA & FMM requirements</p>
                            </div>
                            <div className="text-center p-3 bg-slate-50 rounded-lg">
                              <h5 className="font-semibold text-sm">Getting Around</h5>
                              <p className="text-xs text-slate-500 mt-1">Flights, trains & more</p>
                            </div>
                            <div className="text-center p-3 bg-slate-50 rounded-lg">
                              <h5 className="font-semibold text-sm">Fan Zones</h5>
                              <p className="text-xs text-slate-500 mt-1">Watch parties & events</p>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <Link
                              href="/fifa-world-cup-2026-tickets#travel"
                              className="text-blue-600 text-sm font-medium hover:underline"
                            >
                              View All Travel Guides →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Regular Mega Menu */}
                  {!item.simple && !item.megaMenu && activeMenu === item.label && item.columns && (
                    <div className="absolute left-0 top-full z-50 w-[500px] rounded-lg border bg-white p-6 shadow-xl">
                      <div className={`grid grid-cols-${item.columns.length} gap-6`}>
                        {item.columns.map((column, idx) => (
                          <div key={idx}>
                            <h3 className="mb-3 font-semibold text-slate-900">
                              {column.title}
                            </h3>
                            <ul className="space-y-2">
                              {column.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
                                  >
                                    {subItem.name}
                                    {"hot" in subItem && subItem.hot && (
                                      <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-600">
                                        Hot
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="hidden lg:block">
              <Button>
                <Ticket className="mr-2 h-4 w-4" />
                Find Tickets
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute left-0 right-0 top-full border-b bg-white p-4 shadow-lg z-50">
          <div className="container mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search teams, venues, matches..."
                className="w-full pl-10 text-lg"
                autoFocus
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500">Popular searches:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["World Cup 2026", "Argentina", "MetLife Stadium", "World Cup Final", "USA vs Mexico"].map(
                  (term) => (
                    <button
                      key={term}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm hover:bg-slate-200"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b bg-white shadow-lg lg:hidden z-50">
          <nav className="container mx-auto p-4">
            <ul className="space-y-2">
              {megaMenuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 font-medium hover:bg-slate-100 ${
                      item.featured ? "text-blue-600" : "text-slate-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {item.featured && (
                      <span className="ml-2 rounded bg-red-500 px-1.5 py-0.5 text-xs text-white">HOT</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
