import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, History } from "lucide-react"

export const metadata: Metadata = {
  title: "Japan vs Tunisia Tickets | World Cup 2026 Group C | 1000th Match | Mercedes-Benz Stadium",
  description: "Buy Japan vs Tunisia World Cup 2026 tickets - THE 1000TH WORLD CUP MATCH IN HISTORY! Mercedes-Benz Stadium, Atlanta. June 18, 2026. Be part of history!",
  keywords: ["Japan vs Tunisia tickets", "1000th World Cup match", "World Cup 2026 Atlanta", "Japan World Cup 2026", "Tunisia World Cup", "Mercedes-Benz Stadium World Cup", "historic World Cup match"],
}

const matchInfo = {
  homeTeam: { name: "Japan", flag: "🇯🇵", code: "JPN", nickname: "Samurai Blue" },
  awayTeam: { name: "Tunisia", flag: "🇹🇳", code: "TUN", nickname: "Eagles of Carthage" },
  date: "June 18, 2026",
  time: "1:00 PM ET",
  venue: "Mercedes-Benz Stadium",
  city: "Atlanta, Georgia",
  group: "C",
  matchNumber: 25,
  round: "Group Stage - Matchday 2",
}

const japanPlayers = [
  { name: "Takefusa Kubo", position: "Forward", club: "Real Sociedad", number: 11, star: true },
  { name: "Kaoru Mitoma", position: "Winger", club: "Brighton", number: 22, star: true },
  { name: "Wataru Endo", position: "Midfielder", club: "Liverpool", number: 6 },
  { name: "Ritsu Doan", position: "Forward", club: "Freiburg", number: 14 },
]

const tunisiaPlayers = [
  { name: "Aïssa Laïdouni", position: "Midfielder", club: "Union Berlin", number: 14, star: true },
  { name: "Youssef Msakni", position: "Forward", club: "Al-Arabi", number: 7, star: true },
  { name: "Hannibal Mejbri", position: "Midfielder", club: "Manchester United", number: 8 },
  { name: "Mohamed Dräger", position: "Defender", club: "Basel", number: 2 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 175, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 285, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 255, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 235, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Japan 0-0 Tunisia", location: "n/a - no WC meeting" },
  { year: 2015, competition: "Friendly", result: "Japan 2-0 Tunisia", location: "Oita" },
  { year: 2004, competition: "Friendly", result: "Tunisia 1-0 Japan", location: "Tunis" },
]

export default function JapanVsTunisiaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-c-world-cup-2026-tickets" className="hover:text-white">Group C</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Japan vs Tunisia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-400 text-black text-lg px-4 py-1 animate-pulse"><History className="h-4 w-4 mr-2" />1000TH WORLD CUP MATCH</Badge>
              <Badge className="bg-white text-black">GROUP C</Badge>
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
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <History className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">BE PART OF WORLD CUP HISTORY</h3>
                </div>
                <p className="text-yellow-800">This match will be the <strong>1,000th match in FIFA World Cup history</strong>! From Uruguay 1930 to USA/Mexico/Canada 2026, the World Cup has produced 999 matches of drama, glory, and heartbreak. Japan vs Tunisia at Mercedes-Benz Stadium in Atlanta will write the next chapter in this storied history. Don&apos;t miss this historic milestone!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Japan vs Tunisia: The 1,000th Match in World Cup History</h2>
              <p>
                <Link href="/teams/japan-world-cup-2026-tickets" className="text-red-600 hover:underline">Japan</Link> and <Link href="/teams/tunisia-world-cup-2026-tickets" className="text-red-700 hover:underline">Tunisia</Link> will have the unique honor of playing the 1,000th match in FIFA World Cup history. Since Uruguay&apos;s 4-0 victory over Romania on July 13, 1930, the World Cup has grown into the world&apos;s most-watched sporting event. This Group C clash at <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> will mark a millennium of World Cup matches.
              </p>
              <p>
                Both nations arrive at this historic occasion with ambition. Japan shocked the world by defeating Germany and Spain in the 2022 World Cup group stage, establishing themselves as genuine dark horses. Tunisia, the Eagles of Carthage, represent one of Africa&apos;s most consistent footballing nations, qualifying for their seventh World Cup.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Japan&apos;s Giant-Killing Reputation</h3>
              <p>
                The Samurai Blue have evolved from World Cup newcomers to genuine contenders. Their 2022 victories over Germany (2-1) and Spain (2-1) announced Japan as a team capable of beating anyone. Manager Hajime Moriyasu has built a squad combining European experience with technical excellence. Takefusa Kubo at Real Sociedad and Kaoru Mitoma at Brighton lead the attack, while Wataru Endo provides Liverpool-quality midfield presence.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Tunisia&apos;s African Pride</h3>
              <p>
                The Eagles of Carthage have qualified for seven World Cups, tied with Cameroon for the most by an African nation. Their defensive organization and tactical discipline make them difficult opponents. Hannibal Mejbri represents the future - a Manchester United product with Premier League experience and youthful energy. Tunisia held Denmark to a 0-0 draw in 2022 and pushed France before narrowly losing.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">A Millennium of World Cup Matches</h3>
              <p>
                The first World Cup match on July 13, 1930, saw France defeat Mexico 4-1. Since then, we&apos;ve witnessed Pelé&apos;s emergence, Maradona&apos;s Hand of God, Germany&apos;s 7-1 demolition of Brazil, and countless moments of magic. Match number 1,000 in Atlanta adds another chapter to this incredible story. Both Japan and Tunisia will want to write their names in this historic moment.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Atlanta Welcomes History</h3>
              <p>
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Mercedes-Benz Stadium</Link> provides a spectacular setting for this milestone. The retractable roof ensures perfect conditions, while the 71,000 capacity crowd will create an electric atmosphere. Atlanta&apos;s diverse population includes significant Japanese and Tunisian communities, ensuring passionate support for both nations.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group C Context</h3>
              <p>
                With <Link href="/teams/brazil-world-cup-2026-tickets" className="text-green-600 hover:underline">Brazil</Link> and Morocco also in Group C, this match could prove decisive for knockout stage progression. Japan&apos;s 2022 experience of topping a group containing Spain and Germany gives them confidence, while Tunisia will look to replicate their solid 2022 group stage performance.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇹🇳</span> Tunisia</h4>
                    <div className="space-y-2">
                      {tunisiaPlayers.map((player) => (
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
              <CardHeader><CardTitle>Head-to-Head Record</CardTitle></CardHeader>
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Japan</p><p className="text-sm text-slate-600">NHK, Fuji TV, TV Asahi</p></div>
                  <div><p className="font-medium">Tunisia</p><p className="text-sm text-slate-600">Watania 1, beIN Sports</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group C - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">71,000</span></div>
                <div className="flex justify-between"><span className="text-slate-600 text-yellow-600 font-bold">Historic</span><span className="font-medium text-yellow-600">1,000th World Cup Match</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group C Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇷</span> Brazil</Link>
                <Link href="/teams/japan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇯🇵</span> Japan</Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇦</span> Morocco</Link>
                <Link href="/teams/tunisia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇹🇳</span> Tunisia</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Atlanta Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">The ATL awaits for this historic match!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
