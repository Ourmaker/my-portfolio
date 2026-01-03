// Simple interaction: mobile nav, reveal on scroll, smooth scrolling, contact form handling
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Smooth scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav when link clicked
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    reveals.forEach(r => io.observe(r));
  } else {
    // fallback
    reveals.forEach(r => r.classList.add('visible'));
  }

  // contact form (no-backend example)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';

    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      status.textContent = 'Please fill out all fields.';
      return;
    }

    // Replace the endpoint below with your form backend (Formspree, Netlify Forms, Supabase, etc.)
    // This example just opens the user's email client (fallback).
    try {
      // Example: to integrate with a real endpoint, use fetch()
      // For demo fallback, open mailto:
      const subject = encodeURIComponent(`Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:hello@ourmaker.example?subject=${subject}&body=${body}`;
      status.textContent = 'Opening email client...';
      form.reset();
      setTimeout(()=> status.textContent = 'Message draft opened in your email client. You can also replace mailto with your API endpoint in script.js', 2200);
    } catch (err) {
      console.error(err);
      status.textContent = 'Something went wrong — try again later.';
    }
  });

  // update year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});