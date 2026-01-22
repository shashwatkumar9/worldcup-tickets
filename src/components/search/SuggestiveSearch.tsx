"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search, Ticket, MapPin, Users, Trophy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { searchData, type SearchResult } from "@/lib/search-data"
import { LanguageLink } from "@/components/i18n/LanguageLink"

export function SuggestiveSearch() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Search and filter suggestions
  useEffect(() => {
    if (query.trim().length < 2) {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    const searchTerm = query.toLowerCase().trim()
    const filtered = searchData.filter((item) => {
      // Search in title
      if (item.title.toLowerCase().includes(searchTerm)) return true
      // Search in keywords
      return item.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
    })

    setSuggestions(filtered.slice(0, 8)) // Show max 8 suggestions
    setIsOpen(filtered.length > 0)
    setSelectedIndex(-1)
  }, [query])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault()
      router.push(suggestions[selectedIndex].url)
      setIsOpen(false)
      setQuery("")
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getCategoryIcon = (category: SearchResult["category"]) => {
    switch (category) {
      case "competition":
        return <Trophy className="h-4 w-4 text-yellow-500" />
      case "team":
        return <Users className="h-4 w-4 text-blue-500" />
      case "venue":
        return <MapPin className="h-4 w-4 text-green-500" />
      case "fixture":
        return <Ticket className="h-4 w-4 text-red-500" />
      default:
        return <Search className="h-4 w-4 text-slate-400" />
    }
  }

  const getCategoryLabel = (category: SearchResult["category"]) => {
    switch (category) {
      case "competition":
        return "Competition"
      case "team":
        return "Team"
      case "venue":
        return "Venue"
      case "fixture":
        return "Match"
      default:
        return ""
    }
  }

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <Input
          ref={inputRef}
          placeholder="Search events, teams, or venues..."
          className="h-14 bg-white pl-12 text-lg text-slate-900"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true)
          }}
        />
        <Button
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={() => {
            if (query.trim()) {
              router.push(`/search?q=${encodeURIComponent(query)}`)
            }
          }}
        >
          Search
        </Button>
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <>
          <div
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden z-50"
          >
            <div className="max-h-96 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <LanguageLink
                  key={suggestion.url}
                  href={suggestion.url}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0 ${
                    index === selectedIndex ? "bg-slate-50" : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false)
                    setQuery("")
                  }}
                >
                  <div className="flex-shrink-0">
                    {getCategoryIcon(suggestion.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-slate-900 truncate">
                      {suggestion.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {getCategoryLabel(suggestion.category)}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 flex-shrink-0" />
                </LanguageLink>
              ))}
            </div>
            {suggestions.length === 8 && (
              <div className="px-4 py-2 bg-slate-50 text-xs text-slate-500 text-center border-t border-slate-200">
                Showing top 8 results. Try refining your search for more.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// Import ChevronRight
import { ChevronRight } from "lucide-react"
