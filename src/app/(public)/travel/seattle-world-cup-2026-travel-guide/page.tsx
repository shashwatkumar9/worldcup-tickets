import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Coffee, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Seattle World Cup 2026 Travel Guide | Washington",
  description: "Complete travel guide for FIFA World Cup 2026 in Seattle. Coffee culture, tech scene, nature, and Lumen Field!",
  keywords: ["Seattle World Cup 2026", "Seattle World Cup travel", "Lumen Field guide", "Washington World Cup", "FIFA 2026 Seattle"]
}

export default function SeattleTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 via-blue-600 to-green-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-green-600 text-white mb-4">WASHINGTON</Badge>
          <h1 className="text-5xl font-bold text-white">Seattle</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">The Emerald City brings stunning Pacific Northwest beauty, legendary coffee culture, innovative tech, and one of the loudest stadiums in the world to World Cup 2026!</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-green-400 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="h-6 w-6 text-green-700" />
                  <h3 className="font-bold text-xl text-green-900">The Loudest Stadium in Football</h3>
                </div>
                <p className="text-green-800">Lumen Field holds the Guinness World Record for crowd noise - over 137 decibels! The Seattle Sounders (2019 MLS Champions) and Emerald City Supporters create an atmosphere unlike anywhere else. The Seahawks' 12th Man tradition transfers perfectly to soccer!</p>
                <Link href="/venues/lumen-field-world-cup-2026-tickets">
                  <Button className="mt-4 bg-green-700 hover:bg-green-800">View Lumen Field</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Seattle-Tacoma International (SEA) - major hub for Alaska, Delta, and international flights.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From SEA Airport</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Link Light Rail</strong> - $3 to downtown (40 min)</li>
                    <li>• <strong>Uber/Lyft</strong> - $35-50 to downtown</li>
                    <li>• <strong>Rental Car</strong> - Not needed for city exploring</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to Lumen Field</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">Link Light Rail (Perfect!)</h4>
                    <p className="text-slate-600 text-sm">Stadium station is literally AT Lumen Field. Take the 1 Line from anywhere on the line.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Walking</h4>
                    <p className="text-slate-600 text-sm">Stadium is in the SoDo district, walking distance from downtown and Pioneer Square hotels.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Ferry</h4>
                    <p className="text-slate-600 text-sm">If coming from Bainbridge or Bremerton, ferry to downtown then walk or light rail.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Best for Stadium</Badge>
                  <h4 className="font-bold">Downtown / Pioneer Square</h4>
                  <p className="text-slate-600 text-sm">Walking distance to Lumen Field. Pike Place, waterfront all accessible.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Iconic</Badge>
                  <h4 className="font-bold">Pike Place / Waterfront</h4>
                  <p className="text-slate-600 text-sm">Near the famous market and waterfront. Tourist central but memorable.</p>
                  <p className="text-green-600 font-medium mt-2">From $250/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Hip</Badge>
                  <h4 className="font-bold">Capitol Hill</h4>
                  <p className="text-slate-600 text-sm">Seattle's hip neighborhood. Bars, restaurants, LGBTQ+ friendly. Light rail connected.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Budget</Badge>
                  <h4 className="font-bold">University District</h4>
                  <p className="text-slate-600 text-sm">Near UW campus. More affordable, light rail to stadium.</p>
                  <p className="text-green-600 font-medium mt-2">From $140/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Pike Place Market</h4>
                  <p className="text-slate-600 text-sm">Iconic market, fish throwing, original Starbucks.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Space Needle</h4>
                  <p className="text-slate-600 text-sm">Seattle's iconic observation tower with rotating glass floor.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Chihuly Garden</h4>
                  <p className="text-slate-600 text-sm">Stunning glass art installations near Space Needle.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Museum of Pop Culture</h4>
                  <p className="text-slate-600 text-sm">Music, sci-fi, and pop culture in iconic Gehry building.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Mount Rainier</h4>
                  <p className="text-slate-600 text-sm">Day trip to stunning volcanic peak (2 hours).</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Ferry Rides</h4>
                  <p className="text-slate-600 text-sm">Scenic ferries to Bainbridge Island or Bremerton.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Seattle Essentials</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Coffee (Starbucks Reserve, Victrola, Storyville)</li>
                      <li>• Seafood (Pike Place chowder, oysters)</li>
                      <li>• Salmon (Cedar-planked, smoked)</li>
                      <li>• Dungeness crab (seasonal)</li>
                      <li>• Teriyaki (Seattle-style, everywhere!)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Food Neighborhoods</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Capitol Hill - Diverse, trendy dining</li>
                      <li>• International District - Asian cuisine</li>
                      <li>• Ballard - Breweries, seafood</li>
                      <li>• Fremont - Quirky, local favorites</li>
                      <li>• Pike Place - Fresh everything!</li>
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
                  <li>• <strong>Take the light rail</strong> - Stadium station is right at Lumen Field</li>
                  <li>• <strong>Bring layers</strong> - Seattle weather can change quickly</li>
                  <li>• <strong>Join the March to the Match</strong> - ECS leads supporters from Occidental Park</li>
                  <li>• <strong>Visit Pike Place</strong> in the morning before a match</li>
                  <li>• <strong>Prepare for noise</strong> - Lumen Field is LOUD</li>
                  <li>• <strong>Coffee first</strong> - Seattle runs on espresso</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Craft coffee</span>
                  <span className="font-medium">$5-7</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Seafood dinner</span>
                  <span className="font-medium">$40-70</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Light rail fare</span>
                  <span className="font-medium">$2.25-3.50</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Space Needle</span>
                  <span className="font-medium">$35-40</span>
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
                <p><strong>Weather:</strong> Mild, 65-75°F (can rain!)</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> PDT (UTC-7)</p>
                <p><strong>Transit:</strong> Link Light Rail</p>
                <p><strong>Vibe:</strong> Coffee, tech, outdoorsy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Lumen Field</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">World's loudest stadium! Home of Sounders and Seahawks.</p>
                <Link href="/venues/lumen-field-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Pacific Northwest</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/vancouver-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Vancouver<Badge className="ml-auto text-xs">2.5 hours</Badge></Link>
                <Link href="/travel/san-francisco-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />San Francisco</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
