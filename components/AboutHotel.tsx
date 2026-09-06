"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Train, Mountain, Landmark } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

const iconMap = {
  train: Train,
  mountain: Mountain,
  landmark: Landmark,
};

export default function AboutHotel() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Garden.png"
                alt="Foto Hotel & Taman"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-deep/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown-deep mb-6 leading-tight">
              {hotel.about.title}
            </h2>
            <p className="text-brown-light text-lg leading-relaxed mb-4">
              {hotel.about.description}
            </p>
            <p className="text-brown-light leading-relaxed mb-8">
              {hotel.about.detail}
            </p>

            {/* Nearby locations */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gold uppercase tracking-wider">
                Lokasi Strategis
              </h3>
              {hotel.nearby.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-cream/50 hover:bg-cream transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-deep/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-green-deep" />
                    </div>
                    <div>
                      <p className="font-semibold text-brown-deep text-sm">
                        {item.name}
                      </p>
                      <p className="text-brown-light text-xs">
                        {item.distance}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
