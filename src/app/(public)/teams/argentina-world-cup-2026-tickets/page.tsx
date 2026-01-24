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
  Clock,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Argentina World Cup 2026 Tickets | Defending Champions",
  description:
    "Buy Argentina FIFA World Cup 2026 tickets. See Messi's potential farewell tournament. Group J fixtures, match schedule, key players & ticket prices from $150.",
  keywords: [
    "Argentina World Cup 2026 tickets",
    "Argentina vs Algeria tickets",
    "Argentina vs Austria tickets",
    "Argentina vs Jordan tickets",
    "Messi World Cup 2026",
    "Argentina football tickets",
  ],
}

const teamInfo = {
  name: "Argentina",
  flag: "🇦🇷",
  confederation: "CONMEBOL",
  fifaRanking: 1,
  worldCupTitles: 3,
  lastTitle: 2022,
  group: "J",
  groupOpponents: ["Algeria", "Austria", "Jordan"],
  nickname: "La Albiceleste",
  coach: "Lionel Scaloni",
  captain: "Lionel Messi",
}

const keyPlayers = [
  { name: "Lionel Messi", position: "Forward", club: "Inter Miami", number: 10, star: true },
  { name: "Julián Álvarez", position: "Forward", club: "Manchester City", number: 9 },
  { name: "Enzo Fernández", position: "Midfielder", club: "Chelsea", number: 24 },
  { name: "Rodrigo De Paul", position: "Midfielder", club: "Atletico Madrid", number: 7 },
  { name: "Emiliano Martínez", position: "Goalkeeper", club: "Aston Villa", number: 23 },
  { name: "Cristian Romero", position: "Defender", club: "Tottenham", number: 13 },
]

