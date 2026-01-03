import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Ticket,
  ExternalLink,
  ChevronRight,
  Star,
  Users,
  Trophy,
  Globe,
  Clock,
  Flag,
  Plane,
} from "lucide-react"

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Tickets | Full Schedule - All 104 Matches",
  description:
    "Buy FIFA World Cup 2026 tickets. Complete schedule of all 104 matches with dates, times (CET), and venues. 48-team World Cup hosted by USA, Mexico & Canada.",
  keywords: [
    "FIFA World Cup 2026 tickets",
    "World Cup 2026 schedule",
    "World Cup 2026 fixtures",
    "USA World Cup tickets",
    "Mexico World Cup tickets",
    "Canada World Cup tickets",
    "World Cup Final tickets",
  ],
}

const tournamentStats = [
  { label: "Teams", value: "48", icon: Users },
  { label: "Matches", value: "104", icon: Trophy },
  { label: "Venues", value: "16", icon: MapPin },
  { label: "Host Countries", value: "3", icon: Globe },
  { label: "Duration", value: "39 Days", icon: Calendar },
  { label: "Cities", value: "16", icon: Flag },
]

// Complete Group Stage Schedule - 72 Matches
const groupStageMatches = [
  // Day 1 - June 11, 2026
  { match: 1, date: "June 11, 2026", time: "18:00 CET", home: "Mexico", away: "South Africa", venue: "Estadio Azteca", city: "Mexico City", group: "A", slug: "mexico-vs-south-africa-world-cup-2026-tickets" },

  // Day 2 - June 12, 2026
  { match: 2, date: "June 12, 2026", time: "00:00 CET", home: "USA", away: "Paraguay", venue: "SoFi Stadium", city: "Los Angeles", group: "D", slug: "usa-vs-paraguay-world-cup-2026-tickets" },
  { match: 3, date: "June 12, 2026", time: "03:00 CET", home: "Canada", away: "TBD", venue: "BMO Field", city: "Toronto", group: "B", slug: "canada-vs-tbd-world-cup-2026-tickets" },
  { match: 4, date: "June 12, 2026", time: "18:00 CET", home: "Korea Republic", away: "TBD", venue: "Estadio BBVA", city: "Monterrey", group: "A", slug: "korea-vs-tbd-world-cup-2026-tickets" },
  { match: 5, date: "June 12, 2026", time: "21:00 CET", home: "Qatar", away: "Switzerland", venue: "BC Place", city: "Vancouver", group: "B", slug: "qatar-vs-switzerland-world-cup-2026-tickets" },

  // Day 3 - June 13, 2026
  { match: 6, date: "June 13, 2026", time: "00:00 CET", home: "Australia", away: "TBD", venue: "AT&T Stadium", city: "Dallas", group: "D", slug: "australia-vs-tbd-world-cup-2026-tickets" },
  { match: 7, date: "June 13, 2026", time: "18:00 CET", home: "Brazil", away: "Morocco", venue: "Lincoln Financial Field", city: "Philadelphia", group: "C", slug: "brazil-vs-morocco-world-cup-2026-tickets" },
  { match: 8, date: "June 13, 2026", time: "21:00 CET", home: "Germany", away: "Curacao", venue: "Mercedes-Benz Stadium", city: "Atlanta", group: "E", slug: "germany-vs-curacao-world-cup-2026-tickets" },

  // Day 4 - June 14, 2026
  { match: 9, date: "June 14, 2026", time: "00:00 CET", home: "Haiti", away: "Scotland", venue: "Hard Rock Stadium", city: "Miami", group: "C", slug: "haiti-vs-scotland-world-cup-2026-tickets" },
  { match: 10, date: "June 14, 2026", time: "03:00 CET", home: "Ivory Coast", away: "Ecuador", venue: "NRG Stadium", city: "Houston", group: "E", slug: "ivory-coast-vs-ecuador-world-cup-2026-tickets" },
  { match: 11, date: "June 14, 2026", time: "18:00 CET", home: "Netherlands", away: "Japan", venue: "Gillette Stadium", city: "Boston", group: "F", slug: "netherlands-vs-japan-world-cup-2026-tickets" },
  { match: 12, date: "June 14, 2026", time: "21:00 CET", home: "Belgium", away: "Egypt", venue: "Lumen Field", city: "Seattle", group: "G", slug: "belgium-vs-egypt-world-cup-2026-tickets" },

  // Day 5 - June 15, 2026
  { match: 13, date: "June 15, 2026", time: "00:00 CET", home: "TBD", away: "Tunisia", venue: "Arrowhead Stadium", city: "Kansas City", group: "F", slug: "tbd-vs-tunisia-world-cup-2026-tickets" },
  { match: 14, date: "June 15, 2026", time: "03:00 CET", home: "Iran", away: "New Zealand", venue: "Levi's Stadium", city: "San Francisco", group: "G", slug: "iran-vs-new-zealand-world-cup-2026-tickets" },
  { match: 15, date: "June 15, 2026", time: "18:00 CET", home: "Spain", away: "Cape Verde", venue: "AT&T Stadium", city: "Dallas", group: "H", slug: "spain-vs-cape-verde-world-cup-2026-tickets" },
  { match: 16, date: "June 15, 2026", time: "21:00 CET", home: "France", away: "Senegal", venue: "MetLife Stadium", city: "New York/NJ", group: "I", slug: "france-vs-senegal-world-cup-2026-tickets" },

  // Day 6 - June 16, 2026
  { match: 17, date: "June 16, 2026", time: "00:00 CET", home: "Saudi Arabia", away: "Uruguay", venue: "SoFi Stadium", city: "Los Angeles", group: "H", slug: "saudi-arabia-vs-uruguay-world-cup-2026-tickets" },
  { match: 18, date: "June 16, 2026", time: "03:00 CET", home: "TBD", away: "Norway", venue: "Lincoln Financial Field", city: "Philadelphia", group: "I", slug: "tbd-vs-norway-world-cup-2026-tickets" },
  { match: 19, date: "June 16, 2026", time: "18:00 CET", home: "Argentina", away: "Algeria", venue: "Hard Rock Stadium", city: "Miami", group: "J", slug: "argentina-vs-algeria-world-cup-2026-tickets" },
  { match: 20, date: "June 16, 2026", time: "21:00 CET", home: "Portugal", away: "Colombia", venue: "Mercedes-Benz Stadium", city: "Atlanta", group: "K", slug: "portugal-vs-colombia-world-cup-2026-tickets" },

  // Day 7 - June 17, 2026
  { match: 21, date: "June 17, 2026", time: "00:00 CET", home: "Austria", away: "Jordan", venue: "Estadio Akron", city: "Guadalajara", group: "J", slug: "austria-vs-jordan-world-cup-2026-tickets" },
  { match: 22, date: "June 17, 2026", time: "03:00 CET", home: "Uzbekistan", away: "TBD", venue: "BC Place", city: "Vancouver", group: "K", slug: "uzbekistan-vs-tbd-world-cup-2026-tickets" },
  { match: 23, date: "June 17, 2026", time: "18:00 CET", home: "England", away: "Ghana", venue: "NRG Stadium", city: "Houston", group: "L", slug: "england-vs-ghana-world-cup-2026-tickets" },
  { match: 24, date: "June 17, 2026", time: "21:00 CET", home: "Panama", away: "Croatia", venue: "Estadio Azteca", city: "Mexico City", group: "L", slug: "panama-vs-croatia-world-cup-2026-tickets" },

  // Day 8 - June 18, 2026 (Matchday 2 begins)
  { match: 25, date: "June 18, 2026", time: "18:00 CET", home: "Mexico", away: "Korea Republic", venue: "Estadio BBVA", city: "Monterrey", group: "A", slug: "mexico-vs-korea-world-cup-2026-tickets" },
  { match: 26, date: "June 18, 2026", time: "21:00 CET", home: "South Africa", away: "TBD", venue: "BMO Field", city: "Toronto", group: "A", slug: "south-africa-vs-tbd-world-cup-2026-tickets" },

  // Day 9 - June 19, 2026
  { match: 27, date: "June 19, 2026", time: "00:00 CET", home: "Canada", away: "Qatar", venue: "Gillette Stadium", city: "Boston", group: "B", slug: "canada-vs-qatar-world-cup-2026-tickets" },
  { match: 28, date: "June 19, 2026", time: "03:00 CET", home: "TBD", away: "Switzerland", venue: "Levi's Stadium", city: "San Francisco", group: "B", slug: "tbd-vs-switzerland-world-cup-2026-tickets" },
  { match: 29, date: "June 19, 2026", time: "18:00 CET", home: "Brazil", away: "Haiti", venue: "SoFi Stadium", city: "Los Angeles", group: "C", slug: "brazil-vs-haiti-world-cup-2026-tickets" },
  { match: 30, date: "June 19, 2026", time: "21:00 CET", home: "Morocco", away: "Scotland", venue: "AT&T Stadium", city: "Dallas", group: "C", slug: "morocco-vs-scotland-world-cup-2026-tickets" },

  // Day 10 - June 20, 2026
  { match: 31, date: "June 20, 2026", time: "00:00 CET", home: "USA", away: "Australia", venue: "MetLife Stadium", city: "New York/NJ", group: "D", slug: "usa-vs-australia-world-cup-2026-tickets" },
  { match: 32, date: "June 20, 2026", time: "03:00 CET", home: "Paraguay", away: "TBD", venue: "Arrowhead Stadium", city: "Kansas City", group: "D", slug: "paraguay-vs-tbd-world-cup-2026-tickets" },
  { match: 33, date: "June 20, 2026", time: "18:00 CET", home: "Germany", away: "Ivory Coast", venue: "Hard Rock Stadium", city: "Miami", group: "E", slug: "germany-vs-ivory-coast-world-cup-2026-tickets" },
  { match: 34, date: "June 20, 2026", time: "21:00 CET", home: "Curacao", away: "Ecuador", venue: "Estadio Akron", city: "Guadalajara", group: "E", slug: "curacao-vs-ecuador-world-cup-2026-tickets" },

  // Day 11 - June 21, 2026
  { match: 35, date: "June 21, 2026", time: "00:00 CET", home: "Netherlands", away: "TBD", venue: "Lincoln Financial Field", city: "Philadelphia", group: "F", slug: "netherlands-vs-tbd-world-cup-2026-tickets" },
  { match: 36, date: "June 21, 2026", time: "03:00 CET", home: "Japan", away: "Tunisia", venue: "NRG Stadium", city: "Houston", group: "F", slug: "japan-vs-tunisia-world-cup-2026-tickets" },
  { match: 37, date: "June 21, 2026", time: "18:00 CET", home: "Belgium", away: "Iran", venue: "Mercedes-Benz Stadium", city: "Atlanta", group: "G", slug: "belgium-vs-iran-world-cup-2026-tickets" },
  { match: 38, date: "June 21, 2026", time: "21:00 CET", home: "Egypt", away: "New Zealand", venue: "Lumen Field", city: "Seattle", group: "G", slug: "egypt-vs-new-zealand-world-cup-2026-tickets" },

  // Day 12 - June 22, 2026
  { match: 39, date: "June 22, 2026", time: "00:00 CET", home: "Spain", away: "Saudi Arabia", venue: "BC Place", city: "Vancouver", group: "H", slug: "spain-vs-saudi-arabia-world-cup-2026-tickets" },
  { match: 40, date: "June 22, 2026", time: "03:00 CET", home: "Cape Verde", away: "Uruguay", venue: "Estadio BBVA", city: "Monterrey", group: "H", slug: "cape-verde-vs-uruguay-world-cup-2026-tickets" },
  { match: 41, date: "June 22, 2026", time: "18:00 CET", home: "France", away: "TBD", venue: "AT&T Stadium", city: "Dallas", group: "I", slug: "france-vs-tbd-world-cup-2026-tickets" },
  { match: 42, date: "June 22, 2026", time: "21:00 CET", home: "Senegal", away: "Norway", venue: "Gillette Stadium", city: "Boston", group: "I", slug: "senegal-vs-norway-world-cup-2026-tickets" },

  // Day 13 - June 23, 2026
  { match: 43, date: "June 23, 2026", time: "00:00 CET", home: "Argentina", away: "Austria", venue: "SoFi Stadium", city: "Los Angeles", group: "J", slug: "argentina-vs-austria-world-cup-2026-tickets" },
  { match: 44, date: "June 23, 2026", time: "03:00 CET", home: "Algeria", away: "Jordan", venue: "Hard Rock Stadium", city: "Miami", group: "J", slug: "algeria-vs-jordan-world-cup-2026-tickets" },
  { match: 45, date: "June 23, 2026", time: "18:00 CET", home: "Portugal", away: "Uzbekistan", venue: "MetLife Stadium", city: "New York/NJ", group: "K", slug: "portugal-vs-uzbekistan-world-cup-2026-tickets" },
  { match: 46, date: "June 23, 2026", time: "21:00 CET", home: "Colombia", away: "TBD", venue: "Estadio Azteca", city: "Mexico City", group: "K", slug: "colombia-vs-tbd-world-cup-2026-tickets" },

  // Day 14 - June 24, 2026
  { match: 47, date: "June 24, 2026", time: "00:00 CET", home: "England", away: "Panama", venue: "NRG Stadium", city: "Houston", group: "L", slug: "england-vs-panama-world-cup-2026-tickets" },
  { match: 48, date: "June 24, 2026", time: "03:00 CET", home: "Ghana", away: "Croatia", venue: "Arrowhead Stadium", city: "Kansas City", group: "L", slug: "ghana-vs-croatia-world-cup-2026-tickets" },

  // Day 15-17 - June 25-27, 2026 (Matchday 3 - All group matches at same time)
  // Group A - June 25
  { match: 49, date: "June 25, 2026", time: "21:00 CET", home: "Mexico", away: "TBD", venue: "Estadio Azteca", city: "Mexico City", group: "A", slug: "mexico-vs-tbd-world-cup-2026-tickets" },
  { match: 50, date: "June 25, 2026", time: "21:00 CET", home: "South Africa", away: "Korea Republic", venue: "BMO Field", city: "Toronto", group: "A", slug: "south-africa-vs-korea-world-cup-2026-tickets" },

  // Group B - June 25
  { match: 51, date: "June 25, 2026", time: "18:00 CET", home: "Canada", away: "Switzerland", venue: "BC Place", city: "Vancouver", group: "B", slug: "canada-vs-switzerland-world-cup-2026-tickets" },
  { match: 52, date: "June 25, 2026", time: "18:00 CET", home: "TBD", away: "Qatar", venue: "Levi's Stadium", city: "San Francisco", group: "B", slug: "tbd-vs-qatar-world-cup-2026-tickets" },

  // Group C - June 25
  { match: 53, date: "June 25, 2026", time: "00:00 CET", home: "Brazil", away: "Scotland", venue: "SoFi Stadium", city: "Los Angeles", group: "C", slug: "brazil-vs-scotland-world-cup-2026-tickets" },
  { match: 54, date: "June 25, 2026", time: "00:00 CET", home: "Morocco", away: "Haiti", venue: "Lincoln Financial Field", city: "Philadelphia", group: "C", slug: "morocco-vs-haiti-world-cup-2026-tickets" },

  // Group D - June 26
  { match: 55, date: "June 26, 2026", time: "00:00 CET", home: "USA", away: "TBD", venue: "MetLife Stadium", city: "New York/NJ", group: "D", slug: "usa-vs-tbd-world-cup-2026-tickets" },
  { match: 56, date: "June 26, 2026", time: "00:00 CET", home: "Paraguay", away: "Australia", venue: "AT&T Stadium", city: "Dallas", group: "D", slug: "paraguay-vs-australia-world-cup-2026-tickets" },

  // Group E - June 26
  { match: 57, date: "June 26, 2026", time: "18:00 CET", home: "Germany", away: "Ecuador", venue: "Mercedes-Benz Stadium", city: "Atlanta", group: "E", slug: "germany-vs-ecuador-world-cup-2026-tickets" },
  { match: 58, date: "June 26, 2026", time: "18:00 CET", home: "Curacao", away: "Ivory Coast", venue: "Estadio Akron", city: "Guadalajara", group: "E", slug: "curacao-vs-ivory-coast-world-cup-2026-tickets" },

  // Group F - June 26
  { match: 59, date: "June 26, 2026", time: "21:00 CET", home: "Netherlands", away: "Tunisia", venue: "Hard Rock Stadium", city: "Miami", group: "F", slug: "netherlands-vs-tunisia-world-cup-2026-tickets" },
  { match: 60, date: "June 26, 2026", time: "21:00 CET", home: "Japan", away: "TBD", venue: "NRG Stadium", city: "Houston", group: "F", slug: "japan-vs-tbd-world-cup-2026-tickets" },

  // Group G - June 27
  { match: 61, date: "June 27, 2026", time: "00:00 CET", home: "Belgium", away: "New Zealand", venue: "Lumen Field", city: "Seattle", group: "G", slug: "belgium-vs-new-zealand-world-cup-2026-tickets" },
  { match: 62, date: "June 27, 2026", time: "00:00 CET", home: "Egypt", away: "Iran", venue: "Gillette Stadium", city: "Boston", group: "G", slug: "egypt-vs-iran-world-cup-2026-tickets" },

  // Group H - June 27
  { match: 63, date: "June 27, 2026", time: "18:00 CET", home: "Spain", away: "Uruguay", venue: "AT&T Stadium", city: "Dallas", group: "H", slug: "spain-vs-uruguay-world-cup-2026-tickets" },
  { match: 64, date: "June 27, 2026", time: "18:00 CET", home: "Saudi Arabia", away: "Cape Verde", venue: "Estadio BBVA", city: "Monterrey", group: "H", slug: "saudi-arabia-vs-cape-verde-world-cup-2026-tickets" },

  // Group I - June 27
  { match: 65, date: "June 27, 2026", time: "21:00 CET", home: "France", away: "Norway", venue: "MetLife Stadium", city: "New York/NJ", group: "I", slug: "france-vs-norway-world-cup-2026-tickets" },
  { match: 66, date: "June 27, 2026", time: "21:00 CET", home: "Senegal", away: "TBD", venue: "Lincoln Financial Field", city: "Philadelphia", group: "I", slug: "senegal-vs-tbd-world-cup-2026-tickets" },

  // Group J - June 27
  { match: 67, date: "June 27, 2026", time: "03:00 CET", home: "Argentina", away: "Jordan", venue: "SoFi Stadium", city: "Los Angeles", group: "J", slug: "argentina-vs-jordan-world-cup-2026-tickets" },
  { match: 68, date: "June 27, 2026", time: "03:00 CET", home: "Algeria", away: "Austria", venue: "Hard Rock Stadium", city: "Miami", group: "J", slug: "algeria-vs-austria-world-cup-2026-tickets" },

  // Group K - June 28
  { match: 69, date: "June 28, 2026", time: "00:00 CET", home: "Portugal", away: "TBD", venue: "Mercedes-Benz Stadium", city: "Atlanta", group: "K", slug: "portugal-vs-tbd-world-cup-2026-tickets" },
  { match: 70, date: "June 28, 2026", time: "00:00 CET", home: "Colombia", away: "Uzbekistan", venue: "Arrowhead Stadium", city: "Kansas City", group: "K", slug: "colombia-vs-uzbekistan-world-cup-2026-tickets" },

  // Group L - June 28
  { match: 71, date: "June 28, 2026", time: "03:00 CET", home: "England", away: "Croatia", venue: "NRG Stadium", city: "Houston", group: "L", slug: "england-vs-croatia-world-cup-2026-tickets" },
  { match: 72, date: "June 28, 2026", time: "03:00 CET", home: "Ghana", away: "Panama", venue: "Estadio Azteca", city: "Mexico City", group: "L", slug: "ghana-vs-panama-world-cup-2026-tickets" },
]

