import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Flame, Flag, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "USA vs Mexico Tickets | World Cup 2026 | CONCACAF Rivalry | Host Nation Derby",
  description: "Buy USA vs Mexico World Cup 2026 tickets - the biggest rivalry in CONCACAF history! Both host nations could clash at their home World Cup. Dos a Cero!",
  keywords: ["USA vs Mexico tickets", "World Cup 2026 CONCACAF", "USA World Cup 2026", "Mexico World Cup 2026", "Dos a Cero", "CONCACAF rivalry World Cup"],
}

const matchInfo = {
  homeTeam: { name: "USA", flag: "🇺🇸", code: "USA", nickname: "USMNT" },
  awayTeam: { name: "Mexico", flag: "🇲🇽", code: "MEX", nickname: "El Tri" },
  date: "July 5, 2026",
  time: "7:00 PM ET",
  venue: "AT&T Stadium",
  city: "Dallas, Texas",
  group: "Knockout",
  matchNumber: 66,
  round: "Quarter-Final",
}

const usaPlayers = [
  { name: "Christian Pulisic", position: "Forward", club: "AC Milan", number: 10, star: true },
  { name: "Gio Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7, star: true },
  { name: "Tyler Adams", position: "Midfielder", club: "Bournemouth", number: 4 },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
]

const mexicoPlayers = [
  { name: "Hirving Lozano", position: "Forward", club: "PSV", number: 22, star: true },
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4, star: true },
  { name: "Raúl Jiménez", position: "Forward", club: "Fulham", number: 9 },
  { name: "Santiago Giménez", position: "Forward", club: "Feyenoord", number: 19 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 595, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 1195, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 995, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 895, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2024, competition: "Friendly", result: "USA 2-0 Mexico", location: "Guadalajara" },
  { year: 2023, competition: "CONCACAF Nations League", result: "USA 3-0 Mexico", location: "Las Vegas" },
  { year: 2022, competition: "World Cup Qualifier", result: "USA 2-0 Mexico", location: "Cincinnati" },
  { year: 2021, competition: "CONCACAF Nations League Final", result: "USA 3-2 Mexico (aet)", location: "Denver" },
]

export default function USAVsMexicoPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="hover:text-white">Quarter-Finals</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">USA vs Mexico</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />EL CLÁSICO OF CONCACAF</Badge>
              <Badge className="bg-blue-600 text-white"><Flag className="h-4 w-4 mr-2" />HOST NATION DERBY</Badge>
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
            <Card className="border-red-400 bg-gradient-to-r from-red-50 via-white to-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-slate-900">THE BIGGEST RIVALRY IN CONCACAF HISTORY</h3>
                </div>
                <p className="text-slate-700">Two host nations. One match. Everything on the line. USA vs Mexico at the World Cup would be the most anticipated match in CONCACAF history. &quot;Dos a Cero&quot; has become America&apos;s rallying cry as USA have dominated recent meetings. But Mexico has 70+ years of World Cup history. At AT&T Stadium in Texas - with fans from both nations - this would be legendary!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">USA vs Mexico: The Dream World Cup Clash</h2>
              <p>
                <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA</Link> versus <Link href="/teams/mexico-world-cup-2026-tickets" className="text-green-700 hover:underline">Mexico</Link> at a World Cup hosted by both nations would transcend sport. At <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">AT&T Stadium in Dallas</Link>, Texas&apos; massive Mexican-American population guarantees electric atmosphere. This quarterfinal would become the most-watched soccer match in North American history.
              </p>
              <p>
                The rivalry runs deep. From World Cup qualifiers to Gold Cups to Nations League finals, these teams know each other intimately. Recent years have favored the USA - &quot;Dos a Cero&quot; (2-0) victories have become a pattern. But Mexico&apos;s World Cup pedigree and never-say-die mentality make them eternal threats.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">DOS A CERO: America&apos;s Rallying Cry</h3>
              <p>
                Since 2001, the USA has beaten Mexico 2-0 in crucial matches multiple times, including the 2002 World Cup Round of 16, numerous World Cup qualifiers, and recent Nations League matches. &quot;Dos a Cero&quot; has become a chant, a meme, and a psychological weapon. Mexico desperately wants to break this curse on the World Cup stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Pulisic vs Lozano: Star Power</h3>
              <p>
                Christian Pulisic and Hirving Lozano represent their nations&apos; golden generations. Pulisic&apos;s Serie A success at Milan has elevated his game. Lozano&apos;s Premier League and Serie A experience provides Mexican attack. Both players understand the rivalry&apos;s intensity and have delivered in previous meetings. This individual battle will captivate viewers.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Texas: The Perfect Battleground</h3>
              <p>
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">AT&T Stadium</Link> in Dallas offers a unique setting. Texas has more Mexican-Americans than any state. But it&apos;s also USA heartland. The 80,000-seat stadium will split between red, white, and blue American flags and green Mexican jerseys. The atmosphere will rival anything in world football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Mexico&apos;s World Cup Legacy</h3>
              <p>
                Mexico has participated in 17 World Cups - more than the USA. They&apos;ve hosted twice (1970, 1986) and produced iconic moments. But the &quot;Quinto Partido&quot; curse - failing to reach quarterfinals since 1986 - haunts them. Beating the USA at a home World Cup to reach the semis would exorcise decades of demons.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">America&apos;s Coming of Age</h3>
              <p>
                The 2026 World Cup represents American soccer&apos;s graduation. Beating Mexico in the quarterfinals - at home - would be the ultimate statement. It would prove the USA belongs among world football&apos;s elite and validate decades of development, MLS growth, and American player success in Europe.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇺🇸</span> USA</h4>
                    <div className="space-y-2">
                      {usaPlayers.map((player) => (
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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Recent Head-to-Head (USA Dominance)</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant="default">{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-blue-700 mt-4 font-medium">USA have won 7 of the last 8 competitive meetings!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX (Prime Time!), Telemundo, Univision</p></div>
                  <div><p className="font-medium">Mexico</p><p className="text-sm text-slate-600">Televisa, TV Azteca, TUDN</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">Expected 500M+ viewers</p></div>
                  <div><p className="font-medium">Streaming</p><p className="text-sm text-slate-600">Peacock, fuboTV, ViX</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-600">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - RIVALRY MATCH!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">Most expensive tickets of the tournament!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Quarter-Final (Dream Match)</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">80,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Team Pages</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇸</span> USA (Host)</Link>
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇽</span> Mexico (Host)</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Dallas Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Texas hosts the ultimate rivalry!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
