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
  title: "Denmark vs Tunisia Tickets | World Cup 2026 Group A | BC Place Vancouver",
  description: "Buy Denmark vs Tunisia World Cup 2026 tickets at BC Place in Vancouver. Secure your seats for this Group A 2022 World Cup rematch. Premium World Cup tickets available.",
  keywords: [
    "Denmark vs Tunisia tickets",
    "World Cup 2026 Vancouver tickets",
    "BC Place World Cup tickets",
    "Denmark World Cup 2026",
    "Tunisia World Cup 2026",
    "Group A World Cup tickets",
    "Danish Dynamite World Cup",
    "Eagles of Carthage tickets",
    "FIFA World Cup tickets Vancouver",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Denmark vs Tunisia | World Cup 2026 Group A Tickets",
    description: "Secure your tickets for Denmark vs Tunisia at BC Place in Vancouver. World Cup 2026 Group A fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Denmark",
    flag: "🇩🇰",
    code: "DEN",
    nickname: "Danish Dynamite",
    fifaRanking: 21,
    group: "A",
  },
  awayTeam: {
    name: "Tunisia",
    flag: "🇹🇳",
    code: "TUN",
    nickname: "Eagles of Carthage",
    fifaRanking: 40,
    group: "A",
  },
  date: "June 18, 2026",
  time: "4:00 PM PT",
  venue: "BC Place",
  city: "Vancouver, British Columbia",
  group: "A",
  matchNumber: 23,
  round: "Group Stage",
  expectedAttendance: "54,500",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 175,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 285,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 255,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 235,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const denmarkPlayers = [
  { name: "Christian Eriksen", position: "Midfielder", club: "Manchester United", number: 10 },
  { name: "Rasmus Højlund", position: "Forward", club: "Manchester United", number: 9 },
  { name: "Andreas Christensen", position: "Defender", club: "Barcelona", number: 4 },
  { name: "Pierre-Emile Højbjerg", position: "Midfielder", club: "Tottenham", number: 23 },
]

const tunisiaPlayers = [
  { name: "Hannibal Mejbri", position: "Midfielder", club: "Manchester United", number: 8 },
  { name: "Aïssa Laïdouni", position: "Midfielder", club: "Union Berlin", number: 14 },
  { name: "Youssef Msakni", position: "Forward", club: "Al-Arabi", number: 7 },
  { name: "Ellyes Skhiri", position: "Midfielder", club: "Eintracht Frankfurt", number: 28 },
]

const headToHead = {
  totalMatches: 2,
  denmarkWins: 0,
  draws: 2,
  tunisiaWins: 0,
  lastMeeting: "Denmark 0-0 Tunisia (2022 World Cup)",
  notableMatch: "Denmark 0-0 Tunisia (Qatar 2022 Group)",
}

