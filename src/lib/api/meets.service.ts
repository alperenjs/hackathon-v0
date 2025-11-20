import { apiClient } from './client';
import type { Meet, MeetListGenericResult } from '../types/api';

export const meetsService = {
  /**
   * Get all meets
   */
  getMeets: async (): Promise<Meet[]> => {
    const result = await apiClient.get<MeetListGenericResult>('/api/Meets/get-meets');
    return result.data || [];
  },
};

