import type { Match, User } from '@/lib/types/api';
import type { MentorshipMatch, Employee, Meeting } from '@/data/mockData';

/**
 * Get country code from country name
 */
function getCountryCode(country: string | null): string {
  if (!country) return '🌍';
  
  const countryMap: Record<string, string> = {
    'United States': 'US',
    'United Kingdom': 'GB',
    'Canada': 'CA',
    'Germany': 'DE',
    'France': 'FR',
    'Brazil': 'BR',
    'Japan': 'JP',
    'Singapore': 'SG',
    'Turkey': 'TR',
    'Albania': 'AL',
    'Andorra': 'AD',
    'Austria': 'AT',
    'Belgium': 'BE',
    'Bulgaria': 'BG',
    'Croatia': 'HR',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    'Denmark': 'DK',
    'Estonia': 'EE',
    'Finland': 'FI',
    'Greece': 'GR',
    'Hungary': 'HU',
    'Iceland': 'IS',
    'Ireland': 'IE',
    'Italy': 'IT',
    'Latvia': 'LV',
    'Liechtenstein': 'LI',
    'Spain': 'ES',
  };
  
  return countryMap[country] || '🌍';
}

/**
 * Determine seniority based on years of experience
 */
function getSeniority(yearsOfExperience: number): string {
  if (yearsOfExperience < 2) return 'Junior';
  if (yearsOfExperience < 5) return 'Mid-Level';
  if (yearsOfExperience < 10) return 'Senior';
  return 'Expert';
}

/**
 * Convert User to Employee
 */
function userToEmployee(user: User, role: string = 'Employee'): Employee {
  const skillsArray = user.skills ? user.skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  
  return {
    id: user.id.toString(),
    name: user.fullName || 'Unknown',
    role: role,
    department: user.department || 'Unknown',
    country: user.country || 'Unknown',
    countryCode: getCountryCode(user.country),
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName || 'User')}&background=random`,
    seniority: getSeniority(user.yearsOfExperience),
    email: user.email || '',
    yearsOfExperience: user.yearsOfExperience,
    skills: skillsArray,
    bio: '',
    previousMentorships: 0,
  };
}

/**
 * Calculate common skills between two users
 */
function getCommonSkills(mentor: User, mentee?: User): string[] {
  const mentorSkills = mentor?.skills
    ? mentor.skills.split(',').map(s => s.trim()).filter(Boolean)
    : [];

  const menteeSkills = mentee?.skills
    ? mentee.skills.split(',').map(s => s.trim()).filter(Boolean)
    : [];

  if (!mentorSkills.length || !menteeSkills.length) return [];

  return mentorSkills.filter(skill => menteeSkills.includes(skill));
}

/**
 * Generate reasoning text
 */
function generateReasoning(mentor: User, mentee?: User, commonSkills: string[] = []): string {
  if (!mentee) {
    return 'Mentee information not available.';
  }
  
  const parts: string[] = [];
  
  if (commonSkills.length > 0) {
    parts.push(`Strong technical alignment with ${commonSkills.length} common skill${commonSkills.length > 1 ? 's' : ''}: ${commonSkills.slice(0, 3).join(', ')}.`);
  }
  
  const seniorityGap = Math.abs((mentor.yearsOfExperience ?? 0) - (mentee.yearsOfExperience ?? 0));
  if (seniorityGap >= 5 && seniorityGap <= 10) {
    parts.push(`Optimal seniority gap of ${seniorityGap} years for effective mentorship.`);
  }
  
  if (mentor.department && mentee.department && mentor.department === mentee.department) {
    parts.push('Both in the same department, facilitating collaboration.');
  }
  
  if (mentor.country && mentee.country && mentor.country === mentee.country) {
    parts.push('Same location, enabling in-person meetings.');
  }
  
  return parts.join(' ') || 'Good potential for mentorship based on profile compatibility.';
}

/**
 * Convert API Match to UI MentorshipMatch
 */
export function matchToMentorshipMatch(match: Match): MentorshipMatch {
  // Check if mentor data is available, if not create placeholder
  const mentor: User = match.mentor && match.mentor.id 
    ? match.mentor 
    : {
        id: match.mentorId || 0,
        createdAt: '',
        updatedAt: null,
        fullName: 'data did not retrieved',
        email: null,
        branch: null,
        department: null,
        country: null,
        yearsOfExperience: 0,
        skills: null,
      };
  
  // Check if mentee data is available, if not create placeholder
  const mentee: User = match.mentee && match.mentee.id
    ? match.mentee
    : {
        id: match.menteeId || 0,
        createdAt: '',
        updatedAt: null,
        fullName: 'data did not retrieved',
        email: null,
        branch: null,
        department: null,
        country: null,
        yearsOfExperience: 0,
        skills: null,
      };
  
  const commonSkills = getCommonSkills(mentor, mentee);
  const matchScore = match.matchScore ?? 0;
  const seniorityGap = Math.abs((mentor.yearsOfExperience ?? 0) - (mentee.yearsOfExperience ?? 0));
  const reasoning = generateReasoning(mentor, mentee, commonSkills);
  
  // Determine status
  let status: 'pending' | 'approved' | 'rejected' = 'pending';
  if (match.isApprove) {
    status = 'approved';
  } else if (match.isRejected) {
    status = 'rejected';
  }
  
  // Generate suggested meeting (default to 1 week from creation date)
  const createdAt = new Date(match.createdAt);
  const suggestedDate = new Date(createdAt);
  suggestedDate.setDate(suggestedDate.getDate() + 7);
  
  const suggestedMeeting: Meeting = {
    date: suggestedDate.toISOString().split('T')[0],
    time: '14:00',
    duration: 60,
    timezone: 'UTC',
  };
  
  return {
    id: match.id.toString(),
    junior: userToEmployee(mentee, mentee.department || 'Employee'),
    senior: userToEmployee(mentor, mentor.department || 'Employee'),
    matchScore,
    commonSkills,
    seniorityGap,
    reasoning,
    suggestedMeeting,
    hrNotes: '',
    status,
    matchedDate: match.createdAt,
  };
}

