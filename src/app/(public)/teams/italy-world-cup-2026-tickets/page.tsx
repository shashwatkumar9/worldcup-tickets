import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Italy World Cup 2026 Tickets | 4x World Champions Return",
  description: "Buy Italy FIFA World Cup 2026 tickets. Watch the Azzurri return after missing 2022. Match schedule, key players & ticket prices from $130.",
  keywords: ["Italy World Cup 2026 tickets", "Azzurri World Cup", "Italy football tickets", "Gli Azzurri"],
}

const teamInfo = {
  name: "Italy",
  flag: "🇮🇹",
  confederation: "UEFA",
  fifaRanking: 9,
  worldCupTitles: 4,
  lastTitle: 2006,
  group: "TBD (UEFA Playoff)",
  nickname: "Gli Azzurri",
  coach: "Luciano Spalletti",
  captain: "Gianluigi Donnarumma",
}

const keyPlayers = [
  { name: "Gianluigi Donnarumma", position: "Goalkeeper", club: "PSG", number: 1, star: true },
  { name: "Nicolò Barella", position: "Midfielder", club: "Inter Milan", number: 18 },
  { name: "Federico Chiesa", position: "Forward", club: "Liverpool", number: 14 },
  { name: "Riccardo Calafiori", position: "Defender", club: "Arsenal", number: 5 },
  { name: "Sandro Tonali", position: "Midfielder", club: "Newcastle", number: 8 },
  { name: "Gianluca Scamacca", position: "Forward", club: "Atalanta", number: 9 },
]

const worldCupHistory = [
  { year: 2022, result: "Did Not Qualify", location: "Qatar" },
  { year: 2018, result: "Did Not Qualify", location: "Russia" },
  { year: 2014, result: "Group Stage", location: "Brazil" },
  { year: 2006, result: "Champions", location: "Germany" },
  { year: 2002, result: "Round of 16", location: "Korea/Japan" },
  { year: 1994, result: "Runners-up", location: "USA" },
  { year: 1982, result: "Champions", location: "Spain" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 130, logo: "🎫", url: "#" },
  { partner: "StubHub", price_from: 170, logo: "🎟️", url: "#" },
  { partner: "Viagogo", price_from: 155, logo: "🎫", url: "#" },
  { partner: "SeatGeek", price_from: 145, logo: "🎟️", url: "#" },
]

