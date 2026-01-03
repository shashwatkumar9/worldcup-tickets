import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Flame, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "France vs Norway Tickets | Mbappé vs Haaland | World Cup 2026 Group I",
  description: "Buy France vs Norway World Cup 2026 tickets at Mercedes-Benz Stadium, Atlanta. June 22, 2026. Mbappé vs Haaland - the ultimate showdown!",
  keywords: ["France vs Norway tickets", "Mbappé vs Haaland", "World Cup 2026 Atlanta", "France World Cup 2026", "Norway World Cup 2026", "Haaland World Cup"],
}

const matchInfo = {
  homeTeam: { name: "France", flag: "🇫🇷", code: "FRA", nickname: "Les Bleus" },
  awayTeam: { name: "Norway", flag: "🇳🇴", code: "NOR", nickname: "Løvene" },
  date: "June 22, 2026",
  time: "3:00 PM ET",
  venue: "Mercedes-Benz Stadium",
  city: "Atlanta, Georgia",
  group: "I",
  matchNumber: 40,
  round: "Group Stage - Matchday 2",
  special: "MBAPPÉ VS HAALAND",
}

const francePlayers = [
  { name: "Kylian Mbappé", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Antoine Griezmann", position: "Forward", club: "Atlético Madrid", number: 7, star: true },
  { name: "Aurélien Tchouaméni", position: "Midfielder", club: "Real Madrid", number: 8 },
  { name: "Mike Maignan", position: "Goalkeeper", club: "AC Milan", number: 16 },
]

const norwayPlayers = [
  { name: "Erling Haaland", position: "Forward", club: "Manchester City", number: 9, star: true },
  { name: "Martin Ødegaard", position: "Midfielder", club: "Arsenal", number: 10, star: true },
  { name: "Sander Berge", position: "Midfielder", club: "Burnley", number: 8 },
  { name: "Alexander Sørloth", position: "Forward", club: "Villarreal", number: 11 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 395, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 595, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 550, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 525, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2021, competition: "World Cup Qualifier", result: "France 2-0 Norway", location: "Paris" },
  { year: 2017, competition: "Friendly", result: "France 4-0 Norway", location: "Nice" },
  { year: 2000, competition: "Friendly", result: "Norway 0-3 France", location: "Oslo" },
]

export default function FranceVsNorwayPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-800 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-i-world-cup-2026-tickets" className="hover:text-white">Group I</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">France vs Norway</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />MBAPPÉ VS HAALAND</Badge>
              <Badge className="bg-white text-blue-800">GROUP I</Badge>
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
                  <Star className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">The Match of the Tournament</h3>
                </div>
                <p className="text-yellow-800">Kylian Mbappé vs Erling Haaland. The two best strikers on the planet. One match. At Mercedes-Benz Stadium. This Group I clash between France and Norway is the must-see fixture of the entire World Cup. Two generational talents fighting for supremacy - who will prove they are the world&apos;s best?</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Mbappé vs Haaland: The Ultimate Showdown</h2>
              <p>
                Football fans have debated it for years: Kylian Mbappé or Erling Haaland? Now, in the World Cup spotlight at <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mercedes-Benz Stadium in Atlanta</Link>, we get our answer. <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-600 hover:underline">France</Link> versus <Link href="/teams/norway-world-cup-2026-tickets" className="text-blue-600 hover:underline">Norway</Link> is the blockbuster Group I fixture that transcends regular tournament football.
              </p>
              <p>
                At 27, Mbappé enters his prime. The 2018 World Cup winner and 2022 hat-trick scorer in the Final has moved to Real Madrid and established himself as football&apos;s fastest, most devastating forward. His 2022 Final performance - a hat-trick against Argentina including two goals in 97 seconds - proved he performs when the stakes are highest.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Haaland&apos;s World Cup Debut Statement</h3>
              <p>
                Erling Haaland at 25 has won everything at club level except the World Cup. Having destroyed Premier League records at Manchester City, the Norwegian goal machine finally gets his chance on football&apos;s biggest stage. Norway&apos;s qualification means the world finally sees Haaland at a major international tournament - and what better stage than facing the defending finalists?
              </p>
              <p>
                Haaland&apos;s numbers are frightening. Over 40 goals per season at City, a Champions League title, and a style that combines power, pace, and clinical finishing like no other. His partnership with Martin Ødegaard, Arsenal&apos;s creative maestro, gives Norway genuine belief they can upset France.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">France: Back-to-Back Final Appearances</h3>
              <p>
                Les Bleus enter 2026 having reached the last two World Cup Finals (2018 champion, 2022 runner-up). No team has won back-to-back World Cups since Brazil in 1962, and France enters as one of the favorites. Beyond Mbappé, Antoine Griezmann provides experience and intelligence, while the new generation of Aurélien Tchouaméni and others have matured into world-class players.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Atlanta: Football&apos;s Spotlight</h3>
              <p>
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mercedes-Benz Stadium</Link> provides the perfect setting. The 75,000-seat venue with its stunning retractable roof will host one of the semifinals and this blockbuster group match. The atmosphere for Mbappé vs Haaland will be electric, with fans from around the world traveling specifically for this fixture.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group I Implications</h3>
              <p>
                With <Link href="/teams/senegal-world-cup-2026-tickets" className="text-blue-600 hover:underline">Senegal</Link> also in Group I, this match could determine who finishes first and second. The winner gains favorable knockout stage positioning, while the loser faces increased pressure in the final group match. Both teams need all three points to assert control of their World Cup destiny.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />The Star Showdown</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-center mb-4">
                      <span className="text-5xl">🇫🇷</span>
                      <h4 className="font-bold text-xl mt-2">Kylian Mbappé</h4>
                      <p className="text-blue-600">Real Madrid • #10</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Age (2026):</span><span className="font-medium">27</span></div>
                      <div className="flex justify-between"><span>World Cups:</span><span className="font-medium">3 (14+ goals)</span></div>
                      <div className="flex justify-between"><span>Style:</span><span className="font-medium">Speed, dribbling, finishing</span></div>
                    </div>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="text-center mb-4">
                      <span className="text-5xl">🇳🇴</span>
                      <h4 className="font-bold text-xl mt-2">Erling Haaland</h4>
                      <p className="text-red-600">Manchester City • #9</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Age (2026):</span><span className="font-medium">25</span></div>
                      <div className="flex justify-between"><span>World Cups:</span><span className="font-medium">1st</span></div>
                      <div className="flex justify-between"><span>Style:</span><span className="font-medium">Power, pace, clinical finishing</span></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇫🇷</span> France</h4>
                    <div className="space-y-2">
                      {francePlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-blue-50 border border-blue-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-700">#{player.number}</span>
                            <span className="font-medium">{player.name}</span>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇳🇴</span> Norway</h4>
                    <div className="space-y-2">
                      {norwayPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600">France dominates the head-to-head, but Norway has never had Haaland and Ødegaard at a World Cup before!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">France</p><p className="text-sm text-slate-600">TF1, BeIN Sports</p></div>
                  <div><p className="font-medium">Norway</p><p className="text-sm text-slate-600">NRK, TV 2</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">🔥 HIGHEST DEMAND MATCH - Book Now!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group I - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">75,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group I Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇫🇷</span> France</Link>
                <Link href="/teams/senegal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇸🇳</span> Senegal</Link>
                <Link href="/teams/norway-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇴</span> Norway</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Atlanta Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Southern hospitality meets football&apos;s biggest stars!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
