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
  title: "France vs Nigeria Tickets | World Cup 2026 Group E | MetLife Stadium New York",
  description: "Buy France vs Nigeria World Cup 2026 tickets at MetLife Stadium in New York/New Jersey. Secure your seats for this Group E clash between Les Bleus and Super Eagles. Premium World Cup tickets available.",
  keywords: [
    "France vs Nigeria tickets",
    "World Cup 2026 New York tickets",
    "MetLife Stadium World Cup tickets",
    "France World Cup 2026",
    "Nigeria World Cup 2026",
    "Group E World Cup tickets",
    "Mbappé World Cup tickets",
    "Super Eagles World Cup tickets",
    "FIFA World Cup tickets New Jersey",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "France vs Nigeria | World Cup 2026 Group E Tickets",
    description: "Secure your tickets for France vs Nigeria at MetLife Stadium in New York. World Cup 2026 Group E fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "France",
    flag: "🇫🇷",
    code: "FRA",
    nickname: "Les Bleus",
    fifaRanking: 2,
    group: "E",
  },
  awayTeam: {
    name: "Nigeria",
    flag: "🇳🇬",
    code: "NGA",
    nickname: "Super Eagles",
    fifaRanking: 36,
    group: "E",
  },
  date: "June 15, 2026",
  time: "4:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "E",
  matchNumber: 16,
  round: "Group Stage",
  expectedAttendance: "82,500",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 285,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 445,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 395,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 375,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const francePlayers = [
  { name: "Kylian Mbappé", position: "Forward", club: "Real Madrid", number: 10 },
  { name: "Antoine Griezmann", position: "Forward", club: "Atlético Madrid", number: 7 },
  { name: "Aurélien Tchouaméni", position: "Midfielder", club: "Real Madrid", number: 8 },
  { name: "William Saliba", position: "Defender", club: "Arsenal", number: 17 },
]

const nigeriaPlayers = [
  { name: "Victor Osimhen", position: "Forward", club: "Napoli", number: 9 },
  { name: "Wilfred Ndidi", position: "Midfielder", club: "Leicester City", number: 4 },
  { name: "Samuel Chukwueze", position: "Winger", club: "AC Milan", number: 21 },
  { name: "Alex Iwobi", position: "Midfielder", club: "Fulham", number: 17 },
]

const headToHead = {
  totalMatches: 5,
  franceWins: 3,
  draws: 1,
  nigeriaWins: 1,
  lastMeeting: "France 2-0 Nigeria (2014 World Cup R16)",
  notableMatch: "France 2-0 Nigeria (2014 Brazil, R16)",
}

