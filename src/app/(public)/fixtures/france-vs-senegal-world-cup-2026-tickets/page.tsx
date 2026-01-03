import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "France vs Senegal Tickets | World Cup 2026 Group I | World Champions vs AFCON Champions",
  description: "Buy France vs Senegal World Cup 2026 tickets - Group I blockbuster! 2018 World Champions France face 2022 AFCON winners Senegal. Mbappé leads Les Bleus against the Lions of Teranga.",
  keywords: ["France vs Senegal tickets", "World Cup 2026 Group I", "France World Cup 2026", "Senegal World Cup", "Mbappé vs Senegal"],
}

const matchInfo = {
  homeTeam: { name: "France", flag: "🇫🇷", code: "FRA", nickname: "Les Bleus" },
  awayTeam: { name: "Senegal", flag: "🇸🇳", code: "SEN", nickname: "Lions of Teranga" },
  date: "June 17, 2026",
  time: "5:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "I",
  matchNumber: 25,
  round: "Group Stage - Matchday 2",
}

const francePlayers = [
  { name: "Kylian Mbappé", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Antoine Griezmann", position: "Forward", club: "Atletico Madrid", number: 7, star: true },
  { name: "Aurélien Tchouaméni", position: "Midfielder", club: "Real Madrid", number: 8 },
  { name: "Ousmane Dembélé", position: "Winger", club: "Paris Saint-Germain", number: 11 },
]

const senegalPlayers = [
  { name: "Sadio Mané", position: "Winger", club: "Al-Nassr", number: 10, star: true },
  { name: "Ismaïla Sarr", position: "Winger", club: "Marseille", number: 18, star: true },
  { name: "Kalidou Koulibaly", position: "Defender", club: "Al-Hilal", number: 3 },
  { name: "Édouard Mendy", position: "Goalkeeper", club: "Al-Ahli", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 245, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 425, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 375, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 345, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2002, competition: "World Cup Group", result: "France 0-1 Senegal", location: "Seoul" },
  { year: 2001, competition: "Friendly", result: "France 1-0 Senegal", location: "Paris" },
]

export default function FranceVsSenegalPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-800 via-white to-green-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-i-world-cup-2026-tickets" className="hover:text-white">Group I</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">France vs Senegal</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-blue-700 text-white text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2018 WORLD CHAMPIONS</Badge>
              <Badge className="bg-green-600 text-white"><Trophy className="h-4 w-4 mr-2" />2022 AFCON CHAMPIONS</Badge>
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
                  <Flame className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">CHAMPIONS COLLIDE IN NEW YORK</h3>
                </div>
                <p className="text-blue-800">World champions meet African champions in this Group I blockbuster! France&apos;s 2018 World Cup triumph and Senegal&apos;s historic 2022 AFCON victory make this a clash of continental kings. Mbappé&apos;s Real Madrid brilliance faces Mané&apos;s leadership. The 2002 World Cup upset adds historical spice to this encounter.</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">France vs Senegal: Champions Meet</h2>
              <p>
                <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link> faces <Link href="/teams/senegal-world-cup-2026-tickets" className="text-green-600 hover:underline">Senegal</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium in East Rutherford</Link>. The 2018 World Cup winners meet Africa&apos;s continental champions in a match loaded with quality and history.
              </p>
              <p>
                France reached back-to-back World Cup finals (winning 2018, losing 2022 on penalties) and remain tournament favorites. Their squad depth is unmatched - Mbappé, Griezmann, Dembélé, and emerging talents like Tchouaméni make Les Bleus the team to beat.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Mbappé&apos;s Era</h3>
              <p>
                Kylian Mbappé has transcended football stardom. His move to Real Madrid cemented his status as the world&apos;s most valuable player. Four World Cup goals in the 2022 final alone showcased his clutch ability. At 27, this could be his peak World Cup.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Lions of Teranga</h3>
              <p>
                Senegal&apos;s 2022 Africa Cup of Nations victory ended decades of hurt. Sadio Mané remains the icon, even after his Saudi Arabian move. The squad that shocked Poland and nearly beat England in Qatar returns with even more confidence.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">2002 Memories</h3>
              <p>
                Senegal shocked reigning world champions France 1-0 in the 2002 World Cup opener. Papa Bouba Diop&apos;s goal remains one of football&apos;s greatest upsets. France crashed out without scoring a goal. This rematch carries that historical weight.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">MetLife Atmosphere</h3>
              <p>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> near New York City provides a massive stage. The metro area&apos;s French and West African communities ensure passionate support for both sides. This could be one of the tournament&apos;s best group stage matches.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group I Stakes</h3>
              <p>
                With Norway and another team completing Group I, this France-Senegal clash could determine the group winner. Both nations have knockout stage pedigree. Three points here provides crucial advantage for favorable bracket positioning.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇫🇷</span> France</h4>
                    <div className="space-y-2">
                      {francePlayers.map((player) => (
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
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🇸🇳</span> Senegal</h4>
                    <div className="space-y-2">
                      {senegalPlayers.map((player) => (
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
                <p className="mt-4 text-sm text-slate-600 italic">Senegal&apos;s famous 1-0 victory in 2002 remains one of the World Cup&apos;s greatest upsets.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">France</p><p className="text-sm text-slate-600">TF1, M6, beIN Sports</p></div>
                  <div><p className="font-medium">Senegal</p><p className="text-sm text-slate-600">RTS, Canal+ Afrique</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-blue-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-blue-700 font-medium">Champions collide near NYC!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Group I - Matchday 2</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">82,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group I Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇫🇷</span> France</Link>
                <Link href="/teams/senegal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇸🇳</span> Senegal</Link>
                <Link href="/teams/norway-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇴</span> Norway</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🏴</span> TBD</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">New York Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Experience the Big Apple!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
