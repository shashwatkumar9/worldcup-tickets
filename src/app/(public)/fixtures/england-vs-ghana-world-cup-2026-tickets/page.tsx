import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "England vs Ghana Tickets | World Cup 2026 Group L | Gillette Stadium",
  description: "Buy England vs Ghana World Cup 2026 tickets at Gillette Stadium, Boston. June 23, 2026. Three Lions face the Black Stars in crucial Group L clash!",
  keywords: ["England vs Ghana tickets", "World Cup 2026 Boston", "England World Cup 2026", "Ghana World Cup 2026", "Gillette Stadium World Cup"],
}

const matchInfo = {
  homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", nickname: "Three Lions" },
  awayTeam: { name: "Ghana", flag: "🇬🇭", code: "GHA", nickname: "Black Stars" },
  date: "June 23, 2026",
  time: "4:00 PM ET",
  venue: "Gillette Stadium",
  city: "Boston, Massachusetts",
  group: "L",
  matchNumber: 45,
  round: "Group Stage - Matchday 2",
}

const englandPlayers = [
  { name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Bukayo Saka", position: "Forward", club: "Arsenal", number: 7, star: true },
  { name: "Phil Foden", position: "Midfielder", club: "Manchester City", number: 11 },
  { name: "Declan Rice", position: "Midfielder", club: "Arsenal", number: 4 },
]

const ghanaPlayers = [
  { name: "Mohammed Kudus", position: "Midfielder", club: "West Ham", number: 10, star: true },
  { name: "Thomas Partey", position: "Midfielder", club: "Arsenal", number: 5, star: true },
  { name: "Jordan Ayew", position: "Forward", club: "Crystal Palace", number: 9 },
  { name: "Daniel Amartey", position: "Defender", club: "Leicester City", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 215, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 345, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 315, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 285, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "England 3-0 Ghana", location: "Al Rayyan" },
  { year: 2014, competition: "Friendly", result: "England 0-0 Ghana", location: "London" },
  { year: 2011, competition: "Friendly", result: "Ghana 0-0 England", location: "London" },
]

export default function EnglandVsGhanaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-white to-green-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-l-world-cup-2026-tickets" className="hover:text-white">Group L</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">England vs Ghana</span>
          </div>

          <div className="mt-8 text-center">
            <Badge className="bg-white text-red-800 mb-4">GROUP L - MATCHDAY 2</Badge>
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
              <h2 className="text-2xl font-bold text-slate-900">England vs Ghana: Premier League Connections</h2>
              <p>
                <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline">England</Link> and <Link href="/teams/ghana-world-cup-2026-tickets" className="text-green-600 hover:underline">Ghana</Link> share deep connections through the Premier League, with both nations fielding squads packed with top-flight English football talent. This Group L clash at <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Gillette Stadium in Boston</Link> features players who know each other intimately from domestic competition.
              </p>
              <p>
                Thomas Partey anchors both Arsenal&apos;s midfield and Ghana&apos;s Black Stars. Mohammed Kudus has emerged as one of the Premier League&apos;s most exciting players at West Ham. For England, Jude Bellingham has established himself as the best midfielder in the world following his move to Real Madrid, while Bukayo Saka and Phil Foden represent the cutting edge of English attacking football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Bellingham&apos;s Brilliance</h3>
              <p>
                At 22, Jude Bellingham enters the 2026 World Cup as one of football&apos;s biggest stars. His first season at Real Madrid produced goals, assists, and La Liga titles. His ability to arrive late in the box, combined with vision and work rate, makes him England&apos;s most dangerous player. Ghana will need to find a way to contain him.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Ghana&apos;s Golden Generation</h3>
              <p>
                The Black Stars have rebuilt following their 2022 disappointment. Mohammed Kudus has become a Premier League sensation, and young talents like Felix Afena-Gyan add depth. Ghana&apos;s blend of European experience and raw talent makes them dangerous opponents for any team in the world.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">England&apos;s Trophy Hunt</h3>
              <p>
                Under Thomas Tuchel, England enters 2026 with clear tactical identity. The Three Lions have reached two Euro finals and a World Cup semifinal since 2018 but remain without a major trophy since 1966. This golden generation knows 2026 represents perhaps their best chance to end that drought.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Boston&apos;s English Connection</h3>
              <p>
                Gillette Stadium provides a fitting venue for England&apos;s Group L campaign. Boston&apos;s historical ties to England, combined with its large expat community, ensures strong Three Lions support. The city&apos;s passion for sports creates a perfect World Cup atmosphere.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</h4>
                    <div className="space-y-2">
                      {englandPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇬🇭</span> Ghana</h4>
                    <div className="space-y-2">
                      {ghanaPlayers.map((player) => (
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
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                  <div><p className="font-medium">Ghana</p><p className="text-sm text-slate-600">GTV, Max TV</p></div>
                  <div><p className="font-medium">Canada</p><p className="text-sm text-slate-600">TSN, CTV</p></div>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group L - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">65,878</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group L Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
                <Link href="/teams/ghana-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇬🇭</span> Ghana</Link>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇭🇷</span> Croatia</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/boston-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Boston Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">History, culture, and world-class football!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
