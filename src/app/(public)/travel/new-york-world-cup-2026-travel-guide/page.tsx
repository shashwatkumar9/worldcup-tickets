import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Hotel, Utensils, Camera, Calendar, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "New York World Cup 2026 Travel Guide | NYC & New Jersey",
  description: "Complete travel guide for FIFA World Cup 2026 in New York/New Jersey. Hotels, transport, attractions, and tips for the Final host city!",
  keywords: ["New York World Cup 2026", "NYC World Cup travel", "MetLife Stadium guide", "New Jersey World Cup", "FIFA 2026 New York"]
}

export default function NewYorkTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-yellow-500 text-black mb-4 font-bold">FINAL HOST CITY</Badge>
          <h1 className="text-5xl font-bold text-white">New York / New Jersey</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">The city that never sleeps welcomes the world for FIFA World Cup 2026. New York/New Jersey will host the Final at MetLife Stadium - the biggest match in football!</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-bold text-xl text-yellow-900">World Cup 2026 Final Host</h3>
                </div>
                <p className="text-yellow-800">MetLife Stadium in East Rutherford, NJ will host the FIFA World Cup 2026 Final on July 19, 2026. Located just 8 miles from Manhattan, it offers easy access from New York City while providing 82,500 seats for the biggest match in football.</p>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-yellow-600 hover:bg-yellow-700">View MetLife Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Three major airports serve the area:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>JFK (JFK)</strong> - International hub, Queens</li>
                    <li>• <strong>Newark (EWR)</strong> - Closest to MetLife Stadium</li>
                    <li>• <strong>LaGuardia (LGA)</strong> - Domestic flights, Queens</li>
                  </ul>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From Airport to City</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>AirTrain + Subway</strong> - $10.75 from JFK</li>
                    <li>• <strong>NJ Transit</strong> - $13 from Newark to Penn Station</li>
                    <li>• <strong>Taxi/Uber</strong> - $50-80 depending on traffic</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Train className="h-6 w-6" />Getting to MetLife Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700">NJ Transit Rail (Recommended)</h4>
                    <p className="text-slate-600 text-sm">Take NJ Transit from Penn Station NYC or Hoboken to Meadowlands Station. Direct trains run on match days. Journey time: 30-40 minutes.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Bus Services</h4>
                    <p className="text-slate-600 text-sm">NJ Transit buses from Port Authority Bus Terminal (42nd St). Route 351 direct to stadium.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">By Car</h4>
                    <p className="text-slate-600 text-sm">Located off Route 3 and NJ Turnpike. Parking available but expect heavy traffic. Leave early!</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Budget</Badge>
                  <h4 className="font-bold">Brooklyn & Queens</h4>
                  <p className="text-slate-600 text-sm">More affordable options with good subway connections. Areas like Williamsburg, Astoria offer value.</p>
                  <p className="text-green-600 font-medium mt-2">From $150/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Mid-Range</Badge>
                  <h4 className="font-bold">Midtown Manhattan</h4>
                  <p className="text-slate-600 text-sm">Central location near Penn Station for easy MetLife access. Times Square, Herald Square area.</p>
                  <p className="text-green-600 font-medium mt-2">From $300/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Luxury</Badge>
                  <h4 className="font-bold">Lower Manhattan</h4>
                  <p className="text-slate-600 text-sm">World-class hotels near Financial District, SoHo, Tribeca. Premium experience.</p>
                  <p className="text-green-600 font-medium mt-2">From $500/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Stadium Adjacent</Badge>
                  <h4 className="font-bold">Secaucus / Jersey City</h4>
                  <p className="text-slate-600 text-sm">Stay in NJ near the stadium. Easier match day logistics, great Manhattan access via PATH train.</p>
                  <p className="text-green-600 font-medium mt-2">From $200/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Statue of Liberty</h4>
                  <p className="text-slate-600 text-sm">Iconic symbol of freedom. Book ferry tickets in advance.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Times Square</h4>
                  <p className="text-slate-600 text-sm">The crossroads of the world. Bright lights and Broadway shows.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Central Park</h4>
                  <p className="text-slate-600 text-sm">843 acres of green space in Manhattan's heart.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Empire State Building</h4>
                  <p className="text-slate-600 text-sm">Iconic skyscraper with observation deck views.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Brooklyn Bridge</h4>
                  <p className="text-slate-600 text-sm">Walk across this historic landmark for amazing views.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">9/11 Memorial</h4>
                  <p className="text-slate-600 text-sm">Moving tribute at the World Trade Center site.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card><CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">NYC Classics</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pizza (Joe's Pizza, Di Fara, Prince Street)</li>
                      <li>• Bagels (Russ & Daughters, Ess-a-Bagel)</li>
                      <li>• Pastrami (Katz's Delicatessen)</li>
                      <li>• Hot Dogs (Gray's Papaya, Nathan's)</li>
                      <li>• Cheesecake (Junior's Brooklyn)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Global Cuisine</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Chinatown (Dim Sum, Noodles)</li>
                      <li>• Little Italy (Pasta, Cannoli)</li>
                      <li>• Jackson Heights (Indian, Nepali)</li>
                      <li>• Koreatown (BBQ, Late-night)</li>
                      <li>• East Village (Japanese, Ramen)</li>
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
                  <li>• <strong>Arrive 3+ hours early</strong> for the Final - expect massive crowds</li>
                  <li>• <strong>Use NJ Transit</strong> - driving will be extremely difficult</li>
                  <li>• <strong>Book accommodation early</strong> - NYC hotels will sell out for the Final</li>
                  <li>• <strong>Download NJ Transit app</strong> for real-time train schedules</li>
                  <li>• <strong>Bring layers</strong> - July evenings can be humid but stadiums are air-conditioned</li>
                  <li>• <strong>Stay hydrated</strong> - summer in NYC can be hot and humid</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Budget meal</span>
                  <span className="font-medium">$15-25</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Restaurant dinner</span>
                  <span className="font-medium">$50-100</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Subway ride</span>
                  <span className="font-medium">$2.90</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Beer at bar</span>
                  <span className="font-medium">$8-12</span>
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
                <p><strong>Language:</strong> English</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> EDT (UTC-4)</p>
                <p><strong>Tipping:</strong> 18-20% expected</p>
                <p><strong>Tap Water:</strong> Safe to drink</p>
                <p><strong>Voltage:</strong> 120V (Type A/B plugs)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Matches at MetLife</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/fixtures/final-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50 border-l-4 border-yellow-500">
                  <span className="font-bold">FINAL</span>
                  <Badge className="ml-auto text-xs">July 19</Badge>
                </Link>
                <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                  <span>Semi-Final</span>
                  <Badge className="ml-auto text-xs">July 15</Badge>
                </Link>
                <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline mt-2 block">View all MetLife matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other US Cities</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/los-angeles-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Los Angeles</Link>
                <Link href="/travel/miami-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Miami</Link>
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Dallas</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
