import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Levi's Stadium World Cup 2026 Tickets | San Francisco Bay Area",
  description: "Buy tickets for World Cup 2026 matches at Levi's Stadium, San Francisco Bay Area.",
  keywords: ["Levi's Stadium World Cup 2026", "San Francisco World Cup tickets", "Santa Clara World Cup"]
}

const venueInfo = { name: "Levi's Stadium", city: "Santa Clara, CA", country: "USA", capacity: 68500, opened: 2014 }

const scheduledMatches = [
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 15, 2026", round: "Group Stage", slug: "levis-group-1-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 20, 2026", round: "Group Stage", slug: "levis-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 25, 2026", round: "Group Stage", slug: "levis-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "June 30, 2026", round: "Knockout", slug: "levis-r32-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 130, url: "#" }, { partner: "StubHub", price_from: 180, url: "#" }]

export default function LevisStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-yellow-500 to-red-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-red-600 text-white mb-4">USA</Badge>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Capacity</p><p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Region</p><p className="text-white font-bold text-xl">Silicon Valley</p></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card><CardContent className="p-6"><p className="text-slate-600">Located in Silicon Valley, Levi's Stadium is one of the most sustainable sports venues in the world. Home of the San Francisco 49ers (NFL) and host of Super Bowl 50.</p></CardContent></Card>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i}><CardContent className="p-4"><Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between"><div><div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div><p className="font-bold text-lg">{m.match}</p></div><Button size="sm">Get Tickets</Button></Link></CardContent></Card>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24"><CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
