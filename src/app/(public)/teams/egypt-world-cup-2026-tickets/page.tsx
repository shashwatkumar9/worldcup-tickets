import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Egypt World Cup 2026 Tickets | The Pharaohs",
  description: "Buy Egypt FIFA World Cup 2026 tickets. Watch Salah lead the Pharaohs in Group G.",
}

const teamInfo = { name: "Egypt", flag: "🇪🇬", confederation: "CAF", fifaRanking: 34, group: "G", nickname: "The Pharaohs", coach: "Rui Vitória", captain: "Mohamed Salah" }

const keyPlayers = [
  { name: "Mohamed Salah", position: "Forward", club: "Liverpool", number: 10, star: true },
  { name: "Omar Marmoush", position: "Forward", club: "Eintracht Frankfurt", number: 9 },
  { name: "Trezeguet", position: "Midfielder", club: "Trabzonspor", number: 7 },
  { name: "Ahmed Hegazi", position: "Defender", club: "Al-Ittihad", number: 4 },
  { name: "Mohamed El-Shenawy", position: "Goalkeeper", club: "Al Ahly", number: 1 },
]

const groupFixtures = [
  { match: "Belgium vs Egypt", date: "June 12, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "belgium-vs-egypt-world-cup-2026-tickets" },
  { match: "Egypt vs Iran", date: "June 17, 2026", time: "2:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "egypt-vs-iran-world-cup-2026-tickets" },
  { match: "Egypt vs New Zealand", date: "June 22, 2026", time: "5:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "egypt-vs-new-zealand-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 105, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 145, logo: "🎟️", url: "#" }]

export default function EgyptTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-black py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <Badge className="bg-red-600 text-white mb-2">GROUP G</Badge>
              <h1 className="text-4xl font-bold text-slate-900">{teamInfo.name}</h1>
              <p className="text-xl text-slate-700">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">
            Mohamed Salah leads Egypt back to the World Cup! One of the world&apos;s best players
            brings star power and incredible fanbase to 2026.
          </p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Egypt Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-yellow-900">The Salah Factor</h3>
                <p className="text-sm text-yellow-800 mt-2">Mohamed Salah is one of football&apos;s biggest stars. Egypt matches will be in high demand from the massive Egyptian fanbase!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-red-600" />Group G Schedule</CardTitle></CardHeader>
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
              <CardHeader><CardTitle>Group G</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/belgium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇪</span> Belgium</Link>
                <Link href="/teams/egypt-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium"><span>🇪🇬</span> Egypt</Link>
                <Link href="/teams/iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇮🇷</span> Iran</Link>
                <Link href="/teams/new-zealand-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇿</span> New Zealand</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
