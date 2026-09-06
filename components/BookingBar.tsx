"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, BedDouble, Search } from "lucide-react";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [room, setRoom] = useState("1");

  const handleCheckAvailability = () => {
    // Placeholder: connect to booking system
    alert(
      `Check Availability:\nCheck-in: ${checkIn || "Not set"}\nCheck-out: ${checkOut || "Not set"}\nGuests: ${guests}\nRoom: ${room}`
    );
  };

  return (
    <section id="booking" className="relative -mt-16 sm:-mt-20 z-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-4 sm:p-6 border border-beige/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Check In */}
            <div className="relative">
              <label className="block text-xs font-semibold text-brown-light uppercase tracking-wider mb-2">
                Check In
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-light"
                />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream/50 border border-beige rounded-lg text-brown-deep focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-sm"
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="relative">
              <label className="block text-xs font-semibold text-brown-light uppercase tracking-wider mb-2">
                Check Out
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-light"
                />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream/50 border border-beige rounded-lg text-brown-deep focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-sm"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block text-xs font-semibold text-brown-light uppercase tracking-wider mb-2">
                Guests
              </label>
              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-light"
                />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream/50 border border-beige rounded-lg text-brown-deep focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-sm appearance-none"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>

            {/* Room */}
            <div className="relative">
              <label className="block text-xs font-semibold text-brown-light uppercase tracking-wider mb-2">
                Room
              </label>
              <div className="relative">
                <BedDouble
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-light"
                />
                <select
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream/50 border border-beige rounded-lg text-brown-deep focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-sm appearance-none"
                >
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4+ Rooms</option>
                </select>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button
                onClick={handleCheckAvailability}
                className="w-full py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
              >
                <Search size={18} />
                Check Availability
              </button>
            </div>
          </div>

          <p className="text-xs text-brown-light mt-3 text-center">
            Harga dapat berubah berdasarkan tanggal dan ketersediaan.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
