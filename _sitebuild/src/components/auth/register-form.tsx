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

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('A jelszavak nem egyeznek!');
      return;
    }

    setIsLoading(true);

    // Mock registration - replace with real authentication
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Regisztráció</CardTitle>
        <CardDescription>
          Hozzon létre egy új fiókot a kezdéshez
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Teljes név</Label>
            <Input
              id="name"
              type="text"
              placeholder="Kovács János"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Jelszó megerősítése</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Regisztráció...' : 'Regisztráció'}
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
