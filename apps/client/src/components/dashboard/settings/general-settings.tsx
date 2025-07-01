'use client';

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
import { useActionState } from 'react';
import { ActionState } from '@/lib/auth/middleware';
import { saveGeneralSettings } from './actions';

export function GeneralSettings() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    saveGeneralSettings,
    {},
  );
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profil információk</CardTitle>
          <CardDescription>Frissítse személyes adatait</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={formAction} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Keresztnév</Label>
                <Input id="firstName" name="firstName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Vezetéknév</Label>
                <Input id="lastName" name="lastName" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefonszám</Label>
              <Input id="phone" name="phone" type="tel" />
            </div>
            <Button type="submit" disabled={pending}>Mentés</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Számlázási adatok</CardTitle>
          {/* <CardDescription>abc</CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName">Cégnév</Label>
              <Input id="orgName" name="orgName" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="orgTaxNumber">Adószám</Label>
              <Input id="orgTaxNumber" name="orgTaxNumber" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="orgAddress">Székhely</Label>
              <Input id="orgAddress" name="orgAddress" />
            </div>
            <Button type="submit" disabled={pending}>Mentés</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
