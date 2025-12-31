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
  title: "Croatia vs Tunisia Tickets | World Cup 2026 Group I | Mercedes-Benz Stadium",
  description: "Buy Croatia vs Tunisia World Cup 2026 tickets at Mercedes-Benz Stadium, Atlanta. 2018 World Cup finalists face the Eagles of Carthage!",
  keywords: [
    "Croatia vs Tunisia tickets",
    "World Cup 2026 Atlanta tickets",
    "Croatia World Cup 2026 tickets",
    "Tunisia World Cup 2026 tickets",
    "Mercedes-Benz Stadium World Cup",
    "FIFA World Cup 2026 Croatia",
    "Atlanta World Cup tickets",
    "Vatreni vs Eagles of Carthage tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Croatia", flag: "🇭🇷", code: "CRO", nickname: "Vatreni", fifaRanking: 9, group: "I" },
  awayTeam: { name: "Tunisia", flag: "🇹🇳", code: "TUN", nickname: "Eagles of Carthage", fifaRanking: 35, group: "I" },
  date: "June 17, 2026",
  time: "2:00 PM ET",
  venue: "Mercedes-Benz Stadium",
  city: "Atlanta, Georgia",
  group: "I",
  matchNumber: 26,
  round: "Group Stage",
  expectedAttendance: 71000,
}

