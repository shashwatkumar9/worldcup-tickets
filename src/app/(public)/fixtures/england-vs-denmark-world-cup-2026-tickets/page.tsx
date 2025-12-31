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
  Swords,
} from "lucide-react"

export const metadata: Metadata = {
  title: "England vs Denmark Tickets | World Cup 2026 Group B | Rose Bowl Stadium",
  description: "Buy England vs Denmark World Cup 2026 tickets at Rose Bowl Stadium, Los Angeles. Euro 2020 semifinal rematch in California!",
  keywords: [
    "England vs Denmark tickets",
    "World Cup 2026 Los Angeles tickets",
    "England World Cup 2026 tickets",
    "Denmark World Cup 2026 tickets",
    "Rose Bowl World Cup",
    "FIFA World Cup 2026 England",
    "Los Angeles World Cup tickets",
    "Three Lions vs Danish Dynamite tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", nickname: "The Three Lions", fifaRanking: 4, group: "B" },
  awayTeam: { name: "Denmark", flag: "🇩🇰", code: "DEN", nickname: "Danish Dynamite", fifaRanking: 21, group: "B" },
  date: "June 14, 2026",
  time: "6:00 PM PT",
  venue: "Rose Bowl Stadium",
  city: "Pasadena, California",
  group: "B",
  matchNumber: 12,
  round: "Group Stage",
  expectedAttendance: 90000,
}

