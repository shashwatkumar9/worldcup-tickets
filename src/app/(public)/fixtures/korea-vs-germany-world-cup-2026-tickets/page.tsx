import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Zap, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Korea vs Germany Tickets | World Cup 2026 | 2018 Shock Rematch | Kim Min-jae vs Musiala",
  description: "Buy Korea vs Germany World Cup 2026 tickets - rematch of 2018's stunning upset! South Korea eliminated Germany 2-0 in Russia. Can history repeat?",
  keywords: ["Korea vs Germany tickets", "World Cup 2026 rematch", "South Korea World Cup 2026", "Germany World Cup 2026", "2018 World Cup shock", "Son Heung-min World Cup"],
}

const matchInfo = {
  homeTeam: { name: "South Korea", flag: "🇰🇷", code: "KOR", nickname: "Taegeuk Warriors" },
  awayTeam: { name: "Germany", flag: "🇩🇪", code: "GER", nickname: "Die Mannschaft" },
  date: "June 24, 2026",
  time: "4:00 PM ET",
  venue: "AT&T Stadium",
  city: "Dallas, Texas",
  group: "D",
  matchNumber: 46,
  round: "Group Stage - Matchday 3",
}

const koreaPlayers = [
  { name: "Son Heung-min", position: "Forward", club: "Tottenham", number: 7, star: true },
  { name: "Kim Min-jae", position: "Defender", club: "Bayern Munich", number: 3, star: true },
  { name: "Lee Kang-in", position: "Midfielder", club: "PSG", number: 10 },
  { name: "Hwang Hee-chan", position: "Forward", club: "Wolverhampton", number: 11 },
]

const germanyPlayers = [
  { name: "Jamal Musiala", position: "Midfielder", club: "Bayern Munich", number: 10, star: true },
  { name: "Florian Wirtz", position: "Midfielder", club: "Bayer Leverkusen", number: 17, star: true },
  { name: "Kai Havertz", position: "Forward", club: "Arsenal", number: 7 },
  { name: "Joshua Kimmich", position: "Midfielder", club: "Bayern Munich", number: 6 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 195, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 325, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 295, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 265, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "World Cup", result: "South Korea 2-0 Germany", location: "Kazan", shock: true },
  { year: 2004, competition: "Friendly", result: "Germany 3-1 South Korea", location: "Busan" },
  { year: 2002, competition: "World Cup SF", result: "Germany 1-0 South Korea", location: "Seoul" },
]

export default function KoreaVsGermanyPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-black py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-d-world-cup-2026-tickets" className="hover:text-white">Group D</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Korea vs Germany</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Zap className="h-4 w-4 mr-2" />2018 SHOCK REMATCH</Badge>
              <Badge className="bg-yellow-400 text-black"><Trophy className="h-4 w-4 mr-2" />4X CHAMPIONS</Badge>
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
                  <h3 className="font-bold text-xl text-red-900">KAZAN 2018: GERMANY ELIMINATED</h3>
                </div>
                <p className="text-red-800">On June 27, 2018, defending champions Germany needed a win against South Korea to stay alive. Instead, Kim Young-gwon and Son Heung-min scored in stoppage time to seal a 2-0 victory. Germany, the reigning world champions, were eliminated in the group stage. It was the biggest World Cup shock since 1982. Now they meet again!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Korea vs Germany: The Bayern Munich Connection</h2>
              <p>
                <Link href="/teams/south-korea-world-cup-2026-tickets" className="text-red-600 hover:underline">South Korea</Link> and <Link href="/teams/germany-world-cup-2026-tickets" className="text-black hover:underline">Germany</Link> share a Bayern Munich connection that adds intrigue to this rematch. Kim Min-jae anchors Bayern&apos;s defense alongside Germany&apos;s Jamal Musiala. These teammates become opponents at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">AT&T Stadium in Dallas</Link> in one of the tournament&apos;s most anticipated group stage matches.
              </p>
              <p>
                The 2018 shock haunts German football. For the first time since 1938, Germany failed to progress past the first round. Korean celebrations echoed through Kazan as Son Heung-min sealed victory. Die Mannschaft has rebuilt since, but the psychological scar remains. Korea proved they could beat anyone.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Son Heung-min: Asia&apos;s Best</h3>
              <p>
                Son Heung-min remains one of world football&apos;s elite attackers. The Tottenham captain&apos;s pace, finishing, and big-game mentality make him a genuine threat against any defense. He scored the iconic second goal in 2018 - sprinting the length of the pitch to slot past Manuel Neuer. At 33, the 2026 World Cup could be his last chance for Korean glory.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Kim Min-jae: The Monster</h3>
              <p>
                Known as &quot;The Monster&quot; in Korea, Kim Min-jae has become one of world football&apos;s best center-backs at Bayern Munich. His aerial dominance, pace, and reading of the game neutralize the best attackers. Against his club teammate Musiala and Germany&apos;s attack, Kim will be Korea&apos;s defensive leader. His performances will determine Korea&apos;s fate.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Germany&apos;s Revenge Mission</h3>
              <p>
                Julian Nagelsmann&apos;s Germany has rebuilt around Musiala and Florian Wirtz - two of world football&apos;s brightest young talents. Euro 2024 on home soil showed this team&apos;s potential. But Germany&apos;s World Cup curse continues: group stage exits in 2018 and 2022. Against Korea, they cannot afford another slip.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Dallas: Texas-Sized Atmosphere</h3>
              <p>
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">AT&T Stadium</Link> in Dallas provides a spectacular 80,000-seat setting. The Dallas-Fort Worth metroplex has significant Korean and German communities, ensuring passionate support for both nations. The retractable roof and air conditioning make it one of the tournament&apos;s most modern venues.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group D Decider</h3>
              <p>
                This final matchday could determine Group D&apos;s outcome. Both Korea and Germany need points to guarantee progression. A draw might not be enough. The pressure of knockout football arrives early in this winner-takes-all showdown. Neither team can afford to lose.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇰🇷</span> South Korea</h4>
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
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇩🇪</span> Germany</h4>
                    <div className="space-y-2">
                      {germanyPlayers.map((player) => (
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
              <CardHeader><CardTitle>Head-to-Head Record</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.shock ? "bg-red-100 border-2 border-red-400" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.shock ? "destructive" : "outline"}>{match.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">South Korea</p><p className="text-sm text-slate-600">KBS, MBC, SBS</p></div>
                  <div><p className="font-medium">Germany</p><p className="text-sm text-slate-600">ARD, ZDF</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-400">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - REMATCH!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">2018 shock rematch - can Korea repeat?</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group D - Matchday 3</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">80,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group D Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/south-korea-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇰🇷</span> South Korea</Link>
                <Link href="/teams/germany-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇪</span> Germany</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Dallas Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Everything&apos;s bigger in Texas!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
