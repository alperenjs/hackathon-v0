export interface User {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  fullName: string | null;
  email: string | null;
  branch: string | null;
  department: string | null;
  country: string | null;
  yearsOfExperience: number;
  skills: string | null;
}

export interface Match {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  mentorId: number | null;
  menteeId: number | null;
  mentor: User;
  mentee: User;
  isApprove: boolean;
  approvedId: number | null;
  approvedUser: User;
  isRejected: boolean;
  rejectId: number | null;
  rejectedUser: User;
  matchScore?: number;
}

export interface Meet {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  mentorId: number | null;
  menteeId: number | null;
  mentor: User;
  mentee: User;
  mentorFeedback: string | null;
  menteeFeedback: string | null;
  summaries: string | null;
  meetTime: string;
  isCompleted: boolean;
  matchId: number | null;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: unknown;
}

// Generic Result Wrappers
export interface MatchGenericResult {
  data: Match;
  isSuccess: boolean;
  message: string | null;
}

export interface MatchListGenericResult {
  data: Match[] | null;
  isSuccess: boolean;
  message: string | null;
}

export interface MeetListGenericResult {
  data: Meet[] | null;
  isSuccess: boolean;
  message: string | null;
}

export interface UserGenericResult {
  data: User;
  isSuccess: boolean;
  message: string | null;
}

export interface UserListGenericResult {
  data: User[] | null;
  isSuccess: boolean;
  message: string | null;
}

