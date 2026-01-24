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
  title: "France World Cup 2026 Tickets | 2022 Finalists",
  description:
    "Buy France FIFA World Cup 2026 tickets. Watch Mbappé and Les Bleus compete in Group I. Match schedule, key players & ticket prices from $145.",
  keywords: [
    "France World Cup 2026 tickets",
    "France vs Senegal tickets",
    "France vs Norway tickets",
    "Mbappé World Cup 2026",
    "Les Bleus tickets",
    "France football tickets",
  ],
}

const teamInfo = {
  name: "France",
  flag: "🇫🇷",
  confederation: "UEFA",
  fifaRanking: 2,
  worldCupTitles: 2,
  lastTitle: 2018,
  group: "I",
  groupOpponents: ["Senegal", "Norway", "TBD (Playoff)"],
  nickname: "Les Bleus",
  coach: "Didier Deschamps",
  captain: "Kylian Mbappé",
}

const keyPlayers = [
  { name: "Kylian Mbappé", position: "Forward", club: "Real Madrid", number: 10, star: true },
  { name: "Antoine Griezmann", position: "Forward", club: "Atletico Madrid", number: 7 },
  { name: "Aurélien Tchouaméni", position: "Midfielder", club: "Real Madrid", number: 8 },
  { name: "Eduardo Camavinga", position: "Midfielder", club: "Real Madrid", number: 6 },
  { name: "Mike Maignan", position: "Goalkeeper", club: "AC Milan", number: 1 },
  { name: "William Saliba", position: "Defender", club: "Arsenal", number: 4 },
]

const groupFixtures = [
  {
    match: "France vs Senegal",
    date: "June 14, 2026",
    time: "5:00 PM ET",
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    slug: "france-vs-senegal-world-cup-2026-tickets",
  },
  {
    match: "France vs Norway",
    date: "June 19, 2026",
    time: "8:00 PM ET",
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    slug: "france-vs-norway-world-cup-2026-tickets",
  },
  {
    match: "France vs TBD",
    date: "June 24, 2026",
    time: "5:00 PM ET",
    venue: "Lincoln Financial Field",
    city: "Philadelphia",
    slug: "france-group-match-3-world-cup-2026-tickets",
  },
]

