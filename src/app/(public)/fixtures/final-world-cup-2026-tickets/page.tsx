import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock, ArrowRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Final Tickets | MetLife Stadium",
  description: "Buy tickets for the FIFA World Cup 2026 Final at MetLife Stadium, New York/New Jersey. The biggest match in football!",
  keywords: ["World Cup 2026 Final tickets", "World Cup Final MetLife Stadium", "FIFA World Cup 2026 Final"]
}

const knockoutRounds = [
  { name: "Round of 32", slug: "/fixtures/round-of-32-world-cup-2026-tickets" },
  { name: "Round of 16", slug: "/fixtures/round-of-16-world-cup-2026-tickets" },
  { name: "Quarter-finals", slug: "/fixtures/quarter-finals-world-cup-2026-tickets" },
  { name: "Semi-finals", slug: "/fixtures/semi-finals-world-cup-2026-tickets" },
  { name: "Third Place", slug: "/fixtures/third-place-world-cup-2026-tickets" },
  { name: "Final", current: true },
]

const fixture = {
  match: "FIFA WORLD CUP 2026 FINAL",
  date: "July 19, 2026",
  time: "4:00 PM ET",
  venue: "MetLife Stadium",
  city: "New York/New Jersey",
  capacity: "87,000",
  slug: "world-cup-2026-final-tickets"
}

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 1500, url: "#" }, { partner: "StubHub", price_from: 2500, url: "#" }]

export default function FinalPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 py-24">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
        <div className="container relative mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="h-16 w-16 text-white" />
          </div>
          <Badge className="bg-white text-amber-900 mb-4 text-lg py-1 px-4">JULY 19, 2026</Badge>
          <h1 className="text-6xl font-bold text-white">World Cup Final</h1>
          <p className="mt-4 text-2xl text-white/90">MetLife Stadium, New York/New Jersey</p>
          <p className="mt-2 text-lg text-white/80">The biggest sporting event on Earth</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-slate-100">
              <Ticket className="mr-2 h-5 w-5" />Get Final Tickets
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      <span className="font-bold">THE FINAL</span>
                      <Star className="h-5 w-5" />
                    </div>
                    <span>{fixture.date}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-center gap-16 py-8">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center text-6xl border-4 border-yellow-400">?</div>
                      <p className="mt-4 font-bold text-xl">Finalist 1</p>
                    </div>
                    <div className="text-center">
                      <Trophy className="h-16 w-16 text-yellow-500 mx-auto" />
                      <p className="text-4xl font-bold text-slate-400 mt-2">vs</p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center text-6xl border-4 border-yellow-400">?</div>
                      <p className="mt-4 font-bold text-xl">Finalist 2</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-8 mt-6 text-lg text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />MetLife Stadium
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />{fixture.time}
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-sm text-slate-500 mb-4">Capacity: 87,000 | Expected global TV audience: 1.5 billion</p>
                    <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-12">
                      Get World Cup Final Tickets
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-yellow-500" />Recent World Cup Finals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-sky-50 to-white rounded-lg border-l-4 border-sky-400">
                  <p className="font-bold">2022: Argentina 3-3 France (4-2 pens)</p>
                  <p className="text-sm text-slate-500">The greatest Final ever? Messi finally lifted the trophy after an incredible match.</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border-l-4 border-blue-400">
                  <p className="font-bold">2018: France 4-2 Croatia</p>
                  <p className="text-sm text-slate-500">Les Bleus won their second World Cup with a dominant performance.</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-black/5 to-white rounded-lg border-l-4 border-black">
                  <p className="font-bold">2014: Germany 1-0 Argentina (AET)</p>
                  <p className="text-sm text-slate-500">Götze's extra-time goal gave Germany their fourth title.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MetLife Stadium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">The largest stadium in the NFL will host the crowning moment of World Cup 2026. Located just outside New York City, MetLife Stadium will welcome 87,000 fans for football's biggest game.</p>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets">
                  <Button variant="outline" className="w-full">Explore MetLife Stadium</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-yellow-400">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5" /> Final Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <p className="text-sm text-red-600 font-bold">Highest demand event - extremely limited!</p>
                <p className="text-xs text-slate-500">Prices shown are estimated starting prices and may vary significantly based on availability.</p>
                {affiliateLinks.map((l) => (
                  <div key={l.partner} className="flex items-center justify-between rounded-lg border p-3 bg-gradient-to-r from-yellow-50 to-white">
                    <div>
                      <p className="font-medium">{l.partner}</p>
                      <p className="text-sm text-green-600 font-bold">From ${l.price_from}</p>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-amber-500" asChild>
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
                  <Link key={round.name} href={round.slug || "#"} className={`flex items-center justify-between p-2 rounded hover:bg-slate-50 ${round.current ? "bg-yellow-50 font-medium" : ""}`}>
                    <span>{round.name}</span>
                    {round.current && <Trophy className="h-4 w-4 text-yellow-500" />}
                    {!round.current && <ArrowRight className="h-4 w-4" />}
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg">Don't Miss History</h3>
                <p className="text-sm text-slate-300 mt-2">Be there when the next World Champion is crowned on American soil.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
