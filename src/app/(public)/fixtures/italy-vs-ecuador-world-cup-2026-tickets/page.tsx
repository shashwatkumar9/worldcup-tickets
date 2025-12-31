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
  title: "Italy vs Ecuador Tickets | World Cup 2026 Group F | MetLife Stadium New York",
  description: "Buy Italy vs Ecuador World Cup 2026 tickets at MetLife Stadium in New York. Secure your seats for this Group F clash between the Azzurri and La Tri. Premium World Cup tickets available.",
  keywords: [
    "Italy vs Ecuador tickets",
    "World Cup 2026 New York tickets",
    "MetLife Stadium World Cup tickets",
    "Italy World Cup 2026",
    "Ecuador World Cup 2026",
    "Group F World Cup tickets",
    "Azzurri World Cup tickets",
    "La Tri World Cup tickets",
    "FIFA World Cup tickets New Jersey",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Italy vs Ecuador | World Cup 2026 Group F Tickets",
    description: "Secure your tickets for Italy vs Ecuador at MetLife Stadium. World Cup 2026 Group F fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Italy",
    flag: "🇮🇹",
    code: "ITA",
    nickname: "Azzurri",
    fifaRanking: 10,
    group: "F",
  },
  awayTeam: {
    name: "Ecuador",
    flag: "🇪🇨",
    code: "ECU",
    nickname: "La Tri",
    fifaRanking: 31,
    group: "F",
  },
  date: "June 21, 2026",
  time: "1:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "F",
  matchNumber: 28,
  round: "Group Stage",
  expectedAttendance: "82,500",
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
    price_from: 375,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 335,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 315,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const italyPlayers = [
  { name: "Gianluigi Donnarumma", position: "Goalkeeper", club: "PSG", number: 1 },
  { name: "Federico Chiesa", position: "Winger", club: "Juventus", number: 14 },
  { name: "Nicolò Barella", position: "Midfielder", club: "Inter Milan", number: 18 },
  { name: "Sandro Tonali", position: "Midfielder", club: "Newcastle", number: 8 },
]

const ecuadorPlayers = [
  { name: "Moisés Caicedo", position: "Midfielder", club: "Chelsea", number: 23 },
  { name: "Piero Hincapié", position: "Defender", club: "Bayer Leverkusen", number: 3 },
  { name: "Enner Valencia", position: "Forward", club: "Internacional", number: 13 },
  { name: "Gonzalo Plata", position: "Winger", club: "Al-Sadd", number: 16 },
]

const headToHead = {
  totalMatches: 3,
  italyWins: 2,
  draws: 0,
  ecuadorWins: 1,
  lastMeeting: "Italy 2-0 Ecuador (2022 Friendly)",
  notableMatch: "Ecuador 1-2 Italy (2002 Friendly)",
}

