import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = { title: "Jordan World Cup 2026 Tickets | Al Nashama", description: "Buy Jordan FIFA World Cup 2026 tickets. Watch Al Nashama make their historic World Cup debut." }

const teamInfo = { name: "Jordan", flag: "🇯🇴", confederation: "AFC", fifaRanking: 68, group: "TBD", nickname: "Al Nashama", coach: "Hussein Ammouta", captain: "Ahmad Ersan" }

const keyPlayers = [
  { name: "Mousa Al-Taamari", position: "Midfielder", club: "Montpellier", number: 11, star: true },
  { name: "Yazan Al-Naimat", position: "Forward", club: "Go Ahead Eagles", number: 9 },
  { name: "Ahmad Ersan", position: "Defender", club: "Al-Faisaly", number: 4 },
  { name: "Yazeed Abu Laila", position: "Goalkeeper", club: "Al-Wehdat", number: 1 },
  { name: "Nizar Al-Rashdan", position: "Midfielder", club: "Hapoel Beer Sheva", number: 8 },
]

const groupFixtures = [
  { match: "Jordan vs TBD", date: "June 2026", time: "TBD", venue: "TBD", city: "TBD", slug: "jordan-group-match-1-world-cup-2026-tickets" },
  { match: "Jordan vs TBD", date: "June 2026", time: "TBD", venue: "TBD", city: "TBD", slug: "jordan-group-match-2-world-cup-2026-tickets" },
  { match: "Jordan vs TBD", date: "June 2026", time: "TBD", venue: "TBD", city: "TBD", slug: "jordan-group-match-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 70, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 100, logo: "🎟️", url: "#" }]

export default function JordanTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-white to-green-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div><Badge className="bg-red-600 text-white mb-2">WORLD CUP DEBUT</Badge><h1 className="text-4xl font-bold text-white">{teamInfo.name}</h1><p className="text-xl text-slate-200">{teamInfo.nickname}</p></div>
          </div>
          <p className="mt-4 text-lg text-slate-100 max-w-2xl">Historic achievement! The 2024 Asian Cup runners-up qualify for their first ever World Cup. Al Nashama captures the hearts of a nation.</p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Jordan Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-yellow-400 bg-yellow-50"><CardContent className="p-6"><h3 className="font-bold text-yellow-900">Cinderella Story</h3><p className="text-sm text-yellow-800 mt-2">From Asian Cup surprise package to World Cup debutants. Jordan's journey has captured the imagination of football fans worldwide.</p></CardContent></Card>
            <Card><CardHeader><CardTitle><Calendar className="inline h-5 w-5 mr-2" />Group Stage Schedule</CardTitle></CardHeader>
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
