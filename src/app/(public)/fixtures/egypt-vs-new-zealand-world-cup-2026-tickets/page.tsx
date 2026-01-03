import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Egypt vs New Zealand Tickets | World Cup 2026 Group G | Pharaohs vs All Whites",
  description: "Buy Egypt vs New Zealand World Cup 2026 tickets - Group G clash! Mohamed Salah leads Egypt against New Zealand's Chris Wood. Africa vs Oceania showdown.",
  keywords: ["Egypt vs New Zealand tickets", "World Cup 2026 Group G", "Egypt World Cup 2026", "New Zealand World Cup", "Salah vs Wood"],
}

const matchInfo = {
  homeTeam: { name: "Egypt", flag: "🇪🇬", code: "EGY", nickname: "The Pharaohs" },
  awayTeam: { name: "New Zealand", flag: "🇳🇿", code: "NZL", nickname: "All Whites" },
  date: "June 16, 2026",
  time: "8:00 PM ET",
  venue: "Levi's Stadium",
  city: "San Francisco Bay Area, California",
  group: "G",
  matchNumber: 18,
  round: "Group Stage - Matchday 1",
}

const egyptPlayers = [
  { name: "Mohamed Salah", position: "Forward", club: "Liverpool", number: 10, star: true },
  { name: "Omar Marmoush", position: "Forward", club: "Eintracht Frankfurt", number: 7, star: true },
  { name: "Mahmoud Trezeguet", position: "Winger", club: "Trabzonspor", number: 14 },
  { name: "Mohamed Elneny", position: "Midfielder", club: "Arsenal", number: 4 },
]

const newZealandPlayers = [
  { name: "Chris Wood", position: "Forward", club: "Nottingham Forest", number: 9, star: true },
  { name: "Liberato Cacace", position: "Defender", club: "Empoli", number: 3, star: true },
  { name: "Joe Bell", position: "Midfielder", club: "Brondby", number: 8 },
  { name: "Sarpreet Singh", position: "Midfielder", club: "Bayern Munich II", number: 7 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 135, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 225, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 195, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 175, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function EgyptVsNewZealandPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-white to-black py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-g-world-cup-2026-tickets" className="hover:text-white">Group G</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Egypt vs New Zealand</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-700 text-white text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />AFRICA vs OCEANIA</Badge>
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
            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">SALAH SEEKS GROUP G GLORY</h3>
                </div>
                <p className="text-red-800">Mohamed Salah leads Egypt against Oceania&apos;s New Zealand in a crucial Group G opener. The Pharaohs need points to compete with Belgium and Iran. Chris Wood gives New Zealand Premier League firepower. Both nations know a strong start against each other is essential for knockout hopes.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Egypt vs New Zealand: Salah&apos;s World Cup Quest</h2>
              <p>
                <Link href="/teams/egypt-world-cup-2026-tickets" className="text-red-700 hover:underline">Egypt</Link> faces <Link href="/teams/new-zealand-world-cup-2026-tickets" className="text-black hover:underline">New Zealand</Link> at <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Levi&apos;s Stadium in the San Francisco Bay Area</Link>. Africa&apos;s most decorated nation meets Oceania&apos;s sole representative in Group G.
              </p>
              <p>
                Egypt has won a record seven Africa Cup of Nations titles but seeks to translate that dominance to the World Cup. Mohamed Salah&apos;s presence transforms any team into contenders. The Liverpool legend carries an entire nation&apos;s hopes on his shoulders.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Salah&apos;s World Stage</h3>
              <p>
                Mohamed Salah has redefined African football at the highest level. Multiple Premier League Golden Boots, Champions League glory, and individual awards have made him an icon. At 33, this World Cup represents perhaps his best chance for international glory.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">All Whites Resilience</h3>
              <p>
                New Zealand&apos;s unbeaten run at South Africa 2010 (three draws) showed they can compete. Chris Wood provides genuine Premier League quality up front. The All Whites play without pressure - Oceania&apos;s smallest footballing region celebrates just being here.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Silicon Valley Stage</h3>
              <p>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Levi&apos;s Stadium</Link> in Santa Clara provides a modern venue for this continental clash. The Bay Area&apos;s diverse population includes Egyptian and Pacific Islander communities who will create unique atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group G Mathematics</h3>
              <p>
                With Belgium and Iran favored, Egypt and New Zealand battle for potential third-place advancement. In the expanded format, this fixture takes on added significance. Points here could prove decisive for knockout qualification.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇪🇬</span> Egypt</h4>
                    <div className="space-y-2">
                      {egyptPlayers.map((player) => (
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
                <div className="p-6 bg-red-50 rounded-lg text-center">
                  <Trophy className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-red-900">First Ever Meeting!</h3>
                  <p className="text-red-700 mt-2">
                    Egypt and New Zealand have never faced each other. This World Cup Group G match will be their historic first encounter.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Egypt</p><p className="text-sm text-slate-600">beIN Sports, ON Sport</p></div>
                  <div><p className="font-medium">New Zealand</p><p className="text-sm text-slate-600">Sky Sport NZ</p></div>
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
                <p className="text-sm text-red-700 font-medium">See Salah in San Francisco!</p>
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
