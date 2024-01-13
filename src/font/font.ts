import { Inter, Roboto, Public_Sans } from 'next/font/google'

export const publicSan = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
})

export const inter = Inter({
    weight: ['200', '400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const roboto = Roboto({
    weight: ['100', '400', '700'],
    subsets: ['latin'],
    display: 'swap',
})    