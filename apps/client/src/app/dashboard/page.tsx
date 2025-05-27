'use client';

import ProtectedLayout from '@/components/protected-layout';
import { useAuth } from '@/lib/auth-context';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedLayout>
      <div className="p-4">
        <h1 className="text-xl">Üdv, {user?.email}!</h1>
        <button onClick={logout} className="mt-4 p-2 bg-red-500 text-white">
          Kijelentkezés
        </button>
      </div>
    </ProtectedLayout>
  );
}