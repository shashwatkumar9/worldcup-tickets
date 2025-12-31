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
  Crown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Argentina vs Mexico Tickets | World Cup 2026 | Estadio Azteca",
  description: "Buy Argentina vs Mexico World Cup 2026 tickets at Estadio Azteca, Mexico City. World Champions vs Host Nation in the most anticipated match!",
  keywords: [
    "Argentina vs Mexico tickets",
    "World Cup 2026 Mexico City tickets",
    "Argentina World Cup 2026 tickets",
    "Mexico World Cup 2026 tickets",
    "Estadio Azteca World Cup",
    "FIFA World Cup 2026 Argentina",
    "Mexico City World Cup tickets",
    "Messi vs Mexico tickets",
    "La Albiceleste vs El Tri tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Mexico", flag: "🇲🇽", code: "MEX", nickname: "El Tri", fifaRanking: 15, group: "A" },
  awayTeam: { name: "Argentina", flag: "🇦🇷", code: "ARG", nickname: "La Albiceleste", fifaRanking: 1, group: "A" },
  date: "June 21, 2026",
  time: "7:00 PM CT",
  venue: "Estadio Azteca",
  city: "Mexico City, Mexico",
  group: "A",
  matchNumber: 35,
  round: "Group Stage",
  expectedAttendance: 87000,
}

const mexicoPlayers = [
  { name: "Hirving Lozano", position: "Forward", club: "PSV Eindhoven", number: 22, star: true },
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4, star: true },
  { name: "Raúl Jiménez", position: "Forward", club: "Fulham", number: 9 },
  { name: "Guillermo Ochoa", position: "Goalkeeper", club: "Salernitana", number: 13 },
]

const argentinaPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10, star: true },
  { name: "Julián Álvarez", position: "Forward", club: "Manchester City", number: 9, star: true },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
  { name: "Emiliano Martínez", position: "Goalkeeper", club: "Aston Villa", number: 23 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 395, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 750, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 650, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 595, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Argentina 2-0 Mexico", location: "Qatar" },
  { year: 2019, competition: "Friendly", result: "Argentina 4-0 Mexico", location: "San Antonio" },
  { year: 2010, competition: "World Cup R16", result: "Argentina 3-1 Mexico", location: "South Africa" },
  { year: 2006, competition: "World Cup R16", result: "Argentina 2-1 Mexico (AET)", location: "Germany" },
]

