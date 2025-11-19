import type { MatchedAppointment } from '@/data/mockMeetData';
import { MeetItem } from './MeetItem';

interface MeetListProps {
  matchedAppointments: MatchedAppointment[];
  onViewDetails?: (matchedAppointment: MatchedAppointment) => void;
}

export default function MeetList({ matchedAppointments, onViewDetails }: MeetListProps) {
  if (matchedAppointments.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-500">No matched appointments found</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Matched Mentorship Appointments</h2>
        <p className="text-sm text-gray-500 mt-1">View all scheduled meetings for approved mentorship matches</p>
      </div>
      <div className="space-y-6">
        {matchedAppointments.map((matchedAppointment) => (
          <MeetItem
            key={matchedAppointment.id}
            matchedAppointment={matchedAppointment}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}
