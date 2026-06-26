// fade-in on scroll
const items = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

items.forEach(el => observer.observe(el));

// header smooth UX (optional enhancement placeholder)
