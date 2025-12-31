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
  title: "Ecuador vs Qatar Tickets | World Cup 2026 Group G | Lumen Field",
  description: "Buy Ecuador vs Qatar World Cup 2026 tickets at Lumen Field, Seattle. South American flair meets Middle Eastern ambition in this exciting Group G clash!",
  keywords: [
    "Ecuador vs Qatar tickets",
    "World Cup 2026 Seattle tickets",
    "Ecuador World Cup 2026 tickets",
    "Qatar World Cup 2026 tickets",
    "Lumen Field World Cup",
    "FIFA World Cup 2026 Ecuador",
    "Seattle World Cup tickets",
    "La Tri vs Maroons tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Ecuador", flag: "🇪🇨", code: "ECU", nickname: "La Tri", fifaRanking: 31, group: "G" },
  awayTeam: { name: "Qatar", flag: "🇶🇦", code: "QAT", nickname: "Maroons", fifaRanking: 48, group: "G" },
  date: "June 22, 2026",
  time: "4:00 PM PT",
  venue: "Lumen Field",
  city: "Seattle, Washington",
  group: "G",
  matchNumber: 39,
  round: "Group Stage",
  expectedAttendance: 69000,
}

const ecuadorPlayers = [
  { name: "Moises Caicedo", position: "Midfielder", club: "Chelsea", number: 23, star: true },
  { name: "Enner Valencia", position: "Forward", club: "Internacional", number: 13, star: true },
  { name: "Pervis Estupinan", position: "Defender", club: "Brighton", number: 7 },
  { name: "Piero Hincapie", position: "Defender", club: "Bayer Leverkusen", number: 3 },
]

