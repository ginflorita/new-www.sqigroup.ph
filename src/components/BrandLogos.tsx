import React from 'react';

// 1. SQI Flagship Logo (Green oval border, textured red pill, SQI serif letters, QUALITY PRODUCTS)
export const SQILogo: React.FC<{ height?: number }> = ({ height = 54 }) => {
  return (
    <div 
      className="sqi-brand-logo-wrap" 
      title="SQI Quality Products"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 320 125" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SQI Logo"
      >
        {/* Outer Green Ellipse */}
        <ellipse cx="150" cy="48" rx="104" ry="42" fill="#008844" />
        
        {/* Inner Red Ellipse */}
        <ellipse cx="150" cy="48" rx="88" ry="30" fill="#E41F26" />
        
        {/* Subtle grid pattern inside red oval */}
        <g opacity="0.22">
          <line x1="85" y1="32" x2="215" y2="32" stroke="#FFFFFF" strokeWidth="1.2" />
          <line x1="80" y1="48" x2="220" y2="48" stroke="#FFFFFF" strokeWidth="1.2" />
          <line x1="90" y1="64" x2="210" y2="64" stroke="#FFFFFF" strokeWidth="1.2" />
          <line x1="105" y1="22" x2="105" y2="74" stroke="#FFFFFF" strokeWidth="1.2" />
          <line x1="128" y1="20" x2="128" y2="76" stroke="#FFFFFF" strokeWidth="1.2" />
          <line x1="150" y1="20" x2="150" y2="76" stroke="#FFFFFF" strokeWidth="1.2" />
          <line x1="172" y1="20" x2="172" y2="76" stroke="#FFFFFF" strokeWidth="1.2" />
          <line x1="195" y1="22" x2="195" y2="74" stroke="#FFFFFF" strokeWidth="1.2" />
        </g>

        {/* Serif SQI Typography */}
        <g fill="#FFFFFF">
          {/* S */}
          <text 
            x="102" 
            y="60" 
            fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif" 
            fontSize="48" 
            fontWeight="bold" 
            fontStyle="italic"
            textAnchor="middle"
          >
            S
          </text>
          {/* Q */}
          <text 
            x="150" 
            y="62" 
            fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif" 
            fontSize="54" 
            fontWeight="bold" 
            fontStyle="italic"
            textAnchor="middle"
          >
            Q
          </text>
          {/* I */}
          <text 
            x="194" 
            y="60" 
            fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif" 
            fontSize="48" 
            fontWeight="bold" 
            fontStyle="italic"
            textAnchor="middle"
          >
            I
          </text>
        </g>

        {/* Registered symbol (R) */}
        <text 
          x="254" 
          y="28" 
          fontSize="14" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif" 
          fill="#111111"
        >
          ®
        </text>

        {/* QUALITY PRODUCTS bottom banner text */}
        <text 
          x="150" 
          y="114" 
          fontFamily="'Arial Black', 'Outfit', sans-serif" 
          fontSize="17" 
          fontWeight="900" 
          letterSpacing="0.16em"
          textAnchor="middle"
          fill="#111111"
        >
          QUALITY PRODUCTS
        </text>
      </svg>
    </div>
  );
};

// 2. KIDART Logo (Clean authentic 3D block letters with vibrant paint splatters, NO dashed lines, NO harsh outlines)
export const KidartLogo: React.FC<{ height?: number }> = ({ height = 52 }) => {
  return (
    <div 
      className="sqi-brand-logo-wrap" 
      title="KIDART Child-Safe Certified Art Supplies"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 360 110" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="KIDART Logo"
      >
        {/* Dynamic smooth paint splash blobs behind letters */}
        <g opacity="0.95">
          {/* Purple Splash on Left */}
          <path d="M 45 48 C 22 24, 48 10, 72 22 C 92 8, 114 28, 98 56 C 112 78, 84 94, 62 84 C 42 96, 22 78, 32 62 Z" fill="#6B21A8" />
          <circle cx="26" cy="32" r="5" fill="#6B21A8" />
          <circle cx="48" cy="12" r="4.5" fill="#6B21A8" />

          {/* Royal Blue Splatter */}
          <path d="M 88 34 C 108 14, 138 20, 148 38 C 168 28, 178 54, 164 74 C 148 90, 118 84, 104 68 Z" fill="#2563EB" />
          <circle cx="106" cy="16" r="4" fill="#2563EB" />

          {/* Green Splatter */}
          <path d="M 158 24 C 178 8, 218 14, 228 38 C 248 34, 258 58, 244 78 C 218 94, 184 84, 174 58 Z" fill="#10B981" />
          <circle cx="194" cy="10" r="4.5" fill="#10B981" />
          <circle cx="222" cy="14" r="3.5" fill="#84CC16" />

          {/* Red/Orange Splatter on Right */}
          <path d="M 238 34 C 262 14, 306 18, 320 44 C 340 48, 350 72, 326 92 C 296 102, 258 88, 248 68 Z" fill="#EF4444" />
          <circle cx="334" cy="38" r="4.5" fill="#EF4444" />
          <circle cx="348" cy="62" r="3" fill="#EF4444" />
          <circle cx="324" cy="20" r="4" fill="#F97316" />
        </g>

        {/* 3D Cast Shadow / Depth Layer for KID ART */}
        <g transform="translate(4, 5)">
          <text 
            x="48" 
            y="76" 
            fontFamily="'Impact', 'Arial Black', sans-serif" 
            fontSize="64" 
            fontWeight="900" 
            letterSpacing="-0.01em"
            fill="#1E293B"
          >
            KID
          </text>
          <text 
            x="172" 
            y="76" 
            fontFamily="'Impact', 'Arial Black', sans-serif" 
            fontSize="64" 
            fontWeight="900" 
            letterSpacing="-0.01em"
            fill="#B45309"
          >
            ART
          </text>
        </g>

        {/* Authentic Clean White KID */}
        <text 
          x="48" 
          y="74" 
          fontFamily="'Impact', 'Arial Black', sans-serif" 
          fontSize="64" 
          fontWeight="900" 
          letterSpacing="-0.01em"
          fill="#FFFFFF"
        >
          KID
        </text>

        {/* Authentic Clean Golden Yellow ART */}
        <text 
          x="172" 
          y="74" 
          fontFamily="'Impact', 'Arial Black', sans-serif" 
          fontSize="64" 
          fontWeight="900" 
          letterSpacing="-0.01em"
          fill="#FACC15"
        >
          ART
        </text>
      </svg>
    </div>
  );
};

