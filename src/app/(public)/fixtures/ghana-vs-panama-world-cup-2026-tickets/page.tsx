import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Ghana vs Panama Tickets | World Cup 2026 Group L | Black Stars vs Los Canaleros",
  description: "Buy Ghana vs Panama World Cup 2026 tickets - Group L clash! African giants Ghana face CONCACAF's Panama. A crucial match for knockout stage hopes.",
  keywords: ["Ghana vs Panama tickets", "World Cup 2026 Group L", "Ghana World Cup 2026", "Panama World Cup", "Black Stars"],
}

const matchInfo = {
  homeTeam: { name: "Ghana", flag: "🇬🇭", code: "GHA", nickname: "Black Stars" },
  awayTeam: { name: "Panama", flag: "🇵🇦", code: "PAN", nickname: "Los Canaleros" },
  date: "June 18, 2026",
  time: "2:00 PM ET",
  venue: "Hard Rock Stadium",
  city: "Miami, Florida",
  group: "L",
  matchNumber: 24,
  round: "Group Stage - Matchday 1",
}

const ghanaPlayers = [
  { name: "Mohammed Kudus", position: "Midfielder", club: "West Ham", number: 10, star: true },
  { name: "Thomas Partey", position: "Midfielder", club: "Arsenal", number: 5, star: true },
  { name: "Inaki Williams", position: "Forward", club: "Athletic Bilbao", number: 9 },
  { name: "Jordan Ayew", position: "Forward", club: "Crystal Palace", number: 20 },
]

const panamaPlayers = [
  { name: "José Fajardo", position: "Forward", club: "Saprissa", number: 9, star: true },
  { name: "Adalberto Carrasquilla", position: "Midfielder", club: "Houston Dynamo", number: 8, star: true },
  { name: "Eric Davis", position: "Defender", club: "Brentford", number: 15 },
  { name: "César Yanis", position: "Forward", club: "Deportivo La Coruña", number: 7 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 85, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 135, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 115, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 105, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "Friendly", result: "Ghana 2-0 Panama", location: "Abu Dhabi" },
]

export default function GhanaVsPanamaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-yellow-400 via-green-600 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-l-world-cup-2026-tickets" className="hover:text-white">Group L</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Ghana vs Panama</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">AFRICA vs CONCACAF</Badge>
              <Badge className="bg-white text-black">GROUP L</Badge>
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
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">CRUCIAL GROUP L CLASH</h3>
                </div>
                <p className="text-yellow-800">With England and Croatia as Group L favorites, this match between Ghana and Panama could determine who else advances. Ghana&apos;s Premier League stars face Panama&apos;s CONCACAF battlers in Miami. Both teams need points desperately - expect a fiercely competitive encounter!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Ghana vs Panama: Battle for Third Place</h2>
              <p>
                <Link href="/teams/ghana-world-cup-2026-tickets" className="text-yellow-600 hover:underline">Ghana</Link> meets <Link href="/teams/panama-world-cup-2026-tickets" className="text-red-600 hover:underline">Panama</Link> at <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium in Miami</Link>. In a Group L featuring England and Croatia, this opening match between the underdogs takes on massive significance.
              </p>
              <p>
                Ghana&apos;s World Cup history includes memorable runs - reaching the 2010 quarter-finals, nearly becoming Africa&apos;s first semi-finalists. The Black Stars have reinvented themselves with Premier League quality like Mohammed Kudus and Thomas Partey.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Mohammed Kudus Magic</h3>
              <p>
                Mohammed Kudus has become one of the Premier League&apos;s most exciting talents at West Ham. His dribbling, shooting, and ability to change games makes him Ghana&apos;s key player. Kudus can single-handedly win matches against any opponent.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Panama&apos;s CONCACAF Pride</h3>
              <p>
                Panama made their World Cup debut in 2018, a historic achievement for the small Central American nation. Los Canaleros play with heart and organization. Their first ever World Cup goal came against England - they&apos;ll meet them again in Group L.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Miami Setting</h3>
              <p>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium</Link> in Miami provides the perfect neutral venue. Miami&apos;s Panamanian community will create a home atmosphere, while Ghanaian supporters will bring their legendary drumming and dancing.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">The Third Spot</h3>
              <p>
                In the expanded World Cup format, the best third-placed teams advance. Ghana vs Panama could ultimately decide who claims that lifeline. Every goal, every point matters in what promises to be a tight group.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇬🇭</span> Ghana</h4>
                    <div className="space-y-2">
                      {ghanaPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-yellow-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇵🇦</span> Panama</h4>
                    <div className="space-y-2">
                      {panamaPlayers.map((player) => (
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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Ghana</p><p className="text-sm text-slate-600">GTV, Max TV</p></div>
                  <div><p className="font-medium">Panama</p><p className="text-sm text-slate-600">TVN, RPC</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-yellow-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-yellow-700 font-medium">Africa vs CONCACAF in Miami!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group L - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">65,326</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group L Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇭🇷</span> Croatia</Link>
                <Link href="/teams/ghana-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇬🇭</span> Ghana</Link>
                <Link href="/teams/panama-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇦</span> Panama</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Miami Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Experience Magic City!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
