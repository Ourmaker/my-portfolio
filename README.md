# Ourmaker — Personal Portfolio

A minimal, responsive personal portfolio inspired by the layout and style of [Playmakers](https://www.playmakers.sport/). This boilerplate is easy to customize and deploy.

## Files
- `index.html` — the page markup
- `styles.css` — site styles using CSS variables and responsive layout
- `script.js` — small JS for interactions: mobile nav, reveal-on-scroll, smooth scroll, and contact form handling

## Features
- Bold hero section with background media and CTAs
- Responsive project grid and services section
- Reveal-on-scroll animations (IntersectionObserver)
- Accessible markup and focusable controls
- Contact form with mailto fallback (replace with your backend)

## Customization
1. Replace the text content (name, bio, project descriptions) in `index.html`.
2. Replace placeholder images with your own (hosted assets or local `assets/` folder).
3. Connect the contact form to a backend:
   - Formspree: set `action="https://formspree.io/f/your-id"` on the `form` and remove JS mailto.
   - Netlify Forms / Supabase / custom API: implement fetch POST in `script.js` where indicated.
4. Update colors and fonts in `styles.css` (CSS variables at the top).

## Run locally
Open `index.html` in your browser. For local image paths or better development, serve with a simple static server:

- Using Python 3:
  ```
  python -m http.server 8000
  ```
  Then open http://localhost:8000/

## Deployment
Deploy on any static hosting (GitHub Pages, Netlify, Vercel). If you use Vercel/Netlify, just push to a repo and connect the site.

## Improvements / Ideas
- Add a CMS (Sanity, Contentful) for project content
- Add animations (Lottie) or a subtle background video
- Add a projects detail page for each project
- Add analytics, sitemap, and SEO meta tags

---

If you'd like, I can:
- Replace the placeholder images with sample images you provide
- Convert this to a React/Next.js project
- Add a simple Node/Express endpoint or Netlify function for the contact form

Tell me which you'd prefer and I’ll produce the updated files.