import { mockMatches } from '@/data/mockData';
import OngoingList from '@/features/reservation/OnGoingList';

export default function Tab2Page() {
  return (
    <div>
      <OngoingList 
        matches={mockMatches} 
        onDetailClick={() => { }} 
      />
    </div>
  );
}

