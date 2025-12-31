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
import { Plus, Search, Edit, Eye, Trash2, Users } from "lucide-react"

interface Team {
  id: string
  slug: string
  team_type: string
  sport_type: string
  country_code: string
  status: string
  is_featured: boolean
  created_at: string
  translations: {
    name: string
    description: string
    language: string
  }[]
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [teamType, setTeamType] = useState<string>("all")
  const [sportType, setSportType] = useState<string>("all")
  const [status, setStatus] = useState<string>("all")

  useEffect(() => {
    fetchTeams()
  }, [teamType, sportType, status])

  const fetchTeams = async () => {
    setLoading(true)
    const supabase = createClient()

    let query = supabase
      .from("teams")
      .select(`
        id,
        slug,
        team_type,
        sport_type,
        country_code,
        status,
        is_featured,
        created_at,
        translations(name, description, language)
      `)
      .order("created_at", { ascending: false })

    if (teamType !== "all") {
      query = query.eq("team_type", teamType)
    }
    if (sportType !== "all") {
      query = query.eq("sport_type", sportType)
    }
    if (status !== "all") {
      query = query.eq("status", status)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching teams:", error)
    } else {
      setTeams(data || [])
    }
    setLoading(false)
  }

  const filteredTeams = teams.filter((team) => {
    const translation = team.translations?.find((t) => t.language === "en") || team.translations?.[0]
    const name = translation?.name || team.slug
    return name.toLowerCase().includes(search.toLowerCase())
  })

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team?")) return

    const supabase = createClient()
    const { error } = await supabase.from("teams").delete().eq("id", id)

    if (error) {
      console.error("Error deleting team:", error)
      alert("Failed to delete team")
    } else {
      fetchTeams()
    }
  }

  const getTeamName = (team: Team) => {
    const translation = team.translations?.find((t) => t.language === "en") || team.translations?.[0]
    return translation?.name || team.slug
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

  const getTeamTypeLabel = (type: string) => {
    return type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Teams" />

      <div className="p-6">
        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search teams..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={teamType} onValueChange={setTeamType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Team Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="national">National</SelectItem>
                <SelectItem value="club">Club</SelectItem>
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
            <Link href="/admin/teams/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Team
            </Link>
          </Button>
        </div>

        {/* Teams Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Sport</TableHead>
                <TableHead>Country</TableHead>
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
              ) : filteredTeams.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <Users className="mx-auto h-12 w-12 text-slate-300" />
                    <p className="mt-2 text-slate-500">No teams found</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredTeams.map((team) => (
                  <TableRow key={team.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-slate-900">
                          {getTeamName(team)}
                        </p>
                        <p className="text-sm text-slate-500">{team.slug}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {getTeamTypeLabel(team.team_type)}
                      </Badge>
                    </TableCell>
                    <TableCell className="capitalize">{team.sport_type}</TableCell>
                    <TableCell>
                      <span className="text-lg">{team.country_code}</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(team.status)}>
                        {team.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {team.is_featured && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          Featured
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/${team.slug}`} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/teams/${team.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(team.id)}
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
