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
  title: "Poland vs Senegal Tickets | World Cup 2026 Group B | Estadio Akron Guadalajara",
  description: "Buy Poland vs Senegal World Cup 2026 tickets at Estadio Akron in Guadalajara. Secure your seats for this Group B 2018 World Cup rematch featuring Robert Lewandowski. Premium World Cup tickets available.",
  keywords: [
    "Poland vs Senegal tickets",
    "World Cup 2026 Guadalajara tickets",
    "Estadio Akron World Cup tickets",
    "Poland World Cup 2026",
    "Senegal World Cup 2026",
    "Group B World Cup tickets",
    "Lewandowski World Cup tickets",
    "Lions of Teranga tickets",
    "FIFA World Cup tickets Mexico",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Poland vs Senegal | World Cup 2026 Group B Tickets",
    description: "Secure your tickets for the 2018 rematch between Poland and Senegal at Estadio Akron in Guadalajara. World Cup 2026 Group B fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Poland",
    flag: "🇵🇱",
    code: "POL",
    nickname: "The Eagles",
    fifaRanking: 26,
    group: "B",
  },
  awayTeam: {
    name: "Senegal",
    flag: "🇸🇳",
    code: "SEN",
    nickname: "Lions of Teranga",
    fifaRanking: 17,
    group: "B",
  },
  date: "June 19, 2026",
  time: "1:00 PM CT",
  venue: "Estadio Akron",
  city: "Guadalajara, Mexico",
  group: "B",
  matchNumber: 24,
  round: "Group Stage",
  expectedAttendance: "49,850",
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

const polandPlayers = [
  { name: "Robert Lewandowski", position: "Forward", club: "Barcelona", number: 9 },
  { name: "Piotr Zieliński", position: "Midfielder", club: "Inter Milan", number: 20 },
  { name: "Nicola Zalewski", position: "Winger", club: "AS Roma", number: 15 },
  { name: "Jan Bednarek", position: "Defender", club: "Southampton", number: 5 },
]

const senegalPlayers = [
  { name: "Sadio Mané", position: "Forward", club: "Al-Nassr", number: 10 },
  { name: "Edouard Mendy", position: "Goalkeeper", club: "Al-Ahli", number: 1 },
  { name: "Ismaïla Sarr", position: "Winger", club: "Marseille", number: 18 },
  { name: "Kalidou Koulibaly", position: "Defender", club: "Al-Hilal", number: 3 },
]

const headToHead = {
  totalMatches: 1,
  polandWins: 0,
  draws: 0,
  senegalWins: 1,
  lastMeeting: "Poland 1-2 Senegal (2018 World Cup)",
  notableMatch: "Poland 1-2 Senegal (Russia 2018 Group H)",
}

