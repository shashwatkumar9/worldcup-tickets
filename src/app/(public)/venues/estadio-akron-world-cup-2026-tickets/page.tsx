import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Calendar, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Estadio Akron World Cup 2026 Tickets | Guadalajara",
  description: "Buy tickets for World Cup 2026 matches at Estadio Akron, Guadalajara. Home of Chivas!",
  keywords: ["Estadio Akron World Cup 2026", "Guadalajara World Cup tickets", "Chivas World Cup", "Omnilife Stadium"]
}

const venueInfo = { name: "Estadio Akron", city: "Guadalajara", country: "Mexico", capacity: 49850, opened: 2010 }

const scheduledMatches = [
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 14, 2026", round: "Group Stage", slug: "akron-group-1-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 19, 2026", round: "Group Stage", slug: "akron-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 24, 2026", round: "Group Stage", slug: "akron-group-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 95, url: "#" }, { partner: "StubHub", price_from: 135, url: "#" }]

export default function EstadioAkronPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-green-600 text-white mb-4">MEXICO</Badge>
          <h1 className="text-5xl font-bold text-slate-900">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-slate-700 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Capacity</p><p className="text-slate-900 font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Also Known As</p><p className="text-slate-900 font-bold text-xl">Omnilife Stadium</p></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-red-400 bg-red-50"><CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2"><Star className="h-6 w-6 text-red-600" /><h3 className="font-bold text-xl text-red-900">Home of Chivas</h3></div>
              <p className="text-red-800">Estadio Akron is home to CD Guadalajara (Chivas), Mexico's most popular club. The unique volcanic design stadium built into the hillside is an architectural marvel. Guadalajara is Mexico's second-largest city and a passionate football hub.</p>
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
              <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Estadio BBVA<Badge className="ml-auto text-xs">Monterrey</Badge></Link>
            </CardContent></Card>
          </div>
        </div>
      </div>
    </div>
  )
}
