import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Croatia vs Ghana Tickets | World Cup 2026 Group L | 2018 Finalists vs Black Stars",
  description: "Buy Croatia vs Ghana World Cup 2026 tickets - Group L clash! 2018 World Cup finalists Croatia face African powerhouse Ghana. Modric's swan song vs Kudus magic.",
  keywords: ["Croatia vs Ghana tickets", "World Cup 2026 Group L", "Croatia World Cup 2026", "Ghana World Cup", "Modric World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Croatia", flag: "🇭🇷", code: "CRO", nickname: "Vatreni" },
  awayTeam: { name: "Ghana", flag: "🇬🇭", code: "GHA", nickname: "Black Stars" },
  date: "June 18, 2026",
  time: "2:00 PM ET",
  venue: "BC Place",
  city: "Vancouver, British Columbia",
  group: "L",
  matchNumber: 25,
  round: "Group Stage - Matchday 1",
}

const croatiaPlayers = [
  { name: "Luka Modrić", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Joško Gvardiol", position: "Defender", club: "Manchester City", number: 4, star: true },
  { name: "Mateo Kovačić", position: "Midfielder", club: "Manchester City", number: 8 },
  { name: "Andrej Kramarić", position: "Forward", club: "Hoffenheim", number: 9 },
]

const ghanaPlayers = [
  { name: "Mohammed Kudus", position: "Midfielder", club: "West Ham", number: 10, star: true },
  { name: "Thomas Partey", position: "Midfielder", club: "Arsenal", number: 5, star: true },
  { name: "Inaki Williams", position: "Forward", club: "Athletic Bilbao", number: 9 },
  { name: "Jordan Ayew", position: "Forward", club: "Crystal Palace", number: 20 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 165, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 285, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 255, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 235, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2014, competition: "World Cup Group", result: "Croatia 1-0 Ghana", location: "Natal" },
]

export default function CroatiaVsGhanaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-l-world-cup-2026-tickets" className="hover:text-white">Group L</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Croatia vs Ghana</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2018 FINALIST</Badge>
              <Badge className="bg-yellow-400 text-black"><Flame className="h-4 w-4 mr-2" />AFRICA&apos;S PRIDE</Badge>
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
                  <Trophy className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">2014 WORLD CUP REMATCH</h3>
                </div>
                <p className="text-red-800">Croatia and Ghana last met at Brazil 2014, where the Vatreni won 1-0 in the group stage. Now Luka Modrić, at 40, potentially leads his final World Cup campaign against Mohammed Kudus&apos; exciting Black Stars. This Group L clash pits European class against African flair in Vancouver.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Croatia vs Ghana: Experience Meets Excitement</h2>
              <p>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="text-red-600 hover:underline">Croatia</Link> faces <Link href="/teams/ghana-world-cup-2026-tickets" className="text-yellow-600 hover:underline">Ghana</Link> at <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-600 hover:underline">BC Place in Vancouver</Link>. The 2018 World Cup finalists take on Africa&apos;s storied Black Stars in a crucial Group L encounter.
              </p>
              <p>
                Croatia&apos;s incredible 2018 run to the World Cup Final established them as a major force. Third place at Qatar 2022 confirmed their consistency. Luka Modrić remains the heartbeat despite his age, while Joško Gvardiol has emerged as one of world football&apos;s best defenders.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Modrić&apos;s Final Dance?</h3>
              <p>
                Luka Modrić, the 2018 Ballon d&apos;Or winner, may be playing his final World Cup. At 40, the Real Madrid legend defies age with his elegance and vision. Every touch could be his last on football&apos;s biggest stage. Croatia will be determined to send him out in glory.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Kudus Magic</h3>
              <p>
                Mohammed Kudus has exploded as one of the Premier League&apos;s most exciting players at West Ham. His dribbling, shooting, and ability to change games make him Ghana&apos;s talisman. Alongside Thomas Partey&apos;s midfield excellence, the Black Stars have genuine quality.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Vancouver Backdrop</h3>
              <p>
                <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-600 hover:underline">BC Place</Link> in Vancouver provides a spectacular Canadian setting. The retractable roof ensures perfect conditions, while Vancouver&apos;s diverse population creates genuine support for both nations.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group L Battle</h3>
              <p>
                With England and Panama also in Group L, this Croatia-Ghana clash is effectively a battle for second place. Both teams have realistic knockout aspirations. Victory here could be the difference between progress and elimination.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇭🇷</span> Croatia</h4>
                    <div className="space-y-2">
                      {croatiaPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">Croatia won their only previous World Cup meeting 1-0 at Brazil 2014.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Croatia</p><p className="text-sm text-slate-600">HRT</p></div>
                  <div><p className="font-medium">Ghana</p><p className="text-sm text-slate-600">GTV, Max TV</p></div>
                  <div><p className="font-medium">USA/Canada</p><p className="text-sm text-slate-600">FOX, TSN, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-700 font-medium">Modrić vs Kudus in Vancouver!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group L - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">54,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group L Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇭🇷</span> Croatia</Link>
                <Link href="/teams/ghana-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇬🇭</span> Ghana</Link>
                <Link href="/teams/panama-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇦</span> Panama</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/vancouver-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Vancouver Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore Beautiful British Columbia!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
