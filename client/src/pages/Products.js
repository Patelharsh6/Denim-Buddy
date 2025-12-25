import React, { useEffect, useState } from 'react';
import './Products.css';

// Importing images
import product1 from '../assets/hero/animation-1.jpg';
import product2 from '../assets/hero/animation-1.jpg';
import product3 from '../assets/hero/animation-1.jpg';

const allProducts = [
    { id: 1, name: "The Classic Straight", price: "$28.00", category: "Men's Vintage", img: product1, status: "Best Seller" },
    { id: 2, name: "Modern Slim Fit", price: "$32.50", category: "Urban Wear", img: product2, status: "New" },
    { id: 3, name: "Industrial Jacket", price: "$45.00", category: "Outerwear", img: product3, status: "" },
    { id: 4, name: "Raw Selvedge", price: "$55.00", category: "Premium", img: product1, status: "Limited" },
    { id: 5, name: "Relaxed Carpenter", price: "$30.00", category: "Workwear", img: product2, status: "" },
    { id: 6, name: "Black Dye Series", price: "$35.00", category: "Urban Wear", img: product3, status: "Trending" },
];

const Products = () => {
    const [filter, setFilter] = useState("All");
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter Logic
    const filteredProducts = filter === "All" 
        ? allProducts 
        : allProducts.filter(p => p.category === filter);

    const categories = ["All", "Men's Vintage", "Urban Wear", "Outerwear", "Premium"];

    return (
        <div className="products-page">
            
            {/* --- HERO HEADER --- */}
            <header className="products-header">
                <div className="header-content">
                    <h1>Our Collection</h1>
                    <p>Engineered for durability. Designed for the modern market.</p>
                </div>
            </header>

            {/* --- FILTER TABS --- */}
            <div className="filter-container">
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* --- PRODUCT GRID --- */}
            <section className="catalog-container">
                {filteredProducts.map((item) => (
                    <div className="product-card" key={item.id}>
                        <div className="card-image-wrapper">
                            <img src={item.img} alt={item.name} />
                            {item.status && <span className="status-badge">{item.status}</span>}
                            <div className="hover-overlay">
                                <button className="quick-view-btn">View Details</button>
                            </div>
                        </div>
                        <div className="card-info">
                            <span className="product-category">{item.category}</span>
                            <h3>{item.name}</h3>
                            <div className="price-row">
                                <span className="price">{item.price}</span>
                                <span className="moq-tag">MOQ: 50 Units</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* --- INQUIRY CTA --- */}
            <section className="inquiry-banner">
                <div className="banner-content">
                    <h2>Need a Custom Order?</h2>
                    <p>We offer full white-label manufacturing services.</p>
                    <button className="banner-btn">Contact Sales</button>
                </div>
            </section>
        </div>
    );
};

export default Products;