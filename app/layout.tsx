import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'DeFi Singularity',
  description: 'Enter a new era of crosschain DeFi',
  metadataBase: new URL('https://www.defisingularity.com'),
  openGraph: {
    title: 'DeFi Singularity',
    description: 'Enter a new era of crosschain DeFi',
    url: 'https://www.defisingularity.com',
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
