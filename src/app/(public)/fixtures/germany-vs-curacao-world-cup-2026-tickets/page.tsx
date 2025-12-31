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
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Germany vs Curaçao Tickets | World Cup 2026 Group E | NRG Stadium Houston",
  description: "Buy Germany vs Curaçao World Cup 2026 tickets at NRG Stadium, Houston. June 14, 2026. Witness Curaçao's historic World Cup debut against four-time champions!",
  keywords: [
    "Germany vs Curacao tickets",
    "World Cup 2026 Houston tickets",
    "Germany World Cup 2026 tickets",
    "Curacao World Cup 2026 tickets",
    "NRG Stadium World Cup tickets",
    "FIFA World Cup 2026 Germany",
    "Houston World Cup tickets",
    "Curacao World Cup debut",
  ],
}

const matchInfo = {
  homeTeam: { name: "Germany", flag: "🇩🇪", code: "GER", nickname: "Die Mannschaft" },
  awayTeam: { name: "Curaçao", flag: "🇨🇼", code: "CUW", nickname: "Turtles" },
  date: "June 14, 2026",
  time: "1:00 PM ET / 12:00 PM CT",
  venue: "NRG Stadium",
  city: "Houston, Texas",
  group: "E",
  matchNumber: 9,
  round: "Group Stage",
  special: "HISTORIC DEBUT",
}

const germanyPlayers = [
  { name: "Jamal Musiala", position: "Midfielder", club: "Bayern Munich", number: 10, star: true },
  { name: "Florian Wirtz", position: "Midfielder", club: "Bayer Leverkusen", number: 17, star: true },
  { name: "Kai Havertz", position: "Forward", club: "Arsenal", number: 7 },
  { name: "Joshua Kimmich", position: "Midfielder", club: "Bayern Munich", number: 6 },
]

