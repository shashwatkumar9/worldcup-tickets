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
  Flame,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Spain vs Netherlands Tickets | World Cup 2026 Group F | NRG Stadium",
  description: "Buy Spain vs Netherlands World Cup 2026 tickets at NRG Stadium, Houston. 2010 World Cup Final rematch between European giants!",
  keywords: [
    "Spain vs Netherlands tickets",
    "World Cup 2026 Houston tickets",
    "Spain World Cup 2026 tickets",
    "Netherlands World Cup 2026 tickets",
    "NRG Stadium World Cup",
    "FIFA World Cup 2026 Spain",
    "Houston World Cup tickets",
    "La Roja vs Oranje tickets",
    "2010 World Cup Final rematch",
  ],
}

const matchInfo = {
  homeTeam: { name: "Spain", flag: "🇪🇸", code: "ESP", nickname: "La Roja", fifaRanking: 8, group: "F" },
  awayTeam: { name: "Netherlands", flag: "🇳🇱", code: "NED", nickname: "Oranje", fifaRanking: 7, group: "F" },
  date: "June 16, 2026",
  time: "5:00 PM CT",
  venue: "NRG Stadium",
  city: "Houston, Texas",
  group: "F",
  matchNumber: 22,
  round: "Group Stage",
  expectedAttendance: 72000,
}

const spainPlayers = [
  { name: "Pedri", position: "Midfielder", club: "Barcelona", number: 26, star: true },
  { name: "Gavi", position: "Midfielder", club: "Barcelona", number: 9, star: true },
  { name: "Lamine Yamal", position: "Forward", club: "Barcelona", number: 19 },
  { name: "Unai Simón", position: "Goalkeeper", club: "Athletic Bilbao", number: 23 },
]

const netherlandsPlayers = [
  { name: "Cody Gakpo", position: "Forward", club: "Liverpool", number: 8, star: true },
  { name: "Frenkie de Jong", position: "Midfielder", club: "Barcelona", number: 21, star: true },
  { name: "Virgil van Dijk", position: "Defender", club: "Liverpool", number: 4 },
  { name: "Bart Verbruggen", position: "Goalkeeper", club: "Brighton", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 245, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 420, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 365, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 340, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2023, competition: "Nations League", result: "Spain 2-1 Netherlands", location: "Rotterdam" },
  { year: 2023, competition: "Nations League", result: "Netherlands 2-0 Spain", location: "Amsterdam" },
  { year: 2010, competition: "World Cup Final", result: "Spain 1-0 Netherlands (AET)", location: "South Africa" },
]

