import React from 'react';
import '../styles/CategorySection.css';

const CategorySection = () => {
  const categories = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 28V38C12 39.1046 12.8954 40 14 40H34C35.1046 40 36 39.1046 36 38V28" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 28H40V22C40 20.8954 39.1046 20 38 20H10C8.89543 20 8 20.8954 8 22V28Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 8C24 8 20 12 20 14C20 16 22 18 24 18C26 18 28 16 28 14C28 12 24 8 24 8Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Hot Coffee',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="12" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 12V8M30 12V8M24 12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 20H30M18 26H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Cold Coffee',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 24V36C12 37.1046 12.8954 38 14 38H34C35.1046 38 36 37.1046 36 36V24" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 24H40C40 21.7909 38.2091 20 36 20H12C9.79086 20 8 21.7909 8 24Z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Cup Coffee',
    },
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="category-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="category-icon">{category.icon}</div>
            <h3 className="category-title">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;