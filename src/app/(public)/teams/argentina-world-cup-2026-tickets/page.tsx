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
  Clock,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Argentina World Cup 2026 Tickets | Defending Champions",
  description:
    "Buy Argentina FIFA World Cup 2026 tickets. See Messi's potential farewell tournament. Group J fixtures, match schedule, key players & ticket prices from $150.",
  keywords: [
    "Argentina World Cup 2026 tickets",
    "Argentina vs Algeria tickets",
    "Argentina vs Austria tickets",
    "Argentina vs Jordan tickets",
    "Messi World Cup 2026",
    "Argentina football tickets",
  ],
}

const teamInfo = {
  name: "Argentina",
  flag: "🇦🇷",
  confederation: "CONMEBOL",
  fifaRanking: 1,
  worldCupTitles: 3,
  lastTitle: 2022,
  group: "J",
  groupOpponents: ["Algeria", "Austria", "Jordan"],
  nickname: "La Albiceleste",
  coach: "Lionel Scaloni",
  captain: "Lionel Messi",
}

const keyPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10, star: true },
  { name: "Julián Álvarez", position: "Forward", club: "Manchester City", number: 9 },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
  { name: "Rodrigo De Paul", position: "Midfielder", club: "Atletico Madrid", number: 7 },
  { name: "Emiliano Martínez", position: "Goalkeeper", club: "Aston Villa", number: 23 },
  { name: "Cristian Romero", position: "Defender", club: "Tottenham", number: 13 },
]

