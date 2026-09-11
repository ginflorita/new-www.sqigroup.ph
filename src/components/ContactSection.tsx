import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    inquiryType: 'Wholesale & School Bulk Orders',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Does SQI Group sell directly to retail customers or only wholesale?',
      a: 'SQI Group primarily operates as an institutional distributor and supplier to schools, universities, office corporations, and stationery retail chains. However, we also support registered corporate procurement desks and school supply coordinators.',
    },
    {
      q: 'What is the standard delivery turnaround time across the Philippines?',
      a: 'Deliveries within Metro Manila typically dispatch within 24 to 48 hours. Provincial shipments to Luzon, Visayas, and Mindanao are coordinated via trusted commercial freight partners with tracking.',
    },
    {
      q: 'Are all KIDART and Colokit products guaranteed non-toxic?',
      a: 'Yes. Every art product distributed by SQI is independently certified non-toxic under international standards EN71 Parts 1-3 (CE) and ASTM D-4236 (ACMI AP approved). Safety data sheets (MSDS) are available upon request.',
    },
  ];

  return (
    <section className="sqi-section" id="contact" style={{ backgroundColor: 'var(--sqi-bg-surface)' }}>
      <div className="sqi-container">
        <div className="sqi-section-header">
          <div className="sqi-eyebrow">
            <Mail size={14} />
            <span>Connect with SQI Philippines</span>
          </div>
          <h2 className="sqi-heading-section">Contact & Commercial Inquiries</h2>
          <p className="sqi-section-desc">
            Speak directly with our dedicated Philippine sales team for wholesale pricing, 
            DepEd institutional bids, or physical catalog delivery.
          </p>
        </div>

        <div className="sqi-contact-grid">
          {/* Left: Contact Form */}
          <div className="sqi-form-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} id="contact-form">
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '20px' }}>
                  Send an Inquiry
                </h3>

                <div className="sqi-form-row">
                  <div className="sqi-form-group">
                    <label className="sqi-label sqi-label-required">Full Name</label>
                    <input
                      type="text"
                      required
                      className="sqi-input"
                      placeholder="e.g. Juan dela Cruz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="sqi-form-group">
                    <label className="sqi-label sqi-label-required">Email Address</label>
                    <input
                      type="email"
                      required
                      className="sqi-input"
                      placeholder="juan@company.ph"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="sqi-form-row">
                  <div className="sqi-form-group">
                    <label className="sqi-label sqi-label-required">Contact Number</label>
                    <input
                      type="tel"
                      required
                      className="sqi-input"
                      placeholder="+63 9XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="sqi-form-group">
                    <label className="sqi-label">School or Company Name</label>
                    <input
                      type="text"
                      className="sqi-input"
                      placeholder="e.g. Ateneo / ABC Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="sqi-form-row">
                  <div className="sqi-form-group">
                    <label className="sqi-label">Inquiry Category</label>
                    <select
                      className="sqi-select"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="Wholesale & School Bulk Orders">Wholesale & School Bulk Orders</option>
                      <option value="Corporate Office Procurement">Corporate Office Procurement</option>
                      <option value="Retail Dealership / Reseller Inquiry">Retail Dealership / Reseller Inquiry</option>
                      <option value="Request Product Catalog">Request Product Catalog (Physical/PDF)</option>
                      <option value="Technical Specs & Non-Toxic MSDS">Technical Specs & Non-Toxic MSDS</option>
                    </select>
                  </div>

                  <div className="sqi-form-group">
                    <label className="sqi-label sqi-label-required">Subject</label>
                    <input
                      type="text"
                      required
                      className="sqi-input"
                      placeholder="e.g. Quotation for 2026 School Year"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div className="sqi-form-group">
                  <label className="sqi-label sqi-label-required">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="sqi-textarea"
                    placeholder="Tell us about your required items, target delivery timeline, and delivery location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="sqi-btn sqi-btn-primary sqi-btn-lg"
                  style={{ width: '100%', marginTop: '8px' }}
                  id="btn-submit-contact"
                >
                  <Send size={18} />
                  <span>Send Inquiry</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
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
                    margin: '0 auto 20px auto'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '10px' }}>
                  Thank you for reaching out!
                </h3>
                <p style={{ color: 'var(--sqi-text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Your message has been received by our commercial accounts team. A specialist will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="sqi-btn sqi-btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right: Contact Information & FAQs */}
          <div className="sqi-contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '24px' }}>
                SQI Group Int’l. Corp.
              </h3>

              <div className="sqi-contact-detail-item">
                <div className="sqi-contact-detail-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Headquarters & Logistics Center</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--sqi-text-secondary)', marginTop: '2px' }}>
                    Metro Manila Commercial Hub, Philippines
                  </div>
                </div>
              </div>

              <div className="sqi-contact-detail-item">
                <div className="sqi-contact-detail-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Telephone Lines</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--sqi-text-secondary)', marginTop: '2px' }}>
                    +63 (2) 8361-2345 / +63 (2) 8362-9876
                  </div>
                </div>
              </div>

              <div className="sqi-contact-detail-item">
                <div className="sqi-contact-detail-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Email Inquiries</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--sqi-orange)', marginTop: '2px', fontWeight: 600 }}>
                    inquiries@sqigroup.ph
                  </div>
                </div>
              </div>

              <div className="sqi-contact-detail-item">
                <div className="sqi-contact-detail-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Operating Schedule</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--sqi-text-secondary)', marginTop: '2px' }}>
                    Monday – Friday: 8:00 AM – 5:30 PM (PHT)
                  </div>
                </div>
              </div>
            </div>

            {/* Micro FAQ Accordion */}
            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid var(--sqi-border-subtle)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HelpCircle size={16} color="var(--sqi-orange)" />
                <span>Quick Distribution FAQs</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {faqs.map((faq, i) => (
                  <div 
                    key={i}
                    style={{ 
                      borderRadius: 'var(--sqi-radius-sm)',
                      border: '1px solid var(--sqi-border-subtle)',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        backgroundColor: openFaq === i ? 'var(--sqi-bg-subtle)' : '#ffffff',
                      }}
                    >
                      <span>{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '12px 14px', fontSize: '0.84rem', color: 'var(--sqi-text-secondary)', backgroundColor: '#ffffff', borderTop: '1px solid var(--sqi-border-subtle)', lineHeight: 1.5 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
