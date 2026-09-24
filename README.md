# GoWILD Karunadu User UI

## Overview

This is the customer-facing frontend for GoWILD Karunadu. It allows users to browse treks, view details, book trips, manage bookings, read blog content, and access referral features.

## Tech stack

- Angular 20
- Ionic Angular
- TypeScript
- RxJS
- Material components
- Bootstrap

## Project structure

```text
goWILDKarunadu-user-ui/
├── src/
│   ├── app/
│   ├── assets/
│   ├── environments/
│   └── theme/
├── android/
├── angular.json
├── capacitor.config.ts
├── package.json
└── README.md
```

## Local setup

```bash
cd goWILDKarunadu-user-ui
npm install
npm start
```

Default local port:

- `4600`

## Main routes

- `/`
- `/upcomingtours`
- `/tour-details`
- `/booking`
- `/about`
- `/faqs`
- `/blog`
- `/blog-details`
- `/my-bookings`
- `/cancel-bookings`
- `/search`
- `/reset-password`

## Environment config

The app reads runtime values such as:

- `API_BASE_URL`
- `CONTENT_API_URL`
- `MEDIA_BASE_URL`
- `REFERRAL_SHARE_URL`
- `ENCRYPTION_KEY`
- `ENCRYPTION_SALT`

Main production config file:

- `src/environments/environment.prod.ts`

## Production notes

- Update the API base URLs to match the deployed backend.
- Confirm the API allows your domain in `CORS_ORIGINS`.
- Ensure the media base URL points to the correct CloudFront/S3 domain.

## Main file references

- Routing: `src/app/app-routing.module.ts`
- Environment: `src/environments/environment.prod.ts`

---

See also: `PROJECT_DOCUMENTATION.md` and `DEVELOPER_HANDOFF.md`.
