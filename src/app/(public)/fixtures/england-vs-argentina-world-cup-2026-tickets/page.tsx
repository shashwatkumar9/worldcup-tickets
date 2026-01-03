import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Flame, Trophy, Tv, History } from "lucide-react"

export const metadata: Metadata = {
  title: "England vs Argentina Tickets | World Cup 2026 | Hand of God Rivalry | Historic Clash",
  description: "Buy England vs Argentina World Cup 2026 tickets - football's most historic rivalry! Maradona's Hand of God, Beckham's red card, Owen's wonder goal. Will history repeat?",
  keywords: ["England vs Argentina tickets", "Hand of God World Cup", "World Cup 2026 England Argentina", "Bellingham vs Messi", "historic football rivalry"],
}

const matchInfo = {
  homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", nickname: "Three Lions" },
  awayTeam: { name: "Argentina", flag: "🇦🇷", code: "ARG", nickname: "La Albiceleste" },
  date: "July 4, 2026",
  time: "7:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "Knockout",
  matchNumber: 65,
  round: "Quarter-Final",
}

const englandPlayers = [
  { name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Bukayo Saka", position: "Forward", club: "Arsenal", number: 7, star: true },
  { name: "Phil Foden", position: "Midfielder", club: "Manchester City", number: 11 },
  { name: "Harry Kane", position: "Forward", club: "Bayern Munich", number: 9 },
]

const argentinaPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10, star: true },
  { name: "Julián Álvarez", position: "Forward", club: "Atlético Madrid", number: 9, star: true },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
  { name: "Emiliano Martínez", position: "Goalkeeper", club: "Aston Villa", number: 23 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 595, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 1095, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 945, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 895, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2002, competition: "World Cup", result: "England 1-0 Argentina", location: "Sapporo" },
  { year: 1998, competition: "World Cup R16", result: "Argentina 4-3 (pens) England", location: "Saint-Étienne", historic: true },
  { year: 1986, competition: "World Cup QF", result: "Argentina 2-1 England", location: "Mexico City", iconic: true },
  { year: 1966, competition: "World Cup QF", result: "England 1-0 Argentina", location: "Wembley" },
]

export default function EnglandVsArgentinaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-white to-sky-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="hover:text-white">Quarter-Finals</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">England vs Argentina</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><History className="h-4 w-4 mr-2" />HISTORIC RIVALRY</Badge>
              <Badge className="bg-yellow-400 text-black"><Trophy className="h-4 w-4 mr-2" />DEFENDING CHAMPIONS</Badge>
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
            <Card className="border-red-400 bg-gradient-to-r from-red-50 via-white to-sky-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <History className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-slate-900">FOOTBALL&apos;S GREATEST RIVALRY</h3>
                </div>
                <p className="text-slate-700">1986: Maradona&apos;s &quot;Hand of God&quot; and &quot;Goal of the Century&quot; in one match. 1998: Beckham&apos;s red card and penalty heartbreak. England vs Argentina is football&apos;s most emotionally charged rivalry, intertwined with history, politics, and legendary moments. Now, Bellingham vs Messi. At MetLife Stadium, 40 years of drama could get a new chapter!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">England vs Argentina: The Greatest Rivalry in Football</h2>
              <p>
                <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline">England</Link> versus <Link href="/teams/argentina-world-cup-2026-tickets" className="text-sky-600 hover:underline">Argentina</Link> transcends football. The rivalry carries historical weight from the 1982 Falklands War, which preceded their iconic 1986 World Cup quarterfinal. At <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">MetLife Stadium</Link>, the world&apos;s best midfielder (Bellingham) faces the GOAT (Messi) in potentially Messi&apos;s final major tournament.
              </p>
              <p>
                Mexico City, June 22, 1986. Diego Maradona scored twice - once with his hand (&quot;The Hand of God&quot;) and once after dribbling past the entire England team (&quot;Goal of the Century&quot;). Argentina won 2-1 and went on to lift the trophy. That match created football&apos;s most contentious rivalry.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Saint-Étienne 1998: Beckham&apos;s Heartbreak</h3>
              <p>
                Twelve years later, David Beckham was sent off for kicking Diego Simeone after 47 minutes. England fell in penalties despite a brilliant Michael Owen goal. Beckham became a national villain before his redemption. The 1998 match added another layer of pain and drama to this fixture.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Bellingham: England&apos;s Golden Boy</h3>
              <p>
                Jude Bellingham has emerged as the world&apos;s best midfielder at Real Madrid. At 22, he has La Liga titles, Champions League finals, and England&apos;s hopes on his shoulders. Facing Messi would be a generational passing of the torch. Bellingham&apos;s ability to score in big moments makes him England&apos;s key man.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Messi: The Final Chapter</h3>
              <p>
                Lionel Messi enters 2026 as the reigning World Cup champion, having finally won the trophy in 2022. At 38, this could be his final World Cup. Facing England - a team he&apos;s never beaten - in the knockouts would add to his legacy or create another &quot;what if&quot; moment. Messi against England carries generational weight.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">England&apos;s 60-Year Wait</h3>
              <p>
                England haven&apos;t won a major tournament since 1966. Euro 2020 and 2024 finals ended in heartbreak. Beating Argentina - their ultimate rivals - to reach a World Cup semifinal would be cathartic. Thomas Tuchel&apos;s tactical nous and England&apos;s talented squad offer hope. But Argentina are defending champions.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">MetLife Stadium: New York Backdrop</h3>
              <p>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">MetLife Stadium</Link> hosts the World Cup Final - but this quarterfinal might match it for drama. New York/New Jersey&apos;s massive Argentine community ensures passionate support. English expats and tourists will travel in force. The 82,500-seat stadium will witness football history.
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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Historic World Cup Head-to-Head</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.iconic ? "bg-yellow-100 border-2 border-yellow-400" : match.historic ? "bg-red-100 border-2 border-red-300" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.iconic || match.historic ? "default" : "outline"}>{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-4">Four World Cup meetings, four iconic matches. What will 2026 bring?</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV (Record viewership expected)</p></div>
                  <div><p className="font-medium">Argentina</p><p className="text-sm text-slate-600">TyC Sports, TV Pública</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">1B+ expected viewers</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-600">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - HISTORIC MATCH!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">Football&apos;s greatest rivalry at the World Cup!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">82,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Team Pages</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
                <Link href="/teams/argentina-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇷</span> Argentina (Defending Champions)</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">New York/New Jersey Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">The world&apos;s stage for the ultimate rivalry!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
