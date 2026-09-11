import React from 'react';
import { BRANDS_DATA } from '../data/products';
import { BrandName } from '../types';
import { Layers } from 'lucide-react';
import { SQILogo, KidartLogo, FlexOfficeLogo, ColokitLogo, HiCraftsLogo } from './BrandLogos';

interface BrandsSectionProps {
  onSelectBrand: (brand: BrandName) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onSelectBrand }) => {
  const renderBrandLogo = (brandId: BrandName) => {
    switch (brandId) {
      case 'SQI':
        return <SQILogo height={56} />;
      case 'KIDART':
        return <KidartLogo height={52} />;
      case 'FlexOffice':
        return <FlexOfficeLogo height={48} />;
      case 'Colokit':
        return <ColokitLogo height={50} />;
      case 'HiCrafts':
        return <HiCraftsLogo height={50} />;
      default:
        return null;
    }
  };

  return (
    <section 
      className="sqi-section sqi-brands-fullwidth-section" 
      id="brands" 
      style={{ backgroundColor: 'var(--sqi-bg-page)', overflow: 'hidden', padding: '60px 0 50px' }}
    >
      <div className="sqi-container">
        <div className="sqi-section-header" style={{ marginBottom: '36px', textAlign: 'center' }}>
          <div className="sqi-eyebrow" style={{ margin: '0 auto 12px' }}>
            <Layers size={14} />
            <span>Curated Portfolio of Excellence</span>
          </div>
          <h2 className="sqi-heading-section">Brand Ecosystem</h2>
          <p className="sqi-section-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Five specialized brands under the SQI Group banner engineered to excel in classrooms, 
            studios, and corporate headquarters.
          </p>
        </div>
      </div>

      {/* Full-Width Continuous Sliding Logos - Clean & Borderless (No Card Outlines) */}
      <div 
        className="sqi-brands-marquee-wrap" 
        aria-label="SQI Group brand ecosystem sliding logos"
      >
        <div className="sqi-brands-marquee-track">
          {/* Set 1 */}
          {BRANDS_DATA.map((brand) => (
            <div
              key={`brand-set1-${brand.id}`}
              className="sqi-brand-marquee-item"
              onClick={() => onSelectBrand(brand.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectBrand(brand.id);
                }
              }}
              title={`View ${brand.name} Products in Catalog`}
            >
              <div className="sqi-brand-logo-display">
                {renderBrandLogo(brand.id)}
              </div>
            </div>
          ))}

          {/* Set 2 (for seamless infinite loop) */}
          {BRANDS_DATA.map((brand) => (
            <div
              key={`brand-set2-${brand.id}`}
              className="sqi-brand-marquee-item"
              onClick={() => onSelectBrand(brand.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectBrand(brand.id);
                }
              }}
              title={`View ${brand.name} Products in Catalog`}
            >
              <div className="sqi-brand-logo-display">
                {renderBrandLogo(brand.id)}
              </div>
            </div>
          ))}

          {/* Set 3 (for ultra-wide monitors) */}
          {BRANDS_DATA.map((brand) => (
            <div
              key={`brand-set3-${brand.id}`}
              className="sqi-brand-marquee-item"
              onClick={() => onSelectBrand(brand.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectBrand(brand.id);
                }
              }}
              title={`View ${brand.name} Products in Catalog`}
            >
              <div className="sqi-brand-logo-display">
                {renderBrandLogo(brand.id)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand quick filter chips - completely borderless */}
      <div className="sqi-container" style={{ marginTop: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--sqi-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '4px' }}>
            Filter Catalog by Brand:
          </span>
          {BRANDS_DATA.map((brand) => (
            <button
              key={`quick-btn-${brand.id}`}
              type="button"
              className="sqi-brand-filter-pill"
              onClick={() => onSelectBrand(brand.id)}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
