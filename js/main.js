// Utility functions
const createElement = (tag, content = '', className = '') =>
  `<${tag}${className ? ` class="${className}"` : ''}>${content}</${tag}>`;

const createLink = (href, content, className = '', attrs = CONFIG.linkAttrs.external) =>
  `<a href="${href}" class="${className}" ${attrs}>${content}</a>`;

const joinArray = (arr, separator = ', ') => arr.join(separator);

const mapToHTML = (items, mapper) => items.map(mapper).join('');

// Render functions
function renderHero() {
  const { name, statement } = content.hero;
  const hero = document.querySelector('.hero');
  hero.innerHTML = `
    <div class="hero-content">
      ${createElement('h1', name)}
      ${createElement('div', statement, 'hero-subtitle')}
    </div>
  `;
}

function renderWorkItem(project) {
  const versionTag = project.version ? ` <span class="work-version">${project.version}</span>` : '';
  const publicationsHTML = project.publications.length > 0
    ? `<div class="work-publications">
         ${mapToHTML(project.publications, pub =>
           createLink(pub.url, pub.title, 'work-publication-link')
         )}
       </div>`
    : '';

  return `
    <div class="work-item">
      ${createElement('h3', `${project.title}${versionTag}`)}
      ${createElement('div', `${project.metadata} | ${project.period}`, 'work-meta')}
      ${createElement('p', project.description)}
      ${createElement('div', joinArray(project.stack), 'work-stack')}
      ${publicationsHTML}
    </div>
  `;
}

function renderExperienceItem(exp) {
  const descriptionHTML = mapToHTML(exp.description, item => createElement('p', item));
  return `
    <div class="work-item">
      ${createElement('h3', exp.company)}
      ${createElement('div', `${exp.title} | ${exp.period} | ${exp.location}`, 'work-meta')}
      ${descriptionHTML}
    </div>
  `;
}

function renderWork() {
  const container = document.querySelector('.work');
  const workHTML = mapToHTML(content.work, renderWorkItem);
  const experiencesHTML = mapToHTML(content.experiences, renderExperienceItem);

  container.innerHTML = `
    <div class="work-section-experiences">
      ${createElement('h2', 'Experience', 'section-title')}
      ${experiencesHTML}
    </div>
    <div class="work-section-selected">
      ${createElement('h2', 'Selected work', 'section-title')}
      ${workHTML}
    </div>
  `;
}

function renderAbout() {
  const { text, image, cvLink } = content.about;
  const container = document.querySelector('.about .section-container');
  const textHTML = mapToHTML(text, paragraph => createElement('p', paragraph));
  const skillsHTML = mapToHTML(Object.values(content.skills), skills =>
    createElement('div',
      createElement('span', joinArray(skills), 'skill-category-items'),
      'skill-category'
    )
  );

  container.innerHTML = `
    <div class="about-content">
      <div class="about-photo-wrapper">
        <div class="about-photo-circle">
          <img src="${image}" alt="${content.hero.name}">
        </div>
      </div>
      <div class="about-text">
        ${textHTML}
        <a href="${cvLink}" class="cv-button" download>Download CV</a>
      </div>
    </div>
    <div class="skills-grid">
      ${skillsHTML}
    </div>
  `;
}

function renderContactIcon(platform) {
  const url = platform === 'email' ? `mailto:${content.contact.email}` : content.contact[platform];
  return createLink(
    url,
    CONFIG.svgIcons[platform],
    '',
    `${CONFIG.linkAttrs.external} aria-label="${CONFIG.ariaLabels[platform]}"`
  );
}

function renderContact() {
  const container = document.querySelector('.contact .section-container');
  const platforms = ['email', 'linkedin', 'github'];
  container.innerHTML = `
    <div class="contact-links">
      ${mapToHTML(platforms, renderContactIcon)}
    </div>
  `;
}

function init() {
  renderHero();
  renderAbout();
  renderWork();
  renderContact();
}

document.addEventListener('DOMContentLoaded', init);
