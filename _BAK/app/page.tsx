"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootRedirectPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/dashboard'); // vagy bárhová viszed a bejelentkezetteket
      } else {
        router.replace('/login'); // irány login oldalra
      }
    }
  }, [user, loading, router]);

  return <p>Nem vagy bejelentkezve...</p>;
}
