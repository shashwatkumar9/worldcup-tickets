import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Landmark, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Philadelphia World Cup 2026 Travel Guide | Pennsylvania",
  description: "Complete travel guide for FIFA World Cup 2026 in Philadelphia. History, cheesesteaks, and Lincoln Financial Field!",
  keywords: ["Philadelphia World Cup 2026", "Philly World Cup travel", "Lincoln Financial Field guide", "Pennsylvania World Cup", "FIFA 2026 Philadelphia"]
}

export default function PhiladelphiaTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-800 via-gray-400 to-green-800 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-green-700 text-white mb-4">PENNSYLVANIA</Badge>
          <h1 className="text-5xl font-bold text-white">Philadelphia</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">The birthplace of America brings history, passion, and legendary sports fans to World Cup 2026. Philadelphia's passionate soccer culture and accessible stadium make it a perfect host!</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-green-400 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Landmark className="h-6 w-6 text-green-700" />
                  <h3 className="font-bold text-xl text-green-900">Birthplace of American Independence</h3>
                </div>
                <p className="text-green-800">Philadelphia is where American democracy was born - and where passionate sports fans are legendary! The Union faithful (Sons of Ben) bring incredible atmosphere. Walk the same streets as the Founding Fathers, then watch world-class football!</p>
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets">
                  <Button className="mt-4 bg-green-700 hover:bg-green-800">View Lincoln Financial Field</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Philadelphia International (PHL) - major hub with connections worldwide.</p>
                  <p className="text-green-600 text-sm font-medium">Direct SEPTA rail to city center!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Train</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Amtrak</strong> - 90 min from NYC, 2 hours from DC</li>
                    <li>• <strong>30th Street Station</strong> - Beautiful historic hub</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to Lincoln Financial Field</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">SEPTA Broad Street Line (Best Option)</h4>
                    <p className="text-slate-600 text-sm">Take the Broad Street Line (Orange) to NRG Station. Stadium is right there! $2.50 fare.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Walking</h4>
                    <p className="text-slate-600 text-sm">The Linc is in the South Philadelphia Sports Complex, not walking distance from downtown. Use transit!</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">I-95 provides access. Parking at stadium lots. Expect tailgating culture!</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Best for Transit</Badge>
                  <h4 className="font-bold">Center City</h4>
                  <p className="text-slate-600 text-sm">Heart of Philadelphia. Easy Broad Street Line access to stadium. Restaurants, shops.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Historic</Badge>
                  <h4 className="font-bold">Old City</h4>
                  <p className="text-slate-600 text-sm">Near Independence Hall, Liberty Bell. Cobblestone streets, colonial history.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Trendy</Badge>
                  <h4 className="font-bold">Fishtown / Northern Liberties</h4>
                  <p className="text-slate-600 text-sm">Hip neighborhood, breweries, music venues. Younger crowd.</p>
                  <p className="text-green-600 font-medium mt-2">From $160/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Arts</Badge>
                  <h4 className="font-bold">Rittenhouse Square</h4>
                  <p className="text-slate-600 text-sm">Upscale shopping, dining, beautiful park. Central location.</p>
                  <p className="text-green-600 font-medium mt-2">From $250/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Independence Hall</h4>
                  <p className="text-slate-600 text-sm">Where Declaration of Independence was signed. UNESCO site.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Liberty Bell</h4>
                  <p className="text-slate-600 text-sm">Iconic symbol of American freedom. Free to visit!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Philadelphia Museum of Art</h4>
                  <p className="text-slate-600 text-sm">World-class art and the famous "Rocky Steps"!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Reading Terminal Market</h4>
                  <p className="text-slate-600 text-sm">Historic food market since 1893. Must-eat destination.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Eastern State Penitentiary</h4>
                  <p className="text-slate-600 text-sm">Haunting historic prison, once held Al Capone.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">LOVE Statue</h4>
                  <p className="text-slate-600 text-sm">Iconic sculpture in JFK Plaza. City of Brotherly Love!</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Philly Essentials</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• <strong>Cheesesteaks</strong> - Pat's, Geno's, Jim's, John's Roast Pork</li>
                      <li>• <strong>Roast Pork</strong> - The local favorite (DiNic's)</li>
                      <li>• <strong>Soft Pretzels</strong> - Philly Pretzel Factory</li>
                      <li>• <strong>Hoagies</strong> - Philly's submarine sandwich</li>
                      <li>• <strong>Water Ice</strong> - Rita's (like Italian ice)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Beyond the Classics</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Reading Terminal Market (everything!)</li>
                      <li>• Italian Market (9th Street)</li>
                      <li>• Chinatown (authentic dim sum)</li>
                      <li>• Craft beer scene (Yards, Victory)</li>
                      <li>• BYO restaurants (bring your own wine!)</li>
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
                  <li>• <strong>Take SEPTA</strong> - Broad Street Line direct to stadium</li>
                  <li>• <strong>Experience tailgating</strong> - Philly sports fans party hard before games</li>
                  <li>• <strong>Try a cheesesteak</strong> - But don't ask "which is better" (locals have opinions!)</li>
                  <li>• <strong>Walk the historic district</strong> - Independence Hall to stadium via subway</li>
                  <li>• <strong>Run the Rocky Steps</strong> - At the Art Museum, iconic photo op</li>
                  <li>• <strong>Expect passionate fans</strong> - Philadelphia sports culture is intense!</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Cheesesteak</span>
                  <span className="font-medium">$12-18</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Nice dinner</span>
                  <span className="font-medium">$40-70</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">SEPTA fare</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Museum</span>
                  <span className="font-medium">$20-25</span>
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
                <p><strong>Weather:</strong> Warm, 80-85°F</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> EDT (UTC-4)</p>
                <p><strong>Transit:</strong> SEPTA subway + bus</p>
                <p><strong>Nickname:</strong> City of Brotherly Love</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Lincoln Financial Field</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">Home of the Philadelphia Eagles and Philadelphia Union. Known for passionate fans!</p>
                <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Nearby Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />New York<Badge className="ml-auto text-xs">90 min</Badge></Link>
                <Link href="/travel/boston-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Boston</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
