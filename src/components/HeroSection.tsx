import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TrustedByMarquee } from './TrustedLogos';

interface HeroSectionProps {
  onExplore: () => void;
  onContact: () => void;
}

interface BannerSlide {
  id: string;
  image: string;
  fallbackImage: string;
  alt: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'banner-1',
    image: '/by-www.ginflorita.com 3.png',
    fallbackImage: '/by-www.ginflorita.com-3.png',
    alt: "SQI Group Int'l Corp. Philippines - Empowering Creativity & Business Growth",
  },
  {
    id: 'banner-2',
    image: '/by-www.ginflorita.com-3.png',
    fallbackImage: '/by-www.ginflorita.com 3.png',
    alt: "SQI Group Philippines - Wholesale Stationery, Art & School Supplies",
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  
  // Touch swipe support
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play slideshow every 5 seconds, pauses when user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation (left/right arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const handleImageError = (slideId: string) => {
    setFailedImages((prev) => ({ ...prev, [slideId]: true }));
  };

  return (
    <section 
      className="sqi-website-banner-section" 
      id="home"
      aria-roledescription="carousel"
      aria-label="Homepage Banners"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Banner Slideshow Viewport */}
      <div className="sqi-banner-carousel">
        <div className="sqi-banner-slides-track">
          {BANNER_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            const imgSrc = failedImages[slide.id] ? slide.fallbackImage : slide.image;

            return (
              <div
                key={slide.id}
                className={`sqi-banner-slide ${isActive ? 'sqi-banner-slide-active' : ''}`}
                aria-hidden={!isActive}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${BANNER_SLIDES.length}`}
                onClick={onExplore}
                title="Click to explore catalog"
              >
                <img
                  src={imgSrc}
                  alt={slide.alt}
                  referrerPolicy="no-referrer"
                  className="sqi-banner-image"
                  onError={() => handleImageError(slide.id)}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
        </div>

        {/* Previous Banner Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="sqi-banner-arrow sqi-banner-arrow-prev"
          aria-label="Previous banner"
          id="banner-prev-arrow"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Banner Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="sqi-banner-arrow sqi-banner-arrow-next"
          aria-label="Next banner"
          id="banner-next-arrow"
        >
          <ChevronRight size={24} />
        </button>

        {/* Banner Pagination Indicators */}
        <div className="sqi-banner-indicators" role="tablist" aria-label="Banner pagination">
          {BANNER_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                className={`sqi-banner-dot ${isActive ? 'sqi-banner-dot-active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-selected={isActive}
                role="tab"
                id={`banner-dot-${idx}`}
              />
            );
          })}
        </div>
      </div>

      {/* Trusted Institutional Partners & Marquee */}
      <div className="sqi-hero-partners-strip">
        <div className="sqi-container">
          <div className="sqi-audiences-label">
            <span>TRUSTED INSTITUTIONAL PARTNERS & DISTRIBUTORS</span>
          </div>
          <div className="sqi-audience-pills sqi-trusted-fullwidth-pills">
            <TrustedByMarquee />
          </div>
        </div>
      </div>
    </section>
  );
};
