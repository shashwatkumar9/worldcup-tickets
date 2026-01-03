import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Spain vs Uruguay Tickets | World Cup 2026 Group H | Estadio BBVA",
  description: "Buy Spain vs Uruguay World Cup 2026 tickets at Estadio BBVA, Monterrey. June 26, 2026. Euro champions vs two-time World Cup winners!",
  keywords: ["Spain vs Uruguay tickets", "World Cup 2026 Monterrey", "Spain World Cup 2026", "Uruguay World Cup 2026", "La Roja vs La Celeste"],
}

const matchInfo = {
  homeTeam: { name: "Uruguay", flag: "🇺🇾", code: "URU", nickname: "La Celeste" },
  awayTeam: { name: "Spain", flag: "🇪🇸", code: "ESP", nickname: "La Roja" },
  date: "June 26, 2026",
  time: "6:00 PM ET",
  venue: "Estadio BBVA",
  city: "Monterrey, Mexico",
  group: "H",
  matchNumber: 60,
  round: "Group Stage - Matchday 3",
}

const spainPlayers = [
  { name: "Lamine Yamal", position: "Forward", club: "Barcelona", number: 19, star: true },
  { name: "Pedri", position: "Midfielder", club: "Barcelona", number: 8, star: true },
  { name: "Rodri", position: "Midfielder", club: "Manchester City", number: 16 },
  { name: "Dani Carvajal", position: "Defender", club: "Real Madrid", number: 2 },
]

const uruguayPlayers = [
  { name: "Darwin Núñez", position: "Forward", club: "Liverpool", number: 11, star: true },
  { name: "Federico Valverde", position: "Midfielder", club: "Real Madrid", number: 15, star: true },
  { name: "Ronald Araújo", position: "Defender", club: "Barcelona", number: 4 },
  { name: "Luis Suárez", position: "Forward", club: "Inter Miami", number: 9 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 225, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 345, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 315, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 295, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2013, competition: "Confederations Cup", result: "Spain 2-1 Uruguay", location: "Recife" },
  { year: 2010, competition: "World Cup", result: "Spain 2-2 Uruguay", location: "Pretoria" },
  { year: 1994, competition: "Friendly", result: "Uruguay 1-0 Spain", location: "Montevideo" },
]

export default function SpainVsUruguayPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-sky-400 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-h-world-cup-2026-tickets" className="hover:text-white">Group H</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Uruguay vs Spain</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />3 WORLD CUPS COMBINED</Badge>
              <Badge className="bg-white text-red-800">GROUP H</Badge>
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
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Spain vs Uruguay: South American Grit Meets European Excellence</h2>
              <p>
                A clash of footballing cultures at <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-red-600 hover:underline">Estadio BBVA in Monterrey</Link> as <Link href="/teams/spain-world-cup-2026-tickets" className="text-red-600 hover:underline">Spain</Link>, the 2024 European Champions, faces <Link href="/teams/uruguay-world-cup-2026-tickets" className="text-sky-600 hover:underline">Uruguay</Link>, two-time World Cup winners. This Group H decider could determine who finishes top of the group and earns a favorable knockout path.
              </p>
              <p>
                Spain enters 2026 having won Euro 2024 with their youngest-ever squad. Lamine Yamal, just 18 during this World Cup, has already established himself as one of football&apos;s most exciting talents. The Barcelona winger&apos;s dribbling, creativity, and composure belie his age, while Pedri orchestrates from midfield with the maturity of a veteran.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Uruguay: The Original World Champions</h3>
              <p>
                Uruguay won the first-ever World Cup in 1930 and shocked Brazil in their own backyard in 1950. Despite a population of just 3.5 million, La Celeste consistently produces world-class talent. Federico Valverde has emerged as one of the world&apos;s best box-to-box midfielders at Real Madrid, while Darwin Núñez brings pace and unpredictability to Liverpool&apos;s attack.
              </p>
              <p>
                This could be Luis Suárez&apos;s final World Cup at age 39. The all-time leading scorer in CONMEBOL World Cup qualifying history brings invaluable experience and clutch goals. His partnership with Darwin Núñez offers Uruguay two distinct attacking threats that Spain&apos;s defense must handle carefully.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Spain&apos;s Next Generation</h3>
              <p>
                La Roja&apos;s tiki-taka has evolved. The 2026 version retains possession principles but adds directness through Yamal and Nico Williams. Rodri anchors midfield after winning everything at Manchester City, while Gavi and Pedri provide creativity. This Spanish side combines the best of their passing heritage with modern attacking dynamism.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group H Showdown</h3>
              <p>
                With <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-green-600 hover:underline">Saudi Arabia</Link> and Cape Verde also in the group, Spain and Uruguay enter as favorites. This final matchday clash will likely determine group positioning, with the winner earning a potentially easier Round of 32 opponent. Both teams will bring their best for this South American vs European showdown.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇪🇸</span> Spain</h4>
                    <div className="space-y-2">
                      {spainPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇺🇾</span> Uruguay</h4>
                    <div className="space-y-2">
                      {uruguayPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-sky-50 border border-sky-200" : "bg-slate-50"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sky-700">#{player.number}</span>
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Spain</p><p className="text-sm text-slate-600">TVE, Telecinco</p></div>
                  <div><p className="font-medium">Uruguay</p><p className="text-sm text-slate-600">VTV, Teledoce</p></div>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group H - Matchday 3</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">53,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group H Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/spain-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇸</span> Spain</Link>
                <Link href="/teams/uruguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇾</span> Uruguay</Link>
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇸🇦</span> Saudi Arabia</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/monterrey-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Monterrey Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Mountain views, cabrito, and passionate football!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
