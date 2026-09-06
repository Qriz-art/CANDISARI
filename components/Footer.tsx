"use client";

import { MapPin, Phone, Mail } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="bg-brown-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-6">
              <span className="text-xl font-bold tracking-[0.2em] text-white">
                {hotel.shortName}
              </span>
              <span className="block text-[10px] tracking-[0.3em] font-light text-white/60">
                {hotel.tagline}
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Hotel bintang 3 di Kebumen dengan suasana nyaman, taman rindang,
              dan fasilitas untuk menunjang kebutuhan menginap Anda.
            </p>
            <div className="flex items-center gap-1">
              <span className="text-gold text-sm font-semibold">
                ★ {hotel.rating}
              </span>
              <span className="text-white/40 text-xs">
                ({hotel.reviews.toLocaleString("id-ID")} reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  {hotel.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a
                  href={hotel.phoneLink}
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  {hotel.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {hotel.name}. All rights reserved.
            </p>
            <p className="text-white/30 text-xs">
              {hotel.category} • Kebumen, Jawa Tengah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
