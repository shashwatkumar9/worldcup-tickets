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
  title: "England World Cup 2026 Tickets | Three Lions",
  description:
    "Buy England FIFA World Cup 2026 tickets. Watch Bellingham and the Three Lions in Group L. Match schedule, key players & ticket prices from $140.",
  keywords: [
    "England World Cup 2026 tickets",
    "England vs Ghana tickets",
    "England vs Panama tickets",
    "England vs Croatia tickets",
    "Three Lions World Cup",
    "England football tickets",
  ],
}

const teamInfo = {
  name: "England",
  flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  confederation: "UEFA",
  fifaRanking: 4,
  worldCupTitles: 1,
  lastTitle: 1966,
  group: "L",
  groupOpponents: ["Ghana", "Panama", "Croatia"],
  nickname: "Three Lions",
  coach: "Thomas Tuchel",
  captain: "Harry Kane",
}

const keyPlayers = [
  { name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Harry Kane", position: "Forward", club: "Bayern Munich", number: 9 },
  { name: "Phil Foden", position: "Midfielder", club: "Manchester City", number: 7 },
  { name: "Bukayo Saka", position: "Forward", club: "Arsenal", number: 17 },
  { name: "Declan Rice", position: "Midfielder", club: "Arsenal", number: 4 },
  { name: "Trent Alexander-Arnold", position: "Defender", club: "Liverpool", number: 66 },
]

const groupFixtures = [
  {
    match: "England vs Ghana",
    date: "June 13, 2026",
    time: "5:00 PM ET",
    venue: "MetLife Stadium",
    city: "New York/NJ",
    slug: "england-vs-ghana-world-cup-2026-tickets",
  },
  {
    match: "England vs Panama",
    date: "June 18, 2026",
    time: "8:00 PM ET",
    venue: "Lincoln Financial Field",
    city: "Philadelphia",
    slug: "england-vs-panama-world-cup-2026-tickets",
  },
  {
    match: "England vs Croatia",
    date: "June 23, 2026",
    time: "5:00 PM ET",
    venue: "AT&T Stadium",
    city: "Dallas",
    slug: "england-vs-croatia-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Quarter-finals", location: "Qatar" },
  { year: 2018, result: "Fourth Place", location: "Russia" },
  { year: 2014, result: "Group Stage", location: "Brazil" },
  { year: 2010, result: "Round of 16", location: "South Africa" },
  { year: 2006, result: "Quarter-finals", location: "Germany" },
  { year: 2002, result: "Quarter-finals", location: "Korea/Japan" },
  { year: 1966, result: "Champions", location: "England" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 140, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 175, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 160, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 150, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function EnglandTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white via-red-600 to-white py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-red-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-red-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-red-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">England</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-red-600 text-white">EURO FINALISTS</Badge>
                <Badge variant="outline" className="border-red-700 text-red-800">GROUP L</Badge>
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
                The home of football seeks to end 60 years of hurt. With a golden generation
                led by Jude Bellingham, England enter 2026 as serious contenders.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy England Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-red-700 text-red-800">
                  View Group L Fixtures
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
                  <p className="text-sm text-slate-600">Last Title</p>
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
                  Group L Match Schedule
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
                  <p className="font-semibold text-yellow-800">Featured Match: England vs Croatia</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    A repeat of the 2018 World Cup semi-final. High demand expected for this Group L showdown!
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
                            : entry.result === "Fourth Place"
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

            <Card>
              <CardHeader>
                <CardTitle>About England National Team</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The <strong>England national football team</strong> represents England in international football
                  and is controlled by The Football Association. England is the birthplace of football and won
                  their only World Cup on home soil in 1966.
                </p>

                <h3>2026 World Cup Prospects</h3>
                <p>
                  Under new manager Thomas Tuchel, England are building towards 2026 with their most talented
                  squad in decades. The emergence of Jude Bellingham as a world-class talent, combined with
                  experienced players like Harry Kane and emerging stars like Phil Foden and Bukayo Saka,
                  makes England genuine contenders.
                </p>

                <h3>The Quest to End 60 Years of Hurt</h3>
                <p>
                  Since winning the 1966 World Cup at Wembley, England have come agonizingly close but never
                  lifted another major trophy. The 2026 World Cup represents arguably their best chance,
                  with many players entering their prime years.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-600" />
                  Buy England Tickets
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
                    <span>Huge UK demand - book early!</span>
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
                <CardTitle>Group L Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium">
                  <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England
                </Link>
                <Link href="/teams/ghana-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇬🇭</span> Ghana
                </Link>
                <Link href="/teams/panama-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇵🇦</span> Panama
                </Link>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇭🇷</span> Croatia
                  <Badge className="ml-auto bg-slate-400 text-xs">2018 Finalists</Badge>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
