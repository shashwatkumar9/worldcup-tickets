import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = { title: "Norway World Cup 2026 Tickets | Haaland's First World Cup", description: "Buy Norway FIFA World Cup 2026 tickets. Watch Erling Haaland in Group I." }

const teamInfo = { name: "Norway", flag: "🇳🇴", confederation: "UEFA", fifaRanking: 44, group: "I", nickname: "Løvene (The Lions)", coach: "Ståle Solbakken", captain: "Martin Ødegaard" }

const keyPlayers = [
  { name: "Erling Haaland", position: "Forward", club: "Manchester City", number: 9, star: true },
  { name: "Martin Ødegaard", position: "Midfielder", club: "Arsenal", number: 10 },
  { name: "Sander Berge", position: "Midfielder", club: "Burnley", number: 8 },
  { name: "Alexander Sørloth", position: "Forward", club: "Atletico Madrid", number: 11 },
  { name: "Kristoffer Ajer", position: "Defender", club: "Brentford", number: 4 },
]

const groupFixtures = [
  { match: "France vs Norway", date: "June 19, 2026", time: "8:00 PM ET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "france-vs-norway-world-cup-2026-tickets" },
  { match: "Senegal vs Norway", date: "June 19, 2026", time: "2:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "senegal-vs-norway-world-cup-2026-tickets" },
  { match: "Norway vs TBD", date: "June 14, 2026", time: "2:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "norway-group-match-1-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 120, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 165, logo: "🎟️", url: "#" }]

export default function NorwayTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-blue-800 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div><div className="flex gap-2 mb-2"><Badge className="bg-yellow-400 text-black">HAALAND&apos;S FIRST WC</Badge><Badge variant="outline">GROUP I</Badge></div><h1 className="text-4xl font-bold text-slate-900">{teamInfo.name}</h1><p className="text-xl text-slate-700">{teamInfo.nickname}</p></div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">Erling Haaland&apos;s first World Cup! The world&apos;s most feared striker leads Norway alongside Arsenal captain Martin Ødegaard. This is huge.</p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Norway Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-yellow-400 bg-yellow-50"><CardContent className="p-6"><h3 className="font-bold text-yellow-900">France vs Norway</h3><p className="text-sm text-yellow-800 mt-2">Haaland vs Mbappé! One of the most anticipated group stage matches. Two of football&apos;s biggest stars face off in Atlanta.</p></CardContent></Card>
            <Card><CardHeader><CardTitle><Calendar className="inline h-5 w-5 mr-2" />Group I Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">{groupFixtures.map((f, i) => (<Link key={i} href={`/fixtures/${f.slug}`}><div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50"><div className="flex items-center gap-4"><div><p className="text-sm font-medium">{f.date}</p><p className="text-xs text-slate-500">{f.time}</p></div><div><p className="font-semibold">{f.match}</p><div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{f.venue}, {f.city}</div></div></div><Button size="sm">Get Tickets</Button></div></Link>))}</CardContent></Card>
            <Card><CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Key Players</CardTitle></CardHeader>
              <CardContent><div className="grid gap-4 md:grid-cols-2">{keyPlayers.map((p) => (<div key={p.name} className={`p-4 rounded-lg border ${p.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}><div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">{p.number}</div><div><p className="font-semibold">{p.name}{p.star && <Star className="inline h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />}</p><p className="text-sm text-slate-500">{p.position} • {p.club}</p></div></div></div>))}</div></CardContent></Card>
          </div>
          <div className="space-y-6"><Card className="sticky top-24"><CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Tickets</CardTitle></CardHeader><CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent></Card>
            <Card><CardHeader><CardTitle>Group I</CardTitle></CardHeader><CardContent className="space-y-2"><Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇫🇷</span> France<Badge className="ml-auto text-xs">2018 Champs</Badge></Link><Link href="/teams/senegal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇸🇳</span> Senegal</Link><Link href="/teams/norway-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium"><span>🇳🇴</span> Norway</Link></CardContent></Card>
          </div>
        </div>
      </div>
    </div>
  )
}
