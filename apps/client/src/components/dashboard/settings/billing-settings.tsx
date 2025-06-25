'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Download, CreditCard } from 'lucide-react';

// Mock data
const invoices = [
  {
    id: 'INV-001',
    date: '2024-03-01',
    amount: '29.990 Ft',
    status: 'Kifizetve',
    period: '2024 Március',
  },
  {
    id: 'INV-002',
    date: '2024-02-01',
    amount: '29.990 Ft',
    status: 'Kifizetve',
    period: '2024 Február',
  },
  {
    id: 'INV-003',
    date: '2024-01-01',
    amount: '29.990 Ft',
    status: 'Kifizetve',
    period: '2024 Január',
  },
];

export function BillingSettings() {
  const handleDownload = (invoiceId: string) => {
    // Mock download
    alert(`Számla letöltése: ${invoiceId}`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Jelenlegi előfizetés</CardTitle>
          <CardDescription>Az Ön aktuális előfizetési csomagja</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="text-lg font-semibold">Pro csomag</h3>
              <p className="text-gray-600">
                Teljes funkcionalitás korlátlan felhasználóval
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Következő számlázás: 2024. április 1.
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">29.990 Ft</p>
              <p className="text-sm text-gray-600">/hónap</p>
              <Badge className="mt-2">Aktív</Badge>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">
              <CreditCard className="mr-2 h-4 w-4" />
              Csomag módosítása
            </Button>
            <Button variant="outline">Fizetési mód frissítése</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Számlázási előzmények</CardTitle>
          <CardDescription>
            Korábbi számlák megtekintése és letöltése
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Számla szám</TableHead>
                <TableHead>Dátum</TableHead>
                <TableHead>Időszak</TableHead>
                <TableHead>Összeg</TableHead>
                <TableHead>Állapot</TableHead>
                <TableHead className="w-[100px]">Letöltés</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map(invoice => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.period}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge variant="default">{invoice.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownload(invoice.id)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
