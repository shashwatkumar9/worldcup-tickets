import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Canada vs Qatar Tickets | World Cup 2026 Group B | BMO Field Toronto",
  description: "Buy Canada vs Qatar World Cup 2026 tickets - host nation vs 2022 host! Group B clash at BMO Field in Toronto. Two World Cup host nations meet.",
  keywords: ["Canada vs Qatar tickets", "World Cup 2026 Group B", "Canada World Cup 2026", "Qatar World Cup", "BMO Field Toronto tickets"],
}

const matchInfo = {
  homeTeam: { name: "Canada", flag: "🇨🇦", code: "CAN", nickname: "Les Rouges" },
  awayTeam: { name: "Qatar", flag: "🇶🇦", code: "QAT", nickname: "The Maroons" },
  date: "June 22, 2026",
  time: "2:00 PM ET",
  venue: "BMO Field",
  city: "Toronto, Ontario",
  group: "B",
  matchNumber: 36,
  round: "Group Stage - Matchday 3",
}

const canadaPlayers = [
  { name: "Alphonso Davies", position: "Left Back", club: "Bayern Munich", number: 19, star: true },
  { name: "Jonathan David", position: "Forward", club: "Lille", number: 20, star: true },
  { name: "Cyle Larin", position: "Forward", club: "RCD Mallorca", number: 17 },
  { name: "Stephen Eustáquio", position: "Midfielder", club: "FC Porto", number: 7 },
]

const qatarPlayers = [
  { name: "Akram Afif", position: "Winger", club: "Al-Sadd", number: 11, star: true },
  { name: "Almoez Ali", position: "Forward", club: "Al-Duhail", number: 19, star: true },
  { name: "Hassan Al-Haydos", position: "Midfielder", club: "Al-Sadd", number: 10 },
  { name: "Saad Al Sheeb", position: "Goalkeeper", club: "Al-Sadd", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 155, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 235, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 215, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 195, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2021, competition: "Gold Cup", result: "USA 1-0 Qatar", location: "Austin", note: "Qatar guest invite" },
]

export default function CanadaVsQatarPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-maroon-700 py-20" style={{ background: "linear-gradient(to right, #dc2626, white, #800000)" }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-b-world-cup-2026-tickets" className="hover:text-white">Group B</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Canada vs Qatar</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Zap className="h-4 w-4 mr-2" />HOST vs FORMER HOST</Badge>
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
                  <h3 className="font-bold text-xl text-yellow-900">WORLD CUP HOSTS COLLIDE</h3>
                </div>
                <p className="text-yellow-800">A unique World Cup meeting: the 2026 co-hosts face the 2022 hosts! Canada welcomed the world alongside USA and Mexico. Qatar hosted football&apos;s greatest show just four years earlier. Two nations united by the experience of hosting meet in Toronto for Group B bragging rights.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Canada vs Qatar: The Host Nations Match</h2>
              <p>
                <Link href="/teams/canada-world-cup-2026-tickets" className="text-red-600 hover:underline">Canada</Link> takes on <Link href="/teams/qatar-world-cup-2026-tickets" className="text-red-800 hover:underline">Qatar</Link> at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">BMO Field in Toronto</Link>. This Group B finale carries unique significance - two nations that know the pressure and privilege of hosting football&apos;s biggest tournament.
              </p>
              <p>
                Qatar&apos;s 2022 World Cup transformed the Middle Eastern nation into a global football destination. Despite a disappointing group stage exit as hosts, the experience of organizing and playing in a home World Cup provides invaluable insight. Now they travel to Canada - another first-time World Cup host nation.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Toronto&apos;s Football Fever</h3>
              <p>
                BMO Field may be the smallest World Cup venue, but Toronto&apos;s football passion is massive. The city&apos;s diverse population - including significant Middle Eastern communities - creates a unique atmosphere. Canada playing at home, with a chance to top Group B, will generate incredible energy.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Qatar&apos;s 2022 Experience</h3>
              <p>
                Qatar learned harsh lessons in 2022, losing all three group matches as hosts. They&apos;ve since won back-to-back Asian Cups, proving their domestic football has substance. Akram Afif - Asian Player of the Year - leads a team determined to prove their World Cup credentials.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Canada&apos;s Home Hopes</h3>
              <p>
                Canada&apos;s 2022 World Cup saw them lose all three matches, including a 4-1 defeat to Croatia. But playing at home changes everything. Alphonso Davies attacking in front of Canadian fans, Jonathan David hunting goals in Toronto - this is the moment Canadian football has awaited.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group B Decider</h3>
              <p>
                This Matchday 3 fixture could determine final Group B standings. Canada likely needs a win to guarantee progression. Qatar will fight for pride and qualification. The stakes ensure an intense encounter at BMO Field.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Hosting Legacy</h3>
              <p>
                Both nations invested heavily in football infrastructure and development. Qatar built stadiums that dazzled the world. Canada prepared venues across three countries. This match represents the meeting of two nations betting their sporting futures on football.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇶🇦</span> Qatar</h4>
                    <div className="space-y-2">
                      {qatarPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-red-50 border border-red-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-red-800">#{player.number}</span>
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
                <p className="text-slate-600 italic">First official meeting between Canada and Qatar at a World Cup.</p>
                <div className="mt-4 space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                        {match.note && <p className="text-xs text-slate-400">{match.note}</p>}
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
                  <div><p className="font-medium">Canada</p><p className="text-sm text-slate-600">TSN, RDS</p></div>
                  <div><p className="font-medium">Qatar</p><p className="text-sm text-slate-600">beIN Sports</p></div>
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
                <p className="text-sm text-red-700 font-medium">Host nations collide at BMO Field!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">45,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group B Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/canada-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇦</span> Canada</Link>
                <Link href="/teams/switzerland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇭</span> Switzerland</Link>
                <Link href="/teams/qatar-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇶🇦</span> Qatar</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/toronto-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Toronto Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore Canada&apos;s largest city!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
