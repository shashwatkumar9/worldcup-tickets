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
  title: "Uruguay vs Ghana Tickets | World Cup 2026 Group L | Mercedes-Benz Stadium Atlanta",
  description: "Buy Uruguay vs Ghana World Cup 2026 tickets at Mercedes-Benz Stadium in Atlanta. Secure your seats for this historic Group L rematch of the 2010 World Cup quarter-final. Premium World Cup tickets available.",
  keywords: [
    "Uruguay vs Ghana tickets",
    "World Cup 2026 Atlanta tickets",
    "Mercedes-Benz Stadium World Cup tickets",
    "Uruguay World Cup 2026",
    "Ghana World Cup 2026",
    "Group L World Cup tickets",
    "2010 World Cup rematch",
    "Suárez handball rematch",
    "FIFA World Cup tickets Atlanta",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Uruguay vs Ghana | World Cup 2026 Group L Tickets",
    description: "Secure your tickets for the historic Uruguay vs Ghana rematch at Mercedes-Benz Stadium. World Cup 2026 Group L fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Uruguay",
    flag: "🇺🇾",
    code: "URU",
    nickname: "La Celeste",
    fifaRanking: 14,
    group: "L",
  },
  awayTeam: {
    name: "Ghana",
    flag: "🇬🇭",
    code: "GHA",
    nickname: "Black Stars",
    fifaRanking: 48,
    group: "L",
  },
  date: "June 18, 2026",
  time: "7:00 PM ET",
  venue: "Mercedes-Benz Stadium",
  city: "Atlanta, Georgia",
  group: "L",
  matchNumber: 22,
  round: "Group Stage",
  expectedAttendance: "71,000",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 255,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 415,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 375,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 345,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const uruguayPlayers = [
  { name: "Darwin Núñez", position: "Forward", club: "Liverpool", number: 11 },
  { name: "Federico Valverde", position: "Midfielder", club: "Real Madrid", number: 15 },
  { name: "Ronald Araújo", position: "Defender", club: "Barcelona", number: 4 },
  { name: "Rodrigo Bentancur", position: "Midfielder", club: "Tottenham", number: 6 },
]

const ghanaPlayers = [
  { name: "Mohammed Kudus", position: "Midfielder", club: "West Ham", number: 10 },
  { name: "Thomas Partey", position: "Midfielder", club: "Arsenal", number: 5 },
  { name: "Iñaki Williams", position: "Forward", club: "Athletic Bilbao", number: 9 },
  { name: "Jordan Ayew", position: "Forward", club: "Crystal Palace", number: 11 },
]

const headToHead = {
  totalMatches: 4,
  uruguayWins: 2,
  draws: 1,
  ghanaWins: 1,
  lastMeeting: "Uruguay 0-0 Ghana (2022 World Cup, Group)",
  notableMatch: "Uruguay 1-1 Ghana (2010 WC QF, Suárez handball)",
}

