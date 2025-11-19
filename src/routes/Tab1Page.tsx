import ReservationList from '@/features/reservation/ReservationList';
import { mockMatches } from '@/data/mockData';

export default function Tab1Page() {
  return (
    <div>
      <ReservationList matches={mockMatches} onViewDetails={() => { }} onApprove={() => { }} onReject={() => { }} />
    </div>
  );
}

