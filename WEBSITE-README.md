# Ceylon Vintage Verandha Website

Complete four-page property website:

- Home (`/`)
- The Villa (`/stay`)
- Gallery (`/gallery`)
- Contact (`/contact`)

## Run locally

1. Install Node.js 22 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local address shown in the terminal.

## Production build

Run `npm run build`. All optimized property photographs are stored in `public/images`.

## Property content used

The website uses the details supplied in the N K Hotels onboarding form. Direct booking actions use the supplied WhatsApp number and reservation email. Update these details in `app/contact/page.tsx` and `components/site-footer.tsx` if they change.
