import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = { title: "Panama World Cup 2026 Tickets | Los Canaleros", description: "Buy Panama FIFA World Cup 2026 tickets. Watch Los Canaleros in Group L." }

const teamInfo = { name: "Panama", flag: "🇵🇦", confederation: "CONCACAF", fifaRanking: 52, group: "L", nickname: "Los Canaleros", coach: "Thomas Christiansen", captain: "Aníbal Godoy" }

const keyPlayers = [
  { name: "Eric Davis", position: "Defender", club: "Marseille", number: 15, star: true },
  { name: "José Fajardo", position: "Forward", club: "Saprissa", number: 9 },
  { name: "Adalberto Carrasquilla", position: "Midfielder", club: "Houston Dynamo", number: 8 },
  { name: "Aníbal Godoy", position: "Midfielder", club: "Nashville SC", number: 20 },
  { name: "César Yanis", position: "Forward", club: "Alianza FC", number: 11 },
]

const groupFixtures = [
  { match: "Croatia vs Panama", date: "June 13, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "croatia-vs-panama-world-cup-2026-tickets" },
  { match: "England vs Panama", date: "June 18, 2026", time: "8:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "england-vs-panama-world-cup-2026-tickets" },
  { match: "Ghana vs Panama", date: "June 23, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "ghana-vs-panama-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 85, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 120, logo: "🎟️", url: "#" }]

export default function PanamaTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div><Badge className="bg-red-600 text-white mb-2">GROUP L</Badge><h1 className="text-4xl font-bold text-slate-900">Panama World Cup 2026 Tickets</h1><p className="text-xl text-slate-700">{teamInfo.nickname}</p></div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">Panama made history by qualifying for 2018. Now they&apos;re back, led by passionate fans who will create an incredible atmosphere.</p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Panama Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card><CardHeader><CardTitle><Calendar className="inline h-5 w-5 mr-2" />Group L Schedule</CardTitle></CardHeader>
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