// 3. FlexOffice Logo (Authentic 5-petal pinwheel icon + clean flexoffice® typography)
export const FlexOfficeLogo: React.FC<{ height?: number }> = ({ height = 46 }) => {
  return (
    <div 
      className="sqi-brand-logo-wrap" 
      title="FlexOffice Ergonomic Writing Dynamics"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 440 115" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="FlexOffice Logo"
      >
        {/* Geometric pinwheel flower icon on the left */}
        <g transform="translate(56, 58)">
          {/* Petal 1: Slate Grey (Top-Left) */}
          <path 
            d="M 0 -10 C 4 -28, 16 -44, 12 -54 C 8 -60, -12 -54, -22 -34 C -30 -18, -16 -6, 0 -10 Z" 
            fill="#7D8389" 
          />
          {/* Petal 2: Royal Blue (Top-Right) */}
          <path 
            d="M 8 -5 C 28 -5, 44 8, 52 4 C 58 0, 52 -20, 32 -32 C 16 -40, 5 -26, 8 -5 Z" 
            fill="#005BA9" 
          />
          {/* Petal 3: Emerald Green (Right-Bottom) */}
          <path 
            d="M 8 7 C 8 26, -5 42, -1 50 C 3 56, 22 50, 34 30 C 42 14, 28 3, 8 7 Z" 
            fill="#009E49" 
          />
          {/* Petal 4: Crimson Red (Bottom-Left) */}
          <path 
            d="M -5 9 C -24 9, -40 -3, -48 1 C -54 5, -48 24, -28 36 C -12 44, -1 30, -5 9 Z" 
            fill="#E31B23" 
          />
          {/* Petal 5: Bright Yellow (Left) */}
          <path 
            d="M -9 -3 C -9 -22, 3 -38, -1 -46 C -5 -52, -24 -46, -36 -26 C -44 -10, -30 1, -9 -3 Z" 
            fill="#FFC20E" 
          />
          {/* Center circular void */}
          <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
        </g>

        {/* Typography: flexoffice */}
        <text 
          x="124" 
          y="74" 
          fontFamily="'Arial Black', 'Montserrat', 'Helvetica Neue', sans-serif" 
          fontSize="56" 
          fontWeight="900" 
          fontStyle="italic"
          letterSpacing="-0.04em"
          fill="#1A1A1A"
        >
          flexoffice
        </text>

        {/* Clean Registered Trademark ® */}
        <text 
          x="414" 
          y="42" 
          fontSize="18" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif" 
          fill="#1A1A1A"
        >
          ®
        </text>
      </svg>
    </div>
  );
};

