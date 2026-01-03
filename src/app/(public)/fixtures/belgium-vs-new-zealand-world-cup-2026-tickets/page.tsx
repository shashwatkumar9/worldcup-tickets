import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Belgium vs New Zealand Tickets | World Cup 2026 Group G | Red Devils vs All Whites",
  description: "Buy Belgium vs New Zealand World Cup 2026 tickets - Group G clash! Belgium's golden generation faces Oceania's All Whites. De Bruyne vs Chris Wood showdown.",
  keywords: ["Belgium vs New Zealand tickets", "World Cup 2026 Group G", "Belgium World Cup 2026", "New Zealand World Cup", "All Whites"],
}

const matchInfo = {
  homeTeam: { name: "Belgium", flag: "🇧🇪", code: "BEL", nickname: "Red Devils" },
  awayTeam: { name: "New Zealand", flag: "🇳🇿", code: "NZL", nickname: "All Whites" },
  date: "June 21, 2026",
  time: "2:00 PM ET",
  venue: "Levi's Stadium",
  city: "San Francisco Bay Area, California",
  group: "G",
  matchNumber: 35,
  round: "Group Stage - Matchday 2",
}

const belgiumPlayers = [
  { name: "Kevin De Bruyne", position: "Midfielder", club: "Manchester City", number: 7, star: true },
  { name: "Jérémy Doku", position: "Winger", club: "Manchester City", number: 11, star: true },
  { name: "Romelu Lukaku", position: "Forward", club: "Roma", number: 9 },
  { name: "Amadou Onana", position: "Midfielder", club: "Aston Villa", number: 8 },
]

const newZealandPlayers = [
  { name: "Chris Wood", position: "Forward", club: "Nottingham Forest", number: 9, star: true },
  { name: "Liberato Cacace", position: "Defender", club: "Empoli", number: 3, star: true },
  { name: "Joe Bell", position: "Midfielder", club: "Brondby", number: 8 },
  { name: "Sarpreet Singh", position: "Midfielder", club: "Bayern Munich II", number: 7 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 135, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 215, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 185, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 165, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2018, competition: "Friendly", result: "Belgium 1-0 New Zealand", location: "Brussels" },
]

export default function BelgiumVsNewZealandPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-400 to-black py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-g-world-cup-2026-tickets" className="hover:text-white">Group G</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Belgium vs New Zealand</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1">EUROPE vs OCEANIA</Badge>
              <Badge className="bg-white text-black">GROUP G</Badge>
            </div>
            <div className="flex items-center justify-center gap-8 my-8">
              <div className="text-center">
                <span className="text-8xl">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl font-bold text-white mt-2">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
              </div>
              <div className="text-4xl font-bold text-white">VS</div>
              <div className="text-center">
                <span className="text-8xl">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl font-bold text-white mt-2">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2"><Calendar className="h-5 w-5" />{matchInfo.date}</div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" />{matchInfo.time}</div>
              <div className="flex items-center gap-2"><MapPin className="h-5 w-5" />{matchInfo.venue}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">GOLDEN GENERATION MEETS THE ALL WHITES</h3>
                </div>
                <p className="text-red-800">Belgium&apos;s world-class squad faces New Zealand&apos;s battling All Whites in a Group G encounter. Kevin De Bruyne leads perhaps his final World Cup campaign against Chris Wood&apos;s Oceania qualifiers. The Red Devils seek to finally convert their talent into trophy success.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Belgium vs New Zealand: Red Devils Eye Knockout Berth</h2>
              <p>
                <Link href="/teams/belgium-world-cup-2026-tickets" className="text-red-600 hover:underline">Belgium</Link> faces <Link href="/teams/new-zealand-world-cup-2026-tickets" className="text-black hover:underline">New Zealand</Link> at <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Levi&apos;s Stadium in the San Francisco Bay Area</Link>. The Red Devils will be heavy favorites, but New Zealand&apos;s fighting spirit ensures nothing can be taken for granted.
              </p>
              <p>
                Belgium has consistently ranked among the world&apos;s best teams but lacks major tournament success. The golden generation of De Bruyne, Lukaku, and Courtois has reached World Cup semi-finals and quarter-finals without lifting a trophy. Time is running out for this exceptional group.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">De Bruyne&apos;s Brilliance</h3>
              <p>
                Kevin De Bruyne has won multiple Premier League titles with Manchester City and is considered the world&apos;s best midfielder. His vision, passing range, and leadership drive Belgium&apos;s attacking play. At 34, this could be his final World Cup - expect complete focus.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">All Whites Resilience</h3>
              <p>
                New Zealand&apos;s World Cup history includes a famous unbeaten run at South Africa 2010, drawing all three group games. Chris Wood gives them Premier League quality up front. The All Whites play without pressure - they&apos;re already achieving by qualifying from Oceania.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Silicon Valley Setting</h3>
              <p>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Levi&apos;s Stadium</Link> in Santa Clara provides a modern setting in the heart of Silicon Valley. The Bay Area&apos;s diverse international population includes Belgian expats in tech industries, while New Zealand&apos;s traveling supporters will add their unique Kiwi passion.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Matchday 2 Stakes</h3>
              <p>
                By matchday 2, both teams will know their Group G position. Belgium should have beaten Iran in their opener and will want to seal qualification. New Zealand will fight for any points possible, knowing every goal difference matters in the expanded format.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇧🇪</span> Belgium</h4>
                    <div className="space-y-2">
                      {belgiumPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-red-50 border border-red-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-red-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇳🇿</span> New Zealand</h4>
                    <div className="space-y-2">
                      {newZealandPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-slate-100 border border-slate-300" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-black">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" />Head-to-Head Record</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant="outline">{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-600 italic">Belgium won their last meeting 1-0 in a 2018 friendly.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Belgium</p><p className="text-sm text-slate-600">VTM, RTBF</p></div>
                  <div><p className="font-medium">New Zealand</p><p className="text-sm text-slate-600">Sky Sport NZ</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-700 font-medium">Europe vs Oceania in San Francisco!</p>
                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">{link.partner}</p>
                      <p className="text-sm text-green-600">From ${link.price_from}</p>
                      <p className="text-xs text-slate-500">{link.rating}</p>
                    </div>
                    <Button size="sm" asChild><a href={link.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Match Details</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Competition</span><span className="font-medium">FIFA World Cup 2026</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group G - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">68,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group G Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/belgium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇪</span> Belgium</Link>
                <Link href="/teams/egypt-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇬</span> Egypt</Link>
                <Link href="/teams/iran-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇮🇷</span> Iran</Link>
                <Link href="/teams/new-zealand-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇿</span> New Zealand</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/san-francisco-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">San Francisco Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore the Golden Gate City!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
