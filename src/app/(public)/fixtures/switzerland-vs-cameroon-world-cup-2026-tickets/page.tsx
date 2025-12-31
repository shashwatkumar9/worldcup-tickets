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
  title: "Switzerland vs Cameroon Tickets | World Cup 2026 Group C | Gillette Stadium Boston",
  description: "Buy Switzerland vs Cameroon World Cup 2026 tickets at Gillette Stadium in Boston. Secure your seats for this Group C 2022 World Cup rematch. Premium World Cup tickets available.",
  keywords: [
    "Switzerland vs Cameroon tickets",
    "World Cup 2026 Boston tickets",
    "Gillette Stadium World Cup tickets",
    "Switzerland World Cup 2026",
    "Cameroon World Cup 2026",
    "Group C World Cup tickets",
    "Nati World Cup tickets",
    "Indomitable Lions tickets",
    "FIFA World Cup tickets Boston",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Switzerland vs Cameroon | World Cup 2026 Group C Tickets",
    description: "Secure your tickets for Switzerland vs Cameroon at Gillette Stadium in Boston. World Cup 2026 Group C rematch.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Switzerland",
    flag: "🇨🇭",
    code: "SUI",
    nickname: "Nati",
    fifaRanking: 15,
    group: "C",
  },
  awayTeam: {
    name: "Cameroon",
    flag: "🇨🇲",
    code: "CMR",
    nickname: "Indomitable Lions",
    fifaRanking: 47,
    group: "C",
  },
  date: "June 19, 2026",
  time: "4:00 PM ET",
  venue: "Gillette Stadium",
  city: "Foxborough, Massachusetts",
  group: "C",
  matchNumber: 25,
  round: "Group Stage",
  expectedAttendance: "65,878",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 185,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 305,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 275,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 255,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const switzerlandPlayers = [
  { name: "Granit Xhaka", position: "Midfielder", club: "Bayer Leverkusen", number: 10 },
  { name: "Manuel Akanji", position: "Defender", club: "Manchester City", number: 5 },
  { name: "Breel Embolo", position: "Forward", club: "Monaco", number: 7 },
  { name: "Ruben Vargas", position: "Winger", club: "Augsburg", number: 15 },
]

const cameroonPlayers = [
  { name: "André-Frank Zambo Anguissa", position: "Midfielder", club: "Napoli", number: 8 },
  { name: "Eric Maxim Choupo-Moting", position: "Forward", club: "Bayern Munich", number: 13 },
  { name: "Karl Toko Ekambi", position: "Forward", club: "Lyon", number: 17 },
  { name: "Nicolas Nkoulou", position: "Defender", club: "Aris", number: 3 },
]

const headToHead = {
  totalMatches: 4,
  switzerlandWins: 2,
  draws: 1,
  cameroonWins: 1,
  lastMeeting: "Switzerland 1-0 Cameroon (2022 World Cup)",
  notableMatch: "Embolo's emotional winner vs birth nation",
}

export default function SwitzerlandVsCameroonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-white to-green-600 text-gray-900 py-16">
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
              Switzerland vs Cameroon Tickets
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
            Buy Switzerland vs Cameroon Tickets
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
                Switzerland vs Cameroon Match Preview - World Cup 2026 Group C
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings Switzerland and Cameroon together again at Gillette Stadium near Boston, a rematch of their memorable 2022 World Cup encounter that produced one of Qatar's most emotionally charged moments. This Group C fixture carries unique personal significance as Cameroon-born Swiss striker Breel Embolo faces his country of birth once more. Switzerland vs Cameroon World Cup 2026 tickets offer fans the chance to witness compelling football with a deeply human storyline.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The 2022 World Cup: Embolo's Emotional Winner</h3>
              <p className="leading-relaxed">
                Their 2022 World Cup meeting will be remembered for its emotional context. Breel Embolo, born in Yaoundé, Cameroon before moving to Switzerland as a child, scored the only goal against his birth nation. His muted celebration—refusing to celebrate against Cameroon—captured the complex emotions of players representing adopted nations against their homeland. The 1-0 Swiss victory was pivotal in their group stage progression, while Cameroon's campaign continued to struggle. This 2026 rematch adds another chapter to a story that transcends football results.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Gillette Stadium - Boston World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                Gillette Stadium in Foxborough provides excellent facilities for this Group C encounter. Home to the New England Patriots and New England Revolution, this 65,878-seat stadium has hosted major international soccer matches and concerts. The Boston metropolitan area's educated, diverse population and strong soccer culture ensure enthusiastic support. The stadium's location offers easy access from Boston while providing the infrastructure and atmosphere befitting World Cup football. New England's passionate sports fans will create an electric atmosphere for this fixture.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Switzerland Squad - Nati World Cup 2026</h3>
              <p className="leading-relaxed">
                Switzerland arrives at the 2026 World Cup as one of Europe's most consistent performers. Granit Xhaka, the heartbeat of Bayer Leverkusen's historic Bundesliga title-winning season, leads the midfield with his passing range and leadership. Manuel Akanji provides Premier League defensive quality from Manchester City, while Breel Embolo's physical presence and work rate make him invaluable in attack. Ruben Vargas offers pace and creativity from the wings. The Swiss have built a reputation for disciplined organization and the ability to frustrate higher-ranked opponents—qualities that have seen them reach consecutive knockout rounds.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cameroon Squad - Indomitable Lions World Cup 2026</h3>
              <p className="leading-relaxed">
                Cameroon enters the 2026 World Cup determined to restore their proud World Cup heritage. André-Frank Zambo Anguissa has established himself as one of Serie A's finest midfielders at Napoli, his ball-winning and progressive passing making him essential. Eric Maxim Choupo-Moting brings experience from Bayern Munich, while Karl Toko Ekambi provides goal-scoring threat from Lyon. The Indomitable Lions possess the physical attributes and technical ability to compete with any opponent, but need to translate their individual quality into consistent collective performances.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The midfield contest between Xhaka and Anguissa represents a clash of two elite central midfielders and will likely determine the match outcome. Embolo's movement against Cameroon's center-backs carries emotional weight while being tactically crucial. Switzerland's defensive organization faces Cameroon's athletic attackers, with aerial duels likely to be significant. Set pieces could prove decisive given both teams' physical presence. Expect Switzerland to control possession while Cameroon looks to utilize their pace and power on transitions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Switzerland vs Cameroon Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Switzerland vs Cameroon tickets at Gillette Stadium offer various options for fans. Category 1 premium tickets for prime midfield positions start around $375-475, offering optimal views of the tactical battle. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $275. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $185. The Boston area's educated sports market ensures strong demand from knowledgeable football fans.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group C World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Switzerland vs Cameroon result will significantly impact Group C standings. Switzerland enters as favorites based on ranking and recent World Cup performances, but Cameroon possesses the individual quality to cause an upset. A victory for either team would provide crucial momentum for knockout round qualification. The expanded 48-team format provides both nations realistic paths to advancement, making every group stage point valuable.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Boston World Cup 2026</h3>
              <p className="leading-relaxed">
                Boston Logan International Airport (BOS) provides excellent connectivity for international fans. The MBTA commuter rail offers service to Foxborough on event days, while significant parking is available at the stadium. Boston's rich American history, world-class universities, and vibrant food scene make it an exceptional World Cup destination. The Freedom Trail, Harvard, and renowned seafood restaurants provide plenty of activities beyond football. Late June weather in New England offers pleasant conditions for traveling fans.
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
              <CardHeader className="bg-gradient-to-r from-red-600 to-white text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Switzerland Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {switzerlandPlayers.map((player) => (
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
              <CardHeader className="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Cameroon Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {cameroonPlayers.map((player) => (
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
                Switzerland vs Cameroon Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.switzerlandWins}</p>
                  <p className="text-sm text-gray-600">Switzerland Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">{headToHead.cameroonWins}</p>
                  <p className="text-sm text-gray-600">Cameroon Wins</p>
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
                      Capacity: 65,878 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      Location: Foxborough, Massachusetts
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Home of New England Patriots (NFL)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-red-600" />
                      Host of multiple international soccer matches
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Boston Logan Airport (BOS): 40 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      MBTA Commuter Rail: Event day service
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/venues/gillette-stadium-world-cup-2026-tickets">
                        View Full Gillette Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h4 className="font-semibold text-red-800">Switzerland</h4>
                  <p className="text-sm text-gray-600">SRF, RTS, RSI</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Cameroon</h4>
                  <p className="text-sm text-gray-600">CRTV, Canal+ Afrique</p>
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
                    <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇨🇭 Switzerland World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/cameroon-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇨🇲 Cameroon World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      Gillette Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/boston-world-cup-2026-guide" className="text-red-600 hover:underline flex items-center gap-1">
                      Boston Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group C Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      All Group C Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-red-600 to-green-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Switzerland vs Cameroon at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch the emotional 2022 World Cup rematch in Boston
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
