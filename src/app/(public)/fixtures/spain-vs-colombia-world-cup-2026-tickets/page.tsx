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
  title: "Spain vs Colombia Tickets | World Cup 2026 Group H | Levi's Stadium San Francisco",
  description: "Buy Spain vs Colombia World Cup 2026 tickets at Levi's Stadium in San Francisco. Secure your seats for this Group H clash between La Roja and Los Cafeteros. Premium World Cup tickets available.",
  keywords: [
    "Spain vs Colombia tickets",
    "World Cup 2026 San Francisco tickets",
    "Levi's Stadium World Cup tickets",
    "Spain World Cup 2026",
    "Colombia World Cup 2026",
    "Group H World Cup tickets",
    "La Roja World Cup tickets",
    "Los Cafeteros World Cup tickets",
    "FIFA World Cup tickets Bay Area",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Spain vs Colombia | World Cup 2026 Group H Tickets",
    description: "Secure your tickets for Spain vs Colombia at Levi's Stadium in San Francisco. World Cup 2026 Group H fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Spain",
    flag: "🇪🇸",
    code: "ESP",
    nickname: "La Roja",
    fifaRanking: 8,
    group: "H",
  },
  awayTeam: {
    name: "Colombia",
    flag: "🇨🇴",
    code: "COL",
    nickname: "Los Cafeteros",
    fifaRanking: 12,
    group: "H",
  },
  date: "June 16, 2026",
  time: "4:00 PM PT",
  venue: "Levi's Stadium",
  city: "Santa Clara, California",
  group: "H",
  matchNumber: 18,
  round: "Group Stage",
  expectedAttendance: "68,500",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 225,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 365,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 325,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 305,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const spainPlayers = [
  { name: "Pedri", position: "Midfielder", club: "Barcelona", number: 8 },
  { name: "Gavi", position: "Midfielder", club: "Barcelona", number: 6 },
  { name: "Lamine Yamal", position: "Winger", club: "Barcelona", number: 19 },
  { name: "Rodri", position: "Midfielder", club: "Manchester City", number: 16 },
]

const colombiaPlayers = [
  { name: "Luis Díaz", position: "Winger", club: "Liverpool", number: 7 },
  { name: "James Rodríguez", position: "Midfielder", club: "São Paulo", number: 10 },
  { name: "Jhon Arias", position: "Winger", club: "Fluminense", number: 17 },
  { name: "Davinson Sánchez", position: "Defender", club: "Galatasaray", number: 6 },
]

const headToHead = {
  totalMatches: 10,
  spainWins: 5,
  draws: 3,
  colombiaWins: 2,
  lastMeeting: "Spain 0-1 Colombia (2024 Friendly)",
  notableMatch: "Spain 0-0 Colombia (2024 Wembley Friendly)",
}

