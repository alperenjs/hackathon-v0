import { Calendar, Clock, ExternalLink, List } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/common/ui/avatar';
import { Badge } from '@/common/ui/badge';
import { Button } from '@/common/ui/button';
import type { MatchedAppointment, AppointmentDetail } from '@/data/mockMeetData';

interface MeetItemProps {
  matchedAppointment: MatchedAppointment;
  onViewDetails?: (matchedAppointment: MatchedAppointment) => void;
}

export function MeetItem({ matchedAppointment }: MeetItemProps) {
  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 80) return 'bg-blue-100 text-blue-800 border-blue-200';
    return 'bg-yellow-100 text-yellow-800 border-yellow-200';
  };

  const getStatusColor = (status: AppointmentDetail['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      {/* Match Header */}
      <div className="mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Avatar className="size-12 border-2 border-blue-200">
                <AvatarImage src={matchedAppointment.junior.avatar} />
                <AvatarFallback>{matchedAppointment.junior.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">{matchedAppointment.junior.name}</p>
                <p className="text-xs text-gray-500">{matchedAppointment.junior.role}</p>
              </div>
            </div>
            <span className="text-xl">↔</span>
            <div className="flex items-center gap-2">
              <Avatar className="size-12 border-2 border-purple-200">
                <AvatarImage src={matchedAppointment.senior.avatar} />
                <AvatarFallback>{matchedAppointment.senior.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">{matchedAppointment.senior.name}</p>
                <p className="text-xs text-gray-500">{matchedAppointment.senior.role}</p>
              </div>
            </div>
          </div>
          <Badge className={`${getMatchScoreColor(matchedAppointment.matchScore)} border`}>
            Match: {matchedAppointment.matchScore}%
          </Badge>
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Meetings ({matchedAppointment.appointments.length})</h3>
        {matchedAppointment.appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className={`${getStatusColor(appointment.status)} border text-xs`}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <Calendar className="size-4 text-gray-400" />
                    <span>
                      {new Date(appointment.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <Clock className="size-4 text-gray-400" />
                    <span>{appointment.time} {appointment.timezone}</span>
                  </div>
                  <span className="text-xs text-gray-500">{appointment.duration} min</span>
                </div>

                {appointment.agenda && appointment.agenda.length > 0 && (
                  <div className="mb-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <List className="size-3" />
                      <span>Agenda:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {appointment.agenda.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-2 py-0 bg-gray-50">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {appointment.notes && (
                  <p className="text-xs text-gray-600 mt-2">{appointment.notes}</p>
                )}
              </div>

              {appointment.meetingLink && (
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-4 gap-2"
                  onClick={() => window.open(appointment.meetingLink, '_blank')}
                >
                  <ExternalLink className="size-4" />
                  Join
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
