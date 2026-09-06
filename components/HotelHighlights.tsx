"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare, Hotel, Clock } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

const highlights = [
  {
    icon: Star,
    value: `${hotel.rating}★`,
    label: "Google Rating",
    color: "text-gold",
  },
  {
    icon: MessageSquare,
    value: "10K+",
    label: "Reviews",
    color: "text-green-medium",
  },
  {
    icon: Hotel,
    value: "3★",
    label: "Hotel",
    color: "text-brown-medium",
  },
  {
    icon: Clock,
    value: hotel.checkIn,
    label: "Check-in",
    color: "text-gold-dark",
  },
];

export default function HotelHighlights() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 ${item.color}`}
              >
                <item.icon size={24} />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-brown-deep mb-1">
                {item.value}
              </span>
              <span className="text-sm text-brown-light font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
