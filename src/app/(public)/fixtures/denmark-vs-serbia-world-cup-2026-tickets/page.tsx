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
  title: "Denmark vs Serbia Tickets | World Cup 2026 Group L | Camping World Stadium",
  description: "Buy Denmark vs Serbia World Cup 2026 tickets at Camping World Stadium, Orlando. European powers clash in this exciting Group L encounter!",
  keywords: [
    "Denmark vs Serbia tickets",
    "World Cup 2026 Orlando tickets",
    "Denmark World Cup 2026 tickets",
    "Serbia World Cup 2026 tickets",
    "Camping World Stadium World Cup",
    "FIFA World Cup 2026 Denmark",
    "Orlando World Cup tickets",
    "Danish Dynamite vs Eagles tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Denmark", flag: "🇩🇰", code: "DEN", nickname: "Danish Dynamite", fifaRanking: 18, group: "L" },
  awayTeam: { name: "Serbia", flag: "🇷🇸", code: "SRB", nickname: "Eagles", fifaRanking: 25, group: "L" },
  date: "June 24, 2026",
  time: "3:00 PM ET",
  venue: "Camping World Stadium",
  city: "Orlando, Florida",
  group: "L",
  matchNumber: 45,
  round: "Group Stage",
  expectedAttendance: 65000,
}

const denmarkPlayers = [
  { name: "Christian Eriksen", position: "Midfielder", club: "Manchester United", number: 10, star: true },
  { name: "Rasmus Hojlund", position: "Forward", club: "Manchester United", number: 9, star: true },
  { name: "Pierre-Emile Hojbjerg", position: "Midfielder", club: "Tottenham", number: 5 },
  { name: "Kasper Schmeichel", position: "Goalkeeper", club: "Anderlecht", number: 1 },
]

const serbiaPlayers = [
  { name: "Dusan Vlahovic", position: "Forward", club: "Juventus", number: 9, star: true },
  { name: "Aleksandar Mitrovic", position: "Forward", club: "Al-Hilal", number: 7, star: true },
  { name: "Sergej Milinkovic-Savic", position: "Midfielder", club: "Al-Hilal", number: 20 },
  { name: "Dusan Tadic", position: "Forward", club: "Fenerbahce", number: 10 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 265, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 225, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 205, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2008, competition: "Friendly", result: "Denmark 0-3 Serbia", location: "Denmark" },
  { year: 2007, competition: "Friendly", result: "Serbia 3-3 Denmark", location: "Serbia" },
]

