import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "England vs Croatia Tickets | 2018 Semifinal Rematch | World Cup 2026 Group L",
  description: "Buy England vs Croatia World Cup 2026 tickets at AT&T Stadium, Dallas. June 17, 2026. 2018 World Cup semifinal rematch! Bellingham vs Modrić!",
  keywords: ["England vs Croatia tickets", "World Cup 2026 Dallas", "2018 semifinal rematch", "Bellingham vs Modric", "AT&T Stadium World Cup", "England World Cup 2026"],
}

const matchInfo = {
  homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", nickname: "Three Lions" },
  awayTeam: { name: "Croatia", flag: "🇭🇷", code: "CRO", nickname: "Vatreni" },
  date: "June 17, 2026",
  time: "4:00 PM ET",
  venue: "AT&T Stadium",
  city: "Dallas, Texas",
  group: "L",
  matchNumber: 21,
  round: "Group Stage - Matchday 1",
  special: "2018 SEMIFINAL REMATCH",
}

const englandPlayers = [
  { name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Bukayo Saka", position: "Forward", club: "Arsenal", number: 7, star: true },
  { name: "Harry Kane", position: "Forward", club: "Bayern Munich", number: 9 },
  { name: "Declan Rice", position: "Midfielder", club: "Arsenal", number: 4 },
]

const croatiaPlayers = [
  { name: "Luka Modrić", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Joško Gvardiol", position: "Defender", club: "Manchester City", number: 4, star: true },
  { name: "Mateo Kovačić", position: "Midfielder", club: "Manchester City", number: 8 },
  { name: "Ivan Perišić", position: "Forward", club: "Hajduk Split", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 255, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 395, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 365, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 335, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2021, competition: "Euro 2020", result: "England 1-0 Croatia", location: "London" },
  { year: 2018, competition: "World Cup SF", result: "Croatia 2-1 England (ET)", location: "Moscow" },
  { year: 2018, competition: "Nations League", result: "England 0-0 Croatia", location: "Rijeka" },
]

export default function EnglandVsCroatiaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-white to-blue-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-l-world-cup-2026-tickets" className="hover:text-white">Group L</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">England vs Croatia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />2018 SEMIFINAL REMATCH</Badge>
              <Badge className="bg-white text-red-800">GROUP L</Badge>
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
                  <h3 className="font-bold text-xl text-yellow-900">The 2018 Heartbreak Rematch</h3>
                </div>
                <p className="text-yellow-800">England&apos;s dreams were shattered in Moscow when Croatia&apos;s Mario Mandžukić scored in extra time to send the Vatreni to the World Cup Final. That 2-1 defeat remains England&apos;s most painful World Cup memory of the modern era. Now, eight years later, revenge awaits at AT&T Stadium in Dallas.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">England vs Croatia: Unfinished Business</h2>
              <p>
                The 2018 World Cup semifinal in Moscow haunts English football. <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline">England</Link> led through Kieran Trippier&apos;s free kick, dreams of a first Final since 1966 tantalizingly close. Then <Link href="/teams/croatia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Croatia</Link> happened. Ivan Perišić equalized, and Mario Mandžukić&apos;s extra-time winner sent England home heartbroken.
              </p>
              <p>
                Now, at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">AT&T Stadium in Dallas</Link>, these rivals meet again in the group stage. The stakes are different but the intensity will match any knockout game. Both teams need a strong start in Group L, and neither will want to lose this psychological battle.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Bellingham vs Modrić: Past Meets Future</h3>
              <p>
                The narrative writes itself. Jude Bellingham, 22, Real Madrid&apos;s midfield maestro and England&apos;s talisman, faces Luka Modrić, 40, perhaps the greatest midfielder of his generation in his final World Cup. They share a dressing room at the Bernabéu; here, they&apos;re rivals seeking to lead their nations to glory.
              </p>
              <p>
                Modrić was the heartbeat of Croatia&apos;s 2018 miracle run and their 2022 third-place finish. At 40, this is almost certainly his World Cup farewell tour. But anyone who watched him dominate Argentina in the 2022 semifinal knows age hasn&apos;t diminished his magic. His passing range, composure, and ability to control games remain elite.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">England&apos;s Golden Generation</h3>
              <p>
                Thomas Tuchel&apos;s England enters 2026 with perhaps their strongest squad ever. Bellingham leads a midfield that includes Declan Rice and Phil Foden. Bukayo Saka and Harry Kane provide firepower. This generation has reached two Euro finals and a World Cup semifinal - now they demand silverware.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Croatia&apos;s Final Dance</h3>
              <p>
                For Modrić, Perišić, and Croatia&apos;s golden generation, 2026 represents their last chance at World Cup glory. Reaching the 2018 Final as a nation of 4 million people was remarkable; finishing third in 2022 confirmed their elite status. Young stars like Joško Gvardiol (Manchester City) ensure the transition, but the old guard wants one more unforgettable tournament.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Jerry World Hosts Football&apos;s Biggest Stage</h3>
              <p>
                AT&T Stadium, affectionately known as &quot;Jerry World,&quot; provides a spectacular setting. The 93,000-seat venue features the world&apos;s largest video screen and a retractable roof. For this blockbuster opener, expect a crowd split between passionate Three Lions supporters and Croatia&apos;s famous checkered faithful.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇭🇷</span> Croatia</h4>
                    <div className="space-y-2">
                      {croatiaPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600">England gained revenge at Euro 2020 with a 1-0 win at Wembley, but the 2018 semifinal defeat still stings.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                  <div><p className="font-medium">Croatia</p><p className="text-sm text-slate-600">HRT, Nova TV</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">🔥 2018 Rematch - Very High Demand!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">92,967</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group L Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
                <Link href="/teams/ghana-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇬🇭</span> Ghana</Link>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇭🇷</span> Croatia</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Dallas Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Everything&apos;s bigger in Texas - including World Cup drama!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
