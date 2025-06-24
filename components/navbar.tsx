"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      
    >
      {/* className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"}`} */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-auto">
              <Image
                src="/images/tedx-khs-logo.png"
                alt="TEDx Kigali High School"
                width={200}
                height={80}
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-ted-red ${
                pathname === "/"
                  ? "text-ted-red underline underline-offset-4 font-bold"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-ted-red ${
                pathname === "/about"
                  ? "text-ted-red underline underline-offset-4 font-bold"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/events"
              className={`text-sm font-medium transition-colors hover:text-ted-red ${
                pathname === "/events"
                  ? "text-ted-red underline underline-offset-4 font-bold"
                  : ""
              }`}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-ted-red ${
                pathname === "/contact"
                  ? "text-ted-red underline underline-offset-4 font-bold"
                  : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-ted-red hover:bg-ted-red/90 text-white rounded-full">
              Buy Ticket
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
       {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-ted-red transition-colors py-2 border-b border-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-ted-red transition-colors py-2 border-b border-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/events"
                className="text-sm font-medium hover:text-ted-red transition-colors py-2 border-b border-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-ted-red transition-colors py-2 border-b border-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-ted-red hover:bg-ted-red/90 text-white rounded-full mt-2">
                Register Now
              </Button>
            </nav>
          </div>
        </div>
      )} */}
    </header>
  );
}
