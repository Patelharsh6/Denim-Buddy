import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, schemaType = "Organization" }) => {
    
    // Base Schema for the Organization (The Company)
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Denim Buddy",
        "url": "https://denimbuddy.com",
        "logo": "https://denimbuddy.com/logo192.png",
        "description": "Leading Men's Denim Manufacturer in Ahmedabad. 50,000+ units monthly capacity.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ahmedabad, Gujarat",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "areaServed": "Global"
        }
    };

    // Schema for the "About" page (Profile)
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": orgSchema
    };

    // Determine which schema to use
    let activeSchema = orgSchema;
    if (schemaType === 'AboutPage') activeSchema = aboutSchema;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Social Media (Open Graph) - Makes your link look good on WhatsApp */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || "https://denimbuddy.com"} />
            <meta property="og:image" content="https://denimbuddy.com/logo192.png" />
            
            {/* Google Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(activeSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;