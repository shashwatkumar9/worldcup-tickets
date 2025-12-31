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
  title: "USA vs Wales Tickets | World Cup 2026 Group A | AT&T Stadium",
  description: "Buy USA vs Wales World Cup 2026 tickets at AT&T Stadium, Dallas. The USMNT face Wales in a thrilling Group A clash on home soil!",
  keywords: [
    "USA vs Wales tickets",
    "World Cup 2026 Dallas tickets",
    "USA World Cup 2026 tickets",
    "Wales World Cup 2026 tickets",
    "AT&T Stadium World Cup",
    "FIFA World Cup 2026 USA",
    "Dallas World Cup tickets",
    "USMNT vs Dragons tickets",
    "American soccer tickets 2026",
  ],
}

const matchInfo = {
  homeTeam: { name: "USA", flag: "🇺🇸", code: "USA", nickname: "Stars and Stripes", fifaRanking: 11, group: "A" },
  awayTeam: { name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", code: "WAL", nickname: "The Dragons", fifaRanking: 28, group: "A" },
  date: "June 12, 2026",
  time: "8:00 PM CT",
  venue: "AT&T Stadium",
  city: "Dallas, Texas",
  group: "A",
  matchNumber: 3,
  round: "Group Stage",
  expectedAttendance: 80000,
}

const usaPlayers = [
  { name: "Christian Pulisic", position: "Forward", club: "AC Milan", number: 10, star: true },
  { name: "Gio Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7, star: true },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
  { name: "Matt Turner", position: "Goalkeeper", club: "Nottingham Forest", number: 1 },
]

const walesPlayers = [
  { name: "Gareth Bale", position: "Forward", club: "Retired", number: 11, star: true },
  { name: "Aaron Ramsey", position: "Midfielder", club: "Cardiff City", number: 10, star: true },
  { name: "Daniel James", position: "Forward", club: "Leeds United", number: 20 },
  { name: "Wayne Hennessey", position: "Goalkeeper", club: "Nottingham Forest", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 195, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 350, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 295, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 275, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "USA 1-1 Wales", location: "Qatar" },
  { year: 2020, competition: "Friendly", result: "USA 0-0 Wales", location: "Swansea" },
  { year: 2003, competition: "Friendly", result: "USA 2-0 Wales", location: "San Jose" },
]

export default function USAvsWalesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-red-600 to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-a-world-cup-2026-tickets" className="hover:text-white">Group A</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">USA vs Wales</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-blue-600 text-white text-lg px-4 py-1">
                <Home className="h-4 w-4 mr-2" />
                HOST NATION MATCH
              </Badge>
              <Badge className="bg-white text-blue-800">GROUP A</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-blue-600 text-white">FIFA #{matchInfo.homeTeam.fifaRanking}</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-green-600 text-white">FIFA #{matchInfo.awayTeam.fifaRanking}</Badge>
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Ticket className="mr-2 h-5 w-5" />
                Buy USA vs Wales Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group A Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-blue-400 bg-gradient-to-r from-blue-50 via-red-50 to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900">The Host Nation&apos;s World Cup Dream Begins</h3>
                    <p className="text-blue-800 mt-2">
                      The United States Men&apos;s National Team takes center stage at the world&apos;s biggest
                      sporting event on home soil. This Group A clash against Wales is a rematch of their dramatic
                      2022 World Cup encounter in Qatar. With 80,000 fans expected at AT&T Stadium in Dallas, the
                      atmosphere will be nothing short of electric. This is American soccer&apos;s moment to shine
                      on the global stage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-blue-600" />
                  Complete Match Preview: USA vs Wales
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: America&apos;s Historic Home Tournament</h3>
                <p>
                  The <strong>USA vs Wales World Cup 2026</strong> match represents a pivotal moment in American soccer
                  history. On <strong>June 12, 2026</strong> at <strong>AT&T Stadium in Dallas, Texas</strong>, the
                  USMNT will take the field in front of an anticipated 80,000 passionate fans as co-hosts of the
                  FIFA World Cup for the first time since 1994. This Group A encounter against Wales carries immense
                  significance for both nations as they seek to advance in the tournament.
                </p>

                <h3>USA: The Emerging Soccer Nation</h3>
                <p>
                  The <strong>United States Men&apos;s National Team</strong> has undergone a remarkable transformation
                  in recent years. After missing the 2018 World Cup, the team qualified for Qatar 2022 with the youngest
                  squad in the tournament, featuring players who have become stars at Europe&apos;s biggest clubs. By 2026,
                  this golden generation will be in their prime, with the added advantage of playing on home soil in front
                  of millions of American fans.
                </p>
                <p>
                  <strong>Christian Pulisic</strong> (AC Milan) stands as the face of American soccer, combining
                  technical brilliance with fierce determination. His Champions League experience and Serie A success
                  make him one of the most dangerous attackers in the tournament. <strong>Gio Reyna</strong> provides
                  creative spark from midfield, while <strong>Weston McKennie</strong> brings physicality and tactical
                  intelligence. The depth of American talent in European leagues gives head coach Gregg Berhalter
                  numerous options across all positions.
                </p>

                <h3>Wales: The Dragons&apos; European Excellence</h3>
                <p>
                  <strong>Wales (The Dragons)</strong> continue to punch above their weight on the international stage.
                  Their Euro 2016 semifinal run and subsequent World Cup 2022 qualification demonstrated that Welsh
                  football has genuine quality beyond individual brilliance. While <strong>Gareth Bale</strong> has
                  retired, his legacy and the foundation he helped build remain strong. Wales will approach this
                  tournament with characteristic determination and tactical discipline.
                </p>
                <p>
                  <strong>Aaron Ramsey</strong> provides experience and leadership in midfield, having played at the
                  highest levels with Arsenal and Juventus. <strong>Daniel James</strong> offers pace and directness
                  on the wing, capable of troubling any defense. The Welsh squad may lack the star power of larger
                  nations, but their team cohesion and fighting spirit make them dangerous opponents for anyone.
                </p>

                <h3>AT&T Stadium: America&apos;s Football Cathedral</h3>
                <p>
                  <strong>AT&T Stadium</strong> in Arlington (Dallas-Fort Worth metroplex) provides one of the most
                  impressive venues in world sports. Home to the Dallas Cowboys, this 80,000+ capacity stadium features
                  a retractable roof, the world&apos;s largest HD video board, and state-of-the-art facilities. For
                  World Cup 2026, the stadium will be configured for soccer, creating an atmosphere that combines
                  American sporting spectacle with international football passion.
                </p>

                <h3>2022 World Cup Rematch</h3>
                <p>
                  This fixture carries added significance as a rematch from the <strong>2022 World Cup</strong> in Qatar.
                  In that memorable encounter, the USA and Wales shared a 1-1 draw. <strong>Timothy Weah</strong> gave
                  the Americans an early lead before <strong>Gareth Bale</strong> converted a late penalty to salvage
                  a point for Wales. That result ultimately affected both teams&apos; tournament trajectories, adding
                  extra spice to this 2026 rematch. The USA will be seeking revenge, while Wales will look to replicate
                  their resilience.
                </p>

                <h3>Tactical Battle</h3>
                <p>
                  The <strong>USMNT</strong> typically employs a high-pressing, possession-based style that has become
                  their trademark under coach Gregg Berhalter. <strong>Christian Pulisic&apos;s</strong> movement between
                  lines and <strong>Gio Reyna&apos;s</strong> creativity will be key to breaking down Welsh defensive
                  organization. The Americans&apos; youthful energy and technical quality should create numerous
                  chances against any opponent.
                </p>
                <p>
                  Wales will likely adopt a more pragmatic approach, focusing on defensive solidity and quick counter-attacks.
                  <strong>Daniel James&apos;s</strong> pace can exploit any defensive gaps left by American attacking
                  commitment. Set pieces will also be crucial, with Wales possessing good aerial threat and delivery
                  quality from wide areas.
                </p>

                <h3>The Home Advantage Factor</h3>
                <p>
                  Playing at home in a World Cup provides significant advantages. The USA will benefit from familiar
                  conditions, minimal travel fatigue, and overwhelming crowd support. AT&T Stadium&apos;s atmosphere
                  with 80,000 American fans will create intense pressure on opponents. Historical data shows host
                  nations typically overperform at World Cups, and the USA will look to continue that trend.
                </p>

                <h3>Group A Implications</h3>
                <p>
                  Group A features USA, Mexico, Wales, and South Africa. The USA vs Wales match could prove decisive
                  in determining which teams advance from the group. Both nations will view victory here as essential
                  for progressing to the knockout rounds. The loser faces significant pressure in their remaining
                  group fixtures, making this an effective must-win match despite being early in the tournament.
                </p>

                <h3>Cultural Significance</h3>
                <p>
                  This match represents the continued growth of soccer in America. World Cup 2026 is seen as a
                  transformational moment for the sport in the United States, with potential to capture mainstream
                  attention and inspire a new generation of players and fans. Victory against Wales would provide
                  an immediate boost to the tournament&apos;s narrative and American soccer&apos;s trajectory.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>USA vs Wales World Cup 2026 tickets</strong> are among the most sought-after for American
                  fans. Prices start from approximately $195 USD for Category 4 seats, with premium hospitality
                  packages available for corporate and VIP guests. As a host nation match in Texas, demand from
                  American fans will be exceptionally high. Early booking through official FIFA channels is
                  strongly recommended to secure seats for this historic occasion.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span> USA Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {usaPlayers.map((player) => (
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
                  <Link href="/teams/usa-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full USA Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span> Wales Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {walesPlayers.map((player) => (
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
                  <Link href="/teams/wales-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Wales Squad</Button>
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
                    <strong>2022 World Cup:</strong> The teams drew 1-1 in Qatar with Timothy Weah and Gareth Bale
                    scoring. This 2026 match is the rematch both sets of fans have been waiting for.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Venue: AT&T Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">80,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">2009</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">Cowboys</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">8</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/att-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View All AT&T Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Dallas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Dallas-Fort Worth offers world-class hospitality, legendary Texan cuisine, and vibrant nightlife.
                  The metroplex provides excellent infrastructure for World Cup visitors.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• DFW International Airport</li>
                      <li>• DART Rail to Arlington</li>
                      <li>• Extensive highway network</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Dallas Arts District</li>
                      <li>• Fort Worth Stockyards</li>
                      <li>• Deep Ellum neighborhood</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/dallas-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Dallas Travel Guide
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
                  USA vs Wales will be broadcast across all major American networks with prime time coverage.
                  Expect record-breaking viewership figures for this host nation match.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">USA</p>
                    <p className="text-sm text-slate-500">FOX / Telemundo</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">UK/Wales</p>
                    <p className="text-sm text-slate-500">BBC / ITV / S4C</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Canada</p>
                    <p className="text-sm text-slate-500">TSN / CTV</p>
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
                  <Ticket className="h-5 w-5 text-blue-600" />
                  Buy USA vs Wales Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>HOST NATION - Extremely High Demand!</span>
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
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
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
                  <span className="font-medium">Dallas, TX</span>
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
                <CardTitle>Group A Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/mexico-vs-south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇲🇽 vs 🇿🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 11</span>
                </Link>
                <Link href="/fixtures/usa-vs-wales-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 border border-blue-200">
                  <span>🇺🇸 vs 🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
                  <span className="text-sm">Jun 12</span>
                  <Badge className="ml-auto bg-blue-600 text-white text-xs">Host</Badge>
                </Link>
                <Link href="/fixtures/mexico-vs-wales-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇲🇽 vs 🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 17</span>
                </Link>
                <Link href="/fixtures/usa-vs-south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇺🇸 vs 🇿🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 17</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇺🇸 USA Team Page
                </Link>
                <Link href="/teams/wales-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Team Page
                </Link>
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ AT&T Stadium
                </Link>
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Dallas Travel Guide
                </Link>
                <Link href="/fixtures/group-a-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group A Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
