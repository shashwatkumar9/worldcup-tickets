import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Ecuador World Cup 2026 Tickets | La Tri",
  description: "Buy Ecuador FIFA World Cup 2026 tickets. Watch La Tri compete in Group E.",
}

const teamInfo = { name: "Ecuador", flag: "🇪🇨", confederation: "CONMEBOL", fifaRanking: 30, group: "E", nickname: "La Tri", coach: "Félix Sánchez", captain: "Enner Valencia" }

const keyPlayers = [
  { name: "Moisés Caicedo", position: "Midfielder", club: "Chelsea", number: 23, star: true },
  { name: "Enner Valencia", position: "Forward", club: "Internacional", number: 13 },
  { name: "Piero Hincapié", position: "Defender", club: "Bayer Leverkusen", number: 3 },
  { name: "Gonzalo Plata", position: "Forward", club: "Al-Sadd", number: 11 },
  { name: "Jeremy Sarmiento", position: "Forward", club: "Brighton", number: 7 },
]

const groupFixtures = [
  { match: "Germany vs Ecuador", date: "June 22, 2026", time: "5:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "germany-vs-ecuador-world-cup-2026-tickets" },
  { match: "Ecuador vs Curacao", date: "June 12, 2026", time: "8:00 PM ET", venue: "Arrowhead Stadium", city: "Kansas City", slug: "ecuador-vs-curacao-world-cup-2026-tickets" },
  { match: "Ecuador vs Ivory Coast", date: "June 17, 2026", time: "2:00 PM ET", venue: "NRG Stadium", city: "Houston", slug: "ecuador-vs-ivory-coast-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 95, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 130, logo: "🎟️", url: "#" }]

export default function EcuadorTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <Badge className="bg-yellow-400 text-black mb-2">GROUP E</Badge>
              <h1 className="text-4xl font-bold text-white">Ecuador World Cup 2026 Tickets</h1>
              <p className="text-xl text-slate-200">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-100 max-w-2xl">
            Ecuador features one of the Premier League&apos;s best midfielders in Moisés Caicedo.
            The young squad is ready to make an impact in the expanded 48-team tournament.
          </p>
          <Button size="lg" className="mt-6 bg-yellow-400 text-black hover:bg-yellow-500"><Ticket className="mr-2 h-5 w-5" />Buy Ecuador Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-yellow-600" />Group E Schedule</CardTitle></CardHeader>
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
              <CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold">{player.number}</div>
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
              <CardHeader><CardTitle>Group E</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/germany-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇪</span> Germany<Badge className="ml-auto text-xs">4x Champs</Badge></Link>
                <Link href="/teams/curacao-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇼</span> Curacao</Link>
                <Link href="/teams/ivory-coast-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇮</span> Ivory Coast</Link>
                <Link href="/teams/ecuador-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 font-medium"><span>🇪🇨</span> Ecuador</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
