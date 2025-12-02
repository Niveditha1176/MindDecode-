# 🧠 MindDecode / PrepNOVA

A stunning fullstack React application that predicts exam questions using AI and tracks mental wellness during study sessions.

## ✨ Features

- **Dual Authentication System**:
  - **On Replit**: Replit Auth with Google, GitHub, Twitter/X, Apple, and Email/Password
  - **On Localhost**: Simple email/password authentication for easy local development
- **AI Exam Predictor** - Upload study materials and get AI-predicted exam questions
- **Pomodoro Timer** - Stay focused with mood tracking during study sessions
- **Mock Test Generator** - Practice with AI-generated questions and detailed analysis
- **Interactive Dashboard** - Visualize your progress with beautiful charts
- **Dark/Light Theme** - Smooth theme transitions with localStorage persistence

## 🚀 Running on Replit

This project is already set up and running on Replit! Just click "Run" and it will start automatically.

### First Time Setup

1. Click "Run" to start the application
2. Click the "Log In to Get Started" button
3. Choose your preferred login method:
   - Google
   - GitHub
   - Twitter/X
   - Apple
   - Email/Password

Your account will be created automatically and you'll have full access to all features!

## 💻 Running Locally (For Your Friend)

### Prerequisites

Your friend will need to install:
1. **Node.js** (version 18 or higher) - Download from [nodejs.org](https://nodejs.org/)
2. **PostgreSQL** - Download from [postgresql.org](https://www.postgresql.org/download/)

### Step 1: Get the Project Files

If you exported the files, your friend should:
1. Extract the ZIP file to a folder (like `PrepNOVA`)
2. Open that folder

### Step 2: Install Dependencies

Open **PowerShell** or **Command Prompt** in the project folder and run:

```bash
npm install
```

**Note for Windows PowerShell users:** If you get a "scripts disabled" error, run this command first:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Step 3: Set Up Environment Variables

1. Create a file called `.env` in the root folder
2. Add these lines to the file:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/minddecode
   SESSION_SECRET=your-random-secret-key-here
   ```

Replace:
- `username:password@localhost:5432/minddecode` with your PostgreSQL connection details
  - Example: `postgresql://postgres:mypassword@localhost:5432/minddecode`
- `your-random-secret-key-here` with a random string (at least 32 characters)
  - Example: Generate one with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

**Important**: Do NOT include `REPL_ID` in your `.env` file! This tells the app to use local authentication instead of Replit Auth.

### Step 4: Set Up the Database

```bash
npm run db:push
```

This creates the necessary database tables for users and sessions.

### Step 5: Run the Application

```bash
npm run dev
```

The app will start on **http://localhost:5000**

Open your browser and go to `http://localhost:5000` to see the app!

### Step 6: Create Your First Account (Localhost)

When running on localhost, you'll see a simple login/signup form:

1. Click "Log In to Get Started" button on the landing page
2. You'll be taken to the login page
3. Click "Don't have an account? Sign up" at the bottom
4. Fill in your details:
   - First Name (optional)
   - Last Name (optional)
   - Email (required)
   - Password (minimum 6 characters)
5. Click "Create Account"
6. You're in! Start using the app

**To log in later:**
1. Click "Log In to Get Started"
2. Enter your email and password
3. Click "Log In"

The app automatically detects if you're on localhost or Replit and uses the appropriate authentication method!

## 📁 Project Structure

```
PrepNOVA/
├── client/              # Frontend React app
│   └── src/
│       ├── pages/       # All application pages
│       ├── components/  # Reusable components
│       ├── hooks/       # Custom React hooks (useAuth)
│       └── lib/         # Utilities and helpers
├── server/              # Backend Express server
│   ├── replitAuth.ts    # Replit Auth setup (for Replit)
│   ├── localAuth.ts     # Local auth setup (for localhost)
│   ├── routes.ts        # API routes with environment detection
│   ├── storage.ts       # Database operations
│   └── db.ts            # Database connection
├── shared/              # Shared types and schemas
├── attached_assets/     # Images and media files
└── package.json         # Project dependencies
```

## 🎨 Pages

- **Landing** (`/`) - Beautiful landing page for logged-out users
- **Home** (`/`) - Hero section with background image (logged in)
- **Predictor** (`/predictor`) - AI exam question predictor
- **Pomodoro** (`/pomodoro`) - Focus timer with mood tracking
- **Mock Test** (`/mocktest`) - Practice tests with detailed analysis
- **Dashboard** (`/dashboard`) - Interactive charts and statistics

## 🛠️ Technologies Used

- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** 
  - Replit: Replit Auth (OpenID Connect) with multiple OAuth providers
  - Localhost: Simple email/password with bcrypt hashing
- **Charts:** Chart.js with react-chartjs-2
- **Routing:** Wouter
- **State Management:** TanStack Query
- **Forms:** React Hook Form with Zod validation
- **UI Components:** Radix UI (shadcn)

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run check    # TypeScript type checking
npm run db:push  # Sync database schema
```

## 🌙 Theme Toggle

The app supports both light and dark modes! Click the sun/moon icon in the navigation bar to switch themes. Your preference is saved automatically.

## 🤖 AI-Powered Mock Test Generator

The Mock Test feature generates practice exam questions **without requiring any paid AI API**! 

### How It Works:
- **Free by Default**: Uses a built-in question bank with 30+ high-quality questions across 6 subjects
- **Multiple Difficulty Levels**: Easy, Medium, and Hard questions for each subject
- **Subjects Available**: Mathematics, Physics, Computer Science, Chemistry, Biology
- **Detailed Explanations**: Every question includes a detailed explanation

### Optional: Gemini AI Integration
If you want AI-generated questions instead of the built-in bank:
1. Get a free Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add to your Secrets (or `.env` for localhost): `GEMINI_API_KEY=your_key_here`
3. The system will automatically use Gemini when available, falling back to the question bank if not

**No setup required** - the app works perfectly without any AI API keys!

## 🔐 Authentication

This app uses a **dual authentication system** that automatically adapts to your environment:

### On Replit (Replit Auth)
- Multiple OAuth login options: Google, GitHub, Twitter/X, Apple
- Plus traditional email/password
- Secure OpenID Connect (OIDC) protocol
- Automatic token refresh
- Zero configuration required

### On Localhost (Simple Email/Password)
- Easy email and password registration
- Bcrypt password hashing for security
- PostgreSQL session storage
- No external OAuth setup needed
- Perfect for local development

**The app automatically detects your environment** and uses the appropriate authentication method - no configuration needed!

## 🐛 Troubleshooting

### Port Already in Use
If you see "address already in use" error:
- Kill the process using port 5000
- Or change the port in `vite.config.ts`

### Database Connection Error
- Make sure PostgreSQL is running
- Check your DATABASE_URL in `.env`
- Run `npm run db:push` to create tables

### npm install fails
- Make sure you have Node.js 18+ installed
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

### Can't log in (Localhost)
- Make sure the server is running (`npm run dev`)
- Check server logs - should say "🔐 Using Local Auth (email/password)"
- If you see "🔐 Using Replit Auth" but you're on localhost, make sure you DON'T have `REPL_ID` in your `.env` file
- Clear browser cache and cookies
- Try incognito/private mode

### Can't log in (Replit)
- Make sure you're logged into Replit itself
- Check server logs - should say "🔐 Using Replit Auth"
- Try closing the webview and opening it again

## 📚 Additional Resources

- [Replit Docs](https://docs.replit.com/) - Learn about Replit platform
- [Replit Auth](https://docs.replit.com/replit-workspace/replit-auth) - Authentication documentation
- [React Docs](https://react.dev/) - React documentation
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework

## 📧 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Look at browser console for error messages (Press F12)
3. Check server logs in the terminal

## 🎉 Enjoy!

Your AI-powered study companion is ready to help you ace your exams! 🚀

---

Made with ❤️ using React, TypeScript, and dual authentication (Replit Auth + Local Auth)
