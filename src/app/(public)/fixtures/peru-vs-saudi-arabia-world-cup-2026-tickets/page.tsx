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
  title: "Peru vs Saudi Arabia Tickets | World Cup 2026 Group J | State Farm Stadium",
  description: "Buy Peru vs Saudi Arabia World Cup 2026 tickets at State Farm Stadium, Phoenix. South American passion meets Middle Eastern ambition in this exciting Group J clash!",
  keywords: [
    "Peru vs Saudi Arabia tickets",
    "World Cup 2026 Phoenix tickets",
    "Peru World Cup 2026 tickets",
    "Saudi Arabia World Cup 2026 tickets",
    "State Farm Stadium World Cup",
    "FIFA World Cup 2026 Peru",
    "Phoenix World Cup tickets",
    "La Blanquirroja vs Green Falcons tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Peru", flag: "🇵🇪", code: "PER", nickname: "La Blanquirroja", fifaRanking: 35, group: "J" },
  awayTeam: { name: "Saudi Arabia", flag: "🇸🇦", code: "KSA", nickname: "Green Falcons", fifaRanking: 53, group: "J" },
  date: "June 25, 2026",
  time: "5:00 PM MST",
  venue: "State Farm Stadium",
  city: "Phoenix, Arizona",
  group: "J",
  matchNumber: 46,
  round: "Group Stage",
  expectedAttendance: 63400,
}

const peruPlayers = [
  { name: "Gianluca Lapadula", position: "Forward", club: "Cagliari", number: 9, star: true },
  { name: "Christian Cueva", position: "Midfielder", club: "Cienciano", number: 10, star: true },
  { name: "Luis Advincula", position: "Defender", club: "Boca Juniors", number: 17 },
  { name: "Pedro Gallese", position: "Goalkeeper", club: "Orlando City", number: 1 },
]

const saudiPlayers = [
  { name: "Salem Al-Dawsari", position: "Forward", club: "Al-Hilal", number: 10, star: true },
  { name: "Firas Al-Buraikan", position: "Forward", club: "Al-Ahli", number: 11, star: true },
  { name: "Mohammed Kanno", position: "Midfielder", club: "Al-Hilal", number: 6 },
  { name: "Mohammed Al-Owais", position: "Goalkeeper", club: "Al-Hilal", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 125, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 215, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 185, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 165, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2007, competition: "Friendly", result: "Saudi Arabia 1-0 Peru", location: "Saudi Arabia" },
]

export default function PeruVsSaudiArabiaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-white to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-j-world-cup-2026-tickets" className="hover:text-white">Group J</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Peru vs Saudi Arabia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Globe className="h-4 w-4 mr-2" />
                INTERCONTINENTAL CLASH
              </Badge>
              <Badge className="bg-white text-green-800">GROUP J</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {matchInfo.homeTeam.flag} Peru vs Saudi Arabia {matchInfo.awayTeam.flag}
            </h1>
            <p className="text-xl text-white/90 mb-4">FIFA World Cup 2026 • Group J</p>
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
                  Match Preview: Peru vs Saudi Arabia World Cup 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="lead text-lg">
                  Peru and Saudi Arabia meet at State Farm Stadium in Phoenix for an intriguing Group J
                  encounter at the FIFA World Cup 2026. La Blanquirroja brings South American flair and
                  passionate support to this intercontinental clash, while the Green Falcons arrive with
                  momentum from their stunning victory over Argentina at the 2022 World Cup. This match
                  promises to be a fascinating battle between two nations looking to make their mark on
                  the global stage.
                </p>

                <h3>Saudi Arabia's 2022 World Cup Sensation</h3>
                <p>
                  Saudi Arabia's 2-1 victory over Argentina in the opening match of the 2022 World Cup
                  ranks among the greatest upsets in football history. Salem Al-Dawsari's stunning winner
                  sent shockwaves through the tournament and sparked celebrations across the Arab world.
                  That victory, achieved against the eventual champions, demonstrated that Saudi Arabia
                  has the quality and mentality to compete with the very best. The Green Falcons will
                  look to build on that legacy at World Cup 2026 and prove their 2022 heroics were no fluke.
                </p>

                <h3>Peru's World Cup Return</h3>
                <p>
                  Peru's qualification for World Cup 2026 marks their return to the global stage after
                  missing out on the 2022 tournament. La Blanquirroja have a proud World Cup history,
                  including memorable runs in 1970 and 1978, and their passionate fanbase is among the
                  most devoted in world football. The team combines experienced campaigners with emerging
                  talents, creating a balanced squad capable of competing against any opponent. Peruvian
                  fans are known for creating incredible atmospheres, and their presence in Phoenix will
                  transform the stadium into a sea of red and white.
                </p>

                <h3>Key Players for Peru</h3>
                <p>
                  Gianluca Lapadula leads the line for Peru with his tireless work rate and clinical
                  finishing. The Italian-born striker has become a fan favorite for his commitment to
                  the national team cause. Behind him, Christian Cueva provides the creative spark,
                  his vision and technical ability capable of unlocking the tightest defenses. Luis
                  Advincula offers experience and leadership at the back, having performed at the highest
                  levels of South American football with Boca Juniors. Pedro Gallese, plying his trade
                  in MLS, provides reliable shot-stopping and will be comfortable playing in the US.
                </p>

                <h3>Saudi Arabian Firepower</h3>
                <p>
                  Salem Al-Dawsari remains the focal point of Saudi Arabia's attack. The Al-Hilal star's
                  ability to produce moments of magic makes him a constant threat, as he demonstrated
                  with his unforgettable goal against Argentina. Firas Al-Buraikan has emerged as a
                  deadly partner, his pace and movement causing problems for defenders across Asia.
                  Mohammed Kanno provides the engine in midfield, his tireless running and tactical
                  awareness essential to Saudi Arabia's pressing game. The Saudi Pro League's recent
                  investment in world-class players has raised the profile of Saudi football, and the
                  national team benefits from this increased quality and competition.
                </p>

                <h3>Tactical Preview</h3>
                <p>
                  This match presents an interesting tactical contrast. Peru typically employs a patient,
                  possession-based approach, building attacks through midfield and looking for moments
                  of individual brilliance to create chances. Saudi Arabia's success has been built on
                  high-intensity pressing and quick transitions, as demonstrated in their famous victory
                  over Argentina. The key for Peru will be maintaining composure under Saudi pressure,
                  while the Green Falcons will need to sustain their energy levels in the Phoenix heat.
                  Set pieces could prove decisive, with both teams capable of scoring from dead ball
                  situations.
                </p>

                <h3>State Farm Stadium: Desert Football</h3>
                <p>
                  State Farm Stadium in Phoenix offers a unique World Cup experience. The retractable
                  roof stadium provides relief from Arizona's intense summer heat, while the state-of-the-art
                  facilities ensure optimal conditions for players and fans alike. The venue's 63,400
                  capacity creates an intimate atmosphere, with excellent sightlines from every seat.
                  Phoenix's diverse population and growing soccer community will embrace the World Cup,
                  creating a festive environment throughout the tournament.
                </p>

                <h3>CONMEBOL Qualifying Excellence</h3>
                <p>
                  Peru's journey through CONMEBOL qualifying is a testament to their quality and
                  resilience. Competing against powerhouses like Brazil, Argentina, Colombia, and
                  Uruguay requires exceptional performances over the two-year campaign. Every point
                  is hard-earned in South American qualifying, and teams that emerge have proven
                  themselves against world-class opposition. This experience prepares Peru well for
                  the challenges of the World Cup group stage.
                </p>

                <h3>Asian Football's Growth</h3>
                <p>
                  Saudi Arabia's presence at World Cup 2026 reflects the growth of Asian football in
                  recent decades. The investment in domestic infrastructure, youth development, and
                  the Saudi Pro League has created a pathway for talented players to develop and compete
                  at the highest level. Saudi Arabia's consistent World Cup qualification demonstrates
                  their status as one of Asia's leading football nations, and their victory over
                  Argentina proved they can compete with anyone on their day.
                </p>

                <h3>Group J Importance</h3>
                <p>
                  The result of this Peru vs Saudi Arabia match will have significant implications for
                  Group J progression. Both teams will view this as a crucial opportunity to collect
                  three points against a direct rival. With the expanded 48-team format providing
                  additional knockout round berths, the margins are slim and every result matters.
                  Neither team will want to fall behind early in the group, adding intensity to this
                  already compelling fixture.
                </p>

                <h3>Ticket Information for Phoenix</h3>
                <p>
                  Tickets for Peru vs Saudi Arabia at State Farm Stadium are expected to be popular
                  among both fanbases and neutral supporters looking for an entertaining Group J
                  encounter. The large Latino community in Arizona, combined with interest from
                  across the Southwest, ensures strong local demand. The indoor comfort of State
                  Farm Stadium makes it an attractive venue for summer football, and early booking
                  is recommended to secure the best available seats.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.homeTeam.flag} Peru - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {peruPlayers.map((player) => (
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
                    {matchInfo.awayTeam.flag} Saudi Arabia - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {saudiPlayers.map((player) => (
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
                <p className="text-sm text-gray-500 mt-4">
                  These two nations have rarely faced each other, making this World Cup encounter particularly intriguing.
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
                        Home of Arizona Cardinals (NFL)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <p className="text-gray-600">
                      State Farm Stadium is located in Glendale with ample parking available.
                      Phoenix Sky Harbor International Airport is 25 minutes away, with
                      rideshare and shuttle services available for match days.
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
                  Phoenix Travel Guide for Fans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Phoenix offers visitors a unique desert experience with world-class resorts,
                    stunning natural landscapes, and vibrant cultural attractions. The Valley of
                    the Sun provides ideal weather for exploring and entertainment.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h5 className="font-semibold text-orange-900">Desert Beauty</h5>
                      <p className="text-sm text-orange-700">
                        Camelback Mountain, Desert Botanical Garden, and hiking trails
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900">Golf Paradise</h5>
                      <p className="text-sm text-blue-700">
                        World-renowned golf courses and resort experiences
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h5 className="font-semibold text-red-900">Old Town Scottsdale</h5>
                      <p className="text-sm text-red-700">
                        Art galleries, boutiques, and southwestern cuisine
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/travel/phoenix-world-cup-travel-guide">
                      <Button variant="outline">
                        Read Full Phoenix Travel Guide <ChevronRight className="h-4 w-4 ml-2" />
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
                  Peru vs Saudi Arabia will be broadcast live across major networks worldwide. In the United States,
                  the match will be available on FOX Sports and Telemundo, with streaming options on Peacock
                  and Fubo TV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FOX Sports</Badge>
                  <Badge variant="outline">Telemundo</Badge>
                  <Badge variant="outline">Peacock</Badge>
                  <Badge variant="outline">beIN Sports (MENA)</Badge>
                  <Badge variant="outline">Movistar (Peru)</Badge>
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

            {/* Group J Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle>Group J Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/fixtures/group-j-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">All Group J Matches</p>
                    <p className="text-sm text-gray-500">View complete schedule</p>
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
                  <Link href="/teams/peru-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Peru Team Profile
                  </Link>
                  <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Saudi Arabia Team Profile
                  </Link>
                  <Link href="/venues/state-farm-stadium-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> State Farm Stadium Guide
                  </Link>
                  <Link href="/travel/phoenix-world-cup-travel-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Phoenix Travel Guide
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
