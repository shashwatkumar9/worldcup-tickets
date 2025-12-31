import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Landmark, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Mexico City World Cup 2026 Travel Guide | CDMX",
  description: "Complete travel guide for FIFA World Cup 2026 in Mexico City. Opening match at Estadio Azteca, tacos, culture, and ancient history!",
  keywords: ["Mexico City World Cup 2026", "CDMX World Cup travel", "Estadio Azteca guide", "Mexico World Cup", "FIFA 2026 Mexico City"]
}

export default function MexicoCityTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-700 via-white to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-green-700 text-white mb-4 font-bold">OPENING MATCH HOST</Badge>
          <h1 className="text-5xl font-bold text-white">Ciudad de Mexico</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />Mexico</p>
          <p className="mt-4 text-white/90 max-w-2xl">The world's greatest megacity hosts the Opening Match of World Cup 2026! Mexico City brings unmatched passion, incredible cuisine, ancient history, and the legendary Estadio Azteca.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-green-500 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Landmark className="h-6 w-6 text-green-700" />
                  <h3 className="font-bold text-xl text-green-900">Opening Match & Football History</h3>
                </div>
                <p className="text-green-800">Estadio Azteca becomes the first stadium to host THREE World Cup opening matches (1970, 1986, 2026)! This is where Maradona's "Hand of God" and "Goal of the Century" happened. 87,000+ passionate Mexican fans create an atmosphere like nowhere else on Earth.</p>
                <Link href="/venues/estadio-azteca-world-cup-2026-tickets">
                  <Button className="mt-4 bg-green-700 hover:bg-green-800">View Estadio Azteca</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Benito Juarez International (MEX) - huge hub with connections from everywhere.</p>
                  <p className="text-slate-600 text-sm">Located just 5km from city center!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From MEX Airport</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Metro</strong> - 5 pesos (~$0.30!) to city</li>
                    <li>• <strong>Metrobus</strong> - Line 4 to downtown</li>
                    <li>• <strong>Uber</strong> - $10-15 to Centro/Roma</li>
                    <li>• <strong>Official Taxi</strong> - Fixed rates from airport</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to Estadio Azteca</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">Metro (Best Option)</h4>
                    <p className="text-slate-600 text-sm">Take Line 2 (Blue) to Tasquena, then the Tren Ligero (Light Rail) to Estadio Azteca station. Direct to stadium gates!</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Uber/Taxi</h4>
                    <p className="text-slate-600 text-sm">Easy option but expect heavy traffic on match days. Stadium is in Coyoacan, south of the city center.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Official Shuttles</h4>
                    <p className="text-slate-600 text-sm">FIFA will run special shuttle services from major hotels and tourist areas.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-pink-600">Trendy</Badge>
                  <h4 className="font-bold">Roma / Condesa</h4>
                  <p className="text-slate-600 text-sm">Hipster neighborhoods with beautiful parks, cafes, restaurants. Art Deco buildings.</p>
                  <p className="text-green-600 font-medium mt-2">From $80/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Historic</Badge>
                  <h4 className="font-bold">Centro Historico</h4>
                  <p className="text-slate-600 text-sm">Zocalo, Palacio Nacional, ancient ruins. UNESCO World Heritage site.</p>
                  <p className="text-green-600 font-medium mt-2">From $60/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Upscale</Badge>
                  <h4 className="font-bold">Polanco</h4>
                  <p className="text-slate-600 text-sm">Luxury hotels, fine dining, Museo Soumaya. More upscale area.</p>
                  <p className="text-green-600 font-medium mt-2">From $150/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Stadium Area</Badge>
                  <h4 className="font-bold">Coyoacan</h4>
                  <p className="text-slate-600 text-sm">Near Azteca, charming colonial neighborhood, Frida Kahlo Museum.</p>
                  <p className="text-green-600 font-medium mt-2">From $70/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Teotihuacan</h4>
                  <p className="text-slate-600 text-sm">Ancient pyramids of the Sun and Moon. Day trip essential!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Museo Nacional</h4>
                  <p className="text-slate-600 text-sm">World's best collection of Mesoamerican artifacts.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Frida Kahlo Museum</h4>
                  <p className="text-slate-600 text-sm">Casa Azul - the artist's colorful home in Coyoacan.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Zocalo</h4>
                  <p className="text-slate-600 text-sm">One of world's largest squares. Cathedral, Aztec ruins.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Xochimilco</h4>
                  <p className="text-slate-600 text-sm">Floating gardens, colorful trajinera boats, mariachi.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Chapultepec Castle</h4>
                  <p className="text-slate-600 text-sm">Royal palace in massive urban park.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card className="border-red-400 bg-red-50"><CardContent className="p-6">
                <h3 className="font-bold text-xl text-red-900 mb-4">World's Best Food City</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Street Food Essentials</h4>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• <strong>Tacos al pastor</strong> - Spit-roasted pork, pineapple</li>
                      <li>• <strong>Tacos de canasta</strong> - Basket tacos</li>
                      <li>• <strong>Quesadillas</strong> - With huitlacoche, flor de calabaza</li>
                      <li>• <strong>Elotes/Esquites</strong> - Street corn</li>
                      <li>• <strong>Churros</strong> - With chocolate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Markets & Restaurants</h4>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Mercado Roma (gourmet food hall)</li>
                      <li>• Mercado San Juan (exotic ingredients)</li>
                      <li>• Contramar (seafood institution)</li>
                      <li>• Pujol (world's best restaurants)</li>
                      <li>• El Huequito (original al pastor)</li>
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
                  <li>• <strong>Take Metro to the stadium</strong> - It's efficient and avoids traffic</li>
                  <li>• <strong>Learn "MEXICO!" chant</strong> - Join 87,000 fans!</li>
                  <li>• <strong>Altitude awareness</strong> - CDMX is 7,350ft (2,240m) - stay hydrated</li>
                  <li>• <strong>Cash is king</strong> - Many places don't take cards</li>
                  <li>• <strong>Book Teotihuacan</strong> early for the experience of a lifetime</li>
                  <li>• <strong>Try mezcal</strong> - Not tequila, the smoky cousin!</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Street tacos (5)</span>
                  <span className="font-medium">$3-5</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Nice restaurant</span>
                  <span className="font-medium">$30-60</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Metro ride</span>
                  <span className="font-medium">$0.30</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Uber (cross-city)</span>
                  <span className="font-medium">$8-15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$50-120</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Mild, 65-75°F (rainy season)</p>
                <p><strong>Currency:</strong> Mexican Peso (MXN)</p>
                <p><strong>Language:</strong> Spanish</p>
                <p><strong>Time Zone:</strong> CST (UTC-6)</p>
                <p><strong>Altitude:</strong> 7,350 ft (2,240m)</p>
                <p><strong>Tipping:</strong> 10-15%</p>
              </CardContent>
            </Card>

            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader><CardTitle>Opening Match!</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-yellow-800 text-sm font-medium">Mexico vs TBD - June 11, 2026</p>
                <p className="text-yellow-800 text-sm">Estadio Azteca hosts the first match of World Cup 2026!</p>
                <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all Azteca matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other Mexico Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/guadalajara-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Guadalajara</Link>
                <Link href="/travel/monterrey-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Monterrey</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
