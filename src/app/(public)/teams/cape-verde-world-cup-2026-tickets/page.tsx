import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = { title: "Cape Verde World Cup 2026 Tickets | Blue Sharks", description: "Buy Cape Verde FIFA World Cup 2026 tickets. Watch the Blue Sharks make their historic World Cup debut." }

const teamInfo = { name: "Cape Verde", flag: "🇨🇻", confederation: "CAF", fifaRanking: 76, group: "TBD", nickname: "Blue Sharks", coach: "Bubista", captain: "Stopira" }

const keyPlayers = [
  { name: "Garry Rodrigues", position: "Forward", club: "Olympiacos", number: 11, star: true },
  { name: "Kenny Rocha", position: "Midfielder", club: "Ludogorets", number: 8 },
  { name: "Stopira", position: "Defender", club: "Legia Warsaw", number: 4 },
  { name: "Ryan Mendes", position: "Forward", club: "Caen", number: 7 },
  { name: "Vozinha", position: "Goalkeeper", club: "Gil Vicente", number: 1 },
]

const groupFixtures = [
  { match: "Cape Verde vs TBD", date: "June 2026", time: "TBD", venue: "TBD", city: "TBD", slug: "cape-verde-group-match-1-world-cup-2026-tickets" },
  { match: "Cape Verde vs TBD", date: "June 2026", time: "TBD", venue: "TBD", city: "TBD", slug: "cape-verde-group-match-2-world-cup-2026-tickets" },
  { match: "Cape Verde vs TBD", date: "June 2026", time: "TBD", venue: "TBD", city: "TBD", slug: "cape-verde-group-match-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 70, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 100, logo: "🎟️", url: "#" }]

export default function CapeVerdeTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-700 via-white to-red-500 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div><Badge className="bg-blue-700 text-white mb-2">WORLD CUP DEBUT</Badge><h1 className="text-4xl font-bold text-slate-900">{teamInfo.name}</h1><p className="text-xl text-slate-700">{teamInfo.nickname}</p></div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">The ultimate underdog story! Cape Verde, an island nation of just 600,000 people, qualifies for their first World Cup. Football dreams do come true.</p>
          <Button size="lg" className="mt-6 bg-blue-700 hover:bg-blue-800"><Ticket className="mr-2 h-5 w-5" />Buy Cape Verde Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-yellow-400 bg-yellow-50"><CardContent className="p-6"><h3 className="font-bold text-yellow-900">Island of Dreams</h3><p className="text-sm text-yellow-800 mt-2">From tiny Atlantic islands to the World Cup stage. Cape Verde's journey is one of the greatest underdog stories in football history.</p></CardContent></Card>
            <Card><CardHeader><CardTitle><Calendar className="inline h-5 w-5 mr-2" />Group Stage Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">{groupFixtures.map((f, i) => (<Link key={i} href={`/fixtures/${f.slug}`}><div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50"><div className="flex items-center gap-4"><div><p className="text-sm font-medium">{f.date}</p><p className="text-xs text-slate-500">{f.time}</p></div><div><p className="font-semibold">{f.match}</p><div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{f.venue}, {f.city}</div></div></div><Button size="sm">Get Tickets</Button></div></Link>))}</CardContent></Card>
            <Card><CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Key Players</CardTitle></CardHeader>
              <CardContent><div className="grid gap-4 md:grid-cols-2">{keyPlayers.map((p) => (<div key={p.name} className={`p-4 rounded-lg border ${p.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}><div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">{p.number}</div><div><p className="font-semibold">{p.name}{p.star && <Star className="inline h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />}</p><p className="text-sm text-slate-500">{p.position} • {p.club}</p></div></div></div>))}</div></CardContent></Card>
          </div>
          <div><Card className="sticky top-24"><CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Tickets</CardTitle></CardHeader><CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent></Card></div>
        </div>
      </div>
    </div>
  )
}
