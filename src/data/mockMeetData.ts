export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  country: string;
  countryCode: string;
  avatar: string;
  seniority: string;
  email: string;
  yearsOfExperience: number;
  skills: string[];
  bio: string;
  previousMentorships: number;
}

export interface AppointmentDetail {
  id: string;
  date: string;
  time: string;
  duration: number;
  timezone: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  meetingLink?: string;
  notes?: string;
  agenda?: string[];
}

export interface MatchedAppointment {
  id: string;
  matchId: string;
  junior: Employee;
  senior: Employee;
  matchScore: number;
  appointments: AppointmentDetail[];
}

// Match 1: Sarah Chen & Michael Rodriguez
const match1Appointments: AppointmentDetail[] = [
  {
    id: 'appt-1-1',
    date: '2025-11-25',
    time: '14:00',
    duration: 60,
    timezone: 'PST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/1',
    agenda: ['Introduction', 'Goal Setting', 'Technical Roadmap'],
    notes: 'First mentorship session - getting to know each other'
  },
  {
    id: 'appt-1-2',
    date: '2025-12-02',
    time: '14:00',
    duration: 60,
    timezone: 'PST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/2',
    agenda: ['System Design Basics', 'AWS Architecture', 'Q&A'],
    notes: 'Focus on cloud architecture fundamentals'
  },
  {
    id: 'appt-1-3',
    date: '2025-12-09',
    time: '14:00',
    duration: 60,
    timezone: 'PST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/3',
    agenda: ['Code Review', 'Best Practices', 'Career Discussion'],
    notes: 'Review recent projects and discuss career growth'
  },
  {
    id: 'appt-1-4',
    date: '2025-12-16',
    time: '14:00',
    duration: 60,
    timezone: 'PST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/4',
    agenda: ['Microservices Patterns', 'Scalability', 'Next Steps'],
    notes: 'Deep dive into microservices architecture'
  },
  {
    id: 'appt-1-5',
    date: '2025-12-23',
    time: '14:00',
    duration: 60,
    timezone: 'PST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/5',
    agenda: ['Leadership Skills', 'Team Collaboration', 'Mentorship Reflection'],
    notes: 'Discussing leadership and team dynamics'
  },
  {
    id: 'appt-1-6',
    date: '2025-12-30',
    time: '14:00',
    duration: 60,
    timezone: 'PST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/6',
    agenda: ['Year-end Review', '2026 Goals', 'Continued Partnership'],
    notes: 'Reflecting on progress and planning ahead'
  }
];

export const mockMatchedAppointments: MatchedAppointment[] = [
  {
    id: 'match-1',
    matchId: '1',
    junior: {
      id: 'j1',
      name: 'Sarah Chen',
      role: 'Software Engineer',
      department: 'Engineering',
      country: 'United States',
      countryCode: 'US',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      seniority: 'Junior',
      email: 'sarah.chen@company.com',
      yearsOfExperience: 2,
      skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'Python'],
      bio: 'Passionate software engineer with a focus on web development. Looking to grow expertise in cloud architecture and system design.',
      previousMentorships: 0,
    },
    senior: {
      id: 's1',
      name: 'Michael Rodriguez',
      role: 'Senior Software Architect',
      department: 'Engineering',
      country: 'United States',
      countryCode: 'US',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      seniority: 'Senior',
      email: 'michael.rodriguez@company.com',
      yearsOfExperience: 12,
      skills: ['System Design', 'AWS', 'TypeScript', 'Python', 'Microservices', 'Leadership'],
      bio: 'Experienced architect with a passion for mentoring. Led multiple teams and enjoys helping junior engineers grow their technical skills.',
      previousMentorships: 5,
    },
    matchScore: 92,
    appointments: match1Appointments,
  }
];
