"use client"

import { useEffect, useState } from "react"
import { useCompetition } from "@/contexts/competition-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Filter, Edit, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Fixture {
  id: string
  slug: string
  home_team_id: string
  away_team_id: string
  venue_id: string
  fixture_type: string
  match_date: string
  match_time: string
  group_name: string
  round: string
  status: string
}

interface Team {
  id: string
  name: string
  short_name: string
}

interface Venue {
  id: string
  name: string
  city: string
}

export default function FixturesPage() {
  const { selectedCompetition } = useCompetition()
  const [fixtures, setFixtures] = useState<Fixture[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [venues, setVenues] = useState<Venue[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingFixture, setEditingFixture] = useState<Fixture | null>(null)

  useEffect(() => {
    if (selectedCompetition) {
      fetchData()
    }
  }, [selectedCompetition])

  const fetchData = async () => {
    if (!selectedCompetition) return

    setLoading(true)
    try {
      const [fixturesRes, teamsRes, venuesRes] = await Promise.all([
        fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            table: "fixtures",
            action: "select",
            filters: { competition_id: selectedCompetition.id }
          }),
        }),
        fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            table: "teams",
            action: "select",
            filters: { competition_id: selectedCompetition.id }
          }),
        }),
        fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            table: "venues",
            action: "select",
            filters: { competition_id: selectedCompetition.id }
          }),
        }),
      ])

      const [fixturesData, teamsData, venuesData] = await Promise.all([
        fixturesRes.json(),
        teamsRes.json(),
        venuesRes.json(),
      ])

      // Always set data, even if empty
      setFixtures(fixturesData.data || [])
      setTeams(teamsData.data || [])
      setVenues(venuesData.data || [])
    } catch (error) {
      console.error("Error fetching data:", error)
      setFixtures([])
      setTeams([])
      setVenues([])
    } finally {
      setLoading(false)
    }
  }

  const getTeamName = (teamId: string) => {
    const team = teams.find((t) => t.id === teamId)
    return team?.name || "TBD"
  }

  const getVenueName = (venueId: string) => {
    const venue = venues.find((v) => v.id === venueId)
    return venue ? `${venue.name}, ${venue.city}` : "TBD"
  }

  const filteredFixtures = fixtures.filter((fixture) => {
    const matchesSearch =
      getTeamName(fixture.home_team_id).toLowerCase().includes(searchQuery.toLowerCase()) ||
      getTeamName(fixture.away_team_id).toLowerCase().includes(searchQuery.toLowerCase()) ||
      getVenueName(fixture.venue_id).toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType =
      filterType === "all" || fixture.fixture_type === filterType

    return matchesSearch && matchesType
  })

  const groupStageFixtures = filteredFixtures.filter((f) => f.fixture_type === "group_stage")
  const knockoutFixtures = filteredFixtures.filter((f) => f.fixture_type === "knockout")

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading fixtures...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Fixtures & Matches</h1>
          <p className="mt-1 text-sm text-slate-500">
            {fixtures.length} {fixtures.length === 1 ? 'match' : 'matches'}{selectedCompetition && ` for ${selectedCompetition.name}`}
          </p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Fixture
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{fixtures.length}</p>
                <p className="text-sm text-slate-500">Total Matches</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-500 p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{groupStageFixtures.length}</p>
                <p className="text-sm text-slate-500">Group Stage</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500 p-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{knockoutFixtures.length}</p>
                <p className="text-sm text-slate-500">Knockout</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-500 p-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">16</p>
                <p className="text-sm text-slate-500">Venues</p>
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
              <Input
                placeholder="Search fixtures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Fixtures</option>
              <option value="group_stage">Group Stage</option>
              <option value="knockout">Knockout</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Fixtures List */}
      <div className="space-y-4">
        {filteredFixtures.map((fixture) => (
          <Card key={fixture.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        fixture.fixture_type === "group_stage"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {fixture.fixture_type === "group_stage"
                        ? `Group ${fixture.group_name}`
                        : fixture.round}
                    </span>
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">
                    {getTeamName(fixture.home_team_id)} vs {getTeamName(fixture.away_team_id)}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(fixture.match_date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{getVenueName(fixture.venue_id)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {fixture.status}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingFixture(fixture)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFixtures.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-slate-500">No fixtures found matching your criteria</p>
          </CardContent>
        </Card>
      )}

      {showCreateModal && (
        <CreateFixtureModal
          teams={teams}
          venues={venues}
          onClose={() => setShowCreateModal(false)}
          onSuccess={fetchData}
        />
      )}

      {editingFixture && (
        <EditFixtureModal
          fixture={editingFixture}
          teams={teams}
          venues={venues}
          onClose={() => setEditingFixture(null)}
          onSuccess={fetchData}
        />
      )}
    </div>
  )
}

function CreateFixtureModal({ teams, venues, onClose, onSuccess }: { teams: Team[]; venues: Venue[]; onClose: () => void; onSuccess: () => void }) {
  const { selectedCompetition } = useCompetition()
  const [formData, setFormData] = useState({
    home_team_id: "",
    away_team_id: "",
    venue_id: "",
    fixture_type: "group_stage",
    match_date: "",
    match_time: "",
    group_name: "A",
    round: "",
    status: "scheduled",
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const homeTeam = teams.find(t => t.id === formData.home_team_id)
      const awayTeam = teams.find(t => t.id === formData.away_team_id)

      const newFixture = {
        id: `fixture-${Date.now()}`,
        slug: `${homeTeam?.short_name?.toLowerCase()}-vs-${awayTeam?.short_name?.toLowerCase()}-world-cup-2026-tickets`,
        competition_id: selectedCompetition?.id,
        ...formData,
      }

      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "fixtures",
          action: "insert",
          values: newFixture,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error creating fixture:", error)
      alert("Failed to create fixture")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Add New Fixture</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Home Team</label>
                <select
                  required
                  value={formData.home_team_id}
                  onChange={(e) => setFormData({ ...formData, home_team_id: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="">Select home team</option>
                  {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Away Team</label>
                <select
                  required
                  value={formData.away_team_id}
                  onChange={(e) => setFormData({ ...formData, away_team_id: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="">Select away team</option>
                  {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Venue</label>
              <select
                required
                value={formData.venue_id}
                onChange={(e) => setFormData({ ...formData, venue_id: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                <option value="">Select venue</option>
                {venues.map((venue) => (
                  <option key={venue.id} value={venue.id}>
                    {venue.name} - {venue.city}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Fixture Type</label>
                <select
                  value={formData.fixture_type}
                  onChange={(e) => setFormData({ ...formData, fixture_type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="group_stage">Group Stage</option>
                  <option value="knockout">Knockout</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="live">Live</option>
                  <option value="completed">Completed</option>
                  <option value="postponed">Postponed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {formData.fixture_type === "group_stage" && (
              <div>
                <label className="text-sm font-medium text-slate-700">Group</label>
                <select
                  value={formData.group_name}
                  onChange={(e) => setFormData({ ...formData, group_name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((group) => (
                    <option key={group} value={group}>
                      Group {group}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.fixture_type === "knockout" && (
              <div>
                <label className="text-sm font-medium text-slate-700">Round</label>
                <Input
                  value={formData.round}
                  onChange={(e) => setFormData({ ...formData, round: e.target.value })}
                  placeholder="e.g., Round of 16, Quarter-Final, Semi-Final, Final"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Match Date</label>
                <Input
                  type="date"
                  required
                  value={formData.match_date}
                  onChange={(e) => setFormData({ ...formData, match_date: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Match Time</label>
                <Input
                  type="time"
                  required
                  value={formData.match_time}
                  onChange={(e) => setFormData({ ...formData, match_time: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Adding..." : "Add Fixture"}
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

function EditFixtureModal({ fixture, teams, venues, onClose, onSuccess }: { fixture: Fixture; teams: Team[]; venues: Venue[]; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    home_team_id: fixture.home_team_id,
    away_team_id: fixture.away_team_id,
    venue_id: fixture.venue_id,
    fixture_type: fixture.fixture_type,
    match_date: fixture.match_date,
    match_time: fixture.match_time,
    group_name: fixture.group_name || "A",
    round: fixture.round || "",
    status: fixture.status,
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
          table: "fixtures",
          action: "update",
          where: { id: fixture.id },
          values: formData,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error updating fixture:", error)
      alert("Failed to update fixture")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Edit Fixture</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Home Team</label>
                <select
                  required
                  value={formData.home_team_id}
                  onChange={(e) => setFormData({ ...formData, home_team_id: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="">Select home team</option>
                  {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Away Team</label>
                <select
                  required
                  value={formData.away_team_id}
                  onChange={(e) => setFormData({ ...formData, away_team_id: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="">Select away team</option>
                  {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Venue</label>
              <select
                required
                value={formData.venue_id}
                onChange={(e) => setFormData({ ...formData, venue_id: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                <option value="">Select venue</option>
                {venues.map((venue) => (
                  <option key={venue.id} value={venue.id}>
                    {venue.name} - {venue.city}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Fixture Type</label>
                <select
                  value={formData.fixture_type}
                  onChange={(e) => setFormData({ ...formData, fixture_type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="group_stage">Group Stage</option>
                  <option value="knockout">Knockout</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="live">Live</option>
                  <option value="completed">Completed</option>
                  <option value="postponed">Postponed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {formData.fixture_type === "group_stage" && (
              <div>
                <label className="text-sm font-medium text-slate-700">Group</label>
                <select
                  value={formData.group_name}
                  onChange={(e) => setFormData({ ...formData, group_name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((group) => (
                    <option key={group} value={group}>
                      Group {group}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.fixture_type === "knockout" && (
              <div>
                <label className="text-sm font-medium text-slate-700">Round</label>
                <Input
                  value={formData.round}
                  onChange={(e) => setFormData({ ...formData, round: e.target.value })}
                  placeholder="e.g., Round of 16, Quarter-Final, Semi-Final, Final"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Match Date</label>
                <Input
                  type="date"
                  required
                  value={formData.match_date}
                  onChange={(e) => setFormData({ ...formData, match_date: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Match Time</label>
                <Input
                  type="time"
                  required
                  value={formData.match_time}
                  onChange={(e) => setFormData({ ...formData, match_time: e.target.value })}
                />
              </div>
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
