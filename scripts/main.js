// Mobile navigation

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const nav = document.querySelector('.nav');

  // Set initial state
  if (!nav.classList.contains('nav--open')) {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }

  // Event listeners for toggle
  menuIcon.addEventListener('click', () => {
    nav.classList.add('nav--open');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'inline';
  });

  closeIcon.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'inline';
  });
});
