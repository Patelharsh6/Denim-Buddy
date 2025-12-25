import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Brand Info */}
                <div className="footer-col brand-col">
                    <div className="footer-logo">
                        <img src={logo} alt="Denim Buddy" />
                    </div>
                    <p className="brand-desc">
                        Redefining men's denim through vertical integration and 
                        superior craftsmanship. From our factory to your wardrobe.
                    </p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Headquarters */}
                <div className="footer-col">
                    <h4>Headquarters</h4>
                    <p>Denim Buddy Manufacturing HQ</p>
                    <p>123 Textile Boulevard</p>
                    <p>[Your City, Country]</p>
                    <p>Email: business@denimbuddy.com</p>
                </div>

                {/* Column 4: Newsletter */}
                <div className="footer-col">
                    <h4>Stay Updated</h4>
                    <p>Join our newsletter for latest fits and factory updates.</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Denim Buddy. All Rights Reserved. | <Link to="/privacy">Privacy Policy</Link></p>
            </div>
        </footer>
    );
};

export default Footer;