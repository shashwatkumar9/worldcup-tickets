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
  title: "Brazil vs Scotland Tickets | World Cup 2026 Group C | Levi's Stadium",
  description: "Buy Brazil vs Scotland World Cup 2026 tickets at Levi's Stadium, San Francisco. Five-time champions face the Tartan Army!",
  keywords: [
    "Brazil vs Scotland tickets",
    "World Cup 2026 San Francisco tickets",
    "Brazil World Cup 2026 tickets",
    "Scotland World Cup 2026 tickets",
    "Levi's Stadium World Cup",
    "FIFA World Cup 2026 Brazil",
    "San Francisco World Cup tickets",
    "Seleção vs Tartan Army tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Brazil", flag: "🇧🇷", code: "BRA", nickname: "Seleção", fifaRanking: 5, group: "C" },
  awayTeam: { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO", nickname: "Tartan Army", fifaRanking: 39, group: "C" },
  date: "June 19, 2026",
  time: "6:00 PM PT",
  venue: "Levi's Stadium",
  city: "Santa Clara, California",
  group: "C",
  matchNumber: 30,
  round: "Group Stage",
  expectedAttendance: 68500,
}

const brazilPlayers = [
  { name: "Vinícius Jr.", position: "Forward", club: "Real Madrid", number: 7, star: true },
  { name: "Rodrygo", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Endrick", position: "Forward", club: "Real Madrid", number: 9 },
  { name: "Alisson", position: "Goalkeeper", club: "Liverpool", number: 1 },
]

const scotlandPlayers = [
  { name: "John McGinn", position: "Midfielder", club: "Aston Villa", number: 7, star: true },
  { name: "Scott McTominay", position: "Midfielder", club: "Manchester United", number: 6, star: true },
  { name: "Andy Robertson", position: "Defender", club: "Liverpool", number: 3 },
  { name: "Angus Gunn", position: "Goalkeeper", club: "Norwich City", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 225, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 395, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 340, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 310, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 1998, competition: "World Cup", result: "Brazil 2-1 Scotland", location: "France" },
  { year: 1982, competition: "Friendly", result: "Brazil 4-1 Scotland", location: "Seville" },
  { year: 1977, competition: "Friendly", result: "Brazil 2-0 Scotland", location: "Rio de Janeiro" },
]

export default function BrazilVsScotlandPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 via-yellow-400 to-blue-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-c-world-cup-2026-tickets" className="hover:text-white">Group C</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Brazil vs Scotland</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Trophy className="h-4 w-4 mr-2" />
                5X CHAMPIONS
              </Badge>
              <Badge className="bg-white text-green-800">GROUP C</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-yellow-500 text-black">5x Champions</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-blue-700 text-white">FIFA #{matchInfo.awayTeam.fifaRanking}</Badge>
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
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Brazil vs Scotland Tickets
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
            <Card className="border-yellow-400 bg-gradient-to-r from-green-50 via-yellow-50 to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-900">Samba Meets the Tartan Army</h3>
                    <p className="text-green-800 mt-2">
                      Football&apos;s most successful nation faces one of its most passionate fanbases. The Tartan
                      Army will travel in force to witness their heroes against the five-time World Cup champions.
                      Scotland&apos;s fighting spirit against Brazil&apos;s samba magic promises an unforgettable
                      encounter at Levi&apos;s Stadium. Can the Scots cause a historic upset, or will Brazil&apos;s
                      stars prove too much?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-green-600" />
                  Complete Match Preview: Brazil vs Scotland
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: The Beautiful Game Meets Fighting Spirit</h3>
                <p>
                  The <strong>Brazil vs Scotland World Cup 2026</strong> match brings together football royalty
                  and Scottish determination. On <strong>June 19, 2026</strong> at <strong>Levi&apos;s Stadium
                  in Santa Clara, California</strong>, five-time World Cup champions Brazil face Scotland in a
                  Group C fixture that carries enormous significance for both nations. Brazil seeks to continue
                  their march toward a sixth title, while Scotland looks to announce themselves on the global stage.
                </p>

                <h3>Brazil: The Record Champions</h3>
                <p>
                  <strong>Brazil (Seleção)</strong> remain football&apos;s most successful national team with five
                  World Cup titles. Despite a disappointing quarter-final exit in Qatar 2022, Brazil boasts
                  perhaps the most exciting attacking talent in world football. The disappointments of recent
                  tournaments have only fueled Brazilian determination to return to glory. With a new generation
                  reaching their prime, 2026 could mark Brazil&apos;s return to the summit.
                </p>
                <p>
                  <strong>Vinícius Jr.</strong> (Real Madrid) has established himself as one of the world&apos;s
                  most devastating attackers, combining extraordinary pace with improving end product. His Real
                  Madrid teammate <strong>Rodrygo</strong> provides additional attacking quality and versatility.
                  Teenage sensation <strong>Endrick</strong> (Real Madrid) represents Brazilian football&apos;s
                  future, bringing fearless finishing and physical presence. <strong>Alisson</strong> (Liverpool)
                  remains among the world&apos;s elite goalkeepers, providing security behind Brazil&apos;s
                  attacking riches.
                </p>

                <h3>Scotland: The Tartan Army&apos;s World Cup Dream</h3>
                <p>
                  <strong>Scotland (Tartan Army)</strong> approach 2026 with renewed optimism. After missing
                  several major tournaments, Scotland has qualified consistently in recent years and generated
                  genuine belief among their famously passionate supporters. The Tartan Army&apos;s vocal traveling
                  support creates an atmosphere unlike any other, and they will turn Levi&apos;s Stadium into a
                  sea of tartan and kilts.
                </p>
                <p>
                  <strong>John McGinn</strong> (Aston Villa) provides leadership, energy, and occasional spectacular
                  goals from midfield. <strong>Scott McTominay</strong> (Manchester United) has become Scotland&apos;s
                  main attacking threat, scoring crucial goals despite his deeper natural position. <strong>Andy
                  Robertson</strong> (Liverpool) is world-class at left-back, combining defensive solidity with
                  dangerous overlapping runs. The squad may lack individual stars of Brazilian quality, but their
                  team spirit and tactical organization make them competitive.
                </p>

                <h3>Levi&apos;s Stadium: Silicon Valley&apos;s World Cup Stage</h3>
                <p>
                  <strong>Levi&apos;s Stadium</strong> in Santa Clara provides a modern venue for this clash of
                  cultures. Home to the San Francisco 49ers, the 68,500-capacity stadium has hosted Super Bowls
                  and major soccer events. The San Francisco Bay Area&apos;s diverse population and strong soccer
                  culture ensure passionate crowds. Silicon Valley&apos;s influence means world-class facilities
                  and technology throughout the venue.
                </p>

                <h3>1998 World Cup Opening Match</h3>
                <p>
                  Brazil and Scotland famously met in the <strong>1998 World Cup</strong> opening match in Paris.
                  Brazil won 2-1 with a <strong>César Sampaio</strong> header and <strong>Tom Boyd</strong> own
                  goal, though Scotland&apos;s <strong>John Collins</strong> scored from the penalty spot. That
                  match launched Brazil&apos;s journey to the final (where they lost to hosts France). Scotland
                  was eliminated in the group stage despite showing fighting spirit.
                </p>

                <h3>Tactical Considerations</h3>
                <p>
                  Brazil will dominate possession and probe Scottish defenses with quick combinations and
                  individual brilliance. <strong>Vinícius Jr.&apos;s</strong> one-on-one ability on the left
                  and <strong>Rodrygo&apos;s</strong> movement across the forward line create constant danger.
                  Scotland must remain compact and disciplined, limiting spaces for Brazilian attackers to exploit.
                </p>
                <p>
                  Scotland will likely adopt a pragmatic approach, sitting deep and looking to counter-attack.
                  <strong>Andy Robertson&apos;s</strong> forward runs and <strong>McTominay&apos;s</strong>
                  late arrivals into the box offer goal threats. Set pieces will be crucial - Scotland&apos;s
                  aerial prowess could trouble even Brazil&apos;s talented defense.
                </p>

                <h3>The Tartan Army Experience</h3>
                <p>
                  Scotland&apos;s supporters are renowned as among football&apos;s best. The Tartan Army travels
                  in massive numbers, creating incredible atmospheres with their singing, humor, and genuine love
                  of football. Their presence at Levi&apos;s Stadium will be felt regardless of the scoreline,
                  adding to what promises to be a memorable World Cup occasion.
                </p>

                <h3>Group C Implications</h3>
                <p>
                  Group C features Brazil, Morocco, Scotland, and Haiti. Brazil and Morocco are favorites to
                  advance, but Scotland will view matches against Haiti and potentially vulnerable Group fixtures
                  as opportunities. Victory against Brazil seems unlikely but would be one of the greatest upsets
                  in World Cup history. A creditable performance builds confidence for remaining group games.
                </p>

                <h3>Brazilian Star Power</h3>
                <p>
                  Scotland&apos;s defenders face the challenge of containing multiple world-class attackers.
                  <strong>Vinícius Jr.</strong> terrorizes defenders with pace and skill, while <strong>Rodrygo</strong>
                  provides equally dangerous quality. Young <strong>Endrick</strong> adds unpredictability.
                  Scotland&apos;s organization will be tested to its limits against such individual brilliance.
                </p>

                <h3>Scottish Belief</h3>
                <p>
                  Scotland approaches matches with genuine belief that they can compete with anyone. While
                  realistically understanding the challenge Brazil presents, Scottish players will embrace the
                  occasion rather than fear it. The World Cup stage has produced countless upsets, and Scotland&apos;s
                  fighting spirit ensures they will compete until the final whistle.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Brazil vs Scotland World Cup 2026 tickets</strong> are in high demand, particularly
                  from Brazil&apos;s massive global fanbase and Scotland&apos;s devoted traveling support.
                  Prices start from approximately $225 USD for Category 4 seats, with premium hospitality
                  packages available. The appeal of watching Brazil&apos;s stars live combined with the Tartan
                  Army&apos;s atmosphere ensures a memorable occasion. Early booking is strongly recommended.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇧🇷</span> Brazil Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {brazilPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
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
                  <Link href="/teams/brazil-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Brazil Squad</Button>
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
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>1998 World Cup:</strong> Brazil defeated Scotland 2-1 in the tournament&apos;s
                    opening match in Paris - John Collins scored Scotland&apos;s only goal from the penalty spot.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Venue: Levi&apos;s Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">68,500</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">2014</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">49ers</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">6</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View All Levi&apos;s Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to San Francisco Bay Area</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  The San Francisco Bay Area offers iconic landmarks, world-class cuisine, beautiful scenery,
                  and vibrant culture. Silicon Valley provides cutting-edge experiences for World Cup visitors.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• SFO International Airport</li>
                      <li>• San Jose Airport (SJC)</li>
                      <li>• VTA Light Rail to stadium</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Golden Gate Bridge</li>
                      <li>• Alcatraz Island</li>
                      <li>• Fisherman&apos;s Wharf</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/san-francisco-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete San Francisco Travel Guide
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
                  Brazil vs Scotland will attract massive viewership from Brazil&apos;s enormous fanbase and
                  passionate Scottish supporters. Expect comprehensive global coverage for this fixture.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Brazil</p>
                    <p className="text-sm text-slate-500">Globo / SporTV</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">UK/Scotland</p>
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
            <Card className="sticky top-24 border-yellow-400">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-yellow-600" />
                  Buy Brazil vs Scotland Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>5X CHAMPIONS - High demand!</span>
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
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
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
                  <span className="font-medium">San Francisco, CA</span>
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
                <Link href="/fixtures/brazil-vs-morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇧🇷 vs 🇲🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/haiti-vs-scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇭🇹 vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/brazil-vs-scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 border border-yellow-200">
                  <span>🇧🇷 vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                  <span className="text-sm">Jun 19</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">5x</Badge>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇧🇷 Brazil Team Page
                </Link>
                <Link href="/teams/scotland-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland Team Page
                </Link>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Levi&apos;s Stadium
                </Link>
                <Link href="/travel/san-francisco-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ San Francisco Travel Guide
                </Link>
                <Link href="/fixtures/group-c-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
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
