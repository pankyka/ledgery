"use client";

import { useAuth } from "@/lib/auth-context";

export default function Dashboard() {
  const { user, loading, logout } = useAuth();

  if (loading) return <p>Betöltés...</p>;
  if (!user) return <p>Nem vagy bejelentkezve.</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl">Üdv, {user.email}!</h1>
      <button onClick={logout} className="mt-4 p-2 bg-red-500 text-white">
        Kijelentkezés
      </button>
    </div>
  );
}
