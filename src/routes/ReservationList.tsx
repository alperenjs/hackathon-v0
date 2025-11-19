import ReservationList from '@/features/reservation/ReservationList';
import { mockMatches } from '@/data/mockData';

export default function ReservationListPage() {
  return (
    <div>
      <ReservationList matches={mockMatches} onApprove={() => { }} onReject={() => { }} />
    </div>
  );
}

