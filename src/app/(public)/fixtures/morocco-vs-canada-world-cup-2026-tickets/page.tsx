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
  title: "Morocco vs Canada Tickets | World Cup 2026 Group E | Estadio Azteca Mexico City",
  description: "Buy Morocco vs Canada World Cup 2026 tickets at Estadio Azteca in Mexico City. Secure your seats for this Group E clash between the 2022 World Cup semi-finalists and co-hosts Canada. Premium World Cup tickets available.",
  keywords: [
    "Morocco vs Canada tickets",
    "World Cup 2026 Mexico City tickets",
    "Estadio Azteca World Cup tickets",
    "Morocco World Cup 2026",
    "Canada World Cup 2026",
    "Group E World Cup tickets",
    "Atlas Lions World Cup tickets",
    "Canada World Cup co-hosts",
    "FIFA World Cup tickets Mexico",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Morocco vs Canada | World Cup 2026 Group E Tickets",
    description: "Secure your tickets for Morocco vs Canada at the legendary Estadio Azteca. World Cup 2026 Group E fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Morocco",
    flag: "🇲🇦",
    code: "MAR",
    nickname: "Atlas Lions",
    fifaRanking: 13,
    group: "E",
  },
  awayTeam: {
    name: "Canada",
    flag: "🇨🇦",
    code: "CAN",
    nickname: "Les Rouges",
    fifaRanking: 43,
    group: "E",
  },
  date: "June 20, 2026",
  time: "4:00 PM CT",
  venue: "Estadio Azteca",
  city: "Mexico City, Mexico",
  group: "E",
  matchNumber: 27,
  round: "Group Stage",
  expectedAttendance: "87,000",
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
    price_from: 275,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const moroccoPlayers = [
  { name: "Achraf Hakimi", position: "Defender", club: "PSG", number: 2 },
  { name: "Hakim Ziyech", position: "Winger", club: "Galatasaray", number: 7 },
  { name: "Youssef En-Nesyri", position: "Forward", club: "Sevilla", number: 19 },
  { name: "Sofyan Amrabat", position: "Midfielder", club: "Fiorentina", number: 4 },
]

const canadaPlayers = [
  { name: "Alphonso Davies", position: "Defender", club: "Bayern Munich", number: 19 },
  { name: "Jonathan David", position: "Forward", club: "Lille", number: 20 },
  { name: "Cyle Larin", position: "Forward", club: "Real Valladolid", number: 17 },
  { name: "Stephen Eustáquio", position: "Midfielder", club: "FC Porto", number: 7 },
]

const headToHead = {
  totalMatches: 2,
  moroccoWins: 2,
  draws: 0,
  canadaWins: 0,
  lastMeeting: "Morocco 2-1 Canada (2022 World Cup)",
  notableMatch: "Morocco defeated Canada in Qatar 2022",
}

