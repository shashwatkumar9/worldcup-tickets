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
  Users,
  Star,
  TrendingUp,
  Tv,
  Flag,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Japan vs Costa Rica Tickets | World Cup 2026 Group D | CenturyLink Field",
  description: "Buy Japan vs Costa Rica World Cup 2026 tickets at CenturyLink Field, Seattle. 2022 World Cup rematch between Asian and CONCACAF rivals!",
  keywords: [
    "Japan vs Costa Rica tickets",
    "World Cup 2026 Seattle tickets",
    "Japan World Cup 2026 tickets",
    "Costa Rica World Cup 2026 tickets",
    "CenturyLink Field World Cup",
    "FIFA World Cup 2026 Japan",
    "Seattle World Cup tickets",
    "Samurai Blue vs Los Ticos tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Japan", flag: "🇯🇵", code: "JPN", nickname: "Samurai Blue", fifaRanking: 18, group: "D" },
  awayTeam: { name: "Costa Rica", flag: "🇨🇷", code: "CRC", nickname: "Los Ticos", fifaRanking: 46, group: "D" },
  date: "June 22, 2026",
  time: "4:00 PM PT",
  venue: "Lumen Field",
  city: "Seattle, Washington",
  group: "D",
  matchNumber: 38,
  round: "Group Stage",
  expectedAttendance: 68000,
}

const japanPlayers = [
  { name: "Takefusa Kubo", position: "Forward", club: "Real Sociedad", number: 11, star: true },
  { name: "Kaoru Mitoma", position: "Forward", club: "Brighton", number: 22, star: true },
  { name: "Wataru Endo", position: "Midfielder", club: "Liverpool", number: 6 },
  { name: "Shuichi Gonda", position: "Goalkeeper", club: "Shimizu S-Pulse", number: 12 },
]

