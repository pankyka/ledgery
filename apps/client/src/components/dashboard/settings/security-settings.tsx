'use client';

import type React from 'react';

import { useState } from 'react';
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
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Shield } from 'lucide-react';

export function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [deletePassword, setDeletePassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Az új jelszavak nem egyeznek!');
      return;
    }

    setIsChangingPassword(true);

    // Mock password change
    setTimeout(() => {
      setIsChangingPassword(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      alert('Jelszó sikeresen megváltoztatva!');
    }, 1000);
  };

  const handleAccountDeletion = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!deletePassword) {
      alert('Kérjük, adja meg jelszavát a fiók törléséhez!');
      return;
    }

    const confirmed = confirm(
      'Biztosan törölni szeretné a fiókját? Ez a művelet nem visszavonható!',
    );

    if (!confirmed) return;

    setIsDeletingAccount(true);

    // Mock account deletion
    setTimeout(() => {
      setIsDeletingAccount(false);
      alert('Fiók törlése folyamatban... Hamarosan kijelentkezik.');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Jelszó módosítása
          </CardTitle>
          <CardDescription>
            Változtassa meg jelszavát a biztonság érdekében. Használjon erős
            jelszót!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Jelenlegi jelszó</Label>
              <Input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">Új jelszó</Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Új jelszó megerősítése</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={isChangingPassword}>
              {isChangingPassword
                ? 'Jelszó frissítése...'
                : 'Jelszó frissítése'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Kétfaktoros hitelesítés</CardTitle>
          <CardDescription>
            Növelje fiókja biztonságát kétfaktoros hitelesítés bekapcsolásával
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">2FA állapot</h4>
              <p className="text-sm text-gray-600">Jelenleg kikapcsolva</p>
            </div>
            <Button variant="outline">Bekapcsolás</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Veszélyes zóna
          </CardTitle>
          <CardDescription>
            Fiók törlése - ez a művelet nem visszavonható!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              A fiók törlése véglegesen eltávolítja az összes adatát, beleértve
              a projekteket, csapat tagságokat és számlázási információkat. Ez a
              művelet nem visszavonható!
            </AlertDescription>
          </Alert>

          <form onSubmit={handleAccountDeletion} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="deletePassword">
                Jelszó megerősítése a fiók törléséhez
              </Label>
              <Input
                id="deletePassword"
                type="password"
                placeholder="Adja meg jelszavát"
                value={deletePassword}
                onChange={e => setDeletePassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              variant="destructive"
              disabled={isDeletingAccount}
            >
              {isDeletingAccount ? 'Fiók törlése...' : 'Fiók végleges törlése'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
