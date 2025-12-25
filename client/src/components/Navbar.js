import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'navbar active' : 'navbar'}>
            <div className="navbar-container">
                
                {/* LOGO ONLY (Image) - Text Removed */}
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Denim Buddy Logo" />
                </Link>

                {/* HAMBURGER ICON */}
                <div className={`menu-icon ${click ? 'active' : ''}`} onClick={handleClick}>
                    {/* If you use FontAwesome, keep your logic here. Example: */}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>

                {/* MENU LINKS */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact"><button className="btn-desktop">Contact Us</button> 
                </Link>
                    </li>
                </ul>

                {/* DESKTOP BUTTON */}
                
            </div>
        </nav>
    );
}

export default Navbar;