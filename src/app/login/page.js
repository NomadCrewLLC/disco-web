'use client';

import { getAuthUser, supaLogin, supaLogout } from '@/services/supa.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function Login() {
  const { authUser, error, isFetching, mutationLogin, mutationLogout } = useData();

  async function submitLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    mutationLogin.mutate({ email, password });
  }

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {isFetching
        ? <div>Loading...</div>
        : !authUser
          ? (
            <div>
              <form
                onSubmit={submitLogin}
                style={{ display: 'flex', flexDirection: 'column', maxWidth: 360 }}>
                <input type="email" name="email" defaultValue="grailians@gmsail.com" />
                <input type="password" name="password" defaultValue="password" />
                <button type="submit">Login</button>
              </form>
              <hr />
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