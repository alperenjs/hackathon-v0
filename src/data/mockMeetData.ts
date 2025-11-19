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

// Match 2: Priya Patel & Emma Thompson
const match2Appointments: AppointmentDetail[] = [
  {
    id: 'appt-2-1',
    date: '2025-11-26',
    time: '10:00',
    duration: 45,
    timezone: 'GMT',
    status: 'completed',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/7',
    agenda: ['Introduction', 'Design Philosophy', 'Career Path'],
    notes: 'Great first session! Priya showed strong enthusiasm for design leadership.'
  },
  {
    id: 'appt-2-2',
    date: '2025-12-03',
    time: '10:00',
    duration: 45,
    timezone: 'GMT',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/8',
    agenda: ['Design Systems Deep Dive', 'Component Library', 'Best Practices'],
    notes: 'Focus on building scalable design systems'
  },
  {
    id: 'appt-2-3',
    date: '2025-12-10',
    time: '10:00',
    duration: 45,
    timezone: 'GMT',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/9',
    agenda: ['Portfolio Review', 'Presentation Skills', 'Stakeholder Management'],
    notes: 'Reviewing portfolio and presentation techniques'
  },
  {
    id: 'appt-2-4',
    date: '2025-12-17',
    time: '10:00',
    duration: 45,
    timezone: 'GMT',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/10',
    agenda: ['Team Leadership', 'Design Strategy', 'Inclusive Design'],
    notes: 'Exploring leadership transition and strategic thinking'
  },
  {
    id: 'appt-2-5',
    date: '2025-12-24',
    time: '10:00',
    duration: 45,
    timezone: 'GMT',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/11',
    agenda: ['Design Culture', 'Mentoring Others', 'Career Growth'],
    notes: 'Building inclusive design cultures and mentoring skills'
  },
  {
    id: 'appt-2-6',
    date: '2025-12-31',
    time: '10:00',
    duration: 45,
    timezone: 'GMT',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/12',
    agenda: ['Year Review', '2026 Vision', 'Next Steps'],
    notes: 'Reflecting on mentorship journey and future plans'
  }
];

// Match 3: James Wilson & Dr. Lisa Zhang
const match3Appointments: AppointmentDetail[] = [
  {
    id: 'appt-3-1',
    date: '2025-11-27',
    time: '15:30',
    duration: 60,
    timezone: 'EST',
    status: 'completed',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/13',
    agenda: ['Introduction', 'Data Science Path', 'Learning Plan'],
    notes: 'Excellent first meeting. James is very motivated to transition to data science.'
  },
  {
    id: 'appt-3-2',
    date: '2025-12-04',
    time: '15:30',
    duration: 60,
    timezone: 'EST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/14',
    agenda: ['Python for Data Science', 'Pandas & NumPy', 'Data Cleaning'],
    notes: 'Hands-on session on Python data science libraries'
  },
  {
    id: 'appt-3-3',
    date: '2025-12-11',
    time: '15:30',
    duration: 60,
    timezone: 'EST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/15',
    agenda: ['Statistical Analysis', 'Hypothesis Testing', 'Project Review'],
    notes: 'Statistical methods and analysis techniques'
  },
  {
    id: 'appt-3-4',
    date: '2025-12-18',
    time: '15:30',
    duration: 60,
    timezone: 'EST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/16',
    agenda: ['Machine Learning Basics', 'Scikit-learn', 'Model Evaluation'],
    notes: 'Introduction to machine learning and model building'
  },
  {
    id: 'appt-3-5',
    date: '2025-12-25',
    time: '15:30',
    duration: 60,
    timezone: 'EST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/17',
    agenda: ['Deep Learning Intro', 'TensorFlow Basics', 'Career Transition'],
    notes: 'Exploring deep learning and career transition strategies'
  },
  {
    id: 'appt-3-6',
    date: '2026-01-01',
    time: '15:30',
    duration: 60,
    timezone: 'EST',
    status: 'scheduled',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/18',
    agenda: ['Portfolio Review', 'Job Search Strategy', 'Continued Learning'],
    notes: 'Preparing for data science role applications'
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
  },
  {
    id: 'match-2',
    matchId: '2',
    junior: {
      id: 'j2',
      name: 'Priya Patel',
      role: 'Product Designer',
      department: 'Design',
      country: 'United Kingdom',
      countryCode: 'GB',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      seniority: 'Mid-Level',
      email: 'priya.patel@company.com',
      yearsOfExperience: 4,
      skills: ['Figma', 'UI/UX', 'User Research', 'Design Systems', 'Prototyping'],
      bio: 'Creative designer focused on creating delightful user experiences. Interested in learning more about design leadership.',
      previousMentorships: 1,
    },
    senior: {
      id: 's2',
      name: 'Emma Thompson',
      role: 'Design Director',
      department: 'Design',
      country: 'United Kingdom',
      countryCode: 'GB',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
      seniority: 'Executive',
      email: 'emma.thompson@company.com',
      yearsOfExperience: 15,
      skills: ['Design Leadership', 'Design Systems', 'Strategy', 'Figma', 'Team Management'],
      bio: 'Design leader passionate about building inclusive design cultures. Mentored 10+ designers throughout career.',
      previousMentorships: 8,
    },
    matchScore: 88,
    appointments: match2Appointments,
  },
  {
    id: 'match-3',
    matchId: '3',
    junior: {
      id: 'j3',
      name: 'James Wilson',
      role: 'Data Analyst',
      department: 'Analytics',
      country: 'Canada',
      countryCode: 'CA',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      seniority: 'Junior',
      email: 'james.wilson@company.com',
      yearsOfExperience: 1.5,
      skills: ['SQL', 'Python', 'Tableau', 'Excel', 'Data Visualization'],
      bio: 'Recent graduate with strong analytical skills. Eager to learn advanced statistical modeling and machine learning.',
      previousMentorships: 0,
    },
    senior: {
      id: 's3',
      name: 'Dr. Lisa Zhang',
      role: 'Senior Data Scientist',
      department: 'Analytics',
      country: 'Canada',
      countryCode: 'CA',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
      seniority: 'Senior',
      email: 'lisa.zhang@company.com',
      yearsOfExperience: 9,
      skills: ['Machine Learning', 'Python', 'SQL', 'Statistics', 'TensorFlow', 'Mentoring'],
      bio: 'Data scientist specializing in ML and predictive analytics. Enjoys teaching and helping analysts transition to data science.',
      previousMentorships: 4,
    },
    matchScore: 85,
    appointments: match3Appointments,
  },
];
