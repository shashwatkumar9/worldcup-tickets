import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = { title: "Qatar World Cup 2026 Tickets | Al Annabi", description: "Buy Qatar FIFA World Cup 2026 tickets. Watch the 2022 hosts compete in Group B." }

const teamInfo = { name: "Qatar", flag: "🇶🇦", confederation: "AFC", fifaRanking: 35, group: "B", nickname: "Al Annabi", coach: "Tintin Marquez", captain: "Hassan Al-Haydos" }

const keyPlayers = [
  { name: "Akram Afif", position: "Forward", club: "Al-Sadd", number: 11, star: true },
  { name: "Almoez Ali", position: "Forward", club: "Al-Duhail", number: 19 },
  { name: "Hassan Al-Haydos", position: "Midfielder", club: "Al-Sadd", number: 10 },
  { name: "Karim Boudiaf", position: "Midfielder", club: "Al-Duhail", number: 6 },
  { name: "Meshaal Barsham", position: "Goalkeeper", club: "Al-Sadd", number: 1 },
]

const groupFixtures = [
  { match: "Switzerland vs Qatar", date: "June 12, 2026", time: "2:00 PM ET", venue: "BC Place", city: "Vancouver", slug: "switzerland-vs-qatar-world-cup-2026-tickets" },
  { match: "Qatar vs Canada", date: "June 17, 2026", time: "8:00 PM ET", venue: "BMO Field", city: "Toronto", slug: "qatar-vs-canada-world-cup-2026-tickets" },
  { match: "Qatar vs TBD", date: "June 22, 2026", time: "2:00 PM ET", venue: "BC Place", city: "Vancouver", slug: "qatar-group-match-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 85, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 120, logo: "🎟️", url: "#" }]

export default function QatarTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-maroon-800 via-white to-maroon-800 py-20" style={{background: "linear-gradient(to right, #800020, white, #800020)"}}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div><Badge className="bg-[#800020] text-white mb-2">GROUP B</Badge><h1 className="text-4xl font-bold text-slate-900">Qatar World Cup 2026 Tickets</h1><p className="text-xl text-slate-700">{teamInfo.nickname}</p></div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">From hosts to guests! The 2022 World Cup hosts and reigning Asian Cup champions look to prove themselves on North American soil.</p>
          <Button size="lg" className="mt-6 bg-[#800020] hover:bg-[#600018]"><Ticket className="mr-2 h-5 w-5" />Buy Qatar Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-yellow-400 bg-yellow-50"><CardContent className="p-6"><h3 className="font-bold text-yellow-900">2x Asian Cup Champions</h3><p className="text-sm text-yellow-800 mt-2">Akram Afif won AFC Player of the Year and leads Qatar's charge. Back-to-back Asian Cup winners aim high.</p></CardContent></Card>
            <Card><CardHeader><CardTitle><Calendar className="inline h-5 w-5 mr-2" />Group B Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">{groupFixtures.map((f, i) => (<Link key={i} href={`/fixtures/${f.slug}`}><div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50"><div className="flex items-center gap-4"><div><p className="text-sm font-medium">{f.date}</p><p className="text-xs text-slate-500">{f.time}</p></div><div><p className="font-semibold">{f.match}</p><div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{f.venue}, {f.city}</div></div></div><Button size="sm">Get Tickets</Button></div></Link>))}</CardContent></Card>
            <Card><CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Key Players</CardTitle></CardHeader>
              <CardContent><div className="grid gap-4 md:grid-cols-2">{keyPlayers.map((p) => (<div key={p.name} className={`p-4 rounded-lg border ${p.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}><div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-800 font-bold">{p.number}</div><div><p className="font-semibold">{p.name}{p.star && <Star className="inline h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />}</p><p className="text-sm text-slate-500">{p.position} • {p.club}</p></div></div></div>))}</div></CardContent></Card>
          </div>
          <div><Card className="sticky top-24"><CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Tickets</CardTitle></CardHeader><CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent></Card></div>
        </div>
      </div>
    </div>
  )
}
