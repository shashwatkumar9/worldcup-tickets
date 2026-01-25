"use client"

import { useCompetition } from "@/contexts/competition-context"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Plus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CompetitionSelector() {
  const { selectedCompetition, setSelectedCompetition, competitions } = useCompetition()
  const [showDropdown, setShowDropdown] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)

  const handleSelectCompetition = (competition: any) => {
    setSelectedCompetition(competition)
    setShowDropdown(false)
  }

  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-xs text-slate-500">Managing Competition</p>
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-blue-600"
                    suppressHydrationWarning
                  >
                    {selectedCompetition?.name || "Select Competition"}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {showDropdown && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-80 rounded-lg border border-slate-200 bg-white shadow-lg">
                      <div className="max-h-96 overflow-y-auto p-2">
                        {competitions.map((competition) => (
                          <button
                            key={competition.id}
                            onClick={() => handleSelectCompetition(competition)}
                            className={`flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors ${
                              selectedCompetition?.id === competition.id
                                ? "bg-blue-50 text-blue-900"
                                : "hover:bg-slate-50"
                            }`}
                            suppressHydrationWarning
                          >
                            <Trophy
                              className={`mt-0.5 h-5 w-5 shrink-0 ${
                                selectedCompetition?.id === competition.id
                                  ? "text-blue-600"
                                  : "text-slate-400"
                              }`}
                            />
                            <div className="flex-1">
                              <p className="font-medium">{competition.name}</p>
                              <p className="text-xs text-slate-500">
                                {competition.sport_type} • {competition.season}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="border-t border-slate-200 p-2">
                        <Button
                          className="w-full"
                          variant="outline"
                          onClick={() => {
                            setShowDropdown(false)
                            setShowCreateModal(true)
                          }}
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Create New Competition
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {selectedCompetition && (
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div>
                  <span className="text-xs text-slate-500">Sport: </span>
                  <span className="font-medium">{selectedCompetition.sport_type}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500">Season: </span>
                  <span className="font-medium">{selectedCompetition.season}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500">Status: </span>
                  <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                    {selectedCompetition.status}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Competition Modal */}
      {showCreateModal && (
        <CreateCompetitionModal onClose={() => setShowCreateModal(false)} />
      )}
    </>
  )
}

function CreateCompetitionModal({ onClose }: { onClose: () => void }) {
  const { setCompetitions, setSelectedCompetition } = useCompetition()
  const [formData, setFormData] = useState({
    name: "",
    sport_type: "football",
    competition_type: "tournament",
    start_date: "",
    end_date: "",
    host_countries: "",
    season: new Date().getFullYear().toString(),
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const newCompetition = {
        id: `comp-${Date.now()}`,
        slug: formData.name.toLowerCase().replace(/\s+/g, "-"),
        ...formData,
        status: "published",
        is_featured: 1,
      }

      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "competitions",
          action: "insert",
          values: newCompetition,
        }),
      })

      const data = await response.json()
      if (data.data) {
        // Refresh competitions
        const refreshResponse = await fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            table: "competitions",
            action: "select",
            orderBy: { column: "created_at", ascending: false },
          }),
        })
        const refreshData = await refreshResponse.json()
        if (refreshData.data) {
          setCompetitions(refreshData.data)
          // Find the newly created competition in the refreshed data
          const createdCompetition = refreshData.data.find((c: any) => c.id === newCompetition.id)
          if (createdCompetition) {
            setSelectedCompetition(createdCompetition)
          }
        }
        onClose()
      }
    } catch (error) {
      console.error("Error creating competition:", error)
      alert("Failed to create competition")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-slate-900">Create New Competition</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Competition Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="e.g., UEFA Champions League 2025"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Sport Type</label>
                <select
                  value={formData.sport_type}
                  onChange={(e) => setFormData({ ...formData, sport_type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  <option value="tennis">Tennis</option>
                  <option value="cricket">Cricket</option>
                  <option value="rugby">Rugby</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Competition Type</label>
                <select
                  value={formData.competition_type}
                  onChange={(e) => setFormData({ ...formData, competition_type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="tournament">Tournament</option>
                  <option value="league">League</option>
                  <option value="world_cup">World Cup</option>
                  <option value="championship">Championship</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Start Date</label>
                <input
                  type="date"
                  required
                  value={formData.start_date}
                  onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">End Date</label>
                <input
                  type="date"
                  required
                  value={formData.end_date}
                  onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Host Countries</label>
              <input
                type="text"
                required
                value={formData.host_countries}
                onChange={(e) => setFormData({ ...formData, host_countries: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="e.g., Spain, Portugal"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Season</label>
              <input
                type="text"
                required
                value={formData.season}
                onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="e.g., 2025"
              />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Creating..." : "Create Competition"}
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
