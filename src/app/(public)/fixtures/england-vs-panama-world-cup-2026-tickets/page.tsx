import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "England vs Panama Tickets | World Cup 2026 Group L | Three Lions vs Los Canaleros",
  description: "Buy England vs Panama World Cup 2026 tickets - Group L clash! 2018 World Cup rematch as England seek to avenge their group stage thrashing. Bellingham leads the charge.",
  keywords: ["England vs Panama tickets", "World Cup 2026 Group L", "England World Cup 2026", "Panama World Cup", "2018 rematch"],
}

const matchInfo = {
  homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", nickname: "Three Lions" },
  awayTeam: { name: "Panama", flag: "🇵🇦", code: "PAN", nickname: "Los Canaleros" },
  date: "June 18, 2026",
  time: "5:00 PM ET",
  venue: "Lincoln Financial Field",
  city: "Philadelphia, Pennsylvania",
  group: "L",
  matchNumber: 26,
  round: "Group Stage - Matchday 1",
}

const englandPlayers = [
  { name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Bukayo Saka", position: "Winger", club: "Arsenal", number: 7, star: true },
  { name: "Phil Foden", position: "Midfielder", club: "Manchester City", number: 11 },
  { name: "Harry Kane", position: "Forward", club: "Bayern Munich", number: 9 },
]

const panamaPlayers = [
  { name: "José Fajardo", position: "Forward", club: "Saprissa", number: 9, star: true },
  { name: "Adalberto Carrasquilla", position: "Midfielder", club: "Houston Dynamo", number: 8, star: true },
  { name: "Eric Davis", position: "Defender", club: "Brentford", number: 15 },
  { name: "César Yanis", position: "Forward", club: "Deportivo La Coruña", number: 7 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 195, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 345, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 305, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 275, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "World Cup Group", result: "England 6-1 Panama", location: "Nizhny Novgorod" },
]

export default function EnglandVsPanamaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-white via-red-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-l-world-cup-2026-tickets" className="hover:text-white">Group L</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">England vs Panama</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2018 REMATCH</Badge>
              <Badge className="bg-white text-black">GROUP L</Badge>
            </div>
            <div className="flex items-center justify-center gap-8 my-8">
              <div className="text-center">
                <span className="text-8xl">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl font-bold text-white mt-2">England</h2>
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
                  <h3 className="font-bold text-xl text-red-900">2018 WORLD CUP REMATCH</h3>
                </div>
                <p className="text-red-800">England demolished Panama 6-1 at Russia 2018 in the group stage. Harry Kane scored a hat-trick that day. Now Jude Bellingham leads a transformed Three Lions side against Los Canaleros once again. Panama will be desperate to show improvement and make their mark on their second World Cup appearance.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">England vs Panama: Three Lions Hunt Group L Glory</h2>
              <p>
                <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline">England</Link> faces <Link href="/teams/panama-world-cup-2026-tickets" className="text-blue-600 hover:underline">Panama</Link> at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-green-600 hover:underline">Lincoln Financial Field in Philadelphia</Link>. The Three Lions enter as Group L favorites against Central America&apos;s underdogs.
              </p>
              <p>
                England&apos;s golden generation has evolved since 2018. Jude Bellingham has become one of world football&apos;s best players at Real Madrid. Bukayo Saka and Phil Foden provide exceptional quality in attack. Harry Kane remains the focal point as Bayern Munich&apos;s Bundesliga top scorer.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Bellingham&apos;s Brilliance</h3>
              <p>
                Jude Bellingham&apos;s move to Real Madrid has elevated him to football&apos;s elite. Goals, assists, and match-winning moments have made him the tournament&apos;s most talked-about player. His performances will likely determine how far England progress.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Panama&apos;s Redemption</h3>
              <p>
                That 6-1 defeat in 2018 stung Panama deeply. But reaching a second World Cup represents continued progress for Los Canaleros. They&apos;ll approach this rematch with better preparation and nothing to lose. CONCACAF nations have shown they can compete.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Philadelphia Setting</h3>
              <p>
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-green-600 hover:underline">Lincoln Financial Field</Link> hosts England in the City of Brotherly Love. Philadelphia&apos;s British expat community will fill the stands, while Panama&apos;s passionate supporters bring Caribbean energy. The atmosphere promises to be incredible.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group L Dynamics</h3>
              <p>
                With Croatia and Ghana also in Group L, England knows they must start strongly. A comfortable victory against Panama would set the tone for tougher tests ahead. Panama needs to keep the score respectable and take any chances that arise.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</h4>
                    <div className="space-y-2">
                      {englandPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">England won their only previous meeting 6-1 at Russia 2018. Kane scored a hat-trick.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">England</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                  <div><p className="font-medium">Panama</p><p className="text-sm text-slate-600">TVN, RPC</p></div>
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
                <p className="text-sm text-red-700 font-medium">2018 World Cup rematch!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">69,796</span></div>
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
                <Link href="/travel/philadelphia-world-cup-2026-travel-guide" className="text-green-600 hover:underline text-sm">Philadelphia Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore the City of Brotherly Love!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
