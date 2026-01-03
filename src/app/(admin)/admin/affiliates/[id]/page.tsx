"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Save, Loader2 } from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

const ENTITY_TYPES = [
  { value: "competition", label: "Competition" },
  { value: "team", label: "Team" },
  { value: "fixture", label: "Fixture" },
  { value: "venue", label: "Venue" },
]

const PARTNERS = [
  { value: "Ticketmaster", label: "Ticketmaster" },
  { value: "StubHub", label: "StubHub" },
  { value: "Viagogo", label: "Viagogo" },
  { value: "Ticombo", label: "Ticombo" },
  { value: "SeatGeek", label: "SeatGeek" },
  { value: "VividSeats", label: "Vivid Seats" },
  { value: "Other", label: "Other" },
]

const CURRENCIES = [
  { value: "USD", label: "USD ($)" },
  { value: "EUR", label: "EUR (€)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "CAD", label: "CAD ($)" },
  { value: "AUD", label: "AUD ($)" },
]

interface AffiliateLinkFormData {
  entity_type: string
  entity_id: string
  partner: string
  url: string
  price_from: number
  currency: string
  is_active: boolean
  priority: number
}

interface SelectOption {
  id: string
  name: string
}

export default function AffiliateLinkEditPage({ params }: PageProps) {
  const { id } = use(params)
  const isNew = id === "new"
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [entities, setEntities] = useState<SelectOption[]>([])
  const [formData, setFormData] = useState<AffiliateLinkFormData>({
    entity_type: "competition",
    entity_id: "",
    partner: "Ticketmaster",
    url: "",
    price_from: 0,
    currency: "USD",
    is_active: true,
    priority: 0,
  })

  useEffect(() => {
    if (!isNew) {
      fetchLink()
    }
  }, [id, isNew])

  useEffect(() => {
    fetchEntities(formData.entity_type)
  }, [formData.entity_type])

  const fetchLink = async () => {
    const supabase = createClient()
    if (!supabase) {
      console.error("Supabase client not configured")
      setLoading(false)
      return
    }

    const { data: link, error } = await supabase
      .from("affiliate_links")
      .select("*")
      .eq("id", id)
      .single()

    if (error || !link) {
      console.error("Error fetching affiliate link:", error)
      router.push("/admin/affiliates")
      return
    }

    setFormData({
      entity_type: link.entity_type,
      entity_id: link.entity_id,
      partner: link.partner,
      url: link.url,
      price_from: link.price_from,
      currency: link.currency || "USD",
      is_active: link.is_active,
      priority: link.priority || 0,
    })
    setLoading(false)
  }

  const fetchEntities = async (entityType: string) => {
    const supabase = createClient()
    if (!supabase) return

    let tableName = ""
    let selectQuery = ""

    switch (entityType) {
      case "competition":
        tableName = "competitions"
        selectQuery = "id, translations(name, language)"
        break
      case "team":
        tableName = "teams"
        selectQuery = "id, translations(name, language)"
        break
      case "fixture":
        tableName = "fixtures"
        selectQuery = "id, translations(name, language)"
        break
      case "venue":
        tableName = "venues"
        selectQuery = "id, name"
        break
      default:
        return
    }

    const { data, error } = await supabase
      .from(tableName)
      .select(selectQuery)
      .eq("status", entityType === "fixture" ? "scheduled" : "published")
      .limit(100)

    if (error) {
      console.error(`Error fetching ${entityType}s:`, error)
      return
    }

    if (data) {
      const options = data.map((item: any) => {
        let name = ""
        if (item.name) {
          name = item.name
        } else if (item.translations) {
          const translation = item.translations.find((t: any) => t.language === "en") || item.translations[0]
          name = translation?.name || item.id
        } else {
          name = item.id
        }
        return { id: item.id, name }
      })
      setEntities(options)
    }
  }

  const handleSave = async () => {
    if (!formData.entity_id || !formData.url) {
      alert("Please fill in all required fields")
      return
    }

    setSaving(true)

    try {
      const supabase = createClient()
      if (!supabase) {
        throw new Error("Supabase client not configured")
      }

      const linkData = {
        entity_type: formData.entity_type,
        entity_id: formData.entity_id,
        partner: formData.partner,
        url: formData.url,
        price_from: formData.price_from,
        currency: formData.currency,
        is_active: formData.is_active,
        priority: formData.priority,
      }

      if (isNew) {
        const { error: createError } = await supabase
          .from("affiliate_links")
          .insert(linkData)

        if (createError) throw createError
      } else {
        const { error: updateError } = await supabase
          .from("affiliate_links")
          .update(linkData)
          .eq("id", id)

        if (updateError) throw updateError
      }

      router.push("/admin/affiliates")
    } catch (error) {
      console.error("Error saving affiliate link:", error)
      alert("Failed to save affiliate link")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex-1">
        <AdminHeader title={isNew ? "Add Affiliate Link" : "Edit Affiliate Link"} />
        <div className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <AdminHeader title={isNew ? "Add Affiliate Link" : "Edit Affiliate Link"} />

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/admin/affiliates">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Affiliate Links
            </Link>
          </Button>

          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Link
              </>
            )}
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Link Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Entity Type *</Label>
                    <Select
                      value={formData.entity_type}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          entity_type: value,
                          entity_id: "",
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ENTITY_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Entity *</Label>
                    <Select
                      value={formData.entity_id}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, entity_id: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select entity" />
                      </SelectTrigger>
                      <SelectContent>
                        {entities.map((entity) => (
                          <SelectItem key={entity.id} value={entity.id}>
                            {entity.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Partner *</Label>
                  <Select
                    value={formData.partner}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, partner: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PARTNERS.map((partner) => (
                        <SelectItem key={partner.value} value={partner.value}>
                          {partner.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Affiliate URL *</Label>
                  <Input
                    value={formData.url}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, url: e.target.value }))
                    }
                    placeholder="https://www.ticketmaster.com/affiliate/..."
                  />
                  <p className="text-xs text-slate-500">
                    Full affiliate URL with tracking parameters
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Price From</Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.price_from}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          price_from: parseFloat(e.target.value) || 0,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Currency</Label>
                    <Select
                      value={formData.currency}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, currency: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CURRENCIES.map((currency) => (
                          <SelectItem key={currency.value} value={currency.value}>
                            {currency.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Input
                    type="number"
                    min="0"
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        priority: parseInt(e.target.value) || 0,
                      }))
                    }
                  />
                  <p className="text-xs text-slate-500">
                    Higher priority links appear first
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Active</Label>
                    <p className="text-sm text-slate-500">
                      Show on public site
                    </p>
                  </div>
                  <Switch
                    checked={formData.is_active}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, is_active: checked }))
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
