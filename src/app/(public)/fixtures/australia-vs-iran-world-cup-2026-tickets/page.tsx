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
  Flame,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Australia vs Iran Tickets | World Cup 2026 Group K | Arrowhead Stadium",
  description: "Buy Australia vs Iran World Cup 2026 tickets at Arrowhead Stadium, Kansas City. Asian football rivals clash in this crucial Group K encounter!",
  keywords: [
    "Australia vs Iran tickets",
    "World Cup 2026 Kansas City tickets",
    "Australia World Cup 2026 tickets",
    "Iran World Cup 2026 tickets",
    "Arrowhead Stadium World Cup",
    "FIFA World Cup 2026 Australia",
    "Kansas City World Cup tickets",
    "Socceroos vs Team Melli tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Australia", flag: "🇦🇺", code: "AUS", nickname: "Socceroos", fifaRanking: 24, group: "K" },
  awayTeam: { name: "Iran", flag: "🇮🇷", code: "IRN", nickname: "Team Melli", fifaRanking: 21, group: "K" },
  date: "June 22, 2026",
  time: "6:00 PM CT",
  venue: "Arrowhead Stadium",
  city: "Kansas City, Missouri",
  group: "K",
  matchNumber: 40,
  round: "Group Stage",
  expectedAttendance: 76416,
}

const australiaPlayers = [
  { name: "Mathew Leckie", position: "Forward", club: "Melbourne City", number: 7, star: true },
  { name: "Jackson Irvine", position: "Midfielder", club: "St. Pauli", number: 22, star: true },
  { name: "Harry Souttar", position: "Defender", club: "Leicester City", number: 6 },
  { name: "Mathew Ryan", position: "Goalkeeper", club: "AZ Alkmaar", number: 1 },
]

