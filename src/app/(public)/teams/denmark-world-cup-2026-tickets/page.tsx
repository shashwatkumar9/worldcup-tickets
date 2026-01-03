import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = { title: "Denmark World Cup 2026 Tickets | Danish Dynamite", description: "Buy Denmark FIFA World Cup 2026 tickets. Watch Danish Dynamite compete in Group F." }

const teamInfo = { name: "Denmark", flag: "🇩🇰", confederation: "UEFA", fifaRanking: 21, group: "F", nickname: "Danish Dynamite", coach: "Kasper Hjulmand", captain: "Simon Kjaer" }

const keyPlayers = [
  { name: "Christian Eriksen", position: "Midfielder", club: "Manchester United", number: 10, star: true },
  { name: "Rasmus Højlund", position: "Forward", club: "Manchester United", number: 9 },
  { name: "Pierre-Emile Højbjerg", position: "Midfielder", club: "Tottenham", number: 23 },
  { name: "Kasper Schmeichel", position: "Goalkeeper", club: "Anderlecht", number: 1 },
  { name: "Joakim Maehle", position: "Defender", club: "Wolfsburg", number: 5 },
]

const groupFixtures = [
  { match: "Netherlands vs Denmark", date: "June 14, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "netherlands-vs-denmark-world-cup-2026-tickets" },
  { match: "Denmark vs Japan", date: "June 19, 2026", time: "5:00 PM ET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "denmark-vs-japan-world-cup-2026-tickets" },
  { match: "Denmark vs TBD", date: "June 24, 2026", time: "5:00 PM ET", venue: "NRG Stadium", city: "Houston", slug: "denmark-group-match-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 100, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 140, logo: "🎟️", url: "#" }]

export default function DenmarkTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div><Badge className="bg-red-600 text-white mb-2">GROUP F</Badge><h1 className="text-4xl font-bold text-slate-900">{teamInfo.name}</h1><p className="text-xl text-slate-700">{teamInfo.nickname}</p></div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">Danish Dynamite explodes! Led by Christian Eriksen's inspiring comeback and rising star Rasmus Højlund, Denmark are serious contenders.</p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Denmark Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Denmark World Cup 2026: Danish Dynamite Reignited</h2>
              <p>
                Few stories in recent football history match Christian Eriksen&apos;s miraculous return. After suffering
                cardiac arrest at Euro 2020, the playmaker not only survived but returned to top-level football,
                inspiring Denmark to the semi-finals of that tournament and now leading them into the 2026 FIFA
                World Cup. Danish Dynamite has been reignited, and with Manchester United&apos;s Rasmus Højlund
                emerging as one of Europe&apos;s most exciting young strikers, this team combines emotional resonance
                with genuine quality.
              </p>
              <p>
                Denmark punches above its weight with remarkable consistency. Semi-finalists at Euro 2020, despite
                the trauma of Eriksen&apos;s collapse, the Danes showed the mental fortitude that defines this team.
                Kasper Hjulmand has built a squad that plays attractive football while maintaining the fighting
                spirit that has characterized Danish football since their shock Euro 1992 triumph.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group F: Dutch and Japanese Battles</h3>
              <p>
                Denmark faces a challenging Group F, opening against <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-red-600 hover:underline">Netherlands</Link> at
                <Link href="/venues/hard-rock-stadium-world-cup-2026" className="text-red-600 hover:underline">Hard Rock Stadium in Miami</Link>.
                The Dutch-Scandinavian rivalry promises attacking football and passionate fans. A clash with
                <Link href="/teams/japan-world-cup-2026-tickets" className="text-red-600 hover:underline">Japan</Link> at
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026" className="text-red-600 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> follows,
                before concluding at <Link href="/venues/nrg-stadium-world-cup-2026" className="text-red-600 hover:underline">NRG Stadium in Houston</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Eriksen&apos;s Inspiration: The Heartbeat Returns</h3>
              <p>
                Christian Eriksen&apos;s continued presence in elite football remains remarkable. His creative genius
                from midfield unlocks defenses with the kind of vision few possess. For his teammates and Danish
                fans, every match Eriksen plays is a celebration of life and football&apos;s ability to inspire.
              </p>
              <p>
                Rasmus Højlund has emerged as Denmark&apos;s striking hope for the future. The Manchester United forward,
                still developing at just 23, possesses the physical and technical attributes to trouble any defense.
                Pierre-Emile Højbjerg adds Tottenham&apos;s midfield steel, while the experienced Kasper Schmeichel
                provides goalkeeping pedigree.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Scandinavian Pride: Nordic Football Excellence</h3>
              <p>
                Denmark leads Scandinavia into the 2026 World Cup alongside <Link href="/teams/norway-world-cup-2026-tickets" className="text-red-600 hover:underline">Norway</Link> and
                <Link href="/teams/sweden-world-cup-2026-tickets" className="text-red-600 hover:underline">Sweden</Link>.
                The Nordic nations share similar football philosophies - technical quality, tactical organization,
                and physical resilience. A potential Scandinavian clash in the knockout rounds would captivate fans
                across Northern Europe.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">European Ambitions: 1992 Spirit Lives On</h3>
              <p>
                Denmark&apos;s shock Euro 1992 victory remains one of football&apos;s greatest underdog stories. Called up
                as late replacements, the Danes went on to become European champions. That spirit of defying odds
                remains central to Danish football identity. Potential knockout clashes against
                <Link href="/teams/germany-world-cup-2026-tickets" className="text-red-600 hover:underline">Germany</Link>,
                <Link href="/teams/france-world-cup-2026-tickets" className="text-red-600 hover:underline">France</Link>, or
                <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline">England</Link> would
                see Denmark embrace their role as dangerous outsiders once again.
              </p>
            </article>

            <Card className="border-yellow-400 bg-yellow-50"><CardContent className="p-6"><h3 className="font-bold text-yellow-900">Netherlands vs Denmark</h3><p className="text-sm text-yellow-800 mt-2">Scandinavian-Dutch rivalry renewed! Two of Europe&apos;s most exciting teams face off in Miami.</p></CardContent></Card>
            <Card><CardHeader><CardTitle><Calendar className="inline h-5 w-5 mr-2" />Group F Schedule</CardTitle></CardHeader>
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