export default function SpainVsNetherlandsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-f-world-cup-2026-tickets" className="hover:text-white">Group F</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Spain vs Netherlands</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Trophy className="h-4 w-4 mr-2" />
                2010 FINAL REMATCH
              </Badge>
              <Badge className="bg-white text-red-800">GROUP F</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-yellow-500 text-black">2010 Champions</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-orange-600 text-white">3x Finalists</Badge>
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
                Buy Spain vs Netherlands Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group F Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-yellow-400 bg-gradient-to-r from-red-50 via-yellow-50 to-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">The 2010 World Cup Final Rematch</h3>
                    <p className="text-red-800 mt-2">
                      In one of the most anticipated group stage matches, Spain and Netherlands recreate their
                      legendary 2010 World Cup Final. That match in Johannesburg saw Andrés Iniesta score the
                      winning goal in extra time to give Spain their first-ever World Cup trophy. The Oranje
                      suffered their third final defeat. Sixteen years later, both teams boast exciting new
                      generations hungry to create their own history at NRG Stadium in Houston.
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
                  Complete Match Preview: Spain vs Netherlands
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: European Giants Collide in Houston</h3>
                <p>
                  The <strong>Spain vs Netherlands World Cup 2026</strong> match brings together two of European
                  football&apos;s most storied nations. On <strong>June 16, 2026</strong> at <strong>NRG Stadium
                  in Houston, Texas</strong>, the 2010 World Cup finalists face off in a Group F clash that
                  carries echoes of their historic meeting in South Africa. Both nations have rebuilt with
                  exciting young talent, and this encounter promises to showcase the best of European football.
                </p>

                <h3>Spain: La Roja&apos;s Golden Generation 2.0</h3>
                <p>
                  <strong>Spain (La Roja)</strong> has developed yet another golden generation. While the tiki-taka
                  era of Xavi, Iniesta, and company delivered World Cup and European Championship glory, a new
                  wave of Spanish talent has emerged. Barcelona&apos;s midfield production line continues to
                  produce exceptional players, and Spain enters 2026 with genuine belief they can reclaim the
                  trophy they last won under Vicente del Bosque.
                </p>
                <p>
                  <strong>Pedri</strong> (Barcelona) has established himself as one of football&apos;s premier
                  midfielders, combining Iniesta-like vision with remarkable composure under pressure. His
                  Barcelona teammate <strong>Gavi</strong> brings energy and tenacity to the midfield. Perhaps
                  most exciting is teenage sensation <strong>Lamine Yamal</strong>, whose emergence at just 16
                  has drawn comparisons to the greatest players in the sport. <strong>Unai Simón</strong>
                  provides reliable goalkeeping, having already proven himself in major tournaments.
                </p>

                <h3>Netherlands: Oranje&apos;s Quest for Glory</h3>
                <p>
                  <strong>Netherlands (Oranje)</strong> remains one of football&apos;s most fascinating nations.
                  Three World Cup finals without a victory represents a painful record for a country that has
                  produced so much footballing brilliance. The current generation, led by Liverpool stars and
                  Barcelona quality, offers perhaps the best chance to finally claim the ultimate prize. Dutch
                  football philosophy continues to emphasize attractive, attacking play.
                </p>
                <p>
                  <strong>Cody Gakpo</strong> (Liverpool) has developed into a complete attacking threat, capable
                  of scoring and creating from multiple positions. His Liverpool teammate <strong>Virgil van Dijk</strong>
                  remains one of the world&apos;s elite defenders, organizing the Dutch backline with authority.
                  <strong>Frenkie de Jong</strong> (Barcelona) orchestrates play from midfield with elegant
                  passing and intelligent movement. Young goalkeeper <strong>Bart Verbruggen</strong> represents
                  the next generation of Dutch goalkeeping excellence.
                </p>

                <h3>NRG Stadium: Houston&apos;s World Cup Venue</h3>
                <p>
                  <strong>NRG Stadium</strong> provides a world-class venue for this European showdown. Home to
                  the Houston Texans, the 72,000-capacity stadium features a retractable roof that will be
                  crucial for managing Houston&apos;s summer heat. Houston&apos;s diverse population and strong
                  soccer culture ensure passionate crowds, with significant Spanish and Dutch communities
                  ensuring vocal support for both teams.
                </p>

                <h3>The 2010 Final: Football&apos;s Most Physical Final</h3>
                <p>
                  The <strong>2010 World Cup Final</strong> remains one of the most controversial in tournament
                  history. Netherlands, frustrated by Spain&apos;s control, adopted increasingly aggressive
                  tactics - most infamously Nigel de Jong&apos;s kung-fu kick on Xabi Alonso that somehow only
                  earned a yellow card. Spain weathered the storm and broke through in extra time when
                  <strong>Andrés Iniesta</strong> controlled a Cesc Fàbregas pass and fired past Maarten Stekelenburg.
                  That goal gave Spain their first World Cup, while the Dutch endured another final heartbreak.
                </p>

                <h3>Tactical Evolution</h3>
                <p>
                  Spain&apos;s possession-based philosophy remains, but with more directness than the tiki-taka
                  era. <strong>Lamine Yamal&apos;s</strong> ability to beat defenders and create chances adds
                  an element of unpredictability. <strong>Pedri</strong> and <strong>Gavi</strong> control tempo,
                  while the full-backs provide width in attack. Spain&apos;s pressing has become more aggressive,
                  winning the ball in dangerous areas.
                </p>
                <p>
                  Netherlands under their manager have maintained attacking principles while adding tactical
                  flexibility. The 4-3-3 system remains popular, with <strong>Gakpo</strong> operating across
                  the forward line. <strong>Van Dijk&apos;s</strong> leadership and <strong>de Jong&apos;s</strong>
                  ball-carrying ability define Dutch play. Set pieces and counter-attacks offer alternative
                  routes to goal against possession-dominant opponents.
                </p>

                <h3>Barcelona Connection</h3>
                <p>
                  Several players from both nations share Barcelona connections. <strong>Pedri</strong>,
                  <strong>Gavi</strong>, and <strong>Lamine Yamal</strong> represent Spain alongside Dutch
                  midfielder <strong>Frenkie de Jong</strong>. These players train together daily, knowing
                  each other&apos;s games intimately. This familiarity could work both ways - understanding
                  teammates&apos; tendencies while also knowing their vulnerabilities.
                </p>

                <h3>Group F Stakes</h3>
                <p>
                  Group F is expected to be highly competitive, with Spain and Netherlands the clear favorites.
                  Victory in this match essentially guarantees knockout stage qualification and provides a
                  significant psychological advantage. The loser must respond strongly in remaining group
                  fixtures, adding pressure to what would become must-win matches.
                </p>

                <h3>Young Talent Showcase</h3>
                <p>
                  This match showcases football&apos;s future. <strong>Lamine Yamal</strong>, potentially still
                  a teenager at the 2026 World Cup, could become the tournament&apos;s breakout star. Spain&apos;s
                  midfield prodigies face Netherlands&apos; next generation. The World Cup often launches careers
                  into superstardom - this fixture could announce multiple stars to casual football fans worldwide.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Spain vs Netherlands World Cup 2026 tickets</strong> are in very high demand given
                  the history between these nations. Prices start from approximately $245 USD for Category 4
                  seats, with premium hospitality packages available. The 2010 Final narrative and attractive
                  playing styles of both teams ensure this match appeals to neutral fans as well as Spanish
                  and Dutch supporters. Early booking through official FIFA channels is strongly recommended.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇪🇸</span> Spain Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {spainPlayers.map((player) => (
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
                  <Link href="/teams/spain-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Spain Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇳🇱</span> Netherlands Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {netherlandsPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold">
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
                  <Link href="/teams/netherlands-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Netherlands Squad</Button>
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
                    <strong>Historic Final:</strong> Spain&apos;s 1-0 victory in the 2010 World Cup Final remains
                    the most significant meeting between these nations - Iniesta&apos;s goal gave Spain their first World Cup trophy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Venue: NRG Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">72,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">2002</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">Texans</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">7</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-red-700 hover:bg-red-800">
                    View All NRG Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Houston</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Houston, America&apos;s fourth-largest city, offers NASA&apos;s Space Center, world-class museums,
                  incredible Tex-Mex cuisine, and vibrant cultural districts. The diverse city welcomes World Cup fans.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• George Bush Airport (IAH)</li>
                      <li>• METRORail to NRG Park</li>
                      <li>• Easy highway access</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• NASA Space Center</li>
                      <li>• Museum District</li>
                      <li>• Buffalo Bayou Park</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/houston-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Houston Travel Guide
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
                  Spain vs Netherlands will attract massive European viewership, particularly given the 2010
                  Final history. Expect comprehensive coverage across all major broadcasters worldwide.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Spain</p>
                    <p className="text-sm text-slate-500">TVE / Gol</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Netherlands</p>
                    <p className="text-sm text-slate-500">NOS / NPO</p>
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
                  Buy 2010 Final Rematch Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>2010 FINAL REMATCH - High demand!</span>
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
                  <span className="font-medium">Houston, TX</span>
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
                <CardTitle>Group F Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/spain-vs-netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 border border-yellow-200">
                  <span>🇪🇸 vs 🇳🇱</span>
                  <span className="text-sm">Jun 16</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">Final</Badge>
                </Link>
                <Link href="/fixtures/spain-vs-colombia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇪🇸 vs 🇨🇴</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 20</span>
                </Link>
                <Link href="/fixtures/netherlands-vs-colombia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇳🇱 vs 🇨🇴</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 24</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/spain-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇪🇸 Spain Team Page
                </Link>
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇳🇱 Netherlands Team Page
                </Link>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ NRG Stadium
                </Link>
                <Link href="/travel/houston-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Houston Travel Guide
                </Link>
                <Link href="/fixtures/group-f-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group F Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
