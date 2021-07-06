// HAMBURGER MENU

const btn = document.querySelector('.select__btn')
const hamburger = document.querySelector('.select__ham')
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

function closeMenu() {
  if (btn.classList.contains('active')) {
    btn.classList.remove('active')
    btn.classList.add('not-active')
    hamburger.classList.remove('active')
  } else {
    return false;
  }
}

menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener('click', closeMenu);
  }
)


// SCROLL EFFECT 

function scrollMenu() {
  let y = window.scrollY > 100;
  console.log(y)
  
  if (y == true) {
    hamburger.classList.add('hamburger__scroll');
    hamburger.classList.remove('hamburger');
    btn.classList.add('btn__scroll');
    btn.classList.remove('btn');
  } else {
    hamburger.classList.add('hamburger');
    hamburger.classList.remove('hamburger__scroll');
    btn.classList.add('btn');
    btn.classList.remove('btn__scroll');
  }
}

window.addEventListener('scroll', scrollMenu)
