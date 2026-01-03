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
  title: "France World Cup 2026 Tickets | 2022 Finalists",
  description:
    "Buy France FIFA World Cup 2026 tickets. Watch Mbappé and Les Bleus compete in Group I. Match schedule, key players & ticket prices from $145.",
  keywords: [
    "France World Cup 2026 tickets",
    "France vs Senegal tickets",
    "France vs Norway tickets",
    "Mbappé World Cup 2026",
    "Les Bleus tickets",
    "France football tickets",
  ],
}

const teamInfo = {
  name: "France",
  flag: "🇫🇷",
  confederation: "UEFA",
  fifaRanking: 2,
  worldCupTitles: 2,
  lastTitle: 2018,
  group: "I",
  groupOpponents: ["Senegal", "Norway", "TBD (Playoff)"],
  nickname: "Les Bleus",
  coach: "Didier Deschamps",
  captain: "Kylian Mbappé",
}

const keyPlayers = [
  { name: "Kylian Mbappé", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Antoine Griezmann", position: "Forward", club: "Atletico Madrid", number: 7 },
  { name: "Aurélien Tchouaméni", position: "Midfielder", club: "Real Madrid", number: 8 },
  { name: "Eduardo Camavinga", position: "Midfielder", club: "Real Madrid", number: 6 },
  { name: "Mike Maignan", position: "Goalkeeper", club: "AC Milan", number: 1 },
  { name: "William Saliba", position: "Defender", club: "Arsenal", number: 4 },
]

const groupFixtures = [
  {
    match: "France vs Senegal",
    date: "June 14, 2026",
    time: "5:00 PM ET",
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    slug: "france-vs-senegal-world-cup-2026-tickets",
  },
  {
    match: "France vs Norway",
    date: "June 19, 2026",
    time: "8:00 PM ET",
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    slug: "france-vs-norway-world-cup-2026-tickets",
  },
  {
    match: "France vs TBD",
    date: "June 24, 2026",
    time: "5:00 PM ET",
    venue: "Lincoln Financial Field",
    city: "Philadelphia",
    slug: "france-group-match-3-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Runners-up", location: "Qatar" },
  { year: 2018, result: "Champions", location: "Russia" },
  { year: 2014, result: "Quarter-finals", location: "Brazil" },
  { year: 2010, result: "Group Stage", location: "South Africa" },
  { year: 2006, result: "Runners-up", location: "Germany" },
  { year: 1998, result: "Champions", location: "France" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 180, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 165, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 155, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function FranceTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-blue-800">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-blue-800">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">France</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-blue-600 text-white">2022 FINALISTS</Badge>
                <Badge variant="outline" className="border-blue-700 text-blue-800">GROUP I</Badge>
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
                The 2018 champions and 2022 runners-up return with Kylian Mbappé leading
                a star-studded squad seeking redemption after their heartbreaking final loss to Argentina.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy France Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-blue-800">
                  View Group I Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-600">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">Group {teamInfo.group}</p>
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
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Group I Match Schedule
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
                  <Users className="h-5 w-5 text-blue-600" />
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
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
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
                  <Trophy className="h-5 w-5 text-blue-600" />
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
                            : entry.result === "Runners-up"
                            ? "bg-slate-400"
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
                <CardTitle>France World Cup 2026: Complete Guide to Les Bleus&apos; Quest for Redemption</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  The <strong>France national football team</strong> (French: Équipe de France de football) enters the <Link href="/fifa-world-cup-2026-tickets" className="text-blue-600 hover:underline">2026 FIFA World Cup</Link> seeking redemption after the heartbreak of losing the 2022 final to <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina</Link> on penalties. With two World Cup titles (1998, 2018) and a squad packed with elite talent, Les Bleus are among the favorites in North America.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">2026 World Cup Prospects</h2>
                <p>
                  France possess arguably the deepest squad in world football. Kylian Mbappé, now at Real Madrid, leads an attack capable of scoring against anyone. At 27, Mbappé will be at the absolute peak of his powers — already a World Cup winner (2018) and scorer of a hat-trick in the 2022 final.
                </p>
                <p>
                  The midfield talent is extraordinary, with Antoine Griezmann providing creativity, Aurélien Tchouaméni controlling the tempo, and emerging stars like Eduardo Camavinga and Warren Zaïre-Emery pushing for places. In defense, the experienced core of Ibrahima Konaté and William Saliba provides stability.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">Group I Analysis</h2>
                <p>
                  France has been drawn into <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group I</Link> alongside <Link href="/teams/senegal-world-cup-2026-tickets" className="text-blue-600 hover:underline">Senegal</Link>, a UEFA playoff winner, and <Link href="/teams/norway-world-cup-2026-tickets" className="text-blue-600 hover:underline">Norway</Link>. The fixtures promise excitement:
                </p>
                <ul>
                  <li><strong><Link href="/teams/senegal-world-cup-2026-tickets" className="text-blue-600 hover:underline">Senegal</Link></strong> — The African champions with pace and physicality. A rematch of memorable past encounters.</li>
                  <li><strong><Link href="/teams/norway-world-cup-2026-tickets" className="text-blue-600 hover:underline">Norway</Link></strong> — Featuring Erling Haaland! The France vs Norway clash could be a Mbappé vs Haaland showdown for the ages.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">Match Venues</h2>
                <p>France&apos;s group stage matches will showcase their quality at top American venues:</p>
                <ul>
                  <li><Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">Lincoln Financial Field</Link> (Philadelphia) — vs Senegal</li>
                  <li><Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> (New York/NJ) — vs Norway (Mbappé vs Haaland at the Final venue!)</li>
                </ul>
                <p>
                  Playing at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> will give France a taste of the venue where they hope to lift the trophy on July 19.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">UEFA Rivals &amp; Potential Clashes</h2>
                <p>
                  Europe&apos;s elite nations all aim to stop France. Potential knockout stage opponents include:
                </p>
                <ul>
                  <li><Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-600 hover:underline">Spain</Link> — Euro 2024 champions with their brilliant young talents</li>
                  <li><Link href="/teams/england-world-cup-2026-tickets" className="text-blue-600 hover:underline">England</Link> — A potential semifinal clash with the Three Lions</li>
                  <li><Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-600 hover:underline">Germany</Link> — Always dangerous in major tournaments</li>
                  <li><Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-600 hover:underline">Portugal</Link> — Cristiano Ronaldo&apos;s final World Cup?</li>
                  <li><Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-600 hover:underline">Netherlands</Link> — Tactical battles with the Dutch</li>
                  <li><Link href="/teams/belgium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Belgium</Link> — Their golden generation&apos;s last chance</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">World Cup History</h2>
                <p>
                  France has won the World Cup twice — on home soil in 1998 with Zidane&apos;s brilliance, and in Russia 2018 with a young Mbappé emerging as a superstar. They also reached the 2006 and 2022 finals, making them one of the most consistent performers in World Cup history.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">How to Buy France Tickets</h2>
                <p>
                  France matches draw massive demand from their passionate fanbase. We compare prices from Ticketmaster, StubHub, Viagogo, and SeatGeek. Group stage tickets start from approximately $145, with premium prices for the France vs Norway clash featuring the Mbappé-Haaland showdown.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-600" />
                  Buy France Tickets
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
                    <span>Very high demand for France matches!</span>
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
                  <span className="text-slate-600">Nickname</span>
                  <span className="font-medium">{teamInfo.nickname}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group I Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 font-medium">
                  <span>🇫🇷</span> France
                  <Badge className="ml-auto bg-blue-600 text-xs">2018 Champs</Badge>
                </Link>
                <Link href="/teams/senegal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇸🇳</span> Senegal
                </Link>
                <Link href="/teams/norway-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇳🇴</span> Norway
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
