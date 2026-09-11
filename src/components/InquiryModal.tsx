import React, { useState, useEffect } from 'react';
import { Product, InquiryFormData } from '../types';
import { X, Send, CheckCircle2, Building, Mail, Phone, User, MessageSquare, Package } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  product,
  onClose,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: product ? 'Specific Product Inquiry' : 'Bulk School Supply',
    productSku: product?.sku || '',
    productName: product?.name || '',
    estimatedQuantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'Specific Product Inquiry',
        productSku: product.sku,
        productName: product.name,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        productSku: '',
        productName: '',
      }));
    }
    setSubmitted(false);
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `SQI-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNumber(ref);
    setSubmitted(true);
  };

  return (
    <div 
      className="sqi-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Product Inquiry Form"
    >
      <div 
        className="sqi-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px', padding: '36px' }}
      >
        <button
          type="button"
          className="sqi-modal-close"
          onClick={onClose}
          aria-label="Close inquiry modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="sqi-badge sqi-badge-orange" style={{ marginBottom: '8px' }}>
                SQI Distribution & Wholesale Desk
              </span>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 800 }}>
                {product ? `Inquire: ${product.name}` : 'Request Catalog & Wholesale Quotation'}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--sqi-text-secondary)', marginTop: '4px' }}>
                Connect with our commercial distribution team for bulk school orders, corporate accounts, 
                dealership applications, or specific SKU specifications.
              </p>
            </div>

            {product && (
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '12px 16px', 
                  backgroundColor: 'var(--sqi-bg-subtle)', 
                  borderRadius: 'var(--sqi-radius-sm)',
                  marginBottom: '20px',
                  border: '1px solid var(--sqi-border-subtle)'
                }}
              >
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{product.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--sqi-orange)', fontFamily: 'monospace' }}>
                    SKU: {product.sku} • {product.brand}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="sqi-form-row">
                <div className="sqi-form-group">
                  <label className="sqi-label sqi-label-required">Full Name</label>
                  <input
                    type="text"
                    required
                    className="sqi-input"
                    placeholder="e.g. Maria Santos"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="sqi-form-group">
                  <label className="sqi-label sqi-label-required">Business Email</label>
                  <input
                    type="email"
                    required
                    className="sqi-input"
                    placeholder="name@school-or-company.ph"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="sqi-form-row">
                <div className="sqi-form-group">
                  <label className="sqi-label sqi-label-required">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    className="sqi-input"
                    placeholder="+63 917 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="sqi-form-group">
                  <label className="sqi-label">School / Company / Store</label>
                  <input
                    type="text"
                    className="sqi-input"
                    placeholder="e.g. St. Jude Academy / Apex Corp"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>
              </div>

              <div className="sqi-form-row">
                <div className="sqi-form-group">
                  <label className="sqi-label">Inquiry Purpose</label>
                  <select
                    className="sqi-select"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                  >
                    <option value="Bulk School Supply">Bulk School Supply / DepEd Procurement</option>
                    <option value="Corporate Office Accounts">Corporate Office Account Supply</option>
                    <option value="Retail Distribution & Dealership">Retail Bookstore Dealership / Reseller</option>
                    <option value="Specific Product Inquiry">Specific Product Inquiry</option>
                    <option value="Catalog Request">Full Printed / PDF Catalog Request</option>
                    <option value="General">General Inquiries</option>
                  </select>
                </div>

                <div className="sqi-form-group">
                  <label className="sqi-label">Estimated Volume (Optional)</label>
                  <input
                    type="text"
                    className="sqi-input"
                    placeholder="e.g. 500 units / 50 cartons"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                  />
                </div>
              </div>

              <div className="sqi-form-group">
                <label className="sqi-label sqi-label-required">Message / Order Requirements</label>
                <textarea
                  required
                  rows={4}
                  className="sqi-textarea"
                  placeholder="Please specify delivery destination (Metro Manila or provincial), preferred delivery dates, or technical inquiries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="sqi-btn sqi-btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
                id="inquiry-form-submit-btn"
              >
                <Send size={16} />
                <span>Send Official Inquiry</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div style={{ textAlign: 'center', padding: '24px 8px' }}>
            <div 
              style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                backgroundColor: '#dcfce7', 
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>
              Inquiry Successfully Dispatched!
            </h3>

            <p style={{ color: 'var(--sqi-text-secondary)', marginBottom: '16px', fontSize: '0.95rem' }}>
              Thank you, <strong>{formData.fullName}</strong>. Your request has been logged under reference:
            </p>

            <div 
              style={{ 
                display: 'inline-block',
                padding: '8px 18px', 
                backgroundColor: 'var(--sqi-bg-subtle)', 
                borderRadius: 'var(--sqi-radius-sm)',
                fontFamily: 'monospace',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--sqi-orange)',
                border: '1px solid var(--sqi-border-medium)',
                marginBottom: '20px'
              }}
            >
              {referenceNumber}
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--sqi-text-muted)', marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px auto' }}>
              An SQI distribution representative will review your requirements and respond to <strong>{formData.email}</strong> within 1 business day.
            </p>

            <button
              type="button"
              className="sqi-btn sqi-btn-primary"
              onClick={onClose}
              style={{ minWidth: '180px' }}
            >
              Return to Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
