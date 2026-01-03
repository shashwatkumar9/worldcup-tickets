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
  title: "Brazil World Cup 2026 Tickets | 5x World Champions",
  description:
    "Buy Brazil FIFA World Cup 2026 tickets. Watch the 5-time champions compete in Group C. Match schedule, key players, Vinicius Jr & ticket prices from $140.",
  keywords: [
    "Brazil World Cup 2026 tickets",
    "Brazil vs Morocco tickets",
    "Brazil vs Haiti tickets",
    "Brazil vs Scotland tickets",
    "Vinicius Jr World Cup",
    "Brazil football tickets",
  ],
}

const teamInfo = {
  name: "Brazil",
  flag: "🇧🇷",
  confederation: "CONMEBOL",
  fifaRanking: 5,
  worldCupTitles: 5,
  lastTitle: 2002,
  group: "C",
  groupOpponents: ["Morocco", "Haiti", "Scotland"],
  nickname: "Seleção",
  coach: "Dorival Júnior",
  captain: "Marquinhos",
}

const keyPlayers = [
  { name: "Vinícius Júnior", position: "Forward", club: "Real Madrid", number: 7, star: true },
  { name: "Rodrygo", position: "Forward", club: "Real Madrid", number: 11 },
  { name: "Endrick", position: "Forward", club: "Real Madrid", number: 9 },
  { name: "Bruno Guimarães", position: "Midfielder", club: "Newcastle", number: 5 },
  { name: "Alisson", position: "Goalkeeper", club: "Liverpool", number: 1 },
  { name: "Marquinhos", position: "Defender", club: "PSG", number: 4 },
]

