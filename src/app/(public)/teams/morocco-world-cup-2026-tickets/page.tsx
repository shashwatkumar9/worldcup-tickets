import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Morocco World Cup 2026 Tickets | 2022 Semi-Finalists",
  description: "Buy Morocco FIFA World Cup 2026 tickets. Watch the Atlas Lions who made history in 2022 compete in Group C. Match schedule & ticket prices.",
  keywords: ["Morocco World Cup 2026 tickets", "Atlas Lions World Cup", "Morocco vs Brazil tickets", "Morocco football tickets"],
}

const teamInfo = {
  name: "Morocco",
  flag: "🇲🇦",
  confederation: "CAF",
  fifaRanking: 13,
  worldCupTitles: 0,
  bestFinish: "Fourth Place (2022)",
  group: "C",
  groupOpponents: ["Brazil", "Haiti", "Scotland"],
  nickname: "Atlas Lions",
  coach: "Walid Regragui",
  captain: "Achraf Hakimi",
}

const keyPlayers = [
  { name: "Achraf Hakimi", position: "Defender", club: "PSG", number: 2, star: true },
  { name: "Hakim Ziyech", position: "Midfielder", club: "Galatasaray", number: 7 },
  { name: "Sofyan Amrabat", position: "Midfielder", club: "Manchester United", number: 4 },
  { name: "Yassine Bounou", position: "Goalkeeper", club: "Al-Hilal", number: 1 },
  { name: "Azzedine Ounahi", position: "Midfielder", club: "Marseille", number: 8 },
  { name: "Youssef En-Nesyri", position: "Forward", club: "Sevilla", number: 9 },
]

const groupFixtures = [
  { match: "Brazil vs Morocco", date: "June 13, 2026", time: "8:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "brazil-vs-morocco-world-cup-2026-tickets", highlight: true },
  { match: "Morocco vs Haiti", date: "June 18, 2026", time: "2:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "morocco-vs-haiti-world-cup-2026-tickets" },
  { match: "Morocco vs Scotland", date: "June 23, 2026", time: "5:00 PM ET", venue: "Gillette Stadium", city: "Boston", slug: "morocco-vs-scotland-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2022, result: "Fourth Place", location: "Qatar" },
  { year: 2018, result: "Group Stage", location: "Russia" },
  { year: 1998, result: "Group Stage", location: "France" },
  { year: 1994, result: "Group Stage", location: "USA" },
  { year: 1986, result: "Round of 16", location: "Mexico" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 125, logo: "🎫", url: "#" },
  { partner: "StubHub", price_from: 165, logo: "🎟️", url: "#" },
  { partner: "Viagogo", price_from: 150, logo: "🎫", url: "#" },
  { partner: "SeatGeek", price_from: 140, logo: "🎟️", url: "#" },
]

export default function MoroccoTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-green-700 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-white">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Morocco</span>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-500 text-black">2022 SEMI-FINALISTS</Badge>
                <Badge className="bg-green-700 text-white">AFRICAN HISTORY MAKERS</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP C</Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-white">{teamInfo.name}</h1>
                  <p className="text-xl text-slate-200 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-slate-200">
                The team that captured hearts in 2022 by becoming the first African nation to reach
                a World Cup semi-final. Morocco are back to prove it was no fluke.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-700 hover:bg-green-800">
                  <Ticket className="mr-2 h-5 w-5" />Buy Morocco Tickets
                </Button>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-3xl font-bold text-green-700">#{teamInfo.fifaRanking}</p><p className="text-sm text-slate-600">FIFA Ranking</p></div>
                <div><p className="text-3xl font-bold text-green-700">4th</p><p className="text-sm text-slate-600">Best Finish (2022)</p></div>
                <div><p className="text-3xl font-bold text-green-700">1st</p><p className="text-sm text-slate-600">African Semi-Finalist</p></div>
                <div><p className="text-3xl font-bold text-green-700">Group {teamInfo.group}</p><p className="text-sm text-slate-600">WC 2026 Group</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-yellow-900">The Group C Blockbuster</h3>
                <p className="text-sm text-yellow-800 mt-2">
                  Morocco vs Brazil on June 13 in Philadelphia will be one of the most anticipated group stage matches.
                  Two attacking teams with passionate fanbases - expect an incredible atmosphere!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-green-700" />Group C Match Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className={`flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors ${fixture.highlight ? "border-yellow-400 bg-yellow-50" : ""}`}>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-green-700" />Key Players to Watch</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">{player.number}</div>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-green-700" />World Cup History</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${entry.result === "Fourth Place" ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className={entry.result === "Fourth Place" ? "bg-yellow-500" : "bg-slate-200 text-slate-700"}>{entry.result}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5 text-green-700" />Buy Morocco Tickets</CardTitle></CardHeader>
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
                <div className="pt-4 border-t"><div className="flex items-center gap-2 text-yellow-600 text-sm"><TrendingUp className="h-4 w-4" /><span>Brazil vs Morocco selling fast!</span></div></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Group C Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇷</span> Brazil<Badge className="ml-auto bg-yellow-500 text-xs">5x Champs</Badge></Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-green-50 font-medium"><span>🇲🇦</span> Morocco</Link>
                <Link href="/teams/haiti-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇭🇹</span> Haiti</Link>
                <Link href="/teams/scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Scotland</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
