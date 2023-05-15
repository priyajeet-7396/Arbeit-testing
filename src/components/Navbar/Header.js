import Navbar from './Navbar';
import './Header.css'
// ...
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import React, { useState, useEffect } from "react";
import { slide as Menu } from 'react-burger-menu'



const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="nav-area">
        <Link to="/" className="logo">
        <img src={logo}  className='logo_img' alt='navlogo' />
        
    
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
