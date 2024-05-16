'use client';

import { LoginForm } from '@/components/LoginForm';
import { PageWrapper } from '@/components/PageWrapper';
import { useAuthUser } from '@/hooks/useAuthUser.hooks';
import { Card, CardBody, Spacer } from '@nextui-org/react';

export default function Login() {
  const { error, mutationLogin } = useAuthUser();

  async function submitLogin(email, password) {
    mutationLogin.mutate({ email, password });
  }

  return (
    <PageWrapper>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1>DISCO</h1>
        <Spacer y={8} />
        {error && <div>Error: {error.message}</div>}
        <Card className="max-w-md w-full">
          <CardBody>
            <LoginForm onSubmit={submitLogin} />
          </CardBody>
        </Card>
      </div>
    </PageWrapper>
  );
}
