# Palapa Coffee

Responsive company profile for Palapa Coffee, built with React, TypeScript, Tailwind CSS, and Vinext.

## Edit content, links, and images

Open `site.config.ts`. It contains every contact link and image URL in one place.

- Replace WhatsApp with `https://wa.me/COUNTRYCODEPHONENUMBER`.
- Replace the email and Instagram URL.
- Replace any image with another public URL.
- To keep images in the repository, add optimized WebP files under `public/images/` and use paths such as `/images/hero.webp`.

Visible page copy is in `app/page.tsx`. Colors and layout are in `app/globals.css`.

## Run locally

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
pnpm start
```

## GitHub

The repository excludes dependencies and generated output through `.gitignore`. Commit the extracted project files directly to GitHub. The included lockfile provides reproducible installs.

## Automatic Cloudflare deployment from GitHub

The repository includes `.github/workflows/deploy-cloudflare.yml`. Every push to the `main` branch builds the website and deploys it to Cloudflare Workers.

The root `wrangler.jsonc` contains the complete Cloudflare configuration. If you use Cloudflare Workers Builds instead of GitHub Actions, use `pnpm install --frozen-lockfile` as the install command and `pnpm run deploy` as the deploy command. No root-directory setting is needed.

### One-time setup

1. Create or sign in to a Cloudflare account.
2. In Cloudflare, copy your **Account ID**.
3. Create a Cloudflare API token using the **Edit Cloudflare Workers** template. Restrict it to the account that will host this website.
4. In the GitHub repository, open **Settings → Secrets and variables → Actions**.
5. Add these two repository secrets:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`
6. Open **Actions → Deploy to Cloudflare Workers → Run workflow** for the first deployment, or push a change to `main`.

Never place the API token directly in a file or commit it to GitHub.

After a successful run, the workflow log shows the generated `workers.dev` website address. Future pushes to `main` deploy automatically.
