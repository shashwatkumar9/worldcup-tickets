import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Netherlands vs South Africa Tickets | World Cup 2026 Group A | Rose Bowl Pasadena",
  description: "Buy Netherlands vs South Africa World Cup 2026 tickets at Rose Bowl, Pasadena. June 17, 2026. Oranje face Bafana Bafana in Group A clash!",
  keywords: ["Netherlands vs South Africa tickets", "World Cup 2026 Pasadena", "Netherlands World Cup 2026", "South Africa World Cup", "Rose Bowl World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Netherlands", flag: "🇳🇱", code: "NED", nickname: "Oranje" },
  awayTeam: { name: "South Africa", flag: "🇿🇦", code: "RSA", nickname: "Bafana Bafana" },
  date: "June 17, 2026",
  time: "4:00 PM ET",
  venue: "Rose Bowl",
  city: "Pasadena, California",
  group: "A",
  matchNumber: 17,
  round: "Group Stage - Matchday 2",
}

const netherlandsPlayers = [
  { name: "Xavi Simons", position: "Midfielder", club: "PSG", number: 10, star: true },
  { name: "Cody Gakpo", position: "Forward", club: "Liverpool", number: 11, star: true },
  { name: "Virgil van Dijk", position: "Defender", club: "Liverpool", number: 4 },
  { name: "Frenkie de Jong", position: "Midfielder", club: "Barcelona", number: 21 },
]

const southAfricaPlayers = [
  { name: "Percy Tau", position: "Forward", club: "Al Ahly", number: 10, star: true },
  { name: "Themba Zwane", position: "Midfielder", club: "Mamelodi Sundowns", number: 7, star: true },
  { name: "Ronwen Williams", position: "Goalkeeper", club: "Mamelodi Sundowns", number: 1 },
  { name: "Kaizer Chiefs Players", position: "Various", club: "Kaizer Chiefs", number: 0 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 235, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 205, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 185, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2010, competition: "Friendly", result: "Netherlands 0-0 South Africa", location: "Johannesburg" },
  { year: 1998, competition: "World Cup", result: "Netherlands 2-1 South Africa", location: "Marseille" },
]

export default function NetherlandsVsSouthAfricaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-500 via-white to-green-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-a-world-cup-2026-tickets" className="hover:text-white">Group A</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Netherlands vs South Africa</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-orange-500 text-white">GROUP A</Badge>
              <Badge className="bg-white text-black">HOST GROUP</Badge>
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
            <Card className="border-orange-400 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-orange-600" />
                  <h3 className="font-bold text-xl text-orange-900">1998 World Cup Rematch</h3>
                </div>
                <p className="text-orange-800">The Netherlands and South Africa haven&apos;t met at a World Cup since France 1998, when Dennis Bergkamp scored twice in a 2-1 Oranje victory. Almost three decades later, a new generation of Dutch stars faces a resurgent Bafana Bafana at the iconic Rose Bowl!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Netherlands vs South Africa: Oranje at the Rose Bowl</h2>
              <p>
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-orange-600 hover:underline">Netherlands</Link> brings a new generation of talent to face <Link href="/teams/south-africa-world-cup-2026-tickets" className="text-green-600 hover:underline">South Africa</Link> at <Link href="/venues/rose-bowl-world-cup-2026-tickets" className="text-red-600 hover:underline">Rose Bowl in Pasadena</Link>. The Oranje finished third at the 2022 World Cup and remain one of Europe&apos;s strongest sides, while Bafana Bafana return to the World Cup stage eager to prove themselves.
              </p>
              <p>
                The Rose Bowl, which hosted the 1994 World Cup Final, provides a spectacular setting. Its 90,000 capacity makes it one of the tournament&apos;s largest venues. South Africa last played in a World Cup as hosts in 2010, and their return to the global stage represents a triumph for African football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Dutch Golden Generation Continues</h3>
              <p>
                The Netherlands boasts incredible depth. Xavi Simons has emerged as one of world football&apos;s brightest talents at PSG, while Cody Gakpo&apos;s 2022 World Cup breakout (three goals) established him as a star. Virgil van Dijk remains among the world&apos;s best defenders, and Frenkie de Jong provides Barcelona-quality midfield control. Ronald Koeman&apos;s side can challenge anyone.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">South Africa&apos;s Return</h3>
              <p>
                Bafana Bafana last graced the World Cup stage as hosts in 2010. Their return to the tournament represents years of rebuilding. Percy Tau provides Egyptian League-tested quality, while Themba Zwane offers experience and creativity. Goalkeeper Ronwen Williams has been outstanding, winning CAF Goalkeeper of the Year.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Total Football Legacy</h3>
              <p>
                The Netherlands invented Total Football in the 1970s with Johan Cruyff. That legacy continues with Ronald Koeman&apos;s modern interpretation - high pressing, possession-based, and tactically flexible. Despite having never won a World Cup, the Dutch consistently reach the latter stages and produced legends like Cruyff, Marco van Basten, and more recently, Arjen Robben.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Rose Bowl Magic</h3>
              <p>
                The <Link href="/venues/rose-bowl-world-cup-2026-tickets" className="text-red-600 hover:underline">Rose Bowl</Link> in Pasadena hosted Brazil&apos;s 1994 World Cup Final penalty shootout victory over Italy. Its iconic status in American soccer makes it a perfect World Cup venue. Los Angeles&apos; South African community will travel to support Bafana Bafana, creating a vibrant atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group A Context</h3>
              <p>
                With host nation <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA</Link> and Mexico also in Group A, the Netherlands and South Africa battle for progression. The Dutch are favorites to top the group, but South Africa will look to cause an upset and potentially claim a historic knockout stage spot.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇿🇦</span> South Africa</h4>
                    <div className="space-y-2">
                      {southAfricaPlayers.slice(0, 3).map((player) => (
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
                  <div><p className="font-medium">Netherlands</p><p className="text-sm text-slate-600">NOS, NPO</p></div>
                  <div><p className="font-medium">South Africa</p><p className="text-sm text-slate-600">SuperSport, SABC</p></div>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">90,888</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group A Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇸</span> USA (Host)</Link>
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇽</span> Mexico (Host)</Link>
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇱</span> Netherlands</Link>
                <Link href="/teams/south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇿🇦</span> South Africa</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Los Angeles Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Rose Bowl magic awaits!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
