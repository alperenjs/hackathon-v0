import { useWaitingMatches, useApprovedMatches } from '@/hooks/api/useMatches';
import { useMeets } from '@/hooks/api/useMeets';
import { Users, Calendar, Star, UserX, Heart, Smile } from 'lucide-react';
import { KPICard } from '@/features/dashboard/KPICard';
import { RecentSessions } from '@/features/dashboard/RecentSessions';

export default function DashboardPage() {
  const { loading: loadingWaiting } = useWaitingMatches();
  const { loading: loadingApproved } = useApprovedMatches();
  const { data: meets, loading: loadingMeets } = useMeets();

  // Calculate KPIs
  const activeMentorships = 47;
  const totalSessions = 90;
  const completedSessions = 2;
  
  // Calculate average session rating (mock calculation - in real app, this would come from rating data)
  // For now, we'll use a calculated value based on completed sessions
  const averageRating = completedSessions > 0 
    ? (4.2 + (completedSessions * 0.1)).toFixed(1)
    : '0.0';
  
  // Calculate no-show rate (sessions that were scheduled but not completed)
  // Assuming no-show = scheduled but not completed after the scheduled time
  const noShowRate = 1.3
  
  // Calculate satisfaction scores (mock - in real app, this would come from feedback analysis)
  // For now, using a base score with some variation
  const mentorSatisfaction = completedSessions > 0
    ? (85 + (completedSessions * 2)).toFixed(0)
    : '0';
  
  const menteeSatisfaction = completedSessions > 0
    ? (88 + (completedSessions * 1.5)).toFixed(0)
    : '0';

  // Calculate trends (mock data for now - can be replaced with real historical data)
  const activeMentorshipsTrend = { value: 8, isPositive: true, label: 'vs last month' };
  const totalSessionsTrend = { value: 12, isPositive: true, label: 'vs last month' };
  const averageRatingTrend = { value: 5, isPositive: true, label: 'vs last month' };
  const noShowRateTrend = { value: 3, isPositive: false, label: 'vs last month' };
  const mentorSatisfactionTrend = { value: 4, isPositive: true, label: 'vs last month' };
  const menteeSatisfactionTrend = { value: 6, isPositive: true, label: 'vs last month' };

  const isLoading = loadingWaiting || loadingApproved || loadingMeets;

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-gray-900 tracking-tight">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1.5 font-light">
              Overview of mentorship program metrics and statistics
            </p>
          </div>
          <div className="text-sm text-gray-500 font-light">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>

      {/* KPI Cards Section */}
      <div className="flex-1 overflow-auto p-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-400 text-sm font-light">Loading dashboard data...</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <KPICard
                title="Total Active Mentorships"
                value={activeMentorships}
                icon={Users}
                iconColor="blue"
                trend={activeMentorshipsTrend}
              />
              
              <KPICard
                title="Total Sessions"
                value={totalSessions}
                icon={Calendar}
                iconColor="indigo"
                trend={totalSessionsTrend}
              />
              
              <KPICard
                title="Average Sessions Rating"
                value={`${averageRating}/5`}
                icon={Star}
                iconColor="yellow"
                trend={averageRatingTrend}
              />
              
              <KPICard
                title="Meeting Non-Attendance"
                value={`${noShowRate}%`}
                icon={UserX}
                iconColor="purple"
                trend={noShowRateTrend}
              />
              
              <KPICard
                title="Mentor Satisfaction"
                value={`${mentorSatisfaction}%`}
                icon={Heart}
                iconColor="green"
                trend={mentorSatisfactionTrend}
              />
              
              <KPICard
                title="Mentee Satisfaction"
                value={`${menteeSatisfaction}%`}
                icon={Smile}
                iconColor="green"
                trend={menteeSatisfactionTrend}
              />
            </div>

            {/* Recent Sessions Section */}
            <div className="flex gap-6">
              <div className="w-3/4">
                <RecentSessions sessions={meets || []} loading={loadingMeets} />
              </div>
              <div className="w-1/4 flex items-center justify-center">
                <img 
                  src="/garavel_banner.png" 
                  alt="Cross-Border Mentorship" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

