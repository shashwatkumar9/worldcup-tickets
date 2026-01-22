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
  Star,
  Users,
  Trophy,
  TrendingUp,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mexico World Cup 2026 Tickets | Host Nation | Estadio Azteca",
  description:
    "Buy Mexico FIFA World Cup 2026 tickets. Watch El Tri compete at home including at Estadio Azteca. Group A matches, key players & ticket prices.",
  keywords: [
    "Mexico World Cup 2026 tickets",
    "El Tri World Cup tickets",
    "Estadio Azteca World Cup",
    "Mexico vs South Africa tickets",
    "Mexico football tickets",
    "El Tri tickets",
  ],
}

const teamInfo = {
  name: "Mexico",
  flag: "🇲🇽",
  confederation: "CONCACAF",
  fifaRanking: 15,
  worldCupTitles: 0,
  bestFinish: "Quarter-finals (1970, 1986)",
  group: "A",
  groupOpponents: ["South Africa", "Korea Republic", "TBD (UEFA Playoff)"],
  nickname: "El Tri",
  coach: "Javier Aguirre",
  captain: "Edson Álvarez",
}

const keyPlayers = [
  { name: "Edson Álvarez", position: "Midfielder", club: "West Ham", number: 4, star: true },
  { name: "Hirving Lozano", position: "Forward", club: "PSV", number: 22 },
  { name: "Santiago Giménez", position: "Forward", club: "Feyenoord", number: 9 },
  { name: "César Montes", position: "Defender", club: "Almería", number: 3 },
  { name: "Guillermo Ochoa", position: "Goalkeeper", club: "Salernitana", number: 13 },
  { name: "Raúl Jiménez", position: "Forward", club: "Fulham", number: 7 },
]

