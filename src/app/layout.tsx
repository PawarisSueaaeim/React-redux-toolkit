import type { Metadata } from 'next'
import './globals.css'
import { inter, roboto, publicSan, notoSansThai} from '@/font/font'
import { ReduxProvider } from '@/redux/provider'
import { PrimaryNavbar } from '@/components/navbar'
import { PrimaryFooter } from '@/components/footer'

export const metadata: Metadata = {
  title: 'ระเบียบ',
  description: 'กางเกงสแล็คผู้ชาย',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={publicSan.className}>
        <ReduxProvider>
          <PrimaryNavbar/>
            {children}
          <PrimaryFooter/>
        </ReduxProvider>
      </body>
    </html>
  )
}
