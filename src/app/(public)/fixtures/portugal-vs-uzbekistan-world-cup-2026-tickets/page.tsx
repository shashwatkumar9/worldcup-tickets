import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Portugal vs Uzbekistan Tickets | World Cup 2026 Group K | Ronaldo's Legacy vs Asian Debutants",
  description: "Buy Portugal vs Uzbekistan World Cup 2026 tickets - Group K clash! Cristiano Ronaldo potentially faces World Cup debutants Uzbekistan. Historic Central Asian moment.",
  keywords: ["Portugal vs Uzbekistan tickets", "World Cup 2026 Group K", "Portugal World Cup 2026", "Uzbekistan World Cup debut", "Ronaldo World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Portugal", flag: "🇵🇹", code: "POR", nickname: "A Seleção" },
  awayTeam: { name: "Uzbekistan", flag: "🇺🇿", code: "UZB", nickname: "White Wolves" },
  date: "June 15, 2026",
  time: "8:00 PM ET",
  venue: "SoFi Stadium",
  city: "Los Angeles, California",
  group: "K",
  matchNumber: 12,
  round: "Group Stage - Matchday 1",
}

const portugalPlayers = [
  { name: "Cristiano Ronaldo", position: "Forward", club: "Al-Nassr", number: 7, star: true },
  { name: "Rafael Leão", position: "Winger", club: "AC Milan", number: 17, star: true },
  { name: "Bruno Fernandes", position: "Midfielder", club: "Manchester United", number: 8 },
  { name: "Rúben Dias", position: "Defender", club: "Manchester City", number: 4 },
]

const uzbekistanPlayers = [
  { name: "Eldor Shomurodov", position: "Forward", club: "Roma", number: 9, star: true },
  { name: "Jaloliddin Masharipov", position: "Winger", club: "Al-Shabab", number: 10, star: true },
  { name: "Oston Urunov", position: "Midfielder", club: "Lens", number: 8 },
  { name: "Abdukodir Khusanov", position: "Defender", club: "Lens", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 225, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 385, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 345, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 315, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function PortugalVsUzbekistanPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-green-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-k-world-cup-2026-tickets" className="hover:text-white">Group K</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Portugal vs Uzbekistan</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />EURO 2016 CHAMPIONS</Badge>
              <Badge className="bg-blue-500 text-white"><Sparkles className="h-4 w-4 mr-2" />HISTORIC DEBUT</Badge>
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
            <Card className="border-blue-400 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">CENTRAL ASIAN HISTORY</h3>
                </div>
                <p className="text-blue-800">Uzbekistan makes their FIFA World Cup debut against Portugal! The White Wolves become the first Central Asian nation at a World Cup. At 41, Cristiano Ronaldo potentially leads Portugal in what could be his final World Cup. History meets legacy at SoFi Stadium in Los Angeles.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Portugal vs Uzbekistan: The Legend Meets History</h2>
              <p>
                <Link href="/teams/portugal-world-cup-2026-tickets" className="text-red-600 hover:underline">Portugal</Link> faces World Cup debutants <Link href="/teams/uzbekistan-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uzbekistan</Link> at <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-purple-600 hover:underline">SoFi Stadium in Los Angeles</Link>. Euro 2016 champions welcome Central Asia&apos;s historic first World Cup participant.
              </p>
              <p>
                Portugal arrives as one of Europe&apos;s strongest nations. Rafael Leão has emerged as one of world football&apos;s most exciting talents at AC Milan. Bruno Fernandes provides creativity and goals from midfield. The question is whether Cristiano Ronaldo, at 41, will add to his record World Cup appearance tally.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Ronaldo&apos;s Potential Farewell</h3>
              <p>
                If Cristiano Ronaldo features, it would be his sixth World Cup - a record-equaling achievement. The all-time international goalscorer has nothing left to prove, but his competitive fire burns eternal. Every appearance could be his last on football&apos;s biggest stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Uzbekistan&apos;s Silk Road Dream</h3>
              <p>
                Uzbekistan&apos;s qualification represents a breakthrough for Central Asian football. The White Wolves have long been Asia&apos;s nearly-men, reaching playoff stages but never breaking through. Now they stand on the world stage, facing Portugal under Los Angeles lights.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">SoFi Stadium Glamour</h3>
              <p>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-purple-600 hover:underline">SoFi Stadium</Link> is NFL&apos;s most expensive stadium and will host the 2026 World Cup Final. Portuguese fans will flock to LA&apos;s glamorous venue, while Uzbekistan&apos;s devoted supporters will experience their proudest footballing moment.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group K Context</h3>
              <p>
                With Colombia also in Group K, every point matters. Portugal should dominate but will remember shocking losses to smaller nations in past tournaments. Uzbekistan has nothing to lose and everything to gain. Expect the White Wolves to compete with pride.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇵🇹</span> Portugal</h4>
                    <div className="space-y-2">
                      {portugalPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇺🇿</span> Uzbekistan</h4>
                    <div className="space-y-2">
                      {uzbekistanPlayers.map((player) => (
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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" />Head-to-Head Record</CardTitle></CardHeader>
              <CardContent>
                <div className="p-6 bg-blue-50 rounded-lg text-center">
                  <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-900">First Ever Meeting!</h3>
                  <p className="text-blue-700 mt-2">
                    Portugal and Uzbekistan have never faced each other. This World Cup Group K match will be their historic first encounter.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Portugal</p><p className="text-sm text-slate-600">RTP, SIC</p></div>
                  <div><p className="font-medium">Uzbekistan</p><p className="text-sm text-slate-600">Uzbekistan 24, MTRK</p></div>
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
                <p className="text-sm text-red-700 font-medium">Witness history at SoFi Stadium!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group K - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">70,240</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group K Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/portugal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇹</span> Portugal</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🇺🇿</span> Uzbekistan</span>
                <Link href="/teams/colombia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇴</span> Colombia</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🏴</span> TBD</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="text-purple-600 hover:underline text-sm">Los Angeles Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore the City of Angels!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
