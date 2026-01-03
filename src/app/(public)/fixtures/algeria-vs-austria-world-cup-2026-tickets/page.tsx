import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Algeria vs Austria Tickets | World Cup 2026 Group J | Africa vs Europe Showdown",
  description: "Buy Algeria vs Austria World Cup 2026 tickets - Group J clash! AFCON champions Algeria face Austria's golden generation. Mahrez vs Alaba battle for knockout hopes.",
  keywords: ["Algeria vs Austria tickets", "World Cup 2026 Group J", "Algeria World Cup 2026", "Austria World Cup", "Mahrez vs Alaba"],
}

const matchInfo = {
  homeTeam: { name: "Algeria", flag: "🇩🇿", code: "ALG", nickname: "Les Fennecs" },
  awayTeam: { name: "Austria", flag: "🇦🇹", code: "AUT", nickname: "Das Team" },
  date: "June 20, 2026",
  time: "5:00 PM ET",
  venue: "Lincoln Financial Field",
  city: "Philadelphia, Pennsylvania",
  group: "J",
  matchNumber: 33,
  round: "Group Stage - Matchday 2",
}

const algeriaPlayers = [
  { name: "Riyad Mahrez", position: "Winger", club: "Al-Ahli", number: 7, star: true },
  { name: "Ismaël Bennacer", position: "Midfielder", club: "AC Milan", number: 8, star: true },
  { name: "Islam Slimani", position: "Forward", club: "Coritiba", number: 13 },
  { name: "Youcef Atal", position: "Defender", club: "Nice", number: 2 },
]

const austriaPlayers = [
  { name: "David Alaba", position: "Defender", club: "Real Madrid", number: 8, star: true },
  { name: "Marcel Sabitzer", position: "Midfielder", club: "Borussia Dortmund", number: 7, star: true },
  { name: "Marko Arnautović", position: "Forward", club: "Inter Milan", number: 10 },
  { name: "Konrad Laimer", position: "Midfielder", club: "Bayern Munich", number: 6 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 115, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 185, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 165, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 145, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2019, competition: "Friendly", result: "Austria 1-0 Algeria", location: "Vienna" },
  { year: 2010, competition: "Friendly", result: "Algeria 1-0 Austria", location: "Algiers" },
]

export default function AlgeriaVsAustriaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-j-world-cup-2026-tickets" className="hover:text-white">Group J</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Algeria vs Austria</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-green-600 text-white text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />AFRICA vs EUROPE</Badge>
              <Badge className="bg-white text-black">GROUP J</Badge>
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
                  <h3 className="font-bold text-xl text-green-900">BATTLE FOR KNOCKOUT SURVIVAL</h3>
                </div>
                <p className="text-green-800">With Argentina likely to dominate Group J, Algeria and Austria fight for the remaining knockout places. Algeria&apos;s 2019 AFCON champions bring African passion, while Austria&apos;s Bundesliga core adds European tactical discipline. This matchday 2 encounter could effectively be an elimination game.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Algeria vs Austria: The Decider</h2>
              <p>
                <Link href="/teams/algeria-world-cup-2026-tickets" className="text-green-600 hover:underline">Algeria</Link> faces <Link href="/teams/austria-world-cup-2026-tickets" className="text-red-600 hover:underline">Austria</Link> at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">Lincoln Financial Field in Philadelphia</Link>. Both nations enter with realistic knockout aspirations - but with Argentina in the group, this match takes on added significance.
              </p>
              <p>
                Algeria&apos;s triumph at the 2019 Africa Cup of Nations demonstrated their quality. Riyad Mahrez and Ismaël Bennacer bring world-class talent from top European leagues. The Desert Foxes combine technical skill with fierce competitive spirit.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Mahrez&apos;s Magic</h3>
              <p>
                Riyad Mahrez has won four Premier League titles with Manchester City, proving himself on the biggest stage. His dribbling, crossing, and set-piece delivery make him Algeria&apos;s most dangerous player. Even at Al-Ahli, his quality remains world-class.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Austria&apos;s Champions League Core</h3>
              <p>
                David Alaba captains Real Madrid in the Champions League. Marcel Sabitzer shines for Borussia Dortmund. Konrad Laimer brings Bayern Munich&apos;s intensity. This Austrian core plays at Europe&apos;s highest level every week.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Philadelphia Showdown</h3>
              <p>
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">Lincoln Financial Field</Link> hosts another crucial Group J encounter. Philadelphia&apos;s diverse population includes significant Algerian and Middle European communities. The atmosphere promises passion from both sets of supporters.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">The Stakes</h3>
              <p>
                Argentina&apos;s presence as defending champions makes this Algeria-Austria clash effectively a playoff for second place. The loser faces near-elimination. The winner keeps knockout dreams alive. Every moment matters in Group J&apos;s most consequential encounter.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇩🇿</span> Algeria</h4>
                    <div className="space-y-2">
                      {algeriaPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇦🇹</span> Austria</h4>
                    <div className="space-y-2">
                      {austriaPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">The series is tied 1-1 in recent friendlies.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Algeria</p><p className="text-sm text-slate-600">ENTV, beIN Sports</p></div>
                  <div><p className="font-medium">Austria</p><p className="text-sm text-slate-600">ORF, ServusTV</p></div>
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
                <p className="text-sm text-green-700 font-medium">Knockout elimination battle!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group J - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">69,796</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group J Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/argentina-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇷</span> Argentina</Link>
                <Link href="/teams/algeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇿</span> Algeria</Link>
                <Link href="/teams/austria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇹</span> Austria</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🇯🇴</span> Jordan</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/philadelphia-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Philadelphia Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore the City of Brotherly Love!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