const worldCupHistory = [
  { year: 2022, result: "Runners-up", location: "Qatar" },
  { year: 2018, result: "Champions", location: "Russia" },
  { year: 2014, result: "Quarter-finals", location: "Brazil" },
  { year: 2010, result: "Group Stage", location: "South Africa" },
  { year: 2006, result: "Runners-up", location: "Germany" },
  { year: 1998, result: "Champions", location: "France" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 145, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 180, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 165, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 155, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function FranceTicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-blue-800">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets/teams" className="hover:text-blue-800">Teams</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">France</span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-blue-600 text-white">2022 FINALISTS</Badge>
                <Badge variant="outline" className="border-blue-700 text-blue-800">GROUP I</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-7xl">{teamInfo.flag}</span>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl text-slate-900">
                    France World Cup 2026 Tickets
                  </h1>
                  <p className="text-xl text-slate-700 mt-1">{teamInfo.nickname}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-slate-800">
                The 2018 champions and 2022 runners-up return with Kylian Mbappé leading
                a star-studded squad seeking redemption after their heartbreaking final loss to Argentina.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy France Tickets
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-blue-800">
                  View Group I Fixtures
                </Button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-600">#{teamInfo.fifaRanking}</p>
                  <p className="text-sm text-slate-600">FIFA Ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{teamInfo.worldCupTitles}</p>
                  <p className="text-sm text-slate-600">World Cup Titles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{teamInfo.lastTitle}</p>
                  <p className="text-sm text-slate-600">Last Title</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">Group {teamInfo.group}</p>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Group I Match Schedule
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
                  <Users className="h-5 w-5 text-blue-600" />
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
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
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
                  <Trophy className="h-5 w-5 text-blue-600" />
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
              <h2 className="text-2xl font-bold text-slate-900">⚽ France World Cup 2026 Tickets: Les Bleus Seek Redemption</h2>
              <p>
                The agony of Lusail. On December 18, 2022, Kylian Mbappé scored a hat-trick in the World Cup Final - the first in over 50 years - yet France lost on penalties to Argentina. For 120 minutes, Mbappé dragged Les Bleus back from the brink twice, scoring two goals in 97 seconds to force extra time, then another in the shootout. But it wasn&apos;t enough. Now, in 2026, France returns to North America seeking redemption and a chance to become the first European nation to win back-to-back World Cups since Italy (1934-1938). Secure your <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Tickets</Link> to witness Les Bleus&apos; quest for glory.
              </p>
              <p>
                France enters the tournament ranked 2nd in FIFA rankings and as one of the favorites. Led by Kylian Mbappé - now at Real Madrid and in his absolute prime at 27 - and supported by European talents like Antoine Griezmann, Aurélien Tchouaméni (Real Madrid), and Eduardo Camavinga (Real Madrid), Les Bleus possess the blend of experience and youthful energy that defines champions. The pressure is immense - France aims to join Brazil (1958-1962) as the only nations to win consecutive World Cups.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⚽ Group I Analysis: Navigable but Tricky</h3>
              <p>
                France drew <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group I</Link> alongside <Link href="/teams/senegal-world-cup-2026-tickets" className="text-blue-700 hover:underline">Senegal World Cup 2026 Tickets</Link>, <Link href="/teams/norway-world-cup-2026-tickets" className="text-blue-700 hover:underline">Norway World Cup 2026 Tickets</Link>, and a playoff winner. This is considered a manageable draw for Les Bleus, though Senegal - the reigning African champions who defeated France in a March 2024 friendly - poses a genuine threat with Premier League stars like Sadio Mané and Edouard Mendy.
              </p>
              <p>
                The <Link href="/fixtures/france-vs-senegal-world-cup-2026-tickets" className="text-blue-700 hover:underline">opening match against Senegal</Link> on June 14, 2026, at <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> will set the tone. The <Link href="/fixtures/france-vs-norway-world-cup-2026-tickets" className="text-blue-700 hover:underline">second match against Norway</Link> on June 19 at the same venue features Erling Haaland - one of the world&apos;s deadliest strikers who could single-handedly threaten France. Les Bleus conclude group play on June 24 at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lincoln Financial Field in Philadelphia</Link> against a playoff winner. Topping <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group I</Link> is expected, but France must avoid complacency.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">⭐ Kylian Mbappé: The Heir to the Throne</h3>
              <p>
                At 27 during the 2026 World Cup, Kylian Mbappé will be in his absolute prime. His 2022 Final hat-trick cemented his status as one of football&apos;s all-time greats, and his move to Real Madrid in 2024 has elevated his game further. Mbappé combines blistering pace, clinical finishing, and big-game mentality - he&apos;s already scored 12 World Cup goals, including 4 in finals (2018 and 2022). If France wins, Mbappé will join Pelé and Zinedine Zidane in football immortality.
              </p>
              <p>
                Supporting Mbappé is a squad overflowing with talent. Antoine Griezmann, now 35, provides veteran leadership and creativity. Real Madrid duo Aurélien Tchouaméni and Eduardo Camavinga control the midfield with youth and energy. Defensively, William Saliba (Arsenal) anchors the backline, while Mike Maignan (AC Milan) guards the net. This France team blends 2018&apos;s championship experience with 2022&apos;s Final heartbreak - a dangerous combination.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏆 Knockout Stage Projection: Path to Redemption</h3>
              <p>
                If France tops <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group I</Link>, they&apos;ll face a <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group J</Link> or <Link href="/fixtures/group-k-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group K</Link> runner-up in the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link>. Group J features defending champions <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link>, while Group K includes <Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-700 hover:underline">Portugal</Link> and <Link href="/teams/colombia-world-cup-2026-tickets" className="text-blue-700 hover:underline">Colombia</Link>. An early Argentina rematch is possible - imagine the drama!
              </p>
              <p>
                The <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 16</Link> and <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> will likely feature elite opposition: <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-700 hover:underline">Spain</Link>, <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>, <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-700 hover:underline">Germany</Link>, or <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-700 hover:underline">Netherlands</Link>. France has the talent to beat anyone.
              </p>
              <p>
                Should France reach the <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Semi-Finals</Link>, matches at <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium in Dallas</Link> or <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> await. The ultimate redemption? Winning the <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026 Final Tickets</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link> on July 19, 2026, and exorcising the demons of Qatar.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏅 France&apos;s World Cup Legacy: Two Stars and Counting</h3>
              <p>
                France is one of football&apos;s elite nations: two World Cup titles (1998, 2018), two runner-up finishes (2006, 2022), and legends like Zinedine Zidane, Thierry Henry, Michel Platini, and now Kylian Mbappé. The 1998 victory on home soil united a multicultural nation. The 2018 triumph in Russia showcased a golden generation. The 2022 Final, despite the loss, featured one of the greatest individual performances in World Cup history. The 2026 tournament offers a chance to add a third star and cement this generation&apos;s legacy.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🏟️ Venues: France&apos;s American Journey</h3>
              <p>
                France plays two group matches at <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> (capacity: 75,000) - a state-of-the-art venue with a retractable roof. The final group match takes place at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lincoln Financial Field in Philadelphia</Link> (capacity: 69,000), home of the NFL&apos;s Eagles. Should France advance deep, they could play at iconic venues like <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium in New York/New Jersey</Link> (the Final) or other spectacular North American stadiums. Plan your France trip with our guides: <Link href="/travel/atlanta-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Atlanta City Guide</Link> and <Link href="/travel/philadelphia-world-cup-2026-city-guide" className="text-blue-700 hover:underline">Philadelphia City Guide</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎉 French Passion: Allez Les Bleus!</h3>
              <p>
                French fans are passionate and sophisticated, bringing style and fervor to every match. From the Marseillaise anthem to the blue jerseys, French supporters create an atmosphere of pride and determination. Tens of thousands will travel from Paris, Lyon, Marseille, and beyond to support Les Bleus. The &quot;Allez Les Bleus!&quot; chant will echo through American stadiums as France seeks redemption for the 2022 heartbreak.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">🎫 France Ticket Buying Guide: Witnessing Greatness</h3>
              <p>
                France World Cup 2026 tickets are among the most sought-after in the tournament. Official FIFA ticket sales begin 8-12 months before the tournament through FIFA.com&apos;s lottery system. Expect France group-stage tickets to range from $175-$850 depending on category and venue. The <Link href="/fixtures/france-vs-senegal-world-cup-2026-tickets" className="text-blue-700 hover:underline">opening match against Senegal</Link> and <Link href="/fixtures/france-vs-norway-world-cup-2026-tickets" className="text-blue-700 hover:underline">match against Norway</Link> (featuring Haaland) will be particularly expensive.
              </p>
              <p>
                If France reaches knockout rounds, prices escalate significantly - <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link> tickets could reach $450-$2,000, while <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-700 hover:underline">Final tickets</Link> may exceed $2,000-$8,000. For guaranteed access, consider team-specific packages.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">❓ Frequently Asked Questions - France World Cup 2026 Tickets</h2>

                <div className="space-y-4">
                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: When and where does France play their first match at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: France opens their World Cup 2026 campaign on June 14, 2026, at <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link> against <Link href="/teams/senegal-world-cup-2026-tickets" className="text-blue-700 hover:underline">Senegal</Link>. Kickoff is 5:00 PM ET. Les Bleus then face <Link href="/teams/norway-world-cup-2026-tickets" className="text-blue-700 hover:underline">Norway</Link> on June 19 at the same venue, before concluding <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group I</Link> on June 24 at <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lincoln Financial Field in Philadelphia</Link>.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: How much do France World Cup 2026 tickets cost?</h4>
                    <p className="text-slate-700 text-sm">A: France group-stage tickets typically range from $175-$850 depending on seating category and venue. Category 1 (premium) seats at <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mercedes-Benz Stadium</Link> will cost $650-$850, while Category 3-4 tickets start around $175-$280. If France reaches the <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-700 hover:underline">Quarter-Finals</Link>, expect tickets from $450-$2,000.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Will Kylian Mbappé play at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Yes. Kylian Mbappé will be 27 years old and in his absolute prime at the 2026 World Cup. After his hat-trick in the 2022 Final and his move to Real Madrid, Mbappé is one of the world&apos;s best players. He&apos;ll captain France and lead their quest for redemption. This could be his tournament to cement his legacy alongside Pelé and Maradona.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: What are France&apos;s chances of winning World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: France enters as one of the top three favorites alongside <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link> and <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-700 hover:underline">Brazil</Link>. As 2022 runners-up and 2018 champions with Kylian Mbappé in his prime, Les Bleus have the talent and experience to win. <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group I</Link> provides a clear path to the knockout rounds, where France&apos;s quality should shine.</p>
                  </div>

                  <div className="border-b border-blue-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Could France play Argentina again at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Yes! France and <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-700 hover:underline">Argentina</Link> are in adjacent groups (France in <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group I</Link>, Argentina in <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group J</Link>). If Argentina finishes second in Group J and France tops Group I, they could face each other in the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link>. A rematch of the 2022 Final would be the most anticipated match in World Cup history.</p>
                  </div>

                  <div className="pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Q: Who are the key players for France at World Cup 2026?</h4>
                    <p className="text-slate-700 text-sm">A: Captain Kylian Mbappé (Real Madrid) leads France as one of the world&apos;s best players. Antoine Griezmann provides veteran leadership, while Real Madrid duo Aurélien Tchouaméni and Eduardo Camavinga control the midfield. William Saliba (Arsenal) anchors the defense, and Mike Maignan (AC Milan) guards the goal. This blend of 2018 champions and 2022 finalists makes France extremely dangerous.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-600" />
                  Buy France Tickets
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
                    <span>Very high demand for France matches!</span>
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
                  <span className="text-slate-600">Nickname</span>
                  <span className="font-medium">{teamInfo.nickname}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group I Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-blue-50 font-medium">
                  <span>🇫🇷</span> France
                  <Badge className="ml-auto bg-blue-600 text-xs">2018 Champs</Badge>
                </Link>
                <Link href="/teams/senegal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇸🇳</span> Senegal
                </Link>
                <Link href="/teams/norway-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>🇳🇴</span> Norway
                </Link>
                <div className="flex items-center gap-2 p-2 text-slate-400">
                  <span>🏳️</span> TBD (Playoff)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
