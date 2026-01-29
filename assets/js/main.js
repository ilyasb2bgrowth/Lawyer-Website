/* =====================================================
   SAMPLE LAW FIRM WEBSITE
   main.js – Lightweight, Conversion-Focused
   Demo Project
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------
     MOBILE STICKY CONSULTATION BAR
     (High-conversion, law-specific)
  ---------------------------------- */

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const stickyBar = document.createElement('div');
    stickyBar.className = 'mobile-cta-bar';

    stickyBar.innerHTML = `
      <a href="tel:+10000000000" class="cta-call">Call</a>
      <a href="https://wa.me/10000000000" class="cta-whatsapp">WhatsApp</a>
      <a href="consultation.html" class="cta-consult">Consultation</a>
    `;

    document.body.appendChild(stickyBar);
  }

  /* ---------------------------------
     SIMPLE FADE-IN ON SCROLL
     (Subtle, professional)
  ---------------------------------- */

  const fadeElements = document.querySelectorAll('section');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach(el => observer.observe(el));

  /* ---------------------------------
     FORM SUBMISSION FEEDBACK
     (For Formspree / static forms)
  ---------------------------------- */

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function () {
      alert(
        'Thank you for your request.\n\n' +
        'This inquiry is confidential. A response is typically provided within 24 business hours.'
      );
    });
  });

});
