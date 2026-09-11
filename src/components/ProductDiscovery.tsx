import React, { useState, useMemo } from 'react';
import { Product, CategoryPillar, BrandName, TargetAudience } from '../types';
import { CATEGORIES_LIST, BRANDS_DATA } from '../data/products';
import { ProductCard } from './ProductCard';
import { 
  Search, 
  Filter, 
  X, 
  SlidersHorizontal, 
  RotateCcw, 
  Check, 
  Sparkles,
  BookOpen,
  Briefcase,
  Palette
} from 'lucide-react';

interface ProductDiscoveryProps {
  products: Product[];
  selectedPillar: CategoryPillar | null;
  onClearPillar: () => void;
  onSelectProduct: (product: Product) => void;
  onInquireProduct: (product: Product) => void;
}

export const ProductDiscovery: React.FC<ProductDiscoveryProps> = ({
  products,
  selectedPillar,
  onClearPillar,
  onSelectProduct,
  onInquireProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [selectedBrand, setSelectedBrand] = useState<string>('All Brands');
  const [selectedAudience, setSelectedAudience] = useState<string>('all');
  const [onlyNew, setOnlyNew] = useState<boolean>(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered Products Memo
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Pillar filter if set
      if (selectedPillar && item.pillar !== selectedPillar) {
        return false;
      }

      // Search query filter (name, sku, category, brand, shortDesc, tags)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSku = item.sku.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesBrand = item.brand.toLowerCase().includes(q);
        const matchesDesc = item.shortDesc.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesName && !matchesSku && !matchesCategory && !matchesBrand && !matchesDesc && !matchesTags) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All Products') {
        if (selectedCategory === 'New Items') {
          if (!item.isNew) return false;
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrand !== 'All Brands' && item.brand !== selectedBrand) {
        return false;
      }

      // Target Audience
      if (selectedAudience !== 'all' && !item.audience.includes(selectedAudience as TargetAudience)) {
        return false;
      }

      // Only New Items filter
      if (onlyNew && !item.isNew) {
        return false;
      }

      return true;
    });
  }, [products, selectedPillar, searchQuery, selectedCategory, selectedBrand, selectedAudience, onlyNew]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Products');
    setSelectedBrand('All Brands');
    setSelectedAudience('all');
    setOnlyNew(false);
    onClearPillar();
  };

  const hasActiveFilters = 
    Boolean(searchQuery) || 
    selectedCategory !== 'All Products' || 
    selectedBrand !== 'All Brands' || 
    selectedAudience !== 'all' || 
    onlyNew ||
    Boolean(selectedPillar);

  return (
    <section className="sqi-section" id="catalog" style={{ backgroundColor: 'var(--sqi-bg-page)' }}>
      <div className="sqi-container">
        {/* Section Header */}
        <div className="sqi-section-header">
          <div className="sqi-eyebrow">
            <SlidersHorizontal size={14} />
            <span>Intuitive Catalog & Discovery System</span>
          </div>
          <h2 className="sqi-heading-section">Product Catalog</h2>
          <p className="sqi-section-desc">
            Explore SQI's comprehensive range of school supplies, office stationery, and fine art materials.
            Search by product name, SKU code, brand, or specific category.
          </p>
        </div>

        {/* Discovery Control Center */}
        <div className="sqi-discovery-bar">
          {/* Top Search & Filter Trigger */}
          <div className="sqi-discovery-search-row">
            <div className="sqi-search-input-wrap">
              <Search size={18} className="sqi-search-icon" />
              <input
                type="text"
                className="sqi-search-input"
                placeholder="Search products by name, SKU (e.g. SQI-ST-50), brand, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="catalog-search-input"
                aria-label="Search catalog"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="sqi-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search input"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Brand Dropdown / Fast Selector */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <select
                className="sqi-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                style={{ height: '48px', minWidth: '150px' }}
                aria-label="Filter by Brand"
                id="filter-brand-select"
              >
                <option value="All Brands">All Brands</option>
                {BRANDS_DATA.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.primaryFocus.slice(0, 20)}...)
                  </option>
                ))}
              </select>

              {/* Target Audience Selector */}
              <select
                className="sqi-select"
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
                style={{ height: '48px', minWidth: '160px' }}
                aria-label="Filter by Intended Audience"
                id="filter-audience-select"
              >
                <option value="all">All Sectors</option>
                <option value="school">Schools & Students</option>
                <option value="office">Offices & Corporate</option>
                <option value="arts">Arts & Crafts</option>
              </select>

              {/* New Items Toggle Button */}
              <button
                type="button"
                className={`sqi-chip ${onlyNew ? 'active' : ''}`}
                onClick={() => setOnlyNew(!onlyNew)}
                style={{ height: '48px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                id="filter-new-toggle"
              >
                <Sparkles size={15} />
                <span>New Only</span>
              </button>
            </div>
          </div>

          {/* Category Chips Scroller */}
          <div className="sqi-filter-chips-row" role="tablist" aria-label="Category Filters">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`sqi-chip ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Filter Indicators & Result Count */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '12px',
              paddingTop: '16px',
              marginTop: '12px',
              borderTop: '1px solid var(--sqi-border-subtle)',
              fontSize: '0.88rem',
              color: 'var(--sqi-text-secondary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span>
                Showing <strong>{filteredProducts.length}</strong> products
              </span>

              {selectedPillar && (
                <span className="sqi-badge sqi-badge-orange">
                  Pillar: {selectedPillar}
                  <X size={12} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={onClearPillar} />
                </span>
              )}

              {selectedCategory !== 'All Products' && (
                <span className="sqi-badge sqi-badge-neutral">
                  Category: {selectedCategory}
                  <X size={12} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => setSelectedCategory('All Products')} />
                </span>
              )}

              {selectedBrand !== 'All Brands' && (
                <span className="sqi-badge sqi-badge-neutral">
                  Brand: {selectedBrand}
                  <X size={12} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => setSelectedBrand('All Brands')} />
                </span>
              )}

              {selectedAudience !== 'all' && (
                <span className="sqi-badge sqi-badge-neutral">
                  Sector: {selectedAudience}
                  <X size={12} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => setSelectedAudience('all')} />
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                className="sqi-btn-ghost sqi-btn-sm"
                onClick={handleResetFilters}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--sqi-orange)' }}
                id="catalog-reset-filters-btn"
              >
                <RotateCcw size={14} />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="sqi-catalog-grid" id="catalog-products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onInquire={onInquireProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div 
            style={{ 
              textAlign: 'center', 
              padding: '64px 20px', 
              backgroundColor: 'var(--sqi-bg-surface)', 
              borderRadius: 'var(--sqi-radius-lg)',
              border: '1px solid var(--sqi-border-subtle)',
              maxWidth: '560px',
              margin: '0 auto'
            }}
          >
            <div 
              style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--sqi-orange-light)', 
                color: 'var(--sqi-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <Search size={28} />
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>No matching products found</h3>
            <p style={{ color: 'var(--sqi-text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
              We could not find any products matching your current search criteria. Try clearing some filters or searching with a different keyword or SKU.
            </p>
            <button
              type="button"
              className="sqi-btn sqi-btn-primary"
              onClick={handleResetFilters}
            >
              <RotateCcw size={16} />
              <span>Clear Search & Show All Items</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
