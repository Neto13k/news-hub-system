import React from 'react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

useEffect(() => {
  const updateAuth = () => {
    setIsAuthenticated(!!localStorage.getItem('token'));
    setUserEmail(localStorage.getItem('email'));
  };

  updateAuth(); // roda na montagem
  window.addEventListener('storage', updateAuth); // escuta mudanças

  return () => window.removeEventListener('storage', updateAuth);
}, []);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1><Link to="/">News Hub</Link></h1>
        <nav>
          <ul>
            {isAuthenticated ? (
              <>
                <li><Link to="/createpost">Criar Post</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><span>{userEmail}</span></li>
                <li><button className='btn btn-secondary' onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('email');
                  window.location.href = '/';
                }}>Logout</button></li> 
              </>
            ) : (
              <>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Registrar</Link></li>
              </>
            )}
            <li><button className='btn btn-secondary' onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button></li> 
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
