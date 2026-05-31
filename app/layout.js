import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://moneylinefinance.com'),

  title: {
    default: 'Car Loan Coimbatore | Moneyline Finance',
    template: '%s | Moneyline Finance',
  },

  description:
    'Lowest interest car loans in Coimbatore with instant 3-hour approval. Used car loans and bike loans.',

  keywords: [
    'car loan coimbatore',
    'used car loan coimbatore',
    'car finance coimbatore',
    'two wheeler loan coimbatore',
    'best car loan in coimbatore',
    'instant car loan approval coimbatore',
    'low interest car loan coimbatore',
    'used car finance near me coimbatore',
  ],

  alternates: {
    canonical: 'https://moneylinefinance.com',
  },

  openGraph: {
    title: 'Moneyline Finance',
    description:
      'Lowest interest car finance in Coimbatore with instant approval.',
    url: 'https://moneylinefinance.com',
    siteName: 'Moneyline Finance',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Moneyline Finance',
    description:
      'Used Car Loans, Two Wheeler Loans & Car Finance in Coimbatore.',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}