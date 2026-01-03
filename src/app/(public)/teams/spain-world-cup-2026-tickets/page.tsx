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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Spain World Cup 2026 Tickets | Euro 2024 Champions",
  description:
    "Buy Spain FIFA World Cup 2026 tickets. Watch La Roja in Group H. Yamal, Pedri, match schedule & ticket prices from $135.",
  keywords: [
    "Spain World Cup 2026 tickets",
    "Spain vs Uruguay tickets",
    "Spain vs Saudi Arabia tickets",
    "La Roja World Cup",
    "Lamine Yamal World Cup",
    "Spain football tickets",
  ],
}

const teamInfo = {
  name: "Spain",
  flag: "🇪🇸",
  confederation: "UEFA",
  fifaRanking: 3,
  worldCupTitles: 1,
  lastTitle: 2010,
  group: "H",
  groupOpponents: ["Cape Verde", "Saudi Arabia", "Uruguay"],
  nickname: "La Roja",
  coach: "Luis de la Fuente",
  captain: "Álvaro Morata",
}

const keyPlayers = [
  { name: "Lamine Yamal", position: "Forward", club: "Barcelona", number: 19, star: true },
  { name: "Pedri", position: "Midfielder", club: "Barcelona", number: 8 },
  { name: "Rodri", position: "Midfielder", club: "Manchester City", number: 16 },
  { name: "Dani Olmo", position: "Midfielder", club: "Barcelona", number: 10 },
  { name: "Nico Williams", position: "Forward", club: "Athletic Bilbao", number: 11 },
  { name: "Unai Simón", position: "Goalkeeper", club: "Athletic Bilbao", number: 1 },
]

