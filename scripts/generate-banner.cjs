const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

// Create 1920x1080 banner SVG matching the exact visual uploaded by the user
function generateBannerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#cc0808"/>
      <stop offset="45%" stop-color="#a80505"/>
      <stop offset="85%" stop-color="#730303"/>
      <stop offset="100%" stop-color="#4a0202"/>
    </radialGradient>

    <!-- Concentric Sunburst Arcs Gradients -->
    <linearGradient id="arcOuter" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d33c16"/>
      <stop offset="100%" stop-color="#b52608"/>
    </linearGradient>
    <linearGradient id="arcMid" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ea5e10"/>
      <stop offset="100%" stop-color="#d64005"/>
    </linearGradient>
    <linearGradient id="arcInner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="60%" stop-color="#ea6e0b"/>
      <stop offset="100%" stop-color="#d94b05"/>
    </linearGradient>
    <linearGradient id="arcCenter" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>

    <!-- Bottom Wave Gradient -->
    <linearGradient id="bottomWave" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e87009"/>
      <stop offset="45%" stop-color="#f59e0b"/>
      <stop offset="80%" stop-color="#d96304"/>
      <stop offset="100%" stop-color="#b84602"/>
    </linearGradient>

    <!-- Halftone Pattern -->
    <pattern id="halftone" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="3.2" fill="#000000" opacity="0.14"/>
    </pattern>
    <pattern id="halftoneGold" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="2.8" fill="#8c3202" opacity="0.25"/>
    </pattern>

    <!-- Drop Shadows -->
    <filter id="textDropShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-color="#420101" flood-opacity="0.9"/>
    </filter>
    <filter id="ctaShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
    <filter id="productShadow" x="-20%" y="-10%" width="140%" height="130%">
      <feDropShadow dx="12" dy="24" stdDeviation="18" flood-color="#260101" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- 1. BASE BACKGROUND -->
  <rect width="1920" height="1080" fill="url(#bgGlow)"/>

  <!-- Crease/Texture Highlights & Shadows -->
  <path d="M 0,0 Q 480,240 960,120 T 1920,40 L 1920,0 Z" fill="#ffffff" opacity="0.05"/>
  <path d="M 0,400 Q 600,600 1200,450 T 1920,550 L 1920,700 Q 1300,580 700,720 Z" fill="#000000" opacity="0.12"/>
  <rect width="1920" height="1080" fill="url(#halftone)" opacity="0.65"/>

  <!-- 2. RADIATING CONCENTRIC ARCS -->
  <!-- Center of circles located at approx x: 1350, y: 750 -->
  <g transform="translate(1350, 750)">
    <circle r="920" fill="none" stroke="url(#arcOuter)" stroke-width="110" opacity="0.95"/>
    <circle r="780" fill="none" stroke="url(#arcMid)" stroke-width="120" opacity="0.96"/>
    <circle r="630" fill="none" stroke="url(#arcInner)" stroke-width="130" opacity="0.98"/>
    <circle r="480" fill="url(#arcCenter)" opacity="0.95"/>
  </g>

  <!-- Crinkle & Shading overlays on top of arcs -->
  <path d="M 500,0 C 800,300 1100,500 1920,200 L 1920,0 Z" fill="#000000" opacity="0.08"/>

  <!-- 3. TOP-LEFT HEADINGS (ANGLED UPWARDS ~ -6.5deg) -->
  <g transform="translate(100, 480) rotate(-6.5)">
    <!-- Line 1: SQI GROUP INT'L CORP. -->
    <text x="5" y="-195" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="78" fill="#591301" letter-spacing="1">SQI GROUP INT&apos;L CORP.</text>
    <text x="0" y="-200" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="78" fill="#FFBE1A" letter-spacing="1">SQI GROUP INT&apos;L CORP.</text>

    <!-- Line 2: PHILIPPINES (HUGE 3D BLOCK) -->
    <!-- 3D Extrusion Layers -->
    <text x="12" y="0" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="224" fill="#380800" letter-spacing="-1">PHILIPPINES</text>
    <text x="10" y="-2" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="224" fill="#661c02" letter-spacing="-1">PHILIPPINES</text>
    <text x="8" y="-4" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="224" fill="#9c3400" letter-spacing="-1">PHILIPPINES</text>
    <text x="6" y="-6" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="224" fill="#c95500" letter-spacing="-1">PHILIPPINES</text>
    <text x="4" y="-8" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="224" fill="#e07500" letter-spacing="-1">PHILIPPINES</text>
    <text x="2" y="-10" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="224" fill="#f59e0b" letter-spacing="-1">PHILIPPINES</text>
    <!-- Front Face in Brilliant Crisp White -->
    <text x="0" y="-12" font-family="'Liberation Sans', 'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="224" fill="#FFFFFF" letter-spacing="-1">PHILIPPINES</text>
  </g>

  <!-- 4. SUBTITLE TEXT (HORIZONTAL) -->
  <g transform="translate(108, 560)">
    <text x="0" y="55" font-family="'Liberation Sans', 'Arial', sans-serif" font-weight="700" font-size="39" fill="#FFFFFF" filter="url(#textDropShadow)">Empowering Creativity &amp; Business Growth.</text>
    <text x="0" y="112" font-family="'Liberation Sans', 'Arial', sans-serif" font-weight="700" font-size="39" fill="#FFFFFF" filter="url(#textDropShadow)">Wholesale with SQI Philippines Today!</text>
  </g>

  <!-- 5. CALL US NOW PILL -->
  <g transform="translate(110, 715)" filter="url(#ctaShadow)">
    <!-- White Capsule Container -->
    <rect width="485" height="116" rx="14" fill="#FFFFFF"/>
    
    <!-- Left Text -->
    <text x="45" y="52" font-family="'Liberation Sans', 'Arial', sans-serif" font-weight="900" font-style="italic" font-size="35" fill="#111827" letter-spacing="1.5">CALL US NOW</text>
    <text x="45" y="96" font-family="'Liberation Sans', 'Arial', sans-serif" font-weight="900" font-size="46" fill="#111827" letter-spacing="2">8367-3386</text>

    <!-- Black Icon Button Container -->
    <rect x="390" y="10" width="85" height="96" rx="12" fill="#111827"/>
    
    <!-- Phone Handset Icon (tilted ~45deg) -->
    <g transform="translate(432, 58) rotate(45) scale(1.3)">
      <path d="M -12,-8 C -12,-12 -8,-16 -4,-16 C -1,-16 2,-13 1,-10 L -0.5,-6 C -1,-4.5 -2.5,-3.8 -4,-3 C -2.5,0.5 0.5,3.5 4,5 C 4.8,3.5 5.5,2 7,2.5 L 11,4 C 14,5 17,8 17,11 C 17,15 13,19 9,19 C -3,19 -12,8 -12,-8 Z" fill="#FFFFFF"/>
    </g>
  </g>

  <!-- 6. PRODUCT PACKAGES (CENTER & RIGHT) -->
  
  <!-- PRODUCT 1: KIDART MODELING CLAY (LEFT) -->
  <g transform="translate(815, 455) rotate(-2)" filter="url(#productShadow)">
    <!-- Card Backing -->
    <rect width="320" height="400" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3"/>
    
    <!-- Top Header Yellow Band -->
    <path d="M 0,14 Q 0,0 14,0 L 306,0 Q 320,0 320,14 L 320,135 L 0,135 Z" fill="#fed7aa"/>
    <rect x="0" y="0" width="320" height="120" rx="14" fill="#fbbf24"/>
    
    <!-- KidArt Logo -->
    <rect x="18" y="18" width="135" height="38" rx="8" fill="#1e3a8a"/>
    <text x="26" y="45" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="28" fill="#FFFFFF">KIDART</text>
    
    <!-- Neon Colors badge -->
    <rect x="230" y="12" width="76" height="22" rx="11" fill="#ec4899"/>
    <text x="240" y="27" font-family="'Liberation Sans', sans-serif" font-weight="800" font-size="11" fill="#FFFFFF">Neon Colors</text>
    
    <!-- Dinosaur Mascot (Top Right) -->
    <g transform="translate(265, 80) scale(0.9)">
      <circle cx="0" cy="0" r="26" fill="#0284c7"/>
      <!-- Eyes & smile -->
      <circle cx="-8" cy="-6" r="6" fill="#FFFFFF"/>
      <circle cx="-6" cy="-6" r="3" fill="#000000"/>
      <circle cx="10" cy="-6" r="6" fill="#FFFFFF"/>
      <circle cx="8" cy="-6" r="3" fill="#000000"/>
      <path d="M -8,8 Q 0,16 8,8" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
      <!-- Dinosaur spikes -->
      <polygon points="-12,-26 -4,-36 0,-26" fill="#f59e0b"/>
      <polygon points="2,-26 8,-36 12,-26" fill="#f59e0b"/>
    </g>

    <!-- Product Title -->
    <text x="18" y="85" font-family="'Liberation Sans', 'Arial Black', sans-serif" font-weight="900" font-size="29" fill="#0369a1">Modeling Clay</text>
    
    <!-- Features bullets -->
    <circle cx="22" cy="108" r="3" fill="#0284c7"/>
    <text x="30" y="112" font-family="'Liberation Sans', sans-serif" font-weight="700" font-size="11" fill="#334155">Non-drying bright colors</text>
    <circle cx="22" cy="124" r="3" fill="#0284c7"/>
    <text x="30" y="128" font-family="'Liberation Sans', sans-serif" font-weight="700" font-size="11" fill="#334155">Reusable, easy modeling</text>

    <!-- Blister Tray Containing 12 Vertical Neon Clay Sticks -->
    <rect x="18" y="145" width="284" height="215" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
    
    <!-- 12 Sticks -->
    <g transform="translate(24, 150)">
      <!-- 1. Neon Pink -->
      <rect x="0" y="0" width="20" height="205" rx="5" fill="#f43f5e"/><rect x="2" y="15" width="4" height="175" rx="2" fill="#fda4af" opacity="0.6"/>
      <!-- 2. Neon Red -->
      <rect x="23" y="0" width="20" height="205" rx="5" fill="#e11d48"/><rect x="25" y="15" width="4" height="175" rx="2" fill="#fca5a5" opacity="0.6"/>
      <!-- 3. Neon Coral -->
      <rect x="46" y="0" width="20" height="205" rx="5" fill="#fb7185"/><rect x="48" y="15" width="4" height="175" rx="2" fill="#fecdd3" opacity="0.6"/>
      <!-- 4. Neon Orange -->
      <rect x="69" y="0" width="20" height="205" rx="5" fill="#f97316"/><rect x="71" y="15" width="4" height="175" rx="2" fill="#fed7aa" opacity="0.6"/>
      <!-- 5. Neon Yellow-Orange -->
      <rect x="92" y="0" width="20" height="205" rx="5" fill="#fb923c"/><rect x="94" y="15" width="4" height="175" rx="2" fill="#ffedd5" opacity="0.6"/>
      <!-- 6. Neon Yellow -->
      <rect x="115" y="0" width="20" height="205" rx="5" fill="#facc15"/><rect x="117" y="15" width="4" height="175" rx="2" fill="#fef08a" opacity="0.6"/>
      <!-- 7. Neon Lime -->
      <rect x="138" y="0" width="20" height="205" rx="5" fill="#a3e635"/><rect x="140" y="15" width="4" height="175" rx="2" fill="#d9f99d" opacity="0.6"/>
      <!-- 8. Neon Green -->
      <rect x="161" y="0" width="20" height="205" rx="5" fill="#22c55e"/><rect x="163" y="15" width="4" height="175" rx="2" fill="#bbf7d0" opacity="0.6"/>
      <!-- 9. Neon Emerald -->
      <rect x="184" y="0" width="20" height="205" rx="5" fill="#10b981"/><rect x="186" y="15" width="4" height="175" rx="2" fill="#a7f3d0" opacity="0.6"/>
      <!-- 10. Neon Cyan -->
      <rect x="207" y="0" width="20" height="205" rx="5" fill="#06b6d4"/><rect x="209" y="15" width="4" height="175" rx="2" fill="#a5f3fc" opacity="0.6"/>
      <!-- 11. Neon Sky Blue -->
      <rect x="230" y="0" width="20" height="205" rx="5" fill="#3b82f6"/><rect x="232" y="15" width="4" height="175" rx="2" fill="#bfdbfe" opacity="0.6"/>
      <!-- 12. Neon Purple -->
      <rect x="253" y="0" width="20" height="205" rx="5" fill="#8b5cf6"/><rect x="255" y="15" width="4" height="175" rx="2" fill="#ddd6fe" opacity="0.6"/>
    </g>

    <!-- Bottom Bar Icons (CE, 12, barcode) -->
    <text x="24" y="386" font-family="'Liberation Sans', sans-serif" font-weight="900" font-size="16" fill="#64748b">12</text>
    <text x="50" y="386" font-family="'Liberation Sans', sans-serif" font-size="12" fill="#64748b">CE</text>
    <rect x="240" y="372" width="55" height="16" fill="#000000"/>
  </g>

  <!-- PRODUCT 2: KIDART SUPER JUMBO CRAYONS (CENTER) -->
  <g transform="translate(1115, 430) rotate(0)" filter="url(#productShadow)">
    <!-- Box Body -->
    <rect width="455" height="430" rx="16" fill="#e11d48"/>
    
    <!-- Top Hanging Slot Tab -->
    <path d="M 170,0 L 285,0 Q 295,0 295,15 L 295,30 L 160,30 L 160,15 Q 160,0 170,0 Z" fill="#be123c"/>
    <rect x="195" y="10" width="65" height="12" rx="6" fill="#ffffff" opacity="0.8"/>

    <!-- Yellow Curved Belly Banner -->
    <path d="M 0,165 Q 227,130 455,165 L 455,360 Q 227,330 0,360 Z" fill="#fbbf24"/>
    
    <!-- KidArt Mascot Ribbon Top Left -->
    <g transform="translate(20, 35)">
      <circle cx="36" cy="36" r="32" fill="#ffffff"/>
      <rect x="12" y="55" width="105" height="28" rx="6" fill="#1e3a8a"/>
      <text x="22" y="75" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="20" fill="#ffffff">KIDART</text>
    </g>

    <!-- PREMIUM QUALITY GOLDEN SEAL -->
    <g transform="translate(227, 205)">
      <!-- Outer Sunburst Points -->
      <circle cx="0" cy="0" r="50" fill="#b45309"/>
      <circle cx="0" cy="0" r="46" fill="#d97706"/>
      <circle cx="0" cy="0" r="41" fill="#fef08a"/>
      <circle cx="0" cy="0" r="38" fill="#d97706"/>
      <text x="0" y="-8" font-family="'Liberation Sans', sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle" letter-spacing="1">PREMIUM</text>
      <text x="0" y="6" font-family="'Liberation Sans', sans-serif" font-weight="800" font-size="11" fill="#ffffff" text-anchor="middle" letter-spacing="1">QUALITY</text>
      <text x="0" y="20" font-family="'Liberation Sans', sans-serif" font-weight="900" font-size="13" fill="#fef08a" text-anchor="middle">★★★</text>
    </g>

    <!-- Cartoon Mascot: Friendly Giraffe (Left) -->
    <g transform="translate(70, 275)">
      <!-- Head & Horns -->
      <ellipse cx="0" cy="-35" rx="28" ry="34" fill="#fbbf24"/>
      <circle cx="-10" cy="-40" r="9" fill="#ffffff"/><circle cx="-8" cy="-40" r="4" fill="#000000"/>
      <circle cx="10" cy="-40" r="9" fill="#ffffff"/><circle cx="8" cy="-40" r="4" fill="#000000"/>
      <ellipse cx="0" cy="-18" rx="22" ry="14" fill="#fef08a"/>
      <circle cx="-6" cy="-18" r="3" fill="#b45309"/><circle cx="6" cy="-18" r="3" fill="#b45309"/>
      <!-- Horns -->
      <rect x="-12" y="-72" width="6" height="20" fill="#f59e0b"/><circle cx="-9" cy="-74" r="6" fill="#b45309"/>
      <rect x="6" y="-72" width="6" height="20" fill="#f59e0b"/><circle cx="9" cy="-74" r="6" fill="#b45309"/>
      <!-- Spots -->
      <circle cx="-16" cy="15" r="8" fill="#d97706"/><circle cx="10" cy="25" r="10" fill="#d97706"/>
    </g>

    <!-- Cartoon Mascot: Cute White Bunny (Right) -->
    <g transform="translate(390, 290)">
      <!-- Long ears -->
      <ellipse cx="-10" cy="-60" rx="9" ry="26" fill="#ffffff"/><ellipse cx="-10" cy="-60" rx="5" ry="18" fill="#f43f5e"/>
      <ellipse cx="14" cy="-60" rx="9" ry="26" fill="#ffffff"/><ellipse cx="14" cy="-60" rx="5" ry="18" fill="#f43f5e"/>
      <!-- Head -->
      <circle cx="2" cy="-20" r="26" fill="#ffffff"/>
      <circle cx="-6" cy="-24" r="4" fill="#000000"/><circle cx="10" cy="-24" r="4" fill="#000000"/>
      <polygon points="0,-16 4,-16 2,-13" fill="#f43f5e"/>
    </g>

    <!-- BIG BOLD TEXT: SUPER JUMBO -->
    <text x="227" y="278" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="44" fill="#1e3a8a" text-anchor="middle" letter-spacing="1">SUPER JUMBO</text>
    <text x="227" y="274" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="44" fill="#ffffff" text-anchor="middle" letter-spacing="1">SUPER JUMBO</text>

    <!-- BIG BOLD TEXT: CRAYONS (Rainbow Letters) -->
    <g transform="translate(115, 325)">
      <text x="0" y="0" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="48" fill="#3b82f6">C</text>
      <text x="32" y="0" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="48" fill="#ef4444">R</text>
      <text x="64" y="0" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="48" fill="#eab308">A</text>
      <text x="96" y="0" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="48" fill="#22c55e">Y</text>
      <text x="128" y="0" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="48" fill="#06b6d4">O</text>
      <text x="163" y="0" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="48" fill="#a855f7">N</text>
      <text x="198" y="0" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="48" fill="#f97316">S</text>
    </g>

    <!-- Crayons Row Visible at Bottom -->
    <g transform="translate(70, 375)">
      <!-- Crayon Tips pointing up -->
      <polygon points="15,0 0,35 30,35" fill="#3b82f6"/><rect x="0" y="35" width="30" height="30" fill="#2563eb"/>
      <polygon points="55,0 40,35 70,35" fill="#10b981"/><rect x="40" y="35" width="30" height="30" fill="#059669"/>
      <polygon points="95,0 80,35 110,35" fill="#facc15"/><rect x="80" y="35" width="30" height="30" fill="#eab308"/>
      <polygon points="135,0 120,35 150,35" fill="#f97316"/><rect x="120" y="35" width="30" height="30" fill="#ea580c"/>
      <polygon points="175,0 160,35 190,35" fill="#ef4444"/><rect x="160" y="35" width="30" height="30" fill="#dc2626"/>
      <polygon points="215,0 200,35 230,35" fill="#a855f7"/><rect x="200" y="35" width="30" height="30" fill="#9333ea"/>
      <polygon points="255,0 240,35 270,35" fill="#06b6d4"/><rect x="240" y="35" width="30" height="30" fill="#0891b2"/>
      <polygon points="295,0 280,35 310,35" fill="#ec4899"/><rect x="280" y="35" width="30" height="30" fill="#db2777"/>
    </g>
  </g>

  <!-- PRODUCT 3: KIDART OIL PASTEL 18 COLORS (RIGHT) -->
  <g transform="translate(1485, 395) rotate(4)" filter="url(#productShadow)">
    <!-- Box Body (Yellow) -->
    <rect width="365" height="495" rx="16" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>

    <!-- Top Hanging Tab with Slot -->
    <path d="M 130,0 L 235,0 Q 245,0 245,20 L 245,45 L 120,45 L 120,20 Q 120,0 130,0 Z" fill="#f59e0b"/>
    <rect x="155" y="16" width="55" height="14" rx="7" fill="#ffffff" opacity="0.9"/>

    <!-- Top KidArt Logo -->
    <g transform="translate(25, 55)">
      <circle cx="28" cy="28" r="24" fill="#ffffff"/>
      <rect x="8" y="44" width="95" height="24" rx="6" fill="#1e3a8a"/>
      <text x="16" y="61" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="17" fill="#ffffff">KIDART</text>
    </g>

    <!-- 18 Colors Badge (Top Right) -->
    <g transform="translate(285, 55)">
      <text x="25" y="34" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="44" fill="#dc2626" text-anchor="middle">18</text>
      <text x="25" y="52" font-family="'Liberation Sans', sans-serif" font-weight="800" font-size="14" fill="#dc2626" text-anchor="middle">Colors</text>
    </g>

    <!-- Middle Title: OIL PASTEL -->
    <text x="28" y="185" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="64" fill="#111827">OIL</text>
    <text x="28" y="245" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="52" fill="#111827">PASTEL</text>
    
    <!-- Non-toxic badge -->
    <rect x="125" y="145" width="75" height="18" rx="9" fill="#16a34a"/>
    <text x="133" y="158" font-family="'Liberation Sans', sans-serif" font-weight="800" font-size="10" fill="#ffffff">NON-TOXIC</text>

    <!-- Illustrated Lion Mascot (Bottom Left) -->
    <g transform="translate(105, 345)">
      <!-- Lion Mane (Rainbow Petals) -->
      <circle cx="0" cy="0" r="62" fill="#ea580c"/>
      <circle cx="-42" cy="-25" r="20" fill="#facc15"/><circle cx="42" cy="-25" r="20" fill="#facc15"/>
      <circle cx="-50" cy="10" r="20" fill="#ef4444"/><circle cx="50" cy="10" r="20" fill="#ef4444"/>
      <circle cx="-32" cy="45" r="20" fill="#8b5cf6"/><circle cx="32" cy="45" r="20" fill="#8b5cf6"/>
      <!-- Face -->
      <circle cx="0" cy="0" r="44" fill="#fbbf24"/>
      <circle cx="-14" cy="-8" r="7" fill="#ffffff"/><circle cx="-12" cy="-8" r="4" fill="#000000"/>
      <circle cx="14" cy="-8" r="7" fill="#ffffff"/><circle cx="12" cy="-8" r="4" fill="#000000"/>
      <!-- Cute snout & nose -->
      <ellipse cx="0" cy="10" rx="16" ry="11" fill="#fef08a"/>
      <polygon points="-6,6 6,6 0,11" fill="#78350f"/>
      <path d="M -6,14 Q 0,20 6,14" fill="none" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
      <!-- Feathered Crown -->
      <polygon points="-16,-44 -12,-68 -4,-44" fill="#3b82f6"/>
      <polygon points="-6,-44 0,-76 6,-44" fill="#ef4444"/>
      <polygon points="4,-44 12,-68 16,-44" fill="#22c55e"/>
    </g>

    <!-- Pastels Visible in Window (Right) -->
    <g transform="translate(245, 255)">
      <!-- Clear Window -->
      <rect width="95" height="190" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
      <!-- Pastel 1 (Green) -->
      <rect x="15" y="10" width="28" height="170" rx="6" fill="#15803d"/>
      <rect x="17" y="30" width="24" height="130" fill="#ffffff" opacity="0.85"/>
      <text x="29" y="95" font-family="'Liberation Sans', sans-serif" font-weight="900" font-size="11" fill="#15803d" transform="rotate(-90 29 95)">KIDART</text>
      <!-- Pastel 2 (Blue) -->
      <rect x="52" y="10" width="28" height="170" rx="6" fill="#1d4ed8"/>
      <rect x="54" y="30" width="24" height="130" fill="#ffffff" opacity="0.85"/>
      <text x="66" y="95" font-family="'Liberation Sans', sans-serif" font-weight="900" font-size="11" fill="#1d4ed8" transform="rotate(-90 66 95)">KIDART</text>
    </g>

    <!-- Rainbow Ribbon Banner at Bottom -->
    <path d="M 30,420 Q 120,390 210,430 L 210,475 Q 120,435 30,465 Z" fill="#ef4444"/>
    <text x="120" y="445" font-family="'Liberation Sans', 'Impact', sans-serif" font-weight="900" font-size="32" fill="#ffffff" text-anchor="middle">18</text>
    <text x="120" y="465" font-family="'Liberation Sans', sans-serif" font-weight="800" font-size="16" fill="#ffffff" text-anchor="middle">Colors</text>
  </g>

  <!-- 7. SWEEPING BOTTOM WAVE WITH HALFTONE ACCENTS -->
  <path d="M 0,840 Q 500,760 1000,810 T 1920,850 L 1920,1080 L 0,1080 Z" fill="url(#bottomWave)"/>
  <path d="M 0,860 Q 600,790 1200,840 T 1920,890 L 1920,1080 L 0,1080 Z" fill="url(#halftoneGold)" opacity="0.45"/>
  <path d="M 0,840 Q 500,760 1000,810 T 1920,850" fill="none" stroke="#fef08a" stroke-width="4" opacity="0.75"/>
