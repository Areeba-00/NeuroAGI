import type { Config } from 'tailwindcss';
import type { DefaultColors } from 'tailwindcss/types/generated/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors (dark purple theme)
        'dark-primary': '#0a0a0a',        // Deep black background
        'dark-secondary': '#1a0d2e',      // Dark purple-black
        'dark-tertiary': '#2d1b4e',       // Medium purple-black
        'dark-accent': '#4f46e5',         // Primary purple accent
        'dark-100': '#1a0d2e',
        'dark-200': '#2d1b4e',
        'dark-300': '#3730a3',
        
        // Light mode colors (light purple theme)
        'light-primary': '#ffffff',       // Pure white background
        'light-secondary': '#f3f1ff',     // Very light purple tint
        'light-tertiary': '#e9e5ff',      // Light purple wash
        'light-accent': '#7c3aed',        // Purple accent for light mode
        'light-100': '#fafafa',
        'light-200': '#ddd6fe',
        'light-300': '#c4b5fd',
      },
      backgroundImage: {
        // Gradient backgrounds for both themes
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a0d2e 25%, #2d1b4e 50%, #1a0d2e 75%, #0a0a0a 100%)',
        'gradient-light': 'linear-gradient(135deg, #ffffff 0%, #f3f1ff 25%, #e9e5ff 50%, #f3f1ff 75%, #ffffff 100%)',
        'gradient-purple-dark': 'linear-gradient(45deg, #0a0a0a, #1a0d2e, #2d1b4e)',
        'gradient-purple-light': 'linear-gradient(45deg, #ffffff, #f3f1ff, #e9e5ff)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;