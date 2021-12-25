/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import moon from '../assets/icon/moon.svg';
import sun from '../assets/icon/sun.svg';

const logos = {
  light: sun,
  dark: moon,
};

export default function ThemeChanger() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (typeof savedTheme === 'string') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.getElementById('root');

    theme === 'light'
      ? root.classList.remove('dark')
      : root.classList.add('dark');

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <i className="absolute top-14 right-0 pr-10 cursor-pointer" onClick={handleThemeChange}>
      <img src={logos[theme]} alt={theme} />
    </i>
  );
}
