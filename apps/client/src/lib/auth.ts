import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface AuthResponse {
  jwt: string;
  user: {
    id: number;
    email: string;
    username: string;
    [key: string]: any;
  };
}

export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await axios.post(`${API_URL}/auth/local`, {
    identifier: email,
    password,
  });
  const data = res.data as AuthResponse;
  localStorage.setItem("token", data.jwt);
  return data;
}

export async function registerWithTenant(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await axios.post(`${API_URL}/auth/register-with-tenant`, {
    email,
    password,
  });
  const data = res.data as AuthResponse;
  localStorage.setItem("token", data.jwt);
  return data;
}

export function logout() {
  localStorage.removeItem("token");
}

export function getToken(): string | null {
  return localStorage.getItem("token");
}
