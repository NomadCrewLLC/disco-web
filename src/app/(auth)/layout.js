'use client';

import '@/app/globals.css';
import { FullscreenSpinner } from '@/components/FullscreenSpinner';
import { useAuthUser } from '@/hooks/useAuthUser.hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  const router = useRouter();
  const { authUser, error, isFetching } = useAuthUser();

  useEffect(() => {

  }, []);

  if (isFetching) {
    return (
      <FullscreenSpinner />
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!authUser) {
    router.push('/login');
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}
