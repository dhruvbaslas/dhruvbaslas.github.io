import './App.css';
import React, { useState } from 'react';
import DarkTheme from './Components/DarkTheme';
import Root from './Components/Root';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`app app--${theme}`}>
      <DarkTheme theme={theme} onToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Root />
      </main>
    </div>
  );
}

export default App;
