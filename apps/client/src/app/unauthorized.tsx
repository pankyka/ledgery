import { LoginForm } from '@/components/auth/login-form';

export default function UnauthorizedPage() {
  return (
    <main>
      <h1>401 - Unauthorized</h1>
      <p>Please log in to access this page.</p>
      <LoginForm />
    </main>
  );
}
