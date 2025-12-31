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
import { Plus, Search, Edit, Eye, Trash2, Calendar } from "lucide-react"

interface Fixture {
  id: string
  slug: string
  fixture_type: string
  sport_type: string
  date: string
  time: string
  status: string
  is_featured: boolean
  is_hot: boolean
  created_at: string
  translations: {
    name: string
    description: string
    language: string
  }[]
  venue?: {
    name: string
  }[] | null
  competition?: {
    slug: string
    translations: { name: string; language: string }[]
  }[] | null
}

export default function FixturesPage() {
  const [fixtures, setFixtures] = useState<Fixture[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [fixtureType, setFixtureType] = useState<string>("all")
  const [sportType, setSportType] = useState<string>("all")
  const [status, setStatus] = useState<string>("all")

  useEffect(() => {
    fetchFixtures()
  }, [fixtureType, sportType, status])

  const fetchFixtures = async () => {
    setLoading(true)
    const supabase = createClient()

    let query = supabase
      .from("fixtures")
      .select(`
        id,
        slug,
        fixture_type,
        sport_type,
        date,
        time,
        status,
        is_featured,
        is_hot,
        created_at,
        translations(name, description, language),
        venue:venues(name),
        competition:competitions(slug, translations(name, language))
      `)
      .order("date", { ascending: true })

    if (fixtureType !== "all") {
      query = query.eq("fixture_type", fixtureType)
    }
    if (sportType !== "all") {
      query = query.eq("sport_type", sportType)
    }
    if (status !== "all") {
      query = query.eq("status", status)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching fixtures:", error)
    } else {
      setFixtures(data || [])
    }
    setLoading(false)
  }

  const filteredFixtures = fixtures.filter((fixture) => {
    const translation = fixture.translations?.find((t) => t.language === "en") || fixture.translations?.[0]
    const name = translation?.name || fixture.slug
    return name.toLowerCase().includes(search.toLowerCase())
  })

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this fixture?")) return

    const supabase = createClient()
    const { error } = await supabase.from("fixtures").delete().eq("id", id)

    if (error) {
      console.error("Error deleting fixture:", error)
      alert("Failed to delete fixture")
    } else {
      fetchFixtures()
    }
  }

  const getFixtureName = (fixture: Fixture) => {
    const translation = fixture.translations?.find((t) => t.language === "en") || fixture.translations?.[0]
    return translation?.name || fixture.slug
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "live":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-slate-100 text-slate-800"
      case "postponed":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  const getFixtureTypeLabel = (type: string) => {
    return type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Fixtures" />

      <div className="p-6">
        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search fixtures..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={fixtureType} onValueChange={setFixtureType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Match Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="group_stage">Group Stage</SelectItem>
                <SelectItem value="round_of_32">Round of 32</SelectItem>
                <SelectItem value="round_of_16">Round of 16</SelectItem>
                <SelectItem value="quarter_final">Quarter Final</SelectItem>
                <SelectItem value="semi_final">Semi Final</SelectItem>
                <SelectItem value="third_place">Third Place</SelectItem>
                <SelectItem value="final">Final</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="qualifier">Qualifier</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sportType} onValueChange={setSportType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="basketball">Basketball</SelectItem>
                <SelectItem value="tennis">Tennis</SelectItem>
                <SelectItem value="rugby">Rugby</SelectItem>
                <SelectItem value="cricket">Cricket</SelectItem>
                <SelectItem value="athletics">Athletics</SelectItem>
                <SelectItem value="swimming">Swimming</SelectItem>
              </SelectContent>
            </Select>

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="postponed">Postponed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button asChild>
            <Link href="/admin/fixtures/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Fixture
            </Link>
          </Button>
        </div>

        {/* Fixtures Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fixture</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Venue</TableHead>
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
              ) : filteredFixtures.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <Calendar className="mx-auto h-12 w-12 text-slate-300" />
                    <p className="mt-2 text-slate-500">No fixtures found</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredFixtures.map((fixture) => (
                  <TableRow key={fixture.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-slate-900">
                          {getFixtureName(fixture)}
                        </p>
                        <p className="text-sm text-slate-500">{fixture.slug}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {getFixtureTypeLabel(fixture.fixture_type)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{formatDate(fixture.date)}</p>
                        {fixture.time && (
                          <p className="text-sm text-slate-500">{fixture.time}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {fixture.venue?.[0]?.name || "-"}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(fixture.status)}>
                        {fixture.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {fixture.is_featured && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          Featured
                        </Badge>
                      )}
                      {fixture.is_hot && (
                        <Badge className="bg-red-100 text-red-800 ml-1">
                          Hot
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/${fixture.slug}`} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/fixtures/${fixture.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(fixture.id)}
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
