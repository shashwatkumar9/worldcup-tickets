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
  Flame,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Nigeria vs Cameroon Tickets | World Cup 2026 Group E | GEODIS Park",
  description: "Buy Nigeria vs Cameroon World Cup 2026 tickets at GEODIS Park, Nashville. The biggest African rivalry on the World Cup stage!",
  keywords: [
    "Nigeria vs Cameroon tickets",
    "World Cup 2026 Nashville tickets",
    "Nigeria World Cup 2026 tickets",
    "Cameroon World Cup 2026 tickets",
    "GEODIS Park World Cup",
    "FIFA World Cup 2026 Nigeria",
    "Nashville World Cup tickets",
    "Super Eagles vs Indomitable Lions tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Nigeria", flag: "🇳🇬", code: "NGA", nickname: "Super Eagles", fifaRanking: 32, group: "E" },
  awayTeam: { name: "Cameroon", flag: "🇨🇲", code: "CMR", nickname: "Indomitable Lions", fifaRanking: 38, group: "E" },
  date: "June 23, 2026",
  time: "3:00 PM CT",
  venue: "GEODIS Park",
  city: "Nashville, Tennessee",
  group: "E",
  matchNumber: 42,
  round: "Group Stage",
  expectedAttendance: 30000,
}

const nigeriaPlayers = [
  { name: "Victor Osimhen", position: "Forward", club: "Napoli", number: 9, star: true },
  { name: "Samuel Chukwueze", position: "Forward", club: "AC Milan", number: 7, star: true },
  { name: "Wilfred Ndidi", position: "Midfielder", club: "Leicester City", number: 4 },
  { name: "Francis Uzoho", position: "Goalkeeper", club: "Almeria", number: 23 },
]

const cameroonPlayers = [
  { name: "André-Frank Zambo Anguissa", position: "Midfielder", club: "Napoli", number: 8, star: true },
  { name: "Eric Maxim Choupo-Moting", position: "Forward", club: "Bayern Munich", number: 13, star: true },
  { name: "Vincent Aboubakar", position: "Forward", club: "Besiktas", number: 10 },
  { name: "André Onana", position: "Goalkeeper", club: "Manchester United", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 265, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 225, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 205, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2023, competition: "AFCON R16", result: "Nigeria 2-0 Cameroon", location: "Ivory Coast" },
  { year: 2000, competition: "AFCON Final", result: "Cameroon 4-3 Nigeria (pen)", location: "Nigeria" },
  { year: 1994, competition: "World Cup", result: "Nigeria 0-0 Cameroon", location: "USA" },
]

