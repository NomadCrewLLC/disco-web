'use client';

import '@/app/globals.css';
import { FullscreenSpinner } from '@/components/FullscreenSpinner';
import { useAuthUser } from '@/hooks/useAuthUser.hooks';
import { useRouter } from 'next/navigation';

export default function RootLayout({ children }) {
  const router = useRouter();
  const { authUser, error, isFetching } = useAuthUser();

  if (isFetching) {
    return (
      <FullscreenSpinner />
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (authUser) {
    router.push('/meetings');
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}