const qatarPlayers = [
  { name: "Akram Afif", position: "Forward", club: "Al-Sadd", number: 11, star: true },
  { name: "Almoez Ali", position: "Forward", club: "Al-Duhail", number: 19, star: true },
  { name: "Hassan Al-Haydos", position: "Midfielder", club: "Al-Sadd", number: 10 },
  { name: "Pedro Miguel", position: "Defender", club: "Al-Sadd", number: 2 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 135, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 245, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 205, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 185, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Ecuador 2-0 Qatar", location: "Qatar" },
]

export default function EcuadorVsQatarPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 via-blue-700 to-maroon-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-g-world-cup-2026-tickets" className="hover:text-white">Group G</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Ecuador vs Qatar</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Globe className="h-4 w-4 mr-2" />
                2022 REMATCH
              </Badge>
              <Badge className="bg-white text-blue-800">GROUP G</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {matchInfo.homeTeam.flag} Ecuador vs Qatar {matchInfo.awayTeam.flag}
            </h1>
            <p className="text-xl text-white/90 mb-4">FIFA World Cup 2026 • Group G</p>
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
                  Match Preview: Ecuador vs Qatar World Cup 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="lead text-lg">
                  Ecuador and Qatar meet again at the FIFA World Cup 2026 in Seattle, four years after their
                  memorable encounter in the opening match of the 2022 World Cup. La Tri dominated that fixture
                  with a convincing 2-0 victory, and they'll be looking to repeat that success against the
                  former tournament hosts in this crucial Group G encounter at Lumen Field.
                </p>

                <h3>The 2022 Opening Match Legacy</h3>
                <p>
                  The last meeting between these two nations was nothing short of historic - it was the opening
                  match of the 2022 FIFA World Cup in Qatar. Enner Valencia was the hero for Ecuador, scoring
                  twice to give La Tri a comfortable victory and become the first player to score in the
                  tournament. That match set the tone for Qatar's difficult home World Cup, while Ecuador
                  announced themselves as a team to watch. Four years later, the roles have reversed as
                  Qatar now faces the challenge of competing away from home.
                </p>

                <h3>Ecuador's Rising Talent</h3>
                <p>
                  Ecuador has experienced a remarkable evolution in recent years, with a new generation of
                  talented players making their mark in European football. Moises Caicedo has established
                  himself as one of the world's premier midfielders at Chelsea, his ability to break up
                  play and drive forward making him invaluable to both club and country. Pervis Estupinan
                  has become a mainstay at Brighton, while Piero Hincapie has been instrumental in Bayer
                  Leverkusen's success. This influx of European experience has elevated Ecuador's standing
                  in world football significantly.
                </p>

                <h3>Enner Valencia: Ecuador's Captain Fantastic</h3>
                <p>
                  At the heart of Ecuador's success remains their talismanic captain, Enner Valencia. The
                  experienced striker has been the face of Ecuadorian football for over a decade, and his
                  goals have been crucial in qualifying campaigns and major tournaments alike. Valencia's
                  record against Qatar is impeccable, having scored both goals in their previous World Cup
                  meeting. His leadership and experience will be vital as Ecuador looks to navigate through
                  a competitive Group G and reach the knockout stages.
                </p>

                <h3>Qatar's World Cup Journey Continues</h3>
                <p>
                  After hosting the 2022 World Cup, Qatar faces a different challenge at World Cup 2026 -
                  competing away from home. The Maroons have worked hard to develop their football program,
                  winning two consecutive Asian Cup titles and investing heavily in youth development.
                  Akram Afif remains their most dangerous attacking threat, his skill and creativity making
                  him capable of changing games single-handedly. Almoez Ali provides the goal-scoring threat,
                  having proven himself as one of Asia's most prolific strikers.
                </p>

                <h3>Tactical Matchup Analysis</h3>
                <p>
                  This match presents an interesting tactical battle between Ecuador's physical, counter-attacking
                  style and Qatar's possession-based approach. Ecuador's midfield, anchored by Caicedo, excels
                  at winning the ball back and launching rapid attacks, while their set-piece prowess makes them
                  dangerous at every dead ball situation. Qatar will need to be patient and precise in their
                  passing, looking for opportunities to exploit spaces behind Ecuador's aggressive defensive line.
                  The key for the Maroons will be nullifying Ecuador's aerial threat while finding ways to
                  create chances through quick combinations in the final third.
                </p>

                <h3>Lumen Field: Seattle's Football Fortress</h3>
                <p>
                  Lumen Field in Seattle provides a spectacular setting for this Group G clash. Known primarily
                  as home to the Seattle Seahawks and Seattle Sounders, the stadium is renowned for its
                  incredibly loud atmosphere, with the crowd noise regularly reaching record-breaking levels.
                  The 69,000-capacity venue offers excellent sightlines from every seat, and the Pacific Northwest
                  weather in June typically provides ideal conditions for football. Seattle's diverse population
                  and passionate soccer community ensure a vibrant atmosphere for World Cup matches.
                </p>

                <h3>South American Football Excellence</h3>
                <p>
                  Ecuador's qualification for consecutive World Cups represents a significant achievement for
                  the nation. Competing in the notoriously difficult CONMEBOL qualifiers against powerhouses
                  like Brazil, Argentina, and Colombia requires exceptional quality and resilience. La Tri has
                  proven they belong among South America's elite, with their young, talented squad offering
                  hope for sustained success. The passionate Ecuadorian support in the United States will
                  create a home-away-from-home atmosphere in Seattle.
                </p>

                <h3>Qatar's Asian Cup Success</h3>
                <p>
                  While Qatar struggled at their home World Cup, they have dominated Asian football in recent
                  years. Back-to-back Asian Cup victories in 2019 and 2023 demonstrate their quality within
                  their confederation and the effectiveness of their long-term development strategy. The
                  challenge at World Cup 2026 is translating that regional success to the global stage,
                  where the competition is significantly more intense. The experience of hosting a World Cup,
                  combined with their Asian Cup pedigree, should help Qatar approach this tournament with
                  confidence despite their underdog status.
                </p>

                <h3>Group G Dynamics</h3>
                <p>
                  The result of this Ecuador vs Qatar match could have significant implications for the
                  Group G standings. With the expanded 48-team format providing more opportunities for
                  progression, every point matters in the race to qualify for the knockout rounds. Both
                  teams will view this fixture as a must-win opportunity to establish themselves in the
                  group, making for an intense and competitive encounter from the opening whistle.
                </p>

                <h3>Ticket Information and Availability</h3>
                <p>
                  Tickets for Ecuador vs Qatar at Lumen Field are in high demand, particularly among the
                  large South American diaspora in the Pacific Northwest. The Ecuadorian community in
                  Seattle and across the western United States is expected to turn out in force, creating
                  a colorful and passionate atmosphere. Early booking is recommended to secure the best
                  available seats for this exciting Group G encounter.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.homeTeam.flag} Ecuador - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {ecuadorPlayers.map((player) => (
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
                    {matchInfo.awayTeam.flag} Qatar - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {qatarPlayers.map((player) => (
                      <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-red-800">#{player.number}</span>
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
                  Note: Ecuador and Qatar have only met once in official competition - the opening match of the 2022 World Cup.
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
                        Home of Seattle Sounders & Seahawks
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <p className="text-gray-600">
                      Lumen Field is located in downtown Seattle with excellent public transit access.
                      Seattle-Tacoma International Airport is 20 minutes away, with light rail
                      connecting directly to the stadium district.
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
                  Seattle Travel Guide for Fans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Seattle offers visitors a unique blend of natural beauty, innovative culture, and
                    world-class amenities. The Emerald City is surrounded by mountains and water,
                    providing stunning scenery alongside urban excitement.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-green-900">Coffee Culture</h5>
                      <p className="text-sm text-green-700">
                        Birthplace of Starbucks with countless artisan coffee shops
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900">Pike Place Market</h5>
                      <p className="text-sm text-blue-700">
                        Iconic public market with fresh seafood and local crafts
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-purple-900">Space Needle</h5>
                      <p className="text-sm text-purple-700">
                        Panoramic views of the city, mountains, and Puget Sound
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/travel/seattle-world-cup-travel-guide">
                      <Button variant="outline">
                        Read Full Seattle Travel Guide <ChevronRight className="h-4 w-4 ml-2" />
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
                  Ecuador vs Qatar will be broadcast live across major networks worldwide. In the United States,
                  the match will be available on FOX Sports and Telemundo, with streaming options on Peacock
                  and Fubo TV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FOX Sports</Badge>
                  <Badge variant="outline">Telemundo</Badge>
                  <Badge variant="outline">Peacock</Badge>
                  <Badge variant="outline">beIN Sports (MENA)</Badge>
                  <Badge variant="outline">DirecTV (Latin America)</Badge>
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

            {/* Group G Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle>Group G Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/fixtures/group-g-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">All Group G Matches</p>
                    <p className="text-sm text-gray-500">View complete schedule</p>
                  </Link>
                  <Link href="/fixtures/belgium-vs-canada-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">🇧🇪 Belgium vs Canada 🇨🇦</p>
                    <p className="text-sm text-gray-500">Group G • BMO Field</p>
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
                  <Link href="/teams/ecuador-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Ecuador Team Profile
                  </Link>
                  <Link href="/teams/qatar-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Qatar Team Profile
                  </Link>
                  <Link href="/venues/lumen-field-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Lumen Field Guide
                  </Link>
                  <Link href="/travel/seattle-world-cup-travel-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Seattle Travel Guide
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
