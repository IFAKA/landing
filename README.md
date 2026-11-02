# AI Software for Information Analysis

A production-ready static Next.js 15 landing page for a software-only AI information analysis product.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Static export (`next build` writes to `out/`)

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Configuration

The site URL is centralized in `lib/site.ts`:

- `SITE_URL` environment variable, defaulting to `https://example.com`
- Contact placeholder: `contact@example.com`
- GitHub placeholder: `https://github.com/IFAKA/landing`

Set `SITE_URL` before building for production metadata, robots, and sitemap output:

```bash
SITE_URL="https://your-domain.example" npm run build
```

## Deployment

The app is configured with `output: 'export'`, so `npm run build` creates a static `out/` directory that can be deployed to any static host.

For Vercel, import the repository and keep the default Next.js build command:

```bash
npm run build
```

No server runtime, API routes, images, or client components are required.

---

## Support

If this project is useful to you, you can support my work:

[![Support me on Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/zfaka)
