import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper URLs & Data
    // Note: Used the variables for display text to ensure consistency
    const emailAddress = "Swastikapparelofficial@gmail.com";
    const phoneNumber = "+91 88666 10616"; 
    const whatsappNumber = "918866610616"; // Clean format for API
    const mapLink = "https://maps.app.goo.gl/AE4UhXSaPSfooNgy7?g_st=iw";

    return (
        <div className="contact-page">
            
            {/* --- HEADER SECTION --- */}
            <div className="contact-header">
                <div className="header-content fade-in-up">
                    <h1>GET IN TOUCH</h1>
                    <div className="accent-bar"></div>
                    <p>Start a conversation with our manufacturing team today.</p>
                </div>
            </div>

            <div className="contact-container">
                
                {/* --- LEFT COLUMN: CONTACT CARDS --- */}
                <div className="contact-info-grid">
                    
                    {/* 1. Address Card */}
                    <a 
                        href={mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="info-card slide-in-1"
                    >
                        <div className="icon-box">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="card-text">
                            <h3>Office Address</h3>
                            <p>29, Ground Floor, Laxmi Vishnu Market</p>
                            <p>Nr. Gheekanta Metro Station, Ahmedabad, Gujarat, India -380001</p>
                        </div>
                    </a>

                    {/* 2. Email Card */}
                    <a href={`mailto:${emailAddress}`} className="info-card slide-in-2">
                        <div className="icon-box">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="card-text">
                            <h3>Email Inquiries</h3>
                            <p>{emailAddress}</p>
                            <span className="cta-link">Send a message &rarr;</span>
                        </div>
                    </a>

                    {/* 3. Phone Card */}
                    <a href={`tel:${phoneNumber}`} className="info-card slide-in-3">
                        <div className="icon-box">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="card-text">
                            <h3>Call Us</h3>
                            <p>{phoneNumber}</p>
                            <span className="cta-link">Call now &rarr;</span>
                        </div>
                    </a>

                    {/* 4. WhatsApp Card */}
                    <a 
                        href={`https://wa.me/${whatsappNumber}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="info-card slide-in-4"
                    >
                        <div className="icon-box whatsapp-icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <div className="card-text">
                            <h3>WhatsApp</h3>
                            <p>Chat with us directly</p>
                            <span className="cta-link">Start Chat &rarr;</span>
                        </div>
                    </a>

                </div>

                {/* --- RIGHT COLUMN: MAP --- */}
                <div className="map-wrapper fade-in-right">
                    <div className="map-frame">
                        <iframe 
                            title="Denim Buddy Location"
                            // Correct Embed URL
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9426986689!2d72.5836!3d23.0261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzM0LjAiTiA3MsKwMzUnMDEuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                            /* Note: Since the generated link in the previous step was a generic redirect, 
                               I've added a standard Google Maps Embed structure here. 
                               Ideally, you paste the specific Embed HTML from Google Maps Share menu. */
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;