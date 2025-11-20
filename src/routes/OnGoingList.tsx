import OngoingList from '@/features/reservation/OnGoingList';
import { useApprovedMatches } from '@/hooks/api/useMatches';
import { useMeetsByMatchId } from '@/hooks/api/useMeets';
import { matchToMentorshipMatch } from '@/lib/utils/matchAdapter';
import type { MentorshipMatch } from '@/data/mockData';
import type { Match } from '@/lib/types/api';
import { useState } from 'react';

interface OngoingListPageProps {
  userId?: number;
  isNotHR?: boolean;
}

export default function OngoingListPage({ userId, isNotHR }: OngoingListPageProps = {}) {
  const { data: matches, loading, error } = useApprovedMatches();
  const { fetchMeetsByMatchId, loading: loadingMeets } = useMeetsByMatchId();
  const [meetsData, setMeetsData] = useState<Record<string, any[]>>({});

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

  // Filter matches for non-HR users: only show matches where user is mentor or mentee
  let filteredMatches: Match[] = matches || [];
  
  // Always filter when isNotHR is true and userId is valid
  if (isNotHR && userId !== undefined && userId !== null && typeof userId === 'number') {
    filteredMatches = (matches || []).filter((match) => {
      // Use strict equality and ensure both are numbers
      const mentorIdMatch = match.mentorId !== null && 
                           match.mentorId !== undefined && 
                           Number(match.mentorId) === Number(userId);
      const menteeIdMatch = match.menteeId !== null && 
                           match.menteeId !== undefined && 
                           Number(match.menteeId) === Number(userId);
      return mentorIdMatch || menteeIdMatch;
    });
  }

  const mentorshipMatches: MentorshipMatch[] = filteredMatches.map(matchToMentorshipMatch);

  const handleDetailClick = async (matchId: string) => {
    try {
      // Fetch meets for this match using get-meets-by-matchid
      const matchIdNum = parseInt(matchId);
      if (!isNaN(matchIdNum)) {
        const meets = await fetchMeetsByMatchId(matchIdNum);
        setMeetsData(prev => ({ ...prev, [matchId]: meets || [] }));
      }
    } catch (err) {
      console.error('Failed to fetch meets:', err);
    }
  };

  return (
    <div>
      <OngoingList 
        matches={mentorshipMatches} 
        onDetailClick={handleDetailClick}
        meetsData={meetsData}
        loadingMeets={loadingMeets}
      />
    </div>
  );
}

