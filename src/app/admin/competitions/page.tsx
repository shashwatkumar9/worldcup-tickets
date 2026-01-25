"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, MapPin, Users, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Competition {
  id: string
  slug: string
  name: string
  sport_type: string
  competition_type: string
  start_date: string
  end_date: string
  host_countries: string
  season: string
  status: string
  is_featured: boolean
}

export default function CompetitionsPage() {
  const router = useRouter()
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCompetitions()
  }, [])

  const fetchCompetitions = async () => {
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "competitions",
          action: "select",
        }),
      })
      const data = await response.json()
      if (data.data) {
        setCompetitions(data.data)
      }
    } catch (error) {
      console.error("Error fetching competitions:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading competitions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Competitions</h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage all tournaments and competitions
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Competition
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-500 p-3">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{competitions.length}</p>
                <p className="text-sm text-slate-500">Total Competitions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-500 p-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {competitions.filter((c) => c.status === "published").length}
                </p>
                <p className="text-sm text-slate-500">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">46</p>
                <p className="text-sm text-slate-500">Total Teams</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitions Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {competitions.map((competition) => (
          <Card
            key={competition.id}
            className="cursor-pointer transition-all hover:shadow-lg"
            onClick={() => router.push(`/admin/competitions/${competition.slug}`)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <Trophy className="h-8 w-8 text-blue-600" />
                {competition.is_featured && (
                  <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                    Featured
                  </span>
                )}
              </div>
              <CardTitle className="mt-4 text-xl">{competition.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(competition.start_date).toLocaleDateString()} -{" "}
                    {new Date(competition.end_date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>{competition.host_countries}</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    {competition.status}
                  </span>
                  <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    {competition.sport_type}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {competitions.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Trophy className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-slate-500">No competitions found</p>
            <Button className="mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Create Competition
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
