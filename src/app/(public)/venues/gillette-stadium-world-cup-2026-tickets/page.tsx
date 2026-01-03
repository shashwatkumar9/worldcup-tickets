import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Gillette Stadium World Cup 2026 Tickets | Boston",
  description: "Buy tickets for World Cup 2026 matches at Gillette Stadium, Boston/Foxborough.",
  keywords: ["Gillette Stadium World Cup 2026", "Boston World Cup tickets", "New England World Cup"]
}

const venueInfo = { name: "Gillette Stadium", city: "Foxborough, MA", country: "USA", capacity: 65000, opened: 2002 }

const scheduledMatches = [
  { match: "Morocco vs Haiti", teams: "🇲🇦 vs 🇭🇹", date: "June 18, 2026", round: "Group C", slug: "morocco-vs-haiti-world-cup-2026-tickets" },
  { match: "Croatia vs Ghana", teams: "🇭🇷 vs 🇬🇭", date: "June 23, 2026", round: "Group L", slug: "croatia-vs-ghana-world-cup-2026-tickets", featured: true },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 28, 2026", round: "Group Stage", slug: "gillette-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "July 1, 2026", round: "Knockout", slug: "gillette-r32-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 120, url: "#" }, { partner: "StubHub", price_from: 165, url: "#" }]

export default function GilletteStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 via-red-700 to-gray-100 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-blue-800 text-white mb-4">USA</Badge>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city} (Boston Area)</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Capacity</p><p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Home Teams</p><p className="text-white font-bold text-xl">Patriots, Revolution</p></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Gillette Stadium: New England&apos;s World Cup Celebration</h2>
              <p>
                New England brings championship culture to the 2026 World Cup. Home of the legendary New England Patriots
                dynasty and the New England Revolution, Gillette Stadium understands big moments. Boston-area sports fans
                are among America&apos;s most passionate, and that energy will transform every World Cup match into an event.
                The stadium&apos;s Lighthouse at Patriot Place provides an iconic backdrop for football history.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Croatia vs Ghana: 2022 Rematch</h3>
              <p>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Croatia</Link> vs
                <Link href="/teams/ghana-world-cup-2026-tickets" className="text-blue-600 hover:underline">Ghana</Link> in
                Group L offers a rematch of their 2022 encounter. Luka Modrić&apos;s potential final World Cup adds poignancy,
                while Ghana seeks redemption after heartbreaking 2022 elimination. The Black Stars&apos; passionate diaspora
                and Croatia&apos;s dedicated traveling support guarantee incredible atmosphere in Foxborough.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Morocco: Semi-Final Heroes Return</h3>
              <p>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="text-blue-600 hover:underline">Morocco</Link> vs
                Haiti brings the 2022 semi-finalists to New England. The Atlas Lions captivated the world with their
                historic Qatar run, and expectations remain sky-high. Boston&apos;s Moroccan community will transform
                Gillette Stadium into a celebration of African football excellence.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Boston Experience: Championship City</h3>
              <p>
                Boston offers world-class attractions alongside World Cup football. Walk the Freedom Trail through
                American Revolution history, explore Harvard and MIT campuses, or catch a Red Sox game at Fenway Park.
                The <Link href="/cities/boston-world-cup-2026-travel-guide" className="text-blue-600 hover:underline">Boston travel guide</Link> covers
                accommodation from Back Bay luxury to Cambridge boutique hotels.
              </p>
              <p>
                The New England Revolution&apos;s MLS presence means authentic football culture already exists in Boston.
                Combine Gillette with <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium in New York</Link> and
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">Lincoln Financial Field in Philadelphia</Link> for
                the complete Northeast World Cup experience.
              </p>
            </article>

            <Card><CardContent className="p-6"><p className="text-slate-600">Home of the New England Patriots dynasty and New England Revolution (MLS). Gillette Stadium is the heart of sports in New England and will bring passionate Boston sports fans to the World Cup.</p></CardContent></Card>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-blue-400" : ""}><CardContent className="p-4"><Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between"><div><div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div><p className="font-bold text-lg">{m.match}</p></div><Button size="sm">Get Tickets</Button></Link></CardContent></Card>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24"><CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
