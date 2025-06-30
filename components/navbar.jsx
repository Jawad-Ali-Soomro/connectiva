"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (path) =>
    pathname === path ? "text-teal-600" : "text-gray-600 hover:text-gray-900"

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/expertise", label: "Expertise" },
    { href: "/portfolio", label: "Our Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  if (pathname?.startsWith("/admin")) return null

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-teal-600">
            Connectiva
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${isActive(link.href)}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white px-6 py-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="text-2xl font-bold text-teal-600"
              onClick={() => setMobileOpen(false)}
            >
              Connectiva
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium ${isActive(link.href)}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-10">
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
