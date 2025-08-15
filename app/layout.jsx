import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ClientAOSProvider from "@/components/ClientAOSProvider" // client component for AOS

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Connectiva | Where Science Meets Clarity",
  description:
    "We help healthcare and life science organizations simplify complex scientific concepts for strategic communication, education, and impact.",
  generator: "v0.dev"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/logo.png" />
      <body className={inter.className}>
        <Navbar />
        {/* AOS initializer */}
        <ClientAOSProvider>
          <main className="min-h-screen">{children}</main>
        </ClientAOSProvider>
        <Footer />
      </body>
    </html>
  )
}
