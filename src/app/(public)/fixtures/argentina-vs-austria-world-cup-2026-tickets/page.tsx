import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Argentina vs Austria Tickets | World Cup 2026 Group B | MetLife Stadium",
  description: "Buy Argentina vs Austria World Cup 2026 tickets at MetLife Stadium, New Jersey. June 20, 2026. Defending champions face European challengers!",
  keywords: ["Argentina vs Austria tickets", "World Cup 2026 New Jersey", "Argentina World Cup 2026", "Messi World Cup 2026", "MetLife Stadium World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Argentina", flag: "🇦🇷", code: "ARG", nickname: "La Albiceleste" },
  awayTeam: { name: "Austria", flag: "🇦🇹", code: "AUT", nickname: "Das Team" },
  date: "June 20, 2026",
  time: "7:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "B",
  matchNumber: 36,
  round: "Group Stage - Matchday 2",
}

const argentinaPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10, star: true },
  { name: "Julián Álvarez", position: "Forward", club: "Atlético Madrid", number: 9, star: true },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
  { name: "Rodrigo De Paul", position: "Midfielder", club: "Atlético Madrid", number: 7 },
]

const austriaPlayers = [
  { name: "David Alaba", position: "Defender", club: "Real Madrid", number: 4, star: true },
  { name: "Marko Arnautović", position: "Forward", club: "Inter Milan", number: 7, star: true },
  { name: "Christoph Baumgartner", position: "Midfielder", club: "RB Leipzig", number: 14 },
  { name: "Konrad Laimer", position: "Midfielder", club: "Bayern Munich", number: 8 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 325, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 545, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 495, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 465, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 1978, competition: "World Cup", result: "Argentina 2-1 Austria", location: "Buenos Aires" },
  { year: 1998, competition: "Friendly", result: "Argentina 2-1 Austria", location: "Vienna" },
]

export default function ArgentinaVsAustriaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-sky-400 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-b-world-cup-2026-tickets" className="hover:text-white">Group B</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Argentina vs Austria</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-400 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />DEFENDING CHAMPIONS</Badge>
              <Badge className="bg-white text-black">GROUP B</Badge>
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
                  <h3 className="font-bold text-xl text-yellow-900">Messi&apos;s Final World Cup?</h3>
                </div>
                <p className="text-yellow-800">At 38, Lionel Messi enters the 2026 World Cup as the reigning champion and potentially playing his final tournament. The GOAT arrived in the USA via Inter Miami - what better stage than New York/New Jersey&apos;s MetLife Stadium for Argentina&apos;s title defense to continue against Austria!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Argentina vs Austria: Defending Champions Face Das Team</h2>
              <p>
                <Link href="/teams/argentina-world-cup-2026-tickets" className="text-sky-600 hover:underline">Argentina</Link>, the 2022 World Cup champions, brings their title defense to <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">MetLife Stadium in New Jersey</Link> against <Link href="/teams/austria-world-cup-2026-tickets" className="text-red-700 hover:underline">Austria</Link>. Lionel Scaloni&apos;s side enters 2026 as back-to-back Copa América winners (2021, 2024) and the reigning world champions. Austria, led by Real Madrid&apos;s David Alaba, represents Europe&apos;s new wave of competitive nations.
              </p>
              <p>
                The historic rematch echoes 1978, when Argentina hosted and won the World Cup. In that tournament, Mario Kempes&apos; goals led Argentina past Austria 2-1 in the second group stage. Nearly five decades later, another Argentine golden generation defends their crown on American soil.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Messi&apos;s American Dream</h3>
              <p>
                Lionel Messi&apos;s move to Inter Miami in 2023 transformed American soccer. At 38, he enters 2026 having finally completed his trophy cabinet with the 2022 World Cup. Whether this represents his final World Cup remains uncertain, but the intensity of playing in his adopted home country ensures maximum motivation. The metropolitan New York/New Jersey area, with its massive Argentine community, will create an incredible atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Argentina&apos;s Supporting Cast</h3>
              <p>
                Beyond Messi, Argentina boasts depth everywhere. Julián Álvarez&apos;s emergence at Atlético Madrid provides a dynamic striking partner. Enzo Fernández anchors midfield after his record-breaking Chelsea move. The 2022 winning core of Rodrigo De Paul, Ángel Di María&apos;s successors, and defensive excellence remain intact. This is no one-man team.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Austria&apos;s Resurgence</h3>
              <p>
                Austria has rebuilt into a competitive force under Ralf Rangnick. David Alaba&apos;s Real Madrid experience provides defensive leadership and set-piece threat. Marko Arnautović remains a physical presence in attack, while young talents like Christoph Baumgartner and Konrad Laimer offer Bundesliga-quality energy. Das Team reached the Euro 2024 knockouts, proving they can compete.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">MetLife Stadium Showcase</h3>
              <p>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">MetLife Stadium</Link> hosts the World Cup Final - seeing the defending champions play there carries extra significance. The 82,500-seat venue will be packed with Argentine fans from the tri-state area. Austrian supporters will be outnumbered but vocal.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group B Stakes</h3>
              <p>
                Argentina enters Group B as favorites alongside Algeria. Austria must earn every point to have knockout hopes. For Argentina, cruise control isn&apos;t an option - 2022&apos;s opening loss to Saudi Arabia showed any team can cause an upset. Scaloni will demand full focus.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇦🇷</span> Argentina</h4>
                    <div className="space-y-2">
                      {argentinaPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-sky-50 border border-sky-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sky-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇦🇹</span> Austria</h4>
                    <div className="space-y-2">
                      {austriaPlayers.map((player) => (
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
                  <div><p className="font-medium">Argentina</p><p className="text-sm text-slate-600">TyC Sports, TV Pública</p></div>
                  <div><p className="font-medium">Austria</p><p className="text-sm text-slate-600">ORF</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-yellow-400">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - HIGH DEMAND!</CardTitle></CardHeader>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group B - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">82,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group B Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/argentina-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇷</span> Argentina</Link>
                <Link href="/teams/algeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇿</span> Algeria</Link>
                <Link href="/teams/austria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇹</span> Austria</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">New York/New Jersey Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">The Big Apple hosts the defending champions!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
