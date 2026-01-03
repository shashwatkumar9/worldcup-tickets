import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Flame, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Italy vs Argentina Tickets | World Cup 2026 | Finalissima Champions Clash | Dream Match",
  description: "Buy Italy vs Argentina World Cup 2026 tickets - the two most recent international champions could clash! 4x World Cup winners Italy vs defending champions Argentina!",
  keywords: ["Italy vs Argentina tickets", "World Cup 2026 Italy Argentina", "Italy World Cup 2026", "Argentina World Cup 2026", "Messi vs Italy", "World Cup champions clash"],
}

const matchInfo = {
  homeTeam: { name: "Italy", flag: "🇮🇹", code: "ITA", nickname: "Gli Azzurri" },
  awayTeam: { name: "Argentina", flag: "🇦🇷", code: "ARG", nickname: "La Albiceleste" },
  date: "July 1, 2026",
  time: "4:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "Knockout",
  matchNumber: 62,
  round: "Round of 16",
}

const italyPlayers = [
  { name: "Sandro Tonali", position: "Midfielder", club: "Newcastle", number: 8, star: true },
  { name: "Nicolò Barella", position: "Midfielder", club: "Inter Milan", number: 18, star: true },
  { name: "Federico Chiesa", position: "Forward", club: "Liverpool", number: 14 },
  { name: "Gianluigi Donnarumma", position: "Goalkeeper", club: "PSG", number: 1 },
]

const argentinaPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10, star: true },
  { name: "Julián Álvarez", position: "Forward", club: "Atlético Madrid", number: 9, star: true },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
  { name: "Emiliano Martínez", position: "Goalkeeper", club: "Aston Villa", number: 23 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 395, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 695, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 625, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 575, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "Finalissima", result: "Argentina 3-0 Italy", location: "Wembley" },
  { year: 1990, competition: "World Cup SF", result: "Argentina 4-3 (pens) Italy", location: "Naples", historic: true },
  { year: 1986, competition: "World Cup", result: "Argentina 1-1 Italy", location: "Puebla" },
  { year: 1978, competition: "World Cup", result: "Italy 1-0 Argentina", location: "Buenos Aires" },
]

export default function ItalyVsArgentinaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-white to-sky-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="hover:text-white">Round of 16</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Italy vs Argentina</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-400 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />8 WORLD CUPS COMBINED</Badge>
              <Badge className="bg-white text-black">DREAM MATCH</Badge>
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
            <Card className="border-yellow-400 bg-gradient-to-r from-green-50 via-white to-sky-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-slate-900">Combined 8 World Cup Titles</h3>
                </div>
                <p className="text-slate-700">Italy (4 titles: 1934, 1938, 1982, 2006) versus Argentina (3 titles: 1978, 1986, 2022) represents football royalty. These are the second and third most successful World Cup nations. In American cities filled with Italian and Argentine heritage, this match would be legendary!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Italy vs Argentina: Clash of World Cup Giants</h2>
              <p>
                <Link href="/teams/italy-world-cup-2026-tickets" className="text-green-600 hover:underline">Italy</Link> and <Link href="/teams/argentina-world-cup-2026-tickets" className="text-sky-600 hover:underline">Argentina</Link> share deep footballing connections that transcend borders. Immigration brought millions of Italians to Argentina in the 20th century. Legends like Alfredo Di Stéfano, Maradona, and even Messi have Italian heritage. A potential <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">MetLife Stadium</Link> clash would honor that shared history.
              </p>
              <p>
                The 2022 Finalissima at Wembley saw Argentina demolish Euro 2020 winners Italy 3-0. That match combined the Copa América and European Championship winners. Now, with Italy rebuilding and Argentina defending their World Cup crown, another meeting would carry even greater stakes.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">1990: Naples and Maradona</h3>
              <p>
                The most iconic Italy-Argentina match came in the 1990 World Cup semifinal at Naples - where Maradona was worshipped as Napoli&apos;s savior. The crowd was divided. Argentina won on penalties, and Maradona&apos;s tears became World Cup folklore. That drama could repeat in New York/New Jersey, where both nations have massive communities.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Italy&apos;s Rebirth</h3>
              <p>
                After missing the 2022 World Cup, Italy has rebuilt under Luciano Spalletti. Sandro Tonali and Nicolò Barella provide world-class midfield quality. Federico Chiesa&apos;s return from injury adds attacking threat. The Azzurri&apos;s tactical tradition and big-game experience remain. They know how to win knockout football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Argentina&apos;s Dynasty</h3>
              <p>
                Lionel Scaloni&apos;s Argentina have won everything: Copa América 2021, World Cup 2022, Copa América 2024, and the Finalissima. They are the reigning champions of South America, the world, and the inter-confederation trophy. Messi enters 2026 seeking a second World Cup to cement his GOAT status forever.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Italian-American Connection</h3>
              <p>
                New York/New Jersey is America&apos;s Italian heartland. MetLife Stadium for Italy vs Argentina would see Italian-American families united with their homeland&apos;s team. The atmosphere would rival any European stadium. Argentine supporters from across the Americas would also descend on the venue.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Tactical Battle</h3>
              <p>
                Italy&apos;s defensive discipline versus Argentina&apos;s attacking brilliance creates a fascinating tactical contest. Both nations play structured, intelligent football. Both have world-class goalkeepers in Donnarumma and Martínez. This would be a chess match between two of football&apos;s greatest tactical cultures.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇮🇹</span> Italy</h4>
                    <div className="space-y-2">
                      {italyPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-green-50 border border-green-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-green-700">#{player.number}</span>
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
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Italy</p><p className="text-sm text-slate-600">RAI</p></div>
                  <div><p className="font-medium">Argentina</p><p className="text-sm text-slate-600">TyC Sports, TV Pública</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-yellow-400">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - DREAM MATCH!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-yellow-700 font-medium">A clash of World Cup royalty!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Round of 16 (Projected)</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">82,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Team Pages</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/italy-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇮🇹</span> Italy (4x Champions)</Link>
                <Link href="/teams/argentina-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇷</span> Argentina (Defending Champions)</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">New York/New Jersey Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Italian and Argentine heritage cities!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