export default function PolandVsSenegalPage() {
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
              Poland vs Senegal Tickets
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
            Buy Poland vs Senegal Tickets
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
                Poland vs Senegal Match Preview - World Cup 2026 Rematch
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings Poland and Senegal together for a highly anticipated rematch at Estadio Akron in Guadalajara. This Group B encounter revisits their 2018 World Cup meeting where Senegal emerged victorious 2-1 in one of that tournament's memorable upsets. Poland vs Senegal World Cup 2026 tickets offer fans the chance to witness Robert Lewandowski seek revenge against the reigning African champions in Mexico's second-largest city.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The 2018 World Cup Context</h3>
              <p className="leading-relaxed">
                Poland and Senegal met in the group stage of the Russia 2018 World Cup, where the Lions of Teranga produced a stunning 2-1 victory. Goals from Mbaye Niang (assisted by a bizarre own goal) and Sadio Mané's clinical finish secured Senegal's first World Cup victory since defeating France in 2002. The defeat proved catastrophic for Poland, contributing to their group stage elimination despite being among the tournament's higher-ranked teams. Robert Lewandowski was held goalless throughout that tournament, a failure Poland will be determined to avoid repeating.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Estadio Akron - Guadalajara World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                Estadio Akron, also known as Estadio Chivas, provides an authentic Mexican football atmosphere for this Group B clash. Home to one of Mexico's most popular clubs, Chivas de Guadalajara, this modern 49,850-seat stadium features excellent sightlines and passionate fan culture. Guadalajara, Mexico's second-largest metropolitan area, offers rich cultural heritage, excellent cuisine, and the home of tequila in nearby Jalisco. The stadium's location and Mexico's football-mad population ensure an incredible atmosphere for both European and African supporters.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Poland Squad - The Eagles World Cup 2026</h3>
              <p className="leading-relaxed">
                Poland arrives at the 2026 World Cup still built around the legendary Robert Lewandowski. At 37, the Barcelona striker continues to score prolifically in La Liga, and this could represent his final opportunity to make a World Cup impact. The supporting cast has improved significantly, with Piotr Zieliński providing creative quality from Inter Milan and Nicola Zalewski offering pace and directness from the wing. Jan Bednarek provides defensive experience. Poland's challenge remains converting their domestic league dominance and Lewandowski's individual brilliance into World Cup success.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Senegal Squad - Lions of Teranga World Cup 2026</h3>
              <p className="leading-relaxed">
                Senegal enters the 2026 World Cup as African champions and one of the continent's strongest teams in decades. Sadio Mané, despite moving to the Saudi Pro League, remains the squad's inspirational leader and most dangerous attacker. Edouard Mendy provides world-class goalkeeping following his Champions League heroics with Chelsea. Ismaïla Sarr's pace creates constant problems for defenders, while Kalidou Koulibaly's defensive command anchors the backline. This Senegalese generation has proven capable of defeating anyone, with their 2022 AFCON triumph cementing their status as Africa's dominant force.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The individual battle between Lewandowski and Koulibaly promises to be compelling—one of world football's elite strikers against one of its finest center-backs. Zieliński's creativity faces Senegal's pressing intensity and midfield athleticism. Mané's pace and movement will test Poland's defensive organization, while Mendy's shot-stopping provides insurance against Lewandowski's renowned finishing. Set pieces will be significant given both teams' aerial threats. Expect an intense, physical encounter where individual quality and tactical discipline determine the outcome.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Poland vs Senegal Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Poland vs Senegal tickets at Estadio Akron offer excellent value. Category 1 premium tickets for prime midfield positions start around $375-475, offering optimal views of Lewandowski and Mané. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $275. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $185. Guadalajara's passionate football culture ensures excellent atmosphere at competitive prices compared to US venues.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group B World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Poland vs Senegal result will significantly impact Group B standings. Senegal's higher FIFA ranking reflects their recent success, but Poland possesses genuine star power in Lewandowski. A Polish victory would represent significant progress after 2018's disappointment, while Senegal winning would reinforce their status as genuine knockout round contenders. The expanded 48-team format provides both nations realistic paths to advancement, making early group stage results particularly important.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Guadalajara World Cup 2026</h3>
              <p className="leading-relaxed">
                Guadalajara International Airport (GDL) provides direct connections from numerous North American and international destinations. The city's excellent public transportation and affordable taxi services make getting around straightforward. Guadalajara offers authentic Mexican culture, from the historic city center to the nearby tequila-producing region of Jalisco. The pleasant June weather, excellent restaurants, and vibrant nightlife make Guadalajara an exceptional World Cup destination for fans seeking genuine Mexican experiences.
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
                  {matchInfo.homeTeam.flag} Poland Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {polandPlayers.map((player) => (
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
              <CardHeader className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Senegal Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {senegalPlayers.map((player) => (
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
                Poland vs Senegal Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.polandWins}</p>
                  <p className="text-sm text-gray-600">Poland Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">{headToHead.senegalWins}</p>
                  <p className="text-sm text-gray-600">Senegal Wins</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg col-span-2 md:col-span-1">
                  <p className="text-sm font-semibold text-blue-800">Only Meeting</p>
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
                      Capacity: 49,850 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      Location: Guadalajara, Jalisco, Mexico
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Home of Chivas de Guadalajara (Liga MX)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-red-600" />
                      Also known as Estadio Chivas
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Guadalajara Int'l Airport (GDL): 25 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Mexico City (MEX): 1 hour flight
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/venues/estadio-akron-world-cup-2026-tickets">
                        View Full Estadio Akron Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Mexico/USA</h4>
                  <p className="text-sm text-gray-600">FOX, Televisa, TUDN</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Poland</h4>
                  <p className="text-sm text-gray-600">TVP, Polsat Sport</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Senegal</h4>
                  <p className="text-sm text-gray-600">RTS, Canal+ Afrique</p>
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
                    <Link href="/teams/poland-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇵🇱 Poland World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/senegal-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇸🇳 Senegal World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      Estadio Akron Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/guadalajara-world-cup-2026-guide" className="text-red-600 hover:underline flex items-center gap-1">
                      Guadalajara Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group B Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      All Group B Matches <ArrowRight className="h-3 w-3" />
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
            Don't Miss Poland vs Senegal at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch Lewandowski seek revenge against the Lions of Teranga in Guadalajara
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
