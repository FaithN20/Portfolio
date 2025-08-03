/* mobile nav toggle */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.onclick = () => navLinks.classList.toggle('show');

/* dynamic year */
document.getElementById('year').textContent = new Date().getFullYear();

/* smooth scroll offset */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const offset = 60;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});