"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Don't show navbar on admin pages
  if (pathname?.startsWith("/admin")) {
    return null
  }

  const isActive = (path) => {
    return pathname === path ? "text-teal-600" : "text-gray-600 hover:text-gray-900"
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-teal-600">Connectiva</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-teal-600 hover:bg-teal-700">Book a Call</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                {/* Required accessible title (hidden visually) */}
                <VisuallyHidden asChild>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>

                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Link 
                      href="/" 
                      className="text-2xl font-bold text-teal-600"
                      onClick={() => setOpen(false)}
                    >
                      Connectiva
                    </Link>
                    <SheetClose asChild>
                      <Button variant="outline" size="icon" aria-label="Close menu">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-6 flex-1">
                    <Link 
                      href="/" 
                      className={`text-lg font-medium ${isActive("/")}`}
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/what-we-do"
                      className={`text-lg font-medium ${isActive("/what-we-do")}`}
                      onClick={() => setOpen(false)}
                    >
                      What We Do
                    </Link>
                    <Link
                      href="/expertise"
                      className={`text-lg font-medium ${isActive("/expertise")}`}
                      onClick={() => setOpen(false)}
                    >
                      Expertise
                    </Link>
                    <Link
                      href="/portfolio"
                      className={`text-lg font-medium ${isActive("/portfolio")}`}
                      onClick={() => setOpen(false)}
                    >
                      Our Work
                    </Link>
                    <Link
                      href="/blog"
                      className={`text-lg font-medium ${isActive("/blog")}`}
                      onClick={() => setOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      className={`text-lg font-medium ${isActive("/contact")}`}
                      onClick={() => setOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>

                  {/* Mobile CTA Button */}
                  <div className="mt-auto pt-6">
                    <SheetClose asChild>
                      <Button 
                        className="w-full bg-teal-600 hover:bg-teal-700"
                      >
                        Book a Call
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}