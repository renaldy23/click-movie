import Header from '@/components/layouts/Header'
import '@/styles/globals.css'
import { Work_Sans } from 'next/font/google'

const work_sans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Click Movies',
  description: 'Describe your feelings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${work_sans.className} bg-background`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
