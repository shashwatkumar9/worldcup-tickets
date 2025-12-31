"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
import { Plus, Search, Edit, Eye, Trash2, MapPin } from "lucide-react"

interface Venue {
  id: string
  slug: string
  name: string
  city: string
  country: string
  capacity: number
  venue_type: string
  status: string
  is_featured: boolean
  created_at: string
  translations: {
    name: string
    description: string
    language: string
  }[]
}

export default function VenuesPage() {
  const [venues, setVenues] = useState<Venue[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [venueType, setVenueType] = useState<string>("all")
  const [status, setStatus] = useState<string>("all")

  useEffect(() => {
    fetchVenues()
  }, [venueType, status])

  const fetchVenues = async () => {
    setLoading(true)
    const supabase = createClient()

    let query = supabase
      .from("venues")
      .select(`
        id,
        slug,
        name,
        city,
        country,
        capacity,
        venue_type,
        status,
        is_featured,
        created_at,
        translations(name, description, language)
      `)
      .order("name", { ascending: true })

    if (venueType !== "all") {
      query = query.eq("venue_type", venueType)
    }
    if (status !== "all") {
      query = query.eq("status", status)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching venues:", error)
    } else {
      setVenues(data || [])
    }
    setLoading(false)
  }

  const filteredVenues = venues.filter((venue) => {
    const translation = venue.translations?.find((t) => t.language === "en") || venue.translations?.[0]
    const name = translation?.name || venue.name
    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      venue.city.toLowerCase().includes(search.toLowerCase()) ||
      venue.country.toLowerCase().includes(search.toLowerCase())
    )
  })

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this venue?")) return

    const supabase = createClient()
    const { error } = await supabase.from("venues").delete().eq("id", id)

    if (error) {
      console.error("Error deleting venue:", error)
      alert("Failed to delete venue")
    } else {
      fetchVenues()
    }
  }

  const getVenueName = (venue: Venue) => {
    const translation = venue.translations?.find((t) => t.language === "en") || venue.translations?.[0]
    return translation?.name || venue.name
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-slate-100 text-slate-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  const getVenueTypeLabel = (type: string) => {
    return type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  const formatCapacity = (capacity: number) => {
    return capacity?.toLocaleString() || "-"
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Venues" />

      <div className="p-6">
        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search venues..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={venueType} onValueChange={setVenueType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Venue Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="stadium">Stadium</SelectItem>
                <SelectItem value="arena">Arena</SelectItem>
                <SelectItem value="court">Court</SelectItem>
                <SelectItem value="track">Track</SelectItem>
                <SelectItem value="pool">Pool</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button asChild>
            <Link href="/admin/venues/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Venue
            </Link>
          </Button>
        </div>

        {/* Venues Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Venue</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : filteredVenues.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <MapPin className="mx-auto h-12 w-12 text-slate-300" />
                    <p className="mt-2 text-slate-500">No venues found</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredVenues.map((venue) => (
                  <TableRow key={venue.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-slate-900">
                          {getVenueName(venue)}
                        </p>
                        <p className="text-sm text-slate-500">{venue.slug}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{venue.city}</p>
                        <p className="text-sm text-slate-500">{venue.country}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {getVenueTypeLabel(venue.venue_type)}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatCapacity(venue.capacity)}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(venue.status)}>
                        {venue.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {venue.is_featured && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          Featured
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/${venue.slug}`} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/venues/${venue.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(venue.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
