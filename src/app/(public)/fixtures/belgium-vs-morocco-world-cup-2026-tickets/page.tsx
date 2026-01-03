import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Zap, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Belgium vs Morocco Tickets | World Cup 2026 | 2022 Upset Rematch | Brussels Riots Memory",
  description: "Buy Belgium vs Morocco World Cup 2026 tickets - rematch of 2022's shocking upset! Morocco beat Belgium 2-0, sparking riots in Brussels. Revenge or repeat?",
  keywords: ["Belgium vs Morocco tickets", "World Cup 2026 rematch", "Belgium World Cup 2026", "Morocco World Cup 2026", "2022 World Cup upset", "Brussels riots"],
}

const matchInfo = {
  homeTeam: { name: "Belgium", flag: "🇧🇪", code: "BEL", nickname: "Red Devils" },
  awayTeam: { name: "Morocco", flag: "🇲🇦", code: "MAR", nickname: "Atlas Lions" },
  date: "June 22, 2026",
  time: "1:00 PM ET",
  venue: "Lincoln Financial Field",
  city: "Philadelphia, Pennsylvania",
  group: "G",
  matchNumber: 41,
  round: "Group Stage - Matchday 2",
}

const belgiumPlayers = [
  { name: "Jérémy Doku", position: "Winger", club: "Manchester City", number: 11, star: true },
  { name: "Amadou Onana", position: "Midfielder", club: "Aston Villa", number: 6, star: true },
  { name: "Kevin De Bruyne", position: "Midfielder", club: "Manchester City", number: 7 },
  { name: "Romelu Lukaku", position: "Forward", club: "Roma", number: 9 },
]

const moroccoPlayers = [
  { name: "Achraf Hakimi", position: "Defender", club: "PSG", number: 2, star: true },
  { name: "Hakim Ziyech", position: "Midfielder", club: "Galatasaray", number: 7, star: true },
  { name: "Youssef En-Nesyri", position: "Forward", club: "Sevilla", number: 19 },
  { name: "Sofyan Amrabat", position: "Midfielder", club: "Manchester United", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 185, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 305, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 275, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 255, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Morocco 2-0 Belgium", location: "Al Thumama", upset: true },
  { year: 1994, competition: "World Cup", result: "Belgium 1-0 Morocco", location: "Orlando" },
]

export default function BelgiumVsMoroccoPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-black via-yellow-500 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-g-world-cup-2026-tickets" className="hover:text-white">Group G</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Belgium vs Morocco</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Zap className="h-4 w-4 mr-2" />2022 UPSET REMATCH</Badge>
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
                  <Zap className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">QATAR 2022: MOROCCO STUNS BELGIUM</h3>
                </div>
                <p className="text-red-800">November 27, 2022: Morocco defeated Belgium 2-0, sending shockwaves through the tournament. Romain Saïss and Zakaria Aboukhlal scored as the Atlas Lions dominated the FIFA #2 ranked team. In Brussels, celebrations turned to riots as Belgian-Moroccans rejoiced while disappointed locals clashed with police. The result foreshadowed Morocco&apos;s historic run to the semifinals!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Belgium vs Morocco: Golden Generation vs African Giants</h2>
              <p>
                <Link href="/teams/belgium-world-cup-2026-tickets" className="text-red-600 hover:underline">Belgium</Link>&apos;s golden generation gets another chance against <Link href="/teams/morocco-world-cup-2026-tickets" className="text-red-700 hover:underline">Morocco</Link> at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-green-600 hover:underline">Lincoln Financial Field in Philadelphia</Link>. The 2022 defeat accelerated Belgium&apos;s golden generation decline. Morocco went on to become Africa&apos;s first World Cup semifinalists. Four years later, both teams have evolved.
              </p>
              <p>
                That 2022 match exposed Belgium&apos;s aging squad. Hazard, De Bruyne, and Lukaku couldn&apos;t break down Morocco&apos;s disciplined defense. Walid Regragui&apos;s tactical masterclass humiliated the tournament favorites. The scenes in Brussels afterward - riots, police water cannons, burning cars - showed how much this result meant to both communities.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Belgium&apos;s New Generation</h3>
              <p>
                Since 2022, Belgium has rebuilt. Jérémy Doku emerged as a Manchester City star - one of the Premier League&apos;s most exciting wingers. Amadou Onana provides midfield power from Aston Villa. While De Bruyne and Lukaku remain, they&apos;re supported by younger, hungrier players. Belgium&apos;s transition offers hope for 2026.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Morocco: Africa&apos;s Best</h3>
              <p>
                Morocco&apos;s 2022 run was historic - defeating Belgium, Spain, and Portugal before falling to France. They proved African teams can compete with anyone. Achraf Hakimi remains world-class at PSG. Hakim Ziyech provides creativity. The core that made history returns hungry for more.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Brussels&apos; Complex Demographics</h3>
              <p>
                Belgium has one of Europe&apos;s largest Moroccan diaspora populations, concentrated in Brussels. The 2022 match split the capital. Moroccan-Belgian celebrations were intense; some Belgian fans couldn&apos;t accept the defeat. This fixture carries weight beyond football - it&apos;s about identity, belonging, and community.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Philadelphia Setting</h3>
              <p>
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-green-600 hover:underline">Lincoln Financial Field</Link> in Philadelphia provides neutral American ground. The city&apos;s diverse population ensures support for both nations. The 69,000-seat stadium hosts NFL games and knows atmosphere. Security will be prepared given the fixture&apos;s history.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group G Stakes</h3>
              <p>
                This Group G match could determine both teams&apos; knockout hopes. Belgium needs to prove their rebuild worked. Morocco wants to confirm 2022 wasn&apos;t a one-off miracle. Pride, points, and progress all ride on 90 minutes in Philadelphia.
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
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇲🇦</span> Morocco</h4>
                    <div className="space-y-2">
                      {moroccoPlayers.map((player) => (
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
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.upset ? "bg-red-100 border-2 border-red-400" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.upset ? "destructive" : "outline"}>{match.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Belgium</p><p className="text-sm text-slate-600">VRT, RTBF</p></div>
                  <div><p className="font-medium">Morocco</p><p className="text-sm text-slate-600">2M, beIN Sports</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-400">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - REMATCH!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">2022 shock rematch - revenge or repeat?</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">69,176</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group G Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/belgium-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇧🇪</span> Belgium</Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇦</span> Morocco</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/philadelphia-world-cup-2026-travel-guide" className="text-green-600 hover:underline text-sm">Philadelphia Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Brotherly Love hosts the rematch!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
