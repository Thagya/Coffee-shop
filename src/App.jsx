import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import MenuItems from './components/MenuItems';
import PromoSection from './components/PromoSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CategorySection />
      <MenuItems />
      <PromoSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;