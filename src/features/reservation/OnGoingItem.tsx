import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/common/ui/avatar';
import { Badge } from '@/common/ui/badge';
import { Button } from '@/common/ui/button';
import type { MentorshipMatch } from '@/data/mockData';

interface OngoingItem {
  match: MentorshipMatch;
  index: number;
  onDetailClick: (matchId: string) => void;
}

export function OngoingItem({
  match,
  index,
  onDetailClick,
}: OngoingItem) {
  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 80) return 'bg-blue-100 text-blue-800 border-blue-200';
    return 'bg-yellow-100 text-yellow-800 border-yellow-200';
  };

  const getCountryFlag = (countryCode: string) => {
    const flags: Record<string, string> = {
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

  const isEven = index % 2 === 0;
  
  return (
    <tr className={`
      ${isEven ? 'bg-white' : 'bg-gray-100'} 
      border-b border-gray-200 
      hover:bg-blue-50/50 
      hover:shadow-sm
      transition-all duration-150
      group
    `}>
      {/* Pair Info */}
      <td className="px-6 py-4">
        <div className="space-y-3">
          {/* Junior */}
          <div className="flex items-start gap-3">
            <Avatar className="size-10 border-2 border-blue-200">
              <AvatarImage src={match.junior.avatar} />
              <AvatarFallback>{match.junior.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-900 truncate">{match.junior.name}</p>
                <span className="text-base">{getCountryFlag(match.junior.countryCode)}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
              <p className="text-xs text-gray-500 truncate">{match.junior.role}</p>

                <Badge variant="secondary" className="text-xs px-1.5 py-0 pl-0">
                </Badge>
                <Badge variant="outline" className="text-xs px-1.5 py-0 bg-blue-50 text-blue-700 border-blue-200">
                  {match.junior.seniority}
                </Badge>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-2 pl-3">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="text-gray-400 text-xs">mentored by</span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          {/* Senior */}
          <div className="flex items-start gap-3">
            <Avatar className="size-10 border-2 border-purple-200">
              <AvatarImage src={match.senior.avatar} />
              <AvatarFallback>{match.senior.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-900 truncate">{match.senior.name}</p>
                <span className="text-base">{getCountryFlag(match.senior.countryCode)}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
              <p className="text-xs text-gray-500 truncate">{match.senior.role}</p>

                <Badge variant="secondary" className="text-xs px-1.5 py-0">
                </Badge>
                <Badge variant="outline" className="text-xs px-1.5 py-0 bg-purple-50 text-purple-700 border-purple-200">
                  {match.senior.seniority}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </td>

      {/* Match Details */}
      <td className="px-6 py-4">
        <div className="space-y-2 max-w-xs">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Match Score:</span>
            <Badge className={`${getMatchScoreColor(match.matchScore)} border`}>
              {match.matchScore}%
            </Badge>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Common Skills:</p>
            <div className="flex flex-wrap gap-1">
              {match.commonSkills.map((skill: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-xs px-2 py-0 bg-gray-50">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Seniority Gap:</span>
            <span className="text-xs text-gray-900">{match.seniorityGap} years</span>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Reasoning:</p>
            <p className="text-xs text-gray-700 line-clamp-2">{match.reasoning}</p>
          </div>
        </div>
      </td>

      {/* Suggested Meeting */}
      <td className="px-6 py-4">
        <div className="space-y-2">
          <div>
          <Badge  variant="outline" className="!bg-green-100 border-green-800 text-xs  bg-gray-50">
                  2/5 completed
                </Badge> 
          </div>
     
          <div className="flex items-center gap-2 text-sm text-gray-900">
         
            <Calendar className="size-4 text-gray-400" />
            <span>{new Date(match.suggestedMeeting.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-900">
            <Clock className="size-4 text-gray-400" />
            <span>{match.suggestedMeeting.time} {match.suggestedMeeting.timezone}</span>
          </div>
        </div>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex flex-col gap-2">
            <>
              <Button
                size="sm"
                className="!border-blue-600 hover:bg-blue-700 text-blue-700   gap-2 h-8"
                onClick={() => onDetailClick(match.id)}
              >
                Details
                <ArrowRight className="size-4" />
              </Button>
            </>
        </div>
      </td>
    </tr>
  );
}

