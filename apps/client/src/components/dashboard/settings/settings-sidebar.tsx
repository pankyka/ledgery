"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { User, Users, CreditCard, Activity, Shield } from "lucide-react"

interface SettingsSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const menuItems = [
  {
    id: "general",
    label: "Általános",
    icon: User,
  },
  {
    id: "team",
    label: "Csapat",
    icon: Users,
  },
  {
    id: "billing",
    label: "Számlázás",
    icon: CreditCard,
  },
  {
    id: "activity",
    label: "Activity",
    icon: Activity,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
  },
]

export function SettingsSidebar({ activeTab, onTabChange }: SettingsSidebarProps) {
  return (
    <Card className="p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          )
        })}
      </nav>
    </Card>
  )
}
