import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function StackGrid({ techs }) {
  const defaultTechs = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: reactLogo },
    { name: 'Vite', logo: viteLogo },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', logo: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  const list = Array.isArray(techs) && techs.length ? techs : defaultTechs;

  return (
    <div className="row g-3 stack-grid">
      {list.map((tech) => (
        <div key={tech.name} className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
          <div className="stack-item text-center">
            <img src={tech.logo} alt={tech.name} className="stack-logo mb-2" loading="lazy" />
            <div className="small white-text">{tech.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StackGrid
