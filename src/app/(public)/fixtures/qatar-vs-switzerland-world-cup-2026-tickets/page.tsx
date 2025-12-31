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
  title: "Qatar vs Switzerland Tickets | World Cup 2026 Group B | Levi's Stadium",
  description: "Buy Qatar vs Switzerland World Cup 2026 tickets at Levi's Stadium, San Francisco. June 13, 2026. 2022 hosts face European contenders in Group B!",
  keywords: [
    "Qatar vs Switzerland tickets",
    "World Cup 2026 San Francisco tickets",
    "Qatar World Cup 2026 tickets",
    "Switzerland World Cup 2026 tickets",
    "Levi's Stadium World Cup tickets",
    "FIFA World Cup 2026 Qatar",
    "San Francisco World Cup tickets",
    "Group B World Cup 2026",
  ],
}

const matchInfo = {
  homeTeam: { name: "Qatar", flag: "🇶🇦", code: "QAT", nickname: "The Maroons" },
  awayTeam: { name: "Switzerland", flag: "🇨🇭", code: "SUI", nickname: "Nati" },
  date: "June 13, 2026",
  time: "3:00 PM ET / 12:00 PM PT",
  venue: "Levi's Stadium",
  city: "San Francisco Bay Area, California",
  group: "B",
  matchNumber: 6,
  round: "Group Stage",
}

const qatarPlayers = [
  { name: "Akram Afif", position: "Forward", club: "Al-Sadd", number: 11, star: true },
  { name: "Almoez Ali", position: "Forward", club: "Al-Duhail", number: 19, star: true },
  { name: "Hassan Al-Haydos", position: "Midfielder", club: "Al-Sadd", number: 10 },
  { name: "Saad Al Sheeb", position: "Goalkeeper", club: "Al-Sadd", number: 1 },
]

const switzerlandPlayers = [
  { name: "Granit Xhaka", position: "Midfielder", club: "Bayer Leverkusen", number: 10, star: true },
  { name: "Xherdan Shaqiri", position: "Forward", club: "Chicago Fire", number: 23, star: true },
  { name: "Manuel Akanji", position: "Defender", club: "Manchester City", number: 5 },
  { name: "Yann Sommer", position: "Goalkeeper", club: "Inter Milan", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 125, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 175, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 155, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 140, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2020, competition: "Friendly", result: "Switzerland 2-0 Qatar", location: "Zurich" },
  { year: 2018, competition: "Friendly", result: "Switzerland 1-0 Qatar", location: "Lugano" },
]

export default function QatarVsSwitzerlandPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-maroon-800 via-white to-red-600 py-20" style={{ background: "linear-gradient(to right, #800000, white, #ff0000)" }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/groups/group-b-world-cup-2026-tickets" className="hover:text-white">Group B</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Qatar vs Switzerland</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-amber-800 text-white">2022 HOSTS</Badge>
              <Badge className="bg-white text-red-800">GROUP B</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-amber-700">2022 Hosts</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match 6</Badge>
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
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Match Tickets
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
            <Card className="border-amber-400 bg-gradient-to-r from-amber-50 to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-amber-800 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-amber-900">2022 Hosts Meet European Power</h3>
                    <p className="text-amber-800 mt-2">
                      Qatar brings their experience as 2022 World Cup hosts to face Switzerland&apos;s consistent European quality.
                      The Maroons seek to prove their 2022 hosting success was more than just infrastructure, while the Nati
                      look to continue their impressive knockout stage runs at major tournaments. This Group B clash at
                      Levi&apos;s Stadium promises tactical intrigue and high stakes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-amber-800" />
                  Complete Match Preview: Qatar vs Switzerland
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026 Group B Battle</h3>
                <p>
                  The <strong>Qatar vs Switzerland World Cup 2026</strong> match brings together contrasting footballing
                  philosophies in what promises to be a fascinating Group B encounter. On <strong>June 13, 2026</strong>
                  at <strong>Levi&apos;s Stadium in the San Francisco Bay Area</strong>, the 2022 World Cup hosts will face
                  one of Europe&apos;s most consistent national teams. Both sides will be eager to start their campaign
                  with a positive result in this crucial opening group stage fixture.
                </p>

                <h3>Qatar: Beyond 2022</h3>
                <p>
                  <strong>Qatar</strong> enters the 2026 World Cup looking to prove that their football development extends
                  beyond their historic role as 2022 hosts. The Maroons invested heavily in their national team program
                  for over a decade, winning the 2019 Asian Cup in stunning fashion. While their 2022 World Cup campaign
                  as hosts was disappointing on the pitch, Qatar&apos;s football infrastructure and player development
                  have created a foundation for future success.
                </p>
                <p>
                  <strong>Akram Afif</strong>, the 2019 Asian Cup Golden Boot winner and multiple-time AFC Player of the
                  Year, remains the creative force in Qatar&apos;s attack. <strong>Almoez Ali</strong> provides goalscoring
                  threat with his pace and movement. The squad has been strengthened by continued investment in their
                  domestic league and targeted naturalization of talented players. Qatar&apos;s technical, possession-based
                  style under Spanish coaching influence presents unique challenges for opponents.
                </p>

                <h3>Switzerland: European Consistency</h3>
                <p>
                  <strong>Switzerland</strong> has established themselves as one of Europe&apos;s most reliable tournament
                  performers. The Nati have reached the knockout stages of four consecutive major tournaments, including
                  their memorable run to the Euro 2020 quarterfinals where they eliminated world champions France on
                  penalties. Their blend of Premier League, Bundesliga, and Serie A talent creates a well-balanced squad
                  capable of competing with anyone.
                </p>
                <p>
                  <strong>Granit Xhaka</strong> anchors the midfield with his exceptional passing range and leadership.
                  The Arsenal captain turned Bayer Leverkusen star has evolved into one of Europe&apos;s most complete
                  midfielders. <strong>Manuel Akanji</strong> (Manchester City) provides Premier League-quality defending,
                  while veteran <strong>Xherdan Shaqiri</strong> brings experience and moments of magic. In goal,
                  <strong>Yann Sommer</strong> (Inter Milan) remains one of the world&apos;s best shot-stoppers.
                </p>

                <h3>Levi&apos;s Stadium: Silicon Valley&apos;s World Cup Stage</h3>
                <p>
                  <strong>Levi&apos;s Stadium</strong> in Santa Clara brings World Cup football to the heart of Silicon
                  Valley. Home to the San Francisco 49ers, this state-of-the-art venue opened in 2014 and has hosted
                  Super Bowls and major soccer events. With a capacity of 68,500 for World Cup matches, the stadium
                  offers excellent sightlines and modern amenities. The Bay Area&apos;s diverse population and strong
                  soccer culture ensure passionate crowds for every match.
                </p>

                <h3>Tactical Analysis</h3>
                <p>
                  Qatar&apos;s possession-based approach will be tested against Switzerland&apos;s organized pressing
                  and quick transitions. The Nati&apos;s ability to win the ball high and attack spaces could trouble
                  Qatar&apos;s build-up play. Conversely, if Qatar can control possession and move the Swiss side around,
                  their technical players like <strong>Akram Afif</strong> could find pockets of space to exploit.
                </p>
                <p>
                  Switzerland&apos;s experience in big matches gives them a significant advantage. Their players compete
                  at the highest level weekly in European leagues, while Qatar&apos;s domestic-based squad may need time
                  to adjust to the World Cup intensity. However, Qatar&apos;s familiarity with the tournament format from
                  2022 provides valuable experience.
                </p>

                <h3>Group B Dynamics</h3>
                <p>
                  With Canada and Italy also in Group B, this match takes on added significance. Both Qatar and Switzerland
                  will view each other as beatable opponents in a group where points against the stronger teams may be
                  hard to come by. A victory here could prove decisive in the race for knockout stage qualification under
                  the expanded 48-team format.
                </p>

                <h3>Historical Context</h3>
                <p>
                  Qatar and Switzerland have met twice in friendlies, with Switzerland winning both encounters. The most
                  recent meeting in 2020 saw the Nati win 2-0 in Zurich. While these friendlies provide limited insight
                  into World Cup performance, they do highlight Switzerland&apos;s superior experience at the highest level.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Qatar vs Switzerland World Cup 2026 tickets</strong> offer good value for fans looking to
                  experience World Cup football in the Bay Area. Prices start from approximately $125 USD for Category 4
                  seats. The strong Swiss traveling support and Bay Area&apos;s international population ensure a vibrant
                  atmosphere. The midday kickoff time (12:00 PM PT) makes this match accessible for local fans.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-amber-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇶🇦</span> Qatar Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {qatarPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
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
                  <Link href="/teams/qatar-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Qatar Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇭</span> Switzerland Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {switzerlandPlayers.map((player) => (
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
                  <Link href="/teams/switzerland-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Switzerland Squad</Button>
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
                    <strong>All-Time Record:</strong> Switzerland leads 2-0 in all meetings. This will be their
                    first competitive encounter at a major tournament.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-800" />
                  Venue: Levi&apos;s Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-2xl font-bold text-amber-700">68,500</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-2xl font-bold text-amber-700">2014</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-2xl font-bold text-amber-700">49ers</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-2xl font-bold text-amber-700">6</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">
                    View All Levi&apos;s Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to San Francisco Bay Area</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  The San Francisco Bay Area offers world-class attractions, diverse cuisine, and stunning scenery.
                  From the Golden Gate Bridge to Silicon Valley, the region has something for every World Cup visitor.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• San Francisco (SFO) or San Jose (SJC) airports</li>
                      <li>• VTA Light Rail to stadium</li>
                      <li>• Caltrain + shuttle options</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Golden Gate Bridge</li>
                      <li>• Alcatraz Island</li>
                      <li>• Fisherman&apos;s Wharf</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/san-francisco-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Bay Area Travel Guide
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
                  Qatar vs Switzerland will be broadcast globally. Swiss fans will have evening viewing,
                  while the match falls during late night hours in Qatar.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Qatar</p>
                    <p className="text-sm text-slate-500">beIN Sports</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Switzerland</p>
                    <p className="text-sm text-slate-500">SRF / RTS / RSI</p>
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
            <Card className="sticky top-24 border-amber-400">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-amber-800" />
                  Buy Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-amber-700 text-sm bg-amber-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>Good availability - great value match!</span>
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
                    <Button size="sm" className="bg-amber-800 hover:bg-amber-900" asChild>
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
                  <span className="font-medium">San Francisco</span>
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
                <Link href="/fixtures/canada-vs-italy-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇦 vs 🇮🇹</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 12</span>
                </Link>
                <Link href="/fixtures/qatar-vs-switzerland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-amber-50 border border-amber-200">
                  <span>🇶🇦 vs 🇨🇭</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/switzerland-vs-italy-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇭 vs 🇮🇹</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
                <Link href="/fixtures/canada-vs-qatar-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇦 vs 🇶🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/qatar-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇶🇦 Qatar Team Page
                </Link>
                <Link href="/teams/switzerland-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇨🇭 Switzerland Team Page
                </Link>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Levi&apos;s Stadium
                </Link>
                <Link href="/travel/san-francisco-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ San Francisco Travel Guide
                </Link>
                <Link href="/groups/group-b-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
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
