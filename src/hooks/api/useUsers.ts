import { useState, useEffect, useCallback } from 'react';
import { usersService } from '@/lib/api/users.service';
import type { User } from '@/lib/types/api';
import { ApiError } from '@/lib/api/client';

interface UseUserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

export const useUser = () => {
  const [state, setState] = useState<UseUserState>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchUser = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const data = await usersService.getUser();
      setState({ data, loading: false, error: null });
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to fetch user';
      setState({ data: null, loading: false, error });
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { ...state, refetch: fetchUser };
};

