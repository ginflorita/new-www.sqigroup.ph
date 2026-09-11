import React from 'react';
import { PILLARS } from '../data/products';
import { CategoryPillar } from '../types';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface PillarsSectionProps {
  onSelectPillar: (pillar: CategoryPillar) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onSelectPillar }) => {
  return (
    <section className="sqi-section" id="categories" style={{ backgroundColor: 'var(--sqi-bg-surface)' }}>
      <div className="sqi-container">
        <div className="sqi-section-header">
          <div className="sqi-eyebrow">
            <Compass size={15} />
            <span>Structured Catalog Architecture</span>
          </div>
          <h2 className="sqi-heading-section">Five Pillars of SQI Quality</h2>
          <p className="sqi-section-desc">
            Organized to help schools, universities, offices, and craft creators swiftly discover the exact supplies they need.
          </p>
        </div>

        <div className="sqi-pillars-grid">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="sqi-pillar-card"
              onClick={() => onSelectPillar(pillar.id as CategoryPillar)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectPillar(pillar.id as CategoryPillar)}
              aria-label={`Explore ${pillar.title} category`}
              id={`pillar-card-${pillar.id.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img
                src={pillar.image}
                alt={pillar.title}
                className="sqi-pillar-bg-img"
                loading="lazy"
              />

              <div className="sqi-pillar-top">
                <span className="sqi-pillar-badge">{pillar.title}</span>
                <h3 className="sqi-pillar-title">{pillar.title}</h3>
                <p className="sqi-pillar-desc">{pillar.desc}</p>
              </div>

              <div className="sqi-pillar-bottom">
                <span className="sqi-pillar-count">{pillar.count}+ Catalog Items</span>
                <div className="sqi-pillar-arrow">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
