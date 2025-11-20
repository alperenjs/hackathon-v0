import { Calendar, Clock, User, Briefcase, Award, CheckCircle2, Circle } from 'lucide-react';
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
import type { Meet } from '@/lib/types/api';

interface MeetDetailsProps {
  match: MentorshipMatch | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  meets?: Meet[];
  loadingMeets?: boolean;
}

export function MeetDetails({ match, open, onOpenChange, meets = [], loadingMeets = false }: MeetDetailsProps) {
  if (!match) return null;

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
      TR: '🇹🇷',
      AL: '🇦🇱',
      AD: '🇦🇩',
      AT: '🇦🇹',
      BE: '🇧🇪',
      BG: '🇧🇬',
      HR: '🇭🇷',
      CY: '🇨🇾',
      CZ: '🇨🇿',
      DK: '🇩🇰',
      IT: '🇮🇹',
      LV: '🇱🇻',
      LI: '🇱🇮',
      ES: '🇪🇸',
    };
    return flags[countryCode] || '🌍';
  };

  const getStatusBadge = (isCompleted: boolean) => {
    if (isCompleted) {
      return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
    }
    return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Scheduled</Badge>;
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
                
                </div>
              </div>
            </div>
          </div>


          {/* Following Meetings */}
          {loadingMeets ? (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Meeting TRACKING
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                <p className="text-sm text-gray-500">Loading meetings...</p>
              </div>
            </div>
          ) : meets.length > 0 ? (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Meeting TRACKING
              </h3>
              <div className="space-y-3">
                {meets.map((meet) => (
                  <div
                    key={meet.id}
                    className={`rounded-lg p-4 border ${
                      meet.isCompleted
                        ? 'bg-green-50 border-green-200'
                        : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="size-4 text-gray-500" />
                              <p className="text-sm font-semibold text-gray-900">
                                {new Date(meet.meetTime).toLocaleDateString('en-US', {
                                  weekday: 'short',
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-600">
                              <div className="flex items-center text-start gap-1">
                                <Clock className="size-3" />
                                <span>{new Date(meet.meetTime).toLocaleTimeString('en-US', {
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {meet.summaries && (
                          <p className="text-xs text-gray-600 ml-8">{meet.summaries}</p>
                        )}
                        {meet.mentorFeedback && (
                          <div className="ml-8">
                            <p className="text-xs text-gray-500 mb-1">Mentor Feedback:</p>
                            <p className="text-xs text-gray-600">{meet.mentorFeedback}</p>
                          </div>
                        )}
                        {meet.menteeFeedback && (
                          <div className="ml-8">
                            <p className="text-xs text-gray-500 mb-1">Mentee Feedback:</p>
                            <p className="text-xs text-gray-600">{meet.menteeFeedback}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        {getStatusBadge(meet.isCompleted)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}


