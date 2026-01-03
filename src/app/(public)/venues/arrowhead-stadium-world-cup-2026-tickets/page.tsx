import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Calendar, Volume2, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Arrowhead Stadium World Cup 2026 Tickets | Kansas City",
  description: "Buy tickets for World Cup 2026 matches at Arrowhead Stadium, Kansas City. Home of the legendary Chiefs Kingdom atmosphere!",
  keywords: ["Arrowhead Stadium World Cup 2026", "Kansas City World Cup tickets", "Chiefs Stadium World Cup", "Kansas City FIFA 2026"]
}

const venueInfo = { name: "Arrowhead Stadium", city: "Kansas City, MO", country: "USA", capacity: 76416, opened: 1972 }

const scheduledMatches = [
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 14, 2026", round: "Group Stage", slug: "arrowhead-group-1-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 19, 2026", round: "Group Stage", slug: "arrowhead-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 24, 2026", round: "Group Stage", slug: "arrowhead-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "June 29, 2026", round: "Knockout", slug: "arrowhead-r32-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 115, url: "#" }, { partner: "StubHub", price_from: 160, url: "#" }, { partner: "VividSeats", price_from: 155, url: "#" }]

export default function ArrowheadStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-red-700 text-white mb-4">USA</Badge>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Capacity</p><p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Atmosphere</p><p className="text-white font-bold text-xl flex items-center gap-1"><Volume2 className="h-5 w-5" />Chiefs Kingdom</p></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Arrowhead Stadium: America&apos;s Loudest Venue Meets Football</h2>
              <p>
                Arrowhead Stadium holds the Guinness World Record for crowd noise at a staggering 142.2 decibels - so
                loud it registers on earthquake sensors. Home of the three-time Super Bowl champion Kansas City Chiefs,
                this legendary venue brings &quot;Chiefs Kingdom&quot; passion to the 2026 World Cup. But Kansas City isn&apos;t
                just about NFL football - it&apos;s been called the &quot;Soccer Capital of America,&quot; with Sporting Kansas
                City&apos;s passionate fanbase proving the region&apos;s genuine football culture.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">76,416 Capacity: America&apos;s Largest World Cup Venue</h3>
              <p>
                Arrowhead Stadium offers the largest capacity of any 2026 World Cup venue in the United States. The
                iconic red seats create a &quot;Sea of Red&quot; that intimidates opponents, while the open-air design delivers
                classic football atmosphere. For knockout round matches, 76,000 voices creating Arrowhead&apos;s famous
                noise will produce unforgettable moments.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Tailgating Culture: American Sports Tradition</h3>
              <p>
                Arrowhead parking lots host legendary tailgating - an American sports tradition at its finest. Hours
                before kickoff, fans fire up grills serving Kansas City&apos;s world-famous BBQ. Combine World Cup football
                with authentic American sports culture for a unique tournament experience.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Kansas City Experience: BBQ Capital and Beyond</h3>
              <p>
                Kansas City offers world-famous BBQ, vibrant jazz heritage, and genuine Midwestern hospitality. Joe&apos;s
                Kansas City, Q39, and Gates BBQ provide legendary cuisine, while the Power &amp; Light District and
                Crossroads Arts District deliver entertainment. The
                <Link href="/cities/kansas-city-world-cup-2026-travel-guide" className="text-red-600 hover:underline">Kansas City travel guide</Link> covers
                accommodation from Country Club Plaza luxury to downtown convention hotels.
              </p>
            </article>

            <Card className="border-red-400 bg-red-50"><CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2"><Star className="h-6 w-6 text-red-600" /><h3 className="font-bold text-xl text-red-900">The Sea of Red</h3></div>
              <p className="text-red-800">Arrowhead Stadium is one of the loudest stadiums in the world - holding the Guinness World Record for crowd noise at 142.2 decibels! Home of the Kansas City Chiefs (3x Super Bowl Champions), the passionate &quot;Chiefs Kingdom&quot; fanbase creates an electric atmosphere. Kansas City is also known as the &quot;Soccer Capital of America&quot; with passionate Sporting KC supporters.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3">Stadium Features</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Largest stadium capacity in the World Cup 2026 (76,416 seats)</li>
                <li>• Recently renovated with state-of-the-art facilities</li>
                <li>• Famous "Arrowhead Chop" fan tradition</li>
                <li>• Excellent sightlines from every seat</li>
                <li>• Award-winning BBQ options inside the stadium</li>
              </ul>
            </CardContent></Card>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i}><CardContent className="p-4"><Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between"><div><div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div><p className="font-bold text-lg">{m.match}</p></div><Button size="sm" className="bg-red-600 hover:bg-red-700">Get Tickets</Button></Link></CardContent></Card>
                ))}
              </div>
            </div>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3">Getting There</h3>
              <div className="space-y-3 text-slate-600">
                <p><strong>From Airport:</strong> Kansas City International (MCI) is 25 minutes away. Shuttle services and rideshare available.</p>
                <p><strong>Parking:</strong> Extensive parking lots surrounding the stadium. Arrive early for legendary tailgating!</p>
                <p><strong>Public Transit:</strong> Special event buses from downtown Kansas City on match days.</p>
              </div>
            </CardContent></Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24"><CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" className="bg-red-600 hover:bg-red-700" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent>
            </Card>
            <Card><CardHeader><CardTitle>BBQ Capital</CardTitle></CardHeader><CardContent>
              <p className="text-slate-600 text-sm mb-3">Kansas City is world-famous for BBQ! Don't miss trying local favorites before or after the match.</p>
              <div className="space-y-2 text-sm">
                <p className="font-medium">Must-Try Spots:</p>
                <p className="text-slate-500">• Joe's Kansas City BBQ</p>
                <p className="text-slate-500">• Q39</p>
                <p className="text-slate-500">• Gates BBQ</p>
              </div>
            </CardContent></Card>
            <Card><CardHeader><CardTitle>Other USA Venues</CardTitle></CardHeader><CardContent className="space-y-2">
              <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />MetLife Stadium<Badge className="ml-auto text-xs">Final</Badge></Link>
              <Link href="/venues/att-stadium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />AT&T Stadium<Badge className="ml-auto text-xs">Dallas</Badge></Link>
              <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />SoFi Stadium<Badge className="ml-auto text-xs">LA</Badge></Link>
            </CardContent></Card>
          </div>
        </div>
      </div>
    </div>
  )
}
