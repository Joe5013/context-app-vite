import Navbar from './components/Navbar.jsx';
import BookList from './components/BookList.jsx';
import ThemeContextProvider from './contexts/ThemeContext.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import AuthContextProvider from './contexts/AuthContext.jsx';
import BookContextProvider from './contexts/BookContext.jsx';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
