import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, GraduationCap, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Boston World Cup 2026 Travel Guide | Massachusetts",
  description: "Complete travel guide for FIFA World Cup 2026 in Boston. History, academia, sports culture, and Gillette Stadium!",
  keywords: ["Boston World Cup 2026", "Boston World Cup travel", "Gillette Stadium guide", "New England World Cup", "FIFA 2026 Boston"]
}

export default function BostonTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 via-red-700 to-gray-300 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-blue-800 text-white mb-4">MASSACHUSETTS</Badge>
          <h1 className="text-5xl font-bold text-white">Boston</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">America's cradle of liberty meets legendary sports town! Boston brings Revolutionary history, world-class universities, passionate fans, and incredible seafood to World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-blue-400 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-6 w-6 text-blue-700" />
                  <h3 className="font-bold text-xl text-blue-900">America's Greatest Sports Town</h3>
                </div>
                <p className="text-blue-800">Boston is a legendary sports city - home to the Red Sox, Celtics, Bruins, and Patriots. The New England Revolution and their supporters will bring incredible energy! Gillette Stadium in Foxborough hosts matches just 30 miles from downtown.</p>
                <Link href="/venues/gillette-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-800">View Gillette Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Logan International (BOS) - major hub with excellent connections.</p>
                  <p className="text-green-600 text-sm font-medium">Only 3 miles from downtown!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From Logan</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Blue Line (T)</strong> - $2.90 to downtown</li>
                    <li>• <strong>Silver Line (SL1)</strong> - Free to South Station</li>
                    <li>• <strong>Water Taxi</strong> - Scenic option to downtown</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to Gillette Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-yellow-700">Important: Stadium is in Foxborough</h4>
                    <p className="text-slate-600 text-sm">Gillette Stadium is 30 miles south of Boston in Foxborough. Plan transportation in advance!</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700">MBTA Commuter Rail (Best Option)</h4>
                    <p className="text-slate-600 text-sm">Special match day trains from South Station and Back Bay to Foxborough. Check MBTA schedule.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Official Shuttles</h4>
                    <p className="text-slate-600 text-sm">FIFA will operate shuttle buses from Boston. Details available closer to tournament.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">Stadium off I-95/Route 1. Extensive parking. Expect heavy traffic post-match.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Central</Badge>
                  <h4 className="font-bold">Downtown / Back Bay</h4>
                  <p className="text-slate-600 text-sm">Central location, near South Station for stadium trains. Freedom Trail accessible.</p>
                  <p className="text-green-600 font-medium mt-2">From $250/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Historic</Badge>
                  <h4 className="font-bold">Beacon Hill / North End</h4>
                  <p className="text-slate-600 text-sm">Charming neighborhoods, cobblestone streets, Italian restaurants.</p>
                  <p className="text-green-600 font-medium mt-2">From $300/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Academic</Badge>
                  <h4 className="font-bold">Cambridge</h4>
                  <p className="text-slate-600 text-sm">Harvard and MIT. Red Line to downtown. More affordable options.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Stadium Adjacent</Badge>
                  <h4 className="font-bold">Foxborough / Providence</h4>
                  <p className="text-slate-600 text-sm">Near stadium or stay in Providence, RI (25 min away).</p>
                  <p className="text-green-600 font-medium mt-2">From $150/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Freedom Trail</h4>
                  <p className="text-slate-600 text-sm">2.5-mile walk through 16 historic sites including Paul Revere's house.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Harvard & MIT</h4>
                  <p className="text-slate-600 text-sm">Walk the campuses of the world's top universities in Cambridge.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Fenway Park</h4>
                  <p className="text-slate-600 text-sm">America's oldest ballpark. Tour available even on non-game days.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Boston Common</h4>
                  <p className="text-slate-600 text-sm">America's oldest public park, adjacent to Boston Public Garden.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Museum of Fine Arts</h4>
                  <p className="text-slate-600 text-sm">One of the largest art museums in America.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">New England Aquarium</h4>
                  <p className="text-slate-600 text-sm">Giant ocean tank, penguins, whale watching trips.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Boston Classics</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• New England clam chowder (Legal Sea Foods)</li>
                      <li>• Lobster roll (Neptune Oyster, Row 34)</li>
                      <li>• Boston cream pie (Omni Parker House)</li>
                      <li>• Oysters (Island Creek, B&G Oysters)</li>
                      <li>• Cannoli (Mike's Pastry, Modern Pastry)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Neighborhoods</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• North End - Little Italy, pasta, pastries</li>
                      <li>• South Boston - Irish pubs, oyster bars</li>
                      <li>• Chinatown - Authentic Asian food</li>
                      <li>• Cambridge - Farm-to-table, craft beer</li>
                      <li>• Seaport - Trendy restaurants, waterfront</li>
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
                  <li>• <strong>Plan stadium transport early</strong> - Foxborough is 30 miles from Boston</li>
                  <li>• <strong>Use commuter rail</strong> - Special trains on match days from South Station</li>
                  <li>• <strong>Walk the Freedom Trail</strong> - Perfect way to explore before a match</li>
                  <li>• <strong>Try the seafood</strong> - Lobster rolls and clam chowder are must-eats</li>
                  <li>• <strong>Wear layers</strong> - Boston weather can be unpredictable</li>
                  <li>• <strong>Book cannoli in North End</strong> - Lines at Mike's Pastry get long!</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Lobster roll</span>
                  <span className="font-medium">$25-35</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Clam chowder</span>
                  <span className="font-medium">$10-15</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">T (subway) ride</span>
                  <span className="font-medium">$2.90</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Freedom Trail tour</span>
                  <span className="font-medium">$14-18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$150-280</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Variable, 70-80°F</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> EDT (UTC-4)</p>
                <p><strong>Transit:</strong> MBTA (The T)</p>
                <p><strong>Vibe:</strong> Historic, academic, sports-mad</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Gillette Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">Home of the 6x Super Bowl champion Patriots and Revolution. In Foxborough, MA.</p>
                <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Nearby Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />New York<Badge className="ml-auto text-xs">4 hours</Badge></Link>
                <Link href="/travel/philadelphia-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Philadelphia</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
