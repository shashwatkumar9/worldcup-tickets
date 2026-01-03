import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Morocco vs Haiti Tickets | World Cup 2026 Group C | 2022 Semi-Finalists vs Caribbean Debutants",
  description: "Buy Morocco vs Haiti World Cup 2026 tickets - Group C clash! 2022 World Cup semi-finalists Morocco face World Cup debutants Haiti. Atlas Lions welcome Les Grenadiers.",
  keywords: ["Morocco vs Haiti tickets", "World Cup 2026 Group C", "Morocco World Cup 2026", "Haiti World Cup debut", "Atlas Lions"],
}

const matchInfo = {
  homeTeam: { name: "Morocco", flag: "🇲🇦", code: "MAR", nickname: "Atlas Lions" },
  awayTeam: { name: "Haiti", flag: "🇭🇹", code: "HAI", nickname: "Les Grenadiers" },
  date: "June 13, 2026",
  time: "2:00 PM ET",
  venue: "Azteca Stadium",
  city: "Mexico City, Mexico",
  group: "C",
  matchNumber: 5,
  round: "Group Stage - Matchday 1",
}

const moroccoPlayers = [
  { name: "Achraf Hakimi", position: "Defender", club: "Paris Saint-Germain", number: 2, star: true },
  { name: "Hakim Ziyech", position: "Winger", club: "Galatasaray", number: 7, star: true },
  { name: "Youssef En-Nesyri", position: "Forward", club: "Sevilla", number: 9 },
  { name: "Sofyan Amrabat", position: "Midfielder", club: "Fiorentina", number: 4 },
]

const haitiPlayers = [
  { name: "Duckens Nazon", position: "Forward", club: "Újpest", number: 9, star: true },
  { name: "Derrick Etienne Jr.", position: "Winger", club: "Columbus Crew", number: 10, star: true },
  { name: "Steeven Saba", position: "Midfielder", club: "Violette AC", number: 17 },
  { name: "Johnny Placide", position: "Goalkeeper", club: "Paris FC", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 125, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 195, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 175, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 155, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function MoroccoVsHaitiPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-green-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-c-world-cup-2026-tickets" className="hover:text-white">Group C</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Morocco vs Haiti</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2022 SEMI-FINALIST</Badge>
              <Badge className="bg-blue-500 text-white"><Sparkles className="h-4 w-4 mr-2" />HISTORIC DEBUT</Badge>
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
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">CARIBBEAN DREAM AT THE AZTECA</h3>
                </div>
                <p className="text-blue-800">Haiti makes their FIFA World Cup debut against 2022 semi-finalists Morocco at the legendary Azteca Stadium! The Caribbean nation faces Africa&apos;s best in Mexico City. Every Haitian will be watching as their nation takes the world stage for the first time. Morocco brings the momentum of their incredible Qatar 2022 run.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Morocco vs Haiti: Experience Meets Dreams</h2>
              <p>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="text-red-600 hover:underline">Morocco</Link> faces World Cup debutants <Link href="/teams/haiti-world-cup-2026-tickets" className="text-blue-600 hover:underline">Haiti</Link> at <Link href="/venues/azteca-stadium-world-cup-2026-tickets" className="text-green-600 hover:underline">Azteca Stadium in Mexico City</Link>. The 2022 semi-finalists welcome one of football&apos;s most inspiring underdog stories to the world stage.
              </p>
              <p>
                Morocco&apos;s Qatar 2022 campaign changed African football forever. Defeating Spain and Portugal en route to the semi-finals proved African nations can compete at the highest level. That core of Hakimi, Ziyech, and defensive excellence remains intact for 2026.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Haiti&apos;s Historic Moment</h3>
              <p>
                Haiti&apos;s qualification represents triumph over adversity. The 2010 earthquake devastated the nation, but football provided hope. Les Grenadiers have achieved the impossible - reaching football&apos;s biggest tournament. Their presence inspires Caribbean football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Hakimi&apos;s Brilliance</h3>
              <p>
                Achraf Hakimi is one of world football&apos;s best right-backs at Paris Saint-Germain. His attacking runs, crossing, and that famous panenka penalty against Spain make him Morocco&apos;s talisman. Haiti&apos;s defense will be tested by his relentless runs.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Azteca Magic</h3>
              <p>
                <Link href="/venues/azteca-stadium-world-cup-2026-tickets" className="text-green-600 hover:underline">Azteca Stadium</Link> has hosted two World Cup Finals and countless historic moments. Its atmosphere at 7,200 feet elevation creates unique conditions. Morocco&apos;s experienced squad should handle the altitude better than most.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">What This Means</h3>
              <p>
                For Morocco, this is about starting strong in Group C alongside Brazil and Scotland. For Haiti, every moment matters - they play without pressure, already achieving the impossible by qualifying. The Caribbean will be watching their heroes with immense pride.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇭🇹</span> Haiti</h4>
                    <div className="space-y-2">
                      {haitiPlayers.map((player) => (
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
                <div className="p-6 bg-blue-50 rounded-lg text-center">
                  <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-900">First Ever Meeting!</h3>
                  <p className="text-blue-700 mt-2">
                    Morocco and Haiti have never faced each other. This World Cup Group C match will be their historic first encounter.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Morocco</p><p className="text-sm text-slate-600">2M, beIN Sports</p></div>
                  <div><p className="font-medium">Haiti</p><p className="text-sm text-slate-600">Télé Haïti</p></div>
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
                <p className="text-sm text-red-700 font-medium">Witness history at the Azteca!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group C - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">87,523</span></div>
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
