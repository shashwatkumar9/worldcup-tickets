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
  title: "Germany World Cup 2026 Tickets | 4x World Champions",
  description:
    "Buy Germany FIFA World Cup 2026 tickets. Watch Die Mannschaft compete in Group E. Musiala, key players & ticket prices from $130.",
  keywords: [
    "Germany World Cup 2026 tickets",
    "Germany vs Ivory Coast tickets",
    "Germany vs Ecuador tickets",
    "Musiala World Cup 2026",
    "Die Mannschaft tickets",
    "Germany football tickets",
  ],
}

const teamInfo = {
  name: "Germany",
  flag: "🇩🇪",
  confederation: "UEFA",
  fifaRanking: 3,
  worldCupTitles: 4,
  lastTitle: 2014,
  group: "E",
  groupOpponents: ["Curacao", "Ivory Coast", "Ecuador"],
  nickname: "Die Mannschaft",
  coach: "Julian Nagelsmann",
  captain: "Joshua Kimmich",
}

const keyPlayers = [
  { name: "Jamal Musiala", position: "Midfielder", club: "Bayern Munich", number: 10, star: true },
  { name: "Florian Wirtz", position: "Midfielder", club: "Bayer Leverkusen", number: 7 },
  { name: "Kai Havertz", position: "Forward", club: "Arsenal", number: 9 },
  { name: "Joshua Kimmich", position: "Midfielder", club: "Bayern Munich", number: 6 },
  { name: "Antonio Rüdiger", position: "Defender", club: "Real Madrid", number: 2 },
  { name: "Manuel Neuer", position: "Goalkeeper", club: "Bayern Munich", number: 1 },
]

