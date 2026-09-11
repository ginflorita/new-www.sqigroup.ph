import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowRight, FileText, Sparkles, ChevronRight, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`sqi-header ${isScrolled ? 'scrolled' : ''}`} id="main-header">
        <div className="sqi-container">
          <div className="sqi-header-inner">
            {/* SQI Logo */}
            <a 
              href="#home" 
              className="sqi-logo-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              id="header-logo-link"
            >
              <img src="/SQI-PHILIPPINES.png" alt="SQI Group Philippines" className="sqi-logo-img" />
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Main Navigation">
              <ul className="sqi-nav-desktop">
                <li className={`sqi-nav-item ${activeSection === 'home' ? 'active' : ''}`}>
                  <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                    HOME
                  </a>
                </li>
                <li className={`sqi-nav-item ${activeSection === 'catalog' ? 'active' : ''}`}>
                  <a href="#catalog" onClick={(e) => { e.preventDefault(); handleNavClick('catalog'); }}>
                    PRODUCTS
                  </a>
                </li>
                <li className={`sqi-nav-item ${activeSection === 'about' ? 'active' : ''}`}>
                  <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                    ABOUT US
                  </a>
                </li>
                <li className={`sqi-nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="sqi-header-actions">
              <button
                type="button"
                className="sqi-search-trigger"
                onClick={onOpenSearch}
                aria-label="Search product catalog"
                id="header-search-btn"
              >
                <Search size={16} />
                <span>Search catalog...</span>
              </button>

              <button
                type="button"
                className="sqi-btn sqi-btn-primary sqi-btn-sm"
                onClick={onOpenInquiry}
                id="header-cta-inquire"
              >
                <span>Request Catalog</span>
                <ArrowRight size={14} />
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                className="sqi-mobile-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                id="mobile-menu-open-btn"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`sqi-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div 
          className="sqi-mobile-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sqi-drawer-header">
            <div className="sqi-logo-link">
              <img src="/SQI-PHILIPPINES.png" alt="SQI Group Philippines" className="sqi-logo-img" style={{ height: '36px' }} />
            </div>
            <button
              type="button"
              className="sqi-btn-ghost"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation"
              id="mobile-menu-close-btn"
              style={{ padding: '8px' }}
            >
              <X size={22} />
            </button>
          </div>

          <div className="sqi-drawer-nav">
            <button
              type="button"
              className="sqi-search-trigger"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              style={{ width: '100%', justifyContent: 'flex-start', marginBottom: '12px' }}
            >
              <Search size={18} />
              <span>Search products, SKUs, brands...</span>
            </button>

            {[
              { id: 'home', label: 'HOME' },
              { id: 'catalog', label: 'PRODUCTS' },
              { id: 'about', label: 'ABOUT US' },
              { id: 'contact', label: 'CONTACT US' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`sqi-drawer-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} color="var(--sqi-text-muted)" />
              </a>
            ))}

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--sqi-border-subtle)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                className="sqi-btn sqi-btn-primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                style={{ width: '100%' }}
              >
                <FileText size={16} />
                <span>Inquire / Request Catalog</span>
              </button>

              <a
                href="tel:+63283612345"
                className="sqi-btn sqi-btn-secondary"
                style={{ width: '100%' }}
              >
                <Phone size={16} />
                <span>Call Manila Office</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
