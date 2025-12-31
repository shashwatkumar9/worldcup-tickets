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
  title: "Canada World Cup 2026 Tickets | Host Nation",
  description:
    "Buy Canada FIFA World Cup 2026 tickets. Watch Les Rouges compete at home in Group B. Davies, David, match schedule & ticket prices from $115.",
  keywords: [
    "Canada World Cup 2026 tickets",
    "Les Rouges World Cup tickets",
    "Alphonso Davies World Cup",
    "Canada vs Qatar tickets",
    "Canada football tickets",
    "Canadian national team tickets",
  ],
}

const teamInfo = {
  name: "Canada",
  flag: "🇨🇦",
  confederation: "CONCACAF",
  fifaRanking: 40,
  worldCupAppearances: 2,
  lastAppearance: 2022,
  group: "B",
  groupOpponents: ["Qatar", "Switzerland", "TBD (UEFA Playoff)"],
  nickname: "Les Rouges / CanMNT",
  coach: "Jesse Marsch",
  captain: "Alphonso Davies",
}

const keyPlayers = [
  { name: "Alphonso Davies", position: "Defender", club: "Bayern Munich", number: 19, star: true },
  { name: "Jonathan David", position: "Forward", club: "Lille", number: 9 },
  { name: "Tajon Buchanan", position: "Midfielder", club: "Inter Milan", number: 11 },
  { name: "Cyle Larin", position: "Forward", club: "Real Valladolid", number: 7 },
  { name: "Stephen Eustáquio", position: "Midfielder", club: "FC Porto", number: 8 },
  { name: "Milan Borjan", position: "Goalkeeper", club: "Red Star Belgrade", number: 18 },
]

const groupFixtures = [
  {
    match: "Canada vs TBD (UEFA)",
    date: "June 12, 2026",
    time: "5:00 PM ET",
    venue: "BMO Field",
    city: "Toronto",
    slug: "canada-vs-tbd-world-cup-2026-tickets",
  },
  {
    match: "Canada vs Qatar",
    date: "June 17, 2026",
    time: "2:00 PM ET",
    venue: "BC Place",
    city: "Vancouver",
    slug: "canada-vs-qatar-world-cup-2026-tickets",
  },
  {
    match: "Canada vs Switzerland",
    date: "June 22, 2026",
    time: "5:00 PM ET",
    venue: "BMO Field",
    city: "Toronto",
    slug: "canada-vs-switzerland-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 1986, result: "Group Stage", location: "Mexico" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 115, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 165, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 145, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 130, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function CanadaTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-red-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-red-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-red-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Canada</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-red-600 text-white flex items-center gap-1">
                  <Home className="h-3 w-3" /> HOST NATION
                </Badge>
                <Badge variant="outline" className="border-red-700 text-red-800">GROUP B</Badge>
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
                Canada hosts its first ever World Cup! With Bayern Munich star Alphonso Davies
                leading the charge, Les Rouges are ready to make history in Toronto and Vancouver.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Canada Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-red-700 text-red-800">
                  View Group B Fixtures
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
                  <p className="text-3xl font-bold text-red-600">2</p>
                  <p className="text-sm text-slate-600">Host Venues</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">2nd</p>
                  <p className="text-sm text-slate-600">WC Appearance</p>
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

            {/* Host Nation Banner */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900">First Time World Cup Host</h3>
                    <p className="text-sm text-red-700">
                      Canada hosts FIFA World Cup matches for the first time in history!
                      Matches in Toronto (BMO Field) and Vancouver (BC Place) will feature
                      incredible Canadian support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  Group B Match Schedule
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
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className="bg-slate-200 text-slate-700">
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>36-Year Wait:</strong> Canada returned to the World Cup in 2022 after
                    missing every tournament since 1986. The 2026 World Cup on home soil represents
                    a golden opportunity to advance past the group stage for the first time.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About Canada National Team</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The <strong>Canada men&apos;s national soccer team</strong> (French: Équipe du Canada de soccer masculin),
                  commonly known as Les Rouges or CanMNT, represents Canada in international soccer.
                </p>

                <h3>The Alphonso Davies Era</h3>
                <p>
                  The emergence of Alphonso Davies has transformed Canadian soccer. The Bayern Munich star,
                  one of the fastest players in the world, became the first Canadian to win the UEFA Champions
                  League. His presence gives Canada a world-class player capable of competing against any team.
                </p>

                <h3>Historic Qualification</h3>
                <p>
                  Canada qualified for the 2022 World Cup by topping the CONCACAF qualification table,
                  ahead of Mexico and the USA. Although they went out in the group stage in Qatar,
                  the experience gained will be invaluable for 2026.
                </p>

                <h3>Canadian Venues</h3>
                <p>
                  Canada will host 13 World Cup matches across two cities: Toronto (BMO Field) and
                  Vancouver (BC Place). Les Rouges will play two of their group matches in Toronto
                  and one in Vancouver, ensuring incredible home atmosphere for every game.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-600" />
                  Buy Canada Tickets
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
                    <span>High demand from Canadian fans!</span>
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
                  <span className="text-slate-600">WC Appearances</span>
                  <span className="font-medium">2 (1986, 2022)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group B Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/canada-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium">
                  <span>🇨🇦</span> Canada
                  <Badge className="ml-auto bg-red-600 text-xs">Host</Badge>
                </Link>
                <Link href="/teams/qatar-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇶🇦</span> Qatar
                  <Badge className="ml-auto bg-slate-400 text-xs">2022 Host</Badge>
                </Link>
                <Link href="/teams/switzerland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇭</span> Switzerland
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
