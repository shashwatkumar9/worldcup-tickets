"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Trophy,
  Users,
  Calendar,
  MapPin,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Teams",
      value: "46",
      description: "All competitions",
      icon: Users,
      trend: "Active teams",
      trendUp: true,
      color: "bg-blue-500",
    },
    {
      title: "Competitions",
      value: "1",
      description: "FIFA World Cup 2026",
      icon: Trophy,
      trend: "Active tournaments",
      trendUp: true,
      color: "bg-purple-500",
    },
    {
      title: "Venues",
      value: "16",
      description: "Stadiums configured",
      icon: MapPin,
      trend: "All venues ready",
      trendUp: true,
      color: "bg-green-500",
    },
    {
      title: "Articles",
      value: "8",
      description: "Published content",
      icon: FileText,
      trend: "38 pending",
      trendUp: false,
      color: "bg-orange-500",
    },
  ]

  const recentActivity = [
    {
      action: "Database initialized with all teams",
      time: "Today",
      status: "success",
    },
    {
      action: "104 fixtures imported",
      time: "Today",
      status: "success",
    },
    {
      action: "Admin panel rebuilt with TipTap editor",
      time: "Just now",
      status: "success",
    },
  ]

  const tasks = [
    {
      title: "Complete team articles",
      priority: "High",
      status: "pending",
      count: "38 remaining",
    },
    {
      title: "Add dynamic team page templates",
      priority: "High",
      status: "pending",
      count: "Required",
    },
    {
      title: "Configure affiliate links",
      priority: "Medium",
      status: "pending",
      count: "Pending setup",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Overview of your sports content management system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {stat.description}
                    </p>
                  </div>
                  <div className={`rounded-lg p-3 ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs">
                  <TrendingUp
                    className={`h-3 w-3 ${
                      stat.trendUp ? "text-green-600" : "text-orange-600"
                    }`}
                  />
                  <span
                    className={
                      stat.trendUp ? "text-green-600" : "text-orange-600"
                    }
                  >
                    {stat.trend}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">
                      {activity.action}
                    </p>
                    <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 p-3"
                >
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">
                      {task.title}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          task.priority === "High"
                            ? "bg-red-50 text-red-700"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {task.priority}
                      </span>
                      <span className="text-xs text-slate-500">{task.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-all hover:border-blue-300 hover:bg-blue-50">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium text-slate-900">Manage Teams</div>
                <div className="text-xs text-slate-500">View all 46 teams</div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-all hover:border-purple-300 hover:bg-purple-50">
              <Trophy className="h-5 w-5 text-purple-600" />
              <div>
                <div className="font-medium text-slate-900">Competitions</div>
                <div className="text-xs text-slate-500">Manage tournaments</div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-all hover:border-green-300 hover:bg-green-50">
              <Calendar className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium text-slate-900">Fixtures</div>
                <div className="text-xs text-slate-500">104 matches</div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-all hover:border-orange-300 hover:bg-orange-50">
              <FileText className="h-5 w-5 text-orange-600" />
              <div>
                <div className="font-medium text-slate-900">Content</div>
                <div className="text-xs text-slate-500">Articles & guides</div>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
