import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export const getAuthUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    if (error.name !== 'AuthSessionMissingError') {
      console.log(`getAuthUser error`, error);
    }
    return null;
  }
  return data.user;
};

export const supaLogin = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  console.log('supaLogin data', data);
  if (error) throw error;
  return data;
};

export const supaLogout = async () => {
  const result = await supabase.auth.signOut();
  console.log(`supaLogout result`, result);
};