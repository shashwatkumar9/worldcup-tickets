import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Japan World Cup 2026 Tickets | Samurai Blue",
  description: "Buy Japan FIFA World Cup 2026 tickets. Watch the Samurai Blue compete in Group F. Match schedule, key players & ticket prices.",
  keywords: ["Japan World Cup 2026 tickets", "Samurai Blue World Cup", "Japan vs Netherlands tickets", "Japan football tickets"],
}

const teamInfo = { name: "Japan", flag: "🇯🇵", confederation: "AFC", fifaRanking: 18, bestFinish: "Round of 16", group: "F", groupOpponents: ["Netherlands", "Tunisia", "TBD"], nickname: "Samurai Blue", coach: "Hajime Moriyasu", captain: "Wataru Endo" }

const keyPlayers = [
  { name: "Takefusa Kubo", position: "Forward", club: "Real Sociedad", number: 11, star: true },
  { name: "Wataru Endo", position: "Midfielder", club: "Liverpool", number: 6 },
  { name: "Kaoru Mitoma", position: "Forward", club: "Brighton", number: 9 },
  { name: "Takehiro Tomiyasu", position: "Defender", club: "Arsenal", number: 16 },
  { name: "Ritsu Dōan", position: "Forward", club: "Freiburg", number: 14 },
  { name: "Shuichi Gonda", position: "Goalkeeper", club: "Shimizu S-Pulse", number: 1 },
]

const groupFixtures = [
  { match: "Netherlands vs Japan", date: "June 13, 2026", time: "5:00 PM ET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "netherlands-vs-japan-world-cup-2026-tickets" },
  { match: "Japan vs Tunisia", date: "June 18, 2026", time: "8:00 PM ET", venue: "NRG Stadium", city: "Houston", slug: "japan-vs-tunisia-world-cup-2026-tickets" },
  { match: "Japan vs TBD", date: "June 23, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "japan-group-match-3-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2022, result: "Round of 16", location: "Qatar" },
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2010, result: "Round of 16", location: "South Africa" },
  { year: 2002, result: "Round of 16", location: "Korea/Japan" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 110, logo: "🎫", url: "#" },
  { partner: "StubHub", price_from: 145, logo: "🎟️", url: "#" },
]

export default function JapanTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-white via-red-600 to-white py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-red-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-red-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Japan</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <Badge className="bg-red-600 text-white mb-2">GROUP F</Badge>
              <h1 className="text-4xl font-bold text-slate-900">{teamInfo.name}</h1>
              <p className="text-xl text-slate-700">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">
            Japan shocked the world in 2022 by beating Germany and Spain in the group stage. The Samurai Blue
            have a golden generation of European-based players ready to make history.
          </p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Japan Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-red-600" />Group F Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50">
                      <div className="flex items-center gap-4">
                        <div><p className="text-sm font-medium">{fixture.date}</p><p className="text-xs text-slate-500">{fixture.time}</p></div>
                        <div><p className="font-semibold">{fixture.match}</p><div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{fixture.venue}, {fixture.city}</div></div>
                      </div>
                      <Button size="sm">Get Tickets</Button>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-red-600" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">{player.number}</div>
                        <div>
                          <p className="font-semibold">{player.name}{player.star && <Star className="inline h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />}</p>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Japan Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div><p className="font-medium">{link.partner}</p><p className="text-sm text-green-600">From ${link.price_from}</p></div>
                    <Button size="sm" asChild><a href={link.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Group F</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇱</span> Netherlands</Link>
                <Link href="/teams/japan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium"><span>🇯🇵</span> Japan</Link>
                <Link href="/teams/tunisia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇹🇳</span> Tunisia</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
