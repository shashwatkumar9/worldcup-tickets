import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Canada vs Switzerland Tickets | World Cup 2026 Group B | Les Rouges Host the Swiss",
  description: "Buy Canada vs Switzerland World Cup 2026 tickets - Group B clash! Co-hosts Canada face Switzerland at BMO Field. Alphonso Davies leads Les Rouges against Euro quarter-finalists.",
  keywords: ["Canada vs Switzerland tickets", "World Cup 2026 Group B", "Canada World Cup 2026", "Switzerland World Cup", "BMO Field Toronto"],
}

const matchInfo = {
  homeTeam: { name: "Canada", flag: "🇨🇦", code: "CAN", nickname: "Les Rouges" },
  awayTeam: { name: "Switzerland", flag: "🇨🇭", code: "SUI", nickname: "Nati" },
  date: "June 13, 2026",
  time: "5:00 PM ET",
  venue: "BMO Field",
  city: "Toronto, Ontario",
  group: "B",
  matchNumber: 6,
  round: "Group Stage - Matchday 1",
}

const canadaPlayers = [
  { name: "Alphonso Davies", position: "Defender", club: "Bayern Munich", number: 19, star: true },
  { name: "Jonathan David", position: "Forward", club: "Lille", number: 20, star: true },
  { name: "Tajon Buchanan", position: "Winger", club: "Inter Milan", number: 11 },
  { name: "Stephen Eustáquio", position: "Midfielder", club: "FC Porto", number: 7 },
]

const switzerlandPlayers = [
  { name: "Granit Xhaka", position: "Midfielder", club: "Bayer Leverkusen", number: 10, star: true },
  { name: "Breel Embolo", position: "Forward", club: "Monaco", number: 7, star: true },
  { name: "Manuel Akanji", position: "Defender", club: "Manchester City", number: 5 },
  { name: "Yann Sommer", position: "Goalkeeper", club: "Inter Milan", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 195, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 345, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 295, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 275, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function CanadaVsSwitzerlandPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-b-world-cup-2026-tickets" className="hover:text-white">Group B</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Canada vs Switzerland</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Home className="h-4 w-4 mr-2" />HOST NATION</Badge>
              <Badge className="bg-white text-red-600"><Flame className="h-4 w-4 mr-2" />EURO STARS</Badge>
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
                  <Flame className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">DAVIES LEADS CANADA HOME</h3>
                </div>
                <p className="text-red-800">Canada hosts their first World Cup match ever on home soil! Alphonso Davies and Jonathan David lead Les Rouges against Switzerland&apos;s experienced Nati. Granit Xhaka brings Leverkusen&apos;s title-winning mentality to Toronto. BMO Field will be rocking for this historic Group B opener.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Canada vs Switzerland: Historic Home Debut</h2>
              <p>
                <Link href="/teams/canada-world-cup-2026-tickets" className="text-red-600 hover:underline">Canada</Link> faces <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-red-700 hover:underline">Switzerland</Link> at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">BMO Field in Toronto</Link>. Co-hosts Canada begin their tournament journey against one of Europe&apos;s most consistent performers.
              </p>
              <p>
                Canada&apos;s football renaissance has been remarkable. Qatar 2022 marked their return after 36 years, and now they host a World Cup. Alphonso Davies is one of the world&apos;s best left-backs at Bayern Munich, while Jonathan David has emerged as a prolific goalscorer in Ligue 1.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Davies&apos; Homecoming</h3>
              <p>
                Born in a Ghanaian refugee camp and raised in Edmonton, Alphonso Davies represents the Canadian dream. His blistering pace and technical ability make him world-class. Leading Canada at a home World Cup completes an incredible journey.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Swiss Precision</h3>
              <p>
                Switzerland&apos;s consistent tournament performances make them dangerous opponents. Granit Xhaka&apos;s transformation at Bayer Leverkusen, leading them to their first Bundesliga title, elevates his leadership. The Nati eliminated France at Euro 2020 and reached Euro 2024&apos;s quarter-finals.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Toronto Soccer City</h3>
              <p>
                <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">BMO Field</Link> has transformed Toronto into a soccer city since Toronto FC&apos;s establishment. The intimate 30,000-capacity stadium creates an intense atmosphere. Canada&apos;s multicultural fanbase will bring incredible energy.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group B Opener</h3>
              <p>
                With Qatar and another team completing Group B, this match carries significant weight. Switzerland&apos;s tournament experience gives them an edge, but Canada&apos;s home advantage and attacking talent could prove decisive. Three points here sets up either team&apos;s knockout aspirations.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇨🇦</span> Canada</h4>
                    <div className="space-y-2">
                      {canadaPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇨🇭</span> Switzerland</h4>
                    <div className="space-y-2">
                      {switzerlandPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-red-100 border border-red-300" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-red-800">#{player.number}</span>
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
                <div className="p-6 bg-red-50 rounded-lg text-center">
                  <Trophy className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-red-900">First Competitive Meeting!</h3>
                  <p className="text-red-700 mt-2">
                    Canada and Switzerland have rarely met. This World Cup Group B match will be their first competitive encounter on the world stage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Canada</p><p className="text-sm text-slate-600">TSN, CTV, RDS</p></div>
                  <div><p className="font-medium">Switzerland</p><p className="text-sm text-slate-600">SRF, RTS, RSI</p></div>
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
                <p className="text-sm text-red-700 font-medium">Be part of Canadian history!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group B - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">30,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group B Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/canada-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇦</span> Canada</Link>
                <Link href="/teams/switzerland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇭</span> Switzerland</Link>
                <Link href="/teams/qatar-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇶🇦</span> Qatar</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🏴</span> TBD</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/toronto-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Toronto Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Discover Canada&apos;s largest city!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
