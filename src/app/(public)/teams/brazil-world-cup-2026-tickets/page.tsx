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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Brazil World Cup 2026 Tickets | 5x World Champions",
  description:
    "Buy Brazil FIFA World Cup 2026 tickets. Watch the 5-time champions compete in Group C. Match schedule, key players, Vinicius Jr & ticket prices from $140.",
  keywords: [
    "Brazil World Cup 2026 tickets",
    "Brazil vs Morocco tickets",
    "Brazil vs Haiti tickets",
    "Brazil vs Scotland tickets",
    "Vinicius Jr World Cup",
    "Brazil football tickets",
  ],
}

const teamInfo = {
  name: "Brazil",
  flag: "🇧🇷",
  confederation: "CONMEBOL",
  fifaRanking: 5,
  worldCupTitles: 5,
  lastTitle: 2002,
  group: "C",
  groupOpponents: ["Morocco", "Haiti", "Scotland"],
  nickname: "Seleção",
  coach: "Dorival Júnior",
  captain: "Marquinhos",
}

const keyPlayers = [
  { name: "Vinícius Júnior", position: "Forward", club: "Real Madrid", number: 7, star: true },
  { name: "Rodrygo", position: "Forward", club: "Real Madrid", number: 11 },
  { name: "Endrick", position: "Forward", club: "Real Madrid", number: 9 },
  { name: "Bruno Guimarães", position: "Midfielder", club: "Newcastle", number: 5 },
  { name: "Alisson", position: "Goalkeeper", club: "Liverpool", number: 1 },
  { name: "Marquinhos", position: "Defender", club: "PSG", number: 4 },
]

