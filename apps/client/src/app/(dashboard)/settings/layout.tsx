"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SettingsSidebar } from "@/components/dashboard/settings/settings-sidebar"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Extract the active tab from the pathname
  const getActiveTab = () => {
    if (pathname.includes("/team")) return "team"
    if (pathname.includes("/billing")) return "billing"
    if (pathname.includes("/activity")) return "activity"
    if (pathname.includes("/security")) return "security"
    return "general"
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
            <SettingsSidebar activeTab={getActiveTab()} />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </DashboardLayout>
  )
}
