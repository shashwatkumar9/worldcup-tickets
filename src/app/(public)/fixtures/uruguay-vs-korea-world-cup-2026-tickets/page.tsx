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
  title: "Uruguay vs South Korea Tickets | World Cup 2026 Group H | SoFi Stadium",
  description: "Buy Uruguay vs South Korea World Cup 2026 tickets at SoFi Stadium, Los Angeles. 2010 Round of 16 rematch between two passionate nations!",
  keywords: [
    "Uruguay vs South Korea tickets",
    "World Cup 2026 Los Angeles tickets",
    "Uruguay World Cup 2026 tickets",
    "South Korea World Cup 2026 tickets",
    "SoFi Stadium World Cup",
    "FIFA World Cup 2026 Uruguay",
    "Los Angeles World Cup tickets",
    "La Celeste vs Taeguk Warriors tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Uruguay", flag: "🇺🇾", code: "URU", nickname: "La Celeste", fifaRanking: 16, group: "H" },
  awayTeam: { name: "South Korea", flag: "🇰🇷", code: "KOR", nickname: "Taeguk Warriors", fifaRanking: 23, group: "H" },
  date: "June 20, 2026",
  time: "3:00 PM PT",
  venue: "SoFi Stadium",
  city: "Inglewood, California",
  group: "H",
  matchNumber: 32,
  round: "Group Stage",
  expectedAttendance: 70000,
}

const uruguayPlayers = [
  { name: "Federico Valverde", position: "Midfielder", club: "Real Madrid", number: 15, star: true },
  { name: "Darwin Núñez", position: "Forward", club: "Liverpool", number: 19, star: true },
  { name: "Ronald Araújo", position: "Defender", club: "Barcelona", number: 4 },
  { name: "Sergio Rochet", position: "Goalkeeper", club: "Internacional", number: 1 },
]

