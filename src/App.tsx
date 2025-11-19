// @ts-nocheck
import { Routes, Route, useSearchParams } from 'react-router-dom';
import './App.css';
import Tab1Page from '@/pages/Tab1Page';
import Tab2Page from '@/pages/Tab2Page';
import Tab3Page from '@/pages/Tab3Page';
import Tab4Page from '@/pages/Tab4Page';

function AppContent() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/tab2" element={<Tab2Page />} />
      <Route path="/tab3" element={<Tab3Page />} />
      <Route path="/index.html" element={<AppContent />} />
    </Routes>
  );
}

export default App;