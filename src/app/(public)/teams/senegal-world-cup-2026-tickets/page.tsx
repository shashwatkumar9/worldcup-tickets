import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ExternalLink, ChevronRight, Star, Users, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Senegal World Cup 2026 Tickets | Lions of Teranga",
  description: "Buy Senegal FIFA World Cup 2026 tickets. Watch the African champions compete in Group I. Match schedule & ticket prices.",
  keywords: ["Senegal World Cup 2026 tickets", "Lions of Teranga World Cup", "Senegal vs France tickets"],
}

const teamInfo = { name: "Senegal", flag: "🇸🇳", confederation: "CAF", fifaRanking: 17, worldCupTitles: 0, bestFinish: "Quarter-finals (2002)", group: "I", nickname: "Lions of Teranga", coach: "Aliou Cissé", captain: "Kalidou Koulibaly" }

const keyPlayers = [
  { name: "Kalidou Koulibaly", position: "Defender", club: "Al-Hilal", number: 3, star: true },
  { name: "Ismaïla Sarr", position: "Forward", club: "Marseille", number: 18 },
  { name: "Idrissa Gueye", position: "Midfielder", club: "Everton", number: 5 },
  { name: "Édouard Mendy", position: "Goalkeeper", club: "Al-Ahli", number: 1 },
  { name: "Iliman Ndiaye", position: "Forward", club: "Everton", number: 17 },
  { name: "Nicolas Jackson", position: "Forward", club: "Chelsea", number: 9 },
]

