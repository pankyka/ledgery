'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { getToken, logout as doLogout } from "./auth";
import axios from "axios";

interface User {
  id: number;
  email: string;
  username: string;
  [key: string]: any;
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('AuthProvider betöltve')
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data);
    } catch (err) {
      console.error("Nem sikerült betölteni a felhasználót:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('AuthProvider: useEffect indul');
    fetchUser();
  }, []);

  const logout = () => {
    doLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
