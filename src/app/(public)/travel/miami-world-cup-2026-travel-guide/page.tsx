import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Sun, AlertCircle, DollarSign, Palmtree } from "lucide-react"

export const metadata: Metadata = {
  title: "Miami World Cup 2026 Travel Guide | South Florida",
  description: "Complete travel guide for FIFA World Cup 2026 in Miami. Beaches, nightlife, hotels, and tips for Hard Rock Stadium matches!",
  keywords: ["Miami World Cup 2026", "Miami World Cup travel", "Hard Rock Stadium guide", "South Florida World Cup", "FIFA 2026 Miami"]
}

export default function MiamiTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-400 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-pink-600 text-white mb-4">FLORIDA</Badge>
          <h1 className="text-5xl font-bold text-white">Miami</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">Where Latin flair meets beach paradise! Miami brings unmatched energy, world-famous beaches, incredible nightlife, and passionate football fans to World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-pink-400 bg-pink-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="h-6 w-6 text-pink-600" />
                  <h3 className="font-bold text-xl text-pink-900">Latin Football Capital</h3>
                </div>
                <p className="text-pink-800">Miami is the most Latin city in the USA - perfect for World Cup atmosphere! Home to Inter Miami CF and passionate supporters from across Latin America. Hard Rock Stadium hosts NFL, Super Bowls, and now the beautiful game.</p>
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-pink-600 hover:bg-pink-700">View Hard Rock Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Miami International (MIA)</strong> - Major hub, 30 min to stadium</li>
                    <li>• <strong>Fort Lauderdale (FLL)</strong> - Budget option, 45 min north</li>
                  </ul>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From MIA</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Metrorail</strong> - $2.25 to downtown</li>
                    <li>• <strong>Uber/Lyft</strong> - $20-35 to South Beach</li>
                    <li>• <strong>Rental Car</strong> - Popular choice</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to Hard Rock Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">Express Bus (Recommended)</h4>
                    <p className="text-slate-600 text-sm">Special express buses from downtown Miami and major hotels on match days. Check official FIFA transport page.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Rideshare</h4>
                    <p className="text-slate-600 text-sm">Uber/Lyft widely available. Dedicated pickup/dropoff zones at stadium. Expect surge pricing.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving</h4>
                    <p className="text-slate-600 text-sm">Stadium is in Miami Gardens, off I-95 and Florida Turnpike. Parking available but fills up fast.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-cyan-600">Beach Paradise</Badge>
                  <h4 className="font-bold">South Beach</h4>
                  <p className="text-slate-600 text-sm">Art Deco hotels, beach, nightlife. The classic Miami experience. 40 min to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $250/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Urban Vibes</Badge>
                  <h4 className="font-bold">Brickell / Downtown</h4>
                  <p className="text-slate-600 text-sm">Modern high-rises, rooftop bars, restaurants. Good transit connections.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Hip & Artsy</Badge>
                  <h4 className="font-bold">Wynwood / Design District</h4>
                  <p className="text-slate-600 text-sm">Street art, galleries, trendy restaurants. Instagram paradise.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Stadium Adjacent</Badge>
                  <h4 className="font-bold">Aventura / Miami Gardens</h4>
                  <p className="text-slate-600 text-sm">Closest to Hard Rock Stadium. Aventura Mall shopping.</p>
                  <p className="text-green-600 font-medium mt-2">From $150/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">South Beach</h4>
                  <p className="text-slate-600 text-sm">White sand, turquoise water, Art Deco architecture.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Wynwood Walls</h4>
                  <p className="text-slate-600 text-sm">World-famous outdoor street art museum.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Little Havana</h4>
                  <p className="text-slate-600 text-sm">Cuban culture, Calle Ocho, cigars, coffee.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Vizcaya Museum</h4>
                  <p className="text-slate-600 text-sm">Italian Renaissance-style villa and gardens.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Key Biscayne</h4>
                  <p className="text-slate-600 text-sm">Beaches, state parks, lighthouse, nature.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Everglades</h4>
                  <p className="text-slate-600 text-sm">Day trip: airboat tours, alligators, wildlife.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Miami Essentials</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Cuban sandwiches (Versailles, Sanguich)</li>
                      <li>• Ceviche (Juvia, CVI.CHE 105)</li>
                      <li>• Stone crabs (Joe's Stone Crab)</li>
                      <li>• Cafecito (Ventanita coffee windows)</li>
                      <li>• Arepas (various Venezuelan spots)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Nightlife</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• South Beach clubs (LIV, Story)</li>
                      <li>• Rooftop bars (Sugar, Juvia)</li>
                      <li>• Brickell lounges</li>
                      <li>• Wynwood breweries</li>
                      <li>• Little Havana salsa clubs</li>
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
                  <li>• <strong>Hydrate constantly</strong> - Miami in summer is hot and humid (85-90°F)</li>
                  <li>• <strong>Bring sunscreen</strong> and a hat - even evening sun is intense</li>
                  <li>• <strong>Learn some Spanish</strong> - "Vamos!" goes a long way in Miami</li>
                  <li>• <strong>Allow extra time</strong> - Miami traffic can be unpredictable</li>
                  <li>• <strong>Cool off at the beach</strong> before heading to evening matches</li>
                  <li>• <strong>Stay for the nightlife</strong> - Miami comes alive after dark</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Cuban sandwich</span>
                  <span className="font-medium">$8-12</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Restaurant dinner</span>
                  <span className="font-medium">$50-100</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Beach chair rental</span>
                  <span className="font-medium">$20-40</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Club entry</span>
                  <span className="font-medium">$50-100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$200-400</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Hot & humid, 85-90°F</p>
                <p><strong>Languages:</strong> English & Spanish</p>
                <p><strong>Time Zone:</strong> EDT (UTC-4)</p>
                <p><strong>Vibe:</strong> Latin, beach, party</p>
                <p><strong>Best For:</strong> Nightlife, beaches, culture</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Matches at Hard Rock</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline">View all Hard Rock Stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other US Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/new-york-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />New York<Badge className="ml-auto text-xs">Final</Badge></Link>
                <Link href="/travel/atlanta-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Atlanta</Link>
                <Link href="/travel/houston-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Houston</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
