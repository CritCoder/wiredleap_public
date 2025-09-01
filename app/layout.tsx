import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wiredleap - AI-Powered Development Platform',
  description: 'Accelerate your coding workflow with AI-powered code reviews, real-time previews, and seamless integrations.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <style>{`
          /* Alliance Font Face Declarations */
          @font-face {
            font-family: 'Alliance No 1';
            src: url('/font-alliance/Degarism Studio Alliance No.1 Light Font.woff2') format('woff2'),
                 url('/font-alliance/Degarism Studio Alliance No.1 Light Webfont.woff') format('woff');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Alliance No 2';
            src: url('/font-alliance/Alliance No 2 Light Webfont.woff2') format('woff2'),
                 url('/font-alliance/Degarism Studio Alliance No.2 Light Webfont.woff') format('woff');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          html {
            font-family: ${inter.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --font-sans: ${inter.variable};
            --font-mono: ${jetbrainsMono.variable};
            --font-alliance-1: 'Alliance No 1', serif;
            --font-alliance-2: 'Alliance No 2', serif;
          }
        `}</style>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
