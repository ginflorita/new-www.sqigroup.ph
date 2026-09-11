import React from 'react';

// 1. National Book Store Logo
export const NationalBookStoreLogo: React.FC<{ height?: number }> = ({ height = 36 }) => {
  return (
    <div 
      className="sqi-trusted-logo-item" 
      title="National Book Store"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 320 85" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="National Book Store"
      >
        {/* National script typography */}
        <g fill="#E11D23">
          <text 
            x="8" 
            y="54" 
            fontFamily="'Brush Script MT', 'Brush Script Std', 'Caveat', 'Playball', cursive, sans-serif" 
            fontSize="62" 
            fontWeight="bold" 
            fontStyle="italic"
            letterSpacing="-0.02em"
          >
            National
          </text>
          {/* Registered Trademark symbol */}
          <circle cx="305" cy="18" r="8" stroke="#E11D23" strokeWidth="1.5" fill="none" />
          <text x="305" y="21.5" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">R</text>
          
          {/* BOOK STORE block caps */}
          <text 
            x="142" 
            y="74" 
            fontFamily="'Outfit', 'Plus Jakarta Sans', Arial, sans-serif" 
            fontSize="14.5" 
            fontWeight="900" 
            letterSpacing="0.26em"
          >
            BOOK STORE
          </text>
        </g>
      </svg>
    </div>
  );
};

// 2. Pandayan Bookshop Logo
export const PandayanLogo: React.FC<{ height?: number }> = ({ height = 36 }) => {
  return (
    <div 
      className="sqi-trusted-logo-item" 
      title="Pandayan Bookshop"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 330 75" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Pandayan Bookshop"
      >
        {/* Round Emblem with Gold & Maroon */}
        <g transform="translate(10, 6)">
          <circle cx="32" cy="32" r="30" fill="#751125" />
          <circle cx="32" cy="32" r="28" fill="#F4AF23" />
          <path 
            d="M32 4 C47 4 58 16 58 32 C58 48 44 58 32 58 C22 58 14 50 14 42 C14 34 22 28 32 28 C42 28 48 34 48 40" 
            fill="#751125" 
          />
          <circle cx="26" cy="18" r="4" fill="#F4AF23" />
          <path 
            d="M20 44 C26 40 32 46 38 43 C42 41 44 36 48 38 C45 42 41 45 36 46 C30 47 24 49 20 44 Z" 
            fill="#F4AF23" 
          />
        </g>

        {/* Brand Text */}
        <text 
          x="88" 
          y="48" 
          fill="#751125" 
          fontFamily="'Cinzel', 'Georgia', 'Times New Roman', serif" 
          fontSize="31" 
          fontWeight="bold"
          letterSpacing="0.02em"
        >
          Pandayan Bookshop
        </text>
      </svg>
    </div>
  );
};

