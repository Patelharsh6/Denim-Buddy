import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    return (
        <Helmet>
            <title>{title} | Denim Buddy</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Open Graph Tags (for sharing on WhatsApp/LinkedIn) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || "https://denimbuddy.com"} />
        </Helmet>
    );
};

export default SEO;