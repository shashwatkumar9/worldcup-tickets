"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useCompetition } from "@/contexts/competition-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, CheckCircle2, Clock, Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Team {
  id: string
  name: string
  short_name: string
  country_code: string
  confederation: string
  fifa_ranking: number
  world_cup_titles: number
  slug: string
  is_featured: boolean
}

export default function TeamsPage() {
  const router = useRouter()
  const { selectedCompetition } = useCompetition()
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedConfederation, setSelectedConfederation] = useState<string>("all")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingTeam, setEditingTeam] = useState<Team | null>(null)

  useEffect(() => {
    if (selectedCompetition) {
      fetchTeams()
    }
  }, [selectedCompetition])

  const fetchTeams = async () => {
    if (!selectedCompetition) return

    setLoading(true)
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "teams",
          action: "select",
          filters: { competition_id: selectedCompetition.id },
        }),
      })
      const data = await response.json()
      // Always set teams, even if empty
      setTeams(data.data || [])
    } catch (error) {
      console.error("Error fetching teams:", error)
      setTeams([])
    } finally {
      setLoading(false)
    }
  }

  const completedArticles = [
    "usa-world-cup-2026-tickets",
    "mexico-world-cup-2026-tickets",
    "canada-world-cup-2026-tickets",
    "brazil-world-cup-2026-tickets",
    "argentina-world-cup-2026-tickets",
    "france-world-cup-2026-tickets",
    "spain-world-cup-2026-tickets",
    "panama-world-cup-2026-tickets",
  ]

  const hasArticle = (slug: string) => completedArticles.includes(slug)

  const confederations = ["all", "CONCACAF", "UEFA", "CONMEBOL", "AFC", "CAF", "OFC"]

  const filteredTeams = teams.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.short_name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesConfederation =
      selectedConfederation === "all" || team.confederation === selectedConfederation
    return matchesSearch && matchesConfederation
  })

  const stats = {
    total: teams.length,
    withArticles: teams.filter((t) => hasArticle(t.slug)).length,
    pending: teams.filter((t) => !hasArticle(t.slug)).length,
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading teams...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Teams Management</h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage all {teams.length} teams{selectedCompetition && ` for ${selectedCompetition.name}`}
          </p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Team
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
                <p className="text-sm text-slate-500">Total Teams</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-500 p-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{stats.withArticles}</p>
                <p className="text-sm text-slate-500">Articles Complete</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500 p-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{stats.pending}</p>
                <p className="text-sm text-slate-500">Pending Articles</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedConfederation}
              onChange={(e) => setSelectedConfederation(e.target.value)}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {confederations.map((conf) => (
                <option key={conf} value={conf}>
                  {conf === "all" ? "All Confederations" : conf}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Teams Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTeams.map((team) => {
          const hasContent = hasArticle(team.slug)
          return (
            <Card
              key={team.id}
              className="transition-all hover:shadow-lg"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1 cursor-pointer" onClick={() => router.push(`/admin/teams/${team.id}`)}>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{team.name}</h3>
                      {team.is_featured && (
                        <span className="rounded bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-700">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-500">
                      {team.short_name} • {team.confederation}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                      <span>FIFA Rank: #{team.fifa_ranking}</span>
                      <span>•</span>
                      <span>{team.world_cup_titles} Titles</span>
                    </div>
                  </div>
                  <div>
                    {hasContent ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                        <FileText className="h-5 w-5 text-orange-600" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      hasContent
                        ? "bg-green-50 text-green-700"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {hasContent ? "Article Complete" : "Pending Article"}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setEditingTeam(team)
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredTeams.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-slate-500">No teams found matching your criteria</p>
          </CardContent>
        </Card>
      )}

      {showCreateModal && (
        <CreateTeamModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={fetchTeams}
        />
      )}

      {editingTeam && (
        <EditTeamModal
          team={editingTeam}
          onClose={() => setEditingTeam(null)}
          onSuccess={fetchTeams}
        />
      )}
    </div>
  )
}

function EditTeamModal({ team, onClose, onSuccess }: { team: Team; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: team.name,
    short_name: team.short_name,
    country_code: team.country_code,
    confederation: team.confederation,
    fifa_ranking: team.fifa_ranking,
    world_cup_titles: team.world_cup_titles,
    is_featured: team.is_featured,
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "teams",
          action: "update",
          where: { id: team.id },
          values: formData,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error updating team:", error)
      alert("Failed to update team")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Edit Team: {team.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Team Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Spain"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Short Name</label>
                <Input
                  required
                  value={formData.short_name}
                  onChange={(e) => setFormData({ ...formData, short_name: e.target.value })}
                  placeholder="e.g., ESP"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Country Code</label>
                <Input
                  required
                  value={formData.country_code}
                  onChange={(e) => setFormData({ ...formData, country_code: e.target.value })}
                  placeholder="e.g., ES"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Confederation</label>
                <select
                  value={formData.confederation}
                  onChange={(e) => setFormData({ ...formData, confederation: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="UEFA">UEFA</option>
                  <option value="CONMEBOL">CONMEBOL</option>
                  <option value="CONCACAF">CONCACAF</option>
                  <option value="AFC">AFC</option>
                  <option value="CAF">CAF</option>
                  <option value="OFC">OFC</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">FIFA Ranking</label>
                <Input
                  type="number"
                  required
                  value={formData.fifa_ranking}
                  onChange={(e) => setFormData({ ...formData, fifa_ranking: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">World Cup Titles</label>
                <Input
                  type="number"
                  required
                  value={formData.world_cup_titles}
                  onChange={(e) => setFormData({ ...formData, world_cup_titles: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Featured Team</span>
              </label>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function CreateTeamModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const { selectedCompetition } = useCompetition()
  const [formData, setFormData] = useState({
    name: "",
    short_name: "",
    country_code: "",
    confederation: "UEFA",
    fifa_ranking: 1,
    world_cup_titles: 0,
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const newTeam = {
        id: `team-${Date.now()}`,
        slug: formData.name.toLowerCase().replace(/\s+/g, "-") + "-tickets",
        ...formData,
        competition_id: selectedCompetition?.id,
        status: "published",
        is_featured: 0,
      }

      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "teams",
          action: "insert",
          values: newTeam,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error creating team:", error)
      alert("Failed to create team")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Add New Team</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Team Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Spain"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Short Name</label>
                <Input
                  required
                  value={formData.short_name}
                  onChange={(e) => setFormData({ ...formData, short_name: e.target.value })}
                  placeholder="e.g., ESP"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Country Code</label>
                <Input
                  required
                  value={formData.country_code}
                  onChange={(e) => setFormData({ ...formData, country_code: e.target.value })}
                  placeholder="e.g., ES"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Confederation</label>
                <select
                  value={formData.confederation}
                  onChange={(e) => setFormData({ ...formData, confederation: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="UEFA">UEFA</option>
                  <option value="CONMEBOL">CONMEBOL</option>
                  <option value="CONCACAF">CONCACAF</option>
                  <option value="AFC">AFC</option>
                  <option value="CAF">CAF</option>
                  <option value="OFC">OFC</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">FIFA Ranking</label>
                <Input
                  type="number"
                  required
                  value={formData.fifa_ranking}
                  onChange={(e) => setFormData({ ...formData, fifa_ranking: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">World Cup Titles</label>
                <Input
                  type="number"
                  required
                  value={formData.world_cup_titles}
                  onChange={(e) => setFormData({ ...formData, world_cup_titles: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Adding..." : "Add Team"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
