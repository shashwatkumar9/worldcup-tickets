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
  title: "Belgium vs Egypt Tickets | World Cup 2026 Group J | Lincoln Financial Field Philadelphia",
  description: "Buy Belgium vs Egypt World Cup 2026 tickets at Lincoln Financial Field in Philadelphia. Secure your seats for this Group J clash between the Red Devils and the Pharaohs. Premium World Cup tickets available.",
  keywords: [
    "Belgium vs Egypt tickets",
    "World Cup 2026 Philadelphia tickets",
    "Lincoln Financial Field World Cup tickets",
    "Belgium World Cup 2026",
    "Egypt World Cup 2026",
    "Group J World Cup tickets",
    "Red Devils World Cup tickets",
    "Pharaohs World Cup tickets",
    "FIFA World Cup tickets Philadelphia",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Belgium vs Egypt | World Cup 2026 Group J Tickets",
    description: "Secure your tickets for Belgium vs Egypt at Lincoln Financial Field in Philadelphia. World Cup 2026 Group J fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Belgium",
    flag: "🇧🇪",
    code: "BEL",
    nickname: "Red Devils",
    fifaRanking: 5,
    group: "J",
  },
  awayTeam: {
    name: "Egypt",
    flag: "🇪🇬",
    code: "EGY",
    nickname: "The Pharaohs",
    fifaRanking: 33,
    group: "J",
  },
  date: "June 17, 2026",
  time: "1:00 PM ET",
  venue: "Lincoln Financial Field",
  city: "Philadelphia, Pennsylvania",
  group: "J",
  matchNumber: 20,
  round: "Group Stage",
  expectedAttendance: "69,000",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 215,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 355,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 315,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 295,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const belgiumPlayers = [
  { name: "Kevin De Bruyne", position: "Midfielder", club: "Manchester City", number: 7 },
  { name: "Romelu Lukaku", position: "Forward", club: "Roma", number: 9 },
  { name: "Jérémy Doku", position: "Winger", club: "Manchester City", number: 11 },
  { name: "Amadou Onana", position: "Midfielder", club: "Everton", number: 8 },
]

const egyptPlayers = [
  { name: "Mohamed Salah", position: "Forward", club: "Liverpool", number: 10 },
  { name: "Omar Marmoush", position: "Forward", club: "Eintracht Frankfurt", number: 7 },
  { name: "Mahmoud Trezeguet", position: "Winger", club: "Trabzonspor", number: 14 },
  { name: "Mohamed Elneny", position: "Midfielder", club: "Arsenal", number: 17 },
]

const headToHead = {
  totalMatches: 3,
  belgiumWins: 2,
  draws: 1,
  egyptWins: 0,
  lastMeeting: "Belgium 3-0 Egypt (2018 Friendly)",
  notableMatch: "Belgium 3-0 Egypt (2018 Pre-World Cup)",
}

