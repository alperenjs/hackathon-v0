import { useState, useCallback } from 'react';
import { toast } from '@/hooks/useToast';
import ReservationList from '@/features/reservation/ReservationList';
import { useWaitingMatches, useApproveMatch, useRejectMatch } from '@/hooks/api/useMatches';
import { matchToMentorshipMatch } from '@/lib/utils/matchAdapter';
import { MeetDetails } from '@/features/meet/MeetDetails';
import type { MentorshipMatch } from '@/data/mockData';

export default function ReservationListPage() {
  const { data: matches, loading, error, refetch } = useWaitingMatches();
  const { approveMatch } = useApproveMatch();
  const { rejectMatch } = useRejectMatch();
  const [removedMatchIds, setRemovedMatchIds] = useState<Set<string>>(new Set());
  const [loadingMatchIds, setLoadingMatchIds] = useState<Set<string>>(new Set());
  const [selectedMatch, setSelectedMatch] = useState<MentorshipMatch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApprove = useCallback(async (matchId: string) => {
    // Prevent multiple clicks
    if (loadingMatchIds.has(matchId)) return;
    
    setLoadingMatchIds(prev => new Set(prev).add(matchId));
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
    } finally {
      setLoadingMatchIds(prev => {
        const next = new Set(prev);
        next.delete(matchId);
        return next;
      });
    }
  }, [approveMatch, refetch, loadingMatchIds]);

  const handleReject = useCallback(async (matchId: string) => {
    // Prevent multiple clicks
    if (loadingMatchIds.has(matchId)) return;
    
    setLoadingMatchIds(prev => new Set(prev).add(matchId));
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
    } finally {
      setLoadingMatchIds(prev => {
        const next = new Set(prev);
        next.delete(matchId);
        return next;
      });
    }
  }, [rejectMatch, refetch, loadingMatchIds]);

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

  const handleDetailClick = (matchId: string) => {
    const match = mentorshipMatches.find(m => m.id === matchId);
    if (match) {
      setSelectedMatch(match);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <ReservationList 
        matches={mentorshipMatches} 
        onApprove={handleApprove} 
        onReject={handleReject}
        onDetailClick={handleDetailClick}
        loadingMatchIds={loadingMatchIds}
      />
      <MeetDetails 
        match={selectedMatch} 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        hideMeetingTracking={true}
      />
    </>
  );
}

