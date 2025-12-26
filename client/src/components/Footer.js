import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png'; 

const Footer = () => {
    const emailAddress = "Swastikapparelofficial@gmail.com";
    const phoneNumber = "+91 88666 10616"; 
    const mapLink = "https://maps.app.goo.gl/AE4UhXSaPSfooNgy7?g_st=iw"; // Ensure this link is valid

    return (
        <footer className="footer">
            <div className="footer-overlay"></div>
            
            <div className="footer-container">
                
                {/* Column 1: Brand Info */}
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <img src={logo} alt="Denim Buddy" />
                    </Link>
                    <p className="brand-desc">
                        Redefining men's denim through vertical integration and 
                        superior craftsmanship. From our factory to your wardrobe.
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/share/17zNHzpND1/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/denim_buddy?igsh=eXE5NHgyaGx3NmFl&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/918866610616" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/wholesale">Wholesale & Partnership</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact (FIXED REDIRECTION) */}
                <div className="footer-col">
                    <h4>Office</h4>
                    <ul className="contact-list">
                        <li>
                            <a 
                                href={mapLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-contact-item"
                            >
                                <i className="fas fa-map-marker-alt"></i>
                                <span>
                                    29, Ground Floor, Laxmi Vishnu Market,<br />
                                    Nr. Gheekanta Metro, Ahmedabad, Gujarat, India - 380001
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${emailAddress}`} className="footer-contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>{emailAddress}</span>
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${phoneNumber}`} className="footer-contact-item">
                                <i className="fas fa-phone-alt"></i>
                                <span>{phoneNumber}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="copyright">
                    <p>© {new Date().getFullYear()} Denim Buddy. All Rights Reserved.</p>
                </div>

                {/* DEVELOPER CREDIT SECTION */}
                <div className="developer-badge">
                    <div className="dev-icons">Made by
                        <a href="https://www.linkedin.com/in/patelharsh06" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:pharsh0106@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;