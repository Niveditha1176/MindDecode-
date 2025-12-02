# PrepNOVA / MindDecode

## Overview

PrepNOVA (also known as MindDecode) is an AI-powered study assistant application that combines exam question prediction with mental wellness tracking. The platform helps students optimize their study sessions by predicting likely exam questions based on uploaded materials while monitoring their emotional state during study periods. This is a fullstack React application built for hackathon demonstration purposes with mock AI functionality and full authentication.

**Core Features:**
- Secure user authentication with multiple login options (Google, GitHub, Twitter/X, Apple, Email/Password)
- AI-powered exam question prediction from study materials
- Pomodoro timer with mood tracking integration
- Mock test generation and practice question system
- Interactive dashboard with study analytics and mood statistics
- Dark/light theme support with persistent preferences
- User profile management with avatars

**Recent Changes (October 29, 2025):**
- Integrated dual authentication system:
  - Replit Auth (OpenID Connect) for Replit deployment
  - Simple email/password auth for localhost development
- Automatic environment detection using REPL_ID
- Activated PostgreSQL database with users and sessions tables
- Created beautiful landing page for unauthenticated users
- Implemented Login page with registration for localhost
- Implemented user profile dropdown with logout functionality
- All features now protected behind authentication

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool for fast development and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- Tailwind CSS for utility-first styling with custom design system

**UI Component Strategy:**
The application uses shadcn/ui component library built on Radix UI primitives, providing accessible, unstyled components that are customized with Tailwind CSS. This approach was chosen for:
- Accessibility compliance out of the box
- Full design control through Tailwind utilities
- Tree-shakeable components for optimal bundle size
- TypeScript support throughout

**State Management:**
- React Query (TanStack Query) for server state management and caching
- React Context API for theme state (light/dark mode)
- useAuth hook for authentication state management
- Local component state with React hooks for UI interactions
- localStorage for theme persistence across sessions

**Design System:**
The application follows a modern SaaS aesthetic inspired by Linear, Notion, and Vercel:
- Typography: DM Sans for headings and body text, monospace fonts for data displays
- Color palette: Indigo-to-cyan gradient accents, slate grays for neutral elements
- Spacing: Consistent Tailwind spacing scale (4, 6, 8, 12, 16, 24 units)
- Components: Rounded corners (xl), shadow elevations, hover transitions
- Theme switching: CSS custom properties for seamless dark/light mode transitions

**Data Visualization:**
Chart.js with react-chartjs-2 wrapper for dashboard analytics:
- Bar charts for topic trend analysis
- Pie charts for mood distribution statistics
- Line charts for progress tracking over time

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server
- Node.js runtime environment
- Custom Vite middleware integration for development with HMR (Hot Module Replacement)
- Passport.js for authentication middleware

**Development vs Production:**
- Development: Vite dev server with middleware mode for instant updates
- Production: Static file serving from pre-built dist directory
- The server setup supports SSR-ready architecture though currently serves SPA

**API Design:**
RESTful API structure with database persistence:
- `/api` prefix for all API routes
- `/api/auth/user` - Get current authenticated user
- `/api/login` - Initiate OIDC login flow
- `/api/logout` - Terminate session and redirect to logout
- `/api/callback` - OIDC callback handler
- CRUD operations abstracted through IStorage interface
- DatabaseStorage implementation using Drizzle ORM

**Data Layer (Active):**
- PostgreSQL database (Neon serverless) for production-ready data persistence
- Drizzle ORM for type-safe database queries and migrations
- Schema includes:
  - `users` table: id, email, firstName, lastName, profileImageUrl, createdAt, updatedAt
  - `sessions` table: sid, sess, expire (for Express session storage)
- Migration system via `npm run db:push`
- Connection via DATABASE_URL environment variable

### Authentication & Authorization

**Dual Authentication System:**
The application automatically detects the environment and uses the appropriate authentication method:

**On Replit (Replit Auth via OpenID Connect):**
- Detects Replit environment using `REPL_ID` environment variable
- Multiple OAuth login options: Google, GitHub, Twitter/X, Apple, plus email/password
- OIDC protocol with automatic token refresh
- Zero configuration required - works out of the box
- Login flow: Landing → `/api/login` → OIDC provider → `/api/callback` → Authenticated app

