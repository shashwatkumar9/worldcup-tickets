import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Zap, Flag, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Canada vs Croatia Tickets | World Cup 2026 | 2022 Rematch | Host Nation Revenge",
  description: "Buy Canada vs Croatia World Cup 2026 tickets - rematch of 2022's 4-1 loss! Canada hosts at their home World Cup. Alphonso Davies leads host nation vs Modrić!",
  keywords: ["Canada vs Croatia tickets", "World Cup 2026 Canada", "Canada World Cup 2026", "Croatia World Cup 2026", "Alphonso Davies World Cup", "Modrić World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Canada", flag: "🇨🇦", code: "CAN", nickname: "CanMNT" },
  awayTeam: { name: "Croatia", flag: "🇭🇷", code: "CRO", nickname: "Vatreni" },
  date: "June 17, 2026",
  time: "7:00 PM ET",
  venue: "BMO Field",
  city: "Toronto, Canada",
  group: "D",
  matchNumber: 18,
  round: "Group Stage - Matchday 1",
}

const canadaPlayers = [
  { name: "Alphonso Davies", position: "Defender", club: "Bayern Munich", number: 19, star: true },
  { name: "Jonathan David", position: "Forward", club: "Lille", number: 20, star: true },
  { name: "Cyle Larin", position: "Forward", club: "Real Valladolid", number: 17 },
  { name: "Tajon Buchanan", position: "Winger", club: "Inter Milan", number: 11 },
]

const croatiaPlayers = [
  { name: "Luka Modrić", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Joško Gvardiol", position: "Defender", club: "Manchester City", number: 20, star: true },
  { name: "Mateo Kovačić", position: "Midfielder", club: "Manchester City", number: 8 },
  { name: "Ivan Perišić", position: "Winger", club: "TBD", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 245, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 395, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 355, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 325, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Croatia 4-1 Canada", location: "Al Rayyan", painful: true },
]

export default function CanadaVsCroatiaPage() {
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
            <Link href="/fixtures/group-d-world-cup-2026-tickets" className="hover:text-white">Group D</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Canada vs Croatia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Flag className="h-4 w-4 mr-2" />HOST NATION</Badge>
              <Badge className="bg-white text-red-700"><Trophy className="h-4 w-4 mr-2" />2018 FINALISTS</Badge>
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
                  <Zap className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">QATAR 2022: A PAINFUL LESSON</h3>
                </div>
                <p className="text-red-800">November 27, 2022: Canada took an early lead through Alphonso Davies - their first-ever World Cup goal. Then Croatia responded ruthlessly. Kramarić (2), Livaja, and Majer gave the eventual third-place finishers a 4-1 victory. Canada was eliminated. Now, at their home World Cup in Toronto, Canada gets revenge!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Canada vs Croatia: Host Nation Redemption</h2>
              <p>
                <Link href="/teams/canada-world-cup-2026-tickets" className="text-red-600 hover:underline">Canada</Link> hosts <Link href="/teams/croatia-world-cup-2026-tickets" className="text-red-700 hover:underline">Croatia</Link> at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-red-600 hover:underline">BMO Field in Toronto</Link> seeking redemption for 2022&apos;s painful 4-1 defeat. As co-hosts of the 2026 World Cup, Canada gets home advantage against the team that ended their first World Cup appearance in 36 years so brutally.
              </p>
              <p>
                That 2022 match showed Canada&apos;s quality (Davies&apos; early goal) but also their inexperience. Croatia&apos;s class and big-game mentality were decisive. Luka Modrić orchestrated the destruction. Canada learned what World Cup football demands. Four years later, they want to prove they belong.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Davies: Canada&apos;s Star</h3>
              <p>
                Alphonso Davies is one of world football&apos;s best left-backs at Bayern Munich. His pace, skill, and attacking threat make him a genuine star. At 25, playing his home World Cup, Davies carries Canadian hopes. His 2022 goal - Canada&apos;s first-ever World Cup goal - showed what he can do on the biggest stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Jonathan David&apos;s Rise</h3>
              <p>
                Since 2022, Jonathan David has become one of Europe&apos;s most sought-after strikers. His goals for Lille have attracted Premier League giants. At 26, David enters the 2026 World Cup as Canada&apos;s focal point in attack. Against Croatia&apos;s experienced defense, his movement and finishing will be tested.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Modrić&apos;s Final Bow?</h3>
              <p>
                At 40, Luka Modrić plays possibly his final World Cup. The 2018 Ballon d&apos;Or winner, 2018 finalist, and 2022 third-place hero has nothing left to prove. But legends don&apos;t fade quietly. Modrić will want to lead Croatia one last time. His experience versus Canada&apos;s home enthusiasm creates fascinating tension.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Toronto: Canada&apos;s Soccer Home</h3>
              <p>
                <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-red-600 hover:underline">BMO Field</Link> in Toronto is Canadian soccer&apos;s heart. Toronto FC&apos;s passionate fanbase has created one of MLS&apos;s best atmospheres. For a home World Cup match, the 45,000 capacity stadium will be electric. Canada needs this energy to overcome Croatian quality.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group D Opener</h3>
              <p>
                This Group D opener sets the tone for both teams. Canada cannot afford another painful defeat at home. Croatia, eyeing another deep run, needs points to manage the group. A Canadian victory would announce their arrival as genuine World Cup competitors.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇨🇦</span> Canada</h4>
                    <div className="space-y-2">
                      {canadaPlayers.map((player) => (
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
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.painful ? "bg-red-100 border-2 border-red-400" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant="destructive">{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-4">Canada&apos;s only World Cup meeting with Croatia ended in painful defeat. Time for revenge!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Canada</p><p className="text-sm text-slate-600">TSN, CTV (National Event!)</p></div>
                  <div><p className="font-medium">Croatia</p><p className="text-sm text-slate-600">HRT</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-600">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - HOST NATION!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">Canada&apos;s home World Cup revenge match!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group D - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">45,736</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group D Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/canada-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇦</span> Canada (Host)</Link>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇭🇷</span> Croatia</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/toronto-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Toronto Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Canada&apos;s soccer capital awaits!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
