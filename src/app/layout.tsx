import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryan Kumawat - Data Science & Finance Portfolio",
  description: "Data & Finance at USYD — building AI-driven, real-world solutions. View my projects, experience, and get in touch.",
  keywords: ["Aryan Kumawat", "Data Science", "Finance", "Machine Learning", "University of Sydney", "Portfolio"],
  authors: [{ name: "Aryan Kumawat" }],
  creator: "Aryan Kumawat",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://aryankumawat.com",
    title: "Aryan Kumawat - Data Science & Finance Portfolio",
    description: "Data & Finance at USYD — building AI-driven, real-world solutions.",
    siteName: "Aryan Kumawat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Kumawat - Data Science & Finance Portfolio",
    description: "Data & Finance at USYD — building AI-driven, real-world solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="aryan-theme">
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
