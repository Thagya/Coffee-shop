import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/MenuItems.css';
import Button from './Button'; // ✅ Button imported

const MenuItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image: '/images/product1.jpg',
      title: 'Espresso',
      description: 'A strong and concentrated coffee brewed by forcing hot water through finely-ground beans.',
      price: '2200',
    },
    {
      image: '/images/product2.jpg',
      title: 'Cappuccino',
      description: 'A classic Italian beverage made with equal parts espresso, steamed milk, and milk foam.',
      price: '3000',
    },
    {
      image: '/images/product3.jpg',
      title: 'Latte',
      description: 'A smooth and creamy drink prepared with espresso and a generous amount of steamed milk.',
      price: '2000',
    },
    {
      image: '/images/product4.jpg',
      title: 'Americano',
      description: 'Espresso diluted with hot water, giving a mild and rich flavor similar to drip coffee.',
      price: '1800',
    },
    {
      image: '/images/product5.jpg',
      title: 'Mocha',
      description: 'A chocolate-flavored coffee drink combining espresso, steamed milk, and rich cocoa.',
      price: '2500',
    },
    {
      image: '/images/product6.jpg',
      title: 'Flat White',
      description: 'A velvety-smooth coffee made with micro-foamed milk poured over a shot of espresso.',
      price: '2000',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= products.length - 6 ? prev : prev + 3));
  };

  return (
    <section className="menu-items" id="coffee">
      <div className="menu-container">
        <h2 className="menu-title">MENU ITEMS</h2>

        <div className="menu-carousel">
          
          {/* ✅ Prev Button using <Button /> */}
          <Button className="carousel-btn prev" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>

          {/* Product Cards */}
          <div className="products-grid">
            {products.slice(currentIndex, currentIndex + 6).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>

          {/* ✅ Next Button using <Button /> */}
          <Button className="carousel-btn next" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>

        </div>
      </div>
    </section>
  );
};

export default MenuItems;
