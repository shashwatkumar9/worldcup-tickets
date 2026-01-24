"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Settings, Globe, Database, Key, Bell } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your site settings and configuration
        </p>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            General Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Site Name</label>
            <Input defaultValue="World Cup Tickets 2026" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Site Description</label>
            <textarea
              defaultValue="Official ticketing guide for FIFA World Cup 2026"
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Contact Email</label>
            <Input defaultValue="info@worldcuptickets.com" className="mt-1" />
          </div>
          <Button>Save General Settings</Button>
        </CardContent>
      </Card>

      {/* SEO Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            SEO Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Default Meta Title</label>
            <Input
              defaultValue="World Cup 2026 Tickets | Official Guide"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Default Meta Description</label>
            <textarea
              defaultValue="Get FIFA World Cup 2026 tickets for all matches across USA, Mexico, and Canada. Complete guide with fixtures, venues, and travel information."
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Google Analytics ID</label>
            <Input placeholder="G-XXXXXXXXXX" className="mt-1" />
          </div>
          <Button>Save SEO Settings</Button>
        </CardContent>
      </Card>

      {/* Database Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-slate-500">Total Teams</label>
              <p className="mt-1 text-2xl font-bold text-slate-900">46</p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500">Total Fixtures</label>
              <p className="mt-1 text-2xl font-bold text-slate-900">104</p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500">Total Venues</label>
              <p className="mt-1 text-2xl font-bold text-slate-900">16</p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500">Total Articles</label>
              <p className="mt-1 text-2xl font-bold text-slate-900">8</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Export Database</Button>
            <Button variant="outline">Backup Database</Button>
          </div>
        </CardContent>
      </Card>

      {/* API Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            API & Integrations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Ticketmaster API Key</label>
            <Input type="password" placeholder="••••••••••••" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">StubHub API Key</label>
            <Input type="password" placeholder="••••••••••••" className="mt-1" />
          </div>
          <Button>Save API Keys</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900">Email Notifications</p>
              <p className="text-sm text-slate-500">Receive updates about new content</p>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900">Affiliate Reports</p>
              <p className="text-sm text-slate-500">Weekly affiliate performance reports</p>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </div>
          <Button>Save Notification Settings</Button>
        </CardContent>
      </Card>
    </div>
  )
}
