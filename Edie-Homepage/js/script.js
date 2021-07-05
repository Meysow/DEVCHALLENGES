const btn = document.querySelector('.btn')
const hamburger = document.querySelector('.hamburger')
const menuLinks = document.querySelectorAll('.link')

function toggleMenu() {
  btn.classList.toggle('active')
  btn.classList.toggle('not-active')

  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active')
  } else {
    hamburger.classList.add('active')
  }
}

btn.addEventListener('click', toggleMenu);

menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener('click', toggleMenu);
  }
)
