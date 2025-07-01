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
import { useActionState } from 'react';
import { loginAction } from './actions';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { unauthorized } from 'next/navigation';

export function LoginForm() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    loginAction,
    { error: '' },
  );

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Belépés</CardTitle>
        <CardDescription>
          Adja meg email címét és jelszavát a belépéshez
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email cím</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Jelszó</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          {state.error ? (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          ) : (
            ''
          )}
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? 'Belépés...' : 'Belépés'}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Még nincs fiókja? </span>
          <Link href="/register" className="text-blue-600 hover:underline">
            Regisztráljon itt
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
