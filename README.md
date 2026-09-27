# IEEE Website

**Live website:** [ieee-website-nu-three.vercel.app](https://ieee-website-nu-three.vercel.app/)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Use the repository root as the Vercel Root Directory, the Next.js framework preset,
`npm ci` as the Install Command, and `npm run build` as the Build Command.
The build's `prebuild` script generates Prisma Client. No submodules are required;
`Untitled/` is an ignored local duplicate checkout.

The authentication dependencies are pinned together: `next-auth@5.0.0-beta.32`
and `@auth/prisma-adapter@2.11.3` both use `@auth/core@0.41.3`, whose Nodemailer
peer range accepts the pinned `nodemailer@8.0.11`. Commit `package.json` and
`package-lock.json` together when updating them. Do not use `--force` or
`--legacy-peer-deps` to work around incompatible versions.

Configure these environment variables in the relevant Vercel environments:

- `DATABASE_URL`: PostgreSQL connection string. Apply the checked-in migrations
  to the target database with `npx prisma migrate deploy` before using authentication.
- `AUTH_SECRET`: a strong, private Auth.js secret.
- `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET`: Google OAuth credentials.
- `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET`: GitHub OAuth credentials.
- `EMAIL_SERVER` and `EMAIL_FROM`: SMTP connection URL and sender address.
  Both must be set to enable the existing Nodemailer email provider.

Register `/api/auth/callback/google` and `/api/auth/callback/github` on the deployed
origin with their respective OAuth providers. Vercel is automatically recognized
as a trusted host by Auth.js. Keep Next.js on a patched release; Vercel blocks
known vulnerable versions.

Before deploying, run `npm ci`, `npm run build`, and `npm run lint` from a clean
checkout. The public pages can build without credentials, but live OAuth,
database sessions, and SMTP delivery require the settings above.
