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
  title: "Morocco vs Chile Tickets | World Cup 2026 Group I | Estadio Azteca",
  description: "Buy Morocco vs Chile World Cup 2026 tickets at Estadio Azteca, Mexico City. African heroes meet South American giants in this thrilling Group I encounter!",
  keywords: [
    "Morocco vs Chile tickets",
    "World Cup 2026 Mexico City tickets",
    "Morocco World Cup 2026 tickets",
    "Chile World Cup 2026 tickets",
    "Estadio Azteca World Cup",
    "FIFA World Cup 2026 Morocco",
    "Mexico City World Cup tickets",
    "Atlas Lions vs La Roja tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Morocco", flag: "🇲🇦", code: "MAR", nickname: "Atlas Lions", fifaRanking: 14, group: "I" },
  awayTeam: { name: "Chile", flag: "🇨🇱", code: "CHI", nickname: "La Roja", fifaRanking: 41, group: "I" },
  date: "June 23, 2026",
  time: "6:00 PM CDT",
  venue: "Estadio Azteca",
  city: "Mexico City, Mexico",
  group: "I",
  matchNumber: 41,
  round: "Group Stage",
  expectedAttendance: 87523,
}

const moroccoPlayers = [
  { name: "Achraf Hakimi", position: "Defender", club: "PSG", number: 2, star: true },
  { name: "Hakim Ziyech", position: "Midfielder", club: "Galatasaray", number: 7, star: true },
  { name: "Youssef En-Nesyri", position: "Forward", club: "Sevilla", number: 19 },
  { name: "Sofyan Amrabat", position: "Midfielder", club: "Manchester United", number: 4 },
]

const chilePlayers = [
  { name: "Alexis Sanchez", position: "Forward", club: "Inter Milan", number: 7, star: true },
  { name: "Claudio Bravo", position: "Goalkeeper", club: "Real Betis", number: 1, star: true },
  { name: "Ben Brereton Diaz", position: "Forward", club: "Sheffield United", number: 22 },
  { name: "Erick Pulgar", position: "Midfielder", club: "Flamengo", number: 13 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 175, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 315, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 275, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 255, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 1998, competition: "World Cup", result: "Morocco 0-0 Chile", location: "France" },
  { year: 2017, competition: "Friendly", result: "Morocco 1-1 Chile", location: "Morocco" },
]

