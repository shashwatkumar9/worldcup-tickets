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
  Clock,
  Trophy,
  Users,
  Star,
  TrendingUp,
  Tv,
  Flag,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Canada vs Italy Tickets | World Cup 2026 Group B | BMO Field Toronto",
  description: "Buy Canada vs Italy World Cup 2026 tickets at BMO Field, Toronto. June 12, 2026. Canada's home opener against four-time champions Italy!",
  keywords: [
    "Canada vs Italy tickets",
    "World Cup 2026 Toronto tickets",
    "Canada World Cup 2026 tickets",
    "Italy World Cup 2026 tickets",
    "BMO Field World Cup tickets",
    "FIFA World Cup 2026 Canada",
    "Toronto World Cup tickets",
    "Les Rouges vs Azzurri tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Canada", flag: "🇨🇦", code: "CAN", nickname: "Les Rouges" },
  awayTeam: { name: "Italy", flag: "🇮🇹", code: "ITA", nickname: "Gli Azzurri" },
  date: "June 12, 2026",
  time: "3:00 PM ET",
  venue: "BMO Field",
  city: "Toronto, Canada",
  group: "B",
  matchNumber: 3,
  round: "Group Stage",
  special: "CANADA HOME OPENER",
}

const canadaPlayers = [
  { name: "Alphonso Davies", position: "Defender", club: "Bayern Munich", number: 19, star: true },
  { name: "Jonathan David", position: "Forward", club: "Lille", number: 20, star: true },
  { name: "Cyle Larin", position: "Forward", club: "Real Valladolid", number: 17 },
  { name: "Milan Borjan", position: "Goalkeeper", club: "Red Star", number: 18 },
]

const italyPlayers = [
  { name: "Gianluigi Donnarumma", position: "Goalkeeper", club: "PSG", number: 1, star: true },
  { name: "Federico Chiesa", position: "Forward", club: "Liverpool", number: 14, star: true },
  { name: "Nicolo Barella", position: "Midfielder", club: "Inter Milan", number: 18 },
  { name: "Alessandro Bastoni", position: "Defender", club: "Inter Milan", number: 23 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 185, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 275, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 240, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 210, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2024, competition: "Friendly", result: "Italy 2-1 Canada", location: "Bologna" },
  { year: 2010, competition: "Friendly", result: "Italy 0-1 Canada", location: "Toronto" },
  { year: 2004, competition: "Friendly", result: "Italy 0-1 Canada", location: "Hamilton" },
]

