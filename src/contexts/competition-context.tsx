"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface Competition {
  id: string
  slug: string
  name: string
  sport_type: string
  competition_type: string
  start_date: string
  end_date: string
  host_countries: string
  season: string
  status: string
}

interface CompetitionContextType {
  selectedCompetition: Competition | null
  setSelectedCompetition: (competition: Competition | null) => void
  competitions: Competition[]
  setCompetitions: (competitions: Competition[]) => void
  loading: boolean
}

const CompetitionContext = createContext<CompetitionContextType | undefined>(undefined)

export function CompetitionProvider({ children }: { children: ReactNode }) {
  const [selectedCompetition, setSelectedCompetitionState] = useState<Competition | null>(null)
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [loading, setLoading] = useState(true)

  const setSelectedCompetition = (competition: Competition | null) => {
    setSelectedCompetitionState(competition)
    if (competition) {
      localStorage.setItem("selectedCompetitionId", competition.id)
    }
  }

  useEffect(() => {
    fetchCompetitions()
  }, [])

  const fetchCompetitions = async () => {
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "competitions",
          action: "select",
          orderBy: { column: "created_at", ascending: false },
        }),
      })
      const data = await response.json()
      if (data.data && data.data.length > 0) {
        setCompetitions(data.data)

        // Try to load saved competition from localStorage
        const savedCompetitionId = localStorage.getItem("selectedCompetitionId")
        if (savedCompetitionId) {
          const savedCompetition = data.data.find((c: Competition) => c.id === savedCompetitionId)
          if (savedCompetition) {
            setSelectedCompetition(savedCompetition)
          } else {
            // If saved competition not found, select first one
            setSelectedCompetition(data.data[0])
            localStorage.setItem("selectedCompetitionId", data.data[0].id)
          }
        } else {
          // No saved competition, select first one
          setSelectedCompetition(data.data[0])
          localStorage.setItem("selectedCompetitionId", data.data[0].id)
        }
      }
    } catch (error) {
      console.error("Error fetching competitions:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CompetitionContext.Provider
      value={{
        selectedCompetition,
        setSelectedCompetition,
        competitions,
        setCompetitions,
        loading,
      }}
    >
      {children}
    </CompetitionContext.Provider>
  )
}

export function useCompetition() {
  const context = useContext(CompetitionContext)
  if (context === undefined) {
    throw new Error("useCompetition must be used within a CompetitionProvider")
  }
  return context
}