export default function DenmarkVsSerbiaPage() {
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
            <Link href="/fixtures/group-l-world-cup-2026-tickets" className="hover:text-white">Group L</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Denmark vs Serbia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Flame className="h-4 w-4 mr-2" />
                EUROPEAN CLASH
              </Badge>
              <Badge className="bg-white text-red-800">GROUP L</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {matchInfo.homeTeam.flag} Denmark vs Serbia {matchInfo.awayTeam.flag}
            </h1>
            <p className="text-xl text-white/90 mb-4">FIFA World Cup 2026 • Group L</p>
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
                  Match Preview: Denmark vs Serbia World Cup 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="lead text-lg">
                  Denmark and Serbia meet at Camping World Stadium in Orlando for a crucial Group L encounter
                  at the FIFA World Cup 2026. Both European nations have established themselves as consistent
                  performers on the continental and global stage, and this clash promises to be a tactically
                  fascinating battle between two well-organized sides with genuine World Cup aspirations.
                </p>

                <h3>Denmark's Tournament Pedigree</h3>
                <p>
                  Denmark has emerged as one of European football's most consistent performers in recent years.
                  Their remarkable run to the Euro 2020 semifinals, achieved in the most emotional circumstances
                  following Christian Eriksen's cardiac arrest, captured hearts worldwide and demonstrated the
                  team's incredible spirit and quality. Since then, the Danes have continued to impress,
                  qualifying for major tournaments with ease and competing effectively against the continent's
                  best teams. Their blend of technical quality, tactical discipline, and mental strength makes
                  them dangerous opponents for any side.
                </p>

                <h3>Christian Eriksen's Inspirational Return</h3>
                <p>
                  Christian Eriksen's return to international football after his cardiac arrest at Euro 2020
                  remains one of sport's most remarkable stories. The Manchester United playmaker has
                  rediscovered his best form, his vision, passing range, and set-piece delivery making him
                  the creative heartbeat of the Danish team. Eriksen's presence inspires his teammates and
                  provides Denmark with a genuine difference-maker capable of unlocking the tightest defenses.
                  His experience in big matches will be invaluable in World Cup knockout situations.
                </p>

                <h3>Serbia's Attacking Riches</h3>
                <p>
                  Serbia possesses one of the most potent attacking forces in European football. The
                  partnership of Dusan Vlahovic and Aleksandar Mitrovic provides the Eagles with devastating
                  goal-scoring options that few defenses can contain. Vlahovic's technical ability and
                  clinical finishing at Juventus marks him as one of Europe's elite strikers, while
                  Mitrovic's physicality and aerial prowess add a different dimension. Behind them,
                  Sergej Milinkovic-Savic and Dusan Tadic provide creativity and experience in abundance.
                </p>

                <h3>Rising Danish Stars</h3>
                <p>
                  Beyond Eriksen, Denmark boasts an exciting array of talent. Rasmus Hojlund has emerged
                  as one of the Premier League's most exciting young strikers at Manchester United, his
                  pace, movement, and finishing ability making him a constant threat. Pierre-Emile Hojbjerg
                  provides the engine in midfield, his tireless work rate and tactical intelligence
                  essential to Denmark's pressing game. Kasper Schmeichel continues the family tradition
                  of outstanding goalkeeping, his experience and shot-stopping ability crucial.
                </p>

                <h3>Tactical Battle Preview</h3>
                <p>
                  This match promises to be a fascinating tactical encounter between two sides with distinct
                  identities. Denmark typically employs a high-pressing, possession-based style that looks
                  to control games through midfield dominance and quick combinations. Serbia's approach
                  relies more on individual quality, using the creativity of Milinkovic-Savic and Tadic
                  to supply their prolific strikers. The key battle will be in midfield, where Denmark's
                  pressing will meet Serbia's technical quality. Whoever controls that area will likely
                  control the match.
                </p>

                <h3>Camping World Stadium: Florida's World Cup Hub</h3>
                <p>
                  Camping World Stadium in Orlando provides an excellent venue for this European clash.
                  The 65,000-capacity stadium has undergone significant renovations and offers modern
                  amenities for World Cup visitors. Orlando's position as one of America's top tourist
                  destinations ensures excellent infrastructure for traveling fans, with countless
                  entertainment options beyond the football. The Florida heat in June will test both
                  teams' fitness levels, adding another dimension to the tactical battle.
                </p>

                <h3>Scandinavian Football Excellence</h3>
                <p>
                  Denmark's consistent success reflects the excellence of Scandinavian football development.
                  The Danish system produces technically proficient, tactically intelligent players who
                  thrive in Europe's top leagues. The national team's unity and collective approach have
                  made them greater than the sum of their parts, regularly punching above their weight
                  against larger nations. Their 1992 European Championship triumph remains one of football's
                  greatest underdog stories, and that spirit continues to drive Danish football today.
                </p>

                <h3>Serbian Football Renaissance</h3>
                <p>
                  Serbia has experienced a football renaissance in recent years, with a new generation
                  of exceptional talents emerging to represent the nation. The production line of players
                  from Serbian academies continues to supply Europe's top leagues, and the national team
                  benefits from this depth of quality. Serbia's passionate fanbase creates incredible
                  atmospheres, and their traveling support at World Cup 2026 will add to the spectacle
                  in Orlando.
                </p>

                <h3>Group L Importance</h3>
                <p>
                  The result of this Denmark vs Serbia match will have significant implications for Group L
                  progression. Both teams will view this as a direct clash for knockout round qualification,
                  with the winner taking a massive step toward their goal. The loser faces an uphill battle
                  to progress, adding pressure and intensity to an already compelling fixture.
                </p>

                <h3>Ticket Information for Orlando</h3>
                <p>
                  Tickets for Denmark vs Serbia at Camping World Stadium are expected to be popular among
                  European football fans visiting Florida and the large Scandinavian community in the
                  United States. Orlando's status as a major tourist destination ensures additional
                  demand from visitors already in the area. Early booking is recommended to secure
                  the best available seats for this exciting Group L encounter.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.homeTeam.flag} Denmark - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {denmarkPlayers.map((player) => (
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
                    {matchInfo.awayTeam.flag} Serbia - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {serbiaPlayers.map((player) => (
                      <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-red-700">#{player.number}</span>
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
                <p className="text-sm text-gray-500 mt-4">
                  Note: These nations have rarely met in competitive fixtures, making this World Cup encounter particularly special.
                </p>
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
                        Home of Citrus Bowl & Pro Bowl
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <p className="text-gray-600">
                      Camping World Stadium is located in downtown Orlando with excellent access.
                      Orlando International Airport is 20 minutes away, with rideshare and
                      public transit options available for match days.
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
                  Orlando Travel Guide for Fans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Orlando is one of the world's premier tourist destinations, offering visitors
                    world-famous theme parks, entertainment, dining, and year-round sunshine in
                    the heart of Florida.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-purple-900">Theme Parks</h5>
                      <p className="text-sm text-purple-700">
                        Walt Disney World, Universal Studios, SeaWorld, and more
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h5 className="font-semibold text-orange-900">Dining & Entertainment</h5>
                      <p className="text-sm text-orange-700">
                        International Drive, Disney Springs, and countless restaurants
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900">Natural Beauty</h5>
                      <p className="text-sm text-blue-700">
                        Springs, nature reserves, and Kennedy Space Center nearby
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/travel/orlando-world-cup-travel-guide">
                      <Button variant="outline">
                        Read Full Orlando Travel Guide <ChevronRight className="h-4 w-4 ml-2" />
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
                  Denmark vs Serbia will be broadcast live across major networks worldwide. In the United States,
                  the match will be available on FOX Sports and Telemundo, with streaming options on Peacock
                  and Fubo TV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FOX Sports</Badge>
                  <Badge variant="outline">Telemundo</Badge>
                  <Badge variant="outline">Peacock</Badge>
                  <Badge variant="outline">TV2 (Denmark)</Badge>
                  <Badge variant="outline">RTS (Serbia)</Badge>
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

            {/* Group L Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle>Group L Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/fixtures/group-l-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">All Group L Matches</p>
                    <p className="text-sm text-gray-500">View complete schedule</p>
                  </Link>
                  <Link href="/fixtures/england-vs-denmark-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs Denmark 🇩🇰</p>
                    <p className="text-sm text-gray-500">Group B • Rose Bowl</p>
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
                  <Link href="/teams/denmark-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Denmark Team Profile
                  </Link>
                  <Link href="/teams/serbia-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Serbia Team Profile
                  </Link>
                  <Link href="/venues/camping-world-stadium-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Camping World Stadium Guide
                  </Link>
                  <Link href="/travel/orlando-world-cup-travel-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Orlando Travel Guide
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
