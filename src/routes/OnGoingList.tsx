import OngoingList from '@/features/reservation/OnGoingList';
import { useApprovedMatches } from '@/hooks/api/useMatches';
import { matchToMentorshipMatch } from '@/lib/utils/matchAdapter';
import type { MentorshipMatch } from '@/data/mockData';

export default function OngoingListPage() {
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

  const mentorshipMatches: MentorshipMatch[] = matches 
    ? matches.map(matchToMentorshipMatch)
    : [];

  return (
    <div>
      <OngoingList 
        matches={mentorshipMatches} 
        onDetailClick={() => { }} 
      />
    </div>
  );
}

