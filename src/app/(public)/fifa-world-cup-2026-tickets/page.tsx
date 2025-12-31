import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Ticket,
  ExternalLink,
  ChevronRight,
  Star,
  Users,
  Trophy,
  Globe,
  Clock,
  Flag,
  Plane,
} from "lucide-react"

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Tickets | USA, Mexico & Canada",
  description:
    "Buy FIFA World Cup 2026 tickets. The first 48-team World Cup hosted by USA, Mexico & Canada. 104 matches across 16 cities. Compare prices from Ticketmaster, StubHub & more.",
  keywords: [
    "FIFA World Cup 2026 tickets",
    "World Cup 2026",
    "USA World Cup tickets",
    "Mexico World Cup tickets",
    "Canada World Cup tickets",
    "World Cup Final tickets",
  ],
}

const tournamentStats = [
  { label: "Teams", value: "48", icon: Users },
  { label: "Matches", value: "104", icon: Trophy },
  { label: "Venues", value: "16", icon: MapPin },
  { label: "Host Countries", value: "3", icon: Globe },
  { label: "Duration", value: "39 Days", icon: Calendar },
  { label: "Cities", value: "16", icon: Flag },
]

const keyDates = [
  { date: "June 11, 2026", event: "Opening Match", location: "Mexico City", match: "Mexico vs South Africa" },
  { date: "June 11-27", event: "Group Stage", location: "All 16 Cities", match: "72 Matches" },
  { date: "June 28 - July 3", event: "Round of 32", location: "14 Cities", match: "16 Matches" },
  { date: "July 4-7", event: "Round of 16", location: "8 Cities", match: "8 Matches" },
  { date: "July 9-11", event: "Quarterfinals", location: "Boston, LA, Miami, KC", match: "4 Matches" },
  { date: "July 14-15", event: "Semifinals", location: "Dallas, Atlanta", match: "2 Matches" },
  { date: "July 18", event: "Third Place", location: "Miami", match: "1 Match" },
  { date: "July 19", event: "FINAL", location: "New York/New Jersey", match: "MetLife Stadium" },
]

const groups = [
  { name: "Group A", teams: ["Mexico", "South Africa", "Korea Republic", "TBD (UEFA Playoff D)"], host: "Mexico" },
  { name: "Group B", teams: ["Canada", "TBD (UEFA Playoff A)", "Qatar", "Switzerland"], host: "Canada" },
  { name: "Group C", teams: ["Brazil", "Morocco", "Haiti", "Scotland"], host: "East" },
  { name: "Group D", teams: ["United States", "Paraguay", "Australia", "TBD (UEFA Playoff C)"], host: "West USA" },
  { name: "Group E", teams: ["Germany", "Curacao", "Ivory Coast", "Ecuador"], host: "Central" },
  { name: "Group F", teams: ["Netherlands", "Japan", "TBD (UEFA Playoff B)", "Tunisia"], host: "Central" },
  { name: "Group G", teams: ["Belgium", "Egypt", "IR Iran", "New Zealand"], host: "West" },
  { name: "Group H", teams: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"], host: "Central" },
  { name: "Group I", teams: ["France", "Senegal", "TBD (Playoff)", "Norway"], host: "East" },
  { name: "Group J", teams: ["Argentina", "Algeria", "Austria", "Jordan"], host: "Central" },
  { name: "Group K", teams: ["Portugal", "Colombia", "Uzbekistan", "TBD (Playoff)"], host: "Central" },
  { name: "Group L", teams: ["England", "Ghana", "Panama", "Croatia"], host: "East" },
]

const hostCountries = [
  { country: "United States", flag: "🇺🇸", cities: 11, matches: 78, venues: ["MetLife Stadium", "SoFi Stadium", "AT&T Stadium", "Mercedes-Benz Stadium", "Hard Rock Stadium", "NRG Stadium", "Lincoln Financial Field", "Lumen Field", "Levi's Stadium", "Gillette Stadium", "Arrowhead Stadium"] },
  { country: "Mexico", flag: "🇲🇽", cities: 3, matches: 13, venues: ["Estadio Azteca", "Estadio Akron", "Estadio BBVA"] },
  { country: "Canada", flag: "🇨🇦", cities: 2, matches: 13, venues: ["BMO Field", "BC Place"] },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 95, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 120, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 110, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 105, logo: "🎟️", url: "#", rating: "Best Value" },
]

