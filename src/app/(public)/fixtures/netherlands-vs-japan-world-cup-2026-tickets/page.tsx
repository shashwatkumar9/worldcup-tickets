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
  title: "Netherlands vs Japan Tickets | World Cup 2026 Group D | AT&T Stadium Dallas",
  description: "Buy Netherlands vs Japan World Cup 2026 tickets at AT&T Stadium in Dallas. Secure your seats for this Group D clash between the Oranje and Samurai Blue. Premium World Cup tickets available.",
  keywords: [
    "Netherlands vs Japan tickets",
    "World Cup 2026 Dallas tickets",
    "AT&T Stadium World Cup tickets",
    "Netherlands World Cup 2026",
    "Japan World Cup 2026",
    "Group D World Cup tickets",
    "Oranje vs Samurai Blue tickets",
    "FIFA World Cup tickets Dallas",
    "Netherlands Japan match tickets",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Netherlands vs Japan | World Cup 2026 Group D Tickets",
    description: "Secure your tickets for Netherlands vs Japan at AT&T Stadium in Dallas. World Cup 2026 Group D fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Netherlands",
    flag: "🇳🇱",
    code: "NED",
    nickname: "Oranje",
    fifaRanking: 7,
    group: "D",
  },
  awayTeam: {
    name: "Japan",
    flag: "🇯🇵",
    code: "JPN",
    nickname: "Samurai Blue",
    fifaRanking: 18,
    group: "D",
  },
  date: "June 14, 2026",
  time: "5:00 PM CT",
  venue: "AT&T Stadium",
  city: "Dallas, Texas",
  group: "D",
  matchNumber: 14,
  round: "Group Stage",
  expectedAttendance: "92,000",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 195,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 325,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 295,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 285,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const netherlandsPlayers = [
  { name: "Virgil van Dijk", position: "Defender", club: "Liverpool", number: 4 },
  { name: "Frenkie de Jong", position: "Midfielder", club: "Barcelona", number: 21 },
  { name: "Memphis Depay", position: "Forward", club: "Atlético Madrid", number: 10 },
  { name: "Cody Gakpo", position: "Forward", club: "Liverpool", number: 18 },
]

const japanPlayers = [
  { name: "Wataru Endo", position: "Midfielder", club: "Liverpool", number: 6 },
  { name: "Takefusa Kubo", position: "Forward", club: "Real Sociedad", number: 11 },
  { name: "Kaoru Mitoma", position: "Winger", club: "Brighton", number: 22 },
  { name: "Takehiro Tomiyasu", position: "Defender", club: "Arsenal", number: 2 },
]

const headToHead = {
  totalMatches: 8,
  netherlandsWins: 5,
  draws: 2,
  japanWins: 1,
  lastMeeting: "Netherlands 1-1 Japan (2022 Friendly)",
  notableMatch: "Netherlands 1-0 Japan (2013 Friendly)",
}

