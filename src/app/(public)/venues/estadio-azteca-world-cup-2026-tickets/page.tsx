import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar, Trophy, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Estadio Azteca World Cup 2026 Tickets | Mexico City",
  description: "Buy tickets for World Cup 2026 matches at Estadio Azteca, Mexico City. The only stadium to host 3 World Cup tournaments!",
  keywords: ["Estadio Azteca World Cup 2026", "Mexico City World Cup tickets", "Azteca Stadium World Cup"]
}

const venueInfo = { name: "Estadio Azteca", city: "Mexico City", country: "Mexico", capacity: 87000, opened: 1966 }

const scheduledMatches = [
  { match: "Mexico vs TBD", teams: "🇲🇽 vs TBD", date: "June 11, 2026", round: "Opening Match", slug: "mexico-opening-match-world-cup-2026-tickets", featured: true, label: "TOURNAMENT OPENER" },
  { match: "Mexico vs Colombia", teams: "🇲🇽 vs 🇨🇴", date: "June 16, 2026", round: "Group A", slug: "mexico-vs-colombia-world-cup-2026-tickets", featured: true },
  { match: "Mexico vs Korea", teams: "🇲🇽 vs 🇰🇷", date: "June 21, 2026", round: "Group A", slug: "mexico-vs-korea-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "July 1, 2026", round: "Knockout", slug: "azteca-r32-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 175, url: "#" }, { partner: "StubHub", price_from: 250, url: "#" }]

export default function EstadioAztecaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-700 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-yellow-400 text-black">OPENING MATCH</Badge>
            <Badge className="bg-green-600 text-white">3X WORLD CUP HOST</Badge>
            <Badge variant="outline" className="text-slate-900 border-slate-900/50">MEXICO</Badge>
          </div>
          <h1 className="text-5xl font-bold text-slate-900">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-slate-700 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Capacity</p><p className="text-slate-900 font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Matches</p><p className="text-slate-900 font-bold text-xl">4 Games</p></div>
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Legacy</p><p className="text-slate-900 font-bold text-xl flex items-center gap-1"><Trophy className="h-5 w-5 text-yellow-500" />1970 & 1986 Finals</p></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-yellow-400 bg-gradient-to-r from-green-50 to-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2"><Trophy className="h-6 w-6 text-yellow-600" /><h3 className="font-bold text-xl text-green-900">Football's Cathedral</h3></div>
                <p className="text-green-800">Estadio Azteca is the only stadium in history to host 3 FIFA World Cup tournaments. This is where Maradona scored the "Hand of God" and "Goal of the Century" in 1986. Pelé lifted the trophy here in 1970. Pure football history.</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-green-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          {m.label && <Badge className="bg-green-600 text-white mb-1">{m.label}</Badge>}
                          <div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div>
                          <p className="font-bold text-lg">{m.match}</p>
                          <p className="text-sm text-slate-500">{m.teams}</p>
                        </div>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">Get Tickets</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader><CardTitle>About Estadio Azteca</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">Opened in 1966, Estadio Azteca is one of the most iconic stadiums in football history. Home to Club América and the Mexican national team, it has witnessed countless legendary moments.</p>
                <p className="text-slate-600">The stadium hosted the 1970 and 1986 World Cup Finals and will kick off the 2026 tournament. At 2,200m elevation, the thin air creates unique playing conditions.</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-green-50 rounded-lg"><p className="font-medium text-green-900">1970 Final</p><p className="text-sm text-green-700">Brazil 4-1 Italy</p></div>
                  <div className="p-4 bg-green-50 rounded-lg"><p className="font-medium text-green-900">1986 Final</p><p className="text-sm text-green-700">Argentina 3-2 Germany</p></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Train className="h-5 w-5" />Getting There</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3"><Train className="h-5 w-5 text-blue-600 mt-1" /><div><p className="font-medium">Mexico City Metro</p><p className="text-sm text-slate-500">Estadio Azteca station (Line 2) is adjacent to the stadium.</p></div></div>
                <div className="flex items-start gap-3"><Car className="h-5 w-5 text-green-600 mt-1" /><div><p className="font-medium">By Car</p><p className="text-sm text-slate-500">Located in Coyoacán, south of Mexico City center.</p></div></div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-green-400">
              <CardHeader className="bg-green-50"><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5 text-green-600" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4 pt-4">
                <p className="text-sm text-green-600 font-medium">Historic venue - high demand expected!</p>
                {affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" className="bg-green-600 hover:bg-green-700" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-500">Capacity</span><span className="font-medium">{venueInfo.capacity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Opened</span><span className="font-medium">1966</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Elevation</span><span className="font-medium">2,200m</span></div>
                <div className="flex justify-between"><span className="text-slate-500">WC Finals Hosted</span><span className="font-medium">2</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
