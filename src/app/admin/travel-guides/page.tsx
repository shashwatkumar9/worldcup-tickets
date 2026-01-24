"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Plane, MapPin, Star } from "lucide-react"

const travelGuides = [
  { city: "New York/New Jersey", venue: "MetLife Stadium", status: "published", rating: 4.8 },
  { city: "Los Angeles", venue: "SoFi Stadium", status: "published", rating: 4.9 },
  { city: "Dallas", venue: "AT&T Stadium", status: "published", rating: 4.7 },
  { city: "Kansas City", venue: "Arrowhead Stadium", status: "published", rating: 4.6 },
  { city: "Atlanta", venue: "Mercedes-Benz Stadium", status: "published", rating: 4.8 },
  { city: "Houston", venue: "NRG Stadium", status: "published", rating: 4.5 },
  { city: "Philadelphia", venue: "Lincoln Financial Field", status: "published", rating: 4.7 },
  { city: "Miami", venue: "Hard Rock Stadium", status: "published", rating: 4.9 },
  { city: "Boston", venue: "Gillette Stadium", status: "published", rating: 4.6 },
  { city: "Seattle", venue: "Lumen Field", status: "published", rating: 4.8 },
  { city: "San Francisco", venue: "Levi's Stadium", status: "published", rating: 4.7 },
  { city: "Mexico City", venue: "Estadio Azteca", status: "published", rating: 4.9 },
  { city: "Guadalajara", venue: "Estadio Akron", status: "published", rating: 4.6 },
  { city: "Monterrey", venue: "Estadio BBVA", status: "published", rating: 4.7 },
  { city: "Toronto", venue: "BMO Field", status: "published", rating: 4.5 },
  { city: "Vancouver", venue: "BC Place", status: "published", rating: 4.6 },
]

export default function TravelGuidesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Travel Guides</h1>
        <p className="mt-1 text-sm text-slate-500">
          City guides for all 16 World Cup host cities
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{travelGuides.length}</p>
                <p className="text-sm text-slate-500">Total Guides</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-500 p-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {travelGuides.filter((g) => g.status === "published").length}
                </p>
                <p className="text-sm text-slate-500">Published</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500 p-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.7</p>
                <p className="text-sm text-slate-500">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Travel Guides Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {travelGuides.map((guide) => (
          <Card key={guide.city} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{guide.city}</h3>
                  <div className="mt-2 space-y-1 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{guide.venue}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{guide.rating}/5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  {guide.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
