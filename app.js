const burgerMenu = document.getElementById('burger');
const mainSite = document.getElementById('mainsite');

// Sidebar Menu Toggle
burgerMenu.addEventListener('click', () => {
  if (mainSite.classList.contains('active')) {
    burgerMenu.classList.remove('active');
    mainSite.classList.remove('active');
  } else {
    burgerMenu.classList.add('active');
    mainSite.classList.add('active');
  }
});
