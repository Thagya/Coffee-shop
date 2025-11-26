import React from 'react';
import TestimonialCard from './TestimonialCard';
import '../styles/Testimonials.css';

const Testimonials = () => {
 const testimonials = [
  {
    name: 'Amara Sen',
    role: 'Coffee Enthusiast',
    rating: 5,
    content:
      'The aroma and richness of their coffee are unmatched. Every cup feels freshly crafted with real attention to detail.',
    image: '/images/customer-avatar.jpg',
  },
  {
    name: 'Dilan Perera',
    role: 'Food Blogger',
    rating: 5,
    content:
      'A beautiful blend of flavor, quality, and ambience. This has become my go-to spot for both work and relaxation.',
    image: '/images/customer-avatar.jpg',
  },
  {
    name: 'Isha Fernando',
    role: 'Regular Customer',
    rating: 4,
    content:
      'The service is warm and friendly, and the coffee tastes fantastic. A perfect place to unwind.',
    image: '/images/customer-avatar.jpg',
  },
];



  return (
    <section className="testimonials" id="about">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-subtitle">Be part of our community!</h2>
          <h3 className="testimonials-title">OUR HAPPY CUSTOMERS</h3>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              content={testimonial.content}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;