const costaricaPlayers = [
  { name: "Joel Campbell", position: "Forward", club: "Alajuelense", number: 12, star: true },
  { name: "Jewison Bennette", position: "Forward", club: "Sunderland", number: 17, star: true },
  { name: "Bryan Ruiz", position: "Midfielder", club: "Alajuelense", number: 10 },
  { name: "Keylor Navas", position: "Goalkeeper", club: "PSG", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 155, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 275, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 235, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 215, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Japan 0-1 Costa Rica", location: "Qatar" },
  { year: 2018, competition: "Friendly", result: "Japan 3-0 Costa Rica", location: "Osaka" },
]

export default function JapanVsCostaRicaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-white to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-d-world-cup-2026-tickets" className="hover:text-white">Group D</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Japan vs Costa Rica</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Zap className="h-4 w-4 mr-2" />
                2022 REMATCH
              </Badge>
              <Badge className="bg-white text-red-800">GROUP D</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-red-600 text-white">2022 Giant Killers</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-blue-600 text-white">2014 QF</Badge>
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
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Japan vs Costa Rica Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group D Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-red-400 bg-gradient-to-r from-red-50 via-white to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">2022 World Cup Rematch in Seattle</h3>
                    <p className="text-red-800 mt-2">
                      Costa Rica shocked Japan 1-0 at the 2022 World Cup, derailing Japanese momentum after
                      their stunning victory over Germany. That result kept the group open and demonstrated
                      Costa Rica&apos;s tournament resilience. Japan seek revenge in Seattle, while Los Ticos
                      hope to repeat their upset at Lumen Field. Group D qualification hangs in the balance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-red-600" />
                  Complete Match Preview: Japan vs Costa Rica
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: Pacific Rim Rivals</h3>
                <p>
                  The <strong>Japan vs Costa Rica World Cup 2026</strong> match brings together two nations
                  with impressive World Cup pedigrees. On <strong>June 22, 2026</strong> at <strong>Lumen
                  Field in Seattle, Washington</strong>, Japan&apos;s technical excellence faces Costa Rica&apos;s
                  tactical organization. This Group D fixture could prove decisive for knockout stage qualification.
                </p>

                <h3>Japan: Asia&apos;s Rising Force</h3>
                <p>
                  <strong>Japan (Samurai Blue)</strong> have established themselves as genuine World Cup
                  contenders. Their 2022 campaign included historic victories over Germany and Spain, proving
                  they can compete with anyone. The loss to Costa Rica was a wake-up call, but Japan recovered
                  to beat Spain before a heartbreaking penalty shootout defeat to Croatia. With numerous stars
                  now at Europe&apos;s biggest clubs, Japan&apos;s quality has never been higher.
                </p>
                <p>
                  <strong>Takefusa Kubo</strong> (Real Sociedad) has blossomed into one of La Liga&apos;s most
                  exciting players, combining creativity with clinical finishing. <strong>Kaoru Mitoma</strong>
                  (Brighton) terrorizes Premier League defenders with his pace and dribbling. <strong>Wataru
                  Endo</strong> (Liverpool) provides midfield stability and leadership. Japan&apos;s depth of
                  European-based talent gives them flexibility and quality across all positions.
                </p>

                <h3>Costa Rica: The CONCACAF Overachievers</h3>
                <p>
                  <strong>Costa Rica (Los Ticos)</strong> consistently exceed expectations at World Cups.
                  Their 2014 quarterfinal run - defeating Uruguay, Italy, and England - remains one of the
                  tournament&apos;s greatest underdog stories. Though 2022 started poorly with a 7-0 loss to
                  Spain, they recovered to beat Japan and nearly qualified from the group. Costa Rica&apos;s
                  tactical discipline and tournament experience make them dangerous opponents.
                </p>
                <p>
                  <strong>Joel Campbell</strong> returns as Costa Rica&apos;s experienced talisman, the hero
                  of 2014 still capable of match-winning performances. Young talent <strong>Jewison Bennette</strong>
                  (Sunderland) represents Costa Rica&apos;s future, bringing pace and directness to the attack.
                  If available, <strong>Keylor Navas</strong> provides world-class goalkeeping - his Champions
                  League-winning experience with Real Madrid invaluable in high-pressure matches.
                </p>

                <h3>Lumen Field: Seattle&apos;s Football Cathedral</h3>
                <p>
                  <strong>Lumen Field</strong> (formerly CenturyLink Field) provides an exceptional World Cup
                  venue. Home to the Seattle Sounders and Seattle Seahawks, its 68,000 capacity creates intense
                  atmosphere. Seattle&apos;s passionate soccer culture - built through the Sounders&apos; MLS
                  success - ensures knowledgeable, enthusiastic crowds. The Pacific Northwest setting and
                  Seattle&apos;s diverse Asian community provide unique matchday experience.
                </p>

                <h3>2022 World Cup Upset</h3>
                <p>
                  Japan vs Costa Rica at <strong>Qatar 2022</strong> was a match Japan were expected to dominate
                  after their historic Germany victory. Instead, <strong>Keysher Fuller&apos;s</strong> 81st-minute
                  goal stunned the Samurai Blue. Japan&apos;s inability to break down Costa Rica&apos;s defense
                  frustrated fans, and the result kept Germany alive in the group. That tactical lesson will
                  inform Japan&apos;s approach in 2026.
                </p>

                <h3>Tactical Analysis</h3>
                <p>
                  Japan&apos;s high-pressing, possession-based style relies on quick combinations and individual
                  brilliance. <strong>Kubo</strong> and <strong>Mitoma</strong> provide creative spark, while
                  <strong>Endo&apos;s</strong> positioning allows full-backs to attack. Japan must avoid the
                  impatience that cost them in 2022, staying disciplined against Costa Rica&apos;s deep defense.
                </p>
                <p>
                  Costa Rica&apos;s 5-4-1 formation prioritizes defensive solidity. They absorb pressure, stay
                  compact, and wait for counter-attacking opportunities through <strong>Campbell</strong> and
                  <strong>Bennette</strong>. Set pieces offer additional goal-scoring opportunities. Costa Rica&apos;s
                  discipline and patience make them frustrating opponents for technically superior teams.
                </p>

                <h3>Key Battle: Patience vs Pressure</h3>
                <p>
                  Japan must balance attacking intent with patience against Costa Rica&apos;s organized defense.
                  Forcing play leads to turnovers and counter-attacks - exactly what Los Ticos want. <strong>
                  Wataru Endo&apos;s</strong> composure will be crucial in maintaining tempo while probing for
                  openings. Costa Rica needs their defensive concentration to last 90 minutes.
                </p>

                <h3>Group D Implications</h3>
                <p>
                  Group D features Germany, Japan, and other teams competing for knockout stage places. Following
                  their 2022 performances, Japan enters as slight favorites to advance, but Costa Rica&apos;s
                  ability to cause upsets makes predictions difficult. Victory in this match could prove decisive
                  for group standings and seeding.
                </p>

                <h3>Japanese Football Growth</h3>
                <p>
                  Japan&apos;s football development represents one of sport&apos;s great success stories. From
                  World Cup debutants in 1998 to genuine contenders today, Japanese players now feature at
                  Europe&apos;s biggest clubs. Their technical ability, tactical discipline, and professional
                  approach make them respected opponents worldwide.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Japan vs Costa Rica World Cup 2026 tickets</strong> are available with prices starting
                  from approximately $155 USD for Category 4 seats. Seattle&apos;s large Japanese-American
                  community and strong soccer culture ensure passionate local support. The 2022 rematch narrative
                  adds extra interest, while Costa Rica&apos;s traveling supporters bring characteristic
                  enthusiasm. Early booking through official FIFA channels is recommended.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇯🇵</span> Japan Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {japanPlayers.map((player) => (
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
                  <Link href="/teams/japan-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Japan Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇷</span> Costa Rica Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {costaricaPlayers.map((player) => (
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
                  <Link href="/teams/costa-rica-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Costa Rica Squad</Button>
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
                    <strong>2022 Upset:</strong> Costa Rica&apos;s 1-0 victory over Japan in Qatar stunned
                    the Samurai Blue and kept the group alive heading into the final matchday.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Venue: Lumen Field
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">68,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">2002</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">Sounders</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">6</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/lumen-field-world-cup-2026-tickets">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    View All Lumen Field Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Seattle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Seattle offers stunning natural beauty, world-class coffee culture, tech innovation, and
                  vibrant arts scenes. The Emerald City provides exceptional World Cup experiences.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Seattle-Tacoma Airport (SEA)</li>
                      <li>• Light rail to downtown</li>
                      <li>• Stadium in downtown core</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Pike Place Market</li>
                      <li>• Space Needle</li>
                      <li>• Olympic Sculpture Park</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/seattle-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Seattle Travel Guide
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
                  Japan vs Costa Rica will attract significant viewership from Japan&apos;s massive fanbase
                  and throughout CONCACAF, with the 2022 upset adding narrative intrigue.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Japan</p>
                    <p className="text-sm text-slate-500">NHK / Fuji TV</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Costa Rica</p>
                    <p className="text-sm text-slate-500">Teletica / Repretel</p>
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
                  <Ticket className="h-5 w-5 text-red-600" />
                  Buy Japan vs Costa Rica Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>2022 REMATCH - Revenge match!</span>
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
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white" asChild>
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
                  <span className="font-medium">Seattle, WA</span>
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
                <CardTitle>Group D Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/germany-vs-japan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇩🇪 vs 🇯🇵</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 14</span>
                </Link>
                <Link href="/fixtures/germany-vs-curacao-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇩🇪 vs 🇨🇼</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
                <Link href="/fixtures/japan-vs-costa-rica-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 border border-red-200">
                  <span>🇯🇵 vs 🇨🇷</span>
                  <span className="text-sm">Jun 22</span>
                  <Badge className="ml-auto bg-red-600 text-white text-xs">2022</Badge>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/japan-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇯🇵 Japan Team Page
                </Link>
                <Link href="/teams/costa-rica-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇨🇷 Costa Rica Team Page
                </Link>
                <Link href="/venues/lumen-field-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Lumen Field
                </Link>
                <Link href="/travel/seattle-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Seattle Travel Guide
                </Link>
                <Link href="/fixtures/group-d-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group D Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