</svg>`;
}

// Generate the banner and write to files
function main() {
  const svg = generateBannerSvg();
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1920,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  const publicDir = path.join(__dirname, 'public');
  const distDir = path.join(__dirname, 'dist');
  const assetsDir = path.join(__dirname, 'src', 'assets', 'images');

  const filesToWrite = [
    // public folder
    path.join(publicDir, 'by-www.ginflorita.com 3.png'),
    path.join(publicDir, 'by-www.ginflorita.com-3.png'),
    path.join(publicDir, 'by-www.ginflorita.com%203.png'),
    path.join(publicDir, 'by-www.ginflorita.com.jpg'),
    path.join(publicDir, 'sqi-official-banner.png'),
    // dist folder
    path.join(distDir, 'by-www.ginflorita.com 3.png'),
    path.join(distDir, 'by-www.ginflorita.com-3.png'),
    path.join(distDir, 'by-www.ginflorita.com%203.png'),
    path.join(distDir, 'by-www.ginflorita.com.jpg'),
    path.join(distDir, 'sqi-official-banner.png'),
    // assets folder
    path.join(assetsDir, 'by-www.ginflorita.com 3.png'),
    path.join(assetsDir, 'by-www.ginflorita.com.jpg'),
    path.join(assetsDir, 'sqi_banner_1_1789117619052.jpg'),
    path.join(assetsDir, 'sqi_banner_2_1789117636183.jpg'),
  ];

  for (const filePath of filesToWrite) {
    try {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(filePath, pngBuffer);
      console.log(`Saved: ${filePath} (${pngBuffer.length} bytes)`);
    } catch (e) {
      console.error(`Failed to write ${filePath}:`, e.message);
    }
  }

  // Also write the SVG file so it can be loaded directly as vector
  fs.writeFileSync(path.join(publicDir, 'sqi-official-banner.svg'), svg);
  fs.writeFileSync(path.join(distDir, 'sqi-official-banner.svg'), svg);
  console.log('SVG banners written successfully!');
}

main();
