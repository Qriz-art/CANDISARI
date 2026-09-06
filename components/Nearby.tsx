"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Train, Mountain, Landmark, MapPin } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

const iconMap = {
  train: Train,
  mountain: Mountain,
  landmark: Landmark,
};

const nearbyImages = [
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=400&h=300&fit=crop",
];

export default function Nearby() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
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
            Nearby
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brown-deep mb-4">
            Explore Around Candisari
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Temukan tempat menarik di sekitar hotel.
          </p>
        </motion.div>

        {/* Nearby Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {hotel.nearby.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-beige/30"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={nearbyImages[index]}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-gold" />
                    <h3 className="font-bold text-brown-deep text-sm">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-brown-light text-sm">{item.distance}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
