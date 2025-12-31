import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Group L Fixtures & Tickets | FIFA World Cup 2026",
  description: "Buy tickets for all Group L matches at World Cup 2026. England, Croatia, Ghana, and Panama compete.",
  keywords: ["Group L World Cup 2026", "England World Cup tickets", "Croatia World Cup tickets", "World Cup 2026 fixtures"]
}

const groupTeams = [
  { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", slug: "england-world-cup-2026-tickets" },
  { name: "Croatia", flag: "🇭🇷", slug: "croatia-world-cup-2026-tickets", tag: "2018 Finalists" },
  { name: "Ghana", flag: "🇬🇭", slug: "ghana-world-cup-2026-tickets" },
  { name: "Panama", flag: "🇵🇦", slug: "panama-world-cup-2026-tickets" },
]

const fixtures = [
  { match: "England vs Croatia", team1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", team2: "🇭🇷", date: "June 13, 2026", time: "8:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "england-vs-croatia-world-cup-2026-tickets", featured: true, label: "2018 SEMI-FINAL REMATCH" },
  { match: "Ghana vs Panama", team1: "🇬🇭", team2: "🇵🇦", date: "June 13, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "ghana-vs-panama-world-cup-2026-tickets" },
  { match: "England vs Ghana", team1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", team2: "🇬🇭", date: "June 18, 2026", time: "8:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "england-vs-ghana-world-cup-2026-tickets", featured: true },
  { match: "Croatia vs Panama", team1: "🇭🇷", team2: "🇵🇦", date: "June 18, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "croatia-vs-panama-world-cup-2026-tickets" },
  { match: "England vs Panama", team1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", team2: "🇵🇦", date: "June 23, 2026", time: "5:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "england-vs-panama-world-cup-2026-tickets" },
  { match: "Croatia vs Ghana", team1: "🇭🇷", team2: "🇬🇭", date: "June 23, 2026", time: "5:00 PM ET", venue: "Gillette Stadium", city: "Boston", slug: "croatia-vs-ghana-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 135, url: "#" }, { partner: "StubHub", price_from: 185, url: "#" }]

export default function GroupLPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-white via-red-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-white text-red-900 mb-4">FIFA WORLD CUP 2026</Badge>
          <h1 className="text-5xl font-bold text-slate-900">Group L</h1>
          <p className="mt-4 text-xl text-slate-700">England vs Croatia rematch! The 2018 semi-final rivals meet again. Plus Ghana and Panama!</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {groupTeams.map((team) => (
              <Link key={team.name} href={`/teams/${team.slug}`}>
                <Badge variant="secondary" className="text-lg py-2 px-4 hover:bg-white">
                  {team.flag} {team.name} {team.tag && <span className="ml-1 text-xs text-red-600">({team.tag})</span>}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-red-600" />
                  <h3 className="font-bold text-red-900">England vs Croatia</h3>
                </div>
                <p className="text-sm text-red-800">The 2018 World Cup semi-final rematch! England's heartbreak in Russia still stings. Bellingham leads the Three Lions' quest for revenge against Modrić's Croatia.</p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6" /> All Group L Fixtures
            </h2>

            <div className="space-y-4">
              {fixtures.map((f, i) => (
                <Card key={i} className={f.featured ? "border-2 border-red-400" : ""}>
                  <CardContent className="p-0">
                    <Link href={`/fixtures/${f.slug}`}>
                      <div className="p-4 hover:bg-slate-50 transition-colors">
                        {f.label && <Badge className="mb-2 bg-red-600 text-white">{f.label}</Badge>}
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
                  <Ticket className="h-5 w-5" /> Buy Group L Tickets
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
                <CardTitle>Group L Teams</CardTitle>
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
                    <Button variant={g === "L" ? "default" : "outline"} size="sm" className="w-full">{g}</Button>
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
