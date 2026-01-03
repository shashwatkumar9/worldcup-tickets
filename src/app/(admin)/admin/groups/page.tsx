"use client"

import { useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Search, Edit, Eye, Grid3X3 } from "lucide-react"

// World Cup 2026 Groups data
const groupsData = [
  {
    id: "group-a",
    name: "Group A",
    slug: "group-a-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Mexico", "South Africa", "South Korea", "TBD"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-b",
    name: "Group B",
    slug: "group-b-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Canada", "Switzerland", "Qatar", "TBD"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-c",
    name: "Group C",
    slug: "group-c-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Brazil", "Morocco", "Haiti", "Scotland"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-d",
    name: "Group D",
    slug: "group-d-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["USA", "Paraguay", "Australia", "TBD"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-e",
    name: "Group E",
    slug: "group-e-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Germany", "Ecuador", "Ivory Coast", "Curacao"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-f",
    name: "Group F",
    slug: "group-f-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Netherlands", "Japan", "Tunisia", "TBD"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-g",
    name: "Group G",
    slug: "group-g-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Belgium", "Egypt", "Iran", "New Zealand"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-h",
    name: "Group H",
    slug: "group-h-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-i",
    name: "Group I",
    slug: "group-i-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["France", "Senegal", "Norway", "TBD"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-j",
    name: "Group J",
    slug: "group-j-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Argentina", "Algeria", "Austria", "Jordan"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-k",
    name: "Group K",
    slug: "group-k-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["Portugal", "Uzbekistan", "Colombia", "TBD"],
    status: "published",
    fixtures: 6,
  },
  {
    id: "group-l",
    name: "Group L",
    slug: "group-l-world-cup-2026-tickets",
    competition: "FIFA World Cup 2026",
    teams: ["England", "Croatia", "Ghana", "Panama"],
    status: "published",
    fixtures: 6,
  },
]

export default function GroupsPage() {
  const [search, setSearch] = useState("")

  const filteredGroups = groupsData.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase()) ||
    group.teams.some(team => team.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="flex-1">
      <AdminHeader title="Groups" />

      <div className="p-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Grid3X3 className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-slate-500">Total Groups</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-green-50 p-2">
                  <Grid3X3 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">48</p>
                  <p className="text-sm text-slate-500">Teams</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-50 p-2">
                  <Grid3X3 className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">72</p>
                  <p className="text-sm text-slate-500">Group Fixtures</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-orange-50 p-2">
                  <Grid3X3 className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-slate-500">Published</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search groups or teams..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button asChild>
            <Link href="/admin/groups/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Group
            </Link>
          </Button>
        </div>

        {/* Groups Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Group</TableHead>
                <TableHead>Competition</TableHead>
                <TableHead>Teams</TableHead>
                <TableHead>Fixtures</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGroups.map((group) => (
                <TableRow key={group.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-slate-900">{group.name}</p>
                      <p className="text-sm text-slate-500">{group.slug}</p>
                    </div>
                  </TableCell>
                  <TableCell>{group.competition}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {group.teams.map((team, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {team}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{group.fixtures}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">
                      {group.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/fixtures/${group.slug}`} target="_blank">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/groups/${group.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
