"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export default function BookingCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-deep/95 via-green-deep/90 to-brown-deep/95" />
      </div>

      {/* Decorative */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-light rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Your Comfortable Stay
            <br />
            <span className="text-gold-light">Starts Here</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Rencanakan perjalanan Anda dan nikmati pengalaman menginap di
            Candisari Hotel & Resto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              Check Availability
            </a>
            <a
              href={hotel.phoneLink}
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-base"
            >
              <Phone size={18} />
              Call Hotel
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6">
            {hotel.phone}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
