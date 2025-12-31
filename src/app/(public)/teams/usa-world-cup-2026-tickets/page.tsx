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
  title: "USA World Cup 2026 Tickets | Host Nation",
  description:
    "Buy USA FIFA World Cup 2026 tickets. Watch the USMNT compete on home soil in Group D. Pulisic, Reyna, match schedule & ticket prices from $125.",
  keywords: [
    "USA World Cup 2026 tickets",
    "USMNT World Cup tickets",
    "USA vs Paraguay tickets",
    "Christian Pulisic World Cup",
    "USA football tickets",
    "Team USA World Cup",
  ],
}

const teamInfo = {
  name: "United States",
  flag: "🇺🇸",
  confederation: "CONCACAF",
  fifaRanking: 11,
  worldCupTitles: 0,
  bestFinish: "Third Place (1930)",
  group: "D",
  groupOpponents: ["Paraguay", "Australia", "TBD (UEFA Playoff)"],
  nickname: "USMNT / Yanks",
  coach: "Mauricio Pochettino",
  captain: "Christian Pulisic",
}

const keyPlayers = [
  { name: "Christian Pulisic", position: "Forward", club: "AC Milan", number: 10, star: true },
  { name: "Gio Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7 },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
  { name: "Tyler Adams", position: "Midfielder", club: "Bournemouth", number: 4 },
  { name: "Sergiño Dest", position: "Defender", club: "PSV", number: 2 },
  { name: "Matt Turner", position: "Goalkeeper", club: "Crystal Palace", number: 1 },
]

const groupFixtures = [
  {
    match: "USA vs Paraguay",
    date: "June 12, 2026",
    time: "8:00 PM ET",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    slug: "usa-vs-paraguay-world-cup-2026-tickets",
  },
  {
    match: "USA vs Australia",
    date: "June 17, 2026",
    time: "5:00 PM ET",
    venue: "Levi's Stadium",
    city: "San Francisco",
    slug: "usa-vs-australia-world-cup-2026-tickets",
  },
  {
    match: "USA vs TBD (UEFA)",
    date: "June 22, 2026",
    time: "8:00 PM ET",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    slug: "usa-group-match-3-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Round of 16", location: "Qatar" },
  { year: 2014, result: "Round of 16", location: "Brazil" },
  { year: 2010, result: "Round of 16", location: "South Africa" },
  { year: 2002, result: "Quarter-finals", location: "Korea/Japan" },
  { year: 1994, result: "Round of 16", location: "USA" },
  { year: 1930, result: "Third Place", location: "Uruguay" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 125, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 200, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 175, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 160, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function USATicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-blue-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-blue-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">USA</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-blue-700 text-white flex items-center gap-1">
                  <Home className="h-3 w-3" /> HOST NATION
                </Badge>
                <Badge variant="outline" className="border-red-700 text-red-800">GROUP D</Badge>
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
                The host nation returns to the World Cup on home soil! With passionate home
                support across 11 cities, the USMNT will have the backing of a nation.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy USA Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-red-700 text-red-800">
                  View Group D Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-700">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-700">11</p>
                  <p className="text-sm text-slate-600">Host Venues</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-700">1930</p>
                  <p className="text-sm text-slate-600">Best Finish (3rd)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-700">Group {teamInfo.group}</p>
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

            {/* Host Nation Banner */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Home Advantage</h3>
                    <p className="text-sm text-blue-700">
                      USA will play all group matches in the Western US with massive home support.
                      Expect electric atmospheres at SoFi Stadium and Levi&apos;s Stadium!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-700" />
                  Group D Match Schedule
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
                  <Users className="h-5 w-5 text-blue-700" />
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
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
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
                  <Trophy className="h-5 w-5 text-blue-700" />
                  World Cup History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        entry.result === "Third Place"
                          ? "bg-yellow-50 border border-yellow-200"
                          : entry.location === "USA"
                          ? "bg-blue-50 border border-blue-200"
                          : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                        {entry.location === "USA" && (
                          <Badge variant="outline" className="text-xs">Host</Badge>
                        )}
                      </div>
                      <Badge
                        className={
                          entry.result === "Third Place"
                            ? "bg-yellow-500"
                            : entry.result === "Quarter-finals"
                            ? "bg-blue-500"
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
                <CardTitle>About USA National Team</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The <strong>United States men&apos;s national soccer team</strong> (USMNT) represents
                  the United States in international soccer and is controlled by the United States Soccer Federation.
                </p>

                <h3>2026 World Cup - Once in a Lifetime</h3>
                <p>
                  The 2026 World Cup represents a historic opportunity for US soccer. As hosts, the USMNT
                  will benefit from passionate home support across the country. The team features the most
                  talented generation of American players ever, with many playing at top European clubs.
                </p>

                <h3>The Golden Generation</h3>
                <p>
                  Christian Pulisic (AC Milan), Weston McKennie (Juventus), Gio Reyna (Borussia Dortmund),
                  and Tyler Adams form the core of what many call America&apos;s &quot;Golden Generation.&quot;
                  By 2026, these players will be in their prime years and hungry to make history on home soil.
                </p>

                <h3>Home Support</h3>
                <p>
                  With 11 venues in the USA, American fans will have unprecedented access to World Cup matches.
                  The USMNT will play group matches on the West Coast (Los Angeles and San Francisco),
                  setting up what could be historic nights for US soccer.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-700" />
                  Buy USA Tickets
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
                    <span>EXTREME DEMAND - Tickets selling fast!</span>
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
                  <span className="text-slate-600">Best WC Finish</span>
                  <span className="font-medium">3rd Place (1930)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group D Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 font-medium">
                  <span>🇺🇸</span> USA
                  <Badge className="ml-auto bg-blue-700 text-xs">Host</Badge>
                </Link>
                <Link href="/teams/paraguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇵🇾</span> Paraguay
                </Link>
                <Link href="/teams/australia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇦🇺</span> Australia
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
