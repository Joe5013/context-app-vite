// src/components/Navbar.jsx
import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme.jsx';
import { AuthContext } from '../contexts/Auth.jsx';

function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  console.log(useContext(ThemeContext)); // Equivalent to previous console.log(this.context)
  return (
    <nav style={{ background: theme.bg, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
