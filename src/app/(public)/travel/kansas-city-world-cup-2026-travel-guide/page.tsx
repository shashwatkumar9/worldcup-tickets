import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Car, Hotel, Utensils, Camera, Flame, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Kansas City World Cup 2026 Travel Guide | Missouri",
  description: "Complete travel guide for FIFA World Cup 2026 in Kansas City. BBQ capital, passionate fans, and Arrowhead Stadium!",
  keywords: ["Kansas City World Cup 2026", "Kansas City World Cup travel", "Arrowhead Stadium guide", "Missouri World Cup", "FIFA 2026 KC"]
}

export default function KansasCityTravelGuidePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <Badge className="bg-red-600 text-white mb-4">MISSOURI</Badge>
          <h1 className="text-5xl font-bold text-white">Kansas City</h1>
          <p className="mt-2 text-xl text-white/80 flex items-center gap-2"><MapPin className="h-5 w-5" />United States</p>
          <p className="mt-4 text-white/90 max-w-2xl">The BBQ capital of the world and Soccer Capital of America! Kansas City brings incredible food, legendary tailgating, and the loudest stadium on Earth to World Cup 2026.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            <Card className="border-red-400 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-xl text-red-900">Soccer Capital of America</h3>
                </div>
                <p className="text-red-800">Kansas City has been called the "Soccer Capital of America" - home to Sporting KC and their incredible fanbase. Arrowhead Stadium holds the Guinness World Record for loudest crowd roar (142.2 dB)! The Chiefs Kingdom will bring unmatched energy to World Cup 2026.</p>
                <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets">
                  <Button className="mt-4 bg-red-600 hover:bg-red-700">View Arrowhead Stadium</Button>
                </Link>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Plane className="h-6 w-6" />Getting There</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-2">Kansas City International (MCI) - new terminal opened 2023!</p>
                  <p className="text-slate-600 text-sm">About 25 minutes from downtown.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <h4 className="font-bold mb-2">From MCI Airport</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Uber/Lyft</strong> - $35-45 to downtown</li>
                    <li>• <strong>Rental Car</strong> - Recommended for KC</li>
                    <li>• <strong>Hotel Shuttles</strong> - Some hotels offer service</li>
                  </ul>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Car className="h-6 w-6" />Getting to Arrowhead Stadium</h2>
              <Card><CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-yellow-700">Limited Public Transit</h4>
                    <p className="text-slate-600 text-sm">KC doesn't have extensive transit to the stadium. Plan for driving, rideshare, or official shuttles.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700">Official Match Day Shuttles</h4>
                    <p className="text-slate-600 text-sm">FIFA will operate shuttle buses from downtown KC and Power & Light District. Check official transport page.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Rideshare</h4>
                    <p className="text-slate-600 text-sm">Uber/Lyft drop zones available. Expect surge pricing and waits post-match.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Driving & Tailgating</h4>
                    <p className="text-slate-600 text-sm">Stadium has massive parking lots. Arrive EARLY for legendary KC tailgating! Parking from $40-60.</p>
                  </div>
                </div>
              </CardContent></Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Hotel className="h-6 w-6" />Where to Stay</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card><CardContent className="p-4">
                  <Badge className="mb-2 bg-green-600">Entertainment Hub</Badge>
                  <h4 className="font-bold">Power & Light District</h4>
                  <p className="text-slate-600 text-sm">Downtown entertainment district. Bars, restaurants, likely shuttle hub.</p>
                  <p className="text-green-600 font-medium mt-2">From $150/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Historic</Badge>
                  <h4 className="font-bold">Country Club Plaza</h4>
                  <p className="text-slate-600 text-sm">Spanish-style outdoor shopping district. Upscale area with fountains.</p>
                  <p className="text-green-600 font-medium mt-2">From $180/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Trendy</Badge>
                  <h4 className="font-bold">Crossroads Arts District</h4>
                  <p className="text-slate-600 text-sm">Galleries, breweries, restaurants. First Friday art walks.</p>
                  <p className="text-green-600 font-medium mt-2">From $160/night</p>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <Badge className="mb-2">Stadium Area</Badge>
                  <h4 className="font-bold">Independence / East KC</h4>
                  <p className="text-slate-600 text-sm">Closer to Arrowhead. More affordable, easier stadium access.</p>
                  <p className="text-green-600 font-medium mt-2">From $100/night</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Camera className="h-6 w-6" />Must-See Attractions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">National WWI Museum</h4>
                  <p className="text-slate-600 text-sm">America's official WWI museum with stunning memorial tower.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Country Club Plaza</h4>
                  <p className="text-slate-600 text-sm">Historic outdoor shopping district with Spanish architecture.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Nelson-Atkins Museum</h4>
                  <p className="text-slate-600 text-sm">World-class art museum. Free admission!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">City of Fountains</h4>
                  <p className="text-slate-600 text-sm">KC has more fountains than any city except Rome!</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Jazz District</h4>
                  <p className="text-slate-600 text-sm">Historic 18th & Vine, American Jazz Museum.</p>
                </CardContent></Card>
                <Card><CardContent className="p-4 text-center">
                  <h4 className="font-bold">Union Station</h4>
                  <p className="text-slate-600 text-sm">Beautiful 1914 Beaux-Arts train station, Science City.</p>
                </CardContent></Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Utensils className="h-6 w-6" />Food & Drink</h2>
              <Card className="border-orange-400 bg-orange-50"><CardContent className="p-6">
                <h3 className="font-bold text-xl text-orange-900 mb-4">BBQ Capital of the World</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Legendary BBQ Joints</h4>
                    <ul className="text-orange-800 text-sm space-y-1">
                      <li>• <strong>Joe's Kansas City</strong> - Z-Man sandwich!</li>
                      <li>• <strong>Q39</strong> - Modern BBQ</li>
                      <li>• <strong>Gates BBQ</strong> - "Hi, may I help you?"</li>
                      <li>• <strong>Arthur Bryant's</strong> - Historic legend</li>
                      <li>• <strong>Slap's BBQ</strong> - Competition-style</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Beyond BBQ</h4>
                    <ul className="text-orange-800 text-sm space-y-1">
                      <li>• Kansas City-style tacos (many spots)</li>
                      <li>• Boulevard Brewing (KC's craft beer)</li>
                      <li>• Crossroads restaurants</li>
                      <li>• Power & Light dining</li>
                      <li>• Country Club Plaza cafes</li>
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
                  <li>• <strong>Arrive EARLY for tailgating</strong> - It's legendary at Arrowhead</li>
                  <li>• <strong>Eat BBQ before the match</strong> - You'll need the energy for cheering!</li>
                  <li>• <strong>Rent a car</strong> if possible - KC is spread out</li>
                  <li>• <strong>Prepare for heat</strong> - July in KC can be 95°F+ with humidity</li>
                  <li>• <strong>Do the tomahawk chop</strong> - It's a KC tradition (respectfully adapted)</li>
                  <li>• <strong>Stay in Power & Light</strong> for best nightlife and shuttle access</li>
                </ul>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5" />Cost Guide</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">BBQ plate</span>
                  <span className="font-medium">$18-25</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Burnt ends</span>
                  <span className="font-medium">$22-30</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Uber to stadium</span>
                  <span className="font-medium">$30-45</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">WWI Museum</span>
                  <span className="font-medium">$18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily budget</span>
                  <span className="font-medium text-green-600">$100-180</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Weather:</strong> Hot & humid, 90-100°F</p>
                <p><strong>Currency:</strong> USD ($)</p>
                <p><strong>Time Zone:</strong> CDT (UTC-5)</p>
                <p><strong>Transit:</strong> Limited, car recommended</p>
                <p><strong>Nickname:</strong> City of Fountains</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Arrowhead Stadium</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">World's loudest stadium! Home of 3x Super Bowl champion Chiefs.</p>
                <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-green-600 text-sm hover:underline block mt-2">View all stadium matches →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Other Midwest</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Link href="/travel/dallas-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Dallas<Badge className="ml-auto text-xs">5 hours</Badge></Link>
                <Link href="/travel/houston-world-cup-2026-travel-guide" className="flex items-center gap-2 p-2 rounded hover:bg-slate-50"><MapPin className="h-4 w-4" />Houston</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
