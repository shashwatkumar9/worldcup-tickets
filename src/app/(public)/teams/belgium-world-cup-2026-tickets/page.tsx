import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Belgium World Cup 2026 Tickets | Red Devils",
  description: "Buy Belgium FIFA World Cup 2026 tickets. Watch the Red Devils compete in Group G. De Bruyne, match schedule & ticket prices from $125.",
  keywords: ["Belgium World Cup 2026 tickets", "Red Devils World Cup", "De Bruyne World Cup", "Belgium football tickets"],
}

const teamInfo = {
  name: "Belgium",
  flag: "🇧🇪",
  confederation: "UEFA",
  fifaRanking: 8,
  worldCupTitles: 0,
  bestFinish: "Third Place (2018)",
  group: "G",
  groupOpponents: ["Egypt", "Iran", "New Zealand"],
  nickname: "Red Devils",
  coach: "Domenico Tedesco",
  captain: "Kevin De Bruyne",
}

const keyPlayers = [
  { name: "Kevin De Bruyne", position: "Midfielder", club: "Manchester City", number: 7, star: true },
  { name: "Romelu Lukaku", position: "Forward", club: "Roma", number: 9 },
  { name: "Jérémy Doku", position: "Forward", club: "Manchester City", number: 11 },
  { name: "Amadou Onana", position: "Midfielder", club: "Everton", number: 8 },
  { name: "Thibaut Courtois", position: "Goalkeeper", club: "Real Madrid", number: 1 },
  { name: "Arthur Theate", position: "Defender", club: "Rennes", number: 3 },
]

