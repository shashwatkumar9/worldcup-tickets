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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Portugal vs Iran Tickets | World Cup 2026 Group B | BC Place",
  description: "Buy Portugal vs Iran World Cup 2026 tickets at BC Place, Vancouver. Cristiano Ronaldo leads Portugal against Team Melli!",
  keywords: [
    "Portugal vs Iran tickets",
    "World Cup 2026 Vancouver tickets",
    "Portugal World Cup 2026 tickets",
    "Iran World Cup 2026 tickets",
    "BC Place World Cup",
    "FIFA World Cup 2026 Portugal",
    "Vancouver World Cup tickets",
    "Ronaldo World Cup tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Portugal", flag: "🇵🇹", code: "POR", nickname: "Seleção das Quinas", fifaRanking: 6, group: "B" },
  awayTeam: { name: "Iran", flag: "🇮🇷", code: "IRN", nickname: "Team Melli", fifaRanking: 22, group: "B" },
  date: "June 18, 2026",
  time: "4:00 PM PT",
  venue: "BC Place",
  city: "Vancouver, Canada",
  group: "B",
  matchNumber: 28,
  round: "Group Stage",
  expectedAttendance: 54500,
}

const portugalPlayers = [
  { name: "Cristiano Ronaldo", position: "Forward", club: "Al-Nassr", number: 7, star: true },
  { name: "Bruno Fernandes", position: "Midfielder", club: "Manchester United", number: 8, star: true },
  { name: "Rafael Leão", position: "Forward", club: "AC Milan", number: 17 },
  { name: "Diogo Costa", position: "Goalkeeper", club: "FC Porto", number: 22 },
]

const iranPlayers = [
  { name: "Mehdi Taremi", position: "Forward", club: "Inter Milan", number: 9, star: true },
  { name: "Sardar Azmoun", position: "Forward", club: "AS Roma", number: 20, star: true },
  { name: "Alireza Jahanbakhsh", position: "Forward", club: "Feyenoord", number: 7 },
  { name: "Alireza Beiranvand", position: "Goalkeeper", club: "Persepolis", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 185, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 335, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 285, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 260, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "World Cup", result: "Portugal 1-1 Iran", location: "Russia" },
  { year: 1972, competition: "Friendly", result: "Iran 0-3 Portugal", location: "Tehran" },
]

