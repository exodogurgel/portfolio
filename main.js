window.addEventListener('scroll', onScroll)

function onScroll() {
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(skills)
  activateMenuAtCurrentSection(portfolio)
}

onScroll()

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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

/*============= data =============*/
const projects = [
  {
    id: '1',
    name: 'Rocket Notes',
    image: './assets/image 22.png',
    github: 'https://github.com/exodogurgel/RocketNotes',
    deploy: 'https://exodogurgel.github.io/RocketNotes/'
  },

  {
    id: '2',
    name: 'Git Fav',
    image: './pictures/git-fav.png',
    github: 'https://github.com/exodogurgel/gitFav',
    deploy: 'https://exodogurgel.github.io/gitFav/'
  },

  {
    id: '3',
    name: 'Doctor Care',
    image: './pictures/doctor-care.png',
    github: 'https://github.com/exodogurgel/doctorCare',
    deploy: 'https://exodogurgel.github.io/doctorCare/'
  },

  {
    id: '4',
    name: 'SPA Universe',
    image: './pictures/spa-universe.png',
    github: 'https://github.com/exodogurgel/SpaUniverse',
    deploy: 'https://spa-universe-umber.vercel.app/'
  },

  {
    id: '5',
    name: 'Focus Timer',
    image: './pictures/focus-timer.png',
    github: 'https://github.com/exodogurgel/FocusTimer',
    deploy: 'https://exodogurgel.github.io/FocusTimer/'
  },

  {
    id: '6',
    name: 'Balance Sheet',
    image: './pictures/balance-sheet.png',
    github: 'https://github.com/exodogurgel/BalanceSheet',
    deploy: 'https://exodogurgel.github.io/BalanceSheet/'
  },

  {
    id: '7',
    name: 'Rocket Coffee',
    image: './pictures/rocket-coffee.png',
    github: 'https://github.com/exodogurgel/RocketCoffee',
    deploy: 'https://exodogurgel.github.io/RocketCoffee/'
  },

  {
    id: '8',
    name: 'Space Cream',
    image: './pictures/space-cream.png',
    github: 'https://github.com/exodogurgel/SpaceCream',
    deploy: 'https://exodogurgel.github.io/SpaceCream/'
  },

  {
    id: '9',
    name: 'RocketSect',
    image: './pictures/rocket-sect.png',
    github: 'https://github.com/exodogurgel/Rocket.sect',
    deploy: 'https://exodogurgel.github.io/Rocket.sect/'
  },

  {
    id: '10',
    name: 'RocketForm',
    image: './pictures/rocket-form.png',
    github: 'https://github.com/exodogurgel/RocketForm',
    deploy: 'https://exodogurgel.github.io/RocketForm/'
  },

  {
    id: '11',
    name: 'Calculator',
    image: './pictures/calculator.png',
    github: 'https://github.com/exodogurgel/Calculator',
    deploy: 'https://exodogurgel.github.io/Calculator/'
  },

  {
    id: '12',
    name: 'Countdown',
    image: './pictures/countdown.png',
    github: 'https://github.com/exodogurgel/Countdown',
    deploy: 'https://exodogurgel.github.io/Countdown/'
  }

  /*
  {
    id: '13',
    name: 'Age Checker',
    image: './pictures/age-checker.png',
    github: 'https://github.com/exodogurgel/ageChecker',
    deploy: 'https://exodogurgel.github.io/ageChecker/'
  }
  */
]

const SectionProjects = document.querySelector('.projects')

function createProject() {
  const project = document.createElement('div')
  project.classList.add('project')
  project.innerHTML = `
    <img src="" alt="" />
    <div class="links">
      <a class="website" target="_blank" href="">Website</a>
      <a class="github" target="_blank" href="">Github</a>
    </div>
`
  return project
}

projects.forEach(project => {
  const divProject = createProject()

  divProject.querySelector('img').src = project.image
  divProject.querySelector('img').alt = project.name
  divProject.querySelector('.links .website').href = project.deploy
  divProject.querySelector('.links .github').href = project.github

  SectionProjects.append(divProject)
})

// scroll reveal
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