const groupFixtures = [
  {
    match: "Argentina vs Algeria",
    date: "June 14, 2026",
    time: "8:00 PM ET",
    venue: "NRG Stadium",
    city: "Houston",
    slug: "argentina-vs-algeria-world-cup-2026-tickets",
  },
  {
    match: "Argentina vs Austria",
    date: "June 19, 2026",
    time: "5:00 PM ET",
    venue: "Hard Rock Stadium",
    city: "Miami",
    slug: "argentina-vs-austria-world-cup-2026-tickets",
  },
  {
    match: "Argentina vs Jordan",
    date: "June 24, 2026",
    time: "8:00 PM ET",
    venue: "AT&T Stadium",
    city: "Dallas",
    slug: "argentina-vs-jordan-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Champions", location: "Qatar" },
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2014, result: "Runners-up", location: "Brazil" },
  { year: 2010, result: "Quarter-finals", location: "South Africa" },
  { year: 2006, result: "Quarter-finals", location: "Germany" },
  { year: 1986, result: "Champions", location: "Mexico" },
  { year: 1978, result: "Champions", location: "Argentina" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 150, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 180, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 165, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 155, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function ArgentinaTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-400 via-white to-sky-400 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-sky-700">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-sky-700">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Argentina</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-yellow-500 text-black">DEFENDING CHAMPIONS</Badge>
                <Badge variant="destructive">GROUP J</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    Argentina World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-600 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-700">
                The defending World Cup champions return seeking back-to-back titles.
                Led by the legendary Lionel Messi, Argentina are among the favorites for 2026.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Argentina Tickets
                </Button>
                <Button size="lg" variant="outline">
                  View Group J Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-sky-600">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sky-600">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sky-600">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sky-600">Group {teamInfo.group}</p>
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
                  <Calendar className="h-5 w-5 text-sky-600" />
                  Group J Match Schedule
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
                    href="/fixtures/group-j-world-cup-2026-tickets"
                    className="text-sky-600 hover:underline text-sm font-medium"
                  >
                    View Full Group J Standings & Schedule →
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Key Players */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-sky-600" />
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
                        <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">
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
                  <Trophy className="h-5 w-5 text-sky-600" />
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
              <h2 className="text-2xl font-bold text-slate-900">⚽ Argentina World Cup 2026 Tickets: La Albiceleste Defends the Crown</h2>
              <p>
                When Lionel Messi lifted the FIFA World Cup trophy at Lusail Stadium on December 18, 2022, he completed football&apos;s greatest individual narrative. After four heartbreaking finals (2007, 2015, 2016 Copa América defeats, plus 2014 World Cup loss), the diminutive genius from Rosario finally conquered the one trophy that had eluded him. Now, at 39 years old during the 2026 tournament, Messi returns to North America - the continent where he won his second Copa América title in 2024 - to defend Argentina&apos;s crown and potentially add a fairytale final chapter to the greatest career in football history. Secure your <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Tickets</Link> to witness history.
              </p>
              <p>
                Argentina enters the tournament as the reigning world champions and Copa América 2024 winners, having extended their unbeaten streak to 40+ matches spanning nearly four years. Led by Messi and supported by a golden generation including Julián Álvarez (Manchester City), Enzo Fernández (Chelsea), Alexis Mac Allister (Liverpool), and goalkeeper Emiliano Martínez, La Albiceleste aims to become the first team since Brazil (1958-1962) to win consecutive World Cups. The pressure is immense, but so is the talent.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⚽ Group J Analysis: Favorable Draw for the Champions</h3>
              <p>
                Argentina drew <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group J</Link> alongside <Link href="/teams/algeria-world-cup-2026-tickets" className="text-blue-700 hover:underline">Algeria World Cup 2026 Tickets</Link>, <Link href="/teams/austria-world-cup-2026-tickets" className="text-blue-700 hover:underline">Austria World Cup 2026 Tickets</Link>, and <Link href="/teams/jordan-world-cup-2026-tickets" className="text-blue-700 hover:underline">Jordan World Cup 2026 Tickets</Link>. This is widely considered a favorable draw for the defending champions - while no World Cup match is easy, Argentina enters as overwhelming favorites to top the group and advance to the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> and <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link>.
              </p>
              <p>
                The <Link href="/fixtures/argentina-vs-algeria-world-cup-2026-tickets" className="text-blue-700 hover:underline">opening match against Algeria</Link> on June 16, 2026, at <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Arrowhead Stadium in Kansas City</Link> provides a stern test. Algeria, the 2019 African champions, qualified via Africa&apos;s competitive route and feature talented players from European leagues like Riyad Mahrez. The <Link href="/fixtures/argentina-vs-austria-world-cup-2026-tickets" className="text-blue-700 hover:underline">second match against Austria</Link> on June 22 at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium in Dallas</Link> presents a European challenge - Austria reached the Euro 2024 Round of 16 and play an aggressive pressing game. Argentina concludes group play on June 27 against <Link href="/teams/jordan-world-cup-2026-tickets" className="text-blue-700 hover:underline">Jordan</Link> at AT&T Stadium, a historic World Cup debutant.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⭐ Lionel Messi: The Final Dance</h3>
              <p>
                At 39, Lionel Messi will be the oldest player in Argentina&apos;s squad, yet he remains La Albiceleste&apos;s talisman. Since joining Inter Miami CF in 2023, Messi has rediscovered joy in football, winning the Leagues Cup and leading Miami to unprecedented success in MLS. His vision, passing, and goalscoring remain world-class, even if his pace has diminished. The 2026 World Cup represents Messi&apos;s final international tournament - a chance to cement his legacy as the greatest footballer of all time by winning a second consecutive World Cup, a feat no player has achieved since Pelé (1958-1962).
              </p>
              <p>
                Supporting Messi is a squad overflowing with talent. Julián Álvarez (Manchester City) provides youthful energy and clinical finishing, having won everything at club level including the Champions League. Lautaro Martínez (Inter Milan) is one of Europe&apos;s most lethal strikers. Midfielders Enzo Fernández (Chelsea), Alexis Mac Allister (Liverpool), and Rodrigo De Paul (Atlético Madrid) control tempo and creativity. Defensively, Cristian Romero (Tottenham), Lisandro Martínez (Manchester United), and Nicolás Otamendi provide experience. And in goal, Emiliano &quot;Dibu&quot; Martínez - the 2022 Golden Glove winner and penalty shootout hero - remains one of the world&apos;s best shot-stoppers.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏆 Knockout Stage Projection: Path to Glory</h3>
              <p>
                If Argentina tops <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group J</Link>, they&apos;ll face a <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group I</Link> or <Link href="/fixtures/group-k-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group K</Link> runner-up in the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link>. Group I features <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link>, Senegal, and Norway, while Group K includes <Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-700 hover:underline">Portugal</Link>, <Link href="/teams/colombia-world-cup-2026-tickets" className="text-blue-700 hover:underline">Colombia</Link>, and Uzbekistan.
              </p>
              <p>
                The <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link> and <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> will likely feature elite European and South American powerhouses. Potential opponents include <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link> (the eternal rivals seeking revenge for 2022), <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link> (seeking revenge for the 2022 Final), <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link>, <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link>, or <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-700 hover:underline">Netherlands</Link>.
              </p>
              <p>
                Should Argentina reach the <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Semi-Finals</Link> at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium in Dallas</Link> or <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link>, they&apos;d be one win from returning to the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final Tickets</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link> on July 19, 2026. Winning consecutive World Cups would elevate this Argentina generation to immortality alongside Brazil 1958-1962 and cement Messi&apos;s claim as football&apos;s GOAT.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏅 Argentina&apos;s World Cup Legacy: Three Stars and Counting</h3>
              <p>
                Argentina is one of football&apos;s most successful nations: three World Cup titles (1978, 1986, 2022), 16 Copa América titles, and countless legendary players. Diego Maradona&apos;s 1986 triumph - featuring the &quot;Hand of God&quot; and &quot;Goal of the Century&quot; against England - remains the most iconic individual World Cup performance. The 1978 victory on home soil united a nation. And 2022&apos;s emotional triumph completed Messi&apos;s journey from prodigy to legend. But Argentina also knows World Cup heartbreak: runner-up finishes in 1930, 1990, and 2014. The 2026 tournament offers a chance to add a fourth star.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏟️ Venues: Argentina&apos;s American Tour</h3>
              <p>
                Argentina plays two of their three group matches at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium</Link> in Dallas - a $1.3 billion architectural marvel and the world&apos;s largest domed stadium (capacity: 94,000). The opening match takes place at <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Arrowhead Stadium in Kansas City</Link> (capacity: 76,000), renowned as one of the loudest stadiums in sports. Should Argentina advance deep into the tournament, they could play at iconic venues like <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Hard Rock Stadium in Miami</Link> (Messi&apos;s adopted home), <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium in New Jersey</Link> (the Final), or other spectacular North American stadiums. Plan your Argentina trip with our guides: <Link href="/travel/kansas-city-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Kansas City City Guide</Link> and <Link href="/travel/dallas-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Dallas City Guide</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎉 Argentine Passion: The Twelfth Man</h3>
              <p>
                No fanbase matches Argentina&apos;s passion. From the singing of &quot;Muchachos, Ahora Nos Volvimos a Ilusionar&quot; (the anthem that became synonymous with the 2022 triumph) to the sea of blue and white jerseys, Argentine supporters create an atmosphere unlike any other. Tens of thousands will travel from Buenos Aires, Rosario, Córdoba, and Mendoza to support La Albiceleste across North America. Expect sold-out stadiums, deafening chants, and an emotional rollercoaster at every Argentina match.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎫 Argentina Ticket Buying Guide: Witnessing Greatness</h3>
              <p>
                Argentina World Cup 2026 tickets will be among the most sought-after in the tournament, rivaling only host nation matches and the Final. Messi&apos;s farewell tour combined with Argentina&apos;s status as defending champions creates unprecedented demand. Official FIFA ticket sales begin 8-12 months before the tournament through FIFA.com&apos;s lottery system.
              </p>
              <p>
                Expect Argentina group-stage tickets to range from $200-$900 depending on category, opponent, and venue. Matches at the massive <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium</Link> may be slightly more affordable due to capacity (94,000 seats), while <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Arrowhead Stadium</Link> will command premium prices. If Argentina reaches knockout rounds, prices escalate significantly - <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> tickets could reach $500-$2,000, while <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">Final tickets</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link> may exceed $2,000-$8,000.
              </p>

              <div className="bg-sky-50 border-l-4 border-sky-700 p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">❓ Frequently Asked Questions - Argentina World Cup 2026 Tickets</h2>

                <div className="space-y-4">
                  <div className="border-b border-sky-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: When and where does Argentina play their first match at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Argentina begins their title defense on June 16, 2026, at <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Arrowhead Stadium in Kansas City</Link> against <Link href="/teams/algeria-world-cup-2026-tickets" className="text-blue-700 hover:underline">Algeria</Link>. Kickoff is 7:00 PM CT / 8:00 PM ET. La Albiceleste then faces <Link href="/teams/austria-world-cup-2026-tickets" className="text-blue-700 hover:underline">Austria</Link> on June 22 at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium in Dallas</Link>, before concluding <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group J</Link> on June 27 against <Link href="/teams/jordan-world-cup-2026-tickets" className="text-blue-700 hover:underline">Jordan</Link> at AT&T Stadium.</p>
                  </div>

                  <div className="border-b border-sky-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How much do Argentina World Cup 2026 tickets cost?</h4>
                    <p className="text-slate-700 text-sm">A: Argentina group-stage tickets typically range from $200-$900 depending on opponent and seating category. Category 1 (premium) seats will cost $600-$900, while Category 3-4 tickets start around $200-$300. The opening match against <Link href="/teams/algeria-world-cup-2026-tickets" className="text-blue-700 hover:underline">Algeria</Link> will be most expensive due to demand. If Argentina reaches the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> or <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link>, expect tickets from $400-$1,500.</p>
                  </div>

                  <div className="border-b border-sky-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Will Lionel Messi play at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Yes. Lionel Messi has confirmed the 2026 World Cup will be his final international tournament. At 39 years old, he&apos;ll be the oldest player in Argentina&apos;s squad but remains La Albiceleste&apos;s captain and talisman. Messi aims to become the first player since Pelé to win consecutive World Cups and cement his legacy as football&apos;s greatest player. This is the last chance to see the GOAT in World Cup action.</p>
                  </div>

                  <div className="border-b border-sky-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What are Argentina&apos;s chances of winning World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Argentina enters as one of the top three favorites alongside <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-700 hover:underline">France</Link> and <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>. As reigning world champions and Copa América 2024 winners with a 40+ match unbeaten streak, La Albiceleste has momentum, experience, and an exceptional squad. <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group J</Link> provides a manageable path to the knockout rounds. If Messi remains fit and the squad maintains 2022&apos;s collective spirit, Argentina can absolutely defend the title and make history.</p>
                  </div>

                  <div className="border-b border-sky-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Will Argentina play Brazil at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Argentina and Brazil are in different groups (Argentina in <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group J</Link>, <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link> in <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group C</Link>), so they cannot meet in the group stage. However, if both teams advance - which is expected - they could potentially meet in the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link>, <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link>, or <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> depending on bracket alignment. An Argentina-Brazil knockout match would be the most anticipated clash in football history.</p>
                  </div>

                  <div className="pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How do I buy official Argentina World Cup 2026 tickets?</h4>
                    <p className="text-slate-700 text-sm">A: Official <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 tickets</Link> are sold through FIFA.com in phases starting late 2025. Phase 1 uses a random selection lottery for high-demand matches like Argentina games. Phase 2 is first-come, first-served in spring 2026. Create your FIFA account early and apply for Argentina team-specific packages to follow La Albiceleste through their title defense. Given Messi&apos;s final tournament and Argentina&apos;s champion status, demand will be extraordinary.</p>
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
                  <Ticket className="h-5 w-5 text-sky-600" />
                  Buy Argentina Tickets
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
                    <span>High demand - Argentina matches sell out fast!</span>
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
                  <span className="font-medium">{teamInfo.worldCupTitles} (1978, 1986, 2022)</span>
                </div>
              </CardContent>
            </Card>

            {/* Group J */}
            <Card>
              <CardHeader>
                <CardTitle>Group J Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/argentina-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-sky-50 font-medium">
                  <span>🇦🇷</span> Argentina
                  <Badge className="ml-auto bg-yellow-500 text-xs">Champions</Badge>
                </Link>
                <Link href="/teams/algeria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇩🇿</span> Algeria
                </Link>
                <Link href="/teams/austria-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇦🇹</span> Austria
                </Link>
                <Link href="/teams/jordan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇯🇴</span> Jordan
                </Link>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card>
              <CardHeader>
                <CardTitle>Related</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/group-j-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50 text-sm">
                  → Group J Full Schedule
                </Link>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50 text-sm">
                  → NRG Stadium (Houston)
                </Link>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50 text-sm">
                  → Hard Rock Stadium (Miami)
                </Link>
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="block p-2 rounded hover:bg-slate-50 text-sm">
                  → AT&T Stadium (Dallas)
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
