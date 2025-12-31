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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Haiti vs Scotland Tickets | World Cup 2026 Group C | Gillette Stadium Boston",
  description: "Buy Haiti vs Scotland World Cup 2026 tickets at Gillette Stadium, Boston. June 13, 2026. CONCACAF underdogs vs Tartan Army in Group C!",
  keywords: [
    "Haiti vs Scotland tickets",
    "World Cup 2026 Boston tickets",
    "Haiti World Cup 2026 tickets",
    "Scotland World Cup 2026 tickets",
    "Gillette Stadium World Cup tickets",
    "FIFA World Cup 2026 Haiti",
    "Boston World Cup tickets",
    "Tartan Army World Cup 2026",
  ],
}

const matchInfo = {
  homeTeam: { name: "Haiti", flag: "🇭🇹", code: "HAI", nickname: "Les Grenadiers" },
  awayTeam: { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO", nickname: "Tartan Army" },
  date: "June 13, 2026",
  time: "3:00 PM ET",
  venue: "Gillette Stadium",
  city: "Foxborough, Massachusetts",
  group: "C",
  matchNumber: 7,
  round: "Group Stage",
}

const haitiPlayers = [
  { name: "Frantzdy Pierrot", position: "Forward", club: "Mainz 05", number: 9, star: true },
  { name: "Derrick Etienne Jr.", position: "Forward", club: "Columbus Crew", number: 22, star: true },
  { name: "Steeven Saba", position: "Midfielder", club: "AC Ajaccio", number: 8 },
  { name: "Johnny Placide", position: "Goalkeeper", club: "Paris FC", number: 1 },
]

const scotlandPlayers = [
  { name: "John McGinn", position: "Midfielder", club: "Aston Villa", number: 7, star: true },
  { name: "Scott McTominay", position: "Midfielder", club: "Napoli", number: 4, star: true },
  { name: "Andrew Robertson", position: "Defender", club: "Liverpool", number: 3 },
  { name: "Che Adams", position: "Forward", club: "Torino", number: 9 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 115, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 165, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 145, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 130, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 1974, competition: "World Cup Qualifier", result: "Scotland 4-1 Haiti", location: "Frankfurt" },
]

export default function HaitiVsScotlandPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-red-600 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/groups/group-c-world-cup-2026-tickets" className="hover:text-white">Group C</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Haiti vs Scotland</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-blue-700 text-white">CONCACAF vs UEFA</Badge>
              <Badge className="bg-white text-blue-800">GROUP C</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match 7</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
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
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Match Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group C Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-blue-400 bg-gradient-to-r from-blue-50 to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900">Caribbean Dreams Meet Scottish Pride</h3>
                    <p className="text-blue-800 mt-2">
                      Haiti returns to the World Cup for only the second time in their history, facing a Scotland
                      side eager to prove themselves on the world stage. This Group C clash at Gillette Stadium
                      brings together passionate fan bases and contrasting football cultures. Les Grenadiers represent
                      Caribbean hope while the legendary Tartan Army travels in force to support their beloved Scotland.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-blue-700" />
                  Complete Match Preview: Haiti vs Scotland
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026 Group C Encounter</h3>
                <p>
                  The <strong>Haiti vs Scotland World Cup 2026</strong> match represents a fascinating collision of
                  footballing cultures. On <strong>June 13, 2026</strong> at <strong>Gillette Stadium in Foxborough,
                  Massachusetts</strong>, Haiti will make only their second World Cup appearance while Scotland seeks
                  to advance past the group stage for the first time since 1998. This Group C fixture promises
                  emotional football and passionate support from both sets of fans.
                </p>

                <h3>Haiti&apos;s Historic Return</h3>
                <p>
                  <strong>Haiti (Les Grenadiers)</strong> qualifies for their second World Cup, 52 years after their
                  debut in 1974. That tournament saw them compete against Italy, Argentina, and Poland in a challenging
                  group. For a nation that has overcome immense adversity including natural disasters and political
                  instability, reaching the 2026 World Cup represents triumph and resilience.
                </p>
                <p>
                  <strong>Frantzdy Pierrot</strong> leads the attack with his Bundesliga experience at Mainz. The
                  physically imposing striker provides a focal point for Haiti&apos;s direct style of play.
                  <strong>Derrick Etienne Jr.</strong> (Columbus Crew) adds MLS quality and pace to the forward line.
                  Haiti&apos;s squad blends European-based players with MLS professionals and domestic talents,
                  creating a team capable of competing at World Cup level.
                </p>

                <h3>Scotland: The Tartan Army Returns</h3>
                <p>
                  <strong>Scotland</strong> brings one of football&apos;s most passionate traveling fan bases to the
                  2026 World Cup. The legendary Tartan Army will flood Boston with kilts, bagpipes, and unwavering
                  support. After years of near-misses, Scotland finally returned to major tournaments at Euro 2020
                  and now aims to make their mark on the World Cup stage for the first time in a generation.
                </p>
                <p>
                  <strong>John McGinn</strong> (Aston Villa) provides energy, goals, and leadership from midfield.
                  <strong>Scott McTominay</strong> has flourished since moving to Napoli, adding Serie A quality to
                  the Scottish engine room. <strong>Andrew Robertson</strong> (Liverpool) offers world-class quality
                  at left-back, while striker <strong>Che Adams</strong> brings clinical finishing. This Scottish
                  generation has the talent to achieve what previous squads could not.
                </p>

                <h3>Gillette Stadium: New England&apos;s Football Home</h3>
                <p>
                  <strong>Gillette Stadium</strong> in Foxborough, Massachusetts brings World Cup football to New England.
                  Home to the New England Patriots and New England Revolution, the 65,878-capacity venue has hosted
                  numerous major events including Copa America matches. The Boston area&apos;s strong Irish and
                  Scottish immigrant history ensures passionate Celtic support for Scotland, while Haiti&apos;s large
                  diaspora in the Northeast guarantees significant Caribbean representation.
                </p>

                <h3>Historical Significance</h3>
                <p>
                  Remarkably, Haiti and Scotland met at the 1974 World Cup in Germany - Haiti&apos;s only previous
                  World Cup appearance. Scotland won that encounter 4-1 in Frankfurt, with Scotland dominating against
                  the World Cup debutants. Fifty-two years later, this Group C rematch offers Haiti the chance to
                  rewrite history against their only previous World Cup opponents.
                </p>

                <h3>Tactical Analysis</h3>
                <p>
                  Scotland&apos;s pressing game and midfield energy will test Haiti&apos;s ability to build from the back.
                  <strong>John McGinn&apos;s</strong> box-to-box running and <strong>Scott McTominay&apos;s</strong>
                  goal threat from deep make Scotland dangerous whenever they win possession in advanced areas.
                  <strong>Andrew Robertson&apos;s</strong> overlapping runs add width and crossing quality.
                </p>
                <p>
                  Haiti will look to play direct football, using <strong>Frantzdy Pierrot&apos;s</strong> physical
                  presence to hold the ball up and bring teammates into play. Quick transitions and set pieces
                  could provide Haiti&apos;s best opportunities against Scotland&apos;s sometimes vulnerable defense.
                </p>

                <h3>Group C Context</h3>
                <p>
                  With Brazil and Morocco as the group favorites, both Haiti and Scotland will view this match as
                  crucial for their knockout stage hopes. Under the expanded format where best third-placed teams
                  advance, a victory here could prove decisive. Neither team can afford to lose if they want to
                  continue their World Cup journey.
                </p>

                <h3>The Fan Experience</h3>
                <p>
                  The atmosphere at Gillette Stadium promises to be electric. The Tartan Army is renowned as one
                  of football&apos;s best traveling supports, bringing color, song, and incredible passion wherever
                  Scotland plays. Meanwhile, the Haitian community will unite behind Les Grenadiers, creating a
                  carnival atmosphere that celebrates Caribbean football culture.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Haiti vs Scotland World Cup 2026 tickets</strong> offer excellent value for fans seeking
                  World Cup action in New England. Prices start from approximately $115 USD for Category 4 seats.
                  The Tartan Army&apos;s reputation for traveling in numbers means demand for Scotland allocation
                  will be high. Early booking is recommended for both sets of supporters.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇭🇹</span> Haiti Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {haitiPlayers.map((player) => (
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
                  <Link href="/teams/haiti-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Haiti Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Scotland Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {scotlandPlayers.map((player) => (
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
                  <Link href="/teams/scotland-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Scotland Squad</Button>
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
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Historic Note:</strong> Their only previous meeting was at the 1974 World Cup - Haiti&apos;s
                    only World Cup appearance until 2026. This rematch comes 52 years later!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-700" />
                  Venue: Gillette Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">65,878</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">2002</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">Patriots</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">7</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/gillette-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-blue-700 hover:bg-blue-800">
                    View All Gillette Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Boston</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Boston offers rich American history, world-class universities, and passionate sports culture.
                  The birthplace of American independence welcomes World Cup fans with colonial charm and modern excitement.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Boston Logan Airport (BOS)</li>
                      <li>• Commuter rail to Foxborough</li>
                      <li>• Shuttle services on match days</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Freedom Trail</li>
                      <li>• Fenway Park</li>
                      <li>• Harvard / MIT campuses</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/boston-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Boston Travel Guide
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
                  Haiti vs Scotland will be broadcast globally. Evening viewing in the UK and Haiti makes
                  this match accessible for both nations&apos; fans at home.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Haiti</p>
                    <p className="text-sm text-slate-500">Télé Haïti</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Scotland</p>
                    <p className="text-sm text-slate-500">BBC / ITV</p>
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
            <Card className="sticky top-24 border-blue-400">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-700" />
                  Buy Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-blue-700 text-sm bg-blue-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>Good value - Tartan Army in town!</span>
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
                    <Button size="sm" className="bg-blue-700 hover:bg-blue-800" asChild>
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
                  <span className="font-medium">Boston Area</span>
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
                <CardTitle>Group C Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/haiti-vs-scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 border border-blue-200">
                  <span>🇭🇹 vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/brazil-vs-morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇧🇷 vs 🇲🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/brazil-vs-haiti-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇧🇷 vs 🇭🇹</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 19</span>
                </Link>
                <Link href="/fixtures/scotland-vs-morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 vs 🇲🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 19</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/haiti-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇭🇹 Haiti Team Page
                </Link>
                <Link href="/teams/scotland-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland Team Page
                </Link>
                <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Gillette Stadium
                </Link>
                <Link href="/travel/boston-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Boston Travel Guide
                </Link>
                <Link href="/groups/group-c-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group C Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
