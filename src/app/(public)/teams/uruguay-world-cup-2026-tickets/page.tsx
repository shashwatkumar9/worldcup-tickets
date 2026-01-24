import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Uruguay World Cup 2026 Tickets | 2x World Champions",
  description: "Buy Uruguay FIFA World Cup 2026 tickets. Watch La Celeste in Group H. Match schedule, Núñez, Valverde & ticket prices.",
  keywords: ["Uruguay World Cup 2026 tickets", "La Celeste World Cup", "Uruguay vs Spain tickets"],
}

const teamInfo = { name: "Uruguay", flag: "🇺🇾", confederation: "CONMEBOL", fifaRanking: 14, worldCupTitles: 2, group: "H", nickname: "La Celeste", coach: "Marcelo Bielsa", captain: "Federico Valverde" }

const keyPlayers = [
  { name: "Federico Valverde", position: "Midfielder", club: "Real Madrid", number: 15, star: true },
  { name: "Darwin Núñez", position: "Forward", club: "Liverpool", number: 9 },
  { name: "Ronald Araújo", position: "Defender", club: "Barcelona", number: 4 },
  { name: "Luis Suárez", position: "Forward", club: "Inter Miami", number: 9 },
  { name: "Rodrigo Bentancur", position: "Midfielder", club: "Tottenham", number: 6 },
  { name: "Sergio Rochet", position: "Goalkeeper", club: "Internacional", number: 1 },
]

const groupFixtures = [
  { match: "Spain vs Uruguay", date: "June 23, 2026", time: "8:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "spain-vs-uruguay-world-cup-2026-tickets" },
  { match: "Uruguay vs Cape Verde", date: "June 13, 2026", time: "5:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "uruguay-vs-cape-verde-world-cup-2026-tickets" },
  { match: "Uruguay vs Saudi Arabia", date: "June 18, 2026", time: "8:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "uruguay-vs-saudi-arabia-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 2018, result: "Quarter-finals", location: "Russia" },
  { year: 2010, result: "Fourth Place", location: "South Africa" },
  { year: 1950, result: "Champions", location: "Brazil" },
  { year: 1930, result: "Champions", location: "Uruguay" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 115, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 150, logo: "🎟️", url: "#" }]

export default function UruguayTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-sky-500 via-white to-sky-500 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-sky-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Uruguay</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <div className="flex gap-2 mb-2">
                <Badge className="bg-yellow-500 text-black">2X WORLD CHAMPIONS</Badge>
                <Badge variant="outline" className="border-sky-700">GROUP H</Badge>
              </div>
              <h1 className="text-4xl font-bold text-slate-900">Uruguay World Cup 2026 Tickets</h1>
              <p className="text-xl text-slate-700">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">
            The first ever World Cup winners (1930) seek to add a third star. Under Marcelo Bielsa,
            Uruguay play an exciting brand of football with Valverde and Núñez leading the charge.
          </p>
          <Button size="lg" className="mt-6 bg-sky-600 hover:bg-sky-700"><Ticket className="mr-2 h-5 w-5" />Buy Uruguay Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-sky-600" />Group H Schedule</CardTitle></CardHeader>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-sky-600" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">{player.number}</div>
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
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-sky-600" />World Cup History</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${entry.result === "Champions" ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-4"><span className="font-bold">{entry.year}</span><span className="text-slate-600">{entry.location}</span></div>
                      <Badge className={entry.result === "Champions" ? "bg-yellow-500" : "bg-slate-200 text-slate-700"}>{entry.result === "Champions" && "🏆 "}{entry.result}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Tickets</CardTitle></CardHeader>
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
              <CardHeader><CardTitle>Group H</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/spain-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇸</span> Spain<Badge className="ml-auto text-xs">Euro Champs</Badge></Link>
                <Link href="/teams/cape-verde-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇻</span> Cape Verde</Link>
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇸🇦</span> Saudi Arabia</Link>
                <Link href="/teams/uruguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-sky-50 font-medium"><span>🇺🇾</span> Uruguay</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
