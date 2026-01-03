import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Lincoln Financial Field World Cup 2026 Tickets | Philadelphia",
  description: "Buy tickets for World Cup 2026 matches at Lincoln Financial Field, Philadelphia.",
  keywords: ["Lincoln Financial Field World Cup 2026", "Philadelphia World Cup tickets"]
}

const venueInfo = { name: "Lincoln Financial Field", city: "Philadelphia, PA", country: "USA", capacity: 69000, opened: 2003 }

const scheduledMatches = [
  { match: "Scotland vs Haiti", teams: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 vs 🇭🇹", date: "June 13, 2026", round: "Group C", slug: "scotland-vs-haiti-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 18, 2026", round: "Group Stage", slug: "linc-group-2-world-cup-2026-tickets" },
  { match: "England vs Panama", teams: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇵🇦", date: "June 23, 2026", round: "Group L", slug: "england-vs-panama-world-cup-2026-tickets", featured: true },
  { match: "Round of 16", teams: "TBD vs TBD", date: "July 5, 2026", round: "Knockout", slug: "linc-r16-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 125, url: "#" }, { partner: "StubHub", price_from: 175, url: "#" }]

export default function LincolnFinancialFieldPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-800 via-gray-100 to-green-800 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-green-600 text-white mb-4">USA</Badge>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Capacity</p><p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Matches</p><p className="text-white font-bold text-xl">4 Games</p></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Lincoln Financial Field: Philadelphia&apos;s Passionate World Cup Venue</h2>
              <p>
                Philadelphia brings legendary passion to the 2026 World Cup. Home of the Philadelphia Eagles -
                arguably America&apos;s most fervent NFL fanbase - Lincoln Financial Field delivers intensity that
                transforms every match into an event. England fans will descend on the City of Brotherly Love,
                while underdog supporters from Scotland, Haiti, and Panama find a city that celebrates working-class
                sporting culture.
              </p>
              <p>
                The Linc, as locals call it, represents Philadelphia&apos;s sporting heart. Eagles fans are famous for
                their passion - sometimes intimidating, always unforgettable. For the World Cup, this energy channels
                into football celebration, creating atmospheres that rival European ultras.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">England vs Panama: Three Lions in Philly</h3>
              <p>
                <Link href="/teams/england-world-cup-2026-tickets" className="text-green-600 hover:underline">England</Link> vs
                <Link href="/teams/panama-world-cup-2026-tickets" className="text-green-600 hover:underline">Panama</Link> brings
                one of international football&apos;s most passionate fanbases to Philadelphia. English supporters are
                famous for their traveling numbers and songbook - &quot;Three Lions,&quot; &quot;Vindaloo,&quot; and countless chants
                will echo through Lincoln Financial Field. The Philly pub scene prepares for a British invasion.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Scotland and Morocco: Underdog Stories</h3>
              <p>
                Lincoln Financial Field hosts <Link href="/teams/scotland-world-cup-2026-tickets" className="text-green-600 hover:underline">Scotland</Link> vs
                Haiti and <Link href="/teams/morocco-world-cup-2026-tickets" className="text-green-600 hover:underline">Morocco</Link> -
                celebrating nations that punch above their weight. Morocco&apos;s historic 2022 semi-final run makes them
                favorites, while Scotland&apos;s Tartan Army travels with unmatched enthusiasm. Philadelphia embraces these
                underdog narratives.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Philadelphia Experience: History Meets Football</h3>
              <p>
                Philadelphia offers American history alongside World Cup football. The Liberty Bell, Independence Hall,
                and the Rocky Steps on the Art Museum provide iconic photo opportunities. The
                <Link href="/cities/philadelphia-world-cup-2026-travel-guide" className="text-green-600 hover:underline">Philadelphia travel guide</Link> covers
                everything from cheesesteaks to boutique hotels in Center City.
              </p>
              <p>
                Combine Lincoln Financial Field with nearby <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-green-600 hover:underline">MetLife Stadium in New York</Link> (90
                minutes north) for the Northeast Corridor World Cup experience.
              </p>
            </article>

            <Card><CardContent className="p-6"><p className="text-slate-600">Home of the Philadelphia Eagles, Lincoln Financial Field is known for its passionate fanbase. The Linc will bring incredible energy to World Cup matches.</p></CardContent></Card>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-green-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div><div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div><p className="font-bold text-lg">{m.match}</p></div>
                        <Button size="sm">Get Tickets</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
