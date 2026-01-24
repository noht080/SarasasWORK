import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Engineering Student Portfolio",
  description: "Portfolio website for a Software Engineering student entering university",
  verification: {
    google: "XkpoCf007JFR2eQ7U_9wBhBC64ds8752LjUEVBUA2w0",
  },
};

/**
 * RootLayout Component - The root layout of our Next.js app
 * 
 * WHAT IS A LAYOUT IN NEXT.JS?
 * - Layouts are components that wrap around pages
 * - This RootLayout wraps ALL pages in your app
 * - It's perfect for things like navigation, footers, and global styles
 * - The {children} prop is where page content gets inserted
 * 
 * TYPESCRIPT EXPLANATION:
 * - Readonly<{...}> means the props object cannot be changed
 * - React.ReactNode is a TypeScript type for any valid React content (elements, strings, numbers, etc.)
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="page-transition">{children}</div>
      </body>
    </html>
  );
}
