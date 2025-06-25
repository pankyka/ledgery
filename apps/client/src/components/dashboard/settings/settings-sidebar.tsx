'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Users, CreditCard, Activity, Shield } from 'lucide-react';
import Link from 'next/link';

interface SettingsSidebarProps {
  activeTab: string;
}

const menuItems = [
  {
    id: 'general',
    label: 'Általános',
    icon: User,
    href: '/settings/general',
  },
  {
    id: 'team',
    label: 'Csapat',
    icon: Users,
    href: '/settings/team',
  },
  {
    id: 'billing',
    label: 'Számlázás',
    icon: CreditCard,
    href: '/settings/billing',
  },
  {
    id: 'activity',
    label: 'Activity',
    icon: Activity,
    href: '/settings/activity',
  },
  {
    id: 'security',
    label: 'Security',
    icon: Shield,
    href: '/settings/security',
  },
];

export function SettingsSidebar({ activeTab }: SettingsSidebarProps) {
  return (
    <Card className="p-4">
      <nav className="space-y-2">
        {menuItems.map(item => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'default' : 'ghost'}
              className="w-full justify-start"
              asChild
            >
              <Link href={item.href}>
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          );
        })}
      </nav>
    </Card>
  );
}