export default function MoroccoVsCanadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-green-600 to-red-600 text-gray-900 py-16">
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
              Morocco vs Canada Tickets
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
            Buy Morocco vs Canada Tickets
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
                Morocco vs Canada Match Preview - World Cup 2026 Group E
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings Morocco and Canada together at the legendary Estadio Azteca in Mexico City for a compelling Group E encounter. This match features the 2022 World Cup semi-finalists against one of the tournament's co-host nations in football's most historic stadium. Morocco vs Canada World Cup 2026 tickets offer fans the chance to witness the Atlas Lions' continued rise against Canada's emerging football nation at an iconic venue that has hosted two World Cup Finals.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The 2022 World Cup Context</h3>
              <p className="leading-relaxed">
                Morocco and Canada met in the group stage of Qatar 2022, with the Atlas Lions emerging 2-1 victorious in a match that proved decisive for both nations. Morocco's victory helped secure their historic run to the semi-finals—becoming the first African nation to reach that stage—while Canada's defeat contributed to their group stage elimination despite showing flashes of quality. The Canadians will be seeking revenge on home soil (as co-hosts), while Morocco looks to confirm their status as a genuine World Cup contender rather than a one-tournament wonder.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Estadio Azteca - Football's Most Historic Venue</h3>
              <p className="leading-relaxed">
                Estadio Azteca in Mexico City stands as perhaps the most iconic football stadium in the world. The only venue to host two World Cup Finals (1970 and 1986), it witnessed Diego Maradona's "Hand of God" and "Goal of the Century" against England. The 87,000-seat coliseum sits at 7,200 feet elevation, creating challenging conditions that favor acclimatized teams. The stadium's famous atmosphere—created by passionate Mexican fans and unique acoustics—ensures an unforgettable experience regardless of the competing nations. Playing at the Azteca represents a bucket-list experience for football fans worldwide.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Morocco Squad - Atlas Lions World Cup 2026</h3>
              <p className="leading-relaxed">
                Morocco arrives at the 2026 World Cup determined to prove their 2022 semi-final run was the beginning rather than peak of their golden generation. Achraf Hakimi remains one of world football's elite right-backs, his pace and attacking threat from PSG making him almost unstoppable when on form. Hakim Ziyech's creative brilliance provides the spark in attack, while Youssef En-Nesyri's goal-scoring prowess offers consistent threat. Sofyan Amrabat anchors the midfield with his tireless running and tactical intelligence. This Moroccan squad possesses genuine World Cup-winning quality.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Canada Squad - Les Rouges World Cup 2026</h3>
              <p className="leading-relaxed">
                Canada enters their home World Cup as co-hosts with legitimate ambitions to progress deep into the tournament. Alphonso Davies has established himself as one of world football's premier full-backs at Bayern Munich, his electrifying pace creating constant overloads down the left flank. Jonathan David has become one of Ligue 1's most prolific strikers at Lille, providing the goal threat Canada previously lacked. Cyle Larin and Stephen Eustáquio add experience and quality. Playing on home soil with passionate Canadian support, Les Rouges have the platform to write football history for their nation.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The matchup between Hakimi and Davies could determine the fixture—two of world football's best attacking full-backs canceling each other out or producing moment of individual brilliance. The central midfield battle between Amrabat and Eustáquio will be crucial for controlling tempo. Ziyech's creativity faces Canada's defensive organization, while Jonathan David's movement tests Morocco's disciplined backline. Set pieces will be significant given both teams' aerial threats. The altitude at the Azteca adds an unpredictable element that could favor the team better adapted to the conditions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Morocco vs Canada Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Morocco vs Canada tickets at Estadio Azteca offer various options at a historic venue. Category 1 premium tickets for prime midfield positions start around $400-525, offering optimal views of the tactical battle at this legendary stadium. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $295. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $195. The chance to attend a match at the Azteca during a World Cup represents exceptional value at any price point.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group E World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Morocco vs Canada result will significantly impact Group E standings. Morocco enters with higher ranking and recent World Cup pedigree, but Canada's co-host status and home support creates genuine uncertainty. A Canadian victory would send shockwaves through the tournament and validate their status as genuine contenders rather than merely participants. Morocco winning would confirm their position among world football's elite and likely secure group stage progression. This fixture could prove decisive in determining which nations advance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Mexico City World Cup 2026</h3>
              <p className="leading-relaxed">
                Mexico City International Airport (MEX) provides extensive connectivity for international fans. The city's Metro system offers affordable transportation throughout the metropolis, with the Azteca accessible via multiple lines. Mexico City's rich cultural heritage—from ancient Aztec ruins to world-class museums and culinary experiences—makes it an exceptional World Cup destination. The altitude (7,350 feet) requires acclimatization time for visitors. The city's vibrant neighborhoods, excellent restaurants, and warm hospitality ensure fans enjoy much more than just football.
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
              <CardHeader className="bg-gradient-to-r from-red-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Morocco Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {moroccoPlayers.map((player) => (
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

            <Card className="border-red-200">
              <CardHeader className="bg-gradient-to-r from-red-600 to-white text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Canada Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {canadaPlayers.map((player) => (
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
                <TrendingUp className="h-6 w-6 text-red-600" />
                Morocco vs Canada Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.moroccoWins}</p>
                  <p className="text-sm text-gray-600">Morocco Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.canadaWins}</p>
                  <p className="text-sm text-gray-600">Canada Wins</p>
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
                      Capacity: 87,000 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      Location: Mexico City, Mexico
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Only venue to host 2 World Cup Finals
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-red-600" />
                      Elevation: 7,200 feet (2,200m)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Mexico City Int'l Airport (MEX): 40 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Metro Line 2: Tasqueña to Estadio Azteca
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/venues/estadio-azteca-world-cup-2026-tickets">
                        View Full Estadio Azteca Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                  <p className="text-sm text-gray-600">Televisa, FOX, Telemundo</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Morocco</h4>
                  <p className="text-sm text-gray-600">SNRT, beIN Sports MENA</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Canada</h4>
                  <p className="text-sm text-gray-600">TSN, CTV, RDS</p>
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
                    <Link href="/teams/morocco-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇲🇦 Morocco World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/canada-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇨🇦 Canada World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      Estadio Azteca Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/mexico-city-world-cup-2026-guide" className="text-red-600 hover:underline flex items-center gap-1">
                      Mexico City Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group E Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-e-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      All Group E Matches <ArrowRight className="h-3 w-3" />
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
            Don't Miss Morocco vs Canada at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch the 2022 semi-finalists face the co-hosts at the legendary Azteca
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