export default function CanadaVsItalyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-white to-green-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/groups/group-b-world-cup-2026-tickets" className="hover:text-white">Group B</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Canada vs Italy</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-700 text-white text-lg px-4 py-1">
                <Home className="h-4 w-4 mr-2" />
                CANADA HOME OPENER
              </Badge>
              <Badge className="bg-white text-blue-800">GROUP B</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-red-600">Host Nation</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match 3</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-blue-600">4x Champions</Badge>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{matchInfo.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{matchInfo.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{matchInfo.venue}, {matchInfo.city}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-700 hover:bg-red-800">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Canada Home Opener Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group B Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Historic Match Banner */}
            <Card className="border-red-400 bg-gradient-to-r from-red-50 to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-700 flex items-center justify-center flex-shrink-0">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">Canada&apos;s Historic Home World Cup Opener</h3>
                    <p className="text-red-800 mt-2">
                      For the first time ever, Canada will play a World Cup match on home soil! This Group B clash against
                      four-time champions Italy at BMO Field in Toronto represents a milestone moment in Canadian football
                      history. With Alphonso Davies leading a golden generation of Canadian talent, this match captures the
                      unprecedented growth of the beautiful game in Canada.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-red-700" />
                  Complete Match Preview: Canada vs Italy
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026 Group B Showdown</h3>
                <p>
                  The <strong>Canada vs Italy World Cup 2026</strong> match is arguably the most anticipated fixture for Canadian
                  football fans in history. On <strong>June 12, 2026</strong> at <strong>BMO Field in Toronto</strong>, Canada
                  will play their first-ever home World Cup match against one of football&apos;s most storied nations. This
                  Group B encounter pits a rising football nation against four-time World Cup winners, creating a narrative
                  that encapsulates the tournament&apos;s spirit of dreams and ambition.
                </p>

                <h3>Canada&apos;s Golden Generation</h3>
                <p>
                  Canadian football has experienced a remarkable transformation over the past decade. The emergence of
                  <strong>Alphonso Davies</strong>, who became a Champions League winner with Bayern Munich at just 19,
                  signaled the arrival of a new era. Canada&apos;s qualification for the 2022 World Cup ended a 36-year
                  absence from football&apos;s biggest stage, and now, as co-hosts of the 2026 tournament, the Maple Leafs
                  have their greatest opportunity to make history.
                </p>
                <p>
                  The Canadian squad features an exciting blend of European-based professionals and MLS talent.
                  <strong>Jonathan David</strong> (Lille) has established himself as one of Europe&apos;s most prolific
                  young strikers, while <strong>Cyle Larin</strong> provides experience and goalscoring threat. In midfield,
                  players like <strong>Stephen Eustáquio</strong> and <strong>Tajon Buchanan</strong> offer creativity and
                  energy. With home advantage and a passionate nation behind them, Canada enters this tournament with genuine
                  aspirations of exceeding expectations.
                </p>

                <h3>Italy: The Azzurri&apos;s Quest for Glory</h3>
                <p>
                  <strong>Italy</strong> enters World Cup 2026 as four-time champions but with a point to prove after missing
                  both the 2018 and 2022 World Cups. The Azzurri&apos;s qualification through the UEFA playoffs demonstrates
                  both their struggles and resilience. Under new management, Italy has rebuilt around a core of talented
                  young players while maintaining their trademark tactical discipline and defensive organization.
                </p>
                <p>
                  <strong>Gianluigi Donnarumma</strong> (PSG) anchors the defense as one of the world&apos;s best goalkeepers.
                  <strong>Federico Chiesa</strong> (Liverpool) provides explosive attacking threat, while <strong>Nicolo
                  Barella</strong> (Inter Milan) orchestrates play from midfield with world-class ability. The emergence
                  of young talents like <strong>Sandro Tonali</strong> and <strong>Alessandro Bastoni</strong> has given
                  Italy renewed hope of recapturing past glories.
                </p>

                <h3>BMO Field: Canada&apos;s Football Fortress</h3>
                <p>
                  <strong>BMO Field</strong> in Toronto will be transformed into a cauldron of Canadian passion for this
                  historic match. The stadium, which serves as home to Toronto FC in MLS, has been expanded to 45,000
                  capacity for the World Cup. Located on the shores of Lake Ontario, the venue offers a stunning backdrop
                  for what promises to be one of Canada&apos;s greatest sporting moments.
                </p>
                <p>
                  The Toronto football community has grown significantly, with the city now boasting one of North America&apos;s
                  most passionate supporter cultures. The Canadian fans will create an atmosphere unlike anything seen before
                  in this country, with the entire nation rallying behind Les Rouges in their quest to defeat the Azzurri.
                </p>

                <h3>Historical Context</h3>
                <p>
                  Remarkably, Canada has a positive record against Italy in friendly matches, with surprising victories in
                  both 2004 (1-0 in Hamilton) and 2010 (1-0 in Toronto). While these were only friendlies, they demonstrate
                  that Canada can compete against elite European opposition. The Italian-Canadian community in Toronto and
                  across Canada adds another dimension to this fixture, with many fans having divided loyalties.
                </p>

                <h3>Key Tactical Battles</h3>
                <p>
                  The matchup between <strong>Alphonso Davies</strong> and the Italian right side will be crucial. Davies&apos;
                  explosive pace and ability to join attacks from left-back can stretch any defense. Italy will need to
                  find a way to contain him while managing their own attacking ambitions.
                </p>
                <p>
                  In attack, <strong>Jonathan David</strong> will lead Canada&apos;s pressing and finishing efforts. His
                  movement and clinical finishing will be tested against the Italian defensive organization led by
                  <strong>Alessandro Bastoni</strong>. Meanwhile, Canada&apos;s defense will face the stern examination
                  of <strong>Federico Chiesa&apos;s</strong> pace and directness.
                </p>

                <h3>What This Match Means</h3>
                <p>
                  For Canada, this match represents the culmination of decades of development and the beginning of a new
                  chapter. A positive result against Italy would announce Canada&apos;s arrival as a serious footballing
                  nation. For Italy, avoiding an upset against the hosts is crucial for their World Cup redemption story
                  after missing two consecutive tournaments.
                </p>
                <p>
                  The expanded 48-team format means both teams have realistic hopes of advancing from Group B, but the
                  stakes of this opening match cannot be overstated. Victory here would provide crucial momentum and
                  confidence for the remainder of the tournament.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Canada vs Italy World Cup 2026 tickets</strong> are among the most coveted in the tournament.
                  As Canada&apos;s home opener against four-time champions, demand far exceeds supply. Prices start from
                  approximately $185 USD for Category 4 seats, with premium categories reaching $600+ USD. Canadian fans
                  have been allocated priority access, but tickets remain extremely limited.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇦</span> Canada Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {canadaPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
                            {player.number}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{player.name}</p>
                              {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                            </div>
                            <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/teams/canada-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Canada Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇹</span> Italy Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {italyPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                            {player.number}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{player.name}</p>
                              {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                            </div>
                            <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/teams/italy-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Italy Squad</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Head to Head */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Head-to-Head Record
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant="outline">{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 text-sm">
                    <strong>All-Time Record:</strong> Italy leads 1-2 in all meetings. Canada won both matches played
                    on home soil (2004 and 2010), providing hope for their first World Cup encounter.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-700" />
                  Venue: BMO Field
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">45,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">2007</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">TFC</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">6</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/bmo-field-world-cup-2026-tickets">
                  <Button className="w-full bg-red-700 hover:bg-red-800">
                    View All BMO Field Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Toronto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Toronto is Canada&apos;s largest city and one of the world&apos;s most multicultural metropolises.
                  The city offers world-class dining, attractions like the CN Tower, and a vibrant sports culture.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Toronto Pearson Airport (YYZ)</li>
                      <li>• Streetcar/TTC to BMO Field</li>
                      <li>• Walk from downtown (30 min)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• CN Tower</li>
                      <li>• Distillery District</li>
                      <li>• Toronto Islands</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/toronto-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Toronto Travel Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Broadcast Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tv className="h-5 w-5" />
                  Broadcast Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Canada vs Italy will be broadcast globally, with special coverage in both nations. This match
                  will attract massive viewership from both Canadian and Italian communities worldwide.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Canada</p>
                    <p className="text-sm text-slate-500">TSN / CTV / RDS</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Italy</p>
                    <p className="text-sm text-slate-500">RAI / Sky Italia</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">USA</p>
                    <p className="text-sm text-slate-500">FOX / Telemundo</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Global</p>
                    <p className="text-sm text-slate-500">FIFA+</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24 border-red-400">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-700" />
                  Buy Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>Extremely high demand - Canada home opener!</span>
                </div>

                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div>
                        <p className="font-medium">{link.partner}</p>
                        <p className="text-sm text-green-600">From ${link.price_from}</p>
                        <p className="text-xs text-slate-400">{link.rating}</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-red-700 hover:bg-red-800" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Buy
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Match Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Date</span>
                  <span className="font-medium">{matchInfo.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Kickoff</span>
                  <span className="font-medium">{matchInfo.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Stadium</span>
                  <span className="font-medium">{matchInfo.venue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">City</span>
                  <span className="font-medium">Toronto</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Group</span>
                  <span className="font-medium">Group {matchInfo.group}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Match Number</span>
                  <span className="font-medium">#{matchInfo.matchNumber}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group B Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/canada-vs-italy-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 border border-red-200">
                  <span>🇨🇦 vs 🇮🇹</span>
                  <span className="text-sm">Jun 12</span>
                  <Badge className="ml-auto bg-red-600 text-white text-xs">Home</Badge>
                </Link>
                <Link href="/fixtures/qatar-vs-switzerland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇶🇦 vs 🇨🇭</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/canada-vs-qatar-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇦 vs 🇶🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
                <Link href="/fixtures/italy-vs-switzerland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇮🇹 vs 🇨🇭</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/canada-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇨🇦 Canada Team Page
                </Link>
                <Link href="/teams/italy-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇮🇹 Italy Team Page
                </Link>
                <Link href="/venues/bmo-field-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ BMO Field
                </Link>
                <Link href="/travel/toronto-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Toronto Travel Guide
                </Link>
                <Link href="/groups/group-b-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group B Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
