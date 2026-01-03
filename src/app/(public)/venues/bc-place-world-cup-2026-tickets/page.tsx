import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar, Star, Mountain } from "lucide-react"

export const metadata: Metadata = {
  title: "BC Place World Cup 2026 Tickets | Vancouver",
  description: "Buy tickets for World Cup 2026 matches at BC Place, Vancouver. Canada's stunning waterfront stadium!",
  keywords: ["BC Place World Cup 2026", "Vancouver World Cup tickets", "Canada World Cup 2026"]
}

const venueInfo = { name: "BC Place", city: "Vancouver, BC", country: "Canada", capacity: 54000, opened: 1983 }

const scheduledMatches = [
  { match: "Switzerland vs Qatar", teams: "🇨🇭 vs 🇶🇦", date: "June 12, 2026", round: "Group B", slug: "switzerland-vs-qatar-world-cup-2026-tickets" },
  { match: "Canada vs Switzerland", teams: "🇨🇦 vs 🇨🇭", date: "June 17, 2026", round: "Group B", slug: "canada-vs-switzerland-world-cup-2026-tickets", featured: true },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 22, 2026", round: "Group Stage", slug: "bcplace-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "June 30, 2026", round: "Knockout", slug: "bcplace-r32-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 120, url: "#" }, { partner: "StubHub", price_from: 165, url: "#" }]

export default function BCPlacePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-red-600 text-white">CANADA HOST VENUE</Badge>
            <Badge variant="outline" className="text-slate-900 border-slate-900/50">CANADA</Badge>
          </div>
          <h1 className="text-5xl font-bold text-slate-900">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-slate-700 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Capacity</p><p className="text-slate-900 font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Matches</p><p className="text-slate-900 font-bold text-xl">4 Games</p></div>
            <div className="bg-black/10 rounded-lg px-4 py-2"><p className="text-slate-600 text-sm">Setting</p><p className="text-slate-900 font-bold text-xl flex items-center gap-1"><Mountain className="h-5 w-5" />Waterfront</p></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2"><Mountain className="h-6 w-6 text-red-600" /><h3 className="font-bold text-xl text-red-900">Stunning Vancouver Setting</h3></div>
                <p className="text-red-800">BC Place sits on Vancouver's stunning waterfront with views of the mountains and harbor. The retractable roof ensures matches can be played in any weather while the natural beauty of British Columbia provides a spectacular backdrop.</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-red-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div>
                          <p className="font-bold text-lg">{m.match}</p>
                          <p className="text-sm text-slate-500">{m.teams}</p>
                        </div>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">Get Tickets</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">BC Place: Vancouver&apos;s Waterfront World Cup Venue</h2>
              <p>
                BC Place offers the most stunning natural setting of any 2026 World Cup venue. Nestled on Vancouver&apos;s
                spectacular waterfront, with the North Shore mountains rising dramatically behind, this is where
                <Link href="/teams/canada-world-cup-2026-tickets" className="text-red-600 hover:underline">Canada</Link> writes
                new chapters in their football history. The retractable roof ensures perfect conditions while maintaining
                the connection to Vancouver&apos;s natural beauty.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Canada vs Switzerland: Crucial Group B Clash</h3>
              <p>
                BC Place hosts <Link href="/teams/canada-world-cup-2026-tickets" className="text-red-600 hover:underline">Canada</Link> vs
                <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-red-600 hover:underline">Switzerland</Link> - a
                match that could determine Group B qualification. Alphonso Davies returns to his home country as a
                Bayern Munich star, leading Canada&apos;s golden generation. The Swiss bring Granit Xhaka&apos;s Bundesliga
                championship pedigree. Vancouver&apos;s 54,000 fans will create incredible atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">2010 Olympics Legacy: World-Class Venue</h3>
              <p>
                BC Place hosted the 2010 Winter Olympics opening and closing ceremonies, proving Vancouver&apos;s ability
                to deliver world-class events. The $563 million renovation in 2011 installed a state-of-the-art
                retractable roof that opens like a camera aperture. For the World Cup, this venue represents Canadian
                excellence at its finest.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Vancouver Experience: Mountains, Ocean, and Football</h3>
              <p>
                Vancouver offers unparalleled World Cup experiences. Stanley Park&apos;s 1,000 acres of forest, Granville
                Island&apos;s markets, Gastown&apos;s cobblestone streets, and nearby Whistler&apos;s mountain adventures provide
                endless exploration. The <Link href="/cities/vancouver-world-cup-2026-travel-guide" className="text-red-600 hover:underline">Vancouver travel guide</Link> covers
                everything from Coal Harbour luxury hotels to trendy Main Street stays.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle>About BC Place</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">BC Place opened in 1983 and underwent a $563 million renovation in 2011 that included a new cable-supported retractable roof. It&apos;s home to the BC Lions (CFL) and Vancouver Whitecaps (MLS).</p>
                <p className="text-slate-600">The stadium hosted the 2010 Winter Olympics opening and closing ceremonies. Vancouver&apos;s passionate soccer fanbase will create an incredible atmosphere for the World Cup.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Train className="h-5 w-5" />Getting There</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3"><Train className="h-5 w-5 text-blue-600 mt-1" /><div><p className="font-medium">SkyTrain</p><p className="text-sm text-slate-500">Stadium-Chinatown station is connected to the stadium.</p></div></div>
                <div className="flex items-start gap-3"><Car className="h-5 w-5 text-green-600 mt-1" /><div><p className="font-medium">By Car</p><p className="text-sm text-slate-500">Downtown Vancouver location with parking nearby.</p></div></div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" className="bg-red-600 hover:bg-red-700" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-500">Capacity</span><span className="font-medium">{venueInfo.capacity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Renovated</span><span className="font-medium">2011</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Home Teams</span><span className="font-medium">Whitecaps, BC Lions</span></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Other Canadian Venue</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/venues/bmo-field-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />BMO Field<Badge className="ml-auto text-xs">Toronto</Badge></Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