const koreaPlayers = [
  { name: "Son Heung-min", position: "Forward", club: "Tottenham", number: 7, star: true },
  { name: "Lee Kang-in", position: "Midfielder", club: "PSG", number: 10, star: true },
  { name: "Kim Min-jae", position: "Defender", club: "Bayern Munich", number: 3 },
  { name: "Kim Seung-gyu", position: "Goalkeeper", club: "Al-Shabab", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 205, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 365, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 315, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 290, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Uruguay 0-0 South Korea", location: "Qatar" },
  { year: 2010, competition: "World Cup R16", result: "Uruguay 2-1 South Korea", location: "South Africa" },
  { year: 1990, competition: "World Cup", result: "Uruguay 1-0 South Korea", location: "Italy" },
]

export default function UruguayVsKoreaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-400 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-h-world-cup-2026-tickets" className="hover:text-white">Group H</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Uruguay vs South Korea</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Trophy className="h-4 w-4 mr-2" />
                2X WORLD CHAMPIONS
              </Badge>
              <Badge className="bg-white text-sky-800">GROUP H</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-sky-600 text-white">2x Champions</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-red-600 text-white">2002 Semifinalists</Badge>
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
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Uruguay vs Korea Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group H Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-sky-400 bg-gradient-to-r from-sky-50 via-white to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-sky-900">South American Pride vs Asian Excellence</h3>
                    <p className="text-sky-800 mt-2">
                      Two-time World Cup champions Uruguay face South Korea in a rematch of their memorable
                      2010 Round of 16 encounter. That match saw Luis Suárez score twice to send La Celeste
                      through. Now, with Son Heung-min leading Korea and Federico Valverde commanding Uruguay&apos;s
                      midfield, this Group H clash at SoFi Stadium promises high-quality, competitive football.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-sky-600" />
                  Complete Match Preview: Uruguay vs South Korea
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: Historic Nations in Los Angeles</h3>
                <p>
                  The <strong>Uruguay vs South Korea World Cup 2026</strong> match brings together two proud
                  footballing nations with contrasting styles. On <strong>June 20, 2026</strong> at <strong>SoFi
                  Stadium in Inglewood, California</strong>, Uruguay&apos;s grit and tradition faces Korea&apos;s
                  technical excellence and relentless energy. This Group H fixture carries significant
                  implications for both teams&apos; knockout stage aspirations.
                </p>

                <h3>Uruguay: South American Football&apos;s Pioneers</h3>
                <p>
                  <strong>Uruguay (La Celeste)</strong> are football&apos;s original World Cup champions, winning
                  the inaugural 1930 tournament on home soil and adding a second title in 1950 with the famous
                  Maracanazo. Despite their small population of just 3.5 million, Uruguay consistently produces
                  world-class players and competes with football&apos;s giants. Their never-say-die attitude
                  and physical approach make them formidable opponents.
                </p>
                <p>
                  <strong>Federico Valverde</strong> (Real Madrid) has emerged as one of football&apos;s most
                  complete midfielders, combining box-to-box energy with technical quality and decisive goals.
                  <strong>Darwin Núñez</strong> (Liverpool) provides explosive attacking threat with pace,
                  power, and improving finishing. <strong>Ronald Araújo</strong> (Barcelona) anchors the defense
                  with physical dominance and excellent positioning. Uruguay&apos;s squad balances experience
                  with exciting youth.
                </p>

                <h3>South Korea: Asia&apos;s Football Powerhouse</h3>
                <p>
                  <strong>South Korea (Taeguk Warriors)</strong> made history as 2002 World Cup semifinalists
                  when they co-hosted with Japan. Korean football has since produced world-class players who
                  excel at Europe&apos;s biggest clubs. Their organized pressing, technical ability, and
                  exceptional fitness make them dangerous opponents. Korea approaches every World Cup believing
                  they can cause upsets.
                </p>
                <p>
                  <strong>Son Heung-min</strong> (Tottenham) is unquestionably Asia&apos;s greatest-ever player,
                  combining world-class finishing with intelligent movement and tireless work rate. His Premier
                  League success proves he can dominate at the highest level. <strong>Lee Kang-in</strong> (PSG)
                  provides creative spark from midfield, while <strong>Kim Min-jae</strong> (Bayern Munich)
                  has established himself among Europe&apos;s elite defenders. Korea&apos;s European contingent
                  brings invaluable experience.
                </p>

                <h3>SoFi Stadium: California&apos;s Football Cathedral</h3>
                <p>
                  <strong>SoFi Stadium</strong> in Inglewood represents the pinnacle of modern stadium design.
                  Home to the LA Rams and Chargers, this 70,000-capacity venue features a stunning transparent
                  roof and state-of-the-art facilities. The stadium will host the World Cup Final, and this
                  Group H match provides fans an opportunity to experience the venue before the biggest games.
                  Los Angeles&apos; large Korean community ensures passionate home support for the Taeguk Warriors.
                </p>

                <h3>World Cup History Between the Teams</h3>
                <p>
                  Uruguay and South Korea have met three times at World Cups, with Uruguay winning twice and
                  sharing one draw. The <strong>2010 Round of 16</strong> match in Port Elizabeth saw
                  <strong>Luis Suárez</strong> score both goals in a 2-1 Uruguay victory that ended Korea&apos;s
                  tournament. At <strong>Qatar 2022</strong>, the teams drew 0-0 in a tactical group stage
                  encounter. This 2026 meeting adds another chapter to their World Cup rivalry.
                </p>

                <h3>Tactical Analysis</h3>
                <p>
                  Uruguay typically employs a compact, organized defensive structure before unleashing
                  quick counter-attacks through <strong>Núñez&apos;s</strong> pace and <strong>Valverde&apos;s</strong>
                  driving runs from midfield. Their physical approach and aerial threat from set pieces
                  create consistent goal-scoring opportunities. Uruguay&apos;s experience in tight, tactical
                  matches gives them psychological advantages.
                </p>
                <p>
                  South Korea&apos;s high-pressing style aims to force errors and win possession in dangerous
                  areas. <strong>Son&apos;s</strong> movement and finishing make him the focal point of Korean
                  attacks, while <strong>Lee Kang-in&apos;s</strong> creativity unlocks defenses. Korean fitness
                  levels allow them to maintain pressing intensity throughout 90 minutes, potentially exposing
                  opponents&apos; fatigue in the second half.
                </p>

                <h3>Son vs Valverde: The Key Duel</h3>
                <p>
                  The matchup between <strong>Son Heung-min</strong> and <strong>Federico Valverde</strong>
                  represents a clash of elite talents. Son&apos;s ability to find space and finish from any
                  angle makes him constantly dangerous. Valverde&apos;s energy and positioning will be crucial
                  in both containing Korean attacks and launching Uruguay&apos;s counters. Whoever dominates
                  this battle likely determines the outcome.
                </p>

                <h3>Group H Stakes</h3>
                <p>
                  Group H features Uruguay, South Korea, and two other teams competing for knockout stage
                  places. Victory in this match provides enormous advantage for progression, while defeat
                  creates immediate pressure. Both teams possess quality to advance but cannot afford slip-ups
                  against each other. This match could effectively decide Group H&apos;s final standings.
                </p>

                <h3>Uruguayan Fighting Spirit</h3>
                <p>
                  Uruguay&apos;s &quot;garra charrúa&quot; (warrior spirit) defines their footballing identity.
                  Despite limited resources compared to larger nations, Uruguay consistently exceeds expectations
                  through determination, organization, and refusal to accept defeat. This mentality makes them
                  particularly dangerous in knockout-style matches where every moment matters.
                </p>

                <h3>Korean Red Devils Support</h3>
                <p>
                  South Korea&apos;s &quot;Red Devils&quot; supporters are among football&apos;s most passionate.
                  The 2002 World Cup showcased Korean fan culture to the world, with millions celebrating in
                  streets and creating unforgettable atmospheres. Los Angeles&apos; Korean community will transform
                  SoFi Stadium into a sea of red, providing significant home advantage for the Taeguk Warriors.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Uruguay vs South Korea World Cup 2026 tickets</strong> are in strong demand from
                  both nations&apos; passionate fanbases. Prices start from approximately $205 USD for Category 4
                  seats, with premium hospitality packages available. Los Angeles&apos; Korean population
                  ensures significant local demand, while South American fans travel to support La Celeste.
                  Early booking through official FIFA channels is recommended.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-sky-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇾</span> Uruguay Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {uruguayPlayers.map((player) => (
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
                  <Link href="/teams/uruguay-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Uruguay Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇰🇷</span> South Korea Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {koreaPlayers.map((player) => (
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
                  <Link href="/teams/korea-republic-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full South Korea Squad</Button>
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
                <div className="mt-4 p-4 bg-sky-50 rounded-lg">
                  <p className="text-sky-800 text-sm">
                    <strong>2010 World Cup:</strong> Luis Suárez scored twice as Uruguay defeated South Korea
                    2-1 in the Round of 16, ending Korea&apos;s tournament in South Africa.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-sky-600" />
                  Venue: SoFi Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-sky-50 rounded-lg">
                    <p className="text-2xl font-bold text-sky-700">70,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-lg">
                    <p className="text-2xl font-bold text-sky-700">2020</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-lg">
                    <p className="text-2xl font-bold text-sky-700">Rams</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-lg">
                    <p className="text-2xl font-bold text-sky-700">Final</p>
                    <p className="text-sm text-slate-600">Hosts WC Final</p>
                  </div>
                </div>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">
                    View All SoFi Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Los Angeles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Los Angeles offers endless entertainment, beautiful beaches, Hollywood glamour, and diverse
                  cuisine. The City of Angels provides the perfect World Cup backdrop with year-round sunshine.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• LAX International Airport</li>
                      <li>• Metro Rail expansion</li>
                      <li>• Easy freeway access</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Hollywood Sign</li>
                      <li>• Venice Beach</li>
                      <li>• Universal Studios</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Los Angeles Travel Guide
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
                  Uruguay vs South Korea will attract significant viewership, particularly from Korea&apos;s
                  massive fanbase and passionate South American supporters worldwide.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Uruguay</p>
                    <p className="text-sm text-slate-500">VTV / DirecTV</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">South Korea</p>
                    <p className="text-sm text-slate-500">KBS / SBS / MBC</p>
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
            <Card className="sticky top-24 border-sky-400">
              <CardHeader className="bg-sky-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-sky-600" />
                  Buy Uruguay vs Korea Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>WORLD CUP FINAL VENUE - Premium match!</span>
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
                    <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white" asChild>
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
                  <span className="font-medium">Los Angeles, CA</span>
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
                <CardTitle>Group H Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/uruguay-vs-ghana-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇺🇾 vs 🇬🇭</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 15</span>
                </Link>
                <Link href="/fixtures/korea-republic-vs-denmark-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇰🇷 vs 🇩🇰</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 15</span>
                </Link>
                <Link href="/fixtures/uruguay-vs-korea-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-sky-50 border border-sky-200">
                  <span>🇺🇾 vs 🇰🇷</span>
                  <span className="text-sm">Jun 20</span>
                  <Badge className="ml-auto bg-sky-600 text-white text-xs">Final</Badge>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/uruguay-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇺🇾 Uruguay Team Page
                </Link>
                <Link href="/teams/korea-republic-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇰🇷 South Korea Team Page
                </Link>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ SoFi Stadium
                </Link>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Los Angeles Travel Guide
                </Link>
                <Link href="/fixtures/group-h-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group H Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
