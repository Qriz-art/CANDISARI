"use client";

import { motion } from "framer-motion";
import { Users, Eye, Calendar } from "lucide-react";
import Image from "next/image";

interface RoomCardProps {
  room: {
    id: number;
    name: string;
    price: number;
    priceFormatted: string;
    capacity: string;
    description: string;
    amenities: string[];
    image: string;
  };
  index: number;
}

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-beige/30"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
          <span className="text-gold font-bold text-lg">{room.priceFormatted}</span>
          <span className="text-brown-light text-xs block">/ malam</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-brown-deep">{room.name}</h3>
          <div className="flex items-center gap-1 text-brown-light text-sm">
            <Users size={14} />
            <span>{room.capacity}</span>
          </div>
        </div>

        <p className="text-brown-light text-sm leading-relaxed mb-4">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity) => (
            <span
              key={amenity}
              className="px-3 py-1 bg-cream text-brown-medium text-xs font-medium rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 py-2.5 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-all duration-300 text-sm">
            View Room
          </button>
          <button className="flex-1 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-md hover:shadow-lg text-sm">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
