import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Ticket,
  ExternalLink,
  ChevronRight,
  Clock,
  Trophy,
  Users,
  Star,
  TrendingUp,
  Tv,
  Flag,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Australia vs Turkey Tickets | World Cup 2026 Group D | BC Place Vancouver",
  description: "Buy Australia vs Turkey World Cup 2026 tickets at BC Place, Vancouver. June 12, 2026. Group D clash between Socceroos and Turkish national team!",
  keywords: [
    "Australia vs Turkey tickets",
    "World Cup 2026 Vancouver tickets",
    "Socceroos World Cup 2026 tickets",
    "Turkey World Cup 2026 tickets",
    "BC Place World Cup tickets",
    "FIFA World Cup 2026 Australia",
    "Vancouver World Cup tickets",
    "Australia Turkey World Cup",
  ],
}

const matchInfo = {
  homeTeam: { name: "Australia", flag: "🇦🇺", code: "AUS", nickname: "Socceroos" },
  awayTeam: { name: "Turkey", flag: "🇹🇷", code: "TUR", nickname: "Ay-Yıldızlılar" },
  date: "June 12, 2026",
  time: "12:00 AM ET / 9:00 PM PT",
  venue: "BC Place",
  city: "Vancouver, Canada",
  group: "D",
  matchNumber: 4,
  round: "Group Stage",
}

const australiaPlayers = [
  { name: "Craig Goodwin", position: "Forward", club: "Al-Shabab", number: 7, star: true },
  { name: "Harry Souttar", position: "Defender", club: "Leicester City", number: 19, star: true },
  { name: "Riley McGree", position: "Midfielder", club: "Middlesbrough", number: 10 },
  { name: "Maty Ryan", position: "Goalkeeper", club: "AS Roma", number: 1 },
]

const turkeyPlayers = [
  { name: "Hakan Çalhanoğlu", position: "Midfielder", club: "Inter Milan", number: 10, star: true },
  { name: "Arda Güler", position: "Midfielder", club: "Real Madrid", number: 15, star: true },
  { name: "Kenan Yıldız", position: "Forward", club: "Juventus", number: 18 },
  { name: "Merih Demiral", position: "Defender", club: "Al-Ahli", number: 4 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 135, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 195, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 170, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 155, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2005, competition: "World Cup Playoff", result: "Turkey 2-4 Australia (agg)", location: "Sydney" },
  { year: 2005, competition: "World Cup Playoff", result: "Turkey 0-0 Australia", location: "Istanbul" },
  { year: 1999, competition: "Friendly", result: "Australia 0-2 Turkey", location: "Melbourne" },
]