// 4. Colokit Logo (Yellow bean capsule, red 'colo', black 'kit', curved 'colors bring up intelligence' tagline)
export const ColokitLogo: React.FC<{ height?: number }> = ({ height = 50 }) => {
  return (
    <div 
      className="sqi-brand-logo-wrap" 
      title="Colokit Art & Coloring Essentials"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 400 120" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Colokit Logo"
      >
        {/* Yellow Peanut Capsule shape */}
        <g transform="translate(14, 10)">
          {/* Main bean path */}
          <path 
            d="M 38 10 C 75 10, 85 24, 115 24 C 145 24, 160 10, 195 10 C 225 10, 240 28, 240 50 C 240 72, 222 88, 195 88 C 160 88, 145 74, 115 74 C 85 74, 75 88, 38 88 C 12 88, 0 70, 0 50 C 0 28, 12 10, 38 10 Z" 
            fill="#FFD200" 
          />
          {/* White glossy reflection arc */}
          <path 
            d="M 28 18 C 18 24, 14 36, 14 46" 
            stroke="#FFFFFF" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          
          {/* Registered (R) top right of bean */}
          <text 
            x="248" 
            y="22" 
            fontSize="12" 
            fontWeight="bold" 
            fontFamily="Arial, sans-serif" 
            fill="#1D1D1B"
          >
            ®
          </text>

          {/* 'colo' in vibrant red */}
          <text 
            x="24" 
            y="62" 
            fontFamily="'Fredoka', 'Comfortaa', 'Arial Black', sans-serif" 
            fontSize="46" 
            fontWeight="900" 
            letterSpacing="-0.02em"
            fill="#E31B23"
          >
            colo
          </text>
          
          {/* 'kit' in deep black */}
          <text 
            x="132" 
            y="62" 
            fontFamily="'Fredoka', 'Comfortaa', 'Arial Black', sans-serif" 
            fontSize="46" 
            fontWeight="900" 
            letterSpacing="-0.02em"
            fill="#1D1D1B"
          >
            kit
          </text>
        </g>

        {/* Tagline script underneath: "colors bring up intelligence" */}
        <g transform="translate(188, 102)">
          {/* Little yellow lightbulb over 'i' */}
          <circle cx="80" cy="-26" r="4" fill="#FFD200" />

          {/* Script tagline */}
          <text 
            x="0" 
            y="0" 
            fontFamily="'Caveat', 'Playball', 'Brush Script MT', cursive, sans-serif" 
            fontSize="25" 
            fontWeight="bold" 
            fontStyle="italic"
            fill="#E31B23"
          >
            colors bring up intelligence
          </text>
        </g>
      </svg>
    </div>
  );
};

// 5. HI-CRAFT Logo (Authentic smiling lightbulb mascot, red ribbon with HI-CRAFT, waving hand mascot)
export const HiCraftsLogo: React.FC<{ height?: number }> = ({ height = 50 }) => {
  return (
    <div 
      className="sqi-brand-logo-wrap" 
      title="HI-CRAFT Joyful DIY & Crafting Supplies"
      style={{ height: `${height}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg 
        viewBox="0 0 440 115" 
        height={height} 
        style={{ width: 'auto', height: `${height}px`, maxHeight: '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="HI-CRAFT Logo"
      >
        {/* Lightbulb Mascot on Left */}
        <g transform="translate(42, 54)">
          {/* Radiant light rays */}
          <line x1="-30" y1="-16" x2="-22" y2="-10" stroke="#E11D23" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="-25" y1="-32" x2="-18" y2="-22" stroke="#E11D23" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="0" y1="-40" x2="0" y2="-28" stroke="#E11D23" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="25" y1="-32" x2="18" y2="-22" stroke="#E11D23" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="30" y1="-16" x2="22" y2="-10" stroke="#E11D23" strokeWidth="3.5" strokeLinecap="round" />

          {/* Bulb head */}
          <circle cx="0" cy="-6" r="26" fill="#FFFFFF" stroke="#E11D23" strokeWidth="5" />
          
          {/* Cute face */}
          <circle cx="-7" cy="-10" r="2.8" fill="#E11D23" />
          <circle cx="7" cy="-10" r="2.8" fill="#E11D23" />
          <path d="M -7 -2 Q 0 6 7 -2" stroke="#E11D23" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          
          {/* Base */}
          <path d="M -9 22 L 0 29 L -9 36 L 0 42" stroke="#E11D23" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Center Red Ribbon Banner */}
        <g>
          <path 
            d="M 92 26 L 318 22 C 324 22, 328 38, 322 66 C 318 80, 324 92, 316 92 L 86 96 C 80 96, 74 80, 80 56 C 84 40, 78 26, 92 26 Z" 
            fill="#E11D23" 
          />
          {/* HI-CRAFT Cursive Script */}
          <text 
            x="202" 
            y="74" 
            fontFamily="'Brush Script MT', 'Caveat', 'Playball', cursive, sans-serif" 
            fontSize="52" 
            fontWeight="bold" 
            fontStyle="italic"
            textAnchor="middle"
            fill="#FFFFFF"
          >
            HI-CRAFT
          </text>
        </g>

        {/* Waving Hand Mascot on Right */}
        <g transform="translate(366, 54)">
          {/* 5-Finger Hand Outline */}
          <path 
            d="M -20 16 C -28 4, -32 -14, -26 -26 C -22 -34, -14 -32, -12 -22 L -10 -10 L -4 -34 C -2 -42, 6 -42, 8 -32 L 10 -10 L 18 -28 C 22 -34, 30 -30, 28 -20 L 24 -4 L 34 -14 C 42 -18, 46 -8, 40 2 C 32 18, 24 34, 10 38 C -4 42, -14 28, -20 16 Z" 
            fill="#FFFFFF" 
            stroke="#E11D23" 
            strokeWidth="5" 
            strokeLinejoin="round" 
          />
          {/* Cute Face in palm */}
          <circle cx="2" cy="8" r="2.8" fill="#E11D23" />
          <circle cx="16" cy="8" r="2.8" fill="#E11D23" />
          <path d="M 0 16 Q 9 24 18 16" stroke="#E11D23" strokeWidth="2.5" fill="#E11D23" />
        </g>
      </svg>
    </div>
  );
};
