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
  title: "Colombia vs Senegal Tickets | World Cup 2026 Group F | Gillette Stadium",
  description: "Buy Colombia vs Senegal World Cup 2026 tickets at Gillette Stadium, Boston. South American flair meets African pride!",
  keywords: [
    "Colombia vs Senegal tickets",
    "World Cup 2026 Boston tickets",
    "Colombia World Cup 2026 tickets",
    "Senegal World Cup 2026 tickets",
    "Gillette Stadium World Cup",
    "FIFA World Cup 2026 Colombia",
    "Boston World Cup tickets",
    "Los Cafeteros vs Lions of Teranga tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Colombia", flag: "🇨🇴", code: "COL", nickname: "Los Cafeteros", fifaRanking: 12, group: "F" },
  awayTeam: { name: "Senegal", flag: "🇸🇳", code: "SEN", nickname: "Lions of Teranga", fifaRanking: 17, group: "F" },
  date: "June 20, 2026",
  time: "6:00 PM ET",
  venue: "Gillette Stadium",
  city: "Foxborough, Massachusetts",
  group: "F",
  matchNumber: 33,
  round: "Group Stage",
  expectedAttendance: 65000,
}

const colombiaPlayers = [
  { name: "Luis Díaz", position: "Forward", club: "Liverpool", number: 7, star: true },
  { name: "James Rodríguez", position: "Midfielder", club: "São Paulo", number: 10, star: true },
  { name: "Jhon Durán", position: "Forward", club: "Aston Villa", number: 9 },
  { name: "David Ospina", position: "Goalkeeper", club: "Al-Nassr", number: 1 },
]

const senegalPlayers = [
  { name: "Sadio Mané", position: "Forward", club: "Al-Nassr", number: 10, star: true },
  { name: "Ismaïla Sarr", position: "Forward", club: "Marseille", number: 18, star: true },
  { name: "Kalidou Koulibaly", position: "Defender", club: "Al-Hilal", number: 3 },
  { name: "Édouard Mendy", position: "Goalkeeper", club: "Al-Ahli", number: 16 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 175, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 320, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 275, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 250, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "World Cup", result: "Senegal 0-1 Colombia", location: "Russia" },
  { year: 2014, competition: "Friendly", result: "Colombia 2-2 Senegal", location: "Buenos Aires" },
]

