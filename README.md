<div align="center">

# 🚀 Garavel - Mentorship Platform

**Your Gateway to Cross-Border Mentorship**

*Connecting employees across different countries, functions, and seniority levels through intelligent mentorship matching*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Microsoft Teams](https://img.shields.io/badge/Teams-Integrated-6264A7?style=flat&logo=microsoft-teams&logoColor=white)](https://teams.microsoft.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)

---

## 🎯 Overview

**Garavel** is an intelligent mentorship matching platform built as a Microsoft Teams application. It uses AI-powered algorithms to create meaningful professional relationships between mentors and mentees, fostering cross-cultural collaboration and professional growth.

### ✨ What Makes It Special

- 🤖 **AI-Powered Matching** - Intelligent algorithm matches mentors and mentees based on skills, experience, and compatibility
- 🌍 **Global Reach** - Connect employees across different countries and time zones
- 🔐 **Role-Based Access** - Different interfaces for HR and regular users
- 📊 **Real-Time Analytics** - Comprehensive dashboard with KPIs and metrics
- 🎨 **Modern UI** - Clean, minimalist, and corporate design

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | UI Framework | 19 |
| 📘 **TypeScript** | Type Safety | 5.9 |
| ⚡ **Vite** | Build Tool | 7 |
| 🎨 **TailwindCSS** | Styling | 4.1 |
| 🧩 **Radix UI** | Component Library | Latest |
| 🧭 **React Router** | Navigation | 7.9 |
| 👥 **Teams SDK** | Microsoft Teams Integration | 2.47 |

### Backend Integration
- 🔌 **RESTful API** (ASP.NET Core)
- 📡 **Axios** - HTTP Client
- 🔄 **Custom Service Layer** - API abstraction

### Deployment
- ☁️ **Vercel** - Frontend Hosting
- 🔀 **Vercel Rewrites** - API Proxy

---

## 🏗 Architecture

### Architecture Layers

```
┌─────────────────────────────────────────────────────────┐
│              PRESENTATION LAYER                         │
│  Routes: About | Dashboard | Approvals | Ongoing       │
│  Features: Reservation | Meet Details                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│            BUSINESS LOGIC LAYER                         │
│  Custom Hooks: useMatches | useMeets | useUsers        │
│  Utils: matchAdapter (API ↔ UI Transformation)         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              SERVICE LAYER                              │
│  API Services: matches | meets | users | manage        │
│  Axios Client: Centralized HTTP Configuration          │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│               DATA LAYER                                │
│  TypeScript Interfaces & Type Definitions              │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│             CONTEXT LAYER                               │
│  UserContext: Teams SDK Integration & Authentication   │
└─────────────────────────────────────────────────────────┘
```

### 📁 Project Structure

```
src/
├── 📂 routes/              # Page components
│   ├── About.tsx
│   ├── Dashboard.tsx
│   ├── ReservationList.tsx
│   └── OnGoingList.tsx
│
├── 📂 features/            # Feature components
│   ├── dashboard/
│   │   ├── KPICard.tsx
│   │   └── RecentSessions.tsx
│   ├── reservation/
│   │   ├── ReservationList.tsx
│   │   ├── ReservationItem.tsx
│   │   ├── OnGoingList.tsx
│   │   └── OnGoingItem.tsx
│   └── meet/
│       └── MeetDetails.tsx
│
├── 📂 hooks/               # Custom React hooks
│   └── api/
│       ├── useMatches.ts
│       ├── useMeets.ts
│       ├── useUsers.ts
│       └── useManage.ts
│
├── 📂 lib/                 # Core libraries
│   ├── api/                # API services
│   │   ├── client.ts
│   │   ├── matches.service.ts
│   │   ├── meets.service.ts
│   │   ├── users.service.ts
│   │   └── manage.service.ts
│   ├── types/              # TypeScript types
│   │   └── api.ts
│   └── utils/              # Utility functions
│       └── matchAdapter.ts
│
├── 📂 contexts/            # React contexts
│   └── UserContext.tsx
│
└── 📂 components/          # Shared components
    └── Toaster.tsx
```

---

## 🎨 Key Features

### 🔐 Role-Based Access Control

| User Type | Access Level | Features |
|-----------|-------------|----------|
| **HR Users** | Full Access | ✅ Approvals Tab<br>✅ Ongoing Tab<br>✅ Dashboard<br>✅ About |
| **Non-HR Users** | Limited Access | ✅ Ongoing Tab (filtered)<br>✅ Dashboard<br>✅ About |

### 📊 Dashboard Analytics

- **Total Active Mentorships** - Current active mentorship pairs
- **Total Sessions** - All scheduled meetings
- **Average Sessions Rating** - Overall session quality score
- **No-Show Rate** - Attendance tracking
- **Mentor Satisfaction** - Mentor feedback metrics
- **Mentee Satisfaction** - Mentee feedback metrics
- **Recent Sessions** - Latest meeting activity

### 🔄 Real-Time Updates

- ⚡ Optimistic UI updates
- 🔄 Per-item loading states
- 🔔 Toast notifications
- 📈 Trend indicators with percentage changes

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Microsoft Teams account (for testing)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hackathon-v0

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your-api-url-here
```

---

## 🔌 API Integration

### Request Flow

```
User Action
    ↓
Component
    ↓
Custom Hook
    ↓
Service Layer
    ↓
Axios Client
    ↓
Backend API
```

### Response Flow

```
Backend API
    ↓
Axios Client
    ↓
Service Layer
    ↓
Hook (with error handling)
    ↓
Component (with loading states)
    ↓
UI Update
```

### Key API Features

- 🔑 **Dynamic Headers** - `x-u` header with user email from Teams
- 🛡️ **CORS Handling** - Vite proxy + Vercel rewrites
- ⚠️ **Error Handling** - Custom `ApiError` class
- ⏳ **Loading States** - Per-operation loading indicators
- 🔔 **Notifications** - Toast messages for user feedback

---

## 👥 Microsoft Teams Integration

### Authentication
- ✅ Teams SDK for user context
- ✅ Automatic user identification
- ✅ Email extraction for API headers

### Features
- 📱 Native Teams app experience
- 🔐 Seamless authentication
- 👤 User context management
- 📍 Branch/Department filtering

---

## 🚢 Deployment

### Development
- ⚡ Vite dev server with hot reload
- 🔄 Proxy configuration for API
- 🔥 Hot module replacement

### Production
- ☁️ **Vercel** deployment
- ⚡ Serverless functions
- 🔀 API rewrites for CORS
- 📦 CDN distribution

### Deployment Steps

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel deploy
```

---

## 📈 Performance Optimizations

- ⚡ Code splitting (Vite)
- 🚀 Lazy loading (Route-based)
- 🔄 Optimistic UI updates
- ⏳ Per-item loading states
- 🎯 Efficient re-renders (React.memo)

---

## 🔒 Security Features

- 🔐 User authentication via Teams SDK
- 🛡️ Role-based access control
- ✅ API request validation
- 🌐 CORS protection
- 🔑 Secure header management

---

## 🔮 Future Enhancements

- 🔴 Real-time updates (WebSockets)
- 🔍 Advanced filtering and search
- 📊 Enhanced analytics dashboard
- 📅 Meeting scheduling integration
- 💬 Feedback collection system
- 📧 Email notifications
- 📱 Mobile app support

---

## 📝 License

This project is part of a hackathon submission.

---

<div align="center">

**Built with ❤️ for global mentorship**

[Report Bug](https://github.com/your-repo/issues) · [Request Feature](https://github.com/your-repo/issues)

</div>
