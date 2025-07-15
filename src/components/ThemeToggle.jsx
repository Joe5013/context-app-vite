import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme.jsx';

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle the Theme</button>;
}

export default ThemeToggle;