const groupFixtures = [
  {
    match: "Spain vs Cape Verde",
    date: "June 13, 2026",
    time: "2:00 PM ET",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    slug: "spain-vs-cape-verde-world-cup-2026-tickets",
  },
  {
    match: "Spain vs Saudi Arabia",
    date: "June 18, 2026",
    time: "5:00 PM ET",
    venue: "Hard Rock Stadium",
    city: "Miami",
    slug: "spain-vs-saudi-arabia-world-cup-2026-tickets",
  },
  {
    match: "Spain vs Uruguay",
    date: "June 23, 2026",
    time: "8:00 PM ET",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    slug: "spain-vs-uruguay-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Round of 16", location: "Qatar" },
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2014, result: "Group Stage", location: "Brazil" },
  { year: 2010, result: "Champions", location: "South Africa" },
  { year: 2006, result: "Round of 16", location: "Germany" },
  { year: 2002, result: "Quarter-finals", location: "Korea/Japan" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 135, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 170, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 155, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 145, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function SpainTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-100">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-white">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Spain</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-400 text-black">EURO 2024 CHAMPIONS</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP H</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-white">
                    {teamInfo.name}
                  </h1>
                  <p className="text-xl text-slate-100 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-100">
                The European Champions and masters of possession football. Spain&apos;s exciting
                young generation led by teenager Lamine Yamal are the team to watch in 2026.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Spain Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Group H Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-red-600">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last WC Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">Group {teamInfo.group}</p>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  Group H Match Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-slate-900">{fixture.date}</p>
                          <p className="text-xs text-slate-500">{fixture.time}</p>
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

                <div className="pt-4 border-t bg-yellow-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-yellow-800">Featured Match: Spain vs Uruguay</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    A clash of two World Cup winners! High demand expected for this Group H showdown at SoFi Stadium.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" />
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
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
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
                  <Trophy className="h-5 w-5 text-red-600" />
                  World Cup History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        entry.result === "Champions"
                          ? "bg-yellow-50 border border-yellow-200"
                          : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge
                        className={
                          entry.result === "Champions"
                            ? "bg-yellow-500"
                            : "bg-slate-200 text-slate-700"
                        }
                      >
                        {entry.result === "Champions" && "🏆 "}
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Info - Comprehensive Article */}
            <Card>
              <CardHeader>
                <CardTitle>Spain World Cup 2026: Complete Guide to La Roja&apos;s New Golden Generation</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  The <strong>Spain national football team</strong> (Spanish: Selección Española de Fútbol) enters the <Link href="/fifa-world-cup-2026-tickets" className="text-blue-600 hover:underline">2026 FIFA World Cup</Link> as the reigning European Champions after their dominant Euro 2024 triumph. La Roja has seamlessly transitioned from the legendary 2010 World Cup-winning generation to an exciting new era led by teenage sensation Lamine Yamal.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">2026 World Cup Prospects</h2>
                <p>
                  Spain&apos;s blend of youth and experience makes them genuine favorites. At just 18 years old, Lamine Yamal is already one of the world&apos;s most exciting players — his performances at Euro 2024 (where he became the youngest player and youngest scorer in the tournament&apos;s history) announced a generational talent.
                </p>
                <p>
                  The midfield remains Spain&apos;s engine room, with Pedri, Gavi, and Rodri controlling games with their trademark passing precision. Nico Williams provides pace and directness on the wing, while established stars like Álvaro Morata and Dani Olmo offer experience.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">Group H Analysis</h2>
                <p>
                  Spain has been drawn into <Link href="/fixtures/group-h-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group H</Link> alongside <Link href="/teams/cape-verde-world-cup-2026-tickets" className="text-blue-600 hover:underline">Cape Verde</Link>, <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Saudi Arabia</Link>, and <Link href="/teams/uruguay-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uruguay</Link>. A fascinating group awaits:
                </p>
                <ul>
                  <li><strong><Link href="/teams/cape-verde-world-cup-2026-tickets" className="text-blue-600 hover:underline">Cape Verde</Link></strong> — Making their World Cup debut! The Blue Sharks will bring African football&apos;s flair and passion.</li>
                  <li><strong><Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Saudi Arabia</Link></strong> — Giant killers who shocked Argentina in 2022. Never underestimate them.</li>
                  <li><strong><Link href="/teams/uruguay-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uruguay</Link></strong> — The highlight! Two World Cup winners with rich history. A La Liga-dominated affair with familiar faces.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">Match Venues</h2>
                <p>Spain will play across major American cities:</p>
                <ul>
                  <li><Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium</Link> (Miami) — vs Cape Verde (huge Spanish-speaking crowd expected)</li>
                  <li><Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium</Link> (Dallas) — vs Saudi Arabia</li>
                  <li><Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mercedes-Benz Stadium</Link> (Atlanta) — vs Uruguay (game of the group!)</li>
                </ul>
                <p>
                  Spain will benefit from massive Latino support in Miami and Dallas. <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium</Link> hosts a semifinal, making it a potential preview of later rounds.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">UEFA Rivals &amp; Knockout Stage Matchups</h2>
                <p>
                  Spain will need to beat Europe&apos;s best again to lift the trophy:
                </p>
                <ul>
                  <li><Link href="/teams/england-world-cup-2026-tickets" className="text-blue-600 hover:underline">England</Link> — Euro 2024 final rematch potential. England will want revenge.</li>
                  <li><Link href="/teams/france-world-cup-2026-tickets" className="text-blue-600 hover:underline">France</Link> — Classic rivalry between two possession-based philosophies.</li>
                  <li><Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-600 hover:underline">Germany</Link> — Euro 2024 quarterfinal drama still fresh.</li>
                  <li><Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-600 hover:underline">Portugal</Link> — Iberian derby on the biggest stage.</li>
                  <li><Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-600 hover:underline">Netherlands</Link> — 2010 World Cup Final rematch?</li>
                  <li><Link href="/teams/italy-world-cup-2026-tickets" className="text-blue-600 hover:underline">Italy</Link> — Memories of Euro 2020 semifinal victory.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">World Cup History</h2>
                <p>
                  Spain&apos;s World Cup glory came in 2010, when they won their first title in South Africa with Andrés Iniesta&apos;s extra-time winner against the <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-600 hover:underline">Netherlands</Link>. That team also won Euro 2008 and 2012, establishing Spain as the dominant force in world football. The 2026 generation aims to match that legacy.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">How to Buy Spain Tickets</h2>
                <p>
                  Spain&apos;s passionate fanbase travels in numbers, and matches in cities with large Hispanic populations (Miami, Dallas) will see incredible atmospheres. We compare prices from Ticketmaster, StubHub, Viagogo, and SeatGeek. Group stage tickets start from approximately $130. The Spain vs Uruguay clash is expected to command premium prices.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-600" />
                  Buy Spain Tickets
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
                  <div className="flex items-center gap-2 text-yellow-600 text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>Euro champs = high demand!</span>
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
                  <span className="text-slate-600">Recent Trophy</span>
                  <span className="font-medium">Euro 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group H Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/spain-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium">
                  <span>🇪🇸</span> Spain
                  <Badge className="ml-auto bg-yellow-500 text-xs">Euro Champs</Badge>
                </Link>
                <Link href="/teams/cape-verde-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇻</span> Cape Verde
                </Link>
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇸🇦</span> Saudi Arabia
                </Link>
                <Link href="/teams/uruguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇺🇾</span> Uruguay
                  <Badge className="ml-auto bg-slate-400 text-xs">2x Champs</Badge>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