const groupFixtures = [
  { match: "France vs Senegal", date: "June 14, 2026", time: "5:00 PM ET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "france-vs-senegal-world-cup-2026-tickets" },
  { match: "Senegal vs Norway", date: "June 19, 2026", time: "2:00 PM ET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "senegal-vs-norway-world-cup-2026-tickets" },
  { match: "Senegal vs TBD", date: "June 24, 2026", time: "2:00 PM ET", venue: "MetLife Stadium", city: "New York/NJ", slug: "senegal-group-match-3-world-cup-2026-tickets" },
]

const worldCupHistory = [
  { year: 2022, result: "Round of 16", location: "Qatar" },
  { year: 2018, result: "Group Stage", location: "Russia" },
  { year: 2002, result: "Quarter-finals", location: "Korea/Japan" },
]

const affiliateLinks = [{ partner: "Ticketmaster", price_from: 105, logo: "🎫", url: "#" }, { partner: "StubHub", price_from: 140, logo: "🎟️", url: "#" }]

export default function SenegalTicketsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-yellow-400 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white">
            <Link href="/">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/fifa-world-cup-2026-tickets">World Cup 2026</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Senegal</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-7xl">{teamInfo.flag}</span>
            <div>
              <div className="flex gap-2 mb-2">
                <Badge className="bg-yellow-400 text-black">AFCON 2021 CHAMPIONS</Badge>
                <Badge variant="outline" className="border-white text-white">GROUP I</Badge>
              </div>
              <h1 className="text-4xl font-bold text-white">Senegal World Cup 2026 Tickets</h1>
              <p className="text-xl text-slate-200">{teamInfo.nickname}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-slate-100 max-w-2xl">
            The African champions face France in a mouth-watering Group I clash. Senegal proved their quality
            by reaching the Round of 16 in 2022 and winning AFCON. They&apos;re Africa&apos;s best hope.
          </p>
          <Button size="lg" className="mt-6 bg-green-700 hover:bg-green-800"><Ticket className="mr-2 h-5 w-5" />Buy Senegal Tickets</Button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* SEO Article Content */}
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900">Senegal World Cup 2026: Lions of Teranga Hunt for Glory</h2>
              <p>
                Senegal has established itself as Africa&apos;s premier footballing nation. AFCON 2021 champions,
                2022 World Cup Round of 16 qualifiers, and home to some of the continent&apos;s brightest talents -
                the Lions of Teranga arrive at the 2026 FIFA World Cup as genuine contenders to become the first
                African nation to reach a World Cup final since <Link href="/teams/morocco-world-cup-2026-tickets" className="text-green-700 hover:underline">Morocco</Link>&apos;s
                breakthrough in 2022.
              </p>
              <p>
                The foundation of Senegalese football excellence lies in the remarkable talent production that
                has supplied Europe&apos;s top leagues for decades. From El Hadji Diouf to Sadio Mané, and now to
                Nicolas Jackson, Ismaïla Sarr, and Iliman Ndiaye, Senegal consistently develops world-class
                attackers who thrive in the Premier League and beyond.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Group I: The France Showdown</h3>
              <p>
                Senegal faces defending champions <Link href="/teams/france-world-cup-2026-tickets" className="text-green-700 hover:underline">France</Link> in
                one of the most culturally significant matches of the tournament at <Link href="/venues/mercedes-benz-stadium-world-cup-2026" className="text-green-700 hover:underline">Mercedes-Benz Stadium in Atlanta</Link>.
                Many French-born players of Senegalese descent have chosen Les Lions, creating a unique emotional
                dynamic. Senegal also faces <Link href="/teams/norway-world-cup-2026-tickets" className="text-green-700 hover:underline">Norway</Link> at
                <Link href="/venues/lincoln-financial-field-world-cup-2026" className="text-green-700 hover:underline">Lincoln Financial Field in Philadelphia</Link> and
                completes the group at <Link href="/venues/metlife-stadium-world-cup-2026" className="text-green-700 hover:underline">MetLife Stadium in New York</Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Koulibaly&apos;s Leadership: Defensive Excellence</h3>
              <p>
                Kalidou Koulibaly captains Senegal with the commanding presence that made him one of Europe&apos;s
                most feared defenders during his Napoli and Chelsea years. Now playing in Saudi Arabia, his
                experience and leadership remain invaluable. Édouard Mendy, despite moving to the Saudi league,
                brings Champions League-winning pedigree between the posts.
              </p>
              <p>
                The attack features Nicolas Jackson, whose breakthrough season at Chelsea has established him
                as one of the Premier League&apos;s most exciting strikers. Ismaïla Sarr&apos;s pace and Iliman Ndiaye&apos;s
                creativity provide the cutting edge, while Idrissa Gueye&apos;s midfield tenacity ensures balance.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">African Pride: Continental Leadership</h3>
              <p>
                Senegal enters alongside fellow African hopefuls including <Link href="/teams/morocco-world-cup-2026-tickets" className="text-green-700 hover:underline">Morocco</Link>,
                <Link href="/teams/nigeria-world-cup-2026-tickets" className="text-green-700 hover:underline">Nigeria</Link>,
                <Link href="/teams/cameroon-world-cup-2026-tickets" className="text-green-700 hover:underline">Cameroon</Link>, and
                <Link href="/teams/egypt-world-cup-2026-tickets" className="text-green-700 hover:underline">Egypt</Link>.
                The expanded 48-team format provides unprecedented opportunity for African football to make its mark.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6">Teranga: The Hospitality Legacy</h3>
              <p>
                &quot;Teranga&quot; means hospitality in Wolof, and Senegalese fans embody this spirit at every tournament.
                The passionate drumming, dancing, and singing that accompanies Les Lions creates unforgettable
                atmospheres. American venues will experience the full force of Senegalese support, with the
                diaspora community and traveling fans combining to create a sea of green, yellow, and red.
              </p>
            </article>

            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-yellow-900">France vs Senegal</h3>
                <p className="text-sm text-yellow-800 mt-2">
                  A rematch of cultural ties! Many French-born players have represented Senegal, making this
                  a unique and emotionally-charged encounter at Mercedes-Benz Stadium.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-green-700" />Group I Schedule</CardTitle></CardHeader>
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
              <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-green-700" />Key Players</CardTitle></CardHeader>
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
              <CardHeader><CardTitle>Group I</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/teams/france-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇫🇷</span> France<Badge className="ml-auto text-xs">2018 Champs</Badge></Link>
                <Link href="/teams/senegal-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded bg-green-50 font-medium"><span>🇸🇳</span> Senegal</Link>
                <Link href="/teams/norway-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><span>🇳🇴</span> Norway</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
