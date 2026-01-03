import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Trophy, Tv, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Saudi Arabia vs Uruguay Tickets | World Cup 2026 Group H | South American Legends Meet Middle East",
  description: "Buy Saudi Arabia vs Uruguay World Cup 2026 tickets - Group H opener! 2x World Champions Uruguay face Asian powerhouse Saudi Arabia. Núñez vs Al-Dawsari.",
  keywords: ["Saudi Arabia vs Uruguay tickets", "World Cup 2026 Group H", "Uruguay World Cup 2026", "Saudi Arabia World Cup", "Group H fixtures"],
}

const matchInfo = {
  homeTeam: { name: "Saudi Arabia", flag: "🇸🇦", code: "KSA", nickname: "The Green Falcons" },
  awayTeam: { name: "Uruguay", flag: "🇺🇾", code: "URU", nickname: "La Celeste" },
  date: "June 15, 2026",
  time: "2:00 PM ET",
  venue: "NRG Stadium",
  city: "Houston, Texas",
  group: "H",
  matchNumber: 14,
  round: "Group Stage - Matchday 1",
}

const saudiPlayers = [
  { name: "Salem Al-Dawsari", position: "Forward", club: "Al-Hilal", number: 10, star: true },
  { name: "Mohammed Al-Owais", position: "Goalkeeper", club: "Al-Hilal", number: 1, star: true },
  { name: "Saleh Al-Shehri", position: "Forward", club: "Al-Hilal", number: 11 },
  { name: "Ali Al-Bulaihi", position: "Defender", club: "Al-Hilal", number: 12 },
]

const uruguayPlayers = [
  { name: "Darwin Núñez", position: "Forward", club: "Liverpool", number: 11, star: true },
  { name: "Federico Valverde", position: "Midfielder", club: "Real Madrid", number: 15, star: true },
  { name: "Ronald Araújo", position: "Defender", club: "Barcelona", number: 4 },
  { name: "Rodrigo Bentancur", position: "Midfielder", club: "Tottenham", number: 6 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 225, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 205, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 185, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "Friendly", result: "Saudi Arabia 0-0 Uruguay", location: "Jeddah" },
]

export default function SaudiArabiaVsUruguayPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-700 via-white to-sky-500 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-h-world-cup-2026-tickets" className="hover:text-white">Group H</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Saudi Arabia vs Uruguay</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-sky-600 text-white text-lg px-4 py-1"><Trophy className="h-4 w-4 mr-2" />2X WORLD CHAMPIONS</Badge>
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
            <Card className="border-green-400 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-6 w-6 text-green-600" />
                  <h3 className="font-bold text-xl text-green-900">REMEMBER ARGENTINA 2022?</h3>
                </div>
                <p className="text-green-800">Salem Al-Dawsari&apos;s stunning winner against Argentina in 2022 remains one of the greatest World Cup upsets ever. Now Saudi Arabia faces another South American giant. Uruguay are 2x World Champions with Darwin Núñez leading their attack. Can the Green Falcons produce another shock?</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Saudi Arabia vs Uruguay: Group H Opens</h2>
              <p>
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-green-600 hover:underline">Saudi Arabia</Link> faces <Link href="/teams/uruguay-world-cup-2026-tickets" className="text-sky-600 hover:underline">Uruguay</Link> at <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">NRG Stadium in Houston</Link> as Group H kicks off. This match pairs the 2022 tournament&apos;s biggest upset-makers with two-time World Champions.
              </p>
              <p>
                Uruguay&apos;s football heritage is unmatched relative to their population. Two World Cup titles, multiple Copa America wins, and a tradition of producing world-class players. Darwin Núñez and Federico Valverde represent the latest generation of Uruguayan excellence.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Saudi Arabia&apos;s 2022 Legacy</h3>
              <p>
                That 2-1 victory over Argentina changed Saudi football forever. The King declared a national holiday. Salem Al-Dawsari became a national hero. Though they didn&apos;t advance in 2022, the Green Falcons proved they can compete with anyone on their day.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Uruguay&apos;s Young Core</h3>
              <p>
                Darwin Núñez has developed into one of the Premier League&apos;s most explosive strikers at Liverpool. Federico Valverde provides Real Madrid with box-to-box excellence. Ronald Araújo anchors Barcelona&apos;s defense. This Uruguayan generation combines experience with youthful energy.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Houston Setting</h3>
              <p>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">NRG Stadium</Link> in Houston provides ideal conditions. Texas has a significant Latino population that will support Uruguay, while Saudi Arabia&apos;s growing diaspora will create their own atmosphere.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group H Stakes</h3>
              <p>
                With Spain and Cape Verde also in Group H, every point matters. Saudi Arabia needs to continue their 2022 momentum. Uruguay needs to start strong against a dangerous opponent. Neither team can afford to underestimate the other.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">Saudi Arabia</p><p className="text-sm text-slate-600">SSC, beIN Sports</p></div>
                  <div><p className="font-medium">Uruguay</p><p className="text-sm text-slate-600">VTV, Teledoce</p></div>
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX, Telemundo</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">FIFA+</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-green-500">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-green-700 font-medium">Group H opener in Houston!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">72,220</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Group H Teams</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/spain-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇪🇸</span> Spain</Link>
                <Link href="/teams/uruguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇾</span> Uruguay</Link>
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇸🇦</span> Saudi Arabia</Link>
                <span className="flex items-center gap-2 p-2 text-slate-500"><span>🇨🇻</span> Cape Verde</span>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/houston-world-cup-2026-travel-guide" className="text-blue-600 hover:underline text-sm">Houston Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">Space City welcomes the World Cup!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
