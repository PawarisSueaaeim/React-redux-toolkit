import type { Metadata } from 'next'
import './globals.css'
import { inter, roboto, publicSan, notoSansThai} from '@/font/font'
import { ReduxProvider } from '@/redux/provider'
import { PrimaryNavbar } from '@/components/navbar'
import { PrimaryFooter } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Pokemons shopp',
  description: 'Training Next 14 with redux toolkit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <PrimaryNavbar/>
            {children}
          <PrimaryFooter/>
        </ReduxProvider>
      </body>
    </html>
  )
}
