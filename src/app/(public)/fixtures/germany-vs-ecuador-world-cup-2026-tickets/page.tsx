import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Germany vs Ecuador Tickets | World Cup 2026 Group E | 4x Champions vs South American Rising Stars",
  description: "Buy Germany vs Ecuador World Cup 2026 tickets - Group E clash! Four-time champions Germany face Ecuador's rising generation. Musiala and Wirtz vs Caicedo showdown.",
  keywords: ["Germany vs Ecuador tickets", "World Cup 2026 Group E", "Germany World Cup 2026", "Ecuador World Cup", "Die Mannschaft vs La Tri"],
}

const matchInfo = {
  homeTeam: { name: "Germany", flag: "🇩🇪", code: "GER", nickname: "Die Mannschaft" },
  awayTeam: { name: "Ecuador", flag: "🇪🇨", code: "ECU", nickname: "La Tri" },
  date: "June 24, 2026",
  time: "5:00 PM ET",
  venue: "Mercedes-Benz Stadium",
  city: "Atlanta, Georgia",
  group: "E",
  matchNumber: 44,
  round: "Group Stage - Matchday 3",
}

const germanyPlayers = [
  { name: "Jamal Musiala", position: "Midfielder", club: "Bayern Munich", number: 10, star: true },
  { name: "Florian Wirtz", position: "Midfielder", club: "Bayer Leverkusen", number: 17, star: true },
  { name: "Kai Havertz", position: "Forward", club: "Arsenal", number: 7 },
  { name: "Joshua Kimmich", position: "Midfielder", club: "Bayern Munich", number: 6 },
]

const ecuadorPlayers = [
  { name: "Moisés Caicedo", position: "Midfielder", club: "Chelsea", number: 23, star: true },
  { name: "Enner Valencia", position: "Forward", club: "Internacional", number: 13, star: true },
  { name: "Piero Hincapié", position: "Defender", club: "Bayer Leverkusen", number: 3 },
  { name: "Gonzalo Plata", position: "Winger", club: "Al-Sadd", number: 17 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 195, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 335, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 295, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 275, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "Friendly", result: "Germany 3-1 Ecuador", location: "Cologne" },
]

export default function GermanyVsEcuadorPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-red-600 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-e-world-cup-2026-tickets" className="hover:text-white">Group E</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Germany vs Ecuador</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />4X WORLD CHAMPIONS</Badge>
              <Badge className="bg-blue-600 text-white"><Flame className="h-4 w-4 mr-2" />MATCHDAY 3</Badge>
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
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">GROUP E DECIDER</h3>
                </div>
                <p className="text-yellow-800">The final Group E matchday brings Germany against Ecuador with knockout positions on the line. Musiala and Wirtz lead Germany&apos;s generational talents against Caicedo&apos;s Chelsea excellence. Both teams will know their qualification scenarios by kickoff - expect maximum intensity in Atlanta.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Germany vs Ecuador: Group E Finale</h2>
              <p>
                <Link href="/teams/germany-world-cup-2026-tickets" className="text-black hover:underline">Germany</Link> faces <Link href="/teams/ecuador-world-cup-2026-tickets" className="text-blue-600 hover:underline">Ecuador</Link> at <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> on the final Group E matchday. Four-time champions meet South America&apos;s rising force.
              </p>
              <p>
                Germany&apos;s recent tournament disappointments demand redemption. Back-to-back group stage exits in 2018 and 2022 stung deeply. Jamal Musiala and Florian Wirtz lead a youth revolution seeking to restore German football&apos;s prestige on the world stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Musiala&apos;s Magic</h3>
              <p>
                Jamal Musiala has emerged as one of world football&apos;s brightest stars at Bayern Munich. His dribbling, close control, and ability to unlock defenses make him Germany&apos;s most talented player. Paired with Florian Wirtz, Germany possesses extraordinary creative quality.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Caicedo&apos;s Chelsea Class</h3>
              <p>
                Moisés Caicedo&apos;s record-breaking move to Chelsea highlighted his extraordinary ability. His defensive positioning, ball recovery, and passing make him one of football&apos;s most complete midfielders. The battle between Germany&apos;s creators and Caicedo&apos;s disruption will be fascinating.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Atlanta Decider</h3>
              <p>
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Mercedes-Benz Stadium</Link>&apos;s unique design creates an incredible atmosphere. Atlanta United&apos;s passionate fanbase has established the city as a soccer destination. German and Ecuadorian fans will pack the stadium for this Group E decider.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Matchday 3 Stakes</h3>
              <p>
                With Ivory Coast and Curacao completing Group E, the Germany-Ecuador clash could determine first and second place. Both teams will likely need at least a draw to advance, but finishing first provides a more favorable knockout path. Every tactical decision carries knockout implications.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇩🇪</span> Germany</h4>
                    <div className="space-y-2">
                      {germanyPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
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
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇪🇨</span> Ecuador</h4>
                    <div className="space-y-2">
                      {ecuadorPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">Germany won their most recent friendly 3-1 in Cologne ahead of Qatar 2022.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Germany</p><p className="text-sm text-slate-600">ZDF, ARD, MagentaTV</p></div>
                  <div><p className="font-medium">Ecuador</p><p className="text-sm text-slate-600">Teleamazonas, Canal del Fútbol</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-black">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-black font-medium">Group E decider in Atlanta!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group E - Matchday 3</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">71,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group E Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/germany-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇪</span> Germany</Link>
                <Link href="/teams/ecuador-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇨</span> Ecuador</Link>
                <Link href="/teams/ivory-coast-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇮</span> Ivory Coast</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🇨🇼</span> Curacao</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Atlanta Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore the ATL!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
