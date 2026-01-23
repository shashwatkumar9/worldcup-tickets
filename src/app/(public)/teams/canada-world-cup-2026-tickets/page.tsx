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
  title: "Canada World Cup 2026 Tickets | Host Nation",
  description:
    "Buy Canada FIFA World Cup 2026 tickets. Watch Les Rouges compete at BMO Field & BC Place. Group B matches, Alphonso Davies & ticket prices.",
  keywords: [
    "Canada World Cup 2026 tickets",
    "Canada soccer tickets",
    "Les Rouges World Cup tickets",
    "Alphonso Davies World Cup",
    "Canada football tickets",
    "Team Canada World Cup",
  ],
}

const teamInfo = {
  name: "Canada",
  flag: "🇨🇦",
  confederation: "CONCACAF",
  fifaRanking: 41,
  worldCupTitles: 0,
  bestFinish: "Group Stage (1986, 2022)",
  group: "B",
  groupOpponents: ["UEFA Path A Winner", "Qatar", "Switzerland"],
  nickname: "Les Rouges / Canucks",
  coach: "Jesse Marsch",
  captain: "Alphonso Davies",
}

const keyPlayers = [
  { name: "Alphonso Davies", position: "Defender", club: "Bayern Munich", number: 19, star: true },
  { name: "Jonathan David", position: "Forward", club: "Lille", number: 9 },
  { name: "Cyle Larin", position: "Forward", club: "Club Brugge", number: 17 },
  { name: "Stephen Eustáquio", position: "Midfielder", club: "Porto", number: 7 },
  { name: "Milan Borjan", position: "Goalkeeper", club: "Crvena Zvezda", number: 18 },
  { name: "Ismaël Koné", position: "Midfielder", club: "Watford", number: 8 },
]

