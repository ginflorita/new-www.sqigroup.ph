import React, { useState } from 'react';
import { INSIGHT_ARTICLES } from '../data/products';
import { InsightArticle } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, X, User, Sparkles } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section className="sqi-section" id="insights" style={{ backgroundColor: 'var(--sqi-bg-page)' }}>
      <div className="sqi-container">
        <div className="sqi-section-header">
          <div className="sqi-eyebrow">
            <BookOpen size={14} />
            <span>Educational & Industry Perspectives</span>
          </div>
          <h2 className="sqi-heading-section">Insights & Product Guides</h2>
          <p className="sqi-section-desc">
            Expert articles on school supply procurement, office ergonomics, and certified child-safe art techniques.
          </p>
        </div>

        <div className="sqi-insights-grid">
          {INSIGHT_ARTICLES.map((article) => (
            <article key={article.id} className="sqi-article-card">
              <div className="sqi-article-img-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  className="sqi-article-img"
                  loading="lazy"
                />
              </div>

              <div className="sqi-article-body">
                <div className="sqi-article-meta">
                  <span className="sqi-badge sqi-badge-orange" style={{ padding: '2px 8px', fontSize: '0.72rem' }}>
                    {article.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    {article.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="sqi-article-title">
                  {article.title}
                </h3>

                <p className="sqi-article-excerpt">
                  {article.excerpt}
                </p>

                <button
                  type="button"
                  className="sqi-btn sqi-btn-ghost sqi-btn-sm"
                  onClick={() => setSelectedArticle(article)}
                  style={{ alignSelf: 'flex-start', paddingLeft: 0, color: 'var(--sqi-orange)' }}
                  id={`btn-read-${article.slug}`}
                >
                  <span>Read Full Guide</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div 
          className="sqi-modal-backdrop"
          onClick={() => setSelectedArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="sqi-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '780px', padding: '40px' }}
          >
            <button
              type="button"
              className="sqi-modal-close"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '16px' }}>
              <span className="sqi-badge sqi-badge-orange">
                {selectedArticle.category}
              </span>
            </div>

            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '16px' }}>
              {selectedArticle.title}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.84rem', color: 'var(--sqi-text-muted)', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--sqi-border-subtle)' }}>
              <span>By {selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div style={{ borderRadius: 'var(--sqi-radius-md)', overflow: 'hidden', marginBottom: '24px', maxHeight: '340px' }}>
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--sqi-text-secondary)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--sqi-border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="sqi-btn sqi-btn-primary sqi-btn-sm"
                onClick={() => setSelectedArticle(null)}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
