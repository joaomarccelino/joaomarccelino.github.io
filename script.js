// Scroll suave
function initSmoothScroll() {
  const navigation = document.querySelectorAll('a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  navigation.forEach(item => {
    item.addEventListener('click', scrollSection);
  })
}
initSmoothScroll();


// Mobile menu

const mobileBtn = document.querySelector('.mobile-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const menu = document.querySelector('.header-menu');

function showMobileMenu() {
  menu.classList.add('active-menu');
  mobileBtn.classList.add('hide-btn');
}

function closeMobileMenu() {
  menu.classList.remove('active-menu');
  mobileBtn.classList.remove('hide-btn');
  console.log(closeBtn)
}

mobileBtn.addEventListener('click', showMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);

// Cards de cursos;
function initCardClone() {
  const cardSection = document.querySelector('.education-courses');
  const card = document.querySelector('.course');
  console.log(card);

  const courses = [
    {
      school: 'Origamid',
      course: 'UI Design',
      detail: 'Iniciante',
      workLoad: '46h'
    },
    {
      school: 'Origamid',
      course: 'CSS Grid',
      detail: '.',
      workLoad: '12h'
    },
    {
      school: 'Origamid',
      course: 'CSS Flexbox',
      detail: '.',
      workLoad: '14h'
    },
    {
      school: 'Origamid',
      course: 'Javascript',
      detail: 'Completo ES6+',
      workLoad: '74h'
    },
    {
      school: 'COD3R',
      course: 'React + Redux',
      detail: '.',
      workLoad: '54h'
    },
    {
      school: 'COD3R',
      course: 'React Native',
      detail: '.',
      workLoad: '45h'
    },
    {
      school: 'Rocketseat',
      course: 'NLW 4',
      detail: 'Trilha React',
      workLoad: '15h'
    },
    {
      school: 'Rocketseat',
      course: 'NLW Together',
      detail: 'Trilha React e React Native',
      workLoad: '20h'
    }
  ]

  courses.map(course => {
    const cardClone = card.cloneNode(true);
    cardClone.querySelector('h3').innerText = course.course;
    const details = cardClone.querySelectorAll('p');
    details[0].innerText = course.school;
    details[1].innerText = course.detail;
    if(course.detail === '.') {
      details[1].classList.add('separator');
    }
    details[2].innerText = course.workLoad;
    cardSection.appendChild(cardClone);
  })
}

initCardClone();