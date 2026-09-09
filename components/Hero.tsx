"use client";

import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        {/* Fallback gradient if no image */}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-light rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Hotel Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm tracking-[0.2em] font-light mb-6 border border-white/10">
            {hotel.category}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          <span className="block text-gold-light">{hotel.shortName}</span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-light tracking-[0.3em] text-white/80 mt-2">
            {hotel.tagline}
          </span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4 italic"
        >
          {hotel.headline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
        >
          {hotel.description}
        </motion.p>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(hotel.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                />
              ))}
            </div>
            <span className="text-white font-semibold">{hotel.rating}</span>
          </div>
          <span className="text-white/60 text-sm">
            {hotel.reviews.toLocaleString("id-ID")} Google Reviews
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="px-8 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-base"
          >
            Explore Hotel
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-[0.2em] font-light">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
