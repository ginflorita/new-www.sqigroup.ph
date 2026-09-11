import React from 'react';
import { Award, ShieldCheck, Truck, Users, Sparkles, Building2, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="sqi-section" id="about" style={{ backgroundColor: 'var(--sqi-bg-surface)' }}>
      <div className="sqi-container">
        <div className="sqi-hero-grid" style={{ alignItems: 'center' }}>
          {/* Left Column: Visual Collage */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{ 
                borderRadius: 'var(--sqi-radius-xl)', 
                overflow: 'hidden', 
                boxShadow: 'var(--sqi-shadow-lg)',
                aspectRatio: '4 / 3',
                backgroundColor: 'var(--sqi-bg-subtle)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80"
                alt="Students and educators using SQI learning and classroom stationery"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Float Badge */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-24px',
                right: '24px',
                backgroundColor: 'var(--sqi-orange)',
                color: '#ffffff',
                padding: '18px 24px',
                borderRadius: 'var(--sqi-radius-md)',
                boxShadow: '0 8px 24px rgba(228, 91, 18, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <Award size={32} />
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1 }}>Est. 1987</div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.9 }}>
                  35+ Years in Philippines
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial History & Value Proposition */}
          <div>
            <div className="sqi-eyebrow">
              <Building2 size={15} />
              <span>Heritage & Institutional Reliability</span>
            </div>

            <h2 className="sqi-heading-section" style={{ marginBottom: '16px' }}>
              Empowering Philippine Education & Enterprise for Over Three Decades
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--sqi-text-secondary)', lineHeight: 1.65, marginBottom: '18px' }}>
              Incorporated in the Philippines in <strong>1987</strong>, <strong>SQI Group Int’l. Corp.</strong> has 
              grown from a specialized stationery importer into one of the nation's foremost wholesale distributors 
              of high-reliability office hardware, student writing essentials, and international-standard arts & crafts supplies.
            </p>

            <p style={{ fontSize: '0.96rem', color: 'var(--sqi-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              We partner directly with leading university bookstores, national stationery retail chains, government agencies, 
              and commercial enterprises to guarantee continuous stock availability, strict non-toxic safety compliance, 
              and reliable value.
            </p>

            {/* Checklist Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--sqi-text-primary)' }}>
                <CheckCircle size={18} color="var(--sqi-orange)" style={{ flexShrink: 0 }} />
                <span>100% Non-Toxic Art Lines</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--sqi-text-primary)' }}>
                <CheckCircle size={18} color="var(--sqi-orange)" style={{ flexShrink: 0 }} />
                <span>Nationwide Freight Logistics</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--sqi-text-primary)' }}>
                <CheckCircle size={18} color="var(--sqi-orange)" style={{ flexShrink: 0 }} />
                <span>Strict ISO Quality Standards</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--sqi-text-primary)' }}>
                <CheckCircle size={18} color="var(--sqi-orange)" style={{ flexShrink: 0 }} />
                <span>Bulk Institutional Terms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Metric Cards */}
        <div className="sqi-stats-grid">
          <div className="sqi-stat-card">
            <div className="sqi-stat-number">1987</div>
            <div className="sqi-stat-label">Founded in the Philippines</div>
            <div className="sqi-stat-sub">35+ consecutive years of trusted commercial and educational distribution</div>
          </div>

          <div className="sqi-stat-card">
            <div className="sqi-stat-number">2,500+</div>
            <div className="sqi-stat-label">Institutional Partners</div>
            <div className="sqi-stat-sub">Schools, universities, major bookstores, and nationwide corporate desks</div>
          </div>

          <div className="sqi-stat-card">
            <div className="sqi-stat-number">300+</div>
            <div className="sqi-stat-label">Active Catalog SKUs</div>
            <div className="sqi-stat-sub">Across writing, presentation, art, filing, and heavy office hardware</div>
          </div>

          <div className="sqi-stat-card">
            <div className="sqi-stat-number">100%</div>
            <div className="sqi-stat-label">Safe & Certified</div>
            <div className="sqi-stat-sub">Fully tested against EN71 and ASTM D-4236 child-safety protocols</div>
          </div>
        </div>
      </div>
    </section>
  );
};
