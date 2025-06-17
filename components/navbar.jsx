"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Don't show navbar on admin pages
  if (pathname.startsWith("/admin")) {
    return null
  }

  const isActive = (path) => {
    return pathname === path ? "text-teal-600" : "text-gray-600 hover:text-gray-900"
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-teal-600">Connectiva</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/what-we-do" className={`text-sm font-medium ${isActive("/what-we-do")}`}>
              What We Do
            </Link>
            <Link href="/expertise" className={`text-sm font-medium ${isActive("/expertise")}`}>
              Expertise
            </Link>
            <Link href="/portfolio" className={`text-sm font-medium ${isActive("/portfolio")}`}>
              Our Work
            </Link>
            <Link href="/blog" className={`text-sm font-medium ${isActive("/blog")}`}>
              Blog
            </Link>
            <Link href="/contact" className={`text-sm font-medium ${isActive("/contact")}`}>
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Button className="bg-teal-600 hover:bg-teal-700">Book a Call</Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <span className="text-2xl font-bold text-teal-600">Connectiva</span>
                  </Link>
                  <Button variant="outline" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-6 flex-1">
                  <Link href="/" className={`text-lg font-medium ${isActive("/")}`} onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link
                    href="/what-we-do"
                    className={`text-lg font-medium ${isActive("/what-we-do")}`}
                    onClick={() => setIsOpen(false)}
                  >
                    What We Do
                  </Link>
                  <Link
                    href="/expertise"
                    className={`text-lg font-medium ${isActive("/expertise")}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Expertise
                  </Link>
                  <Link
                    href="/portfolio"
                    className={`text-lg font-medium ${isActive("/portfolio")}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Our Work
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-lg font-medium ${isActive("/blog")}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-lg font-medium ${isActive("/contact")}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="mt-auto pt-6">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={() => setIsOpen(false)}>
                    Book a Call
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
