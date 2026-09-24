import React, { useState } from 'react';

function DarkTheme({ theme, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['homeRef', 'house-fill', 'Home'], ['resumeRef', 'cloud-arrow-down-fill', 'Resume'],
    ['experienceRef', 'stack', 'Experience'], ['certificationsRef', 'patch-check-fill', 'Certifications'],
    ['projectsRef', 'bookmark', 'Projects'], ['contactRef', 'person-lines-fill', 'Contact']
  ];

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="nav-shell">
        <a className="nav-mark" href="#homeRef" aria-label="Dhruv Baslas home">db</a>
        <button className="nav-toggle" type="button" onClick={() => setMenuOpen(current => !current)} aria-controls="primary-menu" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} />
        </button>
        <div className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}`} id="primary-menu">
          {links.map(([id, icon, label]) => <a key={id} href={`#${id}`} className="nav-link" onClick={() => setMenuOpen(false)}><i className={`bi bi-${icon}`} /> {label}</a>)}
        </div>
        <button type="button" className="theme-toggle" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}`} />
        </button>
      </div>
    </nav>
  );
}

export default DarkTheme