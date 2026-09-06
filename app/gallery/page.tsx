import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { hotel } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: `Galeri - ${hotel.name}`,
  description: `Lihat suasana dan keindahan ${hotel.name} melalui galeri foto kami.`,
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="py-16 sm:py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-brown-deep mb-4">
              Our Hotel Gallery
            </h1>
            <p className="text-brown-light max-w-2xl mx-auto text-lg">
              Jelajahi keindahan {hotel.name} melalui koleksi foto kami.
            </p>
          </div>
        </section>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
