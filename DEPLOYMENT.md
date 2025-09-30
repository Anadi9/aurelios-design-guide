# Deployment Guide - Vercel Production

## Prerequisites
- Git repository connected to Vercel
- Vercel project configured for automatic deployments
- All code changes committed and ready for production

## Steps to Deploy to Production

### 1. Pre-deployment Checklist
- [ ] All code changes are complete and tested locally
- [ ] No console errors or warnings
- [ ] All environment variables are configured in Vercel dashboard
- [ ] Build process works without errors (`npm run build` or `yarn build`)

### 2. Local Testing (Optional but Recommended)
```bash
# Test the production build locally
npm run build
npm run start

# Or if using yarn
yarn build
yarn start
```

### 3. Commit and Push to Production

#### Option A: Direct Push to Main Branch
```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "feat: add Anta favicon and update branding"

# Push to main branch (triggers production deployment)
git push origin main
```

#### Option B: Using Pull Request Workflow
```bash
# Create and switch to feature branch
git checkout -b feature/update-favicon

# Add and commit changes
git add .
git commit -m "feat: add Anta favicon and update branding"

# Push feature branch
git push origin feature/update-favicon

# Create Pull Request on GitHub/GitLab
# After review and approval, merge to main branch
```

### 4. Monitor Deployment
1. **Vercel Dashboard**: Check deployment status at [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Build Logs**: Monitor build process for any errors
3. **Preview URL**: Vercel provides preview URLs for each deployment
4. **Production URL**: Your live site URL (usually `your-project.vercel.app`)

### 5. Post-deployment Verification
- [ ] Visit production URL
- [ ] Check favicon is displaying correctly
- [ ] Test all pages and functionality
- [ ] Verify responsive design on mobile/desktop
- [ ] Check browser console for any errors

### 6. Rollback (if needed)
If deployment has issues:
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or rollback to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

## Environment Variables
Make sure these are configured in Vercel dashboard:
- `NODE_ENV=production`
- Any API keys or secrets your app needs
- Database connection strings (if applicable)

## Build Configuration
Vercel automatically detects Next.js projects and uses these settings:
- **Build Command**: `npm run build` or `yarn build`
- **Output Directory**: `.next`
- **Install Command**: `npm install` or `yarn install`

## Custom Domain (Optional)
1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

## Performance Monitoring
- Vercel Analytics (if enabled)
- Core Web Vitals monitoring
- Real User Monitoring (RUM)

## Troubleshooting Common Issues

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Check for TypeScript errors: `npm run type-check`

### Environment Issues
- Verify all environment variables are set in Vercel
- Check for missing API keys or configuration

### Performance Issues
- Optimize images and assets
- Check bundle size with `npm run analyze`
- Enable Vercel's automatic optimizations

---

**Note**: Since your project is already connected to Vercel, pushing to the main branch will automatically trigger a production deployment. The deployment typically takes 1-3 minutes to complete.