export default function SpainVsColombiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 text-gray-900 py-16">
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
              Spain vs Colombia Tickets
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
            Buy Spain vs Colombia Tickets
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
                Spain vs Colombia Match Preview - World Cup 2026 Group H Spectacle
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 delivers a mouthwatering Group H encounter as Spain face Colombia at Levi's Stadium in the San Francisco Bay Area. This match brings together two of world football's most technically gifted nations—Spain's celebrated tiki-taka tradition meets Colombia's vibrant attacking style. Spain vs Colombia World Cup 2026 tickets offer fans the chance to witness a tactical masterclass between two teams committed to beautiful, possession-based football.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">A Clash of Football Philosophies</h3>
              <p className="leading-relaxed">
                Spain and Colombia share a philosophical approach to the game that prioritizes technique, creativity, and ball retention. Spain's tiki-taka style, which brought them World Cup glory in 2010 and three consecutive major tournament victories, has evolved under new leadership while maintaining its core principles. Colombia, drawing from their Caribbean passion and South American technical tradition, plays an exhilarating brand of football that captivated the world during their 2014 World Cup campaign. When these two football cultures collide, expect a beautiful chess match with the ball.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Levi's Stadium - San Francisco Bay Area World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                Levi's Stadium in Santa Clara brings Silicon Valley innovation to the World Cup stage. Home of the San Francisco 49ers, this state-of-the-art venue features one of the NFL's most advanced fan experience technologies and sustainable design elements including a green roof. The 68,500-seat capacity for FIFA events will be filled with the Bay Area's diverse Latin American communities, ensuring a vibrant atmosphere. The stadium's location provides easy access to San Francisco's world-famous attractions while offering proximity to tech industry innovation.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Spain Squad - La Roja World Cup 2026</h3>
              <p className="leading-relaxed">
                Spain enters the 2026 World Cup with perhaps their most exciting generation since the 2010 champions. The Barcelona core of Pedri, Gavi, and the phenomenal teenage sensation Lamine Yamal has revolutionized Spanish football with their fearless attacking play and technical excellence. Rodri, now established as one of world football's best midfielders at Manchester City, provides the defensive stability that allows Spain's creative talents to flourish. This Spanish squad combines the passing principles that defined their golden era with the direct attacking threat that modern football demands.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Colombia Squad - Los Cafeteros World Cup 2026</h3>
              <p className="leading-relaxed">
                Colombia arrives at the 2026 World Cup riding a wave of momentum and restored confidence in their national team. Luis Díaz has established himself as one of world football's most electric wingers at Liverpool, his pace, dribbling, and goal-scoring threat making him nearly unplayable on his day. James Rodríguez, the 2014 World Cup Golden Boot winner, brings experience and set-piece excellence that has terrorized opponents throughout his career. A new generation including Jhon Arias and others has injected fresh energy into Los Cafeteros, creating a squad capable of matching any opponent.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The midfield battle will be decisive, with Pedri and Rodri's control facing Colombia's pressing intensity and James's creative distribution. Lamine Yamal's explosive talent will test Colombia's full-backs, while Luis Díaz's pace and trickery pose similar problems for Spain's defense. Expect high possession percentages for both teams and fascinating tactical adjustments. Set pieces could prove crucial given James Rodríguez's legendary delivery and Spain's aerial vulnerabilities. This match will likely be decided by moments of individual brilliance breaking through organized defensive structures.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Spain vs Colombia Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Spain vs Colombia tickets at Levi's Stadium offer various options for fans of beautiful football. Category 1 premium tickets for prime midfield positions start around $450-600, offering optimal views to appreciate both teams' technical prowess. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $325. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $225. The Bay Area's tech-affluent population and large Latino communities ensure strong demand.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group H World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Spain vs Colombia result will significantly shape Group H standings. Both nations possess the quality to top the group, making this potentially a match to decide first place and subsequent knockout round pathways. A victory for either team would provide crucial momentum while a draw could leave the group wide open heading into the final matchday. With the expanded 48-team format creating new dynamics, early results carry even more significance for tournament positioning.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for San Francisco World Cup 2026</h3>
              <p className="leading-relaxed">
                San Francisco International Airport (SFO) and San Jose International Airport (SJC) both provide convenient access to Levi's Stadium. The Bay Area's extensive public transportation network, including BART and Caltrain, offers reliable options for reaching the venue. The region's world-famous attractions—from the Golden Gate Bridge to Napa Valley wine country to Silicon Valley tech campuses—make San Francisco an exceptional World Cup destination. The Mediterranean climate ensures pleasant match-day conditions in June.
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
              <CardHeader className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Spain Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {spainPlayers.map((player) => (
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

            <Card className="border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Colombia Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {colombiaPlayers.map((player) => (
                    <div key={player.name} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-sm text-gray-600">{player.position} • {player.club}</p>
                      </div>
                      <Badge variant="outline" className="bg-yellow-100">#{player.number}</Badge>
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
                Spain vs Colombia Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.spainWins}</p>
                  <p className="text-sm text-gray-600">Spain Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-600">{headToHead.colombiaWins}</p>
                  <p className="text-sm text-gray-600">Colombia Wins</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg col-span-2 md:col-span-1">
                  <p className="text-sm font-semibold text-blue-800">Last Meeting</p>
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
                      Capacity: 68,500 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      Location: Santa Clara, California
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Home of San Francisco 49ers (NFL)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-red-600" />
                      Silicon Valley's premier sports venue
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      San Jose Airport (SJC): 15 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      San Francisco Airport (SFO): 35 mins
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/venues/levis-stadium-world-cup-2026-tickets">
                        View Full Levi's Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h4 className="font-semibold text-red-800">Spain</h4>
                  <p className="text-sm text-gray-600">TVE, Telecinco</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Colombia</h4>
                  <p className="text-sm text-gray-600">Caracol TV, RCN</p>
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
                    <Link href="/teams/spain-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇪🇸 Spain World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/colombia-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇨🇴 Colombia World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      Levi's Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/san-francisco-world-cup-2026-guide" className="text-red-600 hover:underline flex items-center gap-1">
                      San Francisco Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group H Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-h-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      All Group H Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Spain vs Colombia at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch La Roja face Los Cafeteros in a battle of technical excellence
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
