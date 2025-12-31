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
  title: "Portugal vs Saudi Arabia Tickets | World Cup 2026 Group I | NRG Stadium Houston",
  description: "Buy Portugal vs Saudi Arabia World Cup 2026 tickets at NRG Stadium in Houston. Secure your seats for this Group I clash featuring Cristiano Ronaldo against the Saudi Pro League stars. Premium World Cup tickets available.",
  keywords: [
    "Portugal vs Saudi Arabia tickets",
    "World Cup 2026 Houston tickets",
    "NRG Stadium World Cup tickets",
    "Portugal World Cup 2026",
    "Saudi Arabia World Cup 2026",
    "Group I World Cup tickets",
    "Cristiano Ronaldo World Cup tickets",
    "FIFA World Cup tickets Houston",
    "Portugal Saudi match tickets",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Portugal vs Saudi Arabia | World Cup 2026 Group I Tickets",
    description: "Secure your tickets for Portugal vs Saudi Arabia at NRG Stadium in Houston. World Cup 2026 Group I fixture featuring Cristiano Ronaldo.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Portugal",
    flag: "🇵🇹",
    code: "POR",
    nickname: "A Seleção",
    fifaRanking: 6,
    group: "I",
  },
  awayTeam: {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    code: "KSA",
    nickname: "The Green Falcons",
    fifaRanking: 56,
    group: "I",
  },
  date: "June 16, 2026",
  time: "7:00 PM CT",
  venue: "NRG Stadium",
  city: "Houston, Texas",
  group: "I",
  matchNumber: 19,
  round: "Group Stage",
  expectedAttendance: "72,000",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 275,
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

const portugalPlayers = [
  { name: "Cristiano Ronaldo", position: "Forward", club: "Al-Nassr", number: 7 },
  { name: "Bruno Fernandes", position: "Midfielder", club: "Manchester United", number: 8 },
  { name: "Rafael Leão", position: "Winger", club: "AC Milan", number: 17 },
  { name: "Rúben Dias", position: "Defender", club: "Manchester City", number: 4 },
]

const saudiPlayers = [
  { name: "Salem Al-Dawsari", position: "Winger", club: "Al-Hilal", number: 10 },
  { name: "Firas Al-Buraikan", position: "Forward", club: "Al-Ahli", number: 15 },
  { name: "Mohammed Kanno", position: "Midfielder", club: "Al-Hilal", number: 8 },
  { name: "Yasser Al-Shahrani", position: "Defender", club: "Al-Hilal", number: 13 },
]

const headToHead = {
  totalMatches: 4,
  portugalWins: 3,
  draws: 1,
  saudiWins: 0,
  lastMeeting: "Portugal 3-0 Saudi Arabia (2023 Friendly)",
  notableMatch: "Saudi Arabia 0-3 Portugal (2023 Riyadh Friendly)",
}

export default function PortugalVsSaudiArabiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-red-600 to-green-600 text-gray-900 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-white/90 text-green-700 mb-4">
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
              Portugal vs Saudi Arabia Tickets
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
            <Ticket className="inline-block mr-2 h-6 w-6 text-green-600" />
            Buy Portugal vs Saudi Arabia Tickets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {affiliateLinks.map((link) => (
              <Card key={link.partner} className="hover:shadow-lg transition-shadow border-2 hover:border-green-300">
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
                    <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
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
                <Trophy className="h-6 w-6 text-green-600" />
                Portugal vs Saudi Arabia Match Preview - World Cup 2026 Group I Clash
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 presents a fascinating Group I encounter as Portugal face Saudi Arabia at NRG Stadium in Houston. This fixture carries unique significance as Cristiano Ronaldo, now plying his trade in the Saudi Pro League, faces his adopted football nation on the world's biggest stage. Portugal vs Saudi Arabia World Cup 2026 tickets offer fans the chance to witness one of football's greatest ever players in what could be his final World Cup appearance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The Ronaldo Connection</h3>
              <p className="leading-relaxed">
                Cristiano Ronaldo's move to Al-Nassr in 2023 created an unprecedented link between Portugal and Saudi Arabian football. The five-time Ballon d'Or winner has become an ambassador for Saudi football, breaking records and elevating the Saudi Pro League's profile while maintaining his international career with Portugal. This World Cup match presents a unique scenario where Ronaldo faces many players he competes against weekly in the Saudi Pro League, adding narrative intrigue to an already compelling fixture.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">NRG Stadium - Houston World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                NRG Stadium in Houston provides an ideal setting for this Group I clash. Home to the Houston Texans and host of multiple Super Bowls, this 72,000-seat venue features a retractable roof that ensures comfortable playing conditions regardless of Texas's summer heat. Houston's diverse population includes significant Portuguese and Middle Eastern communities, ensuring passionate support for both nations. The stadium's world-class facilities and atmospheric design create an exceptional World Cup experience.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Portugal Squad - A Seleção World Cup 2026</h3>
              <p className="leading-relaxed">
                Portugal arrives at the 2026 World Cup with a squad combining Ronaldo's legendary presence with an exceptional new generation. At 41, Ronaldo continues to defy age with his remarkable conditioning and goal-scoring instincts, potentially making this his record-extending sixth World Cup appearance. Bruno Fernandes provides creative genius from midfield, while Rafael Leão has emerged as one of world football's most exciting wingers at AC Milan. Rúben Dias anchors a defense that has become one of Europe's most reliable. This Portuguese squad possesses the quality to challenge for the title while honoring their captain's final World Cup campaign.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Saudi Arabia Squad - Green Falcons World Cup 2026</h3>
              <p className="leading-relaxed">
                Saudi Arabia enters the 2026 World Cup riding the momentum of their historic 2022 World Cup victory over Argentina—one of the biggest upsets in tournament history. Salem Al-Dawsari, the hero of that victory with his spectacular winning goal, remains the team's talisman and most dangerous attacking threat. The investment in Saudi football through the Saudi Pro League has elevated the national team's profile and facilities. Players like Mohammed Kanno and Firas Al-Buraikan benefit from competing against world-class internationals weekly, raising their level for the World Cup stage.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The familiarity between Ronaldo and the Saudi defenders creates fascinating tactical intrigue—they know each other's games intimately from Saudi Pro League encounters. Bruno Fernandes's ability to find Ronaldo with pinpoint delivery will test Saudi's defensive organization. In midfield, Mohammed Kanno's energy and ball-winning ability faces Portugal's technically superior central players. Saudi Arabia's counter-attacking threat, demonstrated so effectively against Argentina in 2022, could punish Portugal if they commit too many players forward. Set pieces will be crucial given Ronaldo's aerial dominance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Portugal vs Saudi Arabia Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Portugal vs Saudi Arabia tickets at NRG Stadium are in high demand given Ronaldo's presence. Category 1 premium tickets for prime midfield positions start around $550-700, offering the best views of Ronaldo's potential final World Cup moments. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $400. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $275. The Houston market's size and strong Latino community ensure significant demand across all categories.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group I World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Portugal vs Saudi Arabia result will significantly impact Group I standings. Portugal enters as heavy favorites but must be wary of Saudi Arabia's giant-killing capabilities demonstrated at Qatar 2022. Saudi Arabia will view this match as an opportunity to prove their Argentina victory was no fluke while also experiencing the unique scenario of facing their league's biggest star. The expanded 48-team format means both nations have realistic paths to the knockout rounds, making every group stage point valuable.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Houston World Cup 2026</h3>
              <p className="leading-relaxed">
                George Bush Intercontinental Airport (IAH) serves as the primary gateway for international fans traveling to Houston. The city's diverse culinary scene, from world-class Tex-Mex to international cuisine, provides excellent pre and post-match dining options. Houston's extensive hotel infrastructure accommodates visitors across all budgets. The MetroRail provides public transport options, while the stadium's ample parking accommodates those driving. Houston's Space Center, Museum District, and vibrant cultural scene offer plenty of activities for World Cup visitors.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Players */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Star className="inline-block mr-2 h-6 w-6 text-green-600" />
            Key Players to Watch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200">
              <CardHeader className="bg-gradient-to-r from-green-600 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Portugal Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {portugalPlayers.map((player) => (
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

            <Card className="border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-700 to-green-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Saudi Arabia Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {saudiPlayers.map((player) => (
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
                <TrendingUp className="h-6 w-6 text-green-600" />
                Portugal vs Saudi Arabia Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.portugalWins}</p>
                  <p className="text-sm text-gray-600">Portugal Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">{headToHead.saudiWins}</p>
                  <p className="text-sm text-gray-600">Saudi Arabia Wins</p>
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
                <MapPin className="h-6 w-6 text-green-600" />
                Venue: {matchInfo.venue}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Stadium Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      Capacity: 72,000 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      Location: Houston, Texas
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-green-600" />
                      Home of Houston Texans (NFL)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-green-600" />
                      Retractable roof stadium
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-green-600" />
                      George Bush Int'l Airport (IAH): 30 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-green-600" />
                      William P. Hobby Airport (HOU): 20 mins
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                      <Link href="/venues/nrg-stadium-world-cup-2026-tickets">
                        View Full NRG Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                <Tv className="h-6 w-6 text-green-600" />
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
                  <h4 className="font-semibold text-green-800">Portugal</h4>
                  <p className="text-sm text-gray-600">RTP, SIC, Sport TV</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold text-emerald-800">Saudi Arabia</h4>
                  <p className="text-sm text-gray-600">SSC, beIN Sports MENA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Globe className="inline-block mr-2 h-6 w-6 text-green-600" />
            Related World Cup 2026 Pages
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Team Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/teams/portugal-world-cup-2026-tickets" className="text-green-600 hover:underline flex items-center gap-1">
                      🇵🇹 Portugal World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-green-600 hover:underline flex items-center gap-1">
                      🇸🇦 Saudi Arabia World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-green-600 hover:underline flex items-center gap-1">
                      NRG Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/houston-world-cup-2026-guide" className="text-green-600 hover:underline flex items-center gap-1">
                      Houston Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group I Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-green-600 hover:underline flex items-center gap-1">
                      All Group I Matches <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/fixtures" className="text-green-600 hover:underline flex items-center gap-1">
                      Complete Fixture List <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Portugal vs Saudi Arabia at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch Cristiano Ronaldo face the Green Falcons in what could be his final World Cup
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {affiliateLinks.slice(0, 2).map((link) => (
              <Button key={link.partner} asChild size="lg" variant="secondary" className="text-green-700">
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
