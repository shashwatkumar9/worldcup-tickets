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
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "USA vs Paraguay Tickets | World Cup 2026 Group D | SoFi Stadium Los Angeles",
  description: "Buy USA vs Paraguay World Cup 2026 tickets at SoFi Stadium, Los Angeles. June 12, 2026. USA's home opener at the stunning SoFi Stadium!",
  keywords: [
    "USA vs Paraguay tickets",
    "World Cup 2026 USA tickets",
    "USMNT World Cup 2026 tickets",
    "SoFi Stadium World Cup tickets",
    "Los Angeles World Cup tickets",
    "FIFA World Cup 2026 USA",
    "USA soccer tickets",
    "Team USA World Cup 2026",
  ],
}

const matchInfo = {
  homeTeam: { name: "United States", flag: "🇺🇸", code: "USA", nickname: "USMNT" },
  awayTeam: { name: "Paraguay", flag: "🇵🇾", code: "PAR", nickname: "La Albirroja" },
  date: "June 12, 2026",
  time: "9:00 PM ET / 6:00 PM PT",
  venue: "SoFi Stadium",
  city: "Los Angeles, California",
  group: "D",
  matchNumber: 5,
  round: "Group Stage",
  special: "USA HOME OPENER",
}

const usaPlayers = [
  { name: "Christian Pulisic", position: "Forward", club: "AC Milan", number: 10, star: true },
  { name: "Giovanni Reyna", position: "Midfielder", club: "Borussia Dortmund", number: 7, star: true },
  { name: "Tyler Adams", position: "Midfielder", club: "Bournemouth", number: 4 },
  { name: "Weston McKennie", position: "Midfielder", club: "Juventus", number: 8 },
]

const paraguayPlayers = [
  { name: "Miguel Almirón", position: "Forward", club: "Newcastle", number: 10, star: true },
  { name: "Gustavo Gómez", position: "Defender", club: "Palmeiras", number: 3, star: true },
  { name: "Julio Enciso", position: "Forward", club: "Brighton", number: 7 },
  { name: "Andrés Cubas", position: "Midfielder", club: "Vancouver", number: 6 },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 225, logo: "🎫", url: "#", rating: "Official FIFA Partner" },
  { partner: "StubHub", price_from: 350, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 295, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 275, logo: "🎟️", url: "#", rating: "Best Value" },
]

const headToHead = [
  { year: 2016, competition: "Copa America", result: "USA 0-1 Paraguay", location: "Philadelphia" },
  { year: 2007, competition: "Copa America", result: "USA 3-1 Paraguay", location: "Venezuela" },
  { year: 2002, competition: "World Cup", result: "USA 1-0 Paraguay", location: "Busan" },
]