const groupFixtures = [
  { match: "Belgium vs Egypt", date: "June 12, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "belgium-vs-egypt-world-cup-2026-tickets" },
  { match: "Belgium vs Iran", date: "June 17, 2026", time: "5:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "belgium-vs-iran-world-cup-2026-tickets" },
  { match: "Belgium vs New Zealand", date: "June 22, 2026", time: "2:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "belgium-vs-new-zealand-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 2018, result: "Third Place", location: "Russia" },
  { year: 2014, result: "Quarter-finals", location: "Brazil" },
  { year: 2002, result: "Round of 16", location: "Korea/Japan" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 125, logo: "🎫", url: "#" },
  { partner: "StubHub", price_from: 160, logo: "🎟️", url: "#" },
  { partner: "Viagogo", price_from: 145, logo: "🎫", url: "#" },
  { partner: "SeatGeek", price_from: 135, logo: "🎟️", url: "#" },
]

export default function BelgiumTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-yellow-400 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-white">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Belgium</span>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-500 text-black">2018 THIRD PLACE</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP G</Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-white">{teamInfo.name}</h1>
                  <p className="text-xl text-slate-200 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-slate-200">
                The golden generation&apos;s last chance? Belgium&apos;s talented squad including Kevin De Bruyne
                seeks to finally convert their potential into World Cup glory.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Ticket className="mr-2 h-5 w-5" />Buy Belgium Tickets
                </Button>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-3xl font-bold text-red-600">#{teamInfo.fifaRanking}</p><p className="text-sm text-slate-600">FIFA Ranking</p></div>
                <div><p className="text-3xl font-bold text-red-600">3rd</p><p className="text-sm text-slate-600">Best Finish (2018)</p></div>
                <div><p className="text-3xl font-bold text-red-600">0</p><p className="text-sm text-slate-600">World Cup Titles</p></div>
                <div><p className="text-3xl font-bold text-red-600">Group {teamInfo.group}</p><p className="text-sm text-slate-600">WC 2026 Group</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Belgium World Cup 2026: Golden Generation&apos;s Last Stand</h2>
              <p>
                For a decade, Belgium has been the perennial dark horse that never quite delivered on its immense promise.
                The Red Devils reached number one in the FIFA rankings, collected a bronze medal at Russia 2018, but the
                ultimate prize has remained elusive. The 2026 FIFA World Cup represents the final opportunity for Kevin
                De Bruyne, Romelu Lukaku, and the core of this golden generation to achieve what their talent has always suggested was possible.
              </p>
              <p>
                Belgium&apos;s journey to elite status began in the early 2010s when an extraordinary generation emerged simultaneously.
                Hazard, De Bruyne, Lukaku, Courtois - names that would dominate European football for the next decade. Their third-place
                finish in Russia 2018, where they defeated <Link href="/teams/brazil-world-cup-2026-tickets" className="text-red-600 hover:underline">Brazil</Link> in
                a memorable quarter-final, remains their greatest World Cup achievement. The heartbreaking semi-final loss to
                <Link href="/teams/france-world-cup-2026-tickets" className="text-red-600 hover:underline">France</Link> still lingers in Belgian football consciousness.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group G Preview: Favorable Draw Offers Opportunity</h3>
              <p>
                Belgium received a manageable Group G draw, opening against <Link href="/teams/egypt-world-cup-2026-tickets" className="text-red-600 hover:underline">Egypt</Link> at
                the magnificent <Link href="/venues/hard-rock-stadium-world-cup-2026" className="text-red-600 hover:underline">Hard Rock Stadium in Miami</Link>.
                The Pharaohs, led by Mohamed Salah, will provide a stern test, but Belgium&apos;s superior depth should prevail.
                This fixture between two of football&apos;s most passionate fan bases promises an electric atmosphere in South Florida.
              </p>
              <p>
                <Link href="/teams/iran-world-cup-2026-tickets" className="text-red-600 hover:underline">Iran</Link> awaits in
                match two at <Link href="/venues/levis-stadium-world-cup-2026" className="text-red-600 hover:underline">Levi&apos;s Stadium in San Francisco</Link>,
                bringing the tactical discipline and physical commitment Asian teams are renowned for. The group concludes
                against <Link href="/teams/new-zealand-world-cup-2026-tickets" className="text-red-600 hover:underline">New Zealand</Link> at
                <Link href="/venues/sofi-stadium-world-cup-2026" className="text-red-600 hover:underline">SoFi Stadium in Los Angeles</Link>,
                where Belgium should secure their knockout stage berth in front of California&apos;s diverse football community.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">De Bruyne&apos;s Brilliance: The Maestro Pulling Strings</h3>
              <p>
                Kevin De Bruyne is widely regarded as the best midfielder of his generation. The Manchester City playmaker&apos;s
                vision, passing range, and goal-scoring ability make Belgium perpetually dangerous. At 34 during the 2026
                tournament, this represents his best remaining chance to add World Cup glory to his extensive trophy cabinet
                of Premier League and Champions League titles.
              </p>
              <p>
                Supporting De Bruyne is a blend of experience and emerging talent. Romelu Lukaku remains one of the most
                prolific strikers in international football history, while Jérémy Doku&apos;s electrifying pace on the wing
                provides the unpredictability modern attacks require. Thibaut Courtois, when fit, gives Belgium arguably
                the world&apos;s best goalkeeper, while Amadou Onana&apos;s emergence adds Premier League steel to the midfield.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">European Ambitions: Battles with Continental Rivals</h3>
              <p>
                Should Belgium advance, clashes with European giants await. The rivalry with neighboring
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-red-600 hover:underline">Netherlands</Link> adds
                local pride to any potential encounter, while a rematch against
                <Link href="/teams/france-world-cup-2026-tickets" className="text-red-600 hover:underline">France</Link> would
                offer redemption for 2018&apos;s semi-final heartbreak.
              </p>
              <p>
                <Link href="/teams/germany-world-cup-2026-tickets" className="text-red-600 hover:underline">Germany</Link>,
                <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline">England</Link>, and
                <Link href="/teams/spain-world-cup-2026-tickets" className="text-red-600 hover:underline">Spain</Link> all
                represent the caliber of opposition Belgium must overcome to achieve their golden generation&apos;s destiny.
                <Link href="/teams/portugal-world-cup-2026-tickets" className="text-red-600 hover:underline">Portugal</Link> and
                <Link href="/teams/italy-world-cup-2026-tickets" className="text-red-600 hover:underline">Italy</Link> similarly
                carry generational talents seeking their crowning achievement.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Belgian Fans: Red Devils Support</h3>
              <p>
                Belgian supporters bring passion and color to every tournament. The relatively small nation punches above
                its weight in traveling support, with fans known for their friendly nature and genuine enthusiasm. The
                multicultural makeup of Belgium - Flemish, Walloon, and German-speaking communities - unites behind the
                national team, creating a unique supporting atmosphere that reflects the country&apos;s diversity.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-red-600" />Group G Match Schedule</CardTitle></CardHeader>
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
                          <div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{fixture.venue}, {fixture.city}</div>
                        </div>
                      </div>
                      <Button size="sm">Get Tickets<ChevronRight className="ml-1 h-4 w-4" /></Button>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-red-600" />Key Players to Watch</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">{player.number}</div>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-red-600" />World Cup History</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${entry.result === "Third Place" ? "bg-yellow-50 border border-yellow-200" : entry.result === "Group Stage" ? "bg-red-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className={entry.result === "Third Place" ? "bg-yellow-500" : entry.result === "Group Stage" ? "bg-red-400" : "bg-slate-200 text-slate-700"}>{entry.result}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Match Venues Section */}
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-red-600" />Belgium Match Venues</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Link href="/venues/hard-rock-stadium-world-cup-2026" className="p-4 rounded-lg border hover:bg-red-50 transition-colors">
                    <p className="font-semibold text-slate-900">Hard Rock Stadium</p>
                    <p className="text-sm text-slate-500">Miami, USA</p>
                    <p className="text-xs text-red-600 mt-1">Match 1 vs Egypt</p>
                  </Link>
                  <Link href="/venues/levis-stadium-world-cup-2026" className="p-4 rounded-lg border hover:bg-red-50 transition-colors">
                    <p className="font-semibold text-slate-900">Levi&apos;s Stadium</p>
                    <p className="text-sm text-slate-500">San Francisco, USA</p>
                    <p className="text-xs text-red-600 mt-1">Match 2 vs Iran</p>
                  </Link>
                  <Link href="/venues/sofi-stadium-world-cup-2026" className="p-4 rounded-lg border hover:bg-red-50 transition-colors">
                    <p className="font-semibold text-slate-900">SoFi Stadium</p>
                    <p className="text-sm text-slate-500">Los Angeles, USA</p>
                    <p className="text-xs text-red-600 mt-1">Match 3 vs New Zealand</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5 text-red-600" />Buy Belgium Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div><p className="font-medium text-slate-900">{link.partner}</p><p className="text-sm text-green-600">From ${link.price_from}</p></div>
                    </div>
                    <Button size="sm" asChild><a href={link.url} target="_blank" rel="noopener noreferrer">Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
                <div className="pt-4 border-t"><div className="flex items-center gap-2 text-yellow-600 text-sm"><TrendingUp className="h-4 w-4" /><span>De Bruyne matches in demand!</span></div></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Group G Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/belgium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium"><span>🇧🇪</span> Belgium</Link>
                <Link href="/teams/egypt-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇬</span> Egypt</Link>
                <Link href="/teams/iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇮🇷</span> Iran</Link>
                <Link href="/teams/new-zealand-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇿</span> New Zealand</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>UEFA Rivals</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇫🇷</span> France</Link>
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇱</span> Netherlands</Link>
                <Link href="/teams/germany-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇪</span> Germany</Link>
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
