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
  Flame,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Brazil vs Morocco Tickets | World Cup 2026 Group C | Lincoln Financial Field",
  description: "Buy Brazil vs Morocco World Cup 2026 tickets at Lincoln Financial Field, Philadelphia. June 13, 2026. Five-time champions face 2022 semifinalists!",
  keywords: [
    "Brazil vs Morocco tickets",
    "World Cup 2026 Philadelphia tickets",
    "Brazil World Cup 2026 tickets",
    "Morocco World Cup 2026 tickets",
    "Lincoln Financial Field World Cup",
    "FIFA World Cup 2026 Brazil",
    "Philadelphia World Cup tickets",
    "Seleção vs Atlas Lions tickets",
  ],
}

const matchInfo = {
  homeTeam: { name: "Brazil", flag: "🇧🇷", code: "BRA", nickname: "Seleção" },
  awayTeam: { name: "Morocco", flag: "🇲🇦", code: "MAR", nickname: "Atlas Lions" },
  date: "June 13, 2026",
  time: "9:00 PM ET",
  venue: "Lincoln Financial Field",
  city: "Philadelphia, Pennsylvania",
  group: "C",
  matchNumber: 8,
  round: "Group Stage",
  special: "BLOCKBUSTER MATCH",
}

const brazilPlayers = [
  { name: "Vinícius Jr.", position: "Forward", club: "Real Madrid", number: 7, star: true },
  { name: "Rodrygo", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Casemiro", position: "Midfielder", club: "Manchester United", number: 5 },
  { name: "Alisson", position: "Goalkeeper", club: "Liverpool", number: 1 },
]

const moroccoPlayers = [
  { name: "Achraf Hakimi", position: "Defender", club: "PSG", number: 2, star: true },
  { name: "Hakim Ziyech", position: "Forward", club: "Galatasaray", number: 7, star: true },
  { name: "Sofyan Amrabat", position: "Midfielder", club: "Fiorentina", number: 4 },
  { name: "Yassine Bounou", position: "Goalkeeper", club: "Al-Hilal", number: 1 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 275, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 425, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 380, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 350, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2023, competition: "Friendly", result: "Morocco 2-1 Brazil", location: "Tangier" },
  { year: 2008, competition: "Friendly", result: "Brazil 2-0 Morocco", location: "Casablanca" },
  { year: 1998, competition: "World Cup", result: "Brazil 3-0 Morocco", location: "Nantes" },
]

export default function BrazilVsMoroccoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 via-yellow-400 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/groups/group-c-world-cup-2026-tickets" className="hover:text-white">Group C</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Brazil vs Morocco</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-1">
                <Flame className="h-4 w-4 mr-2" />
                BLOCKBUSTER MATCH
              </Badge>
              <Badge className="bg-white text-green-800">GROUP C</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-yellow-500 text-black">5x Champions</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match 8</Badge>
              </div>

              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.awayTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.awayTeam.name}</h2>
                <p className="text-white/80">{matchInfo.awayTeam.nickname}</p>
                <Badge className="mt-2 bg-red-600 text-white">2022 Semifinalists</Badge>
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
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Blockbuster Match Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View All Group C Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Match Banner */}
            <Card className="border-yellow-400 bg-gradient-to-r from-green-50 via-yellow-50 to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Flame className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-900">The Match Everyone Wants to See</h3>
                    <p className="text-green-800 mt-2">
                      Five-time World Cup champions Brazil face 2022 semifinalists Morocco in one of the most
                      anticipated group stage matches of the entire tournament. The Seleção&apos;s samba football
                      meets the Atlas Lions&apos; defensive brilliance and counter-attacking prowess. Morocco
                      shocked the world in 2022 - now they face football&apos;s most successful nation. This is
                      appointment viewing for every football fan on the planet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-green-600" />
                  Complete Match Preview: Brazil vs Morocco
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026&apos;s Blockbuster Group Stage Clash</h3>
                <p>
                  The <strong>Brazil vs Morocco World Cup 2026</strong> match is arguably the biggest group stage
                  fixture of the entire tournament. On <strong>June 13, 2026</strong> at <strong>Lincoln Financial
                  Field in Philadelphia</strong>, football&apos;s most successful nation faces the team that captivated
                  the world in Qatar. This Group C showdown brings together Brazilian flair and Moroccan resilience
                  in a match that would grace any knockout stage.
                </p>

                <h3>Brazil: The Eternal Champions</h3>
                <p>
                  <strong>Brazil (Seleção)</strong> remains football&apos;s most successful nation with five World Cup
                  titles (1958, 1962, 1970, 1994, 2002). Despite a disappointing exit in Qatar 2022, Brazil enters 2026
                  with renewed hunger and perhaps the most talented squad in world football. The weight of expectation
                  is immense - Brazil hasn&apos;t won the World Cup since 2002, and the entire nation demands nothing
                  less than glory on North American soil.
                </p>
                <p>
                  <strong>Vinícius Jr.</strong> (Real Madrid) has established himself as one of the world&apos;s best
                  players, combining electrifying pace with devastating skill. His Champions League-winning teammate
                  <strong>Rodrygo</strong> provides additional attacking quality. <strong>Casemiro</strong> brings
                  experience and steel to midfield, while <strong>Alisson</strong> remains one of the world&apos;s
                  elite goalkeepers. Brazil&apos;s attacking depth is unmatched, with talents like Endrick, Raphinha,
                  and countless others providing options.
                </p>

                <h3>Morocco: Africa&apos;s Pride</h3>
                <p>
                  <strong>Morocco (Atlas Lions)</strong> wrote football history in 2022, becoming the first African
                  and Arab nation to reach a World Cup semifinal. Their extraordinary run included victories over
                  Belgium, Spain, and Portugal - defeating some of Europe&apos;s best on the biggest stage. That
                  achievement was no fluke; Morocco&apos;s tactical discipline, defensive organization, and
                  counter-attacking quality make them a threat to any team.
                </p>
                <p>
                  <strong>Achraf Hakimi</strong> (PSG) combines world-class defending with devastating attacking runs.
                  His penalty shootout winner against Spain became iconic. <strong>Hakim Ziyech</strong> provides
                  creative magic, capable of unlocking any defense with his left foot. <strong>Sofyan Amrabat</strong>
                  anchors the midfield with tireless running and intelligent positioning. Goalkeeper <strong>Yassine
                  Bounou</strong> was heroic in 2022 and remains Morocco&apos;s last line of defense.
                </p>

                <h3>Lincoln Financial Field: Philadelphia&apos;s World Cup Stage</h3>
                <p>
                  <strong>Lincoln Financial Field</strong> provides a spectacular venue for this blockbuster encounter.
                  Home to the Philadelphia Eagles, the 69,000-capacity stadium has hosted major soccer events including
                  Copa America matches and international friendlies. Philadelphia&apos;s diverse population and strong
                  soccer culture ensure passionate crowds, while the city&apos;s historic significance adds to the
                  World Cup atmosphere.
                </p>

                <h3>Historical Context</h3>
                <p>
                  Brazil and Morocco have met three times previously, with contrasting results. At the <strong>1998
                  World Cup</strong> in France, Brazil cruised to a 3-0 victory with goals from Ronaldo (2) and Rivaldo.
                  However, in a 2023 friendly in Tangier, Morocco shocked Brazil with a 2-1 victory - their first-ever
                  win against the Seleção. That result demonstrated Morocco&apos;s growth and provided a psychological
                  boost heading into this World Cup encounter.
                </p>

                <h3>Tactical Analysis</h3>
                <p>
                  Morocco&apos;s defensive approach that frustrated Spain and Portugal in 2022 will be tested against
                  Brazil&apos;s individual brilliance. <strong>Vinícius Jr.&apos;s</strong> one-on-one ability could be
                  decisive against even the most organized defense. However, <strong>Achraf Hakimi&apos;s</strong>
                  speed and intelligence make him one of the few defenders capable of containing the Real Madrid star.
                </p>
                <p>
                  Brazil must also be wary of Morocco&apos;s counter-attacking threat. The Atlas Lions&apos; quick
                  transitions and set-piece prowess caused problems for every opponent in 2022. <strong>Hakim
                  Ziyech&apos;s</strong> delivery and Morocco&apos;s aerial presence could punish Brazilian over-commitment.
                </p>

                <h3>What&apos;s at Stake</h3>
                <p>
                  This match could determine Group C&apos;s final standings. Both Brazil and Morocco enter as favorites
                  to advance, with Scotland and Haiti as underdogs. A victory here essentially guarantees top-two
                  finish, while defeat creates pressure in the remaining group games. The margin between knockout
                  stage seeding could come down to this single encounter.
                </p>

                <h3>Global Significance</h3>
                <p>
                  This match represents more than just football. Morocco&apos;s 2022 success inspired millions across
                  Africa and the Arab world, proving that traditional powerhouses can be defeated through organization,
                  belief, and collective spirit. Brazil represents the ultimate test of that philosophy. Victory for
                  Morocco would further cement their status as a genuine world football force.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>Brazil vs Morocco World Cup 2026 tickets</strong> are among the most sought-after in the
                  tournament. Prices start from approximately $275 USD for Category 4 seats, with premium and
                  hospitality packages exceeding $1,500 USD. The combination of Brazil&apos;s massive global fanbase
                  and Morocco&apos;s passionate supporters creates extraordinary demand. This is expected to be one
                  of the first matches to sell out - early booking is essential.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇧🇷</span> Brazil Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {brazilPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
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
                  <Link href="/teams/brazil-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Brazil Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇲🇦</span> Morocco Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {moroccoPlayers.map((player) => (
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
                  <Link href="/teams/morocco-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Morocco Squad</Button>
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
                    <strong>Recent Upset:</strong> Morocco defeated Brazil 2-1 in a 2023 friendly - their first-ever
                    win against the five-time champions. This result adds extra intrigue to their World Cup meeting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Venue: Lincoln Financial Field
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">69,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">2003</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">Eagles</p>
                    <p className="text-sm text-slate-600">Home Team</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-700">6</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View All Lincoln Financial Field Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Philadelphia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Philadelphia, the birthplace of American independence, offers rich history, world-class museums,
                  and legendary food. The City of Brotherly Love welcomes World Cup fans with open arms.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Philadelphia Airport (PHL)</li>
                      <li>• SEPTA subway to stadium</li>
                      <li>• Amtrak from NYC/DC</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Liberty Bell</li>
                      <li>• Independence Hall</li>
                      <li>• Philadelphia Museum of Art</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/philadelphia-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Philadelphia Travel Guide
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
                  Brazil vs Morocco will be broadcast globally with massive viewership expected. Prime time
                  viewing in both Brazil and Morocco ensures maximum audience engagement.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Brazil</p>
                    <p className="text-sm text-slate-500">Globo / SporTV</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Morocco</p>
                    <p className="text-sm text-slate-500">SNRT / beIN</p>
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
            <Card className="sticky top-24 border-yellow-400">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-yellow-600" />
                  Buy Blockbuster Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>EXTREME DEMAND - Limited availability!</span>
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
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
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
                  <span className="font-medium">Philadelphia</span>
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
                <CardTitle>Group C Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/haiti-vs-scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇭🇹 vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 13</span>
                </Link>
                <Link href="/fixtures/brazil-vs-morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 border border-yellow-200">
                  <span>🇧🇷 vs 🇲🇦</span>
                  <span className="text-sm">Jun 13</span>
                  <Badge className="ml-auto bg-yellow-500 text-black text-xs">Hot</Badge>
                </Link>
                <Link href="/fixtures/brazil-vs-haiti-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇧🇷 vs 🇭🇹</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 19</span>
                </Link>
                <Link href="/fixtures/scotland-vs-morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 vs 🇲🇦</span>
                  <span className="text-sm ml-auto text-slate-500">Jun 19</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇧🇷 Brazil Team Page
                </Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇲🇦 Morocco Team Page
                </Link>
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ Lincoln Financial Field
                </Link>
                <Link href="/travel/philadelphia-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Philadelphia Travel Guide
                </Link>
                <Link href="/groups/group-c-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  📋 Group C Overview
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
