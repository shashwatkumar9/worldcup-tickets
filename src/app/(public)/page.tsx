import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  ChevronRight,
  Calendar,
  MapPin,
  Ticket,
  Trophy,
  Users,
  Star,
} from "lucide-react"

// Mock data - In production, this would come from the database
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
    name: "Summer Olympics 2028",
    slug: "summer-olympics-2028-tickets",
    sport: "Multi-Sport",
    date: "Jul - Aug 2028",
    image: "/images/olympics-2028.jpg",
    is_hot: true,
  },
  {
    id: "3",
    name: "Euro 2028",
    slug: "euro-2028-tickets",
    sport: "Football",
    date: "Jun - Jul 2028",
    image: "/images/euro-2028.jpg",
    is_hot: false,
  },
  {
    id: "4",
    name: "Cricket World Cup 2027",
    slug: "cricket-world-cup-2027-tickets",
    sport: "Cricket",
    date: "Oct - Nov 2027",
    image: "/images/cricket-wc.jpg",
    is_hot: true,
  },
  {
    id: "5",
    name: "NBA Finals 2025",
    slug: "nba-finals-2025-tickets",
    sport: "Basketball",
    date: "Jun 2025",
    image: "/images/nba-finals.jpg",
    is_hot: true,
  },
  {
    id: "6",
    name: "Super Bowl LIX",
    slug: "super-bowl-lix-tickets",
    sport: "American Football",
    date: "Feb 2025",
    image: "/images/super-bowl.jpg",
    is_hot: true,
  },
  {
    id: "7",
    name: "Rugby World Cup 2027",
    slug: "rugby-world-cup-2027-tickets",
    sport: "Rugby",
    date: "Sep - Oct 2027",
    image: "/images/rugby-wc.jpg",
    is_hot: false,
  },
  {
    id: "8",
    name: "Copa America 2024",
    slug: "copa-america-2024-tickets",
    sport: "Football",
    date: "Jun - Jul 2024",
    image: "/images/copa-america.jpg",
    is_hot: false,
  },
]

