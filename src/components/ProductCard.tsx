import React from 'react';
import { Product } from '../types';
import { Eye, ArrowRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onInquire: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onInquire,
}) => {
  return (
    <div className="sqi-card-product" id={`product-card-${product.sku}`}>
      <div 
        className="sqi-product-img-box"
        onClick={() => onSelect(product)}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onSelect(product)}
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="sqi-product-img"
          loading="lazy"
        />

        <div className="sqi-card-badges">
          {product.isNew && (
            <span className="sqi-badge sqi-badge-orange">
              <Sparkles size={12} />
              New Item
            </span>
          )}
          {product.isFeatured && (
            <span className="sqi-badge sqi-badge-neutral">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="sqi-product-body">
        <div className="sqi-product-meta">
          <span className="sqi-product-brand-tag">{product.brand}</span>
          <span className="sqi-product-sku">{product.sku}</span>
        </div>

        <h3 
          className="sqi-product-name"
          onClick={() => onSelect(product)}
          style={{ cursor: 'pointer' }}
          title={product.name}
        >
          {product.name}
        </h3>

        <p className="sqi-product-desc">{product.shortDesc}</p>

        <div className="sqi-product-footer">
          <button
            type="button"
            className="sqi-btn sqi-btn-outline sqi-btn-sm"
            onClick={() => onSelect(product)}
            id={`btn-view-${product.sku}`}
            style={{ width: '100%' }}
          >
            <Eye size={15} />
            <span>View Product</span>
          </button>
        </div>
      </div>
    </div>
  );
};
