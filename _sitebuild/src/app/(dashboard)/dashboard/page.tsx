import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Üdvözöljük a dashboard-ban!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Összesítés</CardTitle>
              <CardDescription>Gyors áttekintés</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-gray-600">Aktív elemek</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statisztikák</CardTitle>
              <CardDescription>Havi adatok</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-gray-600">Új elemek</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teljesítmény</CardTitle>
              <CardDescription>Aktuális állapot</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-gray-600">Rendszer állapot</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Üres dashboard</CardTitle>
            <CardDescription>Itt kezdheti el a munkát</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Ez egy üres dashboard. Itt jeleníthetők meg a különböző modulok és funkciók. A navigation bar segítségével
              navigálhat a különböző oldalak között.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
