import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import { CommonSidebar } from "@/components/general/CommonSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuillKalam – Empowering Writers & Readers",
  description:
    "QuillKalam is a platform for writers and readers to connect, share, and explore high-quality content. Discover books, write reviews, and get AI-powered recommendations.",
  keywords: [
    "QuillKalam",
    "books",
    "writing",
    "reading",
    "authors",
    "AI recommendations",
    "book reviews",
    "literature",
  ],
  authors: [{ name: "QuillKalam Team", url: "https://quillkalam.com" }],
  creator: "QuillKalam",
  metadataBase: new URL("https://quillkalam.com"),
  openGraph: {
    title: "QuillKalam – A Platform for Writers & Readers",
    description:
      "Join QuillKalam to explore books, share reviews, and get personalized AI recommendations.",
    url: "https://quillkalam.com",
    siteName: "QuillKalam",
    images: [
      {
        url: "https://quillkalam.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuillKalam – A Platform for Writers & Readers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuillKalam – A Platform for Writers & Readers",
    description:
      "Join QuillKalam to explore books, share reviews, and get personalized AI recommendations.",
    images: ["https://quillkalam.com/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://quillkalam.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <CommonSidebar />
          <main className="flex flex-col min-h-screen w-full">
            <Navbar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
