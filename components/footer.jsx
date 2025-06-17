"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()

  // Don't show footer on admin pages
  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connectiva</h3>
            <p className="text-sm">
              We help healthcare and life science organizations simplify complex scientific concepts for strategic
              communication, education, and impact.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-sm hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-white transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/what-we-do" className="text-sm hover:text-white transition-colors">
                  Scientific Content Simplification
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-sm hover:text-white transition-colors">
                  Scientific Concept Clarification
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-sm hover:text-white transition-colors">
                  Custom Educational Materials
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-sm hover:text-white transition-colors">
                  Science Communication Strategy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="block">123 Science Way</span>
                <span className="block">Boston, MA 02115</span>
              </li>
              <li className="text-sm">
                <span className="block">info@connectiva.com</span>
              </li>
              <li className="text-sm">
                <span className="block">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} Connectiva. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
