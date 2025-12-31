import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "SoFi Stadium World Cup 2026 Tickets | Los Angeles",
  description: "Buy tickets for World Cup 2026 matches at SoFi Stadium, Los Angeles. The most technologically advanced stadium in the world!",
  keywords: ["SoFi Stadium World Cup 2026", "Los Angeles World Cup tickets", "LA World Cup 2026"]
}

const venueInfo = {
  name: "SoFi Stadium",
  city: "Inglewood, CA",
  country: "USA",
  capacity: 70000,
  opened: 2020,
  homeTeams: ["LA Rams", "LA Chargers"]
}

const scheduledMatches = [
  { match: "USA vs TBD", teams: "🇺🇸 USA vs TBD", date: "June 12, 2026", round: "Group D", slug: "usa-opening-match-world-cup-2026-tickets", featured: true },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 17, 2026", round: "Group Stage", slug: "sofi-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 22, 2026", round: "Group Stage", slug: "sofi-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "June 28, 2026", round: "Knockout", slug: "sofi-r32-world-cup-2026-tickets" },
  { match: "Round of 16", teams: "TBD vs TBD", date: "July 4, 2026", round: "Knockout", slug: "sofi-r16-world-cup-2026-tickets" },
  { match: "Quarter-Final", teams: "TBD vs TBD", date: "July 9, 2026", round: "Quarter-Final", slug: "sofi-qf-world-cup-2026-tickets", featured: true },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 175, url: "#" }, { partner: "StubHub", price_from: 250, url: "#" }]

export default function SoFiStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-yellow-400 text-black">QUARTER-FINAL VENUE</Badge>
            <Badge variant="outline" className="text-white border-white/50">USA</Badge>
          </div>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2">
            <MapPin className="h-5 w-5" />{venueInfo.city}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white/70 text-sm">Capacity</p>
              <p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white/70 text-sm">Matches</p>
              <p className="text-white font-bold text-xl">6 Games</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white/70 text-sm">Highlight</p>
              <p className="text-white font-bold text-xl flex items-center gap-1"><Star className="h-5 w-5" />USA Opener</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-blue-400 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">Most Advanced Stadium on Earth</h3>
                </div>
                <p className="text-blue-800">SoFi Stadium features a 70,000 sq ft Infinity Screen - the largest video screen in sports. The $5.5 billion venue is a technological marvel that will showcase American innovation to the world.</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6" />Scheduled Matches
              </h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-blue-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline">{m.round}</Badge>
                            <span className="text-sm text-slate-500">{m.date}</span>
                          </div>
                          <p className="font-bold text-lg">{m.match}</p>
                          <p className="text-sm text-slate-500">{m.teams}</p>
                        </div>
                        <Button size="sm">Get Tickets</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>About SoFi Stadium</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">SoFi Stadium is the crown jewel of American sports venues. Opened in 2020, this $5.5 billion complex hosts both the LA Rams and LA Chargers of the NFL.</p>
                <p className="text-slate-600">The stadium's retractable roof and transparent ETFE panels create a unique indoor/outdoor experience. It hosted Super Bowl LVI in 2022 and will host the 2028 Olympics opening ceremony.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Train className="h-5 w-5" />Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Train className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">LA Metro K Line</p>
                    <p className="text-sm text-slate-500">Downtown Inglewood Station is a short walk from the stadium.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">By Car</p>
                    <p className="text-sm text-slate-500">3 miles from LAX. Extensive parking available with pre-booking.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle>
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
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-500">Capacity</span><span className="font-medium">{venueInfo.capacity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Opened</span><span className="font-medium">2020</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Cost</span><span className="font-medium">$5.5 billion</span></div>
                <div className="flex justify-between"><span className="text-slate-500">WC Matches</span><span className="font-medium">6</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other US Venues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <MapPin className="h-4 w-4" />MetLife Stadium<Badge className="ml-auto text-xs">Final</Badge>
                </Link>
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <MapPin className="h-4 w-4" />AT&T Stadium<Badge className="ml-auto text-xs">Dallas</Badge>
                </Link>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <MapPin className="h-4 w-4" />Hard Rock Stadium<Badge className="ml-auto text-xs">Miami</Badge>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
