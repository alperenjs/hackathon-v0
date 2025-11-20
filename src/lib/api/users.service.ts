import { apiClient } from './client';
import type { User, UserGenericResult } from '../types/api';

export const usersService = {
  /**
   * Get current user
   */
  getUser: async (): Promise<User> => {
    const result = await apiClient.get<UserGenericResult>('/api/Users/get-user');
    return result.data;
  },
};

