import "./globals.css";
import { ThemeRegistry } from "./(site)/components/ThemeRegistry";
import { Header } from "./(site)/components/Header";
import { Footer } from "./(site)/components/Footer";
import { Analytics } from "./(site)/components/Analytics";

export const metadata = {
  metadataBase: new URL("https://ai.windrose.dev"),
  alternates: { canonical: "/" },
  title: "Windrose",
  description: "Researching AI safety",
  openGraph: {
    title: "Windrose",
    description: "Researching AI safety",
    url: "https://ai.windrose.dev/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Windrose",
    description: "Researching AI safety",
    images: ["/og-image.png"],
  },
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
        <Analytics />
      </body>
    </html>
  );
}