export default function DenmarkVsTunisiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-600 text-gray-900 py-16">
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
              Denmark vs Tunisia Tickets
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
            Buy Denmark vs Tunisia Tickets
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
                Denmark vs Tunisia Match Preview - World Cup 2026 Group A Clash
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings Denmark and Tunisia together again at BC Place in Vancouver, a rematch of their 2022 World Cup group stage encounter that ended in a goalless draw. This Group A fixture pits European quality against North African resilience in beautiful British Columbia. Denmark vs Tunisia World Cup 2026 tickets offer fans the chance to witness two well-organized teams competing in one of Canada's most stunning cities.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The 2022 World Cup Context</h3>
              <p className="leading-relaxed">
                Denmark and Tunisia met in the group stage of the Qatar 2022 World Cup, where the Eagles of Carthage earned a creditable 0-0 draw against the highly-rated Danes. Tunisia's disciplined defensive display frustrated Denmark's attacking talents, with the Scandinavians unable to break down a well-organized Tunisian backline. The result proved costly for both teams—Denmark exited in the group stage following losses to France and Australia, while Tunisia also departed despite their solid defensive showing. Both nations will be determined to improve on their 2022 campaigns.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">BC Place - Vancouver World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                BC Place in Vancouver provides a stunning setting for this Group A encounter. The retractable-roof stadium offers breathtaking views of the North Shore mountains through its innovative design. The 54,500-seat venue has hosted major international events including the 2015 Women's World Cup Final and Rugby World Cup matches. Vancouver's multicultural population and strong football-loving communities ensure excellent support for both teams. The stadium's location near the waterfront and downtown Vancouver adds to the match-day experience.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Denmark Squad - Danish Dynamite World Cup 2026</h3>
              <p className="leading-relaxed">
                Denmark arrives at the 2026 World Cup seeking to build on their impressive Euro 2020 semi-final run and restore pride after disappointing in Qatar. Christian Eriksen's remarkable comeback from cardiac arrest continues to inspire the nation, his creative brilliance remaining central to Danish attacks. Rasmus Højlund has emerged as a genuine top-level striker at Manchester United, providing the goal threat Denmark has sometimes lacked. Andreas Christensen brings Champions League-winning experience from Barcelona, while Pierre-Emile Højbjerg provides midfield steel. This Danish squad possesses the quality to compete with any opponent.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Tunisia Squad - Eagles of Carthage World Cup 2026</h3>
              <p className="leading-relaxed">
                Tunisia enters the 2026 World Cup as one of Africa's most consistent performers, having qualified for their sixth World Cup. The squad has evolved since 2022, with young talents like Hannibal Mejbri emerging as genuine stars. The Manchester United midfielder brings technical quality and energy, while Aïssa Laïdouni provides Bundesliga experience in midfield. Experienced campaigners like Youssef Msakni add know-how and leadership. Tunisia's compact defensive organization and counter-attacking threat make them dangerous opponents who consistently punch above their weight against European opposition.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                Eriksen's ability to find space and create chances faces Tunisia's disciplined defensive structure. The midfield contest between Højbjerg and Skhiri will be crucial in determining which team controls the tempo. Højlund's movement and finishing must be sharper than Denmark's attacking efforts in 2022. Tunisia's counter-attacking threat through pace and directness poses problems when Denmark commit forward. Set pieces could prove decisive given both teams' aerial capabilities. Expect a tactical battle where patience and precision determine the outcome.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Denmark vs Tunisia Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Denmark vs Tunisia tickets at BC Place offer accessible options for fans. Category 1 premium tickets for prime midfield positions start around $350-450, offering optimal views of the tactical battle. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $250. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $175. Vancouver's beautiful setting and accessible prices make this an attractive fixture for neutral fans.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group A World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Denmark vs Tunisia result will significantly impact Group A standings. Both nations need positive results to advance, making this match crucial for knockout round qualification. Denmark's superior ranking makes them favorites, but Tunisia has demonstrated they can frustrate higher-ranked opponents. The expanded 48-team format provides both nations realistic paths to advancement, adding importance to every group stage point earned.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Vancouver World Cup 2026</h3>
              <p className="leading-relaxed">
                Vancouver International Airport (YVR) provides excellent connectivity for international fans. The SkyTrain rapid transit system offers direct access to BC Place from the airport and throughout the city. Vancouver's stunning natural beauty—mountains, ocean, and urban sophistication—makes it one of the world's most desirable destinations. The city's diverse culinary scene, outdoor activities, and vibrant neighborhoods ensure fans enjoy much more than just football during their visit.
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
                  {matchInfo.homeTeam.flag} Denmark Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {denmarkPlayers.map((player) => (
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
                  {matchInfo.awayTeam.flag} Tunisia Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {tunisiaPlayers.map((player) => (
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
                Denmark vs Tunisia Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.denmarkWins}</p>
                  <p className="text-sm text-gray-600">Denmark Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.tunisiaWins}</p>
                  <p className="text-sm text-gray-600">Tunisia Wins</p>
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
                      Capacity: 54,500 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      Location: Vancouver, BC, Canada
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Home of BC Lions (CFL) & Vancouver Whitecaps (MLS)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-red-600" />
                      Retractable roof with mountain views
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Vancouver Int'l Airport (YVR): 25 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      SkyTrain: Direct to Stadium-Chinatown
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/venues/bc-place-world-cup-2026-tickets">
                        View Full BC Place Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Canada/USA</h4>
                  <p className="text-sm text-gray-600">FOX, TSN, Telemundo</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Denmark</h4>
                  <p className="text-sm text-gray-600">DR, TV 2</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Tunisia</h4>
                  <p className="text-sm text-gray-600">Watania, beIN Sports MENA</p>
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
                    <Link href="/teams/denmark-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇩🇰 Denmark World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/tunisia-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇹🇳 Tunisia World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      BC Place Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/vancouver-world-cup-2026-guide" className="text-red-600 hover:underline flex items-center gap-1">
                      Vancouver Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group A Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      All Group A Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Denmark vs Tunisia at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch the 2022 World Cup rematch in beautiful Vancouver
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
