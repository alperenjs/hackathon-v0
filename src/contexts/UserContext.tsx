import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { app } from '@microsoft/teams-js';

interface UserContextType {
  userId?: string;
  userPrincipalName?: string;
  displayName?: string;
  tenantId?: string;
  teamId?: string;
  channelId?: string;
  locale?: string;
  theme?: string;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType>({
  isLoading: true,
});

export const useUserContext = () => useContext(UserContext);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userContext, setUserContext] = useState<UserContextType>({
    isLoading: true,
  });

  useEffect(() => {
    const initializeTeams = async () => {
      try {
        // Initialize the Teams SDK
        await app.initialize();
        
        // Get user context
        const context = await app.getContext();
        
        if (context) {
          const userEmail = context.user?.userPrincipalName || 'a.sozen@teamsystem.com';
          
          // Store user email in localStorage for API client to use
          if (userEmail) {
            localStorage.setItem('teams_user_email', userEmail);
          }
          
          setUserContext({
            userId: context.user?.id,
            userPrincipalName: context.user?.userPrincipalName,
            displayName: context.user?.displayName,
            tenantId: context.user?.tenant?.id,
            teamId: context.team?.internalId,
            channelId: context.channel?.id,
            locale: context.app.locale,
            theme: context.app.theme,
            isLoading: false,
          });
        } else {
          setUserContext({ isLoading: false });
        }
        
        // Notify Teams that the app loaded successfully
        app.notifySuccess();
      } catch (err) {
        console.error('Failed to initialize Teams SDK:', err);
        setUserContext({ isLoading: false });
        app.notifyFailure({
          reason: app.FailedReason.Other,
          message: err instanceof Error ? err.message : 'Unknown error',
        });
      }
    };

    initializeTeams();
  }, []);

  return (
    <UserContext.Provider value={userContext}>
      {children}
    </UserContext.Provider>
  );
}

