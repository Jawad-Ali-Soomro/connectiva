import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClientAOSProvider from "@/components/ClientAOSProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// ✅ Centralized SEO Metadata
export const metadata = {
  metadataBase: new URL("https://connectiva.com"), // change to your domain
  title: {
    default: "Connectiva | Where Science Meets Clarity",
    template: "%s | Connectiva",
  },
  description:
    "Connectiva helps healthcare and life science organizations simplify complex scientific concepts for strategic communication, education, and impact.",
  keywords: [
    "Connectiva",
    "Healthcare communication",
    "Life sciences",
    "Medical education",
    "Science clarity",
    "Strategic communication",
  ],
  authors: [{ name: "Connectiva Team", url: "https://connectiva.com" }],
  generator: "Next.js",
  openGraph: {
    type: "website",
    url: "https://connectiva.com",
    title: "Connectiva | Where Science Meets Clarity",
    description:
      "We help healthcare and life science organizations simplify complex scientific concepts for communication, education, and impact.",
    siteName: "Connectiva",
    images: [
      {
        url: "/seo-banner.png", // create a banner 1200x630
        width: 1200,
        height: 630,
        alt: "Connectiva - Science Meets Clarity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@connectiva", // change if you have one
    creator: "@connectiva",
    title: "Connectiva | Where Science Meets Clarity",
    description:
      "Simplifying complex science for healthcare & life sciences communication.",
    images: ["/seo-banner.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://connectiva.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for fonts (performance) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Federant&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Connectiva",
              url: "https://connectiva.com",
              logo: "https://connectiva.com/logo.png",
              sameAs: [
                "https://twitter.com/connectiva",
                "https://linkedin.com/company/connectiva",
              ],
              description:
                "Helping healthcare & life science organizations simplify complex scientific concepts.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {/* AOS initializer */}
        <ClientAOSProvider>
          <main className="min-h-screen">{children}</main>
        </ClientAOSProvider>
        <Footer />
      </body>
    </html>
  );
}
