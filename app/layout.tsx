import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Flexable | Digital Access Tokens",
  description:
    "Flexable unlocks the future of venue access with Digital Access Tokens (DATs), enabling venues to maximize revenue while providing consumers a seamless way to discover, purchase, and redeem exclusive experiences.",
  generator: "Next.js",
  applicationName: "Flexable",
  keywords: [
    "digital access tokens",
    "venue access",
    "blockchain tickets",
    "event access",
    "venue management",
    "digital passes",
    "cryptocurrency",
    "blockchain technology",
  ],
  authors: [{ name: "Flexable Team" }],
  creator: "Flexable",
  publisher: "Flexable",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flexable.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flexable | Digital Access Tokens",
    description:
      "Skip the line with Digital Access Tokens for exclusive venue experiences.",
    siteName: "Flexable",
    images: [
      {
        url: "https://flexable.vercel.app/Flexable_meta-image.png",
        width: 1200,
        height: 630,
        alt: "Flexable - Digital Access Tokens",
      },
      {
        url: "https://flexable.vercel.app/Flexable_og_alt.png",
        width: 1200,
        height: 630,
        alt: "Flexable - Skip the Line",
      },
      {
        url: "https://flexable.vercel.app/Flexable_og_square.png",
        width: 800,
        height: 800,
        alt: "Flexable Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexable | Digital Access Tokens",
    description:
      "Skip the line with Digital Access Tokens for exclusive venue experiences.",
    images: [
      "https://flexable.vercel.app/Flexable_meta-image.png",
      "https://flexable.vercel.app/Flexable_twitter_card.png",
    ],
    creator: "@flexabledats",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#350756" },
    { media: "(prefers-color-scheme: dark)", color: "#350756" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
