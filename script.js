// Mobile Menu Toggle
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.right = '30px';
    nav.style.background = '#fff';
    nav.style.padding = '20px';
    nav.style.borderRadius = '10px';
  } else {
    nav.style.display = 'none';
  }
});

// Highlight Active Link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
    }
  });
});

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll('.section, .exp-card, .proj-card, .edu-card, .cert-card');

const fadeIn = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);
