import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // fontFamily: {
      //   inter: ['var(--font-inter)'],
      //   roboto: ['var(--font-roboto)'],
      //   public_sans: ['var(--font-public-sans)'],
      //   noto_sans_thai: ['var(--font-noto-sans-thai)'],
      // },
    },
    colors: {
      primary: '#EEEDEB',
      secondary: '#E0CCBE',
      tertiary: '#747264',
      quaternary: '#3C3633',
      
      white: '#F6F6F6',
      red: '#FF0000',
    },
    fontFamily: {
      
    },
  },
  plugins: [],
}
export default config
