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
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "USA World Cup 2026 Tickets | Host Nation",
  description:
    "Buy USA FIFA World Cup 2026 tickets. Watch the USMNT compete on home soil in Group D. Pulisic, Reyna, match schedule & ticket prices from $125.",
  keywords: [
    "USA World Cup 2026 tickets",
    "USMNT World Cup tickets",
    "USA vs Paraguay tickets",
    "Christian Pulisic World Cup",
    "USA football tickets",
    "Team USA World Cup",
  ],
}

const teamInfo = {
  name: "United States",
  flag: "🇺🇸",
  confederation: "CONCACAF",
  fifaRanking: 11,
  worldCupTitles: 0,
  bestFinish: "Third Place (1930)",
  group: "D",
  groupOpponents: ["Paraguay", "Australia", "TBD (UEFA Playoff)"],
  nickname: "USMNT / Yanks",
  coach: "Mauricio Pochettino",
  captain: "Christian Pulisic",
}

const keyPlayers = [
  { name: "Christian Pulisic", position: "Forward", club: "AC Milan", number: 10, star: true },
  { name: "Gio Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7 },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
  { name: "Tyler Adams", position: "Midfielder", club: "Bournemouth", number: 4 },
  { name: "Sergiño Dest", position: "Defender", club: "PSV", number: 2 },
  { name: "Matt Turner", position: "Goalkeeper", club: "Crystal Palace", number: 1 },
]

const groupFixtures = [
  {
    match: "USA vs Paraguay",
    date: "June 12, 2026",
    time: "8:00 PM ET",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    slug: "usa-vs-paraguay-world-cup-2026-tickets",
  },
  {
    match: "USA vs Australia",
    date: "June 17, 2026",
    time: "5:00 PM ET",
    venue: "Levi's Stadium",
    city: "San Francisco",
    slug: "usa-vs-australia-world-cup-2026-tickets",
  },
  {
    match: "USA vs TBD (UEFA)",
    date: "June 22, 2026",
    time: "8:00 PM ET",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    slug: "usa-group-match-3-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Round of 16", location: "Qatar" },
  { year: 2014, result: "Round of 16", location: "Brazil" },
  { year: 2010, result: "Round of 16", location: "South Africa" },
  { year: 2002, result: "Quarter-finals", location: "Korea/Japan" },
  { year: 1994, result: "Round of 16", location: "USA" },
  { year: 1930, result: "Third Place", location: "Uruguay" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 125, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 200, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 175, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 160, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function USATicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-blue-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-blue-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">USA</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-blue-700 text-white flex items-center gap-1">
                  <Home className="h-3 w-3" /> HOST NATION
                </Badge>
                <Badge variant="outline" className="border-red-700 text-red-800">GROUP D</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    USA World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname} • Host Nation</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-800">
                The host nation returns to the World Cup on home soil! With passionate home
                support across 11 cities, the USMNT will have the backing of a nation.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy USA Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-red-700 text-red-800">
                  View Group D Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-700">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-700">11</p>
                  <p className="text-sm text-slate-600">Host Venues</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-700">1930</p>
                  <p className="text-sm text-slate-600">Best Finish (3rd)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-700">Group {teamInfo.group}</p>
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

            {/* Host Nation Banner */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Home Advantage</h3>
                    <p className="text-sm text-blue-700">
                      USA will play all group matches in the Western US with massive home support.
                      Expect electric atmospheres at SoFi Stadium and Levi&apos;s Stadium!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-700" />
                  Group D Match Schedule
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-700" />
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
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
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
                  <Trophy className="h-5 w-5 text-blue-700" />
                  World Cup History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        entry.result === "Third Place"
                          ? "bg-yellow-50 border border-yellow-200"
                          : entry.location === "USA"
                          ? "bg-blue-50 border border-blue-200"
                          : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                        {entry.location === "USA" && (
                          <Badge variant="outline" className="text-xs">Host</Badge>
                        )}
                      </div>
                      <Badge
                        className={
                          entry.result === "Third Place"
                            ? "bg-yellow-500"
                            : entry.result === "Quarter-finals"
                            ? "bg-blue-500"
                            : "bg-slate-200 text-slate-700"
                        }
                      >
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">USA World Cup 2026 Tickets: The Golden Generation&apos;s Moment of Destiny</h2>
              <p>
                In the 92-year history of the FIFA World Cup, no moment has carried more weight for American soccer
                than 2026. For the first time since 1994, the United States will host the world&apos;s greatest
                sporting event - but this time, they do so with the most talented squad in their history. Christian
                Pulisic, Weston McKennie, Gio Reyna, and company have spent their careers in Europe&apos;s top leagues,
                preparing for this defining moment on home soil. Secure your <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Tickets</Link> now to witness history.
              </p>
              <p>
                The pressure is immense. Host nations carry the weight of expectation - South Korea reached the
                semi-finals in 2002, Germany the semis in 2006, Brazil the semis in 2014. American fans will
                expect similar heroics at <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">SoFi Stadium in Los Angeles</Link> and
                <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Levi&apos;s Stadium in San Francisco</Link>, where
                the USMNT will play their <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group D</Link> matches. The opening match on June 12, 2026, at SoFi Stadium will be a defining moment for American soccer.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group D Analysis: Navigable but Dangerous</h3>
              <p>
                The USA received a manageable <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group D</Link> draw featuring <Link href="/teams/paraguay-world-cup-2026-tickets" className="text-blue-700 hover:underline">Paraguay World Cup 2026 Tickets</Link>,
                <Link href="/teams/australia-world-cup-2026-tickets" className="text-blue-700 hover:underline">Australia World Cup 2026 Tickets</Link>, and a UEFA playoff winner.
                The <Link href="/fixtures/usa-vs-paraguay-world-cup-2026-tickets" className="text-blue-700 hover:underline">opening match against Paraguay</Link> at SoFi Stadium will set the tone - the South Americans are
                physical and organized, a perfect test of the USMNT&apos;s credentials. Australia, who pushed
                <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link> hard in the 2022
                <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link>, cannot be underestimated.
              </p>
              <p>
                The USA must avoid complacency in Group D. While other groups like <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link> (featuring <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link> and <Link href="/teams/morocco-world-cup-2026-tickets" className="text-blue-700 hover:underline">Morocco</Link>) and <Link href="/fixtures/group-e-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group E</Link> (with <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link>) appear more difficult, advancing from any World Cup group requires maximum focus. The <Link href="/fixtures/usa-vs-australia-world-cup-2026-tickets" className="text-blue-700 hover:underline">second match against Australia</Link> at Levi&apos;s Stadium will be crucial for securing knockout stage qualification.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Pulisic&apos;s Prime: The Captain Cometh</h3>
              <p>
                Christian Pulisic will be 27 during the 2026 World Cup - the perfect age for a creative forward.
                His move to AC Milan reinvigorated his career, and he enters 2026 as one of Serie A&apos;s most
                dangerous attackers. The Hershey, Pennsylvania native carries the hopes of 330 million Americans
                on his shoulders, and his performances in the biggest moments suggest he&apos;s ready for the burden.
              </p>
              <p>
                Supporting Pulisic is a midfield built for European competition. Weston McKennie brings Juventus
                steel and aerial prowess, while Gio Reyna&apos;s creativity provides the spark that unlocks defenses.
                Tyler Adams, the former captain, adds the tactical discipline that gives others freedom to attack. This core of European-based stars gives the USA a tactical sophistication that previous American teams lacked.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Knockout Stage Scenarios: Road to the Final</h3>
              <p>
                If the USA tops Group D, they&apos;ll enter the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> with momentum and favorable matchups. Potential <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link> opponents could include teams from <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group A</Link> (featuring co-host <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico</Link>) or <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link> teams. A deep run could see USA playing <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> at venues like <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Arrowhead Stadium in Kansas City</Link> or <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Gillette Stadium in Boston</Link>.
              </p>
              <p>
                Should the USA reach the <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Semi-Finals</Link>, matches at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium in Dallas</Link> or <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> await. The ultimate dream? Playing in the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final Tickets</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium in New York/New Jersey</Link> on July 19, 2026, before 82,500 fans.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">CONCACAF Neighbors: The Tres Naciones</h3>
              <p>
                The USA co-hosts alongside <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico World Cup 2026 Tickets</Link> and
                <Link href="/teams/canada-world-cup-2026-tickets" className="text-blue-700 hover:underline">Canada World Cup 2026 Tickets</Link>. A potential knockout
                stage clash with Mexico would be the most anticipated match in CONCACAF history - the fierce
                rivalry elevated to World Cup stakes on American soil. The <Link href="/fixtures/usa-vs-mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA vs Mexico</Link> fixture has defined CONCACAF football for decades. Mexico opens the tournament at
                <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-blue-700 hover:underline">Estadio Azteca World Cup 2026 Tickets</Link> on June 11, while
                Canada hosts matches at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field in Toronto</Link> and <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-700 hover:underline">BC Place in Vancouver</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Global Ambitions: Facing Football Royalty</h3>
              <p>
                Should the USA advance deep in the tournament, clashes with European and South American giants await. Potential matchups
                against <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England World Cup 2026 Tickets</Link> would
                reprise the 2022 group stage draw, while <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany World Cup 2026 Tickets</Link>,
                <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France World Cup 2026 Tickets</Link>, <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil World Cup 2026 Tickets</Link>, and defending champions <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina World Cup 2026 Tickets</Link> represent
                the caliber of opposition that must be overcome to write history. Other European powerhouses like <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-700 hover:underline">Netherlands</Link>, <Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-700 hover:underline">Portugal</Link>, <Link href="/teams/belgium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Belgium</Link>, and <Link href="/teams/croatia-world-cup-2026-tickets" className="text-blue-700 hover:underline">Croatia</Link> will also be formidable obstacles.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">All 16 US Host Cities: Coast to Coast Support</h3>
              <p>
                The USA will benefit from home support across 11 venues in cities spanning the country. From <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">SoFi Stadium in Los Angeles</Link> to <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium in New York/New Jersey</Link>, American fans will create electric atmospheres. Other key US venues include <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium in Dallas</Link>, <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link>, <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Hard Rock Stadium in Miami</Link>, <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">NRG Stadium in Houston</Link>, <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lincoln Financial Field in Philadelphia</Link>, <Link href="/venues/lumen-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lumen Field in Seattle</Link>, and <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Arrowhead Stadium in Kansas City</Link>.
              </p>
              <p>
                Plan your USA match trip with our comprehensive city guides: <Link href="/travel/los-angeles-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Los Angeles City Guide</Link>, <Link href="/travel/new-york-world-cup-2026-city-guide" className="text-blue-700 hover:underline">New York City Guide</Link>, <Link href="/travel/dallas-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Dallas City Guide</Link>, <Link href="/travel/atlanta-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Atlanta City Guide</Link>, and <Link href="/travel/miami-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Miami City Guide</Link> for accommodation, dining, and local attractions.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">American Soccer Culture: A Nation United</h3>
              <p>
                The 2026 World Cup arrives at the perfect moment for American soccer. MLS has matured into a
                serious league, youth development has improved dramatically, and a generation of fans who grew
                up with the sport are now adults ready to support their team. From coast to coast, from the
                American Outlaws supporters&apos; groups to casual fans discovering the sport, the USMNT will have
                the backing of an entire nation. The tournament will feature matches across all 12 groups (<Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group A</Link> through <Link href="/fixtures/group-l-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group L</Link>), providing American fans with unprecedented access to global football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">USA Ticket Buying Guide: Secure Your Seats</h3>
              <p>
                USA World Cup 2026 tickets will be among the most sought-after of the tournament. As the host nation with 330 million potential fans, demand will be extreme. Official FIFA ticket sales typically begin 8-12 months before the tournament through a lottery system. Expect USA group-stage tickets to range from $150-$800 depending on category and venue. <Link href="/fixtures/usa-vs-mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA vs Mexico tickets</Link>, if they meet in the knockout rounds, could reach $1,000+ on the secondary market.
              </p>
              <p>
                For guaranteed access, consider team-specific packages that include all three USA group matches at <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">SoFi Stadium</Link> and <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Levi&apos;s Stadium</Link>. If the USA advances to the knockout rounds, you&apos;ll want to secure tickets early for potential matches at iconic venues like <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link>, which hosts the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final Tickets</Link>.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions - USA World Cup 2026 Tickets</h2>

                <div className="space-y-4">
                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: When and where does the USA play their first match at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: The USA opens their World Cup 2026 campaign on June 12, 2026, at <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">SoFi Stadium in Los Angeles</Link> against <Link href="/teams/paraguay-world-cup-2026-tickets" className="text-blue-700 hover:underline">Paraguay</Link>. Kickoff is scheduled for 8:00 PM ET. The USMNT then faces <Link href="/teams/australia-world-cup-2026-tickets" className="text-blue-700 hover:underline">Australia</Link> on June 17 at <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Levi&apos;s Stadium in San Francisco</Link>, before concluding <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group D</Link> on June 22 back at SoFi Stadium.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How much do USA World Cup 2026 tickets cost?</h4>
                    <p className="text-slate-700 text-sm">A: USA group-stage tickets typically range from $150-$800 depending on seating category and venue. Category 1 (premium) seats at <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">SoFi Stadium</Link> will cost $600-$800, while Category 3-4 tickets start around $150-$250. If the USA reaches the <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link>, expect tickets from $400-$1,500. <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Semi-Finals</Link> tickets could reach $800-$3,000+.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What is Group D at World Cup 2026 and who are USA&apos;s opponents?</h4>
                    <p className="text-slate-700 text-sm">A: The USA is in <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group D</Link> alongside <Link href="/teams/paraguay-world-cup-2026-tickets" className="text-blue-700 hover:underline">Paraguay</Link>, <Link href="/teams/australia-world-cup-2026-tickets" className="text-blue-700 hover:underline">Australia</Link>, and a UEFA playoff qualifier. While Group D is considered navigable, teams like Australia (who reached the Round of 16 in 2022) and Paraguay (historically strong in Copa America) pose genuine challenges.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Where is the World Cup 2026 Final and could the USA play in it?</h4>
                    <p className="text-slate-700 text-sm">A: The <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final</Link> will be held at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium in New York/New Jersey</Link> on July 19, 2026. While the USA reaching the Final would be historic, they&apos;d need to overcome teams like <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>, <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link>, <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, and <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link>. Home advantage and the Golden Generation make it possible.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Will USA play Mexico at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: The USA and <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico</Link> are in different groups (USA in <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group D</Link>, Mexico in <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group A</Link>), so they cannot meet in the group stage. However, if both teams advance, a <Link href="/fixtures/usa-vs-mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA vs Mexico</Link> knockout clash is possible, potentially in the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link>, <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link>, or <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> depending on group finishes.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Who are the key players for USA at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Captain Christian Pulisic (AC Milan) leads the USMNT as their most dangerous attacker. The midfield features Weston McKennie (Juventus), Gio Reyna (Borussia Dortmund), and Tyler Adams (Bournemouth) - all playing at top European clubs. This \"Golden Generation\" represents the most talented American squad ever assembled, with experience in the Champions League and Europe&apos;s top five leagues.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What venues will host USA matches in the knockout rounds?</h4>
                    <p className="text-slate-700 text-sm">A: If the USA advances, <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> and <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link> matches could be at venues like <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium (Dallas)</Link>, <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">NRG Stadium (Houston)</Link>, or <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Hard Rock Stadium (Miami)</Link>. <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> will be at <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">SoFi Stadium</Link>, <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Gillette Stadium (Boston)</Link>, or <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Arrowhead Stadium (Kansas City)</Link>.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How do I buy official USA World Cup 2026 tickets?</h4>
                    <p className="text-slate-700 text-sm">A: Official <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 tickets</Link> are sold through FIFA.com in phases starting late 2025. Phase 1 uses a random selection lottery for high-demand matches like USA games. Phase 2 is first-come, first-served in spring 2026. Create your FIFA account early and apply for USA team-specific packages to follow the USMNT through <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group D</Link> and potentially beyond.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What is the USA&apos;s best World Cup finish and can they improve in 2026?</h4>
                    <p className="text-slate-700 text-sm">A: The USA&apos;s best World Cup finish was third place at the inaugural 1930 tournament in Uruguay. In the modern era, they reached the Quarter-Finals in 2002 (Korea/Japan). With home advantage, the Golden Generation, and improved tactical sophistication under coach Mauricio Pochettino, surpassing the 2002 Quarter-Final appearance is realistic. Reaching the <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Semi-Finals</Link> would be historic.</p>
                  </div>

                  <div className="pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Which other top teams will be at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: The tournament features football royalty including defending champions <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link>, five-time winners <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>, 2022 runners-up <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, and powerhouses <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link>, <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link>, <Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-700 hover:underline">Portugal</Link>, <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-700 hover:underline">Netherlands</Link>, and <Link href="/teams/belgium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Belgium</Link>. The USA must navigate this elite field to reach the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final</Link>.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Match Venues Section */}
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-700" />USA Match Venues</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <Link href="/venues/sofi-stadium-world-cup-2026" className="p-4 rounded-lg border hover:bg-blue-50 transition-colors">
                    <p className="font-semibold text-slate-900">SoFi Stadium</p>
                    <p className="text-sm text-slate-500">Los Angeles, USA</p>
                    <p className="text-xs text-blue-700 mt-1">Match 1 vs Paraguay & Match 3</p>
                  </Link>
                  <Link href="/venues/levis-stadium-world-cup-2026" className="p-4 rounded-lg border hover:bg-blue-50 transition-colors">
                    <p className="font-semibold text-slate-900">Levi&apos;s Stadium</p>
                    <p className="text-sm text-slate-500">San Francisco, USA</p>
                    <p className="text-xs text-blue-700 mt-1">Match 2 vs Australia</p>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About USA National Team</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The <strong>United States men&apos;s national soccer team</strong> (USMNT) represents
                  the United States in international soccer and is controlled by the United States Soccer Federation.
                </p>

                <h3>2026 World Cup - Once in a Lifetime</h3>
                <p>
                  The 2026 World Cup represents a historic opportunity for US soccer. As hosts, the USMNT
                  will benefit from passionate home support across the country. The team features the most
                  talented generation of American players ever, with many playing at top European clubs.
                </p>

                <h3>The Golden Generation</h3>
                <p>
                  Christian Pulisic (AC Milan), Weston McKennie (Juventus), Gio Reyna (Borussia Dortmund),
                  and Tyler Adams form the core of what many call America&apos;s &quot;Golden Generation.&quot;
                  By 2026, these players will be in their prime years and hungry to make history on home soil.
                </p>

                <h3>Home Support</h3>
                <p>
                  With 11 venues in the USA, American fans will have unprecedented access to World Cup matches.
                  The USMNT will play group matches on the West Coast (Los Angeles and San Francisco),
                  setting up what could be historic nights for US soccer.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-700" />
                  Buy USA Tickets
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
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>EXTREME DEMAND - Tickets selling fast!</span>
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
                  <span className="text-slate-600">Best WC Finish</span>
                  <span className="font-medium">3rd Place (1930)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group D Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 font-medium">
                  <span>🇺🇸</span> USA
                  <Badge className="ml-auto bg-blue-700 text-xs">Host</Badge>
                </Link>
                <Link href="/teams/paraguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇵🇾</span> Paraguay
                </Link>
                <Link href="/teams/australia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇦🇺</span> Australia
                </Link>
                <div className="flex items-center gap-2 p-2 text-slate-400">
                  <span>🏳️</span> TBD (UEFA Playoff)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
