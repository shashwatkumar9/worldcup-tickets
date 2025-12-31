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
  title: "Argentina vs Chile Tickets | World Cup 2026 Group F | Hard Rock Stadium Miami",
  description: "Buy Argentina vs Chile World Cup 2026 tickets at Hard Rock Stadium in Miami. Secure your seats for this South American Group F derby between the defending champions and La Roja. Premium World Cup tickets available.",
  keywords: [
    "Argentina vs Chile tickets",
    "World Cup 2026 Miami tickets",
    "Hard Rock Stadium World Cup tickets",
    "Argentina World Cup 2026",
    "Chile World Cup 2026",
    "Group F World Cup tickets",
    "South American derby World Cup",
    "FIFA World Cup tickets Miami",
    "Messi World Cup tickets",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Argentina vs Chile | World Cup 2026 Group F Tickets",
    description: "Secure your tickets for Argentina vs Chile at Hard Rock Stadium in Miami. World Cup 2026 Group F South American derby.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Argentina",
    flag: "🇦🇷",
    code: "ARG",
    nickname: "La Albiceleste",
    fifaRanking: 1,
    group: "F",
  },
  awayTeam: {
    name: "Chile",
    flag: "🇨🇱",
    code: "CHI",
    nickname: "La Roja",
    fifaRanking: 29,
    group: "F",
  },
  date: "June 14, 2026",
  time: "9:00 PM ET",
  venue: "Hard Rock Stadium",
  city: "Miami Gardens, Florida",
  group: "F",
  matchNumber: 15,
  round: "Group Stage",
  expectedAttendance: "65,000",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 395,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 625,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 575,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 545,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const argentinaPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10 },
  { name: "Julián Álvarez", position: "Forward", club: "Manchester City", number: 9 },
  { name: "Rodrigo De Paul", position: "Midfielder", club: "Atlético Madrid", number: 7 },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
]

const chilePlayers = [
  { name: "Alexis Sánchez", position: "Forward", club: "Inter Milan", number: 7 },
  { name: "Arturo Vidal", position: "Midfielder", club: "Colo-Colo", number: 8 },
  { name: "Claudio Bravo", position: "Goalkeeper", club: "Real Betis", number: 1 },
  { name: "Ben Brereton Díaz", position: "Forward", club: "Villarreal", number: 22 },
]

const headToHead = {
  totalMatches: 96,
  argentinaWins: 60,
  draws: 19,
  chileWins: 17,
  lastMeeting: "Argentina 1-0 Chile (2024 Copa America)",
  notableMatch: "Chile 0-0 Argentina (2016 Copa Final, Chile win pens)",
}

