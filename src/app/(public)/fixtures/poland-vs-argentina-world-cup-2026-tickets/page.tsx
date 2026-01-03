import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Zap, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Poland vs Argentina Tickets | World Cup 2026 | Lewandowski vs Messi Rematch",
  description: "Buy Poland vs Argentina World Cup 2026 tickets - Lewandowski vs Messi! The two best players of their generation clash again after 2022's 2-0 Argentine victory!",
  keywords: ["Poland vs Argentina tickets", "Lewandowski vs Messi", "World Cup 2026", "Poland World Cup 2026", "Argentina World Cup 2026", "best players clash"],
}

const matchInfo = {
  homeTeam: { name: "Poland", flag: "🇵🇱", code: "POL", nickname: "Biało-czerwoni" },
  awayTeam: { name: "Argentina", flag: "🇦🇷", code: "ARG", nickname: "La Albiceleste" },
  date: "June 24, 2026",
  time: "7:00 PM ET",
  venue: "Hard Rock Stadium",
  city: "Miami, Florida",
  group: "B",
  matchNumber: 47,
  round: "Group Stage - Matchday 3",
}

const polandPlayers = [
  { name: "Robert Lewandowski", position: "Forward", club: "Barcelona", number: 9, star: true },
  { name: "Piotr Zieliński", position: "Midfielder", club: "Inter Milan", number: 20, star: true },
  { name: "Jakub Kiwior", position: "Defender", club: "Arsenal", number: 14 },
  { name: "Nicola Zalewski", position: "Midfielder", club: "Roma", number: 17 },
]

const argentinaPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10, star: true },
  { name: "Julián Álvarez", position: "Forward", club: "Atlético Madrid", number: 9, star: true },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
  { name: "Emiliano Martínez", position: "Goalkeeper", club: "Aston Villa", number: 23 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 295, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 495, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 445, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 415, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Argentina 2-0 Poland", location: "Stadium 974", notable: true },
  { year: 2011, competition: "Friendly", result: "Poland 2-1 Argentina", location: "Warsaw" },
  { year: 1978, competition: "World Cup", result: "Argentina 2-0 Poland", location: "Rosario" },
  { year: 1974, competition: "World Cup", result: "Poland 3-2 Argentina", location: "Stuttgart" },
]

export default function PolandVsArgentinaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-sky-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-b-world-cup-2026-tickets" className="hover:text-white">Group B</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Poland vs Argentina</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Zap className="h-4 w-4 mr-2" />LEWANDOWSKI vs MESSI</Badge>
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
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">TWO GENERATIONS&apos; GREATEST PLAYERS</h3>
                </div>
                <p className="text-yellow-800">Lionel Messi and Robert Lewandowski - the two best players of their generation, Barcelona teammates, and perennial Ballon d&apos;Or rivals. In 2022, Messi&apos;s Argentina defeated Lewandowski&apos;s Poland 2-0, though both advanced. At 38 and 37 respectively, this could be their final World Cup meeting. Miami hosts this generational clash!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Poland vs Argentina: The GOAT Debate Live</h2>
              <p>
                <Link href="/teams/poland-world-cup-2026-tickets" className="text-red-600 hover:underline">Poland</Link>&apos;s Robert Lewandowski meets <Link href="/teams/argentina-world-cup-2026-tickets" className="text-sky-600 hover:underline">Argentina</Link>&apos;s Lionel Messi again at <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Hard Rock Stadium in Miami</Link> - Messi&apos;s adopted home city. These two legends have battled for Ballon d&apos;Or recognition throughout their careers. Messi won in 2022 with the World Cup. Lewandowski watches Argentina lift the trophy while Poland fell in the Round of 16.
              </p>
              <p>
                Their 2022 meeting was tense. Messi missed a penalty that Wojciech Szczęsny saved. Argentina still won 2-0, but both teams advanced. Lewandowski and Messi embraced at full-time - mutual respect between two all-time greats. In 2026, likely their final World Cup, the stakes feel even higher.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Lewandowski: Poland&apos;s Everything</h3>
              <p>
                Robert Lewandowski is Poland&apos;s greatest ever player and one of the best strikers in football history. At Barcelona, he continues scoring at elite levels. At 37, he enters the 2026 World Cup knowing it&apos;s probably his last. Poland has never reached a World Cup semifinal. Lewandowski wants that legacy before retirement.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Messi&apos;s Miami Magic</h3>
              <p>
                Lionel Messi plays this match in his adopted home city. Inter Miami&apos;s Hard Rock Stadium will be filled with fans who watch him weekly in MLS. At 38, defending his World Cup title, Messi has nothing left to prove. But legends don&apos;t coast. He&apos;ll want to show Lewandowski and the world why he&apos;s the GOAT.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Barcelona Teammates</h3>
              <p>
                Messi and Lewandowski never played together at Barcelona - Messi left in 2021, Lewandowski arrived in 2022. They&apos;ve been rivals, not teammates. The mutual respect is evident, but both are ultimate competitors. Neither wants to lose to the other on the World Cup stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Poland&apos;s Supporting Cast</h3>
              <p>
                Beyond Lewandowski, Poland has quality. Piotr Zieliński provides Inter Milan creativity in midfield. Jakub Kiwior adds Arsenal defensive solidity. Nicola Zalewski offers Serie A experience from Roma. Poland isn&apos;t a one-man team, though Lewandowski remains their talisman.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group B Decider</h3>
              <p>
                This final Group B match could determine positions and knockout paths. Argentina as defending champions will target top spot. Poland needs to navigate a group that likely includes Algeria and Austria. Both teams know each other from 2022 - there will be no surprises, just quality versus quality.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇵🇱</span> Poland</h4>
                    <div className="space-y-2">
                      {polandPlayers.map((player) => (
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
              <CardHeader><CardTitle>Head-to-Head Record</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.notable ? "bg-yellow-100 border-2 border-yellow-300" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.notable ? "default" : "outline"}>{match.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Poland</p><p className="text-sm text-slate-600">TVP</p></div>
                  <div><p className="font-medium">Argentina</p><p className="text-sm text-slate-600">TyC Sports, TV Pública</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-yellow-400">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - LEGENDS CLASH!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-yellow-700 font-medium">Lewandowski vs Messi in Miami!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group B - Matchday 3</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">64,767</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group B Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/argentina-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇷</span> Argentina (Champions)</Link>
                <Link href="/teams/poland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇱</span> Poland</Link>
                <Link href="/teams/algeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇿</span> Algeria</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Miami Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Messi&apos;s home hosts the legends clash!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