const englandPlayers = [
  { name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Harry Kane", position: "Forward", club: "Bayern Munich", number: 9, star: true },
  { name: "Phil Foden", position: "Midfielder", club: "Manchester City", number: 47 },
  { name: "Jordan Pickford", position: "Goalkeeper", club: "Everton", number: 1 },
]

const denmarkPlayers = [
  { name: "Christian Eriksen", position: "Midfielder", club: "Manchester United", number: 10, star: true },
  { name: "Rasmus Højlund", position: "Forward", club: "Manchester United", number: 11, star: true },
  { name: "Pierre-Emile Højbjerg", position: "Midfielder", club: "Tottenham", number: 5 },
  { name: "Kasper Schmeichel", position: "Goalkeeper", club: "Anderlecht", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 235, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 410, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 355, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 325, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2021, competition: "Euro 2020 SF", result: "England 2-1 Denmark (AET)", location: "London" },
  { year: 2020, competition: "Nations League", result: "Denmark 0-0 England", location: "Copenhagen" },
  { year: 2020, competition: "Nations League", result: "England 0-1 Denmark", location: "London" },
]

export default function EnglandVsDenmarkPage() {
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
            <Link href="/fixtures/group-b-world-cup-2026-tickets" className="hover:text-white">Group B</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">England vs Denmark</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Swords className="h-4 w-4 mr-2" />
                EURO 2020 REMATCH
              </Badge>
              <Badge className="bg-white text-red-800">GROUP B</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-white text-red-700">1966 Champions</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-red-700 text-white">1992 Euro Champions</Badge>
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
                Buy England vs Denmark Tickets
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
            <Card className="border-red-400 bg-gradient-to-r from-red-50 via-white to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-700 flex items-center justify-center flex-shrink-0">
                    <Swords className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">The Euro 2020 Semifinal Rematch</h3>
                    <p className="text-red-800 mt-2">
                      At Wembley in 2021, England ended Denmark&apos;s fairytale Euro run with a controversial
                      extra-time victory. Harry Kane&apos;s rebound goal after a debated penalty decision still
                      stings for Danish fans. Now these European rivals meet again at the Rose Bowl in Los Angeles,
                      with Denmark seeking revenge and England hunting that elusive major trophy. This Group B
                      clash carries echoes of their dramatic London encounter.
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
                  Complete Match Preview: England vs Denmark
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: European Heavyweights in California</h3>
                <p>
                  The <strong>England vs Denmark World Cup 2026</strong> match brings together two of European
                  football&apos;s most compelling narratives. On <strong>June 14, 2026</strong> at the iconic
                  <strong>Rose Bowl Stadium in Pasadena, California</strong>, England continue their quest to
                  end nearly 60 years of hurt since their 1966 World Cup triumph. Denmark, meanwhile, look to
                  prove that their resurgence since Christian Eriksen&apos;s recovery represents sustainable
                  success at the highest level.
                </p>

                <h3>England: The Perennial Nearly Men</h3>
                <p>
                  <strong>England (The Three Lions)</strong> possess arguably their most talented squad in
                  generations. The Euro 2020 final loss to Italy on penalties and the 2022 World Cup quarterfinal
                  exit to France have provided painful near-misses that fuel English determination. With
                  <strong>Jude Bellingham</strong> now established as one of the world&apos;s elite players,
                  England enter 2026 with genuine belief that they can finally end their trophy drought.
                </p>
                <p>
                  <strong>Jude Bellingham</strong> (Real Madrid) has become the complete midfielder - scoring
                  crucial goals, creating chances, and dominating games with his physical presence and technical
                  excellence. <strong>Harry Kane</strong> (Bayern Munich) remains England&apos;s all-time leading
                  scorer and provides world-class finishing. <strong>Phil Foden</strong> (Manchester City) offers
                  creative genius from wide areas, while <strong>Jordan Pickford</strong> has proven reliable in
                  tournament shootouts.
                </p>

                <h3>Denmark: The Inspirational Underdogs</h3>
                <p>
                  <strong>Denmark (Danish Dynamite)</strong> captured the world&apos;s heart at Euro 2020 following
                  <strong>Christian Eriksen&apos;s</strong> cardiac arrest and miraculous recovery. Their run to
                  the semifinals, playing with emotion and togetherness, reminded everyone what football means
                  beyond statistics and tactics. Denmark has maintained their competitive edge, qualifying
                  impressively for 2026 with a well-organized squad that exceeds the sum of its parts.
                </p>
                <p>
                  <strong>Christian Eriksen</strong> (Manchester United) remains the creative heartbeat of Danish
                  football. His recovery and return to top-level football is one of sport&apos;s great stories.
                  <strong>Rasmus Højlund</strong> (Manchester United) has emerged as a genuine striker threat,
                  bringing physicality and finishing to the forward line. <strong>Pierre-Emile Højbjerg</strong>
                  provides tireless running and tactical discipline in midfield, while the experienced
                  <strong>Kasper Schmeichel</strong> brings big-game experience between the posts.
                </p>

                <h3>Rose Bowl Stadium: California&apos;s Football Cathedral</h3>
                <p>
                  The <strong>Rose Bowl Stadium</strong> in Pasadena is one of America&apos;s most iconic sporting
                  venues. Site of the 1994 World Cup Final (Brazil vs Italy) and numerous Super Bowls and college
                  football games, its 90,000+ capacity creates an unforgettable atmosphere. The surrounding
                  San Gabriel Mountains provide a stunning backdrop, while Los Angeles&apos; diverse population
                  ensures passionate support for both nations.
                </p>

                <h3>The Euro 2020 Controversy</h3>
                <p>
                  The <strong>Euro 2020 semifinal</strong> remains a source of debate. Denmark took an early lead
                  through a stunning Mikkel Damsgaard free-kick, but England equalized through a Simon Kjær own
                  goal. With the match heading to extra time, England were awarded a controversial penalty when
                  Raheem Sterling went down in the box. <strong>Harry Kane&apos;s</strong> initial spot-kick was
                  saved by Schmeichel, but Kane buried the rebound to send England to the final. Danish fans still
                  question the penalty decision, adding extra edge to this 2026 encounter.
                </p>

                <h3>Tactical Battle</h3>
                <p>
                  England under their manager typically play with control and patience, building through the thirds
                  before unleashing attacking talent in the final third. <strong>Bellingham&apos;s</strong> box-to-box
                  brilliance and <strong>Kane&apos;s</strong> intelligent movement create a devastating combination.
                  England&apos;s set-piece threat also poses danger, with multiple aerial options in the squad.
                </p>
                <p>
                  Denmark&apos;s 3-4-3 system provides defensive solidity while allowing wing-backs to provide width.
                  <strong>Eriksen&apos;s</strong> vision from central areas and <strong>Højlund&apos;s</strong>
                  physical presence give Denmark clear attacking outlets. Their pressing organization can disrupt
                  opponents&apos; build-up play, potentially forcing errors from even the most composed defenders.
                </p>

                <h3>Key Battle: Bellingham vs Højbjerg</h3>
                <p>
                  The central midfield duel between <strong>Jude Bellingham</strong> and <strong>Pierre-Emile
                  Højbjerg</strong> could prove decisive. Bellingham&apos;s ability to drive forward and create
                  chances must be contained by Højbjerg&apos;s defensive discipline and tactical awareness.
                  Whoever wins this battle will likely control the game&apos;s tempo and outcome.
                </p>

                <h3>Group B Implications</h3>
                <p>
                  Group B is expected to be highly competitive, with both England and Denmark among the favorites
                  to advance. A victory in this match would provide crucial cushion for the remaining group
                  fixtures and likely secure passage to the knockout rounds. The loser faces immediate pressure
                  and must respond against the group&apos;s remaining opponents.
                </p>

                <h3>England&apos;s Trophy Drought</h3>
                <p>
                  England&apos;s wait for a major trophy since 1966 is the longest in their football history.
                  Recent near-misses have created both hope and anxiety among English fans. The 2026 World Cup
                  represents perhaps the best chance in decades, with a golden generation of players in their
                  prime. Failure would add another chapter to football&apos;s most frustrating saga.
                </p>

                <h3>Danish Resilience</h3>
                <p>
                  Denmark&apos;s ability to compete with larger nations reflects excellent organization, team
                  cohesion, and individual quality in key positions. Their 1992 European Championship triumph
                  (entered as late replacements, won the tournament) shows Danish football&apos;s capacity for
                  defying expectations. This underdog mentality makes them dangerous opponents for anyone.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>England vs Denmark World Cup 2026 tickets</strong> are in extremely high demand given
                  both nations&apos; passionate fanbases and the match&apos;s significance. Prices start from
                  approximately $235 USD for Category 4 seats, with premium hospitality packages available.
                  Los Angeles&apos; large British expat community and Scandinavian travelers will drive strong
                  ticket demand. Early booking is essential for this blockbuster Group B fixture.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {englandPlayers.map((player) => (
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
                  <Link href="/teams/england-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full England Squad</Button>
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
                    <strong>Euro 2020:</strong> England&apos;s controversial extra-time penalty victory in the
                    semifinal at Wembley still resonates with Danish fans seeking revenge.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Venue: Rose Bowl Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">90,000+</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">1922</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">UCLA</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">8</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/rose-bowl-world-cup-2026-tickets">
                  <Button className="w-full bg-red-700 hover:bg-red-800">
                    View All Rose Bowl Matches
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
                  cuisine. The City of Angels provides the perfect World Cup backdrop.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• LAX International Airport</li>
                      <li>• Metro Gold Line to Pasadena</li>
                      <li>• Shuttle services on match days</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Hollywood Sign</li>
                      <li>• Santa Monica Pier</li>
                      <li>• Griffith Observatory</li>
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
                  England vs Denmark will attract massive viewership in both countries, with UK audiences
                  particularly engaged given England&apos;s trophy drought narrative.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">UK</p>
                    <p className="text-sm text-slate-500">BBC / ITV</p>
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
                  Buy England vs Denmark Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>EURO 2020 REMATCH - Extreme demand!</span>
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
                <CardTitle>Group B Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/england-vs-iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇮🇷</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 11</span>
                </Link>
                <Link href="/fixtures/england-vs-denmark-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 border border-red-200">
                  <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇩🇰</span>
                  <span className="text-sm">Jun 14</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">Rematch</Badge>
                </Link>
                <Link href="/fixtures/denmark-vs-iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇩🇰 vs 🇮🇷</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 18</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/england-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Team Page
                </Link>
                <Link href="/teams/denmark-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇩🇰 Denmark Team Page
                </Link>
                <Link href="/venues/rose-bowl-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Rose Bowl Stadium
                </Link>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Los Angeles Travel Guide
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
