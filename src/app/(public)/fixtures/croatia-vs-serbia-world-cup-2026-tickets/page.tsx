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
  title: "Croatia vs Serbia Tickets | World Cup 2026 Group K | Arrowhead Stadium Kansas City",
  description: "Buy Croatia vs Serbia World Cup 2026 tickets at Arrowhead Stadium in Kansas City. Secure your seats for this historic Group K Balkan derby. Premium World Cup tickets available.",
  keywords: [
    "Croatia vs Serbia tickets",
    "World Cup 2026 Kansas City tickets",
    "Arrowhead Stadium World Cup tickets",
    "Croatia World Cup 2026",
    "Serbia World Cup 2026",
    "Group K World Cup tickets",
    "Balkan derby World Cup",
    "Vatreni World Cup tickets",
    "FIFA World Cup tickets Kansas City",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Croatia vs Serbia | World Cup 2026 Group K Tickets",
    description: "Secure your tickets for the historic Croatia vs Serbia Balkan derby at Arrowhead Stadium. World Cup 2026 Group K fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Croatia",
    flag: "🇭🇷",
    code: "CRO",
    nickname: "Vatreni",
    fifaRanking: 9,
    group: "K",
  },
  awayTeam: {
    name: "Serbia",
    flag: "🇷🇸",
    code: "SRB",
    nickname: "The Eagles",
    fifaRanking: 25,
    group: "K",
  },
  date: "June 17, 2026",
  time: "4:00 PM CT",
  venue: "Arrowhead Stadium",
  city: "Kansas City, Missouri",
  group: "K",
  matchNumber: 21,
  round: "Group Stage",
  expectedAttendance: "76,000",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 265,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 425,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 385,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 355,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const croatiaPlayers = [
  { name: "Luka Modrić", position: "Midfielder", club: "Real Madrid", number: 10 },
  { name: "Mateo Kovačić", position: "Midfielder", club: "Manchester City", number: 8 },
  { name: "Joško Gvardiol", position: "Defender", club: "Manchester City", number: 4 },
  { name: "Andrej Kramarić", position: "Forward", club: "Hoffenheim", number: 9 },
]

const serbiaPlayers = [
  { name: "Dušan Vlahović", position: "Forward", club: "Juventus", number: 9 },
  { name: "Aleksandar Mitrović", position: "Forward", club: "Al-Hilal", number: 9 },
  { name: "Sergej Milinković-Savić", position: "Midfielder", club: "Al-Hilal", number: 20 },
  { name: "Filip Kostić", position: "Winger", club: "Juventus", number: 11 },
]

const headToHead = {
  totalMatches: 8,
  croatiaWins: 4,
  draws: 3,
  serbiaWins: 1,
  lastMeeting: "Croatia 2-1 Serbia (1999 Friendly)",
  notableMatch: "First meeting since 1999",
}

