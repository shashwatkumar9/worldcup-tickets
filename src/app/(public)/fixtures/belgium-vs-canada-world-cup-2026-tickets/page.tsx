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
  Users,
  Star,
  TrendingUp,
  Tv,
  Flag,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Belgium vs Canada Tickets | World Cup 2026 Group G | BMO Field",
  description: "Buy Belgium vs Canada World Cup 2026 tickets at BMO Field, Toronto. Host nation Canada face Belgium at home!",
  keywords: [
    "Belgium vs Canada tickets",
    "World Cup 2026 Toronto tickets",
    "Belgium World Cup 2026 tickets",
    "Canada World Cup 2026 tickets",
    "BMO Field World Cup",
    "FIFA World Cup 2026 Canada",
    "Toronto World Cup tickets",
    "Red Devils vs Les Rouges tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Canada", flag: "🇨🇦", code: "CAN", nickname: "Les Rouges", fifaRanking: 43, group: "G" },
  awayTeam: { name: "Belgium", flag: "🇧🇪", code: "BEL", nickname: "Red Devils", fifaRanking: 3, group: "G" },
  date: "June 17, 2026",
  time: "7:00 PM ET",
  venue: "BMO Field",
  city: "Toronto, Canada",
  group: "G",
  matchNumber: 25,
  round: "Group Stage",
  expectedAttendance: 45000,
}

const canadaPlayers = [
  { name: "Alphonso Davies", position: "Defender", club: "Bayern Munich", number: 19, star: true },
  { name: "Jonathan David", position: "Forward", club: "Lille", number: 20, star: true },
  { name: "Tajon Buchanan", position: "Forward", club: "Inter Milan", number: 11 },
  { name: "Milan Borjan", position: "Goalkeeper", club: "Red Star Belgrade", number: 18 },
]

const belgiumPlayers = [
  { name: "Kevin De Bruyne", position: "Midfielder", club: "Manchester City", number: 7, star: true },
  { name: "Jérémy Doku", position: "Forward", club: "Manchester City", number: 11, star: true },
  { name: "Romelu Lukaku", position: "Forward", club: "Inter Milan", number: 9 },
  { name: "Thibaut Courtois", position: "Goalkeeper", club: "Real Madrid", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 295, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 495, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 425, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 395, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2022, competition: "World Cup", result: "Belgium 1-0 Canada", location: "Qatar" },
  { year: 1989, competition: "Friendly", result: "Belgium 2-0 Canada", location: "Brussels" },
]

