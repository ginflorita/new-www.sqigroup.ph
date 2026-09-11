import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

export const CreativeInspiration: React.FC = () => {
  const scenes = [
    {
      title: 'Classroom Wonder & Tactile Art',
      subtitle: 'KIDART non-toxic clay & washable crayons encouraging early fine motor skills.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Executive Focus & Document Mastery',
      subtitle: 'Heavy-duty SQI staplers, weighted dispensers, and precision cutting tools.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Collaborative Lecture & Brainstorming',
      subtitle: 'FlexOffice low-odor dry-erase markers on high-clarity magnetic boards.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="sqi-section" style={{ backgroundColor: 'var(--sqi-bg-surface)' }}>
      <div className="sqi-container">
        <div className="sqi-section-header">
          <div className="sqi-eyebrow">
            <Camera size={14} />
            <span>Product In Use</span>
          </div>
          <h2 className="sqi-heading-section">Crafted for Real Workspaces & Classrooms</h2>
          <p className="sqi-section-desc">
            See how SQI tools seamlessly support daily focus, teaching excellence, and artistic exploration across the country.
          </p>
        </div>

        <div className="sqi-inspiration-grid">
          {scenes.map((scene, idx) => (
            <div key={idx} className="sqi-inspiration-item">
              <img
                src={scene.image}
                alt={scene.title}
                className="sqi-inspiration-img"
                loading="lazy"
              />
              <div className="sqi-inspiration-overlay">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '4px' }}>
                  {scene.title}
                </h3>
                <p style={{ fontSize: '0.84rem', opacity: 0.9, lineHeight: 1.4 }}>
                  {scene.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