export default function ArgentinaVsMexicoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-white to-sky-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-a-world-cup-2026-tickets" className="hover:text-white">Group A</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Argentina vs Mexico</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Flame className="h-4 w-4 mr-2" />
                BLOCKBUSTER MATCH
              </Badge>
              <Badge className="bg-sky-400 text-white text-lg px-4 py-1">
                <Crown className="h-4 w-4 mr-2" />
                WORLD CHAMPIONS
              </Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-green-700 text-white">Host Nation</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-yellow-500 text-black">3x Champions</Badge>
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
                Buy Argentina vs Mexico Tickets
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
            <Card className="border-yellow-400 bg-gradient-to-r from-green-50 via-white to-sky-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Flame className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-900">The Match That Stops Two Continents</h3>
                    <p className="text-green-800 mt-2">
                      This is it. The match that every Mexican fan has dreamed of - facing the World Champions
                      at the legendary Estadio Azteca with 87,000 passionate supporters creating the most
                      intimidating atmosphere in world football. Lionel Messi brings his champions to Mexico City
                      in what could be his final World Cup. The rivalry, the history, the setting - nothing
                      matches Argentina vs Mexico at the Azteca.
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
                  Complete Match Preview: Argentina vs Mexico
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: The Ultimate Group Stage Showdown</h3>
                <p>
                  The <strong>Argentina vs Mexico World Cup 2026</strong> match represents everything that makes
                  the FIFA World Cup the greatest sporting event on Earth. On <strong>June 21, 2026</strong> at
                  the iconic <strong>Estadio Azteca in Mexico City</strong>, the reigning World Champions face
                  one of the tournament&apos;s host nations in front of 87,000 passionate Mexican fans. This
                  Group A decider will produce one of the tournament&apos;s most electric atmospheres.
                </p>

                <h3>Argentina: The Reigning Champions</h3>
                <p>
                  <strong>Argentina (La Albiceleste)</strong> enter 2026 as the team to beat. Their emotional
                  triumph at Qatar 2022 - finally delivering <strong>Lionel Messi</strong> his first World Cup
                  trophy - ranks among football&apos;s greatest stories. The team combined Messi&apos;s genius
                  with youthful energy and experienced steel, creating a side capable of winning any way necessary.
                  They arrive in North America seeking to become the first nation to win back-to-back World Cups
                  since Brazil in 1962.
                </p>
                <p>
                  <strong>Lionel Messi</strong> (Inter Miami), at 38, likely plays his final World Cup. His move
                  to MLS has brought him closer to this tournament geographically, and he enters as the tournament&apos;s
                  most celebrated figure. <strong>Julián Álvarez</strong> (Manchester City) has emerged as a
                  world-class striker in his own right, providing goals and tireless pressing. <strong>Enzo
                  Fernández</strong> (Chelsea) brings dynamism and passing range to midfield, while <strong>Emiliano
                  Martínez</strong> (Aston Villa) remains one of the world&apos;s best goalkeepers with unmatched
                  big-game mentality.
                </p>

                <h3>Mexico: The Desperate Hosts</h3>
                <p>
                  <strong>Mexico (El Tri)</strong> approach 2026 with enormous pressure. As co-hosts, they have
                  the opportunity to perform in front of their own fans on home soil. However, Mexico&apos;s recent
                  World Cup history has been frustrating - they&apos;ve been eliminated in the Round of 16 in seven
                  consecutive tournaments (the famous &quot;quinto partido&quot; curse). In 2022, they failed to
                  even escape the group stage for the first time since 1978. This tournament represents redemption.
                </p>
                <p>
                  <strong>Hirving Lozano</strong> (PSV Eindhoven) remains Mexico&apos;s most dangerous attacking
                  threat, with pace and directness that troubles any defense. <strong>Edson Álvarez</strong>
                  (West Ham) provides Premier League-quality midfield presence, breaking up play and initiating
                  attacks. <strong>Raúl Jiménez</strong> brings experience and target man qualities, while veteran
                  goalkeeper <strong>Guillermo Ochoa</strong> could be playing his final World Cup as Mexico&apos;s
                  longest-serving captain.
                </p>

                <h3>Estadio Azteca: The Temple of Football</h3>
                <p>
                  <strong>Estadio Azteca</strong> is arguably football&apos;s most legendary venue. The only
                  stadium to host two World Cup Finals (1970 and 1986), it has witnessed countless historic
                  moments - including Diego Maradona&apos;s &quot;Hand of God&quot; and &quot;Goal of the Century&quot;
                  against England. At 2,240 meters (7,350 feet) altitude, it presents unique physical challenges.
                  When 87,000 Mexican fans create their famous &quot;Ola&quot; wave and deafening atmosphere,
                  visiting teams face the most hostile environment in world football.
                </p>

                <h3>The Rivalry: History and Hurt</h3>
                <p>
                  Argentina dominates the head-to-head record, particularly in World Cup matches. Mexico has never
                  beaten Argentina at a World Cup, losing all four previous encounters. The 2022 meeting in Qatar
                  was crucial - Messi&apos;s stunning goal and Enzo Fernández&apos;s late strike gave Argentina a
                  2-0 victory that essentially ended Mexico&apos;s tournament. That result still stings for Mexican
                  fans, adding extra motivation for revenge on home soil.
                </p>

                <h3>Messi&apos;s Final Chapter?</h3>
                <p>
                  <strong>Lionel Messi</strong> has confirmed 2026 will likely be his final World Cup. At 38, he
                  brings wisdom, vision, and the weight of history to every match. His 2022 triumph completed a
                  legendary career, but Messi&apos;s competitive fire burns brightly. Performing at the Azteca -
                  the stadium where his idol Diego Maradona created World Cup magic - carries enormous symbolism.
                  Mexican fans will witness one of football&apos;s greatest players in his final World Cup act.
                </p>

                <h3>Altitude Advantage</h3>
                <p>
                  Mexico City&apos;s altitude of 2,240 meters presents genuine physiological challenges. Teams
                  unfamiliar with thin air tire more quickly, and the ball behaves differently at altitude.
                  Mexico has decades of experience playing at the Azteca and will be fully acclimatized. Argentina
                  must manage their physical efforts carefully, particularly given the tournament&apos;s summer heat.
                </p>

                <h3>Tactical Preview</h3>
                <p>
                  Argentina under Lionel Scaloni play with fluid attacking movement and quick transitions. <strong>
                  Messi&apos;s</strong> free role allows him to drift into dangerous positions, while <strong>
                  Álvarez</strong> makes intelligent runs in behind. The midfield diamond or 4-3-3 provides
                  numerical advantages in central areas. Defensively, Argentina press aggressively but can be
                  caught when overcommitted.
                </p>
                <p>
                  Mexico will likely adopt a more conservative approach, recognizing Argentina&apos;s quality.
                  <strong>Lozano&apos;s</strong> pace offers counter-attacking threat, while <strong>Álvarez&apos;s
                  </strong> defensive work contains Argentina&apos;s creative players. The Azteca crowd will drive
                  Mexican intensity, making them more aggressive than against other opponents.
                </p>

                <h3>Group A Implications</h3>
                <p>
                  This match effectively decides Group A. Both Argentina and Mexico expect to advance, meaning
                  the winner likely tops the group with favorable knockout stage seeding. A draw helps Argentina
                  more given their opening fixtures, while Mexico needs positive results in front of home fans.
                  The stakes couldn&apos;t be higher for either nation.
                </p>

                <h3>Cultural Significance</h3>
                <p>
                  This match transcends sport. Argentina vs Mexico at the Azteca represents Latin American football
                  at its passionate best. The atmosphere will be unforgettable - Mexican fans waving flags, singing
                  songs, and creating the famous green sea of color against Argentina&apos;s white and sky blue.
                  The world will be watching as two proud footballing nations compete for glory.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Argentina vs Mexico World Cup 2026 tickets</strong> are the hottest in the tournament.
                  Prices start from approximately $395 USD for Category 4 seats, with premium and hospitality
                  packages commanding over $2,000 USD. Mexican demand combined with Argentine fans traveling
                  from South America creates unprecedented ticket pressure. This match will sell out faster
                  than any other - securing tickets requires immediate action through official FIFA channels.
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
                <CardHeader className="bg-sky-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇷</span> Argentina Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {argentinaPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
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
                  <Link href="/teams/argentina-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Argentina Squad</Button>
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
                    <strong>World Cup Record:</strong> Argentina has won all four World Cup meetings against Mexico.
                    El Tri has never beaten La Albiceleste on football&apos;s biggest stage.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
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
                    <p className="text-2xl font-bold text-green-700">2 Finals</p>
                    <p className="text-sm text-slate-600">WC Finals Hosted</p>
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
                  Mexico City is a vibrant megalopolis offering incredible history, world-class cuisine, ancient
                  ruins, and passionate football culture. The capital provides an unforgettable World Cup experience.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Mexico City Airport (MEX)</li>
                      <li>• Metro Line 2 to Azteca</li>
                      <li>• Extensive bus network</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Teotihuacán Pyramids</li>
                      <li>• Zócalo & Historic Center</li>
                      <li>• Chapultepec Castle</li>
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
                  Argentina vs Mexico will be one of the most-watched matches of the entire World Cup, with
                  massive audiences in both nations and global interest in seeing Messi at the legendary Azteca.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Mexico</p>
                    <p className="text-sm text-slate-500">Televisa / TV Azteca</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Argentina</p>
                    <p className="text-sm text-slate-500">TyC Sports / Telefe</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">USA</p>
                    <p className="text-sm text-slate-500">Telemundo / FOX</p>
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
                  Buy Argentina vs Mexico Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>TOURNAMENT&apos;S HOTTEST TICKET!</span>
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
                <Link href="/fixtures/mexico-vs-south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇲🇽 vs 🇿🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 11</span>
                </Link>
                <Link href="/fixtures/usa-vs-wales-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇺🇸 vs 🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 12</span>
                </Link>
                <Link href="/fixtures/argentina-vs-mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 border border-yellow-200">
                  <span>🇦🇷 vs 🇲🇽</span>
                  <span className="text-sm">Jun 21</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">Hot</Badge>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/argentina-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇦🇷 Argentina Team Page
                </Link>
                <Link href="/teams/mexico-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇲🇽 Mexico Team Page
                </Link>
                <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Estadio Azteca
                </Link>
                <Link href="/travel/mexico-city-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Mexico City Travel Guide
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
