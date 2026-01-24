"use client"

import { useEffect, useState } from "react"
import { useCompetition } from "@/contexts/competition-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LinkIcon, Plus, Edit, Trash2, ExternalLink, Search } from "lucide-react"

interface AffiliateLink {
  id: string
  entity_type: string
  entity_id: string
  page_slug: string
  provider: string
  affiliate_url: string
  button_text: string
  display_order: number
  is_active: number
}

const PROVIDERS = [
  { id: "hellotickets", name: "HelloTickets", color: "blue" },
  { id: "ticketfootballnet", name: "TicketFootball.net", color: "green" },
  { id: "viagogo", name: "Viagogo", color: "purple" },
  { id: "stubhub", name: "StubHub", color: "orange" },
  { id: "ticombo", name: "Ticombo", color: "pink" },
]

export default function AffiliatesPage() {
  const { selectedCompetition } = useCompetition()
  const [affiliateLinks, setAffiliateLinks] = useState<AffiliateLink[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterEntityType, setFilterEntityType] = useState("all")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingLink, setEditingLink] = useState<AffiliateLink | null>(null)

  useEffect(() => {
    fetchAffiliateLinks()
  }, [])

  const fetchAffiliateLinks = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "affiliate_links",
          action: "select",
        }),
      })
      const data = await response.json()
      setAffiliateLinks(data.data || [])
    } catch (error) {
      console.error("Error fetching affiliate links:", error)
      setAffiliateLinks([])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this affiliate link?")) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "affiliate_links",
          action: "delete",
          where: { id },
        }),
      })
      fetchAffiliateLinks()
    } catch (error) {
      console.error("Error deleting affiliate link:", error)
      alert("Failed to delete affiliate link")
    }
  }

  const filteredLinks = affiliateLinks.filter((link) => {
    const matchesSearch =
      link.page_slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.provider.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType =
      filterEntityType === "all" || link.entity_type === filterEntityType
    return matchesSearch && matchesType
  })

  const getProviderColor = (provider: string) => {
    const p = PROVIDERS.find((x) => x.id === provider)
    return p?.color || "gray"
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading affiliate links...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Affiliate Links</h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage ticket provider affiliate links for all pages
          </p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Affiliate Link
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{affiliateLinks.length}</p>
                <p className="text-sm text-slate-500">Total Links</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {PROVIDERS.slice(0, 3).map((provider) => {
          const count = affiliateLinks.filter((l) => l.provider === provider.id).length
          return (
            <Card key={provider.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg bg-${provider.color}-500 p-3`}>
                    <LinkIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{count}</p>
                    <p className="text-sm text-slate-500">{provider.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search by page or provider..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterEntityType}
              onChange={(e) => setFilterEntityType(e.target.value)}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Entity Types</option>
              <option value="team">Teams</option>
              <option value="fixture">Fixtures</option>
              <option value="venue">Venues</option>
              <option value="group">Groups</option>
              <option value="city_guide">City Guides</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Affiliate Links List */}
      <div className="space-y-4">
        {filteredLinks.map((link) => (
          <Card key={link.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-slate-900">{link.page_slug}</h3>
                    <span className={`inline-flex rounded-full bg-${getProviderColor(link.provider)}-100 px-2 py-1 text-xs font-medium text-${getProviderColor(link.provider)}-700`}>
                      {PROVIDERS.find((p) => p.id === link.provider)?.name || link.provider}
                    </span>
                    <span className="inline-flex rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                      {link.entity_type}
                    </span>
                    {link.is_active === 1 && (
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                    <ExternalLink className="h-4 w-4" />
                    <a href={link.affiliate_url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 truncate max-w-md">
                      {link.affiliate_url}
                    </a>
                  </div>
                  <div className="mt-2 text-sm text-slate-500">
                    Button Text: "{link.button_text}" • Order: {link.display_order}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingLink(link)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(link.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLinks.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-slate-500">No affiliate links found. Create one to get started!</p>
          </CardContent>
        </Card>
      )}

      {showCreateModal && (
        <CreateAffiliateLinkModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={fetchAffiliateLinks}
        />
      )}

      {editingLink && (
        <EditAffiliateLinkModal
          link={editingLink}
          onClose={() => setEditingLink(null)}
          onSuccess={fetchAffiliateLinks}
        />
      )}
    </div>
  )
}

function CreateAffiliateLinkModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    entity_type: "team",
    entity_id: "",
    page_slug: "",
    provider: "hellotickets",
    affiliate_url: "",
    button_text: "Buy Now",
    display_order: 0,
    is_active: 1,
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const newLink = {
        id: `aff-${Date.now()}`,
        ...formData,
      }

      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "affiliate_links",
          action: "insert",
          values: newLink,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error creating affiliate link:", error)
      alert("Failed to create affiliate link")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Add Affiliate Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Entity Type</label>
                <select
                  value={formData.entity_type}
                  onChange={(e) => setFormData({ ...formData, entity_type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="team">Team</option>
                  <option value="fixture">Fixture</option>
                  <option value="venue">Venue</option>
                  <option value="group">Group</option>
                  <option value="city_guide">City Guide</option>
                  <option value="competition">Competition</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Provider</label>
                <select
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  {PROVIDERS.map((provider) => (
                    <option key={provider.id} value={provider.id}>
                      {provider.name}
                    </option>
                  ))}
                  <option value="custom">Custom Provider</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Entity ID</label>
              <Input
                required
                value={formData.entity_id}
                onChange={(e) => setFormData({ ...formData, entity_id: e.target.value })}
                placeholder="e.g., 1, team-123, fixture-456"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Page Slug</label>
              <Input
                required
                value={formData.page_slug}
                onChange={(e) => setFormData({ ...formData, page_slug: e.target.value })}
                placeholder="e.g., usa-world-cup-2026-tickets"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Affiliate URL</label>
              <Input
                required
                type="url"
                value={formData.affiliate_url}
                onChange={(e) => setFormData({ ...formData, affiliate_url: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Button Text</label>
                <Input
                  required
                  value={formData.button_text}
                  onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                  placeholder="Buy Now"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Display Order</label>
                <Input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_active === 1}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked ? 1 : 0 })}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Active</span>
              </label>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Creating..." : "Create Affiliate Link"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function EditAffiliateLinkModal({ link, onClose, onSuccess }: { link: AffiliateLink; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    entity_type: link.entity_type,
    entity_id: link.entity_id,
    page_slug: link.page_slug,
    provider: link.provider,
    affiliate_url: link.affiliate_url,
    button_text: link.button_text,
    display_order: link.display_order,
    is_active: link.is_active,
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "affiliate_links",
          action: "update",
          where: { id: link.id },
          values: formData,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error updating affiliate link:", error)
      alert("Failed to update affiliate link")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Edit Affiliate Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Entity Type</label>
                <select
                  value={formData.entity_type}
                  onChange={(e) => setFormData({ ...formData, entity_type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="team">Team</option>
                  <option value="fixture">Fixture</option>
                  <option value="venue">Venue</option>
                  <option value="group">Group</option>
                  <option value="city_guide">City Guide</option>
                  <option value="competition">Competition</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Provider</label>
                <select
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  {PROVIDERS.map((provider) => (
                    <option key={provider.id} value={provider.id}>
                      {provider.name}
                    </option>
                  ))}
                  <option value="custom">Custom Provider</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Entity ID</label>
              <Input
                required
                value={formData.entity_id}
                onChange={(e) => setFormData({ ...formData, entity_id: e.target.value })}
                placeholder="e.g., 1, team-123, fixture-456"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Page Slug</label>
              <Input
                required
                value={formData.page_slug}
                onChange={(e) => setFormData({ ...formData, page_slug: e.target.value })}
                placeholder="e.g., usa-world-cup-2026-tickets"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Affiliate URL</label>
              <Input
                required
                type="url"
                value={formData.affiliate_url}
                onChange={(e) => setFormData({ ...formData, affiliate_url: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Button Text</label>
                <Input
                  required
                  value={formData.button_text}
                  onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                  placeholder="Buy Now"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Display Order</label>
                <Input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_active === 1}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked ? 1 : 0 })}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Active</span>
              </label>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
