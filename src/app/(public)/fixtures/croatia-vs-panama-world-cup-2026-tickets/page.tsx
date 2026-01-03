import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Croatia vs Panama Tickets | World Cup 2026 Group L | 2018 Finalists Face CONCACAF",
  description: "Buy Croatia vs Panama World Cup 2026 tickets. 2018 World Cup finalists Croatia face CONCACAF's Panama in Group L. Modrić's possible final tournament!",
  keywords: ["Croatia vs Panama tickets", "World Cup 2026 Group L", "Croatia World Cup 2026", "Modrić World Cup", "Panama World Cup 2026"],
}

const matchInfo = {
  homeTeam: { name: "Croatia", flag: "🇭🇷", code: "CRO", nickname: "Vatreni" },
  awayTeam: { name: "Panama", flag: "🇵🇦", code: "PAN", nickname: "Los Canaleros" },
  date: "June 18, 2026",
  time: "4:00 PM ET",
  venue: "GEODIS Park",
  city: "Nashville, Tennessee",
  group: "L",
  matchNumber: 28,
  round: "Group Stage - Matchday 1",
}

const croatiaPlayers = [
  { name: "Luka Modrić", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Joško Gvardiol", position: "Defender", club: "Manchester City", number: 20, star: true },
  { name: "Mateo Kovačić", position: "Midfielder", club: "Manchester City", number: 8 },
  { name: "Ivan Perišić", position: "Winger", club: "TBD", number: 4 },
]

const panamaPlayers = [
  { name: "José Fajardo", position: "Forward", club: "Club Universidad Nacional", number: 10, star: true },
  { name: "Adalberto Carrasquilla", position: "Midfielder", club: "Houston Dynamo", number: 8, star: true },
  { name: "Eric Davis", position: "Defender", club: "NK Lokomotiva", number: 15 },
  { name: "César Yanis", position: "Forward", club: "Orlando City", number: 20 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 235, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 205, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 185, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "Friendly", result: "Croatia 2-1 Panama", location: "Zurich" },
]

export default function CroatiaVsPanamaPage() {
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
            <Link href="/fixtures/group-l-world-cup-2026-tickets" className="hover:text-white">Group L</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Croatia vs Panama</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-silver-400 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2018 FINALISTS</Badge>
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
            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">Modrić&apos;s Final Dance?</h3>
                </div>
                <p className="text-red-800">At 40 years old, Luka Modrić enters what could be his final World Cup. The 2018 Ballon d&apos;Or winner led Croatia to that year&apos;s final and third place in 2022. Croatia&apos;s golden generation faces Panama in Nashville as the Vatreni look to add one more chapter to their remarkable story.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Croatia vs Panama: Nashville Welcomes World Cup Pedigree</h2>
              <p>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="text-red-600 hover:underline">Croatia</Link>, the 2018 World Cup finalists and 2022 third-place finishers, begin their 2026 campaign against <Link href="/teams/panama-world-cup-2026-tickets" className="text-blue-600 hover:underline">Panama</Link> at GEODIS Park in Nashville. For Luka Modrić and Croatia&apos;s golden generation, this could represent their final major tournament together. For Panama, it&apos;s a chance to make a statement against elite opposition.
              </p>
              <p>
                Croatia&apos;s recent World Cup history is extraordinary. In 2018, they defeated England in the semifinal and pushed France in the final. In 2022, they beat Brazil on penalties before losing to Argentina. Despite a population of just 4 million, Croatia consistently performs among the world&apos;s best.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Modrić: The Greatest Midfielder</h3>
              <p>
                Luka Modrić continues defying age at Real Madrid. The 2018 Ballon d&apos;Or winner remains Croatia&apos;s heartbeat - his passing, vision, and big-game mentality are unmatched. At 40, this could be his farewell World Cup, and he&apos;ll want to make it count. Croatia builds everything through Modrić&apos;s genius.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Gvardiol: Croatia&apos;s Future</h3>
              <p>
                While Modrić represents Croatia&apos;s glorious past, Joško Gvardiol embodies its future. The Manchester City defender emerged as one of the world&apos;s best young center-backs at the 2022 World Cup. At just 24, he&apos;s already a Premier League title winner. Croatia&apos;s transition won&apos;t be easy, but Gvardiol provides a foundation.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Panama&apos;s Dream</h3>
              <p>
                Los Canaleros made history by qualifying for the 2018 World Cup - their first. Though they lost all three games in Russia, the experience galvanized the nation. The 2026 tournament in North America represents a home region advantage. Playing in the USA means Panamanian fans can travel easily, and MLS-based players like Adalberto Carrasquilla and César Yanis play familiar conditions.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Nashville&apos;s Music City Welcome</h3>
              <p>
                GEODIS Park in Nashville provides an intimate 30,000-seat venue with incredible atmosphere. Nashville&apos;s emerging soccer culture and vibrant entertainment scene create a unique World Cup experience. The city&apos;s passionate MLS fanbase ensures electric energy for this Group L opener.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group L Preview</h3>
              <p>
                With <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline">England</Link> and Ghana also in Group L, Croatia face familiar challenges. Their 2018 semifinal victory over England and consistent performance against major nations give them confidence. But Panama won&apos;t be intimidated - World Cup atmospheres bring out the best in underdogs.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇭🇷</span> Croatia</h4>
                    <div className="space-y-2">
                      {croatiaPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇵🇦</span> Panama</h4>
                    <div className="space-y-2">
                      {panamaPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-blue-50 border border-blue-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-700">#{player.number}</span>
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
                  <div><p className="font-medium">Croatia</p><p className="text-sm text-slate-600">HRT</p></div>
                  <div><p className="font-medium">Panama</p><p className="text-sm text-slate-600">TVN, RPC</p></div>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group L - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">30,000</span></div>
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
                <Link href="/travel/nashville-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Nashville Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Music City welcomes World Cup!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
