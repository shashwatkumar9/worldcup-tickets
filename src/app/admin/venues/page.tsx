"use client"

import { useEffect, useState } from "react"
import { useCompetition } from "@/contexts/competition-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Building, Search, Edit, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Venue {
  id: string
  slug: string
  name: string
  city: string
  state: string
  country: string
  country_code: string
  capacity: number
  venue_type: string
  status: string
  is_world_cup_venue: boolean
}

export default function VenuesPage() {
  const { selectedCompetition } = useCompetition()
  const [venues, setVenues] = useState<Venue[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingVenue, setEditingVenue] = useState<Venue | null>(null)

  useEffect(() => {
    if (selectedCompetition) {
      fetchVenues()
    }
  }, [selectedCompetition])

  const fetchVenues = async () => {
    if (!selectedCompetition) return

    setLoading(true)
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "venues",
          action: "select",
          filters: { competition_id: selectedCompetition.id },
        }),
      })
      const data = await response.json()
      // Always set venues, even if empty
      setVenues(data.data || [])
    } catch (error) {
      console.error("Error fetching venues:", error)
      setVenues([])
    } finally {
      setLoading(false)
    }
  }

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    venue.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    venue.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalCapacity = venues.reduce((sum, venue) => sum + venue.capacity, 0)
  const worldCupVenues = venues.filter((v) => v.is_world_cup_venue).length

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading venues...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Venues & Stadiums</h1>
          <p className="mt-1 text-sm text-slate-500">
            {venues.length} {venues.length === 1 ? 'venue' : 'venues'}{selectedCompetition && ` for ${selectedCompetition.name}`}
          </p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Venue
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-500 p-3">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{venues.length}</p>
                <p className="text-sm text-slate-500">Total Venues</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{worldCupVenues}</p>
                <p className="text-sm text-slate-500">Featured Venues</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500 p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {(totalCapacity / 1000).toFixed(0)}K
                </p>
                <p className="text-sm text-slate-500">Total Capacity</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Venues Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVenues.map((venue) => (
          <Card key={venue.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{venue.name}</h3>
                  <div className="mt-2 space-y-1 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {venue.city}, {venue.state}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{venue.country}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{venue.capacity.toLocaleString()} capacity</span>
                    </div>
                  </div>
                </div>
                {venue.is_world_cup_venue && (
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    Featured
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  {venue.status}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditingVenue(venue)}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVenues.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-slate-500">No venues found matching your criteria</p>
          </CardContent>
        </Card>
      )}

      {showCreateModal && (
        <CreateVenueModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={fetchVenues}
        />
      )}

      {editingVenue && (
        <EditVenueModal
          venue={editingVenue}
          onClose={() => setEditingVenue(null)}
          onSuccess={fetchVenues}
        />
      )}
    </div>
  )
}

function CreateVenueModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const { selectedCompetition } = useCompetition()
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    country: "",
    country_code: "",
    capacity: 50000,
    venue_type: "stadium",
    is_world_cup_venue: 0,
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const newVenue = {
        id: `venue-${Date.now()}`,
        slug: formData.name.toLowerCase().replace(/\s+/g, "-") + "-world-cup-2026-tickets",
        ...formData,
        competition_id: selectedCompetition?.id,
        status: "published",
      }

      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "venues",
          action: "insert",
          values: newVenue,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error creating venue:", error)
      alert("Failed to create venue")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Add New Venue</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Venue Name</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., MetLife Stadium"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">City</label>
                <Input
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g., East Rutherford"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">State/Province</label>
                <Input
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="e.g., New Jersey"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Country</label>
                <Input
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g., United States"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Country Code</label>
                <Input
                  required
                  value={formData.country_code}
                  onChange={(e) => setFormData({ ...formData, country_code: e.target.value })}
                  placeholder="e.g., US"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Capacity</label>
                <Input
                  type="number"
                  required
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Venue Type</label>
                <select
                  value={formData.venue_type}
                  onChange={(e) => setFormData({ ...formData, venue_type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="stadium">Stadium</option>
                  <option value="arena">Arena</option>
                  <option value="field">Field</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_world_cup_venue === 1}
                  onChange={(e) => setFormData({ ...formData, is_world_cup_venue: e.target.checked ? 1 : 0 })}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Featured Venue</span>
              </label>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Adding..." : "Add Venue"}
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

function EditVenueModal({ venue, onClose, onSuccess }: { venue: Venue; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: venue.name,
    city: venue.city,
    state: venue.state,
    country: venue.country,
    country_code: venue.country_code,
    capacity: venue.capacity,
    venue_type: venue.venue_type,
    is_world_cup_venue: venue.is_world_cup_venue ? 1 : 0,
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
          table: "venues",
          action: "update",
          where: { id: venue.id },
          values: formData,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error updating venue:", error)
      alert("Failed to update venue")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Edit Venue: {venue.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Venue Name</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., MetLife Stadium"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">City</label>
                <Input
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g., East Rutherford"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">State/Province</label>
                <Input
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="e.g., New Jersey"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Country</label>
                <Input
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g., United States"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Country Code</label>
                <Input
                  required
                  value={formData.country_code}
                  onChange={(e) => setFormData({ ...formData, country_code: e.target.value })}
                  placeholder="e.g., US"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Capacity</label>
                <Input
                  type="number"
                  required
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Venue Type</label>
                <select
                  value={formData.venue_type}
                  onChange={(e) => setFormData({ ...formData, venue_type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="stadium">Stadium</option>
                  <option value="arena">Arena</option>
                  <option value="field">Field</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_world_cup_venue === 1}
                  onChange={(e) => setFormData({ ...formData, is_world_cup_venue: e.target.checked ? 1 : 0 })}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Featured Venue</span>
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
