import { AdminHeader } from "@/components/admin/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Users,
  Calendar,
  MapPin,
  MousePointerClick,
  DollarSign,
  TrendingUp,
  AlertCircle,
} from "lucide-react"

const stats = [
  {
    name: "Competitions",
    value: "156",
    change: "+12 new",
    icon: Trophy,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Teams",
    value: "5,678",
    change: "+45 new",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    name: "Fixtures",
    value: "892",
    change: "+234 new",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    name: "Venues",
    value: "156",
    change: "+8 new",
    icon: MapPin,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const performanceStats = [
  {
    name: "Affiliate Clicks",
    value: "145,678",
    icon: MousePointerClick,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    name: "Est. Revenue",
    value: "$12,456",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    name: "Links Active",
    value: "89.2%",
    icon: TrendingUp,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
]

const hotFixtures = [
  { name: "Brazil vs Argentina", clicks: "12,456", status: "active" },
  { name: "USA vs Mexico", clicks: "8,923", status: "active" },
  { name: "NBA Finals Game 7", clicks: "6,234", status: "active" },
  { name: "India vs Pakistan Cricket", clicks: "5,891", status: "active" },
]

const alerts = [
  { message: "23 fixtures missing affiliate links", type: "warning" },
  { message: "12 entities missing translations (DE, FR)", type: "warning" },
  { message: "5 broken affiliate links detected", type: "error" },
  { message: "Ticketmaster API sync failed 2 hours ago", type: "error" },
]

export default function AdminDashboard() {
  return (
    <div>
      <AdminHeader title="Dashboard" />

      <div className="p-6">
        {/* Overview Stats */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Overview</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.name}>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`rounded-lg p-3 ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.name}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Performance (Last 30 days)</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {performanceStats.map((stat) => (
              <Card key={stat.name}>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`rounded-lg p-3 ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Hot Fixtures */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base font-semibold">Hot Fixtures</CardTitle>
              <a href="/admin/fixtures" className="text-sm text-blue-600 hover:underline">
                Manage
              </a>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hotFixtures.map((fixture, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{fixture.name}</p>
                      <p className="text-sm text-slate-500">{fixture.clicks} clicks</p>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base font-semibold">Attention Required</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 rounded-lg p-3 ${
                      alert.type === "error" ? "bg-red-50" : "bg-yellow-50"
                    }`}
                  >
                    <AlertCircle
                      className={`h-5 w-5 ${
                        alert.type === "error" ? "text-red-500" : "text-yellow-500"
                      }`}
                    />
                    <p
                      className={`text-sm ${
                        alert.type === "error" ? "text-red-700" : "text-yellow-700"
                      }`}
                    >
                      {alert.message}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
