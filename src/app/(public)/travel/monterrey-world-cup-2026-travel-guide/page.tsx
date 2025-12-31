import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Car, Hotel, Utensils, Camera, Mountain, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Monterrey World Cup 2026 Travel Guide | Nuevo Leon Mexico",
  description: "Complete travel guide for FIFA World Cup 2026 in Monterrey. Mountain views, industrial power, Tigres & Rayados, and Estadio BBVA!",
  keywords: ["Monterrey World Cup 2026", "Monterrey World Cup travel", "Estadio BBVA guide", "Nuevo Leon World Cup", "FIFA 2026 Monterrey"]
}

export default function MonterreyTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-800 via-yellow-400 to-blue-800 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-blue-800 text-white mb-4">NUEVO LEON, MEXICO</Badge>
          <h1 className="text-5xl font-bold text-white">Monterrey</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />Mexico</p>
          <p className="mt-4 text-white/90 max-w-2xl">Mexico's industrial powerhouse meets stunning mountain scenery! Monterrey brings world-class football passion from Tigres and Rayados, dramatic landscapes, and northern Mexican culture to World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-blue-400 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Mountain className="h-6 w-6 text-blue-700" />
                  <h3 className="font-bold text-xl text-blue-900">Most Dramatic Stadium Setting</h3>
                </div>
                <p className="text-blue-800">Estadio BBVA offers one of the most spectacular backdrops in world football - the iconic Cerro de la Silla (Saddle Mountain). Home of CF Monterrey (Rayados), this modern 53,500-seat stadium opened in 2015 and is considered one of the best in the Americas.</p>
                <Link href="/venues/estadio-bbva-world-cup-2026-tickets">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-800">View Estadio BBVA</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">General Mariano Escobedo International (MTY) - major northern Mexico hub.</p>
                  <p className="text-slate-600 text-sm">24km northeast of city center.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From MTY Airport</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Uber</strong> - $15-20 to Centro/San Pedro</li>
                    <li>• <strong>Official Taxi</strong> - Fixed rates at airport</li>
                    <li>• <strong>Hotel Shuttles</strong> - Some hotels offer pickup</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Car className="h-6 w-6" />Getting to Estadio BBVA</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">Metrorrey (Metro)</h4>
                    <p className="text-slate-600 text-sm">Take Line 2 toward General Anaya. The stadium is accessible from the metro system, though you may need to combine with bus or rideshare.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Uber/Taxi</h4>
                    <p className="text-slate-600 text-sm">Stadium is in Guadalupe municipality, east of city center. $10-15 from central Monterrey.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">Stadium has good parking facilities. Located off major highways. Traffic can be heavy on match days.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Upscale</Badge>
                  <h4 className="font-bold">San Pedro Garza Garcia</h4>
                  <p className="text-slate-600 text-sm">Wealthiest city in Latin America. Fine dining, shopping, modern hotels.</p>
                  <p className="text-green-600 font-medium mt-2">From $100/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Central</Badge>
                  <h4 className="font-bold">Centro / Barrio Antiguo</h4>
                  <p className="text-slate-600 text-sm">Historic center, Macroplaza, museums. Barrio Antiguo has bars and nightlife.</p>
                  <p className="text-green-600 font-medium mt-2">From $60/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Business</Badge>
                  <h4 className="font-bold">Valle Oriente</h4>
                  <p className="text-slate-600 text-sm">Modern business district with malls, restaurants, corporate hotels.</p>
                  <p className="text-green-600 font-medium mt-2">From $80/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Stadium Area</Badge>
                  <h4 className="font-bold">Guadalupe</h4>
                  <p className="text-slate-600 text-sm">Near Estadio BBVA. More affordable, easier match day logistics.</p>
                  <p className="text-green-600 font-medium mt-2">From $50/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Cerro de la Silla</h4>
                  <p className="text-slate-600 text-sm">Iconic saddle-shaped mountain. Hiking trails, cable car views.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Fundidora Park</h4>
                  <p className="text-slate-600 text-sm">Urban park in old steel foundry. Museums, trails, events.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Macroplaza</h4>
                  <p className="text-slate-600 text-sm">One of world's largest plazas. Government palace, cathedral.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Garcia Caves</h4>
                  <p className="text-slate-600 text-sm">Spectacular caves via cable car. Day trip adventure.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">MARCO Museum</h4>
                  <p className="text-slate-600 text-sm">Contemporary Latin American art in striking building.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Barrio Antiguo</h4>
                  <p className="text-slate-600 text-sm">Historic neighborhood, nightlife, restaurants, bars.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Northern Mexico Cuisine</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• <strong>Cabrito</strong> - Roast baby goat (THE specialty!)</li>
                      <li>• <strong>Carne asada</strong> - Grilled beef, northern style</li>
                      <li>• <strong>Machaca</strong> - Dried shredded beef</li>
                      <li>• <strong>Flour tortillas</strong> - Northern Mexico uses flour!</li>
                      <li>• <strong>Craft beer</strong> - Monterrey brewery scene</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Where to Eat</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• El Gran Pastor (cabrito institution)</li>
                      <li>• El Rey del Cabrito</li>
                      <li>• Pangea (fine dining)</li>
                      <li>• Barrio Antiguo restaurants</li>
                      <li>• San Pedro's restaurant row</li>
                    </ul>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <Card className="border-blue-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl">Match Day Tips</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li>• <strong>Try cabrito</strong> - You can't visit Monterrey without it!</li>
                  <li>• <strong>Enjoy the mountain view</strong> - Cerro de la Silla backdrop is stunning</li>
                  <li>• <strong>Hot climate</strong> - Monterrey can be very hot in summer (95°F+)</li>
                  <li>• <strong>Football-mad city</strong> - Tigres and Rayados rivalry is intense</li>
                  <li>• <strong>Use Uber</strong> - Most convenient transport option</li>
                  <li>• <strong>Visit Fundidora Park</strong> - Great for pre-match walks</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Cabrito plate</span>
                  <span className="font-medium">$15-25</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Carne asada</span>
                  <span className="font-medium">$10-18</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Uber across city</span>
                  <span className="font-medium">$8-15</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Garcia Caves trip</span>
                  <span className="font-medium">$20-30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$60-120</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Hot, 90-100°F</p>
                <p><strong>Currency:</strong> Mexican Peso (MXN)</p>
                <p><strong>Language:</strong> Spanish</p>
                <p><strong>Time Zone:</strong> CST (UTC-6)</p>
                <p><strong>Altitude:</strong> 1,765 ft (538m)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Estadio BBVA</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">Stunning mountain backdrop stadium, home of Rayados. 53,500 capacity.</p>
                <Link href="/venues/estadio-bbva-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other Mexico Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/mexico-city-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Mexico City<Badge className="ml-auto text-xs">Opening</Badge></Link>
                <Link href="/travel/guadalajara-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Guadalajara</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
