import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Italy World Cup 2026 Tickets | 4x World Champions Return",
  description: "Buy Italy FIFA World Cup 2026 tickets. Watch the Azzurri return after missing 2022. Match schedule, key players & ticket prices from $130.",
  keywords: ["Italy World Cup 2026 tickets", "Azzurri World Cup", "Italy football tickets", "Gli Azzurri"],
}

const teamInfo = {
  name: "Italy",
  flag: "🇮🇹",
  confederation: "UEFA",
  fifaRanking: 9,
  worldCupTitles: 4,
  lastTitle: 2006,
  group: "TBD (UEFA Playoff)",
  nickname: "Gli Azzurri",
  coach: "Luciano Spalletti",
  captain: "Gianluigi Donnarumma",
}

const keyPlayers = [
  { name: "Gianluigi Donnarumma", position: "Goalkeeper", club: "PSG", number: 1, star: true },
  { name: "Nicolò Barella", position: "Midfielder", club: "Inter Milan", number: 18 },
  { name: "Federico Chiesa", position: "Forward", club: "Liverpool", number: 14 },
  { name: "Riccardo Calafiori", position: "Defender", club: "Arsenal", number: 5 },
  { name: "Sandro Tonali", position: "Midfielder", club: "Newcastle", number: 8 },
  { name: "Gianluca Scamacca", position: "Forward", club: "Atalanta", number: 9 },
]

const worldCupHistory = [
  { year: 2022, result: "Did Not Qualify", location: "Qatar" },
  { year: 2018, result: "Did Not Qualify", location: "Russia" },
  { year: 2014, result: "Group Stage", location: "Brazil" },
  { year: 2006, result: "Champions", location: "Germany" },
  { year: 2002, result: "Round of 16", location: "Korea/Japan" },
  { year: 1994, result: "Runners-up", location: "USA" },
  { year: 1982, result: "Champions", location: "Spain" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 130, logo: "🎫", url: "#" },
  { partner: "StubHub", price_from: 170, logo: "🎟️", url: "#" },
  { partner: "Viagogo", price_from: 155, logo: "🎫", url: "#" },
  { partner: "SeatGeek", price_from: 145, logo: "🎟️", url: "#" },
]

export default function ItalyTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-blue-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-blue-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Italy</span>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-blue-700 text-white">4X WORLD CHAMPIONS</Badge>
                <Badge className="bg-green-600 text-white">EURO 2020 CHAMPIONS</Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">{teamInfo.name}</h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-slate-800">
                The Azzurri return after the heartbreak of missing two consecutive World Cups.
                Four-time champions Italy are determined to reclaim their place among the elite.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Ticket className="mr-2 h-5 w-5" />Buy Italy Tickets
                </Button>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-3xl font-bold text-blue-700">#{teamInfo.fifaRanking}</p><p className="text-sm text-slate-600">FIFA Ranking</p></div>
                <div><p className="text-3xl font-bold text-blue-700">4</p><p className="text-sm text-slate-600">World Cup Titles</p></div>
                <div><p className="text-3xl font-bold text-blue-700">2006</p><p className="text-sm text-slate-600">Last Title</p></div>
                <div><p className="text-3xl font-bold text-blue-700">2020</p><p className="text-sm text-slate-600">Euro Champions</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-blue-900">Italy&apos;s Return</h3>
                <p className="text-sm text-blue-800 mt-2">
                  After the shock of missing the 2018 and 2022 World Cups, Italy qualified for 2026 determined
                  to restore their reputation. The Euro 2020 champions have rebuilt with a mix of experience and youth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-blue-700" />Key Players to Watch</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">{player.number}</div>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-blue-700" />World Cup History</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${entry.result === "Champions" ? "bg-yellow-50 border border-yellow-200" : entry.result === "Did Not Qualify" ? "bg-red-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className={entry.result === "Champions" ? "bg-yellow-500" : entry.result === "Did Not Qualify" ? "bg-red-400" : "bg-slate-200 text-slate-700"}>
                        {entry.result === "Champions" && "🏆 "}{entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5 text-blue-700" />Buy Italy Tickets</CardTitle></CardHeader>
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
                <div className="pt-4 border-t"><div className="flex items-center gap-2 text-yellow-600 text-sm"><TrendingUp className="h-4 w-4" /><span>Italy fans eager for WC return!</span></div></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Team Info</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-slate-600">Confederation</span><span className="font-medium">{teamInfo.confederation}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">FIFA Ranking</span><span className="font-medium">#{teamInfo.fifaRanking}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Coach</span><span className="font-medium">{teamInfo.coach}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">WC Titles</span><span className="font-medium">4 (1934, 38, 82, 2006)</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
