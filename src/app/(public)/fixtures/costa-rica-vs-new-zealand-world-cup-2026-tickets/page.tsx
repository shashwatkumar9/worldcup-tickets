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
  title: "Costa Rica vs New Zealand Tickets | World Cup 2026 Group D | BMO Field Toronto",
  description: "Buy Costa Rica vs New Zealand World Cup 2026 tickets at BMO Field in Toronto. Secure your seats for this Group D intercontinental clash between Los Ticos and the All Whites. Premium World Cup tickets available.",
  keywords: [
    "Costa Rica vs New Zealand tickets",
    "World Cup 2026 Toronto tickets",
    "BMO Field World Cup tickets",
    "Costa Rica World Cup 2026",
    "New Zealand World Cup 2026",
    "Group D World Cup tickets",
    "Los Ticos World Cup tickets",
    "All Whites World Cup tickets",
    "FIFA World Cup tickets Toronto",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Costa Rica vs New Zealand | World Cup 2026 Group D Tickets",
    description: "Secure your tickets for Costa Rica vs New Zealand at BMO Field in Toronto. World Cup 2026 Group D fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Costa Rica",
    flag: "🇨🇷",
    code: "CRC",
    nickname: "Los Ticos",
    fifaRanking: 49,
    group: "D",
  },
  awayTeam: {
    name: "New Zealand",
    flag: "🇳🇿",
    code: "NZL",
    nickname: "All Whites",
    fifaRanking: 93,
    group: "D",
  },
  date: "June 20, 2026",
  time: "1:00 PM ET",
  venue: "BMO Field",
  city: "Toronto, Ontario",
  group: "D",
  matchNumber: 26,
  round: "Group Stage",
  expectedAttendance: "45,500",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 145,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 235,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 215,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 195,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const costaRicaPlayers = [
  { name: "Keylor Navas", position: "Goalkeeper", club: "Nottingham Forest", number: 1 },
  { name: "Joel Campbell", position: "Forward", club: "Leon", number: 12 },
  { name: "Bryan Ruiz", position: "Midfielder", club: "Retired/Legend", number: 10 },
  { name: "Oscar Duarte", position: "Defender", club: "Al-Wehda", number: 6 },
]

const newZealandPlayers = [
  { name: "Chris Wood", position: "Forward", club: "Nottingham Forest", number: 9 },
  { name: "Liberato Cacace", position: "Defender", club: "Empoli", number: 3 },
  { name: "Matthew Garbett", position: "Midfielder", club: "Napoli", number: 8 },
  { name: "Sarpreet Singh", position: "Winger", club: "Greuther Fürth", number: 17 },
]

const headToHead = {
  totalMatches: 2,
  costaRicaWins: 1,
  draws: 0,
  newZealandWins: 1,
  lastMeeting: "Costa Rica 1-0 New Zealand (2022 WC Playoff)",
  notableMatch: "Costa Rica defeated NZ to qualify for Qatar 2022",
}

export default function CostaRicaVsNewZealandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-black/5">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-red-500 to-black text-gray-900 py-16">
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
              Costa Rica vs New Zealand Tickets
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
            Buy Costa Rica vs New Zealand Tickets
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
                Costa Rica vs New Zealand Match Preview - World Cup 2026 Group D
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings Costa Rica and New Zealand together at BMO Field in Toronto for a crucial Group D encounter. These teams have recent World Cup playoff history, with Costa Rica defeating New Zealand 1-0 in the intercontinental playoff to claim the final spot at Qatar 2022. Costa Rica vs New Zealand World Cup 2026 tickets offer fans the chance to witness CONCACAF face Oceania in a match where both nations will be fighting to progress from a competitive group.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The 2022 World Cup Playoff Connection</h3>
              <p className="leading-relaxed">
                Costa Rica and New Zealand's last meeting carried enormous stakes—the final World Cup qualification place for Qatar 2022. Joel Campbell's solitary goal in Doha gave Los Ticos their ticket to the tournament while ending New Zealand's dreams. The All Whites' disappointment was compounded by a strong qualifying campaign in Oceania, only to fall at the final hurdle. Costa Rica's subsequent group stage exit (losing 7-0 to Spain before recovering with creditable performances) showed the fine margins at international football's highest level. New Zealand arrives at 2026 determined to prove they belong.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">BMO Field - Toronto World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                BMO Field in Toronto provides an intimate, football-specific atmosphere for this Group D fixture. Home to Toronto FC and the Canadian national team, this 45,500-seat stadium (expanded for the World Cup) offers excellent sightlines and passionate crowds. Toronto's multicultural population includes significant Central American and Pacific Islander communities, ensuring vocal support for both teams. The stadium's location near downtown Toronto provides easy access to the city's attractions while maintaining an authentic football atmosphere that larger venues sometimes lack.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Costa Rica Squad - Los Ticos World Cup 2026</h3>
              <p className="leading-relaxed">
                Costa Rica enters the 2026 World Cup looking to recapture the magic of their stunning 2014 run to the quarter-finals. While that golden generation has largely moved on, Keylor Navas remains a world-class presence in goal despite his age. The experienced keeper has won multiple Champions League titles and provides invaluable leadership. Joel Campbell continues to contribute his experience and work rate, while a new generation of Costa Rican talent seeks to establish themselves. Los Ticos' traditional strengths—disciplined defense, tactical organization, and counter-attacking threat—remain central to their approach.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">New Zealand Squad - All Whites World Cup 2026</h3>
              <p className="leading-relaxed">
                New Zealand arrives at the 2026 World Cup with their strongest squad in decades. Chris Wood, a proven Premier League goalscorer at Nottingham Forest, provides genuine top-level quality that previous All Whites squads lacked. Liberato Cacace has established himself in Serie A at Empoli, while Matthew Garbett has been developing at Napoli. This new generation of New Zealand footballers playing in Europe's top leagues represents a significant step forward for Oceanian football. The All Whites are no longer satisfied with merely qualifying—they arrive with genuine ambitions to progress.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                Chris Wood's physical presence and aerial ability will test Costa Rica's defensive organization, particularly from set pieces. The midfield battle will be crucial, with Costa Rica's experienced players needing to control tempo against New Zealand's energetic pressing. Keylor Navas's shot-stopping and command of his area could prove decisive if New Zealand creates chances. Costa Rica's counter-attacking through quick transitions faces New Zealand's improving defensive structure. Expect a competitive, tactical battle where fine margins determine the outcome.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Costa Rica vs New Zealand Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Costa Rica vs New Zealand tickets at BMO Field offer excellent value compared to larger stadium fixtures. Category 1 premium tickets for prime midfield positions start around $295-375, offering optimal views of the tactical battle. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $195. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $145. The intimate stadium ensures excellent atmosphere regardless of seat location.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group D World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Costa Rica vs New Zealand result will significantly impact Group D standings. Both nations enter as underdogs against their group's higher-ranked opponents, making this head-to-head potentially decisive for determining which team advances. A victory for either would provide crucial momentum and confidence, while a draw could leave both nations' fates dependent on other results. The expanded 48-team format increases advancement opportunities, making this fixture enormously significant for both teams.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Toronto World Cup 2026</h3>
              <p className="leading-relaxed">
                Toronto Pearson International Airport (YYZ) provides excellent connectivity for international fans. The TTC subway and streetcar system offers convenient access throughout the city, with BMO Field reachable via the Bathurst streetcar. Toronto's diverse neighborhoods, world-class dining, and cultural attractions make it an exceptional World Cup destination. The CN Tower, Royal Ontario Museum, and vibrant entertainment districts provide plenty of activities beyond football. Summer weather in Toronto offers pleasant conditions for visiting fans.
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
              <CardHeader className="bg-gradient-to-r from-blue-600 via-white to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Costa Rica Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {costaRicaPlayers.map((player) => (
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

            <Card className="border-gray-200">
              <CardHeader className="bg-gradient-to-r from-black to-white text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} New Zealand Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {newZealandPlayers.map((player) => (
                    <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-sm text-gray-600">{player.position} • {player.club}</p>
                      </div>
                      <Badge variant="outline" className="bg-gray-100">#{player.number}</Badge>
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
                Costa Rica vs New Zealand Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{headToHead.costaRicaWins}</p>
                  <p className="text-sm text-gray-600">Costa Rica Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.newZealandWins}</p>
                  <p className="text-sm text-gray-600">New Zealand Wins</p>
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
                      Capacity: 45,500 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      Location: Toronto, Ontario, Canada
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-600" />
                      Home of Toronto FC (MLS) & Canada NT
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      Football-specific stadium atmosphere
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      Toronto Pearson Airport (YYZ): 30 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      TTC Bathurst Streetcar: Direct access
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                      <Link href="/venues/bmo-field-world-cup-2026-tickets">
                        View Full BMO Field Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Canada/USA</h4>
                  <p className="text-sm text-gray-600">FOX, TSN, Telemundo</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Costa Rica</h4>
                  <p className="text-sm text-gray-600">Teletica, Repretel</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">New Zealand</h4>
                  <p className="text-sm text-gray-600">Sky Sport NZ, Spark Sport</p>
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
                    <Link href="/teams/costa-rica-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇨🇷 Costa Rica World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/new-zealand-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      🇳🇿 New Zealand World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      BMO Field Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/toronto-world-cup-2026-guide" className="text-blue-600 hover:underline flex items-center gap-1">
                      Toronto Travel Guide <ArrowRight className="h-3 w-3" />
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
                    <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-600 hover:underline flex items-center gap-1">
                      All Group D Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-gray-800 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Costa Rica vs New Zealand at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch the 2022 playoff rematch in Toronto
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
