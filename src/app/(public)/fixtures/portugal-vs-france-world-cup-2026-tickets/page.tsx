import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Flame, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Portugal vs France Tickets | World Cup 2026 | Euro 2016 Final Rematch | Ronaldo vs Mbappé",
  description: "Buy Portugal vs France World Cup 2026 tickets - Euro 2016 Final rematch! Cristiano Ronaldo's last World Cup vs Kylian Mbappé. Generational showdown!",
  keywords: ["Portugal vs France tickets", "Ronaldo vs Mbappé", "World Cup 2026", "Euro 2016 rematch", "Portugal World Cup 2026", "France World Cup 2026"],
}

const matchInfo = {
  homeTeam: { name: "Portugal", flag: "🇵🇹", code: "POR", nickname: "Seleção das Quinas" },
  awayTeam: { name: "France", flag: "🇫🇷", code: "FRA", nickname: "Les Bleus" },
  date: "July 3, 2026",
  time: "4:00 PM ET",
  venue: "SoFi Stadium",
  city: "Los Angeles, California",
  group: "Knockout",
  matchNumber: 64,
  round: "Quarter-Final",
}

const portugalPlayers = [
  { name: "Cristiano Ronaldo", position: "Forward", club: "Al-Nassr", number: 7, star: true },
  { name: "Rafael Leão", position: "Forward", club: "AC Milan", number: 17, star: true },
  { name: "Bruno Fernandes", position: "Midfielder", club: "Manchester United", number: 8 },
  { name: "João Cancelo", position: "Defender", club: "Barcelona", number: 20 },
]

const francePlayers = [
  { name: "Kylian Mbappé", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Antoine Griezmann", position: "Forward", club: "Atlético Madrid", number: 7, star: true },
  { name: "Aurélien Tchouaméni", position: "Midfielder", club: "Real Madrid", number: 8 },
  { name: "Mike Maignan", position: "Goalkeeper", club: "AC Milan", number: 16 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 495, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 895, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 795, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 745, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2021, competition: "Euro 2020", result: "Portugal 2-2 France", location: "Budapest" },
  { year: 2016, competition: "Euro Final", result: "Portugal 1-0 France (aet)", location: "Paris", historic: true },
  { year: 2014, competition: "Friendly", result: "France 2-1 Portugal", location: "Paris" },
  { year: 2006, competition: "World Cup SF", result: "France 1-0 Portugal", location: "Munich" },
]

export default function PortugalVsFrancePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-green-700 to-blue-800 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="hover:text-white">Quarter-Finals</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Portugal vs France</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-400 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />EURO 2016 REMATCH</Badge>
              <Badge className="bg-red-600 text-white"><Flame className="h-4 w-4 mr-2" />RONALDO vs MBAPPÉ</Badge>
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
            <Card className="border-yellow-400 bg-gradient-to-r from-red-50 via-white to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-slate-900">PARIS 2016: PORTUGAL&apos;S MOMENT</h3>
                </div>
                <p className="text-slate-700">Cristiano Ronaldo left the Euro 2016 Final in tears after 25 minutes with a knee injury. Portugal played 90+ minutes without their captain against hosts France. Then Eder struck in extra time. Portugal won their first major trophy. Ronaldo&apos;s tears turned to joy as he lifted the Henri Delaunay Trophy. Now, potentially his final World Cup, he faces France again!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Portugal vs France: Generations Collide</h2>
              <p>
                <Link href="/teams/portugal-world-cup-2026-tickets" className="text-red-700 hover:underline">Portugal</Link> versus <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link> offers the ultimate generational showdown. Cristiano Ronaldo, 41, in what could be his final World Cup, faces Kylian Mbappé, 27, the player many consider his heir to football&apos;s throne. At <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">SoFi Stadium in Los Angeles</Link>, two European powerhouses battle for a semifinal spot.
              </p>
              <p>
                These nations have met in major tournament knockouts before. France won the 2006 World Cup semifinal 1-0. Portugal claimed revenge in the 2016 Euro Final. The Euro 2020 group stage saw a thrilling 2-2 draw with Ronaldo and Karim Benzema each scoring twice. Every meeting between these rivals delivers drama.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Ronaldo&apos;s Last Dance</h3>
              <p>
                At 41, Cristiano Ronaldo enters the 2026 World Cup determined to add the one trophy missing from his incredible collection. He has everything else: Champions Leagues, Euro championships, domestic titles across four countries. A World Cup would cement his GOAT argument. Against France, in the quarterfinals, he gets a chance for another iconic moment.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Mbappé: The Present and Future</h3>
              <p>
                Kylian Mbappé has moved to Real Madrid and established himself as football&apos;s brightest star. His 2022 World Cup final hat-trick against Argentina was historic even in defeat. At 27, Mbappé enters his prime World Cup years. This could be the tournament where he cements his own legacy. Facing Ronaldo adds extra motivation.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">France&apos;s Three-Peat Quest</h3>
              <p>
                France seeks an unprecedented feat: three consecutive World Cup finals. They won in 2018, lost in 2022&apos;s epic final to Argentina, and arrive in 2026 hungry for redemption. Didier Deschamps&apos; squad combines experience (Griezmann, Giroud&apos;s successors) with youth (Tchouaméni, Camavinga). France are always favorites.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Portugal&apos;s Golden Generation 2.0</h3>
              <p>
                Beyond Ronaldo, Portugal boasts serious talent. Rafael Leão has become one of Serie A&apos;s best attackers at AC Milan. Bruno Fernandes provides Premier League creativity. Young talents continue emerging from Portugal&apos;s exceptional academy system. This is more than a one-man team.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Hollywood Setting</h3>
              <p>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">SoFi Stadium</Link> in Los Angeles provides a fitting stage for this blockbuster. Hollywood&apos;s home brings glamour to match the star power on the pitch. LA&apos;s massive Portuguese and French communities ensure passionate support. This quarterfinal could be the tournament&apos;s most-watched match.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇵🇹</span> Portugal</h4>
                    <div className="space-y-2">
                      {portugalPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇫🇷</span> France</h4>
                    <div className="space-y-2">
                      {francePlayers.map((player) => (
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
              <CardHeader><CardTitle>Historic Head-to-Head</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.historic ? "bg-yellow-100 border-2 border-yellow-400" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.historic ? "default" : "outline"}>{match.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Portugal</p><p className="text-sm text-slate-600">RTP, SIC, TVI</p></div>
                  <div><p className="font-medium">France</p><p className="text-sm text-slate-600">TF1, M6, beIN Sports</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">1B+ expected viewers</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-yellow-400">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - BLOCKBUSTER!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-yellow-700 font-medium">Ronaldo vs Mbappé - generational showdown!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Quarter-Final (Projected)</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">70,240</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Team Pages</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/portugal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇹</span> Portugal</Link>
                <Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇫🇷</span> France</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Los Angeles Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Hollywood hosts football royalty!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
