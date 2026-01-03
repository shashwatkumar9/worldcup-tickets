import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Brazil vs Serbia Tickets | World Cup 2026 | Five-Time Champions Face Eagles",
  description: "Buy Brazil vs Serbia World Cup 2026 tickets. Five-time World Cup champions Brazil face Serbia's talented squad. Samba meets Balkan brilliance!",
  keywords: ["Brazil vs Serbia tickets", "World Cup 2026 Brazil", "Brazil World Cup 2026", "Serbia World Cup 2026", "Vinícius Jr World Cup", "Vlahović World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Brazil", flag: "🇧🇷", code: "BRA", nickname: "Seleção" },
  awayTeam: { name: "Serbia", flag: "🇷🇸", code: "SRB", nickname: "Eagles" },
  date: "June 19, 2026",
  time: "7:00 PM ET",
  venue: "Hard Rock Stadium",
  city: "Miami, Florida",
  group: "C",
  matchNumber: 30,
  round: "Group Stage - Matchday 2",
}

const brazilPlayers = [
  { name: "Vinícius Júnior", position: "Forward", club: "Real Madrid", number: 7, star: true },
  { name: "Rodrygo", position: "Forward", club: "Real Madrid", number: 11, star: true },
  { name: "Bruno Guimarães", position: "Midfielder", club: "Newcastle", number: 5 },
  { name: "Endrick", position: "Forward", club: "Real Madrid", number: 9 },
]

const serbiaPlayers = [
  { name: "Dušan Vlahović", position: "Forward", club: "Juventus", number: 9, star: true },
  { name: "Aleksandar Mitrović", position: "Forward", club: "Al-Hilal", number: 7, star: true },
  { name: "Sergej Milinković-Savić", position: "Midfielder", club: "Al-Hilal", number: 20 },
  { name: "Dušan Tadić", position: "Midfielder", club: "Fenerbahçe", number: 10 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 235, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 395, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 355, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 325, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Brazil 2-0 Serbia", location: "Lusail" },
  { year: 2018, competition: "World Cup", result: "Brazil 2-0 Serbia", location: "Moscow" },
  { year: 2014, competition: "Friendly", result: "Brazil 1-0 Serbia", location: "São Paulo" },
]

export default function BrazilVsSerbiaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-yellow-400 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-c-world-cup-2026-tickets" className="hover:text-white">Group C</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Brazil vs Serbia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-400 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />5X CHAMPIONS</Badge>
              <Badge className="bg-white text-black">GROUP C</Badge>
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
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">Brazil Dominates This Fixture</h3>
                </div>
                <p className="text-yellow-800">Brazil has beaten Serbia in both previous World Cup meetings - 2-0 in 2018 and 2-0 in 2022. The Seleção&apos;s technical superiority and tactical organization have proven too much for Serbia. Can the Eagles finally break through against the five-time champions in Miami?</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Brazil vs Serbia: Miami Samba</h2>
              <p>
                <Link href="/teams/brazil-world-cup-2026-tickets" className="text-green-600 hover:underline">Brazil</Link> brings their World Cup campaign to <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Hard Rock Stadium in Miami</Link> against a talented <Link href="/teams/serbia-world-cup-2026-tickets" className="text-red-700 hover:underline">Serbia</Link> side. Miami&apos;s massive Brazilian community ensures a yellow sea of supporters. The five-time World Cup champions continue their quest for a sixth title against the Eagles.
              </p>
              <p>
                This has become a regular World Cup fixture. Brazil defeated Serbia 2-0 in both 2018 (Moscow) and 2022 (Qatar). Despite Serbia&apos;s individual talent - Vlahović, Mitrović, Milinković-Savić - they&apos;ve struggled to match Brazil&apos;s collective quality. In 2026, Serbia will hope for different results.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Vinícius Jr: World&apos;s Best</h3>
              <p>
                Vinícius Júnior enters 2026 as arguably the world&apos;s best player. His Champions League final heroics, Ballon d&apos;Or contention, and devastating skill make him Brazil&apos;s talisman. Against Serbia&apos;s physical defenders, Vinícius&apos;s pace and dribbling will be lethal. He scored in the 2022 meeting and will look to repeat.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Serbia&apos;s Striking Options</h3>
              <p>
                Serbia boasts two of Europe&apos;s most prolific strikers in Dušan Vlahović and Aleksandar Mitrović. Vlahović leads Juventus&apos; line with clinical finishing, while Mitrović has dominated wherever he plays. Finding a way to play both effectively remains Serbia&apos;s tactical challenge. Their combined threat is formidable if properly utilized.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Brazil&apos;s New Generation</h3>
              <p>
                The Seleção has rebuilt around youth. Vinícius, Rodrygo, and teenage sensation Endrick form a Real Madrid-heavy attack. Bruno Guimarães provides Premier League-tested midfield quality. This Brazil looks more dynamic than recent underwhelming tournament editions. They have genuine title-winning potential.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Miami: Brazil&apos;s Home Away From Home</h3>
              <p>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Hard Rock Stadium</Link> in Miami is perfect for Brazil. South Florida&apos;s massive Brazilian and Latin American populations ensure a home atmosphere. Miami&apos;s tropical climate suits Brazil&apos;s style. Inter Miami&apos;s impact has only increased local soccer passion. This will feel like a home match for the Seleção.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group C Stakes</h3>
              <p>
                With <Link href="/teams/morocco-world-cup-2026-tickets" className="text-red-600 hover:underline">Morocco</Link>, <Link href="/teams/japan-world-cup-2026-tickets" className="text-red-600 hover:underline">Japan</Link>, and Tunisia also in Group C, this is a competitive group. Brazil cannot afford complacency. Serbia need points to have any knockout hopes. Both teams enter with motivation, even if history favors Brazil.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇧🇷</span> Brazil</h4>
                    <div className="space-y-2">
                      {brazilPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-green-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇷🇸</span> Serbia</h4>
                    <div className="space-y-2">
                      {serbiaPlayers.map((player) => (
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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Head-to-Head Record</CardTitle></CardHeader>
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
                <p className="text-sm text-slate-600 mt-4">Brazil has won all recent meetings without conceding a goal!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Brazil</p><p className="text-sm text-slate-600">Globo, SporTV</p></div>
                  <div><p className="font-medium">Serbia</p><p className="text-sm text-slate-600">RTS</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group C - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">64,767</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group C Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇷</span> Brazil</Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇦</span> Morocco</Link>
                <Link href="/teams/japan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇯🇵</span> Japan</Link>
                <Link href="/teams/serbia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇷🇸</span> Serbia</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Miami Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Samba in the Magic City!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
