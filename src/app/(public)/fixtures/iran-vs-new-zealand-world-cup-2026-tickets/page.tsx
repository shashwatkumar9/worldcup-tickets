import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Iran vs New Zealand Tickets | World Cup 2026 Group G | Asia vs Oceania",
  description: "Buy Iran vs New Zealand World Cup 2026 tickets - Group G clash! Asian powerhouse Iran faces All Whites. Taremi leads Team Melli against Oceania's hopes.",
  keywords: ["Iran vs New Zealand tickets", "World Cup 2026 Group G", "Iran World Cup 2026", "New Zealand World Cup", "All Whites"],
}

const matchInfo = {
  homeTeam: { name: "Iran", flag: "🇮🇷", code: "IRN", nickname: "Team Melli" },
  awayTeam: { name: "New Zealand", flag: "🇳🇿", code: "NZL", nickname: "All Whites" },
  date: "June 16, 2026",
  time: "2:00 PM ET",
  venue: "Levi's Stadium",
  city: "San Francisco Bay Area, California",
  group: "G",
  matchNumber: 16,
  round: "Group Stage - Matchday 1",
}

const iranPlayers = [
  { name: "Mehdi Taremi", position: "Forward", club: "Inter Milan", number: 9, star: true },
  { name: "Sardar Azmoun", position: "Forward", club: "Roma", number: 20, star: true },
  { name: "Alireza Jahanbakhsh", position: "Winger", club: "Feyenoord", number: 7 },
  { name: "Alireza Beiranvand", position: "Goalkeeper", club: "Persepolis", number: 1 },
]

const newZealandPlayers = [
  { name: "Chris Wood", position: "Forward", club: "Nottingham Forest", number: 9, star: true },
  { name: "Liberato Cacace", position: "Defender", club: "Empoli", number: 3, star: true },
  { name: "Joe Bell", position: "Midfielder", club: "Brondby", number: 8 },
  { name: "Stefan Marinovic", position: "Goalkeeper", club: "Wellington Phoenix", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 95, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 155, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 135, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 115, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2017, competition: "World Cup Playoff", result: "New Zealand 0-0 Iran", location: "Wellington" },
  { year: 2017, competition: "World Cup Playoff", result: "Iran 2-0 New Zealand", location: "Tehran" },
]

export default function IranVsNewZealandPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-700 via-white to-black py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-g-world-cup-2026-tickets" className="hover:text-white">Group G</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Iran vs New Zealand</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-green-600 text-white text-lg px-4 py-1">ASIA vs OCEANIA</Badge>
              <Badge className="bg-white text-black">GROUP G</Badge>
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
            <Card className="border-green-400 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-green-600" />
                  <h3 className="font-bold text-xl text-green-900">2017 PLAYOFF REMATCH</h3>
                </div>
                <p className="text-green-800">These teams last met in a dramatic 2017 World Cup inter-continental playoff. Iran won 2-0 on aggregate, with a crucial 0-0 draw in Wellington. Now both nations have qualified automatically. Iran as Asian contenders, New Zealand representing Oceania&apos;s hopes at the expanded World Cup.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Iran vs New Zealand: Continental Pride</h2>
              <p>
                <Link href="/teams/iran-world-cup-2026-tickets" className="text-green-600 hover:underline">Iran</Link> faces <Link href="/teams/new-zealand-world-cup-2026-tickets" className="text-black hover:underline">New Zealand</Link> at <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Levi&apos;s Stadium in the San Francisco Bay Area</Link>. Group G features this clash between Asia&apos;s strongest team and Oceania&apos;s representative.
              </p>
              <p>
                Iran has established themselves as Asian football&apos;s powerhouse. Mehdi Taremi stars for Inter Milan in Serie A. Sardar Azmoun provides creativity and goals. Team Melli has World Cup experience and genuine quality throughout their squad.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">New Zealand&apos;s World Cup Return</h3>
              <p>
                The All Whites return to football&apos;s biggest stage with Chris Wood leading the line. The Nottingham Forest striker gives New Zealand a genuine threat at Premier League level. Liberato Cacace adds Serie A experience from Empoli.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Taremi&apos;s Quality</h3>
              <p>
                Mehdi Taremi has become one of European football&apos;s most clinical strikers. His movement, finishing, and work rate make him a complete forward. Against New Zealand, Taremi will be the main threat Iran builds around.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Silicon Valley Setting</h3>
              <p>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Levi&apos;s Stadium</Link> provides a modern venue in the heart of Silicon Valley. The Bay Area&apos;s diverse population includes significant Iranian and Pacific Islander communities, creating an interesting atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group G Context</h3>
              <p>
                With Belgium and Egypt also in Group G, this match represents a crucial opportunity for both teams. Iran will be favored but cannot underestimate the All Whites. New Zealand needs points wherever they can get them.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇮🇷</span> Iran</h4>
                    <div className="space-y-2">
                      {iranPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇳🇿</span> New Zealand</h4>
                    <div className="space-y-2">
                      {newZealandPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-slate-100 border border-slate-300" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-black">#{player.number}</span>
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
                <p className="mt-4 text-sm text-slate-600 italic">Iran won their 2017 playoff 2-0 on aggregate to reach Russia 2018.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Iran</p><p className="text-sm text-slate-600">IRIB, beIN Sports</p></div>
                  <div><p className="font-medium">New Zealand</p><p className="text-sm text-slate-600">Sky Sport NZ</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-green-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-green-700 font-medium">Asia vs Oceania in San Francisco!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group G - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">68,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group G Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/belgium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇪</span> Belgium</Link>
                <Link href="/teams/egypt-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇬</span> Egypt</Link>
                <Link href="/teams/iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇮🇷</span> Iran</Link>
                <Link href="/teams/new-zealand-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇿</span> New Zealand</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/san-francisco-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">San Francisco Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore the Golden Gate City!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