const featuredTeams = [
  { name: "Argentina", flag: "🇦🇷", slug: "argentina-world-cup-2026-tickets", tag: "Defending Champions" },
  { name: "France", flag: "🇫🇷", slug: "france-world-cup-2026-tickets", tag: "2022 Finalists" },
  { name: "Brazil", flag: "🇧🇷", slug: "brazil-world-cup-2026-tickets", tag: "5x Champions" },
  { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", slug: "england-world-cup-2026-tickets", tag: "Euro Contenders" },
  { name: "Spain", flag: "🇪🇸", slug: "spain-world-cup-2026-tickets", tag: "Euro 2024 Champions" },
  { name: "Germany", flag: "🇩🇪", slug: "germany-world-cup-2026-tickets", tag: "4x Champions" },
  { name: "USA", flag: "🇺🇸", slug: "usa-world-cup-2026-tickets", tag: "Host Nation" },
  { name: "Mexico", flag: "🇲🇽", slug: "mexico-world-cup-2026-tickets", tag: "Host Nation" },
]

const featuredVenues = [
  { name: "MetLife Stadium", city: "New York/New Jersey", capacity: "82,500", matches: 8, highlight: "FINAL", slug: "metlife-stadium-world-cup-2026-tickets" },
  { name: "SoFi Stadium", city: "Los Angeles", capacity: "70,000", matches: 8, highlight: "QF", slug: "sofi-stadium-world-cup-2026-tickets" },
  { name: "AT&T Stadium", city: "Dallas", capacity: "92,967", matches: 9, highlight: "SF", slug: "att-stadium-world-cup-2026-tickets" },
  { name: "Estadio Azteca", city: "Mexico City", capacity: "87,000", matches: 6, highlight: "Opening", slug: "estadio-azteca-world-cup-2026-tickets" },
]

export default function WorldCup2026Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-red-900 to-green-900 py-20 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/competitions" className="hover:text-white">Competitions</Link>
            <ChevronRight className="h-4 w-4" />
            <span>FIFA World Cup 2026</span>
          </div>

          <div className="mt-8 max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black">HISTORIC 48-TEAM FORMAT</Badge>
              <Badge variant="destructive">HOT</Badge>
            </div>

            <h1 className="text-4xl font-bold md:text-6xl">
              FIFA World Cup 2026™ Tickets
            </h1>

            <p className="mt-2 text-2xl text-slate-200">
              🇺🇸 United States • 🇲🇽 Mexico • 🇨🇦 Canada
            </p>

            <p className="mt-4 text-lg text-slate-300 max-w-2xl">
              The first World Cup with 48 teams. 104 matches across 16 cities in 3 countries.
              Experience football history from June 11 to July 19, 2026.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Tickets from $95
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Match Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tournamentStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 mx-auto text-yellow-400 mb-2" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Key Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Tournament Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {keyDates.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        item.event === "FINAL" ? "bg-yellow-50 border-2 border-yellow-400" : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-medium text-slate-600 w-32">
                          {item.date}
                        </div>
                        <div>
                          <p className={`font-semibold ${item.event === "FINAL" ? "text-yellow-700" : "text-slate-900"}`}>
                            {item.event}
                          </p>
                          <p className="text-sm text-slate-500">{item.match}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span className="text-sm text-slate-600">{item.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Host Countries */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Host Countries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {hostCountries.map((country) => (
                    <div key={country.country} className="rounded-lg border p-4 text-center">
                      <span className="text-4xl">{country.flag}</span>
                      <h3 className="font-semibold mt-2">{country.country}</h3>
                      <div className="mt-2 space-y-1 text-sm text-slate-600">
                        <p>{country.cities} Cities</p>
                        <p>{country.matches} Matches</p>
                      </div>
                      <Link
                        href={`/fifa-world-cup-2026-tickets/${country.country.toLowerCase().replace(' ', '-')}`}
                        className="text-blue-600 text-sm hover:underline mt-2 inline-block"
                      >
                        View Venues
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Groups Overview */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Group Stage Draw
                </CardTitle>
                <Link href="/fifa-world-cup-2026-tickets/groups" className="text-sm text-blue-600 hover:underline">
                  Full Group Details
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {groups.map((group) => (
                    <Link
                      key={group.name}
                      href={`/fifa-world-cup-2026-tickets/groups/${group.name.toLowerCase().replace(' ', '-')}`}
                    >
                      <div className="rounded-lg border p-4 hover:bg-slate-50 transition-colors">
                        <h4 className="font-semibold text-blue-600">{group.name}</h4>
                        <ul className="mt-2 space-y-1">
                          {group.teams.map((team, idx) => (
                            <li key={idx} className="text-sm text-slate-700">
                              {team}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Teams */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-blue-600" />
                  Featured Teams
                </CardTitle>
                <Link href="/fifa-world-cup-2026-tickets/teams" className="text-sm text-blue-600 hover:underline">
                  View All 48 Teams
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {featuredTeams.map((team) => (
                    <Link key={team.slug} href={`/teams/${team.slug}`}>
                      <div className="flex flex-col items-center p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                        <span className="text-3xl">{team.flag}</span>
                        <span className="font-medium mt-2">{team.name}</span>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {team.tag}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Venues */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Featured Venues
                </CardTitle>
                <Link href="/fifa-world-cup-2026-tickets/venues" className="text-sm text-blue-600 hover:underline">
                  View All 16 Venues
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {featuredVenues.map((venue) => (
                    <Link key={venue.slug} href={`/venues/${venue.slug}`}>
                      <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{venue.name}</p>
                            <p className="text-sm text-slate-500">{venue.city} • Capacity: {venue.capacity}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={venue.highlight === "FINAL" ? "bg-yellow-500" : "bg-blue-100 text-blue-800"}>
                            {venue.highlight}
                          </Badge>
                          <p className="text-sm text-slate-500 mt-1">{venue.matches} Matches</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Travel Guides */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-blue-600" />
                  City Travel Guides
                </CardTitle>
                <Link href="/fifa-world-cup-2026-tickets/travel" className="text-sm text-blue-600 hover:underline">
                  All Travel Guides
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { city: "New York", country: "🇺🇸", slug: "new-york" },
                    { city: "Los Angeles", country: "🇺🇸", slug: "los-angeles" },
                    { city: "Dallas", country: "🇺🇸", slug: "dallas" },
                    { city: "Miami", country: "🇺🇸", slug: "miami" },
                    { city: "Mexico City", country: "🇲🇽", slug: "mexico-city" },
                    { city: "Toronto", country: "🇨🇦", slug: "toronto" },
                    { city: "Vancouver", country: "🇨🇦", slug: "vancouver" },
                    { city: "Atlanta", country: "🇺🇸", slug: "atlanta" },
                  ].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/fifa-world-cup-2026-tickets/travel/${city.slug}`}
                      className="p-3 rounded-lg border hover:bg-slate-50 text-center transition-colors"
                    >
                      <span className="text-xl">{city.country}</span>
                      <p className="font-medium text-sm mt-1">{city.city}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About FIFA World Cup 2026</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The <strong>2026 FIFA World Cup</strong> (officially marketed as <strong>FIFA World Cup 26™</strong>) will be
                  the 23rd edition of the FIFA World Cup, the quadrennial international men&apos;s football championship.
                </p>

                <h3>Historic Firsts</h3>
                <ul>
                  <li><strong>First 48-team World Cup</strong> - Expanded from 32 teams (2022)</li>
                  <li><strong>First tri-nation host</strong> - Co-hosted by USA, Mexico, and Canada</li>
                  <li><strong>Most venues ever</strong> - 16 stadiums across 16 cities</li>
                  <li><strong>Most matches ever</strong> - 104 total matches</li>
                  <li><strong>Mexico&apos;s third hosting</strong> - First country to host/co-host three times</li>
                </ul>

                <h3>Tournament Format</h3>
                <p>
                  The expanded format features <strong>48 teams</strong> divided into <strong>12 groups</strong> of 4 teams each.
                  The top 2 teams from each group (24 teams) plus the best 8 third-placed teams advance to the
                  Round of 32, followed by traditional knockout rounds.
                </p>

                <h3>How to Buy Tickets</h3>
                <p>
                  Tickets for the FIFA World Cup 2026 are available through official FIFA channels as well as
                  authorized resellers. We compare prices from multiple trusted ticket partners to help you
                  find the best deals for every match.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Buy Tickets Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-600" />
                  Buy World Cup 2026 Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Compare prices from trusted ticket partners
                </p>

                {affiliateLinks.map((link) => (
                  <div
                    key={link.partner}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div>
                        <p className="font-medium text-slate-900">{link.partner}</p>
                        <p className="text-sm text-green-600">From ${link.price_from}</p>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Buy
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                ))}

                <p className="text-xs text-slate-500">
                  Prices shown are starting prices for group stage matches.
                  Knockout and Final tickets will be higher.
                </p>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { label: "Group Stage Tickets", href: "/fifa-world-cup-2026-tickets/groups" },
                  { label: "Round of 32 Tickets", href: "/fifa-world-cup-2026-tickets/round-of-32" },
                  { label: "Round of 16 Tickets", href: "/fifa-world-cup-2026-tickets/round-of-16" },
                  { label: "Quarter-Final Tickets", href: "/fifa-world-cup-2026-tickets/quarter-finals" },
                  { label: "Semi-Final Tickets", href: "/fifa-world-cup-2026-tickets/semi-finals" },
                  { label: "World Cup Final Tickets", href: "/fifa-world-cup-2026-tickets/final" },
                  { label: "Opening Match Tickets", href: "/fifa-world-cup-2026-tickets/opening-match" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-2 rounded hover:bg-slate-50"
                  >
                    <span className="text-sm font-medium">{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Event Info */}
            <Card>
              <CardHeader>
                <CardTitle>Tournament Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Dates</p>
                    <p className="font-medium">June 11 - July 19, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Final Venue</p>
                    <p className="font-medium">MetLife Stadium, New Jersey</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Defending Champions</p>
                    <p className="font-medium">🇦🇷 Argentina</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Final Kickoff</p>
                    <p className="font-medium">3:00 PM ET / 8:00 PM UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
