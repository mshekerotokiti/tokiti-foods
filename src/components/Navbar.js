import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
        <div>
          <Link to="/">
            <img src='./TOKITI FOODS LOGO PNG.png' alt="Logo" />
          </Link>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/shop" >Shop</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </nav>
  );
}

export default Navbar;