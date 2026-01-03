import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Flame, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "USA vs Australia Tickets | World Cup 2026 Group D | Lumen Field Seattle",
  description: "Buy USA vs Australia World Cup 2026 tickets at Lumen Field, Seattle. June 19, 2026. Host nation faces the Socceroos in crucial Group D clash!",
  keywords: ["USA vs Australia tickets", "World Cup 2026 Seattle", "USA World Cup 2026", "Australia World Cup 2026", "Lumen Field World Cup"],
}

const matchInfo = {
  homeTeam: { name: "USA", flag: "🇺🇸", code: "USA", nickname: "USMNT" },
  awayTeam: { name: "Australia", flag: "🇦🇺", code: "AUS", nickname: "Socceroos" },
  date: "June 19, 2026",
  time: "3:00 PM ET",
  venue: "Lumen Field",
  city: "Seattle, Washington",
  group: "D",
  matchNumber: 29,
  round: "Group Stage - Matchday 2",
  special: "HOST NATION",
}

const usaPlayers = [
  { name: "Christian Pulisic", position: "Forward", club: "AC Milan", number: 10, star: true },
  { name: "Gio Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7, star: true },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
  { name: "Matt Turner", position: "Goalkeeper", club: "Crystal Palace", number: 1 },
]

const australiaPlayers = [
  { name: "Mat Ryan", position: "Goalkeeper", club: "AZ Alkmaar", number: 1, star: true },
  { name: "Jackson Irvine", position: "Midfielder", club: "St. Pauli", number: 7, star: true },
  { name: "Riley McGree", position: "Midfielder", club: "Middlesbrough", number: 18 },
  { name: "Mitchell Duke", position: "Forward", club: "Machida Zelvia", number: 9 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 245, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 395, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 355, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 325, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2023, competition: "Friendly", result: "USA 3-0 Australia", location: "Sydney" },
  { year: 2015, competition: "Friendly", result: "USA 4-0 Australia", location: "San Jose" },
  { year: 2011, competition: "Friendly", result: "USA 1-1 Australia", location: "Pasadena" },
]

export default function UsaVsAustraliaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-800 via-white to-green-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-d-world-cup-2026-tickets" className="hover:text-white">Group D</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">USA vs Australia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />HOST NATION</Badge>
              <Badge className="bg-white text-blue-800">GROUP D</Badge>
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
            <Card className="border-blue-400 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">Seattle&apos;s World Cup Showdown</h3>
                </div>
                <p className="text-blue-800">Lumen Field becomes the center of American soccer as the USMNT faces Australia in a crucial Group D match. Seattle&apos;s famous 12th Man creates one of the most intimidating atmospheres in sports - expect 69,000 passionate fans driving the hosts forward in this pivotal encounter.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">USA vs Australia: Pacific Rivals Meet in Seattle</h2>
              <p>
                The <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">United States</Link> hosts <Link href="/teams/australia-world-cup-2026-tickets" className="text-green-600 hover:underline">Australia</Link> at <Link href="/venues/lumen-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">Lumen Field in Seattle</Link> in what could be a decisive Group D fixture. Both nations are among the most passionate football countries outside the traditional powerhouses, and this clash of Pacific neighbors promises intense competition.
              </p>
              <p>
                For the USA, this represents their first home World Cup since 1994. A generation of American players has dreamed of this moment - playing in a World Cup on American soil, in front of American fans, with realistic hopes of advancing deep into the tournament. Christian Pulisic leads a golden generation that includes Gio Reyna, Weston McKennie, and Tyler Adams.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Australia: The Socceroos Rise</h3>
              <p>
                Australia impressed the world in 2022, reaching the Round of 16 and pushing eventual champions Argentina harder than anyone expected. Mat Ryan&apos;s heroics in goal, combined with a new generation of European-based players, has elevated Australian football to new heights.
              </p>
              <p>
                The Socceroos bring a physical, organized style that caused problems for the world&apos;s best teams. Jackson Irvine&apos;s leadership in midfield and the emergence of young talents make Australia genuine contenders to advance from Group D. Their large traveling supporter base, the Green and Gold Army, will make the journey across the Pacific in numbers.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Pulisic&apos;s Moment</h3>
              <p>
                Christian Pulisic enters the 2026 World Cup at 27, in the prime of his career. The AC Milan winger has established himself as one of Europe&apos;s most dangerous attackers, and the World Cup provides the stage for him to cement his legacy. His 2022 World Cup goal against Iran showed his big-game ability - now he seeks to deliver on home soil.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Lumen Field: The 12th Man</h3>
              <p>
                Few stadiums in the world create an atmosphere like Lumen Field. The Seattle Sounders have built one of MLS&apos;s most passionate fanbases, and for a World Cup match, expect the noise levels to reach new heights. The stadium&apos;s unique roof design amplifies crowd noise, creating a genuine home advantage for the USMNT.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group D Implications</h3>
              <p>
                With <Link href="/teams/paraguay-world-cup-2026-tickets" className="text-red-600 hover:underline">Paraguay</Link> also in the group, this USA vs Australia match could determine second place. The expanded format means 32 teams advance from the group stage, but finishing higher ensures better knockout positioning. Both teams know the stakes.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇦🇺</span> Australia</h4>
                    <div className="space-y-2">
                      {australiaPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600">The USA has dominated recent meetings, but World Cup matches bring different pressure and intensity.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Australia</p><p className="text-sm text-slate-600">SBS, Optus Sport</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                  <div><p className="font-medium">Canada</p><p className="text-sm text-slate-600">TSN, CTV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">🔥 USA Home Match - High Demand!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group D - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">69,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group D Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇸</span> USA<Badge className="ml-auto text-xs">Host</Badge></Link>
                <Link href="/teams/australia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇺</span> Australia</Link>
                <Link href="/teams/paraguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇾</span> Paraguay</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/seattle-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Seattle Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Coffee, rain, and world-class soccer atmosphere!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
