"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Code, Clock, Navigation } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-white">
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
            Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brown-deep mb-4">
            Find Us in Kebumen
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Lokasi strategis yang mudah dijangkau.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.5!2d109.6527!3d-7.6796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDAnNDYuNiJTIDEwOcKwMzknMTAuMCJF!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Candisari Hotel & Resto"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="p-6 bg-cream/50 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-brown-deep mb-1">Alamat</h3>
                  <p className="text-brown-light text-sm leading-relaxed">
                    {hotel.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 bg-cream/50 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-deep/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-green-deep" />
                </div>
                <div>
                  <h3 className="font-bold text-brown-deep mb-1">Telepon</h3>
                  <a
                    href={hotel.phoneLink}
                    className="text-gold font-semibold hover:text-gold-dark transition-colors"
                  >
                    {hotel.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Plus Code */}
            <div className="p-6 bg-cream/50 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brown-medium/10 flex items-center justify-center flex-shrink-0">
                  <Code size={20} className="text-brown-medium" />
                </div>
                <div>
                  <h3 className="font-bold text-brown-deep mb-1">Plus Code</h3>
                  <p className="text-brown-light text-sm">{hotel.plusCode}</p>
                </div>
              </div>
            </div>

            {/* Check-in */}
            <div className="p-6 bg-cream/50 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-brown-deep mb-1">Check-in</h3>
                  <p className="text-brown-light text-sm">
                    Mulai pukul {hotel.checkIn}
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions */}
            <a
              href={hotel.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 bg-gold text-white font-semibold rounded-xl hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
            >
              <Navigation size={18} className="inline mr-2" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
