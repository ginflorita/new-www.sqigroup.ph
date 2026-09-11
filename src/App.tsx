import React, { useState } from 'react';
import { Product, CategoryPillar, BrandName } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedSlider } from './components/FeaturedSlider';
import { PillarsSection } from './components/PillarsSection';
import { ProductDiscovery } from './components/ProductDiscovery';
import { CreativeInspiration } from './components/CreativeInspiration';
import { AboutSection } from './components/AboutSection';
import { BrandsSection } from './components/BrandsSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [selectedPillar, setSelectedPillar] = useState<CategoryPillar | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const contactEl = document.getElementById('contact');
      const aboutEl = document.getElementById('about');
      const catalogEl = document.getElementById('catalog');
      const categoriesEl = document.getElementById('categories');

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else if (catalogEl && scrollPos >= (categoriesEl ? categoriesEl.offsetTop : catalogEl.offsetTop)) {
        setActiveSection('catalog');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSearch = () => {
    scrollToSection('catalog');
    setTimeout(() => {
      const searchInput = document.getElementById('catalog-search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }, 400);
  };

  const handleSelectPillar = (pillar: CategoryPillar) => {
    setSelectedPillar(pillar);
    scrollToSection('catalog');
  };

  const handleSelectBrand = (brand: BrandName) => {
    scrollToSection('catalog');
    setTimeout(() => {
      const brandSelect = document.getElementById('filter-brand-select') as HTMLSelectElement;
      if (brandSelect) {
        brandSelect.value = brand;
        // Trigger synthetic change event
        brandSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, 300);
  };

  const handleOpenInquiryForProduct = (product: Product) => {
    setSelectedProductForInquiry(product);
    setIsInquiryModalOpen(true);
  };

  const handleOpenGeneralInquiry = () => {
    setSelectedProductForInquiry(null);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="sqi-app-shell">
      {/* 1. Header & Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenSearch={handleOpenSearch}
        onOpenInquiry={handleOpenGeneralInquiry}
      />

      <main>
        {/* 2. Hero Section */}
        <HeroSection
          onExplore={() => scrollToSection('catalog')}
          onContact={() => scrollToSection('contact')}
        />

        {/* 3. Featured Products Carousel */}
        <FeaturedSlider
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProductForDetail(product)}
          onInquireProduct={handleOpenInquiryForProduct}
          onViewAll={() => scrollToSection('catalog')}
        />

        {/* 4. Product Categories / Pillars */}
        <PillarsSection
          onSelectPillar={handleSelectPillar}
        />

        {/* 5. Product Discovery System & Full Catalog */}
        <ProductDiscovery
          products={PRODUCTS}
          selectedPillar={selectedPillar}
          onClearPillar={() => setSelectedPillar(null)}
          onSelectProduct={(product) => setSelectedProductForDetail(product)}
          onInquireProduct={handleOpenInquiryForProduct}
        />

        {/* 6. Creative Inspiration / Product-in-Use */}
        <CreativeInspiration />

        {/* 7. About SQI Group (Since 1987 in Philippines) */}
        <AboutSection />

        {/* 8. Brand Ecosystem (SQI, KIDART, FlexOffice, Colokit) */}
        <BrandsSection
          onSelectBrand={handleSelectBrand}
        />

        {/* 9. Blog / Industry Insights */}
        <InsightsSection />

        {/* 10. Contact & Commercial Inquiries */}
        <ContactSection />
      </main>

      {/* 11. Premium Multi-Column Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenInquiry={handleOpenGeneralInquiry}
      />

      {/* 12. Interactive Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductForDetail}
        allProducts={PRODUCTS}
        onClose={() => setSelectedProductForDetail(null)}
        onInquire={handleOpenInquiryForProduct}
        onSelectProduct={(product) => setSelectedProductForDetail(product)}
      />

      {/* 13. Inquiry & Catalog Request Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        product={selectedProductForInquiry}
        onClose={() => {
          setIsInquiryModalOpen(false);
          setSelectedProductForInquiry(null);
        }}
      />
    </div>
  );
}
