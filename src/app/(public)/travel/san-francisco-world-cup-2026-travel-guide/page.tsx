import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Waves, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "San Francisco World Cup 2026 Travel Guide | Bay Area",
  description: "Complete travel guide for FIFA World Cup 2026 in San Francisco Bay Area. Golden Gate, tech hub, and Levi's Stadium!",
  keywords: ["San Francisco World Cup 2026", "Bay Area World Cup travel", "Levi's Stadium guide", "Silicon Valley World Cup", "FIFA 2026 SF"]
}

export default function SanFranciscoTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-red-600 text-white mb-4">CALIFORNIA</Badge>
          <h1 className="text-5xl font-bold text-white">San Francisco Bay Area</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">The iconic Golden Gate City meets Silicon Valley innovation! The Bay Area offers stunning scenery, world-class food, tech culture, and perfect weather for World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Waves className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">Silicon Valley Soccer</h3>
                </div>
                <p className="text-red-800">Levi's Stadium in Santa Clara is one of the most technologically advanced stadiums in the world. The San Jose Earthquakes bring passionate MLS support to the Bay Area. Perfect weather year-round makes this an ideal World Cup destination!</p>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-red-600 hover:bg-red-700">View Levi's Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>SFO</strong> - San Francisco International (closest to SF)</li>
                    <li>• <strong>SJC</strong> - San Jose (closest to Levi's Stadium!)</li>
                    <li>• <strong>OAK</strong> - Oakland (budget option)</li>
                  </ul>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From Airports</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>BART</strong> - Rail from SFO/OAK to SF/Oakland</li>
                    <li>• <strong>VTA</strong> - Light rail from SJC to stadium area</li>
                    <li>• <strong>Caltrain</strong> - Connects SF, Peninsula, South Bay</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to Levi's Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">VTA Light Rail (Recommended)</h4>
                    <p className="text-slate-600 text-sm">Take VTA Light Rail to Great America station - stadium is a short walk. Connects to Caltrain at Mountain View or Diridon.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Caltrain + VTA</h4>
                    <p className="text-slate-600 text-sm">Take Caltrain from SF to Mountain View, then VTA Light Rail to stadium. About 90 min total from SF.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">Stadium is in Santa Clara, off Highway 101. Parking available ($40-60). Traffic can be heavy from SF.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Stadium Area</Badge>
                  <h4 className="font-bold">Santa Clara / San Jose</h4>
                  <p className="text-slate-600 text-sm">Closest to Levi's Stadium. Tech company HQs, Great America theme park nearby.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Iconic</Badge>
                  <h4 className="font-bold">San Francisco</h4>
                  <p className="text-slate-600 text-sm">Classic SF experience - cable cars, Golden Gate, Fisherman's Wharf. 45 miles to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $250/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Hip</Badge>
                  <h4 className="font-bold">Oakland / Berkeley</h4>
                  <p className="text-slate-600 text-sm">East Bay culture, food, more affordable. BART accessible.</p>
                  <p className="text-green-600 font-medium mt-2">From $160/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Peninsula</Badge>
                  <h4 className="font-bold">Palo Alto / Mountain View</h4>
                  <p className="text-slate-600 text-sm">Tech hub, Stanford University. Caltrain connected. Between SF and stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Golden Gate Bridge</h4>
                  <p className="text-slate-600 text-sm">Walk or bike across the iconic orange bridge.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Alcatraz Island</h4>
                  <p className="text-slate-600 text-sm">Tour the famous prison. Book weeks ahead!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Cable Cars</h4>
                  <p className="text-slate-600 text-sm">Ride the historic SF cable cars.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Fisherman's Wharf</h4>
                  <p className="text-slate-600 text-sm">Sea lions, seafood, souvenir shops.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Wine Country</h4>
                  <p className="text-slate-600 text-sm">Napa and Sonoma valleys (1 hour north).</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Silicon Valley Tour</h4>
                  <p className="text-slate-600 text-sm">Apple Park, Google, tech company campuses.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">SF Classics</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Clam chowder in sourdough bowl (Boudin)</li>
                      <li>• Dungeness crab (seasonal)</li>
                      <li>• Mission burritos (La Taqueria, El Farolito)</li>
                      <li>• Ghirardelli chocolate</li>
                      <li>• Blue Bottle Coffee (SF-born)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Diverse Neighborhoods</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Chinatown (oldest in North America)</li>
                      <li>• Mission District (Mexican, bars)</li>
                      <li>• Japantown (ramen, izakayas)</li>
                      <li>• North Beach (Italian)</li>
                      <li>• Ferry Building (food hall)</li>
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
                  <li>• <strong>Dress in layers</strong> - SF can be 60°F while Santa Clara is 85°F!</li>
                  <li>• <strong>Stay in South Bay</strong> if primarily attending matches (closer to stadium)</li>
                  <li>• <strong>Use Caltrain + VTA</strong> from SF to avoid traffic and parking</li>
                  <li>• <strong>Book Alcatraz early</strong> - Tickets sell out weeks in advance</li>
                  <li>• <strong>Rent a car</strong> for exploring Wine Country or coast</li>
                  <li>• <strong>Karl the Fog</strong> - SF summer mornings are often foggy!</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Mission burrito</span>
                  <span className="font-medium">$12-15</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Nice dinner</span>
                  <span className="font-medium">$60-100</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Caltrain (SF-SJ)</span>
                  <span className="font-medium">$10</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Alcatraz tour</span>
                  <span className="font-medium">$45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$180-350</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> SF: 60-70°F, South Bay: 75-85°F</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> PDT (UTC-7)</p>
                <p><strong>Transit:</strong> BART, Caltrain, VTA</p>
                <p><strong>Vibe:</strong> Tech, diverse, scenic</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Levi's Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">One of the most sustainable stadiums in the world. Home of the SF 49ers.</p>
                <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other West Coast</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Los Angeles</Link>
                <Link href="/travel/seattle-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Seattle</Link>
                <Link href="/travel/vancouver-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Vancouver</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
