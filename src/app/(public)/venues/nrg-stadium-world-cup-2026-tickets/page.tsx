import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "NRG Stadium World Cup 2026 Tickets | Houston",
  description: "Buy tickets for World Cup 2026 matches at NRG Stadium, Houston.",
  keywords: ["NRG Stadium World Cup 2026", "Houston World Cup tickets"]
}

const venueInfo = { name: "NRG Stadium", city: "Houston, TX", country: "USA", capacity: 72000, opened: 2002 }

const scheduledMatches = [
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 14, 2026", round: "Group Stage", slug: "nrg-group-1-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 19, 2026", round: "Group Stage", slug: "nrg-group-2-world-cup-2026-tickets" },
  { match: "Uruguay vs Saudi Arabia", teams: "🇺🇾 vs 🇸🇦", date: "June 25, 2026", round: "Group H", slug: "uruguay-vs-saudi-arabia-world-cup-2026-tickets" },
  { match: "Round of 16", teams: "TBD vs TBD", date: "July 6, 2026", round: "Knockout", slug: "nrg-r16-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 115, url: "#" }, { partner: "StubHub", price_from: 160, url: "#" }]

export default function NRGStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 via-red-700 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-blue-600 text-white mb-4">USA</Badge>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Capacity</p><p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Feature</p><p className="text-white font-bold text-xl">Retractable Roof</p></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">NRG Stadium: Houston&apos;s Climate-Controlled World Cup Venue</h2>
              <p>
                Houston&apos;s NRG Stadium brings Texas-sized hospitality and climate-controlled comfort to the 2026 World Cup.
                The retractable roof stadium ensures perfect playing conditions regardless of Texas summer heat, while the
                72,000 capacity delivers impressive atmosphere. Houston&apos;s status as America&apos;s most diverse city guarantees
                passionate support for every competing nation.
              </p>
              <p>
                As home to the Houston Texans and the legendary Houston Rodeo, NRG Stadium knows how to host major events.
                The 2026 World Cup adds football&apos;s greatest tournament to this impressive venue&apos;s resume.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Uruguay vs Saudi Arabia: Group H Showdown</h3>
              <p>
                NRG Stadium hosts <Link href="/teams/uruguay-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uruguay</Link> vs
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Saudi Arabia</Link> - a
                clash between South American tradition and Middle Eastern ambition. Uruguay brings World Cup pedigree (two-time
                champions), while Saudi Arabia carries momentum from their stunning 2022 victory over
                <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina</Link>. Houston&apos;s
                significant Latin American and Arab communities ensure electric atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Climate Control: Perfect Football Conditions</h3>
              <p>
                Houston&apos;s June-July temperatures can exceed 95°F with high humidity. NRG Stadium&apos;s retractable roof
                solves this challenge, providing climate-controlled comfort for players and fans alike. The stadium
                can be configured for open-air natural atmosphere when conditions permit, offering flexibility other
                venues can&apos;t match.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Houston Experience: Space City Welcomes the World</h3>
              <p>
                Houston offers incredible World Cup experiences beyond the stadium. Visit NASA&apos;s Johnson Space Center,
                explore the Museum District&apos;s world-class collections, or dive into the diverse culinary scene from
                Vietnamese in Midtown to Tex-Mex in Montrose. The
                <Link href="/cities/houston-world-cup-2026-travel-guide" className="text-blue-600 hover:underline">Houston travel guide</Link> covers
                accommodation and attractions throughout Space City.
              </p>
              <p>
                Combine NRG Stadium with <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&amp;T Stadium in Dallas</Link> for
                the Texas World Cup double - two iconic venues, one incredible state.
              </p>
            </article>

            <Card><CardContent className="p-6"><p className="text-slate-600">NRG Stadium&apos;s retractable roof makes it perfect for World Cup matches in Houston&apos;s summer heat. Home of the Houston Texans (NFL) and the Houston Rodeo.</p></CardContent></Card>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i}><CardContent className="p-4"><Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between"><div><div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div><p className="font-bold text-lg">{m.match}</p></div><Button size="sm">Get Tickets</Button></Link></CardContent></Card>
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
