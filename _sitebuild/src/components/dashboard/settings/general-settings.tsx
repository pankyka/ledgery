import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function GeneralSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profil információk</CardTitle>
          <CardDescription>Frissítse személyes adatait</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Keresztnév</Label>
              <Input id="firstName" defaultValue="János" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Vezetéknév</Label>
              <Input id="lastName" defaultValue="Kovács" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email cím</Label>
            <Input id="email" type="email" defaultValue="janos.kovacs@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefonszám</Label>
            <Input id="phone" type="tel" defaultValue="+36 30 123 4567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bemutatkozás</Label>
            <Textarea id="bio" placeholder="Írjon magáról..." />
          </div>
          <Button>Mentés</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Szervezet információk</CardTitle>
          <CardDescription>Szervezete alapvető adatai</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orgName">Szervezet neve</Label>
            <Input id="orgName" defaultValue="Példa Kft." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="orgWebsite">Weboldal</Label>
            <Input id="orgWebsite" type="url" defaultValue="https://pelda.hu" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="orgDescription">Leírás</Label>
            <Textarea id="orgDescription" placeholder="Szervezet leírása..." />
          </div>
          <Button>Mentés</Button>
        </CardContent>
      </Card>
    </div>
  )
}
