const nav = document.getElementById('Nav');
const hamburger = document.getElementById('Hamburger');
const navClose = document.getElementById('NavClose');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
