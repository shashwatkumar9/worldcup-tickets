import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Flame, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Portugal vs Colombia Tickets | World Cup 2026 Group K | Estadio Azteca",
  description: "Buy Portugal vs Colombia World Cup 2026 tickets at Estadio Azteca, Mexico City. June 27, 2026. Ronaldo vs Luis Díaz in Group K showdown!",
  keywords: ["Portugal vs Colombia tickets", "World Cup 2026 Mexico City", "Ronaldo World Cup 2026", "Luis Diaz World Cup", "Estadio Azteca World Cup", "Group K World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Colombia", flag: "🇨🇴", code: "COL", nickname: "Los Cafeteros" },
  awayTeam: { name: "Portugal", flag: "🇵🇹", code: "POR", nickname: "Seleção" },
  date: "June 27, 2026",
  time: "7:30 PM ET",
  venue: "Estadio Azteca",
  city: "Mexico City, Mexico",
  group: "K",
  matchNumber: 69,
  round: "Group Stage - Matchday 3",
  special: "GROUP K DECIDER",
}

const portugalPlayers = [
  { name: "Cristiano Ronaldo", position: "Forward", club: "Al-Nassr", number: 7, star: true },
  { name: "Bruno Fernandes", position: "Midfielder", club: "Manchester United", number: 8, star: true },
  { name: "Rafael Leão", position: "Forward", club: "AC Milan", number: 17 },
  { name: "Rúben Dias", position: "Defender", club: "Manchester City", number: 4 },
]

const colombiaPlayers = [
  { name: "Luis Díaz", position: "Forward", club: "Liverpool", number: 7, star: true },
  { name: "James Rodríguez", position: "Midfielder", club: "São Paulo", number: 10, star: true },
  { name: "Jhon Córdoba", position: "Forward", club: "Krasnodar", number: 9 },
  { name: "Jefferson Lerma", position: "Midfielder", club: "Crystal Palace", number: 16 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 245, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 385, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 345, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 315, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "World Cup", result: "Colombia 1-1 Portugal", location: "n/a - never met in WC" },
  { year: 2016, competition: "Friendly", result: "Portugal 0-1 Colombia", location: "Paris" },
  { year: 2008, competition: "Friendly", result: "Colombia 0-0 Portugal", location: "New Jersey" },
]

export default function PortugalVsColombiaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-yellow-400 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-k-world-cup-2026-tickets" className="hover:text-white">Group K</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Colombia vs Portugal</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />GROUP K DECIDER</Badge>
              <Badge className="bg-white text-red-800">GROUP K</Badge>
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
                  <Star className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">Ronaldo&apos;s Potential Final World Cup Match</h3>
                </div>
                <p className="text-yellow-800">At 41 years old, this could be Cristiano Ronaldo&apos;s final World Cup group stage match. The all-time leading international goalscorer faces Colombia in a fixture that will likely determine who tops Group K. At the legendary Estadio Azteca, history awaits.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Colombia vs Portugal: Stars Collide at the Azteca</h2>
              <p>
                <Link href="/teams/colombia-world-cup-2026-tickets" className="text-yellow-600 hover:underline">Colombia</Link> hosts <Link href="/teams/portugal-world-cup-2026-tickets" className="text-red-600 hover:underline">Portugal</Link> at <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-600 hover:underline">Estadio Azteca in Mexico City</Link> in what could be the decisive Group K match. Luis Díaz, Liverpool&apos;s electric winger, faces Cristiano Ronaldo, football&apos;s most prolific goalscorer, in a clash of generations and styles.
              </p>
              <p>
                This match takes place on the final day of the group stage, meaning both teams will know exactly what they need. Whether fighting for first place or survival, the intensity will match any knockout game. The 87,000-seat Azteca, steeped in World Cup history, provides the perfect amphitheater.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Ronaldo&apos;s Last Dance?</h3>
              <p>
                Cristiano Ronaldo has redefined goalscoring longevity. At 41, having smashed international records at Al-Nassr, he remains Portugal&apos;s talisman. This 2026 World Cup is almost certainly his farewell, and the drive for a World Cup winners&apos; medal - the one major trophy missing from his collection - will fuel every moment. If Portugal need a result, Ronaldo will deliver or die trying.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Luis Díaz: Colombia&apos;s Joy</h3>
              <p>
                Luis Díaz has become one of the Premier League&apos;s most beloved players since joining Liverpool. His dribbling, finishing, and infectious smile have made him a global star. At 29 during this World Cup, he enters his peak years ready to lead Colombia to knockout stage glory. James Rodríguez, the 2014 Golden Boot winner, provides veteran savvy and set-piece magic.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Colombia&apos;s Return</h3>
              <p>
                After missing the 2022 World Cup, Colombia returns with a point to prove. Los Cafeteros reached the 2014 quarterfinals behind James Rodríguez&apos;s brilliance, and their passionate fanbase has waited years for another World Cup adventure. The substantial Colombian community in Mexico City ensures passionate support.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Estadio Azteca: Where Legends Play</h3>
              <p>
                No stadium carries more World Cup weight than the Azteca. Pelé lifted the trophy here in 1970. Maradona&apos;s &quot;Hand of God&quot; and &quot;Goal of the Century&quot; both occurred within these walls in 1986. Now, in 2026, a new generation of stars writes their chapter. The altitude (7,200 feet), the noise, and the history create football&apos;s most compelling stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group K Standings Battle</h3>
              <p>
                With <Link href="/teams/uzbekistan-world-cup-2026-tickets" className="text-green-600 hover:underline">Uzbekistan</Link> also in the group, Portugal and Colombia enter as favorites for the top two spots. This final matchday clash determines seeding and knockout paths. Winning Group K could mean avoiding other heavyweights in the early rounds.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇨🇴</span> Colombia</h4>
                    <div className="space-y-2">
                      {colombiaPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-yellow-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
                <p className="mt-4 text-sm text-slate-600">These teams have never met at a World Cup! This will be their first competitive clash on football&apos;s biggest stage.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Portugal</p><p className="text-sm text-slate-600">RTP, SIC</p></div>
                  <div><p className="font-medium">Colombia</p><p className="text-sm text-slate-600">Caracol, RCN</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">🔥 Ronaldo vs Luis Díaz - Book Now!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group K - Matchday 3</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">87,523</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group K Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/portugal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇹</span> Portugal</Link>
                <Link href="/teams/colombia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇴</span> Colombia</Link>
                <Link href="/teams/uzbekistan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇿</span> Uzbekistan</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/mexico-city-world-cup-2026-travel-guide" className="text-green-600 hover:underline text-sm">Mexico City Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Tacos, culture, and World Cup history!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
