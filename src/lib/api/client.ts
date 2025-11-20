import axios, { type AxiosInstance, type AxiosError, type AxiosRequestConfig, type InternalAxiosRequestConfig } from 'axios';
import type { ProblemDetails } from '../types/api';

class ApiError extends Error {
  status?: number;
  problemDetails?: ProblemDetails;
  
  constructor(
    message: string,
    status?: number,
    problemDetails?: ProblemDetails
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.problemDetails = problemDetails;
  }
}

// Function to get user email from localStorage (set by UserContext)
function getUserEmail(): string {
  // Try to get from localStorage (set by UserContext from Teams)
  const storedEmail = localStorage.getItem('teams_user_email');
  if (storedEmail) {
    return storedEmail;
  }
  
  // Fallback to default
  return 'a.sozen@teamsystem.com';
}

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL?: string) {
    // Use relative paths to go through Vercel proxy in production
    // In development, Vite proxy handles it
    const defaultBaseURL = '';
    
    this.client = axios.create({
      baseURL: baseURL || defaultBaseURL,
      headers: {
        'Content-Type': 'application/json',
        'x-u': getUserEmail(),
      },
      timeout: 30000,
      withCredentials: false,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Ensure x-u header is always present with current user email
        const userEmail = getUserEmail();
        config.headers['x-u'] = userEmail;
        // Add any common headers or auth tokens here
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError<ProblemDetails>) => {
        if (error.response) {
          // Server responded with error status
          const problemDetails = error.response.data;
          const message = problemDetails?.title || problemDetails?.detail || error.message;
          throw new ApiError(
            message || 'An error occurred',
            error.response.status,
            problemDetails
          );
        } else if (error.request) {
          // Request was made but no response received
          throw new ApiError('Network error: No response from server');
        } else {
          // Something else happened
          throw new ApiError(error.message || 'An unexpected error occurred');
        }
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

export const apiClient = new ApiClient();
export { ApiError };

