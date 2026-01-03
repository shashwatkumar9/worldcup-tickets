import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Brazil vs Haiti Tickets | World Cup 2026 Group C | 5x Champions vs Caribbean Debutants",
  description: "Buy Brazil vs Haiti World Cup 2026 tickets - Group C clash! Five-time champions Brazil face World Cup debutants Haiti. Historic Caribbean moment at the World Cup.",
  keywords: ["Brazil vs Haiti tickets", "World Cup 2026 Group C", "Brazil World Cup 2026", "Haiti World Cup debut", "Selecao"],
}

const matchInfo = {
  homeTeam: { name: "Brazil", flag: "🇧🇷", code: "BRA", nickname: "Seleção" },
  awayTeam: { name: "Haiti", flag: "🇭🇹", code: "HAI", nickname: "Les Grenadiers" },
  date: "June 17, 2026",
  time: "2:00 PM ET",
  venue: "Rose Bowl",
  city: "Los Angeles, California",
  group: "C",
  matchNumber: 21,
  round: "Group Stage - Matchday 2",
}

const brazilPlayers = [
  { name: "Vinícius Jr.", position: "Winger", club: "Real Madrid", number: 7, star: true },
  { name: "Rodrygo", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Endrick", position: "Forward", club: "Real Madrid", number: 21 },
  { name: "Bruno Guimarães", position: "Midfielder", club: "Newcastle United", number: 5 },
]

const haitiPlayers = [
  { name: "Duckens Nazon", position: "Forward", club: "Újpest", number: 9, star: true },
  { name: "Derrick Etienne Jr.", position: "Winger", club: "Columbus Crew", number: 10, star: true },
  { name: "Steeven Saba", position: "Midfielder", club: "Violette AC", number: 17 },
  { name: "Johnny Placide", position: "Goalkeeper", club: "Paris FC", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 185, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 315, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 275, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 255, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2016, competition: "Copa America", result: "Brazil 7-1 Haiti", location: "Orlando" },
]

export default function BrazilVsHaitiPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-yellow-400 via-green-500 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-c-world-cup-2026-tickets" className="hover:text-white">Group C</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Brazil vs Haiti</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-green-900 text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />5X WORLD CHAMPIONS</Badge>
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
                  <h3 className="font-bold text-xl text-blue-900">CARIBBEAN HISTORY IN THE MAKING</h3>
                </div>
                <p className="text-blue-800">Haiti makes their FIFA World Cup debut against the most successful nation in tournament history! The five-time champions bring Vinícius Jr. and Real Madrid&apos;s young stars to the Rose Bowl. For Les Grenadiers, this is the culmination of a dream - playing Brazil at the World Cup. Every Haitian will be watching.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Brazil vs Haiti: Giants Welcome Debutants</h2>
              <p>
                <Link href="/teams/brazil-world-cup-2026-tickets" className="text-green-600 hover:underline">Brazil</Link> faces <Link href="/teams/haiti-world-cup-2026-tickets" className="text-blue-600 hover:underline">Haiti</Link> at the iconic <Link href="/venues/rose-bowl-world-cup-2026-tickets" className="text-red-600 hover:underline">Rose Bowl in Los Angeles</Link>. The most successful World Cup nation welcomes the Caribbean&apos;s newest qualifiers to football&apos;s biggest stage.
              </p>
              <p>
                Brazil&apos;s five World Cup titles (1958, 1962, 1970, 1994, 2002) represent unmatched excellence. Their quest for a sixth title is driven by Vinícius Jr., who has become one of world football&apos;s most devastating players at Real Madrid. The Seleção brings samba football to the Rose Bowl.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Haiti&apos;s Impossible Dream</h3>
              <p>
                Haiti&apos;s World Cup qualification through CONCACAF represents a nation&apos;s triumph over adversity. The 2010 earthquake devastated the country, but football provided hope. Now Les Grenadiers stand on the world stage, facing Brazil. Their journey inspires Caribbean football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Vinícius Jr.&apos;s Brilliance</h3>
              <p>
                Vinícius Jr. has won multiple Champions League titles with Real Madrid. His speed, dribbling, and big-game mentality make him Brazil&apos;s most dangerous player. Against Haiti, Vini will seek to add World Cup goals to his incredible resume.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Rose Bowl Glory</h3>
              <p>
                The <Link href="/venues/rose-bowl-world-cup-2026-tickets" className="text-red-600 hover:underline">Rose Bowl</Link> hosted the 1994 World Cup Final and remains one of America&apos;s most iconic venues. Los Angeles&apos;s massive Brazilian and Haitian communities will create an unforgettable atmosphere for this historic encounter.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">What It Means</h3>
              <p>
                For Brazil, this is about continuing their march to a sixth title. For Haiti, every second on the pitch with Brazil represents achievement. Les Grenadiers have nothing to lose - they play with the freedom of a nation that has already won by being here.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇭🇹</span> Haiti</h4>
                    <div className="space-y-2">
                      {haitiPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">Brazil dominated their Copa America Centenario meeting 7-1 in Orlando.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Brazil</p><p className="text-sm text-slate-600">TV Globo, SporTV</p></div>
                  <div><p className="font-medium">Haiti</p><p className="text-sm text-slate-600">Télé Haïti</p></div>
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
                <p className="text-sm text-green-700 font-medium">Witness history at the Rose Bowl!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">90,888</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group C Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇷</span> Brazil</Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇦</span> Morocco</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🇭🇹</span> Haiti</span>
                <Link href="/teams/scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Scotland</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Los Angeles Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Explore the City of Angels!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
