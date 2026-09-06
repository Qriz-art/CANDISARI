import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import BookingCTA from "@/components/BookingCTA";
import { hotel } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: `Kontak - ${hotel.name}`,
  description: `Hubungi ${hotel.name} di ${hotel.phone}. ${hotel.address}`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="py-16 sm:py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-brown-deep mb-4">
              Hubungi Kami
            </h1>
            <p className="text-brown-light max-w-2xl mx-auto text-lg">
              Kami siap membantu Anda. Hubungi kami untuk informasi dan
              pemesanan.
            </p>
          </div>
        </section>
        <Location />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
