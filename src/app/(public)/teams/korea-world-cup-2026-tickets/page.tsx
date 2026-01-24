import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Korea Republic World Cup 2026 Tickets | Taegeuk Warriors",
  description: "Buy South Korea FIFA World Cup 2026 tickets. Watch Son Heung-min lead the Taegeuk Warriors in Group A.",
  keywords: ["Korea World Cup 2026 tickets", "South Korea World Cup", "Son Heung-min World Cup"],
}

const teamInfo = { name: "Korea Republic", flag: "🇰🇷", confederation: "AFC", fifaRanking: 22, bestFinish: "Fourth Place (2002)", group: "A", nickname: "Taegeuk Warriors", coach: "Hong Myung-bo", captain: "Son Heung-min" }

const keyPlayers = [
  { name: "Son Heung-min", position: "Forward", club: "Tottenham", number: 7, star: true },
  { name: "Kim Min-jae", position: "Defender", club: "Bayern Munich", number: 3 },
  { name: "Hwang Hee-chan", position: "Forward", club: "Wolves", number: 11 },
  { name: "Lee Kang-in", position: "Midfielder", club: "PSG", number: 10 },
  { name: "Jung Woo-young", position: "Midfielder", club: "Al-Sadd", number: 6 },
  { name: "Kim Seung-gyu", position: "Goalkeeper", club: "Al-Shabab", number: 1 },
]

const groupFixtures = [
  { match: "Mexico vs Korea Republic", date: "June 16, 2026", time: "5:00 PM ET", venue: "Estadio Akron", city: "Guadalajara", slug: "mexico-vs-korea-world-cup-2026-tickets" },
  { match: "Korea Republic vs TBD", date: "June 11, 2026", time: "5:00 PM ET", venue: "Estadio BBVA", city: "Monterrey", slug: "korea-group-match-1-world-cup-2026-tickets" },
  { match: "Korea Republic vs South Africa", date: "June 21, 2026", time: "5:00 PM ET", venue: "Estadio Azteca", city: "Mexico City", slug: "korea-vs-south-africa-world-cup-2026-tickets" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 105, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 145, logo: "🎟️", url: "#" }]

