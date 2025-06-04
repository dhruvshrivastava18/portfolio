import { css } from 'styled-components';

const variables = css`
  :root {
    /* Base Colors */
    /* Original Colors
    --dark-navy: #0a0b1e;
    --navy: #14162b;
    --light-navy: #1e2138;
    --lightest-navy: #2a2f4a;
    --navy-shadow: rgba(10, 11, 30, 0.7);
    */
    --dark-navy: #000000;
    --navy: #121212;
    --light-navy: #1e1e1e;
    --lightest-navy: #2a2a2a;
    --navy-shadow: rgba(0, 0, 0, 0.7);

    /* Text Colors */
    /* Original Colors
    --dark-slate: #5a5f8a;
    --slate: #8b93c0;
    --light-slate: #b4bde0;
    --lightest-slate: #d4daff;
    --white: #f0f4ff;
    */
    --dark-slate: #666666;
    --slate: #888888;
    --light-slate: #aaaaaa;
    --lightest-slate: #cccccc;
    --white: #f5f5f5;

    /* Accent Colors */
    /* Original Colors
    --green: #00ffd5;
    --green-tint: rgba(0, 255, 213, 0.1);
    --pink: #ff2e88;
    --blue: #00b8ff;
    --purple: #b388ff;
    --orange: #ff9d00;
    */
    --green: #ffffff;
    --green-tint: rgba(255, 255, 255, 0.1);
    --pink: #e0e0e0;
    --blue: #f0f0f0;
    --purple: #d0d0d0;
    --orange: #e8e8e8;

    /* New Gradient Colors */
    /* Original Gradients
    --gradient-1: linear-gradient(135deg, #00ffd5 0%, #00b8ff 100%);
    --gradient-2: linear-gradient(135deg, #ff2e88 0%, #b388ff 100%);
    --gradient-3: linear-gradient(135deg, #00b8ff 0%, #b388ff 100%);
    */
    --gradient-1: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
    --gradient-2: linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%);
    --gradient-3: linear-gradient(135deg, #f0f0f0 0%, #d0d0d0 100%);

    /* Glow Effects */
    /* Original Glows
    --glow-green: 0 0 10px rgba(0, 255, 213, 0.5);
    --glow-blue: 0 0 10px rgba(0, 184, 255, 0.5);
    --glow-pink: 0 0 10px rgba(255, 46, 136, 0.5);
    */
    --glow-green: 0 0 10px rgba(255, 255, 255, 0.3);
    --glow-blue: 0 0 10px rgba(240, 240, 240, 0.3);
    --glow-pink: 0 0 10px rgba(224, 224, 224, 0.3);

    /* Fonts */
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    /* Font Sizes */
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    /* Layout */
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;

    /* Transitions */
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    /* Mobile Menu */
    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
