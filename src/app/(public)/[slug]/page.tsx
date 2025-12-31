import Link from "next/link"
import { notFound } from "next/navigation"
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
} from "lucide-react"

// This is a catch-all page for entity slugs
// In production, this would fetch data based on the slug

interface PageProps {
  params: Promise<{ slug: string }>
}

// Mock function to determine entity type from slug
function getEntityFromSlug(slug: string) {
  // In production, this would be a database lookup
  const mockCompetition = {
    type: "competition",
    id: "1",
    name: "FIFA World Cup 2026",
    slug: "fifa-world-cup-2026-tickets",
    sport_type: "football",
    competition_type: "world_cup",
    start_date: "2026-06-11",
    end_date: "2026-07-19",
    description: "The FIFA World Cup 2026 will be held across USA, Canada, and Mexico, featuring 48 teams in the expanded format. This is the first World Cup to feature 48 teams and will be co-hosted by three nations.",
    host_countries: ["US", "CA", "MX"],
    is_featured: true,
    is_hot: true,
  }

  if (slug === "fifa-world-cup-2026-tickets") {
    return mockCompetition
  }

  return null
}

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 150, logo: "🎫", url: "#" },
  { partner: "Ticombo", price_from: 145, logo: "🎟️", url: "#" },
  { partner: "StubHub", price_from: 165, logo: "🎫", url: "#" },
  { partner: "Viagogo", price_from: 155, logo: "🎟️", url: "#" },
]

const relatedTeams = [
  { name: "Argentina", flag: "🇦🇷", slug: "argentina-tickets" },
  { name: "Brazil", flag: "🇧🇷", slug: "brazil-tickets" },
  { name: "USA", flag: "🇺🇸", slug: "usa-tickets" },
  { name: "Germany", flag: "🇩🇪", slug: "germany-tickets" },
  { name: "France", flag: "🇫🇷", slug: "france-tickets" },
  { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", slug: "england-tickets" },
]

const relatedVenues = [
  { name: "MetLife Stadium", city: "New Jersey", slug: "metlife-stadium-tickets" },
  { name: "SoFi Stadium", city: "Los Angeles", slug: "sofi-stadium-tickets" },
  { name: "AT&T Stadium", city: "Dallas", slug: "att-stadium-tickets" },
  { name: "Azteca Stadium", city: "Mexico City", slug: "azteca-stadium-tickets" },
]

const relatedFixtures = [
  { title: "USA vs Mexico", date: "Jun 15, 2026", venue: "MetLife Stadium", slug: "usa-vs-mexico-tickets" },
  { title: "Brazil vs Argentina", date: "Jun 22, 2026", venue: "SoFi Stadium", slug: "brazil-vs-argentina-tickets" },
  { title: "World Cup Final", date: "Jul 19, 2026", venue: "MetLife Stadium", slug: "world-cup-final-2026-tickets" },
]

export default async function EntityPage({ params }: PageProps) {
  const { slug } = await params
  const entity = getEntityFromSlug(slug)

  if (!entity) {
    notFound()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-900 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/world-cup-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/competitions" className="hover:text-white">Competitions</Link>
            <ChevronRight className="h-4 w-4" />
            <span>{entity.name}</span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Trophy className="h-10 w-10 text-yellow-400" />
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold md:text-4xl">{entity.name} Tickets</h1>
                    {entity.is_hot && (
                      <Badge variant="destructive">Hot</Badge>
                    )}
                  </div>
                  <p className="mt-1 text-slate-300">
                    {entity.host_countries.map((c: string) => c).join(", ")} | {entity.start_date} - {entity.end_date}
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-slate-300">
                {entity.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Tickets from $145
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Compare Prices
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Group Stage", "Round of 32", "Quarter-Finals", "Semi-Finals", "Final", "Opening Ceremony"].map((round) => (
                    <Button key={round} variant="outline" size="sm">
                      {round} Tickets
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Host Venues */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Host Venues
                </CardTitle>
                <Link href="/venues" className="text-sm text-blue-600 hover:underline">
                  View All
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedVenues.map((venue) => (
                    <Link key={venue.slug} href={`/${venue.slug}`}>
                      <div className="flex items-center gap-3 rounded-lg border p-3 hover:bg-slate-50">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                          <MapPin className="h-6 w-6 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{venue.name}</p>
                          <p className="text-sm text-slate-500">{venue.city}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Participating Teams */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Participating Teams
                </CardTitle>
                <Link href="/teams" className="text-sm text-blue-600 hover:underline">
                  View All 48 Teams
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {relatedTeams.map((team) => (
                    <Link key={team.slug} href={`/${team.slug}`}>
                      <div className="flex items-center gap-2 rounded-lg border p-2 hover:bg-slate-50">
                        <span className="text-2xl">{team.flag}</span>
                        <span className="font-medium text-slate-900">{team.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hot Fixtures */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Hot Fixtures
                </CardTitle>
                <Link href="/fixtures" className="text-sm text-blue-600 hover:underline">
                  View All
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {relatedFixtures.map((fixture) => (
                    <Link key={fixture.slug} href={`/${fixture.slug}`}>
                      <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-slate-50">
                        <div>
                          <p className="font-medium text-slate-900">{fixture.title}</p>
                          <p className="text-sm text-slate-500">
                            {fixture.date} | {fixture.venue}
                          </p>
                        </div>
                        <Button size="sm">
                          <Ticket className="mr-2 h-4 w-4" />
                          Tickets
                        </Button>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About {entity.name}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The 2026 FIFA World Cup will be the 23rd edition of the FIFA World Cup, the quadrennial international men&apos;s soccer championship contested by the national teams of the member associations of FIFA.
                </p>
                <p>
                  The tournament will take place from June 11 to July 19, 2026, and will be jointly hosted by the United States, Mexico, and Canada. This will be the first World Cup to be hosted by three nations and the first to feature 48 teams.
                </p>
                <h3>Tournament Format</h3>
                <p>
                  The expanded format will feature 48 teams divided into 12 groups of four teams each. The top two teams from each group, plus the eight best third-placed teams, will advance to the knockout stage.
                </p>
                <h3>How to Buy Tickets</h3>
                <p>
                  Tickets for the FIFA World Cup 2026 will be available through official FIFA channels as well as authorized resellers. We compare prices from multiple trusted ticket partners to help you find the best deals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Buy Tickets Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-600" />
                  Buy {entity.name} Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Compare prices from multiple trusted ticket partners
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

                <p className="text-xs text-slate-500">
                  Prices shown are starting prices and may vary based on seat location and availability.
                </p>
              </CardContent>
            </Card>

            {/* Event Info */}
            <Card>
              <CardHeader>
                <CardTitle>Event Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Dates</p>
                    <p className="font-medium">June 11 - July 19, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Host Countries</p>
                    <p className="font-medium">USA, Canada, Mexico</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Teams</p>
                    <p className="font-medium">48 Teams</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Matches</p>
                    <p className="font-medium">104 Matches</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const entity = getEntityFromSlug(slug)

  if (!entity) {
    return {
      title: "Not Found",
    }
  }

  return {
    title: `${entity.name} Tickets | WorldCup-Tickets.net`,
    description: `Buy ${entity.name} tickets. Compare prices from Ticketmaster, StubHub, Viagogo and more. Find the best deals on ${entity.name} tickets.`,
  }
}
