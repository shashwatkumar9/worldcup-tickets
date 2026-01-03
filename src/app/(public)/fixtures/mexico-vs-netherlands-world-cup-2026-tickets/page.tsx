import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Zap, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Mexico vs Netherlands Tickets | World Cup 2026 | 2014 Rematch | Estadio Azteca",
  description: "Buy Mexico vs Netherlands World Cup 2026 tickets - rematch of 2014's heartbreaking late defeat! No Era Penal returns to Estadio Azteca. Host nation revenge!",
  keywords: ["Mexico vs Netherlands tickets", "No Era Penal", "World Cup 2026 Mexico City", "Mexico World Cup 2026", "Estadio Azteca World Cup", "2014 World Cup rematch"],
}

const matchInfo = {
  homeTeam: { name: "Mexico", flag: "🇲🇽", code: "MEX", nickname: "El Tri" },
  awayTeam: { name: "Netherlands", flag: "🇳🇱", code: "NED", nickname: "Oranje" },
  date: "June 29, 2026",
  time: "8:00 PM ET",
  venue: "Estadio Azteca",
  city: "Mexico City, Mexico",
  group: "Knockout",
  matchNumber: 60,
  round: "Round of 32",
}

const mexicoPlayers = [
  { name: "Hirving Lozano", position: "Forward", club: "PSV", number: 22, star: true },
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4, star: true },
  { name: "Raúl Jiménez", position: "Forward", club: "Fulham", number: 9 },
  { name: "César Montes", position: "Defender", club: "Monterrey", number: 3 },
]

const netherlandsPlayers = [
  { name: "Xavi Simons", position: "Midfielder", club: "PSG", number: 10, star: true },
  { name: "Cody Gakpo", position: "Forward", club: "Liverpool", number: 11, star: true },
  { name: "Virgil van Dijk", position: "Defender", club: "Liverpool", number: 4 },
  { name: "Frenkie de Jong", position: "Midfielder", club: "Barcelona", number: 21 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 295, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 495, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 445, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 415, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2014, competition: "World Cup R16", result: "Netherlands 2-1 Mexico", location: "Fortaleza", heartbreak: true },
  { year: 2022, competition: "Friendly", result: "Mexico 0-1 Netherlands", location: "n/a - not played" },
  { year: 1998, competition: "World Cup", result: "Netherlands 2-2 Mexico", location: "Saint-Étienne" },
]

export default function MexicoVsNetherlandsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-700 via-white to-orange-500 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="hover:text-white">Round of 32</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Mexico vs Netherlands</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Zap className="h-4 w-4 mr-2" />NO ERA PENAL REMATCH</Badge>
              <Badge className="bg-green-700 text-white">HOST NATION</Badge>
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
                  <h3 className="font-bold text-xl text-red-900">&quot;NO ERA PENAL&quot; - June 29, 2014</h3>
                </div>
                <p className="text-red-800">Mexico led 1-0 in the 88th minute of the 2014 Round of 16. Then Arjen Robben went down in the box. Penalty. Wesley Sneijder equalized. Klaas-Jan Huntelaar converted the injury-time penalty. Mexico&apos;s World Cup ended in heartbreak. &quot;No Era Penal&quot; (It wasn&apos;t a penalty) became a Mexican rallying cry. Now, 12 years later, revenge awaits at the Azteca!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Mexico vs Netherlands: Revenge at the Azteca</h2>
              <p>
                <Link href="/teams/mexico-world-cup-2026-tickets" className="text-green-700 hover:underline">Mexico</Link> has waited 12 years for this moment. A potential knockout clash against <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-orange-600 hover:underline">Netherlands</Link> at <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca</Link> would bring closure to one of Mexican football&apos;s most painful memories. The 2014 &quot;No Era Penal&quot; controversy remains a wound that only victory can heal.
              </p>
              <p>
                That 2014 match in Fortaleza saw Mexico dominate for 80 minutes. Giovani dos Santos&apos;s goal seemed enough. But Arjen Robben&apos;s controversial dive - or was it? - led to a penalty that changed everything. Mexico hasn&apos;t reached a World Cup quarterfinal since 1986. The Netherlands denied them in 2014. The Azteca awaits revenge.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Host Nation Advantage</h3>
              <p>
                Playing at the legendary Estadio Azteca gives Mexico an unparalleled advantage. The 87,000-seat cathedral of Mexican football has witnessed two World Cup finals (1970, 1986). At 7,200 feet elevation, the thin air exhausts visitors. The passionate Mexican crowd creates an intimidating atmosphere. No stadium in the world matches the Azteca&apos;s World Cup history and intensity.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Dutch Brilliance</h3>
              <p>
                The Netherlands arrive with a new golden generation. Xavi Simons has emerged as one of football&apos;s brightest young stars at PSG. Cody Gakpo&apos;s 2022 World Cup performances established him as a Liverpool star. Virgil van Dijk remains among the world&apos;s best defenders. The Oranje finished third in 2022 and harbor genuine 2026 ambitions.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Mexico&apos;s Quinto Partido Quest</h3>
              <p>
                Mexico has been eliminated in the Round of 16 in seven consecutive World Cups (1994-2022). The &quot;Quinto Partido&quot; (Fifth Match) - reaching the quarterfinals - has become an obsession. At home, with 87,000 screaming fans, against the team that denied them in 2014, Mexico&apos;s chance has never been better. This is their moment.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Lozano and Álvarez Lead El Tri</h3>
              <p>
                Hirving &quot;Chucky&quot; Lozano brings Premier League and Serie A experience to Mexico&apos;s attack. His pace and directness trouble any defense. Edson Álvarez has become West Ham&apos;s midfield anchor, providing world-class ball-winning ability. This Mexican generation has the quality to finally break the curse.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">A Nation&apos;s Weight</h3>
              <p>
                This match represents more than football for Mexico. It&apos;s about national pride, historical justice, and breaking a psychological barrier. The pressure will be immense, but so will the support. Every Mexican fan remembers 2014. Every player knows what victory would mean. At the Azteca, with history calling, Mexico gets their shot at redemption.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇲🇽</span> Mexico</h4>
                    <div className="space-y-2">
                      {mexicoPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇳🇱</span> Netherlands</h4>
                    <div className="space-y-2">
                      {netherlandsPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-orange-50 border border-orange-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-orange-700">#{player.number}</span>
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
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.heartbreak ? "bg-red-100 border-2 border-red-400" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.heartbreak ? "destructive" : "outline"}>{match.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Mexico</p><p className="text-sm text-slate-600">Televisa, TV Azteca, TUDN</p></div>
                  <div><p className="font-medium">Netherlands</p><p className="text-sm text-slate-600">NOS, NPO</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo, Univision</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">100M+ Mexican viewers expected</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-green-600">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - REVENGE MATCH!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-green-700 font-medium">Most anticipated match in Mexican history!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Round of 32 (Projected)</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">87,523</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Elevation</span><span className="font-medium">7,200 feet</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Team Pages</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇽</span> Mexico (Host)</Link>
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇱</span> Netherlands</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/mexico-city-world-cup-2026-travel-guide" className="text-green-700 hover:underline text-sm">Mexico City Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Experience the Azteca atmosphere!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
