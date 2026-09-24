import React from 'react';

function DarkTheme({ theme, onToggle }) {
  const textColor = theme === 'light' ? 'black' : 'white';
  const links = [
    ['homeRef', 'house-fill', 'Home'], ['resumeRef', 'cloud-arrow-down-fill', 'Resume'],
    ['experienceRef', 'stack', 'Experience'], ['certificationsRef', 'patch-check-fill', 'Certifications'],
    ['projectsRef', 'bookmark', 'Projects'], ['contactRef', 'person-lines-fill', 'Contact']
  ];

  return (
    <nav className="navbar navbar-expand-lg" aria-label="Primary navigation">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i style={{ color: textColor }} className="bi bi-three-dots-vertical" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            {links.map(([id, icon, label]) => <a key={id} href={`#${id}`} className="nav-link" style={{ color: textColor }}><i className={`bi bi-${icon}`} /> {label}</a>)}
          </div>
        </div>
        <button type="button" className="btn" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          <i style={{ color: theme === 'dark' ? 'yellow' : 'black' }} className="bi bi-lightbulb-fill" />
        </button>
      </div>
    </nav>
  );
}

export default DarkTheme