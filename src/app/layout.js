import { Navigation } from '@/components/Navigation';
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Disco - AI Powered Discovery Notes',
  description: 'Automatically Compile Discovery Call Notes into Common Formats like Snapshots',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <ReactQueryClientProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <main
              id="app/layout"
              className="overflow-y- min-h-screen scroll-smooth bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
              {/* NavBar */}
              <Navigation />
              {children}
            </main>
          </ReactQueryClientProvider>
        </Providers>
      </body>
    </html>
  );
}
