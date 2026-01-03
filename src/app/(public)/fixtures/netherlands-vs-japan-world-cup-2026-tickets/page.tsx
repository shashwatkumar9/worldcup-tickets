import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Netherlands vs Japan Tickets | World Cup 2026 Group F | Oranje vs Samurai Blue",
  description: "Buy Netherlands vs Japan World Cup 2026 tickets - Group F clash! 2022 World Cup quarter-finalists meet. Gakpo and van Dijk lead Oranje against Doan and Mitoma's Samurai Blue.",
  keywords: ["Netherlands vs Japan tickets", "World Cup 2026 Group F", "Netherlands World Cup 2026", "Japan World Cup", "Oranje vs Samurai Blue"],
}

const matchInfo = {
  homeTeam: { name: "Netherlands", flag: "🇳🇱", code: "NED", nickname: "Oranje" },
  awayTeam: { name: "Japan", flag: "🇯🇵", code: "JPN", nickname: "Samurai Blue" },
  date: "June 15, 2026",
  time: "2:00 PM ET",
  venue: "Hard Rock Stadium",
  city: "Miami, Florida",
  group: "F",
  matchNumber: 14,
  round: "Group Stage - Matchday 1",
}

const netherlandsPlayers = [
  { name: "Virgil van Dijk", position: "Defender", club: "Liverpool", number: 4, star: true },
  { name: "Cody Gakpo", position: "Winger", club: "Liverpool", number: 11, star: true },
  { name: "Frenkie de Jong", position: "Midfielder", club: "Barcelona", number: 21 },
  { name: "Memphis Depay", position: "Forward", club: "Atletico Madrid", number: 10 },
]

const japanPlayers = [
  { name: "Kaoru Mitoma", position: "Winger", club: "Brighton", number: 9, star: true },
  { name: "Ritsu Doan", position: "Winger", club: "Freiburg", number: 14, star: true },
  { name: "Takefusa Kubo", position: "Winger", club: "Real Sociedad", number: 11 },
  { name: "Wataru Endo", position: "Midfielder", club: "Liverpool", number: 6 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 185, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 325, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 285, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 265, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "Friendly", result: "Netherlands 1-0 Japan", location: "Rotterdam" },
  { year: 2013, competition: "Friendly", result: "Japan 2-2 Netherlands", location: "Genk" },
]

export default function NetherlandsVsJapanPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-500 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-f-world-cup-2026-tickets" className="hover:text-white">Group F</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Netherlands vs Japan</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-orange-500 text-white text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2022 QF</Badge>
              <Badge className="bg-red-600 text-white"><Flame className="h-4 w-4 mr-2" />GIANT KILLERS</Badge>
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
            <Card className="border-orange-400 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-6 w-6 text-orange-600" />
                  <h3 className="font-bold text-xl text-orange-900">EUROPEAN POWERHOUSE MEETS ASIAN GIANT KILLERS</h3>
                </div>
                <p className="text-orange-800">Both teams reached the 2022 World Cup quarter-finals! Virgil van Dijk marshals Oranje&apos;s defense while Cody Gakpo brings Liverpool firepower. Japan&apos;s Mitoma and Kubo headline a generation that stunned Germany and Spain in Qatar. This Group F opener could define both nations&apos; knockout ambitions.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Netherlands vs Japan: Quarter-Finalists Collide</h2>
              <p>
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-orange-600 hover:underline">Netherlands</Link> faces <Link href="/teams/japan-world-cup-2026-tickets" className="text-red-600 hover:underline">Japan</Link> at <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium in Miami</Link>. Two 2022 World Cup quarter-finalists meet in what promises to be Group F&apos;s defining fixture.
              </p>
              <p>
                The Netherlands brought Total Football to the world and have consistently produced exceptional talent. Three World Cup final appearances without a trophy haunts Dutch football. This talented generation, led by Van Dijk and Gakpo, carries the weight of Cruyff&apos;s legacy.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Van Dijk&apos;s Leadership</h3>
              <p>
                Virgil van Dijk transformed Liverpool into European champions and is widely considered the world&apos;s best center-back. His aerial dominance, reading of the game, and composure make Oranje&apos;s defense formidable. Japan&apos;s mobile forwards will test even his concentration.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Japan&apos;s Golden Generation</h3>
              <p>
                Japan shocked the world in Qatar 2022, defeating Germany and Spain before losing to Croatia on penalties. Kaoru Mitoma&apos;s Premier League brilliance at Brighton made him a household name. Alongside Kubo, Doan, and Endo, this may be Japan&apos;s strongest squad ever.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Miami Heat</h3>
              <p>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium</Link> in Miami Gardens provides a passionate setting. Miami&apos;s diverse population includes large Dutch and Japanese communities. Florida&apos;s summer heat could favor Japan&apos;s high-pressing, energy-demanding style.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group F Dynamics</h3>
              <p>
                With Tunisia and another team completing Group F, this match carries enormous weight. The winner gains crucial advantage in the group standings. Netherlands&apos; experience versus Japan&apos;s fearless attacking could produce a classic.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇳🇱</span> Netherlands</h4>
                    <div className="space-y-2">
                      {netherlandsPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-orange-50 border border-orange-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-orange-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇯🇵</span> Japan</h4>
                    <div className="space-y-2">
                      {japanPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">These nations have rarely met, making this World Cup clash even more intriguing.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Netherlands</p><p className="text-sm text-slate-600">NOS, NPO</p></div>
                  <div><p className="font-medium">Japan</p><p className="text-sm text-slate-600">NHK, Fuji TV, DAZN</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-orange-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-orange-700 font-medium">Quarter-finalists clash in Miami!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group F - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">65,326</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group F Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇱</span> Netherlands</Link>
                <Link href="/teams/japan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇯🇵</span> Japan</Link>
                <Link href="/teams/tunisia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇹🇳</span> Tunisia</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🏴</span> TBD</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="text-orange-600 hover:underline text-sm">Miami Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Experience the Magic City!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
