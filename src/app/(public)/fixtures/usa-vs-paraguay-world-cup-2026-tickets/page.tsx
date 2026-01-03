import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "USA vs Paraguay Tickets | World Cup 2026 Group D | Stars & Stripes Host the Guaraníes",
  description: "Buy USA vs Paraguay World Cup 2026 tickets - Group D clash! Co-hosts USA face Paraguay at AT&T Stadium. Pulisic leads USMNT against South American rivals in Dallas.",
  keywords: ["USA vs Paraguay tickets", "World Cup 2026 Group D", "USA World Cup 2026", "Paraguay World Cup", "AT&T Stadium Dallas"],
}

const matchInfo = {
  homeTeam: { name: "USA", flag: "🇺🇸", code: "USA", nickname: "Stars & Stripes" },
  awayTeam: { name: "Paraguay", flag: "🇵🇾", code: "PAR", nickname: "La Albirroja" },
  date: "June 14, 2026",
  time: "8:00 PM ET",
  venue: "AT&T Stadium",
  city: "Dallas, Texas",
  group: "D",
  matchNumber: 10,
  round: "Group Stage - Matchday 1",
}

const usaPlayers = [
  { name: "Christian Pulisic", position: "Winger", club: "AC Milan", number: 10, star: true },
  { name: "Gio Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7, star: true },
  { name: "Tyler Adams", position: "Midfielder", club: "Bournemouth", number: 4 },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
]

const paraguayPlayers = [
  { name: "Miguel Almirón", position: "Winger", club: "Newcastle United", number: 10, star: true },
  { name: "Julio Enciso", position: "Forward", club: "Brighton", number: 17, star: true },
  { name: "Gustavo Gómez", position: "Defender", club: "Palmeiras", number: 3 },
  { name: "Andrés Cubas", position: "Midfielder", club: "Vancouver Whitecaps", number: 5 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 295, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 495, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 425, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 395, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "Friendly", result: "Paraguay 1-1 USA", location: "Asunción" },
  { year: 2018, competition: "Friendly", result: "USA 1-0 Paraguay", location: "Cary" },
  { year: 2016, competition: "Copa América", result: "USA 1-0 Paraguay", location: "Philadelphia" },
]

export default function USAVsParaguayPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-700 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-d-world-cup-2026-tickets" className="hover:text-white">Group D</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">USA vs Paraguay</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-blue-700 text-white text-lg px-4 py-1"><Home className="h-4 w-4 mr-2" />HOST NATION</Badge>
              <Badge className="bg-red-600 text-white"><Flame className="h-4 w-4 mr-2" />SOUTH AMERICAN RIVALS</Badge>
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
                  <Flame className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">AMERICA&apos;S WORLD CUP BEGINS</h3>
                </div>
                <p className="text-blue-800">The USA begins their home World Cup against Paraguay at the iconic AT&T Stadium in Dallas! Christian Pulisic leads the USMNT against La Albirroja&apos;s Premier League stars. Over 90,000 fans will create an unforgettable atmosphere as America welcomes the world. Almirón and Enciso bring firepower for Paraguay.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">USA vs Paraguay: Host Nation&apos;s Dream Begins</h2>
              <p>
                <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA</Link> faces <Link href="/teams/paraguay-world-cup-2026-tickets" className="text-red-700 hover:underline">Paraguay</Link> at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&amp;T Stadium in Dallas</Link>. Co-hosts USA begin their tournament against South America&apos;s resilient Guaraníes.
              </p>
              <p>
                The United States has never experienced anything like this. Hosting a World Cup for the first time since 1994 brings enormous expectations. This golden generation of American players - Pulisic, Reyna, McKennie, Adams - must deliver on home soil with an entire nation watching.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Pulisic&apos;s Moment</h3>
              <p>
                Christian Pulisic has carried American soccer on his shoulders for years. His move to AC Milan elevated his game further. The &quot;Captain America&quot; nickname reflects the weight of expectation he bears. A home World Cup represents his chance to become a true American sporting icon.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Paraguay&apos;s Premier League Core</h3>
              <p>
                Miguel Almirón&apos;s incredible 2022-23 Premier League season at Newcastle United reminded everyone of his quality. Julio Enciso brings youthful brilliance from Brighton. Paraguay may lack household names, but their work rate and tactical discipline make them dangerous opponents.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Jerry World Stage</h3>
              <p>
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&amp;T Stadium</Link>&apos;s retractable roof and massive video board create a unique venue. Over 90,000 fans will pack &quot;Jerry World&quot; for this historic occasion. The Dallas-Fort Worth metroplex&apos;s massive population ensures incredible atmosphere and energy.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group D Opening</h3>
              <p>
                With Australia and another team completing Group D, USA needs a strong start. Paraguay&apos;s resilience in South American qualifiers proves their quality. The hosts cannot afford complacency - every point matters in the group stage.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇵🇾</span> Paraguay</h4>
                    <div className="space-y-2">
                      {paraguayPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">USA won their Copa América Centenario meeting 1-0 in Philadelphia.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Paraguay</p><p className="text-sm text-slate-600">Tigo Sports, SNT</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-blue-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-blue-700 font-medium">Be part of American soccer history!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group D - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">92,967</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group D Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇸</span> USA</Link>
                <Link href="/teams/paraguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇾</span> Paraguay</Link>
                <Link href="/teams/australia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇺</span> Australia</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🏴</span> TBD</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Dallas Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore Big D - everything is bigger in Texas!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
