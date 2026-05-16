import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/context/i18n'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const isVercelProduction = process.env.NODE_ENV === 'production' && process.env.VERCEL === '1';

export const metadata: Metadata = {
  title: 'Portfolio | Akina',
  description: 'Portfolio - UX/UI Designer',
  icons: {
    icon: [
      {
        url: `${basePath}/icon.png`,
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <I18nProvider>
          {children}
        </I18nProvider>
        {isVercelProduction && <Analytics />}
      </body>
    </html>
  )
}
