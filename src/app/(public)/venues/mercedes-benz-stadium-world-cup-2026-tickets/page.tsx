import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ticket, ExternalLink, Train, Car, Calendar, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Mercedes-Benz Stadium World Cup 2026 Tickets | Atlanta",
  description: "Buy tickets for World Cup 2026 matches at Mercedes-Benz Stadium, Atlanta. The stunning retractable roof stadium!",
  keywords: ["Mercedes-Benz Stadium World Cup 2026", "Atlanta World Cup tickets", "Atlanta United Stadium"]
}

const venueInfo = { name: "Mercedes-Benz Stadium", city: "Atlanta, GA", country: "USA", capacity: 71000, opened: 2017 }

const scheduledMatches = [
  { match: "France vs Norway", teams: "🇫🇷 vs 🇳🇴", date: "June 15, 2026", round: "Group I", slug: "france-vs-norway-world-cup-2026-tickets", featured: true, label: "MBAPPÉ VS HAALAND" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 19, 2026", round: "Group Stage", slug: "mbs-group-2-world-cup-2026-tickets" },
  { match: "Group Stage Match", teams: "TBD vs TBD", date: "June 24, 2026", round: "Group Stage", slug: "mbs-group-3-world-cup-2026-tickets" },
  { match: "Round of 32", teams: "TBD vs TBD", date: "June 30, 2026", round: "Knockout", slug: "mbs-r32-world-cup-2026-tickets" },
  { match: "Round of 16", teams: "TBD vs TBD", date: "July 5, 2026", round: "Knockout", slug: "mbs-r16-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 145, url: "#" }, { partner: "StubHub", price_from: 200, url: "#" }]

export default function MercedesBenzStadiumPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-red-700 to-black py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-yellow-400 text-black">MBAPPÉ VS HAALAND</Badge>
            <Badge variant="outline" className="text-white border-white/50">USA</Badge>
          </div>
          <h1 className="text-5xl font-bold text-white">{venueInfo.name}</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />{venueInfo.city}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Capacity</p><p className="text-white font-bold text-xl">{venueInfo.capacity.toLocaleString()}</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Matches</p><p className="text-white font-bold text-xl">5 Games</p></div>
            <div className="bg-white/10 rounded-lg px-4 py-2"><p className="text-white/70 text-sm">Highlight</p><p className="text-white font-bold text-xl flex items-center gap-1"><Star className="h-5 w-5" />France-Norway</p></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2"><Star className="h-6 w-6 text-yellow-600" /><h3 className="font-bold text-xl text-yellow-900">France vs Norway</h3></div>
                <p className="text-yellow-800">The match everyone wants to see! Kylian Mbappé faces Erling Haaland in Atlanta. Two of football's biggest superstars collide in what could be the most anticipated group stage match of the tournament.</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="h-6 w-6" />Scheduled Matches</h2>
              <div className="space-y-3">
                {scheduledMatches.map((m, i) => (
                  <Card key={i} className={m.featured ? "border-2 border-yellow-400" : ""}>
                    <CardContent className="p-4">
                      <Link href={`/fixtures/${m.slug}`} className="flex items-center justify-between">
                        <div>
                          {m.label && <Badge className="bg-yellow-400 text-black mb-1">{m.label}</Badge>}
                          <div className="flex items-center gap-2 mb-1"><Badge variant="outline">{m.round}</Badge><span className="text-sm text-slate-500">{m.date}</span></div>
                          <p className="font-bold text-lg">{m.match}</p>
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
              <h2 className="text-2xl font-bold text-slate-900">Mercedes-Benz Stadium: Mbappé vs Haaland Comes to Atlanta</h2>
              <p>
                When <Link href="/teams/france-world-cup-2026-tickets" className="text-red-600 hover:underline">France</Link> faces
                <Link href="/teams/norway-world-cup-2026-tickets" className="text-red-600 hover:underline">Norway</Link> at
                Mercedes-Benz Stadium on June 15, 2026, the world will witness the most anticipated group stage match
                of the entire tournament. Kylian Mbappé - the fastest player on Earth - against Erling Haaland - the
                most prolific goalscorer of his generation. Atlanta&apos;s stunning stadium provides the perfect stage for
                football&apos;s generational showdown.
              </p>
              <p>
                Mercedes-Benz Stadium represents the future of football venues. The eight-panel retractable roof,
                inspired by the Roman Pantheon, opens like a camera aperture. The 360-degree halo video board - the
                world&apos;s largest - wraps around the interior. This is where Atlanta United proved America&apos;s soccer
                passion, regularly filling 70,000 seats. The World Cup elevates this already electric atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">France vs Norway: The Superstar Clash</h3>
              <p>
                This Group I fixture transcends normal group stage significance. <Link href="/teams/france-world-cup-2026-tickets" className="text-red-600 hover:underline">Kylian Mbappé</Link> at
                27 enters his absolute peak - the 2022 World Cup hat-trick hero now captains Les Bleus as the world&apos;s
                best player. <Link href="/teams/norway-world-cup-2026-tickets" className="text-red-600 hover:underline">Erling Haaland</Link> at
                25 has shattered every Premier League scoring record and seeks World Cup glory. These two titans
                colliding in Atlanta creates must-watch drama.
              </p>
              <p>
                The supporting casts amplify the spectacle. France brings Ousmane Dembélé, Aurélien Tchouaméni, and
                William Saliba from their endless talent pool. Norway pairs Haaland with Martin Ødegaard&apos;s Arsenal
                midfield genius. Atlanta&apos;s 71,000 fans will witness elite football from opening whistle to final horn.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Atlanta: America&apos;s Soccer City</h3>
              <p>
                Atlanta United&apos;s 2018 MLS Cup championship in front of 73,000 fans proved Atlanta embraces football.
                The Five Stripes regularly outdraw every other MLS franchise, and the passionate supporter groups -
                Terminus Legion, Footie Mob, Resurgence - create atmospheres rivaling European ultras. This existing
                football culture ensures World Cup matches at Mercedes-Benz Stadium deliver authentic passion.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Stadium Experience: The Halo Effect</h3>
              <p>
                The 360-degree halo video board measures 63,800 square feet - visible from every seat in the stadium.
                Replays, statistics, and fan engagement reach unprecedented heights under this technological marvel.
                The retractable roof opens in 8 minutes, allowing natural light to flood the pitch when conditions permit.
              </p>
              <p>
                Fan-friendly pricing on concessions has made Mercedes-Benz Stadium famous nationwide. $2 hot dogs and
                $3 sodas ensure families can afford the complete matchday experience. This commitment to accessibility
                reflects Atlanta&apos;s welcoming culture for World Cup visitors from across the globe.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Atlanta Experience: Southern Football Culture</h3>
              <p>
                Atlanta offers world-class entertainment beyond the stadium. The
                <Link href="/cities/atlanta-world-cup-2026-travel-guide" className="text-red-600 hover:underline">Atlanta travel guide</Link> covers
                everything from the Georgia Aquarium to the Martin Luther King Jr. historic sites, from Ponce City
                Market food halls to the BeltLine urban trail.
              </p>
              <p>
                Combine Mercedes-Benz Stadium matches with fixtures at
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Hard Rock Stadium in Miami</Link> for
                the Southeast World Cup experience. Direct flights connect Atlanta to every US venue city, making the
                city an ideal World Cup base.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle>About Mercedes-Benz Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">Mercedes-Benz Stadium features a unique eight-panel retractable roof designed to mimic the Roman Pantheon. Home to Atlanta United (MLS) and the Atlanta Falcons (NFL).</p>
                <p className="text-slate-600">The stadium&apos;s 360-degree LED halo video board is the largest in the world. Atlanta United regularly draws 70,000+ fans, proving Atlanta is a true soccer city.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Train className="h-5 w-5" />Getting There</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3"><Train className="h-5 w-5 text-blue-600 mt-1" /><div><p className="font-medium">MARTA Rail</p><p className="text-sm text-slate-500">Vine City or GWCC/CNN Center stations are steps from the stadium.</p></div></div>
                <div className="flex items-start gap-3"><Car className="h-5 w-5 text-green-600 mt-1" /><div><p className="font-medium">By Car</p><p className="text-sm text-slate-500">Downtown Atlanta location with multiple parking options.</p></div></div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-500">Capacity</span><span className="font-medium">{venueInfo.capacity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Opened</span><span className="font-medium">2017</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Home Teams</span><span className="font-medium">Atlanta United, Falcons</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
