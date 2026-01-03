"use client"

import { useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Search, Edit, Eye, Plane, MapPin } from "lucide-react"

// Travel guides data based on actual pages created
const travelGuidesData = [
  {
    id: "new-york",
    city: "New York",
    slug: "new-york-world-cup-2026-travel-guide",
    country: "USA",
    venue: "MetLife Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "los-angeles",
    city: "Los Angeles",
    slug: "los-angeles-world-cup-2026-travel-guide",
    country: "USA",
    venue: "SoFi Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "miami",
    city: "Miami",
    slug: "miami-world-cup-2026-travel-guide",
    country: "USA",
    venue: "Hard Rock Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "dallas",
    city: "Dallas",
    slug: "dallas-world-cup-2026-travel-guide",
    country: "USA",
    venue: "AT&T Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "atlanta",
    city: "Atlanta",
    slug: "atlanta-world-cup-2026-travel-guide",
    country: "USA",
    venue: "Mercedes-Benz Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "houston",
    city: "Houston",
    slug: "houston-world-cup-2026-travel-guide",
    country: "USA",
    venue: "NRG Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "philadelphia",
    city: "Philadelphia",
    slug: "philadelphia-world-cup-2026-travel-guide",
    country: "USA",
    venue: "Lincoln Financial Field",
    status: "published",
    hasContent: true,
  },
  {
    id: "san-francisco",
    city: "San Francisco",
    slug: "san-francisco-world-cup-2026-travel-guide",
    country: "USA",
    venue: "Levi's Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "boston",
    city: "Boston",
    slug: "boston-world-cup-2026-travel-guide",
    country: "USA",
    venue: "Gillette Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "seattle",
    city: "Seattle",
    slug: "seattle-world-cup-2026-travel-guide",
    country: "USA",
    venue: "Lumen Field",
    status: "published",
    hasContent: true,
  },
  {
    id: "kansas-city",
    city: "Kansas City",
    slug: "kansas-city-world-cup-2026-travel-guide",
    country: "USA",
    venue: "Arrowhead Stadium",
    status: "published",
    hasContent: true,
  },
  {
    id: "mexico-city",
    city: "Mexico City",
    slug: "mexico-city-world-cup-2026-travel-guide",
    country: "Mexico",
    venue: "Estadio Azteca",
    status: "published",
    hasContent: true,
  },
  {
    id: "guadalajara",
    city: "Guadalajara",
    slug: "guadalajara-world-cup-2026-travel-guide",
    country: "Mexico",
    venue: "Estadio Akron",
    status: "published",
    hasContent: true,
  },
  {
    id: "monterrey",
    city: "Monterrey",
    slug: "monterrey-world-cup-2026-travel-guide",
    country: "Mexico",
    venue: "Estadio BBVA",
    status: "published",
    hasContent: true,
  },
  {
    id: "toronto",
    city: "Toronto",
    slug: "toronto-world-cup-2026-travel-guide",
    country: "Canada",
    venue: "BMO Field",
    status: "published",
    hasContent: true,
  },
  {
    id: "vancouver",
    city: "Vancouver",
    slug: "vancouver-world-cup-2026-travel-guide",
    country: "Canada",
    venue: "BC Place",
    status: "published",
    hasContent: true,
  },
]

export default function TravelGuidesPage() {
  const [search, setSearch] = useState("")
  const [country, setCountry] = useState<string>("all")

  const filteredGuides = travelGuidesData.filter((guide) => {
    const matchesSearch = guide.city.toLowerCase().includes(search.toLowerCase()) ||
      guide.venue.toLowerCase().includes(search.toLowerCase())
    const matchesCountry = country === "all" || guide.country === country
    return matchesSearch && matchesCountry
  })

  const usaCities = travelGuidesData.filter(g => g.country === "USA").length
  const mexicoCities = travelGuidesData.filter(g => g.country === "Mexico").length
  const canadaCities = travelGuidesData.filter(g => g.country === "Canada").length

  return (
    <div className="flex-1">
      <AdminHeader title="Travel Guides" />

      <div className="p-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Plane className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">16</p>
                  <p className="text-sm text-slate-500">Total Cities</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-red-50 p-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{usaCities}</p>
                  <p className="text-sm text-slate-500">USA Cities</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-green-50 p-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{mexicoCities}</p>
                  <p className="text-sm text-slate-500">Mexico Cities</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-orange-50 p-2">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{canadaCities}</p>
                  <p className="text-sm text-slate-500">Canada Cities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search cities or venues..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Mexico">Mexico</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button asChild>
            <Link href="/admin/travel-guides/new">
              <Plus className="mr-2 h-4 w-4" />
              Add City Guide
            </Link>
          </Button>
        </div>

        {/* Travel Guides Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>City</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGuides.map((guide) => (
                <TableRow key={guide.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-slate-900">{guide.city}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {guide.country === "USA" ? "🇺🇸" : guide.country === "Mexico" ? "🇲🇽" : "🇨🇦"} {guide.country}
                    </Badge>
                  </TableCell>
                  <TableCell>{guide.venue}</TableCell>
                  <TableCell className="text-sm text-slate-500">{guide.slug}</TableCell>
                  <TableCell>
                    <Badge className={guide.hasContent ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                      {guide.hasContent ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/travel/${guide.slug}`} target="_blank">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/travel-guides/${guide.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
