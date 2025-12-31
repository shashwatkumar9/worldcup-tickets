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
  title: "Serbia vs Ghana Tickets | World Cup 2026 Group H | Q2 Stadium",
  description: "Buy Serbia vs Ghana World Cup 2026 tickets at Q2 Stadium, Austin. European quality meets African passion in this exciting Group H encounter!",
  keywords: [
    "Serbia vs Ghana tickets",
    "World Cup 2026 Austin tickets",
    "Serbia World Cup 2026 tickets",
    "Ghana World Cup 2026 tickets",
    "Q2 Stadium World Cup",
    "FIFA World Cup 2026 Serbia",
    "Austin World Cup tickets",
    "Eagles vs Black Stars tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Serbia", flag: "🇷🇸", code: "SRB", nickname: "Eagles", fifaRanking: 25, group: "H" },
  awayTeam: { name: "Ghana", flag: "🇬🇭", code: "GHA", nickname: "Black Stars", fifaRanking: 60, group: "H" },
  date: "June 26, 2026",
  time: "6:00 PM CT",
  venue: "Q2 Stadium",
  city: "Austin, Texas",
  group: "H",
  matchNumber: 47,
  round: "Group Stage",
  expectedAttendance: 20738,
}

const serbiaPlayers = [
  { name: "Dusan Vlahovic", position: "Forward", club: "Juventus", number: 9, star: true },
  { name: "Aleksandar Mitrovic", position: "Forward", club: "Al-Hilal", number: 7, star: true },
  { name: "Sergej Milinkovic-Savic", position: "Midfielder", club: "Al-Hilal", number: 20 },
  { name: "Dusan Tadic", position: "Forward", club: "Fenerbahce", number: 10 },
]

