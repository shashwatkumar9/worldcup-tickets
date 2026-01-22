// All live pages for search suggestions
export interface SearchResult {
  title: string
  url: string
  category: "competition" | "team" | "venue" | "fixture"
  keywords: string[]
}

export const searchData: SearchResult[] = [
  // Main Competition
  {
    title: "FIFA World Cup 2026 Tickets",
    url: "/fifa-world-cup-2026-tickets",
    category: "competition",
    keywords: ["world cup", "2026", "fifa", "football", "soccer"]
  },

  // World Cup 2026 Teams (Top 15)
  {
    title: "Argentina World Cup 2026 Tickets",
    url: "/teams/argentina-world-cup-2026-tickets",
    category: "team",
    keywords: ["argentina", "world cup", "2026", "messi", "albiceleste"]
  },
  {
    title: "Brazil World Cup 2026 Tickets",
    url: "/teams/brazil-world-cup-2026-tickets",
    category: "team",
    keywords: ["brazil", "world cup", "2026", "selecao", "neymar"]
  },
  {
    title: "France World Cup 2026 Tickets",
    url: "/teams/france-world-cup-2026-tickets",
    category: "team",
    keywords: ["france", "world cup", "2026", "les bleus", "mbappe"]
  },
  {
    title: "England World Cup 2026 Tickets",
    url: "/teams/england-world-cup-2026-tickets",
    category: "team",
    keywords: ["england", "world cup", "2026", "three lions", "kane"]
  },
  {
    title: "Spain World Cup 2026 Tickets",
    url: "/teams/spain-world-cup-2026-tickets",
    category: "team",
    keywords: ["spain", "world cup", "2026", "la roja", "spanish"]
  },
  {
    title: "Germany World Cup 2026 Tickets",
    url: "/teams/germany-world-cup-2026-tickets",
    category: "team",
    keywords: ["germany", "world cup", "2026", "die mannschaft", "german"]
  },
  {
    title: "Portugal World Cup 2026 Tickets",
    url: "/teams/portugal-world-cup-2026-tickets",
    category: "team",
    keywords: ["portugal", "world cup", "2026", "ronaldo", "portuguese"]
  },
  {
    title: "Netherlands World Cup 2026 Tickets",
    url: "/teams/netherlands-world-cup-2026-tickets",
    category: "team",
    keywords: ["netherlands", "world cup", "2026", "dutch", "oranje", "holland"]
  },
  {
    title: "Belgium World Cup 2026 Tickets",
    url: "/teams/belgium-world-cup-2026-tickets",
    category: "team",
    keywords: ["belgium", "world cup", "2026", "red devils", "belgian"]
  },
  {
    title: "Italy World Cup 2026 Tickets",
    url: "/teams/italy-world-cup-2026-tickets",
    category: "team",
    keywords: ["italy", "world cup", "2026", "azzurri", "italian"]
  },
  {
    title: "USA World Cup 2026 Tickets",
    url: "/teams/usa-world-cup-2026-tickets",
    category: "team",
    keywords: ["usa", "world cup", "2026", "usmnt", "united states", "america"]
  },
  {
    title: "Mexico World Cup 2026 Tickets",
    url: "/teams/mexico-world-cup-2026-tickets",
    category: "team",
    keywords: ["mexico", "world cup", "2026", "el tri", "mexican"]
  },
  {
    title: "Uruguay World Cup 2026 Tickets",
    url: "/teams/uruguay-world-cup-2026-tickets",
    category: "team",
    keywords: ["uruguay", "world cup", "2026", "celeste", "uruguayan"]
  },
  {
    title: "Colombia World Cup 2026 Tickets",
    url: "/teams/colombia-world-cup-2026-tickets",
    category: "team",
    keywords: ["colombia", "world cup", "2026", "cafeteros", "colombian"]
  },
  {
    title: "Croatia World Cup 2026 Tickets",
    url: "/teams/croatia-world-cup-2026-tickets",
    category: "team",
    keywords: ["croatia", "world cup", "2026", "vatreni", "croatian"]
  },

  // World Cup 2026 Venues (All 16)
  {
    title: "MetLife Stadium World Cup 2026 Tickets",
    url: "/venues/metlife-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["metlife", "stadium", "new jersey", "new york", "venue"]
  },
  {
    title: "SoFi Stadium World Cup 2026 Tickets",
    url: "/venues/sofi-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["sofi", "stadium", "los angeles", "la", "venue"]
  },
  {
    title: "AT&T Stadium World Cup 2026 Tickets",
    url: "/venues/att-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["att", "at&t", "stadium", "dallas", "venue"]
  },
  {
    title: "Mercedes-Benz Stadium World Cup 2026 Tickets",
    url: "/venues/mercedes-benz-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["mercedes", "benz", "stadium", "atlanta", "venue"]
  },
  {
    title: "Hard Rock Stadium World Cup 2026 Tickets",
    url: "/venues/hard-rock-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["hard rock", "stadium", "miami", "florida", "venue"]
  },
  {
    title: "NRG Stadium World Cup 2026 Tickets",
    url: "/venues/nrg-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["nrg", "stadium", "houston", "texas", "venue"]
  },
  {
    title: "Lincoln Financial Field World Cup 2026 Tickets",
    url: "/venues/lincoln-financial-field-world-cup-2026-tickets",
    category: "venue",
    keywords: ["lincoln", "financial", "field", "philadelphia", "venue"]
  },
  {
    title: "Lumen Field World Cup 2026 Tickets",
    url: "/venues/lumen-field-world-cup-2026-tickets",
    category: "venue",
    keywords: ["lumen", "field", "seattle", "venue"]
  },
  {
    title: "Levi's Stadium World Cup 2026 Tickets",
    url: "/venues/levis-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["levis", "levi's", "stadium", "san francisco", "santa clara", "venue"]
  },
  {
    title: "Gillette Stadium World Cup 2026 Tickets",
    url: "/venues/gillette-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["gillette", "stadium", "boston", "foxborough", "venue"]
  },
  {
    title: "Arrowhead Stadium World Cup 2026 Tickets",
    url: "/venues/arrowhead-stadium-world-cup-2026-tickets",
    category: "venue",
    keywords: ["arrowhead", "stadium", "kansas city", "venue"]
  },
  {
    title: "Estadio Azteca World Cup 2026 Tickets",
    url: "/venues/estadio-azteca-world-cup-2026-tickets",
    category: "venue",
    keywords: ["azteca", "estadio", "mexico city", "venue"]
  },
  {
    title: "Estadio Akron World Cup 2026 Tickets",
    url: "/venues/estadio-akron-world-cup-2026-tickets",
    category: "venue",
    keywords: ["akron", "estadio", "guadalajara", "venue"]
  },
  {
    title: "Estadio BBVA World Cup 2026 Tickets",
    url: "/venues/estadio-bbva-world-cup-2026-tickets",
    category: "venue",
    keywords: ["bbva", "estadio", "monterrey", "venue"]
  },
  {
    title: "BMO Field World Cup 2026 Tickets",
    url: "/venues/bmo-field-world-cup-2026-tickets",
    category: "venue",
    keywords: ["bmo", "field", "toronto", "canada", "venue"]
  },
  {
    title: "BC Place World Cup 2026 Tickets",
    url: "/venues/bc-place-world-cup-2026-tickets",
    category: "venue",
    keywords: ["bc", "place", "vancouver", "canada", "venue"]
  },

  // Group Stage Fixtures
  {
    title: "USA vs Mexico World Cup 2026 Tickets",
    url: "/fixtures/usa-vs-mexico-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["usa", "mexico", "vs", "match", "fixture"]
  },
  {
    title: "Brazil vs Morocco World Cup 2026 Tickets",
    url: "/fixtures/brazil-vs-morocco-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["brazil", "morocco", "vs", "match", "fixture"]
  },
  {
    title: "Argentina vs Algeria World Cup 2026 Tickets",
    url: "/fixtures/argentina-vs-algeria-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["argentina", "algeria", "vs", "match", "fixture"]
  },
  {
    title: "England vs Croatia World Cup 2026 Tickets",
    url: "/fixtures/england-vs-croatia-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["england", "croatia", "vs", "match", "fixture"]
  },
  {
    title: "France vs Norway World Cup 2026 Tickets",
    url: "/fixtures/france-vs-norway-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["france", "norway", "vs", "match", "fixture"]
  },
  {
    title: "Spain vs Uruguay World Cup 2026 Tickets",
    url: "/fixtures/spain-vs-uruguay-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["spain", "uruguay", "vs", "match", "fixture"]
  },
  {
    title: "Germany vs Korea World Cup 2026 Tickets",
    url: "/fixtures/germany-vs-korea-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["germany", "korea", "vs", "match", "fixture"]
  },
  {
    title: "Portugal vs Colombia World Cup 2026 Tickets",
    url: "/fixtures/portugal-vs-colombia-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["portugal", "colombia", "vs", "match", "fixture"]
  },

  // Knockout Fixtures
  {
    title: "Round of 32 World Cup 2026 Tickets",
    url: "/fixtures/round-of-32-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["round of 32", "knockout", "fixture"]
  },
  {
    title: "Round of 16 World Cup 2026 Tickets",
    url: "/fixtures/round-of-16-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["round of 16", "knockout", "fixture"]
  },
  {
    title: "Quarter-Finals World Cup 2026 Tickets",
    url: "/fixtures/quarter-finals-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["quarter finals", "quarter-finals", "knockout", "fixture"]
  },
  {
    title: "Semi-Finals World Cup 2026 Tickets",
    url: "/fixtures/semi-finals-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["semi finals", "semi-finals", "knockout", "fixture"]
  },
  {
    title: "Third Place World Cup 2026 Tickets",
    url: "/fixtures/third-place-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["third place", "3rd place", "fixture"]
  },
  {
    title: "FIFA World Cup 2026 Final Tickets",
    url: "/fixtures/final-world-cup-2026-tickets",
    category: "fixture",
    keywords: ["final", "finals", "championship", "title"]
  },
]
