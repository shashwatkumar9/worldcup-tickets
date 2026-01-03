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
  title: "Germany World Cup 2026 Tickets | 4x World Champions",
  description:
    "Buy Germany FIFA World Cup 2026 tickets. Watch Die Mannschaft compete in Group E. Match schedule, Musiala, key players & ticket prices from $130.",
  keywords: [
    "Germany World Cup 2026 tickets",
    "Germany vs Ivory Coast tickets",
    "Germany vs Ecuador tickets",
    "Musiala World Cup 2026",
    "Die Mannschaft tickets",
    "Germany football tickets",
  ],
}

const teamInfo = {
  name: "Germany",
  flag: "🇩🇪",
  confederation: "UEFA",
  fifaRanking: 3,
  worldCupTitles: 4,
  lastTitle: 2014,
  group: "E",
  groupOpponents: ["Curacao", "Ivory Coast", "Ecuador"],
  nickname: "Die Mannschaft",
  coach: "Julian Nagelsmann",
  captain: "Joshua Kimmich",
}

const keyPlayers = [
  { name: "Jamal Musiala", position: "Midfielder", club: "Bayern Munich", number: 10, star: true },
  { name: "Florian Wirtz", position: "Midfielder", club: "Bayer Leverkusen", number: 7 },
  { name: "Kai Havertz", position: "Forward", club: "Arsenal", number: 9 },
  { name: "Joshua Kimmich", position: "Midfielder", club: "Bayern Munich", number: 6 },
  { name: "Antonio Rüdiger", position: "Defender", club: "Real Madrid", number: 2 },
  { name: "Manuel Neuer", position: "Goalkeeper", club: "Bayern Munich", number: 1 },
]

