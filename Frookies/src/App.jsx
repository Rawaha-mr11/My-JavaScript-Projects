import React from 'react';

// Common components (used across multiple pages)
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Home page specific components
import Hero from './components/home/Hero';
import OurStory from './components/home/OurStory';
import BestSeller from './components/home/BestSeller';
import OrderSteps from './components/home/OrderSteps';
import WhyFrookies from './components/home/WhyFrookies';
import GallerySection from './components/home/GallerySection';
import FaqSection from './components/home/FaqSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-primary selection:text-surface">
      {/* Reusable Header */}
      <Header />

      {/* Main Home Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Our Story Section */}
        <OurStory />

        {/* Best Seller Section */}
        <BestSeller />

        {/* 4-Step Order Process Flow */}
        <OrderSteps />

        {/* Why Frookies Section */}
        <WhyFrookies />

        {/* Gallery Section */}
        <GallerySection />

        {/* FAQ Accordion Section */}
        <FaqSection />
      </main>

      {/* Reusable Footer */}
      <Footer />

      {/* Floating Scroll To Top button & Refresh-to-top handler */}
      <ScrollToTop />
    </div>
  );
}