export default function ItalyVsEcuadorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-white to-yellow-500 text-gray-900 py-16">
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
              Italy vs Ecuador Tickets
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
            Buy Italy vs Ecuador Tickets
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
                Italy vs Ecuador Match Preview - World Cup 2026 Group F
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings Italy and Ecuador together at MetLife Stadium in the New York metropolitan area for a compelling Group F encounter. The four-time World Cup champions face South America's rising force in a match that will be crucial for both nations' knockout round ambitions. Italy vs Ecuador World Cup 2026 tickets offer fans the chance to witness the Azzurri's quest to reclaim World Cup glory after their shocking failure to qualify for Qatar 2022.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Italy's Redemption Story</h3>
              <p className="leading-relaxed">
                Italy arrives at the 2026 World Cup seeking redemption after the humiliation of missing the 2022 tournament—their second consecutive failure to qualify. For a nation that has won the World Cup four times, these back-to-back absences represented rock bottom. However, Italy's Euro 2020 triumph showed this generation can perform on the biggest stage. The Azzurri have rebuilt with a focus on technical quality and tactical flexibility, maintaining their traditional defensive excellence while developing more dynamic attacking options. This World Cup represents Italy's chance to prove they remain among football's elite.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">MetLife Stadium - World Cup Final Venue</h3>
              <p className="leading-relaxed">
                MetLife Stadium will host the 2026 World Cup Final, making every match at this venue carry special significance. The 82,500-seat stadium in East Rutherford offers state-of-the-art facilities and excellent sightlines from every seat. Located just minutes from Manhattan, fans can combine world-class football with exploring New York City's iconic attractions. The New York metropolitan area's massive Italian-American population ensures passionate support for the Azzurri, while Ecuador's significant diaspora community will provide vocal backing for La Tri.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Italy Squad - Azzurri World Cup 2026</h3>
              <p className="leading-relaxed">
                Italy enters the 2026 World Cup with a squad blending experienced winners with exciting emerging talent. Gianluigi Donnarumma remains one of the world's premier goalkeepers, his shot-stopping and command of the area providing defensive security. Federico Chiesa's return from injury adds devastating pace and directness to the attack. Nicolò Barella has established himself as one of Europe's best midfielders at Inter Milan, while Sandro Tonali brings Premier League experience from Newcastle. This Italian squad possesses the quality to mount a serious challenge for a fifth World Cup title.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ecuador Squad - La Tri World Cup 2026</h3>
              <p className="leading-relaxed">
                Ecuador arrives at the 2026 World Cup as one of South America's most improved nations. Moisés Caicedo has become one of football's most coveted midfielders, his tireless running and ball-winning ability at Chelsea making him La Tri's most important player. Piero Hincapié has developed into a quality center-back at Bayer Leverkusen, while veteran Enner Valencia continues to deliver goals on the international stage. Gonzalo Plata provides explosive pace on the wing. Ecuador's youthful energy and technical quality make them capable of surprising any opponent.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The midfield battle between Barella and Caicedo represents a clash of two exceptional all-action midfielders and will likely determine the match outcome. Italy's defensive organization faces Ecuador's counter-attacking pace through Plata and Valencia. Chiesa's movement and finishing tests Ecuador's defensive discipline, while Hincapié must handle Italy's intelligent attacking movement. Set pieces could prove decisive given Italy's traditional aerial prowess. Expect a tactical contest where Italy seeks to control possession while Ecuador looks to disrupt and counter.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Italy vs Ecuador Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Italy vs Ecuador tickets at MetLife Stadium offer various options for fans. Category 1 premium tickets for prime midfield positions start around $475-600, offering optimal views at the World Cup Final venue. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $350. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $225. The New York market's massive size and Italy's global following ensure strong demand across all categories.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group F World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Italy vs Ecuador result will significantly impact Group F standings. Italy enters as favorites based on historical pedigree, but Ecuador possesses the quality to cause an upset. A victory for either team would provide crucial momentum for knockout round qualification. The expanded 48-team format means both nations have realistic paths to advancement, but early group stage results remain important for determining final positions and subsequent opponents.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for New York World Cup 2026</h3>
              <p className="leading-relaxed">
                The New York metropolitan area offers unparalleled connectivity through John F. Kennedy International Airport, Newark Liberty International Airport, and LaGuardia Airport. NJ Transit provides train service to MetLife Stadium from New York Penn Station on event days. Manhattan's endless attractions, world-class dining, and cultural institutions make New York the ultimate World Cup destination. Italian cuisine abounds in neighborhoods like Little Italy and Arthur Avenue in the Bronx.
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
              <CardHeader className="bg-gradient-to-r from-green-600 via-white to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  {matchInfo.homeTeam.flag} Italy Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {italyPlayers.map((player) => (
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
              <CardHeader className="bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Ecuador Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {ecuadorPlayers.map((player) => (
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
                Italy vs Ecuador Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{headToHead.italyWins}</p>
                  <p className="text-sm text-gray-600">Italy Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-600">{headToHead.ecuadorWins}</p>
                  <p className="text-sm text-gray-600">Ecuador Wins</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg col-span-2 md:col-span-1">
                  <p className="text-sm font-semibold text-green-800">Last Meeting</p>
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
                      Capacity: 82,500 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      Location: East Rutherford, New Jersey
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-600" />
                      2026 World Cup Final venue
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      Minutes from Manhattan
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      Newark Airport (EWR): 20 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      NJ Transit from Penn Station
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                      <Link href="/venues/metlife-stadium-world-cup-2026-tickets">
                        View Full MetLife Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Italy</h4>
                  <p className="text-sm text-gray-600">RAI, Sky Italia</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Ecuador</h4>
                  <p className="text-sm text-gray-600">Teleamazonas, TC Televisión</p>
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
                    <Link href="/teams/italy-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇮🇹 Italy World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/ecuador-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇪🇨 Ecuador World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      MetLife Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/new-york-world-cup-2026-guide" className="text-blue-600 hover:underline flex items-center gap-1">
                      New York Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group F Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-f-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      All Group F Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-green-600 via-white to-red-600 rounded-2xl text-gray-800">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Italy vs Ecuador at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch the Azzurri's World Cup return at the Final venue
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {affiliateLinks.slice(0, 2).map((link) => (
              <Button key={link.partner} asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
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
