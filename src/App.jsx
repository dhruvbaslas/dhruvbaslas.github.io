import './App.css';
import React, { useState } from 'react';
import DarkTheme from './Components/DarkTheme';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Certifications from './Components/Certifications';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Home from './Components/Home';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`app app--${theme}`}>
      <DarkTheme theme={theme} onToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Home />
        <Resume />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
