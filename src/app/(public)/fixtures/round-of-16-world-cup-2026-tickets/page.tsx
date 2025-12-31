import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Round of 16 Fixtures & Tickets | FIFA World Cup 2026",
  description: "Buy tickets for all Round of 16 knockout matches at World Cup 2026. The best 16 teams battle for quarter-final spots.",
  keywords: ["Round of 16 World Cup 2026", "World Cup knockout stage tickets", "World Cup 2026 fixtures"]
}

const knockoutRounds = [
  { name: "Round of 32", slug: "/fixtures/round-of-32-world-cup-2026-tickets" },
  { name: "Round of 16", current: true },
  { name: "Quarter-finals", slug: "/fixtures/quarter-finals-world-cup-2026-tickets" },
  { name: "Semi-finals", slug: "/fixtures/semi-finals-world-cup-2026-tickets" },
  { name: "Third Place", slug: "/fixtures/third-place-world-cup-2026-tickets" },
  { name: "Final", slug: "/fixtures/final-world-cup-2026-tickets" },
]

const fixtures = [
  { match: "Winner R32-1 vs Winner R32-2", date: "July 4, 2026", time: "2:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "r16-match-1-world-cup-2026-tickets" },
  { match: "Winner R32-3 vs Winner R32-4", date: "July 4, 2026", time: "5:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "r16-match-2-world-cup-2026-tickets" },
  { match: "Winner R32-5 vs Winner R32-6", date: "July 4, 2026", time: "8:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "r16-match-3-world-cup-2026-tickets" },
  { match: "Winner R32-7 vs Winner R32-8", date: "July 5, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "r16-match-4-world-cup-2026-tickets" },
  { match: "Winner R32-9 vs Winner R32-10", date: "July 5, 2026", time: "5:00 PM ET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "r16-match-5-world-cup-2026-tickets" },
  { match: "Winner R32-11 vs Winner R32-12", date: "July 5, 2026", time: "8:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "r16-match-6-world-cup-2026-tickets" },
  { match: "Winner R32-13 vs Winner R32-14", date: "July 6, 2026", time: "5:00 PM ET", venue: "NRG Stadium", city: "Houston", slug: "r16-match-7-world-cup-2026-tickets" },
  { match: "Winner R32-15 vs Winner R32-16", date: "July 6, 2026", time: "8:00 PM ET", venue: "Estadio Azteca", city: "Mexico City", slug: "r16-match-8-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 225, url: "#" }, { partner: "StubHub", price_from: 310, url: "#" }]

export default function RoundOf16Page() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-yellow-400 text-black mb-4">KNOCKOUT STAGE</Badge>
          <h1 className="text-5xl font-bold text-white">Round of 16</h1>
          <p className="mt-4 text-xl text-white/90">Only 16 remain! The road to the quarter-finals heats up. Every match is a final.</p>
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
            <Card className="border-indigo-400 bg-indigo-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-bold text-indigo-900">Classic Knockout Football</h3>
                </div>
                <p className="text-sm text-indigo-800">The Round of 16 is where legends are made. Win or go home. The intensity reaches new heights as teams fight for quarter-final glory.</p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6" /> All Round of 16 Fixtures
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
                  <Ticket className="h-5 w-5" /> Buy R16 Tickets
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
                  <Link key={round.name} href={round.slug || "#"} className={`flex items-center justify-between p-2 rounded hover:bg-slate-50 ${round.current ? "bg-indigo-50 font-medium" : ""}`}>
                    <span>{round.name}</span>
                    <ArrowRight className="h-4 w-4" />
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
