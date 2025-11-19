import { Calendar, Clock, User, Briefcase, Award, MessageSquare, CheckCircle2, Circle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/common/ui/avatar';
import { Badge } from '@/common/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/common/ui/dialog';
import type { MentorshipMatch } from '@/data/mockData';
import { mockMatchedAppointments, type AppointmentDetail } from '@/data/mockMeetData';

interface MeetDetailsProps {
  match: MentorshipMatch | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MeetDetails({ match, open, onOpenChange }: MeetDetailsProps) {
  if (!match) return null;

  // Find appointments for this match
  const matchedAppointment = mockMatchedAppointments.find(ma => ma.matchId === match.id);
  const appointments = matchedAppointment?.appointments || [];

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 80) return 'bg-blue-100 text-blue-800 border-blue-200';
    return 'bg-yellow-100 text-yellow-800 border-yellow-200';
  };

  const getCountryFlag = (countryCode: string) => {
    const flags: Record<string, string> = {
      US: '🇺🇸',
      GB: '🇬🇧',
      CA: '🇨🇦',
      DE: '🇩🇪',
      FR: '🇫🇷',
      BR: '🇧🇷',
      JP: '🇯🇵',
      SG: '🇸🇬',
    };
    return flags[countryCode] || '🌍';
  };

  const getStatusBadge = (status: AppointmentDetail['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Cancelled</Badge>;
      default:
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Scheduled</Badge>;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Mentorship Match Details</DialogTitle>
          <DialogDescription>
            Detailed information about the mentorship pairing
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Pair Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Pair Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Junior */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="size-12 border-2 border-blue-300">
                    <AvatarImage src={match.junior.avatar} />
                    <AvatarFallback>
                      {match.junior.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-semibold text-gray-900">{match.junior.name}</h4>
                      <span className="text-lg">{getCountryFlag(match.junior.countryCode)}</span>
                    </div>
                    <p className="text-sm text-gray-600">{match.junior.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase className="size-4 text-gray-400" />
                    <span className="text-gray-600">{match.junior.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="size-4 text-gray-400" />
                    <span className="text-gray-600">{match.junior.seniority}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="size-4 text-gray-400" />
                    <span className="text-gray-600">{match.junior.yearsOfExperience} years experience</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {match.junior.skills.map((skill: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {match.junior.bio && (
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <p className="text-xs text-gray-600">{match.junior.bio}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Senior */}
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="size-12 border-2 border-purple-300">
                    <AvatarImage src={match.senior.avatar} />
                    <AvatarFallback>
                      {match.senior.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-semibold text-gray-900">{match.senior.name}</h4>
                      <span className="text-lg">{getCountryFlag(match.senior.countryCode)}</span>
                    </div>
                    <p className="text-sm text-gray-600">{match.senior.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase className="size-4 text-gray-400" />
                    <span className="text-gray-600">{match.senior.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="size-4 text-gray-400" />
                    <span className="text-gray-600">{match.senior.seniority}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="size-4 text-gray-400" />
                    <span className="text-gray-600">{match.senior.yearsOfExperience} years experience</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {match.senior.skills.map((skill: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {match.senior.bio && (
                    <div className="mt-3 pt-3 border-t border-purple-200">
                      <p className="text-xs text-gray-600">{match.senior.bio}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Match Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Match Details
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Match Score:</span>
                <Badge className={`${getMatchScoreColor(match.matchScore)} border`}>
                  {match.matchScore}%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Seniority Gap:</span>
                <span className="text-sm font-medium text-gray-900">{match.seniorityGap} years</span>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Common Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {match.commonSkills.map((skill: string, idx: number) => (
                    <Badge key={idx} variant="outline" className="bg-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="size-4 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Reasoning:</p>
                    <p className="text-sm text-gray-700">{match.reasoning}</p>
                  </div>
                </div>
              </div>
              {match.hrNotes && (
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">HR Notes:</p>
                  <p className="text-sm text-gray-700">{match.hrNotes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Following Meetings */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Following Meetings
            </h3>
            {appointments.length === 0 ? (
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                <p className="text-sm text-gray-500">No meetings scheduled</p>
              </div>
            ) : (
              <div className="space-y-3">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className={`rounded-lg p-4 border ${
                      appointment.status === 'completed'
                        ? 'bg-green-50 border-green-200'
                        : appointment.status === 'cancelled'
                        ? 'bg-red-50 border-red-200'
                        : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          {appointment.status === 'completed' ? (
                            <CheckCircle2 className="size-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <Circle className="size-5 text-gray-400 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="size-4 text-gray-500" />
                              <p className="text-sm font-semibold text-gray-900">
                                {new Date(appointment.date).toLocaleDateString('en-US', {
                                  weekday: 'short',
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-600 ml-6">
                              <div className="flex items-center gap-1">
                                <Clock className="size-3" />
                                <span>{appointment.time} {appointment.timezone}</span>
                              </div>
                              <span>•</span>
                              <span>{appointment.duration} min</span>
                            </div>
                          </div>
                        </div>
                        {appointment.notes && (
                          <p className="text-xs text-gray-600 ml-8">{appointment.notes}</p>
                        )}
                        {appointment.agenda && appointment.agenda.length > 0 && (
                          <div className="ml-8">
                            <p className="text-xs text-gray-500 mb-1">Agenda:</p>
                            <ul className="text-xs text-gray-600 space-y-0.5">
                              {appointment.agenda.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-1">
                                  <span className="text-gray-400">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        {getStatusBadge(appointment.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

