"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UtensilsCrossed, ChefHat } from "lucide-react";

export default function Restaurant() {
  return (
    <section id="restaurant" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Restaurant
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown-deep mb-6 leading-tight">
              Taste & Comfort Under One Roof
            </h2>
            <p className="text-brown-light text-lg leading-relaxed mb-6">
              Candisari Resto hadir untuk memanjakan lidah Anda. Nikmati beragam
              pilihan menu lezat dengan bahan-bahan segar dan cita rasa yang
              autentik.
            </p>
            <p className="text-brown-light leading-relaxed mb-8">
              Nikmati sarapan pagi yang lezat atau makan malam romantis di
              restoran kami. Tersedia berbagai pilihan menu untuk selera Anda.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <UtensilsCrossed size={16} className="text-gold" />
                <span className="text-brown-deep text-sm font-medium">
                  Menu Variatif
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <ChefHat size={16} className="text-gold" />
                <span className="text-brown-deep text-sm font-medium">
                  Bahan Segar
                </span>
              </div>
            </div>

            <a
              href="#gallery"
              className="inline-block px-8 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Restaurant
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=450&fit=crop"
                alt="Foto Restoran & Makanan"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-deep/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