export default function ItalyTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-blue-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-blue-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Italy</span>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-blue-700 text-white">4X WORLD CHAMPIONS</Badge>
                <Badge className="bg-green-600 text-white">EURO 2020 CHAMPIONS</Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">{teamInfo.name}</h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-slate-800">
                The Azzurri return after the heartbreak of missing two consecutive World Cups.
                Four-time champions Italy are determined to reclaim their place among the elite.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Ticket className="mr-2 h-5 w-5" />Buy Italy Tickets
                </Button>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-3xl font-bold text-blue-700">#{teamInfo.fifaRanking}</p><p className="text-sm text-slate-600">FIFA Ranking</p></div>
                <div><p className="text-3xl font-bold text-blue-700">4</p><p className="text-sm text-slate-600">World Cup Titles</p></div>
                <div><p className="text-3xl font-bold text-blue-700">2006</p><p className="text-sm text-slate-600">Last Title</p></div>
                <div><p className="text-3xl font-bold text-blue-700">2020</p><p className="text-sm text-slate-600">Euro Champions</p></div>
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
              <h2 className="text-2xl font-bold text-slate-900">Italy World Cup 2026: The Azzurri&apos;s Redemption Arc</h2>
              <p>
                Few nations carry the weight of expectation like Italy. With four World Cup titles (1934, 1938, 1982, 2006)
                and the most recent European Championship (Euro 2020), the Azzurri are football royalty. Yet the shame of
                missing two consecutive World Cups - 2018 in Russia and 2022 in Qatar - left Italian football in crisis.
                The 2026 FIFA World Cup represents a chance for redemption, a return to the stage where Italy has so often
                written football history.
              </p>
              <p>
                The heartbreak of failing to qualify for Qatar 2022, losing to North Macedonia in the playoffs just months
                after winning the European Championship, shook Italian football to its foundations. Under Luciano Spalletti,
                a new generation has emerged, blending the tactical discipline Italy is renowned for with the technical
                excellence of Serie A&apos;s finest talents. This tournament marks their return to where they belong.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Returning to American Soil: 1994 Memories</h3>
              <p>
                The 2026 World Cup holds special significance for Italy. In 1994, the Azzurri reached the final in
                <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-700 hover:underline">the United States</Link>,
                losing to <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link> in
                a dramatic penalty shootout at the Rose Bowl. Roberto Baggio&apos;s missed penalty remains one of football&apos;s most
                iconic and heartbreaking moments. Three decades later, Italy returns to American soil seeking to finally
                claim victory where they fell so close.
              </p>
              <p>
                The large Italian-American diaspora ensures passionate support across host cities. From the tri-state area
                around <Link href="/venues/metlife-stadium-world-cup-2026" className="text-blue-700 hover:underline">MetLife Stadium</Link> to
                Chicago, Boston, and beyond, Italian fans will create a home-like atmosphere wherever the Azzurri play.
                Venues like <Link href="/venues/gillette-stadium-world-cup-2026" className="text-blue-700 hover:underline">Gillette Stadium</Link> and
                <Link href="/venues/lincoln-financial-field-world-cup-2026" className="text-blue-700 hover:underline">Lincoln Financial Field</Link> in
                the Northeast will see particularly strong Italian support.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Donnarumma&apos;s Generation: New Heroes Emerge</h3>
              <p>
                Gianluigi Donnarumma, the hero of Euro 2020&apos;s penalty shootout victory over <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>,
                leads this Italian generation. The PSG goalkeeper&apos;s remarkable shot-stopping and presence make Italy
                formidable in any knockout situation. His partnership with a defense built around Riccardo Calafiori
                provides the solid foundation Italian football demands.
              </p>
              <p>
                The midfield belongs to Nicolò Barella, the Inter Milan dynamo whose box-to-box brilliance drives Italian
                play. Sandro Tonali, after his Newcastle suspension, brings Premier League steel and technical excellence.
                Federico Chiesa, when fit, provides the attacking spark, while Gianluca Scamacca offers the physical presence
                and finishing touch Italy&apos;s attack needs.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">European Rivalries: Classic Battles Await</h3>
              <p>
                Italian football history is defined by epic clashes with European giants. The rivalry with
                <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link> produced
                the unforgettable 2006 semi-final and the dramatic 1970 &quot;Game of the Century.&quot; Matches against
                <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link> evoke
                memories of the 2006 final triumph, while encounters with
                <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link> have
                become modern classics in tournament football.
              </p>
              <p>
                <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>,
                their Euro 2020 final opponents, represent a potential grudge match.
                <Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-700 hover:underline">Portugal</Link>,
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-700 hover:underline">Netherlands</Link>, and
                <Link href="/teams/belgium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Belgium</Link> similarly
                represent the caliber of European opposition Italy must overcome.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Host Nation Clashes: Canada Connection</h3>
              <p>
                A potential fixture against <Link href="/teams/canada-world-cup-2026-tickets" className="text-blue-700 hover:underline">Canada</Link> carries
                unique resonance. The substantial Italian-Canadian population in Toronto, Montreal, and Vancouver creates
                a special connection between these nations. A match at <Link href="/venues/bmo-field-world-cup-2026" className="text-blue-700 hover:underline">BMO Field in Toronto</Link> or
                another Canadian venue would feature divided loyalties among fans with roots in both countries.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Italian Tactical Heritage</h3>
              <p>
                Italy&apos;s football philosophy - the famous &quot;Catenaccio&quot; evolved into modern tactical flexibility - remains
                their competitive advantage. No nation defends better under pressure or better understands tournament football&apos;s
                unique demands. Spalletti&apos;s Italy combines this defensive heritage with attacking ambition, creating a team
                capable of winning ugly when necessary but beautiful when opportunity allows.
              </p>
            </article>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-blue-900">Italy&apos;s Return</h3>
                <p className="text-sm text-blue-800 mt-2">
                  After the shock of missing the 2018 and 2022 World Cups, Italy qualified for 2026 determined
                  to restore their reputation. The Euro 2020 champions have rebuilt with a mix of experience and youth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-blue-700" />Key Players to Watch</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">{player.number}</div>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-blue-700" />World Cup History</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${entry.result === "Champions" ? "bg-yellow-50 border border-yellow-200" : entry.result === "Did Not Qualify" ? "bg-red-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className={entry.result === "Champions" ? "bg-yellow-500" : entry.result === "Did Not Qualify" ? "bg-red-400" : "bg-slate-200 text-slate-700"}>
                        {entry.result === "Champions" && "🏆 "}{entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Potential Venues Section */}
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-700" />Key US Venues with Italian Support</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Link href="/venues/metlife-stadium-world-cup-2026" className="p-4 rounded-lg border hover:bg-blue-50 transition-colors">
                    <p className="font-semibold text-slate-900">MetLife Stadium</p>
                    <p className="text-sm text-slate-500">New York/New Jersey</p>
                    <p className="text-xs text-blue-700 mt-1">Large Italian-American community</p>
                  </Link>
                  <Link href="/venues/gillette-stadium-world-cup-2026" className="p-4 rounded-lg border hover:bg-blue-50 transition-colors">
                    <p className="font-semibold text-slate-900">Gillette Stadium</p>
                    <p className="text-sm text-slate-500">Boston, USA</p>
                    <p className="text-xs text-blue-700 mt-1">Strong Northeast support</p>
                  </Link>
                  <Link href="/venues/lincoln-financial-field-world-cup-2026" className="p-4 rounded-lg border hover:bg-blue-50 transition-colors">
                    <p className="font-semibold text-slate-900">Lincoln Financial Field</p>
                    <p className="text-sm text-slate-500">Philadelphia, USA</p>
                    <p className="text-xs text-blue-700 mt-1">Italian-American heartland</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5 text-blue-700" />Buy Italy Tickets</CardTitle></CardHeader>
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
                <div className="pt-4 border-t"><div className="flex items-center gap-2 text-yellow-600 text-sm"><TrendingUp className="h-4 w-4" /><span>Italy fans eager for WC return!</span></div></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Team Info</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-600">Confederation</span><span className="font-medium">{teamInfo.confederation}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">FIFA Ranking</span><span className="font-medium">#{teamInfo.fifaRanking}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Coach</span><span className="font-medium">{teamInfo.coach}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">WC Titles</span><span className="font-medium">4 (1934, 38, 82, 2006)</span></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>UEFA Rivals</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/germany-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇪</span> Germany</Link>
                <Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇫🇷</span> France</Link>
                <Link href="/teams/spain-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇸</span> Spain</Link>
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
