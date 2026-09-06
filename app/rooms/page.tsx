import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";
import BookingCTA from "@/components/BookingCTA";
import { hotel } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: `Kamar - ${hotel.name}`,
  description: `Pilih kamar terbaik di ${hotel.name}. ${hotel.description}`,
};

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="py-16 sm:py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Rooms
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-brown-deep mb-4">
              Comfortable Rooms for Every Stay
            </h1>
            <p className="text-brown-light max-w-2xl mx-auto text-lg">
              Temukan kamar yang sempurna untuk pengalaman menginap Anda.
            </p>
          </div>
        </section>
        <Rooms />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
