import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "AT&T Stadium World Cup 2026 Tickets | Dallas",
  description: "Buy tickets for World Cup 2026 matches at AT&T Stadium, Dallas. Jerry World hosts a Semi-Final!",
  keywords: ["AT&T Stadium World Cup 2026", "Dallas World Cup tickets", "Jerry World World Cup"]
}

const venueInfo = { name: "AT&T Stadium", city: "Arlington, TX", country: "USA", capacity: 80000, opened: 2009 }

const scheduledMatches = [
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 12, 2026", round: "Group Stage", slug: "att-group-1-world-cup-2026-tickets" },
  { match: "USA vs Australia", teams: "🇺🇸 vs 🇦🇺", date: "June 17, 2026", round: "Group D", slug: "usa-vs-australia-world-cup-2026-tickets", featured: true },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 22, 2026", round: "Group Stage", slug: "att-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "July 2, 2026", round: "Knockout", slug: "att-r32-world-cup-2026-tickets" },
  { match: "Quarter-Final", teams: "TBD vs TBD", date: "July 10, 2026", round: "Quarter-Final", slug: "att-qf-world-cup-2026-tickets", featured: true },
  { match: "Semi-Final 2", teams: "TBD vs TBD", date: "July 15, 2026", round: "Semi-Final", slug: "sf-match-2-world-cup-2026-tickets", featured: true },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 150, url: "#" }, { partner: "StubHub", price_from: 210, url: "#" }]

export default function ATTStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 via-gray-700 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-blue-500 text-white">SEMI-FINAL VENUE</Badge>
            <Badge variant="outline" className="text-white border-white/50">USA</Badge>
          </div>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white/70 text-sm">Capacity</p>
              <p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white/70 text-sm">Matches</p>
              <p className="text-white font-bold text-xl">6 Games</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white/70 text-sm">Known As</p>
              <p className="text-white font-bold text-xl">Jerry World</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-blue-400 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">The Largest Domed Stadium</h3>
                </div>
                <p className="text-blue-800">AT&T Stadium, known as "Jerry World," features the world's largest column-free interior and a stunning center-hung video board. Home of the Dallas Cowboys and one of America's most iconic sports venues.</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-blue-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline">{m.round}</Badge>
                            <span className="text-sm text-slate-500">{m.date}</span>
                          </div>
                          <p className="font-bold text-lg">{m.match}</p>
                          <p className="text-sm text-slate-500">{m.teams}</p>
                        </div>
                        <Button size="sm">Get Tickets</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">AT&amp;T Stadium: Jerry World Hosts a World Cup Semi-Final</h2>
              <p>
                AT&amp;T Stadium - affectionately known as &quot;Jerry World&quot; after Dallas Cowboys owner Jerry Jones -
                represents Texas-sized ambition in stadium form. This architectural marvel hosts one of the 2026 World Cup
                Semi-Finals, putting it among the tournament&apos;s most important venues. With 80,000 capacity, the world&apos;s
                largest column-free interior, and legendary Texas hospitality, AT&amp;T Stadium delivers an unforgettable
                World Cup experience.
              </p>
              <p>
                When the Cowboys built this $1.3 billion stadium in 2009, they created something unprecedented. The
                retractable roof spans an area larger than the Statue of Liberty. The center-hung video board was the
                world&apos;s largest when installed. For the World Cup Semi-Final, all of this technology serves one purpose:
                creating the ultimate football atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Semi-Final Stakes: Two Matches From Glory</h3>
              <p>
                A World Cup Semi-Final carries immense pressure. Two wins separate these teams from immortality.
                Previous semi-finals have produced legendary drama - <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-600 hover:underline">Germany</Link>&apos;s
                7-1 demolition of <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-600 hover:underline">Brazil</Link> in
                2014, <Link href="/teams/croatia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Croatia&apos;s</Link> penalty
                shootout heroics in 2018, <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina</Link> and
                <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-600 hover:underline">France&apos;s</Link> roads
                to the 2022 Final. The 2026 edition at AT&amp;T Stadium will add to this legacy.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">USA vs Australia: Host Nation Showdown</h3>
              <p>
                AT&amp;T Stadium hosts <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA</Link> vs
                <Link href="/teams/australia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Australia</Link> in
                Group D - a massive fixture that could determine group qualification. The Socceroos impressed in 2022,
                reaching the Round of 16 and pushing eventual champions Argentina. Christian Pulisic and the American
                golden generation face a formidable challenge. Texas will be painted red, white, and blue as the home
                crowd roars on Team USA.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Texas Stadium Technology: Engineering Marvel</h3>
              <p>
                AT&amp;T Stadium pioneered stadium technology that others now imitate. The retractable roof opens in just
                12 minutes, while the end zone doors rise to create an open-air feel. The center-hung video board stretches
                160 feet wide - larger than most basketball courts - ensuring every replay and statistic reaches fans
                throughout the stadium.
              </p>
              <p>
                For the World Cup, natural grass will be installed to FIFA specifications. The stadium&apos;s climate control
                maintains perfect conditions regardless of Texas summer heat. Premium seating options include field-level
                suites that put fans feet from the action.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Dallas-Fort Worth: Texan Hospitality</h3>
              <p>
                The Dallas-Fort Worth metroplex offers southern hospitality at its finest. From world-class BBQ in Fort
                Worth&apos;s Stockyards to upscale dining in Dallas&apos;s Arts District, the region delivers culinary excellence.
                The <Link href="/cities/dallas-world-cup-2026-travel-guide" className="text-blue-600 hover:underline">Dallas travel guide</Link> covers
                accommodation from luxury downtown hotels to family-friendly suburban options.
              </p>
              <p>
                Mexican-American football culture runs deep in Texas. The state&apos;s proximity to Mexico ensures massive
                support for <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-600 hover:underline">El Tri</Link>,
                while the growing American soccer community rallies behind Team USA. Combine AT&amp;T Stadium with matches at
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">NRG Stadium in Houston</Link> for
                the Texas World Cup double.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle>About AT&amp;T Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">Opened in 2009, AT&amp;T Stadium cost $1.3 billion and is home to the Dallas Cowboys. The retractable roof and end zone doors create a unique viewing experience.</p>
                <p className="text-slate-600">The stadium&apos;s 160-foot-wide video board was the largest in the world when it opened. It has hosted Super Bowl XLV, NBA All-Star Games, and major concerts.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Car className="h-5 w-5" />Getting There</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Train className="h-5 w-5 text-blue-600 mt-1" />
                  <div><p className="font-medium">TRE Commuter Rail</p><p className="text-sm text-slate-500">CentrePort/DFW station connects to Dallas and Fort Worth.</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-green-600 mt-1" />
                  <div><p className="font-medium">By Car</p><p className="text-sm text-slate-500">Located between Dallas and Fort Worth. Ample parking available.</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((l) => (
                  <div key={l.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div>
                    <Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-500">Capacity</span><span className="font-medium">{venueInfo.capacity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Opened</span><span className="font-medium">2009</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Home Team</span><span className="font-medium">Dallas Cowboys</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
