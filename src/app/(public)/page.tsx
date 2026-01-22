import Link from "next/link"
import { LanguageLink } from "@/components/i18n/LanguageLink"
import { SuggestiveSearch } from "@/components/search/SuggestiveSearch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  Calendar,
  MapPin,
  Ticket,
  Trophy,
  Users,
  Star,
} from "lucide-react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

// Featured Competitions - All 2026 and beyond
const featuredCompetitions = [
  {
    id: "1",
    name: "FIFA World Cup 2026",
    slug: "fifa-world-cup-2026-tickets",
    sport: "Football",
    date: "Jun - Jul 2026",
    image: "/images/world-cup-2026.jpg",
    is_hot: true,
  },
  {
    id: "2",
    name: "Cricket World Cup 2027",
    slug: "cricket-world-cup-2027-tickets",
    sport: "Cricket",
    date: "Oct - Nov 2027",
    image: "/images/cricket-wc.jpg",
    is_hot: true,
  },
  {
    id: "3",
    name: "Rugby World Cup 2027",
    slug: "rugby-world-cup-2027-tickets",
    sport: "Rugby",
    date: "Sep - Oct 2027",
    image: "/images/rugby-wc.jpg",
    is_hot: true,
  },
  {
    id: "4",
    name: "Euro 2028",
    slug: "euro-2028-tickets",
    sport: "Football",
    date: "Jun - Jul 2028",
    image: "/images/euro-2028.jpg",
    is_hot: true,
  },
  {
    id: "5",
    name: "Summer Olympics 2028",
    slug: "summer-olympics-2028-tickets",
    sport: "Multi-Sport",
    date: "Jul - Aug 2028",
    image: "/images/olympics-2028.jpg",
    is_hot: true,
  },
  {
    id: "6",
    name: "FIFA World Cup 2030",
    slug: "fifa-world-cup-2030-tickets",
    sport: "Football",
    date: "Jun - Jul 2030",
    image: "/images/world-cup-2030.jpg",
    is_hot: true,
  },
  {
    id: "7",
    name: "Winter Olympics 2030",
    slug: "winter-olympics-2030-tickets",
    sport: "Multi-Sport",
    date: "Feb - Mar 2030",
    image: "/images/winter-olympics-2030.jpg",
    is_hot: false,
  },
  {
    id: "8",
    name: "Copa America 2028",
    slug: "copa-america-2028-tickets",
    sport: "Football",
    date: "Jun - Jul 2028",
    image: "/images/copa-america-2028.jpg",
    is_hot: false,
  },
]