export default function USAVsParaguayPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-white">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/groups/group-d-world-cup-2026-tickets" className="hover:text-white">Group D</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">USA vs Paraguay</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Badge className="bg-blue-900 text-white text-lg px-4 py-1">
                <Home className="h-4 w-4 mr-2" />
                USA HOME OPENER
              </Badge>
              <Badge className="bg-white text-blue-800">GROUP D</Badge>
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-2">{matchInfo.homeTeam.flag}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{matchInfo.homeTeam.name}</h2>
                <p className="text-white/80">{matchInfo.homeTeam.nickname}</p>
                <Badge className="mt-2 bg-blue-700">Host Nation</Badge>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">VS</div>
                <Badge variant="outline" className="text-white border-white">Match 5</Badge>
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
              <Button size="lg" className="bg-blue-900 hover:bg-blue-950">
                <Ticket className="mr-2 h-5 w-5" />
                Buy USA Home Opener Tickets
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
            <Card className="border-blue-400 bg-gradient-to-r from-blue-50 to-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900">America&apos;s World Cup Dream Begins</h3>
                    <p className="text-blue-800 mt-2">
                      The United States opens their 2026 FIFA World Cup campaign at the spectacular SoFi Stadium in
                      Los Angeles against Paraguay. As co-hosts of the tournament, the USMNT enters with unprecedented
                      expectations and the support of a nation finally embracing the beautiful game. This is the moment
                      American soccer has been building toward for decades.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-blue-900" />
                  Complete Match Preview: USA vs Paraguay
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>World Cup 2026 Group D Opener</h3>
                <p>
                  The <strong>USA vs Paraguay World Cup 2026</strong> match marks the beginning of what Americans hope
                  will be a historic tournament run. On <strong>June 12, 2026</strong> at the state-of-the-art
                  <strong>SoFi Stadium in Los Angeles</strong>, the United States Men&apos;s National Team will take
                  on Paraguay in their Group D opener. This match represents the culmination of years of development
                  for American soccer and the golden generation that emerged in the early 2020s.
                </p>

                <h3>The USMNT&apos;s Golden Generation</h3>
                <p>
                  The United States enters World Cup 2026 with arguably their most talented squad in history.
                  <strong>Christian Pulisic</strong> has established himself as one of the world&apos;s best wingers
                  at AC Milan, while <strong>Giovanni Reyna</strong> (Borussia Dortmund) possesses generational
                  creative ability. The midfield trio of <strong>Tyler Adams</strong>, <strong>Weston McKennie</strong>
                  (Juventus), and <strong>Yunus Musah</strong> combines industry, creativity, and athleticism.
                </p>
                <p>
                  In defense, <strong>Antonee Robinson</strong> has become one of the Premier League&apos;s best
                  left-backs at Fulham, while <strong>Sergiño Dest</strong> provides similar quality on the right.
                  With young talents continuing to emerge throughout European football, the USMNT has never had
                  more depth or quality. The home World Cup provides the perfect stage for this generation to
                  announce themselves to the world.
                </p>

                <h3>Paraguay: South American Underdog</h3>
                <p>
                  <strong>Paraguay (La Albirroja)</strong> arrives at World Cup 2026 as a team on the rise. After
                  missing the 2022 World Cup, Paraguay rebuilt under new management and qualified by finishing
                  sixth in CONMEBOL qualifying - one of the world&apos;s toughest qualification paths. Their blend
                  of experienced veterans and exciting young talent makes them a dangerous opponent for any team.
                </p>
                <p>
                  <strong>Miguel Almirón</strong> (Newcastle) leads the attack with his pace and work rate, while
                  <strong>Gustavo Gómez</strong> (Palmeiras) anchors the defense with experience and leadership.
                  Young talents like <strong>Julio Enciso</strong> (Brighton) have added a new dimension to
                  Paraguay&apos;s attack. Known for their resilience and tactical discipline, Paraguay will not
                  be intimidated by the occasion or the hostile American crowd.
                </p>

                <h3>SoFi Stadium: The Jewel of Los Angeles</h3>
                <p>
                  <strong>SoFi Stadium</strong> represents the pinnacle of modern stadium design. The $5 billion
                  venue, home to the Los Angeles Rams and Chargers, features a unique translucent roof and the
                  largest video board in sports history. With a capacity of 70,000 for World Cup matches, it
                  provides an intimate yet spectacular atmosphere that will showcase American football culture
                  to the world.
                </p>
                <p>
                  Located in Inglewood, California, SoFi Stadium will also host the 2028 Olympic opening and
                  closing ceremonies. Its world-class facilities, cutting-edge technology, and year-round perfect
                  weather make it an ideal venue for the USA&apos;s World Cup opener. The Los Angeles football
                  community, bolstered by LAFC and LA Galaxy supporters, will create an electric atmosphere.
                </p>

                <h3>Historical Significance</h3>
                <p>
                  The USA and Paraguay have memorable World Cup history. In the <strong>2002 World Cup</strong>,
                  the United States defeated Paraguay 1-0 in the group stage on their way to the quarterfinals -
                  still the USMNT&apos;s best World Cup performance. That victory, secured with a goal from
                  <strong>Brian McBride</strong>, helped the USA advance from a difficult group and began a
                  memorable tournament run.
                </p>
                <p>
                  In Copa America 2016, Paraguay got their revenge with a 1-0 victory in Philadelphia. The
                  competitive nature of these encounters ensures that the 2026 World Cup meeting will be
                  another closely contested affair.
                </p>

                <h3>Key Tactical Battles</h3>
                <p>
                  <strong>Christian Pulisic</strong> versus the Paraguayan defense will be the marquee matchup.
                  Pulisic&apos;s ability to create chances out of nothing makes him the USA&apos;s most dangerous
                  player, and Paraguay will need to devise specific plans to contain him. His partnership with
                  <strong>Giovanni Reyna</strong> could unlock even the most organized South American defense.
                </p>
                <p>
                  In midfield, the battle between <strong>Tyler Adams</strong> and <strong>Miguel Almirón</strong>
                  will be crucial. Adams&apos; pressing and ball-winning ability must nullify Almirón&apos;s
                  creative threat for the USA to control the match. Paraguay&apos;s compact defensive shape will
                  test American patience and creativity.
                </p>

                <h3>What Victory Means</h3>
                <p>
                  For the United States, a win in this opener is crucial for building momentum. The home crowd,
                  prime-time television slot, and historic occasion create immense pressure, but also opportunity.
                  Victory would energize the nation and set the tone for what Americans hope will be a deep
                  tournament run. The USA has never reached a World Cup semifinal - 2026 on home soil represents
                  their best opportunity to achieve this historic milestone.
                </p>
                <p>
                  For Paraguay, an upset victory or even a draw would be a significant achievement. CONMEBOL teams
                  have traditionally performed well at World Cups, and Paraguay&apos;s tactical discipline could
                  frustrate American attacking ambitions.
                </p>

                <h3>Ticket Information and Pricing</h3>
                <p>
                  <strong>USA vs Paraguay World Cup 2026 tickets</strong> are among the most sought-after for
                  American fans. As the host nation&apos;s opener, demand is unprecedented. Prices start from
                  approximately $225 USD for Category 4 seats, with premium and hospitality packages reaching
                  $1,000+ USD. American soccer fans are encouraged to secure tickets early, as this match is
                  expected to sell out rapidly.
                </p>
              </CardContent>
            </Card>

            {/* Team Lineups */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span> USA Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {usaPlayers.map((player) => (
                      <div key={player.name} className={`p-3 rounded-lg ${player.star ? "bg-yellow-50 border border-yellow-200" : "bg-slate-50"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
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
                  <Link href="/teams/usa-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full USA Squad</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇵🇾</span> Paraguay Key Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {paraguayPlayers.map((player) => (
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
                  <Link href="/teams/paraguay-world-cup-2026-tickets" className="mt-4 block">
                    <Button variant="outline" className="w-full">View Full Paraguay Squad</Button>
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
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>World Cup Record:</strong> USA won their only World Cup meeting 1-0 in 2002. In all
                    competitions, the series is tied with each team winning key matches.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Venue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-900" />
                  Venue: SoFi Stadium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">70,000</p>
                    <p className="text-sm text-slate-600">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">2020</p>
                    <p className="text-sm text-slate-600">Built</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">$5B</p>
                    <p className="text-sm text-slate-600">Cost</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">8</p>
                    <p className="text-sm text-slate-600">WC Matches</p>
                  </div>
                </div>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets">
                  <Button className="w-full bg-blue-900 hover:bg-blue-950">
                    View All SoFi Stadium Matches
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card>
              <CardHeader>
                <CardTitle>Travel to Los Angeles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Los Angeles offers world-class entertainment, beaches, and perfect weather. The City of Angels
                  is ready to welcome World Cup fans with its diverse culture and iconic attractions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Getting There</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• LAX International Airport</li>
                      <li>• Metro K Line to Inglewood</li>
                      <li>• Uber/Lyft readily available</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Must-See</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Santa Monica Beach</li>
                      <li>• Hollywood Walk of Fame</li>
                      <li>• Getty Museum</li>
                    </ul>
                  </div>
                </div>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide">
                  <Button variant="outline" className="w-full">
                    View Complete Los Angeles Travel Guide
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
                  USA vs Paraguay will be broadcast nationwide on FOX and Telemundo, with massive viewership
                  expected across the United States. This could be the most-watched soccer match in American history.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">USA</p>
                    <p className="text-sm text-slate-500">FOX / Telemundo</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">Paraguay</p>
                    <p className="text-sm text-slate-500">Tigo Sports</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">UK</p>
                    <p className="text-sm text-slate-500">BBC / ITV</p>
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
                  <Ticket className="h-5 w-5 text-blue-900" />
                  Buy Match Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-blue-700 text-sm bg-blue-50 p-2 rounded">
                  <TrendingUp className="h-4 w-4" />
                  <span>Extreme demand - USA home opener!</span>
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
                    <Button size="sm" className="bg-blue-900 hover:bg-blue-950" asChild>
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
                  <span className="font-medium">Los Angeles</span>
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
                <Link href="/fixtures/usa-vs-paraguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 border border-blue-200">
                  <span>🇺🇸 vs 🇵🇾</span>
                  <span className="text-sm">Jun 12</span>
                  <Badge className="ml-auto bg-blue-900 text-white text-xs">Home</Badge>
                </Link>
                <Link href="/fixtures/australia-vs-turkey-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
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
                <Link href="/teams/usa-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇺🇸 USA Team Page
                </Link>
                <Link href="/teams/paraguay-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🇵🇾 Paraguay Team Page
                </Link>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50">
                  🏟️ SoFi Stadium
                </Link>
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="block p-2 rounded hover:bg-slate-50">
                  ✈️ Los Angeles Travel Guide
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
