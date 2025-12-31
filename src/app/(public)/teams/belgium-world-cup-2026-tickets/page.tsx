import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Belgium World Cup 2026 Tickets | Red Devils",
  description: "Buy Belgium FIFA World Cup 2026 tickets. Watch the Red Devils compete in Group G. De Bruyne, match schedule & ticket prices from $125.",
  keywords: ["Belgium World Cup 2026 tickets", "Red Devils World Cup", "De Bruyne World Cup", "Belgium football tickets"],
}

const teamInfo = {
  name: "Belgium",
  flag: "🇧🇪",
  confederation: "UEFA",
  fifaRanking: 8,
  worldCupTitles: 0,
  bestFinish: "Third Place (2018)",
  group: "G",
  groupOpponents: ["Egypt", "Iran", "New Zealand"],
  nickname: "Red Devils",
  coach: "Domenico Tedesco",
  captain: "Kevin De Bruyne",
}

const keyPlayers = [
  { name: "Kevin De Bruyne", position: "Midfielder", club: "Manchester City", number: 7, star: true },
  { name: "Romelu Lukaku", position: "Forward", club: "Roma", number: 9 },
  { name: "Jérémy Doku", position: "Forward", club: "Manchester City", number: 11 },
  { name: "Amadou Onana", position: "Midfielder", club: "Everton", number: 8 },
  { name: "Thibaut Courtois", position: "Goalkeeper", club: "Real Madrid", number: 1 },
  { name: "Arthur Theate", position: "Defender", club: "Rennes", number: 3 },
]

const groupFixtures = [
  { match: "Belgium vs Egypt", date: "June 12, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "belgium-vs-egypt-world-cup-2026-tickets" },
  { match: "Belgium vs Iran", date: "June 17, 2026", time: "5:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "belgium-vs-iran-world-cup-2026-tickets" },
  { match: "Belgium vs New Zealand", date: "June 22, 2026", time: "2:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "belgium-vs-new-zealand-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 2018, result: "Third Place", location: "Russia" },
  { year: 2014, result: "Quarter-finals", location: "Brazil" },
  { year: 2002, result: "Round of 16", location: "Korea/Japan" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 125, logo: "🎫", url: "#" },
  { partner: "StubHub", price_from: 160, logo: "🎟️", url: "#" },
  { partner: "Viagogo", price_from: 145, logo: "🎫", url: "#" },
  { partner: "SeatGeek", price_from: 135, logo: "🎟️", url: "#" },
]

export default function BelgiumTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-yellow-400 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-white">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Belgium</span>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-500 text-black">2018 THIRD PLACE</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP G</Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-white">{teamInfo.name}</h1>
                  <p className="text-xl text-slate-200 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-slate-200">
                The golden generation&apos;s last chance? Belgium&apos;s talented squad including Kevin De Bruyne
                seeks to finally convert their potential into World Cup glory.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Ticket className="mr-2 h-5 w-5" />Buy Belgium Tickets
                </Button>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-3xl font-bold text-red-600">#{teamInfo.fifaRanking}</p><p className="text-sm text-slate-600">FIFA Ranking</p></div>
                <div><p className="text-3xl font-bold text-red-600">3rd</p><p className="text-sm text-slate-600">Best Finish (2018)</p></div>
                <div><p className="text-3xl font-bold text-red-600">0</p><p className="text-sm text-slate-600">World Cup Titles</p></div>
                <div><p className="text-3xl font-bold text-red-600">Group {teamInfo.group}</p><p className="text-sm text-slate-600">WC 2026 Group</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-red-600" />Group G Match Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-slate-900">{fixture.date}</p>
                          <p className="text-xs text-slate-500">{fixture.time}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{fixture.match}</p>
                          <div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{fixture.venue}, {fixture.city}</div>
                        </div>
                      </div>
                      <Button size="sm">Get Tickets<ChevronRight className="ml-1 h-4 w-4" /></Button>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-red-600" />Key Players to Watch</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">{player.number}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-900">{player.name}</p>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position}</p>
                          <p className="text-xs text-slate-400">{player.club}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-red-600" />World Cup History</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${entry.result === "Third Place" ? "bg-yellow-50 border border-yellow-200" : entry.result === "Group Stage" ? "bg-red-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className={entry.result === "Third Place" ? "bg-yellow-500" : entry.result === "Group Stage" ? "bg-red-400" : "bg-slate-200 text-slate-700"}>{entry.result}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5 text-red-600" />Buy Belgium Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div><p className="font-medium text-slate-900">{link.partner}</p><p className="text-sm text-green-600">From ${link.price_from}</p></div>
                    </div>
                    <Button size="sm" asChild><a href={link.url} target="_blank" rel="noopener noreferrer">Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
                <div className="pt-4 border-t"><div className="flex items-center gap-2 text-yellow-600 text-sm"><TrendingUp className="h-4 w-4" /><span>De Bruyne matches in demand!</span></div></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Group G Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/belgium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium"><span>🇧🇪</span> Belgium</Link>
                <Link href="/teams/egypt-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇬</span> Egypt</Link>
                <Link href="/teams/iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇮🇷</span> Iran</Link>
                <Link href="/teams/new-zealand-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇿</span> New Zealand</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
