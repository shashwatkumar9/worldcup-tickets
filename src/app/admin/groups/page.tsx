"use client"

import { useCompetition } from "@/contexts/competition-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy } from "lucide-react"

const groups = [
  {
    name: "Group A",
    teams: ["Mexico", "South Africa", "Korea Republic", "TBD (UEFA Playoff)"],
  },
  {
    name: "Group B",
    teams: ["USA", "Colombia", "Morocco", "TBD (Intercontinental Playoff)"],
  },
  {
    name: "Group C",
    teams: ["Brazil", "Germany", "Egypt", "Tunisia"],
  },
  {
    name: "Group D",
    teams: ["Argentina", "Portugal", "Senegal", "Australia"],
  },
  {
    name: "Group E",
    teams: ["Spain", "Netherlands", "Nigeria", "Japan"],
  },
  {
    name: "Group F",
    teams: ["England", "Belgium", "Ghana", "Iran"],
  },
  {
    name: "Group G",
    teams: ["France", "Croatia", "Ivory Coast", "Saudi Arabia"],
  },
  {
    name: "Group H",
    teams: ["Italy", "Uruguay", "Cameroon", "Qatar"],
  },
  {
    name: "Group I",
    teams: ["Denmark", "Switzerland", "Algeria", "UAE"],
  },
  {
    name: "Group J",
    teams: ["Poland", "Sweden", "Ecuador", "Costa Rica"],
  },
  {
    name: "Group K",
    teams: ["Canada", "Norway", "Jamaica", "Panama"],
  },
  {
    name: "Group L",
    teams: ["Austria", "Turkey", "Peru", "New Zealand"],
  },
]

export default function GroupsPage() {
  const { selectedCompetition } = useCompetition()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Competition Groups</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage groups{selectedCompetition && ` for ${selectedCompetition.name}`}
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">12</p>
                <p className="text-sm text-slate-500">Total Groups</p>
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
                <p className="text-2xl font-bold text-slate-900">48</p>
                <p className="text-sm text-slate-500">Total Teams</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500 p-3">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4</p>
                <p className="text-sm text-slate-500">Teams per Group</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Groups Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                {group.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {group.teams.map((team, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-900">{team}</span>
                    {team.includes("TBD") && (
                      <span className="ml-auto rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
                        Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
