import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Mexico vs South Africa Tickets | World Cup 2026 Group A | El Tri Opens at Home",
  description: "Buy Mexico vs South Africa World Cup 2026 tickets - Group A opener! Co-hosts Mexico face South Africa at Azteca Stadium. Historic opening match for El Tri on home soil.",
  keywords: ["Mexico vs South Africa tickets", "World Cup 2026 Group A", "Mexico World Cup 2026", "South Africa World Cup", "Azteca Stadium opening"],
}

const matchInfo = {
  homeTeam: { name: "Mexico", flag: "🇲🇽", code: "MEX", nickname: "El Tri" },
  awayTeam: { name: "South Africa", flag: "🇿🇦", code: "RSA", nickname: "Bafana Bafana" },
  date: "June 12, 2026",
  time: "6:00 PM ET",
  venue: "Azteca Stadium",
  city: "Mexico City, Mexico",
  group: "A",
  matchNumber: 2,
  round: "Group Stage - Matchday 1",
}

const mexicoPlayers = [
  { name: "Hirving Lozano", position: "Winger", club: "PSV", number: 22, star: true },
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4, star: true },
  { name: "Raúl Jiménez", position: "Forward", club: "Fulham", number: 9 },
  { name: "César Montes", position: "Defender", club: "Monterrey", number: 3 },
]

const southAfricaPlayers = [
  { name: "Percy Tau", position: "Winger", club: "Al Ahly", number: 11, star: true },
  { name: "Themba Zwane", position: "Midfielder", club: "Mamelodi Sundowns", number: 10, star: true },
  { name: "Ronwen Williams", position: "Goalkeeper", club: "Mamelodi Sundowns", number: 1 },
  { name: "Bongokuhle Hlongwane", position: "Forward", club: "Minnesota United", number: 21 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 225, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 395, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 345, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 325, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2010, competition: "World Cup Group", result: "South Africa 1-1 Mexico", location: "Johannesburg" },
  { year: 2004, competition: "Friendly", result: "Mexico 2-1 South Africa", location: "Carson" },
]

export default function MexicoVsSouthAfricaPage() {
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
            <span className="text-white">Mexico vs South Africa</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-green-600 text-white text-lg px-4 py-1"><Home className="h-4 w-4 mr-2" />HOST NATION</Badge>
              <Badge className="bg-yellow-500 text-black"><Flame className="h-4 w-4 mr-2" />2010 REMATCH</Badge>
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
                  <Flame className="h-6 w-6 text-green-600" />
                  <h3 className="font-bold text-xl text-green-900">EL TRI RETURNS HOME</h3>
                </div>
                <p className="text-green-800">Mexico opens their home World Cup against South Africa at the legendary Azteca Stadium! 87,000 passionate fans will create an unforgettable atmosphere. The 2010 World Cup hosts return with Bafana Bafana looking to upset the party. Lozano and Álvarez lead El Tri&apos;s charge for glory on home soil.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Mexico vs South Africa: Host Nation Dreams Begin</h2>
              <p>
                <Link href="/teams/mexico-world-cup-2026-tickets" className="text-green-600 hover:underline">Mexico</Link> faces <Link href="/teams/south-africa-world-cup-2026-tickets" className="text-yellow-600 hover:underline">South Africa</Link> at <Link href="/venues/azteca-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Azteca Stadium in Mexico City</Link>. Co-hosts Mexico begin their tournament in front of 87,000 passionate supporters at football&apos;s most atmospheric venue.
              </p>
              <p>
                Mexico&apos;s World Cup heartbreak - failing to advance past the Round of 16 since 1986 - has become a national obsession. Hosting the tournament provides the ultimate opportunity to break that curse. The weight of 130 million fans&apos; expectations will fuel El Tri&apos;s campaign.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Azteca&apos;s Magic</h3>
              <p>
                <Link href="/venues/azteca-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Azteca Stadium</Link> has hosted two World Cup Finals and will add to its legendary history in 2026. The altitude at 7,200 feet creates challenging conditions for visiting teams. Mexico knows exactly how to use these advantages.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Bafana Bafana&apos;s Return</h3>
              <p>
                South Africa returns to the World Cup after a long absence. The 2010 hosts shocked the world with their opening draw against Mexico in Johannesburg. Bafana Bafana&apos;s recent AFCON resurgence suggests they can compete again on the global stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">2010 Memories</h3>
              <p>
                These teams share special World Cup history. South Africa&apos;s Siphiwe Tshabalala scored the opening goal of the 2010 World Cup against Mexico, a moment etched in tournament history. Mexico will want to avenge that draw on their home turf.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group A Stakes</h3>
              <p>
                With South Korea and another team completing Group A, Mexico cannot afford anything less than victory. Home advantage means expectations are clear - win every group game. South Africa plays with nothing to lose and everything to prove.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇿🇦</span> South Africa</h4>
                    <div className="space-y-2">
                      {southAfricaPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">South Africa&apos;s famous 1-1 draw opened the 2010 World Cup in Johannesburg.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Mexico</p><p className="text-sm text-slate-600">Televisa, TV Azteca, TUDN</p></div>
                  <div><p className="font-medium">South Africa</p><p className="text-sm text-slate-600">SuperSport, SABC</p></div>
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
                <p className="text-sm text-green-700 font-medium">Experience El Tri at home!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group A - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">87,523</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group A Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇽</span> Mexico</Link>
                <Link href="/teams/south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇿🇦</span> South Africa</Link>
                <Link href="/teams/south-korea-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇰🇷</span> South Korea</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🏴</span> TBD</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/mexico-city-world-cup-2026-travel-guide" className="text-green-600 hover:underline text-sm">Mexico City Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore the vibrant capital!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
