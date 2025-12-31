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
  title: "Mexico vs Jamaica Tickets | World Cup 2026 Group A | Estadio Azteca Mexico City",
  description: "Buy Mexico vs Jamaica World Cup 2026 tickets at Estadio Azteca in Mexico City. Secure your seats for this Group A CONCACAF derby between El Tri and the Reggae Boyz. Premium World Cup tickets available.",
  keywords: [
    "Mexico vs Jamaica tickets",
    "World Cup 2026 Mexico City tickets",
    "Estadio Azteca World Cup tickets",
    "Mexico World Cup 2026",
    "Jamaica World Cup 2026",
    "Group A World Cup tickets",
    "El Tri World Cup tickets",
    "Reggae Boyz World Cup tickets",
    "CONCACAF World Cup derby",
    "World Cup 2026 tickets"
  ],
  openGraph: {
    title: "Mexico vs Jamaica | World Cup 2026 Group A Tickets",
    description: "Secure your tickets for the CONCACAF derby between Mexico and Jamaica at Estadio Azteca. World Cup 2026 Group A fixture.",
    type: "website",
  },
}

const matchInfo = {
  homeTeam: {
    name: "Mexico",
    flag: "🇲🇽",
    code: "MEX",
    nickname: "El Tri",
    fifaRanking: 16,
    group: "A",
  },
  awayTeam: {
    name: "Jamaica",
    flag: "🇯🇲",
    code: "JAM",
    nickname: "Reggae Boyz",
    fifaRanking: 59,
    group: "A",
  },
  date: "June 21, 2026",
  time: "6:00 PM CT",
  venue: "Estadio Azteca",
  city: "Mexico City, Mexico",
  group: "A",
  matchNumber: 29,
  round: "Group Stage",
  expectedAttendance: "87,000",
}

const affiliateLinks = [
  {
    partner: "Ticketmaster",
    price_from: 165,
    logo: "🎫",
    url: "#",
    rating: "Official FIFA Partner",
    description: "Official FIFA ticketing partner with guaranteed authentic tickets"
  },
  {
    partner: "StubHub",
    price_from: 275,
    logo: "🎟️",
    url: "#",
    rating: "Verified Reseller",
    description: "Fan-to-fan marketplace with buyer guarantee protection"
  },
  {
    partner: "Viagogo",
    price_from: 245,
    logo: "🌐",
    url: "#",
    rating: "Global Marketplace",
    description: "International ticket marketplace with secure transactions"
  },
  {
    partner: "SeatGeek",
    price_from: 225,
    logo: "💺",
    url: "#",
    rating: "Best Value Deals",
    description: "Deal score technology finds you the best ticket values"
  },
]

const mexicoPlayers = [
  { name: "Guillermo Ochoa", position: "Goalkeeper", club: "Salernitana", number: 13 },
  { name: "Hirving Lozano", position: "Winger", club: "PSV", number: 22 },
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4 },
  { name: "César Montes", position: "Defender", club: "Almería", number: 3 },
]

const jamaicaPlayers = [
  { name: "Leon Bailey", position: "Winger", club: "Aston Villa", number: 10 },
  { name: "Michail Antonio", position: "Forward", club: "West Ham", number: 9 },
  { name: "Bobby De Cordova-Reid", position: "Midfielder", club: "Fulham", number: 14 },
  { name: "Ethan Pinnock", position: "Defender", club: "Brentford", number: 5 },
]

const headToHead = {
  totalMatches: 30,
  mexicoWins: 18,
  draws: 8,
  jamaicaWins: 4,
  lastMeeting: "Mexico 3-0 Jamaica (2023 Gold Cup)",
  notableMatch: "Jamaica 1-0 Mexico (2017 Gold Cup Semi)",
}

