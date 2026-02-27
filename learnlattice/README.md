# LearnLattice — Deployment Guide

Your site is built with Hugo + Decap CMS, hosted on Cloudflare Pages.

---

## Step 1: Create a GitHub Repository

1. Go to github.com and sign in (create an account if needed)
2. Click the **+** icon → **New repository**
3. Name it `learnlattice`
4. Set it to **Public** (required for Decap CMS free tier)
5. Click **Create repository**

## Step 2: Push This Project to GitHub

On your computer, open a terminal and run:

```bash
cd learnlattice
git init
git add .
git commit -m "Initial LearnLattice site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/learnlattice.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Update Decap CMS Config

Open `static/admin/config.yml` and change this line:

```yaml
repo: YOUR_GITHUB_USERNAME/learnlattice
```

to your actual GitHub username. Commit and push the change.

## Step 4: Connect Cloudflare Pages

1. Go to dash.cloudflare.com → **Workers & Pages** → **Create**
2. Select **Pages** → **Connect to Git**
3. Authorise GitHub and select the `learnlattice` repository
4. Configure build settings:
   - **Build command:** `hugo --minify`
   - **Build output directory:** `public`
   - **Environment variable:** Add `HUGO_VERSION` = `0.142.0`
5. Click **Save and Deploy**

Cloudflare will build and deploy your site. It'll give you a `*.pages.dev` URL.

## Step 5: Connect Your Domain

1. In Cloudflare Pages, go to your project → **Custom domains**
2. Add `learnlattice.org`
3. Since you're already on Cloudflare DNS, it should auto-configure
4. Wait a few minutes for DNS propagation

Your site will be live at https://learnlattice.org

## Step 6: Set Up Decap CMS Authentication

For the admin dashboard at learnlattice.org/admin to work, you need GitHub OAuth:

1. Go to github.com → **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**
2. Fill in:
   - **Application name:** LearnLattice CMS
   - **Homepage URL:** https://learnlattice.org
   - **Authorization callback URL:** https://api.netlify.com/auth/done
3. Copy the **Client ID** and **Client Secret**
4. Go to app.netlify.com (create a free account if needed)
5. Create a new site (just connect the same GitHub repo)
6. Go to **Site settings** → **Identity** → **Enable Identity**
7. Go to **Site settings** → **Access control** → **OAuth** → **Install provider**
8. Select GitHub and paste your Client ID and Client Secret

Now go to `https://learnlattice.org/admin` — you'll be able to log in with GitHub.

---

## How to Publish Content

1. Go to `https://learnlattice.org/admin`
2. Log in with your GitHub account
3. Click **Resources** → **New Resource**
4. Fill in the fields:
   - **Title** — name of the resource
   - **Subject** — Mathematics, Science, Earth Science, or Chemistry
   - **Year Level** — MYP Year 1-5
   - **Resource Type** — Unit Plan, Worksheet, Lab Activity, etc.
   - **Tags** — topic tags (Algebra, Fractions, Volcanoes, etc.)
   - **Formula** — short text shown on the card thumbnail (optional)
   - **Download File** — upload a PDF or other file
   - **Body** — write the resource description in Markdown
5. Click **Publish**

Cloudflare Pages will automatically rebuild and deploy the site (takes ~30 seconds).

---

## File Structure

```
learnlattice/
├── hugo.toml              # Site configuration
├── assets/css/main.css    # All styles
├── content/
│   ├── resources/         # Your resource posts go here
│   └── pages/             # Static pages (About, etc.)
├── layouts/
│   ├── _default/          # Base templates
│   ├── resources/         # Resource-specific templates
│   └── partials/          # Reusable components
├── static/
│   ├── admin/             # Decap CMS dashboard
│   └── uploads/           # Uploaded files (PDFs, images)
└── archetypes/            # Templates for new content
```

---

## Local Development (Optional)

If you want to preview changes locally:

1. Install Hugo: https://gohugo.io/installation/
2. Run `hugo server` in the project directory
3. Open http://localhost:1313

---

## Need Help?

Bring this project back to Claude and ask for changes. The theme can be modified by editing the files in `layouts/` and `assets/css/main.css`.
