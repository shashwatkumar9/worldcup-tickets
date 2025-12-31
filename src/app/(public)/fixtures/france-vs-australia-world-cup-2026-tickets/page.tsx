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
  Crown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "France vs Australia Tickets | World Cup 2026 Group E | Hard Rock Stadium",
  description: "Buy France vs Australia World Cup 2026 tickets at Hard Rock Stadium, Miami. Defending champions France take on the Socceroos!",
  keywords: [
    "France vs Australia tickets",
    "World Cup 2026 Miami tickets",
    "France World Cup 2026 tickets",
    "Australia World Cup 2026 tickets",
    "Hard Rock Stadium World Cup",
    "FIFA World Cup 2026 France",
    "Miami World Cup tickets",
    "Les Bleus vs Socceroos tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "France", flag: "🇫🇷", code: "FRA", nickname: "Les Bleus", fifaRanking: 2, group: "E" },
  awayTeam: { name: "Australia", flag: "🇦🇺", code: "AUS", nickname: "Socceroos", fifaRanking: 25, group: "E" },
  date: "June 15, 2026",
  time: "4:00 PM ET",
  venue: "Hard Rock Stadium",
  city: "Miami, Florida",
  group: "E",
  matchNumber: 18,
  round: "Group Stage",
  expectedAttendance: 65000,
}

