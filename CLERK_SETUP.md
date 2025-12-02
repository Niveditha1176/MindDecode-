# 🔐 Clerk Authentication Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create a Clerk Account
1. Go to [https://clerk.com](https://clerk.com)
2. Click "Start Building for Free"
3. Sign up with your email or GitHub

### Step 2: Create an Application
1. Once logged in, click "+ Create Application"
2. Name it: **MindDecode** (or PrepNOVA)
3. Choose your sign-in options:
   - ✅ Email
   - ✅ Google (recommended)
   - ✅ GitHub (optional)
4. Click **Create Application**

### Step 3: Get Your API Key
1. After creating the app, you'll see the **Quickstart** page
2. Look for **Publishable Key** (starts with `pk_test_...`)
3. Copy this key!

### Step 4: Add the Key to Your Project

#### In Replit:
1. Click the **Secrets** tab (🔒 lock icon in left sidebar)
2. Create a new secret:
   - **Key**: `VITE_CLERK_PUBLISHABLE_KEY`
   - **Value**: Paste your publishable key (pk_test_...)
3. Click "Add Secret"

#### Running Locally:
1. Create a `.env` file in the root folder
2. Add this line:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   ```
3. Save the file

### Step 5: Restart Your App
- **In Replit**: The app will restart automatically
- **Locally**: Stop the server (Ctrl+C) and run `npm run dev` again

### Step 6: Test Authentication! 🎉
1. Open your app
2. You should see the Clerk sign-in page
3. Create an account or sign in
4. You're now protected! Only signed-in users can access the app

---

## What's Protected?
All pages require authentication:
- ✅ Home
- ✅ AI Predictor
- ✅ Pomodoro Timer
- ✅ Mock Test
- ✅ Dashboard

## Sign Out
Click your profile picture in the top-right corner → Sign Out

---

## Troubleshooting

### "Missing Clerk Publishable Key" Warning
- Make sure you added the secret/env variable correctly
- Check the spelling: `VITE_CLERK_PUBLISHABLE_KEY`
- Restart your app after adding the key

### Still Seeing Sign-In Page After Login
- Clear your browser cache
- Try incognito/private mode
- Check browser console for errors (F12)

### Want to Customize the Sign-In Page?
Visit [Clerk Dashboard](https://dashboard.clerk.com) → Your App → **Customization** to change colors, logos, and branding!

---

## 🎨 Next Steps (Optional)

### Add User Profile Page
```tsx
import { UserProfile } from "@clerk/clerk-react";

function ProfilePage() {
  return <UserProfile />;
}
```

### Get Current User Info
```tsx
import { useUser } from "@clerk/clerk-react";

function WelcomeMessage() {
  const { user } = useUser();
  return <h1>Welcome, {user?.firstName}!</h1>;
}
```

### Protect Specific Routes Only
Instead of protecting the entire app, you can protect individual pages - see Clerk docs for more!

---

## 📚 Resources
- [Clerk Documentation](https://clerk.com/docs)
- [Clerk React SDK](https://clerk.com/docs/references/react/overview)
- [Dashboard](https://dashboard.clerk.com)

**Questions?** Check the Clerk Discord or documentation!