const ghanaPlayers = [
  { name: "Mohammed Kudus", position: "Midfielder", club: "West Ham", number: 10, star: true },
  { name: "Thomas Partey", position: "Midfielder", club: "Arsenal", number: 5, star: true },
  { name: "Jordan Ayew", position: "Forward", club: "Crystal Palace", number: 9 },
  { name: "Inaki Williams", position: "Forward", club: "Athletic Bilbao", number: 19 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 130, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 225, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 195, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 175, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Ghana 3-2 Serbia", location: "Qatar" },
  { year: 2010, competition: "Friendly", result: "Serbia 1-1 Ghana", location: "London" },
]

export default function SerbiaVsGhanaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-blue-900 to-yellow-500 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-h-world-cup-2026-tickets" className="hover:text-white">Group H</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Serbia vs Ghana</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Flame className="h-4 w-4 mr-2" />
                2022 REMATCH
              </Badge>
              <Badge className="bg-white text-blue-800">GROUP H</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {matchInfo.homeTeam.flag} Serbia vs Ghana {matchInfo.awayTeam.flag}
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
                  Match Preview: Serbia vs Ghana World Cup 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="lead text-lg">
                  The 2022 World Cup rematch between Serbia and Ghana promises to deliver another thrilling encounter
                  when these two nations meet at Q2 Stadium in Austin, Texas for their Group H clash at the FIFA
                  World Cup 2026. Their dramatic meeting in Qatar four years ago produced one of the tournament's
                  most entertaining matches, and fans are eagerly anticipating another goal-filled spectacle.
                </p>

                <h3>The 2022 Qatar Thriller</h3>
                <p>
                  The last meeting between Serbia and Ghana at the 2022 World Cup was an absolute classic that
                  showcased everything beautiful and chaotic about international football. Ghana emerged victorious
                  with a stunning 3-2 win in what was one of the most entertaining group stage matches of the entire
                  tournament. The game featured brilliant goals, defensive errors, and non-stop action from the first
                  whistle to the last, leaving fans breathless and neutrals entertained throughout the ninety minutes.
                </p>

                <h3>Serbian Firepower and Aspirations</h3>
                <p>
                  Serbia enters the 2026 World Cup with one of the most potent attacking forces in European football.
                  The partnership of Dusan Vlahovic and Aleksandar Mitrovic provides the Eagles with devastating
                  goal-scoring options that few defenses can contain. Vlahovic has established himself as one of the
                  most clinical finishers in world football during his time at Juventus, while Mitrovic's physicality
                  and aerial prowess make him a constant threat in the opposition box. The creative engine behind
                  them, featuring talents like Sergej Milinkovic-Savic, ensures a steady supply of chances.
                </p>

                <h3>Ghana's Golden Generation Returns</h3>
                <p>
                  The Black Stars are experiencing a resurgence with a new generation of talent that has captured
                  the imagination of African football fans. Mohammed Kudus has emerged as one of the most exciting
                  players in world football, his dazzling dribbling skills and eye for goal making him nearly
                  unplayable on his day. Thomas Partey provides the perfect balance between defense and attack,
                  his presence in midfield giving Ghana the platform to compete against any opponent. The addition
                  of Inaki Williams has added new dimensions to Ghana's attack, with his pace and movement
                  causing problems for defenders across the continent.
                </p>

                <h3>Tactical Battle Preview</h3>
                <p>
                  This match presents a fascinating tactical contrast between Serbian power and Ghanaian flair.
                  Serbia's approach typically relies on their physical superiority and the clinical finishing of
                  their forwards, with crosses and set pieces forming a significant part of their attacking strategy.
                  Ghana, meanwhile, prefers a more fluid approach, using quick passing combinations and individual
                  brilliance to unlock defenses. The battle in midfield will be crucial, with Milinkovic-Savic and
                  Partey both capable of controlling the tempo and creating opportunities for their respective teams.
                </p>

                <h3>Q2 Stadium: Austin's World Cup Welcome</h3>
                <p>
                  Q2 Stadium in Austin provides an intimate and atmospheric setting for this Group H encounter.
                  While smaller than many World Cup venues with its 20,738 capacity, the stadium is renowned for
                  its incredible atmosphere and state-of-the-art facilities. Austin's vibrant culture and passionate
                  sports fans will create an electric environment, with the city's large African diaspora community
                  expected to show strong support for Ghana. The Texas capital has become a growing soccer hub in
                  the United States, and hosting World Cup matches represents a significant milestone for the city.
                </p>

                <h3>Group H Implications</h3>
                <p>
                  With the expanded 48-team format at World Cup 2026, every group stage match carries immense
                  significance. The result of this Serbia vs Ghana clash could prove decisive in determining which
                  teams progress from Group H to the knockout rounds. Both nations will be acutely aware that
                  dropping points against direct rivals could prove fatal to their tournament aspirations. The
                  memory of their previous World Cup encounter, where Ghana's victory helped eliminate Serbia from
                  the tournament, will add extra motivation for the Eagles seeking revenge on American soil.
                </p>

                <h3>Key Player Duels</h3>
                <p>
                  The individual battles across the pitch promise to be enthralling. Vlahovic against Ghana's
                  center-backs will be a constant physical contest, with the Serbian striker looking to use his
                  technical ability to find space and finishing opportunities. Kudus against Serbia's midfielders
                  could be the decisive duel, as the West Ham star attempts to find pockets of space to create
                  havoc. The goalkeepers will also be under pressure, with both teams capable of generating
                  numerous scoring chances throughout the match.
                </p>

                <h3>African Football Pride</h3>
                <p>
                  For Ghana, this match represents another opportunity to showcase African football on the biggest
                  stage. The Black Stars have a proud World Cup history, including their memorable run to the
                  quarterfinals in 2010 when they were minutes away from becoming the first African nation to
                  reach the semifinals. That legacy weighs heavily on the current generation, who are determined
                  to write their own chapter in Ghanaian football history at World Cup 2026.
                </p>

                <h3>Ticket Demand and Availability</h3>
                <p>
                  Tickets for Serbia vs Ghana at Q2 Stadium are expected to be in high demand, particularly among
                  the significant Serbian and Ghanaian diaspora communities in the United States. The stadium's
                  smaller capacity means competition for seats will be fierce, making early purchase essential for
                  fans hoping to witness this exciting Group H encounter. The intimate atmosphere at Q2 Stadium
                  ensures that every seat provides an excellent viewing experience, though premium and midfield
                  positions will command higher prices due to their superior vantage points.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.homeTeam.flag} Serbia - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {serbiaPlayers.map((player) => (
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
                    {matchInfo.awayTeam.flag} Ghana - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {ghanaPlayers.map((player) => (
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
                        Home of Austin FC (MLS)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <p className="text-gray-600">
                      Q2 Stadium is located in North Austin with excellent connectivity.
                      Austin-Bergstrom International Airport is 20 minutes away, with rideshare
                      and public transit options available for match days.
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
                  Austin Travel Guide for Fans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Austin, the capital of Texas, is known for its vibrant live music scene,
                    excellent food, and unique culture. The city offers visitors a perfect
                    blend of Southern hospitality and modern urban experiences.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-purple-900">Live Music Capital</h5>
                      <p className="text-sm text-purple-700">
                        Experience Austin's famous 6th Street and countless live music venues
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h5 className="font-semibold text-orange-900">Food Scene</h5>
                      <p className="text-sm text-orange-700">
                        World-renowned BBQ and diverse culinary options throughout the city
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900">Outdoor Activities</h5>
                      <p className="text-sm text-blue-700">
                        Barton Springs, Lady Bird Lake, and numerous parks for outdoor fun
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/travel/austin-world-cup-travel-guide">
                      <Button variant="outline">
                        Read Full Austin Travel Guide <ChevronRight className="h-4 w-4 ml-2" />
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
                  Serbia vs Ghana will be broadcast live across major networks worldwide. In the United States,
                  the match will be available on FOX Sports and Telemundo, with streaming options on Peacock
                  and Fubo TV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FOX Sports</Badge>
                  <Badge variant="outline">Telemundo</Badge>
                  <Badge variant="outline">Peacock</Badge>
                  <Badge variant="outline">BBC (UK)</Badge>
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
                  <Link href="/teams/serbia-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Serbia Team Profile
                  </Link>
                  <Link href="/teams/ghana-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Ghana Team Profile
                  </Link>
                  <Link href="/venues/q2-stadium-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Q2 Stadium Guide
                  </Link>
                  <Link href="/travel/austin-world-cup-travel-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Austin Travel Guide
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
