# cPanel Deployment Guide for KaaSmart

This repository is configured for cPanel Git Version Control deployment.

## Why Did the Error Occur?
When you click **"Deploy HEAD Commit"** in cPanel, cPanel checks for a deployment task definition file named `.cpanel.yml` in the root of your repository. If that file is missing, cPanel displays the message:
> *"The system could not deploy your repository. Run the configured tasks to deploy your repository."*

## What Was Added to Fix This:
1. **`.cpanel.yml`**: The configuration file that instructs cPanel where and how to deploy the repository files.
2. **`.htaccess`** (in both root and `dist/`): Configures Apache web server to handle React SPA routing (preventing 404s when navigating/refreshing), enables gzip compression, and sets browser caching headers.
3. **`dist/` Directory**: Pre-compiled production bundle containing optimized HTML, CSS, JavaScript, and high-resolution property imagery.
4. **`.gitignore` update**: Updated to ensure `dist/` is tracked in git, so cPanel does not need Node.js/npm installed on the server to deploy.

---

## How to Deploy in cPanel

### Step 1: Pull the Latest Changes
In your cPanel interface:
1. Go to **Git™ Version Control**.
2. Click **Manage** next to your repository.
3. Switch to the **Pull or Deploy** tab.
4. Click **Update from Remote** to pull these latest commits (including `.cpanel.yml` and `dist/`).

### Step 2: Deploy the Commit
1. On the same **Pull or Deploy** tab, scroll to the **Deploy HEAD Commit** button.
2. Click **Deploy HEAD Commit**.
3. cPanel will run the tasks in `.cpanel.yml` and copy all website files to your web root (`public_html/`).

---

## Deploying to an Addon Domain or Subdomain
If KaaSmart is being hosted on an **addon domain** or **subdomain** rather than the primary domain (`public_html`), edit line 14 of `.cpanel.yml`:

```yaml
# For an addon domain:
- export DEPLOYPATH=$HOME/kaasmart.app/

# Or for a subdomain inside public_html:
- export DEPLOYPATH=$HOME/public_html/subdomain/
```
Then commit the change and click **Deploy HEAD Commit** again.