export default function NetherlandsVsJapanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-white to-red-600 text-gray-900 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-white/90 text-orange-700 mb-4">
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
              Netherlands vs Japan Tickets
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
            <Ticket className="inline-block mr-2 h-6 w-6 text-orange-600" />
            Buy Netherlands vs Japan Tickets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {affiliateLinks.map((link) => (
              <Card key={link.partner} className="hover:shadow-lg transition-shadow border-2 hover:border-orange-300">
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
                    <Button asChild size="sm" className="bg-orange-600 hover:bg-orange-700">
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
                <Trophy className="h-6 w-6 text-orange-600" />
                Netherlands vs Japan Match Preview - World Cup 2026 Group D Showdown
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings one of the most tactically intriguing matchups of the group stage as the Netherlands face Japan at AT&T Stadium in Dallas, Texas. This Group D encounter promises to deliver a fascinating clash of footballing philosophies, with the Dutch total football tradition meeting Japan's increasingly sophisticated pressing game. Netherlands vs Japan World Cup 2026 tickets are highly sought after by fans who appreciate technical excellence and strategic depth in international football.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Why Netherlands vs Japan is a Must-See World Cup 2026 Match</h3>
              <p className="leading-relaxed">
                This fixture represents a meeting of two nations at the forefront of footballing evolution. The Netherlands, with their rich heritage of producing some of the game's greatest tacticians and technical players, continue to develop world-class talent through their renowned academy system. Japan, meanwhile, has emerged as Asia's dominant football nation, with an unprecedented number of players now competing at the highest levels of European football. The Samurai Blue's impressive run to the knockout stages of the 2022 World Cup, including victories over Germany and Spain, demonstrated they are capable of beating anyone on their day.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">AT&T Stadium - Dallas World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                AT&T Stadium, home of the Dallas Cowboys, transforms into a world-class football venue for the 2026 World Cup. With a seating capacity of over 92,000 for FIFA events, this architectural marvel features the world's largest column-free interior and a retractable roof that ensures optimal playing conditions regardless of Texas weather. The stadium's state-of-the-art video board, spanning 160 feet wide, will provide fans with unprecedented viewing experiences. Dallas has embraced international football, hosting successful Gold Cup and international friendly matches, making it an ideal venue for this significant Group D clash.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The Netherlands Squad - Oranje World Cup 2026</h3>
              <p className="leading-relaxed">
                The Dutch national team arrives at the 2026 World Cup with renewed optimism and a squad blending experienced leaders with emerging talent. Captain Virgil van Dijk remains the defensive anchor, while Frenkie de Jong orchestrates proceedings from midfield with his exceptional ball-carrying ability and vision. The attack features multiple options including Memphis Depay's experience and goal-scoring threat, Cody Gakpo's dynamism on the wing, and a new generation of talent coming through the Eredivisie. Manager Ronald Koeman has instilled a flexible tactical approach that honors Dutch tradition while adapting to modern football demands.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Japan Squad - Samurai Blue World Cup 2026</h3>
              <p className="leading-relaxed">
                Japan enters the 2026 World Cup as Asia's leading nation and genuine dark horses for a deep tournament run. The squad features an unprecedented depth of European-based talent, with players competing at the highest levels of the Premier League, La Liga, Bundesliga, and Serie A. Wataru Endo brings Premier League experience and leadership in midfield, while Takefusa Kubo has blossomed into one of La Liga's most exciting attacking players. Kaoru Mitoma's explosive pace and dribbling ability terrify defenders, and Takehiro Tomiyasu provides defensive solidity. This Japanese generation combines technical excellence with physical attributes that have sometimes limited previous squads.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The midfield battle between Frenkie de Jong and Wataru Endo will be crucial in determining which team can control possession and tempo. Both players excel at progressing the ball through pressure, and their individual duel could decide the match. On the flanks, Japan's rapid wingers will test the Dutch defensive organization, while Cody Gakpo's intelligent movement could exploit spaces left by Japan's aggressive pressing. Set pieces will be significant, with van Dijk's aerial dominance meeting Japan's well-organized defensive structure. Expect a chess match between two coaches who prioritize ball retention and structured pressing.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Netherlands vs Japan Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                World Cup 2026 tickets for Netherlands vs Japan at AT&T Stadium are available across multiple categories. Category 1 premium tickets offer the best views from prime midfield positions and start around $500. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $350. Category 3 tickets offer solid views from the ends and corners for budget-conscious fans, starting around $195. Given the quality of both teams and the modern stadium experience, early purchase is recommended as this match is expected to sell out.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group D World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Netherlands vs Japan result could prove decisive in determining Group D standings. Both nations are expected to progress, but the match winner will likely secure the group's top position and a potentially easier round of 32 pathway. The Dutch will want to assert their credentials as legitimate contenders, while Japan aims to prove their 2022 performances were no fluke. This tactical battle between two nations committed to attractive football makes it one of the must-see group stage fixtures of the entire tournament.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Dallas World Cup 2026</h3>
              <p className="leading-relaxed">
                Dallas-Fort Worth International Airport (DFW) provides excellent connectivity for international fans traveling to see Netherlands vs Japan. The Dallas area offers extensive accommodation options, from downtown hotels to suburban options near Arlington where AT&T Stadium is located. The DART light rail and Texas Rangers Express provide public transport connections, while the stadium's massive parking facilities accommodate those driving. Downtown Dallas and the Fort Worth Stockyards provide plenty of entertainment and dining options for visitors exploring the metroplex.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Players */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Star className="inline-block mr-2 h-6 w-6 text-orange-600" />
            Key Players to Watch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Netherlands Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {netherlandsPlayers.map((player) => (
                    <div key={player.name} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-sm text-gray-600">{player.position} • {player.club}</p>
                      </div>
                      <Badge variant="outline" className="bg-orange-100">#{player.number}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Japan Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {japanPlayers.map((player) => (
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
          </div>
        </section>

        {/* Head to Head */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-orange-600" />
                Netherlands vs Japan Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-3xl font-bold text-orange-600">{headToHead.netherlandsWins}</p>
                  <p className="text-sm text-gray-600">Netherlands Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.japanWins}</p>
                  <p className="text-sm text-gray-600">Japan Wins</p>
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
                <MapPin className="h-6 w-6 text-orange-600" />
                Venue: {matchInfo.venue}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Stadium Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-orange-600" />
                      Capacity: 92,000+ for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      Location: Arlington, Texas (Dallas Metroplex)
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-orange-600" />
                      Home of Dallas Cowboys (NFL)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-orange-600" />
                      Features retractable roof and massive video board
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-orange-600" />
                      Dallas-Fort Worth Int'l Airport (DFW): 25 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-orange-600" />
                      Dallas Love Field (DAL): 30 mins
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-orange-300 text-orange-700 hover:bg-orange-50">
                      <Link href="/venues/att-stadium-world-cup-2026-tickets">
                        View Full AT&T Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                <Tv className="h-6 w-6 text-orange-600" />
                Broadcast Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">United States</h4>
                  <p className="text-sm text-gray-600">FOX, FS1, Telemundo</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Netherlands</h4>
                  <p className="text-sm text-gray-600">NPO, NOS</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Japan</h4>
                  <p className="text-sm text-gray-600">NHK, TV Asahi, Fuji TV</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Globe className="inline-block mr-2 h-6 w-6 text-orange-600" />
            Related World Cup 2026 Pages
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Team Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-orange-600 hover:underline flex items-center gap-1">
                      🇳🇱 Netherlands World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/japan-world-cup-2026-tickets" className="text-orange-600 hover:underline flex items-center gap-1">
                      🇯🇵 Japan World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-orange-600 hover:underline flex items-center gap-1">
                      AT&T Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/dallas-world-cup-2026-guide" className="text-orange-600 hover:underline flex items-center gap-1">
                      Dallas Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group D Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-orange-600 hover:underline flex items-center gap-1">
                      All Group D Matches <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/fixtures" className="text-orange-600 hover:underline flex items-center gap-1">
                      Complete Fixture List <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Netherlands vs Japan at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Secure your tickets now for this tactical battle between two of football's most innovative nations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {affiliateLinks.slice(0, 2).map((link) => (
              <Button key={link.partner} asChild size="lg" variant="secondary" className="text-orange-700">
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
