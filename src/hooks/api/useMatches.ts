import { useState, useEffect, useCallback } from 'react';
import { matchesService } from '@/lib/api/matches.service';
import type { Match } from '@/lib/types/api';
import { ApiError } from '@/lib/api/client';

interface UseMatchesState {
  data: Match[] | null;
  loading: boolean;
  error: string | null;
}

export const useWaitingMatches = () => {
  const [state, setState] = useState<UseMatchesState>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchMatches = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const data = await matchesService.getWaitingMatches();
      setState({ data, loading: false, error: null });
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to fetch waiting matches';
      setState({ data: null, loading: false, error });
    }
  }, []);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  return { ...state, refetch: fetchMatches };
};

export const useApprovedMatches = () => {
  const [state, setState] = useState<UseMatchesState>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchMatches = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const data = await matchesService.getApprovedMatches();
      setState({ data, loading: false, error: null });
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to fetch approved matches';
      setState({ data: null, loading: false, error });
    }
  }, []);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  return { ...state, refetch: fetchMatches };
};

export const useRejectedMatches = () => {
  const [state, setState] = useState<UseMatchesState>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchMatches = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const data = await matchesService.getRejectedMatches();
      setState({ data, loading: false, error: null });
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to fetch rejected matches';
      setState({ data: null, loading: false, error });
    }
  }, []);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  return { ...state, refetch: fetchMatches };
};

interface UseMatchMutationState {
  loading: boolean;
  error: string | null;
}

export const useApproveMatch = () => {
  const [state, setState] = useState<UseMatchMutationState>({
    loading: false,
    error: null,
  });

  const approveMatch = useCallback(async (matchId: number) => {
    setState({ loading: true, error: null });
    try {
      const result = await matchesService.approveMatch(matchId);
      setState({ loading: false, error: null });
      return result;
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to approve match';
      setState({ loading: false, error });
      throw err;
    }
  }, []);

  return { ...state, approveMatch };
};

export const useRejectMatch = () => {
  const [state, setState] = useState<UseMatchMutationState>({
    loading: false,
    error: null,
  });

  const rejectMatch = useCallback(async (matchId: number) => {
    setState({ loading: true, error: null });
    try {
      const result = await matchesService.rejectMatch(matchId);
      setState({ loading: false, error: null });
      return result;
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to reject match';
      setState({ loading: false, error });
      throw err;
    }
  }, []);

  return { ...state, rejectMatch };
};

