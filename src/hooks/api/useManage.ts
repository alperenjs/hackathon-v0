import { useState, useCallback } from 'react';
import { manageService } from '@/lib/api/manage.service';
import type { User, Match } from '@/lib/types/api';
import { ApiError } from '@/lib/api/client';

interface UseManageMutationState {
  loading: boolean;
  error: string | null;
}

export const useCreateUsers = () => {
  const [state, setState] = useState<UseManageMutationState>({
    loading: false,
    error: null,
  });

  const createUsers = useCallback(async (): Promise<User[]> => {
    setState({ loading: true, error: null });
    try {
      const result = await manageService.createUsers();
      setState({ loading: false, error: null });
      return result;
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to create users';
      setState({ loading: false, error });
      throw err;
    }
  }, []);

  return { ...state, createUsers };
};

export const useGenerateMatches = () => {
  const [state, setState] = useState<UseManageMutationState>({
    loading: false,
    error: null,
  });

  const generateMatches = useCallback(async (): Promise<Match[] | null> => {
    setState({ loading: true, error: null });
    try {
      const result = await manageService.generateMatches();
      setState({ loading: false, error: null });
      return result;
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to generate matches';
      setState({ loading: false, error });
      throw err;
    }
  }, []);

  return { ...state, generateMatches };
};

export const useRegenerateMatchesWithAI = () => {
  const [state, setState] = useState<UseManageMutationState>({
    loading: false,
    error: null,
  });

  const regenerateMatchesWithAI = useCallback(async (): Promise<Match[] | null> => {
    setState({ loading: true, error: null });
    try {
      const result = await manageService.regenerateMatchesWithAI();
      setState({ loading: false, error: null });
      return result;
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to regenerate matches with AI';
      setState({ loading: false, error });
      throw err;
    }
  }, []);

  return { ...state, regenerateMatchesWithAI };
};

export const useClearMeets = () => {
  const [state, setState] = useState<UseManageMutationState>({
    loading: false,
    error: null,
  });

  const clearMeets = useCallback(async (): Promise<void> => {
    setState({ loading: true, error: null });
    try {
      await manageService.clearMeets();
      setState({ loading: false, error: null });
    } catch (err) {
      const error = err instanceof ApiError ? err.message : 'Failed to clear meets';
      setState({ loading: false, error });
      throw err;
    }
  }, []);

  return { ...state, clearMeets };
};

