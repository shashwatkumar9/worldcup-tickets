# Simple Authentication Setup (No Database Required!)

## ✅ Works Immediately - No Database Setup Needed!

This authentication system works out of the box using environment variables. Perfect for local development!

## 🚀 Quick Start (2 Steps!)

### Step 1: Start the Server

```bash
npm run dev
```

Server starts at: **http://localhost:3001**

### Step 2: Sign In to Admin Panel

1. Go to **http://localhost:3001/auth/signin**

2. Use these credentials:
   - **Email**: `nanoo.shashwat@gmail.com`
   - **Password**: `admin123`

3. Click "Sign In"

4. You'll be redirected to **http://localhost:3001/admin** 🎉

That's it! You now have access to the admin panel!

## 🔐 Default Credentials

```
Email: nanoo.shashwat@gmail.com
Password: admin123
```

**Important**: Change the password in `.env.local` for security:

```env
ADMIN_EMAIL="nanoo.shashwat@gmail.com"
ADMIN_PASSWORD="your-secure-password"
```

## 📍 Available Routes

### Public Routes
- `/` - Homepage
- `/fifa-world-cup-2026-tickets` - World Cup tickets
- `/teams/*` - Team pages

### Auth Routes
- `/auth/signin` - Sign in page (only one you need!)

### Admin Routes (Protected)
- `/admin` - Admin dashboard
- `/admin/teams` - Manage teams
- `/admin/fixtures` - Manage fixtures
- `/admin/venues` - Manage venues
- `/admin/articles` - Manage articles
- `/admin/blog` - Manage blog posts

## 🔒 How It Works

- **Local Development**: Uses simple credentials from `.env.local`
- **No Database**: Everything works with environment variables
- **JWT Sessions**: Secure session management
- **Protected Routes**: Admin routes require authentication

## 🚀 Deploying to Vercel

When you're ready to deploy:

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add authentication"
git push
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel will auto-detect Next.js

### Step 3: Add Vercel Postgres (Optional but Recommended)

1. In Vercel Dashboard → Storage → Create Database → Postgres
2. Copy connection strings to environment variables
3. Run the migration script (see VERCEL_DEPLOYMENT.md)

### Step 4: Set Environment Variables in Vercel

Go to Project Settings → Environment Variables and add:

```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=generate-a-random-32-char-string
ADMIN_EMAIL=nanoo.shashwat@gmail.com
ADMIN_PASSWORD=your-secure-password
```

### Step 5: Deploy!

```bash
git push
```

Vercel automatically deploys on push!

## 🔐 Security Notes

### For Local Development
- ✅ Default credentials are fine for local testing
- ✅ No sensitive data exposed (it's localhost only)

### For Production
- ⚠️ **Change** `ADMIN_PASSWORD` in Vercel environment variables
- ⚠️ Use a strong password (16+ characters)
- ⚠️ Consider adding Vercel Postgres for user management
- ⚠️ Generate a new `NEXTAUTH_SECRET` (use a random string generator)

## 📝 Files Modified

- `.env.local` - Simplified to just admin credentials
- `src/lib/auth.ts` - Simplified auth logic (no database)
- `src/app/auth/signin/page.tsx` - Shows default credentials
- `src/middleware.ts` - Already configured for route protection

## 🎯 What's Next?

Now that auth is set up, you can:

1. ✅ Access admin panel immediately
2. ✅ Start creating team articles
3. ✅ Manage content
4. ✅ Deploy to Vercel anytime

## 🆘 Troubleshooting

### "Invalid credentials" error
- **Solution**: Check `.env.local` has correct `ADMIN_EMAIL` and `ADMIN_PASSWORD`
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

### Cannot access `/admin` routes
- **Solution**: Make sure you're signed in at `/auth/signin` first
- Clear browser cookies and try again

### Changes to `.env.local` not working
- **Solution**: Restart the development server
- Environment variables are loaded on server start

## 💡 Migration to Database (Later)

When you want to add more users or features:

1. Add Vercel Postgres in production
2. Run `scripts/init-db.sql` migration
3. Update `src/lib/auth.ts` to use database queries
4. See `VERCEL_DEPLOYMENT.md` for full guide

For now, enjoy the simple setup! 🚀

---

**Current Admin**: nanoo.shashwat@gmail.com
**Default Password**: admin123 (change in `.env.local`)
**Admin Panel**: http://localhost:3001/admin
