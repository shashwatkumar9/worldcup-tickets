import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Ticket,
  ExternalLink,
  ChevronRight,
  Star,
  Users,
  Trophy,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Spain World Cup 2026 Tickets | Euro 2024 Champions",
  description:
    "Buy Spain FIFA World Cup 2026 tickets. Watch La Roja in Group H. Yamal, Pedri, match schedule & ticket prices from $135.",
  keywords: [
    "Spain World Cup 2026 tickets",
    "Spain vs Uruguay tickets",
    "Spain vs Saudi Arabia tickets",
    "La Roja World Cup",
    "Lamine Yamal World Cup",
    "Spain football tickets",
  ],
}

const teamInfo = {
  name: "Spain",
  flag: "🇪🇸",
  confederation: "UEFA",
  fifaRanking: 3,
  worldCupTitles: 1,
  lastTitle: 2010,
  group: "H",
  groupOpponents: ["Cape Verde", "Saudi Arabia", "Uruguay"],
  nickname: "La Roja",
  coach: "Luis de la Fuente",
  captain: "Álvaro Morata",
}

const keyPlayers = [
  { name: "Lamine Yamal", position: "Forward", club: "Barcelona", number: 19, star: true },
  { name: "Pedri", position: "Midfielder", club: "Barcelona", number: 8 },
  { name: "Rodri", position: "Midfielder", club: "Manchester City", number: 16 },
  { name: "Dani Olmo", position: "Midfielder", club: "Barcelona", number: 10 },
  { name: "Nico Williams", position: "Forward", club: "Athletic Bilbao", number: 11 },
  { name: "Unai Simón", position: "Goalkeeper", club: "Athletic Bilbao", number: 1 },
]

