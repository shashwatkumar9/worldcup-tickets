import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Sparkles, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Uzbekistan vs Colombia Tickets | World Cup 2026 Group K | Central Asian Debutants vs South American Flair",
  description: "Buy Uzbekistan vs Colombia World Cup 2026 tickets - Group K clash! World Cup debutants Uzbekistan face Colombian flair. Historic Central Asian moment meets James Rodriguez magic.",
  keywords: ["Uzbekistan vs Colombia tickets", "World Cup 2026 Group K", "Uzbekistan World Cup debut", "Colombia World Cup", "Central Asia debut"],
}

const matchInfo = {
  homeTeam: { name: "Uzbekistan", flag: "🇺🇿", code: "UZB", nickname: "White Wolves" },
  awayTeam: { name: "Colombia", flag: "🇨🇴", code: "COL", nickname: "Los Cafeteros" },
  date: "June 20, 2026",
  time: "8:00 PM ET",
  venue: "SoFi Stadium",
  city: "Los Angeles, California",
  group: "K",
  matchNumber: 34,
  round: "Group Stage - Matchday 2",
}

const uzbekistanPlayers = [
  { name: "Eldor Shomurodov", position: "Forward", club: "Roma", number: 9, star: true },
  { name: "Jaloliddin Masharipov", position: "Winger", club: "Al-Shabab", number: 10, star: true },
  { name: "Oston Urunov", position: "Midfielder", club: "Lens", number: 8 },
  { name: "Abdukodir Khusanov", position: "Defender", club: "Lens", number: 4 },
]

const colombiaPlayers = [
  { name: "Luis Díaz", position: "Winger", club: "Liverpool", number: 7, star: true },
  { name: "James Rodríguez", position: "Midfielder", club: "Rayo Vallecano", number: 10, star: true },
  { name: "Rafael Santos Borré", position: "Forward", club: "Internacional", number: 9 },
  { name: "Davinson Sánchez", position: "Defender", club: "Galatasaray", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 245, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 215, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 195, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function UzbekistanVsColombiaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 via-white to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-k-world-cup-2026-tickets" className="hover:text-white">Group K</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Uzbekistan vs Colombia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-blue-500 text-white text-lg px-4 py-1"><Sparkles className="h-4 w-4 mr-2" />HISTORIC DEBUT</Badge>
              <Badge className="bg-yellow-400 text-red-900"><Flame className="h-4 w-4 mr-2" />SOUTH AMERICAN FLAIR</Badge>
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
                  <Flame className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">SILK ROAD MEETS SALSA</h3>
                </div>
                <p className="text-yellow-800">Central Asia&apos;s first World Cup nation faces South America&apos;s most entertaining team! Uzbekistan&apos;s historic debut continues against Colombia&apos;s dancing Cafeteros. Luis Díaz brings Liverpool&apos;s Premier League quality, while James Rodríguez adds tournament magic. The White Wolves seek their first World Cup points.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Uzbekistan vs Colombia: Continents Collide</h2>
              <p>
                <Link href="/teams/uzbekistan-world-cup-2026-tickets" className="text-blue-600 hover:underline">Uzbekistan</Link> faces <Link href="/teams/colombia-world-cup-2026-tickets" className="text-yellow-600 hover:underline">Colombia</Link> at <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-purple-600 hover:underline">SoFi Stadium in Los Angeles</Link>. Central Asia&apos;s historic debutants take on South America&apos;s most beloved entertainers in Group K.
              </p>
              <p>
                Colombia brings the joy and passion that makes them neutral&apos;s favorites at every tournament. Luis Díaz has emerged as one of the Premier League&apos;s most exciting players at Liverpool. James Rodríguez remains their tournament specialist - remember his Golden Boot at Brazil 2014.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Uzbekistan&apos;s Landmark Journey</h3>
              <p>
                Becoming Central Asia&apos;s first World Cup nation marks a historic achievement for Uzbekistan. The White Wolves have long been competitive in Asian football without breaking through. Now they dance on football&apos;s biggest stage, carrying regional hopes.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Díaz&apos;s Liverpool Fire</h3>
              <p>
                Luis Díaz has become a fan favorite at Liverpool with his direct running and infectious smile. His pace, dribbling, and finishing make him Colombia&apos;s most dangerous player. Against Uzbekistan&apos;s defense, Díaz will find space to terrorize.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Los Angeles Showcase</h3>
              <p>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-purple-600 hover:underline">SoFi Stadium</Link> will host the 2026 World Cup Final and provides the perfect backdrop. LA&apos;s massive Colombian community guarantees electric support. Uzbekistan&apos;s traveling fans will experience NFL&apos;s most expensive stadium.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group K Survival</h3>
              <p>
                With Portugal also in Group K, both teams know the stakes. Colombia needs points to advance, while Uzbekistan seeks to prove they belong. The underdogs will play with freedom and passion - Colombia must match their intensity.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇨🇴</span> Colombia</h4>
                    <div className="space-y-2">
                      {colombiaPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-yellow-700">#{player.number}</span>
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
                    Uzbekistan and Colombia have never faced each other. This World Cup Group K match will be their historic first encounter.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Uzbekistan</p><p className="text-sm text-slate-600">Uzbekistan 24, MTRK</p></div>
                  <div><p className="font-medium">Colombia</p><p className="text-sm text-slate-600">Caracol, RCN</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-yellow-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-yellow-700 font-medium">Central Asia meets South America!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group K - Matchday 2</span></div>
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
