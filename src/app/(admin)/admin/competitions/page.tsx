"use client"

import { useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Plus,
  Search,
  Edit,
  Eye,
  Trash2,
  MoreHorizontal,
  Trophy,
  Globe,
} from "lucide-react"

// Mock data for demonstration
const competitions = [
  {
    id: "1",
    slug: "fifa-world-cup-2026-tickets",
    name: "FIFA World Cup 2026",
    sport_type: "football",
    competition_type: "world_cup",
    start_date: "2026-06-11",
    end_date: "2026-07-19",
    status: "published",
    is_featured: true,
    is_hot: true,
    translations_count: 6,
    host_countries: ["US", "CA", "MX"],
  },
  {
    id: "2",
    slug: "summer-olympics-2028-tickets",
    name: "Summer Olympics 2028",
    sport_type: "multi_sport",
    competition_type: "olympics",
    start_date: "2028-07-14",
    end_date: "2028-07-30",
    status: "published",
    is_featured: true,
    is_hot: false,
    translations_count: 5,
    host_countries: ["US"],
  },
  {
    id: "3",
    slug: "euro-2028-tickets",
    name: "Euro 2028",
    sport_type: "football",
    competition_type: "continental",
    start_date: "2028-06-10",
    end_date: "2028-07-10",
    status: "draft",
    is_featured: false,
    is_hot: false,
    translations_count: 4,
    host_countries: ["GB", "IE"],
  },
  {
    id: "4",
    slug: "cricket-world-cup-2027-tickets",
    name: "Cricket World Cup 2027",
    sport_type: "cricket",
    competition_type: "world_cup",
    start_date: "2027-10-01",
    end_date: "2027-11-15",
    status: "published",
    is_featured: true,
    is_hot: true,
    translations_count: 3,
    host_countries: ["ZA"],
  },
  {
    id: "5",
    slug: "nba-finals-2025-tickets",
    name: "NBA Finals 2025",
    sport_type: "basketball",
    competition_type: "league",
    start_date: "2025-06-01",
    end_date: "2025-06-20",
    status: "published",
    is_featured: true,
    is_hot: true,
    translations_count: 6,
    host_countries: ["US"],
  },
]

const sportTypes = [
  { value: "all", label: "All Sports" },
  { value: "football", label: "Football" },
  { value: "cricket", label: "Cricket" },
  { value: "basketball", label: "Basketball" },
  { value: "american_football", label: "American Football" },
  { value: "baseball", label: "Baseball" },
  { value: "ice_hockey", label: "Ice Hockey" },
  { value: "rugby", label: "Rugby" },
  { value: "tennis", label: "Tennis" },
  { value: "multi_sport", label: "Multi-Sport" },
]

const competitionTypes = [
  { value: "all", label: "All Types" },
  { value: "world_cup", label: "World Cup" },
  { value: "olympics", label: "Olympics" },
  { value: "continental", label: "Continental" },
  { value: "league", label: "League" },
  { value: "tournament", label: "Tournament" },
]

const statuses = [
  { value: "all", label: "All Status" },
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" },
]

export default function CompetitionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sportFilter, setSportFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredCompetitions = competitions.filter((comp) => {
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSport = sportFilter === "all" || comp.sport_type === sportFilter
    const matchesType = typeFilter === "all" || comp.competition_type === typeFilter
    const matchesStatus = statusFilter === "all" || comp.status === statusFilter
    return matchesSearch && matchesSport && matchesType && matchesStatus
  })

  return (
    <div>
      <AdminHeader title="Competitions" />

      <div className="p-6">
        {/* Actions Bar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search competitions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <Select value={sportFilter} onValueChange={setSportFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sport" />
              </SelectTrigger>
              <SelectContent>
                {sportTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {competitionTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Add Button */}
          <Link href="/admin/competitions/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Competition
            </Button>
          </Link>
        </div>

        {/* Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableHead>
                <TableHead>Competition</TableHead>
                <TableHead>Sport</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Dates</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <Globe className="h-4 w-4" />
                </TableHead>
                <TableHead className="w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCompetitions.map((competition) => (
                <TableRow key={competition.id}>
                  <TableCell>
                    <input type="checkbox" className="rounded border-gray-300" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                        <Trophy className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{competition.name}</p>
                        <p className="text-sm text-slate-500">{competition.slug}</p>
                      </div>
                      {competition.is_featured && (
                        <Badge variant="secondary" className="ml-2">Featured</Badge>
                      )}
                      {competition.is_hot && (
                        <Badge variant="destructive" className="ml-1">Hot</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="capitalize">{competition.sport_type.replace("_", " ")}</span>
                  </TableCell>
                  <TableCell>
                    <span className="capitalize">{competition.competition_type.replace("_", " ")}</span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{new Date(competition.start_date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
                      <p className="text-slate-500">to {new Date(competition.end_date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        competition.status === "published"
                          ? "success"
                          : competition.status === "draft"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {competition.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-slate-600">
                      {competition.translations_count}/6
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Link href={`/admin/competitions/${competition.id}`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/${competition.slug}`} target="_blank">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            Showing 1-{filteredCompetitions.length} of {filteredCompetitions.length} competitions
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
