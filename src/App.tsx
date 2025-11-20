// @ts-nocheck
import { useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import './App.css';
import ReservationListPage from '@/routes/ReservationList';
import OngoingListPage from '@/routes/OnGoingList';
import { useUserContext } from '@/contexts/UserContext';
import { useUser } from '@/hooks/api/useUsers';
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
  const { displayName, userPrincipalName } = useUserContext();
  const { data: user, loading: userLoading } = useUser();

  // Check if user branch is different than "HR"
  const isNotHR = user?.branch !== 'HR';

  // URL'de tab parametresi varsa, o sekmeye yönlendir
  let ReservationPage = ReservationListPage;
  let OnGoingPage = OngoingListPage;

  if (userLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // Conditionally set route components based on branch
  if (isNotHR) {
    // For non-HR users, show only Ongoing page
    return (
      <div className="flex flex-col h-screen">
        <div className="border-b bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="px-6 py-3 text-sm font-medium text-gray-700">
              Ongoing Matches
            </div>
            {userPrincipalName && (
              <div className="px-6 py-3 text-sm font-medium text-gray-700">
                {userPrincipalName}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <OnGoingPage userId={user?.id} isNotHR={isNotHR} />
        </div>
      </div>
    );
  }
  // For HR users, show tabs with Approvals and Ongoing
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
            {userPrincipalName && (
              <div className="px-6 py-3 text-sm font-medium text-gray-700">
                {userPrincipalName}
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
            <OnGoingPage userId={user?.id} isNotHR={isNotHR} />
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