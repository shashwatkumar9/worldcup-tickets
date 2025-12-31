import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Car, Hotel, Utensils, Camera, Star, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Dallas World Cup 2026 Travel Guide | Texas",
  description: "Complete travel guide for FIFA World Cup 2026 in Dallas. Hotels, BBQ, attractions, and tips for AT&T Stadium matches!",
  keywords: ["Dallas World Cup 2026", "Dallas World Cup travel", "AT&T Stadium guide", "Texas World Cup", "FIFA 2026 Dallas"]
}

export default function DallasTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 via-gray-300 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-blue-800 text-white mb-4">TEXAS</Badge>
          <h1 className="text-5xl font-bold text-white">Dallas / Arlington</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">Everything is bigger in Texas - including the World Cup experience! AT&T Stadium's massive video board and 80,000+ capacity make Dallas one of the most spectacular venues for 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-blue-400 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">The World's Largest Video Board</h3>
                </div>
                <p className="text-blue-800">AT&T Stadium features the iconic center-hung video board - one of the largest in the world. The retractable roof stadium in Arlington hosts the Dallas Cowboys, FC Dallas matches, and major events. Prepare for Texas-sized hospitality!</p>
                <Link href="/venues/att-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-800">View AT&T Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>DFW International</strong> - Major hub, 15 min to Arlington</li>
                    <li>• <strong>Dallas Love Field (DAL)</strong> - Southwest hub, downtown</li>
                  </ul>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From DFW</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>DART Rail</strong> - $3 to downtown Dallas</li>
                    <li>• <strong>Rental Car</strong> - Most flexible option</li>
                    <li>• <strong>Uber/Lyft</strong> - $30-50 to downtown</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Car className="h-6 w-6" />Getting to AT&T Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-yellow-700">Important: No Public Transit</h4>
                    <p className="text-slate-600 text-sm">Arlington does not have public transit to the stadium. Plan for driving, rideshare, or official shuttles on match days.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Rideshare</h4>
                    <p className="text-slate-600 text-sm">Uber/Lyft are popular options. Designated pickup/dropoff zones. Expect surge pricing and waits after matches.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">Stadium is at 1 AT&T Way, Arlington. I-30 provides direct access. Parking lots surround the stadium ($40-75).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700">Official Shuttles</h4>
                    <p className="text-slate-600 text-sm">FIFA will operate shuttle services from Dallas and Fort Worth. Check official transport page closer to tournament.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Stadium Area</Badge>
                  <h4 className="font-bold">Arlington</h4>
                  <p className="text-slate-600 text-sm">Closest to AT&T Stadium. Walking distance from some hotels. Near Six Flags and Rangers ballpark.</p>
                  <p className="text-green-600 font-medium mt-2">From $120/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Urban Core</Badge>
                  <h4 className="font-bold">Downtown Dallas</h4>
                  <p className="text-slate-600 text-sm">Arts District, restaurants, nightlife. 20 miles to stadium but more entertainment options.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Hip District</Badge>
                  <h4 className="font-bold">Deep Ellum / Uptown</h4>
                  <p className="text-slate-600 text-sm">Live music, craft beer, trendy restaurants. Great nightlife scene.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Western Charm</Badge>
                  <h4 className="font-bold">Fort Worth</h4>
                  <p className="text-slate-600 text-sm">Stockyards, western culture, less crowded. 25 miles to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $140/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Fort Worth Stockyards</h4>
                  <p className="text-slate-600 text-sm">Daily cattle drives, western shops, honky-tonks.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Sixth Floor Museum</h4>
                  <p className="text-slate-600 text-sm">JFK assassination site and museum in Dealey Plaza.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Dallas Arts District</h4>
                  <p className="text-slate-600 text-sm">Largest urban arts district in the US.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Reunion Tower</h4>
                  <p className="text-slate-600 text-sm">Observation deck with 360° views of Dallas.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Six Flags Over Texas</h4>
                  <p className="text-slate-600 text-sm">Theme park next to AT&T Stadium.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Bishop Arts District</h4>
                  <p className="text-slate-600 text-sm">Eclectic shops, restaurants, local art.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Texas BBQ</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pecan Lodge (Dallas institution)</li>
                      <li>• Terry Black's BBQ</li>
                      <li>• Lockhart Smokehouse</li>
                      <li>• Cattleack Barbeque</li>
                      <li>• Hard Eight BBQ</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Tex-Mex & More</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Meso Maya (upscale Mexican)</li>
                      <li>• Mi Cocina (classic Tex-Mex)</li>
                      <li>• Chicken fried steak anywhere!</li>
                      <li>• Whataburger (Texas fast food)</li>
                      <li>• Craft beer in Deep Ellum</li>
                    </ul>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <Card className="border-orange-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  <h3 className="font-bold text-xl">Match Day Tips</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li>• <strong>Book transport early</strong> - No public transit to Arlington stadium</li>
                  <li>• <strong>Stay hydrated</strong> - Texas summer heat can reach 100°F (38°C)</li>
                  <li>• <strong>Consider staying in Arlington</strong> for easiest stadium access</li>
                  <li>• <strong>Leave early</strong> - DFW traffic can be intense</li>
                  <li>• <strong>Enjoy the AC</strong> - Stadium has retractable roof and climate control</li>
                  <li>• <strong>Arrive hungry</strong> - Stadium food options are extensive</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">BBQ plate</span>
                  <span className="font-medium">$18-28</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Tex-Mex dinner</span>
                  <span className="font-medium">$25-45</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Uber to stadium</span>
                  <span className="font-medium">$30-60</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Stadium parking</span>
                  <span className="font-medium">$40-75</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$150-250</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Hot! 95-100°F (35-38°C)</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> CDT (UTC-5)</p>
                <p><strong>Tipping:</strong> 18-20% expected</p>
                <p><strong>Driving:</strong> Essential for getting around</p>
                <p><strong>Vibe:</strong> Big, friendly, BBQ-loving</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Matches at AT&T Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline">View all AT&T Stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other US Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/houston-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Houston</Link>
                <Link href="/travel/kansas-city-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Kansas City</Link>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Atlanta</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