export default function ArgentinaVsChilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-400 via-white to-red-600 text-gray-900 py-16">
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
                <Badge variant="outline" className="mt-2 bg-white/80 text-yellow-600 border-yellow-500">
                  🏆 FIFA #{matchInfo.homeTeam.fifaRanking}
                </Badge>
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
              Argentina vs Chile Tickets
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
            Buy Argentina vs Chile Tickets
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
                Argentina vs Chile Match Preview - World Cup 2026 South American Derby
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings one of South American football's fiercest rivalries to American soil as defending world champions Argentina face Chile at Hard Rock Stadium in Miami. This Group F encounter promises passion, drama, and the intense competitive spirit that defines the Clásico del Pacífico. Argentina vs Chile World Cup 2026 tickets represent one of the most coveted items for the tournament, combining elite football with deep-rooted continental rivalry.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The Significance of Argentina vs Chile at World Cup 2026</h3>
              <p className="leading-relaxed">
                This fixture carries enormous weight beyond the three points at stake. Argentina enters as the reigning World Cup champions from Qatar 2022, Copa America winners, and Finalissima champions—a golden generation looking to defend their crown. Chile, meanwhile, seeks redemption after missing the 2018 and 2022 World Cups despite their back-to-back Copa America triumphs in 2015 and 2016, the latter coming at Argentina's expense in a penalty shootout that still haunts La Albiceleste fans. The narrative of revenge and redemption makes this one of the most anticipated group stage matches of the entire tournament.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Hard Rock Stadium - Miami World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                Hard Rock Stadium in Miami Gardens provides the perfect backdrop for this South American showdown. Home to the Miami Dolphins and host of multiple Super Bowls, this state-of-the-art facility has been transformed for international football. The stadium's 65,000 capacity will be filled with passionate Argentine and Chilean supporters, many of whom live in South Florida's vibrant Latino community. Miami's proximity to South America and its status as a cultural hub make it the ideal American city to host this fixture, with the atmosphere expected to rival any match played in Buenos Aires or Santiago.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Argentina Squad - La Albiceleste World Cup Defense</h3>
              <p className="leading-relaxed">
                Argentina's quest to become the first team to retain the World Cup since Brazil in 1962 centers on an extraordinary squad led by the incomparable Lionel Messi. The eight-time Ballon d'Or winner brings his magic to his hometown stadium of Inter Miami, where he has captivated American audiences since 2023. Beyond Messi, Argentina boasts incredible depth with Julián Álvarez's relentless pressing and clinical finishing, Enzo Fernández's midfield mastery, and Rodrigo De Paul's tireless work rate. Manager Lionel Scaloni has built a team that combines individual brilliance with collective intensity, making them favorites to repeat as world champions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Chile Squad - La Roja's Return to the World Stage</h3>
              <p className="leading-relaxed">
                Chile returns to the World Cup after missing consecutive tournaments, a painful absence for a nation that produced one of the most entertaining international sides of the 2010s. While the golden generation of Alexis Sánchez, Arturo Vidal, and Claudio Bravo has aged, their experience and winning mentality remain invaluable. A new wave of talent including Ben Brereton Díaz has injected fresh energy into La Roja, while the aggressive pressing system that defined Chilean football remains central to their identity. Chile's history of upsetting Argentina in crucial moments means they will never be underestimated in this fixture.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The midfield battle will be crucial, with Enzo Fernández and Rodrigo De Paul facing the experienced pairing of Arturo Vidal and Chile's pressing system designed to disrupt Argentina's build-up play. Chile has historically excelled at making Argentina uncomfortable through high pressing and physical confrontation. On the flanks, Messi's movement and creativity will be tested by Chile's disciplined defensive structure. Set pieces will be significant, with both teams possessing aerial threats. The match will likely be decided by which team can better impose their style and tempo on proceedings.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Argentina vs Chile Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Given Argentina's status as defending champions and Messi's presence, Argentina vs Chile tickets at World Cup 2026 command premium prices. Category 1 premium tickets for prime midfield positions start around $700-1000, offering the best views of both team's tactical setups. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $500. Category 3 tickets offer solid views from the ends and corners for fans seeking more affordable options, starting around $395. Early purchase is strongly recommended as demand from South American communities in the United States ensures rapid sellout.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group F World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Argentina vs Chile result will significantly impact Group F standings and subsequent knockout round pathways. Argentina will be heavy favorites to top the group, but Chile's history of rising to the occasion against their rivals creates genuine uncertainty. A Chilean victory would represent one of the tournament's biggest stories while also avenging years of painful defeats. The loser faces increased pressure in remaining group matches, making this early fixture potentially decisive for both nations' tournament trajectories.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Miami World Cup 2026</h3>
              <p className="leading-relaxed">
                Miami International Airport (MIA) serves as the gateway for international fans, with extensive connections throughout the Americas. The city's well-developed tourism infrastructure offers accommodations ranging from Miami Beach luxury hotels to more affordable options in surrounding areas. Public transportation including the Metrorail connects downtown Miami to the stadium area, while rideshare services provide convenient alternatives. Miami's vibrant nightlife, beautiful beaches, and diverse dining scene make it an exceptional destination for football fans looking to combine World Cup attendance with vacation experiences.
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
              <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Argentina Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {argentinaPlayers.map((player) => (
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

            <Card className="border-red-200">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Chile Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {chilePlayers.map((player) => (
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
                <TrendingUp className="h-6 w-6 text-blue-600" />
                Argentina vs Chile Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{headToHead.argentinaWins}</p>
                  <p className="text-sm text-gray-600">Argentina Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.chileWins}</p>
                  <p className="text-sm text-gray-600">Chile Wins</p>
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
                      Capacity: 65,000 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      Location: Miami Gardens, Florida
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-600" />
                      Home of Miami Dolphins (NFL)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      Multiple Super Bowl host venue
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      Miami Int'l Airport (MIA): 25 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      Fort Lauderdale Airport (FLL): 30 mins
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                      <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets">
                        View Full Hard Rock Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h4 className="font-semibold text-cyan-800">Argentina</h4>
                  <p className="text-sm text-gray-600">TyC Sports, TV Pública</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Chile</h4>
                  <p className="text-sm text-gray-600">Chilevisión, Canal 13</p>
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
                    <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇦🇷 Argentina World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/chile-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇨🇱 Chile World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      Hard Rock Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/miami-world-cup-2026-guide" className="text-blue-600 hover:underline flex items-center gap-1">
                      Miami Travel Guide <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Argentina vs Chile at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Witness the defending champions face their fierce South American rivals in Miami
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
