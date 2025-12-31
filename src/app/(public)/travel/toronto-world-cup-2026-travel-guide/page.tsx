import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Building, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Toronto World Cup 2026 Travel Guide | Ontario Canada",
  description: "Complete travel guide for FIFA World Cup 2026 in Toronto. CN Tower, diverse culture, TFC passion, and BMO Field!",
  keywords: ["Toronto World Cup 2026", "Toronto World Cup travel", "BMO Field guide", "Canada World Cup", "FIFA 2026 Toronto"]
}

export default function TorontoTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-red-600 text-white mb-4">ONTARIO, CANADA</Badge>
          <h1 className="text-5xl font-bold text-white">Toronto</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />Canada</p>
          <p className="mt-4 text-white/90 max-w-2xl">Canada's largest city and one of the world's most multicultural! Toronto brings incredible diversity, world-class dining, iconic landmarks, and passionate TFC supporters to World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">World's Most Multicultural City</h3>
                </div>
                <p className="text-red-800">Over half of Toronto's residents were born outside Canada, making it the most diverse city on Earth - perfect for a World Cup! BMO Field and Toronto FC's passionate supporters (including the famous South End Supporters) create an electric atmosphere. Canada's first World Cup on home soil!</p>
                <Link href="/venues/bmo-field-world-cup-2026-tickets">
                  <Button className="mt-4 bg-red-600 hover:bg-red-700">View BMO Field</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Toronto Pearson (YYZ)</strong> - Major international hub</li>
                    <li>• <strong>Billy Bishop (YTZ)</strong> - Downtown island airport (domestic/US)</li>
                  </ul>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From Pearson (YYZ)</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>UP Express</strong> - $12.35 CAD, 25 min to Union Station</li>
                    <li>• <strong>TTC Bus 192</strong> - $3.35 to Kipling subway</li>
                    <li>• <strong>Uber/Lyft</strong> - $50-70 CAD to downtown</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to BMO Field</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">TTC Streetcar (Best Option)</h4>
                    <p className="text-slate-600 text-sm">Take the 509 or 511 streetcar from Union Station to Exhibition Loop. Stadium is right there! $3.35 CAD.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">GO Transit</h4>
                    <p className="text-slate-600 text-sm">Take GO Train to Exhibition station on Lakeshore lines. Short walk to stadium.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Walking/Biking</h4>
                    <p className="text-slate-600 text-sm">Stadium is on the waterfront, walkable from downtown along the lakefront trail. About 30 min from CN Tower.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Best for Stadium</Badge>
                  <h4 className="font-bold">King West / Entertainment District</h4>
                  <p className="text-slate-600 text-sm">Close to BMO Field, nightlife, restaurants. Walk or quick streetcar to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $180 CAD/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Central</Badge>
                  <h4 className="font-bold">Downtown / Financial District</h4>
                  <p className="text-slate-600 text-sm">CN Tower, Rogers Centre, PATH underground. Central to everything.</p>
                  <p className="text-green-600 font-medium mt-2">From $200 CAD/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Trendy</Badge>
                  <h4 className="font-bold">Queen West / Ossington</h4>
                  <p className="text-slate-600 text-sm">Hip neighborhood, indie shops, restaurants, art galleries. Young vibe.</p>
                  <p className="text-green-600 font-medium mt-2">From $150 CAD/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Diverse</Badge>
                  <h4 className="font-bold">Yorkville / The Annex</h4>
                  <p className="text-slate-600 text-sm">Upscale shopping, near Royal Ontario Museum, University of Toronto.</p>
                  <p className="text-green-600 font-medium mt-2">From $250 CAD/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">CN Tower</h4>
                  <p className="text-slate-600 text-sm">Iconic 553m tower. EdgeWalk, glass floor, 360 restaurant.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Distillery District</h4>
                  <p className="text-slate-600 text-sm">Victorian industrial buildings, galleries, restaurants, cobblestones.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Royal Ontario Museum</h4>
                  <p className="text-slate-600 text-sm">World cultures and natural history. Crystal architecture.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Kensington Market</h4>
                  <p className="text-slate-600 text-sm">Bohemian neighborhood, vintage shops, diverse food.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Toronto Islands</h4>
                  <p className="text-slate-600 text-sm">Ferry to car-free islands. Beaches, skyline views, nature.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">St. Lawrence Market</h4>
                  <p className="text-slate-600 text-sm">Historic market since 1803. Peameal bacon sandwich!</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Toronto Essentials</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• <strong>Peameal bacon sandwich</strong> - St. Lawrence Market</li>
                      <li>• <strong>Butter tarts</strong> - Canadian classic pastry</li>
                      <li>• <strong>Poutine</strong> - Fries, cheese curds, gravy</li>
                      <li>• <strong>BeaverTails</strong> - Fried dough pastry</li>
                      <li>• <strong>Craft beer</strong> - Bellwoods, Blood Brothers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Global Neighborhoods</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Chinatown (Spadina Ave)</li>
                      <li>• Little Italy (College St)</li>
                      <li>• Greektown (Danforth)</li>
                      <li>• Little India (Gerrard East)</li>
                      <li>• Koreatown (Bloor West)</li>
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
                  <li>• <strong>Take the streetcar</strong> - 509/511 from Union Station to Exhibition</li>
                  <li>• <strong>Visit CN Tower</strong> early in the trip - long lines in summer</li>
                  <li>• <strong>Explore neighborhoods</strong> - Each has unique food and culture</li>
                  <li>• <strong>Weather can vary</strong> - Bring layers, summer can be humid</li>
                  <li>• <strong>PRESTO card</strong> - Get one for easy transit payment</li>
                  <li>• <strong>Support Canada!</strong> - Red and white everywhere</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Casual meal</span>
                  <span className="font-medium">$15-25 CAD</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Nice dinner</span>
                  <span className="font-medium">$50-80 CAD</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">TTC fare</span>
                  <span className="font-medium">$3.35 CAD</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">CN Tower</span>
                  <span className="font-medium">$43 CAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$120-220 CAD</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Warm, 70-80°F (20-27°C)</p>
                <p><strong>Currency:</strong> Canadian Dollar (CAD)</p>
                <p><strong>Languages:</strong> English (French spoken too)</p>
                <p><strong>Time Zone:</strong> EDT (UTC-4)</p>
                <p><strong>Transit:</strong> TTC subway, streetcar, bus</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>BMO Field</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">Waterfront stadium, home of Toronto FC. 30,000 capacity for World Cup.</p>
                <Link href="/venues/bmo-field-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other Canada City</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/vancouver-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Vancouver</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