const groupFixtures = [
  {
    match: "Brazil vs Morocco",
    date: "June 13, 2026",
    time: "8:00 PM ET",
    venue: "Lincoln Financial Field",
    city: "Philadelphia",
    slug: "brazil-vs-morocco-world-cup-2026-tickets",
  },
  {
    match: "Brazil vs Haiti",
    date: "June 18, 2026",
    time: "5:00 PM ET",
    venue: "Gillette Stadium",
    city: "Boston",
    slug: "brazil-vs-haiti-world-cup-2026-tickets",
  },
  {
    match: "Brazil vs Scotland",
    date: "June 23, 2026",
    time: "8:00 PM ET",
    venue: "MetLife Stadium",
    city: "New York/NJ",
    slug: "brazil-vs-scotland-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Quarter-finals", location: "Qatar" },
  { year: 2018, result: "Quarter-finals", location: "Russia" },
  { year: 2014, result: "Fourth Place", location: "Brazil" },
  { year: 2002, result: "Champions", location: "Korea/Japan" },
  { year: 1998, result: "Runners-up", location: "France" },
  { year: 1994, result: "Champions", location: "USA" },
  { year: 1970, result: "Champions", location: "Mexico" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 140, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 175, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 160, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 150, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function BrazilTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 via-yellow-400 to-green-500 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <Link href="/" className="hover:text-green-800">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-green-800">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-green-800">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Brazil</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-500 text-black">5X WORLD CHAMPIONS</Badge>
                <Badge variant="outline" className="border-green-700 text-green-800">GROUP C</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    {teamInfo.name}
                  </h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-800">
                The most successful nation in World Cup history with 5 titles. Brazil returns
                seeking their first trophy since 2002, led by a new generation of stars.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Brazil Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-green-700 text-green-800 hover:bg-green-50">
                  View Group C Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-600">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">Group {teamInfo.group}</p>
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
                  <Calendar className="h-5 w-5 text-green-600" />
                  Group C Match Schedule
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
                    href="/fixtures/group-c-world-cup-2026-tickets"
                    className="text-green-600 hover:underline text-sm font-medium"
                  >
                    View Full Group C Standings & Schedule →
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Key Players */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
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
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
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
                  <Trophy className="h-5 w-5 text-green-600" />
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
                <CardTitle>Brazil World Cup 2026: Complete Guide to the Seleção&apos;s Quest for a Sixth Title</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  The <strong>Brazil national football team</strong> (Portuguese: Seleção Brasileira de Futebol) enters the <Link href="/fifa-world-cup-2026-tickets" className="text-blue-600 hover:underline">2026 FIFA World Cup</Link> as the most successful nation in tournament history with five titles (1958, 1962, 1970, 1994, 2002). After two consecutive quarter-final exits in 2018 and 2022, Brazil is determined to end their 24-year wait for a sixth World Cup trophy.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">2026 World Cup Prospects</h2>
                <p>
                  Brazil boasts one of the most exciting young squads in world football. The &quot;Real Madrid Connection&quot; — Vinícius Júnior, Rodrygo, and teenage sensation Endrick — leads the attack with devastating pace and technical brilliance. Vinícius Jr., the Ballon d&apos;Or contender, has emerged as Brazil&apos;s talisman and biggest hope for glory.
                </p>
                <p>
                  Under coach Dorival Júnior, Brazil has returned to their traditional &quot;Jogo Bonito&quot; (Beautiful Game) philosophy while maintaining tactical discipline. The squad depth is exceptional, with world-class options in every position.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">Group C Analysis</h2>
                <p>
                  Brazil has been drawn into <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group C</Link> alongside <Link href="/teams/morocco-world-cup-2026-tickets" className="text-blue-600 hover:underline">Morocco</Link>, <Link href="/teams/haiti-world-cup-2026-tickets" className="text-blue-600 hover:underline">Haiti</Link>, and <Link href="/teams/scotland-world-cup-2026-tickets" className="text-blue-600 hover:underline">Scotland</Link>. While Brazil are favorites, each opponent presents unique challenges:
                </p>
                <ul>
                  <li><strong><Link href="/teams/morocco-world-cup-2026-tickets" className="text-blue-600 hover:underline">Morocco</Link></strong> — The 2022 semifinalists who shocked the world in Qatar. Their organized defense and counter-attacking prowess make this match a blockbuster. This could be the match of the group stage.</li>
                  <li><strong><Link href="/teams/haiti-world-cup-2026-tickets" className="text-blue-600 hover:underline">Haiti</Link></strong> — CONCACAF qualifiers making their second World Cup appearance. They bring Caribbean flair and passionate support.</li>
                  <li><strong><Link href="/teams/scotland-world-cup-2026-tickets" className="text-blue-600 hover:underline">Scotland</Link></strong> — A physical, well-organized European side. Their fans create an incredible atmosphere and they&apos;ll be up for this challenge.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">Match Venues</h2>
                <p>Brazil&apos;s group stage matches are scheduled at premier East Coast venues:</p>
                <ul>
                  <li><Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">Lincoln Financial Field</Link> (Philadelphia) — vs Morocco (the match of the group stage!)</li>
                  <li><Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Gillette Stadium</Link> (Boston) — vs Haiti</li>
                  <li><Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> (New York/NJ) — vs Scotland (at the venue hosting the Final!)</li>
                </ul>
                <p>
                  Playing at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> in the group stage could give Brazil valuable experience at the Final venue.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">CONMEBOL Rivals &amp; Potential Clashes</h2>
                <p>
                  Brazil&apos;s South American rivals are all dangerous opponents. The classic matchups fans dream of:
                </p>
                <ul>
                  <li><Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina</Link> — The eternal superclássico. Brazil will want revenge for Argentina&apos;s 2022 triumph</li>
                  <li><Link href="/teams/colombia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Colombia</Link> — Always a fierce battle when these South American giants meet</li>
                  <li><Link href="/teams/uruguay-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uruguay</Link> — Historic rivalry dating back to the 1950 World Cup final heartbreak</li>
                  <li><Link href="/teams/ecuador-world-cup-2026-tickets" className="text-blue-600 hover:underline">Ecuador</Link> — Rising South American force that has troubled Brazil in qualifiers</li>
                  <li><Link href="/teams/paraguay-world-cup-2026-tickets" className="text-blue-600 hover:underline">Paraguay</Link> — Always a physical, competitive affair</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-3">World Cup History</h2>
                <p>
                  Brazil is the only nation to have won 5 World Cups and the only team to have played in every World Cup since 1930. Their golden generation of 1970 — featuring Pelé, Jairzinho, and Rivelino — is considered the greatest team ever assembled. The 2002 triumph, led by Ronaldo, Ronaldinho, and Rivaldo, marked their last title.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-3">How to Buy Brazil Tickets</h2>
                <p>
                  Brazil matches are among the highest-demand fixtures at any World Cup. We compare prices from Ticketmaster, StubHub, Viagogo, and SeatGeek. Group stage tickets start from approximately $140, with the Brazil vs Morocco clash commanding premium prices. Book early as Brazil matches sell out fast!
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
                  <Ticket className="h-5 w-5 text-green-600" />
                  Buy Brazil Tickets
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
                    <span>High demand - Brazil matches sell fast!</span>
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
                  <span className="font-medium">5 (Most Ever)</span>
                </div>
              </CardContent>
            </Card>

            {/* Group C */}
            <Card>
              <CardHeader>
                <CardTitle>Group C Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-green-50 font-medium">
                  <span>🇧🇷</span> Brazil
                  <Badge className="ml-auto bg-yellow-500 text-xs">5x Champs</Badge>
                </Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇲🇦</span> Morocco
                </Link>
                <Link href="/teams/haiti-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇭🇹</span> Haiti
                </Link>
                <Link href="/teams/scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Scotland
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
