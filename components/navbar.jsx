"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) =>
    pathname === path ? "text-teal-600" : "text-gray-600 hover:text-gray-900";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/expertise", label: "Expertise" },
    { href: "/portfolio", label: "Our Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="border-b bg-white h-[80px] mt-[10px] border-gray-200 sticky top-0 z-50">
      <div className="container h-25 mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-teal-600 relative">
            {/* <img src="/logo.png" alt="Connectiva Logo" className="w-[100px]" /> */}
            <div className="flex absolute top-[-15px] bg-teal-500 p-2  left-[-15px] text-white" style={{
              transform: "rotate(-45deg)", borderRadius: "50%", boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              zIndex: '-1'
            }}>
              <MessageCircle size={15} />
            </div>
            <h1 className="z-10" style={{
              zIndex: "10000"
            }}>Connectiva</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ">
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
        <div className="flex gap-2">
            <div className="hidden md:flex">
            <Link href={'/contact'}>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 font-bold py-2 rounded text-sm capitalize">
              Book a Call
            </button></Link>
          </div>
          {/* <div className="hidden md:flex">
            <Link href={"/admin/login"}>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">
                Admin Login
              </button>
            </Link>
          </div> */}
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
        <div className="fixed inset-0 z-50 bg-white px-6 py-4 overflow-y-auto border border-b">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="text-2xl font-bold text-teal-600"
              onClick={() => setMobileOpen(false)}
            >
              <img src="/logo.png" alt="Connectiva Logo" className="w-[80px]" />
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
          <nav className="flex flex-col space-y-6 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium ${isActive(link.href)}`}
                onClick={() => setMobileOpen(false)}
              >
                <p className="">
                  {link.label}
                </p>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
         <div className="flex gap-2 flex-col">
           <div className="mt-10">
           <Link href={'/contact'}>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded capitalize text-sm"
            >
              Book a Call
            </button></Link>
          </div>
        
         </div>
        </div>
      )}
    </header>
  );
}
