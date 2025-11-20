import { apiClient } from './client';
import type { Match, MatchGenericResult, MatchListGenericResult } from '../types/api';

export const matchesService = {
  /**
   * Get all waiting matches
   */
  getWaitingMatches: async (): Promise<Match[]> => {
    const result = await apiClient.get<MatchListGenericResult>('/api/Matches/get-waiting-matches');
    return result.data || [];
  },

  /**
   * Get all approved matches
   */
  getApprovedMatches: async (): Promise<Match[]> => {
    const result = await apiClient.get<MatchListGenericResult>('/api/Matches/get-approved-matches');
    return result.data || [];
  },

  /**
   * Get all rejected matches
   */
  getRejectedMatches: async (): Promise<Match[]> => {
    const result = await apiClient.get<MatchListGenericResult>('/api/Matches/get-rejected-matches');
    return result.data || [];
  },

  /**
   * Approve a match
   */
  approveMatch: async (matchId: number): Promise<Match> => {
    const result = await apiClient.post<MatchGenericResult>(`/api/Matches/approve-match/${matchId}`);
    return result.data;
  },

  /**
   * Reject a match
   */
  rejectMatch: async (matchId: number): Promise<Match> => {
    const result = await apiClient.post<MatchGenericResult>(`/api/Matches/reject-match/${matchId}`);
    return result.data;
  },
};

