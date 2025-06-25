'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ActionState } from '@/lib/auth/middleware';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import { registerAction } from './actions';

export function RegisterForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    registerAction,
    { error: '' },
  );

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Regisztráció</CardTitle>
        <CardDescription>
          Hozzon létre egy új fiókot a kezdéshez
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Teljes név</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Kovács János"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email cím</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="pelda@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Jelszó</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Jelszó megerősítése</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? 'Regisztráció...' : 'Regisztráció'}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Már van fiókja? </span>
          <Link href="/login" className="text-blue-600 hover:underline">
            Lépjen be itt
          </Link>
        </div>
        <div className="mt-2 text-center">
          <Link href="/" className="text-sm text-gray-600 hover:underline">
            Vissza a főoldalra
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