const groupFixtures = [
  {
    match: "Mexico vs South Africa",
    date: "June 11, 2026",
    time: "8:00 PM ET",
    venue: "Estadio Azteca",
    city: "Mexico City",
    slug: "mexico-vs-south-africa-world-cup-2026-tickets",
    special: "OPENING MATCH",
  },
  {
    match: "Mexico vs Korea Republic",
    date: "June 16, 2026",
    time: "5:00 PM ET",
    venue: "Estadio Akron",
    city: "Guadalajara",
    slug: "mexico-vs-korea-world-cup-2026-tickets",
  },
  {
    match: "Mexico vs TBD (UEFA)",
    date: "June 21, 2026",
    time: "8:00 PM ET",
    venue: "Estadio BBVA",
    city: "Monterrey",
    slug: "mexico-group-match-3-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2014, result: "Round of 16", location: "Brazil" },
  { year: 2010, result: "Round of 16", location: "South Africa" },
  { year: 1986, result: "Quarter-finals", location: "Mexico" },
  { year: 1970, result: "Quarter-finals", location: "Mexico" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 120, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 185, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 160, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 145, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function MexicoTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-green-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-green-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Mexico</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-green-700 text-white flex items-center gap-1">
                  <Home className="h-3 w-3" /> HOST NATION
                </Badge>
                <Badge className="bg-yellow-500 text-black">OPENING MATCH</Badge>
                <Badge variant="outline" className="border-red-700 text-red-800">GROUP A</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    Mexico World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname} • Co-Host Nation</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-800">
                Mexico becomes the first country to host or co-host three World Cups!
                El Tri opens the tournament at the legendary Estadio Azteca.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-700 hover:bg-green-800">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Mexico Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-red-700 text-red-800">
                  View Group A Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-700">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-700">3</p>
                  <p className="text-sm text-slate-600">Times Host</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-700">QF</p>
                  <p className="text-sm text-slate-600">Best Finish</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-700">Group {teamInfo.group}</p>
                  <p className="text-sm text-slate-600">WC 2026 Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Opening Match Banner */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-900 text-lg">World Cup 2026 Opening Match</h3>
                    <p className="text-yellow-800 font-medium">
                      Mexico vs South Africa • June 11, 2026 • Estadio Azteca
                    </p>
                    <p className="text-sm text-yellow-700 mt-1">
                      Be part of history as Mexico opens the tournament at the legendary Estadio Azteca -
                      the only stadium to host three World Cup opening matches!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-700" />
                  Group A Match Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className={`flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors ${
                      fixture.special ? "border-yellow-400 bg-yellow-50" : ""
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-slate-900">{fixture.date}</p>
                          <p className="text-xs text-slate-500">{fixture.time}</p>
                          {fixture.special && (
                            <Badge className="bg-yellow-500 text-xs mt-1">{fixture.special}</Badge>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{fixture.match}</p>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <MapPin className="h-3 w-3" />
                            {fixture.venue}, {fixture.city}
                          </div>
                        </div>
                      </div>
                      <Button size="sm">
                        Get Tickets
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-700" />
                  Key Players to Watch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div
                      key={player.name}
                      className={`p-4 rounded-lg border ${
                        player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                          {player.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-900">{player.name}</p>
                            {player.star && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <p className="text-sm text-slate-500">{player.position}</p>
                          <p className="text-xs text-slate-400">{player.club}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-green-700" />
                  World Cup History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        entry.result === "Quarter-finals"
                          ? "bg-green-50 border border-green-200"
                          : entry.location === "Mexico"
                          ? "bg-yellow-50 border border-yellow-200"
                          : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                        {entry.location === "Mexico" && (
                          <Badge variant="outline" className="text-xs">Host</Badge>
                        )}
                      </div>
                      <Badge
                        className={
                          entry.result === "Quarter-finals"
                            ? "bg-green-600"
                            : "bg-slate-200 text-slate-700"
                        }
                      >
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Mexico World Cup 2026 Tickets: El Tri&apos;s Historic Third Hosting</h2>
              <p>
                History will be made on June 11, 2026, when Mexico opens the FIFA World Cup at the legendary <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca World Cup 2026 Tickets</Link>. For the first time ever, a nation will host or co-host the World Cup for a third time (1970, 1986, 2026), and El Tri will have the rare privilege of playing all group matches on home soil before passionate Mexican fans. Secure your <Link href="/fifa-world-cup-2026-tickets" className="text-green-700 hover:underline">FIFA World Cup 2026 Tickets</Link> to witness this monumental occasion.
              </p>
              <p>
                Mexico enters the tournament ranked 15th in the FIFA rankings but with the immeasurable advantage of home support across three iconic Mexican stadiums: <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca in Mexico City</Link>, <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Akron in Guadalajara</Link>, and <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio BBVA in Monterrey</Link>. The challenge? Finally breaking the &quot;Quinto Partido&quot; curse that has seen El Tri reach the Round of 16 seven consecutive times without advancing further.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group A Analysis: Favorable Draw with High Expectations</h3>
              <p>
                Mexico drew <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-green-700 hover:underline">Group A</Link> alongside <Link href="/teams/south-africa-world-cup-2026-tickets" className="text-green-700 hover:underline">South Africa World Cup 2026 Tickets</Link>, <Link href="/teams/korea-republic-world-cup-2026-tickets" className="text-green-700 hover:underline">Korea Republic World Cup 2026 Tickets</Link>, and a UEFA playoff qualifier. The <Link href="/fixtures/mexico-vs-south-africa-world-cup-2026-tickets" className="text-green-700 hover:underline">opening match against South Africa</Link> on June 11 at Estadio Azteca will set the tone for El Tri&apos;s tournament. With 87,523 passionate fans creating a deafening atmosphere at 2,240 meters altitude, Mexico has every advantage.
              </p>
              <p>
                The second match against <Link href="/teams/korea-republic-world-cup-2026-tickets" className="text-green-700 hover:underline">Korea Republic</Link> at <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Akron in Guadalajara</Link> presents a tougher challenge - the Koreans are tactically disciplined and athletic. Mexico concludes group play at <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio BBVA in Monterrey</Link>, where they must secure qualification to the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-green-700 hover:underline">Round of 32</Link> and potentially <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-green-700 hover:underline">Round of 16</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Breaking the Quinto Partido Curse: Mexico&apos;s Recurring Nightmare</h3>
              <p>
                Seven consecutive World Cups. Seven consecutive eliminations in the Round of 16. Mexico&apos;s inability to reach the quarter-finals since 1986 (on home soil) has become the defining narrative of El Tri. They&apos;ve fallen to the <Link href="/teams/usa-world-cup-2026-tickets" className="text-green-700 hover:underline">USA (2002)</Link>, <Link href="/teams/argentina-world-cup-2026-tickets" className="text-green-700 hover:underline">Argentina (2006, 2010)</Link>, <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-green-700 hover:underline">Netherlands (2014)</Link>, <Link href="/teams/brazil-world-cup-2026-tickets" className="text-green-700 hover:underline">Brazil (2018)</Link>, and failed to escape the group in 2022.
              </p>
              <p>
                But 2026 offers something previous tournaments couldn&apos;t: home advantage, altitude, and three venues filled with green-clad supporters singing &quot;Cielito Lindo.&quot; If Mexico can top <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-green-700 hover:underline">Group A</Link>, a potentially favorable <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-green-700 hover:underline">Round of 32</Link> draw awaits. A deep run could see El Tri playing <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-green-700 hover:underline">Quarter-Finals</Link> at venues like <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-green-700 hover:underline">SoFi Stadium in Los Angeles</Link> or <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-green-700 hover:underline">Arrowhead Stadium in Kansas City</Link>, where large Mexican-American populations will create home-like atmospheres.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Estadio Azteca: The Cathedral of Football</h3>
              <p>
                No stadium in World Cup history carries more weight than <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca</Link>. This is where Pelé won his third World Cup in 1970. Where Diego Maradona scored both the &quot;Hand of God&quot; and the &quot;Goal of the Century&quot; against England in 1986. Where Mexico reached the quarter-finals as hosts in both 1970 and 1986. On June 11, 2026, Estadio Azteca will host its third World Cup opening match - an unprecedented achievement for any venue.
              </p>
              <p>
                The <Link href="/fixtures/mexico-vs-south-africa-world-cup-2026-tickets" className="text-green-700 hover:underline">Mexico vs South Africa opening match</Link> will be one of the hottest tickets of the tournament. Expect ticket prices from $300-$2,000 depending on category. The altitude (2,240m above sea level) gives Mexico a physiological edge, while the noise from 87,523 fans makes communication nearly impossible for opponents.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Key Players: The New Generation</h3>
              <p>
                Edson Álvarez anchors the midfield with his West Ham experience, while Santiago Giménez brings Eredivisie goalscoring pedigree from Feyenoord. Hirving &quot;Chucky&quot; Lozano provides pace on the wing, and the ageless Raúl Jiménez offers veteran leadership up front. Goalkeeper Guillermo Ochoa, who could be playing his sixth World Cup, remains El Tri&apos;s last line of defense - a shot-stopping legend known for heroic performances against <Link href="/teams/brazil-world-cup-2026-tickets" className="text-green-700 hover:underline">Brazil</Link> and <Link href="/teams/germany-world-cup-2026-tickets" className="text-green-700 hover:underline">Germany</Link> in previous tournaments.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">CONCACAF Rivalry: USA Clash Looms Large</h3>
              <p>
                Mexico and the <Link href="/teams/usa-world-cup-2026-tickets" className="text-green-700 hover:underline">USA</Link> are in different groups, preventing a group-stage meeting. But if both advance - and they&apos;re expected to - a potential <Link href="/fixtures/usa-vs-mexico-world-cup-2026-tickets" className="text-green-700 hover:underline">USA vs Mexico World Cup 2026 Tickets</Link> knockout clash would be the most anticipated match in CONCACAF history. The rivalry that has defined regional football for decades, elevated to World Cup knockout stakes, with a spot in the <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-green-700 hover:underline">Quarter-Finals</Link> or beyond on the line. Co-host <Link href="/teams/canada-world-cup-2026-tickets" className="text-green-700 hover:underline">Canada</Link> also presents an intriguing matchup.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Knockout Round Scenarios: Path to Glory</h3>
              <p>
                Should Mexico advance from <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-green-700 hover:underline">Group A</Link>, the knockout rounds become increasingly challenging. Potential opponents include teams from <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-green-700 hover:underline">Group B</Link> (featuring <Link href="/teams/canada-world-cup-2026-tickets" className="text-green-700 hover:underline">Canada</Link> and <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-green-700 hover:underline">Switzerland</Link>) or <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-green-700 hover:underline">Group D</Link> (featuring the <Link href="/teams/usa-world-cup-2026-tickets" className="text-green-700 hover:underline">USA</Link>).
              </p>
              <p>
                A quarter-final appearance would require defeating elite opposition - teams like <Link href="/teams/england-world-cup-2026-tickets" className="text-green-700 hover:underline">England</Link>, <Link href="/teams/france-world-cup-2026-tickets" className="text-green-700 hover:underline">France</Link>, <Link href="/teams/spain-world-cup-2026-tickets" className="text-green-700 hover:underline">Spain</Link>, or <Link href="/teams/portugal-world-cup-2026-tickets" className="text-green-700 hover:underline">Portugal</Link>. Should Mexico reach the <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-green-700 hover:underline">Semi-Finals</Link>, matches at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-green-700 hover:underline">AT&T Stadium in Dallas</Link> or <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-green-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> await. The ultimate dream? Playing in the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-green-700 hover:underline">FIFA World Cup 2026 Final Tickets</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-green-700 hover:underline">MetLife Stadium</Link> on July 19, 2026.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Mexican Venues: Three Cities, One Passion</h3>
              <p>
                Mexico will host 13 World Cup matches across its three iconic venues. <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca in Mexico City</Link> (capacity: 87,523) hosts the opening match and multiple knockout games. <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Akron in Guadalajara</Link> (capacity: 46,232) offers a modern setting for group-stage drama. <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio BBVA in Monterrey</Link> (capacity: 53,500) provides a stunning mountain backdrop for crucial matches.
              </p>
              <p>
                Plan your Mexico match trip with our city guides: <Link href="/travel/mexico-city-world-cup-2026-city-guide" className="text-green-700 hover:underline">Mexico City Guide</Link>, <Link href="/travel/guadalajara-world-cup-2026-city-guide" className="text-green-700 hover:underline">Guadalajara Guide</Link>, and <Link href="/travel/monterrey-world-cup-2026-city-guide" className="text-green-700 hover:underline">Monterrey Guide</Link> for accommodation, local cuisine, and cultural experiences.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Mexico Ticket Buying Guide</h3>
              <p>
                Mexico World Cup 2026 tickets will be among the most in-demand of the entire tournament. The opening match at Estadio Azteca is expected to sell out within hours during the FIFA lottery phase. Expect ticket prices:
              </p>
              <ul>
                <li><strong>Opening Match (Mexico vs South Africa):</strong> $300-$2,000</li>
                <li><strong>Group Stage Matches 2-3:</strong> $150-$800</li>
                <li><strong>Potential Knockout Matches:</strong> $400-$1,500+</li>
              </ul>
              <p>
                Official <Link href="/fifa-world-cup-2026-tickets" className="text-green-700 hover:underline">FIFA World Cup 2026 tickets</Link> sales begin through FIFA.com in late 2025. Team-specific packages for all three Mexico group matches offer the best value and guaranteed seats across all three Mexican venues.
              </p>

              <div className="bg-green-50 border-l-4 border-green-700 p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions - Mexico World Cup 2026 Tickets</h2>

                <div className="space-y-4">
                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: When and where does Mexico play their opening match at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Mexico opens the entire FIFA World Cup 2026 on June 11, 2026, at <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca in Mexico City</Link> against <Link href="/teams/south-africa-world-cup-2026-tickets" className="text-green-700 hover:underline">South Africa</Link>. This historic match marks the third time Estadio Azteca hosts a World Cup opening game. Mexico then faces <Link href="/teams/korea-republic-world-cup-2026-tickets" className="text-green-700 hover:underline">Korea Republic</Link> on June 16 at <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Akron in Guadalajara</Link>, before concluding <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-green-700 hover:underline">Group A</Link> on June 21 at <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio BBVA in Monterrey</Link>.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How much do Mexico World Cup 2026 tickets cost?</h4>
                    <p className="text-slate-700 text-sm">A: The opening match at <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca</Link> will cost $300-$2,000 depending on seating category. Other group-stage matches at <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Akron</Link> and <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio BBVA</Link> range from $150-$800. If Mexico advances to the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-green-700 hover:underline">Round of 32</Link> or <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-green-700 hover:underline">Round of 16</Link>, expect tickets from $400-$1,500.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What is Group A at World Cup 2026 and who are Mexico&apos;s opponents?</h4>
                    <p className="text-slate-700 text-sm">A: Mexico is in <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-green-700 hover:underline">Group A</Link> alongside <Link href="/teams/south-africa-world-cup-2026-tickets" className="text-green-700 hover:underline">South Africa</Link>, <Link href="/teams/korea-republic-world-cup-2026-tickets" className="text-green-700 hover:underline">Korea Republic</Link>, and a UEFA playoff qualifier. This is considered a favorable draw for El Tri, though Korea Republic (2022 Round of 16 team) presents a genuine challenge. All three Mexico matches will be played at home in Mexican stadiums.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What is the &quot;Quinto Partido&quot; curse and can Mexico break it in 2026?</h4>
                    <p className="text-slate-700 text-sm">A: The &quot;Quinto Partido&quot; (Fifth Game) curse refers to Mexico&apos;s seven consecutive Round of 16 eliminations at World Cups from 1994-2018. They&apos;ve never won a Round of 16 match outside of Mexico. With home advantage in 2026, playing at <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca</Link>, <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Akron</Link>, and <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio BBVA</Link>, this represents their best chance since 1986 to reach the <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-green-700 hover:underline">Quarter-Finals</Link>.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Will Mexico play the USA at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Mexico and the <Link href="/teams/usa-world-cup-2026-tickets" className="text-green-700 hover:underline">USA</Link> cannot meet in the group stage (Mexico in <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-green-700 hover:underline">Group A</Link>, USA in <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-green-700 hover:underline">Group D</Link>). However, if both advance, a potential <Link href="/fixtures/usa-vs-mexico-world-cup-2026-tickets" className="text-green-700 hover:underline">USA vs Mexico</Link> knockout match could occur in the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-green-700 hover:underline">Round of 32</Link>, <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-green-700 hover:underline">Round of 16</Link>, or <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-green-700 hover:underline">Quarter-Finals</Link> depending on group finishes. This would be the most anticipated match in CONCACAF history.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Why is Estadio Azteca so significant for World Cup history?</h4>
                    <p className="text-slate-700 text-sm">A: <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca</Link> is the only stadium to host three World Cup opening matches (1970, 1986, 2026). It hosted Pelé&apos;s 1970 World Cup Final victory and Maradona&apos;s legendary 1986 quarter-final against England. At 2,240 meters altitude with 87,523 capacity, it provides an unparalleled home advantage. Mexico reached the quarter-finals both times they hosted at Estadio Azteca (1970, 1986).</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Who are Mexico&apos;s key players for World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Captain Edson Álvarez (West Ham) anchors the midfield. Santiago Giménez (Feyenoord) leads the attack with Eredivisie goalscoring form. Hirving &quot;Chucky&quot; Lozano (PSV) brings pace, Raúl Jiménez (Fulham) provides veteran experience, and Guillermo Ochoa could be playing his sixth World Cup in goal - a legendary shot-stopper known for heroics against top teams.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How do I buy official Mexico World Cup 2026 tickets?</h4>
                    <p className="text-slate-700 text-sm">A: Official <Link href="/fifa-world-cup-2026-tickets" className="text-green-700 hover:underline">FIFA World Cup 2026 tickets</Link> are sold through FIFA.com starting late 2025. Phase 1 uses a random selection lottery for high-demand matches like the Mexico opening game. Phase 2 is first-come, first-served in spring 2026. Team-specific packages following Mexico through all three <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-green-700 hover:underline">Group A</Link> matches offer the best value.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What venues will host Mexico&apos;s matches?</h4>
                    <p className="text-slate-700 text-sm">A: All three Mexico group matches will be played at home: <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Azteca (Mexico City)</Link> for the opening match, <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio Akron (Guadalajara)</Link> for Match 2, and <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-green-700 hover:underline">Estadio BBVA (Monterrey)</Link> for Match 3. If Mexico advances, knockout matches could be at US venues like <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-green-700 hover:underline">AT&T Stadium (Dallas)</Link> or <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-green-700 hover:underline">SoFi Stadium (Los Angeles)</Link> with large Mexican-American populations.</p>
                  </div>

                  <div className="pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Which other top teams should Mexico fans watch at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: The tournament features defending champions <Link href="/teams/argentina-world-cup-2026-tickets" className="text-green-700 hover:underline">Argentina</Link>, five-time winners <Link href="/teams/brazil-world-cup-2026-tickets" className="text-green-700 hover:underline">Brazil</Link>, 2022 runners-up <Link href="/teams/france-world-cup-2026-tickets" className="text-green-700 hover:underline">France</Link>, and powerhouses <Link href="/teams/england-world-cup-2026-tickets" className="text-green-700 hover:underline">England</Link>, <Link href="/teams/germany-world-cup-2026-tickets" className="text-green-700 hover:underline">Germany</Link>, <Link href="/teams/spain-world-cup-2026-tickets" className="text-green-700 hover:underline">Spain</Link>, and <Link href="/teams/portugal-world-cup-2026-tickets" className="text-green-700 hover:underline">Portugal</Link>. Co-hosts <Link href="/teams/usa-world-cup-2026-tickets" className="text-green-700 hover:underline">USA</Link> and <Link href="/teams/canada-world-cup-2026-tickets" className="text-green-700 hover:underline">Canada</Link> will also have strong home support.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-green-700" />
                  Buy Mexico Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Compare prices from trusted ticket partners
                </p>

                {affiliateLinks.map((link) => (
                  <div
                    key={link.partner}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div>
                        <p className="font-medium text-slate-900">{link.partner}</p>
                        <p className="text-sm text-green-600">From ${link.price_from}</p>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Buy
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>Opening match nearly sold out!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Confederation</span>
                  <span className="font-medium">{teamInfo.confederation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">FIFA Ranking</span>
                  <span className="font-medium">#{teamInfo.fifaRanking}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Coach</span>
                  <span className="font-medium">{teamInfo.coach}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Captain</span>
                  <span className="font-medium">{teamInfo.captain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Best Finish</span>
                  <span className="font-medium">Quarter-finals</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group A Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-green-50 font-medium">
                  <span>🇲🇽</span> Mexico
                  <Badge className="ml-auto bg-green-700 text-xs">Host</Badge>
                </Link>
                <Link href="/teams/south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇿🇦</span> South Africa
                </Link>
                <Link href="/teams/korea-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇰🇷</span> Korea Republic
                </Link>
                <div className="flex items-center gap-2 p-2 text-slate-400">
                  <span>🏳️</span> TBD (UEFA Playoff)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
