import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Toaster } from '@/components/Toaster'
import { UserContextProvider } from '@/contexts/UserContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
        <Toaster />
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