const groupFixtures = [
  {
    match: "Germany vs Curacao",
    date: "June 12, 2026",
    time: "5:00 PM ET",
    venue: "Arrowhead Stadium",
    city: "Kansas City",
    slug: "germany-vs-curacao-world-cup-2026-tickets",
  },
  {
    match: "Germany vs Ivory Coast",
    date: "June 17, 2026",
    time: "8:00 PM ET",
    venue: "NRG Stadium",
    city: "Houston",
    slug: "germany-vs-ivory-coast-world-cup-2026-tickets",
  },
  {
    match: "Germany vs Ecuador",
    date: "June 22, 2026",
    time: "5:00 PM ET",
    venue: "AT&T Stadium",
    city: "Dallas",
    slug: "germany-vs-ecuador-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 2018, result: "Group Stage", location: "Russia" },
  { year: 2014, result: "Champions", location: "Brazil" },
  { year: 2010, result: "Third Place", location: "South Africa" },
  { year: 2006, result: "Third Place", location: "Germany" },
  { year: 2002, result: "Runners-up", location: "Korea/Japan" },
  { year: 1990, result: "Champions", location: "Italy" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 130, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 165, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 150, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 140, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function GermanyTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-red-600 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-white">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Germany</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-400 text-black">4X WORLD CHAMPIONS</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP E</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-white">
                    {teamInfo.name}
                  </h1>
                  <p className="text-xl text-slate-200 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-200">
                Four-time world champions seeking redemption after back-to-back group stage exits.
                A new generation led by Musiala and Wirtz brings renewed hope for 2026.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-slate-100">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Germany Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Group E Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-slate-900">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">Group {teamInfo.group}</p>
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
                  <Calendar className="h-5 w-5 text-slate-900" />
                  Group E Match Schedule
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
                  <Users className="h-5 w-5 text-slate-900" />
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
                        <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
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
                  <Trophy className="h-5 w-5 text-slate-900" />
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
                          : entry.result === "Group Stage"
                          ? "bg-red-50 border border-red-200"
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
                            : entry.result === "Group Stage"
                            ? "bg-red-500"
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
                <CardTitle>Germany World Cup 2026: Complete Guide to Die Mannschaft&apos;s Redemption Quest</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  The <strong>Germany national football team</strong> (German: Deutsche Fußballnationalmannschaft) enters the <Link href="/fifa-world-cup-2026-tickets" className="text-blue-600 hover:underline">2026 FIFA World Cup</Link> seeking redemption after consecutive group-stage exits in 2018 and 2022. With four World Cup titles (1954, 1974, 1990, 2014), Germany remains one of the most successful nations in tournament history, and their new golden generation is ready to restore national pride.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">2026 World Cup Prospects</h2>
                <p>
                  Under Julian Nagelsmann, Germany has undergone a complete transformation. The Musiala-Wirtz axis is the most exciting attacking partnership in world football — Jamal Musiala&apos;s dribbling magic combined with Florian Wirtz&apos;s creative brilliance gives Germany genuine star power.
                </p>
                <p>
                  The experienced core includes Ilkay Gündogan, Joshua Kimmich, and Antonio Rüdiger, providing the backbone for the new generation to flourish. Manuel Neuer may have retired, but Marc-André ter Stegen is world-class.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">Group E Analysis</h2>
                <p>
                  Germany has been drawn into <Link href="/fixtures/group-e-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group E</Link> alongside <Link href="/teams/curacao-world-cup-2026-tickets" className="text-blue-600 hover:underline">Curaçao</Link>, <Link href="/teams/ivory-coast-world-cup-2026-tickets" className="text-blue-600 hover:underline">Ivory Coast</Link>, and <Link href="/teams/ecuador-world-cup-2026-tickets" className="text-blue-600 hover:underline">Ecuador</Link>:
                </p>
                <ul>
                  <li><strong><Link href="/teams/curacao-world-cup-2026-tickets" className="text-blue-600 hover:underline">Curaçao</Link></strong> — Making their World Cup debut! The Caribbean minnows will create a party atmosphere.</li>
                  <li><strong><Link href="/teams/ivory-coast-world-cup-2026-tickets" className="text-blue-600 hover:underline">Ivory Coast</Link></strong> — AFCON champions with pace and power. The Elephants are dangerous.</li>
                  <li><strong><Link href="/teams/ecuador-world-cup-2026-tickets" className="text-blue-600 hover:underline">Ecuador</Link></strong> — South American rising force with altitude-hardened fitness.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">Match Venues</h2>
                <ul>
                  <li><Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium</Link> (Miami) — vs Curaçao</li>
                  <li><Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">SoFi Stadium</Link> (Los Angeles) — vs Ivory Coast</li>
                  <li><Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium</Link> (Dallas) — vs Ecuador</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">UEFA Rivals</h2>
                <ul>
                  <li><Link href="/teams/france-world-cup-2026-tickets" className="text-blue-600 hover:underline">France</Link> — Les Bleus stopped Germany in Euro 2020/2021</li>
                  <li><Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-600 hover:underline">Spain</Link> — Euro 2024 heartbreak in extra time</li>
                  <li><Link href="/teams/england-world-cup-2026-tickets" className="text-blue-600 hover:underline">England</Link> — Historic rivalry since 1966</li>
                  <li><Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-600 hover:underline">Netherlands</Link> — Classic European rivalry</li>
                  <li><Link href="/teams/italy-world-cup-2026-tickets" className="text-blue-600 hover:underline">Italy</Link> — Tactical battles with the Azzurri</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">World Cup History</h2>
                <p>
                  Germany is one of the giants of World Cup football with 4 titles. The &quot;Miracle of Bern&quot; (1954), total football at home (1974), reunification glory (1990), and the Götze moment in 2014 — Germany&apos;s World Cup legacy is unmatched. The 2026 generation aims to add a fifth star.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5" />
                  Buy Germany Tickets
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
                    <span>High demand from German fans!</span>
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
                  <span className="text-slate-600">WC Titles</span>
                  <span className="font-medium">4 (1954, 74, 90, 2014)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group E Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/germany-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-slate-100 font-medium">
                  <span>🇩🇪</span> Germany
                  <Badge className="ml-auto bg-yellow-500 text-xs">4x Champs</Badge>
                </Link>
                <Link href="/teams/curacao-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇼</span> Curacao
                </Link>
                <Link href="/teams/ivory-coast-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇮</span> Ivory Coast
                </Link>
                <Link href="/teams/ecuador-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇪🇨</span> Ecuador
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
