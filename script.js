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
      wordload: '46h'
    },
    {
      school: 'COD3R',
      course: 'React + Redux',
      detail: '.',
      wordload: '54h'
    },
    {
      school: 'COD3R',
      course: 'React Native',
      detail: '.',
      wordload: '45h'
    },
    {
      school: 'Rocketseat',
      course: 'NLW 4',
      detail: 'Trilha React',
      wordload: '15h'
    },
    {
      school: 'Rocketseat',
      course: 'NLW Together',
      detail: 'Trilha React e React Native',
      wordload: '20h'
    },
    {
      school: 'Origamid',
      course: 'CSS Grid',
      detail: '.',
      wordload: '12h'
    },
    {
      school: 'Origamid',
      course: 'CSS Flexbox',
      detail: '.',
      wordload: '14h'
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
    details[2].innerText = course.wordload;
    cardSection.appendChild(cardClone);
  })
}

initCardClone();