import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Car, Hotel, Utensils, Camera, Sun, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Los Angeles World Cup 2026 Travel Guide | LA California",
  description: "Complete travel guide for FIFA World Cup 2026 in Los Angeles. Hotels, transport, beaches, attractions, and tips for SoFi Stadium matches!",
  keywords: ["Los Angeles World Cup 2026", "LA World Cup travel", "SoFi Stadium guide", "California World Cup", "FIFA 2026 LA"]
}

export default function LosAngelesTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-purple-600 via-yellow-400 to-blue-500 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-purple-600 text-white mb-4">CALIFORNIA</Badge>
          <h1 className="text-5xl font-bold text-white">Los Angeles</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">The entertainment capital of the world welcomes FIFA World Cup 2026. LA offers incredible weather, beaches, world-class dining, and the stunning SoFi Stadium in Inglewood.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-purple-400 bg-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="h-6 w-6 text-purple-600" />
                  <h3 className="font-bold text-xl text-purple-900">Perfect World Cup Weather</h3>
                </div>
                <p className="text-purple-800">June and July in LA means perfect weather - sunny skies, low humidity, and average temperatures of 75-85°F (24-29°C). SoFi Stadium's innovative roof design keeps fans comfortable while allowing natural light.</p>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-purple-600 hover:bg-purple-700">View SoFi Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Multiple airports serve Los Angeles:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>LAX</strong> - Main international hub (closest to SoFi)</li>
                    <li>• <strong>Burbank (BUR)</strong> - Convenient for Hollywood area</li>
                    <li>• <strong>Long Beach (LGB)</strong> - Budget carriers</li>
                    <li>• <strong>Ontario (ONT)</strong> - Less crowded option</li>
                  </ul>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From LAX</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>LAX-it Rideshare</strong> - Uber/Lyft pickup lot</li>
                    <li>• <strong>FlyAway Bus</strong> - $9.75 to Union Station</li>
                    <li>• <strong>Metro C Line</strong> - Rail to downtown (coming soon)</li>
                    <li>• <strong>Rental Car</strong> - Most popular option</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Car className="h-6 w-6" />Getting to SoFi Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">Metro (Recommended)</h4>
                    <p className="text-slate-600 text-sm">Take the Metro C Line (Green) to Downtown Inglewood station, then shuttle bus to stadium. Easy and avoids traffic!</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Rideshare</h4>
                    <p className="text-slate-600 text-sm">Uber/Lyft drop-off zones available. Expect surge pricing on match days. Allow extra time.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">SoFi Stadium is at 1001 S Stadium Dr, Inglewood. Parking from $60-100. I-405, I-105, and I-110 all provide access.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Stadium Area</Badge>
                  <h4 className="font-bold">Inglewood / LAX Area</h4>
                  <p className="text-slate-600 text-sm">Closest to SoFi Stadium. Hotels along Century Blvd offer convenience.</p>
                  <p className="text-green-600 font-medium mt-2">From $150/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Beach Towns</Badge>
                  <h4 className="font-bold">Santa Monica / Venice</h4>
                  <p className="text-slate-600 text-sm">Beach vibes, great restaurants, walkable. 30-45 min to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $250/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Cultural Hub</Badge>
                  <h4 className="font-bold">Downtown LA</h4>
                  <p className="text-slate-600 text-sm">Museums, arts, nightlife. Good Metro connections to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Entertainment</Badge>
                  <h4 className="font-bold">Hollywood / West Hollywood</h4>
                  <p className="text-slate-600 text-sm">Iconic location, nightlife, celebrity spotting. 45 min to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $300/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Santa Monica Pier</h4>
                  <p className="text-slate-600 text-sm">Iconic pier with Ferris wheel, arcade, and ocean views.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Hollywood Sign</h4>
                  <p className="text-slate-600 text-sm">Hike to views of the famous landmark in Griffith Park.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Getty Center</h4>
                  <p className="text-slate-600 text-sm">World-class art museum with stunning architecture.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Venice Beach</h4>
                  <p className="text-slate-600 text-sm">Boardwalk, Muscle Beach, street performers, canals.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Universal Studios</h4>
                  <p className="text-slate-600 text-sm">Theme park and working film studio experience.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Griffith Observatory</h4>
                  <p className="text-slate-600 text-sm">Free entry, planetarium shows, city views.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">LA Classics</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Tacos (street vendors, Guisados, Sonoratown)</li>
                      <li>• In-N-Out Burger (California institution)</li>
                      <li>• Korean BBQ (Koreatown)</li>
                      <li>• Pho (Little Saigon, SGV)</li>
                      <li>• Sushi (Sugarfish, Sushi Gen)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Food Halls & Markets</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Grand Central Market (DTLA)</li>
                      <li>• Smorgasburg LA (Sundays)</li>
                      <li>• Original Farmers Market</li>
                      <li>• Eataly (Century City)</li>
                      <li>• ROW DTLA</li>
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
                  <li>• <strong>Rent a car</strong> if exploring beyond stadium area - LA is spread out</li>
                  <li>• <strong>Use Metro</strong> for stadium trips to avoid notorious LA traffic</li>
                  <li>• <strong>Bring sunscreen</strong> - even in the evening, California sun is strong</li>
                  <li>• <strong>Stay near the beach</strong> for morning swims before afternoon matches</li>
                  <li>• <strong>Download Metro app</strong> for trip planning and payment</li>
                  <li>• <strong>Book restaurants early</strong> - popular spots require reservations</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Street tacos</span>
                  <span className="font-medium">$3-5 each</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Restaurant dinner</span>
                  <span className="font-medium">$40-80</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Metro day pass</span>
                  <span className="font-medium">$5</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Uber (10 miles)</span>
                  <span className="font-medium">$25-40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$150-300</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Sunny, 75-85°F (24-29°C)</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> PDT (UTC-7)</p>
                <p><strong>Tipping:</strong> 18-20% expected</p>
                <p><strong>Driving:</strong> Required for most exploring</p>
                <p><strong>Vibe:</strong> Laid-back, diverse, outdoorsy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Matches at SoFi Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/group-a-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>Group Stage</span>
                  <Badge className="ml-auto text-xs">Multiple</Badge>
                </Link>
                <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>Round of 16</span>
                </Link>
                <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline mt-2 block">View all SoFi matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other US Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />New York<Badge className="ml-auto text-xs">Final</Badge></Link>
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Miami</Link>
                <Link href="/travel/san-francisco-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />San Francisco</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