export default function KoreaTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <div className="flex gap-2 mb-2">
                <Badge className="bg-red-600 text-white">2002 FOURTH PLACE</Badge>
                <Badge variant="outline">GROUP A</Badge>
              </div>
              <h1 className="text-4xl font-bold text-slate-900">Korea World Cup 2026 Tickets</h1>
              <p className="text-xl text-slate-700">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl">
            Son Heung-min leads Korea&apos;s golden generation. With Kim Min-jae and Lee Kang-in,
            Korea have world-class talent across the pitch and aim to repeat their 2002 heroics.
          </p>
          <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700"><Ticket className="mr-2 h-5 w-5" />Buy Korea Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Korea Republic World Cup 2026: Son&apos;s Generation Seeks Glory</h2>
              <p>
                When South Korea co-hosted the 2002 FIFA World Cup and reached the semi-finals, it ignited a football
                revolution across the nation. Twenty-four years later, the Taegeuk Warriors enter the 2026 World Cup
                with arguably the most talented squad in their history. Led by Son Heung-min - Asia&apos;s greatest ever
                player - and featuring world-class talents at Bayern Munich and Paris Saint-Germain, Korea Republic
                arrives in North America with genuine ambitions to surpass their 2002 achievement.
              </p>
              <p>
                Korean football passion remains unmatched in Asia. The Red Devils supporters create electric atmospheres
                that have become legendary in World Cup history. From the street celebrations of 2002 to Gwanghwamun
                Square transforming into a sea of red, Korean fans bring intensity and organization that rival any nation.
                American stadiums will witness this incredible support in 2026.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group A: Host Nation Mexico and African Challenge</h3>
              <p>
                Korea draws Group A alongside host nation <Link href="/teams/mexico-world-cup-2026-tickets" className="text-red-600 hover:underline">Mexico</Link>,
                <Link href="/teams/south-africa-world-cup-2026-tickets" className="text-red-600 hover:underline">South Africa</Link>, and the UEFA Playoff D winner.
                The clash against Mexico at <Link href="/venues/estadio-akron-world-cup-2026" className="text-red-600 hover:underline">Estadio Akron in Guadalajara</Link> is
                one of the group stage&apos;s marquee fixtures - a battle between passionate football cultures in one of
                Mexico&apos;s most atmospheric venues. The 67,000-capacity stadium will create an intense environment.
              </p>
              <p>
                Korea opens at <Link href="/venues/estadio-bbva-world-cup-2026" className="text-red-600 hover:underline">Estadio BBVA in Monterrey</Link>,
                one of the tournament&apos;s most modern stadiums. The final group match against South Africa takes place at
                the legendary <Link href="/venues/estadio-azteca-world-cup-2026" className="text-red-600 hover:underline">Estadio Azteca in Mexico City</Link> -
                the only stadium to host three World Cup tournaments, where Maradona scored the &quot;Hand of God&quot;
                and Pelé lifted the trophy.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Son Heung-min: Asia&apos;s Greatest Ever Player</h3>
              <p>
                Son Heung-min has transcended Korean football to become a global icon. The Tottenham captain has won
                the Premier League Golden Boot, scored in a Champions League final, and consistently ranked among the
                world&apos;s best forwards. At 33 during the 2026 World Cup, Son enters his final opportunity to lead
                Korea to World Cup glory. His combination of pace, finishing, and leadership makes him the tournament&apos;s
                most dangerous Asian player.
              </p>
              <p>
                The supporting cast reflects Korea&apos;s golden generation. Kim Min-jae has established himself as
                one of the world&apos;s elite center-backs at Bayern Munich, nicknamed &quot;The Monster&quot; for his
                commanding presence. Lee Kang-in pulls strings for Paris Saint-Germain, combining Korean technical
                brilliance with European polish. Hwang Hee-chan provides Premier League experience from Wolverhampton.
                This collection of talent playing at Europe&apos;s biggest clubs gives Korea genuine knockout-stage potential.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">AFC Powerhouse: Asian Football Rising</h3>
              <p>
                Korea enters alongside fellow AFC nations <Link href="/teams/japan-world-cup-2026-tickets" className="text-red-600 hover:underline">Japan</Link>,
                <Link href="/teams/australia-world-cup-2026-tickets" className="text-red-600 hover:underline">Australia</Link>,
                <Link href="/teams/saudi-arabia-world-cup-2026-tickets" className="text-red-600 hover:underline">Saudi Arabia</Link>, and
                <Link href="/teams/iran-world-cup-2026-tickets" className="text-red-600 hover:underline">Iran</Link>.
                The expanded 48-team format provides unprecedented opportunity for Asian football. Japan&apos;s 2022
                victories over <Link href="/teams/germany-world-cup-2026-tickets" className="text-red-600 hover:underline">Germany</Link> and
                <Link href="/teams/spain-world-cup-2026-tickets" className="text-red-600 hover:underline">Spain</Link>, combined with
                Saudi Arabia&apos;s <Link href="/teams/argentina-world-cup-2026-tickets" className="text-red-600 hover:underline">Argentina</Link> upset,
                proved Asian teams can compete with anyone.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">2002 Legacy: The Spirit of Korea-Japan</h3>
              <p>
                The 2002 World Cup remains South Korea&apos;s greatest sporting achievement. Victories over
                <Link href="/teams/spain-world-cup-2026-tickets" className="text-red-600 hover:underline">Spain</Link>,
                <Link href="/teams/italy-world-cup-2026-tickets" className="text-red-600 hover:underline">Italy</Link>, and
                <Link href="/teams/portugal-world-cup-2026-tickets" className="text-red-600 hover:underline">Portugal</Link> en route
                to fourth place transformed Korean football forever. That tournament produced legends - Park Ji-sung,
                Ahn Jung-hwan, Hong Myung-bo - whose spirit lives on in the current squad. Hong Myung-bo, now the
                national team coach, brings that championship mentality to 2026.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Korean-American Diaspora: Red Wave Across America</h3>
              <p>
                The substantial Korean-American community, particularly in Los Angeles, New York, and Texas, ensures
                passionate home support. Korean restaurants and community centers across America will transform into
                viewing parties, while thousands will travel to Mexican venues for group matches. The Red Devils
                supporters&apos; coordinated chants and thunderous drum beats will echo through every stadium where
                Korea plays.
              </p>
            </article>

            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-red-900">Son&apos;s Final Chance</h3>
                <p className="text-sm text-red-800 mt-2">
                  At 33, this is Son Heung-min&apos;s last opportunity to lead Korea to World Cup glory. Asia&apos;s greatest player is determined to surpass 2002!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-red-600" />Group A Schedule</CardTitle></CardHeader>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-red-600" />Key Players</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {keyPlayers.map((player) => (
                    <div key={player.name} className={`p-4 rounded-lg border ${player.star ? "border-yellow-400 bg-yellow-50" : "bg-slate-50"}`}>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">{player.number}</div>
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
              <CardHeader><CardTitle>Group A</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/mexico-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇲🇽</span> Mexico<Badge className="ml-auto text-xs">Host</Badge></Link>
                <Link href="/teams/south-africa-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇿🇦</span> South Africa</Link>
                <Link href="/teams/korea-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-red-50 font-medium"><span>🇰🇷</span> Korea Republic</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
