import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Germany vs Ivory Coast Tickets | World Cup 2026 Group E | BMO Field Toronto",
  description: "Buy Germany vs Ivory Coast World Cup 2026 tickets at BMO Field, Toronto. June 20, 2026. Four-time champions face AFCON winners!",
  keywords: ["Germany vs Ivory Coast tickets", "World Cup 2026 Toronto", "Germany World Cup 2026", "Ivory Coast World Cup", "BMO Field World Cup", "Musiala World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Germany", flag: "🇩🇪", code: "GER", nickname: "Die Mannschaft" },
  awayTeam: { name: "Ivory Coast", flag: "🇨🇮", code: "CIV", nickname: "Les Éléphants" },
  date: "June 20, 2026",
  time: "4:00 PM ET",
  venue: "BMO Field",
  city: "Toronto, Canada",
  group: "E",
  matchNumber: 34,
  round: "Group Stage - Matchday 2",
}

const germanyPlayers = [
  { name: "Jamal Musiala", position: "Midfielder", club: "Bayern Munich", number: 10, star: true },
  { name: "Florian Wirtz", position: "Midfielder", club: "Bayer Leverkusen", number: 17, star: true },
  { name: "Kai Havertz", position: "Forward", club: "Arsenal", number: 7 },
  { name: "Joshua Kimmich", position: "Midfielder", club: "Bayern Munich", number: 6 },
]

const ivoryCoastPlayers = [
  { name: "Sébastien Haller", position: "Forward", club: "Borussia Dortmund", number: 9, star: true },
  { name: "Franck Kessié", position: "Midfielder", club: "Al-Ahli", number: 8, star: true },
  { name: "Nicolas Pépé", position: "Forward", club: "Trabzonspor", number: 19 },
  { name: "Serge Aurier", position: "Defender", club: "Galatasaray", number: 2 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 185, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 295, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 265, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 245, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2014, competition: "World Cup", result: "Germany 2-1 Ivory Coast", location: "n/a - no WC meeting" },
  { year: 2006, competition: "Friendly", result: "Germany 3-0 Ivory Coast", location: "Gelsenkirchen" },
]

export default function GermanyVsIvoryCoastPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-red-600 to-orange-500 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-e-world-cup-2026-tickets" className="hover:text-white">Group E</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Germany vs Ivory Coast</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />CHAMPIONS CLASH</Badge>
              <Badge className="bg-white text-black">GROUP E</Badge>
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
                  <h3 className="font-bold text-xl text-yellow-900">Four-Time Champions vs AFCON Winners</h3>
                </div>
                <p className="text-yellow-800">Germany, four-time World Cup winners, face Ivory Coast, the 2024 Africa Cup of Nations champions, at BMO Field in Toronto. Die Mannschaft&apos;s new generation seeks redemption after 2022&apos;s group stage exit, while Les Éléphants ride their continental triumph into World Cup glory chase.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Germany vs Ivory Coast: Redemption Meets Ambition</h2>
              <p>
                <Link href="/teams/germany-world-cup-2026-tickets" className="text-black hover:underline">Germany</Link> arrives at the 2026 World Cup seeking to erase the memory of back-to-back group stage eliminations (2018, 2022). The four-time champions have rebuilt around a golden generation led by Jamal Musiala and Florian Wirtz. Their Group E clash against <Link href="/teams/ivory-coast-world-cup-2026-tickets" className="text-orange-600 hover:underline">Ivory Coast</Link> at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-red-600 hover:underline">BMO Field in Toronto</Link> pits European pedigree against African brilliance.
              </p>
              <p>
                Ivory Coast enters 2026 as AFCON champions, having won the 2024 tournament on home soil with a remarkable comeback that saw them recover from early setbacks. Sébastien Haller&apos;s emotional journey - from cancer recovery to scoring the winning goal in the AFCON final - epitomizes Les Éléphants&apos; spirit.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Musiala and Wirtz: Germany&apos;s Future</h3>
              <p>
                At 23 and 23 respectively, Jamal Musiala and Florian Wirtz represent German football&apos;s most exciting prospects since the 2014 World Cup-winning generation. Musiala&apos;s dribbling and close control mark him as a world-class talent, while Wirtz&apos;s vision and passing create chances from nothing. Together, they form the creative heart of Julian Nagelsmann&apos;s rebuilt squad.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Ivory Coast: Africa&apos;s Best</h3>
              <p>
                The Elephants have consistently produced world-class talent - Didier Drogba, Yaya Touré, and now a new generation carrying that legacy. Franck Kessié provides Premier League-tested steel in midfield, while Sébastien Haller&apos;s aerial presence and movement trouble any defense. Their 2024 AFCON triumph proved they can handle tournament pressure.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Germany&apos;s Redemption Arc</h3>
              <p>
                Julian Nagelsmann has transformed Germany from aging veterans to vibrant youth. The home Euro 2024 showed what this team can achieve when clicking. Joshua Kimmich provides leadership and tactical intelligence, while the attacking talent of Musiala, Wirtz, and Kai Havertz offers multiple scoring threats.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Toronto Hosts</h3>
              <p>
                <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-red-600 hover:underline">BMO Field</Link> provides an intimate 45,000-seat setting for this clash. Toronto&apos;s diverse population ensures passionate support for both nations, with significant German and Ivorian communities in the city. The Canadian crowd will add to the World Cup atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group E Implications</h3>
              <p>
                With <Link href="/teams/ecuador-world-cup-2026-tickets" className="text-yellow-600 hover:underline">Ecuador</Link> and Curaçao also in Group E, Germany and Ivory Coast battle for dominance. A win here could prove decisive for first place and favorable knockout positioning. Neither team can afford to drop points against each other.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇩🇪</span> Germany</h4>
                    <div className="space-y-2">
                      {germanyPlayers.map((player) => (
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
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇨🇮</span> Ivory Coast</h4>
                    <div className="space-y-2">
                      {ivoryCoastPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-orange-50 border border-orange-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-orange-700">#{player.number}</span>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Germany</p><p className="text-sm text-slate-600">ARD, ZDF</p></div>
                  <div><p className="font-medium">Canada</p><p className="text-sm text-slate-600">TSN, CTV</p></div>
                  <div><p className="font-medium">Africa</p><p className="text-sm text-slate-600">SuperSport, Canal+</p></div>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group E - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">45,736</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group E Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/germany-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇪</span> Germany</Link>
                <Link href="/teams/ivory-coast-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇮</span> Ivory Coast</Link>
                <Link href="/teams/ecuador-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇨</span> Ecuador</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/toronto-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Toronto Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Canada&apos;s multicultural gem welcomes the world!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
