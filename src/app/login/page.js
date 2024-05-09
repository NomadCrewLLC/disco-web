'use client';

import { getAuthUser, supaLogin, supaLogout } from '@/services/supa.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Input, Button, Spacer, Container, Card, CardBody } from "@nextui-org/react";

export default function Login() {
  const { authUser, error, isFetching, mutationLogin, mutationLogout } = useData();

  async function submitLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    mutationLogin.mutate({ email, password });
  }

  return (
    <div className="dark darkPrimary text-foreground bg-background overflow-y- min-h-screen scroll-smooth selection:bg-primary/10 selection:text-primary text-center p-4">
      {error && <div>Error: {error.message}</div>}
      {isFetching
        ? <div>Loading...</div>
        : !authUser
          ? (
            <div>
              <form
                onSubmit={submitLogin}
                style={{ display: 'flex', flexDirection: 'column', maxWidth: 360 }}>
              <div className="flex items-center justify-center">
                <Card className="max-w-md w-full">
                  <CardBody>
                    <h3 className="text-center">Login</h3>
                    <Spacer y={1} />
                      <Input
                        name="email"
                      clearable
                      underlined
                      fullWidth
                      color="primary"
                      size="lg"
                        placeholder="Email"
                        defaultValue="grailians@gmail.com"
                    />
                    <Spacer y={1.5} />
                      <Input
                        name="password"
                      clearable
                      underlined
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Password"
                        type="password"
                        defaultValue="password"
                    />
                    <Spacer y={1.5} />
                    <Button shadow color="primary" auto type="submit">
                      Sign in
                    </Button>
                  </CardBody>
                </Card>
              </div>
              
                {/* <input type="email" name="email" defaultValue="grailians@gmsail.com" />
                <input type="password" name="password" defaultValue="password" />
                <button type="submit">Login</button> */}
              </form>
              {/* <hr /> */}
              {/* <button onclick={testMeeting}>Save Test Meeting</button> */}
            </div>
          ) : (
            <div>
              <div>You are logged in</div>
              <button onClick={() => mutationLogout.mutate()}>Logout</button>
            </div>
          )}
    </div>
  );
}

function useData() {
  // Access the client
  const queryClient = useQueryClient();

  // Get logged in user
  const { data: authUser, error: authUserError, isFetching } = useQuery({
    queryKey: ['authUser'],
    queryFn: getAuthUser,
  });

  // Mutations
  const mutationLogin = useMutation({
    mutationFn: supaLogin,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
    },
  });
  const mutationLogout = useMutation({
    mutationFn: supaLogout,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
    },
  });

  const error = authUserError || mutationLogin.error || mutationLogout.error;

  return {
    authUser,
    error,
    isFetching,
    mutationLogin,
    mutationLogout,
  };
}