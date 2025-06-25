import type { Metadata } from 'next';
import { SWRConfig } from 'swr';
import './globals.css';
import { getActivityLogs, getTeamForUser, getUser } from '@/lib/strapi/queries';

export const metadata: Metadata = {
  title: 'Ledgery',
  description: 'Ledgery application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              '/api/user': getUser(),
              '/api/team': getTeamForUser(),
              '/api/tenant-activities': getActivityLogs(),
            },
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
