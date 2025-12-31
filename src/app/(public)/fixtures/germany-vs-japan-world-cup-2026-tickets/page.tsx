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
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Germany vs Japan Tickets | World Cup 2026 Group D | MetLife Stadium",
  description: "Buy Germany vs Japan World Cup 2026 tickets at MetLife Stadium, New York. 2022 World Cup rematch - Japan shocked Germany 2-1 in Qatar!",
  keywords: [
    "Germany vs Japan tickets",
    "World Cup 2026 New York tickets",
    "Germany World Cup 2026 tickets",
    "Japan World Cup 2026 tickets",
    "MetLife Stadium World Cup",
    "FIFA World Cup 2026 Germany",
    "New York World Cup tickets",
    "Die Mannschaft vs Samurai Blue tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Germany", flag: "🇩🇪", code: "GER", nickname: "Die Mannschaft", fifaRanking: 14, group: "D" },
  awayTeam: { name: "Japan", flag: "🇯🇵", code: "JPN", nickname: "Samurai Blue", fifaRanking: 18, group: "D" },
  date: "June 14, 2026",
  time: "3:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "D",
  matchNumber: 15,
  round: "Group Stage",
  expectedAttendance: 82500,
}

const germanyPlayers = [
  { name: "Jamal Musiala", position: "Midfielder", club: "Bayern Munich", number: 10, star: true },
  { name: "Florian Wirtz", position: "Midfielder", club: "Bayer Leverkusen", number: 17, star: true },
  { name: "Kai Havertz", position: "Forward", club: "Arsenal", number: 7 },
  { name: "Manuel Neuer", position: "Goalkeeper", club: "Bayern Munich", number: 1 },
]

