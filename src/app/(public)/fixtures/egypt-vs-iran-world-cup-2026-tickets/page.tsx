import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Egypt vs Iran Tickets | World Cup 2026 Group G | Pharaohs vs Team Melli",
  description: "Buy Egypt vs Iran World Cup 2026 tickets - Group G clash! African giants Egypt face Asian powerhouse Iran. Salah vs Taremi in a battle for knockout survival.",
  keywords: ["Egypt vs Iran tickets", "World Cup 2026 Group G", "Egypt World Cup 2026", "Iran World Cup", "Salah vs Taremi"],
}

const matchInfo = {
  homeTeam: { name: "Egypt", flag: "🇪🇬", code: "EGY", nickname: "The Pharaohs" },
  awayTeam: { name: "Iran", flag: "🇮🇷", code: "IRN", nickname: "Team Melli" },
  date: "June 21, 2026",
  time: "5:00 PM ET",
  venue: "AT&T Stadium",
  city: "Dallas, Texas",
  group: "G",
  matchNumber: 36,
  round: "Group Stage - Matchday 2",
}

const egyptPlayers = [
  { name: "Mohamed Salah", position: "Forward", club: "Liverpool", number: 10, star: true },
  { name: "Omar Marmoush", position: "Forward", club: "Eintracht Frankfurt", number: 7, star: true },
  { name: "Mahmoud Trezeguet", position: "Winger", club: "Trabzonspor", number: 14 },
  { name: "Mohamed Elneny", position: "Midfielder", club: "Arsenal", number: 4 },
]

const iranPlayers = [
  { name: "Mehdi Taremi", position: "Forward", club: "Inter Milan", number: 9, star: true },
  { name: "Sardar Azmoun", position: "Forward", club: "Roma", number: 20, star: true },
  { name: "Alireza Jahanbakhsh", position: "Winger", club: "Feyenoord", number: 7 },
  { name: "Saeid Ezatolahi", position: "Midfielder", club: "Vejle", number: 6 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 235, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 205, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 185, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 1990, competition: "Asian Cup", result: "Iran 3-2 Egypt", location: "Dubai" },
  { year: 1976, competition: "Friendly", result: "Egypt 0-0 Iran", location: "Cairo" },
]

export default function EgyptVsIranPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-white to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-g-world-cup-2026-tickets" className="hover:text-white">Group G</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Egypt vs Iran</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-700 text-white text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />AFRICA vs ASIA</Badge>
              <Badge className="bg-white text-black">GROUP G</Badge>
            </div>
            <div className="flex items-center justify-center gap-8 my-8">
              <div className="text-center">
                <span className="text-8xl">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl font-bold text-white mt-2">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
              </div>
              <div className="text-4xl font-bold text-white">VS</div>
              <div className="text-center">
                <span className="text-8xl">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl font-bold text-white mt-2">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2"><Calendar className="h-5 w-5" />{matchInfo.date}</div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" />{matchInfo.time}</div>
              <div className="flex items-center gap-2"><MapPin className="h-5 w-5" />{matchInfo.venue}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">SUPERSTAR SHOWDOWN</h3>
                </div>
                <p className="text-red-800">Mohamed Salah meets Mehdi Taremi in one of Group G&apos;s most anticipated clashes. Egypt&apos;s Liverpool legend faces Iran&apos;s Inter Milan striker. Both teams will be fighting to keep their knockout hopes alive. With Belgium favored to top the group, this match could decide who else advances.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Egypt vs Iran: Continental Giants Collide</h2>
              <p>
                <Link href="/teams/egypt-world-cup-2026-tickets" className="text-red-700 hover:underline">Egypt</Link> faces <Link href="/teams/iran-world-cup-2026-tickets" className="text-green-700 hover:underline">Iran</Link> at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&amp;T Stadium in Dallas</Link>. Africa&apos;s most decorated nation meets Asia&apos;s powerhouse in a Group G battle with knockout implications.
              </p>
              <p>
                Egypt has won a record seven Africa Cup of Nations titles but their World Cup history is more modest. Mohamed Salah&apos;s presence transforms them into genuine contenders. The Pharaohs will be desperate to go deep in this tournament with their generational star.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Salah&apos;s Kingdom</h3>
              <p>
                Mohamed Salah has redefined what&apos;s possible for African footballers. Multiple Premier League Golden Boots, Champions League glory, and consistent excellence at Liverpool have made him an icon. Egypt&apos;s entire attack flows through their talisman.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Iran&apos;s European Stars</h3>
              <p>
                Mehdi Taremi brings Inter Milan&apos;s Serie A quality to Team Melli. Sardar Azmoun adds Roma&apos;s creativity and experience. Iran&apos;s European-based core gives them legitimate knockout stage aspirations. They&apos;ve proven they can compete at the highest level.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Dallas Spectacle</h3>
              <p>
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&amp;T Stadium</Link> provides the ultimate stage for this intercontinental clash. Jerry World&apos;s massive video board and 80,000 capacity create an unforgettable atmosphere. Dallas&apos;s Middle Eastern and North African communities will generate passionate support.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group G Implications</h3>
              <p>
                With Belgium likely to dominate, Egypt and Iran battle for the remaining knockout spots. Both teams possess world-class attacking talent capable of deciding matches. This matchday 2 encounter could effectively be a knockout game in disguise.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇪🇬</span> Egypt</h4>
                    <div className="space-y-2">
                      {egyptPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-red-50 border border-red-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-red-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇮🇷</span> Iran</h4>
                    <div className="space-y-2">
                      {iranPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-green-50 border border-green-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-green-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" />Head-to-Head Record</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant="outline">{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-600 italic">Historic meetings between African and Asian continental powers.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Egypt</p><p className="text-sm text-slate-600">beIN Sports, ON Sport</p></div>
                  <div><p className="font-medium">Iran</p><p className="text-sm text-slate-600">IRIB, beIN Sports</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-700 font-medium">Salah vs Taremi in Dallas!</p>
                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">{link.partner}</p>
                      <p className="text-sm text-green-600">From ${link.price_from}</p>
                      <p className="text-xs text-slate-500">{link.rating}</p>
                    </div>
                    <Button size="sm" asChild><a href={link.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Match Details</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Competition</span><span className="font-medium">FIFA World Cup 2026</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group G - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">80,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group G Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/belgium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇪</span> Belgium</Link>
                <Link href="/teams/egypt-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇬</span> Egypt</Link>
                <Link href="/teams/iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇮🇷</span> Iran</Link>
                <Link href="/teams/new-zealand-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇿</span> New Zealand</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Dallas Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Experience Big D!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