export default function PortugalVsIranPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-red-600 to-green-800 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-b-world-cup-2026-tickets" className="hover:text-white">Group B</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Portugal vs Iran</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Star className="h-4 w-4 mr-2" />
                RONALDO&apos;S LAST WC?
              </Badge>
              <Badge className="bg-white text-green-800">GROUP B</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-red-700 text-white">Euro 2016 Champions</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-green-800 text-white">Asia&apos;s Best</Badge>
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
                Buy Portugal vs Iran Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group B Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-red-400 bg-gradient-to-r from-green-50 via-red-50 to-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-700 flex items-center justify-center flex-shrink-0">
                    <Star className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">Ronaldo&apos;s Final World Cup Chapter</h3>
                    <p className="text-red-800 mt-2">
                      At 41, Cristiano Ronaldo enters what will almost certainly be his final World Cup. The
                      all-time leading international goalscorer leads Portugal against Iran in Vancouver, seeking
                      to add the one trophy missing from his extraordinary career. Iran nearly denied Portugal
                      group stage progress in 2018 - now Team Melli looks to finish the job. This is must-see
                      football at BC Place.
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
                  Complete Match Preview: Portugal vs Iran
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: Living Legend Meets Asian Giants</h3>
                <p>
                  The <strong>Portugal vs Iran World Cup 2026</strong> match carries enormous significance
                  for both nations. On <strong>June 18, 2026</strong> at <strong>BC Place in Vancouver,
                  Canada</strong>, <strong>Cristiano Ronaldo</strong> leads Portugal in what will likely be
                  his final World Cup appearance. Iran, Asia&apos;s most consistent World Cup participant,
                  seeks to prove they can compete with European elite on the biggest stage.
                </p>

                <h3>Portugal: Ronaldo&apos;s Last Dance</h3>
                <p>
                  <strong>Portugal (Seleção das Quinas)</strong> approach 2026 with mixed emotions.
                  <strong>Cristiano Ronaldo</strong>, at 41, remains the nation&apos;s captain and talisman
                  despite his advancing years. The Euro 2016 triumph proved Portugal can win major tournaments,
                  but the World Cup has eluded them. A squad combining Ronaldo&apos;s experience with emerging
                  talents offers genuine hope for a deep run.
                </p>
                <p>
                  <strong>Cristiano Ronaldo</strong> (Al-Nassr) continues to score goals at a remarkable rate,
                  though questions remain about his effectiveness in knockout football. <strong>Bruno Fernandes</strong>
                  (Manchester United) provides creative excellence from midfield, orchestrating attacks with
                  vision and passing range. <strong>Rafael Leão</strong> (AC Milan) brings explosive pace and
                  dribbling ability on the wing. <strong>Diogo Costa</strong> has established himself as a
                  reliable goalkeeper with excellent shot-stopping abilities.
                </p>

                <h3>Iran: Asia&apos;s World Cup Veterans</h3>
                <p>
                  <strong>Iran (Team Melli)</strong> has qualified for six World Cups, more than any other
                  Asian nation. Their 2018 performance - narrowly missing the knockout rounds despite draws
                  against Portugal and Spain - demonstrated Iran can compete with elite European teams. The
                  current squad combines experienced European-based players with domestic talent, creating a
                  well-balanced team capable of causing upsets.
                </p>
                <p>
                  <strong>Mehdi Taremi</strong> (Inter Milan) has established himself in Serie A, bringing
                  clinical finishing and intelligent movement to Iran&apos;s attack. <strong>Sardar Azmoun</strong>
                  (AS Roma) provides aerial threat and experience at the highest level. <strong>Alireza
                  Jahanbakhsh</strong> offers creativity and set-piece expertise, while <strong>Alireza
                  Beiranvand</strong> brings big-game experience between the posts.
                </p>

                <h3>BC Place: Canada&apos;s World Cup Venue</h3>
                <p>
                  <strong>BC Place</strong> in Vancouver provides a spectacular setting for this Group B
                  encounter. The retractable-roof stadium holds 54,500 spectators and has hosted numerous
                  international events including the 2015 FIFA Women&apos;s World Cup Final. Vancouver&apos;s
                  diverse population includes significant Persian and Portuguese communities, ensuring
                  passionate support for both teams.
                </p>

                <h3>2018 World Cup Flashback</h3>
                <p>
                  The <strong>2018 World Cup</strong> meeting between these teams was one of the tournament&apos;s
                  most dramatic matches. Portugal led through <strong>Ricardo Quaresma&apos;s</strong> brilliant
                  trivela goal, but Iran fought back with a late penalty equalized by <strong>Karim Ansarifard</strong>.
                  <strong>Ronaldo</strong> missed a penalty and Portugal clung on to qualify on goal difference.
                  Iran felt they deserved more - now they have another chance.
                </p>

                <h3>Tactical Considerations</h3>
                <p>
                  Portugal will look to control possession and create chances through their technically gifted
                  midfield. <strong>Bruno Fernandes&apos;</strong> vision and <strong>Leão&apos;s</strong>
                  direct running will be key. The question remains how best to use <strong>Ronaldo</strong> -
                  as a traditional striker or a more withdrawn role allowing others to shine.
                </p>
                <p>
                  Iran will adopt a disciplined defensive approach, looking to frustrate Portuguese attacks
                  and counter through <strong>Taremi</strong> and <strong>Azmoun</strong>. Their organization
                  and willingness to defend deep caused problems for Spain and Portugal in 2018. Set pieces
                  offer additional goal-scoring opportunities against any opponent.
                </p>

                <h3>The Ronaldo Factor</h3>
                <p>
                  <strong>Cristiano Ronaldo&apos;s</strong> presence elevates every match. His 130+ international
                  goals make him football&apos;s all-time leading scorer, and his competitive drive remains
                  unmatched. Whether starting or coming off the bench, Ronaldo attracts defensive attention
                  that creates opportunities for teammates. His experience in pressure situations could prove
                  decisive.
                </p>

                <h3>Group B Stakes</h3>
                <p>
                  Group B features Portugal, England, Denmark, and Iran. While Portugal and England are favorites
                  to progress, nothing is guaranteed. Iran must maximize points against Portugal to have any
                  chance of advancing. A Portuguese victory would likely seal their progression, while Iran
                  needs at least a draw to keep knockout stage hopes alive.
                </p>

                <h3>Persian Pride</h3>
                <p>
                  Iranian football carries enormous national significance. Team Melli represents millions of
                  Iranians worldwide who view World Cup matches as celebrations of cultural identity. Vancouver&apos;s
                  large Persian community will create a home-away-from-home atmosphere, adding extra motivation
                  for Iranian players to deliver a historic result.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Portugal vs Iran World Cup 2026 tickets</strong> are in strong demand, driven by
                  Ronaldo&apos;s global following and Iran&apos;s passionate supporters. Prices start from
                  approximately $185 USD for Category 4 seats, with premium hospitality packages available.
                  Vancouver&apos;s Portuguese and Persian communities ensure local demand, while international
                  fans travel to potentially witness Ronaldo&apos;s final World Cup matches.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇵🇹</span> Portugal Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {portugalPlayers.map((player) => (
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
                  <Link href="/teams/portugal-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Portugal Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇷</span> Iran Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {iranPlayers.map((player) => (
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
                  <Link href="/teams/iran-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Iran Squad</Button>
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
                    <strong>2018 Drama:</strong> Iran equalized late against Portugal, with Ronaldo missing a
                    penalty. Portugal progressed on goal difference in a dramatic final group game.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Venue: BC Place
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">54,500</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">1983</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">Whitecaps</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">7</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/bc-place-world-cup-2026-tickets">
                  <Button className="w-full bg-red-700 hover:bg-red-800">
                    View All BC Place Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Vancouver</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Vancouver offers stunning natural beauty, world-class dining, and vibrant cultural scenes.
                  The city&apos;s mountains-meet-ocean setting provides an unforgettable World Cup backdrop.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Vancouver International (YVR)</li>
                      <li>• SkyTrain to downtown</li>
                      <li>• Excellent transit network</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Stanley Park</li>
                      <li>• Grouse Mountain</li>
                      <li>• Granville Island</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/vancouver-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Vancouver Travel Guide
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
                  Portugal vs Iran will attract significant viewership driven by Ronaldo&apos;s global appeal
                  and Iran&apos;s passionate fanbase. Expect comprehensive worldwide coverage.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Portugal</p>
                    <p className="text-sm text-slate-500">RTP / SIC</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Iran</p>
                    <p className="text-sm text-slate-500">IRIB</p>
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
            <Card className="sticky top-24 border-red-400">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-600" />
                  Buy Portugal vs Iran Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>RONALDO&apos;S FINAL WC - High demand!</span>
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
                  <span className="font-medium">Vancouver, BC</span>
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
                <CardTitle>Group B Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/england-vs-iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇮🇷</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 11</span>
                </Link>
                <Link href="/fixtures/portugal-vs-saudi-arabia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇵🇹 vs 🇸🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 14</span>
                </Link>
                <Link href="/fixtures/portugal-vs-iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 border border-red-200">
                  <span>🇵🇹 vs 🇮🇷</span>
                  <span className="text-sm">Jun 18</span>
                  <Badge className="ml-auto bg-red-600 text-white text-xs">CR7</Badge>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/portugal-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇵🇹 Portugal Team Page
                </Link>
                <Link href="/teams/iran-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇮🇷 Iran Team Page
                </Link>
                <Link href="/venues/bc-place-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ BC Place Stadium
                </Link>
                <Link href="/travel/vancouver-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Vancouver Travel Guide
                </Link>
                <Link href="/fixtures/group-b-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group B Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
