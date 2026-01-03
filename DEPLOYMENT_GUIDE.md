# 🚀 Deploying Your Portfolio to Vercel

## Option 1: Deploy via Vercel Website (Recommended - Easiest)

### Step 1: Prepare Your Project
1. Make sure all changes are committed to Git:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```
   (If you haven't created a GitHub repo yet, see below)

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"** (use your GitHub account)
3. Click **"Add New Project"**
4. **Import** your GitHub repository (`rohan-portfolio`)
5. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**
7. Wait 2-3 minutes ⏱️
8. Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain (e.g., `rohantyagi.dev`)

---

## Option 2: Deploy via Vercel CLI (Advanced)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd "C:\Users\rohant\Downloads\DSA sereies\rohan-portfolio"
vercel
```

Follow the prompts:
- **Set up and deploy?** Yes
- **Which scope?** Your account
- **Link to existing project?** No
- **Project name?** rohan-portfolio (or your choice)
- **Directory?** ./
- **Override settings?** No

### Step 4: Production Deployment
```bash
vercel --prod
```

---

## 🔧 If You Haven't Created a GitHub Repository Yet

### Step 1: Initialize Git (if not already done)
```bash
cd "C:\Users\rohant\Downloads\DSA sereies\rohan-portfolio"
git init
git add .
git commit -m "Initial commit - 3D Circuit Board Portfolio"
```

### Step 2: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `rohan-portfolio` or `personal-portfolio`
3. Make it **Public**
4. **Don't** initialize with README (we already have files)
5. Click **"Create repository"**

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/Tyagirohan/rohan-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🌐 Alternative Deployment Platforms

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder after running `npm run build`
3. Or connect your GitHub repo

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run build
npm run deploy
```

---

## ✅ Pre-Deployment Checklist

- [ ] All content is updated in `src/data/portfolio.js`
- [ ] Project images are in `public/images/`
- [ ] Light/Dark mode working
- [ ] Contact form (mailto link) working
- [ ] All links tested
- [ ] Mobile responsive
- [ ] No console errors (`npm run build` succeeds)

---

## 🐛 Troubleshooting

### Build fails?
```bash
npm run build
```
Check for errors and fix them first.

### Images not showing?
- Make sure images are in `public/images/`
- Use paths like `/images/agrichain.png` (starting with `/`)

### 404 on routes?
- The `vercel.json` file handles this (already created)

---

## 📊 After Deployment

1. **Test your live site** on mobile and desktop
2. **Update your resume** with the live portfolio link
3. **Share on LinkedIn** 🎉
4. **Add to your GitHub profile** README

Your live URL will be something like:
`https://rohan-portfolio.vercel.app`

You can then customize it to:
`https://rohantyagi.vercel.app`

---

## 🔄 Updating Your Portfolio

After deployment, any push to GitHub will **auto-deploy** to Vercel!

```bash
# Make changes
git add .
git commit -m "Updated projects"
git push origin main
# Vercel automatically rebuilds and deploys! 🚀
```

---

## 🎯 Recommended: Set Up Custom Domain

Popular domain registrars:
- [Namecheap](https://www.namecheap.com) (~$10/year for `.dev` or `.me`)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)

Suggested domains:
- `rohantyagi.dev`
- `tyagirohan.dev`
- `rohan-tyagi.com`

---

Need help with any step? Let me know! 🚀