export default function NigeriaVsCameroonPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-white to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-e-world-cup-2026-tickets" className="hover:text-white">Group E</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Nigeria vs Cameroon</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Flame className="h-4 w-4 mr-2" />
                AFRICAN DERBY
              </Badge>
              <Badge className="bg-white text-green-800">GROUP E</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-green-600 text-white">3x AFCON Winners</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-green-700 text-white">5x AFCON Winners</Badge>
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
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Nigeria vs Cameroon Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group E Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-green-400 bg-gradient-to-r from-green-50 via-white to-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Flame className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-900">Africa&apos;s Biggest Rivalry</h3>
                    <p className="text-green-800 mt-2">
                      Nigeria vs Cameroon is African football&apos;s most intense rivalry. The Super Eagles and
                      Indomitable Lions have contested dramatic AFCON finals, World Cup qualifiers, and countless
                      memorable encounters. Their 2000 AFCON Final in Lagos - won by Cameroon on penalties -
                      remains legendary. Now they meet at the World Cup for the first time since 1994, when they
                      played in the USA during a group stage encounter. History awaits in Nashville.
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
                  Complete Match Preview: Nigeria vs Cameroon
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: African Football&apos;s Ultimate Showdown</h3>
                <p>
                  The <strong>Nigeria vs Cameroon World Cup 2026</strong> match represents the pinnacle of
                  African football rivalry. On <strong>June 23, 2026</strong> at <strong>GEODIS Park in
                  Nashville, Tennessee</strong>, the Super Eagles and Indomitable Lions write another chapter
                  in their storied history. This Group E fixture carries enormous continental significance
                  beyond knockout stage implications.
                </p>

                <h3>Nigeria: Super Eagles&apos; European Stars</h3>
                <p>
                  <strong>Nigeria (Super Eagles)</strong> boast one of Africa&apos;s most talented squads, with
                  multiple players starring at Europe&apos;s biggest clubs. Their mix of pace, power, and
                  technical ability makes them dangerous opponents. Nigeria&apos;s passionate fanbase creates
                  incredible atmosphere wherever they play, and their World Cup history includes reaching the
                  Round of 16 on three occasions.
                </p>
                <p>
                  <strong>Victor Osimhen</strong> (Napoli) is one of world football&apos;s most feared strikers,
                  combining physical presence with clinical finishing. His Serie A success proves he can score
                  against anyone. <strong>Samuel Chukwueze</strong> (AC Milan) provides creative spark from
                  the wing, with pace and dribbling that troubles defenders. <strong>Wilfred Ndidi</strong>
                  brings Premier League steel to midfield, breaking up play and launching attacks.
                </p>

                <h3>Cameroon: Indomitable Lions&apos; Pride</h3>
                <p>
                  <strong>Cameroon (Indomitable Lions)</strong> are five-time African champions with a proud
                  World Cup history. Their 1990 quarterfinal run - led by Roger Milla - remains iconic. The
                  current squad combines experienced international campaigners with exciting young talent,
                  creating a team capable of competing with anyone when performing at their best.
                </p>
                <p>
                  <strong>André-Frank Zambo Anguissa</strong> (Napoli) is among Europe&apos;s most complete
                  midfielders, combining tireless running with technical excellence. His Napoli partnership
                  with Osimhen will feature divided loyalties in Nashville. <strong>Eric Maxim Choupo-Moting</strong>
                  (Bayern Munich) brings experience and proven finishing ability. <strong>André Onana</strong>
                  (Manchester United) provides world-class goalkeeping.
                </p>

                <h3>GEODIS Park: Nashville&apos;s Soccer Cathedral</h3>
                <p>
                  <strong>GEODIS Park</strong> may be the tournament&apos;s smallest venue at 30,000 capacity,
                  but its atmosphere ranks among the loudest. Home to Nashville SC, this soccer-specific
                  stadium creates intimate, intense matchday experiences. Nashville&apos;s growing African
                  diaspora community ensures passionate support for both teams, transforming Tennessee into
                  African football&apos;s American epicenter.
                </p>

                <h3>Historic Rivalry Context</h3>
                <p>
                  Nigeria and Cameroon have produced countless memorable encounters. The <strong>2000 AFCON
                  Final</strong> in Lagos saw Cameroon triumph on penalties after a 2-2 draw, winning in
                  Nigeria&apos;s backyard. Their <strong>1994 World Cup</strong> meeting in the USA produced
                  a 0-0 draw in the &quot;Group of Death&quot; alongside Argentina and Bulgaria. At <strong>AFCON
                  2023</strong>, Nigeria defeated Cameroon 2-0 in the Round of 16, eliminating their rivals.
                </p>

                <h3>Tactical Analysis</h3>
                <p>
                  Nigeria typically employs an attacking 4-3-3 system built around <strong>Osimhen&apos;s</strong>
                  central threat. <strong>Chukwueze</strong> and other wingers stretch defenses, creating space
                  for Osimhen&apos;s runs. <strong>Ndidi&apos;s</strong> presence allows full-backs to overlap,
                  adding width and crossing options. Nigeria&apos;s directness and physical power pose problems
                  for any opponent.
                </p>
                <p>
                  Cameroon&apos;s midfield-focused approach relies on <strong>Anguissa&apos;s</strong> ability
                  to control games. <strong>Choupo-Moting</strong> provides aerial presence and hold-up play,
                  bringing others into attacks. <strong>Onana&apos;s</strong> distribution allows Cameroon to
                  build from the back, though their aggressive approach sometimes leaves spaces to exploit.
                </p>

                <h3>Napoli Connection</h3>
                <p>
                  <strong>Victor Osimhen</strong> and <strong>Zambo Anguissa</strong> are Serie A title-winning
                  teammates at Napoli. Their understanding and friendship at club level will be suspended for
                  90 minutes as continental pride takes precedence. Both understand each other&apos;s games
                  perfectly - knowledge that could prove decisive for either team.
                </p>

                <h3>Group E Stakes</h3>
                <p>
                  Group E features France, Australia, Nigeria, and Cameroon. With defending champions France
                  expected to win the group, Nigeria and Cameroon likely compete for the remaining knockout
                  stage positions. Victory in this match could prove decisive for advancement, making this
                  derby even more significant. Neither African giant can afford defeat.
                </p>

                <h3>African Football Pride</h3>
                <p>
                  This match represents African football at its passionate best. Nigeria&apos;s 220 million
                  population and Cameroon&apos;s proud football history create enormous stakes beyond World
                  Cup qualification. Victory brings continental bragging rights; defeat means enduring rivals&apos;
                  celebrations until the next encounter. Neither fanbase accepts losing to the other easily.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Nigeria vs Cameroon World Cup 2026 tickets</strong> are in extremely high demand
                  given the rivalry&apos;s intensity. GEODIS Park&apos;s 30,000 capacity makes tickets particularly
                  scarce. Prices start from approximately $145 USD for Category 4 seats, but expect premium
                  prices for this sought-after fixture. Early booking through official FIFA channels is
                  absolutely essential for this African derby.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇳🇬</span> Nigeria Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {nigeriaPlayers.map((player) => (
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
                  <Link href="/teams/nigeria-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Nigeria Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇲</span> Cameroon Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {cameroonPlayers.map((player) => (
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
                  <Link href="/teams/cameroon-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Cameroon Squad</Button>
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
                    <strong>Historic Rivalry:</strong> The 2000 AFCON Final - won by Cameroon on penalties in
                    Lagos - remains one of African football&apos;s most dramatic matches ever.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Venue: GEODIS Park
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">30,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">2022</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">Nashville SC</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">4</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/geodis-park-world-cup-2026-tickets">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View All GEODIS Park Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Nashville</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Nashville offers legendary live music, Southern hospitality, incredible food, and vibrant
                  nightlife. Music City provides an unforgettable World Cup experience.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Nashville International (BNA)</li>
                      <li>• Downtown walkable</li>
                      <li>• Rideshare widely available</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Broadway honky-tonks</li>
                      <li>• Grand Ole Opry</li>
                      <li>• Country Music Hall of Fame</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/nashville-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Nashville Travel Guide
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
                  Nigeria vs Cameroon will attract massive viewership across Africa, with hundreds of millions
                  watching the continent&apos;s biggest rivalry unfold on the World Cup stage.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Nigeria</p>
                    <p className="text-sm text-slate-500">SuperSport</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Cameroon</p>
                    <p className="text-sm text-slate-500">CRTV</p>
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
            <Card className="sticky top-24 border-green-400">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-green-600" />
                  Buy Nigeria vs Cameroon Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>AFRICAN DERBY - Extremely limited tickets!</span>
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
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" asChild>
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
                  <span className="font-medium">Nashville, TN</span>
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
                <CardTitle>Group E Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/france-vs-australia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇫🇷 vs 🇦🇺</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 15</span>
                </Link>
                <Link href="/fixtures/france-vs-nigeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇫🇷 vs 🇳🇬</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 19</span>
                </Link>
                <Link href="/fixtures/nigeria-vs-cameroon-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-green-50 border border-green-200">
                  <span>🇳🇬 vs 🇨🇲</span>
                  <span className="text-sm">Jun 23</span>
                  <Badge className="ml-auto bg-green-600 text-white text-xs">Derby</Badge>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/nigeria-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇳🇬 Nigeria Team Page
                </Link>
                <Link href="/teams/cameroon-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇨🇲 Cameroon Team Page
                </Link>
                <Link href="/venues/geodis-park-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ GEODIS Park
                </Link>
                <Link href="/travel/nashville-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Nashville Travel Guide
                </Link>
                <Link href="/fixtures/group-e-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group E Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
