import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Group J Fixtures & Tickets | FIFA World Cup 2026",
  description: "Buy tickets for all Group J matches at World Cup 2026. Argentina, Portugal, and Italy compete. Messi vs Ronaldo!",
  keywords: ["Group J World Cup 2026", "Argentina World Cup tickets", "Portugal World Cup tickets", "Messi Ronaldo"]
}

const groupTeams = [
  { name: "Argentina", flag: "🇦🇷", slug: "argentina-world-cup-2026-tickets", tag: "Defending Champions" },
  { name: "Portugal", flag: "🇵🇹", slug: "portugal-world-cup-2026-tickets" },
  { name: "Italy", flag: "🇮🇹", slug: "italy-world-cup-2026-tickets", tag: "4x Champions" },
  { name: "TBD", flag: "🏳️", slug: "#" },
]

const fixtures = [
  { match: "Argentina vs Portugal", team1: "🇦🇷", team2: "🇵🇹", date: "June 16, 2026", time: "8:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "argentina-vs-portugal-world-cup-2026-tickets", featured: true, label: "MESSI vs RONALDO" },
  { match: "Italy vs TBD", team1: "🇮🇹", team2: "🏳️", date: "June 16, 2026", time: "2:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "italy-group-match-1-world-cup-2026-tickets" },
  { match: "Argentina vs Italy", team1: "🇦🇷", team2: "🇮🇹", date: "June 21, 2026", time: "8:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "argentina-vs-italy-world-cup-2026-tickets", featured: true },
  { match: "Portugal vs TBD", team1: "🇵🇹", team2: "🏳️", date: "June 21, 2026", time: "2:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "portugal-group-match-2-world-cup-2026-tickets" },
  { match: "Argentina vs TBD", team1: "🇦🇷", team2: "🏳️", date: "June 26, 2026", time: "5:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "argentina-group-match-3-world-cup-2026-tickets" },
  { match: "Portugal vs Italy", team1: "🇵🇹", team2: "🇮🇹", date: "June 26, 2026", time: "5:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "portugal-vs-italy-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 350, url: "#" }, { partner: "StubHub", price_from: 500, url: "#" }]

export default function GroupJPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-sky-400 via-white to-green-600 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-yellow-400 text-black mb-4">THE ULTIMATE GROUP</Badge>
          <h1 className="text-5xl font-bold text-slate-900">Group J</h1>
          <p className="mt-4 text-xl text-slate-700">The dream group! Messi's Argentina vs Ronaldo's Portugal. Plus Italy! Pure football royalty.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {groupTeams.map((team) => (
              <Link key={team.name} href={`/teams/${team.slug}`}>
                <Badge variant="secondary" className="text-lg py-2 px-4 hover:bg-white">
                  {team.flag} {team.name} {team.tag && <span className="ml-1 text-xs text-sky-600">({team.tag})</span>}
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
                  <h3 className="font-bold text-yellow-900">Argentina vs Portugal</h3>
                </div>
                <p className="text-sm text-yellow-800">The greatest rivalry in football history - possibly the final meeting of Lionel Messi and Cristiano Ronaldo at a World Cup. Don't miss this historic moment!</p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6" /> All Group J Fixtures
            </h2>

            <div className="space-y-4">
              {fixtures.map((f, i) => (
                <Card key={i} className={f.featured ? "border-2 border-yellow-400" : ""}>
                  <CardContent className="p-0">
                    <Link href={`/fixtures/${f.slug}`}>
                      <div className="p-4 hover:bg-slate-50 transition-colors">
                        {f.label && <Badge className="mb-2 bg-yellow-400 text-black">{f.label}</Badge>}
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
                  <Ticket className="h-5 w-5" /> Buy Group J Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">Highest demand group - prices may vary!</p>
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
                <CardTitle>Group J Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {groupTeams.map((team) => (
                  <Link key={team.name} href={`/teams/${team.slug}`} className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                    <span className="text-2xl">{team.flag}</span>
                    <span>{team.name}</span>
                    {team.tag && <Badge className="ml-auto text-xs">{team.tag}</Badge>}
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
                    <Button variant={g === "J" ? "default" : "outline"} size="sm" className="w-full">{g}</Button>
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
