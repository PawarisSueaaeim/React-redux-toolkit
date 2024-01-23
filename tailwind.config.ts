import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#609966',
      secondary: '#40513B',
      tertiary: '#9DC08B',
      quaternary: '#EDF1D6',
      //color other
      white: '#F6F6F6',
      red: '#FF0000',
    },
  },
  plugins: [],
}
export default config
