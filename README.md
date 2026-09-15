# KL-TECH Website

Production-ready static Next.js website for Cloudflare Pages.

## Local use

```bash
npm install
npm run dev
```

## Verify production build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub

Create a repository named `kl-tech-website`, upload these files, and push to the `main` branch.

## Cloudflare Pages

1. Open Workers & Pages and create a Pages application.
2. Import the GitHub repository.
3. Framework preset: **Next.js (Static HTML Export)**.
4. Production branch: `main`.
5. Build command: `npx next build`.
6. Build output directory: `out`.
7. Add custom domains `kl-tech.co.uk` and `www.kl-tech.co.uk`.

## Before launch

- Confirm the email mailbox `info@kl-tech.co.uk` exists, or replace it.
- Complete legal pages with verified company and privacy information.
- Replace the mailto contact form with an approved secure form service if required.
- Add an original logo and licensed imagery.
- Confirm any operator/vendor references and permissions.
- Run accessibility, Lighthouse and security-header checks.
