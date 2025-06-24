# GitHub Setup Instructions

Follow these steps to sync your React dashboard with GitHub:

## Step 1: Initialize Git Repository

```bash
git init
```

## Step 2: Add all files to staging

```bash
git add .
```

## Step 3: Create initial commit

```bash
git commit -m "Initial commit: React Dashboard with Next.js"
```

## Step 4: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository" (green button)
3. Name your repository (e.g., "figma-dashboard-react")
4. Keep it public or private (your choice)
5. **DO NOT** check "Initialize with README" (since we already have code)
6. Click "Create repository"

## Step 5: Connect to GitHub Remote

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

## Step 6: Push to GitHub

```bash
git push -u origin main
```

## Alternative: Using GitHub CLI (if installed)

```bash
# Login to GitHub
gh auth login

# Create repository and push
gh repo create figma-dashboard-react --public --source=. --remote=origin --push
```

## Verification

After pushing, your repository should be visible at:
`https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

## Future Updates

When you make changes:

```bash
git add .
git commit -m "Update: describe your changes"
git push
```
