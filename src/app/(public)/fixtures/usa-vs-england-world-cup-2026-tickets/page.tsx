import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Clock, Users, Star, Flame, Trophy, Tv, Flag } from "lucide-react"

export const metadata: Metadata = {
  title: "USA vs England Tickets | World Cup 2026 | Host Nation vs Three Lions | MetLife Stadium",
  description: "Buy USA vs England World Cup 2026 tickets - the biggest match on American soil! Host nation USA faces England at MetLife Stadium. Trans-Atlantic rivalry!",
  keywords: ["USA vs England tickets", "World Cup 2026 USA England", "USA World Cup 2026", "England World Cup 2026", "MetLife Stadium World Cup", "Pulisic vs Bellingham"],
}

const matchInfo = {
  homeTeam: { name: "USA", flag: "🇺🇸", code: "USA", nickname: "USMNT" },
  awayTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", nickname: "Three Lions" },
  date: "June 28, 2026",
  time: "7:00 PM ET",
  venue: "MetLife Stadium",
  city: "East Rutherford, New Jersey",
  group: "Cross-Group",
  matchNumber: 58,
  round: "Round of 32",
}

const usaPlayers = [
  { name: "Christian Pulisic", position: "Forward", club: "AC Milan", number: 10, star: true },
  { name: "Gio Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7, star: true },
  { name: "Tyler Adams", position: "Midfielder", club: "Bournemouth", number: 4 },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
]

const englandPlayers = [
  { name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", number: 10, star: true },
  { name: "Bukayo Saka", position: "Forward", club: "Arsenal", number: 7, star: true },
  { name: "Phil Foden", position: "Midfielder", club: "Manchester City", number: 11 },
  { name: "Harry Kane", position: "Forward", club: "Bayern Munich", number: 9 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 495, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 895, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 795, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 745, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "USA 0-0 England", location: "Al Khor" },
  { year: 2010, competition: "World Cup", result: "USA 1-1 England", location: "Rustenburg" },
  { year: 1950, competition: "World Cup", result: "USA 1-0 England", location: "Belo Horizonte", shock: true },
]

export default function USAvsEnglandPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="hover:text-white">Round of 32</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">USA vs England</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-600 text-white text-lg px-4 py-1"><Flame className="h-4 w-4 mr-2" />TRANS-ATLANTIC CLASH</Badge>
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
            <Card className="border-blue-400 bg-gradient-to-r from-red-50 via-white to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-slate-900">THE MATCH AMERICA HAS WAITED FOR</h3>
                </div>
                <p className="text-slate-700">The United States hosts England in what could be the biggest soccer match ever played on American soil. At MetLife Stadium in New Jersey, the host nation faces the Three Lions in a potential Round of 32 clash. History, rivalry, and American soccer&apos;s biggest moment collide in this trans-Atlantic showdown!</p>
              </CardContent>
            </Card>

            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">USA vs England: America&apos;s Biggest Soccer Match</h2>
              <p>
                <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA</Link> hosting <Link href="/teams/england-world-cup-2026-tickets" className="text-red-600 hover:underline">England</Link> at the World Cup represents a watershed moment for American soccer. At <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">MetLife Stadium in New Jersey</Link>, 82,500 fans will witness the sport&apos;s two largest English-speaking nations battle in knockout football. This is the match American soccer has dreamed of for decades.
              </p>
              <p>
                The rivalry has World Cup history. In 1950, an amateur American team shocked England 1-0 in Brazil - one of the greatest upsets in World Cup history. The USA held England to draws in 2010 and 2022. Now, on home soil, the Americans have their best chance yet to defeat the Three Lions in a competitive match that truly matters.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Pulisic: America&apos;s Captain</h3>
              <p>
                Christian Pulisic enters the 2026 World Cup as America&apos;s biggest star. His Serie A success at AC Milan proves he belongs among Europe&apos;s elite. At 27, Pulisic leads a golden generation that grew up dreaming of hosting a World Cup. Against England, he&apos;ll carry an entire nation&apos;s hopes. His dribbling, pace, and big-game mentality make him a genuine threat.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Bellingham: England&apos;s Best</h3>
              <p>
                Jude Bellingham arrived at Real Madrid and immediately became the world&apos;s best midfielder. At 22, he&apos;s won La Liga, scored in Champions League finals, and led England to Euro 2024 contention. The Bellingham vs Pulisic subplot adds individual brilliance to the team narrative. Both players define their nation&apos;s football identity.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">England&apos;s 60-Year Wait</h3>
              <p>
                England haven&apos;t won a major tournament since 1966. Two Euro finals (2020, 2024) ended in heartbreak. Thomas Tuchel&apos;s tactical acumen and world-class talent offer hope, but England know tournament football is unforgiving. Traveling to America, surrounded by hostile crowds and optimistic hosts, presents new challenges.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">America&apos;s Coming of Age</h3>
              <p>
                The 2026 World Cup represents American soccer&apos;s graduation. MLS has grown into a serious league. American players populate top European clubs. The sport&apos;s popularity has exploded. Beating England at home would validate decades of growth and announce America as a genuine football nation to the world.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">MetLife Stadium: 82,500 Strong</h3>
              <p>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-red-600 hover:underline">MetLife Stadium</Link> hosts the World Cup Final, and USA vs England deserves that stage. The New York/New Jersey metro area&apos;s massive population ensures ticket demand like no other American sporting event. English fans will travel in numbers, but they&apos;ll be vastly outnumbered by American supporters finally seeing their team on the world stage at home.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Stakes Beyond Football</h3>
              <p>
                This match transcends sport. American networks have dreamed of this matchup. Global viewership will be immense. For the USA, victory would be cultural validation. For England, losing to America at their home World Cup would be devastating. The pressure is immense on both sides.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><span className="text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</h4>
                    <div className="space-y-2">
                      {englandPlayers.map((player) => (
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
              <CardHeader><CardTitle>World Cup Head-to-Head</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${match.shock ? "bg-yellow-100 border-2 border-yellow-400" : "bg-slate-50"}`}>
                      <div>
                        <p className="font-medium">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant={match.shock ? "default" : "outline"}>{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-4">USA are unbeaten against England at World Cups: 2 draws and the famous 1950 upset!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Tv className="h-5 w-5" />Broadcast Information</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><p className="font-medium">USA</p><p className="text-sm text-slate-600">FOX (Prime Time!), Telemundo</p></div>
                  <div><p className="font-medium">UK</p><p className="text-sm text-slate-600">BBC, ITV</p></div>
                  <div><p className="font-medium">Global</p><p className="text-sm text-slate-600">Expected 1B+ viewers worldwide</p></div>
                  <div><p className="font-medium">Streaming</p><p className="text-sm text-slate-600">Peacock, fuboTV, Tubi</p></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-red-400">
              <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="h-5 w-5" />Buy Tickets - EXTREME DEMAND!</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-600 font-medium">Highest demand match of the tournament!</p>
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
                <div className="flex justify-between"><span className="text-slate-600">Stage</span><span className="font-medium">Round of 32 (Projected)</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Date</span><span className="font-medium">{matchInfo.date}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Kickoff</span><span className="font-medium">{matchInfo.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Venue</span><span className="font-medium">{matchInfo.venue}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Capacity</span><span className="font-medium">82,500</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Team Pages</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇸</span> USA (Host)</Link>
                <Link href="/teams/england-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Travel Guide</CardTitle></CardHeader>
              <CardContent>
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="text-red-600 hover:underline text-sm">New York/New Jersey Travel Guide →</Link>
                <p className="text-sm text-slate-600 mt-2">The biggest match on American soil!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
