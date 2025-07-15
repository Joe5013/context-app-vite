import { useState } from 'react';
import { AuthContext } from './Auth.jsx';

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuthenticated: false,
  });

  const toggleAuth = () => {
    setState((prevState) => ({
      ...prevState,
      isAuthenticated: !prevState.isAuthenticated,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...state, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