const iranPlayers = [
  { name: "Mehdi Taremi", position: "Forward", club: "Inter Milan", number: 9, star: true },
  { name: "Sardar Azmoun", position: "Forward", club: "Roma", number: 20, star: true },
  { name: "Alireza Jahanbakhsh", position: "Forward", club: "Feyenoord", number: 7 },
  { name: "Alireza Beiranvand", position: "Goalkeeper", club: "Persepolis", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 255, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 215, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 195, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup Playoff", result: "Australia 2-1 Iran", location: "Qatar" },
  { year: 2019, competition: "Asian Cup", result: "Iran 0-0 Australia", location: "UAE" },
  { year: 2018, competition: "Friendly", result: "Iran 0-2 Australia", location: "Australia" },
]

export default function AustraliaVsIranPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 via-green-700 to-red-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-k-world-cup-2026-tickets" className="hover:text-white">Group K</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Australia vs Iran</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Flame className="h-4 w-4 mr-2" />
                AFC RIVALS
              </Badge>
              <Badge className="bg-white text-green-800">GROUP K</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {matchInfo.homeTeam.flag} Australia vs Iran {matchInfo.awayTeam.flag}
            </h1>
            <p className="text-xl text-white/90 mb-4">FIFA World Cup 2026 • Group K</p>
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
                  Match Preview: Australia vs Iran World Cup 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="lead text-lg">
                  Australia and Iran renew their AFC rivalry at Arrowhead Stadium in Kansas City for a
                  pivotal Group K encounter at the FIFA World Cup 2026. These two Asian football powers
                  have been fierce competitors in qualifying campaigns for decades, and their matches
                  always deliver drama, intensity, and quality football. This latest chapter in their
                  rivalry takes place on the biggest stage of all, with both nations desperate to advance
                  from the group stages.
                </p>

                <h3>2022 Playoff Drama</h3>
                <p>
                  The most recent competitive meeting between Australia and Iran came in a high-stakes
                  playoff match for the 2022 World Cup, held in Qatar. Australia emerged victorious
                  with a 2-1 win, effectively ending Iran's hopes of reaching the tournament through
                  the intercontinental playoff route. That result added another chapter to the intense
                  rivalry between these nations, with Iran still smarting from missing out on the World
                  Cup while Australia went on to reach the knockout stages in Qatar.
                </p>

                <h3>The Socceroos' World Cup Journey</h3>
                <p>
                  Australia's qualification for World Cup 2026 continues their recent run of tournament
                  appearances. The Socceroos' remarkable run to the Round of 16 at the 2022 World Cup,
                  where they narrowly lost to eventual champions Argentina, captured hearts worldwide
                  and elevated expectations for the national team. Under their new coaching staff,
                  Australia has continued to develop, blending experienced campaigners with exciting
                  young talent to create a competitive squad capable of challenging any opponent.
                </p>

                <h3>Iran's European Stars</h3>
                <p>
                  Iran boasts one of the strongest attacks in Asian football, led by the devastating
                  partnership of Mehdi Taremi and Sardar Azmoun. Taremi has established himself as one
                  of Europe's most clinical strikers during his time with Porto and now Inter Milan,
                  his combination of hold-up play, finishing, and work rate making him a complete
                  forward. Azmoun, the "Iranian Messi," brings pace, skill, and creativity to Team
                  Melli's attack. Together, they represent the most potent strike partnership in
                  Asian football and a constant threat to any defense.
                </p>

                <h3>Australian Resilience</h3>
                <p>
                  The Socceroos have built their success on team spirit, organization, and never-say-die
                  attitude. Mathew Leckie remains a key figure in the attack, his experience and big-game
                  mentality invaluable in tournament football. Jackson Irvine has developed into an
                  excellent central midfielder, his energy and box-to-box running essential to Australia's
                  game plan. Harry Souttar provides aerial dominance at the back, while Mathew Ryan's
                  shot-stopping abilities have been crucial in many crucial qualifiers.
                </p>

                <h3>Tactical Battle Preview</h3>
                <p>
                  This match presents a fascinating tactical contest between Iran's technical quality
                  and Australia's physical, direct approach. Iran typically dominates possession and
                  looks to create chances through patient buildup and individual brilliance from Taremi
                  and Azmoun. Australia prefers a more direct style, using long balls and set pieces
                  to create opportunities while remaining compact and difficult to break down. The
                  key for Australia will be limiting Iran's creative outlets, while Team Melli must
                  find ways to penetrate Australia's well-organized defense.
                </p>

                <h3>Arrowhead Stadium: The Sea of Red</h3>
                <p>
                  Arrowhead Stadium in Kansas City is one of the loudest stadiums in the world, renowned
                  for its incredible atmosphere when the Kansas City Chiefs play. For World Cup 2026,
                  this 76,000-capacity venue will host some of the tournament's most anticipated matches.
                  The passionate Kansas City sports community will embrace the World Cup, creating a
                  vibrant atmosphere for Australia vs Iran. The stadium's excellent facilities and
                  sightlines ensure every fan will have a memorable experience.
                </p>

                <h3>AFC Qualifying Battles</h3>
                <p>
                  Australia and Iran have been the two dominant forces in Asian World Cup qualifying
                  for the past two decades. Their encounters in qualifying rounds have often decided
                  group winners and produced memorable moments. This familiarity adds extra edge to
                  their World Cup meeting, with both sets of players fully aware of their opponent's
                  strengths and weaknesses. The tactical chess match between the coaches will be
                  fascinating, as both sides attempt to gain psychological and tactical advantages.
                </p>

                <h3>Australia's AFC Transition</h3>
                <p>
                  Since joining the Asian Football Confederation in 2006, Australia has become one
                  of the powerhouses of Asian football. Their 2015 Asian Cup victory on home soil
                  remains a highlight, and consistent World Cup qualification has established them
                  among the continent's elite. The move from Oceania to Asia has elevated Australian
                  football, providing tougher competition in qualifying and access to the lucrative
                  Asian football market.
                </p>

                <h3>Iranian Football Heritage</h3>
                <p>
                  Iran has one of the proudest football traditions in Asia, having qualified for six
                  World Cups and consistently ranked among the top nations in the confederation. Team
                  Melli's passionate fanbase creates incredible atmospheres at home matches, and their
                  traveling support at World Cups is equally impressive. The development of players
                  like Taremi and Azmoun at Europe's top clubs demonstrates Iran's ability to produce
                  world-class talent.
                </p>

                <h3>Group K Dynamics</h3>
                <p>
                  The result of this Australia vs Iran clash will have significant implications for
                  Group K progression. Both teams are expected to challenge for knockout round places,
                  making this head-to-head result potentially decisive. The winner will take a massive
                  step toward qualification, while the loser faces an uphill battle to progress. This
                  pressure adds extra intensity to an already fierce rivalry.
                </p>

                <h3>Ticket Information for Kansas City</h3>
                <p>
                  Tickets for Australia vs Iran at Arrowhead Stadium are highly sought after, particularly
                  among the Australian diaspora in the United States and the significant Iranian-American
                  community. Kansas City's central location makes it accessible from across the country,
                  and the stadium's reputation ensures strong local interest. Early booking is essential
                  for fans hoping to witness this crucial AFC rivalry match.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.homeTeam.flag} Australia - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {australiaPlayers.map((player) => (
                      <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-yellow-600">#{player.number}</span>
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
                    {matchInfo.awayTeam.flag} Iran - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {iranPlayers.map((player) => (
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
                        Home of Kansas City Chiefs (NFL)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <p className="text-gray-600">
                      Arrowhead Stadium is located in the Truman Sports Complex with ample parking.
                      Kansas City International Airport is 30 minutes away, with rideshare and
                      shuttle services available for match days.
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
                  Kansas City Travel Guide for Fans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Kansas City offers visitors world-famous barbecue, rich jazz heritage, and
                    genuine Midwestern hospitality. The city spans two states and provides a
                    unique blend of culture, cuisine, and sports passion.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h5 className="font-semibold text-red-900">BBQ Capital</h5>
                      <p className="text-sm text-red-700">
                        World-renowned barbecue with legendary joints throughout the city
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900">Jazz Heritage</h5>
                      <p className="text-sm text-blue-700">
                        Historic 18th & Vine Jazz District and live music venues
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-green-900">Sports Passion</h5>
                      <p className="text-sm text-green-700">
                        One of America's most passionate sports cities with legendary fans
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/travel/kansas-city-world-cup-travel-guide">
                      <Button variant="outline">
                        Read Full Kansas City Travel Guide <ChevronRight className="h-4 w-4 ml-2" />
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
                  Australia vs Iran will be broadcast live across major networks worldwide. In the United States,
                  the match will be available on FOX Sports and Telemundo, with streaming options on Peacock
                  and Fubo TV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FOX Sports</Badge>
                  <Badge variant="outline">Telemundo</Badge>
                  <Badge variant="outline">Peacock</Badge>
                  <Badge variant="outline">Optus Sport (Australia)</Badge>
                  <Badge variant="outline">IRIB (Iran)</Badge>
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

            {/* Group K Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle>Group K Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/fixtures/group-k-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">All Group K Matches</p>
                    <p className="text-sm text-gray-500">View complete schedule</p>
                  </Link>
                  <Link href="/fixtures/portugal-vs-iran-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">🇵🇹 Portugal vs Iran 🇮🇷</p>
                    <p className="text-sm text-gray-500">Group B • BC Place</p>
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
                  <Link href="/teams/australia-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Australia Team Profile
                  </Link>
                  <Link href="/teams/iran-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Iran Team Profile
                  </Link>
                  <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Arrowhead Stadium Guide
                  </Link>
                  <Link href="/travel/kansas-city-world-cup-travel-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Kansas City Travel Guide
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