export default function CroatiaVsSerbiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-700 text-gray-900 py-16">
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
              Croatia vs Serbia Tickets
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
            Buy Croatia vs Serbia Tickets
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
                Croatia vs Serbia Match Preview - World Cup 2026 Historic Balkan Derby
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 delivers one of the tournament's most historically significant fixtures as Croatia face Serbia at Arrowhead Stadium in Kansas City. This Group K encounter marks the first competitive meeting between these Balkan neighbors in over two decades, adding unprecedented tension and significance to what promises to be a unforgettable spectacle. Croatia vs Serbia World Cup 2026 tickets represent one of the most sought-after items for fans of international football drama.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Historical Significance of the Balkan Derby</h3>
              <p className="leading-relaxed">
                Croatia and Serbia have avoided each other in competitive competition since their last meeting in 1999, with FIFA draw procedures historically keeping them apart due to the political sensitivities surrounding the fixture. The 2026 World Cup's expanded 48-team format made this meeting unavoidable, creating one of the tournament's most anticipated storylines. Both nations share footballing heritage from the Yugoslavia era, with legendary players having represented the unified national team before its dissolution. This first World Cup meeting between the independent nations carries immense symbolic weight.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Arrowhead Stadium - Kansas City World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                Arrowhead Stadium, renowned as one of American sports' loudest venues as home to the Kansas City Chiefs, provides a dramatic setting for this historic fixture. The 76,000-seat stadium's atmospheric design creates an intimidating environment that will amplify the intensity of this Balkan derby. Kansas City's central location in the United States makes it accessible from coast to coast, while the city's passionate sports culture ensures exceptional support for this high-stakes encounter. The stadium's world-class facilities and history of hosting major events make it an ideal stage for such a significant match.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Croatia Squad - Vatreni World Cup 2026</h3>
              <p className="leading-relaxed">
                Croatia arrives at the 2026 World Cup as one of the tournament's most consistent performers, having reached the finals in 2018 and finished third in 2022. The legendary Luka Modrić, now 40, potentially makes his final World Cup appearance as the midfield maestro continues to defy age with his sublime technique and game intelligence. Mateo Kovačić provides the perfect midfield partner, while Joško Gvardiol has emerged as one of world football's premier defenders at Manchester City. This Croatian squad blends the experienced core of their golden generation with talented newcomers ready to continue the nation's remarkable World Cup legacy.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Serbia Squad - Eagles World Cup 2026</h3>
              <p className="leading-relaxed">
                Serbia enters the 2026 World Cup with their strongest squad in recent memory. Dušan Vlahović has established himself as one of Europe's elite strikers at Juventus, combining physical presence with clinical finishing. Aleksandar Mitrović's proven international goal-scoring record provides experienced support, while Sergej Milinković-Savić's midfield quality controls proceedings. Filip Kostić adds dangerous delivery from wide areas. This Serbian generation possesses the talent to make a significant impact at the World Cup, with victory over Croatia representing the ultimate statement of their quality.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The midfield battle between Modrić and Milinković-Savić represents a clash of exceptional technical quality and will likely determine the match's outcome. Croatia's ability to control possession faces Serbia's physical pressing and direct attacking threat. Gvardiol's defensive quality will be tested by Vlahović and Mitrović's combined aerial and ground threat. Wide areas will be crucial, with Kostić's delivery creating danger while Croatia looks to exploit space on transitions. The emotional intensity ensures set pieces and individual moments of brilliance could prove decisive.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Croatia vs Serbia Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Given the historic nature of this fixture, Croatia vs Serbia tickets command premium prices. Category 1 premium tickets for prime midfield positions start around $600-800, offering optimal views of this momentous occasion. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $450. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $265. The unique nature of this fixture ensures exceptional demand from both diaspora communities and neutral fans.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group K World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Croatia vs Serbia result will significantly shape Group K standings and both nations' knockout round aspirations. Croatia's superior World Cup pedigree makes them slight favorites, but Serbia's quality ensures genuine uncertainty. A victory for either team would provide crucial momentum while likely dealing a psychological blow to the opponent. The expanded format means both nations should advance, but this fixture will likely determine group positioning and subsequent round of 32 opponents.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Kansas City World Cup 2026</h3>
              <p className="leading-relaxed">
                Kansas City International Airport (MCI) provides convenient access for fans traveling to this historic fixture. The city's renowned barbecue scene offers exceptional pre and post-match dining options, while the rejuvenated downtown area provides entertainment and accommodation options. Kansas City's central location makes it accessible from across the United States, while the passionate local sports culture ensures excellent fan experiences. The stadium's location provides ample parking and transportation options for match day.
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
              <CardHeader className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Croatia Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {croatiaPlayers.map((player) => (
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
              <CardHeader className="bg-gradient-to-r from-red-700 via-blue-600 to-white text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Serbia Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {serbiaPlayers.map((player) => (
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
          </div>
        </section>

        {/* Head to Head */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-red-600" />
                Croatia vs Serbia Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.croatiaWins}</p>
                  <p className="text-sm text-gray-600">Croatia Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{headToHead.serbiaWins}</p>
                  <p className="text-sm text-gray-600">Serbia Wins</p>
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
                      Capacity: 76,000 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      Location: Kansas City, Missouri
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Home of Kansas City Chiefs (NFL)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-red-600" />
                      One of America's loudest stadiums
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Kansas City Int'l Airport (MCI): 25 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Central US location - accessible nationwide
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets">
                        View Full Arrowhead Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">United States</h4>
                  <p className="text-sm text-gray-600">FOX, FS1, Telemundo</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Croatia</h4>
                  <p className="text-sm text-gray-600">HRT, Nova TV</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Serbia</h4>
                  <p className="text-sm text-gray-600">RTS, Arena Sport</p>
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
                    <Link href="/teams/croatia-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇭🇷 Croatia World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/serbia-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇷🇸 Serbia World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      Arrowhead Stadium Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/kansas-city-world-cup-2026-guide" className="text-red-600 hover:underline flex items-center gap-1">
                      Kansas City Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group K Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-k-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      All Group K Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss the Historic Croatia vs Serbia Match
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Witness the first competitive Balkan derby in over two decades
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
