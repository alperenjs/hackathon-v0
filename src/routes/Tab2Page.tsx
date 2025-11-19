import { mockMatchedAppointments } from '@/data/mockMeetData';
import MeetList from '@/features/meet/MeetList';

export default function Tab2Page() {
  return (
    <div>
      <MeetList matchedAppointments={mockMatchedAppointments} onViewDetails={() => { }} />
    </div>
  );
}