export default function BelgiumVsEgyptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-yellow-400 to-red-600 text-gray-900 py-16">
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
              Belgium vs Egypt Tickets
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
            Buy Belgium vs Egypt Tickets
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
                Belgium vs Egypt Match Preview - World Cup 2026 Group J Clash
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 delivers a compelling Group J encounter as Belgium face Egypt at Lincoln Financial Field in Philadelphia. This match brings together two of their continents' most talented nations, with Kevin De Bruyne's creative genius facing Mohamed Salah's explosive attacking threat. Belgium vs Egypt World Cup 2026 tickets offer fans the chance to witness two of the Premier League's biggest stars competing for national glory on football's grandest stage.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">A Battle of Premier League Superstars</h3>
              <p className="leading-relaxed">
                This fixture pits two of English football's most celebrated imports against each other in international competition. Kevin De Bruyne, widely regarded as the world's best creative midfielder, has won multiple Premier League titles with Manchester City and is Belgium's all-time assists leader. Mohamed Salah, Liverpool's Egyptian King, has established himself as one of football's most lethal forwards with his combination of pace, finishing, and work rate. Their individual duel will captivate neutral fans while carrying enormous significance for their respective nations' World Cup ambitions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Lincoln Financial Field - Philadelphia World Cup 2026 Venue</h3>
              <p className="leading-relaxed">
                Lincoln Financial Field, home of the Philadelphia Eagles, provides an electric atmosphere for this Group J clash. The 69,000-seat stadium has hosted numerous international soccer matches and is renowned for its passionate fan atmosphere. Philadelphia's location in the heart of the Northeast corridor makes it accessible to millions of potential fans, while the city's rich sports culture ensures an incredible match-day experience. The stadium's modern amenities and intimate bowl design create an environment where every seat provides an excellent view of the action.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Belgium Squad - Red Devils World Cup 2026</h3>
              <p className="leading-relaxed">
                Belgium enters the 2026 World Cup determined to finally deliver on their golden generation's promise. While some veterans have retired, Kevin De Bruyne remains the creative heartbeat of the team, his passing range and game intelligence still unmatched. Romelu Lukaku continues to prove his quality at the highest level, while Jérémy Doku has emerged as one of Europe's most exciting young wingers at Manchester City. Amadou Onana provides midfield steel and physicality. This Belgian squad combines remaining golden generation quality with hungry young talents eager to establish their own legacy.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Egypt Squad - Pharaohs World Cup 2026</h3>
              <p className="leading-relaxed">
                Egypt arrives at the 2026 World Cup seeking to build on their proud footballing tradition and passionate fan support. Mohamed Salah, at his peak years, leads a squad that has grown around his brilliance. Omar Marmoush has emerged as a genuine star in the Bundesliga, providing dangerous support for Salah's attacking threat. Trezeguet brings experience and width, while Mohamed Elneny provides midfield composure. The Pharaohs' physical style and tactical discipline make them difficult opponents for any team, with Salah's individual brilliance capable of deciding matches single-handedly.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                The creative battle between De Bruyne and Egypt's midfield will be crucial in determining which team controls proceedings. Belgium's ability to find Lukaku in dangerous areas faces Egypt's organized defensive structure. On the counter, Salah's pace and movement will test Belgium's high defensive line. Doku's dribbling ability creates one-on-one opportunities that could unlock Egypt's defense, while Marmoush's energy provides Egypt with counter-attacking thrust. Set pieces will be significant given both teams' aerial threats and quality delivery options.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Belgium vs Egypt Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Belgium vs Egypt tickets at Lincoln Financial Field offer various options for fans. Category 1 premium tickets for prime midfield positions start around $450-550, offering optimal views to appreciate De Bruyne and Salah's brilliance. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $300. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $215. Philadelphia's large sports-loving population ensures strong demand across all categories.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group J World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Belgium vs Egypt result will significantly shape Group J standings. Belgium enters as favorites but Egypt possesses the quality to cause an upset, particularly with Salah capable of producing match-winning moments. A victory for either team would provide crucial momentum for knockout round qualification. The expanded 48-team format means both nations have realistic paths to advancement, making this group stage fixture even more significant.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Philadelphia World Cup 2026</h3>
              <p className="leading-relaxed">
                Philadelphia International Airport (PHL) provides convenient access for international fans. The city's excellent public transportation, including the SEPTA subway and regional rail, offers reliable options for reaching the stadium. Philadelphia's rich American history, world-class museums, and renowned food scene make it an exceptional World Cup destination. The city's affordable accommodation options relative to other Northeast cities provide excellent value for visiting fans.
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
              <CardHeader className="bg-gradient-to-r from-black via-yellow-400 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Belgium Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {belgiumPlayers.map((player) => (
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

            <Card className="border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-red-700 via-white to-black text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-black">
                  {matchInfo.awayTeam.flag} Egypt Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {egyptPlayers.map((player) => (
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
                <TrendingUp className="h-6 w-6 text-red-600" />
                Belgium vs Egypt Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{headToHead.belgiumWins}</p>
                  <p className="text-sm text-gray-600">Belgium Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-600">{headToHead.egyptWins}</p>
                  <p className="text-sm text-gray-600">Egypt Wins</p>
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
                      Capacity: 69,000 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      Location: Philadelphia, Pennsylvania
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Home of Philadelphia Eagles (NFL)
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-red-600" />
                      Renowned for passionate atmosphere
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      Philadelphia Int'l Airport (PHL): 15 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      SEPTA Broad Street Line: Direct access
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets">
                        View Full Stadium Guide <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h4 className="font-semibold text-red-800">Belgium</h4>
                  <p className="text-sm text-gray-600">VRT, RTBF</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Egypt</h4>
                  <p className="text-sm text-gray-600">ON Sport, beIN Sports MENA</p>
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
                    <Link href="/teams/belgium-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇧🇪 Belgium World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/egypt-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      🇪🇬 Egypt World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      Lincoln Financial Field Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/philadelphia-world-cup-2026-guide" className="text-red-600 hover:underline flex items-center gap-1">
                      Philadelphia Travel Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">More Group J Fixtures</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-red-600 hover:underline flex items-center gap-1">
                      All Group J Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Belgium vs Egypt at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch De Bruyne face Salah in this Premier League superstar showdown
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
