import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <header>
      <div>
        <h1><Link to="/">News Hub</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/create">Criar Post</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
