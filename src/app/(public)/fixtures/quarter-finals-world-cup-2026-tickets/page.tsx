import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Quarter-Finals Fixtures & Tickets | FIFA World Cup 2026",
  description: "Buy tickets for all Quarter-Final matches at World Cup 2026. The final 8 teams battle for a spot in the semi-finals.",
  keywords: ["Quarter-Finals World Cup 2026", "World Cup knockout stage tickets", "World Cup 2026 fixtures"]
}

const knockoutRounds = [
  { name: "Round of 32", slug: "/fixtures/round-of-32-world-cup-2026-tickets" },
  { name: "Round of 16", slug: "/fixtures/round-of-16-world-cup-2026-tickets" },
  { name: "Quarter-finals", current: true },
  { name: "Semi-finals", slug: "/fixtures/semi-finals-world-cup-2026-tickets" },
  { name: "Third Place", slug: "/fixtures/third-place-world-cup-2026-tickets" },
  { name: "Final", slug: "/fixtures/final-world-cup-2026-tickets" },
]

const fixtures = [
  { match: "Quarter-Final 1", date: "July 9, 2026", time: "4:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "qf-match-1-world-cup-2026-tickets", featured: true },
  { match: "Quarter-Final 2", date: "July 9, 2026", time: "8:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "qf-match-2-world-cup-2026-tickets", featured: true },
  { match: "Quarter-Final 3", date: "July 10, 2026", time: "4:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "qf-match-3-world-cup-2026-tickets", featured: true },
  { match: "Quarter-Final 4", date: "July 10, 2026", time: "8:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "qf-match-4-world-cup-2026-tickets", featured: true },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 350, url: "#" }, { partner: "StubHub", price_from: 475, url: "#" }]

export default function QuarterFinalsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-yellow-400 text-black mb-4">KNOCKOUT STAGE</Badge>
          <h1 className="text-5xl font-bold text-white">Quarter-Finals</h1>
          <p className="mt-4 text-xl text-white/90">The Elite Eight! Only 4 matches stand between these teams and World Cup glory.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {knockoutRounds.map((round) => (
              round.current ? (
                <Badge key={round.name} className="bg-white text-orange-900 text-sm py-1 px-3">{round.name}</Badge>
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
            <Card className="border-orange-400 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-orange-600" />
                  <h3 className="font-bold text-orange-900">Where Legends Are Made</h3>
                </div>
                <p className="text-sm text-orange-800">The Quarter-Finals consistently deliver the most dramatic moments in World Cup history. From last-minute winners to penalty shootout heroics - this is football at its finest.</p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6" /> All Quarter-Final Fixtures
            </h2>

            <div className="grid gap-6">
              {fixtures.map((f, i) => (
                <Card key={i} className="border-2 border-orange-200">
                  <CardContent className="p-6">
                    <Link href={`/fixtures/${f.slug}`} className="block hover:bg-slate-50 -m-6 p-6 rounded-lg transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-orange-600 text-white">{f.match}</Badge>
                        <p className="text-sm text-slate-600">{f.date}</p>
                      </div>
                      <div className="flex items-center justify-center gap-8 py-6">
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-4xl">?</div>
                          <p className="mt-2 font-medium">TBD</p>
                        </div>
                        <div className="text-2xl font-bold text-slate-400">vs</div>
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-4xl">?</div>
                          <p className="mt-2 font-medium">TBD</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <MapPin className="h-4 w-4" />{f.venue}, {f.city}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <Clock className="h-4 w-4" />{f.time}
                        </div>
                      </div>
                      <Button className="mt-4 w-full">Get Tickets</Button>
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
                  <Ticket className="h-5 w-5" /> Buy QF Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-orange-600 font-medium">High demand - book early!</p>
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
                  <Link key={round.name} href={round.slug || "#"} className={`flex items-center justify-between p-2 rounded hover:bg-slate-50 ${round.current ? "bg-orange-50 font-medium" : ""}`}>
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
