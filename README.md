# Ourmaker CNC — Personal Portfolio (CNC Specialist & CAM Programmer)

A minimal, responsive CNC specialist portfolio inspired by modern single-page portfolios. This boilerplate is tailored for CAM programmers, shop technicians, and manufacturing engineers.

## Files
- `index.html` — the page markup (CNC-focused content)
- `styles.css` — site styles using CSS variables and responsive layout
- `script.js` — small JS for interactions: mobile nav, reveal-on-scroll, smooth scroll, and contact form handling

## What’s included
- Hero section targeted to CNC & CAM services
- Selected projects demonstrating production runs, prototype work, and toolpath optimization
- Services section: CNC programming, CAM optimization, fixture design, verification
- About section listing CAM tools and controls expertise
- Contact form (mailto fallback). Replace with a form backend for production.

## Quick customization
1. Replace placeholder images with shop photos, toolpath screenshots, or part photos (use `assets/`).
2. Update contact email in `script.js` (line with `mailto:`) to your real address.
3. Connect a backend:
   - Formspree: set `action="https://formspree.io/f/your-id"` on the `form` and optionally handle with JS.
   - Netlify Forms / Supabase / custom API: implement a `fetch()` POST in `script.js` where the mailto is used.
4. Edit services, skills, and projects to reflect your actual work (machines, controls, materials, tolerances, typical batch sizes).

## Recommended copy edits
- Add hourly or project rates (if you publish them).
- Add availability calendar or lead time for production projects.
- Link to CNC machine demos or toolpath videos (host on Vimeo/YouTube) for stronger portfolio impact.

## Run locally
Open `index.html` in your browser, or run a simple static server:

- Python 3:
  ```
  python -m http.server 8000
  ```
  Then open http://localhost:8000/

## Deployment
Deploy to GitHub Pages, Netlify, or Vercel. For Netlify/Vercel you can push this repo and connect the site.

---

If you want, I can:
- Replace the placeholder images with specific photos you provide
- Add a project detail page template for deeper case studies
- Integrate a simple serverless contact endpoint (Netlify Function or Vercel Serverless) and update the form to POST
- Convert the template to a React/Next.js site or a simple static site generator setup

Which would you like next?