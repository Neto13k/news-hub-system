import React from 'react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1><Link to="/">News Hub</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            {isAuthenticated && <li><Link to="/createpost">Criar Post</Link></li>}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
