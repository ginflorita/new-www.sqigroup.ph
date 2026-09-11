import React, { useRef, useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedSliderProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onInquireProduct: (product: Product) => void;
  onViewAll: () => void;
}

export const FeaturedSlider: React.FC<FeaturedSliderProps> = ({
  products,
  onSelectProduct,
  onInquireProduct,
  onViewAll,
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featuredList = products.filter((p) => p.isFeatured || p.isNew);

  const updateScrollButtons = () => {
    if (viewportRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = viewportRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = viewportRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons, { passive: true });
      updateScrollButtons();
      return () => el.removeEventListener('scroll', updateScrollButtons);
    }
  }, [featuredList.length]);

  const scrollBy = (offset: number) => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="sqi-section" id="featured" style={{ backgroundColor: 'var(--sqi-bg-page)' }}>
      <div className="sqi-container">
        {/* Header with Slider Navigation Controls */}
        <div className="sqi-slider-header-wrap">
          <div>
            <div className="sqi-eyebrow">
              <Sparkles size={14} />
              <span>Selected Best Sellers & Innovations</span>
            </div>
            <h2 className="sqi-heading-section">Featured Products</h2>
            <p className="sqi-section-desc" style={{ maxWidth: '580px', marginTop: '6px' }}>
              Handpicked school, office, and fine art essentials renowned for reliability, 
              ergonomics, and child-safe materials.
            </p>
          </div>

          <div className="sqi-slider-controls">
            <button
              type="button"
              className="sqi-slider-btn"
              onClick={() => scrollBy(-320)}
              disabled={!canScrollLeft}
              aria-label="Previous featured products"
              id="slider-prev-btn"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="sqi-slider-btn"
              onClick={() => scrollBy(320)}
              disabled={!canScrollRight}
              aria-label="Next featured products"
              id="slider-next-btn"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div 
          className="sqi-slider-viewport" 
          ref={viewportRef}
          tabIndex={0}
          role="region"
          aria-label="Featured Products Carousel"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') scrollBy(-300);
            if (e.key === 'ArrowRight') scrollBy(300);
          }}
        >
          <div className="sqi-slider-track">
            {featuredList.map((product) => (
              <div key={product.id} className="sqi-slider-slide">
                <ProductCard
                  product={product}
                  onSelect={onSelectProduct}
                  onInquire={onInquireProduct}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Prompt */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            type="button"
            className="sqi-btn sqi-btn-outline"
            onClick={onViewAll}
            id="featured-view-all-btn"
          >
            <span>Browse Full SQI Catalog</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
