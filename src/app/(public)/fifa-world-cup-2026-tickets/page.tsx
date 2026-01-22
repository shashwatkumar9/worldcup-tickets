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
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Ticket className="mr-2 h-5 w-5" />
                Buy Tickets from $95
              </Button>
              <Button size="lg" className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm" asChild>
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

            {/* SEO Article Content Section */}
            <Card id="complete-guide">
              <CardHeader>
                <CardTitle className="text-3xl">Complete Guide to FIFA World Cup 2026 Tickets</CardTitle>
                <p className="text-slate-600 mt-2">Everything you need to know about the biggest tournament in football history</p>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">

                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-lg leading-relaxed">
                    The FIFA World Cup 2026 promises to be the most spectacular edition of football's greatest tournament in history. For the first time ever, the World Cup will feature 48 teams competing across 104 matches in three host nations: the United States, Mexico, and Canada. This historic tournament represents not just an expansion of the beautiful game, but a celebration of football across North America from June 11 to July 19, 2026.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    If you're searching for FIFA World Cup 2026 tickets, you've come to the right place. This comprehensive guide covers everything you need to know about securing your seat at the world's most watched sporting event, from ticket prices and categories to venue information and travel planning. Whether you're dreaming of watching <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA World Cup 2026 Tickets</Link> for the host nation, experiencing <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-600 hover:underline">Brazil World Cup 2026 Tickets</Link> at the legendary Estadio Azteca, or witnessing <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina World Cup 2026 Tickets</Link> as the defending champions compete for glory, we'll help you navigate every step of your World Cup journey.
                  </p>
                </div>

                {/* Tournament Overview */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Tournament Overview - The First 48-Team World Cup</h2>

                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Historic Expansion and Format</h3>
                  <p className="leading-relaxed mb-4">
                    The FIFA World Cup 2026 marks a revolutionary moment in football history as the tournament expands from 32 to 48 teams. This expansion creates 16 additional spots for nations to qualify, providing unprecedented opportunities for countries from every confederation to compete on football's biggest stage. The new format features 12 groups of four teams each, followed by a knockout stage beginning with the Round of 32.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Group Stage Structure</h3>
                  <p className="leading-relaxed mb-4">
                    The 48 teams will be divided into 12 groups (<Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group A World Cup 2026 Tickets</Link> through <Link href="/fixtures/group-l-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group L World Cup 2026 Tickets</Link>) with four teams in each group. Each team plays three group-stage matches, with the top two teams from each group advancing to the knockout stage, along with the eight best third-placed teams. This format ensures a total of 72 group-stage matches, providing fans with unprecedented access to world-class football. Key groups to watch include <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group C World Cup 2026 Tickets</Link> featuring Brazil and Morocco, and <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group D World Cup 2026 Tickets</Link> with host nation USA.
                  </p>
                </div>

                {/* Ticket Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">FIFA World Cup 2026 Tickets - How to Buy and What to Expect</h2>

                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Ticket Categories and Pricing</h3>
                  <p className="leading-relaxed mb-4">FIFA World Cup tickets are typically divided into four main categories:</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border rounded-lg p-4 bg-blue-50">
                      <h4 className="font-semibold text-blue-900 mb-2">Category 1 (Premium)</h4>
                      <p className="text-sm text-slate-700 mb-2"><strong>Price:</strong> $500 - $3,000+ per match</p>
                      <p className="text-sm text-slate-700 mb-2"><strong>Seating:</strong> Best views, centerline positions</p>
                      <p className="text-sm text-slate-700"><strong>Best For:</strong> Final, semi-finals, marquee matches</p>
                    </div>
                    <div className="border rounded-lg p-4 bg-green-50">
                      <h4 className="font-semibold text-green-900 mb-2">Category 2 (Mid-Range)</h4>
                      <p className="text-sm text-slate-700 mb-2"><strong>Price:</strong> $250 - $800 per match</p>
                      <p className="text-sm text-slate-700 mb-2"><strong>Seating:</strong> Excellent views, behind goals</p>
                      <p className="text-sm text-slate-700"><strong>Best For:</strong> Quarter-finals, popular teams</p>
                    </div>
                    <div className="border rounded-lg p-4 bg-yellow-50">
                      <h4 className="font-semibold text-yellow-900 mb-2">Category 3 (Standard)</h4>
                      <p className="text-sm text-slate-700 mb-2"><strong>Price:</strong> $100 - $400 per match</p>
                      <p className="text-sm text-slate-700 mb-2"><strong>Seating:</strong> Good views, corners and upper tiers</p>
                      <p className="text-sm text-slate-700"><strong>Best For:</strong> Group-stage matches</p>
                    </div>
                    <div className="border rounded-lg p-4 bg-slate-50">
                      <h4 className="font-semibold text-slate-900 mb-2">Category 4 (Budget)</h4>
                      <p className="text-sm text-slate-700 mb-2"><strong>Price:</strong> $50 - $150 per match</p>
                      <p className="text-sm text-slate-700 mb-2"><strong>Seating:</strong> Furthest from pitch</p>
                      <p className="text-sm text-slate-700"><strong>Best For:</strong> Budget-conscious fans</p>
                    </div>
                  </div>

                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                    <p className="font-semibold text-yellow-900 mb-2">Special Pricing Notes:</p>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Opening Match at Estadio Azteca: $300 - $2,500</li>
                      <li>• <Link href="/fixtures/final-world-cup-2026-tickets" className="underline hover:text-yellow-900">World Cup Final</Link> at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="underline hover:text-yellow-900">MetLife Stadium</Link>: $1,000 - $5,000+</li>
                      <li>• <Link href="/teams/usa-world-cup-2026-tickets" className="underline hover:text-yellow-900">USA team matches</Link>: Premium pricing due to host nation interest</li>
                      <li>• Group-stage matches: Most affordable options ($50-$500)</li>
                    </ul>
                  </div>
                </div>

                {/* Top Matches to Watch */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Matches to Watch - Can't-Miss Fixtures</h2>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border-2 border-red-200 rounded-lg p-4 hover:border-red-400 transition-colors">
                      <h4 className="font-bold text-red-700 mb-2">
                        <Link href="/fixtures/usa-vs-mexico-world-cup-2026-tickets" className="hover:underline">USA vs Mexico</Link>
                      </h4>
                      <p className="text-sm text-slate-600">Historic CONCACAF rivalry • Host nation bragging rights • Passionate atmosphere</p>
                    </div>
                    <div className="border-2 border-blue-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
                      <h4 className="font-bold text-blue-700 mb-2">
                        <Link href="/fixtures/brazil-vs-morocco-world-cup-2026-tickets" className="hover:underline">Brazil vs Morocco</Link>
                      </h4>
                      <p className="text-sm text-slate-600">2022 quarter-final rematch • Samba football vs tactical discipline</p>
                    </div>
                    <div className="border-2 border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-colors">
                      <h4 className="font-bold text-purple-700 mb-2">
                        <Link href="/fixtures/england-vs-germany-world-cup-2026-tickets" className="hover:underline">England vs Germany</Link>
                      </h4>
                      <p className="text-sm text-slate-600">Legendary European rivalry • Decades of dramatic encounters</p>
                    </div>
                    <div className="border-2 border-green-200 rounded-lg p-4 hover:border-green-400 transition-colors">
                      <h4 className="font-bold text-green-700 mb-2">
                        <Link href="/fixtures/argentina-vs-france-world-cup-2026-tickets" className="hover:underline">Argentina vs France</Link>
                      </h4>
                      <p className="text-sm text-slate-600">Potential 2022 Final rematch • Defending champions clash</p>
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions (FAQs)</h2>

                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: When do FIFA World Cup 2026 tickets go on sale?</h4>
                      <p className="text-slate-700 text-sm">A: FIFA typically releases tickets in phases starting 8-12 months before the tournament. Expect the first sales phase (random selection draw) in late 2025, with subsequent first-come-first-served phases through spring 2026. Last-minute sales continue until tournament starts.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: How much do World Cup 2026 tickets cost?</h4>
                      <p className="text-slate-700 text-sm">A: Prices range from $50 for Category 4 group-stage matches to $5,000+ for Category 1 <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-600 hover:underline">FIFA World Cup 2026 Final Tickets</Link>. <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA matches</Link> and <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-600 hover:underline">Semi-Finals</Link> range $200-$1,500. Most group-stage matches are $100-$500.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: Where is the World Cup 2026 Final?</h4>
                      <p className="text-slate-700 text-sm">A: The <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">FIFA World Cup 2026 Final</Link> will be held at <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> in East Rutherford, New Jersey (New York/New Jersey metro area) on July 19, 2026 at 21:00 CET (3:00 PM ET). Capacity: 82,500.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: Can I buy tickets for specific teams like USA, Brazil, or Argentina?</h4>
                      <p className="text-slate-700 text-sm">A: Yes! FIFA offers team-specific packages for <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA World Cup 2026 Tickets</Link>, <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-600 hover:underline">Brazil</Link>, <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina</Link>, and all 48 teams allowing you to follow one team through the group stage (3 matches). Team confirmations happen after the December 2025 draw.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: Which venues host the knockout rounds?</h4>
                      <p className="text-slate-700 text-sm">A: <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-600 hover:underline">Quarter-Finals</Link>: SoFi, Gillette, Arrowhead stadiums. <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-600 hover:underline">Semi-Finals</Link>: <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium (Dallas)</Link>, <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mercedes-Benz (Atlanta)</Link>. <Link href="/fixtures/third-place-world-cup-2026-tickets" className="text-blue-600 hover:underline">Third Place</Link>: <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium (Miami)</Link>. <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-600 hover:underline">Final</Link>: <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link>.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: Do I need visas for all three host countries?</h4>
                      <p className="text-slate-700 text-sm">A: Only if attending matches in multiple countries. For USA: ESTA ($21, 72 hours advance). For Mexico: FMM tourist card (free). For Canada: ETA (CAD $7, 72 hours). Plan accordingly if seeing matches in different countries.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: What are the best matches to watch?</h4>
                      <p className="text-slate-700 text-sm">A: <Link href="/fixtures/usa-vs-mexico-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA vs Mexico</Link> (CONCACAF rivalry), <Link href="/fixtures/brazil-vs-argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Brazil vs Argentina</Link> (Superclásico), <Link href="/fixtures/england-vs-germany-world-cup-2026-tickets" className="text-blue-600 hover:underline">England vs Germany</Link>, <Link href="/fixtures/argentina-vs-france-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina vs France</Link> (2022 Final rematch), and any <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-600 hover:underline">Semi-Final</Link> or <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-600 hover:underline">Final</Link> match.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: Are there payment plans available?</h4>
                      <p className="text-slate-700 text-sm">A: FIFA typically doesn't offer payment plans for individual tickets. However, some hospitality packages through authorized sellers may offer installment options. Credit cards are accepted for all purchases.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: Can I resell my tickets if I can't attend?</h4>
                      <p className="text-slate-700 text-sm">A: Yes, but only through FIFA's official ticket resale platform. Selling outside official channels may result in ticket cancellation. Always use authorized platforms to avoid fraud.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: When is the opening match and where?</h4>
                      <p className="text-slate-700 text-sm">A: The opening match is on June 11, 2026 at <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-blue-600 hover:underline">Estadio Azteca</Link> in Mexico City, featuring <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mexico</Link>. This will be the stadium's historic 3rd World Cup (1970, 1986, 2026).</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: Which groups should I watch?</h4>
                      <p className="text-slate-700 text-sm">A: <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group A</Link> (Mexico), <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group C</Link> (Brazil, Morocco), <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group D</Link> (USA), <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group I</Link> (France), <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group J</Link> (Argentina), and <Link href="/fixtures/group-l-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group L</Link> (England, Croatia).</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">Q: What's the best way to experience multiple matches?</h4>
                      <p className="text-slate-700 text-sm">A: Book team-following packages or create a regional itinerary. East Coast: <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife</Link>, <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Gillette</Link>, <Link href="/venues/lincoln-financial-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">Lincoln Financial</Link>. West Coast: <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">SoFi</Link>, <Link href="/venues/levis-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Levi's</Link>, <Link href="/venues/lumen-field-world-cup-2026-tickets" className="text-blue-600 hover:underline">Lumen Field</Link>. Mexico: All 3 venues. Check our <Link href="/travel/new-york-world-cup-2026-city-guide" className="text-blue-600 hover:underline">city travel guides</Link>.</p>
                    </div>
                  </div>
                </div>

                {/* Top Teams to Watch */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Teams to Watch at World Cup 2026</h2>
                  <p className="leading-relaxed mb-4">
                    The expanded 48-team format brings unprecedented talent to North America. Here are the marquee nations expected to dominate headlines and ticket sales:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🇺🇸 <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">United States</Link></h4>
                      <p className="text-sm text-slate-600">Host nation advantage, home crowd support across 11 venues. Strong roster featuring Christian Pulisic, Weston McKennie. Plays in <Link href="/fixtures/group-d-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group D</Link>.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🇧🇷 <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-600 hover:underline">Brazil</Link></h4>
                      <p className="text-sm text-slate-600">5-time champions seeking redemption after 2022 quarter-final exit. Vinicius Jr., Rodrygo lead the Seleção. Featured in <Link href="/fixtures/group-c-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group C</Link> with Morocco rematch.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🇦🇷 <Link href="/teams/argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina</Link></h4>
                      <p className="text-sm text-slate-600">Defending champions led by Lionel Messi's potential farewell tour. 2022 Qatar champions return in <Link href="/fixtures/group-j-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group J</Link> seeking back-to-back titles.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🇫🇷 <Link href="/teams/france-world-cup-2026-tickets" className="text-blue-600 hover:underline">France</Link></h4>
                      <p className="text-sm text-slate-600">2022 runners-up with Kylian Mbappé seeking revenge. Les Bleus compete in <Link href="/fixtures/group-i-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group I</Link>. Could face <Link href="/fixtures/argentina-vs-france-world-cup-2026-tickets" className="text-blue-600 hover:underline">Argentina rematch</Link>.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🏴󠁧󠁢󠁥󠁮󠁧󠁿 <Link href="/teams/england-world-cup-2026-tickets" className="text-blue-600 hover:underline">England</Link></h4>
                      <p className="text-sm text-slate-600">Semifinalists in 2018, runners-up in Euro 2020. Young talented squad in <Link href="/fixtures/group-l-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group L</Link>. Potential <Link href="/fixtures/england-vs-germany-world-cup-2026-tickets" className="text-blue-600 hover:underline">Germany clash</Link>.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🇩🇪 <Link href="/teams/germany-world-cup-2026-tickets" className="text-blue-600 hover:underline">Germany</Link></h4>
                      <p className="text-sm text-slate-600">4-time champions rebuilding after 2018 and 2022 group stage exits. Competing in <Link href="/fixtures/group-e-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group E</Link>. Historic rivalry with <Link href="/teams/netherlands-world-cup-2026-tickets" className="text-blue-600 hover:underline">Netherlands</Link>.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🇲🇽 <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mexico</Link></h4>
                      <p className="text-sm text-slate-600">Co-hosts open tournament at legendary <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-blue-600 hover:underline">Estadio Azteca</Link>. El Tri in <Link href="/fixtures/group-a-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group A</Link>. Epic <Link href="/fixtures/usa-vs-mexico-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA rivalry</Link>.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🇪🇸 <Link href="/teams/spain-world-cup-2026-tickets" className="text-blue-600 hover:underline">Spain</Link></h4>
                      <p className="text-sm text-slate-600">2010 champions with new generation. Technical excellence in <Link href="/fixtures/group-h-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group H</Link>. Potential clash with <Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-600 hover:underline">Portugal</Link> in knockout rounds.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2">🇵🇹 <Link href="/teams/portugal-world-cup-2026-tickets" className="text-blue-600 hover:underline">Portugal</Link></h4>
                      <p className="text-sm text-slate-600">Cristiano Ronaldo's likely final World Cup. In <Link href="/fixtures/group-k-world-cup-2026-tickets" className="text-blue-600 hover:underline">Group K</Link> with <Link href="/teams/colombia-world-cup-2026-tickets" className="text-blue-600 hover:underline">Colombia</Link> clash expected.</p>
                    </div>
                  </div>
                </div>

                {/* Knockout Rounds Guide */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Knockout Rounds - Road to the Final</h2>
                  <p className="leading-relaxed mb-4">
                    The expanded format means 32 teams advance to knockout stages, creating the most exciting tournament structure ever. From June 28 through July 19, every match is do-or-die.
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r">
                      <h3 className="font-bold text-purple-900 mb-2">
                        <Link href="/fixtures/round-of-32-world-cup-2026-tickets" className="hover:underline">Round of 32 World Cup 2026 Tickets</Link> • June 28 - July 2
                      </h3>
                      <p className="text-sm text-slate-700">16 matches across 16 venues. Top 2 from each group plus 8 best third-place teams compete. Tickets: $150-$800. Venues include <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">SoFi Stadium</Link>, <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link>, <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-blue-600 hover:underline">Estadio Azteca</Link>.</p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r">
                      <h3 className="font-bold text-blue-900 mb-2">
                        <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="hover:underline">Round of 16 World Cup 2026 Tickets</Link> • July 4-6
                      </h3>
                      <p className="text-sm text-slate-700">8 matches, Sweet 16 showdowns. Independence Day football! Tickets: $200-$1,200. Featured venues: <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium</Link>, <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium</Link>, <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mercedes-Benz Stadium</Link>.</p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                      <h3 className="font-bold text-green-900 mb-2">
                        <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="hover:underline">Quarter-Finals World Cup 2026 Tickets</Link> • July 9-10
                      </h3>
                      <p className="text-sm text-slate-700">Elite 8 compete in 4 massive stadiums. Tickets: $400-$2,000. Venues: <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">SoFi (LA)</Link>, <Link href="/venues/gillette-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Gillette (Boston)</Link>, <Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock (Miami)</Link>, <Link href="/venues/arrowhead-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Arrowhead (Kansas City)</Link>.</p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                      <h3 className="font-bold text-red-900 mb-2">
                        <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="hover:underline">Semi-Finals World Cup 2026 Tickets</Link> • July 14-15
                      </h3>
                      <p className="text-sm text-slate-700">Final Four battle for championship berth. Tickets: $800-$3,000+. Two massive venues: <Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium, Dallas</Link> (80,000 capacity) and <Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mercedes-Benz Stadium, Atlanta</Link> (71,000 capacity).</p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded-r">
                      <h3 className="font-bold text-yellow-900 mb-2">
                        <Link href="/fixtures/final-world-cup-2026-tickets" className="hover:underline font-bold">🏆 FIFA World Cup 2026 Final Tickets</Link> • July 19
                      </h3>
                      <p className="text-sm text-slate-700">The pinnacle of football. Tickets: $1,000-$5,000+ (official), resale much higher. <Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">MetLife Stadium, New York/New Jersey</Link> - 82,500 capacity. Book accommodation via <Link href="/travel/new-york-world-cup-2026-city-guide" className="text-blue-600 hover:underline">New York City Guide</Link> 12+ months in advance.</p>
                    </div>
                  </div>
                </div>

                {/* Host Cities Guide */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">16 Host Cities - Where to Stay and Play</h2>
                  <p className="leading-relaxed mb-4">
                    Three nations, 16 incredible cities, each offering unique World Cup experiences. Plan your multi-city adventure with our comprehensive city guides.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">🗽 <Link href="/travel/new-york-world-cup-2026-city-guide" className="text-blue-600 hover:underline">New York/New Jersey</Link></h4>
                      <p className="text-sm text-slate-600 mb-2"><Link href="/venues/metlife-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">MetLife Stadium</Link> hosts <Link href="/fixtures/final-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">FIFA World Cup 2026 Final</Link>. 7+ matches including <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-600 hover:underline">Round of 16</Link>.</p>
                      <p className="text-xs text-slate-500">Hotels: Times Square, Jersey City. Transport: NJ Transit, subway. Must-see: Statue of Liberty, Central Park.</p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">🌴 <Link href="/travel/los-angeles-world-cup-2026-city-guide" className="text-blue-600 hover:underline">Los Angeles</Link></h4>
                      <p className="text-sm text-slate-600 mb-2"><Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">SoFi Stadium</Link> hosts <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-600 hover:underline">Quarter-Finals</Link>. 8+ matches. Home to potential <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA</Link> opener.</p>
                      <p className="text-xs text-slate-500">Hotels: Inglewood, Santa Monica. Transport: Metro, rental car. Must-see: Hollywood, Venice Beach.</p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">🤠 <Link href="/travel/dallas-world-cup-2026-city-guide" className="text-blue-600 hover:underline">Dallas</Link></h4>
                      <p className="text-sm text-slate-600 mb-2"><Link href="/venues/att-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">AT&T Stadium</Link> hosts <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-600 hover:underline">Semi-Finals</Link>. 9+ matches. Largest capacity venue.</p>
                      <p className="text-xs text-slate-500">Hotels: Arlington, Downtown Dallas. Transport: DART, rental car. Must-see: JFK Memorial, Fort Worth.</p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">🍑 <Link href="/travel/atlanta-world-cup-2026-city-guide" className="text-blue-600 hover:underline">Atlanta</Link></h4>
                      <p className="text-sm text-slate-600 mb-2"><Link href="/venues/mercedes-benz-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mercedes-Benz Stadium</Link> hosts <Link href="/fixtures/semi-finals-world-cup-2026-tickets" className="text-blue-600 hover:underline">Semi-Finals</Link>. 8+ matches.</p>
                      <p className="text-xs text-slate-500">Hotels: Downtown, Midtown. Transport: MARTA. Must-see: World of Coca-Cola, MLK National Park.</p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">🏖️ <Link href="/travel/miami-world-cup-2026-city-guide" className="text-blue-600 hover:underline">Miami</Link></h4>
                      <p className="text-sm text-slate-600 mb-2"><Link href="/venues/hard-rock-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">Hard Rock Stadium</Link> hosts <Link href="/fixtures/third-place-world-cup-2026-tickets" className="text-blue-600 hover:underline">Third Place Match</Link> + <Link href="/fixtures/quarter-finals-world-cup-2026-tickets" className="text-blue-600 hover:underline">Quarter-Final</Link>.</p>
                      <p className="text-xs text-slate-500">Hotels: South Beach, Brickell. Transport: Metrorail, rental car. Must-see: Art Deco District.</p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">🇲🇽 <Link href="/travel/mexico-city-world-cup-2026-city-guide" className="text-blue-600 hover:underline">Mexico City</Link></h4>
                      <p className="text-sm text-slate-600 mb-2"><Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-blue-600 hover:underline">Estadio Azteca</Link> hosts Opening Match June 11! <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-600 hover:underline">Mexico</Link> group matches + <Link href="/fixtures/round-of-16-world-cup-2026-tickets" className="text-blue-600 hover:underline">Round of 16</Link>.</p>
                      <p className="text-xs text-slate-500">Hotels: Polanco, Condesa. Transport: Metro, Metrobus. Must-see: Zócalo, Teotihuacán.</p>
                    </div>
                  </div>
                </div>

                {/* Why Unforgettable */}
                <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Why FIFA World Cup 2026 Will Be Unforgettable</h2>
                  <p className="leading-relaxed mb-4">
                    The FIFA World Cup 2026 represents more than just an expansion of the world's greatest tournament. It's a celebration of football's growth across North America, where soccer/football continues to surge in popularity. With three passionate host nations offering <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">USA World Cup 2026 Tickets</Link>, <Link href="/teams/mexico-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">Mexico World Cup 2026 Tickets</Link>, and <Link href="/teams/canada-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">Canada World Cup 2026 Tickets</Link>, 16 world-class venues, and 48 teams battling for glory, this edition promises unprecedented access, diversity, and excitement.
                  </p>
                  <p className="leading-relaxed">
                    From the historic <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">Estadio Azteca</Link>, where World Cup legends were born, to the cutting-edge <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">SoFi Stadium</Link> representing modern football's future, every venue tells a story. Whether you're a lifelong football fanatic securing <Link href="/teams/brazil-world-cup-2026-tickets" className="text-blue-600 hover:underline font-medium">Brazil World Cup 2026 Tickets</Link> or experiencing your first World Cup, FIFA World Cup 2026 offers something extraordinary for everyone.
                  </p>
                </div>

                {/* Start Planning */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Start Planning Your World Cup 2026 Journey Today</h2>
                  <p className="leading-relaxed mb-4">
                    Don't wait to secure your piece of football history. FIFA World Cup 2026 tickets will be among the most sought-after events of the decade. Start planning now by:
                  </p>
                  <ol className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">1</span>
                      <span><strong>Creating your FIFA account</strong> at FIFA.com</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">2</span>
                      <span><strong>Researching your preferred matches</strong> - Explore <Link href="/teams/usa-world-cup-2026-tickets" className="text-blue-600 hover:underline">USA World Cup 2026 Tickets</Link>, <Link href="/fixtures/brazil-vs-argentina-world-cup-2026-tickets" className="text-blue-600 hover:underline">Brazil vs Argentina</Link>, or <Link href="/fixtures/england-vs-germany-world-cup-2026-tickets" className="text-blue-600 hover:underline">England vs Germany</Link></span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">3</span>
                      <span><strong>Choosing your venues</strong> - From <Link href="/venues/estadio-azteca-world-cup-2026-tickets" className="text-blue-600 hover:underline">Estadio Azteca</Link> to <Link href="/venues/sofi-stadium-world-cup-2026-tickets" className="text-blue-600 hover:underline">SoFi Stadium</Link></span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">4</span>
                      <span><strong>Booking flights and hotels</strong> - Check our city guides for <Link href="/travel/los-angeles-world-cup-2026-city-guide" className="text-blue-600 hover:underline">Los Angeles</Link>, <Link href="/travel/mexico-city-world-cup-2026-city-guide" className="text-blue-600 hover:underline">Mexico City</Link>, and <Link href="/travel/dallas-world-cup-2026-city-guide" className="text-blue-600 hover:underline">Dallas</Link></span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">5</span>
                      <span><strong>Preparing visa applications</strong> if visiting multiple countries</span>
                    </li>
                  </ol>
                  <p className="text-lg font-medium text-slate-900 bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                    Ready to buy FIFA World Cup 2026 tickets? Start comparing prices from authorized sellers now and turn your World Cup dreams into reality.
                  </p>
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
