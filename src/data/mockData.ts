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

export interface Meeting {
  date: string;
  time: string;
  duration: number;
  timezone: string;
}

export interface MentorshipMatch {
  id: string;
  junior: Employee;
  senior: Employee;
  matchScore: number;
  commonSkills: string[];
  seniorityGap: number;
  reasoning: string;
  suggestedMeeting: Meeting;
  hrNotes: string;
  status: 'pending' | 'approved' | 'rejected';
  matchedDate: string;
}

export const mockMatches: MentorshipMatch[] = [
  {
    id: '1',
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
    commonSkills: ['TypeScript', 'AWS', 'Python'],
    seniorityGap: 10,
    reasoning: 'Strong technical alignment with complementary skill sets. Both based in same timezone. Michael has proven mentorship track record.',
    suggestedMeeting: {
      date: '2025-11-25',
      time: '14:00',
      duration: 60,
      timezone: 'PST',
    },
    hrNotes: '',
    status: 'pending',
    matchedDate: '2025-11-19',
  },
  {
    id: '2',
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
    commonSkills: ['Figma', 'Design Systems'],
    seniorityGap: 11,
    reasoning: 'Excellent match for career development mentorship. Emma has extensive experience in leadership transition. Same office location.',
    suggestedMeeting: {
      date: '2025-11-26',
      time: '10:00',
      duration: 45,
      timezone: 'GMT',
    },
    hrNotes: '',
    status: 'pending',
    matchedDate: '2025-11-19',
  },
  {
    id: '3',
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
    commonSkills: ['Python', 'SQL'],
    seniorityGap: 7.5,
    reasoning: 'Perfect for junior-to-mid career growth. Lisa specializes in analyst-to-scientist transitions. Overlapping work hours.',
    suggestedMeeting: {
      date: '2025-11-27',
      time: '15:30',
      duration: 60,
      timezone: 'EST',
    },
    hrNotes: '',
    status: 'pending',
    matchedDate: '2025-11-18',
  },
  {
    id: '4',
    junior: {
      id: 'j4',
      name: 'Aisha Okafor',
      role: 'Marketing Specialist',
      department: 'Marketing',
      country: 'Germany',
      countryCode: 'DE',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
      seniority: 'Junior',
      email: 'aisha.okafor@company.com',
      yearsOfExperience: 2,
      skills: ['Content Marketing', 'SEO', 'Social Media', 'Analytics', 'Copywriting'],
      bio: 'Creative marketer with a passion for storytelling. Looking to develop strategic marketing and campaign management skills.',
      previousMentorships: 0,
    },
    senior: {
      id: 's4',
      name: 'Thomas Mueller',
      role: 'VP Marketing',
      department: 'Marketing',
      country: 'Germany',
      countryCode: 'DE',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      seniority: 'Executive',
      email: 'thomas.mueller@company.com',
      yearsOfExperience: 18,
      skills: ['Strategy', 'Brand Management', 'Content Marketing', 'Leadership', 'Analytics', 'Team Building'],
      bio: 'Marketing executive with global experience. Passionate about developing next-generation marketing leaders.',
      previousMentorships: 12,
    },
    matchScore: 79,
    commonSkills: ['Content Marketing', 'Analytics'],
    seniorityGap: 16,
    reasoning: 'High potential for strategic skill development. Thomas has requested to mentor early-career marketers. Same office.',
    suggestedMeeting: {
      date: '2025-11-28',
      time: '09:00',
      duration: 45,
      timezone: 'CET',
    },
    hrNotes: '',
    status: 'approved',
    matchedDate: '2025-11-17',
  },
  {
    id: '5',
    junior: {
      id: 'j5',
      name: 'Carlos Santos',
      role: 'Frontend Developer',
      department: 'Engineering',
      country: 'Brazil',
      countryCode: 'BR',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      seniority: 'Mid-Level',
      email: 'carlos.santos@company.com',
      yearsOfExperience: 3,
      skills: ['React', 'JavaScript', 'CSS', 'Figma', 'Performance Optimization'],
      bio: 'Frontend developer passionate about creating beautiful, performant web applications. Want to learn more about architecture.',
      previousMentorships: 1,
    },
    senior: {
      id: 's5',
      name: 'Sophie Dubois',
      role: 'Principal Engineer',
      department: 'Engineering',
      country: 'France',
      countryCode: 'FR',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      seniority: 'Senior',
      email: 'sophie.dubois@company.com',
      yearsOfExperience: 14,
      skills: ['Frontend Architecture', 'React', 'Performance', 'Accessibility', 'JavaScript', 'Mentorship'],
      bio: 'Frontend architect focused on scalable web applications. Enthusiastic mentor with experience in cross-cultural collaboration.',
      previousMentorships: 7,
    },
    matchScore: 81,
    commonSkills: ['React', 'JavaScript'],
    seniorityGap: 11,
    reasoning: 'Strong technical fit for architecture mentorship. Sophie has experience mentoring across time zones. Complementary skill focus.',
    suggestedMeeting: {
      date: '2025-11-29',
      time: '13:00',
      duration: 60,
      timezone: 'CET',
    },
    hrNotes: 'Time zone difference may require flexibility',
    status: 'approved',
    matchedDate: '2025-11-16',
  },
  {
    id: '6',
    junior: {
      id: 'j6',
      name: 'Yuki Tanaka',
      role: 'UX Researcher',
      department: 'Design',
      country: 'Japan',
      countryCode: 'JP',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      seniority: 'Junior',
      email: 'yuki.tanaka@company.com',
      yearsOfExperience: 1,
      skills: ['User Research', 'Interviews', 'Usability Testing', 'Data Analysis', 'Figma'],
      bio: 'New UX researcher eager to learn advanced research methodologies and strategic research planning.',
      previousMentorships: 0,
    },
    senior: {
      id: 's6',
      name: 'David Kim',
      role: 'Senior UX Researcher',
      department: 'Design',
      country: 'Singapore',
      countryCode: 'SG',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
      seniority: 'Senior',
      email: 'david.kim@company.com',
      yearsOfExperience: 10,
      skills: ['Research Strategy', 'User Research', 'Quantitative Analysis', 'Mentorship', 'Stakeholder Management'],
      bio: 'Research leader passionate about elevating research practice. Experience mentoring researchers across APAC region.',
      previousMentorships: 6,
    },
    matchScore: 73,
    commonSkills: ['User Research'],
    seniorityGap: 9,
    reasoning: 'Good foundational match for research skills. Regional proximity beneficial. David requested to mentor new researchers.',
    suggestedMeeting: {
      date: '2025-12-02',
      time: '11:00',
      duration: 45,
      timezone: 'JST',
    },
    hrNotes: '',
    status: 'rejected',
    matchedDate: '2025-11-15',
  },
];
