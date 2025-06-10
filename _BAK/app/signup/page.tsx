'use client';

import { registerWithTenant } from '@/lib/auth';
import { useState } from 'react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const res = await registerWithTenant(email, password);
      console.log('Signup success:', res.user);
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl mb-4">Regisztráció</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border"
      />
      <input
        type="password"
        placeholder="Jelszó"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border"
      />
      <button onClick={handleSignup} className="w-full p-2 bg-green-500 text-white">
        Regisztráció
      </button>

      <p className="mt-4 text-sm">
        Van már fiókod? <a href="/login" className="text-blue-600 underline">Jelentkezz be</a>
      </p>
    </div>
  );
}