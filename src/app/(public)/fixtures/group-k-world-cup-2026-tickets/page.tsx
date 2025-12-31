import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Group K Fixtures & Tickets | FIFA World Cup 2026",
  description: "Buy tickets for all Group K matches at World Cup 2026. Portugal, Colombia, and others compete.",
  keywords: ["Group K World Cup 2026", "World Cup 2026 fixtures", "World Cup tickets"]
}

const groupTeams = [
  { name: "Portugal", flag: "🇵🇹", slug: "portugal-world-cup-2026-tickets" },
  { name: "Colombia", flag: "🇨🇴", slug: "colombia-world-cup-2026-tickets" },
  { name: "TBD", flag: "🏳️", slug: "#" },
  { name: "TBD", flag: "🏳️", slug: "#" },
]

const fixtures = [
  { match: "Portugal vs Colombia", team1: "🇵🇹", team2: "🇨🇴", date: "June 16, 2026", time: "5:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "portugal-vs-colombia-world-cup-2026-tickets", featured: true },
  { match: "TBD vs TBD", team1: "🏳️", team2: "🏳️", date: "June 16, 2026", time: "2:00 PM ET", venue: "NRG Stadium", city: "Houston", slug: "group-k-match-1-world-cup-2026-tickets" },
  { match: "Portugal vs TBD", team1: "🇵🇹", team2: "🏳️", date: "June 21, 2026", time: "5:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "portugal-group-k-match-2-world-cup-2026-tickets" },
  { match: "Colombia vs TBD", team1: "🇨🇴", team2: "🏳️", date: "June 21, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "colombia-group-k-match-2-world-cup-2026-tickets" },
  { match: "Portugal vs TBD", team1: "🇵🇹", team2: "🏳️", date: "June 26, 2026", time: "2:00 PM ET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "portugal-group-k-match-3-world-cup-2026-tickets" },
  { match: "Colombia vs TBD", team1: "🇨🇴", team2: "🏳️", date: "June 26, 2026", time: "2:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "colombia-group-k-match-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 120, url: "#" }, { partner: "StubHub", price_from: 165, url: "#" }]

export default function GroupKPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-red-600 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-white text-green-900 mb-4">FIFA WORLD CUP 2026</Badge>
          <h1 className="text-5xl font-bold text-white">Group K</h1>
          <p className="mt-4 text-xl text-white/90">Portugal and Colombia bring South American flair meets European class!</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {groupTeams.map((team, i) => (
              <Link key={i} href={`/teams/${team.slug}`}>
                <Badge variant="secondary" className="text-lg py-2 px-4 hover:bg-white">
                  {team.flag} {team.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-bold text-yellow-900">Portugal vs Colombia</h3>
                </div>
                <p className="text-sm text-yellow-800">Cristiano Ronaldo faces Luis Diaz! Two attacking powerhouses clash in what promises to be a goal-fest.</p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6" /> All Group K Fixtures
            </h2>

            <div className="space-y-4">
              {fixtures.map((f, i) => (
                <Card key={i} className={f.featured ? "border-2 border-yellow-400" : ""}>
                  <CardContent className="p-0">
                    <Link href={`/fixtures/${f.slug}`}>
                      <div className="p-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <p className="text-sm font-medium text-slate-900">{f.date}</p>
                              <p className="text-xs text-slate-500 flex items-center gap-1"><Clock className="h-3 w-3" />{f.time}</p>
                            </div>
                            <div>
                              <p className="font-bold text-lg flex items-center gap-2">
                                <span className="text-2xl">{f.team1}</span>
                                vs
                                <span className="text-2xl">{f.team2}</span>
                              </p>
                              <div className="flex items-center gap-1 text-sm text-slate-500">
                                <MapPin className="h-3 w-3" />{f.venue}, {f.city}
                              </div>
                            </div>
                          </div>
                          <Button>Get Tickets</Button>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5" /> Buy Group K Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((l) => (
                  <div key={l.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">{l.partner}</p>
                      <p className="text-sm text-green-600">From ${l.price_from}</p>
                    </div>
                    <Button size="sm" asChild>
                      <a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group K Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {groupTeams.map((team, i) => (
                  <Link key={i} href={`/teams/${team.slug}`} className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                    <span className="text-2xl">{team.flag}</span>
                    <span>{team.name}</span>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Groups</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-4 gap-2">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((g) => (
                  <Link key={g} href={`/fixtures/group-${g.toLowerCase()}-world-cup-2026-tickets`}>
                    <Button variant={g === "K" ? "default" : "outline"} size="sm" className="w-full">{g}</Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