const popularTeams = [
  { id: "1", name: "Argentina", slug: "teams/argentina-world-cup-2026-tickets", flag: "🇦🇷", sport: "World Cup 2026" },
  { id: "2", name: "Brazil", slug: "teams/brazil-world-cup-2026-tickets", flag: "🇧🇷", sport: "World Cup 2026" },
  { id: "3", name: "USA", slug: "teams/usa-world-cup-2026-tickets", flag: "🇺🇸", sport: "World Cup 2026" },
  { id: "4", name: "Germany", slug: "teams/germany-world-cup-2026-tickets", flag: "🇩🇪", sport: "World Cup 2026" },
  { id: "5", name: "France", slug: "teams/france-world-cup-2026-tickets", flag: "🇫🇷", sport: "World Cup 2026" },
  { id: "6", name: "England", slug: "teams/england-world-cup-2026-tickets", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", sport: "World Cup 2026" },
  { id: "7", name: "Mexico", slug: "teams/mexico-world-cup-2026-tickets", flag: "🇲🇽", sport: "World Cup 2026" },
  { id: "8", name: "Spain", slug: "teams/spain-world-cup-2026-tickets", flag: "🇪🇸", sport: "World Cup 2026" },
  { id: "9", name: "Portugal", slug: "teams/portugal-world-cup-2026-tickets", flag: "🇵🇹", sport: "World Cup 2026" },
  { id: "10", name: "Netherlands", slug: "teams/netherlands-world-cup-2026-tickets", flag: "🇳🇱", sport: "World Cup 2026" },
  { id: "11", name: "Belgium", slug: "teams/belgium-world-cup-2026-tickets", flag: "🇧🇪", sport: "World Cup 2026" },
  { id: "12", name: "Italy", slug: "teams/italy-world-cup-2026-tickets", flag: "🇮🇹", sport: "World Cup 2026" },
]

const hotFixtures = [
  {
    id: "1",
    title: "USA vs Mexico",
    slug: "fixtures/usa-vs-mexico-world-cup-2026-tickets",
    competition: "World Cup 2026 Group Stage",
    date: "Jun 15, 2026",
    venue: "MetLife Stadium",
    home_flag: "🇺🇸",
    away_flag: "🇲🇽",
  },
  {
    id: "2",
    title: "Brazil vs Morocco",
    slug: "fixtures/brazil-vs-morocco-world-cup-2026-tickets",
    competition: "World Cup 2026 Group Stage",
    date: "Jun 18, 2026",
    venue: "SoFi Stadium",
    home_flag: "🇧🇷",
    away_flag: "🇲🇦",
  },
  {
    id: "3",
    title: "Argentina vs Algeria",
    slug: "fixtures/argentina-vs-algeria-world-cup-2026-tickets",
    competition: "World Cup 2026 Group Stage",
    date: "Jun 20, 2026",
    venue: "AT&T Stadium",
    home_flag: "🇦🇷",
    away_flag: "🇩🇿",
  },
  {
    id: "4",
    title: "England vs Croatia",
    slug: "fixtures/england-vs-croatia-world-cup-2026-tickets",
    competition: "World Cup 2026 Group Stage",
    date: "Jun 22, 2026",
    venue: "Hard Rock Stadium",
    home_flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    away_flag: "🇭🇷",
  },
  {
    id: "5",
    title: "Final",
    slug: "fixtures/final-world-cup-2026-tickets",
    competition: "World Cup 2026 Final",
    date: "Jul 19, 2026",
    venue: "MetLife Stadium",
    home_flag: "🏆",
    away_flag: "🏆",
  },
]

const majorVenues = [
  { id: "1", name: "MetLife Stadium", slug: "venues/metlife-stadium-world-cup-2026-tickets", city: "New Jersey, USA", capacity: "82,500", role: "Final Venue" },
  { id: "2", name: "SoFi Stadium", slug: "venues/sofi-stadium-world-cup-2026-tickets", city: "Los Angeles, USA", capacity: "70,000", role: "Host City" },
  { id: "3", name: "AT&T Stadium", slug: "venues/att-stadium-world-cup-2026-tickets", city: "Dallas, USA", capacity: "80,000", role: "Host City" },
  { id: "4", name: "Estadio Azteca", slug: "venues/estadio-azteca-world-cup-2026-tickets", city: "Mexico City, Mexico", capacity: "87,000", role: "Opening Match" },
  { id: "5", name: "Mercedes-Benz Stadium", slug: "venues/mercedes-benz-stadium-world-cup-2026-tickets", city: "Atlanta, USA", capacity: "71,000", role: "Host City" },
  { id: "6", name: "Hard Rock Stadium", slug: "venues/hard-rock-stadium-world-cup-2026-tickets", city: "Miami, USA", capacity: "65,000", role: "Host City" },
  { id: "7", name: "Gillette Stadium", slug: "venues/gillette-stadium-world-cup-2026-tickets", city: "Boston, USA", capacity: "65,878", role: "Host City" },
  { id: "8", name: "Levi's Stadium", slug: "venues/levis-stadium-world-cup-2026-tickets", city: "San Francisco, USA", capacity: "68,500", role: "Host City" },
]

export default async function HomePage() {
  // Load homepage article
  const articlePath = path.join(process.cwd(), "content", "articles", "homepage-world-cup-tickets.md")
  const articleContent = fs.readFileSync(articlePath, "utf8")
  const { data: frontmatter, content } = matter(articleContent)
  const htmlContent = marked(content)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            World Cup Tickets | FIFA World Cup 2026 Tickets
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Your trusted source for FIFA World Cup 2026 tickets. Compare prices for all matches, teams, and venues across USA, Mexico, and Canada. Secure your World Cup tickets today.
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-2xl">
            <SuggestiveSearch />
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-slate-400">Popular:</span>
              <LanguageLink
                href="/fifa-world-cup-2026-tickets"
                className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
              >
                World Cup 2026 Tickets
              </LanguageLink>
              <LanguageLink
                href="/cricket-world-cup-2027-tickets"
                className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
              >
                Cricket World Cup 2027 Tickets
              </LanguageLink>
              <LanguageLink
                href="/euro-2028-tickets"
                className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
              >
                Euro 2028 Tickets
              </LanguageLink>
              <LanguageLink
                href="/summer-olympics-2028-tickets"
                className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
              >
                Olympics 2028 Tickets
              </LanguageLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Competitions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Featured Competitions</h2>
              <p className="text-slate-500">Tickets to the world&apos;s biggest events</p>
            </div>
            <Link href="/competitions">
              <Button variant="outline">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCompetitions.map((comp) => (
              <Link key={comp.id} href={`/${comp.slug}`}>
                <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-blue-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Trophy className="h-16 w-16 text-white/30" />
                    </div>
                    {comp.is_hot && (
                      <Badge className="absolute right-2 top-2" variant="destructive">
                        Hot
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-slate-500">{comp.sport}</p>
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                      {comp.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      {comp.date}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Teams */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">World Cup 2026 Teams</h2>
              <p className="text-slate-500">Top nations competing for the trophy</p>
            </div>
            <Link href="/teams">
              <Button variant="outline">
                View All Teams
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {popularTeams.map((team) => (
              <Link key={team.id} href={`/${team.slug}`}>
                <Card className="group text-center transition-shadow hover:shadow-lg">
                  <CardContent className="p-4">
                    <span className="text-4xl">{team.flag}</span>
                    <h3 className="mt-2 font-medium text-slate-900 group-hover:text-blue-600">
                      {team.name}
                    </h3>
                    <p className="text-sm text-slate-500">{team.sport}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Fixtures */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                <Star className="mr-2 inline-block h-6 w-6 text-yellow-500" />
                World Cup 2026 Fixtures
              </h2>
              <p className="text-slate-500">Must-see matches and knockout rounds</p>
            </div>
            <Link href="/fixtures">
              <Button variant="outline">
                View All Fixtures
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {hotFixtures.map((fixture) => (
              <Link key={fixture.id} href={`/${fixture.slug}`}>
                <Card className="group transition-shadow hover:shadow-lg">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{fixture.home_flag}</span>
                        <span className="font-medium">vs</span>
                        <span className="text-2xl">{fixture.away_flag}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                          {fixture.title}
                        </h3>
                        <p className="text-sm text-slate-500">{fixture.competition}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="flex items-center gap-1 text-sm font-medium text-slate-900">
                        <Calendar className="h-4 w-4" />
                        {fixture.date}
                      </p>
                      <p className="flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-4 w-4" />
                        {fixture.venue}
                      </p>
                    </div>
                    <Button>
                      <Ticket className="mr-2 h-4 w-4" />
                      Get Tickets
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Major Venues */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">World Cup 2026 Venues</h2>
              <p className="text-slate-500">Official stadiums across USA, Mexico & Canada</p>
            </div>
            <Link href="/venues">
              <Button variant="outline">
                View All Venues
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {majorVenues.map((venue) => (
              <Link key={venue.id} href={`/${venue.slug}`}>
                <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="relative aspect-video bg-gradient-to-br from-slate-600 to-slate-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-16 w-16 text-white/30" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                      {venue.name}
                    </h3>
                    <p className="text-sm text-slate-500">{venue.city}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {venue.role}
                      </span>
                      <span className="text-xs text-slate-500">{venue.capacity}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Article Header */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                World Cup Tickets: Your Complete Guide
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to know about securing tickets to FIFA World Cup 2026, Olympics, and the world's biggest sporting events
              </p>
            </div>

            {/* Article Content */}
            <article className="prose prose-slate prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b-2 prose-h2:border-blue-200 prose-h2:pb-6 prose-h2:text-blue-900
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-blue-800
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-purple-700
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-[17px]
              prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-700 prose-a:transition-colors
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-ul:my-8 prose-ul:space-y-3 prose-li:my-0 prose-li:text-slate-700 prose-li:leading-relaxed
              prose-ol:my-8 prose-ol:space-y-3
              prose-table:border-collapse prose-table:w-full prose-table:my-10
              prose-th:bg-blue-50 prose-th:p-4 prose-th:text-left prose-th:font-semibold prose-th:text-blue-900
              prose-td:border prose-td:border-slate-200 prose-td:p-4
              prose-hr:border-slate-300 prose-hr:my-12
              bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-16
              [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-gradient-to-r [&>blockquote]:from-blue-50 [&>blockquote]:to-blue-100/50 [&>blockquote]:p-6 [&>blockquote]:rounded-r-lg [&>blockquote]:my-10 [&>blockquote]:shadow-sm
              [&>blockquote>p]:text-blue-900 [&>blockquote>p]:font-medium [&>blockquote>p]:mb-0 [&>blockquote>p]:text-base [&>blockquote>p]:leading-relaxed
              [&>blockquote:nth-of-type(2n)]:border-purple-500 [&>blockquote:nth-of-type(2n)]:from-purple-50 [&>blockquote:nth-of-type(2n)]:to-purple-100/50 [&>blockquote:nth-of-type(2n)>p]:text-purple-900
              [&>blockquote:nth-of-type(3n)]:border-green-500 [&>blockquote:nth-of-type(3n)]:from-green-50 [&>blockquote:nth-of-type(3n)]:to-green-100/50 [&>blockquote:nth-of-type(3n)>p]:text-green-900
              [&>blockquote:nth-of-type(4n)]:border-orange-500 [&>blockquote:nth-of-type(4n)]:from-orange-50 [&>blockquote:nth-of-type(4n)]:to-orange-100/50 [&>blockquote:nth-of-type(4n)>p]:text-orange-900">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </article>

            {/* Article Footer CTA */}
            <div className="mt-12 text-center bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Ready to Secure Your World Cup Tickets?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Browse all available FIFA World Cup 2026 tickets, compare prices, and find the perfect seats for your dream match.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <LanguageLink href="/fifa-world-cup-2026-tickets">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Ticket className="mr-2 h-5 w-5" />
                    Browse All World Cup Tickets
                  </Button>
                </LanguageLink>
                <LanguageLink href="/teams">
                  <Button size="lg" variant="outline">
                    <Users className="mr-2 h-5 w-5" />
                    View All Teams
                  </Button>
                </LanguageLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Never Miss a World Cup 2026 Match</h2>
          <p className="mx-auto mb-8 max-w-xl text-blue-100">
            Get notified about FIFA World Cup 2026 ticket releases, price drops, and match updates for your favorite teams. Be the first to secure your tickets.
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <Input
              placeholder="Enter your email"
              className="bg-white text-slate-900"
            />
            <Button variant="secondary">Get World Cup Alerts</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
