import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import Footer from "@/components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import Providers from "@/app/providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'DeFi Singularity',
  description: 'Enter a new era of crosschain DeFi',
  metadataBase: new URL('https://defisingularity.com'),
  openGraph: {
    title: 'DeFi Singularity',
    description: 'Enter a new era of crosschain DeFi',
    url: 'https://defisingularity.com',
    siteName: 'DeFi Singularity',
    images: [ 
      {
        url: '/defisingularity-tbn.png',
        width: 1200,
        height: 630,
        alt: 'og-image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi Singularity',
    description: 'Enter a new era of crosschain DeFi',
    creator: '@Bifrost',
    images: ['/defisingularity-tbn.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-R9EBVH5439" />
    </html>
  );
}
