import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import HotelHighlights from "@/components/HotelHighlights";
import AboutHotel from "@/components/AboutHotel";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Restaurant from "@/components/Restaurant";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Nearby from "@/components/Nearby";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingBar />
        <HotelHighlights />
        <AboutHotel />
        <Rooms />
        <Facilities />
        <Restaurant />
        <Gallery />
        <Reviews />
        <Location />
        <Nearby />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
