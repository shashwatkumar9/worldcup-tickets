import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Users, Train, Car, Calendar, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "MetLife Stadium World Cup 2026 Tickets | New York/NJ",
  description: "Buy tickets for World Cup 2026 matches at MetLife Stadium, New York/New Jersey. Home of the FIFA World Cup Final!",
  keywords: ["MetLife Stadium World Cup 2026", "World Cup Final tickets", "New York World Cup tickets"]
}

const venueInfo = {
  name: "MetLife Stadium",
  city: "East Rutherford, NJ",
  country: "USA",
  capacity: 87000,
  opened: 2010,
  surface: "Natural grass (temporary)",
  homeTeams: ["New York Giants", "New York Jets"],
  coordinates: "40.8136° N, 74.0742° W"
}

const scheduledMatches = [
  { match: "Group Stage Match 1", teams: "TBD vs TBD", date: "June 14, 2026", round: "Group Stage", slug: "metlife-group-1-world-cup-2026-tickets" },
  { match: "Group Stage Match 2", teams: "TBD vs TBD", date: "June 18, 2026", round: "Group Stage", slug: "metlife-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match 3", teams: "TBD vs TBD", date: "June 22, 2026", round: "Group Stage", slug: "metlife-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "June 28, 2026", round: "Knockout", slug: "metlife-r32-world-cup-2026-tickets" },
  { match: "Round of 16", teams: "TBD vs TBD", date: "July 4, 2026", round: "Knockout", slug: "metlife-r16-world-cup-2026-tickets" },
  { match: "Semi-Final 1", teams: "TBD vs TBD", date: "July 14, 2026", round: "Semi-Final", slug: "metlife-semi-final-world-cup-2026-tickets", featured: true },
  { match: "WORLD CUP FINAL", teams: "TBD vs TBD", date: "July 19, 2026", round: "Final", slug: "final-world-cup-2026-tickets", featured: true, isFinal: true },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 150, url: "#" }, { partner: "StubHub", price_from: 200, url: "#" }]

export default function MetLifeStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-yellow-400 text-black">WORLD CUP FINAL VENUE</Badge>
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
              <p className="text-white font-bold text-xl">7 Games</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white/70 text-sm">Highlight</p>
              <p className="text-white font-bold text-xl flex items-center gap-1"><Trophy className="h-5 w-5 text-yellow-400" />Final</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">Home of the World Cup Final</h3>
                </div>
                <p className="text-yellow-800">MetLife Stadium will host the FIFA World Cup 2026 Final on July 19, 2026. The largest stadium in the NFL will welcome 87,000 fans for the biggest match in football. Don't miss history!</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6" />Scheduled Matches
              </h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.isFinal ? "border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50" : m.featured ? "border-2 border-blue-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant={m.isFinal ? "default" : "outline"} className={m.isFinal ? "bg-yellow-500" : ""}>{m.round}</Badge>
                            <span className="text-sm text-slate-500">{m.date}</span>
                          </div>
                          <p className="font-bold text-lg">{m.match}</p>
                          <p className="text-sm text-slate-500">{m.teams}</p>
                        </div>
                        <Button size="sm" className={m.isFinal ? "bg-yellow-500 hover:bg-yellow-600" : ""}>
                          {m.isFinal ? "Get Final Tickets" : "Get Tickets"}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>About MetLife Stadium</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">MetLife Stadium opened in 2010 and is home to both the New York Giants and New York Jets of the NFL. It's the most expensive stadium ever built at $1.6 billion.</p>
                <p className="text-slate-600">For the World Cup, natural grass will be installed temporarily to meet FIFA standards. The stadium has hosted numerous major events including Super Bowl XLVIII and WrestleMania.</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="font-medium">Home Teams</p>
                    <p className="text-sm text-slate-500">NY Giants, NY Jets (NFL)</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="font-medium">Opened</p>
                    <p className="text-sm text-slate-500">2010</p>
                  </div>
                </div>
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
                    <p className="font-medium">NJ Transit Rail</p>
                    <p className="text-sm text-slate-500">Take the Meadowlands Rail Line from Secaucus Junction. Direct service on match days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">By Car</p>
                    <p className="text-sm text-slate-500">8 miles from Manhattan. Parking available at the complex. Pre-booking recommended.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5" />Buy Tickets
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
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Capacity</span>
                  <span className="font-medium">{venueInfo.capacity.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Surface</span>
                  <span className="font-medium">Natural Grass</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Opened</span>
                  <span className="font-medium">2010</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">WC Matches</span>
                  <span className="font-medium">7</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nearby Venues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <MapPin className="h-4 w-4" />Lincoln Financial Field
                  <Badge className="ml-auto text-xs">Philadelphia</Badge>
                </Link>
                <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <MapPin className="h-4 w-4" />Gillette Stadium
                  <Badge className="ml-auto text-xs">Boston</Badge>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
