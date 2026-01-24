import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Australia World Cup 2026 Tickets | Socceroos",
  description: "Buy Australia FIFA World Cup 2026 tickets. Watch the Socceroos in Group D. Match schedule & ticket prices.",
  keywords: ["Australia World Cup 2026 tickets", "Socceroos World Cup", "Australia vs USA tickets"],
}

const teamInfo = { name: "Australia", flag: "🇦🇺", confederation: "AFC", fifaRanking: 23, group: "D", nickname: "Socceroos", coach: "Graham Arnold", captain: "Mat Ryan" }

const keyPlayers = [
  { name: "Mat Ryan", position: "Goalkeeper", club: "AZ Alkmaar", number: 1, star: true },
  { name: "Bailey Wright", position: "Defender", club: "Sunderland", number: 4 },
  { name: "Jackson Irvine", position: "Midfielder", club: "St. Pauli", number: 7 },
  { name: "Riley McGree", position: "Midfielder", club: "Middlesbrough", number: 18 },
  { name: "Mitchell Duke", position: "Forward", club: "Machida Zelvia", number: 9 },
  { name: "Cameron Devlin", position: "Midfielder", club: "Hearts", number: 17 },
]

const groupFixtures = [
  { match: "USA vs Australia", date: "June 17, 2026", time: "5:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "usa-vs-australia-world-cup-2026-tickets" },
  { match: "Australia vs Paraguay", date: "June 12, 2026", time: "5:00 PM ET", venue: "SoFi Stadium", city: "Los Angeles", slug: "australia-vs-paraguay-world-cup-2026-tickets" },
  { match: "Australia vs TBD", date: "June 22, 2026", time: "5:00 PM ET", venue: "Levi's Stadium", city: "San Francisco", slug: "australia-group-match-3-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 100, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 135, logo: "🎟️", url: "#" }]

export default function AustraliaTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <Link href="/">Home</Link><ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets">World Cup 2026</Link><ChevronRight className="h-4 w-4" />
            <span>Australia</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <Badge className="bg-yellow-400 text-black mb-2">GROUP D</Badge>
              <h1 className="text-4xl font-bold text-white">Australia World Cup 2026 Tickets</h1>
              <p className="text-xl text-slate-200">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-100 max-w-2xl">
            The Socceroos impressed in 2022 and now face the host nation USA in Group D.
            Australia&apos;s passionate traveling fans will make the journey across the Pacific!
          </p>
          <Button size="lg" className="mt-6 bg-green-700 hover:bg-green-800"><Ticket className="mr-2 h-5 w-5" />Buy Australia Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Australia World Cup 2026: Socceroos Face the Hosts</h2>
              <p>
                The Socceroos captured Australian hearts at the 2022 World Cup, reaching the Round of 16 and pushing
                eventual champions <Link href="/teams/argentina-world-cup-2026-tickets" className="text-green-600 hover:underline">Argentina</Link> harder
                than anyone expected. That tournament sparked renewed passion for football in Australia, and the 2026
                World Cup represents the opportunity to build on that momentum - with the added drama of facing host
                nation <Link href="/teams/usa-world-cup-2026-tickets" className="text-green-600 hover:underline">USA</Link> in
                the group stage.
              </p>
              <p>
                Australian football has evolved dramatically. The days of Route One tactics are long gone, replaced by
                a technical approach that sees Socceroos players compete in European leagues across the continent.
                The national team now possesses genuine quality throughout the squad, not just in isolated star positions.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group D: USA Showdown on West Coast</h3>
              <p>
                Australia draws Group D alongside hosts <Link href="/teams/usa-world-cup-2026-tickets" className="text-green-600 hover:underline">USA</Link> and
                <Link href="/teams/paraguay-world-cup-2026-tickets" className="text-green-600 hover:underline">Paraguay</Link>.
                The clash against the Americans at <Link href="/venues/levis-stadium-world-cup-2026" className="text-green-600 hover:underline">Levi&apos;s Stadium in San Francisco</Link> will
                be one of the most-watched matches of the tournament, with 70,000 fans creating an intense atmosphere.
                Australia opens against Paraguay at <Link href="/venues/sofi-stadium-world-cup-2026" className="text-green-600 hover:underline">SoFi Stadium in Los Angeles</Link>,
                where the large Australian expat community in California will provide passionate support.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">A-League to Europe: Player Development Revolution</h3>
              <p>
                The current Socceroos squad reflects Australia&apos;s improved player pathway. Mat Ryan, the captain,
                has played in La Liga, the Premier League, and now in the Eredivisie. Jackson Irvine captains
                St. Pauli in the Bundesliga, while Riley McGree and Cameron Devlin compete in the English
                Championship and Scottish Premiership respectively. This European experience gives Australia
                the tactical maturity to compete with anyone.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">AFC Ambitions: Asian Football Rising</h3>
              <p>
                Australia competes as part of the AFC, entering alongside <Link href="/teams/japan-world-cup-2026-tickets" className="text-green-600 hover:underline">Japan</Link>,
                <Link href="/teams/korea-world-cup-2026-tickets" className="text-green-600 hover:underline">South Korea</Link>,
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-green-600 hover:underline">Saudi Arabia</Link>, and
                <Link href="/teams/iran-world-cup-2026-tickets" className="text-green-600 hover:underline">Iran</Link>.
                The expanded 48-team format provides Asian football unprecedented opportunity, and Australia&apos;s
                2022 success proved the continent can compete at the highest level.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Traveling Support: Green and Gold Army</h3>
              <p>
                Australian fans are famous for their traveling support. Despite the distance, thousands will make
                the journey to the United States, with California&apos;s existing Australian expat community swelling
                the numbers. The Green and Gold Army&apos;s chants, particularly the famous &quot;Aussie Aussie Aussie, Oi Oi Oi,&quot;
                will echo through American stadiums as Australia seeks to write new chapters in Socceroos history.
              </p>
            </article>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-green-600" />Group D Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {groupFixtures.map((fixture, idx) => (
                  <Link key={idx} href={`/fixtures/${fixture.slug}`}>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50">
                      <div className="flex items-center gap-4">
                        <div><p className="text-sm font-medium">{fixture.date}</p><p className="text-xs text-slate-500">{fixture.time}</p></div>
                        <div><p className="font-semibold">{fixture.match}</p><div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{fixture.venue}, {fixture.city}</div></div>
                      </div>
                      <Button size="sm">Get Tickets</Button>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-green-600" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">{player.number}</div>
                        <div>
                          <p className="font-semibold">{player.name}{player.star && <Star className="inline h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />}</p>
                          <p className="text-sm text-slate-500">{player.position} • {player.club}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {affiliateLinks.map((link) => (
                  <div key={link.partner} className="flex items-center justify-between rounded-lg border p-3">
                    <div><p className="font-medium">{link.partner}</p><p className="text-sm text-green-600">From ${link.price_from}</p></div>
                    <Button size="sm" asChild><a href={link.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Group D</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/usa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇸</span> USA<Badge className="ml-auto text-xs">Host</Badge></Link>
                <Link href="/teams/paraguay-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇾</span> Paraguay</Link>
                <Link href="/teams/australia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-green-50 font-medium"><span>🇦🇺</span> Australia</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
