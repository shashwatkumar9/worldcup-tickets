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
  title: "Korea Republic vs Denmark Tickets | World Cup 2026 Group A | Estadio Akron",
  description: "Buy Korea Republic vs Denmark World Cup 2026 tickets at Estadio Akron, Guadalajara. June 11, 2026. Group A clash featuring Asian and European powers!",
  keywords: [
    "Korea Republic vs Denmark tickets",
    "South Korea vs Denmark World Cup 2026",
    "World Cup 2026 Group A tickets",
    "Estadio Akron World Cup tickets",
    "Korea World Cup 2026 tickets",
    "Denmark World Cup 2026 tickets",
    "Guadalajara World Cup tickets",
    "FIFA World Cup 2026 Korea Denmark",
  ],
}

const matchInfo = {
  homeTeam: { name: "Korea Republic", flag: "🇰🇷", code: "KOR", nickname: "Taegeuk Warriors" },
  awayTeam: { name: "Denmark", flag: "🇩🇰", code: "DEN", nickname: "Danish Dynamite" },
  date: "June 11, 2026",
  time: "10:00 PM ET / 9:00 PM CT",
  venue: "Estadio Akron",
  city: "Guadalajara, Mexico",
  group: "A",
  matchNumber: 2,
  round: "Group Stage",
}

const koreaPlayers = [
  { name: "Son Heung-min", position: "Forward", club: "Tottenham", number: 7, star: true },
  { name: "Kim Min-jae", position: "Defender", club: "Bayern Munich", number: 3, star: true },
  { name: "Lee Kang-in", position: "Midfielder", club: "PSG", number: 10 },
  { name: "Hwang Hee-chan", position: "Forward", club: "Wolves", number: 11 },
]

const denmarkPlayers = [
  { name: "Christian Eriksen", position: "Midfielder", club: "Manchester United", number: 10, star: true },
  { name: "Rasmus Højlund", position: "Forward", club: "Manchester United", number: 9, star: true },
  { name: "Kasper Schmeichel", position: "Goalkeeper", club: "Anderlecht", number: 1 },
  { name: "Joakim Mæhle", position: "Defender", club: "Wolfsburg", number: 5 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 210, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 185, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 165, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "Friendly", result: "Denmark 0-2 Korea Republic", location: "Horsens" },
  { year: 2002, competition: "World Cup", result: "Denmark 1-0 Korea Republic", location: "Daejeon" },
  { year: 1998, competition: "World Cup", result: "Denmark 3-2 Korea Republic", location: "Lyon" },
]