export default function ColombiaVsSenegalPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 via-blue-600 to-green-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-f-world-cup-2026-tickets" className="hover:text-white">Group F</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Colombia vs Senegal</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                AFCON vs COPA AMERICA
              </Badge>
              <Badge className="bg-white text-blue-800">GROUP F</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-yellow-500 text-black">2001 Copa América</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-green-600 text-white">2022 AFCON Champions</Badge>
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
                Buy Colombia vs Senegal Tickets
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
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 via-blue-50 to-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 text-3xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900">Continental Champions Collide</h3>
                    <p className="text-blue-800 mt-2">
                      AFCON champions Senegal face Copa América winners Colombia in a clash of continental
                      titans. Both teams bring incredible attacking talent - Liverpool&apos;s Luis Díaz leads
                      Colombia while former Premier League star Sadio Mané captains Senegal. Their 2018 World
                      Cup meeting decided by Yerry Mina&apos;s header still echoes. This rematch at Gillette
                      Stadium promises electric atmosphere and skillful football.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-yellow-600" />
                  Complete Match Preview: Colombia vs Senegal
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: Two Continents&apos; Pride at Stake</h3>
                <p>
                  The <strong>Colombia vs Senegal World Cup 2026</strong> match promises to be one of the
                  tournament&apos;s most entertaining group stage encounters. On <strong>June 20, 2026</strong>
                  at <strong>Gillette Stadium in Foxborough, Massachusetts</strong>, two nations with rich
                  footballing traditions and exceptional current talent face off. This Group F fixture carries
                  significant implications for knockout stage qualification.
                </p>

                <h3>Colombia: South American Artistry</h3>
                <p>
                  <strong>Colombia (Los Cafeteros)</strong> has emerged as one of South America&apos;s most
                  consistent performers. Their 2001 Copa América triumph at home remains the pinnacle, but
                  recent years have seen Colombia regularly compete with the continent&apos;s elite. The team
                  combines technical excellence with passionate supporters who create carnival atmospheres
                  wherever Colombia plays.
                </p>
                <p>
                  <strong>Luis Díaz</strong> (Liverpool) has become one of the Premier League&apos;s most
                  exciting players, combining explosive pace with skillful dribbling and clinical finishing.
                  <strong>James Rodríguez</strong> brings experience and magical playmaking ability - his
                  2014 World Cup performances remain legendary. Rising star <strong>Jhon Durán</strong>
                  (Aston Villa) provides youthful energy and goal-scoring prowess. Colombian football&apos;s
                  future looks bright.
                </p>

                <h3>Senegal: Africa&apos;s Reigning Champions</h3>
                <p>
                  <strong>Senegal (Lions of Teranga)</strong> are Africa&apos;s current champions, having
                  won the 2022 Africa Cup of Nations with <strong>Sadio Mané</strong> scoring the winning
                  penalty. That triumph represented the culmination of Senegalese football&apos;s development,
                  building on their 2002 World Cup quarterfinal achievement. Senegal approaches 2026 as
                  genuine contenders to become Africa&apos;s first World Cup semifinalists since 2002.
                </p>
                <p>
                  <strong>Sadio Mané</strong> (Al-Nassr) remains Senegal&apos;s talisman and one of Africa&apos;s
                  greatest-ever players. His Premier League success with Liverpool proved he can perform
                  at the highest level. <strong>Ismaïla Sarr</strong> provides pace and directness on the
                  wing. <strong>Kalidou Koulibaly</strong> anchors the defense with physicality and excellent
                  reading of the game. <strong>Édouard Mendy</strong> brings Champions League-winning
                  experience in goal.
                </p>

                <h3>Gillette Stadium: New England&apos;s World Cup Venue</h3>
                <p>
                  <strong>Gillette Stadium</strong> in Foxborough provides an excellent venue for this
                  intercontinental clash. Home to the New England Patriots and New England Revolution,
                  the 65,000-capacity stadium has hosted major soccer events including Copa América matches.
                  Boston&apos;s diverse population and growing soccer culture ensure passionate crowds for
                  World Cup fixtures.
                </p>

                <h3>2018 World Cup Decider</h3>
                <p>
                  The <strong>2018 World Cup</strong> meeting in Samara was crucial for both teams&apos;
                  tournament survival. With both needing victory to progress, tension was enormous.
                  <strong>Yerry Mina</strong> headed the only goal to send Colombia through while eliminating
                  Senegal on Fair Play rules - the first time tiebreaker had been used at a World Cup.
                  Senegalese players wept at the injustice of such a narrow elimination.
                </p>

                <h3>Tactical Preview</h3>
                <p>
                  Colombia typically employs an attacking 4-2-3-1 formation with <strong>Luis Díaz</strong>
                  free to roam and create. <strong>James Rodríguez&apos;s</strong> vision unlocks defenses,
                  while Colombian wingers provide width and pace. Their technical quality in tight spaces
                  makes them particularly dangerous against organized defenses.
                </p>
                <p>
                  Senegal&apos;s 4-3-3 offers defensive solidity with <strong>Koulibaly</strong> commanding
                  the backline. Counter-attacks through <strong>Mané</strong> and <strong>Sarr</strong>
                  pose constant threats, while Senegal&apos;s pressing intensity creates turnovers in
                  dangerous areas. Set pieces offer additional goal-scoring opportunities.
                </p>

                <h3>Star Player Battle: Díaz vs Mané</h3>
                <p>
                  The matchup between <strong>Luis Díaz</strong> and <strong>Sadio Mané</strong> features
                  two of football&apos;s most dynamic attackers. Díaz&apos;s Liverpool emergence mirrored
                  Mané&apos;s own trajectory at the club. Both combine electric pace with intelligent
                  movement and clutch finishing. Whoever performs better likely determines the outcome.
                </p>

                <h3>Group F Implications</h3>
                <p>
                  Group F features Spain, Netherlands, Colombia, and Senegal - arguably the toughest group
                  in the tournament. With Spain and Netherlands expected to compete for top spots, Colombia
                  and Senegal face a battle for the third qualifying position (in the 48-team format, three
                  teams advance from each group). Victory in this match could prove decisive for knockout
                  stage qualification.
                </p>

                <h3>Colombian Passion</h3>
                <p>
                  Colombian supporters are among football&apos;s most passionate. The yellow shirts, dancing,
                  and unwavering optimism create unique atmospheres. In the United States, large Colombian
                  communities in cities like Miami, New York, and Boston ensure strong home support at
                  World Cup venues. Los Cafeteros never lack for vocal backing.
                </p>

                <h3>African Football Pride</h3>
                <p>
                  Senegal represents African football&apos;s highest hopes. As AFCON champions and 2022
                  World Cup Round of 16 qualifiers, the Lions of Teranga have proven their credentials.
                  A deep World Cup run would further cement African football&apos;s growing reputation
                  and inspire millions across the continent.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Colombia vs Senegal World Cup 2026 tickets</strong> are in strong demand from
                  both nations&apos; passionate fanbases. Prices start from approximately $175 USD for
                  Category 4 seats, with premium hospitality packages available. Boston&apos;s growing
                  African and Latin American communities add local demand, while international fans travel
                  to support their teams.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇴</span> Colombia Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {colombiaPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold">
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
                  <Link href="/teams/colombia-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Colombia Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇸🇳</span> Senegal Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {senegalPlayers.map((player) => (
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
                  <Link href="/teams/senegal-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Senegal Squad</Button>
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
                    <strong>2018 World Cup:</strong> Yerry Mina&apos;s header gave Colombia a 1-0 victory,
                    eliminating Senegal on Fair Play rules in one of the tournament&apos;s cruelest outcomes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-yellow-600" />
                  Venue: Gillette Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-700">65,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-700">2002</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-700">Patriots</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-700">6</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/gillette-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    View All Gillette Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Boston</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Boston offers rich American history, world-class universities, excellent seafood, and vibrant
                  culture. New England&apos;s largest city provides memorable World Cup experiences.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Logan International Airport</li>
                      <li>• Commuter rail to Foxborough</li>
                      <li>• Easy I-95 access</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Freedom Trail</li>
                      <li>• Harvard & MIT campuses</li>
                      <li>• Fenway Park area</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/boston-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Boston Travel Guide
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
                  Colombia vs Senegal will attract strong viewership from both nations, with significant
                  interest across South America and Africa given both teams&apos; continental importance.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Colombia</p>
                    <p className="text-sm text-slate-500">Caracol / RCN</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Senegal</p>
                    <p className="text-sm text-slate-500">RTS</p>
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
                  Buy Colombia vs Senegal Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>2018 REMATCH - Strong demand!</span>
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
                  <span className="font-medium">Boston, MA</span>
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
                <Link href="/fixtures/spain-vs-netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇪🇸 vs 🇳🇱</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 16</span>
                </Link>
                <Link href="/fixtures/spain-vs-colombia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇪🇸 vs 🇨🇴</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 17</span>
                </Link>
                <Link href="/fixtures/colombia-vs-senegal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 border border-yellow-200">
                  <span>🇨🇴 vs 🇸🇳</span>
                  <span className="text-sm">Jun 20</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">2018</Badge>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/colombia-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇨🇴 Colombia Team Page
                </Link>
                <Link href="/teams/senegal-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇸🇳 Senegal Team Page
                </Link>
                <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Gillette Stadium
                </Link>
                <Link href="/travel/boston-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Boston Travel Guide
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
