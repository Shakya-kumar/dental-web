# Dr. Vivek Malviya Premium Healthcare Platform

Enterprise-grade full-stack healthcare platform built for local SEO, WhatsApp lead generation,
appointment conversion and Render deployment.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- ShadCN-style UI primitives
- Prisma ORM
- PostgreSQL
- Zod validation
- React Hook Form
- Render deployment config

## Architecture

- `app/` - SSR-first routes, API routes, SEO files
- `components/` - reusable UI primitives and healthcare sections
- `lib/api/` - structured responses and centralized errors
- `lib/services/` - business logic
- `lib/repositories/` - database access
- `lib/validators/` - Zod validation contracts
- `lib/security/` - rate limiting and sanitization helpers
- `lib/seo/` - metadata and schema generation
- `prisma/` - normalized PostgreSQL schema
- `docs/` - deployment and operations documentation

## Local development

```bash
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

## Render deployment

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Production notes

This scaffold includes the enterprise foundation requested in the master prompt. Before launch,
connect the real CMS, clinic content, WhatsApp number, analytics, reCAPTCHA and admin authentication.
