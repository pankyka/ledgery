import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Mock data
const activities = [
  {
    id: 1,
    user: 'Kovács János',
    action: 'Bejelentkezés',
    description: 'Sikeres bejelentkezés a rendszerbe',
    timestamp: '2024-03-15 14:30:25',
    type: 'auth',
  },
  {
    id: 2,
    user: 'Nagy Anna',
    action: 'Profil frissítés',
    description: 'Profil információk módosítása',
    timestamp: '2024-03-15 13:45:12',
    type: 'profile',
  },
  {
    id: 3,
    user: 'Szabó Péter',
    action: 'Csapat meghívás',
    description: 'Új tag meghívása: uj.tag@email.com',
    timestamp: '2024-03-15 12:20:08',
    type: 'team',
  },
  {
    id: 4,
    user: 'Kovács János',
    action: 'Beállítások módosítása',
    description: 'Biztonsági beállítások frissítése',
    timestamp: '2024-03-15 11:15:33',
    type: 'settings',
  },
  {
    id: 5,
    user: 'Nagy Anna',
    action: 'Fájl feltöltés',
    description: 'Dokumentum feltöltése: projekt_terv.pdf',
    timestamp: '2024-03-15 10:30:45',
    type: 'file',
  },
];

const getActivityBadge = (type: string) => {
  switch (type) {
    case 'auth':
      return <Badge variant="default">Hitelesítés</Badge>;
    case 'profile':
      return <Badge variant="secondary">Profil</Badge>;
    case 'team':
      return <Badge variant="outline">Csapat</Badge>;
    case 'settings':
      return <Badge>Beállítások</Badge>;
    case 'file':
      return <Badge variant="secondary">Fájl</Badge>;
    default:
      return <Badge variant="outline">Egyéb</Badge>;
  }
};

export function ActivitySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tevékenység napló</CardTitle>
          <CardDescription>
            A szervezethez tartozó összes felhasználói tevékenység nyomon
            követése
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Felhasználó</TableHead>
                <TableHead>Művelet</TableHead>
                <TableHead>Leírás</TableHead>
                <TableHead>Típus</TableHead>
                <TableHead>Időpont</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map(activity => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.user}</TableCell>
                  <TableCell>{activity.action}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {activity.description}
                  </TableCell>
                  <TableCell>{getActivityBadge(activity.type)}</TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {activity.timestamp}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Szűrési beállítások</CardTitle>
          <CardDescription>
            Testreszabhatja, hogy milyen tevékenységeket szeretne látni
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Hitelesítési események</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Profil módosítások</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Csapat események</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Beállítás változások</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Fájl műveletek</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Egyéb események</span>
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