const groupFixtures = [
  {
    match: "Brazil vs Morocco",
    date: "June 13, 2026",
    time: "8:00 PM ET",
    venue: "MetLife Stadium",
    city: "New York/NJ",
    slug: "brazil-vs-morocco-world-cup-2026-tickets",
  },
  {
    match: "Brazil vs Haiti",
    date: "June 19, 2026",
    time: "8:00 PM ET",
    venue: "Lincoln Financial Field",
    city: "Philadelphia",
    slug: "brazil-vs-haiti-world-cup-2026-tickets",
  },
  {
    match: "Scotland vs Brazil",
    date: "June 24, 2026",
    time: "8:00 PM ET",
    venue: "Hard Rock Stadium",
    city: "Miami",
    slug: "brazil-vs-scotland-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Quarter-finals", location: "Qatar" },
  { year: 2018, result: "Quarter-finals", location: "Russia" },
  { year: 2014, result: "Fourth Place", location: "Brazil" },
  { year: 2002, result: "Champions", location: "Korea/Japan" },
  { year: 1998, result: "Runners-up", location: "France" },
  { year: 1994, result: "Champions", location: "USA" },
  { year: 1970, result: "Champions", location: "Mexico" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 140, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 175, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 160, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 150, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function BrazilTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 via-yellow-400 to-green-500 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <Link href="/" className="hover:text-green-800">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-green-800">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-green-800">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Brazil</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-500 text-black">5X WORLD CHAMPIONS</Badge>
                <Badge variant="outline" className="border-green-700 text-green-800">GROUP C</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    Brazil World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-800">
                The most successful nation in World Cup history with 5 titles. Brazil returns
                seeking their first trophy since 2002, led by a new generation of stars.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Brazil Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-green-700 text-green-800 hover:bg-green-50">
                  View Group C Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-600">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">Group {teamInfo.group}</p>
                  <p className="text-sm text-slate-600">WC 2026 Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Group Fixtures */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  Group C Match Schedule
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

                <div className="pt-4 border-t">
                  <Link
                    href="/fixtures/group-c-world-cup-2026-tickets"
                    className="text-green-600 hover:underline text-sm font-medium"
                  >
                    View Full Group C Standings & Schedule →
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Key Players */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
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
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
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

            {/* World Cup History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-green-600" />
                  World Cup History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {worldCupHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        entry.result === "Champions"
                          ? "bg-yellow-50 border border-yellow-200"
                          : "bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">{entry.year}</span>
                        <span className="text-slate-600">{entry.location}</span>
                      </div>
                      <Badge
                        className={
                          entry.result === "Champions"
                            ? "bg-yellow-500"
                            : entry.result === "Runners-up"
                            ? "bg-slate-400"
                            : "bg-slate-200 text-slate-700"
                        }
                      >
                        {entry.result === "Champions" && "🏆 "}
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

{/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">⚽ Brazil World Cup 2026 Tickets: Seleção&apos;s Quest for the Sixth Star</h2>
              <p>
                Twenty-four years. That&apos;s how long Brazil has waited to lift the FIFA World Cup trophy again. Since Ronaldo, Rivaldo, and Ronaldinho dazzled in 2002, the most successful nation in World Cup history has endured heartbreak after heartbreak - the 7-1 Mineiraço humiliation in 2014, Neymar&apos;s back injury in that same tournament, and penalty shootout defeats in 2022 and 2014. Now, in 2026, a new generation led by Vinícius Júnior aims to end the drought and claim Brazil&apos;s record sixth World Cup title. Secure your <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Tickets</Link> to witness the Seleção&apos;s redemption arc.
              </p>
              <p>
                Brazil enters the tournament ranked 5th in FIFA rankings but carries the weight of history and expectation. With attacking talents like Vinícius Júnior (Real Madrid), Rodrygo (Real Madrid), and teenage prodigy Endrick (Real Madrid), the Seleção possesses the flair and skill that define Brazilian football. The pressure is immense - Brazil hasn&apos;t won a World Cup in nearly a quarter-century, and fans demand the jogo bonito that made them fall in love with football.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⚽ Group C Analysis: Challenging but Manageable</h3>
              <p>
                Brazil drew <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link> alongside <Link href="/teams/morocco-world-cup-2026-tickets" className="text-blue-700 hover:underline">Morocco World Cup 2026 Tickets</Link>, <Link href="/teams/haiti-world-cup-2026-tickets" className="text-blue-700 hover:underline">Haiti World Cup 2026 Tickets</Link>, and <Link href="/teams/scotland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Scotland World Cup 2026 Tickets</Link>. While Brazil is the clear favorite, this group presents genuine challenges. Morocco reached the 2022 World Cup semi-finals, shocking Belgium, Spain, and Portugal along the way. Their defensive organization and counter-attacking prowess make them a dangerous opponent.
              </p>
              <p>
                The <Link href="/fixtures/brazil-vs-morocco-world-cup-2026-tickets" className="text-blue-700 hover:underline">opening match against Morocco</Link> on June 13, 2026, at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium in New York/New Jersey</Link> will be a stern test. The <Link href="/fixtures/brazil-vs-haiti-world-cup-2026-tickets" className="text-blue-700 hover:underline">second match against Haiti</Link> at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lincoln Financial Field in Philadelphia</Link> on June 19 should be more straightforward. Brazil concludes group play against <Link href="/teams/scotland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Scotland</Link> on June 24 at <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Hard Rock Stadium in Miami</Link>. Topping <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link> is expected, but complacency could be costly against motivated opponents.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⭐ Vinícius Júnior: The New King of Brazil</h3>
              <p>
                At 25 during the 2026 World Cup, Vinícius Júnior enters his prime as one of the world&apos;s most electric attackers. The Real Madrid winger has evolved from a raw talent to a Champions League-winning superstar, terrorizing defenses with his pace, dribbling, and clinical finishing. Vinícius embodies the jogo bonito - the beautiful game - that Brazil is famous for, while also adding a ruthless efficiency that modern football demands.
              </p>
              <p>
                Supporting Vinícius is a squad overflowing with talent. Rodrygo (Real Madrid) provides versatility across the attack, while teenage sensation Endrick could be the tournament&apos;s breakout star. In midfield, Bruno Guimarães (Newcastle) adds steel and creativity. Defensively, captain Marquinhos (PSG) anchors the backline, while Alisson (Liverpool) remains one of the world&apos;s best goalkeepers. This Brazil team blends traditional flair with tactical discipline.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏆 Knockout Stage Projection: The Path to Glory</h3>
              <p>
                If Brazil tops <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link>, they&apos;ll face a <Link href="/fixtures/group-b-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group B</Link> or <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group D</Link> runner-up in the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link>. Group B features <Link href="/teams/canada-world-cup-2026-tickets" className="text-blue-700 hover:underline">Canada</Link> and <Link href="/teams/switzerland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Switzerland</Link>, while Group D includes co-host <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA</Link>. These are manageable opponents for Brazil.
              </p>
              <p>
                The real challenges come in the <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link> and beyond. Potential opponents include defending champions <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link> (the eternal rivals), European powerhouses <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link>, <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link>, or <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-700 hover:underline">Netherlands</Link>. A Brazil vs Argentina <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> clash would be the most anticipated match in football history.
              </p>
              <p>
                Should Brazil reach the <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Semi-Finals</Link>, matches at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium in Dallas</Link> or <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> await. The ultimate goal? Winning the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final Tickets</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link> on July 19, 2026, and claiming the sixth star.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏅 Brazil&apos;s World Cup Legacy: Five Stars and Counting</h3>
              <p>
                Brazil is the most successful nation in World Cup history: five titles (1958, 1962, 1970, 1994, 2002), the only team to qualify for every tournament since 1930, and legends like Pelé, Garrincha, Ronaldo, Ronaldinho, and Neymar. The 1970 team featuring Pelé, Jairzinho, and Carlos Alberto is considered the greatest ever. But the 2026 tournament carries the weight of 24 years without glory - the longest drought since 1958-1970.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏟️ Venues: Brazil&apos;s American Journey</h3>
              <p>
                Brazil plays all three group matches on the US East Coast. The opening match takes place at the iconic <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium in New York/New Jersey</Link> (capacity: 82,500) - the venue that will also host the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final</Link>. The second match is at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lincoln Financial Field in Philadelphia</Link>, while the final group match takes place at <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Hard Rock Stadium in Miami</Link> - a city with a massive Brazilian diaspora that will create a home atmosphere. Plan your Brazil trip with our guides: <Link href="/travel/new-york-world-cup-2026-city-guide" className="text-blue-700 hover:underline">New York City Guide</Link>, <Link href="/travel/philadelphia-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Philadelphia City Guide</Link>, and <Link href="/travel/miami-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Miami City Guide</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎉 Brazilian Passion: The Yellow Wave</h3>
              <p>
                Brazilian fans are the most passionate in football. From the samba rhythms to the sea of yellow jerseys, Brazilian supporters create an atmosphere of joy and celebration. Hundreds of thousands will travel from São Paulo, Rio de Janeiro, Brasília, and beyond to support the Seleção. The massive Brazilian diaspora in the United States - particularly in Miami, New York, and Boston - ensures home-field advantage even on foreign soil.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎫 Brazil Ticket Buying Guide: Witnessing Greatness</h3>
              <p>
                Brazil World Cup 2026 tickets are among the most sought-after in the tournament. Official FIFA ticket sales begin 8-12 months before the tournament through FIFA.com&apos;s lottery system. Expect Brazil group-stage tickets to range from $180-$850 depending on category and venue. The <Link href="/fixtures/brazil-vs-morocco-world-cup-2026-tickets" className="text-blue-700 hover:underline">opening match against Morocco</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link> will be particularly expensive due to demand.
              </p>
              <p>
                If Brazil reaches knockout rounds, prices escalate significantly - <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> tickets could reach $450-$2,000, while <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">Final tickets</Link> may exceed $2,000-$8,000. For guaranteed access, consider team-specific packages that include all group matches.
              </p>

              <div className="bg-green-50 border-l-4 border-green-700 p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">❓ Frequently Asked Questions - Brazil World Cup 2026 Tickets</h2>

                <div className="space-y-4">
                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: When and where does Brazil play their first match at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Brazil opens their World Cup 2026 campaign on June 13, 2026, at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium in New York/New Jersey</Link> against <Link href="/teams/morocco-world-cup-2026-tickets" className="text-blue-700 hover:underline">Morocco</Link>. Kickoff is 8:00 PM ET. The Seleção then faces <Link href="/teams/haiti-world-cup-2026-tickets" className="text-blue-700 hover:underline">Haiti</Link> on June 19 at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lincoln Financial Field in Philadelphia</Link>, before concluding <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link> on June 24 against <Link href="/teams/scotland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Scotland</Link> at <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Hard Rock Stadium in Miami</Link>.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How much do Brazil World Cup 2026 tickets cost?</h4>
                    <p className="text-slate-700 text-sm">A: Brazil group-stage tickets typically range from $180-$850 depending on seating category and venue. Category 1 (premium) seats at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link> will cost $650-$850, while Category 3-4 tickets start around $180-$280. If Brazil reaches the <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link>, expect tickets from $450-$2,000.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What is Group C at World Cup 2026 and who are Brazil&apos;s opponents?</h4>
                    <p className="text-slate-700 text-sm">A: Brazil is in <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link> alongside <Link href="/teams/morocco-world-cup-2026-tickets" className="text-blue-700 hover:underline">Morocco</Link> (2022 semi-finalists), <Link href="/teams/haiti-world-cup-2026-tickets" className="text-blue-700 hover:underline">Haiti</Link>, and <Link href="/teams/scotland-world-cup-2026-tickets" className="text-blue-700 hover:underline">Scotland</Link>. While Brazil is the favorite, Morocco&apos;s 2022 heroics and defensive organization make them a dangerous opponent.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What are Brazil&apos;s chances of winning World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Brazil enters as one of the top three favorites alongside <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link> and <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>. As five-time champions with attacking talents like Vinícius Júnior, Rodrygo, and Endrick, Brazil has the squad to end their 24-year drought. <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link> provides a manageable path to the knockout rounds, where their quality should shine.</p>
                  </div>

                  <div className="border-b border-green-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Will Brazil play Argentina at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Brazil and <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link> are in different groups (Brazil in <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link>, Argentina in <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group J</Link>), so they cannot meet in the group stage. However, if both teams advance - which is expected - they could potentially meet in the <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link>, <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Semi-Finals</Link>, or <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">Final</Link>. A Brazil-Argentina knockout match would be the most anticipated in football history.</p>
                  </div>

                  <div className="pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Who are the key players for Brazil at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Vinícius Júnior (Real Madrid) leads Brazil&apos;s attack as one of the world&apos;s most dangerous wingers. Rodrygo (Real Madrid) and teenage prodigy Endrick provide additional firepower. Bruno Guimarães (Newcastle) controls the midfield, while captain Marquinhos (PSG) anchors the defense and Alisson (Liverpool) guards the goal. This blend of flair and tactical discipline makes Brazil a complete team.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Buy Tickets Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-green-600" />
                  Buy Brazil Tickets
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
                  <div className="flex items-center gap-2 text-yellow-600 text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>High demand - Brazil matches sell fast!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Quick Info */}
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
                  <span className="text-slate-600">Nickname</span>
                  <span className="font-medium">{teamInfo.nickname}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">WC Titles</span>
                  <span className="font-medium">5 (Most Ever)</span>
                </div>
              </CardContent>
            </Card>

            {/* Group C */}
            <Card>
              <CardHeader>
                <CardTitle>Group C Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/brazil-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-green-50 font-medium">
                  <span>🇧🇷</span> Brazil
                  <Badge className="ml-auto bg-yellow-500 text-xs">5x Champs</Badge>
                </Link>
                <Link href="/teams/morocco-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇲🇦</span> Morocco
                </Link>
                <Link href="/teams/haiti-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇭🇹</span> Haiti
                </Link>
                <Link href="/teams/scotland-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Scotland
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
