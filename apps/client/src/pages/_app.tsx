import type { AppProps } from 'next/app';
import '../globals.css';
import { AuthProvider } from '../lib/auth-context';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}