export default function MoroccoVsChilePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-green-700 to-blue-800 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-i-world-cup-2026-tickets" className="hover:text-white">Group I</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Morocco vs Chile</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Globe className="h-4 w-4 mr-2" />
                INTERCONTINENTAL CLASH
              </Badge>
              <Badge className="bg-white text-green-800">GROUP I</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {matchInfo.homeTeam.flag} Morocco vs Chile {matchInfo.awayTeam.flag}
            </h1>
            <p className="text-xl text-white/90 mb-4">FIFA World Cup 2026 • Group I</p>
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
                  Match Preview: Morocco vs Chile World Cup 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="lead text-lg">
                  Morocco and Chile meet at the legendary Estadio Azteca in Mexico City for a fascinating Group I
                  encounter at the FIFA World Cup 2026. The Atlas Lions, heroes of the 2022 World Cup where they
                  became the first African nation to reach the semifinals, face a Chilean side looking to recapture
                  the magic of their Copa America-winning era. This intercontinental clash promises to deliver
                  tactical intrigue and passionate football in one of the sport's most iconic venues.
                </p>

                <h3>Morocco's Historic 2022 Journey</h3>
                <p>
                  Morocco's stunning run to the 2022 World Cup semifinals captured the imagination of football
                  fans worldwide. The Atlas Lions defeated Belgium, Spain, and Portugal on their way to making
                  history, becoming the first African and Arab nation to reach the final four of a World Cup.
                  Their defensive organization, tactical discipline, and never-say-die spirit made them one of
                  the tournament's most beloved teams. That achievement has elevated Morocco's status in world
                  football, and they arrive at World Cup 2026 among the favorites from outside the traditional
                  elite nations.
                </p>

                <h3>The Atlas Lions' Star Power</h3>
                <p>
                  Morocco's squad is packed with talent playing at Europe's biggest clubs. Achraf Hakimi has
                  established himself as arguably the world's best right-back at PSG, his marauding runs and
                  defensive solidity making him invaluable. Hakim Ziyech brings creative genius in the final
                  third, his left foot capable of unlocking any defense with a pass or shot. Sofyan Amrabat's
                  tireless work in midfield provides the platform for Morocco's attacking talents to flourish,
                  while Youssef En-Nesyri offers a constant goal threat up front.
                </p>

                <h3>Chile's Golden Generation Legacy</h3>
                <p>
                  Chile experienced unprecedented success during the 2010s, winning back-to-back Copa America
                  titles in 2015 and 2016 with a generation of exceptional players. The likes of Alexis Sanchez,
                  Arturo Vidal, and Claudio Bravo became legends of South American football, implementing an
                  aggressive, high-pressing style that won admirers globally. While that golden generation has
                  aged, several key figures remain, bringing invaluable experience to the squad. La Roja will
                  look to blend this experience with emerging talents in their quest to make an impact at
                  World Cup 2026.
                </p>

                <h3>Tactical Battle Analysis</h3>
                <p>
                  This match presents an intriguing tactical contest between Morocco's solid defensive structure
                  and Chile's traditionally aggressive approach. Morocco's success in Qatar was built on an
                  incredibly well-organized defense that conceded just one goal in their entire tournament run.
                  Chile, meanwhile, has historically employed a pressing style that aims to win the ball high
                  up the pitch and create chances through quick combinations. The key will be whether Chile
                  can sustain their pressing intensity against Morocco's patient buildup, or whether the
                  Atlas Lions can absorb pressure and strike on the counter.
                </p>

                <h3>Estadio Azteca: Football's Cathedral</h3>
                <p>
                  Estadio Azteca in Mexico City is one of the most storied venues in world football. Having
                  hosted two World Cup finals (1970 and 1986), including Diego Maradona's famous "Hand of God"
                  and "Goal of the Century" against England, the stadium carries an almost mystical atmosphere.
                  The 87,000-capacity venue sits at 2,200 meters above sea level, and the altitude presents a
                  unique challenge for teams not accustomed to playing in such conditions. The passionate
                  Mexican crowds will create an unforgettable atmosphere for this Group I clash.
                </p>

                <h3>African Football's Rise</h3>
                <p>
                  Morocco's 2022 World Cup success represented a watershed moment for African football. For
                  decades, African nations had threatened to break through the traditional glass ceiling at
                  World Cups, with Cameroon, Senegal, and Ghana all coming close in previous tournaments.
                  Morocco's achievement proved that African teams can compete with and defeat the world's best,
                  inspiring a continent and raising expectations for all African nations at major tournaments.
                  The Atlas Lions will carry those hopes again at World Cup 2026.
                </p>

                <h3>South American Revival</h3>
                <p>
                  Chile's qualification for World Cup 2026 represents an important achievement for La Roja,
                  who missed out on the 2018 and 2022 tournaments. The team has undergone significant transition,
                  with new players emerging to complement the remaining veterans from the golden era. Ben
                  Brereton Diaz has become a cult hero for the national team, his goals helping Chile return
                  to the world stage. The mix of experience and youth gives Chile reason for optimism as they
                  look to recapture past glories.
                </p>

                <h3>Key Player Matchups</h3>
                <p>
                  The individual duels across the pitch will be fascinating. Hakimi against Chile's left-sided
                  attackers will be a battle of speed and tactical awareness. Ziyech's creativity against
                  Chile's midfield will determine Morocco's ability to create chances. For Chile, Alexis
                  Sanchez's experience and movement against Morocco's disciplined defense could prove decisive.
                  The goalkeeping battle between Yassine Bounou and Claudio Bravo pits two experienced
                  campaigners who have excelled at the highest level.
                </p>

                <h3>Group I Dynamics</h3>
                <p>
                  The result of this Morocco vs Chile match will have significant implications for the Group I
                  standings. Morocco will be expected to progress given their recent pedigree, but Chile's
                  experience in big matches cannot be underestimated. Both teams will view this fixture as
                  crucial to their knockout round ambitions, ensuring a competitive and intense encounter from
                  the first whistle.
                </p>

                <h3>Ticket Information for Estadio Azteca</h3>
                <p>
                  Tickets for Morocco vs Chile at Estadio Azteca are among the most sought-after for World Cup
                  2026. The combination of a historic venue, two passionate fanbases, and the significance of
                  the fixture ensures high demand. The large Moroccan diaspora in Europe and North America,
                  combined with the strong Chilean community throughout the Americas, will create a vibrant
                  and colorful atmosphere. Early booking is essential for fans hoping to witness this
                  spectacular intercontinental clash.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {matchInfo.homeTeam.flag} Morocco - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {moroccoPlayers.map((player) => (
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
                    {matchInfo.awayTeam.flag} Chile - Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {chilePlayers.map((player) => (
                      <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-blue-700">#{player.number}</span>
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
                  These two nations have rarely met, with their 1998 World Cup draw being the only tournament encounter.
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
                        2-time World Cup Final Host
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <p className="text-gray-600">
                      Estadio Azteca is located in south Mexico City with metro access via
                      Line 2 (Tasqueña station). Mexico City International Airport is 30 minutes
                      away, with extensive public transit options throughout the city.
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
                  Mexico City Travel Guide for Fans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Mexico City is one of the world's largest and most vibrant metropolises, offering
                    visitors an incredible blend of ancient history, colonial architecture, and
                    modern culture. The altitude (2,240m) may affect some visitors initially.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h5 className="font-semibold text-orange-900">Historic Center</h5>
                      <p className="text-sm text-orange-700">
                        Zocalo, Templo Mayor, and stunning colonial architecture
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-green-900">Cuisine</h5>
                      <p className="text-sm text-green-700">
                        World-renowned tacos, mole, and street food culture
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900">Museums</h5>
                      <p className="text-sm text-blue-700">
                        National Museum of Anthropology, Frida Kahlo Museum
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/travel/mexico-city-world-cup-travel-guide">
                      <Button variant="outline">
                        Read Full Mexico City Travel Guide <ChevronRight className="h-4 w-4 ml-2" />
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
                  Morocco vs Chile will be broadcast live across major networks worldwide. In the United States,
                  the match will be available on FOX Sports and Telemundo, with streaming options on Peacock
                  and Fubo TV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FOX Sports</Badge>
                  <Badge variant="outline">Telemundo</Badge>
                  <Badge variant="outline">Peacock</Badge>
                  <Badge variant="outline">beIN Sports (MENA)</Badge>
                  <Badge variant="outline">TNT Sports (Chile)</Badge>
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

            {/* Group I Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle>Group I Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/fixtures/group-i-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">All Group I Matches</p>
                    <p className="text-sm text-gray-500">View complete schedule</p>
                  </Link>
                  <Link href="/fixtures/croatia-vs-tunisia-world-cup-2026-tickets" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <p className="font-medium">🇭🇷 Croatia vs Tunisia 🇹🇳</p>
                    <p className="text-sm text-gray-500">Group I • Mercedes-Benz Stadium</p>
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
                  <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Morocco Team Profile
                  </Link>
                  <Link href="/teams/chile-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Chile Team Profile
                  </Link>
                  <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Estadio Azteca Guide
                  </Link>
                  <Link href="/travel/mexico-city-world-cup-travel-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronRight className="h-4 w-4" /> Mexico City Travel Guide
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
