// @ts-nocheck
import { useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import './App.css';
import ReservationListPage from '@/routes/ReservationList';
import OngoingListPage from '@/routes/OnGoingList';
import { useUserContext } from '@/contexts/UserContext';
// Example: Using API hooks
import { useWaitingMatches, useApproveMatch, useRejectMatch } from '@/hooks/api/useMatches';

function ExampleComponent() {
  const { data: matches, loading, error, refetch } = useWaitingMatches();
  const { approveMatch, loading: approving } = useApproveMatch();
  const { rejectMatch, loading: rejecting } = useRejectMatch();

  const handleApprove = async (matchId: number) => {
    try {
      await approveMatch(matchId);
      refetch(); // Refresh the list after approval
    } catch (err) {
      console.error('Failed to approve match:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {matches?.map(match => (
        <div key={match.id}>
          <p>{match.mentor.fullName} - {match.mentee.fullName}</p>
          <button onClick={() => handleApprove(match.id)} disabled={approving}>
            Approve
          </button>
          <button onClick={() => rejectMatch(match.id)} disabled={rejecting}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

function AppContent() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState('Approvals');
  const { displayName } = useUserContext();

  // URL'de tab parametresi varsa, o sekmeye yönlendir
  let ReservationPage = ReservationListPage;
  let OnGoingPage = OngoingListPage;

  return (
    <div className="flex flex-col h-screen">
      {/* Header - Tabs */}
      <Tabs.Root color="indigo" value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
        <div className="border-b bg-gray-50">
          <div className="flex items-center justify-between">
            <Tabs.List className="flex">
              <Tabs.Trigger 
                value="Approvals" 
                className="px-6 py-3 text-sm font-medium transition-colors
                  data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600
                  data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-gray-100"
              >
                Approvals
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="Ongoing" 
                className="px-6 py-3 text-sm font-medium transition-colors
                  data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600
                  data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-gray-100"
              >
                Ongoing
              </Tabs.Trigger>
            </Tabs.List>
            {displayName && (
              <div className="px-6 py-3 text-sm font-medium text-gray-700">
                {displayName}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <Tabs.Content value="Approvals" className="h-full">
            <ReservationPage />
          </Tabs.Content>
          <Tabs.Content value="Ongoing" className="h-full">
            <OnGoingPage />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/index.html" element={<AppContent />} />
    </Routes>
  );
}

export default App;