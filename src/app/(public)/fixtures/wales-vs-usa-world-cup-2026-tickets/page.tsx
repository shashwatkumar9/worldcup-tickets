import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Zap, Flag, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "Wales vs USA Tickets | World Cup 2026 | 2022 Rematch | Bale's Last vs USA Home",
  description: "Buy Wales vs USA World Cup 2026 tickets - rematch of 2022's 1-1 draw! Gareth Bale's penalty rescued Wales. Now USA host at their home World Cup!",
  keywords: ["Wales vs USA tickets", "World Cup 2026 rematch", "Wales World Cup 2026", "USA World Cup 2026", "Gareth Bale World Cup", "Pulisic World Cup"],
}

const matchInfo = {
  homeTeam: { name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", code: "WAL", nickname: "Dragons" },
  awayTeam: { name: "USA", flag: "🇺🇸", code: "USA", nickname: "USMNT" },
  date: "June 16, 2026",
  time: "1:00 PM ET",
  venue: "Lumen Field",
  city: "Seattle, Washington",
  group: "A",
  matchNumber: 10,
  round: "Group Stage - Matchday 1",
}

const walesPlayers = [
  { name: "Brennan Johnson", position: "Forward", club: "Tottenham", number: 11, star: true },
  { name: "Harry Wilson", position: "Midfielder", club: "Fulham", number: 7, star: true },
  { name: "Ethan Ampadu", position: "Midfielder", club: "Chelsea", number: 15 },
  { name: "Daniel James", position: "Winger", club: "Leeds United", number: 20 },
]

const usaPlayers = [
  { name: "Christian Pulisic", position: "Forward", club: "AC Milan", number: 10, star: true },
  { name: "Gio Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7, star: true },
  { name: "Tyler Adams", position: "Midfielder", club: "Bournemouth", number: 4 },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 275, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 445, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 395, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 365, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "USA 1-1 Wales", location: "Al Rayyan", notable: true },
  { year: 2020, competition: "Friendly", result: "Wales 0-0 USA", location: "Swansea" },
]

export default function WalesVsUSAPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-green-700 to-blue-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-a-world-cup-2026-tickets" className="hover:text-white">Group A</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Wales vs USA</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Zap className="h-4 w-4 mr-2" />2022 REMATCH</Badge>
              <Badge className="bg-blue-600 text-white"><Flag className="h-4 w-4 mr-2" />HOST NATION</Badge>
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
                  <h3 className="font-bold text-xl text-red-900">DOHA 2022: BALE&apos;S LATE RESCUE</h3>
                </div>
                <p className="text-red-800">November 21, 2022: Tim Weah put USA ahead in the 36th minute. American fans celebrated. Then, in the 82nd minute, Gareth Bale won a penalty and converted it himself. 1-1. Wales had snatched a point. Now these teams meet again, but this time USA are the hosts in Seattle!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Wales vs USA: The 2022 Rematch</h2>
              <p>
                <Link href="/teams/wales-world-cup-2026-tickets" className="text-red-700 hover:underline">Wales</Link> and <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA</Link> meet again four years after their dramatic 1-1 draw in Qatar. At <Link href="/venues/lumen-field-world-cup-2026-tickets" className="text-green-600 hover:underline">Lumen Field in Seattle</Link>, the Americans get home advantage in this Group A opener. The Pacific Northwest&apos;s passionate soccer community will create an incredible atmosphere.
              </p>
              <p>
                That 2022 match saw USA dominate for long stretches. Tim Weah&apos;s goal seemed enough until Gareth Bale - Wales&apos; greatest ever player - stepped up late. His penalty rescued a point and set the tone for Wales&apos; World Cup. For the USA, it felt like two points dropped. Revenge beckons in Seattle.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Post-Bale Wales</h3>
              <p>
                Gareth Bale retired after the 2022 World Cup, leaving a massive void. Wales must rebuild around new stars. Brennan Johnson has emerged as a Premier League talent at Tottenham, while Harry Wilson provides Fulham creativity. The Dragons need their young generation to step up and fill legendary boots.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">USA&apos;s Home World Cup</h3>
              <p>
                Christian Pulisic and the USMNT have dreamed of this moment - a home World Cup. Playing in Seattle, one of American soccer&apos;s spiritual homes, gives USA every advantage. The Sounders fanbase creates MLS&apos;s best atmosphere. 69,000 fans will roar for every American touch. Wales will feel like true away underdogs.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Pulisic&apos;s Moment</h3>
              <p>
                Christian Pulisic enters the 2026 World Cup as America&apos;s biggest star. His Serie A success at AC Milan has elevated his game. At 27, in his prime, playing at home - this is Pulisic&apos;s tournament. Against Wales, he&apos;ll want to set the tone with a statement performance. His pace and skill can unlock any defense.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Seattle&apos;s Soccer Culture</h3>
              <p>
                <Link href="/venues/lumen-field-world-cup-2026-tickets" className="text-green-600 hover:underline">Lumen Field</Link> is American soccer&apos;s cathedral. The Seattle Sounders have created one of MLS&apos;s most passionate supporter cultures. The stadium&apos;s acoustics amplify crowd noise. For a World Cup opener, Seattle provides the perfect American soccer showcase.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group A Battle</h3>
              <p>
                With host nations <Link href="/teams/mexico-world-cup-2026-tickets" className="text-green-700 hover:underline">Mexico</Link> and the Netherlands also in Group A, USA and Wales need points from each other. A draw helped neither team progress efficiently in 2022. Both will play for the win, knowing the group&apos;s difficulty demands maximum points.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span> Wales</h4>
                    <div className="space-y-2">
                      {walesPlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇺🇸</span> USA</h4>
                    <div className="space-y-2">
                      {usaPlayers.map((player) => (
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
              <CardHeader><CardTitle>Head-to-Head Record</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.notable ? "bg-red-100 border-2 border-red-300" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.notable ? "destructive" : "outline"}>{match.year}</Badge>
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
                  <div><p className="font-medium">Wales/UK</p><p className="text-sm text-slate-600">BBC, S4C (Welsh)</p></div>
                  <div><p className="font-medium">Canada</p><p className="text-sm text-slate-600">TSN, CTV</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+ in select markets</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-blue-400">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - HOST NATION!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-blue-600 font-medium">USA&apos;s home World Cup opener!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group A - Matchday 1</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">69,000</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group A Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇸</span> USA (Host)</Link>
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇽</span> Mexico (Host)</Link>
                <Link href="/teams/netherlands-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇱</span> Netherlands</Link>
                <Link href="/teams/wales-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁷󠁬󠁳󠁿</span> Wales</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/seattle-world-cup-2026-travel-guide" className="text-green-600 hover:underline text-sm">Seattle Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Pacific Northwest passion!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
