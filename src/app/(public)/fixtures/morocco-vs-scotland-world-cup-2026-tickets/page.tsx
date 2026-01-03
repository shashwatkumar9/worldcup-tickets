import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Morocco vs Scotland Tickets | World Cup 2026 Group C | 2022 Semi-Finalists vs Tartan Army",
  description: "Buy Morocco vs Scotland World Cup 2026 tickets - Group C clash! 2022 World Cup semi-finalists Morocco face Scotland's return to the world stage. Atlas Lions vs Tartan Army.",
  keywords: ["Morocco vs Scotland tickets", "World Cup 2026 Group C", "Morocco World Cup 2026", "Scotland World Cup", "Atlas Lions"],
}

const matchInfo = {
  homeTeam: { name: "Morocco", flag: "🇲🇦", code: "MAR", nickname: "Atlas Lions" },
  awayTeam: { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO", nickname: "Tartan Army" },
  date: "June 17, 2026",
  time: "5:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "C",
  matchNumber: 22,
  round: "Group Stage - Matchday 2",
}

const moroccoPlayers = [
  { name: "Achraf Hakimi", position: "Defender", club: "Paris Saint-Germain", number: 2, star: true },
  { name: "Hakim Ziyech", position: "Winger", club: "Galatasaray", number: 7, star: true },
  { name: "Youssef En-Nesyri", position: "Forward", club: "Sevilla", number: 9 },
  { name: "Sofyan Amrabat", position: "Midfielder", club: "Fiorentina", number: 4 },
]

const scotlandPlayers = [
  { name: "John McGinn", position: "Midfielder", club: "Aston Villa", number: 7, star: true },
  { name: "Scott McTominay", position: "Midfielder", club: "Napoli", number: 4, star: true },
  { name: "Che Adams", position: "Forward", club: "Southampton", number: 9 },
  { name: "Andrew Robertson", position: "Defender", club: "Liverpool", number: 3 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 155, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 265, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 235, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 215, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 1998, competition: "World Cup Group", result: "Morocco 3-0 Scotland", location: "Saint-Étienne" },
]

export default function MoroccoVsScotlandPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-green-600 to-blue-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-c-world-cup-2026-tickets" className="hover:text-white">Group C</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Morocco vs Scotland</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2022 SEMI-FINALIST</Badge>
              <Badge className="bg-blue-700 text-white">1998 REMATCH</Badge>
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
                <h2 className="text-2xl font-bold text-white mt-2">Scotland</h2>
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
                  <Trophy className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">1998 WORLD CUP REMATCH</h3>
                </div>
                <p className="text-red-800">Morocco and Scotland last met at France 1998, where the Atlas Lions won 3-0 in the group stage. Now Morocco arrives as 2022 semi-finalists - the first African nation to reach that stage. Scotland returns to the World Cup with John McGinn and Scott McTominay leading a rejuvenated squad.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Morocco vs Scotland: History Beckons</h2>
              <p>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="text-red-600 hover:underline">Morocco</Link> faces <Link href="/teams/scotland-world-cup-2026-tickets" className="text-blue-600 hover:underline">Scotland</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-green-600 hover:underline">MetLife Stadium in New Jersey</Link>. The 2022 World Cup semi-finalists take on the Tartan Army in a crucial Group C encounter.
              </p>
              <p>
                Morocco&apos;s historic run at Qatar 2022 captivated the world. Defeating Belgium, Spain, and Portugal before falling to France in the semi-finals, the Atlas Lions proved African football belongs at the top table. That squad remains largely intact with Hakimi and Ziyech leading the charge.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Morocco&apos;s 2022 Legacy</h3>
              <p>
                Becoming the first African nation to reach a World Cup semi-final changed Moroccan football forever. Achraf Hakimi&apos;s panenka against Spain and the collective defensive excellence shocked the world. The Atlas Lions enter 2026 with belief they can go even further.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Scotland&apos;s Return</h3>
              <p>
                Scotland returns to the World Cup after missing several editions. John McGinn provides Aston Villa&apos;s driving force, while Scott McTominay has flourished at Napoli in Serie A. The Tartan Army will travel in massive numbers to support their beloved national team.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">New York Metropolitan Stage</h3>
              <p>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-green-600 hover:underline">MetLife Stadium</Link> brings World Cup football to the New York area. The region&apos;s Scottish and Moroccan communities will create an electric atmosphere. New Jersey&apos;s 82,500-capacity venue ensures a massive crowd.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group C Battle</h3>
              <p>
                With Brazil and Haiti also in Group C, this Morocco-Scotland clash could determine who finishes second. Both teams have aspirations beyond the group stage. Victory here positions either nation perfectly for knockout qualification.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇲🇦</span> Morocco</h4>
                    <div className="space-y-2">
                      {moroccoPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Scotland</h4>
                    <div className="space-y-2">
                      {scotlandPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">Morocco won their only World Cup meeting 3-0 at France 1998.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Morocco</p><p className="text-sm text-slate-600">2M, beIN Sports</p></div>
                  <div><p className="font-medium">Scotland</p><p className="text-sm text-slate-600">BBC, STV</p></div>
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
                <p className="text-sm text-red-700 font-medium">1998 World Cup rematch!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group C - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">82,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group C Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇷</span> Brazil</Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇦</span> Morocco</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🇭🇹</span> Haiti</span>
                <Link href="/teams/scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Scotland</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="text-green-600 hover:underline text-sm">New York Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Experience the Big Apple!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