export default function UruguayVsGhanaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-400 via-white to-yellow-400 text-gray-900 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-white/90 text-blue-700 mb-4">
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
              Uruguay vs Ghana Tickets
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
            <Ticket className="inline-block mr-2 h-6 w-6 text-blue-600" />
            Buy Uruguay vs Ghana Tickets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {affiliateLinks.map((link) => (
              <Card key={link.partner} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-300">
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
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
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
                <Trophy className="h-6 w-6 text-blue-600" />
                Uruguay vs Ghana Match Preview - The 2010 World Cup Rematch
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings one of football's most emotionally charged rematches as Uruguay face Ghana at Mercedes-Benz Stadium in Atlanta. This Group L encounter reopens wounds from their infamous 2010 World Cup quarter-final, where Luis Suárez's deliberate handball denied Ghana the chance to become the first African nation to reach a World Cup semi-final. Uruguay vs Ghana World Cup 2026 tickets represent one of the tournament's most dramatic narratives, with revenge and redemption on the line.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The 2010 World Cup Quarter-Final: Africa's Heartbreak</h3>
              <p className="leading-relaxed">
                The 2010 World Cup quarter-final in South Africa remains one of football's most controversial matches. With the score level at 1-1 in extra time, Dominic Adiyiah's header was heading into the net when Luis Suárez punched the ball away on the goal line. Suárez was sent off, but Asamoah Gyan struck the crossbar with the resulting penalty. Uruguay won the subsequent shootout, advancing to the semi-finals while denying Africa a historic achievement on home soil. The incident sparked global debate about intentional fouls and their consequences. Ghana has never forgotten, and this rematch carries enormous emotional weight for an entire continent.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Mercedes-Benz Stadium - Atlanta World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                Mercedes-Benz Stadium in Atlanta provides the ideal backdrop for this emotionally charged fixture. This architectural masterpiece features an innovative retractable roof and the world's largest halo video board, creating an atmosphere unlike any other stadium. The 71,000-seat venue's location in Atlanta—a city with significant African and Caribbean diaspora communities—ensures passionate support for both nations. The stadium's experience hosting major soccer events, including multiple MLS Cup finals and international matches, makes it perfectly suited for this high-stakes encounter.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Uruguay Squad - La Celeste World Cup 2026</h3>
              <p className="leading-relaxed">
                Uruguay enters the 2026 World Cup with a new generation of stars ready to write their own history. Darwin Núñez has established himself as one of world football's most electric forwards at Liverpool, combining explosive pace with unpredictable movement. Federico Valverde has become one of football's most complete midfielders at Real Madrid, contributing at both ends with tireless energy. Ronald Araújo provides elite defensive quality, while Rodrigo Bentancur offers midfield control. The legendary Suárez has retired from international duty, removing the personal antagonist from this rematch but not the historical tension.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ghana Squad - Black Stars World Cup 2026</h3>
              <p className="leading-relaxed">
                Ghana arrives at the 2026 World Cup seeking redemption for 2010 and restoration of African football pride. Mohammed Kudus has emerged as one of football's most exciting talents, his technical brilliance and goal-scoring ability making him Ghana's most dangerous player in a generation. Thomas Partey provides world-class midfield quality from Arsenal, while Iñaki Williams brings pace and Premier League experience. Jordan Ayew's international experience adds valuable know-how. This Ghanaian squad possesses the talent to achieve what the 2010 generation was denied—and nothing would be sweeter than defeating Uruguay to do it.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The midfield battle between Valverde and Partey represents a clash of two of world football's finest midfielders and could determine the match outcome. Darwin Núñez's pace and movement will test Ghana's defensive organization, while Kudus's ability to unlock defenses poses similar problems for Uruguay. The emotional intensity means set pieces and moments of individual brilliance could prove decisive. Both teams will be aware of the historical context, adding psychological pressure that could affect performance. Expect an intense, physical encounter with high stakes for both nations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Uruguay vs Ghana Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Given the historic significance of this rematch, Uruguay vs Ghana tickets command premium prices. Category 1 premium tickets for prime midfield positions start around $500-650, offering optimal views of this dramatic encounter. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $375. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $255. Atlanta's large African community ensures strong demand from Ghana supporters, while South American fans will travel to support La Celeste.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group L World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Uruguay vs Ghana result carries enormous significance beyond historical rivalry. Both nations need positive results to advance from Group L, making this match potentially decisive for knockout round qualification. Uruguay's superior World Cup pedigree makes them slight favorites, but Ghana's motivation from 2010 creates genuine unpredictability. A Ghanaian victory would represent poetic justice and provide massive momentum, while Uruguay winning would add another chapter to an already painful story for African football.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Atlanta World Cup 2026</h3>
              <p className="leading-relaxed">
                Hartsfield-Jackson Atlanta International Airport, the world's busiest airport, provides unparalleled connectivity for international fans. The stadium's downtown location offers easy access via MARTA rail directly to the venue. Atlanta's vibrant culture, excellent dining scene, and rich civil rights history make it an exceptional World Cup destination. The city's year-round pleasant weather and Southern hospitality ensure fans from both nations will enjoy their visit to this dynamic American city.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Players */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Star className="inline-block mr-2 h-6 w-6 text-blue-600" />
            Key Players to Watch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Uruguay Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {uruguayPlayers.map((player) => (
                    <div key={player.name} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-sm text-gray-600">{player.position} • {player.club}</p>
                      </div>
                      <Badge variant="outline" className="bg-blue-100">#{player.number}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Ghana Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {ghanaPlayers.map((player) => (
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
                <TrendingUp className="h-6 w-6 text-blue-600" />
                Uruguay vs Ghana Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{headToHead.uruguayWins}</p>
                  <p className="text-sm text-gray-600">Uruguay Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-600">{headToHead.ghanaWins}</p>
                  <p className="text-sm text-gray-600">Ghana Wins</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg col-span-2 md:col-span-1">
                  <p className="text-sm font-semibold text-red-800">Infamous Match</p>
                  <p className="text-sm text-gray-600">{headToHead.notableMatch}</p>
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
                <MapPin className="h-6 w-6 text-blue-600" />
                Venue: {matchInfo.venue}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Stadium Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-blue-600" />
                      Capacity: 71,000 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      Location: Atlanta, Georgia
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-600" />
                      Home of Atlanta Falcons (NFL) & Atlanta United (MLS)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      World's largest halo video board
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      Hartsfield-Jackson Airport (ATL): 15 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      MARTA Rail: Direct to venue
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                      <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets">
                        View Full Mercedes-Benz Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                <Tv className="h-6 w-6 text-blue-600" />
                Broadcast Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">United States</h4>
                  <p className="text-sm text-gray-600">FOX, FS1, Telemundo</p>
                </div>
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <h4 className="font-semibold text-cyan-800">Uruguay</h4>
                  <p className="text-sm text-gray-600">Teledoce, VTV</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Ghana</h4>
                  <p className="text-sm text-gray-600">GTV, SuperSport</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Globe className="inline-block mr-2 h-6 w-6 text-blue-600" />
            Related World Cup 2026 Pages
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Team Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/teams/uruguay-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇺🇾 Uruguay World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/ghana-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇬🇭 Ghana World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      Mercedes-Benz Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/atlanta-world-cup-2026-guide" className="text-blue-600 hover:underline flex items-center gap-1">
                      Atlanta Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group L Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-l-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      All Group L Matches <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/fixtures" className="text-blue-600 hover:underline flex items-center gap-1">
                      Complete Fixture List <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss the Historic Uruguay vs Ghana Rematch
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Witness redemption or repeat? The 2010 drama continues in Atlanta
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {affiliateLinks.slice(0, 2).map((link) => (
              <Button key={link.partner} asChild size="lg" variant="secondary" className="text-blue-700">
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
