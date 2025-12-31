interface Organization {
  "@type": "Organization"
  name: string
  url: string
  logo?: string
  sameAs?: string[]
}

interface WebSite {
  "@type": "WebSite"
  name: string
  url: string
  potentialAction?: {
    "@type": "SearchAction"
    target: {
      "@type": "EntryPoint"
      urlTemplate: string
    }
    "query-input": string
  }
}

interface Event {
  "@type": "SportsEvent"
  name: string
  description?: string
  startDate?: string
  endDate?: string
  location?: {
    "@type": "Place"
    name: string
    address?: string
  }
  offers?: {
    "@type": "AggregateOffer"
    lowPrice?: number
    priceCurrency?: string
    availability?: string
    url?: string
  }
  performer?: {
    "@type": "SportsTeam"
    name: string
  }[]
}

interface SportsTeam {
  "@type": "SportsTeam"
  name: string
  description?: string
  sport?: string
  location?: {
    "@type": "Country"
    name: string
  }
}

interface Place {
  "@type": "StadiumOrArena"
  name: string
  description?: string
  address?: string
  maximumAttendeeCapacity?: number
  geo?: {
    "@type": "GeoCoordinates"
    latitude: number
    longitude: number
  }
}

interface BreadcrumbList {
  "@type": "BreadcrumbList"
  itemListElement: {
    "@type": "ListItem"
    position: number
    name: string
    item?: string
  }[]
}

type JsonLdData =
  | Organization
  | WebSite
  | Event
  | SportsTeam
  | Place
  | BreadcrumbList
  | (Organization | WebSite | Event | SportsTeam | Place | BreadcrumbList)[]

interface JsonLdProps {
  data: JsonLdData
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    ...(Array.isArray(data) ? { "@graph": data } : data),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Helper functions to create schema.org objects

export function createOrganizationSchema(): Organization {
  return {
    "@type": "Organization",
    name: "WorldCup-Tickets.net",
    url: "https://worldcup-tickets.net",
    logo: "https://worldcup-tickets.net/logo.png",
    sameAs: [
      "https://twitter.com/worldcuptickets",
      "https://facebook.com/worldcuptickets",
    ],
  }
}

export function createWebsiteSchema(): WebSite {
  return {
    "@type": "WebSite",
    name: "WorldCup-Tickets.net",
    url: "https://worldcup-tickets.net",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://worldcup-tickets.net/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function createEventSchema(event: {
  name: string
  description?: string
  startDate?: string
  endDate?: string
  venue?: { name: string; address?: string }
  priceFrom?: number
  currency?: string
  teams?: string[]
  url?: string
}): Event {
  return {
    "@type": "SportsEvent",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.venue
      ? {
          "@type": "Place",
          name: event.venue.name,
          address: event.venue.address,
        }
      : undefined,
    offers: event.priceFrom
      ? {
          "@type": "AggregateOffer",
          lowPrice: event.priceFrom,
          priceCurrency: event.currency || "USD",
          availability: "https://schema.org/InStock",
          url: event.url,
        }
      : undefined,
    performer: event.teams?.map((team) => ({
      "@type": "SportsTeam",
      name: team,
    })),
  }
}

export function createTeamSchema(team: {
  name: string
  description?: string
  sport?: string
  country?: string
}): SportsTeam {
  return {
    "@type": "SportsTeam",
    name: team.name,
    description: team.description,
    sport: team.sport,
    location: team.country
      ? {
          "@type": "Country",
          name: team.country,
        }
      : undefined,
  }
}

export function createVenueSchema(venue: {
  name: string
  description?: string
  address?: string
  capacity?: number
  latitude?: number
  longitude?: number
}): Place {
  return {
    "@type": "StadiumOrArena",
    name: venue.name,
    description: venue.description,
    address: venue.address,
    maximumAttendeeCapacity: venue.capacity,
    geo:
      venue.latitude && venue.longitude
        ? {
            "@type": "GeoCoordinates",
            latitude: venue.latitude,
            longitude: venue.longitude,
          }
        : undefined,
  }
}

export function createBreadcrumbSchema(
  items: { name: string; url?: string }[]
): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
