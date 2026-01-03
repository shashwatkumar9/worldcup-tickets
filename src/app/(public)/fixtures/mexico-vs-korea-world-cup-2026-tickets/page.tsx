import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Mexico vs Korea Republic Tickets | World Cup 2026 Group A | Estadio Akron",
  description: "Buy Mexico vs Korea Republic World Cup 2026 tickets at Estadio Akron, Guadalajara. June 18, 2026. Group A showdown!",
  keywords: ["Mexico vs Korea tickets", "World Cup 2026 Guadalajara", "Mexico World Cup 2026", "Korea Republic World Cup", "Estadio Akron World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Mexico", flag: "🇲🇽", code: "MEX", nickname: "El Tri" },
  awayTeam: { name: "Korea Republic", flag: "🇰🇷", code: "KOR", nickname: "Taegeuk Warriors" },
  date: "June 18, 2026",
  time: "9:00 PM ET",
  venue: "Estadio Akron",
  city: "Guadalajara, Mexico",
  group: "A",
  matchNumber: 27,
  round: "Group Stage - Matchday 2",
}

const mexicoPlayers = [
  { name: "Hirving Lozano", position: "Forward", club: "PSV", number: 22, star: true },
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4, star: true },
  { name: "Guillermo Ochoa", position: "Goalkeeper", club: "Salernitana", number: 13 },
  { name: "Santiago Giménez", position: "Forward", club: "Feyenoord", number: 9 },
]

const koreaPlayers = [
  { name: "Son Heung-min", position: "Forward", club: "Tottenham", number: 7, star: true },
  { name: "Kim Min-jae", position: "Defender", club: "Bayern Munich", number: 3, star: true },
  { name: "Lee Kang-in", position: "Midfielder", club: "PSG", number: 10 },
  { name: "Hwang Hee-chan", position: "Forward", club: "Wolves", number: 11 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 195, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 285, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 260, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 245, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "World Cup", result: "Korea 2-0 Mexico", location: "Rostov" },
  { year: 2014, competition: "Friendly", result: "Korea 0-4 Mexico", location: "Los Angeles" },
  { year: 1998, competition: "World Cup", result: "Korea 1-3 Mexico", location: "Lyon" },
]

export default function MexicoVsKoreaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-700 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-a-world-cup-2026-tickets" className="hover:text-white">Group A</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Mexico vs Korea</span>
          </div>

          <div className="mt-8 text-center">
            <Badge className="bg-white text-green-800 mb-4">GROUP A - MATCHDAY 2</Badge>
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
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Mexico vs Korea Republic: CONCACAF Meets AFC</h2>
              <p>
                Two football-obsessed nations collide in Guadalajara as <Link href="/teams/mexico-world-cup-2026-tickets" className="text-green-600 hover:underline">Mexico</Link> faces <Link href="/teams/korea-world-cup-2026-tickets" className="text-green-600 hover:underline">Korea Republic</Link> at <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-600 hover:underline">Estadio Akron</Link>. This matchday 2 fixture could prove decisive for Group A qualification, with both teams expected to challenge for the top two spots.
              </p>
              <p>
                The rivalry between these nations carries World Cup history. In 2018, Korea shocked the world by defeating Germany 2-0 to send them home, but their 1-0 loss to Mexico earlier in the group stage was crucial. Now, in 2026, the Taegeuk Warriors seek revenge while El Tri aims to maintain home advantage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Son Heung-min vs Mexico&apos;s Defense</h3>
              <p>
                Son Heung-min enters the 2026 World Cup at 33 years old, likely his final major tournament in peak form. The Tottenham captain carries Korean football on his shoulders, and Mexico&apos;s defense will need to be at their absolute best to contain one of the world&apos;s most dangerous forwards. His pace, finishing, and ability to create from nothing make him the key battle within this match.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Home Support at Estadio Akron</h3>
              <p>
                Estadio Akron, home to CD Guadalajara (Chivas), will be packed with 48,000 passionate Mexican fans. Guadalajara is the heartland of Mexican football, where Chivas&apos; famous "only Mexican players" policy has created generations of national team stars. The atmosphere will be electric, providing El Tri with a significant home advantage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Tactical Battle: Experience vs Energy</h3>
              <p>
                Korea brings a mix of European-based stars like Kim Min-jae (Bayern Munich) and Lee Kang-in (PSG) with domestic league workhorses. Their pressing intensity and tactical discipline under new management will challenge Mexico&apos;s possession-based approach. Expect a tactical chess match with both teams capable of quick transitions and clinical finishing.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇰🇷</span> Korea Republic</h4>
                    <div className="space-y-2">
                      {koreaPlayers.map((player) => (
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
                  <div><p className="font-medium">Mexico</p><p className="text-sm text-slate-600">Televisa, TV Azteca</p></div>
                  <div><p className="font-medium">Korea</p><p className="text-sm text-slate-600">KBS, SBS, MBC</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group A - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">48,071</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group A Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇽</span> Mexico<Badge className="ml-auto text-xs">Host</Badge></Link>
                <Link href="/teams/south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇿🇦</span> South Africa</Link>
                <Link href="/teams/korea-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇰🇷</span> Korea Republic</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/guadalajara-world-cup-2026-travel-guide" className="text-green-600 hover:underline text-sm">Guadalajara Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Tequila, mariachi, and passionate football!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
