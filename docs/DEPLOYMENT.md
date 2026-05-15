# Render Deployment Guide

## 1. Provision services

Use `render.yaml` to create:

- A Render Web Service for the Next.js application.
- A Render PostgreSQL database.

## 2. Required environment variables

Copy `.env.example` into Render environment variables and set production values:

- `DATABASE_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `RECAPTCHA_SECRET_KEY`
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`

## 3. Build pipeline

Render runs:

```bash
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
```

The web service starts with:

```bash
npm run start
```

## 4. Production checklist

- Replace placeholder WhatsApp number.
- Add real clinic address and opening hours to schema.
- Add authentication middleware for `/admin`.
- Connect Sanity or Payload CMS for content operations.
- Configure analytics and reCAPTCHA.
- Add real testimonials, media and service content.