export default function FranceVsNigeriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-white to-green-600 text-gray-900 py-16">
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
              France vs Nigeria Tickets
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
            Buy France vs Nigeria Tickets
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
                France vs Nigeria Match Preview - World Cup 2026 Group E Clash
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 produces a tantalizing Group E encounter as France face Nigeria at MetLife Stadium in the New York metropolitan area. This fixture pits the 2018 World Cup champions and 2022 finalists against Africa's most populous nation and perennial continental powerhouse. France vs Nigeria World Cup 2026 tickets offer fans the chance to witness Kylian Mbappé's brilliance against Nigeria's explosive Super Eagles in one of America's largest stadiums.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The Stakes for France vs Nigeria at World Cup 2026</h3>
              <p className="leading-relaxed">
                France enters the 2026 World Cup determined to reclaim the title they won in Russia 2018 after falling agonizingly short in the Qatar 2022 final against Argentina. Les Bleus remain among the tournament favorites with a squad combining world-class experience and emerging talent. Nigeria, meanwhile, represents Africa's best chance at a deep World Cup run, arriving with a squad packed with European-based stars and carrying the hopes of a continent. Their last World Cup meeting in 2014 saw France emerge victorious in the Round of 16, adding historical context to this Group E clash.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">MetLife Stadium - New York World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                MetLife Stadium serves as the crown jewel of American football stadiums and will host the 2026 World Cup Final. Located just minutes from Manhattan in East Rutherford, New Jersey, this 82,500-seat venue offers state-of-the-art facilities and unparalleled atmosphere. The stadium's proximity to New York City means fans can combine world-class football with exploring one of the world's great cities. As a venue experienced in hosting major events including Super Bowls and international soccer matches, MetLife Stadium provides the perfect stage for France vs Nigeria.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">France Squad - Les Bleus World Cup 2026</h3>
              <p className="leading-relaxed">
                France's embarrassment of riches continues under manager Didier Deschamps, now seeking to become the first coach to win two World Cups. Kylian Mbappé has cemented his status as the world's most electrifying player since his move to Real Madrid, combining blistering pace with clinical finishing and improved playmaking. Antoine Griezmann provides creativity and experience, while Aurélien Tchouaméni anchors an elite midfield. The defensive unit, featuring William Saliba and a new generation of French center-backs, has emerged as one of Europe's best. France's depth across all positions makes them genuine favorites for a third World Cup title.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Nigeria Squad - Super Eagles World Cup 2026</h3>
              <p className="leading-relaxed">
                Nigeria's Super Eagles have assembled their most talented squad in a generation. Victor Osimhen has established himself as one of world football's elite strikers, with his movement, aerial ability, and relentless energy terrorizing defenses across Europe's top leagues. Wilfred Ndidi provides defensive midfield stability, while Samuel Chukwueze's trickery on the wings creates constant danger. Alex Iwobi has matured into a complete midfielder capable of controlling matches. This Nigerian generation combines individual brilliance with tactical discipline, making them genuine contenders to become the first African nation to reach a World Cup semi-final.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The pace battle between Mbappé and Nigeria's full-backs will be decisive—few defenders in world football can match the Frenchman's acceleration. Equally crucial will be the midfield contest, where Tchouaméni's ability to control tempo faces Nigeria's pressing game and Ndidi's ball-winning prowess. Victor Osimhen's physical presence will test France's center-back partnership, particularly on aerial duels. Set pieces could prove important, with both teams possessing aerial threats and capable set-piece takers. Expect a match where transitions and counter-attacks create the most dangerous moments.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">France vs Nigeria Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                France vs Nigeria at MetLife Stadium commands significant interest given France's profile and New York's large African diaspora community. Category 1 premium tickets for prime midfield positions start around $550-750, offering optimal views of both team's tactical setups. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $400. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $285. The New York market's massive demand and limited supply mean early purchasing is essential.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group E World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The France vs Nigeria result could shape Group E's final standings significantly. France will be expected to top the group, but Nigeria possesses the quality to cause an upset and potentially claim the group's top position themselves. A Nigerian victory would send shockwaves through the tournament and significantly boost African football's profile. The match's outcome will influence knockout round pathways, making this early fixture potentially decisive for both nations' tournament trajectories and dreams of World Cup glory.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for New York World Cup 2026</h3>
              <p className="leading-relaxed">
                The New York metropolitan area offers unparalleled connectivity for international fans. John F. Kennedy International Airport (JFK), Newark Liberty International Airport (EWR), and LaGuardia Airport (LGA) serve millions of passengers annually with direct flights from across the globe. MetLife Stadium is accessible via NJ Transit trains and buses from New York Penn Station, with special event services running on match days. Manhattan's world-famous hotels, restaurants, and attractions make New York the ultimate World Cup destination. Fans can explore Times Square, Central Park, the Statue of Liberty, and countless cultural institutions before or after the match.
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
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} France Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {francePlayers.map((player) => (
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

            <Card className="border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Nigeria Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {nigeriaPlayers.map((player) => (
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
                <TrendingUp className="h-6 w-6 text-blue-600" />
                France vs Nigeria Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{headToHead.franceWins}</p>
                  <p className="text-sm text-gray-600">France Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">{headToHead.nigeriaWins}</p>
                  <p className="text-sm text-gray-600">Nigeria Wins</p>
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
                      Newark Liberty Airport (EWR): 20 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      JFK Airport: 45 mins
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
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-800">France</h4>
                  <p className="text-sm text-gray-600">TF1, beIN Sports</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Nigeria</h4>
                  <p className="text-sm text-gray-600">SuperSport, NTA</p>
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
                    <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇫🇷 France World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/nigeria-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇳🇬 Nigeria World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                <h3 className="font-semibold mb-2">More Group E Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-e-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      All Group E Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss France vs Nigeria at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch Les Bleus face the Super Eagles at the iconic MetLife Stadium
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
