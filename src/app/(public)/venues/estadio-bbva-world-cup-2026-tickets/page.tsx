import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Calendar, Mountain, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Estadio BBVA World Cup 2026 Tickets | Monterrey",
  description: "Buy tickets for World Cup 2026 matches at Estadio BBVA, Monterrey. The stunning mountain backdrop stadium!",
  keywords: ["Estadio BBVA World Cup 2026", "Monterrey World Cup tickets", "Rayados World Cup"]
}

const venueInfo = { name: "Estadio BBVA", city: "Monterrey", country: "Mexico", capacity: 53500, opened: 2015 }

const scheduledMatches = [
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 13, 2026", round: "Group Stage", slug: "bbva-group-1-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 18, 2026", round: "Group Stage", slug: "bbva-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 23, 2026", round: "Group Stage", slug: "bbva-group-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 100, url: "#" }, { partner: "StubHub", price_from: 140, url: "#" }]

export default function EstadioBBVAPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-800 via-yellow-400 to-blue-800 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-green-600 text-white mb-4">MEXICO</Badge>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Capacity</p><p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Setting</p><p className="text-white font-bold text-xl flex items-center gap-1"><Mountain className="h-5 w-5" />Mountain Views</p></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-blue-400 bg-blue-50"><CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2"><Star className="h-6 w-6 text-blue-600" /><h3 className="font-bold text-xl text-blue-900">Spectacular Mountain Setting</h3></div>
              <p className="text-blue-800">Estadio BBVA offers one of the most dramatic backdrops in world football - the Cerro de la Silla mountain. Home of CF Monterrey (Rayados), this modern stadium opened in 2015 and is considered one of the best in the Americas.</p>
            </CardContent></Card>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (<Card key={i}><CardContent className="p-4"><Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between"><div><div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div><p className="font-bold text-lg">{m.match}</p></div><Button size="sm" className="bg-green-600 hover:bg-green-700">Get Tickets</Button></Link></CardContent></Card>))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24"><CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" className="bg-green-600 hover:bg-green-700" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent>
            </Card>
            <Card><CardHeader><CardTitle>Other Mexico Venues</CardTitle></CardHeader><CardContent className="space-y-2">
              <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Estadio Azteca<Badge className="ml-auto text-xs">Mexico City</Badge></Link>
              <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Estadio Akron<Badge className="ml-auto text-xs">Guadalajara</Badge></Link>
            </CardContent></Card>
          </div>
        </div>
      </div>
    </div>
  )
}
