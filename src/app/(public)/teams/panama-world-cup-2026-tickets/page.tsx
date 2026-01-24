import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, Users, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Panama World Cup 2026 Tickets | Los Canaleros Return",
  description: "Buy Panama FIFA World Cup 2026 tickets. Watch Los Canaleros compete in their second World Cup. Match schedule, key players & ticket prices from $110.",
  keywords: ["Panama World Cup 2026 tickets", "Panama vs England tickets", "Panama vs Ghana tickets", "Los Canaleros World Cup", "Panama football tickets"]
}

const teamInfo = { name: "Panama", flag: "🇵🇦", confederation: "CONCACAF", fifaRanking: 52, group: "L", nickname: "Los Canaleros", coach: "Thomas Christiansen", captain: "Aníbal Godoy" }

const keyPlayers = [
  { name: "Eric Davis", position: "Defender", club: "Marseille", number: 15, star: true },
  { name: "José Fajardo", position: "Forward", club: "Saprissa", number: 9 },
  { name: "Adalberto Carrasquilla", position: "Midfielder", club: "Houston Dynamo", number: 8 },
  { name: "Aníbal Godoy", position: "Midfielder", club: "Nashville SC", number: 20 },
  { name: "César Yanis", position: "Forward", club: "Alianza FC", number: 11 },
]

