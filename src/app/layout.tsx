import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "./(site)/components/ThemeRegistry";
import { Header } from "./(site)/components/Header";
import { Footer } from "./(site)/components/Footer";
import { canonicalUrl, formatTitle } from "./(site)/lib/seo";

export const metadata: Metadata = {
  title: {
    default: formatTitle(),
    template: "%s | Windrose",
  },
  description: "Researching AI safety",
  metadataBase: new URL(canonicalUrl("/")),
  alternates: { canonical: canonicalUrl("/") },
  openGraph: {
    title: formatTitle(),
    images: ["/og-image.png"], // Placeholder OG image
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
      </head>
      {/* ThemeRegistry handles MUI theme and color mode */}
      <body className="min-h-screen flex flex-col">
        <ThemeRegistry>
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
