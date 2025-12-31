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
  Globe,
} from "lucide-react"

export const metadata: Metadata = {
  title: "South Korea vs Cameroon Tickets | World Cup 2026 Group H | MetLife Stadium",
  description: "Buy South Korea vs Cameroon World Cup 2026 tickets at MetLife Stadium, New York. Asian powerhouse meets African lions in this thrilling Group H encounter!",
  keywords: [
    "South Korea vs Cameroon tickets",
    "World Cup 2026 New York tickets",
    "South Korea World Cup 2026 tickets",
    "Cameroon World Cup 2026 tickets",
    "MetLife Stadium World Cup",
    "FIFA World Cup 2026 South Korea",
    "New York World Cup tickets",
    "Taeguk Warriors vs Indomitable Lions tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "South Korea", flag: "🇰🇷", code: "KOR", nickname: "Taeguk Warriors", fifaRanking: 22, group: "H" },
  awayTeam: { name: "Cameroon", flag: "🇨🇲", code: "CMR", nickname: "Indomitable Lions", fifaRanking: 38, group: "H" },
  date: "June 23, 2026",
  time: "7:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "H",
  matchNumber: 43,
  round: "Group Stage",
  expectedAttendance: 82500,
}

const southKoreaPlayers = [
  { name: "Son Heung-min", position: "Forward", club: "Tottenham", number: 7, star: true },
  { name: "Kim Min-jae", position: "Defender", club: "Bayern Munich", number: 3, star: true },
  { name: "Lee Kang-in", position: "Midfielder", club: "PSG", number: 10 },
  { name: "Hwang Hee-chan", position: "Forward", club: "Wolverhampton", number: 11 },
]

const cameroonPlayers = [
  { name: "André-Frank Zambo Anguissa", position: "Midfielder", club: "Napoli", number: 8, star: true },
  { name: "Eric Maxim Choupo-Moting", position: "Forward", club: "Bayern Munich", number: 13, star: true },
  { name: "Vincent Aboubakar", position: "Forward", club: "Besiktas", number: 10 },
  { name: "André Onana", position: "Goalkeeper", club: "Manchester United", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 165, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 295, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 255, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 235, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2010, competition: "World Cup", result: "South Korea 2-0 Cameroon", location: "South Africa" },
  { year: 2002, competition: "Friendly", result: "South Korea 2-1 Cameroon", location: "South Korea" },
]

export default function SouthKoreaVsCameroonPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-blue-700 to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-h-world-cup-2026-tickets" className="hover:text-white">Group H</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">South Korea vs Cameroon</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Globe className="h-4 w-4 mr-2" />
                INTERCONTINENTAL
              </Badge>
              <Badge className="bg-white text-blue-800">GROUP H</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {matchInfo.homeTeam.flag} South Korea vs Cameroon {matchInfo.awayTeam.flag}
            </h1>
            <p className="text-xl text-white/90 mb-4">FIFA World Cup 2026 • Group H</p>
            <div className="flex flex-wrap justify-center gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" /> {matchInfo.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" /> {matchInfo.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> {matchInfo.venue}, {matchInfo.city}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Match Banner */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl mb-3">{matchInfo.homeTeam.flag}</div>
              <h2 className="text-2xl font-bold">{matchInfo.homeTeam.name}</h2>
              <p className="text-gray-500">{matchInfo.homeTeam.nickname}</p>
              <p className="text-sm text-gray-400">FIFA Ranking: #{matchInfo.homeTeam.fifaRanking}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300 mb-2">VS</div>
              <Badge variant="secondary" className="text-lg px-4 py-1">Match #{matchInfo.matchNumber}</Badge>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-3">{matchInfo.awayTeam.flag}</div>
              <h2 className="text-2xl font-bold">{matchInfo.awayTeam.name}</h2>
              <p className="text-gray-500">{matchInfo.awayTeam.nickname}</p>
              <p className="text-sm text-gray-400">FIFA Ranking: #{matchInfo.awayTeam.fifaRanking}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Match Preview: South Korea vs Cameroon World Cup 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="lead text-lg">
                  South Korea and Cameroon meet at MetLife Stadium in the New York metropolitan area for
                  an exciting Group H encounter at the FIFA World Cup 2026. This intercontinental clash
                  brings together Asian football's most consistent nation against Africa's most successful
                  World Cup team, promising a thrilling contest between contrasting styles and passionate
                  fanbases in one of America's largest venues.
                </p>

                <h3>Son Heung-min: Asia's Greatest</h3>
                <p>
                  Son Heung-min leads South Korea into World Cup 2026 as arguably the greatest Asian
                  footballer of all time. The Tottenham captain has achieved unprecedented success in
                  the Premier League, winning the Golden Boot and establishing himself among the world's
                  elite attackers. His pace, finishing ability, and work rate make him a constant threat,
                  while his leadership and experience in big matches provide invaluable guidance for his
                  teammates. For Korea, Son is more than just a player - he's a national icon whose
                  performances inspire a nation.
                </p>

                <h3>Korean Football Excellence</h3>
                <p>
                  Beyond Son, South Korea has developed an exceptional generation of talent. Kim Min-jae
                  has established himself as one of Europe's best center-backs at Bayern Munich, his
                  composure and ability on the ball making him a modern defender of the highest caliber.
                  Lee Kang-in brings creativity and flair from PSG, while Hwang Hee-chan adds pace and
                  goal threat from the Premier League. This blend of experience and youth, all tested
                  at Europe's highest level, makes South Korea a formidable opponent for any nation.
                </p>

                <h3>The Indomitable Lions' Legacy</h3>
                <p>
                  Cameroon holds a special place in World Cup history as Africa's trailblazers on the
                  global stage. Their stunning run to the 1990 World Cup quarterfinals, including a
                  famous victory over defending champions Argentina, changed perceptions of African
                  football forever. Since then, the Indomitable Lions have continued to represent the
                  continent with pride, qualifying for multiple World Cups and producing memorable
                  performances. That legacy of fearless football and never-say-die attitude defines
                  Cameroon's approach to every tournament.
                </p>

                <h3>Cameroon's Premier League Stars</h3>
                <p>
                  Cameroon's squad features several players excelling in Europe's top leagues.
                  André-Frank Zambo Anguissa has become one of Serie A's best midfielders at Napoli,
                  his powerful running and technical ability making him a complete player. André Onana
                  provides world-class goalkeeping after establishing himself at Manchester United,
                  while Eric Maxim Choupo-Moting brings experience and goal-scoring ability from
                  Bayern Munich. Vincent Aboubakar's predatory instincts have been crucial in previous
                  tournaments, and his experience will be vital once again.
                </p>

                <h3>Tactical Battle Preview</h3>
                <p>
                  This match presents a fascinating tactical contrast. South Korea's approach typically
                  involves quick passing, pressing, and utilizing Son's pace on the counter. Their
                  organization and work rate make them difficult to break down, while their technical
                  quality allows them to control games against most opponents. Cameroon's style is
                  more direct, using their physical presence and individual quality to create chances.
                  The battle in midfield between Anguissa and Korea's combative central players will
                  be crucial in determining which team can impose their style.
                </p>

                <h3>MetLife Stadium: World Cup Showcase</h3>
                <p>
                  MetLife Stadium in the New York metropolitan area provides a spectacular setting
                  for this Group H encounter. The 82,500-capacity venue is one of the largest in
                  the tournament, offering an incredible atmosphere for World Cup matches. The
                  New York area's massive and diverse population ensures strong support for both
                  nations, with significant Korean and African diaspora communities creating a
                  colorful and passionate atmosphere. The stadium's modern facilities and excellent
                  transport links make it an ideal World Cup venue.
                </p>

                <h3>2002 World Cup Memories</h3>
                <p>
                  South Korea's co-hosting of the 2002 World Cup remains a defining moment in Asian
                  football history. The Taeguk Warriors' stunning run to the semifinals captured
                  global attention and inspired a generation of Korean footballers. That tournament
                  proved Asian teams could compete at the highest level and changed the trajectory
                  of Korean football development. The current generation carries that legacy, hoping
                  to create new memories at World Cup 2026.
                </p>

                <h3>African Football Pride</h3>
                <p>
                  For Cameroon, every World Cup represents an opportunity to showcase African football
                  on the biggest stage. The Indomitable Lions have consistently been among Africa's
                  strongest nations, their physical presence and technical ability making them
                  dangerous opponents for any team. Their passionate support, both at home and from
                  the African diaspora worldwide, creates incredible atmospheres and drives the
                  players to extraordinary efforts.
                </p>

                <h3>Group H Implications</h3>
                <p>
                  The result of this South Korea vs Cameroon match will have significant implications
                  for Group H progression. Both teams will view this as a crucial opportunity to
                  collect three points against a direct rival. With the expanded format providing
                  more knockout round berths, the pressure to perform is intense, and neither side
                  will want to drop points in what could be a decisive fixture.
                </p>

                <h3>Ticket Information for MetLife Stadium</h3>
                <p>
                  Tickets for South Korea vs Cameroon at MetLife Stadium are among the most sought-after
                  for World Cup 2026. The New York area's massive population and diverse communities
                  ensure incredible demand, while the venue's accessibility from Manhattan and
                  surrounding areas adds to its appeal. Early booking is essential for fans hoping
                  to witness this exciting intercontinental clash at one of America's premier stadiums.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.homeTeam.flag} South Korea - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {southKoreaPlayers.map((player) => (
                      <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-red-600">#{player.number}</span>
                          <div>
                            <p className="font-medium flex items-center gap-2">
                              {player.name}
                              {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                            </p>
                            <p className="text-sm text-gray-500">{player.club}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{player.position}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.awayTeam.flag} Cameroon - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cameroonPlayers.map((player) => (
                      <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-green-700">#{player.number}</span>
                          <div>
                            <p className="font-medium flex items-center gap-2">
                              {player.name}
                              {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                            </p>
                            <p className="text-sm text-gray-500">{player.club}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{player.position}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Head to Head */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Head to Head History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-gray-500">{match.competition}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{match.year}</Badge>
                        <p className="text-sm text-gray-500 mt-1">{match.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Venue: {matchInfo.venue}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Stadium Information</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Capacity: {matchInfo.expectedAttendance.toLocaleString()}
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {matchInfo.city}
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Home of NY Giants & NY Jets (NFL)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <p className="text-gray-600">
                      MetLife Stadium is located in the Meadowlands with excellent transit access.
                      NJ Transit trains run directly from Penn Station Manhattan, with additional
                      bus services and parking available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5" />
                  New York Area Travel Guide for Fans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    The New York metropolitan area offers visitors unparalleled entertainment,
                    culture, dining, and attractions. From the bright lights of Times Square to
                    world-class museums, there's something for every World Cup visitor.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900">Iconic Landmarks</h5>
                      <p className="text-sm text-blue-700">
                        Statue of Liberty, Empire State Building, Central Park
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h5 className="font-semibold text-yellow-900">Entertainment</h5>
                      <p className="text-sm text-yellow-700">
                        Broadway shows, Times Square, world-renowned museums
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h5 className="font-semibold text-red-900">Food Scene</h5>
                      <p className="text-sm text-red-700">
                        Diverse cuisine from every corner of the globe
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/travel/new-york-world-cup-travel-guide">
                      <Button variant="outline">
                        Read Full New York Travel Guide <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Broadcast Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tv className="h-5 w-5" />
                  TV Broadcast Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  South Korea vs Cameroon will be broadcast live across major networks worldwide. In the United States,
                  the match will be available on FOX Sports and Telemundo, with streaming options on Peacock
                  and Fubo TV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FOX Sports</Badge>
                  <Badge variant="outline">Telemundo</Badge>
                  <Badge variant="outline">Peacock</Badge>
                  <Badge variant="outline">KBS (Korea)</Badge>
                  <Badge variant="outline">SuperSport (Africa)</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Purchase Card */}
            <Card className="border-2 border-blue-600 sticky top-4">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5" />
                  Buy Tickets Now
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {affiliateLinks.map((link) => (
                    <div key={link.partner} className="p-4 border rounded-lg hover:border-blue-600 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium flex items-center gap-2">
                          {link.logo} {link.partner}
                        </span>
                        <Badge variant="secondary">{link.rating}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">
                          From ${link.price_from}
                        </span>
                        <Button asChild>
                          <Link href={link.url}>
                            Buy Now <ExternalLink className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>💡 Tip:</strong> Prices may vary based on seat location and demand.
                    Compare multiple platforms for the best deals!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Match Details */}
            <Card>
              <CardHeader>
                <CardTitle>Match Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Competition</dt>
                    <dd className="font-medium">FIFA World Cup 2026</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Round</dt>
                    <dd className="font-medium">{matchInfo.round}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Group</dt>
                    <dd className="font-medium">Group {matchInfo.group}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Match #</dt>
                    <dd className="font-medium">{matchInfo.matchNumber}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Kickoff</dt>
                    <dd className="font-medium">{matchInfo.time}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Expected Attendance</dt>
                    <dd className="font-medium">{matchInfo.expectedAttendance.toLocaleString()}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Group H Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle>Group H Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/fixtures/group-h-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">All Group H Matches</p>
                    <p className="text-sm text-gray-500">View complete schedule</p>
                  </Link>
                  <Link href="/fixtures/uruguay-vs-korea-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">🇺🇾 Uruguay vs South Korea 🇰🇷</p>
                    <p className="text-sm text-gray-500">Group H • SoFi Stadium</p>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/teams/south-korea-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> South Korea Team Profile
                  </Link>
                  <Link href="/teams/cameroon-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Cameroon Team Profile
                  </Link>
                  <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> MetLife Stadium Guide
                  </Link>
                  <Link href="/travel/new-york-world-cup-travel-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> New York Travel Guide
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
