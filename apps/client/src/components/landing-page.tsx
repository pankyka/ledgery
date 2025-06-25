import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">DashboardApp</div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Belépés</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Regisztráció</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Üdvözöljük a DashboardApp-ban
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Egy modern, multi-tenant dashboard megoldás, amely segít kezelni
            üzleti folyamatait egyszerűen és hatékonyan.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link href="/register">Kezdjük el</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Már van fiókom</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card>
            <CardHeader>
              <CardTitle>Egyszerű kezelés</CardTitle>
              <CardDescription>
                Intuitív felhasználói felület, amely könnyű használatot biztosít
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Minden funkció egy helyen, átlátható és logikus elrendezésben.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Biztonságos</CardTitle>
              <CardDescription>
                Adatai biztonságban vannak modern titkosítási technológiákkal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Többszintű biztonsági rendszer védi az Ön adatait.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skálázható</CardTitle>
              <CardDescription>
                Növekedjen velünk - a rendszer alkalmazkodik az igényeihez
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Kis csapattól nagy vállalatokig - minden méretű szervezet
                számára.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
