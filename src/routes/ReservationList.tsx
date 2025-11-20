import { useState, useCallback } from 'react';
import { toast } from '@/hooks/useToast';
import ReservationList from '@/features/reservation/ReservationList';
import { useWaitingMatches, useApproveMatch, useRejectMatch } from '@/hooks/api/useMatches';
import { matchToMentorshipMatch } from '@/lib/utils/matchAdapter';
import type { MentorshipMatch } from '@/data/mockData';

export default function ReservationListPage() {
  const { data: matches, loading, error, refetch } = useWaitingMatches();
  const { approveMatch, loading: approving } = useApproveMatch();
  const { rejectMatch, loading: rejecting } = useRejectMatch();
  const [removedMatchIds, setRemovedMatchIds] = useState<Set<string>>(new Set());

  const handleApprove = useCallback(async (matchId: string) => {
    try {
      await approveMatch(parseInt(matchId));
      toast({
        title: 'Success',
        description: 'Match approved successfully!',
        variant: 'success',
      });
      // Remove the item from the list immediately
      setRemovedMatchIds(prev => new Set(prev).add(matchId));
      // Optionally refetch to ensure data consistency
      setTimeout(() => {
        refetch();
      }, 500);
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to approve match. Please try again.',
        variant: 'error',
      });
      console.error('Failed to approve match:', err);
    }
  }, [approveMatch, refetch]);

  const handleReject = useCallback(async (matchId: string) => {
    try {
      await rejectMatch(parseInt(matchId));
      toast({
        title: 'Success',
        description: 'Match rejected successfully!',
        variant: 'success',
      });
      // Remove the item from the list immediately
      setRemovedMatchIds(prev => new Set(prev).add(matchId));
      // Optionally refetch to ensure data consistency
      setTimeout(() => {
        refetch();
      }, 500);
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to reject match. Please try again.',
        variant: 'error',
      });
      console.error('Failed to reject match:', err);
    }
  }, [rejectMatch, refetch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-gray-500">Loading matches...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  const mentorshipMatches: MentorshipMatch[] = matches 
    ? matches
        .map(matchToMentorshipMatch)
        .filter(match => !removedMatchIds.has(match.id))
    : [];

  return (
    <div>
      <ReservationList 
        matches={mentorshipMatches} 
        onApprove={handleApprove} 
        onReject={handleReject}
        loading={approving || rejecting}
      />
    </div>
  );
}