// 3. Office Warehouse Logo
export const OfficeWarehouseLogo: React.FC<{ height?: number }> = ({ height = 36 }) => {
  return (
    <div 
      className="sqi-trusted-logo-item" 
      title="Office Warehouse"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 170 85" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Office Warehouse"
      >
        {/* Yellow Card Base */}
        <rect x="15" y="4" width="140" height="76" rx="4" fill="#FED100" />
        
        {/* White Slanted Note */}
        <g transform="rotate(-3 85 42)">
          <rect x="24" y="9" width="118" height="66" rx="2" fill="#FFFFFF" stroke="#222222" strokeWidth="1.5" />
          
          {/* office warehouse text */}
          <text 
            x="36" 
            y="29" 
            fill="#111111" 
            fontFamily="'Arial Black', 'Impact', sans-serif" 
            fontSize="18" 
            fontWeight="900"
            letterSpacing="-0.03em"
          >
            office
          </text>
          <text 
            x="36" 
            y="48" 
            fill="#111111" 
            fontFamily="'Arial Black', 'Impact', sans-serif" 
            fontSize="18" 
            fontWeight="900"
            letterSpacing="-0.03em"
          >
            ware
          </text>
          <text 
            x="36" 
            y="66" 
            fill="#111111" 
            fontFamily="'Arial Black', 'Impact', sans-serif" 
            fontSize="18" 
            fontWeight="900"
            letterSpacing="-0.03em"
          >
            house
          </text>
          
          {/* Registered (R) */}
          <circle cx="118" cy="66" r="3.5" stroke="#111111" strokeWidth="0.8" fill="none" />
          <text x="118" y="68.5" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">R</text>
        </g>

        {/* Paper Clip in upper left corner */}
        <g transform="translate(26, 6) rotate(-10)">
          <path 
            d="M 6 4 L 6 36 A 5 5 0 0 0 16 36 L 16 10 A 3.5 3.5 0 0 0 9 10 L 9 32" 
            fill="none" 
            stroke="#1E1E1E" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <path 
            d="M 6 4 L 6 36 A 5 5 0 0 0 16 36 L 16 10 A 3.5 3.5 0 0 0 9 10 L 9 32" 
            fill="none" 
            stroke="#FED100" 
            strokeWidth="1.6" 
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

// 4. Expressions Logo
export const ExpressionsLogo: React.FC<{ height?: number }> = ({ height = 36 }) => {
  return (
    <div 
      className="sqi-trusted-logo-item" 
      title="Expressions"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 280 85" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Expressions"
      >
        {/* Green Rounded Card */}
        <rect x="6" y="8" width="268" height="52" rx="10" fill="#00793D" />

        {/* Red Arc Swoop */}
        <path 
          d="M 40 56 Q 140 0 220 38" 
          stroke="#DE2128" 
          strokeWidth="4" 
          fill="none" 
          strokeLinecap="round" 
        />
        
        {/* Red Star at end of arc */}
        <polygon 
          points="223,32 225,37 230,37 226,40 227,45 223,42 219,45 220,40 216,37 221,37" 
          fill="#DE2128" 
        />

        {/* Expressions Text */}
        <text 
          x="138" 
          y="45" 
          fill="#FFFFFF" 
          fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif" 
          fontSize="30" 
          fontWeight="900" 
          fontStyle="italic"
          textAnchor="middle"
        >
          Expressions
        </text>

        {/* Tagline */}
        <text 
          x="140" 
          y="77" 
          fill="#2B2B2B" 
          fontFamily="'Plus Jakarta Sans', sans-serif" 
          fontSize="13" 
          fontWeight="600" 
          letterSpacing="0.14em"
          textAnchor="middle"
        >
          school • work • life
        </text>
      </svg>
    </div>
  );
};

// 5. Gaisano Grand Group Logo
export const GaisanoGrandLogo: React.FC<{ height?: number }> = ({ height = 36 }) => {
  return (
    <div 
      className="sqi-trusted-logo-item" 
      title="Gaisano Grand Group"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 240 85" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Gaisano Grand Group"
      >
        {/* Double Loop Emblem */}
        <g fill="#001F5C">
          {/* Left loop */}
          <circle cx="95" cy="22" r="16" stroke="#001F5C" strokeWidth="5.5" fill="none" />
          {/* Right loop */}
          <circle cx="145" cy="22" r="16" stroke="#001F5C" strokeWidth="5.5" fill="none" />
          {/* Horizontal connecting bar */}
          <rect x="105" y="19" width="30" height="6" rx="2" fill="#001F5C" />
          
          {/* GAISANO */}
          <text 
            x="120" 
            y="52" 
            fontSize="16" 
            fontWeight="900" 
            fontFamily="'Outfit', sans-serif" 
            letterSpacing="0.12em" 
            textAnchor="middle"
          >
            GAISANO
          </text>

          {/* GRAND with underline */}
          <text 
            x="120" 
            y="70" 
            fontSize="19" 
            fontWeight="900" 
            fontFamily="'Outfit', sans-serif" 
            letterSpacing="0.08em" 
            textAnchor="middle"
          >
            GRAND
          </text>
          
          {/* Horizontal rule between GRAND and GROUP */}
          <line x1="86" y1="73" x2="154" y2="73" stroke="#001F5C" strokeWidth="1.2" />

          {/* GROUP */}
          <text 
            x="120" 
            y="82" 
            fontSize="9" 
            fontWeight="800" 
            fontFamily="'Outfit', sans-serif" 
            letterSpacing="0.32em" 
            textAnchor="middle"
          >
            GROUP
          </text>
        </g>
      </svg>
    </div>
  );
};

// Continuous Sliding Logo Marquee Component
export const TrustedByMarquee: React.FC = () => {
  const logos = [
    { name: 'National Book Store', component: <NationalBookStoreLogo height={34} /> },
    { name: 'Pandayan Bookshop', component: <PandayanLogo height={32} /> },
    { name: 'Office Warehouse', component: <OfficeWarehouseLogo height={38} /> },
    { name: 'Expressions', component: <ExpressionsLogo height={34} /> },
    { name: 'Gaisano Grand Group', component: <GaisanoGrandLogo height={34} /> },
  ];

  return (
    <div className="sqi-trusted-marquee-wrap" aria-label="Trusted nationwide bookstore and office retail partners">
      <div className="sqi-trusted-marquee-track">
        {/* Set 1 */}
        {logos.map((item, idx) => (
          <div key={`logo-1-${idx}`} className="sqi-trusted-item">
            {item.component}
          </div>
        ))}
        {/* Set 2 (for seamless endless loop) */}
        {logos.map((item, idx) => (
          <div key={`logo-2-${idx}`} className="sqi-trusted-item">
            {item.component}
          </div>
        ))}
        {/* Set 3 (for wide resolution screens) */}
        {logos.map((item, idx) => (
          <div key={`logo-3-${idx}`} className="sqi-trusted-item">
            {item.component}
          </div>
        ))}
      </div>
    </div>
  );
};

