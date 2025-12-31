import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Music, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Guadalajara World Cup 2026 Travel Guide | Jalisco Mexico",
  description: "Complete travel guide for FIFA World Cup 2026 in Guadalajara. Tequila, mariachi, Chivas, and Estadio Akron!",
  keywords: ["Guadalajara World Cup 2026", "Guadalajara World Cup travel", "Estadio Akron guide", "Jalisco World Cup", "FIFA 2026 Guadalajara"]
}

export default function GuadalajaraTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-700 via-white to-red-700 py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-red-700 text-white mb-4">JALISCO, MEXICO</Badge>
          <h1 className="text-5xl font-bold text-slate-900">Guadalajara</h1>
          <p className="mt-2 text-xl text-slate-700 flex items-center gap-2"><MapPin className="h-5 w-5" />Mexico</p>
          <p className="mt-4 text-slate-800 max-w-2xl">The birthplace of tequila, mariachi, and Mexican culture! Guadalajara brings passionate football fans, stunning architecture, and authentic Mexican hospitality to World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Music className="h-6 w-6 text-red-700" />
                  <h3 className="font-bold text-xl text-red-900">Home of Chivas & Mexican Culture</h3>
                </div>
                <p className="text-red-800">Guadalajara is home to CD Guadalajara (Chivas) - Mexico's most popular club with a policy of only fielding Mexican players. Estadio Akron's unique volcanic design built into the hillside creates an incredible atmosphere. This is where mariachi, tequila, and Mexican traditions were born!</p>
                <Link href="/venues/estadio-akron-world-cup-2026-tickets">
                  <Button className="mt-4 bg-red-700 hover:bg-red-800">View Estadio Akron</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Miguel Hidalgo International (GDL) - Mexico's third busiest airport.</p>
                  <p className="text-slate-600 text-sm">20km south of city center.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From GDL Airport</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Uber</strong> - $10-15 to Centro/Chapultepec</li>
                    <li>• <strong>Official Taxi</strong> - Fixed rates available</li>
                    <li>• <strong>Airport Bus</strong> - To Central de Autobuses</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to Estadio Akron</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">Mi Macro Periferico (Light Rail)</h4>
                    <p className="text-slate-600 text-sm">New BRT line connects to stadium area. Runs along the Periferico ring road.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Uber/Taxi</h4>
                    <p className="text-slate-600 text-sm">Stadium is in Zapopan, northwest of city center. $10-15 from central Guadalajara.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Official Shuttles</h4>
                    <p className="text-slate-600 text-sm">FIFA will operate shuttle services from downtown and major hotels on match days.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-pink-600">Trendy</Badge>
                  <h4 className="font-bold">Chapultepec / Americana</h4>
                  <p className="text-slate-600 text-sm">Hip neighborhood with bars, restaurants, Art Deco architecture. Young crowd.</p>
                  <p className="text-green-600 font-medium mt-2">From $60/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Historic</Badge>
                  <h4 className="font-bold">Centro Historico</h4>
                  <p className="text-slate-600 text-sm">Colonial architecture, cathedral, plazas. Traditional Mexican feel.</p>
                  <p className="text-green-600 font-medium mt-2">From $50/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Upscale</Badge>
                  <h4 className="font-bold">Providencia</h4>
                  <p className="text-slate-600 text-sm">Upscale neighborhood with shopping, fine dining, international vibe.</p>
                  <p className="text-green-600 font-medium mt-2">From $100/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Stadium Area</Badge>
                  <h4 className="font-bold">Zapopan</h4>
                  <p className="text-slate-600 text-sm">Near Estadio Akron. Modern suburb, Basilica of Our Lady of Zapopan.</p>
                  <p className="text-green-600 font-medium mt-2">From $70/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Tequila Town</h4>
                  <p className="text-slate-600 text-sm">Day trip to where tequila is made! Distillery tours, blue agave fields.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Hospicio Cabanas</h4>
                  <p className="text-slate-600 text-sm">UNESCO site with Orozco murals. Cultural landmark.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Tlaquepaque</h4>
                  <p className="text-slate-600 text-sm">Colonial artisan village with crafts, mariachi, galleries.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Cathedral</h4>
                  <p className="text-slate-600 text-sm">Twin towers, neo-gothic landmark in the heart of the city.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Lake Chapala</h4>
                  <p className="text-slate-600 text-sm">Mexico's largest lake, scenic villages, day trip.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Mercado San Juan</h4>
                  <p className="text-slate-600 text-sm">Traditional market with local food, crafts, atmosphere.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Jalisco Specialties</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• <strong>Birria</strong> - Spiced goat/beef stew (THE dish!)</li>
                      <li>• <strong>Torta ahogada</strong> - "Drowned" sandwich in salsa</li>
                      <li>• <strong>Tequila</strong> - Try at the source!</li>
                      <li>• <strong>Tejuino</strong> - Fermented corn drink</li>
                      <li>• <strong>Jericalla</strong> - Guadalajara's dessert</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Where to Eat</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Karne Garibaldi (world record tacos!)</li>
                      <li>• La Chata (traditional birria)</li>
                      <li>• Birreria Las Nueve Esquinas</li>
                      <li>• Mercado Libertad (San Juan de Dios)</li>
                      <li>• Chapultepec bar scene</li>
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
                  <li>• <strong>Visit Tequila</strong> before the match - it's only 1 hour away!</li>
                  <li>• <strong>Try birria</strong> - it's THE local dish and perfect fuel for cheering</li>
                  <li>• <strong>Experience mariachi</strong> at Plaza de los Mariachis</li>
                  <li>• <strong>Mild altitude</strong> - Guadalajara is at 5,100ft (1,550m)</li>
                  <li>• <strong>June is rainy season</strong> - afternoon showers possible</li>
                  <li>• <strong>Wear Chivas red</strong> to fit in with local fans!</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Birria plate</span>
                  <span className="font-medium">$5-8</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Tequila tour</span>
                  <span className="font-medium">$40-80</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Uber across city</span>
                  <span className="font-medium">$5-10</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Nice dinner</span>
                  <span className="font-medium">$20-40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$50-100</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Warm, 75-85°F (rainy pm)</p>
                <p><strong>Currency:</strong> Mexican Peso (MXN)</p>
                <p><strong>Language:</strong> Spanish</p>
                <p><strong>Time Zone:</strong> CST (UTC-6)</p>
                <p><strong>Altitude:</strong> 5,100 ft (1,550m)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Estadio Akron</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">Unique volcanic design stadium, home of Chivas. 49,850 capacity.</p>
                <Link href="/venues/estadio-akron-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other Mexico Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/mexico-city-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Mexico City<Badge className="ml-auto text-xs">Opening</Badge></Link>
                <Link href="/travel/monterrey-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Monterrey</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
