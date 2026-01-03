import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Zap, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Serbia vs Switzerland Tickets | World Cup 2026 | Controversial Rivalry | Political Tension",
  description: "Buy Serbia vs Switzerland World Cup 2026 tickets - football's most politically charged fixture! Kosovo controversy, eagle celebrations, heated history!",
  keywords: ["Serbia vs Switzerland tickets", "World Cup 2026 Serbia Switzerland", "Xhaka Shaqiri eagle", "Kosovo football controversy", "Serbia World Cup 2026"],
}

const matchInfo = {
  homeTeam: { name: "Serbia", flag: "🇷🇸", code: "SRB", nickname: "Eagles" },
  awayTeam: { name: "Switzerland", flag: "🇨🇭", code: "SUI", nickname: "Nati" },
  date: "June 21, 2026",
  time: "4:00 PM ET",
  venue: "Mercedes-Benz Stadium",
  city: "Atlanta, Georgia",
  group: "F",
  matchNumber: 40,
  round: "Group Stage - Matchday 2",
}

const serbiaPlayers = [
  { name: "Dušan Vlahović", position: "Forward", club: "Juventus", number: 9, star: true },
  { name: "Aleksandar Mitrović", position: "Forward", club: "Al-Hilal", number: 7, star: true },
  { name: "Sergej Milinković-Savić", position: "Midfielder", club: "Al-Hilal", number: 20 },
  { name: "Dušan Tadić", position: "Midfielder", club: "Fenerbahçe", number: 10 },
]

const switzerlandPlayers = [
  { name: "Granit Xhaka", position: "Midfielder", club: "Bayer Leverkusen", number: 10, star: true },
  { name: "Xherdan Shaqiri", position: "Forward", club: "Chicago Fire", number: 23, star: true },
  { name: "Breel Embolo", position: "Forward", club: "Monaco", number: 7 },
  { name: "Manuel Akanji", position: "Defender", club: "Manchester City", number: 5 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 165, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 275, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 245, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 225, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Switzerland 3-2 Serbia", location: "Doha", tense: true },
  { year: 2018, competition: "World Cup", result: "Switzerland 2-1 Serbia", location: "Kaliningrad", controversial: true },
  { year: 2014, competition: "Friendly", result: "Serbia 2-0 Switzerland", location: "St. Gallen" },
]

export default function SerbiaVsSwitzerlandPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-blue-900 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-f-world-cup-2026-tickets" className="hover:text-white">Group F</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Serbia vs Switzerland</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Zap className="h-4 w-4 mr-2" />HEATED RIVALRY</Badge>
              <Badge className="bg-white text-black">GROUP F</Badge>
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
                  <h3 className="font-bold text-xl text-red-900">FOOTBALL&apos;S MOST POLITICALLY CHARGED FIXTURE</h3>
                </div>
                <p className="text-red-800">The 2018 World Cup saw Xhaka and Shaqiri celebrate goals with Albanian eagle hand gestures, infuriating Serbia. Both Swiss stars have Kosovar Albanian heritage. Serbia doesn&apos;t recognize Kosovo&apos;s independence. FIFA fined the players but the tension remains. Every meeting since has been electric!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Serbia vs Switzerland: More Than Football</h2>
              <p>
                <Link href="/teams/serbia-world-cup-2026-tickets" className="text-red-700 hover:underline">Serbia</Link> versus <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-red-600 hover:underline">Switzerland</Link> represents football&apos;s most politically charged fixture. The Swiss team includes several players with Kosovar Albanian heritage, including Granit Xhaka and Xherdan Shaqiri. Serbia&apos;s non-recognition of Kosovo&apos;s independence adds geopolitical tension to every meeting.
              </p>
              <p>
                The 2018 and 2022 World Cups both saw Switzerland defeat Serbia in tense, controversial matches. Goal celebrations, gestures, and heated confrontations marked both games. At <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Mercedes-Benz Stadium in Atlanta</Link>, this rivalry continues on neutral American soil.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">2018: The Eagle Celebration</h3>
              <p>
                When Xhaka scored Switzerland&apos;s equalizer in 2018, he celebrated by making an Albanian eagle gesture with his hands. Shaqiri&apos;s winner received the same celebration. Serbian fans and players were furious. FIFA fined both players $10,000 each. The incident became international news beyond football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">2022: Switzerland Wins Again</h3>
              <p>
                In Qatar, Switzerland won a thrilling 3-2 match with tensions throughout. Shaqiri scored again, celebrating more restrainedly but still drawing Serbian anger. Serbia&apos;s elimination in the group stage added salt to wounds. The Eagles have never beaten Switzerland at a World Cup.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Vlahović and Serbia&apos;s Attack</h3>
              <p>
                Serbia boasts incredible attacking talent. Dušan Vlahović leads Juventus&apos; attack with clinical finishing. Aleksandar Mitrović remains one of Europe&apos;s most prolific strikers. If Serbia can channel emotion into performance rather than controversy, they have firepower to finally beat Switzerland.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Swiss Professionalism</h3>
              <p>
                Switzerland approaches these matches with Bundesliga-quality professionalism. Granit Xhaka has become one of world football&apos;s best midfielders at Bayer Leverkusen. Manuel Akanji provides Premier League-winning defensive excellence from Manchester City. The Nati know how to handle pressure situations.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Atlanta: Neutral Ground</h3>
              <p>
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">Mercedes-Benz Stadium</Link> in Atlanta provides neutral American ground for this heated fixture. Both nations have diaspora communities in the US, ensuring vocal support. FIFA and American security will prepare for potential incidents. The football should be electric.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group F Implications</h3>
              <p>
                This Group F match could determine knockout qualification. Both teams need points to progress. Serbia&apos;s desperation to finally beat Switzerland adds motivation. Switzerland&apos;s confidence from previous victories creates belief. The winner takes a massive step toward the Round of 32.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇷🇸</span> Serbia</h4>
                    <div className="space-y-2">
                      {serbiaPlayers.map((player) => (
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
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.controversial || match.tense ? "bg-red-100 border-2 border-red-300" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.controversial || match.tense ? "destructive" : "outline"}>{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-red-600 mt-4 font-medium">Switzerland has won both World Cup meetings!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Serbia</p><p className="text-sm text-slate-600">RTS</p></div>
                  <div><p className="font-medium">Switzerland</p><p className="text-sm text-slate-600">SRF, RTS, RSI</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group F - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">71,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group F Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/serbia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇷🇸</span> Serbia</Link>
                <Link href="/teams/switzerland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇨🇭</span> Switzerland</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">Atlanta Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Southern hospitality meets heated rivalry!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
