import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Croatia World Cup 2026 Tickets | 2018 Finalists",
  description: "Buy Croatia FIFA World Cup 2026 tickets. Watch Modrić lead the Vatreni in Group L. Match schedule & ticket prices from $120.",
  keywords: ["Croatia World Cup 2026 tickets", "Vatreni World Cup", "Modrić World Cup", "Croatia football tickets"],
}

const teamInfo = {
  name: "Croatia",
  flag: "🇭🇷",
  confederation: "UEFA",
  fifaRanking: 10,
  worldCupTitles: 0,
  bestFinish: "Runners-up (2018)",
  group: "L",
  groupOpponents: ["England", "Ghana", "Panama"],
  nickname: "Vatreni (The Blazers)",
  coach: "Zlatko Dalić",
  captain: "Luka Modrić",
}

const keyPlayers = [
  { name: "Luka Modrić", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Mateo Kovačić", position: "Midfielder", club: "Manchester City", number: 8 },
  { name: "Joško Gvardiol", position: "Defender", club: "Manchester City", number: 4 },
  { name: "Dominik Livaković", position: "Goalkeeper", club: "Fenerbahçe", number: 1 },
  { name: "Ivan Perišić", position: "Forward", club: "Tottenham", number: 4 },
  { name: "Andrej Kramarić", position: "Forward", club: "Hoffenheim", number: 9 },
]

const groupFixtures = [
  { match: "Croatia vs Panama", date: "June 13, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "croatia-vs-panama-world-cup-2026-tickets" },
  { match: "Croatia vs Ghana", date: "June 18, 2026", time: "5:00 PM ET", venue: "Gillette Stadium", city: "Boston", slug: "croatia-vs-ghana-world-cup-2026-tickets" },
  { match: "England vs Croatia", date: "June 23, 2026", time: "5:00 PM ET", venue: "AT&T Stadium", city: "Dallas", slug: "england-vs-croatia-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2022, result: "Third Place", location: "Qatar" },
  { year: 2018, result: "Runners-up", location: "Russia" },
  { year: 2014, result: "Group Stage", location: "Brazil" },
  { year: 2006, result: "Group Stage", location: "Germany" },
  { year: 2002, result: "Group Stage", location: "Korea/Japan" },
  { year: 1998, result: "Third Place", location: "France" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 120, logo: "🎫", url: "#" },
  { partner: "StubHub", price_from: 155, logo: "🎟️", url: "#" },
  { partner: "Viagogo", price_from: 140, logo: "🎫", url: "#" },
  { partner: "SeatGeek", price_from: 130, logo: "🎟️", url: "#" },
]

export default function CroatiaTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-red-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-red-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-red-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Croatia</span>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-red-600 text-white">2018 FINALISTS</Badge>
                <Badge className="bg-yellow-500 text-black">2022 THIRD PLACE</Badge>
                <Badge variant="outline" className="border-blue-700 text-blue-800">GROUP L</Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">{teamInfo.name}</h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-slate-800">
                The 2018 finalists and 2022 third-place team. With Luka Modrić potentially in his final World Cup,
                the Vatreni are determined to go one step further.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Ticket className="mr-2 h-5 w-5" />Buy Croatia Tickets
                </Button>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-3xl font-bold text-red-600">#{teamInfo.fifaRanking}</p><p className="text-sm text-slate-600">FIFA Ranking</p></div>
                <div><p className="text-3xl font-bold text-red-600">2nd</p><p className="text-sm text-slate-600">Best Finish (2018)</p></div>
                <div><p className="text-3xl font-bold text-red-600">2</p><p className="text-sm text-slate-600">WC Medals</p></div>
                <div><p className="text-3xl font-bold text-red-600">Group {teamInfo.group}</p><p className="text-sm text-slate-600">WC 2026 Group</p></div>
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
                <h3 className="font-bold text-yellow-900">Modrić&apos;s Final Dance?</h3>
                <p className="text-sm text-yellow-800 mt-2">
                  At 40, Luka Modrić will likely play his final World Cup in 2026. The 2018 Ballon d&apos;Or winner
                  and Croatia&apos;s greatest ever player seeks to cap his legendary career with World Cup glory.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-red-600" />Group L Match Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className={`flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors ${fixture.match.includes("England") ? "border-yellow-400 bg-yellow-50" : ""}`}>
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
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${entry.result === "Runners-up" || entry.result === "Third Place" ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className={entry.result === "Runners-up" ? "bg-slate-400" : entry.result === "Third Place" ? "bg-yellow-500" : "bg-slate-200 text-slate-700"}>{entry.result}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5 text-red-600" />Buy Croatia Tickets</CardTitle></CardHeader>
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
                <div className="pt-4 border-t"><div className="flex items-center gap-2 text-yellow-600 text-sm"><TrendingUp className="h-4 w-4" /><span>England vs Croatia in high demand!</span></div></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Group L Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
                <Link href="/teams/ghana-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇬🇭</span> Ghana</Link>
                <Link href="/teams/panama-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇦</span> Panama</Link>
                <Link href="/teams/croatia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium"><span>🇭🇷</span> Croatia<Badge className="ml-auto bg-slate-400 text-xs">2018 Finalists</Badge></Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
