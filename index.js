// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Prevent card onclick from firing when clicking action buttons
document.querySelectorAll('.ext-card-actions').forEach(el => {
  el.addEventListener('click', e => e.stopPropagation());
});
