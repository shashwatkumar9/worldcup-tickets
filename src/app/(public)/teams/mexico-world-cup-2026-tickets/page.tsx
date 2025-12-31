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
  TrendingUp,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mexico World Cup 2026 Tickets | Host Nation | Estadio Azteca",
  description:
    "Buy Mexico FIFA World Cup 2026 tickets. Watch El Tri compete at home including at Estadio Azteca. Group A matches, key players & ticket prices.",
  keywords: [
    "Mexico World Cup 2026 tickets",
    "El Tri World Cup tickets",
    "Estadio Azteca World Cup",
    "Mexico vs South Africa tickets",
    "Mexico football tickets",
    "El Tri tickets",
  ],
}

const teamInfo = {
  name: "Mexico",
  flag: "🇲🇽",
  confederation: "CONCACAF",
  fifaRanking: 15,
  worldCupTitles: 0,
  bestFinish: "Quarter-finals (1970, 1986)",
  group: "A",
  groupOpponents: ["South Africa", "Korea Republic", "TBD (UEFA Playoff)"],
  nickname: "El Tri",
  coach: "Javier Aguirre",
  captain: "Edson Álvarez",
}

const keyPlayers = [
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4, star: true },
  { name: "Hirving Lozano", position: "Forward", club: "PSV", number: 22 },
  { name: "Santiago Giménez", position: "Forward", club: "Feyenoord", number: 9 },
  { name: "César Montes", position: "Defender", club: "Almería", number: 3 },
  { name: "Guillermo Ochoa", position: "Goalkeeper", club: "Salernitana", number: 13 },
  { name: "Raúl Jiménez", position: "Forward", club: "Fulham", number: 7 },
]

const groupFixtures = [
  {
    match: "Mexico vs South Africa",
    date: "June 11, 2026",
    time: "8:00 PM ET",
    venue: "Estadio Azteca",
    city: "Mexico City",
    slug: "mexico-vs-south-africa-world-cup-2026-tickets",
    special: "OPENING MATCH",
  },
  {
    match: "Mexico vs Korea Republic",
    date: "June 16, 2026",
    time: "5:00 PM ET",
    venue: "Estadio Akron",
    city: "Guadalajara",
    slug: "mexico-vs-korea-world-cup-2026-tickets",
  },
  {
    match: "Mexico vs TBD (UEFA)",
    date: "June 21, 2026",
    time: "8:00 PM ET",
    venue: "Estadio BBVA",
    city: "Monterrey",
    slug: "mexico-group-match-3-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2014, result: "Round of 16", location: "Brazil" },
  { year: 2010, result: "Round of 16", location: "South Africa" },
  { year: 1986, result: "Quarter-finals", location: "Mexico" },
  { year: 1970, result: "Quarter-finals", location: "Mexico" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 120, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 185, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 160, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 145, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function MexicoTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-green-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-green-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Mexico</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-green-700 text-white flex items-center gap-1">
                  <Home className="h-3 w-3" /> HOST NATION
                </Badge>
                <Badge className="bg-yellow-500 text-black">OPENING MATCH</Badge>
                <Badge variant="outline" className="border-red-700 text-red-800">GROUP A</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    {teamInfo.name}
                  </h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-800">
                Mexico becomes the first country to host or co-host three World Cups!
                El Tri opens the tournament at the legendary Estadio Azteca.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-700 hover:bg-green-800">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Mexico Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-red-700 text-red-800">
                  View Group A Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-700">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-700">3</p>
                  <p className="text-sm text-slate-600">Times Host</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-700">QF</p>
                  <p className="text-sm text-slate-600">Best Finish</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-700">Group {teamInfo.group}</p>
                  <p className="text-sm text-slate-600">WC 2026 Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Opening Match Banner */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-900 text-lg">World Cup 2026 Opening Match</h3>
                    <p className="text-yellow-800 font-medium">
                      Mexico vs South Africa • June 11, 2026 • Estadio Azteca
                    </p>
                    <p className="text-sm text-yellow-700 mt-1">
                      Be part of history as Mexico opens the tournament at the legendary Estadio Azteca -
                      the only stadium to host three World Cup opening matches!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-700" />
                  Group A Match Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className={`flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors ${
                      fixture.special ? "border-yellow-400 bg-yellow-50" : ""
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-slate-900">{fixture.date}</p>
                          <p className="text-xs text-slate-500">{fixture.time}</p>
                          {fixture.special && (
                            <Badge className="bg-yellow-500 text-xs mt-1">{fixture.special}</Badge>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{fixture.match}</p>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <MapPin className="h-3 w-3" />
                            {fixture.venue}, {fixture.city}
                          </div>
                        </div>
                      </div>
                      <Button size="sm">
                        Get Tickets
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-700" />
                  Key Players to Watch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div
                      key={player.name}
                      className={`p-4 rounded-lg border ${
                        player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                          {player.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-900">{player.name}</p>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position}</p>
                          <p className="text-xs text-slate-400">{player.club}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-green-700" />
                  World Cup History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        entry.result === "Quarter-finals"
                          ? "bg-green-50 border border-green-200"
                          : entry.location === "Mexico"
                          ? "bg-yellow-50 border border-yellow-200"
                          : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                        {entry.location === "Mexico" && (
                          <Badge variant="outline" className="text-xs">Host</Badge>
                        )}
                      </div>
                      <Badge
                        className={
                          entry.result === "Quarter-finals"
                            ? "bg-green-600"
                            : "bg-slate-200 text-slate-700"
                        }
                      >
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About Mexico National Team</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The <strong>Mexico national football team</strong> (Spanish: Selección de fútbol de México),
                  known as El Tri (The Tricolor), is one of the most successful teams in CONCACAF with
                  11 Gold Cup titles and two FIFA Confederations Cup victories.
                </p>

                <h3>Historic Third Hosting</h3>
                <p>
                  Mexico becomes the first country to host or co-host three FIFA World Cups (1970, 1986, 2026).
                  The legendary Estadio Azteca will host the opening match - making it the only stadium to
                  host three World Cup opening games.
                </p>

                <h3>Breaking the &quot;Quinto Partido&quot; Curse</h3>
                <p>
                  Mexico has reached the Round of 16 in seven consecutive World Cups but failed to advance
                  further (known as the &quot;Fifth Game Curse&quot;). With home advantage and passionate
                  support, 2026 represents their best chance to finally break through.
                </p>

                <h3>Mexican Venues</h3>
                <p>
                  Mexico will host 13 World Cup matches across three cities: Mexico City (Estadio Azteca),
                  Guadalajara (Estadio Akron), and Monterrey (Estadio BBVA). El Tri will play all group
                  matches in Mexico.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-green-700" />
                  Buy Mexico Tickets
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

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>Opening match nearly sold out!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Confederation</span>
                  <span className="font-medium">{teamInfo.confederation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">FIFA Ranking</span>
                  <span className="font-medium">#{teamInfo.fifaRanking}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Coach</span>
                  <span className="font-medium">{teamInfo.coach}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Captain</span>
                  <span className="font-medium">{teamInfo.captain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Best Finish</span>
                  <span className="font-medium">Quarter-finals</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group A Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-green-50 font-medium">
                  <span>🇲🇽</span> Mexico
                  <Badge className="ml-auto bg-green-700 text-xs">Host</Badge>
                </Link>
                <Link href="/teams/south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇿🇦</span> South Africa
                </Link>
                <Link href="/teams/korea-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇰🇷</span> Korea Republic
                </Link>
                <div className="flex items-center gap-2 p-2 text-slate-400">
                  <span>🏳️</span> TBD (UEFA Playoff)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
