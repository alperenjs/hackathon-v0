import { useState } from 'react';
import type { MentorshipMatch } from '@/data/mockData';
import { OngoingItem } from './OnGoingItem';
import { MeetDetails } from '@/features/meet/MeetDetails';

interface OngoingListProps {
  matches: MentorshipMatch[];
  onDetailClick: (matchId: string) => void;
}

function OngoingList({ matches, onDetailClick }: OngoingListProps) {
  const [selectedMatch, setSelectedMatch] = useState<MentorshipMatch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailClick = (matchId: string) => {
    const match = matches.find(m => m.id === matchId);
    if (match) {
      setSelectedMatch(match);
      setIsModalOpen(true);
    }
    onDetailClick(matchId);
  };

  if (matches.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-500">No matches found</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Pair Info
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Match Details
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Meeting Details
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <OngoingItem
                  key={match.id}
                  match={match}
                  index={index}
                  onDetailClick={handleDetailClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <MeetDetails 
        match={selectedMatch} 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
}

export default OngoingList;
