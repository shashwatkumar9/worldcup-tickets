import { Metadata } from "next"
import Link from "next/link"
import { Trophy, MapPin, Calendar, Users, Star, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Teams Tickets | All 48 Qualified Teams",
  description: "Secure FIFA World Cup 2026 Teams Tickets for all 48 participating nations. From USA, Mexico, Brazil, Argentina to all qualified teams. Official tickets available now.",
  keywords: "FIFA World Cup 2026 Teams Tickets, World Cup Teams Tickets, FIFA 2026 Teams, World Cup Qualified Teams, Team Tickets 2026",
  openGraph: {
    title: "FIFA World Cup 2026 Teams Tickets | All 48 Qualified Teams",
    description: "Get tickets for your favorite team at FIFA World Cup 2026. All 48 teams, all matches.",
    type: "website",
  },
}

// All qualified teams organized by confederation
const teams = {
  CONCACAF: [
    { name: "United States", slug: "usa-world-cup-2026-tickets", flag: "🇺🇸", status: "Host Nation", ranking: "#14" },
    { name: "Mexico", slug: "mexico-world-cup-2026-tickets", flag: "🇲🇽", status: "Host Nation", ranking: "#15" },
    { name: "Canada", slug: "canada-world-cup-2026-tickets", flag: "🇨🇦", status: "Host Nation", ranking: "#27" },
    { name: "Panama", slug: "panama-world-cup-2026-tickets", flag: "🇵🇦", status: "Qualified", ranking: "#30" },
    { name: "Haiti", slug: "haiti-world-cup-2026-tickets", flag: "🇭🇹", status: "Qualified", ranking: "#84" },
    { name: "Curaçao", slug: "curacao-world-cup-2026-tickets", flag: "🇨🇼", status: "Debut", ranking: "#82" },
  ],
  CONMEBOL: [
    { name: "Argentina", slug: "argentina-world-cup-2026-tickets", flag: "🇦🇷", status: "Champion", ranking: "#2" },
    { name: "Brazil", slug: "brazil-world-cup-2026-tickets", flag: "🇧🇷", status: "5x Champion", ranking: "#5" },
    { name: "Colombia", slug: "colombia-world-cup-2026-tickets", flag: "🇨🇴", status: "Qualified", ranking: "#13" },
    { name: "Uruguay", slug: "uruguay-world-cup-2026-tickets", flag: "🇺🇾", status: "2x Champion", ranking: "#16" },
    { name: "Ecuador", slug: "ecuador-world-cup-2026-tickets", flag: "🇪🇨", status: "Qualified", ranking: "#23" },
    { name: "Paraguay", slug: "paraguay-world-cup-2026-tickets", flag: "🇵🇾", status: "Qualified", ranking: "#39" },
  ],
  UEFA: [
    { name: "Spain", slug: "spain-world-cup-2026-tickets", flag: "🇪🇸", status: "Champion", ranking: "#1" },
    { name: "France", slug: "france-world-cup-2026-tickets", flag: "🇫🇷", status: "2x Champion", ranking: "#3" },
    { name: "England", slug: "england-world-cup-2026-tickets", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", status: "Champion", ranking: "#4" },
    { name: "Portugal", slug: "portugal-world-cup-2026-tickets", flag: "🇵🇹", status: "Qualified", ranking: "#6" },
    { name: "Netherlands", slug: "netherlands-world-cup-2026-tickets", flag: "🇳🇱", status: "Qualified", ranking: "#7" },
    { name: "Belgium", slug: "belgium-world-cup-2026-tickets", flag: "🇧🇪", status: "Qualified", ranking: "#8" },
    { name: "Germany", slug: "germany-world-cup-2026-tickets", flag: "🇩🇪", status: "4x Champion", ranking: "#9" },
    { name: "Croatia", slug: "croatia-world-cup-2026-tickets", flag: "🇭🇷", status: "Qualified", ranking: "#10" },
    { name: "Switzerland", slug: "switzerland-world-cup-2026-tickets", flag: "🇨🇭", status: "Qualified", ranking: "#17" },
    { name: "Austria", slug: "austria-world-cup-2026-tickets", flag: "🇦🇹", status: "Qualified", ranking: "#24" },
    { name: "Norway", slug: "norway-world-cup-2026-tickets", flag: "🇳🇴", status: "Qualified", ranking: "#29" },
    { name: "Scotland", slug: "scotland-world-cup-2026-tickets", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", status: "Qualified", ranking: "#36" },
  ],
  CAF: [
    { name: "Morocco", slug: "morocco-world-cup-2026-tickets", flag: "🇲🇦", status: "Semi-Finalist", ranking: "#11" },
    { name: "Senegal", slug: "senegal-world-cup-2026-tickets", flag: "🇸🇳", status: "Qualified", ranking: "#19" },
    { name: "Egypt", slug: "egypt-world-cup-2026-tickets", flag: "🇪🇬", status: "Qualified", ranking: "#34" },
    { name: "Algeria", slug: "algeria-world-cup-2026-tickets", flag: "🇩🇿", status: "Qualified", ranking: "#35" },
    { name: "Tunisia", slug: "tunisia-world-cup-2026-tickets", flag: "🇹🇳", status: "Qualified", ranking: "#40" },
    { name: "Ivory Coast", slug: "ivory-coast-world-cup-2026-tickets", flag: "🇨🇮", status: "Qualified", ranking: "#42" },
    { name: "South Africa", slug: "south-africa-world-cup-2026-tickets", flag: "🇿🇦", status: "Qualified", ranking: "#61" },
    { name: "Cape Verde", slug: "cape-verde-world-cup-2026-tickets", flag: "🇨🇻", status: "Debut", ranking: "#68" },
    { name: "Ghana", slug: "ghana-world-cup-2026-tickets", flag: "🇬🇭", status: "Qualified", ranking: "#72" },
  ],
  AFC: [
    { name: "Japan", slug: "japan-world-cup-2026-tickets", flag: "🇯🇵", status: "Qualified", ranking: "#18" },
    { name: "Iran", slug: "iran-world-cup-2026-tickets", flag: "🇮🇷", status: "Qualified", ranking: "#20" },
    { name: "South Korea", slug: "south-korea-world-cup-2026-tickets", flag: "🇰🇷", status: "Qualified", ranking: "#22" },
    { name: "Australia", slug: "australia-world-cup-2026-tickets", flag: "🇦🇺", status: "Qualified", ranking: "#26" },
    { name: "Uzbekistan", slug: "uzbekistan-world-cup-2026-tickets", flag: "🇺🇿", status: "Debut", ranking: "#50" },
    { name: "Qatar", slug: "qatar-world-cup-2026-tickets", flag: "🇶🇦", status: "Host 2022", ranking: "#51" },
    { name: "Saudi Arabia", slug: "saudi-arabia-world-cup-2026-tickets", flag: "🇸🇦", status: "Qualified", ranking: "#60" },
    { name: "Jordan", slug: "jordan-world-cup-2026-tickets", flag: "🇯🇴", status: "Debut", ranking: "#66" },
  ],
  OFC: [
    { name: "New Zealand", slug: "new-zealand-world-cup-2026-tickets", flag: "🇳🇿", status: "Qualified", ranking: "#86" },
  ],
}

const confederationNames = {
  CONCACAF: "North, Central America & Caribbean",
  CONMEBOL: "South America",
  UEFA: "Europe",
  CAF: "Africa",
  AFC: "Asia",
  OFC: "Oceania",
}

export default function TeamsPage() {
  const totalTeams = Object.values(teams).flat().length

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stadium-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Trophy className="h-12 w-12 text-yellow-400" />
              <Globe className="h-10 w-10 text-blue-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              FIFA World Cup 2026 Teams Tickets
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              All {totalTeams} Qualified Teams | Your Complete Guide to Team Tickets
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-5 w-5" />
                <span>{totalTeams} Teams Qualified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5" />
                <span>16 Stadiums</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5" />
                <span>June 11 - July 19, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm text-slate-600">CONCACAF</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">6</div>
              <div className="text-sm text-slate-600">CONMEBOL</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">12</div>
              <div className="text-sm text-slate-600">UEFA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">9</div>
              <div className="text-sm text-slate-600">CAF</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">8</div>
              <div className="text-sm text-slate-600">AFC</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">1</div>
              <div className="text-sm text-slate-600">OFC</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Teams Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Browse All FIFA World Cup 2026 Teams
              </h2>
              <p className="text-xl text-slate-600">
                Find tickets for every team competing in the biggest tournament in football
              </p>
            </div>

            {Object.entries(teams).map(([confederation, teamList]) => (
              <div key={confederation} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 ${
                    confederation === 'UEFA' ? 'bg-indigo-600' :
                    confederation === 'CONMEBOL' ? 'bg-green-600' :
                    confederation === 'CAF' ? 'bg-orange-600' :
                    confederation === 'AFC' ? 'bg-red-600' :
                    confederation === 'CONCACAF' ? 'bg-blue-600' :
                    'bg-cyan-600'
                  }`}></div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{confederation}</h3>
                    <p className="text-sm text-slate-600">{confederationNames[confederation as keyof typeof confederationNames]} ({teamList.length} teams)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {teamList.map((team) => (
                    <Link
                      key={team.slug}
                      href={`/teams/${team.slug}`}
                      className="group relative bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{team.flag}</div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                            {team.name}
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              team.status.includes('Host') ? 'bg-blue-100 text-blue-700' :
                              team.status.includes('Champion') ? 'bg-yellow-100 text-yellow-700' :
                              team.status.includes('Debut') ? 'bg-green-100 text-green-700' :
                              team.status.includes('Semi') ? 'bg-purple-100 text-purple-700' :
                              'bg-slate-100 text-slate-700'
                            }`}>
                              {team.status}
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                              FIFA {team.ranking}
                            </span>
                          </div>
                          <div className="text-sm text-blue-600 group-hover:text-blue-700 font-medium">
                            View Team Tickets →
                          </div>
                        </div>
                      </div>
                      {(team.status.includes('Host') || team.status.includes('Champion')) && (
                        <div className="absolute top-3 right-3">
                          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                FIFA World Cup 2026 Teams Tickets: Your Complete Guide
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The <strong>FIFA World Cup 2026 Teams Tickets</strong> offer fans an unprecedented opportunity to witness history as 48 nations compete across the United States, Mexico, and Canada. With the tournament expanding from 32 to 48 teams for the first time, this World Cup promises more matches, more excitement, and more chances to support your favorite national team.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                Host Nations: The Stars of FIFA World Cup 2026
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                Three nations share hosting duties for the first time in World Cup history. The <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:text-blue-700 font-medium">United States World Cup 2026 Tickets</Link> are among the most sought-after, with the USMNT playing multiple matches across iconic American stadiums. <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-600 hover:text-blue-700 font-medium">Mexico World Cup 2026 Tickets</Link> offer fans the chance to witness El Tri at the legendary Estadio Azteca, while <Link href="/teams/canada-world-cup-2026-tickets" className="text-blue-600 hover:text-blue-700 font-medium">Canada World Cup 2026 Tickets</Link> mark the nation's return to football's biggest stage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                South American Giants: Champions Return
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                The CONMEBOL confederation brings football royalty to North America. <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:text-blue-700 font-medium">Argentina World Cup 2026 Tickets</Link> give fans the opportunity to see the defending champions defend their crown, while <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-600 hover:text-blue-700 font-medium">Brazil World Cup 2026 Tickets</Link> remain eternally popular as the five-time champions seek their sixth star. Uruguay, Ecuador, Colombia, and Paraguay round out South America's formidable contingent.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                European Powerhouses: UEFA's Elite Dozen
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                Europe sends its strongest ever World Cup squad with 12 qualified teams. <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-600 hover:text-blue-700 font-medium">England World Cup 2026 Tickets</Link> and <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-600 hover:text-blue-700 font-medium">France World Cup 2026 Tickets</Link> are perennial favorites, while <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-600 hover:text-blue-700 font-medium">Germany World Cup 2026 Tickets</Link> offer fans the chance to witness four-time champions. Spain, Portugal, Netherlands, Belgium, and Croatia complete UEFA's star-studded lineup.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                African Excellence: CAF's Finest Nine
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                Africa's representation includes 2022 semi-finalists Morocco, whose incredible run captured global attention. The continent's diversity shines through qualified teams including Senegal, Egypt, Algeria, Tunisia, Ivory Coast, South Africa, Ghana, and World Cup debutants Cape Verde. African teams have consistently provided tournament surprises and unforgettable moments.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                Asian Representatives: AFC's Rising Stars
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                Asia sends eight teams to 2026, including traditional powers Japan, South Korea, Iran, and Australia. Qatar returns after hosting the 2022 edition, while Saudi Arabia continues to invest heavily in football development. World Cup debutants Uzbekistan and Jordan represent Central and West Asia's growing football ambitions.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                How to Buy FIFA World Cup 2026 Teams Tickets
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                Securing tickets for your favorite team requires strategic planning. Official FIFA ticket sales occur in phases, with team-specific allocations varying by match importance. Group stage matches offer the most accessible entry points, while knockout rounds become increasingly competitive. Fans can purchase tickets for specific teams through:
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
                <li><strong>Team Supporter Packages:</strong> Follow specific teams throughout the tournament</li>
                <li><strong>Individual Match Tickets:</strong> Select specific team fixtures</li>
                <li><strong>Venue-Based Packages:</strong> Attend all matches at a particular stadium</li>
                <li><strong>Hospitality Tickets:</strong> Premium experiences with guaranteed seats</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                Ticket Categories and Pricing
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                FIFA World Cup 2026 Teams Tickets are categorized by seating location and match significance. Category 1 tickets offer premium views along the sidelines, while Category 4 provides accessible pricing for behind-the-goal seats. Prices range from $50 for group stage matches to several thousand dollars for final tickets. Popular teams like Brazil, Argentina, England, and the host nations command premium prices even in early rounds.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                Planning Your Team Following Journey
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                Following a team throughout the World Cup requires careful planning across multiple cities and venues. The 2026 format spreads matches across 16 stadiums in 16 cities, meaning teams will travel extensively during group play. Fans should consider accommodation, transportation, and ticket availability when planning multi-match attendance.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                World Cup Debutants: New Football Nations
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                FIFA World Cup 2026 welcomes four nations to their first-ever World Cup: Cape Verde, Curaçao, Jordan, and Uzbekistan. These teams bring fresh storylines and passionate fan bases to the tournament. Attending a debut nation's first World Cup match offers a unique opportunity to witness football history.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                Frequently Asked Questions
              </h3>

              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">How many teams will participate in FIFA World Cup 2026?</h4>
                  <p className="text-slate-700">
                    48 teams will compete in FIFA World Cup 2026, expanded from 32 teams in previous tournaments. This includes 42 confirmed qualifiers and 6 playoff spots.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Which teams are automatically qualified as hosts?</h4>
                  <p className="text-slate-700">
                    The United States, Mexico, and Canada are automatically qualified as the three host nations for FIFA World Cup 2026.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Can I buy tickets for multiple teams?</h4>
                  <p className="text-slate-700">
                    Yes, FIFA allows fans to purchase tickets for different teams and matches. You can follow multiple teams throughout the tournament by securing individual match tickets.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">When do team-specific tickets go on sale?</h4>
                  <p className="text-slate-700">
                    Team-specific tickets become available once the final draw determines match schedules. FIFA typically opens sales in phases starting 12-18 months before the tournament.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">What are the most popular team tickets?</h4>
                  <p className="text-slate-700">
                    Brazil, Argentina, USA, Mexico, England, Germany, France, and Spain consistently have the highest ticket demand due to their large fan bases and competitive squads.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Do ticket prices vary by team?</h4>
                  <p className="text-slate-700">
                    Yes, tickets for matches involving popular teams or host nations typically command higher prices in the secondary market, though FIFA sets fixed prices for primary sales.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Can I get refunds if my team doesn't advance?</h4>
                  <p className="text-slate-700">
                    Knockout round tickets are sold based on match position (Winner Group A vs Runner-up Group B), not specific teams. If you purchase group stage tickets and your team is eliminated, those tickets are generally non-refundable.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">What teams are making their World Cup debut in 2026?</h4>
                  <p className="text-slate-700">
                    Cape Verde, Curaçao, Jordan, and Uzbekistan will all participate in their first-ever FIFA World Cup in 2026.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">How are teams distributed across the tournament?</h4>
                  <p className="text-slate-700">
                    The 48 teams are divided into 12 groups of 4 teams each. The top 2 from each group plus the 8 best third-place teams advance to the Round of 32.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Where can I find the complete team fixture schedule?</h4>
                  <p className="text-slate-700">
                    Complete team schedules are available on the official FIFA website and team-specific ticket pages. The final draw determines exact match dates and venues for each team.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Secure Your Team Tickets?</h3>
                <p className="text-slate-700 mb-4">
                  Don't miss your chance to support your national team at the biggest football tournament in history. Browse all qualified teams above and secure your FIFA World Cup 2026 Teams Tickets today.
                </p>
                <Link
                  href="/fifa-world-cup-2026-tickets"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View All Tournament Tickets
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