**On Localhost (Simple Email/Password):**
- Detects localhost when `REPL_ID` is not set
- Email/password registration and login
- Bcrypt password hashing (10 rounds)
- PostgreSQL session storage with connect-pg-simple
- Login flow: Landing → `/login` page → Email/password form → Authenticated app

**Common Infrastructure:**
- Session management with PostgreSQL-backed session store (connect-pg-simple)
- Secure httpOnly cookies with 7-day expiration
- User data stored in `users` table with support for both auth methods
- Session data in `sessions` table

**Authentication Flow (Localhost):**
1. Unauthenticated users see Landing page with "Log In to Get Started" button
2. Login button navigates to `/login` route (wouter)
3. User can login with existing credentials or register a new account
4. On successful login/register, auth query is refreshed via `queryClient.invalidateQueries`
5. Frontend receives authenticated user via `/api/auth/user` endpoint
6. User is redirected to `/` and sees full application

**Authentication Flow (Replit):**
1. Unauthenticated users see Landing page
2. Login button redirects to `/api/login` which initiates OIDC flow
3. After successful authentication, callback route creates user session
4. User data is upserted to database (email, name, profile image)
5. Frontend receives authenticated user via `/api/auth/user` endpoint
6. User sees full application with navbar navigation and profile menu

**Security Model:**
- Backend routes protected with `isAuthenticated` middleware (Replit) or `isAuthenticatedLocal` (localhost)
- Frontend authentication state managed by `useAuth` hook
- 401 errors treated as "logged out" state, not error state
- Passwords hashed with bcrypt on localhost
- Session tokens automatically refreshed when expired (Replit)
- All application routes protected behind authentication
- User profile data stored securely in PostgreSQL

**Frontend Auth Hooks:**
- `useAuth()`: Returns `{ user, isLoading, isAuthenticated, refetch }`
  - Handles 401 errors gracefully as logged-out state
  - Refetches on window focus (after login redirect)
  - Integrates with TanStack Query for caching
- `useEnvironment()`: Returns `{ isReplit, authMode, isLoading }`
  - Detects runtime environment
  - Used by Landing page to show correct login flow

### External Dependencies

**Authentication Services:**
- **Replit Auth** (replit.com/oidc) - Built-in OpenID Connect provider for Replit
  - Provides: User management, OAuth integrations (Google, GitHub, etc.)
  - Integration: openid-client NPM package with passport strategy
  - Configuration: Uses REPL_ID and SESSION_SECRET environment variables
  - No external API keys required
- **Local Auth** - Simple email/password authentication for localhost
  - Provides: User registration, login with email/password
  - Integration: bcryptjs for password hashing
  - Configuration: Uses SESSION_SECRET environment variable
  - PostgreSQL for user and session storage

**Database:**
- Neon Serverless PostgreSQL - Production-grade serverless Postgres
- Drizzle ORM for type-safe database queries and migrations
- Connection string via DATABASE_URL environment variable
- Session storage via connect-pg-simple (PostgreSQL session store)

**Third-Party Libraries:**
- Radix UI - Unstyled accessible component primitives (@radix-ui/react-*)
- Chart.js - Data visualization library
- Framer Motion - Animation library for page transitions and micro-interactions
- Zod - Schema validation for forms and API data
- React Hook Form - Form state management with validation
- Passport.js - Authentication middleware (Replit Auth)
- openid-client - OIDC client library (Replit Auth)
- memoizee - Function memoization for OIDC config caching (Replit Auth)
- bcryptjs - Password hashing for local auth

**Development Tools:**
- Replit-specific plugins for development environment (cartographer, dev-banner, runtime-error-modal)
- ESBuild for production server bundling
- TypeScript compiler for type checking
- Drizzle Kit for database migrations

**Design Assets:**
- Google Fonts: DM Sans, Architects Daughter, Fira Code, Geist Mono
- Custom background images stored in attached_assets directory
- User profile images from authentication providers

**Deployment Considerations:**
The application is designed to run both on Replit (production) and localhost (development):
- **On Replit**: Uses Replit Auth with zero configuration
- **On Localhost**: Uses simple email/password auth for easy development
- Environment detection is automatic based on `REPL_ID` environment variable
- Same codebase works in both environments without modification
- Database migrations are handled via `npm run db:push` which syncs the Drizzle schema
- The modular architecture separates concerns between authentication, data storage, and presentation layers
