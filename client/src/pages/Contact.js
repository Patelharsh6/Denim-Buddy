import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your inquiry. Our team will contact you shortly.");
    };

    // Helper URLs
    const address = "29, Ground Floor, Laxmi Vishnu Market, Nr. Gheekanta Metro Station, Gheekanta, Ahmedabad, Gujarat- 380001";
    // Encode address for URL
    const mapLink = `https://maps.app.goo.gl/RaYVQnMGVtq2gNoR9?g_st=ic`; 
    const emailAddress = "Swastikapparelofficial@gmail.com";
    const phoneNumber = "+91 88666 10616"; // Keep format for display, strip for link if needed
    const whatsappNumber = "+91 88666 10616"; // Country code + Number, no symbols or '+'

    return (
        <div className="contact-page">
            
            {/* Header */}
            <div className="contact-header">
                <h1>GET IN TOUCH</h1>
                <p>Start a conversation with our manufacturing team today.</p>
            </div>

            <div className="contact-container">
                
                {/* Left Side: Contact Info */}
                <div className="contact-info">
                    <h3>Headquarters</h3>
                    <p className="info-text">
                        Visit our manufacturing facility to see our production quality firsthand.
                    </p>
                    
                    {/* 1. MAP LOCATION LINK */}
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <a 
                            href={mapLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="link-item"
                        >
                            <strong>Factory Address:</strong>
                            <p>29, Ground Floor, Laxmi Vishnu Market ,Nr. Gheekanta Metro Station </p>
                            <p> Gheekanta, Ahmedabad, Gujarat- 380001 </p>
                        </a>
                    </div>

                    {/* 2. EMAIL LINK */}
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <a href={`mailto:${emailAddress}`} className="link-item">
                            <strong>Email Inquiries:</strong>
                            <p>{emailAddress}</p>
                        </a>
                    </div>

                    {/* 3. PHONE DIALER LINK */}
                    <div className="info-item">
                        <i className="fas fa-phone-alt phone"></i>
                        <a href={`tel:${phoneNumber}`} className="link-item">
                            <strong>Phone</strong>
                            <p>+91 98765 43210</p>
                        </a>
                    </div>

                    {/* 4. WHATSAPP LINK */}
                    <div className="info-item">
                        <i className="fa-brands fa-whatsapp"></i>
                        <a 
                            href={`https://wa.me/${whatsappNumber}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="link-item"
                        >
                            <strong>WhatsApp</strong>
                            <p>+91 98765 43210</p>
                        </a>
                    </div>

                    {/* Google Map Embed */}
                    <div className="map-container">
                        <iframe 
                            title="Denim Buddy Location"
                            // Note: This needs a valid Google Maps Embed URL to work properly
                            src="https://maps.google.com/maps?q=Surat,Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="200" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;