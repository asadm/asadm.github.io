# Jon's Homepage

This site is made using NextJS and GitHub Pages. GitHub automatically exports a static build for NextJS into HTML and serves it. I just needed to enable pages from the repo settings.

## Running Site Locally

- Install NodeJS if you don't have it already
- Clone this repo.
- `cd` and run `npm install` in this repo's folder.
- Run `npm run dev` to start the server locally.

## Publishing to your own site

- Edit the `CNAME` file to your own domain or just remove it.
- Once you have made the changes, just `git commit` them and push them to your own GitHub repo.
- In your repo, go to **Settings** and scroll down to **GitHub Pages** section. Select *master branch* from the dropdown.
- This will build your site and host it on the selected domain automatically on each `git push`.

## Deployment

This repository includes an automated deployment script that simplifies the process of deploying to GitHub Pages.

### Using the Deployment Script

To deploy your site:

```bash
./scripts/deploy.sh
```

That's it! The script handles everything else automatically.

### What the Script Does

The deployment script performs the following steps:

1. **Safety Checks**
   - Verifies you're on the master branch
   - Checks for uncommitted changes
   - Ensures git remote is properly configured

2. **Build and Export**
   - Builds the Next.js site
   - Exports static files to the `out` directory

3. **Deployment**
   - Preserves the CNAME file for custom domain
   - Creates a .nojekyll file to disable Jekyll processing
   - Switches to gh-pages branch (or creates it if it doesn't exist)
   - Copies build files to the gh-pages branch
   - Commits and pushes to GitHub

4. **Cleanup**
   - Returns to your original branch

### Prerequisites

- Git command line tools
- Node.js and npm installed
- Proper GitHub repository access (push permissions)

### Common Issues and Solutions

- **Permission denied when running script**: Run `chmod +x scripts/deploy.sh` to make the script executable
- **Git authentication issues**: Ensure your GitHub credentials are set up correctly
- **Build failures**: Check for any errors in your code and make sure all dependencies are installed
- **Custom domain not working**: Verify the CNAME file exists and contains your domain name
- **Empty site deployed**: Ensure the build process completed successfully before deployment

For more detailed information about the branching and deployment strategy, see the [CONTRIBUTING.md](CONTRIBUTING.md) file.

Brought you by vibe coding. Cheers!
