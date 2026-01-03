import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Belgium vs Iran Tickets | World Cup 2026 Group G | BC Place Vancouver",
  description: "Buy Belgium vs Iran World Cup 2026 tickets at BC Place, Vancouver. June 19, 2026. Red Devils face Team Melli in Group G encounter!",
  keywords: ["Belgium vs Iran tickets", "World Cup 2026 Vancouver", "Belgium World Cup 2026", "Iran World Cup", "BC Place World Cup", "De Bruyne World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Belgium", flag: "🇧🇪", code: "BEL", nickname: "Red Devils" },
  awayTeam: { name: "Iran", flag: "🇮🇷", code: "IRN", nickname: "Team Melli" },
  date: "June 19, 2026",
  time: "7:00 PM ET",
  venue: "BC Place",
  city: "Vancouver, Canada",
  group: "G",
  matchNumber: 32,
  round: "Group Stage - Matchday 2",
}

const belgiumPlayers = [
  { name: "Jérémy Doku", position: "Winger", club: "Manchester City", number: 11, star: true },
  { name: "Amadou Onana", position: "Midfielder", club: "Aston Villa", number: 6, star: true },
  { name: "Kevin De Bruyne", position: "Midfielder", club: "Manchester City", number: 7 },
  { name: "Romelu Lukaku", position: "Forward", club: "Roma", number: 9 },
]

const iranPlayers = [
  { name: "Mehdi Taremi", position: "Forward", club: "Inter Milan", number: 9, star: true },
  { name: "Alireza Jahanbakhsh", position: "Winger", club: "Feyenoord", number: 7, star: true },
  { name: "Saeid Ezatolahi", position: "Midfielder", club: "Vejle", number: 15 },
  { name: "Alireza Beiranvand", position: "Goalkeeper", club: "Persepolis", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 155, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 255, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 225, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 205, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "World Cup", result: "Belgium 5-2 Iran", location: "n/a - no WC meeting" },
  { year: 2018, competition: "Friendly", result: "Belgium 1-1 Iran", location: "Brussels" },
]

export default function BelgiumVsIranPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-yellow-400 to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-g-world-cup-2026-tickets" className="hover:text-white">Group G</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Belgium vs Iran</span>
          </div>

          <div className="mt-8 text-center">
            <Badge className="bg-red-600 text-white mb-4">GROUP G - MATCHDAY 2</Badge>
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
              <h2 className="text-2xl font-bold text-slate-900">Belgium vs Iran: New Generation Red Devils</h2>
              <p>
                <Link href="/teams/belgium-world-cup-2026-tickets" className="text-red-600 hover:underline">Belgium</Link>&apos;s golden generation is transitioning to a new era as they face <Link href="/teams/iran-world-cup-2026-tickets" className="text-green-700 hover:underline">Iran</Link> at <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-red-600 hover:underline">BC Place in Vancouver</Link>. While Kevin De Bruyne and Romelu Lukaku provide veteran leadership, young stars like Jérémy Doku and Amadou Onana represent Belgium&apos;s future. Iran&apos;s Team Melli, led by Serie A star Mehdi Taremi, aims to prove Asian football can compete at the highest level.
              </p>
              <p>
                Belgium peaked at number one in FIFA rankings for years, reaching the 2018 World Cup semifinal and Euro 2020 quarterfinal. Their golden generation featuring Eden Hazard, De Bruyne, and Lukaku never quite captured a major trophy. Now, a new wave of Belgian talent seeks to complete unfinished business.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Doku and Belgium&apos;s Future</h3>
              <p>
                Jérémy Doku has become one of the Premier League&apos;s most exciting wingers at Manchester City. His pace, dribbling, and directness provide Belgium with a dynamic attacking threat. Alongside Amadou Onana&apos;s midfield power and the creativity of veterans like De Bruyne, Belgium&apos;s blend of youth and experience remains formidable.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Iran&apos;s European Stars</h3>
              <p>
                Mehdi Taremi&apos;s move to Inter Milan cemented his status as one of Asia&apos;s premier strikers. His aerial ability and movement give Iran a genuine goal threat against any defense. Alireza Jahanbakhsh provides Eredivisie experience from Feyenoord, while the team&apos;s collective organization makes them difficult to break down.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Team Melli&apos;s World Cup History</h3>
              <p>
                Iran has qualified for six World Cups, with their best performance coming in 2018 when they nearly qualified from a group containing Spain and Portugal. Their 1-1 draw with Portugal and narrow 1-0 loss to Spain showed Iran&apos;s potential. Carlos Queiroz&apos;s tactical discipline transformed Iranian football, and that legacy continues.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Vancouver Welcomes</h3>
              <p>
                <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-red-600 hover:underline">BC Place</Link> in Vancouver offers a retractable roof stadium in one of North America&apos;s most beautiful cities. Vancouver&apos;s significant Iranian community ensures passionate Team Melli support, while Canada&apos;s multicultural nature creates a welcoming atmosphere for all.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group G Battle</h3>
              <p>
                Group G features intriguing matchups, and Belgium enters as favorites. However, Iran&apos;s defensive discipline and counter-attacking ability make them dangerous opponents. A Belgium victory seems likely, but Team Melli have proven capable of causing upsets at World Cups.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇧🇪</span> Belgium</h4>
                    <div className="space-y-2">
                      {belgiumPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇮🇷</span> Iran</h4>
                    <div className="space-y-2">
                      {iranPlayers.map((player) => (
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
                  <div><p className="font-medium">Belgium</p><p className="text-sm text-slate-600">VRT, RTBF</p></div>
                  <div><p className="font-medium">Iran</p><p className="text-sm text-slate-600">IRIB, beIN Sports</p></div>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group G - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">54,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group G Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/belgium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇪</span> Belgium</Link>
                <Link href="/teams/iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇮🇷</span> Iran</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/vancouver-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Vancouver Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Beautiful BC awaits!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
