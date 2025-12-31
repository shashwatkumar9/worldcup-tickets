import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Round of 32 Fixtures & Tickets | FIFA World Cup 2026",
  description: "Buy tickets for all Round of 32 knockout matches at World Cup 2026. 32 teams fight for 16 spots in the knockout rounds.",
  keywords: ["Round of 32 World Cup 2026", "World Cup knockout stage tickets", "World Cup 2026 fixtures"]
}

const knockoutRounds = [
  { name: "Round of 32", current: true },
  { name: "Round of 16", slug: "/fixtures/round-of-16-world-cup-2026-tickets" },
  { name: "Quarter-finals", slug: "/fixtures/quarter-finals-world-cup-2026-tickets" },
  { name: "Semi-finals", slug: "/fixtures/semi-finals-world-cup-2026-tickets" },
  { name: "Third Place", slug: "/fixtures/third-place-world-cup-2026-tickets" },
  { name: "Final", slug: "/fixtures/final-world-cup-2026-tickets" },
]

const fixtures = [
  { match: "1A vs 3C/D/E", date: "June 28, 2026", time: "2:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "r32-match-1-world-cup-2026-tickets" },
  { match: "2A vs 2C", date: "June 28, 2026", time: "5:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "r32-match-2-world-cup-2026-tickets" },
  { match: "1B vs 3A/D/E/F", date: "June 28, 2026", time: "8:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "r32-match-3-world-cup-2026-tickets" },
  { match: "2B vs 2D", date: "June 29, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "r32-match-4-world-cup-2026-tickets" },
  { match: "1C vs 3B/E/F", date: "June 29, 2026", time: "5:00 PM ET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "r32-match-5-world-cup-2026-tickets" },
  { match: "2C vs 2E", date: "June 29, 2026", time: "8:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "r32-match-6-world-cup-2026-tickets" },
  { match: "1D vs 3A/B/C", date: "June 30, 2026", time: "2:00 PM ET", venue: "NRG Stadium", city: "Houston", slug: "r32-match-7-world-cup-2026-tickets" },
  { match: "2D vs 2F", date: "June 30, 2026", time: "5:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "r32-match-8-world-cup-2026-tickets" },
  { match: "1E vs 3A/B/C/D", date: "June 30, 2026", time: "8:00 PM ET", venue: "BC Place", city: "Vancouver", slug: "r32-match-9-world-cup-2026-tickets" },
  { match: "2E vs 2G", date: "July 1, 2026", time: "2:00 PM ET", venue: "Gillette Stadium", city: "Boston", slug: "r32-match-10-world-cup-2026-tickets" },
  { match: "1F vs 3B/C/D/E", date: "July 1, 2026", time: "5:00 PM ET", venue: "BMO Field", city: "Toronto", slug: "r32-match-11-world-cup-2026-tickets" },
  { match: "2F vs 2H", date: "July 1, 2026", time: "8:00 PM ET", venue: "Estadio Azteca", city: "Mexico City", slug: "r32-match-12-world-cup-2026-tickets" },
  { match: "1G vs 3E/F/G/H", date: "July 2, 2026", time: "2:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "r32-match-13-world-cup-2026-tickets" },
  { match: "2G vs 2I", date: "July 2, 2026", time: "5:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "r32-match-14-world-cup-2026-tickets" },
  { match: "1H vs 3F/G/H/I", date: "July 2, 2026", time: "8:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "r32-match-15-world-cup-2026-tickets" },
  { match: "2H vs 2J", date: "July 3, 2026", time: "5:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "r32-match-16-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 175, url: "#" }, { partner: "StubHub", price_from: 245, url: "#" }]

export default function RoundOf32Page() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-yellow-400 text-black mb-4">KNOCKOUT STAGE</Badge>
          <h1 className="text-5xl font-bold text-white">Round of 32</h1>
          <p className="mt-4 text-xl text-white/90">The knockout stage begins! 32 teams fight for survival. One loss and you're out.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {knockoutRounds.map((round) => (
              round.current ? (
                <Badge key={round.name} className="bg-white text-purple-900 text-sm py-1 px-3">{round.name}</Badge>
              ) : (
                <Link key={round.name} href={round.slug || "#"}>
                  <Badge variant="outline" className="text-white border-white/50 text-sm py-1 px-3 hover:bg-white/20">{round.name}</Badge>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-purple-400 bg-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-purple-600" />
                  <h3 className="font-bold text-purple-900">New Knockout Format</h3>
                </div>
                <p className="text-sm text-purple-800">With 48 teams in the World Cup, the knockout stage now starts with the Round of 32. The top 2 teams from each group plus the 8 best third-place finishers advance.</p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6" /> All Round of 32 Fixtures
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {fixtures.map((f, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Link href={`/fixtures/${f.slug}`} className="block hover:bg-slate-50 -m-4 p-4 rounded-lg transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">Match {i + 1}</Badge>
                        <p className="text-xs text-slate-500">{f.date}</p>
                      </div>
                      <p className="font-bold text-lg">{f.match}</p>
                      <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                        <MapPin className="h-3 w-3" />{f.venue}, {f.city}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                        <Clock className="h-3 w-3" />{f.time}
                      </div>
                      <Button size="sm" className="mt-3 w-full">Get Tickets</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5" /> Buy R32 Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((l) => (
                  <div key={l.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">{l.partner}</p>
                      <p className="text-sm text-green-600">From ${l.price_from}</p>
                    </div>
                    <Button size="sm" asChild>
                      <a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Knockout Rounds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {knockoutRounds.map((round) => (
                  <Link key={round.name} href={round.slug || "#"} className={`flex items-center justify-between p-2 rounded hover:bg-slate-50 ${round.current ? "bg-purple-50 font-medium" : ""}`}>
                    <span>{round.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group Stages</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-4 gap-2">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((g) => (
                  <Link key={g} href={`/fixtures/group-${g.toLowerCase()}-world-cup-2026-tickets`}>
                    <Button variant="outline" size="sm" className="w-full">{g}</Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
