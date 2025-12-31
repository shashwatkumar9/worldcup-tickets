import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Netherlands World Cup 2026 Tickets | Oranje",
  description: "Buy Netherlands FIFA World Cup 2026 tickets. Watch the Oranje compete in Group F. Match schedule, key players & ticket prices from $130.",
  keywords: ["Netherlands World Cup 2026 tickets", "Oranje World Cup", "Netherlands vs Japan tickets", "Dutch football tickets"],
}

const teamInfo = {
  name: "Netherlands",
  flag: "🇳🇱",
  confederation: "UEFA",
  fifaRanking: 7,
  worldCupTitles: 0,
  bestFinish: "Runners-up (1974, 1978, 2010)",
  group: "F",
  groupOpponents: ["Japan", "Tunisia", "TBD (UEFA Playoff)"],
  nickname: "Oranje",
  coach: "Ronald Koeman",
  captain: "Virgil van Dijk",
}

const keyPlayers = [
  { name: "Virgil van Dijk", position: "Defender", club: "Liverpool", number: 4, star: true },
  { name: "Frenkie de Jong", position: "Midfielder", club: "Barcelona", number: 21 },
  { name: "Cody Gakpo", position: "Forward", club: "Liverpool", number: 18 },
  { name: "Memphis Depay", position: "Forward", club: "Atletico Madrid", number: 10 },
  { name: "Xavi Simons", position: "Midfielder", club: "PSG", number: 7 },
  { name: "Bart Verbruggen", position: "Goalkeeper", club: "Brighton", number: 1 },
]

const groupFixtures = [
  { match: "Netherlands vs Japan", date: "June 13, 2026", time: "5:00 PM ET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "netherlands-vs-japan-world-cup-2026-tickets" },
  { match: "Netherlands vs Tunisia", date: "June 18, 2026", time: "2:00 PM ET", venue: "NRG Stadium", city: "Houston", slug: "netherlands-vs-tunisia-world-cup-2026-tickets" },
  { match: "Netherlands vs TBD", date: "June 23, 2026", time: "5:00 PM ET", venue: "Arrowhead Stadium", city: "Kansas City", slug: "netherlands-group-match-3-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2022, result: "Quarter-finals", location: "Qatar" },
  { year: 2014, result: "Third Place", location: "Brazil" },
  { year: 2010, result: "Runners-up", location: "South Africa" },
  { year: 1978, result: "Runners-up", location: "Argentina" },
  { year: 1974, result: "Runners-up", location: "West Germany" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 130, logo: "🎫", url: "#" },
  { partner: "StubHub", price_from: 165, logo: "🎟️", url: "#" },
  { partner: "Viagogo", price_from: 150, logo: "🎫", url: "#" },
  { partner: "SeatGeek", price_from: 140, logo: "🎟️", url: "#" },
]

export default function NetherlandsTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-500 via-white to-orange-500 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-orange-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-orange-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-orange-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Netherlands</span>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-orange-500 text-white">3X FINALISTS</Badge>
                <Badge variant="outline" className="border-orange-700 text-orange-800">GROUP F</Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">{teamInfo.name}</h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-slate-800">
                Three times finalists but never winners. The Oranje seek to end their World Cup heartbreak
                with a squad combining experience and exciting young talent.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Ticket className="mr-2 h-5 w-5" />Buy Netherlands Tickets
                </Button>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-3xl font-bold text-orange-600">#{teamInfo.fifaRanking}</p><p className="text-sm text-slate-600">FIFA Ranking</p></div>
                <div><p className="text-3xl font-bold text-orange-600">3</p><p className="text-sm text-slate-600">WC Finals</p></div>
                <div><p className="text-3xl font-bold text-orange-600">0</p><p className="text-sm text-slate-600">World Cup Titles</p></div>
                <div><p className="text-3xl font-bold text-orange-600">Group {teamInfo.group}</p><p className="text-sm text-slate-600">WC 2026 Group</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-orange-600" />Group F Match Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-slate-900">{fixture.date}</p>
                          <p className="text-xs text-slate-500">{fixture.time}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{fixture.match}</p>
                          <div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{fixture.venue}, {fixture.city}</div>
                        </div>
                      </div>
                      <Button size="sm">Get Tickets<ChevronRight className="ml-1 h-4 w-4" /></Button>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-orange-600" />Key Players to Watch</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">{player.number}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-900">{player.name}</p>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position}</p>
                          <p className="text-xs text-slate-400">{player.club}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-orange-600" />World Cup History</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${entry.result === "Runners-up" ? "bg-orange-50 border border-orange-200" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className={entry.result === "Runners-up" ? "bg-orange-500" : "bg-slate-200 text-slate-700"}>{entry.result}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5 text-orange-600" />Buy Netherlands Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div><p className="font-medium text-slate-900">{link.partner}</p><p className="text-sm text-green-600">From ${link.price_from}</p></div>
                    </div>
                    <Button size="sm" asChild><a href={link.url} target="_blank" rel="noopener noreferrer">Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
                <div className="pt-4 border-t"><div className="flex items-center gap-2 text-yellow-600 text-sm"><TrendingUp className="h-4 w-4" /><span>Popular with traveling Dutch fans!</span></div></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Group F Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-orange-50 font-medium"><span>🇳🇱</span> Netherlands</Link>
                <Link href="/teams/japan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇯🇵</span> Japan</Link>
                <Link href="/teams/tunisia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇹🇳</span> Tunisia</Link>
                <div className="flex items-center gap-2 p-2 text-slate-400"><span>🏳️</span> TBD (UEFA Playoff)</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