const groupFixtures = [
  {
    match: "Canada vs UEFA Path A Winner",
    date: "June 12, 2026",
    time: "6:00 PM ET",
    venue: "BMO Field",
    city: "Toronto",
    slug: "canada-group-match-1-world-cup-2026-tickets",
  },
  {
    match: "Canada vs Qatar",
    date: "June 18, 2026",
    time: "8:00 PM ET",
    venue: "BC Place",
    city: "Vancouver",
    slug: "canada-vs-qatar-world-cup-2026-tickets",
  },
  {
    match: "Switzerland vs Canada",
    date: "June 24, 2026",
    time: "8:00 PM ET",
    venue: "BC Place",
    city: "Vancouver",
    slug: "canada-vs-switzerland-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Group Stage", location: "Qatar" },
  { year: 1986, result: "Group Stage", location: "Mexico" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 150, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 225, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 200, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 175, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function CanadaTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-red-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-red-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-red-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Canada</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-red-700 text-white flex items-center gap-1">
                  <Home className="h-3 w-3" /> HOST NATION
                </Badge>
                <Badge variant="outline" className="border-red-700 text-red-800">GROUP B</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    Canada World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname} • Host Nation</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-800">
                The host nation returns to the World Cup on home soil! With passionate support in Toronto
                and Vancouver, Les Rouges aim to make history at BMO Field and BC Place.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-700 hover:bg-red-800">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Canada Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-red-700 text-red-800">
                  View Group B Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-red-700">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-700">2</p>
                  <p className="text-sm text-slate-600">Host Venues</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-700">1986</p>
                  <p className="text-sm text-slate-600">Last WC (36 yrs)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-700">Group {teamInfo.group}</p>
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

            {/* Host Nation Banner */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-red-700 flex items-center justify-center">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900">Home Advantage</h3>
                    <p className="text-sm text-red-700">
                      Canada will play all group matches on home soil at BMO Field (Toronto) and BC Place (Vancouver).
                      Expect passionate support from coast to coast!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-700" />
                  Group B Match Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-slate-900">{fixture.date}</p>
                          <p className="text-xs text-slate-500">{fixture.time}</p>
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
                  <Users className="h-5 w-5 text-red-700" />
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
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
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
                  <Trophy className="h-5 w-5 text-red-700" />
                  World Cup History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge className="bg-slate-200 text-slate-700">
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                  <p className="text-sm text-slate-500 mt-4">
                    2026 will be Canada&apos;s third World Cup and first as co-host. A historic opportunity to advance beyond the group stage for the first time.
                  </p>
                </div>
              </CardContent>
            </Card>

{/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">⚽ Canada World Cup 2026 Tickets: The Great White North&apos;s Moment of Glory</h2>
              <p>
                For 36 years, Canadian soccer fans waited. From their last World Cup appearance in 1986 Mexico until the triumphant return in 2022 Qatar, an entire generation grew up without seeing Les Rouges on football&apos;s biggest stage. Now, in 2026, Canada doesn&apos;t just return to the World Cup - they co-host it alongside the <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA World Cup 2026 Tickets</Link> and <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico World Cup 2026 Tickets</Link>, with matches at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field in Toronto</Link> and <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-700 hover:underline">BC Place in Vancouver</Link>. Secure your <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Tickets</Link> to witness history.
              </p>
              <p>
                Led by Bayern Munich superstar Alphonso Davies and European-based talents like Jonathan David (Lille), Cyle Larin, and Stephen Eustáquio (Porto), Canada enters the tournament ranked 41st in FIFA rankings but armed with home advantage and a generation of players who&apos;ve proven themselves in Europe&apos;s top leagues. The pressure is immense - host nations are expected to deliver memorable performances - but so is the opportunity.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⚽ Group B Analysis: Testing Ground for the Underdog</h3>
              <p>
                Canada drew <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link> alongside a UEFA Path A Winner (potentially Italy, Wales, Bosnia and Herzegovina, or Northern Ireland), <Link href="/teams/qatar-world-cup-2026-tickets" className="text-blue-700 hover:underline">Qatar World Cup 2026 Tickets</Link>, and <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Switzerland World Cup 2026 Tickets</Link>. This is a challenging draw - <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Switzerland</Link> reached the Euro 2020 quarter-finals and consistently performs at major tournaments, while the UEFA Path A winner will be a motivated European side.
              </p>
              <p>
                The opening match against the UEFA Path A Winner on June 12, 2026, at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field in Toronto</Link> will set the tone for Canada&apos;s tournament. The <Link href="/fixtures/canada-vs-qatar-world-cup-2026-tickets" className="text-blue-700 hover:underline">second match against Qatar</Link> at <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-700 hover:underline">BC Place in Vancouver</Link> on June 17 will be crucial - Qatar qualified automatically as the previous host nation and Asian champions. Canada concludes group play against <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Switzerland</Link> on June 24 at BC Place, a match that could determine qualification to the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> and potential <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link>. Canada must capitalize on home advantage or risk a disappointing group-stage exit.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⭐ Alphonso Davies: Canada&apos;s Global Superstar</h3>
              <p>
                Alphonso Davies is the face of Canadian soccer. The Bayern Munich left-back, considered one of the world&apos;s best in his position, brings Champions League-winning experience and electric pace that terrorizes opponents. At 25 during the 2026 World Cup, he&apos;ll be in his prime - a player capable of single-handedly changing games with his overlapping runs and defensive recovery speed.
              </p>
              <p>
                Supporting Davies is a core of Europe-based professionals. Jonathan David scores regularly in Ligue 1 for Lille, Cyle Larin brings physicality up front, and Stephen Eustáquio provides midfield creativity from Porto. Milan Borjan guards the net with veteran composure. This Canada team is no longer the amateur squad of decades past - they&apos;re legitimate professionals competing at the highest level.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏆 Knockout Stage Dream: Road Through Adversity</h3>
              <p>
                If Canada advances from <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link>, the knockout rounds become increasingly challenging. Potential <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> or <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link> opponents could include teams from <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group A</Link> (featuring co-host <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico</Link>) or <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link> (featuring <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link> and <Link href="/teams/morocco-world-cup-2026-tickets" className="text-blue-700 hover:underline">Morocco</Link>).
              </p>
              <p>
                A deep run would require monumental upsets - potentially facing elite teams like <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England World Cup 2026 Tickets</Link>, <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France World Cup 2026 Tickets</Link>, <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain World Cup 2026 Tickets</Link>, or <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany World Cup 2026 Tickets</Link> in the <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link>. Should Canada pull off a miracle run to the <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Semi-Finals</Link>, matches at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium in Dallas</Link> or <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> await. Reaching the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final Tickets</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link> on July 19, 2026, would be the greatest achievement in Canadian sports history.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🤝 CONCACAF Solidarity: The Three Amigos of 2026</h3>
              <p>
                Canada co-hosts alongside fierce CONCACAF rivals <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA</Link> and <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico</Link>. While the Canadians lack the deep history of their southern neighbors, the rivalry has intensified in recent years - Canada topped the CONCACAF qualifying table for 2022, finishing ahead of both USA and Mexico. A potential knockout stage clash with either co-host would be a defining moment for Canadian soccer. Mexico opens the tournament at <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-blue-700 hover:underline">Estadio Azteca World Cup 2026 Tickets</Link> on June 11, while the USA plays their group matches at <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">SoFi Stadium</Link> and <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Levi&apos;s Stadium</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏟️ Canadian Venues: From Coast to Coast</h3>
              <p>
                Canada will host World Cup matches at two iconic venues. <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field in Toronto</Link> (capacity: 45,500) provides an intimate, electric atmosphere in Canada&apos;s largest city. The stadium hosted the 2007 U-20 World Cup Final and will be expanded for 2026. <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-700 hover:underline">BC Place in Vancouver</Link> (capacity: 54,500) offers a stunning backdrop of mountains and ocean, creating one of the most picturesque World Cup settings imaginable.
              </p>
              <p>
                Both cities embrace Canada&apos;s multicultural identity - Toronto is one of the world&apos;s most diverse cities, while Vancouver&apos;s Pacific Rim location brings Asian and international flair. Plan your Canada match trip with our city guides: <Link href="/travel/toronto-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Toronto City Guide</Link> and <Link href="/travel/vancouver-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Vancouver City Guide</Link> for accommodation, dining recommendations, and local attractions.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⚽ Building Soccer Culture: Canada&apos;s Growing Passion</h3>
              <p>
                The 2026 World Cup arrives at a transformative moment for Canadian soccer. Major League Soccer&apos;s Canadian clubs (Toronto FC, Vancouver Whitecaps, CF Montréal) have cultivated dedicated fanbases. The Canadian Premier League, launched in 2019, develops domestic talent. Alphonso Davies&apos; global stardom inspires a generation of young players. From coast to coast, from Vancouver to Toronto to Montreal, Canada is embracing the beautiful game. The tournament features matches across all 12 groups (<Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group A</Link> through <Link href="/fixtures/group-l-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group L</Link>), giving Canadian fans unprecedented access to world football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎫 Canada Ticket Buying Guide: Secure Your Piece of History</h3>
              <p>
                Canada World Cup 2026 tickets will be highly sought-after, especially in Toronto and Vancouver. Official FIFA ticket sales typically begin 8-12 months before the tournament through a lottery system. Expect Canada group-stage tickets to range from $150-$700 depending on category and venue. The opening match at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field</Link> will be particularly expensive due to historic significance - potentially $200-$900 for Category 1-3 tickets.
              </p>
              <p>
                For guaranteed access, consider team-specific packages that include all three Canada group matches at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field</Link> and <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-700 hover:underline">BC Place</Link>. If Canada advances to the knockout rounds - an achievement that would unite the nation - you&apos;ll want to secure tickets early for potential matches at US venues like <Link href="/venues/lumen-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lumen Field in Seattle</Link> or other stadiums close to the Canadian border.
              </p>

              <div className="bg-red-50 border-l-4 border-red-700 p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">❓ Frequently Asked Questions - Canada World Cup 2026 Tickets</h2>

                <div className="space-y-4">
                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: When and where does Canada play their first match at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Canada opens their World Cup 2026 campaign on June 12, 2026, at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field in Toronto</Link> against the UEFA Path A Winner (potentially Italy, Wales, Bosnia, or Northern Ireland). Kickoff is scheduled for 6:00 PM ET. Les Rouges then face <Link href="/teams/qatar-world-cup-2026-tickets" className="text-blue-700 hover:underline">Qatar</Link> on June 17 at <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-700 hover:underline">BC Place in Vancouver</Link>, before concluding <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link> on June 24 against <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Switzerland</Link> at BC Place.</p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How much do Canada World Cup 2026 tickets cost?</h4>
                    <p className="text-slate-700 text-sm">A: Canada group-stage tickets typically range from $150-$700 depending on seating category and venue. Category 1 (premium) seats at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field</Link> will cost $500-$700, while Category 3-4 tickets start around $150-$250. If Canada reaches the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> or <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link>, expect tickets from $400-$1,200.</p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What is Group B at World Cup 2026 and who are Canada&apos;s opponents?</h4>
                    <p className="text-slate-700 text-sm">A: Canada is in <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link> alongside a UEFA Path A Winner (Italy, Wales, Bosnia and Herzegovina, or Northern Ireland), <Link href="/teams/qatar-world-cup-2026-tickets" className="text-blue-700 hover:underline">Qatar</Link>, and <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Switzerland</Link>. This is considered a challenging draw - Switzerland reached the Euro 2020 quarter-finals and the UEFA Path A winner will be a motivated European side determined to prove themselves.</p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What are Canada&apos;s chances of advancing from Group B?</h4>
                    <p className="text-slate-700 text-sm">A: Canada faces a difficult task advancing from <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link>. <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Switzerland</Link> is ranked higher and has more tournament experience, while the UEFA Path A Winner will be a motivated European side. <Link href="/teams/qatar-world-cup-2026-tickets" className="text-blue-700 hover:underline">Qatar</Link>, as Asian champions and 2022 hosts, cannot be underestimated. However, home advantage at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field</Link> and <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-700 hover:underline">BC Place</Link> provides a significant edge. With Alphonso Davies at his peak and a motivated squad, reaching the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> is realistic. Advancing to the <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link> would be historic.</p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Will Canada play the USA or Mexico at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Canada, <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA</Link>, and <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico</Link> are all in different groups (Canada in <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link>, Mexico in <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group A</Link>, USA in <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group D</Link>), so they cannot meet in the group stage. However, if two or all three co-hosts advance, potential CONCACAF battles could occur in the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link>, <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link>, or <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link>.</p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Who are the key players for Canada at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Captain Alphonso Davies (Bayern Munich) is Canada&apos;s global superstar - a Champions League-winning left-back with elite pace and defensive ability. Jonathan David (Lille) leads the attack with consistent Ligue 1 goalscoring. Cyle Larin provides physicality, Stephen Eustáquio (Porto) adds midfield creativity, and Milan Borjan guards the goal. This European-based core represents Canada&apos;s most talented squad ever.</p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What is Canada&apos;s World Cup history?</h4>
                    <p className="text-slate-700 text-sm">A: Canada has qualified for only two World Cups: 1986 (Mexico) where they lost all three group matches without scoring a goal, and 2022 (Qatar) where they finished fourth in Group F. The 2026 tournament offers a chance to write a new chapter - reaching the knockout rounds would be Canada&apos;s greatest World Cup achievement and a watershed moment for soccer in the country.</p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How do I buy official Canada World Cup 2026 tickets?</h4>
                    <p className="text-slate-700 text-sm">A: Official <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 tickets</Link> are sold through FIFA.com in phases starting late 2025. Phase 1 uses a random selection lottery for high-demand matches like Canada games. Phase 2 is first-come, first-served in spring 2026. Create your FIFA account early and apply for Canada team-specific packages to follow Les Rouges through <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link>.</p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What Canadian cities will host World Cup 2026 matches?</h4>
                    <p className="text-slate-700 text-sm">A: Canada will host matches in two cities: Toronto at <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">BMO Field</Link> (capacity: 45,500) and Vancouver at <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-blue-700 hover:underline">BC Place</Link> (capacity: 54,500). Both venues will host Canada group matches plus additional tournament games. Toronto is Canada&apos;s largest city with diverse international communities, while Vancouver offers spectacular mountain and ocean views.</p>
                  </div>

                  <div className="pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Which other top teams should Canada fans watch at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: The tournament features defending champions <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link>, five-time winners <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>, 2022 runners-up <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, and powerhouses <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link>, <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link>, <Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-700 hover:underline">Portugal</Link>, and <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-700 hover:underline">Netherlands</Link>. Co-hosts <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA</Link> and <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico</Link> will also have strong home support.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-red-700" />
                  Buy Canada Tickets
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
                    <span>HIGH DEMAND - Limited availability!</span>
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
                  <span className="text-slate-600">Best WC Finish</span>
                  <span className="font-medium">Group Stage</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group B Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/canada-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium">
                  <span>🇨🇦</span> Canada
                  <Badge className="ml-auto bg-red-700 text-xs">Host</Badge>
                </Link>
                <div className="flex items-center gap-2 p-2 text-slate-400">
                  <span>🏳️</span> UEFA Path A Winner
                </div>
                <Link href="/teams/qatar-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇶🇦</span> Qatar
                </Link>
                <Link href="/teams/switzerland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇨🇭</span> Switzerland
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
