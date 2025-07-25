import { useState } from 'react';
import { ThemeContext } from './Theme.jsx';

function ThemeContextProvider({ children }) {
  const [state, setState] = useState({
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  });

  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      isLightTheme: !prevState.isLightTheme,
    }));
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
