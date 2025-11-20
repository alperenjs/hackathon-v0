import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/common/ui/badge';
import type { Meet } from '@/lib/types/api';

interface RecentSessionsProps {
  sessions: Meet[];
  loading?: boolean;
}

export function RecentSessions({ sessions, loading = false }: RecentSessionsProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-100 p-6">
        <div className="text-gray-400 text-sm font-light">Loading recent sessions...</div>
      </div>
    );
  }

  // Get recent sessions (last 5, sorted by date)
  const recentSessions = [...sessions]
    .sort((a, b) => new Date(b.meetTime).getTime() - new Date(a.meetTime).getTime())
    .slice(0, 5);

  if (recentSessions.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-100 p-6">
        <h3 className="text-lg font-light text-gray-900 mb-4">Recent Sessions</h3>
        <div className="text-gray-400 text-sm font-light">No sessions found</div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-6">
      <h3 className="text-lg font-light text-gray-900 mb-5">Recent Sessions</h3>
      
      <div className="space-y-3">
        {recentSessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="font-normal truncate">
                      {session.mentor?.fullName || 'Unknown'} & {session.mentee?.fullName || 'Unknown'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(session.meetTime)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{formatTime(session.meetTime)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 ml-4">
              <Badge
                className={
                  session.isCompleted
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-blue-50 text-blue-700 border-blue-200'
                }
              >
                {session.isCompleted ? 'Completed' : 'Scheduled'}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

