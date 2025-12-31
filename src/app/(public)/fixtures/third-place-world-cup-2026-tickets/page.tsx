import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock, ArrowRight, Medal } from "lucide-react"

export const metadata: Metadata = {
  title: "Third Place Match Tickets | FIFA World Cup 2026",
  description: "Buy tickets for the World Cup 2026 Third Place Play-off. Watch two semi-final losers battle for bronze medals.",
  keywords: ["Third Place World Cup 2026", "World Cup Third Place tickets", "Bronze Medal Match 2026"]
}

const knockoutRounds = [
  { name: "Round of 32", slug: "/fixtures/round-of-32-world-cup-2026-tickets" },
  { name: "Round of 16", slug: "/fixtures/round-of-16-world-cup-2026-tickets" },
  { name: "Quarter-finals", slug: "/fixtures/quarter-finals-world-cup-2026-tickets" },
  { name: "Semi-finals", slug: "/fixtures/semi-finals-world-cup-2026-tickets" },
  { name: "Third Place", current: true },
  { name: "Final", slug: "/fixtures/final-world-cup-2026-tickets" },
]

const fixture = {
  match: "Third Place Play-off",
  date: "July 18, 2026",
  time: "4:00 PM ET",
  venue: "Hard Rock Stadium",
  city: "Miami",
  slug: "third-place-match-world-cup-2026-tickets"
}

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 200, url: "#" }, { partner: "StubHub", price_from: 280, url: "#" }]

export default function ThirdPlacePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-white text-amber-900 mb-4">BRONZE MEDAL MATCH</Badge>
          <h1 className="text-5xl font-bold text-white">Third Place Play-off</h1>
          <p className="mt-4 text-xl text-white/90">The battle for bronze! Two heartbroken semi-finalists fight for a medal.</p>
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
                  <Medal className="h-5 w-5 text-amber-600" />
                  <h3 className="font-bold text-amber-900">Bronze Medal Glory</h3>
                </div>
                <p className="text-sm text-amber-800">While the Final gets more attention, the Third Place match often delivers the most entertaining football. With nothing to lose and everything to prove, teams play with freedom and flair.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardContent className="p-8">
                <Link href={`/fixtures/${fixture.slug}`} className="block hover:opacity-90 -m-8 p-8 rounded-lg transition-colors">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-amber-700 text-white text-lg py-1 px-4">{fixture.match}</Badge>
                    <p className="text-lg text-slate-600 font-medium">{fixture.date}</p>
                  </div>
                  <div className="flex items-center justify-center gap-12 py-8">
                    <div className="text-center">
                      <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center text-5xl border-4 border-amber-200">?</div>
                      <p className="mt-3 font-bold text-lg">SF1 Loser</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-600">vs</div>
                      <Medal className="h-8 w-8 text-amber-500 mx-auto mt-2" />
                    </div>
                    <div className="text-center">
                      <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center text-5xl border-4 border-amber-200">?</div>
                      <p className="mt-3 font-bold text-lg">SF2 Loser</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6 text-lg">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-5 w-5" />{fixture.venue}, {fixture.city}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-5 w-5" />{fixture.time}
                    </div>
                  </div>
                  <Button size="lg" className="mt-6 w-full bg-amber-700 hover:bg-amber-800">Get Third Place Tickets</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historic Third Place Matches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-medium">2022: Croatia 2-1 Morocco</p>
                  <p className="text-sm text-slate-500">Croatia claimed bronze after a thrilling match against the tournament's surprise package.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-medium">2018: Belgium 2-0 England</p>
                  <p className="text-sm text-slate-500">Belgium's golden generation secured their best-ever World Cup finish.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-medium">2014: Netherlands 3-0 Brazil</p>
                  <p className="text-sm text-slate-500">The Dutch added to Brazil's misery after their 7-1 semi-final humiliation.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5" /> Buy Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-amber-600 font-medium">Great value compared to Final!</p>
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
