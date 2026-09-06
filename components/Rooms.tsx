"use client";

import { motion } from "framer-motion";
import { hotel } from "@/lib/hotel-data";
import RoomCard from "./RoomCard";

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 sm:py-28 bg-cream">
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
            Our Rooms
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brown-deep mb-4">
            Comfortable Rooms for Every Stay
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Pilih dari berbagai tipe kamar yang dirancang untuk kenyamanan Anda.
            Mulai dari Rp{hotel.priceFormatted} per malam.
          </p>
          <p className="text-brown-light/60 text-sm mt-2">
            Harga dapat berubah berdasarkan tanggal dan ketersediaan.
          </p>
        </motion.div>

        {/* Room Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotel.rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
