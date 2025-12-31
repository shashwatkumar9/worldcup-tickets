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
  title: "Switzerland vs Poland Tickets | World Cup 2026 Group F | Lincoln Financial Field",
  description: "Buy Switzerland vs Poland World Cup 2026 tickets at Lincoln Financial Field, Philadelphia. Central European rivals clash in this crucial Group F encounter!",
  keywords: [
    "Switzerland vs Poland tickets",
    "World Cup 2026 Philadelphia tickets",
    "Switzerland World Cup 2026 tickets",
    "Poland World Cup 2026 tickets",
    "Lincoln Financial Field World Cup",
    "FIFA World Cup 2026 Switzerland",
    "Philadelphia World Cup tickets",
    "Nati vs Eagles tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Switzerland", flag: "🇨🇭", code: "SUI", nickname: "Nati", fifaRanking: 15, group: "F" },
  awayTeam: { name: "Poland", flag: "🇵🇱", code: "POL", nickname: "Eagles", fifaRanking: 26, group: "F" },
  date: "June 24, 2026",
  time: "7:00 PM ET",
  venue: "Lincoln Financial Field",
  city: "Philadelphia, Pennsylvania",
  group: "F",
  matchNumber: 44,
  round: "Group Stage",
  expectedAttendance: 69796,
}

const switzerlandPlayers = [
  { name: "Granit Xhaka", position: "Midfielder", club: "Bayer Leverkusen", number: 10, star: true },
  { name: "Breel Embolo", position: "Forward", club: "Monaco", number: 7, star: true },
  { name: "Manuel Akanji", position: "Defender", club: "Manchester City", number: 5 },
  { name: "Yann Sommer", position: "Goalkeeper", club: "Inter Milan", number: 1 },
]

const polandPlayers = [
  { name: "Robert Lewandowski", position: "Forward", club: "Barcelona", number: 9, star: true },
  { name: "Piotr Zielinski", position: "Midfielder", club: "Inter Milan", number: 20, star: true },
  { name: "Jakub Kiwior", position: "Defender", club: "Arsenal", number: 14 },
  { name: "Wojciech Szczesny", position: "Goalkeeper", club: "Juventus", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 155, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 285, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 245, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 225, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2016, competition: "Euro R16", result: "Switzerland 1-1 Poland (4-5 pen)", location: "France" },
  { year: 2018, competition: "Nations League", result: "Poland 2-1 Switzerland", location: "Poland" },
  { year: 2018, competition: "Nations League", result: "Switzerland 5-2 Poland", location: "Switzerland" },
]

