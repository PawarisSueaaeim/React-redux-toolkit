import { Inter, Roboto, Public_Sans, Noto_Sans_Thai } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '400', '700'],
})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
})

export const publicSan = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
})


export const notoSansThai = Noto_Sans_Thai({
    subsets: ['latin'],
    weight: ['200', '400', '700'],
})