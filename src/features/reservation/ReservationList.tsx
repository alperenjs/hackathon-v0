import type { MentorshipMatch } from '@/data/mockData';
import { useState } from 'react';
import { ReservationItem } from './ReservationItem';

interface MentorshipMatchTableProps {
  matches: MentorshipMatch[];
  onViewDetails: (match: MentorshipMatch) => void;
  onApprove: (matchId: string) => void;
  onReject: (matchId: string) => void;
}

function MentorshipMatchTable({ matches, onViewDetails, onApprove, onReject }: MentorshipMatchTableProps) {
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());

  const toggleNotes = (matchId: string) => {
    const newExpanded = new Set(expandedNotes);
    if (newExpanded.has(matchId)) {
      newExpanded.delete(matchId);
    } else {
      newExpanded.add(matchId);
    }
    setExpandedNotes(newExpanded);
  };

  if (matches.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-500">No matches found</p>
      </div>
    );
  }

  return (
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
                Suggested Meeting
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {matches.map((match) => (
              <ReservationItem
                key={match.id}
                match={match}
                isNotesExpanded={expandedNotes.has(match.id)}
                onToggleNotes={() => toggleNotes(match.id)}
                onViewDetails={onViewDetails}
                onApprove={onApprove}
                onReject={onReject}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MentorshipMatchTable;
