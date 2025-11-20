import OngoingList from '@/features/reservation/OnGoingList';
import { useApprovedMatches } from '@/hooks/api/useMatches';
import { matchToMentorshipMatch } from '@/lib/utils/matchAdapter';
import type { MentorshipMatch } from '@/data/mockData';
import type { Match } from '@/lib/types/api';

interface OngoingListPageProps {
  userId?: number;
  isNotHR?: boolean;
}

export default function OngoingListPage({ userId, isNotHR }: OngoingListPageProps = {}) {
  const { data: matches, loading, error } = useApprovedMatches();

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
    console.log('Filtering matches for non-HR user:', { 
      userId, 
      userIdType: typeof userId,
      isNotHR, 
      totalMatches: matches?.length 
    });
    
    filteredMatches = (matches || []).filter((match) => {
      // Use strict equality and ensure both are numbers
      const mentorIdMatch = match.mentorId !== null && 
                           match.mentorId !== undefined && 
                           Number(match.mentorId) === Number(userId);
      const menteeIdMatch = match.menteeId !== null && 
                           match.menteeId !== undefined && 
                           Number(match.menteeId) === Number(userId);
      const shouldInclude = mentorIdMatch || menteeIdMatch;
      
      if (!shouldInclude) {
        console.log('Excluding match:', { 
          matchId: match.id, 
          mentorId: match.mentorId, 
          menteeId: match.menteeId, 
          userId,
          mentorIdType: typeof match.mentorId,
          menteeIdType: typeof match.menteeId
        });
      }
      
      return shouldInclude;
    });
    
    console.log('Filtered matches count:', filteredMatches.length, 'out of', matches?.length);
  } else {
    console.log('No filtering applied:', { isNotHR, userId, userIdType: typeof userId });
  }

  const mentorshipMatches: MentorshipMatch[] = filteredMatches.map(matchToMentorshipMatch);
console.log('mentorshipMatches', mentorshipMatches);
  return (
    <div>
      <OngoingList 
        matches={mentorshipMatches} 
        onDetailClick={() => { }} 
      />
    </div>
  );
}

