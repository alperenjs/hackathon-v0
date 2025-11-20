import { useState, useEffect, useCallback } from 'react';
import { meetsService } from '@/lib/api/meets.service';
import type { Meet } from '@/lib/types/api';
import { ApiError } from '@/lib/api/client';

interface UseMeetsState {
  data: Meet[] | null;
  loading: boolean;
  error: string | null;
}

export const useMeets = () => {
  const [state, setState] = useState<UseMeetsState>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchMeets = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const data = await meetsService.getMeets();
      setState({ data, loading: false, error: null });
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to fetch meets';
      setState({ data: null, loading: false, error });
    }
  }, []);

  useEffect(() => {
    fetchMeets();
  }, [fetchMeets]);

  return { ...state, refetch: fetchMeets };
};

