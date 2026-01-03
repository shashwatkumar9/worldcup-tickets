import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Spain vs Cape Verde Tickets | World Cup 2026 Group H | 2010 Champions vs African Debutants",
  description: "Buy Spain vs Cape Verde World Cup 2026 tickets - Group H clash! 2010 World Champions Spain face World Cup debutants Cape Verde. Historic Atlantic island nation moment.",
  keywords: ["Spain vs Cape Verde tickets", "World Cup 2026 Group H", "Spain World Cup 2026", "Cape Verde World Cup debut", "La Roja"],
}

const matchInfo = {
  homeTeam: { name: "Spain", flag: "🇪🇸", code: "ESP", nickname: "La Roja" },
  awayTeam: { name: "Cape Verde", flag: "🇨🇻", code: "CPV", nickname: "Blue Sharks" },
  date: "June 15, 2026",
  time: "5:00 PM ET",
  venue: "Hard Rock Stadium",
  city: "Miami, Florida",
  group: "H",
  matchNumber: 13,
  round: "Group Stage - Matchday 1",
}

const spainPlayers = [
  { name: "Pedri", position: "Midfielder", club: "Barcelona", number: 8, star: true },
  { name: "Lamine Yamal", position: "Winger", club: "Barcelona", number: 19, star: true },
  { name: "Gavi", position: "Midfielder", club: "Barcelona", number: 6 },
  { name: "Rodri", position: "Midfielder", club: "Manchester City", number: 16 },
]

const capeVerdePlayers = [
  { name: "Garry Rodrigues", position: "Winger", club: "Olympiacos", number: 7, star: true },
  { name: "Ryan Mendes", position: "Winger", club: "Al-Ahli", number: 10, star: true },
  { name: "Jamiro Monteiro", position: "Midfielder", club: "San Jose Earthquakes", number: 8 },
  { name: "Stopira", position: "Defender", club: "Anorthosis", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 165, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 275, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 245, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 225, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function SpainVsCapeVerdePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-h-world-cup-2026-tickets" className="hover:text-white">Group H</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Spain vs Cape Verde</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-red-900 text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2010 WORLD CHAMPIONS</Badge>
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
                  <h3 className="font-bold text-xl text-blue-900">ATLANTIC ISLAND DREAM COMES TRUE</h3>
                </div>
                <p className="text-blue-800">Cape Verde makes their FIFA World Cup debut against 2010 champions Spain! This tiny Atlantic island nation of just 500,000 people has achieved the extraordinary. The Blue Sharks face La Roja&apos;s golden generation led by teenage sensation Lamine Yamal. Every Cape Verdean will be watching history unfold in Miami.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Spain vs Cape Verde: Tiki-Taka Meets Blue Sharks</h2>
              <p>
                <Link href="/teams/spain-world-cup-2026-tickets" className="text-red-600 hover:underline">Spain</Link> welcomes World Cup debutants <Link href="/teams/cape-verde-world-cup-2026-tickets" className="text-blue-600 hover:underline">Cape Verde</Link> to <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-teal-600 hover:underline">Hard Rock Stadium in Miami</Link>. The 2010 World Champions and Euro 2024 winners face one of football&apos;s most remarkable underdog stories.
              </p>
              <p>
                Spain&apos;s youth revolution has delivered stunning success. The combination of Pedri, Gavi, and 17-year-old sensation Lamine Yamal has already conquered Europe. La Roja plays the beautiful game with a new generation ready to add World Cup glory.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Cape Verde&apos;s Impossible Journey</h3>
              <p>
                Cape Verde&apos;s qualification represents one of football&apos;s greatest underdog achievements. The Atlantic archipelago of just 500,000 people - smaller than most cities - has reached football&apos;s biggest tournament. Many players were born abroad but chose to represent their heritage. Their journey inspires small nations worldwide.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Lamine Yamal&apos;s Stardom</h3>
              <p>
                Lamine Yamal became the youngest ever European Championship goalscorer at Euro 2024, aged just 16. His dribbling, pace, and composure beyond his years have made him one of football&apos;s brightest stars. Against Cape Verde, Yamal will dazzle on the world stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Miami Setting</h3>
              <p>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-teal-600 hover:underline">Hard Rock Stadium</Link> provides a fitting venue in Miami&apos;s multicultural atmosphere. The city&apos;s Latin American and Caribbean communities will create a vibrant backdrop. Miami&apos;s Portuguese-speaking population from Brazil and Portugal adds connection to Cape Verde&apos;s language.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">More Than Football</h3>
              <p>
                For Cape Verde, this match transcends sport. Their presence proves that passion and organization can overcome resource limitations. Win or lose, the Blue Sharks have already achieved something extraordinary. But they&apos;ll play to compete - football produces magic moments.
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇨🇻</span> Cape Verde</h4>
                    <div className="space-y-2">
                      {capeVerdePlayers.map((player) => (
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
                    Spain and Cape Verde have never faced each other. This World Cup Group H match will be their historic first encounter.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Spain</p><p className="text-sm text-slate-600">TVE, Movistar+</p></div>
                  <div><p className="font-medium">Cape Verde</p><p className="text-sm text-slate-600">RTC, RTP África</p></div>
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
                <p className="text-sm text-red-700 font-medium">Witness history in Miami!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group H - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">65,326</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group H Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/spain-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇸</span> Spain</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🇨🇻</span> Cape Verde</span>
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇸🇦</span> Saudi Arabia</Link>
                <Link href="/teams/uruguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇾</span> Uruguay</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="text-teal-600 hover:underline text-sm">Miami Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Experience Magic City!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
