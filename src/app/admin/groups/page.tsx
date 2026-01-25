"use client"

import { useCompetition } from "@/contexts/competition-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy } from "lucide-react"

// FIFA World Cup 2026 Groups - Based on official draw (Dec 5, 2025)
// 42 teams qualified, 6 TBD via playoffs (4 UEFA, 2 Intercontinental)
const worldCup2026Groups = [
  {
    name: "Group A",
    teams: ["Mexico", "South Africa", "South Korea", "TBD (UEFA Path D)"],
  },
  {
    name: "Group B",
    teams: ["Canada", "TBD (UEFA Path A)", "Qatar", "Switzerland"],
  },
  {
    name: "Group C",
    teams: ["Brazil", "Morocco", "Haiti", "Scotland"],
  },
  {
    name: "Group D",
    teams: ["United States", "Paraguay", "Australia", "TBD (UEFA Path C)"],
  },
  {
    name: "Group E",
    teams: ["Germany", "Curaçao", "Ivory Coast", "Ecuador"],
  },
  {
    name: "Group F",
    teams: ["Netherlands", "Japan", "TBD (UEFA Path B)", "Tunisia"],
  },
  {
    name: "Group G",
    teams: ["Belgium", "Egypt", "Iran", "New Zealand"],
  },
  {
    name: "Group H",
    teams: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
  },
  {
    name: "Group I",
    teams: ["France", "Senegal", "TBD (IC Path 2)", "Norway"],
  },
  {
    name: "Group J",
    teams: ["Argentina", "Algeria", "Austria", "Jordan"],
  },
  {
    name: "Group K",
    teams: ["Portugal", "TBD (IC Path 1)", "Uzbekistan", "Colombia"],
  },
  {
    name: "Group L",
    teams: ["England", "Croatia", "Ghana", "Panama"],
  },
]

// Groups for other competitions (placeholder - will be populated when those competitions are added)
const otherCompetitionGroups = [
  {
    name: "Group A",
    teams: ["TBD", "TBD", "TBD", "TBD"],
  },
  {
    name: "Group B",
    teams: ["TBD", "TBD", "TBD", "TBD"],
  },
]

export default function GroupsPage() {
  const { selectedCompetition } = useCompetition()

  // Determine which groups to display based on selected competition
  const groups = selectedCompetition?.id === 1 ? worldCup2026Groups : otherCompetitionGroups
  const totalGroups = groups.length
  const totalTeams = groups.reduce((sum, group) => sum + group.teams.length, 0)
  const teamsPerGroup = groups[0]?.teams.length || 4
  const qualifiedTeams = groups.reduce(
    (sum, group) => sum + group.teams.filter((team) => !team.includes("TBD")).length,
    0
  )
  const pendingTeams = totalTeams - qualifiedTeams

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Competition Groups</h1>
        <p className="mt-1 text-sm text-slate-500">
          {selectedCompetition ? (
            <>
              Viewing groups for <span className="font-semibold">{selectedCompetition.name}</span>
            </>
          ) : (
            "Select a competition to view groups"
          )}
        </p>
      </div>

      {!selectedCompetition && (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-slate-500">
              Please select a competition from the dropdown above to view groups.
            </p>
          </CardContent>
        </Card>
      )}

      {selectedCompetition && (
        <>
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500 p-3">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{totalGroups}</p>
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
                    <p className="text-2xl font-bold text-slate-900">{totalTeams}</p>
                    <p className="text-sm text-slate-500">Total Teams</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500 p-3">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{qualifiedTeams}</p>
                    <p className="text-sm text-slate-500">Qualified Teams</p>
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
                    <p className="text-2xl font-bold text-slate-900">{pendingTeams}</p>
                    <p className="text-sm text-slate-500">Pending Playoffs</p>
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
                            Playoff
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
