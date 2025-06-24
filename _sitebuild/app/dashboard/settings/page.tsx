"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SettingsSidebar } from "@/components/dashboard/settings/settings-sidebar"
import { GeneralSettings } from "@/components/dashboard/settings/general-settings"
import { TeamSettings } from "@/components/dashboard/settings/team-settings"
import { BillingSettings } from "@/components/dashboard/settings/billing-settings"
import { ActivitySettings } from "@/components/dashboard/settings/activity-settings"
import { SecuritySettings } from "@/components/dashboard/settings/security-settings"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings />
      case "team":
        return <TeamSettings />
      case "billing":
        return <BillingSettings />
      case "activity":
        return <ActivitySettings />
      case "security":
        return <SecuritySettings />
      default:
        return <GeneralSettings />
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Beállítások</h1>
          <p className="text-gray-600">Kezelje fiókja és szervezete beállításait</p>
        </div>

        <div className="flex gap-8">
          <div className="w-64 flex-shrink-0">
            <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </DashboardLayout>
  )
}
