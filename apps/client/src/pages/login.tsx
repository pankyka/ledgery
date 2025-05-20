import { useState } from "react";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      console.log("Sikeres belépés:", res.user);
    } catch (err) {
      console.error("Hiba a belépéskor:", err);
    }
  };

  const redirectOAuth = (provider: "google" | "microsoft") => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/connect/${provider}`;
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl mb-4">Bejelentkezés</h1>
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
      <button
        onClick={handleLogin}
        className="w-full p-2 bg-blue-500 text-white"
      >
        Bejelentkezés
      </button>

      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => redirectOAuth("google")}
          className="w-full p-2 bg-red-500 text-white"
        >
          Google belépés
        </button>
        <button
          onClick={() => redirectOAuth("microsoft")}
          className="w-full p-2 bg-blue-700 text-white"
        >
          Microsoft belépés
        </button>
      </div>

      <p className="mt-4 text-sm">
        Nincs még fiókod?{" "}
        <a href="/signup" className="text-blue-600 underline">
          Regisztrálj
        </a>
      </p>
    </div>
  );
}
