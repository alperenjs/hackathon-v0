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

  // URL'de tab parametresi varsa, o sekmeye yönlendir
  if (tab === '2') return <Tab2Page />;
  if (tab === '3') return <Tab3Page />;
  if (tab === '4') return <Tab4Page />;
  
  // Varsayılan olarak Tab1'i göster
  return <Tab1Page />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/index.html" element={<AppContent />} />
      <Route path="/tab2" element={<Tab2Page />} />
      <Route path="/tab3" element={<Tab3Page />} />
      <Route path="/tab4" element={<Tab4Page />} />
    </Routes>
  );
}

export default App;