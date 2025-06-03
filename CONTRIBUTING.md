# Contributing Guidelines

This document outlines the workflow for contributing to this project, with a focus on maintaining clean branches and smooth deployments.

## Branching Strategy

### Branch Naming Conventions

- `master` - Main production branch. All deployments come from this branch.
- `feature/[feature-name]` - For new features (e.g., `feature/add-contact-form`)
- `bugfix/[bug-name]` - For bug fixes (e.g., `bugfix/fix-mobile-layout`)
- `hotfix/[fix-name]` - For urgent production fixes
- `refactor/[name]` - For code refactoring with no functional changes

### Working with Branches

#### Creating a New Feature Branch

```bash
# Always start from an up-to-date master
git checkout master
git pull origin master

# Create and switch to a new branch
git checkout -b feature/your-feature-name
```

#### Keeping Your Branch Up to Date

Regularly sync your feature branch with master to avoid large merge conflicts:

```bash
# While on your feature branch
git fetch origin
git merge origin/master

# Resolve any merge conflicts, then continue work
```

#### Completing Your Work

Make sure to test your changes locally before creating a PR:

```bash
npm run build   # Verify the build succeeds
npm run dev     # Test locally
```

#### Merging Back to Master

1. Push your branch to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a pull request on GitHub from your branch to master

3. After review and approval, merge the PR on GitHub

## Deployment Process

This project uses GitHub Actions for automatic deployment:

1. When changes are pushed or merged to the `master` branch, GitHub Actions automatically:
   - Builds the project
   - Exports static files
   - Deploys to the `gh-pages` branch
   - Updates the live site at your custom domain

2. The workflow is defined in `.github/workflows/publish.yml`

3. No manual deployment steps are needed - just keep the master branch clean!

## Best Practices

- Always work in feature branches, never directly on master
- Keep commits small and focused on specific changes
- Write clear commit messages that explain the purpose of the change
- Test your changes locally before pushing
- Make sure the build succeeds before creating a PR

By following these guidelines, we can maintain a clean repository history and ensure smooth deployments.

