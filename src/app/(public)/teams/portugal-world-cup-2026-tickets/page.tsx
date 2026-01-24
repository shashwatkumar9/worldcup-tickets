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
  title: "Portugal World Cup 2026 Tickets | Ronaldo's Final World Cup?",
  description:
    "Buy Portugal FIFA World Cup 2026 tickets. Watch Cristiano Ronaldo in potentially his final World Cup. Group K, match schedule & ticket prices from $140.",
  keywords: [
    "Portugal World Cup 2026 tickets",
    "Ronaldo World Cup 2026",
    "Portugal vs Colombia tickets",
    "A Seleção World Cup",
    "Portugal football tickets",
    "Cristiano Ronaldo last World Cup",
  ],
}

const teamInfo = {
  name: "Portugal",
  flag: "🇵🇹",
  confederation: "UEFA",
  fifaRanking: 6,
  worldCupTitles: 0,
  bestFinish: "Third Place (1966)",
  group: "K",
  groupOpponents: ["Colombia", "Uzbekistan", "TBD (Playoff)"],
  nickname: "A Seleção",
  coach: "Roberto Martínez",
  captain: "Cristiano Ronaldo",
}

const keyPlayers = [
  { name: "Cristiano Ronaldo", position: "Forward", club: "Al-Nassr", number: 7, star: true },
  { name: "Bruno Fernandes", position: "Midfielder", club: "Manchester United", number: 8 },
  { name: "Rafael Leão", position: "Forward", club: "AC Milan", number: 17 },
  { name: "Bernardo Silva", position: "Midfielder", club: "Manchester City", number: 10 },
  { name: "Rúben Dias", position: "Defender", club: "Manchester City", number: 4 },
  { name: "Diogo Costa", position: "Goalkeeper", club: "FC Porto", number: 1 },
]

