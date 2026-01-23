# Vercel Deployment Guide with Postgres

## 🚀 Quick Deployment (Without Database)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel auto-detects Next.js configuration
4. Click "Deploy"

### Step 3: Set Environment Variables

In Vercel Dashboard → Project → Settings → Environment Variables:

```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-random-32-char-secret-key
ADMIN_EMAIL=nanoo.shashwat@gmail.com
ADMIN_PASSWORD=your-secure-production-password
```

**Generate `NEXTAUTH_SECRET`**:
```bash
openssl rand -base64 32
```

### Step 4: Done!

Your site is live at `https://your-domain.vercel.app`

Access admin at: `https://your-domain.vercel.app/admin`

---

## 🗄️ Adding Vercel Postgres (Recommended for Production)

### Why Add Database?

- Multiple admin users
- User management
- Password reset functionality
- Audit logs
- Better security

### Step 1: Create Vercel Postgres

1. Go to Vercel Dashboard
2. Select your project
3. Click **Storage** tab
4. Click **Create Database**
5. Select **Postgres**
6. Choose region (closest to your users)
7. Click **Create**

Vercel automatically adds these environment variables:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

### Step 2: Run Database Migration

**Option A: Using Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Run SQL migration
vercel env pull .env.local
psql $POSTGRES_URL -f scripts/init-db.sql
```

**Option B: Using Vercel Dashboard**

1. Go to Storage → Your Postgres Database
2. Click **Query** tab
3. Copy contents of `scripts/init-db.sql`
4. Paste and run in query editor

**Option C: Using Local psql**

```bash
# Get connection string from Vercel Dashboard
psql "your-vercel-postgres-connection-string" -f scripts/init-db.sql
```

### Step 3: Update Auth Configuration

Update `src/lib/auth.ts` to use database:

```typescript
import { sql } from "@vercel/postgres"
import bcrypt from "bcryptjs"

// In authorize function, replace env check with:
try {
  const result = await sql`
    SELECT * FROM users WHERE email = ${credentials.email}
  `

  const user = result.rows[0]

  if (!user || !user.password_hash) {
    return null
  }

  const isValidPassword = await bcrypt.compare(
    credentials.password,
    user.password_hash
  )

  if (!isValidPassword) {
    return null
  }

  return {
    id: user.id.toString(),
    email: user.email,
    name: user.name,
    role: user.role,
  }
} catch (error) {
  console.error("Auth error:", error)
  return null
}
```

### Step 4: Set Initial Admin Password

Run this SQL in Vercel Postgres Query tab:

```sql
-- Hash your password (use bcrypt with 10 rounds)
-- You can use: https://bcrypt-generator.com/ or run locally

UPDATE users
SET password_hash = 'your-bcrypt-hashed-password'
WHERE email = 'nanoo.shashwat@gmail.com';
```

Or create a script:

```bash
# Create scripts/set-admin-password.js
node scripts/set-admin-password.js
```

### Step 5: Redeploy

```bash
git add .
git commit -m "Add database authentication"
git push
```

Vercel automatically redeploys!

---

## 🔄 Migration Checklist

### Before Migration
- [ ] Test locally with simple auth
- [ ] Commit and push all changes
- [ ] Deploy to Vercel successfully
- [ ] Verify admin panel works with simple auth

### During Migration
- [ ] Create Vercel Postgres database
- [ ] Run SQL migration (`init-db.sql`)
- [ ] Verify tables created correctly
- [ ] Set admin password
- [ ] Update `auth.ts` to use database
- [ ] Test database connection

### After Migration
- [ ] Redeploy to Vercel
- [ ] Test admin login
- [ ] Verify all admin routes work
- [ ] Remove `ADMIN_PASSWORD` from environment variables (optional)
- [ ] Document new admin users process

---

## 🔐 Environment Variables Reference

### Required (All Deployments)
```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=random-32-char-string
```

### Simple Auth (No Database)
```env
ADMIN_EMAIL=nanoo.shashwat@gmail.com
ADMIN_PASSWORD=your-secure-password
```

### With Vercel Postgres (Recommended)
```env
# Auto-added by Vercel:
POSTGRES_URL=postgres://...
POSTGRES_PRISMA_URL=postgres://...
POSTGRES_URL_NON_POOLING=postgres://...

# You can remove ADMIN_PASSWORD after migration
```

---

## 📊 Database Schema

The `scripts/init-db.sql` creates:

### Tables
- **users** - User accounts (email, password_hash, role)
- **sessions** - NextAuth sessions
- **verification_tokens** - Password reset tokens
- **accounts** - OAuth providers (future)

### Default Admin
- Email: nanoo.shashwat@gmail.com
- Role: admin
- Password: Set during migration

---

## 🔧 Troubleshooting Deployment

### Build fails
**Error**: `Module not found`
**Solution**: Check package.json dependencies are correct
```bash
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Environment variables not working
**Error**: `NEXTAUTH_SECRET is not defined`
**Solution**:
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add missing variables
3. Redeploy: Deployments → Latest → Redeploy

### Database connection fails
**Error**: `connection to server failed`
**Solution**:
1. Check POSTGRES_URL is set in Vercel
2. Verify database is created in Storage tab
3. Check region matches your deployment region

### Admin login not working after migration
**Error**: `Invalid credentials`
**Solution**:
1. Verify SQL migration ran successfully
2. Check admin password was set correctly
3. Ensure `auth.ts` uses database queries
4. Check Vercel logs: Dashboard → Logs

---

## 🎯 Deployment Strategies

### Strategy 1: Start Simple (Recommended)
1. Deploy with simple auth (env variables)
2. Get site live quickly
3. Add database later when needed

### Strategy 2: Full Setup from Start
1. Create Vercel Postgres first
2. Run migrations
3. Deploy with database auth

### Strategy 3: Staged Migration
1. Deploy with simple auth
2. Add Vercel Postgres
3. Keep simple auth as fallback
4. Gradually transition users

---

## 📝 Post-Deployment Checklist

- [ ] Site accessible at production URL
- [ ] Admin panel requires authentication
- [ ] Admin login works correctly
- [ ] All team pages load properly
- [ ] Images and assets load
- [ ] SEO meta tags correct
- [ ] Performance acceptable (check Vercel Analytics)
- [ ] Set up custom domain (optional)
- [ ] Configure edge caching (optional)

---

## 🚀 Continuous Deployment

Vercel automatically deploys on every push to main:

```bash
# Make changes
git add .
git commit -m "Add new team articles"
git push

# Vercel automatically:
# 1. Builds your app
# 2. Runs tests
# 3. Deploys to production
# 4. Gives you a preview URL
```

---

## 💡 Tips

- Use Vercel's Preview Deployments for testing
- Set up branch deployments for staging
- Monitor performance in Vercel Analytics
- Use Edge Functions for better performance
- Enable ISR (Incremental Static Regeneration) for dynamic content

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Vercel Postgres: https://vercel.com/docs/storage/vercel-postgres
- NextAuth Docs: https://next-auth.js.org/

**Your Deployment**:
- Admin: nanoo.shashwat@gmail.com
- Panel: https://your-domain.vercel.app/admin
