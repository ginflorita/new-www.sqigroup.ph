import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { 
  X, 
  Share2, 
  Check, 
  ShieldCheck, 
  Package, 
  Layers, 
  Maximize2, 
  ArrowRight, 
  Mail,
  ChevronRight
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  allProducts: Product[];
  onClose: () => void;
  onInquire: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  allProducts,
  onClose,
  onInquire,
  onSelectProduct,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setActiveImageIndex(0);
    setIsZoomed(false);
  }, [product?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomCoords({ x, y });
  };

  return (
    <div 
      className="sqi-modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Detail View`}
    >
      <div 
        className="sqi-modal-content"
        onClick={(e) => e.stopPropagation()}
        id="product-detail-modal-box"
      >
        <button
          type="button"
          className="sqi-modal-close"
          onClick={onClose}
          aria-label="Close product view"
          id="btn-close-modal"
        >
          <X size={20} />
        </button>

        <div className="sqi-detail-grid">
          {/* Left Column: Image Gallery & Zoom */}
          <div>
            {/* Breadcrumb navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--sqi-text-muted)', marginBottom: '14px' }}>
              <span>Catalog</span>
              <ChevronRight size={13} />
              <span>{product.pillar}</span>
              <ChevronRight size={13} />
              <span style={{ color: 'var(--sqi-orange)', fontWeight: 600 }}>{product.category}</span>
            </div>

            {/* Main Interactive Zoom Stage */}
            <div 
              className="sqi-gallery-main"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                style={{
                  transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                  transform: isZoomed ? 'scale(1.7)' : 'scale(1)',
                  transition: isZoomed ? 'none' : 'transform 0.25s ease-out'
                }}
              />

              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '12px', 
                  right: '12px', 
                  backgroundColor: 'rgba(0,0,0,0.6)', 
                  color: '#ffffff', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  pointerEvents: 'none'
                }}
              >
                <Maximize2 size={12} />
                <span>Hover to zoom</span>
              </div>
            </div>

            {/* Thumbnail Navigation if multiple images */}
            {product.images.length > 1 && (
              <div className="sqi-gallery-thumbs">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`sqi-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Show image ${idx + 1}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Safety & Compliance Badge Box */}
            {product.specs.safetyCertification && (
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  marginTop: '20px', 
                  padding: '12px 16px',
                  backgroundColor: 'var(--sqi-bg-subtle)',
                  borderRadius: 'var(--sqi-radius-sm)',
                  fontSize: '0.82rem',
                  color: 'var(--sqi-text-secondary)',
                  border: '1px solid var(--sqi-border-subtle)'
                }}
              >
                <ShieldCheck size={20} color="var(--sqi-orange)" style={{ flexShrink: 0 }} />
                <span><strong>Quality Verified:</strong> {product.specs.safetyCertification}</span>
              </div>
            )}
          </div>

          {/* Right Column: Information, Specs & Inquiry CTA */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="sqi-badge sqi-badge-orange">
                {product.brand} Brand
              </span>
              <span style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--sqi-text-light)' }}>
                SKU: {product.sku}
              </span>
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '12px' }}>
              {product.name}
            </h2>

            <p style={{ fontSize: '0.96rem', color: 'var(--sqi-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              {product.fullDesc}
            </p>

            {/* Available Colors if applicable */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--sqi-text-primary)', marginBottom: '8px' }}>
                  Available Color Options:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {product.colors.map((c, i) => (
                    <div 
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        borderRadius: 'var(--sqi-radius-full)',
                        border: '1px solid var(--sqi-border-medium)',
                        fontSize: '0.8rem',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <span 
                        style={{ 
                          width: '12px', 
                          height: '12px', 
                          borderRadius: '50%', 
                          backgroundColor: c.hex,
                          border: '1px solid rgba(0,0,0,0.1)'
                        }} 
                      />
                      <span>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Table */}
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, borderBottom: '1px solid var(--sqi-border-medium)', paddingBottom: '8px' }}>
                Product Specifications
              </h3>
              <table className="sqi-specs-table">
                <tbody>
                  <tr>
                    <td>Packaging / Pack Size:</td>
                    <td>{product.specs.packaging}</td>
                  </tr>
                  <tr>
                    <td>Construction Material:</td>
                    <td>{product.specs.material}</td>
                  </tr>
                  {product.specs.dimensions && (
                    <tr>
                      <td>Dimensions / Specs:</td>
                      <td>{product.specs.dimensions}</td>
                    </tr>
                  )}
                  <tr>
                    <td>Target Application:</td>
                    <td>{product.specs.targetUse}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Primary Action Buttons (Inquire vs Share) */}
            <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="sqi-btn sqi-btn-primary"
                onClick={() => {
                  onClose();
                  onInquire(product);
                }}
                style={{ flex: 1, minWidth: '220px' }}
                id="modal-cta-inquire"
              >
                <Mail size={18} />
                <span>Inquire About This Product</span>
              </button>

              <button
                type="button"
                className="sqi-btn sqi-btn-secondary"
                onClick={handleShare}
                aria-label="Share product"
                id="modal-btn-share"
              >
                {copied ? <Check size={18} color="green" /> : <Share2 size={18} />}
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Footer Row */}
        {relatedProducts.length > 0 && (
          <div 
            style={{ 
              padding: '24px 36px 36px 36px', 
              borderTop: '1px solid var(--sqi-border-subtle)',
              backgroundColor: 'var(--sqi-bg-page)',
              borderBottomLeftRadius: 'var(--sqi-radius-lg)',
              borderBottomRightRadius: 'var(--sqi-radius-lg)'
            }}
          >
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', color: 'var(--sqi-text-primary)' }}>
              Related {product.category} in Catalog:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--sqi-radius-sm)',
                    border: '1px solid var(--sqi-border-subtle)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--sqi-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--sqi-border-subtle)'}
                >
                  <img
                    src={rel.images[0]}
                    alt={rel.name}
                    style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {rel.name}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--sqi-orange)', fontFamily: 'monospace' }}>
                      {rel.sku}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
