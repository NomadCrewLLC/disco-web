import { getAuthUser, supaLogin, supaLogout } from '@/services/supa.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useAuthUser() {
  // Access the client
  const queryClient = useQueryClient();

  // Get logged in user
  const {
    data: authUser,
    error: authUserError,
    isFetching,
  } = useQuery({
    queryKey: ['authUser'],
    queryFn: getAuthUser,
  });

  // Mutations
  const mutationLogin = useMutation({
    mutationFn: supaLogin,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
      // queryClient.invalidateQueries({ queryKey: ['getMeetings'] });
    },
  });
  const mutationLogout = useMutation({
    mutationFn: supaLogout,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
      // queryClient.invalidateQueries({ queryKey: ['getMeetings'] });
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