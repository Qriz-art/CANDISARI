import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";
import BookingCTA from "@/components/BookingCTA";
import { hotel } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: `Kamar - ${hotel.name}`,
  description: `Pilih kamar terbaik di ${hotel.name}. ${hotel.description}`,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://candisarihotel.com/rooms",
    siteName: hotel.name,
    title: `Kamar - ${hotel.name}`,
    description: `Pilih kamar terbaik di ${hotel.name}. ${hotel.description}`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: hotel.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Kamar - ${hotel.name}`,
    description: `Pilih kamar terbaik di ${hotel.name}. ${hotel.description}`,
    images: ["/images/og-image.jpg"],
  },
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