export default function SwitzerlandVsPolandPage() {
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
            <Link href="/fixtures/group-f-world-cup-2026-tickets" className="hover:text-white">Group F</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Switzerland vs Poland</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Flame className="h-4 w-4 mr-2" />
                EUROPEAN CLASH
              </Badge>
              <Badge className="bg-white text-red-800">GROUP F</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {matchInfo.homeTeam.flag} Switzerland vs Poland {matchInfo.awayTeam.flag}
            </h1>
            <p className="text-xl text-white/90 mb-4">FIFA World Cup 2026 • Group F</p>
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
                  Match Preview: Switzerland vs Poland World Cup 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="lead text-lg">
                  Switzerland and Poland meet at Lincoln Financial Field in Philadelphia for a crucial Group F
                  encounter at the FIFA World Cup 2026. Both nations have established themselves as consistent
                  European performers, and this match between the Nati and the Eagles promises to be a tightly
                  contested tactical battle between two well-organized sides with world-class individual talents.
                </p>

                <h3>Euro 2016 Penalty Drama</h3>
                <p>
                  The most memorable recent encounter between these two nations came at Euro 2016 in France,
                  where they met in the Round of 16. The match finished 1-1 after extra time, with Poland
                  ultimately prevailing 5-4 on penalties in a tense shootout. That dramatic victory propelled
                  Poland to the quarterfinals, while Switzerland's promising tournament came to an unfortunate
                  end. Both teams will have that match in mind as they prepare for their World Cup showdown,
                  though this time the stakes are arguably even higher with group progression on the line.
                </p>

                <h3>Swiss Precision and Quality</h3>
                <p>
                  Switzerland has built a reputation as one of the most consistent national teams in world
                  football, regularly qualifying for major tournaments and often producing impressive
                  performances against bigger nations. At the heart of their success is Granit Xhaka,
                  whose magnificent season with Bayer Leverkusen has elevated his status to one of the
                  world's elite midfielders. Xhaka's leadership, passing range, and ability to control
                  games from midfield makes him invaluable to the Swiss cause.
                </p>

                <h3>Polish Firepower</h3>
                <p>
                  Poland possesses one of the most lethal strikers in football history in Robert Lewandowski.
                  Despite his advancing years, the Barcelona striker remains a clinical finisher capable of
                  punishing any defensive lapse. His movement, positioning, and finishing ability make Poland
                  a constant threat, particularly from crosses and set pieces. Behind him, Piotr Zielinski
                  provides the creative spark, his technical ability and vision creating opportunities for
                  the Polish attack. The Inter Milan midfielder has developed into one of Europe's most
                  complete central midfielders.
                </p>

                <h3>Tactical Chess Match</h3>
                <p>
                  This fixture promises to be a fascinating tactical encounter between two well-drilled
                  European sides. Switzerland typically employs a disciplined, compact system that is
                  difficult to break down, using quick transitions and set pieces to create scoring
                  opportunities. Poland, meanwhile, builds their game around getting the ball to Lewandowski
                  in dangerous positions, with Zielinski orchestrating attacks from deeper positions.
                  The battle between Switzerland's defensive organization and Poland's attacking quality
                  will likely determine the outcome of this crucial Group F clash.
                </p>

                <h3>Defensive Excellence</h3>
                <p>
                  Both teams boast excellent defensive personnel playing for Europe's top clubs. Manuel
                  Akanji has been instrumental in Manchester City's dominance, his composure and reading
                  of the game making him one of the Premier League's best defenders. For Poland, Jakub
                  Kiwior has established himself at Arsenal, bringing pace and technical ability to the
                  backline. The duel between these defenders and the opposing attacks will be crucial,
                  with neither side likely to create many clear-cut chances against such organized defenses.
                </p>

                <h3>Lincoln Financial Field: The Linc</h3>
                <p>
                  Lincoln Financial Field in Philadelphia provides an excellent venue for this European
                  clash. Home to the NFL's Philadelphia Eagles, the stadium holds nearly 70,000 fans and
                  is known for its passionate atmosphere. Philadelphia has a rich soccer heritage, with
                  strong communities from both Swiss and Polish backgrounds expected to create a vibrant
                  atmosphere. The city's location on the East Coast makes it easily accessible for
                  European fans traveling to support their teams.
                </p>

                <h3>Swiss Tournament Pedigree</h3>
                <p>
                  Switzerland has become a tournament regular in recent years, consistently reaching the
                  knockout stages of major competitions. Their memorable victory over France in the Euro
                  2020 Round of 16 remains a highlight of Swiss football history, demonstrating their
                  ability to compete with and defeat the world's best. The squad combines experienced
                  veterans with talented youngsters, creating a balanced group capable of deep tournament
                  runs. Their systematic approach and team unity make them dangerous opponents for any side.
                </p>

                <h3>Poland's World Cup Ambitions</h3>
                <p>
                  For Poland, World Cup 2026 represents another opportunity to make a significant impact
                  on the global stage. The presence of Lewandowski ensures they will always be taken
                  seriously, but the team has developed beyond relying solely on their captain. The
                  emergence of young talents and the establishment of quality players across Europe's
                  top leagues has strengthened the squad considerably. Poland will view this World Cup
                  as a chance to create lasting memories for their passionate fanbase.
                </p>

                <h3>Group F Implications</h3>
                <p>
                  The result of this Switzerland vs Poland match could prove decisive in determining the
                  final Group F standings. With both teams capable of collecting points against any
                  opponent, the head-to-head record could prove crucial in tie-breaking scenarios. Neither
                  side will want to drop points against a direct rival, making for an intense and
                  competitive encounter from start to finish.
                </p>

                <h3>Ticket Demand in Philadelphia</h3>
                <p>
                  Tickets for Switzerland vs Poland at Lincoln Financial Field are highly sought after,
                  particularly among the large Polish-American community in Philadelphia and the broader
                  Northeast. The city's accessibility from major European airports also makes it a
                  popular destination for traveling fans. Early booking is strongly recommended to
                  secure seats for this exciting Group F clash between two of European football's
                  most consistent performers.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.homeTeam.flag} Switzerland - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {switzerlandPlayers.map((player) => (
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
                    {matchInfo.awayTeam.flag} Poland - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {polandPlayers.map((player) => (
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
                        Home of Philadelphia Eagles (NFL)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <p className="text-gray-600">
                      Lincoln Financial Field is located in South Philadelphia with excellent
                      transit access via SEPTA. Philadelphia International Airport is 15 minutes
                      away, with easy connections to the stadium complex.
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
                  Philadelphia Travel Guide for Fans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Philadelphia, America's birthplace, offers visitors a perfect blend of history,
                    culture, and modern entertainment. The City of Brotherly Love is known for its
                    passionate sports fans and welcoming atmosphere.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900">Historic Sites</h5>
                      <p className="text-sm text-blue-700">
                        Independence Hall, Liberty Bell, and founding fathers' landmarks
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h5 className="font-semibold text-orange-900">Food Scene</h5>
                      <p className="text-sm text-orange-700">
                        Famous Philly cheesesteaks, Reading Terminal Market, and diverse cuisine
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-green-900">Art & Culture</h5>
                      <p className="text-sm text-green-700">
                        Philadelphia Museum of Art, murals, and vibrant neighborhoods
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/travel/philadelphia-world-cup-travel-guide">
                      <Button variant="outline">
                        Read Full Philadelphia Travel Guide <ChevronRight className="h-4 w-4 ml-2" />
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
                  Switzerland vs Poland will be broadcast live across major networks worldwide. In the United States,
                  the match will be available on FOX Sports and Telemundo, with streaming options on Peacock
                  and Fubo TV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FOX Sports</Badge>
                  <Badge variant="outline">Telemundo</Badge>
                  <Badge variant="outline">Peacock</Badge>
                  <Badge variant="outline">SRF (Switzerland)</Badge>
                  <Badge variant="outline">TVP (Poland)</Badge>
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

            {/* Group F Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle>Group F Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/fixtures/group-f-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">All Group F Matches</p>
                    <p className="text-sm text-gray-500">View complete schedule</p>
                  </Link>
                  <Link href="/fixtures/spain-vs-netherlands-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">🇪🇸 Spain vs Netherlands 🇳🇱</p>
                    <p className="text-sm text-gray-500">Group F • NRG Stadium</p>
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
                  <Link href="/teams/switzerland-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Switzerland Team Profile
                  </Link>
                  <Link href="/teams/poland-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Poland Team Profile
                  </Link>
                  <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Lincoln Financial Field Guide
                  </Link>
                  <Link href="/travel/philadelphia-world-cup-travel-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Philadelphia Travel Guide
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
