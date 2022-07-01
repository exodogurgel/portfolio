window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 1000
}).reveal(`
  #home,
  #home img,
  .skills-banner,
  .skills-banner img,
  #about,
  #about p,
  #about img,
  #skills,
  #skills .skills-using,
  #skills .skills-learning
  #portfolio, 
  #portfolio header, 
  #portfolio .projects img,
  #contact
`)