// Knockout Stage Matches - 32 Matches
const knockoutMatches = [
  // Round of 32 - June 28 - July 3, 2026 (16 matches)
  { match: 73, round: "Round of 32", game: 1, date: "June 28, 2026", time: "18:00 CET", venue: "SoFi Stadium", city: "Los Angeles", slug: "round-of-32-game-1-world-cup-2026-tickets" },
  { match: 74, round: "Round of 32", game: 2, date: "June 28, 2026", time: "21:00 CET", venue: "AT&T Stadium", city: "Dallas", slug: "round-of-32-game-2-world-cup-2026-tickets" },
  { match: 75, round: "Round of 32", game: 3, date: "June 29, 2026", time: "00:00 CET", venue: "MetLife Stadium", city: "New York/NJ", slug: "round-of-32-game-3-world-cup-2026-tickets" },
  { match: 76, round: "Round of 32", game: 4, date: "June 29, 2026", time: "03:00 CET", venue: "Hard Rock Stadium", city: "Miami", slug: "round-of-32-game-4-world-cup-2026-tickets" },
  { match: 77, round: "Round of 32", game: 5, date: "June 29, 2026", time: "18:00 CET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "round-of-32-game-5-world-cup-2026-tickets" },
  { match: 78, round: "Round of 32", game: 6, date: "June 29, 2026", time: "21:00 CET", venue: "Estadio Azteca", city: "Mexico City", slug: "round-of-32-game-6-world-cup-2026-tickets" },
  { match: 79, round: "Round of 32", game: 7, date: "June 30, 2026", time: "00:00 CET", venue: "NRG Stadium", city: "Houston", slug: "round-of-32-game-7-world-cup-2026-tickets" },
  { match: 80, round: "Round of 32", game: 8, date: "June 30, 2026", time: "03:00 CET", venue: "Lumen Field", city: "Seattle", slug: "round-of-32-game-8-world-cup-2026-tickets" },
  { match: 81, round: "Round of 32", game: 9, date: "June 30, 2026", time: "18:00 CET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "round-of-32-game-9-world-cup-2026-tickets" },
  { match: 82, round: "Round of 32", game: 10, date: "June 30, 2026", time: "21:00 CET", venue: "Gillette Stadium", city: "Boston", slug: "round-of-32-game-10-world-cup-2026-tickets" },
  { match: 83, round: "Round of 32", game: 11, date: "July 1, 2026", time: "00:00 CET", venue: "Levi's Stadium", city: "San Francisco", slug: "round-of-32-game-11-world-cup-2026-tickets" },
  { match: 84, round: "Round of 32", game: 12, date: "July 1, 2026", time: "03:00 CET", venue: "Arrowhead Stadium", city: "Kansas City", slug: "round-of-32-game-12-world-cup-2026-tickets" },
  { match: 85, round: "Round of 32", game: 13, date: "July 1, 2026", time: "18:00 CET", venue: "BC Place", city: "Vancouver", slug: "round-of-32-game-13-world-cup-2026-tickets" },
  { match: 86, round: "Round of 32", game: 14, date: "July 1, 2026", time: "21:00 CET", venue: "BMO Field", city: "Toronto", slug: "round-of-32-game-14-world-cup-2026-tickets" },
  { match: 87, round: "Round of 32", game: 15, date: "July 2, 2026", time: "00:00 CET", venue: "Estadio Akron", city: "Guadalajara", slug: "round-of-32-game-15-world-cup-2026-tickets" },
  { match: 88, round: "Round of 32", game: 16, date: "July 2, 2026", time: "03:00 CET", venue: "Estadio BBVA", city: "Monterrey", slug: "round-of-32-game-16-world-cup-2026-tickets" },

  // Round of 16 - July 4-7, 2026 (8 matches)
  { match: 89, round: "Round of 16", game: 1, date: "July 4, 2026", time: "18:00 CET", venue: "MetLife Stadium", city: "New York/NJ", slug: "round-of-16-game-1-world-cup-2026-tickets" },
  { match: 90, round: "Round of 16", game: 2, date: "July 4, 2026", time: "21:00 CET", venue: "SoFi Stadium", city: "Los Angeles", slug: "round-of-16-game-2-world-cup-2026-tickets" },
  { match: 91, round: "Round of 16", game: 3, date: "July 5, 2026", time: "00:00 CET", venue: "AT&T Stadium", city: "Dallas", slug: "round-of-16-game-3-world-cup-2026-tickets" },
  { match: 92, round: "Round of 16", game: 4, date: "July 5, 2026", time: "03:00 CET", venue: "Hard Rock Stadium", city: "Miami", slug: "round-of-16-game-4-world-cup-2026-tickets" },
  { match: 93, round: "Round of 16", game: 5, date: "July 5, 2026", time: "18:00 CET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "round-of-16-game-5-world-cup-2026-tickets" },
  { match: 94, round: "Round of 16", game: 6, date: "July 5, 2026", time: "21:00 CET", venue: "NRG Stadium", city: "Houston", slug: "round-of-16-game-6-world-cup-2026-tickets" },
  { match: 95, round: "Round of 16", game: 7, date: "July 6, 2026", time: "00:00 CET", venue: "Estadio Azteca", city: "Mexico City", slug: "round-of-16-game-7-world-cup-2026-tickets" },
  { match: 96, round: "Round of 16", game: 8, date: "July 6, 2026", time: "03:00 CET", venue: "Lincoln Financial Field", city: "Philadelphia", slug: "round-of-16-game-8-world-cup-2026-tickets" },

  // Quarter-Finals - July 9-11, 2026 (4 matches)
  { match: 97, round: "Quarter-Final", game: 1, date: "July 9, 2026", time: "18:00 CET", venue: "Gillette Stadium", city: "Boston", slug: "quarter-final-1-world-cup-2026-tickets" },
  { match: 98, round: "Quarter-Final", game: 2, date: "July 9, 2026", time: "21:00 CET", venue: "SoFi Stadium", city: "Los Angeles", slug: "quarter-final-2-world-cup-2026-tickets" },
  { match: 99, round: "Quarter-Final", game: 3, date: "July 10, 2026", time: "18:00 CET", venue: "Hard Rock Stadium", city: "Miami", slug: "quarter-final-3-world-cup-2026-tickets" },
  { match: 100, round: "Quarter-Final", game: 4, date: "July 10, 2026", time: "21:00 CET", venue: "Arrowhead Stadium", city: "Kansas City", slug: "quarter-final-4-world-cup-2026-tickets" },

  // Semi-Finals - July 14-15, 2026 (2 matches)
  { match: 101, round: "Semi-Final", game: 1, date: "July 14, 2026", time: "21:00 CET", venue: "AT&T Stadium", city: "Dallas", slug: "semi-final-1-world-cup-2026-tickets" },
  { match: 102, round: "Semi-Final", game: 2, date: "July 15, 2026", time: "21:00 CET", venue: "Mercedes-Benz Stadium", city: "Atlanta", slug: "semi-final-2-world-cup-2026-tickets" },

  // Third Place - July 18, 2026
  { match: 103, round: "Third Place Match", game: null, date: "July 18, 2026", time: "21:00 CET", venue: "Hard Rock Stadium", city: "Miami", slug: "third-place-world-cup-2026-tickets" },

  // Final - July 19, 2026
  { match: 104, round: "FINAL", game: null, date: "July 19, 2026", time: "21:00 CET", venue: "MetLife Stadium", city: "New York/NJ", slug: "final-world-cup-2026-tickets" },
]

const groups = [
  { name: "Group A", teams: ["Mexico", "South Africa", "Korea Republic", "TBD"], host: "Mexico" },
  { name: "Group B", teams: ["Canada", "TBD", "Qatar", "Switzerland"], host: "Canada" },
  { name: "Group C", teams: ["Brazil", "Morocco", "Haiti", "Scotland"], host: "East" },
  { name: "Group D", teams: ["United States", "Paraguay", "Australia", "TBD"], host: "West USA" },
  { name: "Group E", teams: ["Germany", "Curacao", "Ivory Coast", "Ecuador"], host: "Central" },
  { name: "Group F", teams: ["Netherlands", "Japan", "TBD", "Tunisia"], host: "Central" },
  { name: "Group G", teams: ["Belgium", "Egypt", "Iran", "New Zealand"], host: "West" },
  { name: "Group H", teams: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"], host: "Central" },
  { name: "Group I", teams: ["France", "Senegal", "TBD", "Norway"], host: "East" },
  { name: "Group J", teams: ["Argentina", "Algeria", "Austria", "Jordan"], host: "Central" },
  { name: "Group K", teams: ["Portugal", "Colombia", "Uzbekistan", "TBD"], host: "Central" },
  { name: "Group L", teams: ["England", "Ghana", "Panama", "Croatia"], host: "East" },
]

const affiliateLinks = [
  { partner: "Ticketmaster", price_from: 95, logo: "🎫", url: "#", rating: "Official Partner" },
  { partner: "StubHub", price_from: 120, logo: "🎟️", url: "#", rating: "Verified Reseller" },
  { partner: "Viagogo", price_from: 110, logo: "🎫", url: "#", rating: "Global Marketplace" },
  { partner: "SeatGeek", price_from: 105, logo: "🎟️", url: "#", rating: "Best Value" },
]

export default function WorldCup2026Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-red-900 to-green-900 py-20 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/competitions" className="hover:text-white">Competitions</Link>
            <ChevronRight className="h-4 w-4" />
            <span>FIFA World Cup 2026</span>
          </div>

          <div className="mt-8 max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-yellow-500 text-black">HISTORIC 48-TEAM FORMAT</Badge>
              <Badge variant="destructive">HOT</Badge>
            </div>

            <h1 className="text-4xl font-bold md:text-6xl">
              FIFA World Cup 2026™ Tickets
            </h1>

            <p className="mt-2 text-2xl text-slate-200">
              🇺🇸 United States • 🇲🇽 Mexico • 🇨🇦 Canada
            </p>

            <p className="mt-4 text-lg text-slate-300 max-w-2xl">
              The first World Cup with 48 teams. 104 matches across 16 cities in 3 countries.
              Experience football history from June 11 to July 19, 2026.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Tickets from $95
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="#full-schedule">View Full Schedule</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tournamentStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 mx-auto text-yellow-400 mb-2" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* FULL TOURNAMENT SCHEDULE */}
            <Card id="full-schedule">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Complete Tournament Schedule - All 104 Matches
                </CardTitle>
                <p className="text-slate-600 mt-2">Every match with date, time (CET), and venue. Click to buy tickets.</p>
              </CardHeader>
              <CardContent>
                {/* Group Stage Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Group Stage (72 Matches) - June 11-28, 2026
                  </h3>

                  {/* Group by Group */}
                  {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((groupLetter) => {
                    const groupMatches = groupStageMatches.filter(m => m.group === groupLetter)
                    const groupInfo = groups.find(g => g.name === `Group ${groupLetter}`)

                    return (
                      <div key={groupLetter} className="mb-6">
                        <Link href={`/fixtures/group-${groupLetter.toLowerCase()}-world-cup-2026-tickets`}>
                          <h4 className="font-bold text-blue-600 hover:underline mb-2 flex items-center gap-2">
                            Group {groupLetter}
                            <span className="text-sm font-normal text-slate-500">
                              ({groupInfo?.teams.join(" • ")})
                            </span>
                            <ChevronRight className="h-4 w-4" />
                          </h4>
                        </Link>
                        <div className="space-y-2 ml-4">
                          {groupMatches.map((match) => (
                            <Link
                              key={match.match}
                              href={`/fixtures/${match.slug}`}
                              className="flex items-center justify-between p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                            >
                              <div className="flex-1">
                                <span className="font-medium text-slate-900 group-hover:text-blue-600">
                                  {match.home} vs {match.away} World Cup 2026 Tickets
                                </span>
                                <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {match.date}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {match.time}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right text-sm">
                                <div className="flex items-center gap-1 text-slate-600">
                                  <MapPin className="h-3 w-3" />
                                  {match.venue}
                                </div>
                                <span className="text-slate-400">{match.city}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Knockout Stage Section */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                    Knockout Stage (32 Matches) - June 28 - July 19, 2026
                  </h3>

                  {/* Round of 32 */}
                  <div className="mb-6">
                    <Link href="/fixtures/round-of-32-world-cup-2026-tickets">
                      <h4 className="font-bold text-blue-600 hover:underline mb-2 flex items-center gap-2">
                        Round of 32 (16 Matches) - June 28 - July 2
                        <ChevronRight className="h-4 w-4" />
                      </h4>
                    </Link>
                    <div className="space-y-2 ml-4">
                      {knockoutMatches.filter(m => m.round === "Round of 32").map((match) => (
                        <Link
                          key={match.match}
                          href={`/fixtures/${match.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-slate-900 group-hover:text-blue-600">
                              Round of 32 Game {match.game} World Cup 2026 Tickets
                            </span>
                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {match.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {match.time}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="flex items-center gap-1 text-slate-600">
                              <MapPin className="h-3 w-3" />
                              {match.venue}
                            </div>
                            <span className="text-slate-400">{match.city}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Round of 16 */}
                  <div className="mb-6">
                    <Link href="/fixtures/round-of-16-world-cup-2026-tickets">
                      <h4 className="font-bold text-blue-600 hover:underline mb-2 flex items-center gap-2">
                        Round of 16 (8 Matches) - July 4-6
                        <ChevronRight className="h-4 w-4" />
                      </h4>
                    </Link>
                    <div className="space-y-2 ml-4">
                      {knockoutMatches.filter(m => m.round === "Round of 16").map((match) => (
                        <Link
                          key={match.match}
                          href={`/fixtures/${match.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-slate-900 group-hover:text-blue-600">
                              Round of 16 Game {match.game} World Cup 2026 Tickets
                            </span>
                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {match.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {match.time}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="flex items-center gap-1 text-slate-600">
                              <MapPin className="h-3 w-3" />
                              {match.venue}
                            </div>
                            <span className="text-slate-400">{match.city}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Quarter-Finals */}
                  <div className="mb-6">
                    <Link href="/fixtures/quarter-finals-world-cup-2026-tickets">
                      <h4 className="font-bold text-blue-600 hover:underline mb-2 flex items-center gap-2">
                        Quarter-Finals (4 Matches) - July 9-10
                        <ChevronRight className="h-4 w-4" />
                      </h4>
                    </Link>
                    <div className="space-y-2 ml-4">
                      {knockoutMatches.filter(m => m.round === "Quarter-Final").map((match) => (
                        <Link
                          key={match.match}
                          href={`/fixtures/${match.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-slate-900 group-hover:text-blue-600">
                              Quarter-Final {match.game} World Cup 2026 Tickets
                            </span>
                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {match.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {match.time}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="flex items-center gap-1 text-slate-600">
                              <MapPin className="h-3 w-3" />
                              {match.venue}
                            </div>
                            <span className="text-slate-400">{match.city}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Semi-Finals */}
                  <div className="mb-6">
                    <Link href="/fixtures/semi-finals-world-cup-2026-tickets">
                      <h4 className="font-bold text-blue-600 hover:underline mb-2 flex items-center gap-2">
                        Semi-Finals (2 Matches) - July 14-15
                        <ChevronRight className="h-4 w-4" />
                      </h4>
                    </Link>
                    <div className="space-y-2 ml-4">
                      {knockoutMatches.filter(m => m.round === "Semi-Final").map((match) => (
                        <Link
                          key={match.match}
                          href={`/fixtures/${match.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-purple-50 hover:border-purple-300 transition-colors group"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-slate-900 group-hover:text-purple-600">
                              Semi-Final {match.game} World Cup 2026 Tickets
                            </span>
                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {match.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {match.time}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="flex items-center gap-1 text-slate-600">
                              <MapPin className="h-3 w-3" />
                              {match.venue}
                            </div>
                            <span className="text-slate-400">{match.city}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Third Place */}
                  <div className="mb-6">
                    <Link href="/fixtures/third-place-world-cup-2026-tickets">
                      <h4 className="font-bold text-blue-600 hover:underline mb-2 flex items-center gap-2">
                        Third Place Match - July 18
                        <ChevronRight className="h-4 w-4" />
                      </h4>
                    </Link>
                    <div className="ml-4">
                      {knockoutMatches.filter(m => m.round === "Third Place Match").map((match) => (
                        <Link
                          key={match.match}
                          href={`/fixtures/${match.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-300 transition-colors group"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-slate-900 group-hover:text-orange-600">
                              Third Place Match World Cup 2026 Tickets
                            </span>
                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {match.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {match.time}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="flex items-center gap-1 text-slate-600">
                              <MapPin className="h-3 w-3" />
                              {match.venue}
                            </div>
                            <span className="text-slate-400">{match.city}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* FINAL */}
                  <div className="mb-6">
                    <Link href="/fixtures/final-world-cup-2026-tickets">
                      <h4 className="font-bold text-yellow-600 hover:underline mb-2 flex items-center gap-2 text-lg">
                        🏆 WORLD CUP FINAL - July 19
                        <ChevronRight className="h-4 w-4" />
                      </h4>
                    </Link>
                    <div className="ml-4">
                      {knockoutMatches.filter(m => m.round === "FINAL").map((match) => (
                        <Link
                          key={match.match}
                          href={`/fixtures/${match.slug}`}
                          className="flex items-center justify-between p-4 rounded-lg border-2 border-yellow-400 bg-yellow-50 hover:bg-yellow-100 transition-colors group"
                        >
                          <div className="flex-1">
                            <span className="font-bold text-yellow-800 group-hover:text-yellow-900 text-lg">
                              🏆 World Cup 2026 Final Tickets
                            </span>
                            <div className="flex items-center gap-4 mt-1 text-sm text-yellow-700">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {match.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {match.time}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="flex items-center gap-1 text-yellow-700 font-medium">
                              <MapPin className="h-3 w-3" />
                              {match.venue}
                            </div>
                            <span className="text-yellow-600">{match.city}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Groups Overview */}
            <Card id="teams">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Group Stage Draw
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {groups.map((group) => (
                    <Link
                      key={group.name}
                      href={`/fixtures/${group.name.toLowerCase().replace(' ', '-')}-world-cup-2026-tickets`}
                    >
                      <div className="rounded-lg border p-4 hover:bg-slate-50 transition-colors">
                        <h4 className="font-semibold text-blue-600">{group.name}</h4>
                        <ul className="mt-2 space-y-1">
                          {group.teams.map((team, idx) => (
                            <li key={idx} className={`text-sm ${team === "TBD" ? "text-slate-400 italic" : "text-slate-700"}`}>
                              {team}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Travel Guides */}
            <Card id="travel">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-blue-600" />
                  City Travel Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { city: "New York", country: "🇺🇸", slug: "new-york-world-cup-2026-travel-guide" },
                    { city: "Los Angeles", country: "🇺🇸", slug: "los-angeles-world-cup-2026-travel-guide" },
                    { city: "Dallas", country: "🇺🇸", slug: "dallas-world-cup-2026-travel-guide" },
                    { city: "Miami", country: "🇺🇸", slug: "miami-world-cup-2026-travel-guide" },
                    { city: "Mexico City", country: "🇲🇽", slug: "mexico-city-world-cup-2026-travel-guide" },
                    { city: "Toronto", country: "🇨🇦", slug: "toronto-world-cup-2026-travel-guide" },
                    { city: "Vancouver", country: "🇨🇦", slug: "vancouver-world-cup-2026-travel-guide" },
                    { city: "Atlanta", country: "🇺🇸", slug: "atlanta-world-cup-2026-travel-guide" },
                  ].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/travel/${city.slug}`}
                      className="p-3 rounded-lg border hover:bg-slate-50 text-center transition-colors"
                    >
                      <span className="text-xl">{city.country}</span>
                      <p className="font-medium text-sm mt-1">{city.city}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Venues */}
            <Card id="venues">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  All 16 Host Venues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { name: "MetLife Stadium", city: "New York/NJ", highlight: "FINAL", slug: "metlife-stadium-world-cup-2026-tickets" },
                    { name: "SoFi Stadium", city: "Los Angeles", highlight: "QF", slug: "sofi-stadium-world-cup-2026-tickets" },
                    { name: "AT&T Stadium", city: "Dallas", highlight: "SF", slug: "att-stadium-world-cup-2026-tickets" },
                    { name: "Mercedes-Benz Stadium", city: "Atlanta", highlight: "SF", slug: "mercedes-benz-stadium-world-cup-2026-tickets" },
                    { name: "Hard Rock Stadium", city: "Miami", highlight: "3rd Place", slug: "hard-rock-stadium-world-cup-2026-tickets" },
                    { name: "NRG Stadium", city: "Houston", highlight: "R16", slug: "nrg-stadium-world-cup-2026-tickets" },
                    { name: "Lincoln Financial Field", city: "Philadelphia", highlight: "R16", slug: "lincoln-financial-field-world-cup-2026-tickets" },
                    { name: "Lumen Field", city: "Seattle", highlight: "R32", slug: "lumen-field-world-cup-2026-tickets" },
                    { name: "Levi's Stadium", city: "San Francisco", highlight: "R32", slug: "levis-stadium-world-cup-2026-tickets" },
                    { name: "Gillette Stadium", city: "Boston", highlight: "QF", slug: "gillette-stadium-world-cup-2026-tickets" },
                    { name: "Arrowhead Stadium", city: "Kansas City", highlight: "QF", slug: "arrowhead-stadium-world-cup-2026-tickets" },
                    { name: "Estadio Azteca", city: "Mexico City", highlight: "Opening", slug: "estadio-azteca-world-cup-2026-tickets" },
                    { name: "Estadio Akron", city: "Guadalajara", highlight: "Group", slug: "estadio-akron-world-cup-2026-tickets" },
                    { name: "Estadio BBVA", city: "Monterrey", highlight: "Group", slug: "estadio-bbva-world-cup-2026-tickets" },
                    { name: "BMO Field", city: "Toronto", highlight: "R32", slug: "bmo-field-world-cup-2026-tickets" },
                    { name: "BC Place", city: "Vancouver", highlight: "R32", slug: "bc-place-world-cup-2026-tickets" },
                  ].map((venue) => (
                    <Link key={venue.slug} href={`/venues/${venue.slug}`}>
                      <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <div>
                            <p className="font-medium text-slate-900">{venue.name}</p>
                            <p className="text-sm text-slate-500">{venue.city}</p>
                          </div>
                        </div>
                        <Badge className={venue.highlight === "FINAL" ? "bg-yellow-500" : venue.highlight === "SF" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"}>
                          {venue.highlight}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Buy Tickets Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-blue-600" />
                  Buy World Cup 2026 Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Compare prices from trusted ticket partners
                </p>

                {affiliateLinks.map((link) => (
                  <div
                    key={link.partner}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.logo}</span>
                      <div>
                        <p className="font-medium text-slate-900">{link.partner}</p>
                        <p className="text-sm text-green-600">From ${link.price_from}</p>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Buy
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                ))}

                <p className="text-xs text-slate-500">
                  Prices shown are starting prices for group stage matches.
                  Knockout and Final tickets will be higher.
                </p>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { label: "Group A Tickets", href: "/fixtures/group-a-world-cup-2026-tickets" },
                  { label: "Round of 32 Tickets", href: "/fixtures/round-of-32-world-cup-2026-tickets" },
                  { label: "Round of 16 Tickets", href: "/fixtures/round-of-16-world-cup-2026-tickets" },
                  { label: "Quarter-Final Tickets", href: "/fixtures/quarter-finals-world-cup-2026-tickets" },
                  { label: "Semi-Final Tickets", href: "/fixtures/semi-finals-world-cup-2026-tickets" },
                  { label: "World Cup Final Tickets", href: "/fixtures/final-world-cup-2026-tickets" },
                  { label: "Third Place Match", href: "/fixtures/third-place-world-cup-2026-tickets" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-2 rounded hover:bg-slate-50"
                  >
                    <span className="text-sm font-medium">{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Event Info */}
            <Card>
              <CardHeader>
                <CardTitle>Tournament Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Dates</p>
                    <p className="font-medium">June 11 - July 19, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Final Venue</p>
                    <p className="font-medium">MetLife Stadium, New Jersey</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Defending Champions</p>
                    <p className="font-medium">🇦🇷 Argentina</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-500">Final Kickoff</p>
                    <p className="font-medium">21:00 CET / 3:00 PM ET</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
