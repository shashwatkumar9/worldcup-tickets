"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Search, Edit, Trash2, Link2, ExternalLink, BarChart3 } from "lucide-react"

interface AffiliateLink {
  id: string
  entity_type: string
  entity_id: string
  partner: string
  url: string
  price_from: number
  currency: string
  is_active: boolean
  priority: number
  click_count: number
  created_at: string
}

export default function AffiliatesPage() {
  const [links, setLinks] = useState<AffiliateLink[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [entityType, setEntityType] = useState<string>("all")
  const [partner, setPartner] = useState<string>("all")
  const [activeStatus, setActiveStatus] = useState<string>("all")

  useEffect(() => {
    fetchLinks()
  }, [entityType, partner, activeStatus])

  const fetchLinks = async () => {
    setLoading(true)
    const supabase = createClient()
    if (!supabase) {
      setLoading(false)
      return
    }

    let query = supabase
      .from("affiliate_links")
      .select("*")
      .order("created_at", { ascending: false })

    if (entityType !== "all") {
      query = query.eq("entity_type", entityType)
    }
    if (partner !== "all") {
      query = query.eq("partner", partner)
    }
    if (activeStatus !== "all") {
      query = query.eq("is_active", activeStatus === "active")
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching affiliate links:", error)
    } else {
      setLinks(data || [])
    }
    setLoading(false)
  }

  const filteredLinks = links.filter((link) => {
    return (
      link.partner.toLowerCase().includes(search.toLowerCase()) ||
      link.url.toLowerCase().includes(search.toLowerCase())
    )
  })

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this affiliate link?")) return

    const supabase = createClient()
    if (!supabase) return

    const { error } = await supabase.from("affiliate_links").delete().eq("id", id)

    if (error) {
      console.error("Error deleting affiliate link:", error)
      alert("Failed to delete affiliate link")
    } else {
      fetchLinks()
    }
  }

  const toggleActive = async (id: string, currentStatus: boolean) => {
    const supabase = createClient()
    if (!supabase) return

    const { error } = await supabase
      .from("affiliate_links")
      .update({ is_active: !currentStatus })
      .eq("id", id)

    if (error) {
      console.error("Error toggling affiliate link:", error)
    } else {
      fetchLinks()
    }
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(price)
  }

  const getEntityTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  // Get unique partners for filter
  const uniquePartners = [...new Set(links.map((l) => l.partner))]

  return (
    <div className="flex-1">
      <AdminHeader title="Affiliate Links" />

      <div className="p-6">
        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border bg-white p-4">
            <p className="text-sm text-slate-500">Total Links</p>
            <p className="text-2xl font-bold">{links.length}</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <p className="text-sm text-slate-500">Active Links</p>
            <p className="text-2xl font-bold text-green-600">
              {links.filter((l) => l.is_active).length}
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <p className="text-sm text-slate-500">Total Clicks</p>
            <p className="text-2xl font-bold text-blue-600">
              {links.reduce((acc, l) => acc + (l.click_count || 0), 0).toLocaleString()}
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <p className="text-sm text-slate-500">Partners</p>
            <p className="text-2xl font-bold">{uniquePartners.length}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search partner or URL..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={entityType} onValueChange={setEntityType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Entity Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="competition">Competition</SelectItem>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="fixture">Fixture</SelectItem>
                <SelectItem value="venue">Venue</SelectItem>
              </SelectContent>
            </Select>

            <Select value={partner} onValueChange={setPartner}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Partner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Partners</SelectItem>
                {uniquePartners.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={activeStatus} onValueChange={setActiveStatus}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button asChild>
            <Link href="/admin/affiliates/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Link
            </Link>
          </Button>
        </div>

        {/* Links Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner</TableHead>
                <TableHead>Entity</TableHead>
                <TableHead>Price From</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : filteredLinks.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <Link2 className="mx-auto h-12 w-12 text-slate-300" />
                    <p className="mt-2 text-slate-500">No affiliate links found</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredLinks.map((link) => (
                  <TableRow key={link.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900">
                          {link.partner}
                        </span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-600"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="text-sm text-slate-500 truncate max-w-xs">
                        {link.url}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {getEntityTypeLabel(link.entity_type)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-green-600">
                        {formatPrice(link.price_from, link.currency)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <BarChart3 className="h-4 w-4 text-slate-400" />
                        {(link.click_count || 0).toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>{link.priority}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => toggleActive(link.id, link.is_active)}
                        className="cursor-pointer"
                      >
                        <Badge
                          className={
                            link.is_active
                              ? "bg-green-100 text-green-800"
                              : "bg-slate-100 text-slate-800"
                          }
                        >
                          {link.is_active ? "Active" : "Inactive"}
                        </Badge>
                      </button>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/affiliates/${link.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(link.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
