import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Globe, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sqi-footer" id="footer">
      <div className="sqi-container">
        <div className="sqi-footer-grid">
          {/* Column 1: Brand & Identity */}
          <div className="sqi-footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #f97316 0%, #e45b12 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  fontFamily: 'var(--sqi-font-heading)'
                }}
              >
                SQI
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                  SQI Group
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--sqi-orange)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  Int’l. Corp. – Philippines
                </div>
              </div>
            </div>

            <p style={{ color: '#a0a5ad', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px', maxWidth: '360px' }}>
              Established in 1987. A dedicated supplier and distributor of premier school, 
              office, stationery, and certified non-toxic arts & crafts products across the Philippine islands.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '0.82rem' }}>
              <Shield size={16} color="var(--sqi-orange)" />
              <span>Certified EN71 & ASTM D-4236 Child-Safe Products</span>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="sqi-footer-col">
            <h4>Explore</h4>
            <ul className="sqi-footer-links">
              <li>
                <a href="#home" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#catalog" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }}>
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Sectors */}
          <div className="sqi-footer-col">
            <h4>Product Sectors</h4>
            <ul className="sqi-footer-links">
              <li>
                <a href="#catalog" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }}>
                  School & Student Essentials
                </a>
              </li>
              <li>
                <a href="#catalog" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }}>
                  Office Hardware & Filing
                </a>
              </li>
              <li>
                <a href="#catalog" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }}>
                  Art, Paints & Modeling Clay
                </a>
              </li>
              <li>
                <a href="#catalog" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }}>
                  Presentation & Whiteboards
                </a>
              </li>
              <li>
                <a href="#catalog" className="sqi-footer-link" onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }}>
                  New Product Releases
                </a>
              </li>
              <li>
                <button 
                  type="button" 
                  className="sqi-footer-link" 
                  onClick={onOpenInquiry}
                  style={{ textAlign: 'left', color: 'var(--sqi-orange)', fontWeight: 600, marginTop: '4px' }}
                >
                  Request Official Catalog PDF
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Coordinates */}
          <div className="sqi-footer-col">
            <h4>Contact SQI</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#a0a5ad', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--sqi-orange)" style={{ flexShrink: 0 }} />
                <span>Metro Manila Commercial Center, Philippines</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="var(--sqi-orange)" style={{ flexShrink: 0 }} />
                <span>+63 (2) 8361-2345 / 8362-9876</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="var(--sqi-orange)" style={{ flexShrink: 0 }} />
                <span>inquiries@sqigroup.ph</span>
              </div>
            </div>

            <div className="sqi-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="sqi-social-btn" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="sqi-social-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sqi-social-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://sqigroup.ph" target="_blank" rel="noopener noreferrer" className="sqi-social-btn" aria-label="Official Website">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="sqi-footer-bottom">
          <div>
            © {new Date().getFullYear()} SQI Group Int’l. Corp. – Philippines. All rights reserved. Catalog & Product Discovery.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.8rem' }}>Strictly Catalog & Wholesale Inquiry — No E-Commerce Checkout</span>
            <button
              type="button"
              className="sqi-btn sqi-btn-ghost sqi-btn-sm"
              onClick={scrollToTop}
              style={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--sqi-radius-full)' }}
              id="footer-back-to-top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
