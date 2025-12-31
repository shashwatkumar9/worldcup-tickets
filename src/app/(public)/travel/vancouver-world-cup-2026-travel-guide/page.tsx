import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Mountain, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Vancouver World Cup 2026 Travel Guide | British Columbia Canada",
  description: "Complete travel guide for FIFA World Cup 2026 in Vancouver. Mountains, ocean, Whitecaps passion, and BC Place!",
  keywords: ["Vancouver World Cup 2026", "Vancouver World Cup travel", "BC Place guide", "Canada World Cup", "FIFA 2026 Vancouver"]
}

export default function VancouverTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-blue-600 text-white mb-4">BRITISH COLUMBIA, CANADA</Badge>
          <h1 className="text-5xl font-bold text-white">Vancouver</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />Canada</p>
          <p className="mt-4 text-white/90 max-w-2xl">Where mountains meet the Pacific Ocean! Vancouver offers stunning natural beauty, world-class dining, outdoor adventures, and passionate Whitecaps supporters for World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-blue-400 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Mountain className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-xl text-blue-900">World's Most Beautiful City</h3>
                </div>
                <p className="text-blue-800">Consistently ranked among the world's most liveable and beautiful cities, Vancouver offers an incredible backdrop of mountains, ocean, and urban sophistication. BC Place hosted the 2010 Winter Olympics and the Vancouver Whitecaps bring passionate MLS support. Canada's Pacific gateway welcomes the world!</p>
                <Link href="/venues/bc-place-world-cup-2026-tickets">
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">View BC Place</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Vancouver International (YVR) - Award-winning airport, major Pacific hub.</p>
                  <p className="text-slate-600 text-sm">Only 25 min to downtown by train!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From YVR Airport</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Canada Line (SkyTrain)</strong> - $9.30 CAD to downtown (25 min)</li>
                    <li>• <strong>Uber/Lyft</strong> - $35-45 CAD to downtown</li>
                    <li>• <strong>Taxi</strong> - Flat rate zones available</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to BC Place</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">SkyTrain (Perfect!)</h4>
                    <p className="text-slate-600 text-sm">Stadium-Chinatown station on the Expo Line is RIGHT AT BC Place. Direct from anywhere on the SkyTrain network!</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Walking</h4>
                    <p className="text-slate-600 text-sm">Stadium is downtown, walking distance from many hotels. 10 min from Gastown, 15 min from Yaletown.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">SeaBus + SkyTrain</h4>
                    <p className="text-slate-600 text-sm">If staying in North Vancouver, take the scenic SeaBus to Waterfront then SkyTrain to stadium.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Best for Stadium</Badge>
                  <h4 className="font-bold">Yaletown / Downtown</h4>
                  <p className="text-slate-600 text-sm">Walking distance to BC Place. Trendy neighborhood, restaurants, False Creek waterfront.</p>
                  <p className="text-green-600 font-medium mt-2">From $200 CAD/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Historic</Badge>
                  <h4 className="font-bold">Gastown</h4>
                  <p className="text-slate-600 text-sm">Historic cobblestone streets, Steam Clock, boutiques. 10 min walk to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $180 CAD/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Beach</Badge>
                  <h4 className="font-bold">West End / English Bay</h4>
                  <p className="text-slate-600 text-sm">Beach access, Stanley Park nearby, diverse neighborhood. Bus/walk to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $170 CAD/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Mountains</Badge>
                  <h4 className="font-bold">North Vancouver</h4>
                  <p className="text-slate-600 text-sm">Mountain views, hiking access, quieter. SeaBus + SkyTrain to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $150 CAD/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Stanley Park</h4>
                  <p className="text-slate-600 text-sm">1,000-acre urban park. Seawall, totem poles, aquarium, beaches.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Capilano Suspension Bridge</h4>
                  <p className="text-slate-600 text-sm">Sway 70m above the rainforest canyon. Treetop adventure.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Grouse Mountain</h4>
                  <p className="text-slate-600 text-sm">Gondola ride, hiking, grizzly bears, city views.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Granville Island</h4>
                  <p className="text-slate-600 text-sm">Public market, artisans, breweries, waterfront dining.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Gastown Steam Clock</h4>
                  <p className="text-slate-600 text-sm">Historic neighborhood, whistling steam clock, cobblestones.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Whistler</h4>
                  <p className="text-slate-600 text-sm">Day trip to Olympic ski resort. Sea-to-Sky Highway.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Vancouver Essentials</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• <strong>Sushi</strong> - Some of North America's best!</li>
                      <li>• <strong>Salmon</strong> - Wild Pacific salmon, fresh!</li>
                      <li>• <strong>Japadog</strong> - Japanese-style hot dogs</li>
                      <li>• <strong>Dim Sum</strong> - Richmond has world-class</li>
                      <li>• <strong>Craft beer</strong> - 33 Acres, Brassneck, Storm</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Neighborhoods for Food</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Granville Island Public Market</li>
                      <li>• Richmond (Chinatown, Asian food)</li>
                      <li>• Main Street (hipster foodie scene)</li>
                      <li>• Commercial Drive (diverse, indie)</li>
                      <li>• Yaletown (upscale dining)</li>
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
                  <li>• <strong>Take the SkyTrain</strong> - Stadium-Chinatown station is at BC Place</li>
                  <li>• <strong>Walk the Seawall</strong> before matches - stunning waterfront path</li>
                  <li>• <strong>Try the sushi</strong> - Vancouver has the best outside Japan</li>
                  <li>• <strong>Visit Stanley Park</strong> - Bike or walk the seawall</li>
                  <li>• <strong>Weather is mild</strong> - But bring a layer, mornings can be cool</li>
                  <li>• <strong>Compass Card</strong> - Get one for easy transit payment</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Good sushi</span>
                  <span className="font-medium">$20-40 CAD</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Nice dinner</span>
                  <span className="font-medium">$50-80 CAD</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">SkyTrain fare</span>
                  <span className="font-medium">$3.15-4.55 CAD</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Capilano Bridge</span>
                  <span className="font-medium">$65 CAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$130-250 CAD</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Mild, 65-75°F (18-24°C)</p>
                <p><strong>Currency:</strong> Canadian Dollar (CAD)</p>
                <p><strong>Languages:</strong> English, diverse Asian languages</p>
                <p><strong>Time Zone:</strong> PDT (UTC-7)</p>
                <p><strong>Transit:</strong> SkyTrain, SeaBus, bus</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>BC Place</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">Retractable roof stadium, 2010 Olympics venue. Home of Whitecaps. 54,500 capacity.</p>
                <Link href="/venues/bc-place-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Pacific Northwest</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/seattle-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Seattle<Badge className="ml-auto text-xs">2.5 hours</Badge></Link>
                <Link href="/travel/toronto-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Toronto</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