export default function AustraliaVsTurkeyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/groups/group-d-world-cup-2026-tickets" className="hover:text-white">Group D</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Australia vs Turkey</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-600 text-white">GROUP D</Badge>
              <Badge variant="outline" className="text-white border-white">Match 4</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Day 2</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{matchInfo.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{matchInfo.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{matchInfo.venue}, {matchInfo.city}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Match Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group D Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Historic Match Banner */}
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-yellow-900">Playoff Rivals Meet Again</h3>
                    <p className="text-yellow-800 mt-2">
                      Australia and Turkey have unfinished business dating back to their dramatic 2005 World Cup
                      playoff. The Socceroos won that epic encounter to qualify for their first World Cup in 32 years,
                      while Turkey missed out despite being 2002 World Cup semi-finalists. This Group D rematch at
                      BC Place in Vancouver promises similar intensity as both nations compete for knockout stage qualification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-yellow-600" />
                  Complete Match Preview: Australia vs Turkey
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026 Group D Clash</h3>
                <p>
                  The <strong>Australia vs Turkey World Cup 2026</strong> match brings together two nations with a
                  memorable shared history. On <strong>June 12, 2026</strong> at <strong>BC Place in Vancouver</strong>,
                  the Socceroos and the Turkish national team will face off in what promises to be a critical Group D
                  fixture. Both teams are realistic contenders for second place behind the host nation USA, making
                  this encounter crucial for knockout stage aspirations.
                </p>

                <h3>Australia&apos;s Asian Power</h3>
                <p>
                  The <strong>Socceroos</strong> have established themselves as one of Asia&apos;s premier footballing
                  nations since joining the Asian Football Confederation in 2006. Their consistent qualification for
                  World Cups and deep runs in the Asian Cup have demonstrated their quality. Under current management,
                  Australia has developed an exciting blend of experienced campaigners and emerging talents.
                </p>
                <p>
                  <strong>Craig Goodwin</strong> emerged as a star of the 2022 World Cup with his stunning goal against
                  France, and remains a key attacking threat. In defense, <strong>Harry Souttar</strong> (Leicester City)
                  has developed into one of the most commanding center-backs outside of Europe&apos;s traditional powers.
                  The squad also features young talents like <strong>Riley McGree</strong> (Middlesbrough) who bring
                  energy and creativity to the midfield.
                </p>

                <h3>Turkey&apos;s Golden Generation Returns</h3>
                <p>
                  <strong>Turkey</strong> enters World Cup 2026 with renewed optimism following their qualification
                  through the UEFA playoffs. After missing the 2018 and 2022 tournaments, Turkish football has
                  undergone a resurgence built around a crop of exceptional young talents who have conquered European
                  football. The Ay-Yıldızlılar (Star and Crescent) bring passion, quality, and a point to prove.
                </p>
                <p>
                  <strong>Hakan Çalhanoğlu</strong> (Inter Milan) orchestrates play from midfield with world-class
                  vision and technique. The emergence of <strong>Arda Güler</strong> (Real Madrid) has electrified
                  Turkish football - at just 21, he&apos;s already established himself at the biggest club in the
                  world. <strong>Kenan Yıldız</strong> (Juventus) provides additional attacking quality. This Turkish
                  generation may be their most talented since the 2002 squad that finished third at the World Cup.
                </p>

                <h3>BC Place: Vancouver&apos;s World Cup Stage</h3>
                <p>
                  <strong>BC Place</strong> in downtown Vancouver offers a spectacular setting for this Group D clash.
                  The retractable roof stadium, which hosted the 2010 Winter Olympics opening and closing ceremonies,
                  provides a world-class atmosphere. With a capacity of 54,000 for World Cup matches, the venue
                  combines Canadian hospitality with excellent facilities and stunning city/mountain views.
                </p>
                <p>
                  Vancouver&apos;s multicultural population includes significant Australian and Turkish communities,
                  ensuring passionate support for both teams. The city&apos;s reputation for natural beauty and outdoor
                  lifestyle makes it an attractive destination for traveling fans, while the nearby Rocky Mountains
                  provide a dramatic backdrop for the World Cup festivities.
                </p>

                <h3>The 2005 Playoff: Historic Context</h3>
                <p>
                  The most memorable encounter between these nations came in November 2005, when Australia and Turkey
                  met in a two-legged playoff for a place at the 2006 World Cup. Turkey, fresh from their third-place
                  finish at the 2002 World Cup, were favorites. However, Australia drew 0-0 in Istanbul and then
                  won 4-2 in a dramatic encounter in Sydney, with <strong>John Aloisi</strong>&apos;s penalty in the
                  shootout becoming one of Australian football&apos;s most iconic moments.
                </p>
                <p>
                  That playoff ended Turkey&apos;s golden era and launched Australia&apos;s modern World Cup journey.
                  Twenty-one years later, this Group D meeting provides opportunity for both nations to write new
                  chapters in their World Cup histories.
                </p>

                <h3>Key Tactical Battles</h3>
                <p>
                  The battle between Turkey&apos;s creative midfielders and Australia&apos;s physical defensive approach
                  will be crucial. <strong>Hakan Çalhanoğlu</strong> and <strong>Arda Güler</strong> will look to
                  unlock the Socceroos defense with their passing ability and vision. Australia&apos;s physical
                  approach, led by <strong>Harry Souttar&apos;s</strong> aerial dominance, could neutralize Turkey&apos;s
                  technical advantage.
                </p>
                <p>
                  On the counter-attack, <strong>Craig Goodwin&apos;s</strong> pace and directness will test Turkey&apos;s
                  defense. The Socceroos&apos; ability to transition quickly and put pressure on Turkish defenders
                  could create opportunities against a team that prefers to control possession.
                </p>

                <h3>What&apos;s at Stake</h3>
                <p>
                  With the USA likely to top Group D, both Australia and Turkey are battling for second place and
                  guaranteed qualification. The expanded 48-team format means third place could still advance,
                  but both nations will target a top-two finish for a favorable knockout draw. Victory in this
                  opener would be a huge step toward that goal.
                </p>
                <p>
                  For Australia, continuing their impressive World Cup record since 2006 is paramount. For Turkey,
                  returning to the World Cup knockout stages for the first time since 2002 would validate their
                  football renaissance. The stakes couldn&apos;t be higher for this late-night Vancouver encounter.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Australia vs Turkey World Cup 2026 tickets</strong> offer excellent value compared to
                  matches involving host nations. Prices start from approximately $135 USD for Category 4 seats.
                  Both Australian and Turkish fans are known for traveling in large numbers to major tournaments,
                  so early purchase is recommended. The late kickoff time (9:00 PM Pacific) creates an exciting
                  night-time atmosphere in Vancouver.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇺</span> Australia Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {australiaPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold">
                            {player.number}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{player.name}</p>
                              {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                            </div>
                            <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/teams/australia-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Australia Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇹🇷</span> Turkey Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {turkeyPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
                            {player.number}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{player.name}</p>
                              {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                            </div>
                            <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/teams/turkey-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Turkey Squad</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Head to Head */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Head-to-Head Record
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {headToHead.map((match, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{match.result}</p>
                        <p className="text-sm text-slate-500">{match.competition} • {match.location}</p>
                      </div>
                      <Badge variant="outline">{match.year}</Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Playoff History:</strong> Australia won the dramatic 2005 World Cup playoff 4-2 on
                    aggregate (4-2 in Sydney after 0-0 in Istanbul) to qualify for the 2006 World Cup.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-yellow-600" />
                  Venue: BC Place
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-700">54,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-700">1983</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-700">2010</p>
                    <p className="text-sm text-slate-600">Olympics</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-700">7</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/bc-place-world-cup-2026-tickets">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    View All BC Place Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Vancouver</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Vancouver combines stunning natural beauty with cosmopolitan urban life. Mountains, ocean, and
                  world-class dining make it one of the world&apos;s most livable cities and a perfect World Cup destination.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Vancouver International (YVR)</li>
                      <li>• SkyTrain direct to stadium</li>
                      <li>• SeaBus from North Vancouver</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Stanley Park</li>
                      <li>• Capilano Suspension Bridge</li>
                      <li>• Granville Island</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/vancouver-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Vancouver Travel Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Broadcast Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tv className="h-5 w-5" />
                  Broadcast Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Australia vs Turkey will be broadcast globally. The late-night kickoff in Vancouver means
                  early morning viewing in Australia and Turkey - prime time for passionate fans.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Australia</p>
                    <p className="text-sm text-slate-500">SBS / Optus Sport</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Turkey</p>
                    <p className="text-sm text-slate-500">TRT / beIN Sports</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Canada</p>
                    <p className="text-sm text-slate-500">TSN / CTV</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Global</p>
                    <p className="text-sm text-slate-500">FIFA+</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24 border-yellow-400">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-yellow-600" />
                  Buy Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-yellow-700 text-sm bg-yellow-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>Good availability - book now!</span>
                </div>

                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div>
                        <p className="font-medium">{link.partner}</p>
                        <p className="text-sm text-green-600">From ${link.price_from}</p>
                        <p className="text-xs text-slate-400">{link.rating}</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Buy
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Match Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Date</span>
                  <span className="font-medium">{matchInfo.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Kickoff</span>
                  <span className="font-medium">{matchInfo.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Stadium</span>
                  <span className="font-medium">{matchInfo.venue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">City</span>
                  <span className="font-medium">Vancouver</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Group</span>
                  <span className="font-medium">Group {matchInfo.group}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Match Number</span>
                  <span className="font-medium">#{matchInfo.matchNumber}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group D Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/usa-vs-paraguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇺🇸 vs 🇵🇾</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 12</span>
                </Link>
                <Link href="/fixtures/australia-vs-turkey-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 border border-yellow-200">
                  <span>🇦🇺 vs 🇹🇷</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 12</span>
                </Link>
                <Link href="/fixtures/usa-vs-australia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇺🇸 vs 🇦🇺</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 19</span>
                </Link>
                <Link href="/fixtures/paraguay-vs-turkey-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇵🇾 vs 🇹🇷</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 19</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/australia-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇦🇺 Australia Team Page
                </Link>
                <Link href="/teams/turkey-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇹🇷 Turkey Team Page
                </Link>
                <Link href="/venues/bc-place-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ BC Place
                </Link>
                <Link href="/travel/vancouver-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Vancouver Travel Guide
                </Link>
                <Link href="/groups/group-d-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group D Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
