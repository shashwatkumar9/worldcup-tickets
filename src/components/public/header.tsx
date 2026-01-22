"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LanguageLink } from "@/components/i18n/LanguageLink"
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher"
import {
  Search,
  User,
  Menu,
  X,
  ChevronDown,
  Ticket,
  Trophy,
  MapPin,
  Plane,
  Users,
  Calendar,
} from "lucide-react"

// All 46 teams organized in 6 columns for mega menu
const allTeamsOrganized = [
  [
    { name: "USA World Cup 2026 Tickets", flag: "🇺🇸", slug: "usa-world-cup-2026-tickets" },
    { name: "Mexico World Cup 2026 Tickets", flag: "🇲🇽", slug: "mexico-world-cup-2026-tickets" },
    { name: "Canada World Cup 2026 Tickets", flag: "🇨🇦", slug: "canada-world-cup-2026-tickets" },
    { name: "Panama World Cup 2026 Tickets", flag: "🇵🇦", slug: "panama-world-cup-2026-tickets" },
    { name: "Haiti World Cup 2026 Tickets", flag: "🇭🇹", slug: "haiti-world-cup-2026-tickets" },
    { name: "Curacao World Cup 2026 Tickets", flag: "🇨🇼", slug: "curacao-world-cup-2026-tickets" },
    { name: "Argentina World Cup 2026 Tickets", flag: "🇦🇷", slug: "argentina-world-cup-2026-tickets" },
    { name: "Brazil World Cup 2026 Tickets", flag: "🇧🇷", slug: "brazil-world-cup-2026-tickets" },
  ],
  [
    { name: "Spain World Cup 2026 Tickets", flag: "🇪🇸", slug: "spain-world-cup-2026-tickets" },
    { name: "France World Cup 2026 Tickets", flag: "🇫🇷", slug: "france-world-cup-2026-tickets" },
    { name: "England World Cup 2026 Tickets", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", slug: "england-world-cup-2026-tickets" },
    { name: "Germany World Cup 2026 Tickets", flag: "🇩🇪", slug: "germany-world-cup-2026-tickets" },
    { name: "Portugal World Cup 2026 Tickets", flag: "🇵🇹", slug: "portugal-world-cup-2026-tickets" },
    { name: "Netherlands World Cup 2026 Tickets", flag: "🇳🇱", slug: "netherlands-world-cup-2026-tickets" },
    { name: "Belgium World Cup 2026 Tickets", flag: "🇧🇪", slug: "belgium-world-cup-2026-tickets" },
    { name: "Croatia World Cup 2026 Tickets", flag: "🇭🇷", slug: "croatia-world-cup-2026-tickets" },
  ],
  [
    { name: "Italy World Cup 2026 Tickets", flag: "🇮🇹", slug: "italy-world-cup-2026-tickets" },
    { name: "Scotland World Cup 2026 Tickets", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", slug: "scotland-world-cup-2026-tickets" },
    { name: "Switzerland World Cup 2026 Tickets", flag: "🇨🇭", slug: "switzerland-world-cup-2026-tickets" },
    { name: "Norway World Cup 2026 Tickets", flag: "🇳🇴", slug: "norway-world-cup-2026-tickets" },
    { name: "Austria World Cup 2026 Tickets", flag: "🇦🇹", slug: "austria-world-cup-2026-tickets" },
    { name: "Denmark World Cup 2026 Tickets", flag: "🇩🇰", slug: "denmark-world-cup-2026-tickets" },
    { name: "Turkey World Cup 2026 Tickets", flag: "🇹🇷", slug: "turkey-world-cup-2026-tickets" },
    { name: "Ukraine World Cup 2026 Tickets", flag: "🇺🇦", slug: "ukraine-world-cup-2026-tickets" },
  ],
  [
    { name: "Colombia World Cup 2026 Tickets", flag: "🇨🇴", slug: "colombia-world-cup-2026-tickets" },
    { name: "Uruguay World Cup 2026 Tickets", flag: "🇺🇾", slug: "uruguay-world-cup-2026-tickets" },
    { name: "Ecuador World Cup 2026 Tickets", flag: "🇪🇨", slug: "ecuador-world-cup-2026-tickets" },
    { name: "Paraguay World Cup 2026 Tickets", flag: "🇵🇾", slug: "paraguay-world-cup-2026-tickets" },
    { name: "Japan World Cup 2026 Tickets", flag: "🇯🇵", slug: "japan-world-cup-2026-tickets" },
    { name: "Australia World Cup 2026 Tickets", flag: "🇦🇺", slug: "australia-world-cup-2026-tickets" },
    { name: "Korea World Cup 2026 Tickets", flag: "🇰🇷", slug: "korea-world-cup-2026-tickets" },
    { name: "Saudi Arabia World Cup 2026 Tickets", flag: "🇸🇦", slug: "saudi-arabia-world-cup-2026-tickets" },
  ],
  [
    { name: "Iran World Cup 2026 Tickets", flag: "🇮🇷", slug: "iran-world-cup-2026-tickets" },
    { name: "Qatar World Cup 2026 Tickets", flag: "🇶🇦", slug: "qatar-world-cup-2026-tickets" },
    { name: "Uzbekistan World Cup 2026 Tickets", flag: "🇺🇿", slug: "uzbekistan-world-cup-2026-tickets" },
    { name: "Jordan World Cup 2026 Tickets", flag: "🇯🇴", slug: "jordan-world-cup-2026-tickets" },
    { name: "Morocco World Cup 2026 Tickets", flag: "🇲🇦", slug: "morocco-world-cup-2026-tickets" },
    { name: "Senegal World Cup 2026 Tickets", flag: "🇸🇳", slug: "senegal-world-cup-2026-tickets" },
    { name: "Egypt World Cup 2026 Tickets", flag: "🇪🇬", slug: "egypt-world-cup-2026-tickets" },
    { name: "Ivory Coast World Cup 2026 Tickets", flag: "🇨🇮", slug: "ivory-coast-world-cup-2026-tickets" },
  ],
  [
    { name: "Algeria World Cup 2026 Tickets", flag: "🇩🇿", slug: "algeria-world-cup-2026-tickets" },
    { name: "South Africa World Cup 2026 Tickets", flag: "🇿🇦", slug: "south-africa-world-cup-2026-tickets" },
    { name: "Ghana World Cup 2026 Tickets", flag: "🇬🇭", slug: "ghana-world-cup-2026-tickets" },
    { name: "Tunisia World Cup 2026 Tickets", flag: "🇹🇳", slug: "tunisia-world-cup-2026-tickets" },
    { name: "Cape Verde World Cup 2026 Tickets", flag: "🇨🇻", slug: "cape-verde-world-cup-2026-tickets" },
    { name: "New Zealand World Cup 2026 Tickets", flag: "🇳🇿", slug: "new-zealand-world-cup-2026-tickets" },
  ],
]

// All 16 venues
const allVenues = [
  { name: "MetLife Stadium World Cup 2026 Tickets", city: "New York/NJ", slug: "metlife-stadium-world-cup-2026-tickets", highlight: "FINAL" },
  { name: "SoFi Stadium World Cup 2026 Tickets", city: "Los Angeles", slug: "sofi-stadium-world-cup-2026-tickets", highlight: "QF" },
  { name: "AT&T Stadium World Cup 2026 Tickets", city: "Dallas", slug: "att-stadium-world-cup-2026-tickets", highlight: "SF" },
  { name: "Mercedes-Benz Stadium World Cup 2026 Tickets", city: "Atlanta", slug: "mercedes-benz-stadium-world-cup-2026-tickets", highlight: "SF" },
  { name: "Hard Rock Stadium World Cup 2026 Tickets", city: "Miami", slug: "hard-rock-stadium-world-cup-2026-tickets", highlight: "3rd Place" },
  { name: "NRG Stadium World Cup 2026 Tickets", city: "Houston", slug: "nrg-stadium-world-cup-2026-tickets" },
  { name: "Lincoln Financial Field World Cup 2026 Tickets", city: "Philadelphia", slug: "lincoln-financial-field-world-cup-2026-tickets" },
  { name: "Lumen Field World Cup 2026 Tickets", city: "Seattle", slug: "lumen-field-world-cup-2026-tickets" },
  { name: "Levi's Stadium World Cup 2026 Tickets", city: "San Francisco", slug: "levis-stadium-world-cup-2026-tickets" },
  { name: "Gillette Stadium World Cup 2026 Tickets", city: "Boston", slug: "gillette-stadium-world-cup-2026-tickets", highlight: "QF" },
  { name: "Arrowhead Stadium World Cup 2026 Tickets", city: "Kansas City", slug: "arrowhead-stadium-world-cup-2026-tickets", highlight: "QF" },
  { name: "Estadio Azteca World Cup 2026 Tickets", city: "Mexico City", slug: "estadio-azteca-world-cup-2026-tickets", highlight: "OPENING" },
  { name: "Estadio Akron World Cup 2026 Tickets", city: "Guadalajara", slug: "estadio-akron-world-cup-2026-tickets" },
  { name: "Estadio BBVA World Cup 2026 Tickets", city: "Monterrey", slug: "estadio-bbva-world-cup-2026-tickets" },
  { name: "BMO Field World Cup 2026 Tickets", city: "Toronto", slug: "bmo-field-world-cup-2026-tickets" },
  { name: "BC Place World Cup 2026 Tickets", city: "Vancouver", slug: "bc-place-world-cup-2026-tickets" },
]

// Major fixtures for menu
const hotFixtures = [
  { name: "USA vs Mexico World Cup 2026 Tickets", slug: "usa-vs-mexico-world-cup-2026-tickets", date: "Jun 12" },
  { name: "Brazil vs Morocco World Cup 2026 Tickets", slug: "brazil-vs-morocco-world-cup-2026-tickets", date: "Jun 13" },
  { name: "England vs Croatia World Cup 2026 Tickets", slug: "england-vs-croatia-world-cup-2026-tickets", date: "Jun 17" },
  { name: "France vs Norway World Cup 2026 Tickets", slug: "france-vs-norway-world-cup-2026-tickets", date: "Jun 22" },
  { name: "Argentina vs Algeria World Cup 2026 Tickets", slug: "argentina-vs-algeria-world-cup-2026-tickets", date: "Jun 14" },
  { name: "Spain vs Uruguay World Cup 2026 Tickets", slug: "spain-vs-uruguay-world-cup-2026-tickets", date: "Jun 14" },
  { name: "Germany vs Korea World Cup 2026 Tickets", slug: "germany-vs-korea-world-cup-2026-tickets", date: "Jun 18" },
  { name: "Portugal vs Colombia World Cup 2026 Tickets", slug: "portugal-vs-colombia-world-cup-2026-tickets", date: "Jun 19" },
]

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
  const [activeWc2026Tab, setActiveWc2026Tab] = useState<"teams" | "venues" | "fixtures" | "travel">("teams")

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b bg-slate-900 text-white">
        <div className="container mx-auto flex h-10 items-center justify-between px-4">
          <LanguageLink href="/" className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-blue-400" />
            <span className="font-bold">WorldCup-Tickets</span>
          </LanguageLink>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-4 text-sm md:flex">
              <LanguageLink href="/about" className="hover:text-blue-400">About</LanguageLink>
              <LanguageLink href="/contact" className="hover:text-blue-400">Contact</LanguageLink>
              <LanguageLink href="/help" className="hover:text-blue-400">Help</LanguageLink>
            </nav>

            <LanguageSwitcher variant="header" />

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
                  <LanguageLink
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
                  </LanguageLink>

                  {/* World Cup 2026 Mega Menu */}
                  {item.megaMenu === "wc2026" && activeMenu === item.label && (
                    <div className="absolute left-0 top-full z-50 w-[1100px] rounded-lg border bg-white shadow-xl">
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

                      {/* Teams Tab - 6 columns, 7-8 teams each */}
                      {activeWc2026Tab === "teams" && (
                        <div className="p-6">
                          <div className="grid grid-cols-6 gap-4">
                            {allTeamsOrganized.map((column, colIdx) => (
                              <div key={colIdx}>
                                <ul className="space-y-1.5">
                                  {column.map((team) => (
                                    <li key={team.slug}>
                                      <LanguageLink
                                        href={`/teams/${team.slug}`}
                                        className="flex items-start gap-1.5 text-xs text-slate-600 hover:text-blue-600 py-0.5"
                                      >
                                        <span className="text-sm">{team.flag}</span>
                                        <span className="leading-tight">{team.name}</span>
                                      </LanguageLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t text-center">
                            <Link
                              href="/fifa-world-cup-2026-tickets#teams"
                              className="text-blue-600 text-sm font-medium hover:underline"
                            >
                              View All 46 Teams →
                            </LanguageLink>
                          </div>
                        </div>
                      )}

                      {/* Venues Tab */}
                      {activeWc2026Tab === "venues" && (
                        <div className="p-6">
                          <div className="grid grid-cols-3 gap-6">
                            {allVenues.map((venue) => (
                              <Link
                                key={venue.slug}
                                href={`/venues/${venue.slug}`}
                                className="flex items-center justify-between p-2 rounded hover:bg-slate-50 text-sm group"
                              >
                                <div className="flex-1">
                                  <span className="font-medium text-slate-900 group-hover:text-blue-600 text-xs block">
                                    {venue.name}
                                  </span>
                                  <span className="text-xs text-slate-500">{venue.city}</span>
                                </div>
                                {venue.highlight && (
                                  <span className={`text-xs px-1.5 py-0.5 rounded ml-2 ${
                                    venue.highlight === "FINAL"
                                      ? "bg-yellow-100 text-yellow-700 font-semibold"
                                      : venue.highlight === "OPENING"
                                      ? "bg-green-100 text-green-700 font-semibold"
                                      : "bg-blue-100 text-blue-700"
                                  }`}>
                                    {venue.highlight}
                                  </span>
                                )}
                              </LanguageLink>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t text-center">
                            <Link
                              href="/fifa-world-cup-2026-tickets#venues"
                              className="text-blue-600 text-sm font-medium hover:underline"
                            >
                              View All 16 Venues →
                            </LanguageLink>
                          </div>
                        </div>
                      )}

                      {/* Fixtures Tab */}
                      {activeWc2026Tab === "fixtures" && (
                        <div className="p-6">
                          <div className="grid grid-cols-4 gap-6">
                            {/* Group Stage */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3 text-sm">Group Stage</h4>
                              <ul className="space-y-2">
                                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((group) => (
                                  <li key={group}>
                                    <Link
                                      href={`/fixtures/group-${group.toLowerCase()}-world-cup-2026-tickets`}
                                      className="text-xs text-slate-600 hover:text-blue-600"
                                    >
                                      Group {group} World Cup 2026 Tickets
                                    </LanguageLink>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Knockout Rounds */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3 text-sm">Knockout Stage</h4>
                              <ul className="space-y-2">
                                <li>
                                  <LanguageLink href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-xs text-slate-600 hover:text-blue-600 block">
                                    Round of 32 World Cup 2026 Tickets
                                  </LanguageLink>
                                  <span className="text-xs text-slate-400 block">June 28 - July 3</span>
                                </li>
                                <li>
                                  <LanguageLink href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-xs text-slate-600 hover:text-blue-600 block">
                                    Round of 16 World Cup 2026 Tickets
                                  </LanguageLink>
                                  <span className="text-xs text-slate-400 block">July 4-7</span>
                                </li>
                                <li>
                                  <LanguageLink href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-xs text-slate-600 hover:text-blue-600 block">
                                    Quarter-Finals World Cup 2026 Tickets
                                  </LanguageLink>
                                  <span className="text-xs text-slate-400 block">July 9-11</span>
                                </li>
                                <li>
                                  <LanguageLink href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-xs text-slate-600 hover:text-blue-600 block">
                                    Semi-Finals World Cup 2026 Tickets
                                  </LanguageLink>
                                  <span className="text-xs text-slate-400 block">July 14-15</span>
                                </li>
                                <li>
                                  <LanguageLink href="/fixtures/third-place-world-cup-2026-tickets" className="text-xs text-slate-600 hover:text-blue-600 block">
                                    Third Place World Cup 2026 Tickets
                                  </LanguageLink>
                                  <span className="text-xs text-slate-400 block">July 18</span>
                                </li>
                                <li>
                                  <LanguageLink href="/fixtures/final-world-cup-2026-tickets" className="text-xs font-semibold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 block">
                                    🏆 FINAL World Cup 2026 Tickets
                                  </LanguageLink>
                                  <span className="text-xs text-slate-400 block">July 19, MetLife Stadium</span>
                                </li>
                              </ul>
                            </div>

                            {/* Hot Fixtures Column 1 */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3 text-sm">Hot Fixtures</h4>
                              <ul className="space-y-2">
                                {hotFixtures.slice(0, 4).map((fixture) => (
                                  <li key={fixture.slug}>
                                    <LanguageLink href={`/fixtures/${fixture.slug}`} className="text-xs text-slate-600 hover:text-blue-600 block leading-tight">
                                      {fixture.name}
                                    </LanguageLink>
                                    <span className="text-xs text-slate-400 block">{fixture.date}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Hot Fixtures Column 2 */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3 text-sm">&nbsp;</h4>
                              <ul className="space-y-2">
                                {hotFixtures.slice(4, 8).map((fixture) => (
                                  <li key={fixture.slug}>
                                    <LanguageLink href={`/fixtures/${fixture.slug}`} className="text-xs text-slate-600 hover:text-blue-600 block leading-tight">
                                      {fixture.name}
                                    </LanguageLink>
                                    <span className="text-xs text-slate-400 block">{fixture.date}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t text-center">
                            <Link
                              href="/fifa-world-cup-2026-tickets"
                              className="text-blue-600 text-sm font-medium hover:underline"
                            >
                              View All 104 Matches →
                            </LanguageLink>
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
                              </LanguageLink>
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
                            </LanguageLink>
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
                                  </LanguageLink>
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
                  </LanguageLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