export default function KoreaVsDenmarkPage() {
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
            <Link href="/groups/group-a-world-cup-2026-tickets" className="hover:text-white">Group A</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Korea Republic vs Denmark</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white">GROUP A</Badge>
              <Badge variant="outline" className="text-white border-white">Match 2</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Day 1</Badge>
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
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Match Tickets
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

            {/* Match Preview Banner */}
            <Card className="border-red-400 bg-gradient-to-r from-red-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">Asia vs Europe Showdown</h3>
                    <p className="text-red-800 mt-2">
                      Korea Republic takes on Denmark in a crucial Group A match that could determine qualification. Both nations
                      have rich World Cup histories with memorable moments - Korea&apos;s incredible 2002 semifinal run on home soil
                      and Denmark&apos;s shock Euro 1992 triumph. This promises to be a tactical battle between Asian pace and
                      European organization.
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
                  Complete Match Preview: Korea Republic vs Denmark
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026 Group A Clash</h3>
                <p>
                  The <strong>Korea Republic vs Denmark World Cup 2026</strong> match promises to be one of the most intriguing
                  encounters of Day 1. Taking place on <strong>June 11, 2026</strong> at <strong>Estadio Akron in Guadalajara</strong>,
                  this Group A fixture pits two of the most consistent qualifying nations in their respective confederations against
                  each other. With Mexico and South Africa meeting earlier in the day in the Opening Match, this late-night clash
                  will complete an exciting first day of World Cup 2026 action.
                </p>

                <h3>Korea Republic&apos;s World Cup Pedigree</h3>
                <p>
                  The <strong>Taegeuk Warriors</strong> have qualified for every World Cup since 1986, making them one of Asia&apos;s
                  most consistent footballing nations. Their legendary run to the 2002 World Cup semifinals on home soil remains
                  one of the greatest underdog stories in football history. Under the guidance of their current management, Korea
                  aims to replicate that magical run in 2026 with a squad featuring world-class talent in every position.
                </p>
                <p>
                  The Korean squad is headlined by <strong>Son Heung-min</strong>, the Tottenham captain and one of Asia&apos;s
                  greatest ever players. At 33, this could be Son&apos;s final World Cup, making Korea&apos;s campaign even more
                  emotionally charged. Alongside him, <strong>Kim Min-jae</strong> (Bayern Munich) has established himself as one
                  of the world&apos;s premier center-backs, while young talents like <strong>Lee Kang-in</strong> (PSG) and
                  <strong>Hwang Hee-chan</strong> (Wolves) provide additional quality.
                </p>

                <h3>Denmark&apos;s European Excellence</h3>
                <p>
                  <strong>Danish Dynamite</strong> returns to the World Cup as one of Europe&apos;s most well-organized and
                  technically proficient teams. Denmark has been a consistent force in European football, reaching the Euro 2020
                  semifinals in an emotional tournament following Christian Eriksen&apos;s cardiac arrest. Their qualification
                  campaign showcased the blend of experience and youth that makes them dangerous opponents for any team.
                </p>
                <p>
                  <strong>Christian Eriksen</strong> remains the creative heartbeat of this Danish side, his remarkable return
                  to football inspiring a nation. Young striker <strong>Rasmus Højlund</strong> (Manchester United) has emerged
                  as one of Europe&apos;s most exciting forwards, while veteran goalkeeper <strong>Kasper Schmeichel</strong>
                  brings invaluable experience between the posts. Denmark&apos;s tactical flexibility under their coaching staff
                  makes them capable of competing against any opponent.
                </p>

                <h3>Estadio Akron: Heart of Guadalajara</h3>
                <p>
                  <strong>Estadio Akron</strong> in Guadalajara provides a magnificent setting for this Group A clash. Home to
                  Club Deportivo Guadalajara (Chivas), Mexico&apos;s most popular club, the stadium seats 48,000 passionate fans.
                  The unique architectural design, resembling a volcano, creates an intimidating atmosphere. Guadalajara&apos;s
                  warm climate and football-mad culture will ensure both Korea and Denmark receive incredible support from
                  the diverse World Cup crowd.
                </p>

                <h3>Historical Encounters</h3>
                <p>
                  Korea Republic and Denmark have met several times in World Cup competition, with Denmark holding the advantage.
                  In the <strong>1998 World Cup in France</strong>, Denmark won a thrilling 3-2 encounter. Then in the <strong>2002
                  World Cup</strong>, Denmark again prevailed 1-0 in the Round of 16, ending Korea&apos;s hopes of repeating their
                  semifinal run in their own country. Korea&apos;s most recent victory came in a 2018 friendly, winning 2-0 in
                  Denmark - a result that will give them confidence heading into this crucial group stage match.
                </p>

                <h3>Key Tactical Battles</h3>
                <p>
                  The matchup between <strong>Son Heung-min</strong> and the Danish defense will be crucial. Son&apos;s pace,
                  movement, and finishing ability make him a constant threat, and Denmark will need to devise specific plans
                  to contain him. Equally important will be how Korea handles <strong>Christian Eriksen&apos;s</strong>
                  creativity in midfield - his ability to pick out passes and set pieces could prove decisive.
                </p>
                <p>
                  In defense, <strong>Kim Min-jae</strong> faces the challenge of containing <strong>Rasmus Højlund</strong>,
                  one of Europe&apos;s most promising young strikers. This battle between Asia&apos;s best defender and
                  Europe&apos;s rising star could determine the outcome of the match.
                </p>

                <h3>What&apos;s at Stake</h3>
                <p>
                  With Mexico expected to top Group A and South Africa the likely fourth-placed team, both Korea and Denmark
                  are realistic contenders for the second qualification spot. The expanded World Cup format means the best
                  third-placed teams also qualify, but both nations will target second place to secure an easier path through
                  the knockout rounds. A victory in this opening match would be a massive boost for either team&apos;s
                  qualification hopes.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Korea Republic vs Denmark World Cup 2026 tickets</strong> are available through official FIFA channels
                  and authorized resellers. Prices start from approximately $145 USD for Category 4 seats. Given the strong
                  Korean and Danish traveling support, tickets are selling quickly. Both nations have passionate fanbases who
                  travel in numbers to support their teams at major tournaments.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇰🇷</span> Korea Republic Key Players
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
                  <Link href="/teams/korea-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Korea Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇩🇰</span> Denmark Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {denmarkPlayers.map((player) => (
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
                  <Link href="/teams/denmark-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Denmark Squad</Button>
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
                    <strong>World Cup Record:</strong> Denmark leads 2-0 in World Cup meetings (1998, 2002). Korea&apos;s
                    most recent victory was a 2-0 friendly win in 2018.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Venue: Estadio Akron
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">48,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">2010</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">Chivas</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">5</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/estadio-akron-world-cup-2026-tickets">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    View All Estadio Akron Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Guadalajara</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Guadalajara is Mexico&apos;s second-largest city and the birthplace of tequila and mariachi music.
                  The city offers incredible culture, food, and a passionate football atmosphere.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Miguel Hidalgo Airport (GDL)</li>
                      <li>• Light rail connects to stadium area</li>
                      <li>• Uber and taxi readily available</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Tequila town day trip</li>
                      <li>• Historic Centro district</li>
                      <li>• Tlaquepaque artisan village</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/guadalajara-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Guadalajara Travel Guide
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
                  Korea Republic vs Denmark will be broadcast globally. With the late kickoff time (10:00 PM ET),
                  this match is perfectly timed for morning viewing in Asia and late-night viewing in Europe.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Korea</p>
                    <p className="text-sm text-slate-500">KBS / MBC / SBS</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Denmark</p>
                    <p className="text-sm text-slate-500">DR / TV2</p>
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
                  Buy Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>High demand from Asian and European fans!</span>
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
                    <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
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
                  <span className="font-medium">Guadalajara</span>
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
                  <Badge className="bg-yellow-500 text-black text-xs">Opening</Badge>
                </Link>
                <Link href="/fixtures/korea-republic-vs-denmark-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 border border-red-200">
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
                <Link href="/teams/korea-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇰🇷 Korea Republic Team Page
                </Link>
                <Link href="/teams/denmark-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇩🇰 Denmark Team Page
                </Link>
                <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Estadio Akron
                </Link>
                <Link href="/travel/guadalajara-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Guadalajara Travel Guide
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
