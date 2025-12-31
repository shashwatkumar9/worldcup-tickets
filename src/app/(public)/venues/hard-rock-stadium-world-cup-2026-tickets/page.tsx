import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar, Star, Sun } from "lucide-react"

export const metadata: Metadata = {
  title: "Hard Rock Stadium World Cup 2026 Tickets | Miami",
  description: "Buy tickets for World Cup 2026 matches at Hard Rock Stadium, Miami. Third Place Match venue!",
  keywords: ["Hard Rock Stadium World Cup 2026", "Miami World Cup tickets", "Miami Gardens World Cup"]
}

const venueInfo = { name: "Hard Rock Stadium", city: "Miami Gardens, FL", country: "USA", capacity: 65000, opened: 1987 }

const scheduledMatches = [
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 13, 2026", round: "Group Stage", slug: "hardrock-group-1-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 18, 2026", round: "Group Stage", slug: "hardrock-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 22, 2026", round: "Group Stage", slug: "hardrock-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "June 29, 2026", round: "Knockout", slug: "hardrock-r32-world-cup-2026-tickets" },
  { match: "Quarter-Final", teams: "TBD vs TBD", date: "July 10, 2026", round: "Quarter-Final", slug: "hardrock-qf-world-cup-2026-tickets", featured: true },
  { match: "Third Place Play-off", teams: "TBD vs TBD", date: "July 18, 2026", round: "Third Place", slug: "third-place-match-world-cup-2026-tickets", featured: true },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 140, url: "#" }, { partner: "StubHub", price_from: 195, url: "#" }]

export default function HardRockStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-orange-400 text-black">THIRD PLACE VENUE</Badge>
            <Badge variant="outline" className="text-white border-white/50">USA</Badge>
          </div>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
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
              <p className="text-white/70 text-sm">Events</p>
              <p className="text-white font-bold text-xl flex items-center gap-1"><Sun className="h-5 w-5" />F1 + Tennis</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-orange-400 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-orange-600" />
                  <h3 className="font-bold text-xl text-orange-900">Miami's Sports Hub</h3>
                </div>
                <p className="text-orange-800">Hard Rock Stadium hosts the Miami Dolphins, Miami Open tennis, and Formula 1's Miami Grand Prix. The innovative canopy provides shade while maintaining an open-air feel perfect for the Florida climate.</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-orange-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline">{m.round}</Badge>
                            <span className="text-sm text-slate-500">{m.date}</span>
                          </div>
                          <p className="font-bold text-lg">{m.match}</p>
                        </div>
                        <Button size="sm">Get Tickets</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader><CardTitle>About Hard Rock Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">Originally opened in 1987, Hard Rock Stadium underwent a $550 million renovation completed in 2016. The signature canopy provides shade to fans while allowing for an open-air atmosphere.</p>
                <p className="text-slate-600">Beyond the Dolphins, the stadium hosts the Miami Open, Formula 1 Miami Grand Prix, and has been the site of six Super Bowls.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Car className="h-5 w-5" />Getting There</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-green-600 mt-1" />
                  <div><p className="font-medium">By Car</p><p className="text-sm text-slate-500">Located in Miami Gardens, accessible via I-95 and Florida's Turnpike.</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <Train className="h-5 w-5 text-blue-600 mt-1" />
                  <div><p className="font-medium">Brightline</p><p className="text-sm text-slate-500">Miami Central Station with shuttle connections on match days.</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((l) => (
                  <div key={l.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div>
                    <Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-500">Capacity</span><span className="font-medium">{venueInfo.capacity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Renovated</span><span className="font-medium">2016</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Home Team</span><span className="font-medium">Miami Dolphins</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
