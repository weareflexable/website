import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import GsapProvider from "./providers/GsapProvider";
import Navbar from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/Footer";
import BackgroundEffect from "@/app/components/ui/BackgroundEffect";
import CursorTracker from "@/app/components/ui/CursorTracker";
import ScatteringParticles from "@/app/components/ui/ScatteringParticles";
import TwinklingStars from "@/app/components/ui/TwinklingStars";
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
  title: "Flexable",
  description:
    "Flexable unlocks the future of venue access with Digital Access Tokens (DATs), enabling venues to maximize revenue while providing consumers a seamless way to discover, purchase, and redeem exclusive experiences.",
  generator: "Next.js",
  applicationName: "Flexable",
  keywords: [
    "digital",
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
    title: "Flexable",
    description:
      "Skip the line with Digital Access Tokens for exclusive venue experiences.",
    siteName: "Flexable",
    images: [
      {
        url: "https://flexable.vercel.app/Flexable_meta-image.png",
        width: 1200,
        height: 630,
        alt: "Flexable ",
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
    title: "Flexable",
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
        <GsapProvider>
          <CursorTracker
            color="#621D88"
            brightnessSize={500}
            brightnessIntensity={0.2}
          />
          <div className="bg-background relative">
            <TwinklingStars
              count={150}
              minSize={2}
              maxSize={5}
              twinkleSpeed={1.2}
              repelRadius={180}
              repelStrength={35}
              shootingStarFrequency={0.25}
            />
            <BackgroundEffect intensity={4} />
            <ScatteringParticles
              count={18}
              colors={["#805AD5", "#FFD700", "#9B59B6", "#F0B90B"]}
              repelRadius={300}
              repelStrength={30}
              minSize={5}
              maxSize={20}
            />
            <main className="mx-auto relative z-10">
              <Navbar />
              {children}
              <Footer />
            </main>
          </div>
        </GsapProvider>
      </body>
    </html>
  );
}
