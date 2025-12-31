import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "BMO Field World Cup 2026 Tickets | Toronto",
  description: "Buy tickets for World Cup 2026 matches at BMO Field, Toronto. Canada's soccer-specific stadium!",
  keywords: ["BMO Field World Cup 2026", "Toronto World Cup tickets", "Toronto FC Stadium World Cup"]
}

const venueInfo = { name: "BMO Field", city: "Toronto, ON", country: "Canada", capacity: 45000, opened: 2007 }

const scheduledMatches = [
  { match: "Canada vs TBD", teams: "🇨🇦 vs TBD", date: "June 12, 2026", round: "Group B", slug: "canada-group-match-1-world-cup-2026-tickets", featured: true, label: "CANADA HOME OPENER" },
  { match: "Canada vs Qatar", teams: "🇨🇦 vs 🇶🇦", date: "June 17, 2026", round: "Group B", slug: "canada-vs-qatar-world-cup-2026-tickets", featured: true },
  { match: "Canada vs Switzerland", teams: "🇨🇦 vs 🇨🇭", date: "June 22, 2026", round: "Group B", slug: "canada-vs-switzerland-bmo-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "July 1, 2026", round: "Knockout", slug: "bmo-r32-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 140, url: "#" }, { partner: "StubHub", price_from: 195, url: "#" }]

export default function BMOFieldPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-red-600 text-white">CANADA HOST VENUE</Badge>
            <Badge variant="outline" className="text-slate-900 border-slate-900/50">CANADA</Badge>
          </div>
          <h1 className="text-5xl font-bold text-slate-900">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-slate-700 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Capacity</p><p className="text-slate-900 font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Matches</p><p className="text-slate-900 font-bold text-xl">4 Games</p></div>
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Highlight</p><p className="text-slate-900 font-bold text-xl flex items-center gap-1"><Star className="h-5 w-5" />Canada Home Games</p></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2"><Star className="h-6 w-6 text-red-600" /><h3 className="font-bold text-xl text-red-900">Canada's Soccer Home</h3></div>
                <p className="text-red-800">BMO Field is Canada's premier soccer-specific stadium and home to Toronto FC. The intimate atmosphere and passionate fans will create an incredible environment for Canada's historic World Cup matches on home soil.</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-red-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          {m.label && <Badge className="bg-red-600 text-white mb-1">{m.label}</Badge>}
                          <div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div>
                          <p className="font-bold text-lg">{m.match}</p>
                          <p className="text-sm text-slate-500">{m.teams}</p>
                        </div>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">Get Tickets</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader><CardTitle>About BMO Field</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">BMO Field opened in 2007 as Canada's first soccer-specific stadium. It has been expanded multiple times and now also hosts the Toronto Argonauts (CFL).</p>
                <p className="text-slate-600">Located on the Exhibition Place grounds with stunning views of Lake Ontario and the Toronto skyline. The stadium will be further expanded to 45,000 seats for the World Cup.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Train className="h-5 w-5" />Getting There</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3"><Train className="h-5 w-5 text-blue-600 mt-1" /><div><p className="font-medium">TTC Streetcar</p><p className="text-sm text-slate-500">509 and 511 streetcars stop at Exhibition Loop.</p></div></div>
                <div className="flex items-start gap-3"><Train className="h-5 w-5 text-green-600 mt-1" /><div><p className="font-medium">GO Transit</p><p className="text-sm text-slate-500">Exhibition GO station is a short walk from the stadium.</p></div></div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">Canada home matches - high demand!</p>
                {affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" className="bg-red-600 hover:bg-red-700" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-500">Capacity</span><span className="font-medium">{venueInfo.capacity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Opened</span><span className="font-medium">2007</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Home Team</span><span className="font-medium">Toronto FC</span></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Other Canadian Venue</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/venues/bc-place-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />BC Place<Badge className="ml-auto text-xs">Vancouver</Badge></Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
