import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
              <Input id="firstName" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Vezetéknév</Label>
              <Input id="lastName" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email cím</Label>
            <Input
              id="email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefonszám</Label>
            <Input id="phone" type="tel" defaultValue="+36 30 123 4567" />
          </div>
          <Button>Mentés</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Számlázási adatok</CardTitle>
          {/* <CardDescription>abc</CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orgName">Cégnév</Label>
            <Input id="orgName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="orgTaxNumber">Adószám</Label>
            <Input id="orgTaxNumber" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="orgAddress">Székhely</Label>
            <Input id="orgAddress" />
          </div>
          <Button>Mentés</Button>
        </CardContent>
      </Card>
    </div>
  );
}
