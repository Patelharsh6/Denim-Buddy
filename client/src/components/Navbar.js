import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Ensure path is correct

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // Handle scroll effect
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

    // Lock body scroll when mobile menu is open (UX improvement)
    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [click]);

    return (
        <nav className={scrolled ? 'navbar active' : 'navbar'}>
            <div className="navbar-container">
                
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Denim Buddy Logo" />
                </Link>

                <div className={`menu-icon ${click ? 'active' : ''}`} onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/wholesale" className="nav-links" onClick={closeMobileMenu}>Wholesale & Partnership</Link>
                    </li>
                    {/* Combined Contact Link/Button logic in CSS */}
                    <li className="nav-item contact-item-wrapper">
                        <Link to="/contact" className="nav-links-mobile-cta" onClick={closeMobileMenu}>Contact Us</Link>
                        <Link to="/contact" className="desktop-btn-link">
                             <button className="btn-desktop">Contact Us</button> 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;