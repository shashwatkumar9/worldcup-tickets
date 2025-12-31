import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Music, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Atlanta World Cup 2026 Travel Guide | Georgia",
  description: "Complete travel guide for FIFA World Cup 2026 in Atlanta. Southern hospitality, great food, and Mercedes-Benz Stadium!",
  keywords: ["Atlanta World Cup 2026", "Atlanta World Cup travel", "Mercedes-Benz Stadium guide", "Georgia World Cup", "FIFA 2026 Atlanta"]
}

export default function AtlantaTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-black to-red-700 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-red-600 text-white mb-4">GEORGIA</Badge>
          <h1 className="text-5xl font-bold text-white">Atlanta</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">The capital of the South brings world-class hospitality, incredible food, rich history, and one of the most innovative stadiums ever built to World Cup 2026!</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Music className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">Soccer Capital of the South</h3>
                </div>
                <p className="text-red-800">Atlanta United has the highest average attendance in MLS and one of the best atmospheres in American soccer. Mercedes-Benz Stadium's unique retractable roof and 360-degree halo board create an unforgettable experience. Southern hospitality meets football passion!</p>
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-red-600 hover:bg-red-700">View Mercedes-Benz Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Hartsfield-Jackson Atlanta International (ATL) is the world's busiest airport - excellent connections from everywhere!</p>
                  <p className="text-green-600 text-sm font-medium">Direct flights from 150+ US cities</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From ATL Airport</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>MARTA Rail</strong> - $2.50 direct to downtown (20 min)</li>
                    <li>• <strong>Uber/Lyft</strong> - $25-35 to downtown</li>
                    <li>• <strong>Rental Car</strong> - Available but not essential</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to Mercedes-Benz Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">MARTA Rail (Highly Recommended)</h4>
                    <p className="text-slate-600 text-sm">Take MARTA to Dome/GWCC/Philips Arena/CNN Center station - stadium is right there! Best option for match days.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Walking</h4>
                    <p className="text-slate-600 text-sm">Stadium is in downtown Atlanta. Many hotels within walking distance. Perfect for enjoying pre-match atmosphere.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">Parking available at stadium lots and nearby garages. Expect $40-60 on match days.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Walking Distance</Badge>
                  <h4 className="font-bold">Downtown Atlanta</h4>
                  <p className="text-slate-600 text-sm">Closest to stadium. CNN Center, Centennial Park, Georgia Aquarium all nearby.</p>
                  <p className="text-green-600 font-medium mt-2">From $150/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Upscale</Badge>
                  <h4 className="font-bold">Midtown</h4>
                  <p className="text-slate-600 text-sm">Arts, dining, nightlife. Piedmont Park. Easy MARTA access to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Trendy</Badge>
                  <h4 className="font-bold">Buckhead</h4>
                  <p className="text-slate-600 text-sm">High-end shopping, restaurants, clubs. MARTA connected. More upscale.</p>
                  <p className="text-green-600 font-medium mt-2">From $250/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Historic</Badge>
                  <h4 className="font-bold">Inman Park / Old Fourth Ward</h4>
                  <p className="text-slate-600 text-sm">BeltLine access, Ponce City Market, local vibes. Great restaurants.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Georgia Aquarium</h4>
                  <p className="text-slate-600 text-sm">Largest aquarium in Western Hemisphere. Whale sharks!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">World of Coca-Cola</h4>
                  <p className="text-slate-600 text-sm">Taste 100+ drinks, see the secret formula vault.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Martin Luther King Jr. NHS</h4>
                  <p className="text-slate-600 text-sm">Civil rights history, birth home, Ebenezer Baptist Church.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Atlanta BeltLine</h4>
                  <p className="text-slate-600 text-sm">22-mile trail connecting neighborhoods, art, restaurants.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Ponce City Market</h4>
                  <p className="text-slate-600 text-sm">Food hall, shopping, rooftop amusements in historic Sears building.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">High Museum of Art</h4>
                  <p className="text-slate-600 text-sm">Leading art museum in the Southeast.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Southern Classics</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Fried chicken (Busy Bee Cafe, Mary Mac's)</li>
                      <li>• BBQ (Fox Bros, Sweet Auburn)</li>
                      <li>• Biscuits (Home Grown)</li>
                      <li>• Shrimp & grits (South City Kitchen)</li>
                      <li>• Peach cobbler (everywhere!)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Modern Atlanta</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Ponce City Market food hall</li>
                      <li>• Krog Street Market</li>
                      <li>• Buford Highway international</li>
                      <li>• Craft cocktails on Edgewood</li>
                      <li>• Westside Provisions District</li>
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
                  <li>• <strong>Use MARTA</strong> - By far the easiest way to get to the stadium</li>
                  <li>• <strong>Stay downtown</strong> to walk to matches and enjoy the atmosphere</li>
                  <li>• <strong>Check the roof</strong> - Mercedes-Benz has a unique retractable design</li>
                  <li>• <strong>Try the stadium food</strong> - Some of the most affordable in pro sports!</li>
                  <li>• <strong>Visit Centennial Park</strong> - Fan zone likely to be set up there</li>
                  <li>• <strong>Prepare for humidity</strong> - Atlanta summers are hot and humid</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Southern meal</span>
                  <span className="font-medium">$15-25</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Nice dinner</span>
                  <span className="font-medium">$40-70</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">MARTA fare</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Aquarium ticket</span>
                  <span className="font-medium">$40-50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$120-200</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Hot & humid, 85-95°F</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> EDT (UTC-4)</p>
                <p><strong>Transit:</strong> MARTA rail excellent</p>
                <p><strong>Vibe:</strong> Southern, diverse, welcoming</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Mercedes-Benz Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">Home of Atlanta United FC and Atlanta Falcons. Features unique pinwheel roof design.</p>
                <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other US Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Miami</Link>
                <Link href="/travel/houston-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Houston</Link>
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Dallas</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
