import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Argentina vs Algeria Tickets | World Cup 2026 Group J | Arrowhead Stadium",
  description: "Buy Argentina vs Algeria World Cup 2026 tickets at Arrowhead Stadium, Kansas City. June 16, 2026. Defending champions begin their title defense!",
  keywords: ["Argentina vs Algeria tickets", "World Cup 2026 Kansas City", "Messi World Cup 2026", "Argentina World Cup", "Arrowhead Stadium World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Argentina", flag: "🇦🇷", code: "ARG", nickname: "La Albiceleste" },
  awayTeam: { name: "Algeria", flag: "🇩🇿", code: "ALG", nickname: "Les Fennecs" },
  date: "June 16, 2026",
  time: "9:00 PM ET",
  venue: "Arrowhead Stadium",
  city: "Kansas City, Missouri",
  group: "J",
  matchNumber: 19,
  round: "Group Stage - Matchday 1",
  special: "DEFENDING CHAMPIONS",
}

const argentinaPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10, star: true },
  { name: "Julián Álvarez", position: "Forward", club: "Atlético Madrid", number: 9, star: true },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
  { name: "Emiliano Martínez", position: "Goalkeeper", club: "Aston Villa", number: 23 },
]

const algeriaPlayers = [
  { name: "Riyad Mahrez", position: "Forward", club: "Al-Ahli", number: 7, star: true },
  { name: "Ismaël Bennacer", position: "Midfielder", club: "AC Milan", number: 8, star: true },
  { name: "Yacine Brahimi", position: "Midfielder", club: "Al-Rayyan", number: 10 },
  { name: "Islam Slimani", position: "Forward", club: "Coritiba", number: 13 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 295, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 475, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 425, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 395, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2014, competition: "World Cup", result: "Germany 2-1 Algeria", location: "Porto Alegre" },
  { year: 2010, competition: "Friendly", result: "Argentina 4-1 Algeria", location: "Buenos Aires" },
  { year: 1982, competition: "World Cup", result: "Algeria 2-1 Germany", location: "Gijón" },
]

export default function ArgentinaVsAlgeriaPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-sky-400 via-white to-green-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-j-world-cup-2026-tickets" className="hover:text-white">Group J</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Argentina vs Algeria</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />DEFENDING CHAMPIONS</Badge>
              <Badge className="bg-white text-sky-800">GROUP J</Badge>
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
                  <h3 className="font-bold text-xl text-yellow-900">Messi&apos;s Title Defense Begins</h3>
                </div>
                <p className="text-yellow-800">The defending World Cup champions open their 2026 campaign at the world&apos;s loudest stadium! Lionel Messi, at 39 years old, leads Argentina in what could be his final World Cup. The 8-time Ballon d&apos;Or winner and 2022 World Cup hero brings La Albiceleste to Kansas City for an unforgettable opening match.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Argentina vs Algeria: The Champions Return</h2>
              <p>
                <Link href="/teams/argentina-world-cup-2026-tickets" className="text-sky-600 hover:underline">Argentina</Link> begins the defense of their 2022 World Cup title against <Link href="/teams/algeria-world-cup-2026-tickets" className="text-green-600 hover:underline">Algeria</Link> at <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Arrowhead Stadium in Kansas City</Link>. The venue holds the Guinness World Record for loudest crowd roar at 142.2 dB, and with Argentine fans traveling from around the world, expect an electric atmosphere for Messi&apos;s World Cup return.
              </p>
              <p>
                At 39, Lionel Messi enters what will likely be his final World Cup. Having achieved his lifelong dream in Qatar, the greatest player in history now seeks to become the first captain to win back-to-back World Cups since 1962. Argentina&apos;s 2022 squad remains largely intact, with Julián Álvarez, Enzo Fernández, and Emiliano Martínez all entering their prime years.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Algeria: North African Pride</h3>
              <p>
                Les Fennecs bring formidable talent to this Group J opener. Riyad Mahrez, though 35, remains one of Africa&apos;s most technically gifted players. Ismaël Bennacer provides world-class midfield control from his AC Milan experience. Algeria&apos;s 2019 AFCON triumph showed they can perform on the biggest stages.
              </p>
              <p>
                This match evokes memories of 1982, when Algeria shocked West Germany 2-1 in one of World Cup history&apos;s greatest upsets. That match led to the infamous "Disgrace of Gijón" and rule changes. Algeria will hope to write another historic chapter against the reigning champions.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Argentina&apos;s Quest for History</h3>
              <p>
                No team has won consecutive World Cups since Brazil in 1958 and 1962. Argentina enters 2026 seeking to join that exclusive club. Lionel Scaloni&apos;s tactical approach - combining Messi&apos;s genius with disciplined defensive structure - proved unstoppable in Qatar. The question now is whether they can replicate that magic four years later.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Arrowhead: The Perfect Stage</h3>
              <p>
                Kansas City&apos;s Arrowhead Stadium will be transformed into a sea of blue and white stripes. The substantial Argentine-American community ensures passionate support, while the stadium&apos;s legendary atmosphere provides a fitting backdrop for the champions&apos; return. BBQ, tailgating, and Argentine passion combine for a uniquely American World Cup experience.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇦🇷</span> Argentina</h4>
                    <div className="space-y-2">
                      {argentinaPlayers.map((player) => (
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
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇩🇿</span> Algeria</h4>
                    <div className="space-y-2">
                      {algeriaPlayers.map((player) => (
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Argentina</p><p className="text-sm text-slate-600">TyC Sports, TV Pública</p></div>
                  <div><p className="font-medium">Algeria</p><p className="text-sm text-slate-600">ENTV, beIN Sports</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">🔥 High Demand - Messi&apos;s opening match!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group J - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">76,416</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group J Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/argentina-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇷</span> Argentina<Badge className="ml-auto text-xs">Champions</Badge></Link>
                <Link href="/teams/algeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇩🇿</span> Algeria</Link>
                <Link href="/teams/austria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇦🇹</span> Austria</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/kansas-city-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Kansas City Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">BBQ capital meets World Cup champions!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
