import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider';
import { Inter } from 'next/font/google';
import { Providers } from '../providers';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Disco Login',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <ReactQueryClientProvider>
            {children}
          </ReactQueryClientProvider>
        </Providers>
      </body>
    </html>
  );
}
