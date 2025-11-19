
// @ts-nocheck
import { useEffect, useState } from 'react';
import './App.css';
import ReservationList from '@/features/reservation/ReservationList';
import { mockMatches } from '@/data/mockData';
function App() {
  return (
    <div>
     <ReservationList matches={mockMatches} onViewDetails={() => {}} onApprove={() => {}} onReject={() => {}} />
    </div>
  );
}

export default App