const popularTeams = [
  { id: "1", name: "Argentina", slug: "argentina-tickets", flag: "🇦🇷", sport: "Football" },
  { id: "2", name: "Brazil", slug: "brazil-tickets", flag: "🇧🇷", sport: "Football" },
  { id: "3", name: "USA", slug: "usa-tickets", flag: "🇺🇸", sport: "Football" },
  { id: "4", name: "Germany", slug: "germany-tickets", flag: "🇩🇪", sport: "Football" },
  { id: "5", name: "France", slug: "france-tickets", flag: "🇫🇷", sport: "Football" },
  { id: "6", name: "England", slug: "england-tickets", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", sport: "Football" },
  { id: "7", name: "LA Lakers", slug: "la-lakers-tickets", flag: "🏀", sport: "Basketball" },
  { id: "8", name: "Dallas Cowboys", slug: "dallas-cowboys-tickets", flag: "🏈", sport: "NFL" },
  { id: "9", name: "India", slug: "india-cricket-tickets", flag: "🇮🇳", sport: "Cricket" },
  { id: "10", name: "Inter Miami", slug: "inter-miami-tickets", flag: "⚽", sport: "MLS" },
  { id: "11", name: "NY Yankees", slug: "new-york-yankees-tickets", flag: "⚾", sport: "MLB" },
  { id: "12", name: "All Blacks", slug: "all-blacks-tickets", flag: "🇳🇿", sport: "Rugby" },
]

const hotFixtures = [
  {
    id: "1",
    title: "Argentina vs Brazil",
    slug: "argentina-vs-brazil-tickets",
    competition: "World Cup Qualifier",
    date: "Nov 19, 2024",
    venue: "Estadio Monumental",
    home_flag: "🇦🇷",
    away_flag: "🇧🇷",
  },
  {
    id: "2",
    title: "India vs Australia",
    slug: "india-vs-australia-cricket-tickets",
    competition: "Cricket World Cup",
    date: "Nov 21, 2024",
    venue: "Wankhede Stadium",
    home_flag: "🇮🇳",
    away_flag: "🇦🇺",
  },
  {
    id: "3",
    title: "NY Giants vs Dallas Cowboys",
    slug: "giants-vs-cowboys-tickets",
    competition: "NFL Week 12",
    date: "Nov 24, 2024",
    venue: "MetLife Stadium",
    home_flag: "🏈",
    away_flag: "🏈",
  },
  {
    id: "4",
    title: "USA vs Mexico",
    slug: "usa-vs-mexico-world-cup-2026-tickets",
    competition: "World Cup 2026",
    date: "Jun 15, 2026",
    venue: "MetLife Stadium",
    home_flag: "🇺🇸",
    away_flag: "🇲🇽",
  },
  {
    id: "5",
    title: "Brazil vs Argentina",
    slug: "brazil-vs-argentina-world-cup-2026-tickets",
    competition: "World Cup 2026",
    date: "Jun 22, 2026",
    venue: "SoFi Stadium",
    home_flag: "🇧🇷",
    away_flag: "🇦🇷",
  },
]

const majorVenues = [
  { id: "1", name: "MetLife Stadium", slug: "metlife-stadium-tickets", city: "New Jersey, USA", capacity: "82,500" },
  { id: "2", name: "SoFi Stadium", slug: "sofi-stadium-tickets", city: "Los Angeles, USA", capacity: "70,000" },
  { id: "3", name: "Wembley Stadium", slug: "wembley-stadium-tickets", city: "London, UK", capacity: "90,000" },
  { id: "4", name: "Madison Square Garden", slug: "madison-square-garden-tickets", city: "New York, USA", capacity: "20,789" },
  { id: "5", name: "Azteca Stadium", slug: "azteca-stadium-tickets", city: "Mexico City, Mexico", capacity: "87,000" },
  { id: "6", name: "Stade de France", slug: "stade-de-france-tickets", city: "Paris, France", capacity: "81,338" },
  { id: "7", name: "Melbourne Cricket Ground", slug: "mcg-tickets", city: "Melbourne, Australia", capacity: "100,024" },
  { id: "8", name: "AT&T Stadium", slug: "att-stadium-tickets", city: "Dallas, USA", capacity: "80,000" },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Your Gateway to Global Sports Events
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Find and compare tickets to the world&apos;s biggest sporting events. World Cup, Olympics, NBA, NFL, and more.
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search events, teams, or venues..."
                className="h-14 bg-white pl-12 text-lg text-slate-900"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                Search
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-slate-400">Popular:</span>
              {["World Cup 2026", "Olympics 2028", "NBA Finals", "Super Bowl"].map(
                (term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
                  >
                    {term}
                  </Link>
                )
              )}
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
              <h2 className="text-2xl font-bold text-slate-900">Popular Teams</h2>
              <p className="text-slate-500">Follow your favorite teams</p>
            </div>
            <Link href="/teams">
              <Button variant="outline">
                View All
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
                Hot Fixtures
              </h2>
              <p className="text-slate-500">Don&apos;t miss these matches</p>
            </div>
            <Link href="/fixtures">
              <Button variant="outline">
                View All
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
              <h2 className="text-2xl font-bold text-slate-900">Major Venues</h2>
              <p className="text-slate-500">Iconic stadiums and arenas</p>
            </div>
            <Link href="/venues">
              <Button variant="outline">
                View All
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
                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                      <Users className="h-4 w-4" />
                      Capacity: {venue.capacity}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Never Miss a Game</h2>
          <p className="mx-auto mb-8 max-w-xl text-blue-100">
            Get notified about ticket sales, price drops, and upcoming events for your favorite teams.
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <Input
              placeholder="Enter your email"
              className="bg-white text-slate-900"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
