"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brown-deep mb-4">
            What Our Guests Say
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Lihat apa yang dikatakan tamu kami tentang pengalaman menginap.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Google Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-beige/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-500">G</span>
              </div>
              <div>
                <h3 className="font-bold text-brown-deep">Google Reviews</h3>
                <p className="text-brown-light text-sm">Verifikasi Google</p>
              </div>
            </div>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl font-bold text-brown-deep">
                {hotel.rating}
              </span>
              <span className="text-brown-light text-lg">/ 5</span>
            </div>

            <div className="flex text-gold mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < Math.floor(hotel.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                />
              ))}
            </div>

            <p className="text-brown-light text-sm">
              {hotel.reviews.toLocaleString("id-ID")} Google Reviews
            </p>
          </motion.div>

          {/* Tripadvisor Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-beige/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <span className="text-2xl">🦉</span>
              </div>
              <div>
                <h3 className="font-bold text-brown-deep">Tripadvisor</h3>
                <p className="text-brown-light text-sm">Ulasan Tamu</p>
              </div>
            </div>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl font-bold text-brown-deep">
                {hotel.tripadvisorRating}
              </span>
              <span className="text-brown-light text-lg">/ 5</span>
            </div>

            <div className="flex text-gold mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={
                    i < Math.floor(hotel.tripadvisorRating)
                      ? "currentColor"
                      : "none"
                  }
                  stroke="currentColor"
                />
              ))}
            </div>

            <p className="text-brown-light text-sm mb-4">
              {hotel.tripadvisorReviews} reviews
            </p>

            {/* Featured Review */}
            {hotel.reviewItems.length > 0 && (
              <div className="mt-4 p-4 bg-cream/50 rounded-xl">
                <p className="text-brown-deep text-sm italic leading-relaxed">
                  &ldquo;{hotel.reviewItems[0].text}&rdquo;
                </p>
                <p className="text-brown-light text-xs mt-2">
                  — {hotel.reviewItems[0].source}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
