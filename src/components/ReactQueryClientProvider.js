'use client';
/*
 https://supabase.com/blog/react-query-nextjs-app-router-cache-helpers
 The QueryClientProvider can only be used in client components and can't be
 directly embedded in the layout.tsx file. Therefore make sure to create a client component first
 */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export function ReactQueryClientProvider({ children }) {
  const [client, setClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          // With SSR, we usually want to set some default staleTime
          // above 0 to avoid refetching immediately on the client
          staleTime: 6 * 1000,
        },
      },
    });
  });
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
