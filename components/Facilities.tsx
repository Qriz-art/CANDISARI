"use client";

import { motion } from "framer-motion";
import { Wifi, Coffee, Car, Waves, Snowflake, Shirt } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  wifi: Wifi,
  coffee: Coffee,
  car: Car,
  waves: Waves,
  snowflake: Snowflake,
  shirt: Shirt,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white">
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
            Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brown-deep mb-4">
            Hotel Facilities
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Fasilitas lengkap untuk menunjang kenyamanan menginap Anda.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotel.facilities.map((facility, index) => {
            const Icon = iconMap[facility.icon];
            return (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-cream/50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-beige/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-deep/10 flex items-center justify-center mb-4 group-hover:bg-green-deep group-hover:text-white transition-all duration-300">
                  {Icon && (
                    <Icon
                      size={24}
                      className="text-green-deep group-hover:text-white transition-colors duration-300"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-brown-deep mb-2">
                  {facility.name}
                </h3>
                <p className="text-brown-light text-sm leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
