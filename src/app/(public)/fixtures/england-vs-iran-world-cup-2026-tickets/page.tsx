import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  Ticket,
  Star,
  Plane,
  Tv,
  Shield,
  TrendingUp,
  Globe,
  ArrowRight,
  ExternalLink
} from "lucide-react"

export const metadata: Metadata = {
  title: "England vs Iran Tickets | World Cup 2026 Group G | SoFi Stadium Los Angeles",
  description: "Buy England vs Iran World Cup 2026 tickets at SoFi Stadium in Los Angeles. Secure your seats for this Group G match between the Three Lions and Team Melli. Premium World Cup tickets available.",
  keywords: [
    "England vs Iran tickets",
    "World Cup 2026 Los Angeles tickets",
    "SoFi Stadium World Cup tickets",
    "England World Cup 2026",
    "Iran World Cup 2026",
    "Group G World Cup tickets",
    "Three Lions World Cup tickets",
    "Team Melli World Cup tickets",
    "FIFA World Cup tickets LA",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "England vs Iran | World Cup 2026 Group G Tickets",
    description: "Secure your tickets for England vs Iran at SoFi Stadium in Los Angeles. World Cup 2026 Group G fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    code: "ENG",
    nickname: "Three Lions",
    fifaRanking: 4,
    group: "G",
  },
  awayTeam: {
    name: "Iran",
    flag: "🇮🇷",
    code: "IRN",
    nickname: "Team Melli",
    fifaRanking: 22,
    group: "G",
  },
  date: "June 15, 2026",
  time: "7:00 PM PT",
  venue: "SoFi Stadium",
  city: "Inglewood, California",
  group: "G",
  matchNumber: 17,
  round: "Group Stage",
  expectedAttendance: "70,000",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 245,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 395,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 355,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 335,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const englandPlayers = [
  { name: "Harry Kane", position: "Forward", club: "Bayern Munich", number: 9 },
  { name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", number: 22 },
  { name: "Bukayo Saka", position: "Winger", club: "Arsenal", number: 7 },
  { name: "Declan Rice", position: "Midfielder", club: "Arsenal", number: 4 },
]

const iranPlayers = [
  { name: "Mehdi Taremi", position: "Forward", club: "Inter Milan", number: 9 },
  { name: "Sardar Azmoun", position: "Forward", club: "AS Roma", number: 20 },
  { name: "Alireza Jahanbakhsh", position: "Winger", club: "Feyenoord", number: 7 },
  { name: "Alireza Beiranvand", position: "Goalkeeper", club: "Persepolis", number: 1 },
]

const headToHead = {
  totalMatches: 3,
  englandWins: 2,
  draws: 0,
  iranWins: 1,
  lastMeeting: "England 6-2 Iran (2022 World Cup)",
  notableMatch: "England 6-2 Iran (Qatar 2022 Group Stage)",
}

export default function EnglandVsIranPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white via-red-600 to-green-700 text-gray-900 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-white/90 text-red-700 mb-4">
              {matchInfo.round} • Group {matchInfo.group} • Match {matchInfo.matchNumber}
            </Badge>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <span className="text-7xl mb-2 block">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/90 drop-shadow">{matchInfo.homeTeam.nickname}</p>
                <Badge variant="outline" className="mt-2 bg-white/80">FIFA #{matchInfo.homeTeam.fifaRanking}</Badge>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-white drop-shadow-lg">VS</span>
              </div>
              <div className="text-center">
                <span className="text-7xl mb-2 block">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/90 drop-shadow">{matchInfo.awayTeam.nickname}</p>
                <Badge variant="outline" className="mt-2 bg-white/80">FIFA #{matchInfo.awayTeam.fifaRanking}</Badge>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              England vs Iran Tickets
            </h1>
            <p className="text-xl text-white/90 drop-shadow">
              FIFA World Cup 2026 • {matchInfo.venue}, {matchInfo.city}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
              <Calendar className="h-5 w-5" />
              <span>{matchInfo.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span>{matchInfo.time}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
              <MapPin className="h-5 w-5" />
              <span>{matchInfo.venue}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
              <Users className="h-5 w-5" />
              <span>{matchInfo.expectedAttendance} Capacity</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Buy Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Ticket className="inline-block mr-2 h-6 w-6 text-red-600" />
            Buy England vs Iran Tickets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {affiliateLinks.map((link) => (
              <Card key={link.partner} className="hover:shadow-lg transition-shadow border-2 hover:border-red-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{link.logo}</span>
                    <Badge variant="secondary">{link.rating}</Badge>
                  </div>
                  <CardTitle className="text-lg">{link.partner}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      ${link.price_from}+
                    </span>
                    <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
                      <Link href={link.url}>
                        Buy Now <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Match Preview */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-red-600" />
                England vs Iran Match Preview - World Cup 2026 Group G Encounter
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings England and Iran together again at SoFi Stadium in Los Angeles, a rematch of their memorable 2022 World Cup encounter in Qatar. The Three Lions face Team Melli in a Group G fixture that carries significant implications for both nations' knockout round aspirations. England vs Iran World Cup 2026 tickets offer fans the chance to witness one of football's major nations against Asia's resilient representatives in one of America's most stunning stadiums.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The 2022 Qatar Rematch</h3>
              <p className="leading-relaxed">
                Their last World Cup meeting produced one of the tournament's most dramatic scorelines, with England romping to a 6-2 victory in their opening match. Jude Bellingham announced himself on the world stage with a brilliant header, while Bukayo Saka scored twice and Marcus Rashford added another. Iran, despite the heavy defeat, showed fighting spirit by scoring twice late in the match. Both teams have evolved significantly since that encounter, with Iran determined to prove that result was an aberration while England seeks another comprehensive start to their World Cup campaign.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">SoFi Stadium - Los Angeles World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                SoFi Stadium in Inglewood represents the pinnacle of modern stadium design. This $5 billion venue, home to both the Los Angeles Rams and Chargers, features a translucent roof that creates a unique indoor-outdoor experience and the largest LED video board in sports. The 70,000-seat capacity for FIFA events will be enhanced by the stadium's incredible atmosphere and acoustics. Los Angeles's large Persian and British expatriate communities ensure a passionate and diverse crowd for this Group G fixture.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">England Squad - Three Lions World Cup 2026</h3>
              <p className="leading-relaxed">
                England's quest to end 60 years of hurt continues with arguably their most talented squad in history. Jude Bellingham has established himself as one of world football's elite players at Real Madrid, combining tireless running with decisive goals and creative brilliance. Harry Kane remains the team's talisman, his clinical finishing and intelligent movement making him a constant goal threat. Bukayo Saka's development into a world-class winger provides balance and penetration, while Declan Rice anchors a midfield that has become increasingly dominant. Manager Gareth Southgate or his successor inherits a squad capable of winning the tournament.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Iran Squad - Team Melli World Cup 2026</h3>
              <p className="leading-relaxed">
                Iran returns to the World Cup stage with renewed ambition and a squad featuring some of Europe's most underrated talents. Mehdi Taremi has established himself as one of Serie A's most complete strikers at Inter Milan, combining aerial prowess with intelligent movement and link-up play. Sardar Azmoun brings pace and technical ability to the attack, while Alireza Jahanbakhsh provides experience and creativity from the wings. Team Melli's compact defensive organization and ability to compete physically with European opponents makes them difficult to break down when they perform to their potential.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                Bellingham's ability to find space and arrive late in the box will test Iran's defensive organization and discipline. The battle between England's dynamic wingers and Iran's full-backs could determine the match's outcome. In midfield, Rice's screening role will be crucial in preventing Iran's counter-attacks from developing. Set pieces will be significant given England's aerial threats and Iran's defensive resilience. Expect England to dominate possession while Iran looks to stay compact and strike on the counter through Taremi and Azmoun's pace and movement.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">England vs Iran Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                England vs Iran tickets at SoFi Stadium offer various options for fans. Category 1 premium tickets for prime midfield positions start around $500-650, offering the best views in this architectural marvel. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $350. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $245. The Los Angeles market's massive population and diverse fanbase ensure strong demand across all categories.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group G World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The England vs Iran result will significantly shape Group G dynamics. England enters as heavy favorites to top the group, but Iran's quality means an upset is always possible. A positive result for Team Melli would dramatically impact their knockout round hopes and potentially affect which path England takes through the tournament. The expanded 48-team format means finishing positions matter more than ever for determining round of 32 opponents.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Los Angeles World Cup 2026</h3>
              <p className="leading-relaxed">
                Los Angeles International Airport (LAX) serves as the gateway for international fans, with extensive global connections. The stadium is conveniently located near LAX, making arrival logistics straightforward. The Los Angeles Metro connects downtown LA to the stadium area via the new K Line. Southern California's endless entertainment options—from Hollywood to beaches to world-class dining—make LA an exceptional World Cup destination. The region's year-round pleasant weather adds to the match-day experience.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Players */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Star className="inline-block mr-2 h-6 w-6 text-red-600" />
            Key Players to Watch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} England Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {englandPlayers.map((player) => (
                    <div key={player.name} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-sm text-gray-600">{player.position} • {player.club}</p>
                      </div>
                      <Badge variant="outline" className="bg-red-100">#{player.number}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Iran Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {iranPlayers.map((player) => (
                    <div key={player.name} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-sm text-gray-600">{player.position} • {player.club}</p>
                      </div>
                      <Badge variant="outline" className="bg-green-100">#{player.number}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Head to Head */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-red-600" />
                England vs Iran Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.englandWins}</p>
                  <p className="text-sm text-gray-600">England Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">{headToHead.iranWins}</p>
                  <p className="text-sm text-gray-600">Iran Wins</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg col-span-2 md:col-span-1">
                  <p className="text-sm font-semibold text-yellow-800">Last Meeting</p>
                  <p className="text-sm text-gray-600">{headToHead.lastMeeting}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Venue Info */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-red-600" />
                Venue: {matchInfo.venue}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Stadium Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-red-600" />
                      Capacity: 70,000+ for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      Location: Inglewood, California
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Home of LA Rams & Chargers (NFL)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-red-600" />
                      $5 billion state-of-the-art venue
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Los Angeles Int'l Airport (LAX): 10 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      LA Metro K Line: Direct access
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/venues/sofi-stadium-world-cup-2026-tickets">
                        View Full SoFi Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Broadcast Info */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tv className="h-6 w-6 text-red-600" />
                Broadcast Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">United States</h4>
                  <p className="text-sm text-gray-600">FOX, FS1, Telemundo</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">England</h4>
                  <p className="text-sm text-gray-600">BBC, ITV</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Iran</h4>
                  <p className="text-sm text-gray-600">IRIB, beIN Sports MENA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Globe className="inline-block mr-2 h-6 w-6 text-red-600" />
            Related World Cup 2026 Pages
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Team Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🏴󠁧󠁢󠁥󠁮󠁧󠁿 England World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/iran-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇮🇷 Iran World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Venue & Travel</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      SoFi Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/los-angeles-world-cup-2026-guide" className="text-red-600 hover:underline flex items-center gap-1">
                      Los Angeles Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group G Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-g-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      All Group G Matches <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/fixtures" className="text-red-600 hover:underline flex items-center gap-1">
                      Complete Fixture List <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss England vs Iran at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch the Three Lions face Team Melli at the spectacular SoFi Stadium
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {affiliateLinks.slice(0, 2).map((link) => (
              <Button key={link.partner} asChild size="lg" variant="secondary" className="text-red-700">
                <Link href={link.url}>
                  {link.logo} Buy on {link.partner} from ${link.price_from}
                </Link>
              </Button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
