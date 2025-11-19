
// @ts-nocheck
import { app, authentication } from '@microsoft/teams-js';
import { useEffect, useState } from 'react';

function App() {
  const [userContext, setUserContext] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeTeams = async () => {
      try {
        // Initialize the Teams SDK
        await app.initialize();
        
        // Get user context
        const context = await app.getContext();

        console.log(context)
        
        if (context) {
          setUserContext({
            userId: context.user?.id,
            userPrincipalName: context.user?.userPrincipalName,
            displayName: context.user?.displayName,
            tenantId: context.user?.tenant?.id,
            teamId: context.team?.internalId,
            channelId: context.channel?.id,
            locale: context.app.locale,
            theme: context.app.theme
          });

        }

        
        // Notify Teams that the app loaded successfully
        app.notifySuccess();
      } catch (err) {
        console.error('Failed to initialize Teams SDK:', err);
        setError(err.message);
        app.notifyFailure({
          reason: app.FailedReason.Other,
          message: err.message
        });
      }
    };

    initializeTeams();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {userContext && (
        <div>
          <h2>Welcome, {userContext?.displayName}!</h2>
          <p>User ID: {userContext?.userId}</p>
          <p>Email: {userContext?.userPrincipalName}</p>
        </div>
      )}
    </div>
  );
}

export default App