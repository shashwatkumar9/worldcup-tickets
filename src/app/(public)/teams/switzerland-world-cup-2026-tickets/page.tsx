import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = { title: "Switzerland World Cup 2026 Tickets | Nati", description: "Buy Switzerland FIFA World Cup 2026 tickets. Watch the Nati in Group B." }

const teamInfo = { name: "Switzerland", flag: "🇨🇭", confederation: "UEFA", fifaRanking: 19, group: "B", nickname: "Nati", coach: "Murat Yakin", captain: "Granit Xhaka" }

const keyPlayers = [
  { name: "Granit Xhaka", position: "Midfielder", club: "Bayer Leverkusen", number: 10, star: true },
  { name: "Xherdan Shaqiri", position: "Forward", club: "Chicago Fire", number: 23 },
  { name: "Manuel Akanji", position: "Defender", club: "Manchester City", number: 5 },
  { name: "Yann Sommer", position: "Goalkeeper", club: "Inter Milan", number: 1 },
  { name: "Breel Embolo", position: "Forward", club: "Monaco", number: 7 },
]

const groupFixtures = [
  { match: "Canada vs Switzerland", date: "June 22, 2026", time: "5:00 PM ET", venue: "BMO Field", city: "Toronto", slug: "canada-vs-switzerland-world-cup-2026-tickets" },
  { match: "Switzerland vs Qatar", date: "June 12, 2026", time: "2:00 PM ET", venue: "BC Place", city: "Vancouver", slug: "switzerland-vs-qatar-world-cup-2026-tickets" },
  { match: "Switzerland vs TBD", date: "June 17, 2026", time: "5:00 PM ET", venue: "BMO Field", city: "Toronto", slug: "switzerland-group-match-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 100, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 135, logo: "🎟️", url: "#" }]

export default function SwitzerlandTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div><Badge className="bg-red-600 text-white mb-2">GROUP B</Badge><h1 className="text-4xl font-bold text-slate-900">{teamInfo.name}</h1><p className="text-xl text-slate-700">{teamInfo.nickname}</p></div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">Consistent performers at major tournaments. Led by Granit Xhaka, Switzerland are always tough to beat and capable of upsets.</p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Switzerland Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card><CardHeader><CardTitle><Calendar className="inline h-5 w-5 mr-2" />Group B Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">{groupFixtures.map((f, i) => (<Link key={i} href={`/fixtures/${f.slug}`}><div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50"><div className="flex items-center gap-4"><div><p className="text-sm font-medium">{f.date}</p><p className="text-xs text-slate-500">{f.time}</p></div><div><p className="font-semibold">{f.match}</p><div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{f.venue}, {f.city}</div></div></div><Button size="sm">Get Tickets</Button></div></Link>))}</CardContent></Card>
            <Card><CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Key Players</CardTitle></CardHeader>
              <CardContent><div className="grid gap-4 md:grid-cols-2">{keyPlayers.map((p) => (<div key={p.name} className={`p-4 rounded-lg border ${p.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}><div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">{p.number}</div><div><p className="font-semibold">{p.name}{p.star && <Star className="inline h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />}</p><p className="text-sm text-slate-500">{p.position} • {p.club}</p></div></div></div>))}</div></CardContent></Card>
          </div>
          <div><Card className="sticky top-24"><CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Tickets</CardTitle></CardHeader><CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent></Card></div>
        </div>
      </div>
    </div>
  )
}
