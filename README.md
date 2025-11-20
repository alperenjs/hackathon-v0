================================================================================
GARAVEL - MENTORSHIP PLATFORM
ARCHITECTURAL OVERVIEW
================================================================================

PROJECT OVERVIEW
----------------
Garavel is an intelligent mentorship matching platform built as a Microsoft 
Teams application. It connects employees across different countries, functions, 
and seniority levels through AI-powered matching algorithms.

TECH STACK
----------
Frontend:
  • React 19 with TypeScript
  • Vite (Build Tool)
  • TailwindCSS (Styling)
  • Radix UI (Component Library)
  • React Router (Navigation)
  • Microsoft Teams SDK (Integration)

Backend Integration:
  • RESTful API (ASP.NET Core)
  • Axios (HTTP Client)
  • Custom API Service Layer

Deployment:
  • Vercel (Frontend Hosting)
  • Vercel Rewrites (API Proxy)

ARCHITECTURE LAYERS
-------------------

1. PRESENTATION LAYER
   └─ Routes (Page Components)
      ├─ About.tsx
      ├─ ReservationList.tsx (HR Approval Interface)
      └─ OnGoingList.tsx (Active Matches)
   
   └─ Features (Feature Components)
      ├─ reservation/ (Match Management)
      │  ├─ ReservationList.tsx
      │  ├─ ReservationItem.tsx
      │  ├─ OnGoingList.tsx
      │  └─ OnGoingItem.tsx
      └─ meet/ (Meeting Details)
         └─ MeetDetails.tsx

2. BUSINESS LOGIC LAYER
   └─ Custom Hooks (Data Management)
      ├─ useMatches.ts (Match Operations)
      ├─ useMeets.ts (Meeting Operations)
      ├─ useUsers.ts (User Operations)
      └─ useManage.ts (Admin Operations)

   └─ Utils (Data Transformation)
      └─ matchAdapter.ts (API ↔ UI Data Mapping)

3. SERVICE LAYER
   └─ API Services (HTTP Communication)
      ├─ client.ts (Axios Configuration)
      ├─ matches.service.ts
      ├─ meets.service.ts
      ├─ users.service.ts
      └─ manage.service.ts

4. DATA LAYER
   └─ Type Definitions
      └─ api.ts (TypeScript Interfaces)

5. CONTEXT LAYER
   └─ UserContext.tsx (Teams SDK Integration)
      • User Authentication
      • Teams Context Management
      • LocalStorage Integration

KEY ARCHITECTURAL PATTERNS
---------------------------

1. SEPARATION OF CONCERNS
   • Clear separation between UI, business logic, and API calls
   • Service layer abstracts API communication
   • Custom hooks encapsulate data fetching logic

2. COMPONENT-BASED ARCHITECTURE
   • Reusable UI components (Radix UI primitives)
   • Feature-based folder structure
   • Container/Presentational pattern

3. TYPE SAFETY
   • Full TypeScript implementation
   • Strong typing for API responses
   • Type-safe data adapters

4. ROLE-BASED ACCESS CONTROL
   • HR users: Full access (Approvals + Ongoing)
   • Non-HR users: Limited access (Only Ongoing matches)
   • Conditional rendering based on user branch

5. STATE MANAGEMENT
   • React Hooks for local state
   • Context API for global user state
   • Optimistic UI updates

API INTEGRATION
---------------

Request Flow:
  1. User Action → Component
  2. Component → Custom Hook
  3. Hook → Service Layer
  4. Service → Axios Client
  5. Axios → Backend API

Response Flow:
  1. Backend API → Axios Client
  2. Client → Service Layer
  3. Service → Hook (with error handling)
  4. Hook → Component (with loading states)
  5. Component → UI Update

Key Features:
  • Dynamic x-u header (User email from Teams)
  • CORS handling (Vite proxy + Vercel rewrites)
  • Error handling with custom ApiError class
  • Loading states per operation
  • Toast notifications for user feedback

MICROSOFT TEAMS INTEGRATION
----------------------------

1. Authentication
   • Teams SDK for user context
   • Automatic user identification
   • Email extraction for API headers

2. Deployment
   • Teams App Manifest
   • Static tabs configuration
   • Personal scope access

3. User Context
   • UserPrincipalName
   • DisplayName
   • Branch/Department filtering

DATA FLOW EXAMPLE (Approve Match)
----------------------------------

1. User clicks "Approve" button
2. ReservationItem → handleApprove()
3. ReservationListPage → approveMatch API call
4. useApproveMatch hook → matchesService.approveMatch()
5. API Client → POST /api/Matches/approve-match/{id}
6. Backend processes request
7. Response → Hook updates state
8. Toast notification shown
9. UI optimistically updates (item removed)
10. List refetches for consistency

PERFORMANCE OPTIMIZATIONS
--------------------------

1. Code Splitting (Vite)
2. Lazy Loading (Route-based)
3. Optimistic UI Updates
4. Per-item loading states
5. Efficient re-renders (React.memo where needed)

SECURITY FEATURES
-----------------

1. User authentication via Teams SDK
2. Role-based access control
3. API request validation
4. CORS protection
5. Secure header management

DEPLOYMENT ARCHITECTURE
-----------------------

Development:
  • Vite dev server
  • Proxy configuration for API
  • Hot module replacement

Production:
  • Vercel deployment
  • Serverless functions
  • API rewrites for CORS
  • CDN distribution

FUTURE ENHANCEMENTS
-------------------

• Real-time updates (WebSockets)
• Advanced filtering and search
• Analytics dashboard
• Meeting scheduling integration
• Feedback collection system

================================================================================
END OF ARCHITECTURE OVERVIEW
================================================================================

