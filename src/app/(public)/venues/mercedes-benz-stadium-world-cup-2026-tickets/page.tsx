import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Mercedes-Benz Stadium World Cup 2026 Tickets | Atlanta",
  description: "Buy tickets for World Cup 2026 matches at Mercedes-Benz Stadium, Atlanta. The stunning retractable roof stadium!",
  keywords: ["Mercedes-Benz Stadium World Cup 2026", "Atlanta World Cup tickets", "Atlanta United Stadium"]
}

const venueInfo = { name: "Mercedes-Benz Stadium", city: "Atlanta, GA", country: "USA", capacity: 71000, opened: 2017 }

const scheduledMatches = [
  { match: "France vs Norway", teams: "🇫🇷 vs 🇳🇴", date: "June 15, 2026", round: "Group I", slug: "france-vs-norway-world-cup-2026-tickets", featured: true, label: "MBAPPÉ VS HAALAND" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 19, 2026", round: "Group Stage", slug: "mbs-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 24, 2026", round: "Group Stage", slug: "mbs-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "June 30, 2026", round: "Knockout", slug: "mbs-r32-world-cup-2026-tickets" },
  { match: "Round of 16", teams: "TBD vs TBD", date: "July 5, 2026", round: "Knockout", slug: "mbs-r16-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 145, url: "#" }, { partner: "StubHub", price_from: 200, url: "#" }]

export default function MercedesBenzStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-red-700 to-black py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-yellow-400 text-black">MBAPPÉ VS HAALAND</Badge>
            <Badge variant="outline" className="text-white border-white/50">USA</Badge>
          </div>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Capacity</p><p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Matches</p><p className="text-white font-bold text-xl">5 Games</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Highlight</p><p className="text-white font-bold text-xl flex items-center gap-1"><Star className="h-5 w-5" />France-Norway</p></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2"><Star className="h-6 w-6 text-yellow-600" /><h3 className="font-bold text-xl text-yellow-900">France vs Norway</h3></div>
                <p className="text-yellow-800">The match everyone wants to see! Kylian Mbappé faces Erling Haaland in Atlanta. Two of football's biggest superstars collide in what could be the most anticipated group stage match of the tournament.</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-yellow-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          {m.label && <Badge className="bg-yellow-400 text-black mb-1">{m.label}</Badge>}
                          <div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div>
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
              <CardHeader><CardTitle>About Mercedes-Benz Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">Mercedes-Benz Stadium features a unique eight-panel retractable roof designed to mimic the Roman Pantheon. Home to Atlanta United (MLS) and the Atlanta Falcons (NFL).</p>
                <p className="text-slate-600">The stadium's 360-degree LED halo video board is the largest in the world. Atlanta United regularly draws 70,000+ fans, proving Atlanta is a true soccer city.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Train className="h-5 w-5" />Getting There</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3"><Train className="h-5 w-5 text-blue-600 mt-1" /><div><p className="font-medium">MARTA Rail</p><p className="text-sm text-slate-500">Vine City or GWCC/CNN Center stations are steps from the stadium.</p></div></div>
                <div className="flex items-start gap-3"><Car className="h-5 w-5 text-green-600 mt-1" /><div><p className="font-medium">By Car</p><p className="text-sm text-slate-500">Downtown Atlanta location with multiple parking options.</p></div></div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-500">Capacity</span><span className="font-medium">{venueInfo.capacity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Opened</span><span className="font-medium">2017</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Home Teams</span><span className="font-medium">Atlanta United, Falcons</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