const curacaoPlayers = [
  { name: "Juninho Bacuna", position: "Midfielder", club: "Birmingham City", number: 8, star: true },
  { name: "Eloy Room", position: "Goalkeeper", club: "Columbus Crew", number: 1, star: true },
  { name: "Jafar Arias", position: "Forward", club: "De Graafschap", number: 9 },
  { name: "Shermaine Martina", position: "Defender", club: "HNK Gorica", number: 3 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 215, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 185, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 165, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function GermanyVsCuracaoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-red-600 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/groups/group-e-world-cup-2026-tickets" className="hover:text-white">Group E</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Germany vs Curaçao</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-blue-500 text-white text-lg px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" />
                HISTORIC DEBUT
              </Badge>
              <Badge className="bg-white text-black">GROUP E</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-yellow-400 text-black">4x Champions</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match 9</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-blue-500 text-white">WC Debut!</Badge>
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
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Historic Match Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group E Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-blue-400 bg-gradient-to-r from-blue-50 to-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900">A Caribbean Dream Comes True</h3>
                    <p className="text-blue-800 mt-2">
                      Curaçao makes their historic FIFA World Cup debut against four-time champions Germany in one
                      of the tournament&apos;s most emotionally charged matches. This tiny Caribbean island of just
                      150,000 people has achieved the impossible - qualifying for football&apos;s greatest stage.
                      Against the might of Germany, every Curaçaoan will be watching as their nation writes
                      football history at NRG Stadium in Houston.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-blue-500" />
                  Complete Match Preview: Germany vs Curaçao
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026 Historic Group E Match</h3>
                <p>
                  The <strong>Germany vs Curaçao World Cup 2026</strong> match represents one of football&apos;s
                  greatest David vs Goliath stories. On <strong>June 14, 2026</strong> at <strong>NRG Stadium in
                  Houston</strong>, the tiny Caribbean island nation will make their World Cup debut against one
                  of football&apos;s most successful nations. This Group E encounter encapsulates everything magical
                  about the World Cup - dreams, underdogs, and the belief that anything is possible.
                </p>

                <h3>Germany: Seeking Redemption</h3>
                <p>
                  <strong>Germany (Die Mannschaft)</strong> enters World Cup 2026 looking to reclaim their status
                  among football&apos;s elite. Back-to-back group stage exits in 2018 and 2022 ended their streak
                  of reaching at least the semifinals at major tournaments. The four-time World Cup winners (1954,
                  1974, 1990, 2014) have rebuilt around an exceptional young generation determined to restore
                  German football to glory.
                </p>
                <p>
                  <strong>Jamal Musiala</strong> (Bayern Munich) has emerged as one of the world&apos;s most exciting
                  talents, combining dribbling ability with end product at an extraordinary level. <strong>Florian
                  Wirtz</strong> (Bayer Leverkusen) offers similar creative brilliance, making Germany&apos;s
                  midfield one of the most talented in the tournament. <strong>Kai Havertz</strong> and
                  <strong>Joshua Kimmich</strong> provide experience and quality, while young defenders like
                  Nico Schlotterbeck represent Germany&apos;s future.
                </p>

                <h3>Curaçao: The Impossible Dream</h3>
                <p>
                  <strong>Curaçao (The Turtles)</strong> represents the smallest nation ever to qualify for a FIFA
                  World Cup. This Dutch Caribbean island of just 150,000 people has achieved what seemed impossible
                  - earning their place among the world&apos;s 48 best nations. Their qualification came through
                  remarkable performances in CONCACAF qualifying, proving that passion and organization can overcome
                  resource limitations.
                </p>
                <p>
                  <strong>Juninho Bacuna</strong> leads Curaçao with his English Football League experience, providing
                  a focal point in midfield. Goalkeeper <strong>Eloy Room</strong> (Columbus Crew) brings MLS quality
                  and shot-stopping ability. The squad is built around players from Dutch, MLS, and Caribbean leagues,
                  united by their love for their island nation. Coach Patrick Kluivert, the former Netherlands and
                  Barcelona star, has transformed Curaçao into a competitive force.
                </p>

                <h3>NRG Stadium: Texas Welcomes the World</h3>
                <p>
                  <strong>NRG Stadium</strong> in Houston provides an incredible stage for Curaçao&apos;s World Cup
                  debut. The 72,000-capacity retractable roof stadium ensures comfortable conditions regardless of
                  Texas summer heat. Houston&apos;s diverse population, including a significant Dutch and Caribbean
                  community, guarantees passionate support for this historic encounter.
                </p>

                <h3>Historical Significance</h3>
                <p>
                  This match will be the first-ever meeting between Germany and Curaçao. Germany has a perfect record
                  against World Cup debutants, often winning by significant margins. However, the expanded 48-team
                  format creates opportunities for smaller nations, and Curaçao&apos;s defensive organization
                  under Kluivert could make this closer than expected.
                </p>

                <h3>The Curaçao Story</h3>
                <p>
                  Curaçao&apos;s World Cup qualification represents one of football&apos;s great underdog stories.
                  The island, part of the Kingdom of the Netherlands, has a football association that only became
                  FIFA members in 1958. For decades, they struggled to compete even regionally. The transformation
                  began with investment in youth development and the recruitment of Patrick Kluivert, whose
                  connections brought European attention to Curaçaoan talent.
                </p>

                <h3>Tactical Analysis</h3>
                <p>
                  Germany will dominate possession and create numerous chances. The challenge for Curaçao is
                  organization, discipline, and taking any opportunities that arise. Kluivert&apos;s defensive
                  approach will likely see Curaçao sitting deep and trying to frustrate Germany, hoping for
                  counter-attacking opportunities or set pieces.
                </p>
                <p>
                  Germany&apos;s <strong>Musiala-Wirtz</strong> partnership will test any defense. Their movement,
                  one-twos, and ability to find space in tight areas make them almost impossible to contain
                  completely. Curaçao must hope that collective organization can limit German creativity.
                </p>

                <h3>Why This Match Matters</h3>
                <p>
                  Beyond the result, this match symbolizes why the World Cup expansion matters. Curaçao&apos;s
                  participation inspires small nations worldwide, proving that the World Cup dream is achievable
                  for anyone. For the Curaçaoan people, simply being here is victory. But they&apos;ll play to
                  compete, and football has a way of producing magical moments.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Germany vs Curaçao World Cup 2026 tickets</strong> offer the chance to witness history.
                  Prices start from approximately $145 USD for Category 4 seats. German fan demand will be high,
                  as Die Mannschaft&apos;s supporters travel in large numbers. Meanwhile, Curaçaoan fans will
                  make every effort to support their team&apos;s historic World Cup debut.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇩🇪</span> Germany Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {germanyPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
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
                  <Link href="/teams/germany-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Germany Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇼</span> Curaçao Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {curacaoPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
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
                  <Link href="/teams/curacao-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Curaçao Squad</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* First Meeting */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Head-to-Head Record
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-6 bg-blue-50 rounded-lg text-center">
                  <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-900">First Ever Meeting!</h3>
                  <p className="text-blue-700 mt-2">
                    Germany and Curaçao have never faced each other in any competition.
                    This World Cup Group E match will be their historic first encounter.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  Venue: NRG Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">72,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">2002</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">Texans</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">7</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    View All NRG Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Houston</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Houston, America&apos;s fourth-largest city, offers space exploration, world-class dining,
                  and legendary Texas hospitality. The diverse metropolis welcomes World Cup fans with Southern charm.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Houston Bush (IAH) or Hobby (HOU)</li>
                      <li>• MetroRail to NRG Park</li>
                      <li>• Extensive highway network</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• NASA Space Center</li>
                      <li>• Museum District</li>
                      <li>• Tex-Mex cuisine</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/houston-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Houston Travel Guide
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
                  Germany vs Curaçao will be broadcast globally, with special attention on Curaçao&apos;s
                  historic World Cup debut. The entire Caribbean will be watching.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Germany</p>
                    <p className="text-sm text-slate-500">ARD / ZDF</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Curaçao</p>
                    <p className="text-sm text-slate-500">TeleCuraçao</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">USA</p>
                    <p className="text-sm text-slate-500">FOX / Telemundo</p>
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
            <Card className="sticky top-24 border-blue-400">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-500" />
                  Buy Historic Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-blue-700 text-sm bg-blue-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>Witness Curaçao&apos;s World Cup debut!</span>
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
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600" asChild>
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
                  <span className="font-medium">Houston</span>
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
                <CardTitle>Group E Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/germany-vs-curacao-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 border border-blue-200">
                  <span>🇩🇪 vs 🇨🇼</span>
                  <span className="text-sm">Jun 14</span>
                  <Badge className="ml-auto bg-blue-500 text-white text-xs">Debut</Badge>
                </Link>
                <Link href="/fixtures/ecuador-vs-ivory-coast-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇪🇨 vs 🇨🇮</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 14</span>
                </Link>
                <Link href="/fixtures/germany-vs-ivory-coast-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇩🇪 vs 🇨🇮</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 20</span>
                </Link>
                <Link href="/fixtures/ecuador-vs-curacao-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇪🇨 vs 🇨🇼</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 20</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/germany-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇩🇪 Germany Team Page
                </Link>
                <Link href="/teams/curacao-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇨🇼 Curaçao Team Page
                </Link>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ NRG Stadium
                </Link>
                <Link href="/travel/houston-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Houston Travel Guide
                </Link>
                <Link href="/groups/group-e-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group E Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
