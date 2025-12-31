import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Rocket, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Houston World Cup 2026 Travel Guide | Texas",
  description: "Complete travel guide for FIFA World Cup 2026 in Houston. Space Center, diverse food scene, and NRG Stadium!",
  keywords: ["Houston World Cup 2026", "Houston World Cup travel", "NRG Stadium guide", "Texas World Cup", "FIFA 2026 Houston"]
}

export default function HoustonTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-600 via-blue-800 to-orange-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-orange-600 text-white mb-4">TEXAS</Badge>
          <h1 className="text-5xl font-bold text-white">Houston</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">Space City welcomes the world! Houston offers incredible diversity, NASA, world-class museums, and America's most diverse food scene for World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-orange-400 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-6 w-6 text-orange-600" />
                  <h3 className="font-bold text-xl text-orange-900">America's Most Diverse City</h3>
                </div>
                <p className="text-orange-800">Houston is the most ethnically diverse major city in the US - perfect for a World Cup! Home to large communities from every continent, you'll find authentic cuisine from 70+ countries. The Dynamo faithful will bring incredible support!</p>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-orange-600 hover:bg-orange-700">View NRG Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>George Bush Intercontinental (IAH)</strong> - Major United hub</li>
                    <li>• <strong>Hobby Airport (HOU)</strong> - Southwest hub, closer to downtown</li>
                  </ul>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From Airport</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Bus 102</strong> - $1.25 from IAH to downtown</li>
                    <li>• <strong>Uber/Lyft</strong> - $35-50 to downtown</li>
                    <li>• <strong>Rental Car</strong> - Recommended for Houston</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to NRG Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">METRORail (Recommended)</h4>
                    <p className="text-slate-600 text-sm">Take the Red Line to NRG Park/Fannin South station. Direct from downtown! $1.25 fare.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Rideshare</h4>
                    <p className="text-slate-600 text-sm">Uber/Lyft drop zones available. Allow extra time for match day traffic.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">NRG Stadium is off Loop 610. Extensive parking available. Get there early!</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Stadium Area</Badge>
                  <h4 className="font-bold">Medical Center / NRG Area</h4>
                  <p className="text-slate-600 text-sm">Closest to stadium. On rail line. Texas Medical Center nearby.</p>
                  <p className="text-green-600 font-medium mt-2">From $130/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Central</Badge>
                  <h4 className="font-bold">Downtown Houston</h4>
                  <p className="text-slate-600 text-sm">Theater district, sports bars, restaurants. Rail to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Trendy</Badge>
                  <h4 className="font-bold">Montrose / Museum District</h4>
                  <p className="text-slate-600 text-sm">Arts, culture, eclectic dining. Near museums. On rail line.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Upscale</Badge>
                  <h4 className="font-bold">The Galleria / Uptown</h4>
                  <p className="text-slate-600 text-sm">High-end shopping, dining. Need transport to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $220/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Space Center Houston</h4>
                  <p className="text-slate-600 text-sm">NASA's official visitor center. See real spacecraft!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Museum District</h4>
                  <p className="text-slate-600 text-sm">19 museums, many free! Art, science, nature.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Buffalo Bayou Park</h4>
                  <p className="text-slate-600 text-sm">160-acre urban green space along the bayou.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">San Jacinto Monument</h4>
                  <p className="text-slate-600 text-sm">Taller than the Washington Monument!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Houston Zoo</h4>
                  <p className="text-slate-600 text-sm">6,000+ animals in Hermann Park.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Kemah Boardwalk</h4>
                  <p className="text-slate-600 text-sm">Waterfront entertainment and seafood.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Global Eats (Houston's specialty!)</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Vietnamese (Midtown, Bellaire Chinatown)</li>
                      <li>• Mexican (authentic taquerias everywhere)</li>
                      <li>• Indian/Pakistani (Hillcroft area)</li>
                      <li>• Nigerian (Alief area)</li>
                      <li>• Crawfish (seasonal, everywhere!)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Texas Classics</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• BBQ (Truth BBQ, Killens)</li>
                      <li>• Tex-Mex (Ninfa's, El Tiempo)</li>
                      <li>• Gulf seafood</li>
                      <li>• Kolaches (Czech pastries)</li>
                      <li>• Craft beer (Saint Arnold, 8th Wonder)</li>
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
                  <li>• <strong>Use METRORail</strong> - Direct to NRG Stadium, avoids traffic</li>
                  <li>• <strong>Prepare for heat</strong> - Houston summers are very hot and humid</li>
                  <li>• <strong>Stadium has AC</strong> - NRG has a retractable roof</li>
                  <li>• <strong>Eat the world</strong> - Houston's diversity means incredible food options</li>
                  <li>• <strong>Visit NASA</strong> - Space Center Houston is a must-do</li>
                  <li>• <strong>Stay on rail line</strong> - Makes stadium access easy</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Pho or tacos</span>
                  <span className="font-medium">$10-15</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">BBQ plate</span>
                  <span className="font-medium">$18-28</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">METRORail</span>
                  <span className="font-medium">$1.25</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Space Center</span>
                  <span className="font-medium">$30</span>
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
                <p><strong>Weather:</strong> Hot & humid, 90-95°F</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> CDT (UTC-5)</p>
                <p><strong>Transit:</strong> METRORail + bus</p>
                <p><strong>Nickname:</strong> Space City</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>NRG Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">Retractable roof stadium, home of the Texans and Houston Rodeo.</p>
                <Link href="/venues/nrg-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other US Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Dallas</Link>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Atlanta</Link>
                <Link href="/travel/kansas-city-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Kansas City</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