const groupFixtures = [
  { match: "Croatia vs Panama", date: "June 13, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "croatia-vs-panama-world-cup-2026-tickets" },
  { match: "England vs Panama", date: "June 18, 2026", time: "8:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "england-vs-panama-world-cup-2026-tickets" },
  { match: "Ghana vs Panama", date: "June 23, 2026", time: "2:00 PM ET", venue: "Hard Rock Stadium", city: "Miami", slug: "ghana-vs-panama-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 85, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 120, logo: "🎟️", url: "#" }]

export default function PanamaTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div><Badge className="bg-red-600 text-white mb-2">GROUP L</Badge><h1 className="text-4xl font-bold text-slate-900">Panama World Cup 2026 Tickets</h1><p className="text-xl text-slate-700">{teamInfo.nickname}</p></div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">Panama made history by qualifying for 2018. Now they&apos;re back, led by passionate fans who will create an incredible atmosphere.</p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Panama Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card><CardHeader><CardTitle><Calendar className="inline h-5 w-5 mr-2" />Group L Schedule</CardTitle></CardHeader>
              <CardContent className="space-y-4">{groupFixtures.map((f, i) => (<Link key={i} href={`/fixtures/${f.slug}`}><div className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50"><div className="flex items-center gap-4"><div><p className="text-sm font-medium">{f.date}</p><p className="text-xs text-slate-500">{f.time}</p></div><div><p className="font-semibold">{f.match}</p><div className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{f.venue}, {f.city}</div></div></div><Button size="sm">Get Tickets</Button></div></Link>))}</CardContent></Card>
            <Card><CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Key Players</CardTitle></CardHeader>
              <CardContent><div className="grid gap-4 md:grid-cols-2">{keyPlayers.map((p) => (<div key={p.name} className={`p-4 rounded-lg border ${p.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}><div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">{p.number}</div><div><p className="font-semibold">{p.name}{p.star && <Star className="inline h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />}</p><p className="text-sm text-slate-500">{p.position} • {p.club}</p></div></div></div>))}</div></CardContent></Card>

            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Panama World Cup 2026 Tickets: Los Canaleros Return to Football's Biggest Stage</h2>
              <p>
                Eight years after their heartbreaking 2018 debut, Panama returns to the FIFA World Cup stage. Los Canaleros' qualification for <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026</Link> represents more than just athletic achievement—it symbolizes a nation's unwavering belief that dreams can materialize through persistence and passion. For a country of just 4.4 million people, competing on North American soil against the world's football giants is a moment of immense national pride.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Historic Second World Cup Appearance</h3>
              <p>
                Panama's qualification journey to <Link href="/fifa-world-cup-2026-tickets" className="text-blue-700 hover:underline">FIFA World Cup 2026</Link> showcased remarkable growth since their 2018 debut. After years of near-misses—most painfully the 2014 qualification cycle that ended with controversial refereeing decisions—Los Canaleros finally secured their place among football's elite. The Panama World Cup 2026 Tickets offer fans a chance to witness a football-obsessed nation punch above its weight on the global stage.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group L: The Challenge Ahead</h3>
              <p>
                <Link href="/fixtures/group-l-world-cup-2026-tickets" className="text-blue-700 hover:underline">Group L</Link> represents Panama's toughest possible draw. <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link> enters as one of the tournament favorites, ranked 4th in FIFA rankings with a squad featuring Jude Bellingham, Harry Kane, and Bukayo Saka. <Link href="/teams/croatia-world-cup-2026-tickets" className="text-blue-700 hover:underline">Croatia</Link>, the 2018 runners-up, possess a golden generation including Luka Modrić's successors and Champions League-proven talent. <Link href="/teams/ghana-world-cup-2026-tickets" className="text-blue-700 hover:underline">Ghana</Link> qualified from Africa's brutally competitive confederation, featuring Premier League stars and explosive pace.
              </p>
              <p>
                For Panama, ranked 56th in FIFA rankings, advancing from Group L requires near-perfect execution and favorable results elsewhere. However, the expanded 48-team format creates opportunities—finishing third could secure progression to the <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="text-blue-700 hover:underline">Round of 32</Link> if Panama can claim points against Ghana or deliver a shock result against Croatia.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Key Players: Los Canaleros' Leaders</h3>
              <p>
                <strong>Adalberto "Coco" Carrasquilla</strong> – At 26 years old, Carrasquilla is Panama's creative engine. The Houston Dynamo midfielder combines technical skill with tireless work rate, controlling tempo and delivering incisive passes. His experience in MLS provides familiarity with North American playing conditions, and his leadership anchors Panama's midfield against superior opponents.
              </p>
              <p>
                <strong>José Fajardo</strong> – Panama's young striker represents the future of Panamanian football. Playing in Europe, Fajardo combines pace, movement, and clinical finishing. His ability to stretch defenses creates space for teammates and provides a counter-attacking outlet when Los Canaleros sit deep.
              </p>
              <p>
                <strong>Aníbal Godoy</strong> – The veteran defensive midfielder brings World Cup 2018 experience and tactical intelligence. Godoy's positioning, tackling, and distribution provide defensive stability, allowing attacking players freedom to join counters. His leadership and composure under pressure will be crucial in managing high-pressure moments against elite opponents.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Where Los Canaleros Will Play</h3>
              <p>
                Panama's group stage matches will take place at three of North America's most impressive stadiums. <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">MetLife Stadium</Link> in New York/New Jersey (capacity 82,500) hosts the Final and offers a massive stage for Panama's opening match. <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-700 hover:underline">Lincoln Financial Field</Link> in Philadelphia (capacity 69,796) provides an intimate, intense atmosphere for the crucial Ghana clash. <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-700 hover:underline">AT&T Stadium</Link> in Dallas (capacity 80,000) concludes group play with its retractable roof and massive video board.
              </p>
              <p>
                Each venue features large Panamanian diaspora communities that will transform sections into seas of red and blue. The "Soy Panameño" chant, Panama's unofficial national anthem, will echo through these cathedrals of sport, providing Los Canaleros with emotional support that transcends the stadium capacity numbers.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">The 2018 World Cup: Lessons Learned</h3>
              <p>
                Panama's first World Cup appearance in Russia began disastrously—a 3-0 defeat to <Link href="/teams/belgium-world-cup-2026-tickets" className="text-blue-700 hover:underline">Belgium</Link> exposed the gap between CONCACAF and European football. The second match against England brought more pain—a 6-1 loss that could have been worse. But in the 78th minute, Felipe Baloy scored from a corner, sparking celebrations across Panama that rivaled any World Cup champion.
              </p>
              <p>
                The final match against Tunisia ended 2-1 in defeat, leaving Panama winless. However, the experience proved invaluable—young players gained World Cup experience, the nation discovered football passion could unite across social divisions, and belief grew that future qualification was possible, not miraculous.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">CONCACAF Regional Advantage</h3>
              <p>
                Playing in North America provides Panama with significant advantages beyond familiar time zones and climates. The United States is home to approximately 200,000 Panamanian-Americans, concentrated in cities like Miami, New York, Los Angeles, and Houston—all World Cup host cities. Unlike the 2018 journey to Russia, which involved exhausting travel and adaptation to completely foreign environments, Panama can prepare with short flights and minimal jet lag.
              </p>
              <p>
                Panama's presence at FIFA World Cup 2026 continues CONCACAF's growing strength in global football. Alongside co-hosts <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA</Link>, <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico</Link>, and <Link href="/teams/canada-world-cup-2026-tickets" className="text-blue-700 hover:underline">Canada</Link>, Los Canaleros prove that the region extends beyond its traditional powers.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Cultural Significance: More Than Football</h3>
              <p>
                For Panama, World Cup qualification transcends sport—it represents national pride, unity, and international recognition. A country often overshadowed by larger Latin American neighbors uses football to announce its presence on the global stage. When Los Canaleros score goals, the entire nation stops—offices, schools, and streets empty as 4.4 million people celebrate together.
              </p>
              <p>
                The 2018 World Cup introduced the world to Panamanian football culture—the passionate fans, colorful celebrations, and unwavering support despite tough results. In 2026, with matches closer to home and diaspora communities providing stadium support, the cultural impact will be even greater.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="border-b border-red-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">When do Panama World Cup 2026 tickets go on sale?</h3>
                    <p className="text-slate-700">
                      FIFA typically opens ticket sales approximately one year before the tournament, with initial sales operating as a random selection lottery for high-demand matches. Panama World Cup 2026 Tickets for matches against England and Croatia will be in high demand. Register on FIFA's official ticketing website as early as possible.
                    </p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">How much will Panama World Cup 2026 tickets cost?</h3>
                    <p className="text-slate-700">
                      Panama group stage match tickets will range from approximately $110 for Category 3 seats to $400+ for Category 1 premium locations. The Panama vs Ghana match will likely be the most affordable, while the opening match against England at MetLife Stadium will command higher prices.
                    </p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Where will Panama play their World Cup 2026 matches?</h3>
                    <p className="text-slate-700">
                      Panama's Group L matches will take place at MetLife Stadium in New York/NJ (vs England), Lincoln Financial Field in Philadelphia (vs Ghana), and AT&T Stadium in Dallas (vs Croatia). All three venues are located in cities with significant Panamanian diaspora communities.
                    </p>
                  </div>

                  <div className="border-b border-red-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Who are Panama's key players?</h3>
                    <p className="text-slate-700">
                      Panama's squad features Adalberto "Coco" Carrasquilla (Houston Dynamo midfielder), José Fajardo (European-based striker), Aníbal Godoy (veteran defensive midfielder with 2018 World Cup experience), and Michael Murillo (experienced right-back). These players form the core of Los Canaleros' tactical system.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">What are Panama's chances of advancing from Group L?</h3>
                    <p className="text-slate-700">
                      Panama faces a difficult Group L draw alongside England, Croatia, and Ghana. Advancing requires beating Ghana and potentially drawing Croatia while keeping goal difference manageable against England. The expanded 48-team format means finishing third with 3-4 points could secure progression to the Round of 32.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 bg-slate-100 p-4 rounded-lg">
                Don't miss Los Canaleros' historic return. Explore tickets for other teams: <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-700 hover:underline">USA</Link>, <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-700 hover:underline">Mexico</Link>, <Link href="/teams/canada-world-cup-2026-tickets" className="text-blue-700 hover:underline">Canada</Link>, <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-700 hover:underline">England</Link>, <Link href="/teams/croatia-world-cup-2026-tickets" className="text-blue-700 hover:underline">Croatia</Link>, and <Link href="/teams/ghana-world-cup-2026-tickets" className="text-blue-700 hover:underline">Ghana</Link>.
              </p>
            </article>
          </div>
          <div><Card className="sticky top-24"><CardHeader><CardTitle><Ticket className="inline h-5 w-5 mr-2" />Buy Tickets</CardTitle></CardHeader><CardContent className="space-y-4">{affiliateLinks.map((l) => (<div key={l.partner} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{l.partner}</p><p className="text-sm text-green-600">From ${l.price_from}</p></div><Button size="sm" asChild><a href={l.url}>Buy<ExternalLink className="ml-1 h-3 w-3" /></a></Button></div>))}</CardContent></Card></div>
        </div>
      </div>
    </div>
  )
}