const groupFixtures = [
  {
    match: "Argentina vs Algeria",
    date: "June 14, 2026",
    time: "8:00 PM ET",
    venue: "NRG Stadium",
    city: "Houston",
    slug: "argentina-vs-algeria-world-cup-2026-tickets",
  },
  {
    match: "Argentina vs Austria",
    date: "June 19, 2026",
    time: "5:00 PM ET",
    venue: "Hard Rock Stadium",
    city: "Miami",
    slug: "argentina-vs-austria-world-cup-2026-tickets",
  },
  {
    match: "Argentina vs Jordan",
    date: "June 24, 2026",
    time: "8:00 PM ET",
    venue: "AT&T Stadium",
    city: "Dallas",
    slug: "argentina-vs-jordan-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Champions", location: "Qatar" },
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2014, result: "Runners-up", location: "Brazil" },
  { year: 2010, result: "Quarter-finals", location: "South Africa" },
  { year: 2006, result: "Quarter-finals", location: "Germany" },
  { year: 1986, result: "Champions", location: "Mexico" },
  { year: 1978, result: "Champions", location: "Argentina" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 150, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 180, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 165, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 155, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function ArgentinaTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-400 via-white to-sky-400 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-sky-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-sky-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Argentina</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-500 text-black">DEFENDING CHAMPIONS</Badge>
                <Badge variant="destructive">GROUP J</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    {teamInfo.name}
                  </h1>
                  <p className="text-xl text-slate-600 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-700">
                The defending World Cup champions return seeking back-to-back titles.
                Led by the legendary Lionel Messi, Argentina are among the favorites for 2026.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Argentina Tickets
                </Button>
                <Button size="lg" variant="outline">
                  View Group J Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-sky-600">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sky-600">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sky-600">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sky-600">Group {teamInfo.group}</p>
                  <p className="text-sm text-slate-600">WC 2026 Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Group Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-sky-600" />
                  Group J Match Schedule
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

                <div className="pt-4 border-t">
                  <Link
                    href="/fixtures/group-j-world-cup-2026-tickets"
                    className="text-sky-600 hover:underline text-sm font-medium"
                  >
                    View Full Group J Standings & Schedule →
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Key Players */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-sky-600" />
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
                        <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">
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

            {/* World Cup History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-sky-600" />
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

            {/* Team Info - Comprehensive Article */}
            <Card>
              <CardHeader>
                <CardTitle>Argentina World Cup 2026: Complete Guide to La Albiceleste&apos;s Title Defense</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  The <strong>Argentina national football team</strong> (Spanish: Selección de fútbol de Argentina) enters the <Link href="/fifa-world-cup-2026-tickets" className="text-blue-600 hover:underline">2026 FIFA World Cup</Link> as the defending champions, seeking to become the first team since <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-600 hover:underline">Brazil</Link> (1958, 1962) to win back-to-back World Cup titles. Led by the legendary Lionel Messi in what is expected to be his final World Cup at age 39, Argentina are one of the favorites for the tournament.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">2026 World Cup Prospects</h2>
                <p>
                  Under coach Lionel Scaloni, Argentina has maintained the core squad that delivered their third World Cup title in Qatar 2022. The team&apos;s blend of experience and emerging talent makes them formidable contenders. Key to their success will be the form of Messi, who continues to defy age with his performances at Inter Miami.
                </p>
                <p>
                  The squad depth is impressive, with Julián Álvarez emerging as one of the world&apos;s best strikers at Manchester City, while Enzo Fernández provides world-class creativity from midfield. In goal, Emiliano &quot;Dibu&quot; Martínez remains Argentina&apos;s penalty shootout hero.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">Group J Analysis</h2>
                <p>
                  Argentina has been drawn into <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group J</Link> alongside <Link href="/teams/algeria-world-cup-2026-tickets" className="text-blue-600 hover:underline">Algeria</Link>, <Link href="/teams/austria-world-cup-2026-tickets" className="text-blue-600 hover:underline">Austria</Link>, and <Link href="/teams/jordan-world-cup-2026-tickets" className="text-blue-600 hover:underline">Jordan</Link>. While Argentina are heavy favorites to top the group, each opponent brings unique challenges:
                </p>
                <ul>
                  <li><strong><Link href="/teams/algeria-world-cup-2026-tickets" className="text-blue-600 hover:underline">Algeria</Link></strong> — A passionate North African side with talented players from top European leagues. The Fennec Foxes will be determined to make their mark.</li>
                  <li><strong><Link href="/teams/austria-world-cup-2026-tickets" className="text-blue-600 hover:underline">Austria</Link></strong> — A well-organized European team that reached the Round of 16 at Euro 2024. Their pressing style could trouble any opponent.</li>
                  <li><strong><Link href="/teams/jordan-world-cup-2026-tickets" className="text-blue-600 hover:underline">Jordan</Link></strong> — Making their World Cup debut after reaching the Asian Cup final. They&apos;ll have nothing to lose against the champions.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">Match Venues</h2>
                <p>Argentina&apos;s group stage matches will be played at some of the best venues in the tournament:</p>
                <ul>
                  <li><Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Arrowhead Stadium</Link> (Kansas City) — vs Algeria</li>
                  <li><Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium</Link> (Dallas) — vs Austria</li>
                  <li><Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium</Link> (Dallas) — vs Jordan</li>
                </ul>
                <p>
                  If Argentina tops their group, they would likely play Round of 32 matches in Dallas or Kansas City before potential knockout stage matches at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> (the Final venue) or <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium</Link> (Semifinal venue).
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">CONMEBOL Rivals</h2>
                <p>
                  Argentina&apos;s South American rivals will all be looking to challenge for the title. Watch for potential clashes with:
                </p>
                <ul>
                  <li><Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-600 hover:underline">Brazil</Link> — The 5-time champions and eternal rivals, seeking revenge for 2022</li>
                  <li><Link href="/teams/colombia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Colombia</Link> — Lost the 2024 Copa America final to Argentina</li>
                  <li><Link href="/teams/uruguay-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uruguay</Link> — The 2-time World Cup winners with a talented squad</li>
                  <li><Link href="/teams/ecuador-world-cup-2026-tickets" className="text-blue-600 hover:underline">Ecuador</Link> — Rising South American force</li>
                  <li><Link href="/teams/paraguay-world-cup-2026-tickets" className="text-blue-600 hover:underline">Paraguay</Link> — Traditional rivals in the Río de la Plata derby</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">World Cup History</h2>
                <p>
                  Argentina has won the World Cup three times: 1978 (as hosts), 1986 (led by Diego Maradona), and 2022 (led by Lionel Messi). They have also been runners-up three times (1930, 1990, 2014). The team has reached the final of 6 World Cups, making them one of the most successful nations in tournament history.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">How to Buy Argentina Tickets</h2>
                <p>
                  Tickets for Argentina matches are among the highest-demand in the tournament. We compare prices from Ticketmaster, StubHub, Viagogo, and SeatGeek to help you find the best deals. Group stage tickets start from approximately $150, with knockout stage prices increasing significantly.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Buy Tickets Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-sky-600" />
                  Buy Argentina Tickets
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
                    <span>High demand - Argentina matches sell out fast!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Quick Info */}
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
                  <span className="text-slate-600">Nickname</span>
                  <span className="font-medium">{teamInfo.nickname}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">WC Titles</span>
                  <span className="font-medium">{teamInfo.worldCupTitles} (1978, 1986, 2022)</span>
                </div>
              </CardContent>
            </Card>

            {/* Group J */}
            <Card>
              <CardHeader>
                <CardTitle>Group J Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/argentina-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-sky-50 font-medium">
                  <span>🇦🇷</span> Argentina
                  <Badge className="ml-auto bg-yellow-500 text-xs">Champions</Badge>
                </Link>
                <Link href="/teams/algeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇩🇿</span> Algeria
                </Link>
                <Link href="/teams/austria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇦🇹</span> Austria
                </Link>
                <Link href="/teams/jordan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇯🇴</span> Jordan
                </Link>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card>
              <CardHeader>
                <CardTitle>Related</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/group-j-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50 text-sm">
                  → Group J Full Schedule
                </Link>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50 text-sm">
                  → NRG Stadium (Houston)
                </Link>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50 text-sm">
                  → Hard Rock Stadium (Miami)
                </Link>
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50 text-sm">
                  → AT&T Stadium (Dallas)
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