export default function MexicoVsJamaicaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-white to-yellow-400 text-gray-900 py-16">
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
              Mexico vs Jamaica Tickets
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
            Buy Mexico vs Jamaica Tickets
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
                Mexico vs Jamaica Match Preview - World Cup 2026 CONCACAF Derby
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The FIFA World Cup 2026 brings a familiar CONCACAF rivalry to football's most historic stadium as Mexico face Jamaica at Estadio Azteca in Mexico City. This Group A encounter pits the tournament co-hosts against the Caribbean nation's talented squad in front of what promises to be one of the World Cup's most electric atmospheres. Mexico vs Jamaica World Cup 2026 tickets offer fans the chance to witness El Tri perform on home soil at the legendary venue that has hosted two World Cup Finals.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">CONCACAF Rivalry History</h3>
              <p className="leading-relaxed">
                Mexico and Jamaica have a rich history in CONCACAF competition, with the rivalry producing memorable moments across Gold Cup and World Cup qualifying campaigns. While Mexico has dominated historically, Jamaica has proven capable of producing upsets—most notably their stunning 1-0 victory over Mexico in the 2017 Gold Cup semi-finals. The Reggae Boyz's growing contingent of Premier League talent has made them increasingly competitive against the regional giants. Playing at the Azteca adds another layer of challenge for Jamaica, but their physical style and counter-attacking ability make them dangerous opponents regardless of venue.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Estadio Azteca - Football's Temple</h3>
              <p className="leading-relaxed">
                Estadio Azteca stands as perhaps the most iconic football stadium in the world. The only venue to host two World Cup Finals (1970 and 1986), it has witnessed football's greatest moments including Pelé's third World Cup triumph and Maradona's legendary quarter-final performance against England. The 87,000-seat coliseum creates an intimidating atmosphere for visiting teams, with Mexican fans renowned for their passion and the famous "ola" wave that originated here. The stadium's 7,200-foot elevation adds a physical challenge that home teams learn to exploit. For Mexico, playing at the Azteca during their home World Cup represents the ultimate stage.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Mexico Squad - El Tri World Cup 2026</h3>
              <p className="leading-relaxed">
                Mexico enters their home World Cup with enormous pressure and expectations. Guillermo Ochoa, the veteran goalkeeper who has become synonymous with Mexican World Cup history, potentially makes his fifth tournament appearance. Hirving Lozano brings pace and direct running to the attack, while Edson Álvarez has established himself as a top-level midfielder at West Ham. The challenge for Mexico has been breaking through the round of 16 barrier—they've been eliminated at that stage in their last seven World Cup appearances. Playing at home provides an unprecedented opportunity to finally end that streak.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Jamaica Squad - Reggae Boyz World Cup 2026</h3>
              <p className="leading-relaxed">
                Jamaica arrives at the 2026 World Cup with their most talented squad ever assembled. Leon Bailey has established himself as a genuine Premier League star at Aston Villa, his pace and dribbling ability creating constant danger. Michail Antonio's decision to represent Jamaica added proven top-flight quality, while Bobby De Cordova-Reid brings Premier League experience from Fulham. Ethan Pinnock anchors the defense from Brentford. This Jamaican generation combines Caribbean flair with English football's physical intensity, creating a unique and dangerous combination.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Tactical Battles to Watch</h3>
              <p className="leading-relaxed">
                Bailey's pace and trickery will test Mexico's defensive organization, particularly on the counter-attack. The midfield battle between Álvarez and Jamaica's physical central players will determine which team controls tempo. Lozano's movement faces Pinnock's Premier League-tested defending. The altitude at Estadio Azteca favors Mexico, but Jamaica's athletic players may cope better than European opponents. Set pieces will be significant given Jamaica's aerial advantage through Antonio and Pinnock. Expect Mexico to dominate possession while Jamaica looks to disrupt and counter through Bailey's explosive pace.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Mexico vs Jamaica Ticket Prices and Categories</h3>
              <p className="leading-relaxed">
                Mexico vs Jamaica tickets at Estadio Azteca offer various options for this historic fixture. Category 1 premium tickets for prime midfield positions start around $350-450, offering optimal views at football's most legendary venue. Category 2 tickets provide excellent sightlines from elevated sideline positions, with prices beginning at approximately $250. Category 3 tickets offer solid views from the ends and corners for more budget-conscious fans, starting around $165. Mexican home matches at the Azteca during the World Cup will sell quickly given the passionate local fanbase.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Group A World Cup 2026 Implications</h3>
              <p className="leading-relaxed">
                The Mexico vs Jamaica result will significantly impact Group A standings. Mexico enters as heavy favorites, particularly at home, but Jamaica possesses the quality to cause an upset. A convincing Mexican victory would build momentum for their knockout round aspirations, while Jamaica winning would send shockwaves through the tournament. The expanded 48-team format provides both nations realistic paths to advancement, making this fixture crucial for determining final group positions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Travel Information for Mexico City World Cup 2026</h3>
              <p className="leading-relaxed">
                Mexico City International Airport (MEX) provides extensive connectivity for international fans. The city's Metro system offers affordable transportation throughout the metropolis, with the Azteca accessible via multiple lines. Mexico City's rich cultural heritage—from ancient Aztec ruins at Teotihuacán to world-class museums and incredible street food—makes it an exceptional World Cup destination. Visitors should allow time to acclimatize to the 7,350-foot altitude. The city's vibrant neighborhoods, excellent restaurants, and legendary nightlife ensure fans enjoy much more than just football.
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
            <Card className="border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-600 via-white to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.homeTeam.flag} Mexico Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {mexicoPlayers.map((player) => (
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

            <Card className="border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-black via-yellow-400 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  {matchInfo.awayTeam.flag} Jamaica Key Players
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {jamaicaPlayers.map((player) => (
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
                <TrendingUp className="h-6 w-6 text-green-600" />
                Mexico vs Jamaica Head-to-Head Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-800">{headToHead.totalMatches}</p>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">{headToHead.mexicoWins}</p>
                  <p className="text-sm text-gray-600">Mexico Wins</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">{headToHead.draws}</p>
                  <p className="text-sm text-gray-600">Draws</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-600">{headToHead.jamaicaWins}</p>
                  <p className="text-sm text-gray-600">Jamaica Wins</p>
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
                      Capacity: 87,000 for FIFA events
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      Location: Mexico City, Mexico
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-green-600" />
                      Only venue to host 2 World Cup Finals
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-green-600" />
                      Elevation: 7,200 feet (2,200m)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-green-600" />
                      Mexico City Int'l Airport (MEX): 40 mins
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-green-600" />
                      Metro Line 2: Tasqueña to Estadio Azteca
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
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
                <Tv className="h-6 w-6 text-green-600" />
                Broadcast Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Mexico</h4>
                  <p className="text-sm text-gray-600">Televisa, TV Azteca, TUDN</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">USA</h4>
                  <p className="text-sm text-gray-600">FOX, FS1, Telemundo</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Jamaica</h4>
                  <p className="text-sm text-gray-600">CVM, TVJ, Flow Sports</p>
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
                    <Link href="/teams/mexico-world-cup-2026-tickets" className="text-green-600 hover:underline flex items-center gap-1">
                      🇲🇽 Mexico World Cup 2026 <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams/jamaica-world-cup-2026-tickets" className="text-green-600 hover:underline flex items-center gap-1">
                      🇯🇲 Jamaica World Cup 2026 <ArrowRight className="h-3 w-3" />
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
                    <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-600 hover:underline flex items-center gap-1">
                      Estadio Azteca Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel/mexico-city-world-cup-2026-guide" className="text-green-600 hover:underline flex items-center gap-1">
                      Mexico City Travel Guide <ArrowRight className="h-3 w-3" />
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
                    <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-green-600 hover:underline flex items-center gap-1">
                      All Group A Matches <ArrowRight className="h-3 w-3" />
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
        <section className="text-center py-12 bg-gradient-to-r from-green-600 to-red-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Mexico vs Jamaica at World Cup 2026
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Watch El Tri play at home in the legendary Azteca
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
