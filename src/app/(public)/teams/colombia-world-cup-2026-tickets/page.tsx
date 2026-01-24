import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Colombia World Cup 2026 Tickets | Los Cafeteros",
  description: "Buy Colombia FIFA World Cup 2026 tickets. Watch Los Cafeteros in Group K. James Rodríguez, Luis Díaz & ticket prices.",
  keywords: ["Colombia World Cup 2026 tickets", "Los Cafeteros World Cup", "Colombia vs Portugal tickets", "Luis Díaz World Cup"],
}

const teamInfo = { name: "Colombia", flag: "🇨🇴", confederation: "CONMEBOL", fifaRanking: 12, bestFinish: "Quarter-finals (2014)", group: "K", nickname: "Los Cafeteros", coach: "Néstor Lorenzo", captain: "James Rodríguez" }

const keyPlayers = [
  { name: "Luis Díaz", position: "Forward", club: "Liverpool", number: 7, star: true },
  { name: "James Rodríguez", position: "Midfielder", club: "São Paulo", number: 10 },
  { name: "Jhon Córdoba", position: "Forward", club: "Krasnodar", number: 9 },
  { name: "Jefferson Lerma", position: "Midfielder", club: "Crystal Palace", number: 16 },
  { name: "Davinson Sánchez", position: "Defender", club: "Galatasaray", number: 23 },
  { name: "Camilo Vargas", position: "Goalkeeper", club: "Atlas", number: 1 },
]

const groupFixtures = [
  { match: "Portugal vs Colombia", date: "June 14, 2026", time: "2:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "portugal-vs-colombia-world-cup-2026-tickets" },
  { match: "Colombia vs Uzbekistan", date: "June 19, 2026", time: "2:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "colombia-vs-uzbekistan-world-cup-2026-tickets" },
  { match: "Colombia vs TBD", date: "June 24, 2026", time: "5:00 PM ET", venue: "Gillette Stadium", city: "Boston", slug: "colombia-group-match-3-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2018, result: "Round of 16", location: "Russia" },
  { year: 2014, result: "Quarter-finals", location: "Brazil" },
  { year: 1998, result: "Group Stage", location: "France" },
  { year: 1994, result: "Group Stage", location: "USA" },
  { year: 1990, result: "Round of 16", location: "Italy" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 115, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 155, logo: "🎟️", url: "#" }]

export default function ColombiaTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-yellow-400 via-blue-700 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white">
            <Link href="/" className="hover:text-yellow-200">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets" className="hover:text-yellow-200">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Colombia</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <Badge className="bg-yellow-400 text-black mb-2">GROUP K</Badge>
              <h1 className="text-4xl font-bold text-white">Colombia World Cup 2026 Tickets</h1>
              <p className="text-xl text-slate-200">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-100 max-w-2xl">
            The passionate Cafeteros return after missing 2022. With Luis Díaz lighting up the Premier League
            and James Rodríguez still pulling strings, Colombia are ready to dance again.
          </p>
          <Button size="lg" className="mt-6 bg-yellow-400 text-black hover:bg-yellow-500"><Ticket className="mr-2 h-5 w-5" />Buy Colombia Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Colombia World Cup 2026: Los Cafeteros Return to Dance</h2>
              <p>
                Colombia&apos;s absence from the 2022 World Cup was felt across the football world. The passionate
                Cafeteros and their famous yellow shirts bring an atmosphere unlike any other nation. In 2026,
                Colombia returns with a squad headlined by Luis Díaz - the Liverpool winger whose dazzling skills
                and infectious smile have made him a global star - and the evergreen James Rodríguez, still pulling
                strings from midfield and creating moments of magic.
              </p>
              <p>
                Colombian football carries unique cultural significance. When Colombia plays, the entire nation stops.
                The rhythmic celebrations, the Vallenato music echoing through stadiums, and the sheer joy of Colombian
                fans create unforgettable tournament experiences. The 2014 quarter-final run under James Rodríguez remains
                etched in World Cup memory, and Los Cafeteros seek to surpass that historic achievement.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group K: Portugal Showdown at MetLife</h3>
              <p>
                Colombia opens against <Link href="/teams/portugal-world-cup-2026-tickets" className="text-yellow-700 hover:underline">Portugal</Link> at
                <Link href="/venues/metlife-stadium-world-cup-2026" className="text-yellow-700 hover:underline">MetLife Stadium in New York/New Jersey</Link> in
                one of the group stage&apos;s marquee fixtures. Cristiano Ronaldo potentially in his final World Cup versus
                Luis Díaz in his prime - the contrast of generations creates compelling narrative.
                <Link href="/teams/uzbekistan-world-cup-2026-tickets" className="text-yellow-700 hover:underline">Uzbekistan</Link> at
                <Link href="/venues/lincoln-financial-field-world-cup-2026" className="text-yellow-700 hover:underline">Lincoln Financial Field in Philadelphia</Link> and
                a third match at <Link href="/venues/gillette-stadium-world-cup-2026" className="text-yellow-700 hover:underline">Gillette Stadium in Boston</Link> complete
                the group stage campaign.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Luis Díaz: Liverpool&apos;s Colombian Joy</h3>
              <p>
                Luis Díaz has become one of the Premier League&apos;s most electrifying players since joining Liverpool.
                His direct running, finishing ability, and pure joy in playing football makes him the perfect
                Colombian talisman. At 29 during the 2026 World Cup, he enters his peak years ready to lead
                Colombia to glory.
              </p>
              <p>
                James Rodríguez remains the orchestra conductor. The 2014 Golden Boot winner may have moved to
                São Paulo, but his technical genius and passing range remain unmatched. Jefferson Lerma adds
                Crystal Palace steel to midfield, while a new generation of Colombian talent emerges through
                European academies.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">CONMEBOL Rivals: South American Battles</h3>
              <p>
                Colombia enters alongside South American giants <Link href="/teams/brazil-world-cup-2026-tickets" className="text-yellow-700 hover:underline">Brazil</Link>,
                <Link href="/teams/argentina-world-cup-2026-tickets" className="text-yellow-700 hover:underline">Argentina</Link>, and
                <Link href="/teams/uruguay-world-cup-2026-tickets" className="text-yellow-700 hover:underline">Uruguay</Link>.
                The fierce CONMEBOL qualifying rounds prepare South American teams for World Cup intensity, and
                Colombia&apos;s battles with continental rivals have produced classic encounters throughout history.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Colombian-American Support: Tri-State Takeover</h3>
              <p>
                The substantial Colombian-American population, particularly in New York, New Jersey, and Florida,
                ensures passionate support. Colombian flags will dominate MetLife Stadium for the Portugal opener,
                and every Colombia match will feel like a home game. The singing, dancing, and celebration that
                Colombian fans bring transforms stadiums into festivals of football.
              </p>
            </article>

            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-yellow-900">Portugal vs Colombia Showdown</h3>
                <p className="text-sm text-yellow-800 mt-2">
                  The opening match against Portugal at MetLife Stadium will be a blockbuster. Ronaldo vs Luis Díaz - expect incredible drama!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-yellow-600" />Group K Schedule</CardTitle></CardHeader>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-yellow-600" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold">{player.number}</div>
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
              <CardHeader><CardTitle>Group K</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/portugal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇵🇹</span> Portugal</Link>
                <Link href="/teams/colombia-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-yellow-50 font-medium"><span>🇨🇴</span> Colombia</Link>
                <Link href="/teams/uzbekistan-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇺🇿</span> Uzbekistan</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
