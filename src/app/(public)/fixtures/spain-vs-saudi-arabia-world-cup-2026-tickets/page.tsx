import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Zap, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Spain vs Saudi Arabia Tickets | World Cup 2026 Group H | 2022 Shock Rematch",
  description: "Buy Spain vs Saudi Arabia World Cup 2026 tickets - rematch of 2022's biggest upset! Saudi Arabia stunned Spain 1-0 in Qatar. Will history repeat?",
  keywords: ["Spain vs Saudi Arabia tickets", "World Cup 2026 rematch", "Saudi Arabia World Cup upset", "Spain World Cup 2026", "2022 World Cup shock"],
}

const matchInfo = {
  homeTeam: { name: "Spain", flag: "🇪🇸", code: "ESP", nickname: "La Roja" },
  awayTeam: { name: "Saudi Arabia", flag: "🇸🇦", code: "KSA", nickname: "The Green Falcons" },
  date: "June 25, 2026",
  time: "4:00 PM ET",
  venue: "NRG Stadium",
  city: "Houston, Texas",
  group: "H",
  matchNumber: 48,
  round: "Group Stage - Matchday 3",
}

const spainPlayers = [
  { name: "Lamine Yamal", position: "Forward", club: "Barcelona", number: 19, star: true },
  { name: "Pedri", position: "Midfielder", club: "Barcelona", number: 8, star: true },
  { name: "Rodri", position: "Midfielder", club: "Manchester City", number: 16 },
  { name: "Dani Olmo", position: "Midfielder", club: "Barcelona", number: 10 },
]

const saudiPlayers = [
  { name: "Salem Al-Dawsari", position: "Forward", club: "Al-Hilal", number: 10, star: true },
  { name: "Mohammed Al-Owais", position: "Goalkeeper", club: "Al-Hilal", number: 1, star: true },
  { name: "Firas Al-Buraikan", position: "Forward", club: "Al-Nassr", number: 9 },
  { name: "Ali Al-Bulaihi", position: "Defender", club: "Al-Hilal", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 165, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 275, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 245, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 225, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Saudi Arabia 1-0 Spain", location: "Doha - THE SHOCK!", shock: true },
  { year: 2006, competition: "Friendly", result: "Spain 1-0 Saudi Arabia", location: "Seville" },
]

export default function SpainVsSaudiArabiaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-yellow-500 to-green-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-h-world-cup-2026-tickets" className="hover:text-white">Group H</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Spain vs Saudi Arabia</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Zap className="h-4 w-4 mr-2" />2022 SHOCK REMATCH</Badge>
              <Badge className="bg-white text-black">GROUP H</Badge>
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
                  <h3 className="font-bold text-xl text-red-900">REMEMBER DOHA 2022?</h3>
                </div>
                <p className="text-red-800">On November 26, 2022, Saudi Arabia produced one of the greatest World Cup shocks in history, defeating Spain 1-0 with a brilliant Salem Al-Dawsari winner. Spain&apos;s possession-based dominance counted for nothing against the Green Falcons&apos; defensive discipline and clinical finishing. Now they meet again in Houston for revenge or repeat!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Spain vs Saudi Arabia: Revenge or Repeat?</h2>
              <p>
                <Link href="/teams/spain-world-cup-2026-tickets" className="text-red-600 hover:underline">Spain</Link> has unfinished business with <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-green-700 hover:underline">Saudi Arabia</Link>. The 2022 World Cup saw La Roja dominate possession for 90 minutes yet lose 1-0 to the Green Falcons in a result that shocked the football world. This Group H decider at <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">NRG Stadium in Houston</Link> carries the weight of that stunning upset.
              </p>
              <p>
                Spain arrived in Qatar as favorites, having won the 2010 World Cup with their tiki-taka style. But Saudi Arabia&apos;s high defensive line, relentless pressing, and clinical counter-attacks produced one of World Cup history&apos;s greatest shocks. Salem Al-Dawsari&apos;s curling winner remains etched in the memory of every Saudi football fan.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Spain&apos;s New Generation</h3>
              <p>
                Since 2022, Spain has crowned a new golden generation. Lamine Yamal emerged as football&apos;s most exciting teenager, helping Spain win Euro 2024 at just 17 years old. Pedri provides Barcelona-quality midfield control, while Ballon d&apos;Or winner Rodri anchors the team. This Spain looks more balanced than the possession-obsessed side that fell in Qatar.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Saudi Arabia&apos;s Hero Returns</h3>
              <p>
                Salem Al-Dawsari enters 2026 as a Saudi national hero. His 2022 winner against Argentina (2-1) and Spain performances elevated him to legendary status in the Gulf. The Al-Hilal captain will be 34 but remains Saudi Arabia&apos;s most dangerous player. His ability to produce magic in crucial moments keeps Spain wary.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Tactical Evolution</h3>
              <p>
                Spain&apos;s manager Luis de la Fuente has evolved beyond pure possession. Euro 2024 showed a more direct, athletic Spain willing to attack space rather than just control it. Lamine Yamal&apos;s pace and Dani Olmo&apos;s creativity give Spain weapons they lacked in 2022. Saudi Arabia will need a new game plan to contain this revamped attack.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Houston&apos;s Saudi Connection</h3>
              <p>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">NRG Stadium</Link> in Houston provides an interesting setting. Texas has significant Saudi business connections, and the large Arab community ensures Green Falcons support. Houston&apos;s 72,000-seat stadium will create an intense atmosphere for this revenge match.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group H Finale</h3>
              <p>
                This final matchday 3 clash could decide everything in Group H. With <Link href="/teams/uruguay-world-cup-2026-tickets" className="text-sky-600 hover:underline">Uruguay</Link> also in the group, goal difference and head-to-head results may prove decisive. Spain cannot afford another Saudi shock, while the Green Falcons know another upset could propel them to the knockout rounds.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇸🇦</span> Saudi Arabia</h4>
                    <div className="space-y-2">
                      {saudiPlayers.map((player) => (
                        <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-green-50 border border-green-200" : "bg-slate-50"}`}>
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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Head-to-Head Record</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.shock ? "bg-red-100 border-2 border-red-400" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.shock ? "destructive" : "outline"}>{match.year}</Badge>
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
                  <div><p className="font-medium">Spain</p><p className="text-sm text-slate-600">TVE, Movistar+</p></div>
                  <div><p className="font-medium">Saudi Arabia</p><p className="text-sm text-slate-600">SSC, MBC</p></div>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">72,220</span></div>
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
                <Link href="/travel/houston-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Houston Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Space City hosts a World Cup rivalry!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
