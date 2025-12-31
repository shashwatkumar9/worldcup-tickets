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
  title: "Mexico vs South Africa Tickets | World Cup 2026 Opening Match | Estadio Azteca",
  description: "Buy Mexico vs South Africa World Cup 2026 Opening Match tickets at Estadio Azteca, Mexico City. June 11, 2026. Historic opening game - be part of World Cup history!",
  keywords: [
    "Mexico vs South Africa tickets",
    "World Cup 2026 Opening Match tickets",
    "Estadio Azteca World Cup tickets",
    "Mexico World Cup 2026 tickets",
    "South Africa World Cup 2026 tickets",
    "FIFA World Cup 2026 Opening Match",
    "Mexico City World Cup tickets",
    "El Tri vs Bafana Bafana tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Mexico", flag: "🇲🇽", code: "MEX", nickname: "El Tri" },
  awayTeam: { name: "South Africa", flag: "🇿🇦", code: "RSA", nickname: "Bafana Bafana" },
  date: "June 11, 2026",
  time: "3:00 PM ET / 2:00 PM CT",
  venue: "Estadio Azteca",
  city: "Mexico City, Mexico",
  group: "A",
  matchNumber: 1,
  round: "Group Stage",
  special: "OPENING MATCH",
}

const mexicoPlayers = [
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4, star: true },
  { name: "Hirving Lozano", position: "Forward", club: "PSV", number: 22, star: true },
  { name: "Santiago Giménez", position: "Forward", club: "Feyenoord", number: 9 },
  { name: "Guillermo Ochoa", position: "Goalkeeper", club: "Salernitana", number: 13 },
]

const southAfricaPlayers = [
  { name: "Percy Tau", position: "Forward", club: "Al Ahly", number: 10, star: true },
  { name: "Ronwen Williams", position: "Goalkeeper", club: "Mamelodi Sundowns", number: 1, star: true },
  { name: "Themba Zwane", position: "Midfielder", club: "Mamelodi Sundowns", number: 12 },
  { name: "Bongokuhle Hlongwane", position: "Forward", club: "Minnesota United", number: 21 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 195, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 285, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 250, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 220, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2010, competition: "World Cup", result: "Mexico 1-1 South Africa", location: "Johannesburg" },
  { year: 2004, competition: "Friendly", result: "Mexico 2-1 South Africa", location: "Mexico City" },
  { year: 1999, competition: "Confederations Cup", result: "Mexico 3-1 South Africa", location: "Mexico City" },
]

export default function MexicoVsSouthAfricaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-yellow-400 to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/groups/group-a-world-cup-2026-tickets" className="hover:text-white">Group A</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Mexico vs South Africa</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Trophy className="h-4 w-4 mr-2" />
                OPENING MATCH
              </Badge>
              <Badge className="bg-white text-green-800">GROUP A</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match 1</Badge>
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
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Opening Match Tickets
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

            {/* Historic Match Banner */}
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-900">Making World Cup History</h3>
                    <p className="text-green-800 mt-2">
                      The FIFA World Cup 2026 Opening Match between Mexico and South Africa at Estadio Azteca will be one of the most
                      historic moments in football history. This match marks the beginning of the first 48-team World Cup and will be
                      held at the only stadium to host three World Cup tournaments (1970, 1986, and 2026).
                    </p>
                    <p className="text-green-700 mt-2 text-sm">
                      Over 87,000 passionate fans will witness history at the legendary Estadio Azteca in Mexico City.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-green-700" />
                  Complete Match Preview: Mexico vs South Africa
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026 Opening Match Overview</h3>
                <p>
                  The <strong>Mexico vs South Africa World Cup 2026</strong> opening match represents far more than just a football game -
                  it&apos;s the beginning of the largest and most ambitious FIFA World Cup ever staged. On <strong>June 11, 2026</strong>,
                  at the iconic <strong>Estadio Azteca in Mexico City</strong>, two footballing nations with rich World Cup histories
                  will write the first chapter of this historic tournament.
                </p>

                <h3>Why This Match Matters</h3>
                <p>
                  This Group A encounter carries immense significance for multiple reasons. For <strong>Mexico (El Tri)</strong>, playing the
                  opening match of the World Cup on home soil is the ultimate privilege. Mexico becomes the first country to host or
                  co-host three FIFA World Cups, and the passionate Mexican supporters will create an atmosphere unlike any other
                  at the 87,000-capacity Estadio Azteca.
                </p>
                <p>
                  For <strong>South Africa (Bafana Bafana)</strong>, this represents a return to football&apos;s biggest stage after hosting
                  the tournament in 2010. The opening match between these two nations in 2010 ended 1-1, making this a historic rematch
                  16 years later at the opposite end of the world.
                </p>

                <h3>Estadio Azteca: A Cathedral of Football</h3>
                <p>
                  <strong>Estadio Azteca</strong> is the only stadium in the world to have hosted two FIFA World Cup Finals (1970 and 1986).
                  This is where Pelé lifted the Jules Rimet Trophy in 1970 and where Diego Maradona scored his legendary &quot;Goal of the
                  Century&quot; and &quot;Hand of God&quot; goal in 1986. The stadium&apos;s altitude of 2,240 meters (7,350 feet) above sea
                  level creates unique playing conditions that often favor the Mexican team.
                </p>

                <h3>Mexico&apos;s World Cup 2026 Expectations</h3>
                <p>
                  Under coach <strong>Javier Aguirre</strong>, Mexico enters this tournament with high expectations. The team features
                  talented players like midfielder <strong>Edson Álvarez</strong> (West Ham), forward <strong>Hirving Lozano</strong> (PSV),
                  and rising star <strong>Santiago Giménez</strong> (Feyenoord). With home advantage and a favorable group, Mexico aims
                  to finally break the &quot;Quinto Partido&quot; (Fifth Game) curse that has seen them exit in the Round of 16 in
                  seven consecutive World Cups.
                </p>

                <h3>South Africa&apos;s Journey to 2026</h3>
                <p>
                  <strong>Bafana Bafana</strong> qualified for their fourth World Cup after a strong African qualifying campaign.
                  Led by talented goalkeeper <strong>Ronwen Williams</strong> (African Player of the Year nominee) and experienced
                  forward <strong>Percy Tau</strong>, South Africa has the quality to compete. Their recent victories in African
                  competitions have restored confidence, and they&apos;ll be eager to make their mark on the world stage once again.
                </p>

                <h3>Head-to-Head History</h3>
                <p>
                  Mexico and South Africa have met three times previously, with the most memorable encounter being the 2010 World Cup
                  opening match in Johannesburg. That game ended 1-1, with Siphiwe Tshabalala scoring a stunning opening goal for
                  South Africa before Rafael Márquez equalized for Mexico. Both teams will have that historic draw in mind as they
                  face off again in 2026.
                </p>

                <h3>Key Players to Watch</h3>
                <p>
                  For Mexico, all eyes will be on <strong>Santiago Giménez</strong>, who has been in prolific form for Feyenoord in
                  the Eredivisie. The young striker will carry the hopes of a nation desperate for World Cup success. In midfield,
                  <strong>Edson Álvarez</strong> provides the steel and passing ability that makes El Tri tick.
                </p>
                <p>
                  South Africa will look to <strong>Percy Tau</strong> for inspiration in attack, while <strong>Ronwen Williams</strong>
                  has established himself as one of Africa&apos;s best goalkeepers. Young talents like <strong>Bongokuhle Hlongwane</strong>
                  (Minnesota United) bring MLS experience and pace to Bafana Bafana&apos;s attack.
                </p>

                <h3>Ticket Information and Prices</h3>
                <p>
                  <strong>World Cup 2026 Opening Match tickets</strong> are among the most sought-after in football history. Prices
                  start from approximately $195 USD for Category 4 seats, with premium categories reaching $500+ USD. Given the
                  historic nature of this match and the limited capacity, tickets are expected to sell out quickly.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇲🇽</span> Mexico Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {mexicoPlayers.map((player) => (
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
                  <Link href="/teams/mexico-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Mexico Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇿🇦</span> South Africa Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {southAfricaPlayers.map((player) => (
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
                  <Link href="/teams/south-africa-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full South Africa Squad</Button>
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
                    <strong>Overall Record:</strong> Mexico leads 2-0-1 (W-D-L) in all competitions. The most recent
                    meeting was the 2010 World Cup opening match that ended 1-1 in Johannesburg.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-700" />
                  Venue: Estadio Azteca
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">87,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">1966</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">2,240m</p>
                    <p className="text-sm text-slate-600">Altitude</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">3</p>
                    <p className="text-sm text-slate-600">World Cups</p>
                  </div>
                </div>
                <Link href="/venues/estadio-azteca-world-cup-2026-tickets">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    View All Estadio Azteca Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Mexico City</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Mexico City is one of the world&apos;s great metropolises with incredible food, culture, and history.
                  For the World Cup 2026 Opening Match, plan to arrive at least 2-3 days early to acclimatize to the altitude.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Mexico City Airport (MEX) - major international hub</li>
                      <li>• Metro Line 2 to Estadio Azteca station</li>
                      <li>• Uber and taxi readily available</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Where to Stay</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Roma/Condesa - trendy neighborhoods</li>
                      <li>• Centro Historico - historic center</li>
                      <li>• Coyoacan - near the stadium</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/mexico-city-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Mexico City Travel Guide
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
                  The World Cup 2026 Opening Match will be broadcast globally. In the USA, watch on FOX and Telemundo.
                  Check local listings for broadcast times in your region.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">USA</p>
                    <p className="text-sm text-slate-500">FOX / Telemundo</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">UK</p>
                    <p className="text-sm text-slate-500">BBC / ITV</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Mexico</p>
                    <p className="text-sm text-slate-500">Televisa / TV Azteca</p>
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
                  Buy Opening Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-yellow-700 text-sm bg-yellow-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>Extremely high demand - limited availability!</span>
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
                  <span className="font-medium">Mexico City</span>
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
                <Link href="/fixtures/mexico-vs-south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 border border-yellow-200">
                  <span>🇲🇽 vs 🇿🇦</span>
                  <span className="text-sm">Jun 11</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">Opening</Badge>
                </Link>
                <Link href="/fixtures/korea-republic-vs-denmark-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇰🇷 vs 🇩🇰</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 11</span>
                </Link>
                <Link href="/fixtures/mexico-vs-korea-republic-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇲🇽 vs 🇰🇷</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
                <Link href="/fixtures/south-africa-vs-denmark-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇿🇦 vs 🇩🇰</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/mexico-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇲🇽 Mexico Team Page
                </Link>
                <Link href="/teams/south-africa-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇿🇦 South Africa Team Page
                </Link>
                <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Estadio Azteca
                </Link>
                <Link href="/travel/mexico-city-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Mexico City Travel Guide
                </Link>
                <Link href="/groups/group-a-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
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
