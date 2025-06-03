#!/bin/bash

# ======================================================
# Deployment Script for GitHub Pages
# ======================================================
# This script automates the process of building and deploying
# the website to GitHub Pages. It includes safety checks,
# builds the site, and deploys it to the gh-pages branch.
# 
# Usage: ./scripts/deploy.sh
# ======================================================

# Set up error handling
set -e
trap 'echo "Error occurred at line $LINENO. Command: $BASH_COMMAND"' ERR

# Terminal colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ======================================================
# 1. Safety Checks
# ======================================================

echo -e "${BLUE}Step 1: Running safety checks${NC}"

# Check if we're on master branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "master" ]; then
  echo -e "${RED}Error: You must be on the master branch to deploy.${NC}"
  echo -e "Current branch: ${YELLOW}$CURRENT_BRANCH${NC}"
  echo -e "Please switch to master with: ${GREEN}git checkout master${NC}"
  exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo -e "${YELLOW}Warning: You have uncommitted changes.${NC}"
  echo -e "It's recommended to commit or stash changes before deploying."
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}Deployment cancelled.${NC}"
    exit 1
  fi
fi

# Check if git remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
  echo -e "${RED}Error: No git remote named 'origin' found.${NC}"
  echo -e "Please set up your git remote with:"
  echo -e "${GREEN}git remote add origin https://github.com/Jonnysol/Jon.github.io.git${NC}"
  exit 1
fi

echo -e "${GREEN}✓ Safety checks passed${NC}"

# ======================================================
# 2. Build and Export
# ======================================================

echo -e "${BLUE}Step 2: Building and exporting the site${NC}"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}Installing dependencies...${NC}"
  npm install
fi

# Build the site
echo -e "Building the site..."
npm run build || { echo -e "${RED}Build failed!${NC}"; exit 1; }

# Export to static files
echo -e "Exporting to static files..."
npm run export || { echo -e "${RED}Export failed!${NC}"; exit 1; }

# Check if the output directory exists
if [ ! -d "out" ]; then
  echo -e "${RED}Error: 'out' directory not found after export.${NC}"
  exit 1
fi

echo -e "${GREEN}✓ Build and export completed successfully${NC}"

# ======================================================
# 3. Prepare for Deployment
# ======================================================

echo -e "${BLUE}Step 3: Preparing for deployment${NC}"

# Save current branch to return to it later
ORIGINAL_BRANCH=$(git branch --show-current)

# Check if CNAME exists in gh-pages branch
CNAME_CONTENT=""
if git show origin/gh-pages:CNAME > /dev/null 2>&1; then
  echo -e "Preserving CNAME file from gh-pages branch..."
  CNAME_CONTENT=$(git show origin/gh-pages:CNAME)
fi

# Create .nojekyll file to disable Jekyll on GitHub Pages
echo -e "Creating .nojekyll file..."
touch out/.nojekyll

# If CNAME existed, recreate it
if [ ! -z "$CNAME_CONTENT" ]; then
  echo -e "Restoring CNAME file with content: ${GREEN}$CNAME_CONTENT${NC}"
  echo "$CNAME_CONTENT" > out/CNAME
fi

echo -e "${GREEN}✓ Deployment preparation completed${NC}"

# ======================================================
# 4. Deploy to gh-pages
# ======================================================

echo -e "${BLUE}Step 4: Deploying to gh-pages branch${NC}"

# Switch to gh-pages branch, creating it if it doesn't exist
if git show-ref --verify --quiet refs/heads/gh-pages; then
  echo -e "Checking out existing gh-pages branch..."
  git checkout gh-pages
else
  echo -e "${YELLOW}Creating new gh-pages branch...${NC}"
  git checkout --orphan gh-pages
  git rm -rf .
fi

# Copy contents from out directory to root
echo -e "Copying build files to gh-pages branch..."
cp -r out/* .

# Remove the out directory from the gh-pages branch
rm -rf out/

# Stage all files
git add .

# Commit changes
echo -e "Committing changes..."
git commit -m "Deploy: Update site $(date +'%Y-%m-%d %H:%M:%S')" || {
  echo -e "${YELLOW}No changes to commit. The branch is already up to date.${NC}"
}

# Push to GitHub
echo -e "Pushing to GitHub..."
git push -f origin gh-pages || { 
  echo -e "${RED}Failed to push to gh-pages branch!${NC}"
  git checkout "$ORIGINAL_BRANCH"
  exit 1
}

# ======================================================
# 5. Cleanup and Finalize
# ======================================================

echo -e "${BLUE}Step 5: Cleaning up${NC}"

# Switch back to original branch
git checkout "$ORIGINAL_BRANCH"

echo -e "${GREEN}✓ Successfully returned to ${ORIGINAL_BRANCH} branch${NC}"

# ======================================================
# 6. Success Message
# ======================================================

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Deployment completed successfully!  ${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "Your site has been deployed to GitHub Pages and should be live at:"
echo -e "${BLUE}https://jonny.sh/${NC}"
echo -e "It may take a few minutes for changes to appear."
echo -e "You can check the status at: ${BLUE}https://github.com/Jonnysol/Jon.github.io/actions${NC}"
echo
echo -e "Happy coding! 🚀"

