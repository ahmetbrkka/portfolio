function renderHero() {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <h1>${content.hero.name}</h1>
    <p>${content.hero.title}</p>
  `;
}

function renderAbout() {
  const aboutSection = document.querySelector('#about .section-container');
  const paragraphs = content.about.text.map(p => `<p>${p}</p>`).join('');

  aboutSection.innerHTML = `
    <div class="about-photo-wrapper">
      <div class="about-photo-circle">
        <img src="${content.about.image}" alt="Profile photo">
      </div>
    </div>
    <h2 class="section-title">About</h2>
    ${paragraphs}
    <a href="${content.about.cvLink}" class="button cv-button" download>Download my CV</a>
  `;
}

function renderExperiences() {
  const container = document.querySelector('#experiences .section-container');
  const experiencesHTML = content.experiences.map(exp => {
    const bullets = exp.description.map(item => `<li>${item}</li>`).join('');
    return `
      <div class="experience">
        <h3>${exp.company} – ${exp.location}</h3>
        <div class="role">${exp.title}</div>
        <div class="time">${exp.period}</div>
        <ul>${bullets}</ul>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h2 class="section-title">Experiences</h2>
    ${experiencesHTML}
  `;
}

function renderProjects() {
  const container = document.querySelector('#projects .section-container');
  const projectsHTML = content.projects.map(proj => {
    const toolsStr = proj.tools.join(', ');
    const publicationsHTML = proj.publications.length > 0
      ? `<div class="project-publications">
           <span class="project-publications-label">Publications</span>
           ${proj.publications.map(pub =>
             `<a href="${pub.url}" class="project-publication-link" target="_blank" rel="noopener noreferrer">${pub.title}</a>`
           ).join('')}
         </div>`
      : '';

    return `
      <div class="project">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="tools">${toolsStr}</div>
        ${publicationsHTML}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">${projectsHTML}</div>
  `;
}

function renderSkills() {
  const container = document.querySelector('#skills .section-container');
  const categoriesHTML = Object.entries(content.skills).map(([category, skills]) => {
    const skillsHTML = skills.map(skill => `<li>${skill}</li>`).join('');
    return `
      <div class="skill-category">
        <h3>${category}</h3>
        <ul>${skillsHTML}</ul>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">${categoriesHTML}</div>
  `;
}

function renderContact() {
  const container = document.querySelector('#contact .section-container');
  container.innerHTML = `
    <h2 class="section-title">Contact</h2>
    <a href="mailto:${content.contact.email}">${content.contact.email}</a>
    <a href="${content.contact.linkedin}" target="_blank">linkedin.com/in/abkara</a>
    <a href="${content.contact.github}" target="_blank">github.com/ahmetbrkka</a>
  `;
}

function handleNavScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('active');
  document.body.style.overflow = '';
}

function init() {
  renderHero();
  renderAbout();
  renderExperiences();
  renderProjects();
  renderSkills();
  renderContact();

  window.addEventListener('scroll', handleNavScroll);

  const hamburger = document.querySelector('.hamburger');
  const closeMenu = document.querySelector('.close-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  hamburger.addEventListener('click', toggleMobileMenu);
  closeMenu.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

document.addEventListener('DOMContentLoaded', init);
