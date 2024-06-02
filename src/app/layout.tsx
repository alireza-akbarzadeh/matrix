import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

// TODO: Replcat this information with the correct data
export const metadata: Metadata = {
  title: "Matrix - Real-Time Stock Market",
  description:
    "Matrix provides real-time stock market insights with an advanced and modern dashboard, helping you make informed trading decisions.",
  applicationName: "Matrix",
  authors: [
    { name: "Alireza Akbarzadeh", url: "https://your-website-url.com" },
  ],
  generator: "Next.js",
  keywords: [
    "stock market",
    "real-time",
    "trading",
    "finance",
    "dashboard",
    "market analysis",
    "investment",
  ],
  referrer: "origin",
  viewport: "width=device-width, initial-scale=1.0",
  creator: "Your Name",
  publisher: "Your Company Name",
  robots: "index, follow",
  icons: {
    icon: "/logo.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://your-website-url.com",
    title: "Matrix - Real-Time Stock Market Dashboard",
    description:
      "Matrix offers a cutting-edge platform for tracking and analyzing stock market trends in real-time.",
    siteName: "Matrix",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matrix Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Matrix - Real-Time Stock Market Dashboard",
    description:
      "Matrix provides real-time stock market insights with an advanced and modern dashboard.",
    images: ["https://your-website-url.com/twitter-image.jpg"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
