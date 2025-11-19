// @ts-nocheck
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as microsoftTeams from "@microsoft/teams-js";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [teamsContext, setTeamsContext] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

   useEffect(() => {
    // Teams SDK'yı başlat
    initializeTeams();
  }, []);

    const initializeTeams = async () => {
    try {
      // Teams ortamında olup olmadığımızı kontrol et
      await microsoftTeams.app.initialize();
      
      // Context bilgilerini al
      const context = await microsoftTeams.app.getContext();
      setTeamsContext(context);
      
      // Kullanıcı bilgilerini ayarla
      setUserInfo({
        id: context.user?.id,
        displayName: context.user?.displayName,
        userPrincipalName: context.user?.userPrincipalName,
        tenantId: context.user?.tenant?.id,
        locale: context.app?.locale,
        theme: context.app?.theme
      });
      
      setLoading(false);
    } catch (err) {
      console.error('Teams başlatma hatası:', err);
      setError('Teams ortamında çalıştırılmalı veya Teams SDK yüklenemedi');
      setLoading(false);
    }
  };

  const getAuthToken = async () => {
    try {
      setLoading(true);
      // SSO token al
      const authToken = await microsoftTeams.authentication.getAuthToken();
      setToken(authToken);
      
      // Bu token'ı backend'e gönder
      // Backend, bu token'ı Graph API token'ı ile değiştirir
      const response = await fetch('https://your-backend.com/api/user', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
       
      const userData = await response.json();
      console.log('Detaylı kullanıcı bilgisi:', userData);
      
      setLoading(false);
    } catch (err) {
      console.error('Token alma hatası:', err);
      setError('Token alınamadı. SSO yapılandırması gerekebilir.');
      setLoading(false);
    }
  };

  const openAuthPopup = () => {
    // Alternatif: Popup ile authentication
    microsoftTeams.authentication.authenticate({
      url: `${window.location.origin}/auth-start.html`,
      width: 600,
      height: 535
    }).then((result) => {
      console.log('Auth başarılı:', result);
    }).catch((err) => {
      console.error('Auth hatası:', err);
    });
  };


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          alperen 09
          {userInfo}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
