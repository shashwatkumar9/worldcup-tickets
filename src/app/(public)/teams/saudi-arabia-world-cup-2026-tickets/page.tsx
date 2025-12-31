import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Users, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Saudi Arabia World Cup 2026 Tickets | Green Falcons",
  description: "Buy Saudi Arabia FIFA World Cup 2026 tickets. Watch the Green Falcons in Group H.",
  keywords: ["Saudi Arabia World Cup 2026 tickets", "Green Falcons World Cup", "Saudi Arabia vs Spain tickets"],
}

const teamInfo = { name: "Saudi Arabia", flag: "🇸🇦", confederation: "AFC", fifaRanking: 56, group: "H", nickname: "Green Falcons", coach: "Roberto Mancini", captain: "Salman Al-Faraj" }

const keyPlayers = [
  { name: "Salem Al-Dawsari", position: "Forward", club: "Al-Hilal", number: 10, star: true },
  { name: "Salman Al-Faraj", position: "Midfielder", club: "Al-Hilal", number: 7 },
  { name: "Mohammed Al-Owais", position: "Goalkeeper", club: "Al-Hilal", number: 1 },
  { name: "Ali Al-Bulaihi", position: "Defender", club: "Al-Hilal", number: 12 },
  { name: "Firas Al-Buraikan", position: "Forward", club: "Al-Nassr", number: 18 },
]

const groupFixtures = [
  { match: "Spain vs Saudi Arabia", date: "June 18, 2026", time: "5:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "spain-vs-saudi-arabia-world-cup-2026-tickets" },
  { match: "Saudi Arabia vs Cape Verde", date: "June 13, 2026", time: "2:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "saudi-arabia-vs-cape-verde-world-cup-2026-tickets" },
  { match: "Uruguay vs Saudi Arabia", date: "June 18, 2026", time: "8:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "uruguay-vs-saudi-arabia-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 95, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 130, logo: "🎟️", url: "#" }]

export default function SaudiArabiaTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-700 via-white to-green-700 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <Badge className="bg-green-700 text-white mb-2">GROUP H</Badge>
              <h1 className="text-4xl font-bold text-slate-900">{teamInfo.name}</h1>
              <p className="text-xl text-slate-700">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">
            The team that shocked Argentina in 2022! Saudi Arabia proved they can compete with anyone.
            Under Roberto Mancini, they&apos;re aiming to cause more World Cup upsets.
          </p>
          <Button size="lg" className="mt-6 bg-green-700 hover:bg-green-800"><Ticket className="mr-2 h-5 w-5" />Buy Saudi Arabia Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-yellow-900">Remember 2022?</h3>
                <p className="text-sm text-yellow-800 mt-2">Saudi Arabia&apos;s 2-1 victory over Argentina remains one of the greatest World Cup upsets ever. They&apos;ll bring that underdog spirit to 2026!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-green-700" />Group H Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50">
                      <div className="flex items-center gap-4">
                        <div><p className="text-sm font-medium">{fixture.date}</p><p className="text-xs text-slate-500">{fixture.time}</p></div>
                        <div><p className="font-semibold">{fixture.match}</p><div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{fixture.venue}, {fixture.city}</div></div>
                      </div>
                      <Button size="sm">Get Tickets</Button>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">{player.number}</div>
                        <div>
                          <p className="font-semibold">{player.name}{player.star && <Star className="inline h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />}</p>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div><p className="font-medium">{link.partner}</p><p className="text-sm text-green-600">From ${link.price_from}</p></div>
                    <Button size="sm" asChild><a href={link.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
