'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication - replace with real authentication
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Belépés</CardTitle>
        <CardDescription>
          Adja meg email címét és jelszavát a belépéshez
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email cím</Label>
            <Input
              id="email"
              type="email"
              placeholder="pelda@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Jelszó</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Belépés...' : 'Belépés'}
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