const japanPlayers = [
  { name: "Takefusa Kubo", position: "Forward", club: "Real Sociedad", number: 11, star: true },
  { name: "Kaoru Mitoma", position: "Forward", club: "Brighton", number: 22, star: true },
  { name: "Wataru Endo", position: "Midfielder", club: "Liverpool", number: 6 },
  { name: "Shuichi Gonda", position: "Goalkeeper", club: "Shimizu S-Pulse", number: 12 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 225, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 395, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 340, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 310, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Germany 1-2 Japan", location: "Qatar" },
  { year: 2006, competition: "Friendly", result: "Germany 2-2 Japan", location: "Leverkusen" },
  { year: 2004, competition: "Friendly", result: "Japan 0-3 Germany", location: "Yokohama" },
]

export default function GermanyVsJapanPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-red-600 to-red-800 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-d-world-cup-2026-tickets" className="hover:text-white">Group D</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Germany vs Japan</span>
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
                <Badge className="mt-2 bg-yellow-500 text-black">4x Champions</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-red-600 text-white">2022 Giant Killers</Badge>
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
                Buy Rematch Tickets
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
            <Card className="border-yellow-400 bg-gradient-to-r from-black/5 via-red-50 to-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">The Rematch Everyone Wants</h3>
                    <p className="text-red-800 mt-2">
                      In one of the greatest World Cup upsets in recent history, Japan defeated Germany 2-1 in Qatar 2022.
                      That result sent shockwaves through the football world and contributed to Germany&apos;s early
                      elimination. Now, Die Mannschaft face the Samurai Blue again in their quest for redemption at
                      MetLife Stadium. Japan proved their victory was no fluke - they went on to beat Spain too. This
                      rematch is appointment viewing for every football fan.
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
                  Complete Match Preview: Germany vs Japan
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: Revenge or Repeat?</h3>
                <p>
                  The <strong>Germany vs Japan World Cup 2026</strong> match is one of the most highly anticipated
                  rematches in the tournament. On <strong>June 14, 2026</strong> at <strong>MetLife Stadium in
                  East Rutherford, New Jersey</strong>, four-time World Cup champions Germany will face the team
                  that humiliated them in Qatar. Japan&apos;s 2-1 victory in 2022 was one of the tournament&apos;s
                  defining moments, and this Group D clash offers Germany a chance at redemption.
                </p>

                <h3>Germany: A Giant Seeking Redemption</h3>
                <p>
                  <strong>Germany (Die Mannschaft)</strong> has experienced unprecedented turmoil since winning
                  the 2014 World Cup. Two consecutive group stage exits (2018 and 2022) have shaken German football
                  to its core, but 2026 represents a new era. The emergence of generational talents <strong>Jamal
                  Musiala</strong> and <strong>Florian Wirtz</strong> has given Germany genuine hope for the first
                  time in years. This team plays with an attacking verve not seen since the Joachim Löw glory days.
                </p>
                <p>
                  <strong>Jamal Musiala</strong> (Bayern Munich) has become one of football&apos;s most complete
                  attacking midfielders, combining dribbling ability with intelligent movement and clinical finishing.
                  <strong>Florian Wirtz</strong> (Bayer Leverkusen) provides creative genius from deeper positions,
                  orchestrating attacks with vision beyond his years. <strong>Kai Havertz</strong> brings Premier
                  League experience from Arsenal, while <strong>Manuel Neuer</strong> remains world-class despite
                  his advancing years. Germany&apos;s talent pool is once again the envy of world football.
                </p>

                <h3>Japan: Asia&apos;s Football Revolution</h3>
                <p>
                  <strong>Japan (Samurai Blue)</strong> has established itself as a genuine World Cup force. Their
                  2022 campaign was remarkable - defeating both Germany and Spain in the group stage before a
                  heartbreaking penalty shootout loss to Croatia. Japan&apos;s success reflects the strength of
                  their player development system and the growing number of Japanese stars at Europe&apos;s top
                  clubs. They approach 2026 not as underdogs, but as genuine contenders.
                </p>
                <p>
                  <strong>Takefusa Kubo</strong> (Real Sociedad) has blossomed into one of La Liga&apos;s most
                  exciting talents, with Real Madrid likely regretting letting him go. <strong>Kaoru Mitoma</strong>
                  (Brighton) has become a Premier League sensation, terrorizing defenders with his pace and direct
                  dribbling. <strong>Wataru Endo</strong> brings Liverpool experience to midfield, providing defensive
                  stability and composure. Japan&apos;s technical quality and tactical discipline make them
                  dangerous against any opponent.
                </p>

                <h3>MetLife Stadium: The Perfect Stage</h3>
                <p>
                  <strong>MetLife Stadium</strong> in East Rutherford provides a world-class venue for this blockbuster
                  clash. As one of the USA&apos;s largest and most modern stadiums, it will host multiple World Cup
                  matches including games deep in the tournament. The 82,500 capacity will be filled with fans from
                  both nations - German fans seeking redemption and Japanese supporters dreaming of another upset.
                  The New York metropolitan area&apos;s diverse population ensures electric atmosphere.
                </p>

                <h3>The 2022 World Cup Shocker</h3>
                <p>
                  The <strong>2022 World Cup</strong> meeting between these teams will forever be remembered as one
                  of the tournament&apos;s greatest upsets. Germany dominated possession and led through İlkay Gündoğan&apos;s
                  penalty, but Japan staged a stunning comeback in the second half. <strong>Ritsu Doan</strong> equalized
                  before <strong>Takuma Asano</strong> scored a brilliant winner from a tight angle. Germany&apos;s
                  subsequent draw with Spain and loss to Japan ultimately ended their tournament in the group stage.
                </p>

                <h3>Tactical Evolution</h3>
                <p>
                  Germany under Julian Nagelsmann has embraced a more dynamic, attacking style. The team presses
                  high and transitions quickly, with <strong>Musiala</strong> and <strong>Wirtz</strong> given license
                  to roam between the lines. This approach suits their talented attackers but can leave spaces in
                  defense - exactly what Japan exploited in 2022.
                </p>
                <p>
                  Japan&apos;s tactical flexibility proved decisive in 2022. They can absorb pressure and counter
                  devastatingly, as demonstrated against Germany, or control possession against weaker opponents.
                  <strong>Mitoma&apos;s</strong> directness and <strong>Kubo&apos;s</strong> creativity give Japan
                  multiple attacking angles. Their pressing organization and defensive discipline frustrate even
                  the most technically gifted opponents.
                </p>

                <h3>Key Battles</h3>
                <p>
                  The duel between <strong>Jamal Musiala</strong> and <strong>Wataru Endo</strong> could prove
                  decisive. Musiala&apos;s ability to receive the ball in dangerous areas and create chances must
                  be contained by Endo&apos;s intelligent positioning and tackling. Similarly, Germany&apos;s
                  defense will need to handle <strong>Kaoru Mitoma&apos;s</strong> explosive pace and unpredictable
                  dribbling on the wing.
                </p>

                <h3>Group D Stakes</h3>
                <p>
                  Group D is expected to be highly competitive, with Germany and Japan both among the favorites to
                  advance. This match could effectively determine the group winner, with significant implications
                  for knockout stage seeding. Neither team can afford defeat, but both possess the attacking quality
                  to create numerous scoring opportunities. A tactical, tense encounter seems likely.
                </p>

                <h3>Historical Significance</h3>
                <p>
                  This match represents the changing landscape of world football. Japan&apos;s ability to compete
                  with and defeat traditional powerhouses reflects Asia&apos;s growing football strength. Germany,
                  meanwhile, seeks to prove that their recent struggles are behind them. The result will resonate
                  far beyond Group D standings - it&apos;s about proving who represents football&apos;s present
                  and future.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Germany vs Japan World Cup 2026 tickets</strong> are in extremely high demand given the
                  2022 history between these teams. Prices start from approximately $225 USD for Category 4 seats,
                  with premium and hospitality packages available for those seeking enhanced experiences. Both
                  German and Japanese fan communities in the New York area will drive significant local demand.
                  Early booking is strongly advised for this must-see rematch.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-black/5">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇩🇪</span> Germany Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {germanyPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center text-black font-bold">
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
                  <Link href="/teams/germany-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Germany Squad</Button>
                  </Link>
                </CardContent>
              </Card>

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
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>2022 Shocker:</strong> Japan&apos;s 2-1 comeback victory over Germany in Qatar was one of
                    the World Cup&apos;s biggest upsets and contributed to Germany&apos;s group stage elimination.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Venue: MetLife Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">82,500</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">2010</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">Giants/Jets</p>
                    <p className="text-sm text-slate-600">Home Teams</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">8</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    View All MetLife Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to New York / New Jersey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  The New York metropolitan area offers unlimited entertainment, world-class dining, and iconic
                  landmarks. MetLife Stadium is easily accessible from Manhattan and the surrounding area.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• JFK/Newark/LaGuardia Airports</li>
                      <li>• NJ Transit to stadium</li>
                      <li>• Bus shuttle from Port Authority</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Times Square</li>
                      <li>• Central Park</li>
                      <li>• Statue of Liberty</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/new-york-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete New York Travel Guide
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
                  Germany vs Japan will attract massive global audiences, particularly in both countries
                  where the 2022 result is still fresh in memory. Expect huge viewership numbers worldwide.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Germany</p>
                    <p className="text-sm text-slate-500">ARD / ZDF</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Japan</p>
                    <p className="text-sm text-slate-500">NHK / Fuji TV</p>
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
                  Buy Rematch Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>2022 REMATCH - Extreme demand expected!</span>
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
                  <span className="font-medium">New York/NJ</span>
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
                <Link href="/fixtures/germany-vs-japan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 border border-yellow-200">
                  <span>🇩🇪 vs 🇯🇵</span>
                  <span className="text-sm">Jun 14</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">Rematch</Badge>
                </Link>
                <Link href="/fixtures/germany-vs-curacao-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇩🇪 vs 🇨🇼</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
                <Link href="/fixtures/japan-vs-curacao-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇯🇵 vs 🇨🇼</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 22</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/germany-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇩🇪 Germany Team Page
                </Link>
                <Link href="/teams/japan-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇯🇵 Japan Team Page
                </Link>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ MetLife Stadium
                </Link>
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ New York Travel Guide
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