const croatiaPlayers = [
  { name: "Luka Modrić", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Joško Gvardiol", position: "Defender", club: "Manchester City", number: 20, star: true },
  { name: "Mateo Kovačić", position: "Midfielder", club: "Manchester City", number: 8 },
  { name: "Dominik Livaković", position: "Goalkeeper", club: "Fenerbahce", number: 1 },
]

const tunisiaPlayers = [
  { name: "Youssef Msakni", position: "Forward", club: "Al-Arabi", number: 7, star: true },
  { name: "Hannibal Mejbri", position: "Midfielder", club: "Burnley", number: 8, star: true },
  { name: "Montassar Talbi", position: "Defender", club: "Lorient", number: 6 },
  { name: "Aymen Dahmen", position: "Goalkeeper", club: "Esperance", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 165, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 295, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 255, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 230, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 1998, competition: "World Cup", result: "Croatia 1-0 Tunisia", location: "France" },
  { year: 1996, competition: "Friendly", result: "Tunisia 1-1 Croatia", location: "Tunis" },
]

export default function CroatiaVsTunisiaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-i-world-cup-2026-tickets" className="hover:text-white">Group I</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Croatia vs Tunisia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Trophy className="h-4 w-4 mr-2" />
                2018 FINALISTS
              </Badge>
              <Badge className="bg-white text-red-800">GROUP I</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-red-700 text-white">2018 Finalists</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-red-600 text-white">6x WC Participant</Badge>
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
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Croatia vs Tunisia Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group I Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-red-400 bg-gradient-to-r from-red-50 via-white to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-700 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">World Cup Finalists Meet African Pride</h3>
                    <p className="text-red-800 mt-2">
                      Croatia&apos;s golden generation - led by the evergreen Luka Modrić - faces Tunisia in a
                      Group I encounter at Mercedes-Benz Stadium. The Vatreni reached the 2018 World Cup Final
                      and finished third in 2022, establishing themselves as consistent tournament performers.
                      Tunisia, North Africa&apos;s most experienced World Cup nation, brings determination and
                      defensive organization to this Atlanta clash.
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
                  Complete Match Preview: Croatia vs Tunisia
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: Experience Meets African Grit</h3>
                <p>
                  The <strong>Croatia vs Tunisia World Cup 2026</strong> match features one of the tournament&apos;s
                  most experienced teams against a determined African side. On <strong>June 17, 2026</strong>
                  at <strong>Mercedes-Benz Stadium in Atlanta, Georgia</strong>, Croatia&apos;s technically gifted
                  squad faces Tunisia&apos;s organized and passionate Eagles of Carthage. This Group I fixture
                  could prove decisive for knockout stage qualification.
                </p>

                <h3>Croatia: The Unlikely Giants</h3>
                <p>
                  <strong>Croatia (Vatreni)</strong> have established themselves as genuine World Cup contenders
                  despite their small population of just 4 million. Their run to the 2018 Final - defeating
                  Denmark, Russia, and England en route - captured global hearts. A third-place finish in Qatar
                  2022 proved it was no fluke. <strong>Luka Modrić</strong> leads a team that combines technical
                  excellence with remarkable tournament mentality.
                </p>
                <p>
                  <strong>Luka Modrić</strong> (Real Madrid), at 40, plays potentially his final World Cup.
                  The Ballon d&apos;Or winner remains capable of controlling matches with his vision and passing.
                  <strong>Joško Gvardiol</strong> (Manchester City) has emerged as one of the world&apos;s best
                  young defenders, combining physical presence with elegant ball-playing ability. <strong>Mateo
                  Kovačić</strong> provides midfield dynamism, while <strong>Dominik Livaković</strong> proved
                  himself a hero in 2022&apos;s penalty shootouts.
                </p>

                <h3>Tunisia: North Africa&apos;s World Cup Veterans</h3>
                <p>
                  <strong>Tunisia (Eagles of Carthage)</strong> have qualified for six World Cups - more than
                  any other African nation. Their 2022 campaign saw impressive draws against Denmark and France
                  (defeating the world champions 1-0 after Les Bleus had already qualified). Tunisian football
                  combines African physicality with technical proficiency, creating a competitive side that
                  never accepts defeat easily.
                </p>
                <p>
                  <strong>Youssef Msakni</strong> remains Tunisia&apos;s creative force, capable of producing
                  match-winning moments. Young talent <strong>Hannibal Mejbri</strong> (Burnley) represents
                  Tunisia&apos;s future, bringing Premier League experience to midfield. <strong>Montassar
                  Talbi</strong> anchors the defense, while <strong>Aymen Dahmen</strong> provides reliable
                  goalkeeping. Tunisia&apos;s team spirit often compensates for individual quality disparities.
                </p>

                <h3>Mercedes-Benz Stadium: Atlanta&apos;s Architectural Marvel</h3>
                <p>
                  <strong>Mercedes-Benz Stadium</strong> represents cutting-edge stadium design. Home to Atlanta
                  United (MLS) and the Atlanta Falcons (NFL), its 71,000 capacity and spectacular retractable
                  roof create an impressive atmosphere. The stadium&apos;s halo videoboard - the world&apos;s
                  largest - enhances the matchday experience. Atlanta&apos;s passionate soccer culture, built
                  through Atlanta United&apos;s MLS success, ensures electric crowds.
                </p>

                <h3>1998 World Cup Meeting</h3>
                <p>
                  Croatia and Tunisia met at the <strong>1998 World Cup</strong> in France, with Croatia winning
                  1-0. That Croatian team finished third in the tournament - still their joint-best World Cup
                  result until 2018. <strong>Robert Prosinečki</strong> and <strong>Davor Šuker</strong> led that
                  generation. This 2026 meeting offers Tunisia a chance to avenge that defeat after 28 years.
                </p>

                <h3>Tactical Analysis</h3>
                <p>
                  Croatia&apos;s possession-based approach relies on midfield control. <strong>Modrić&apos;s</strong>
                  passing range and <strong>Kovačić&apos;s</strong> ball-carrying create numerical advantages.
                  <strong>Gvardiol&apos;s</strong> ability to drive forward from defense adds attacking dimension.
                  Croatia patiently probe for openings rather than forcing play, making them difficult to defend
                  against for 90 minutes.
                </p>
                <p>
                  Tunisia will likely adopt a compact defensive shape, looking to frustrate Croatian possession
                  and counter-attack through <strong>Msakni</strong>. Set pieces offer opportunities against
                  Croatia&apos;s relatively small defensive setup. The Eagles of Carthage&apos;s discipline and
                  organization can trouble even the most technically gifted opponents when executed correctly.
                </p>

                <h3>Modrić&apos;s Final World Cup?</h3>
                <p>
                  <strong>Luka Modrić</strong> enters 2026 as one of football&apos;s all-time great midfielders.
                  His 2018 Ballon d&apos;Or and numerous Champions League titles cement his legacy. At 40, this
                  almost certainly represents his final World Cup - a chance to add the only trophy missing from
                  his extraordinary career. Tunisia must contain his influence to have any chance.
                </p>

                <h3>Group I Stakes</h3>
                <p>
                  Group I features Croatia, Tunisia, and two other teams competing for knockout stage places.
                  Croatia enters as favorites but cannot underestimate any opponent. Victory in this match
                  would essentially guarantee Croatian progression, while Tunisia needs positive results against
                  favorites to maintain knockout stage hopes. Neither team can afford defeat.
                </p>

                <h3>Croatian Mentality</h3>
                <p>
                  Croatia&apos;s tournament performances consistently exceed expectations. Their ability to win
                  penalty shootouts (three in 2022 alone) demonstrates mental strength forged through numerous
                  high-pressure situations. This experience becomes invaluable in tight World Cup matches where
                  composure determines outcomes.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Croatia vs Tunisia World Cup 2026 tickets</strong> are available with prices starting
                  from approximately $165 USD for Category 4 seats. Premium hospitality packages offer enhanced
                  experiences at Atlanta&apos;s spectacular venue. Croatian supporters travel exceptionally well,
                  while Tunisia&apos;s large diaspora community ensures competitive atmosphere. Early booking
                  through official FIFA channels is recommended.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇭🇷</span> Croatia Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {croatiaPlayers.map((player) => (
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
                  <Link href="/teams/croatia-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Croatia Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇹🇳</span> Tunisia Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {tunisiaPlayers.map((player) => (
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
                  <Link href="/teams/tunisia-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Tunisia Squad</Button>
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
                    <strong>1998 World Cup:</strong> Croatia&apos;s 1-0 victory in France came during their
                    remarkable run to third place - their joint-best World Cup finish until 2018&apos;s runner-up.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Venue: Mercedes-Benz Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">71,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">2017</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">Atlanta UTD</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">7</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-red-700 hover:bg-red-800">
                    View All Mercedes-Benz Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Atlanta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Atlanta offers Southern hospitality, world-class attractions, diverse cuisine, and rich civil
                  rights history. The city&apos;s passionate soccer culture makes it ideal for World Cup hosting.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Hartsfield-Jackson Airport</li>
                      <li>• MARTA rail to stadium</li>
                      <li>• Downtown walkable area</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Georgia Aquarium</li>
                      <li>• MLK Jr. Historic Site</li>
                      <li>• Ponce City Market</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Atlanta Travel Guide
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
                  Croatia vs Tunisia will attract viewership from both nations and neutral fans drawn to
                  watching Croatia&apos;s talented squad compete at what may be Modrić&apos;s final World Cup.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Croatia</p>
                    <p className="text-sm text-slate-500">HRT</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Tunisia</p>
                    <p className="text-sm text-slate-500">Wataniya</p>
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
                  Buy Croatia vs Tunisia Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>2018 FINALISTS - Strong demand!</span>
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
                    <Button size="sm" className="bg-red-700 hover:bg-red-800 text-white" asChild>
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
                  <span className="font-medium">Atlanta, GA</span>
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
                <CardTitle>Group I Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/croatia-vs-serbia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇭🇷 vs 🇷🇸</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/croatia-vs-tunisia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 border border-red-200">
                  <span>🇭🇷 vs 🇹🇳</span>
                  <span className="text-sm">Jun 17</span>
                  <Badge className="ml-auto bg-red-600 text-white text-xs">2018</Badge>
                </Link>
                <Link href="/fixtures/serbia-vs-tunisia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇷🇸 vs 🇹🇳</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 21</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/croatia-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇭🇷 Croatia Team Page
                </Link>
                <Link href="/teams/tunisia-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇹🇳 Tunisia Team Page
                </Link>
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Mercedes-Benz Stadium
                </Link>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Atlanta Travel Guide
                </Link>
                <Link href="/fixtures/group-i-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group I Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
