'use client';

import { useAuthUser } from '@/hooks/useAuthUser.hooks';
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Image from 'next/image';

export function Navigation() {
  const { authUser, mutationLogout, isFetching } = useAuthUser();

  return (
    <Navbar
      className="fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80">
      <NavbarBrand>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/meetings" aria-current="page">
            Meetings
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!isFetching && (
          <>
            {authUser ? (
              <>
                <NavbarItem className="hidden lg:flex">
                  <Button color="default" variant="flat" onClick={() => mutationLogout.mutate()}>Logout</Button>
                </NavbarItem>
              </>
            ) : (
              <>
                <NavbarItem className="hidden lg:flex">
                  <Link href="/login">Login</Link>
                </NavbarItem>
              </>
            )}
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}