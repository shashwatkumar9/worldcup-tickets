import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Semi-Finals Fixtures & Tickets | FIFA World Cup 2026",
  description: "Buy tickets for the World Cup 2026 Semi-Final matches. The final 4 teams battle for a place in the FIFA World Cup Final.",
  keywords: ["Semi-Finals World Cup 2026", "World Cup Semi-Final tickets", "World Cup 2026 fixtures"]
}

const knockoutRounds = [
  { name: "Round of 32", slug: "/fixtures/round-of-32-world-cup-2026-tickets" },
  { name: "Round of 16", slug: "/fixtures/round-of-16-world-cup-2026-tickets" },
  { name: "Quarter-finals", slug: "/fixtures/quarter-finals-world-cup-2026-tickets" },
  { name: "Semi-finals", current: true },
  { name: "Third Place", slug: "/fixtures/third-place-world-cup-2026-tickets" },
  { name: "Final", slug: "/fixtures/final-world-cup-2026-tickets" },
]

const fixtures = [
  { match: "Semi-Final 1", date: "July 14, 2026", time: "8:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "sf-match-1-world-cup-2026-tickets", featured: true },
  { match: "Semi-Final 2", date: "July 15, 2026", time: "8:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "sf-match-2-world-cup-2026-tickets", featured: true },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 500, url: "#" }, { partner: "StubHub", price_from: 700, url: "#" }]

export default function SemiFinalsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-white text-amber-900 mb-4">KNOCKOUT STAGE</Badge>
          <h1 className="text-5xl font-bold text-white">Semi-Finals</h1>
          <p className="mt-4 text-xl text-white/90">The Final Four! Two matches to decide who plays in the greatest game on Earth.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {knockoutRounds.map((round) => (
              round.current ? (
                <Badge key={round.name} className="bg-white text-amber-900 text-sm py-1 px-3">{round.name}</Badge>
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
            <Card className="border-amber-400 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-amber-600" />
                  <h3 className="font-bold text-amber-900">One Step from Glory</h3>
                </div>
                <p className="text-sm text-amber-800">The Semi-Finals are the most nerve-wracking matches in football. Win and you're 90 minutes from World Cup immortality. The tension is unbearable, the stakes immeasurable.</p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6" /> Semi-Final Fixtures
            </h2>

            <div className="grid gap-6">
              {fixtures.map((f, i) => (
                <Card key={i} className="border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50">
                  <CardContent className="p-8">
                    <Link href={`/fixtures/${f.slug}`} className="block hover:opacity-90 -m-8 p-8 rounded-lg transition-colors">
                      <div className="flex items-center justify-between mb-6">
                        <Badge className="bg-amber-600 text-white text-lg py-1 px-4">{f.match}</Badge>
                        <p className="text-lg text-slate-600 font-medium">{f.date}</p>
                      </div>
                      <div className="flex items-center justify-center gap-12 py-8">
                        <div className="text-center">
                          <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-5xl">?</div>
                          <p className="mt-3 font-bold text-lg">TBD</p>
                        </div>
                        <div className="text-3xl font-bold text-amber-600">vs</div>
                        <div className="text-center">
                          <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-5xl">?</div>
                          <p className="mt-3 font-bold text-lg">TBD</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-6 text-lg">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="h-5 w-5" />{f.venue}, {f.city}
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Clock className="h-5 w-5" />{f.time}
                        </div>
                      </div>
                      <Button size="lg" className="mt-6 w-full bg-amber-600 hover:bg-amber-700">Get Semi-Final Tickets</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-amber-400">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-amber-600" /> Buy Semi-Final Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <p className="text-sm text-amber-600 font-medium">Extremely limited availability!</p>
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
                  <Link key={round.name} href={round.slug || "#"} className={`flex items-center justify-between p-2 rounded hover:bg-slate-50 ${round.current ? "bg-amber-50 font-medium" : ""}`}>
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