const groupFixtures = [
  {
    match: "Portugal vs Colombia",
    date: "June 14, 2026",
    time: "2:00 PM ET",
    venue: "MetLife Stadium",
    city: "New York/NJ",
    slug: "portugal-vs-colombia-world-cup-2026-tickets",
  },
  {
    match: "Portugal vs Uzbekistan",
    date: "June 19, 2026",
    time: "5:00 PM ET",
    venue: "Gillette Stadium",
    city: "Boston",
    slug: "portugal-vs-uzbekistan-world-cup-2026-tickets",
  },
  {
    match: "Portugal vs TBD",
    date: "June 24, 2026",
    time: "8:00 PM ET",
    venue: "Lincoln Financial Field",
    city: "Philadelphia",
    slug: "portugal-group-match-3-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Quarter-finals", location: "Qatar" },
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2014, result: "Group Stage", location: "Brazil" },
  { year: 2010, result: "Round of 16", location: "South Africa" },
  { year: 2006, result: "Fourth Place", location: "Germany" },
  { year: 1966, result: "Third Place", location: "England" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 140, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 185, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 165, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 155, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function PortugalTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-red-600 to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-white">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Portugal</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-500 text-black">EURO 2016 CHAMPIONS</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP K</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-white">
                    Portugal World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-200 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-200">
                Could this be Cristiano Ronaldo&apos;s final World Cup? At 41, the greatest
                goalscorer in history seeks his first World Cup trophy in what may be his last tournament.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Portugal Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Group K Fixtures
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
                  <p className="text-3xl font-bold text-red-600">0</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">3rd</p>
                  <p className="text-sm text-slate-600">Best Finish (1966)</p>
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

            {/* Ronaldo Banner */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-yellow-500 flex items-center justify-center text-2xl">
                    ⚽
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-900">Ronaldo&apos;s Final Chapter?</h3>
                    <p className="text-sm text-yellow-800">
                      Cristiano Ronaldo will be 41 at the 2026 World Cup. With 898+ career goals and
                      every major honor except a World Cup, this could be his last chance to complete
                      football&apos;s ultimate collection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  Group K Match Schedule
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
                        entry.result === "Third Place" || entry.result === "Fourth Place"
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
                          entry.result === "Third Place" || entry.result === "Fourth Place"
                            ? "bg-yellow-500"
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

            {/* Team Info - Comprehensive Article */}
            <Card>
              <CardHeader>
                <CardTitle>Portugal World Cup 2026: Complete Guide to Ronaldo&apos;s Final Quest for Glory</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  The <strong>Portugal national football team</strong> (Portuguese: Seleção Portuguesa de Futebol) enters the <Link href="/fifa-world-cup-2026-tickets" className="text-blue-600 hover:underline">2026 FIFA World Cup</Link> with arguably their most complete squad ever, yet missing the one trophy that has eluded even their greatest players: the World Cup. For 41-year-old Cristiano Ronaldo, this is likely his final chance to lift football&apos;s ultimate prize.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">2026 World Cup Prospects</h2>
                <p>
                  Under Roberto Martínez, Portugal has evolved into a tactical powerhouse. The squad blends Ronaldo&apos;s experience with an extraordinary new generation: Rafael Leão (AC Milan), Bruno Fernandes (Manchester United), Bernardo Silva (Manchester City), João Félix, and Vitinha provide creative excellence. In defense, Rúben Dias marshals a solid backline.
                </p>
                <p>
                  Ronaldo, now playing in Saudi Arabia, has broken nearly every international record — most goals (130+), most appearances, most hat-tricks. A World Cup would complete his legendary status.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">Group K Analysis</h2>
                <p>
                  Portugal has been drawn into <Link href="/fixtures/group-k-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group K</Link> alongside <Link href="/teams/colombia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Colombia</Link>, <Link href="/teams/uzbekistan-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uzbekistan</Link>, and a playoff winner:
                </p>
                <ul>
                  <li><strong><Link href="/teams/colombia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Colombia</Link></strong> — The standout match! Colombia&apos;s attacking talent against Portugal&apos;s quality. A potential group stage classic at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link>.</li>
                  <li><strong><Link href="/teams/uzbekistan-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uzbekistan</Link></strong> — Making their World Cup debut. The Asian side will bring determination and organized defense.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">Match Venues</h2>
                <ul>
                  <li><Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> (New York/NJ) — vs Colombia (at the Final venue!)</li>
                  <li><Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Gillette Stadium</Link> (Boston) — vs Uzbekistan</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">UEFA Rivals</h2>
                <ul>
                  <li><Link href="/teams/france-world-cup-2026-tickets" className="text-blue-600 hover:underline">France</Link> — Euro 2016 final victory, but recent losses</li>
                  <li><Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-600 hover:underline">Spain</Link> — The Iberian derby is always intense</li>
                  <li><Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-600 hover:underline">Germany</Link> — Euro 2024 elimination still stings</li>
                  <li><Link href="/teams/england-world-cup-2026-tickets" className="text-blue-600 hover:underline">England</Link> — Historic rivalry with Ronaldo connections</li>
                  <li><Link href="/teams/belgium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Belgium</Link> — Roberto Martínez&apos;s former team</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">World Cup History</h2>
                <p>
                  Portugal&apos;s best World Cup finish was third place in 1966, led by the legendary Eusébio. Despite producing incredible talents like Figo, Ronaldo, and the Euro 2016-winning generation, the World Cup has remained elusive. 2026 represents their best chance with this golden generation.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">How to Buy Portugal Tickets</h2>
                <p>
                  Portugal matches draw massive demand from their passionate fanbase. The Portugal vs Colombia clash at MetLife Stadium is expected to be one of the hottest tickets. We compare prices from Ticketmaster, StubHub, Viagogo, and SeatGeek. Group stage tickets start from approximately $140.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-600" />
                  Buy Portugal Tickets
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
                    <span>Ronaldo effect = extreme demand!</span>
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
                  <span className="text-slate-600">Major Trophy</span>
                  <span className="font-medium">Euro 2016</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group K Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/portugal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium">
                  <span>🇵🇹</span> Portugal
                </Link>
                <Link href="/teams/colombia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇴</span> Colombia
                </Link>
                <Link href="/teams/uzbekistan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇺🇿</span> Uzbekistan
                </Link>
                <div className="flex items-center gap-2 p-2 text-slate-400">
                  <span>🏳️</span> TBD (Playoff)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