const francePlayers = [
  { name: "Kylian Mbappé", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Antoine Griezmann", position: "Forward", club: "Atlético Madrid", number: 7, star: true },
  { name: "Aurélien Tchouaméni", position: "Midfielder", club: "Real Madrid", number: 8 },
  { name: "Mike Maignan", position: "Goalkeeper", club: "AC Milan", number: 16 },
]

const australiaPlayers = [
  { name: "Mathew Leckie", position: "Forward", club: "Melbourne City", number: 7, star: true },
  { name: "Jackson Irvine", position: "Midfielder", club: "St. Pauli", number: 22, star: true },
  { name: "Harry Souttar", position: "Defender", club: "Leicester City", number: 19 },
  { name: "Mat Ryan", position: "Goalkeeper", club: "AS Roma", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 215, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 375, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 320, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 295, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "France 4-1 Australia", location: "Qatar" },
  { year: 2018, competition: "World Cup", result: "France 2-1 Australia", location: "Russia" },
  { year: 2013, competition: "Friendly", result: "France 6-0 Australia", location: "Paris" },
]

export default function FranceVsAustraliaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-e-world-cup-2026-tickets" className="hover:text-white">Group E</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">France vs Australia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Crown className="h-4 w-4 mr-2" />
                DEFENDING CHAMPIONS
              </Badge>
              <Badge className="bg-white text-blue-800">GROUP E</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-yellow-500 text-black">2x Champions</Badge>
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
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                <Ticket className="mr-2 h-5 w-5" />
                Buy France vs Australia Tickets
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
            <Card className="border-blue-400 bg-gradient-to-r from-blue-50 via-white to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <Crown className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900">The Champions Begin Their Defense</h3>
                    <p className="text-blue-800 mt-2">
                      Two-time World Cup winners France begin their title defense against Australia in Miami.
                      Les Bleus dismantled the Socceroos 4-1 in Qatar 2022 en route to the final, where they
                      narrowly lost to Argentina on penalties. With Kylian Mbappé leading the charge, France
                      enter 2026 as favorites to become the first nation since Brazil in 1962 to win
                      back-to-back World Cups.
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
                  Complete Match Preview: France vs Australia
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: Champions vs Underdogs in Miami</h3>
                <p>
                  The <strong>France vs Australia World Cup 2026</strong> match brings the defending champions
                  to <strong>Hard Rock Stadium in Miami</strong> on <strong>June 15, 2026</strong>. France, seeking
                  to become just the third nation to win consecutive World Cups, faces a familiar opponent in the
                  Socceroos. This Group E opener carries immense significance as France begins their quest for
                  an unprecedented third title under Didier Deschamps.
                </p>

                <h3>France: The Defending Champions</h3>
                <p>
                  <strong>France (Les Bleus)</strong> enters 2026 as many experts&apos; favorites to lift the trophy.
                  Their 2022 World Cup campaign was spectacular - reaching the final where they lost a classic
                  penalty shootout to Argentina despite Kylian Mbappé&apos;s historic hat-trick. That heartbreak
                  has only fueled French ambition. With perhaps the deepest squad in world football, France has
                  the talent to overcome any opponent and claim a third star on their jersey.
                </p>
                <p>
                  <strong>Kylian Mbappé</strong> (Real Madrid) has cemented his status as the world&apos;s best
                  player. His move to the Spanish giants added another dimension to his already phenomenal game.
                  <strong>Antoine Griezmann</strong> provides creative intelligence and clutch performances in
                  big moments. <strong>Aurélien Tchouaméni</strong> anchors the midfield with power and technique,
                  while <strong>Mike Maignan</strong> has established himself as a world-class successor to Hugo
                  Lloris. France&apos;s squad depth allows them to rotate without losing quality.
                </p>

                <h3>Australia: Oceania&apos;s Football Pride</h3>
                <p>
                  <strong>Australia (Socceroos)</strong> continue to compete at the highest level despite the
                  challenges of geographic isolation. Their 2022 World Cup campaign saw them reach the Round of
                  16 for only the second time in history, capturing the imagination of Australian sports fans.
                  While France represents the ultimate test, the Socceroos will approach this match with
                  characteristic resilience and determination.
                </p>
                <p>
                  <strong>Mathew Leckie</strong> remains an influential figure for Australia, bringing experience
                  and work rate to the forward line. <strong>Jackson Irvine</strong> provides leadership and
                  energy in midfield, having enjoyed success in the German second division with St. Pauli.
                  <strong>Harry Souttar</strong> is the defensive cornerstone, using his aerial dominance and
                  reading of the game to organize Australia&apos;s backline. <strong>Mat Ryan</strong> brings
                  European experience to the goalkeeping position.
                </p>

                <h3>Hard Rock Stadium: Miami&apos;s World Cup Venue</h3>
                <p>
                  <strong>Hard Rock Stadium</strong> in Miami Gardens provides a spectacular setting for this
                  Group E clash. Home to the Miami Dolphins, this 65,000-capacity venue has hosted Super Bowls,
                  major concerts, and international soccer matches. Miami&apos;s tropical climate, vibrant
                  nightlife, and massive French expat community ensure an electric atmosphere. The stadium&apos;s
                  modern amenities and excellent sight lines make it ideal for World Cup football.
                </p>

                <h3>2022 World Cup Precedent</h3>
                <p>
                  The teams met in the <strong>2022 World Cup</strong> group stage, with France dominating 4-1.
                  <strong>Olivier Giroud</strong> scored twice to equal Thierry Henry&apos;s all-time France
                  scoring record, while <strong>Kylian Mbappé</strong> and <strong>Adrien Rabiot</strong> also
                  found the net. Australia took an early lead through Craig Goodwin, but France&apos;s class
                  proved decisive. The Socceroos will hope for a different outcome in 2026.
                </p>

                <h3>Tactical Considerations</h3>
                <p>
                  France typically operates with a balanced 4-3-3 formation that allows <strong>Mbappé</strong>
                  freedom to roam and attack from various angles. <strong>Griezmann&apos;s</strong> intelligent
                  movement creates space for teammates, while the midfield triangle provides both defensive
                  security and attacking support. France&apos;s ability to transition quickly from defense to
                  attack makes them deadly on the counter.
                </p>
                <p>
                  Australia will likely adopt a more defensive approach, looking to stay compact and limit
                  spaces for French attackers. The Socceroos&apos; aerial threat from set pieces could prove
                  valuable, with <strong>Harry Souttar</strong> a genuine danger in the opposition box.
                  Quick counter-attacks through <strong>Leckie</strong> offer Australia&apos;s best chance
                  of creating opportunities.
                </p>

                <h3>The Mbappé Factor</h3>
                <p>
                  <strong>Kylian Mbappé</strong> represents perhaps the biggest individual threat in world
                  football. His pace is virtually unmatched, his finishing clinical, and his big-game mentality
                  proven at the highest level. The 2022 World Cup final hat-trick demonstrated his ability to
                  perform when everything is on the line. Australia&apos;s defense will need to show exceptional
                  concentration and discipline to contain the Real Madrid superstar.
                </p>

                <h3>Group E Context</h3>
                <p>
                  Group E is expected to be competitive, with France as clear favorites but capable teams
                  fighting for the remaining qualification spots. A strong start against Australia would allow
                  France to manage their squad through the group stage while building momentum. For Australia,
                  avoiding a heavy defeat maintains belief heading into their remaining group fixtures.
                </p>

                <h3>French Title Ambitions</h3>
                <p>
                  Only Brazil (1958-62) and Italy (1934-38) have won consecutive World Cups. France came
                  agonizingly close in 2022, leading the final 2-0 before Argentina&apos;s remarkable comeback.
                  That experience has galvanized the French squad. Didier Deschamps, should he succeed, would
                  become the first person to win the World Cup as both player and manager twice.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>France vs Australia World Cup 2026 tickets</strong> are in high demand given France&apos;s
                  status as defending champions. Prices start from approximately $215 USD for Category 4 seats,
                  with premium hospitality packages available. Miami&apos;s French community and the appeal of
                  watching Mbappé live will drive significant demand. Early booking through official channels
                  is recommended to secure tickets for this marquee Group E fixture.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇫🇷</span> France Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {francePlayers.map((player) => (
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
                  <Link href="/teams/france-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full France Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇺</span> Australia Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {australiaPlayers.map((player) => (
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
                  <Link href="/teams/australia-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Australia Squad</Button>
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
                    <strong>French Dominance:</strong> France has never lost to Australia, winning all three
                    previous meetings by a combined score of 12-2. The Socceroos await their first points against Les Bleus.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Venue: Hard Rock Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">65,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">1987</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">Dolphins</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">7</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View All Hard Rock Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Miami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Miami offers world-famous beaches, vibrant nightlife, Art Deco architecture, and exceptional
                  Latin-influenced cuisine. The Magic City provides the perfect World Cup atmosphere.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Miami International Airport (MIA)</li>
                      <li>• Metrorail transit system</li>
                      <li>• Easy driving access via I-95</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• South Beach</li>
                      <li>• Art Deco Historic District</li>
                      <li>• Little Havana</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/miami-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Miami Travel Guide
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
                  France vs Australia will attract massive viewership in both countries, with the defending
                  champions always drawing global attention. Expect comprehensive coverage worldwide.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">France</p>
                    <p className="text-sm text-slate-500">TF1 / M6</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Australia</p>
                    <p className="text-sm text-slate-500">SBS / Optus Sport</p>
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
            <Card className="sticky top-24 border-blue-400">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-600" />
                  Buy France vs Australia Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>DEFENDING CHAMPIONS - High demand!</span>
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
                  <span className="font-medium">Miami, FL</span>
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
                <Link href="/fixtures/france-vs-australia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 border border-blue-200">
                  <span>🇫🇷 vs 🇦🇺</span>
                  <span className="text-sm">Jun 15</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">Champs</Badge>
                </Link>
                <Link href="/fixtures/france-vs-nigeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇫🇷 vs 🇳🇬</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 19</span>
                </Link>
                <Link href="/fixtures/australia-vs-nigeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇦🇺 vs 🇳🇬</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 23</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/france-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇫🇷 France Team Page
                </Link>
                <Link href="/teams/australia-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇦🇺 Australia Team Page
                </Link>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Hard Rock Stadium
                </Link>
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Miami Travel Guide
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