const groupFixtures = [
  {
    match: "Spain vs Cape Verde",
    date: "June 13, 2026",
    time: "2:00 PM ET",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    slug: "spain-vs-cape-verde-world-cup-2026-tickets",
  },
  {
    match: "Spain vs Saudi Arabia",
    date: "June 18, 2026",
    time: "5:00 PM ET",
    venue: "Hard Rock Stadium",
    city: "Miami",
    slug: "spain-vs-saudi-arabia-world-cup-2026-tickets",
  },
  {
    match: "Spain vs Uruguay",
    date: "June 23, 2026",
    time: "8:00 PM ET",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    slug: "spain-vs-uruguay-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Round of 16", location: "Qatar" },
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2014, result: "Group Stage", location: "Brazil" },
  { year: 2010, result: "Champions", location: "South Africa" },
  { year: 2006, result: "Round of 16", location: "Germany" },
  { year: 2002, result: "Quarter-finals", location: "Korea/Japan" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 135, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 170, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 155, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 145, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function SpainTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-100">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-white">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Spain</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-400 text-black">EURO 2024 CHAMPIONS</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP H</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-white">
                    Spain World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-100 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-100">
                The European Champions and masters of possession football. Spain&apos;s exciting
                young generation led by teenager Lamine Yamal are the team to watch in 2026.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Spain Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Group H Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-red-600">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last WC Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">Group {teamInfo.group}</p>
                  <p className="text-sm text-slate-600">WC 2026 Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  Group H Match Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-slate-900">{fixture.date}</p>
                          <p className="text-xs text-slate-500">{fixture.time}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{fixture.match}</p>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <MapPin className="h-3 w-3" />
                            {fixture.venue}, {fixture.city}
                          </div>
                        </div>
                      </div>
                      <Button size="sm">
                        Get Tickets
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                ))}

                <div className="pt-4 border-t bg-yellow-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-yellow-800">Featured Match: Spain vs Uruguay</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    A clash of two World Cup winners! High demand expected for this Group H showdown at SoFi Stadium.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" />
                  Key Players to Watch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div
                      key={player.name}
                      className={`p-4 rounded-lg border ${
                        player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                          {player.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-900">{player.name}</p>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position}</p>
                          <p className="text-xs text-slate-400">{player.club}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-red-600" />
                  World Cup History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        entry.result === "Champions"
                          ? "bg-yellow-50 border border-yellow-200"
                          : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge
                        className={
                          entry.result === "Champions"
                            ? "bg-yellow-500"
                            : "bg-slate-200 text-slate-700"
                        }
                      >
                        {entry.result === "Champions" && "🏆 "}
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">⚽ Spain World Cup 2026: La Roja&apos;s New Golden Generation</h2>
              <p>
                The Euro 2024 champions arrive in North America with a dazzling new generation led by teenage sensation Lamine Yamal. Spain's trademark possession football combined with explosive young talent makes them favorites for <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⭐ Stars to Watch</h3>
              <p>
                <strong>Lamine Yamal</strong> - At just 18 years old, Yamal has established himself as one of football's brightest stars. His Euro 2024 performances announced a generational talent combining breathtaking dribbling, creative vision, and composure beyond his years.
              </p>
              <p>
                <strong>Pedri</strong> - Represents the perfect evolution of Spanish midfield play. Like Xavi and Iniesta before him, Pedri controls games through intelligent positioning, precise passing, and technical excellence.
              </p>
              <p>
                <strong>Rodri</strong> - Manchester City's Rodri has emerged as the world's premier defensive midfielder. His role in City's success and Spain's Euro 2024 triumph showcased his complete skillset providing the defensive foundation for Spain's creative players.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏆 Spain's 2010 World Cup Glory</h3>
              <p>
                Spain's World Cup triumph in 2010 represented the culmination of a golden era. After years of underachievement, La Roja finally delivered in South Africa. Andrés Iniesta's extra-time goal against the Netherlands secured Spain's first World Cup trophy completing an unprecedented treble of Euro 2008, World Cup 2010, and Euro 2012.
              </p>
              <p>
                That 2010 team revolutionized football with their tiki-taka style—mesmerizing possession football that suffocated opponents. The Euro 2024 triumph signals Spain's return to the pinnacle. The 2026 World Cup offers the opportunity to join the elite group of nations who have won multiple World Cup titles.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏟️ Where Spain Will Play</h3>
              <p>
                Spain's journey will take place across premier North American stadiums with significant support from large Hispanic populations. La Roja is expected to play group stage matches in venues like Hard Rock Stadium in Miami, SoFi Stadium in Los Angeles, and AT&T Stadium in Dallas—cities where Spanish-speaking fans will create electric atmospheres.
              </p>
              <p>
                Should Spain progress as expected, knockout stage matches could take place at iconic venues across the United States, Canada, and Mexico. The final at MetLife Stadium represents Spain's ultimate goal—the opportunity to lift the World Cup trophy for the second time.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎯 Tournament Predictions</h3>
              <p>
                Spain enters FIFA World Cup 2026 among the top favorites alongside <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>, <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link>, and <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>. Spain's Euro 2024 triumph combined with continued development of their young stars justifies this status.
              </p>
              <p>
                The group stage should present manageable challenges for Spain's quality. Quarter-finals and semi-finals will test Spain against elite opponents. Potential matchups against <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link>, Portugal, or Netherlands would recreate classic European rivalries on the World Cup stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎫 How to Get Tickets</h3>
              <p>
                Securing Spain World Cup 2026 tickets requires early action. Demand for La Roja matches will be extremely high especially in cities with large Spanish-speaking populations. FIFA manages official ticketing with sales beginning approximately one year before the tournament.
              </p>
              <p>
                The Royal Spanish Football Federation (RFEF) offers official travel packages including match tickets, accommodation, and transportation. Alternative options include FIFA's official resale platform and corporate hospitality packages.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">❓ Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="border-b border-red-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">When do Spain World Cup 2026 tickets go on sale?</h3>
                    <p className="text-slate-700">
                      FIFA typically begins ticket sales approximately one year before the tournament. The first sales phase operates as a random selection draw for popular matches including Spain fixtures. Register early on FIFA's official ticketing website.
                    </p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">How much will Spain tickets cost?</h3>
                    <p className="text-slate-700">
                      Spain group stage matches will likely range from $180-$1,000 depending on category and venue. Matches in high-demand venues like Miami or against strong opponents command premium prices.
                    </p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Where will Spain play their matches?</h3>
                    <p className="text-slate-700">
                      Spain's specific venues depend on the group draw and progression. As a top-seeded team, they'll play at major stadiums including potential venues like Hard Rock Stadium Miami, SoFi Stadium Los Angeles, and AT&T Stadium Dallas.
                    </p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Who are Spain's key players?</h3>
                    <p className="text-slate-700">
                      Spain's star players include teenage sensation Lamine Yamal, midfield maestro Pedri, defensive anchor Rodri, explosive winger Nico Williams, and versatile attacker Dani Olmo. This blend of youth and experience creates one of the most exciting squads in world football.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">What are Spain's chances of winning?</h3>
                    <p className="text-slate-700">
                      Spain enters the tournament as one of the favorites. As Euro 2024 champions with a talented young squad, exceptional midfield control, and proven tournament experience, La Roja has a realistic chance of winning their second World Cup title.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 bg-slate-100 p-4 rounded-lg">
                Don't miss Spain's quest for World Cup glory. Explore tickets for other top teams: <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>, <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link>, <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, and <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link>.
              </p>
            </article>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-600" />
                  Buy Spain Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Compare prices from trusted ticket partners
                </p>

                {affiliateLinks.map((link) => (
                  <div
                    key={link.partner}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div>
                        <p className="font-medium text-slate-900">{link.partner}</p>
                        <p className="text-sm text-green-600">From ${link.price_from}</p>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Buy
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-yellow-600 text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>Euro champs = high demand!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Confederation</span>
                  <span className="font-medium">{teamInfo.confederation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">FIFA Ranking</span>
                  <span className="font-medium">#{teamInfo.fifaRanking}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Coach</span>
                  <span className="font-medium">{teamInfo.coach}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Captain</span>
                  <span className="font-medium">{teamInfo.captain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Recent Trophy</span>
                  <span className="font-medium">Euro 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group H Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/spain-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium">
                  <span>🇪🇸</span> Spain
                  <Badge className="ml-auto bg-yellow-500 text-xs">Euro Champs</Badge>
                </Link>
                <Link href="/teams/cape-verde-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇻</span> Cape Verde
                </Link>
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇸🇦</span> Saudi Arabia
                </Link>
                <Link href="/teams/uruguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇺🇾</span> Uruguay
                  <Badge className="ml-auto bg-slate-400 text-xs">2x Champs</Badge>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