const groupFixtures = [
  {
    match: "Germany vs Curacao",
    date: "June 12, 2026",
    time: "5:00 PM ET",
    venue: "Arrowhead Stadium",
    city: "Kansas City",
    slug: "germany-vs-curacao-world-cup-2026-tickets",
  },
  {
    match: "Germany vs Ivory Coast",
    date: "June 17, 2026",
    time: "8:00 PM ET",
    venue: "NRG Stadium",
    city: "Houston",
    slug: "germany-vs-ivory-coast-world-cup-2026-tickets",
  },
  {
    match: "Germany vs Ecuador",
    date: "June 22, 2026",
    time: "5:00 PM ET",
    venue: "AT&T Stadium",
    city: "Dallas",
    slug: "germany-vs-ecuador-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 2018, result: "Group Stage", location: "Russia" },
  { year: 2014, result: "Champions", location: "Brazil" },
  { year: 2010, result: "Third Place", location: "South Africa" },
  { year: 2006, result: "Third Place", location: "Germany" },
  { year: 2002, result: "Runners-up", location: "Korea/Japan" },
  { year: 1990, result: "Champions", location: "Italy" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 130, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 165, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 150, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 140, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function GermanyTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-red-600 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-100">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-white">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Germany</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-black text-white">4X CHAMPIONS</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP E</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-white">
                    Germany World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-100 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-100">
                Four-time World Cup champions seeking redemption. With Jamal Musiala and Florian Wirtz
                leading a new generation, Germany returns with renewed ambition.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-slate-100">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Germany Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Group E Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-black">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last WC Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">Group {teamInfo.group}</p>
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
                  <Calendar className="h-5 w-5 text-black" />
                  Group E Match Schedule
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
                  <p className="font-semibold text-yellow-800">Featured Match: Germany vs Ecuador</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    Group E finale at AT&T Stadium! Germany seeks to top the group with style.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-black" />
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
                        <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
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
                  <Trophy className="h-5 w-5 text-black" />
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
                          : entry.result === "Runners-up"
                          ? "bg-slate-100"
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
                            : entry.result === "Runners-up"
                            ? "bg-slate-400"
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
              <h2 className="text-2xl font-bold text-slate-900">⚽ Germany World Cup 2026: Die Mannschaft&apos;s Quest for Five</h2>
              <p>
                The 4-time World Cup champions return with renewed ambition under Julian Nagelsmann's dynamic leadership. With exciting young talents like Jamal Musiala and Florian Wirtz, Germany enters <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026</Link> determined to reclaim their place at the summit.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⭐ Stars to Watch</h3>
              <p>
                <strong>Jamal Musiala</strong> - At 23 years old, Musiala represents the future of German football. His silky dribbling, creative vision, and eye for goal make him virtually impossible to defend. His partnership with Wirtz gives Die Mannschaft a level of creativity that previous German teams lacked.
              </p>
              <p>
                <strong>Florian Wirtz</strong> - The Leverkusen sensation has emerged as one of European football's brightest stars. His technical ability, tactical intelligence, and maturity make him indispensable to Germany's attacking play providing tactical flexibility that Nagelsmann values highly.
              </p>
              <p>
                <strong>Joshua Kimmich</strong> - As captain, Kimmich brings leadership, versatility, and world-class quality. His passing range, work rate, and competitive mentality embody German football's traditional values providing the foundation for Germany's creative players to flourish.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏆 Germany's Illustrious History</h3>
              <p>
                Germany's World Cup history is among the most illustrious in football. With four World Cup titles (1954, 1974, 1990, 2014) and eight final appearances, Die Mannschaft represents consistency and excellence. The 2014 triumph in Brazil remains fresh—Germany's 7-1 semi-final demolition of Brazil showcased German football at its devastating best.
              </p>
              <p>
                However, recent tournaments have been challenging. The 2018 and 2022 group stage exits shocked the football world. These disappointments led to significant changes bringing Julian Nagelsmann in as manager and ushering in a new generation. The hunger to restore Germany's reputation drives this current squad.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏟️ Where Germany Will Play</h3>
              <p>
                Germany's journey will take them across major American stadiums where large German-American communities will provide significant support. Potential venues include AT&T Stadium in Dallas (capacity 80,000), Mercedes-Benz Stadium in Atlanta, and MetLife Stadium in New York/New Jersey.
              </p>
              <p>
                Should Germany progress as expected, knockout stage matches could take place at iconic venues across the United States. The final at MetLife Stadium represents the ultimate goal—the opportunity to lift the World Cup trophy for the fifth time.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎯 Tournament Predictions</h3>
              <p>
                Germany enters FIFA World Cup 2026 as one of the favorites. The combination of exciting young talent, experienced leaders, tactical sophistication under Nagelsmann, and Germany's World Cup pedigree creates realistic expectations of a deep tournament run.
              </p>
              <p>
                The knockout stages will test Germany against elite opponents. Potential matchups against <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link>, <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, or <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link> would recreate classic European rivalries. Germany's tournament experience gives them an edge in high-pressure situations.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎫 How to Get Tickets</h3>
              <p>
                Securing Germany World Cup 2026 tickets requires early planning. Die Mannschaft's global fanbase and significant German-American population ensure extremely high demand. FIFA manages official ticketing with sales beginning approximately one year before the tournament.
              </p>
              <p>
                The German Football Association (DFB) offers official travel packages including match tickets, accommodation, and transportation. Alternative options include FIFA's official resale platform and corporate hospitality packages.
              </p>

              <div className="bg-slate-50 border-l-4 border-black p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">❓ Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">When do Germany World Cup 2026 tickets go on sale?</h3>
                    <p className="text-slate-700">
                      FIFA typically begins ticket sales approximately one year before the tournament. The first sales phase operates as a random selection draw for popular matches including all Germany fixtures. Register early on FIFA's official ticketing website.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">How much will Germany tickets cost?</h3>
                    <p className="text-slate-700">
                      Germany group stage matches will likely range from $170-$950 depending on category and opponent. Knockout stage matches featuring Germany command premium prices with final matches potentially exceeding $2,000 for premium locations.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Where will Germany play their matches?</h3>
                    <p className="text-slate-700">
                      Germany's specific venues depend on the group draw and progression. As a top-seeded team, they'll play at major stadiums including potential venues like AT&T Stadium Dallas, Mercedes-Benz Stadium Atlanta, and MetLife Stadium New York/New Jersey.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Who are Germany's key players?</h3>
                    <p className="text-slate-700">
                      Germany's star players include creative maestro Jamal Musiala, Leverkusen sensation Florian Wirtz, captain Joshua Kimmich, versatile attacker Kai Havertz, and defensive rock Antonio Rüdiger. This blend of exciting young talent and experienced leaders creates a balanced squad.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">What are Germany's chances of winning?</h3>
                    <p className="text-slate-700">
                      Germany enters the tournament as one of the favorites. With exciting young talents, tactical sophistication under Julian Nagelsmann, experienced leaders, and Germany's unmatched World Cup pedigree, Die Mannschaft has a realistic chance of winning their fifth World Cup title.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 bg-slate-100 p-4 rounded-lg">
                Don't miss Germany's quest for World Cup glory. Explore tickets for other top teams: <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>, <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link>, <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, and <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link>.
              </p>
            </article>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-black" />
                  Buy Germany Tickets
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
                    <span>4x champions = premium demand!</span>
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
                  <span className="text-slate-600">WC Titles</span>
                  <span className="font-medium">4 🏆</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group E Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/germany-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-slate-900 text-white font-medium">
                  <span>🇩🇪</span> Germany
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">4x Champs</Badge>
                </Link>
                <Link href="/teams/curacao-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇼</span> Curacao
                </Link>
                <Link href="/teams/ivory-coast-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇮</span> Ivory Coast
                </Link>
                <Link href="/teams/ecuador-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇪🇨</span> Ecuador
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
