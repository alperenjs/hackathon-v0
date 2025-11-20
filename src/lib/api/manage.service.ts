import { apiClient } from './client';
import type { User, UserListGenericResult, MatchListGenericResult } from '../types/api';

export const manageService = {
  /**
   * Create users
   */
  createUsers: async (): Promise<User[]> => {
    const result = await apiClient.get<UserListGenericResult>('/api/Manage/create-users');
    return result.data || [];
  },

  /**
   * Generate matches
   */
  generateMatches: async (): Promise<MatchListGenericResult['data']> => {
    const result = await apiClient.get<MatchListGenericResult>('/api/Manage/generate-matches');
    return result.data || [];
  },
};

