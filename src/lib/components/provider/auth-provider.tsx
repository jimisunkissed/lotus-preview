import { useAuthStore } from '@/hooks/auth-store';
import { getSingleSupabase } from '@/lib/api/supabase-api';
import { supabase } from '@/lib/config/supabase-client-config';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import type { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { AuthModal } from '@/lib/components/modal/auth-modal';

export function AuthProvider(): React.ReactNode {
  const auth = useAuthStore();

  const handleAuthChange = async (_event: AuthChangeEvent, session: Session | null) => {
    try {
      auth.setLoaded(false);
      if (session?.user) {
        const user = await getSingleSupabase({
          tableId: 'user',
          id: session.user.id,
        });

        auth.setSignedIn(true);
        auth.setAccessToken(session.access_token);
        auth.setUserId(user.id);
        auth.setEmail(user.email);
        auth.setFirstName(user.first_name);
        auth.setLastName(user.last_name);
      } else {
        auth.setSignedIn(false);
        auth.setAccessToken(null);
        auth.setUserId(null);
        auth.setEmail(null);
        auth.setFirstName(null);
        auth.setLastName(null);
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      auth.setLoaded(true);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleAuthChange('INITIAL_SESSION', session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event !== 'INITIAL_SESSION') {
        handleAuthChange(event, session);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AuthModal />;
}
