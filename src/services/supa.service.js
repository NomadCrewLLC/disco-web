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
  if (error) throw error;
  return data;
};

export const supaLogout = async () => {
  const result = await supabase.auth.signOut();
};

export const getMeetings = async () => {
  const { data, error } = await supabase
    .from('meetings')
    .select('*');
  if (error) {
    throw error;
  }
  return data;
};

export const supaGenerateSummary = async (meetingId) => {
  const { data, error } = await supabase.functions.invoke('openai', {
    body: JSON.stringify({ meetingId }),
  });
  if (error) {
    throw error;
  }
  return data;
};