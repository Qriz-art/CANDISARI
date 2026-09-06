"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Facilities", href: "#facilities" },
  { name: "Restaurant", href: "#restaurant" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#home" className="flex flex-col items-start">
              <span
                className={`text-lg sm:text-xl font-bold tracking-[0.2em] transition-colors duration-300 ${
                  isScrolled ? "text-green-deep" : "text-white"
                }`}
              >
                {hotel.shortName}
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.3em] font-light transition-colors duration-300 ${
                  isScrolled ? "text-brown-light" : "text-white/80"
                }`}
              >
                {hotel.tagline}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-white/10 ${
                    isScrolled
                      ? "text-brown-deep hover:text-gold hover:bg-cream/80"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Book Now Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="#booking"
                className="px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-brown-deep hover:bg-cream"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                {/* Mobile Logo */}
                <div className="mb-8 pb-6 border-b border-beige">
                  <span className="text-lg font-bold tracking-[0.2em] text-green-deep">
                    {hotel.shortName}
                  </span>
                  <span className="block text-[9px] tracking-[0.3em] font-light text-brown-light">
                    {hotel.tagline}
                  </span>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-3 text-brown-deep font-medium rounded-lg hover:bg-cream transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Book Now */}
                <div className="mt-auto">
                  <a
                    href="#booking"
                    onClick={() => setIsMobileOpen(false)}
                    className="block w-full text-center px-5 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
