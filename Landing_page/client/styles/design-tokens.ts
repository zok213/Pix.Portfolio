/**
 * Design Tokens extracted from Figma
 * Source: Z97lx0qcrYCY35A4e7us5R (node-id: 12-158)
 */

export const colors = {
  // Primary
  white: '#FFFFFF',
  black: '#000000',
  
  // Brand Gradients
  gradientBlue: '#1D73F3',
  gradientPurple: '#9747FF',
  
  // Gray Scale
  gray: {
    100: '#E2E2E2',
    200: '#D9D9D9',
    300: '#B0B0B0',
    400: '#91908E',
    500: '#888888',
    600: '#767676',
    700: '#757575',
    800: '#595959',
    900: '#111110',
  },
  
  // Transparent variants
  whiteAlpha: {
    10: 'rgba(255, 255, 255, 0.1)',
    20: 'rgba(255, 255, 255, 0.2)',
  },
  
  blackAlpha: {
    0: 'rgba(0, 0, 0, 0)',
  },
} as const;

export const gradients = {
  // Linear Gradients
  bluePurple: 'linear-gradient(90deg, #1D73F3 0%, #9747FF 100%)',
  purpleBlue: 'linear-gradient(90deg, #9747FF 0%, #1D73F3 100%)',
  bluePurpleVertical: 'linear-gradient(180deg, #1D73F3 0%, #9747FF 100%)',
  
  // Radial Gradients
  purpleRadial: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 1) 0%, rgba(151, 71, 255, 0) 100%)',
  blueRadial: 'radial-gradient(circle at 50% 50%, rgba(29, 115, 243, 1) 0%, rgba(17, 66, 141, 0) 100%)',
  
  // Glass Morphism
  glassGray: 'linear-gradient(180deg, rgba(28, 34, 38, 1) 0%, rgba(145, 144, 142, 1) 100%)',
  glassDark: 'linear-gradient(180deg, rgba(26, 32, 44, 1) 0%, rgba(145, 144, 142, 1) 100%)',
  
  // Button Gradients
  buttonGradient: 'linear-gradient(90deg, rgba(151, 71, 255, 0.5) 0%, rgba(29, 115, 243, 0.5) 100%)',
} as const;

export const typography = {
  fontFamily: {
    inter: "'Inter', sans-serif",
    ptSans: "'PT Sans', sans-serif",
    balooPaaji2: "'Baloo Paaji 2', cursive",
    ptSerifCaption: "'PT Serif Caption', serif",
    plusJakartaSans: "'Plus Jakarta Sans', sans-serif",
    khula: "'Khula', sans-serif",
  },
  
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '36px',
    '5xl': '40px',
    '6xl': '48px',
    '7xl': '50px',
    '8xl': '64px',
    '9xl': '96px',
    '10xl': '128px',
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  
  letterSpacing: {
    tighter: '-2%',
    tight: '-1%',
    normal: '0%',
    wide: '10%',
  },
  
  lineHeight: {
    none: 1,
    tight: 1.15,
    normal: 1.21,
    relaxed: 1.29,
    loose: 1.5,
    wider: 1.6,
  },
} as const;

export const spacing = {
  // Pixel-perfect spacing from Figma
  px: '1px',
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  40: '160px',
  48: '192px',
  56: '224px',
  64: '256px',
} as const;

export const borderRadius = {
  none: '0',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '19px',
  '4xl': '22px',
  '5xl': '25px',
  '6xl': '27px',
  '7xl': '30px',
  '8xl': '31px',
  '9xl': '34px',
  '10xl': '37px',
  full: '9999px',
} as const;

export const effects = {
  backdropBlur: {
    sm: 'blur(8px)',
    md: 'blur(16px)',
    lg: 'blur(25.52px)',
  },
  
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  
  transition: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
} as const;

// Breakpoints (Figma is 1920px, need responsive)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
} as const;

// Z-index layers
export const zIndex = {
  base: 0,
  background: -1,
  normal: 1,
  dropdown: 10,
  sticky: 100,
  fixed: 500,
  overlay: 1000,
  modal: 1100,
  popover: 1200,
  tooltip: 1300,
} as const;

// Common measurements from Figma
export const measurements = {
  canvas: {
    width: 1920,
    height: 13960,
  },
  
  container: {
    maxWidth: '1920px',
    padding: '0 140px', // Based on content positioning
  },
  
  section: {
    spacing: '200px', // Vertical spacing between sections
  },
} as const;