export default function BelgiumVsCanadaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fixtures/group-g-world-cup-2026-tickets" className="hover:text-white">Group G</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Belgium vs Canada</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-red-700 text-white text-lg px-4 py-1">
                <Home className="h-4 w-4 mr-2" />
                HOST NATION MATCH
              </Badge>
              <Badge className="bg-white text-red-800">GROUP G</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-red-700 text-white">Host Nation</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match {matchInfo.matchNumber}</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-black text-yellow-400">FIFA #{matchInfo.awayTeam.fifaRanking}</Badge>
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
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Belgium vs Canada Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group G Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-red-400 bg-gradient-to-r from-red-50 via-white to-black/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-700 flex items-center justify-center flex-shrink-0">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-900">Canada&apos;s World Cup Revenge Mission</h3>
                    <p className="text-red-800 mt-2">
                      At the 2022 World Cup, Canada dominated Belgium but lost 1-0 after Alphonso Davies missed
                      a penalty. Now, on home soil at BMO Field in Toronto, Les Rouges have the chance to exact
                      revenge against the Red Devils in front of a roaring Canadian crowd. This Group G clash
                      carries enormous significance for Canadian football&apos;s future.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-red-600" />
                  Complete Match Preview: Belgium vs Canada
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026: Host Nation vs European Giants</h3>
                <p>
                  The <strong>Belgium vs Canada World Cup 2026</strong> match is one of the tournament&apos;s
                  most anticipated fixtures. On <strong>June 17, 2026</strong> at <strong>BMO Field in Toronto</strong>,
                  host nation Canada faces one of Europe&apos;s strongest teams in a Group G encounter with
                  enormous implications. Canada&apos;s remarkable football growth faces its biggest test against
                  Belgium&apos;s star-studded squad.
                </p>

                <h3>Canada: The Awakening Giant</h3>
                <p>
                  <strong>Canada (Les Rouges)</strong> has transformed from football afterthought to genuine
                  World Cup participant. Their 2022 qualification ended a 36-year World Cup absence, and the
                  2026 tournament as co-hosts represents Canadian football&apos;s most important moment. A
                  generation of world-class talents, led by <strong>Alphonso Davies</strong>, has elevated
                  Canada into the global football conversation.
                </p>
                <p>
                  <strong>Alphonso Davies</strong> (Bayern Munich) is one of the world&apos;s elite left-backs,
                  combining devastating pace with technical excellence. His attacking runs and defensive recovery
                  speed make him invaluable. <strong>Jonathan David</strong> (Lille) has established himself as
                  one of Europe&apos;s most prolific young strikers, bringing clinical finishing to Canada&apos;s
                  attack. <strong>Tajon Buchanan</strong> (Inter Milan) provides width and creativity on the wing.
                </p>

                <h3>Belgium: Golden Generation&apos;s Final Chapter</h3>
                <p>
                  <strong>Belgium (Red Devils)</strong> reached World Cup semifinals in 2018 but have yet to
                  convert their golden generation&apos;s talent into major trophy success. The core of De Bruyne,
                  Lukaku, and Courtois represents possibly the last chance for this group to win on the biggest
                  stage. Belgium enters 2026 with experience, quality, and motivation to finally deliver.
                </p>
                <p>
                  <strong>Kevin De Bruyne</strong> (Manchester City) is widely considered the world&apos;s best
                  playmaker, with vision and passing range that unlock any defense. <strong>Jérémy Doku</strong>
                  (Manchester City) has emerged as Belgium&apos;s most exciting attacking talent, bringing pace
                  and dribbling ability. <strong>Romelu Lukaku</strong> remains a potent goalscorer, while
                  <strong>Thibaut Courtois</strong> (Real Madrid) is among the world&apos;s elite goalkeepers.
                </p>

                <h3>BMO Field: Toronto&apos;s Football Home</h3>
                <p>
                  <strong>BMO Field</strong> serves as a perfect stage for Canadian football&apos;s biggest
                  moment. Home to Toronto FC, the 45,000-capacity stadium will be expanded and upgraded for
                  World Cup hosting. Toronto&apos;s multicultural population and passionate sports fans ensure
                  an electric atmosphere, with Canadian supporters creating the most hostile environment Belgium
                  will face in the tournament.
                </p>

                <h3>2022 World Cup Heartbreak</h3>
                <p>
                  The <strong>2022 World Cup</strong> meeting in Qatar was cruel for Canada. Despite dominating
                  possession and creating numerous chances, <strong>Alphonso Davies</strong> missed an early
                  penalty. Belgium won 1-0 through <strong>Michy Batshuayi&apos;s</strong> first-half goal,
                  with Canada lamenting their wastefulness. The performance earned widespread praise, but the
                  result remained painful. This rematch offers Canadian redemption on home soil.
                </p>

                <h3>Tactical Considerations</h3>
                <p>
                  Canada will likely play with attacking intent, using <strong>Davies&apos;s</strong> overlapping
                  runs and <strong>David&apos;s</strong> movement to create chances. The home crowd will drive
                  Canadian pressing intensity, potentially unsettling Belgian composure. Set pieces offer additional
                  opportunities against Belgium&apos;s aging defense.
                </p>
                <p>
                  Belgium will rely on <strong>De Bruyne&apos;s</strong> ability to control tempo and find
                  attacking runners with precise passes. <strong>Doku&apos;s</strong> one-on-one ability creates
                  problems for any defense. Counter-attacks through <strong>Lukaku</strong> offer Belgium&apos;s
                  most direct route to goal when Canada commits numbers forward.
                </p>

                <h3>The Davies Factor</h3>
                <p>
                  <strong>Alphonso Davies</strong> represents everything about Canadian football&apos;s
                  transformation. His journey from Ghanaian refugee to Bayern Munich star and Canadian hero
                  inspires millions. The 2022 penalty miss motivates him to deliver in 2026. As Canada&apos;s
                  best player and most recognized face, Davies carries enormous responsibility - and expectation.
                </p>

                <h3>Group G Implications</h3>
                <p>
                  Group G features Belgium, Canada, and two other teams competing for knockout stage places.
                  Victory for Canada against Belgium would send shockwaves through the tournament and essentially
                  guarantee progression. For Belgium, winning against a host nation provides ideal momentum for
                  the knockout stages. The stakes couldn&apos;t be higher for either team.
                </p>

                <h3>Canadian Football&apos;s Moment</h3>
                <p>
                  This match represents the culmination of Canadian football&apos;s development. Investment in
                  youth systems, the growth of Major League Soccer, and the emergence of world-class talents
                  has transformed the sport&apos;s standing in a hockey-dominated country. A World Cup on home
                  soil, with matches against elite opponents, could permanently elevate football in the Canadian
                  sporting landscape.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Belgium vs Canada World Cup 2026 tickets</strong> are the hottest tickets in Canadian
                  sports history. Prices start from approximately $295 USD for Category 4 seats, with premium
                  hospitality packages commanding premium prices. Canadian demand will be unprecedented, with
                  nationwide interest in supporting Les Rouges against Belgium. Tickets will sell out immediately
                  through official FIFA channels.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇦</span> Canada Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {canadaPlayers.map((player) => (
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
                  <Link href="/teams/canada-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Canada Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-black/5">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇧🇪</span> Belgium Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {belgiumPlayers.map((player) => (
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
                  <Link href="/teams/belgium-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Belgium Squad</Button>
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
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 text-sm">
                    <strong>2022 Heartbreak:</strong> Canada dominated Belgium but lost 1-0 after Alphonso Davies
                    missed an early penalty. This rematch on home soil offers redemption.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Venue: BMO Field
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">45,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">2007</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">TFC</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-700">6</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/bmo-field-world-cup-2026-tickets">
                  <Button className="w-full bg-red-700 hover:bg-red-800">
                    View All BMO Field Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Toronto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Toronto is Canada&apos;s largest city and most diverse metropolis. World-class dining, cultural
                  attractions, and vibrant neighborhoods make it an exceptional World Cup destination.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Toronto Pearson (YYZ)</li>
                      <li>• TTC subway system</li>
                      <li>• Union Station rail hub</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• CN Tower</li>
                      <li>• Distillery District</li>
                      <li>• Kensington Market</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/toronto-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Toronto Travel Guide
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
                  Belgium vs Canada will attract record Canadian viewership as the nation rallies behind their
                  World Cup team. Expect comprehensive coverage across all platforms.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Canada</p>
                    <p className="text-sm text-slate-500">TSN / CTV</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Belgium</p>
                    <p className="text-sm text-slate-500">VRT / RTBF</p>
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
            <Card className="sticky top-24 border-red-400">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-600" />
                  Buy Belgium vs Canada Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>HOST NATION - Canada&apos;s biggest match!</span>
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
                    <Button size="sm" className="bg-red-700 hover:bg-red-800 text-white" asChild>
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
                  <span className="font-medium">Toronto, ON</span>
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
                <CardTitle>Group G Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/belgium-vs-egypt-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇧🇪 vs 🇪🇬</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/belgium-vs-canada-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 border border-red-200">
                  <span>🇧🇪 vs 🇨🇦</span>
                  <span className="text-sm">Jun 17</span>
                  <Badge className="ml-auto bg-red-600 text-white text-xs">Host</Badge>
                </Link>
                <Link href="/fixtures/canada-vs-egypt-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇦 vs 🇪🇬</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 21</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/canada-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇨🇦 Canada Team Page
                </Link>
                <Link href="/teams/belgium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇧🇪 Belgium Team Page
                </Link>
                <Link href="/venues/bmo-field-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ BMO Field
                </Link>
                <Link href="/travel/toronto-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Toronto Travel Guide
                </Link>
                <Link href="/fixtures/group-g-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group G Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
