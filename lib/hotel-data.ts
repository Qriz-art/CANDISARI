export const hotel = {
  name: "Candisari Hotel & Resto",
  shortName: "CANDISARI",
  tagline: "HOTEL & RESTO",
  category: "Hotel Bintang 3",
  rating: 4.3,
  reviews: 10124,
  tripadvisorRating: 3.4,
  tripadvisorReviews: 17,
  address: "Jalan Raya Timur No.Km.2, Ketugon, Purwodeso, Kec. Karanganyar, Kabupaten Kebumen, Jawa Tengah 54362",
  phone: "(0287) 551336",
  phoneLink: "tel:+62287551336",
  plusCode: "9H4J+7C Purwodeso, Kabupaten Kebumen, Jawa Tengah",
  checkIn: "14.00",
  checkOut: "12.00",
  priceFrom: 281856,
  priceFormatted: "Rp281.856",
  otherPrice: 291151,
  otherPriceFormatted: "Rp291.151",

  googleMapsUrl: "https://maps.google.com/?q=Candisari+Hotel+Resto+Kebumen",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Candisari+Hotel+Resto+Kebumen",

  headline: "A Comfortable Stay Surrounded by Nature",
  description:
    "Hotel bintang 3 di Kebumen dengan suasana nyaman, taman rindang, pepohonan palem, serta lokasi yang mudah dijangkau.",

  about: {
    title: "Stay in Comfort, Feel at Home",
    description:
      "Candisari Hotel & Resto merupakan hotel bintang 3 yang berada di Jalan Raya Timur, Purwodeso, Kecamatan Karanganyar, Kabupaten Kebumen, Jawa Tengah.",
    detail:
      "Hotel simpel yang dikelilingi taman rindang dan pepohonan palem. Nikmati kenyamanan menginap dengan pelayanan ramah dan fasilitas yang memadai.",
  },

  nearby: [
    {
      name: "Stasiun Kereta Karanganyar",
      distance: "±20 menit berjalan kaki",
      icon: "train" as const,
    },
    {
      name: "Curug Pandansari",
      distance: "±8 km",
      icon: "mountain" as const,
    },
    {
      name: "Alun-Alun Kota Kebumen",
      distance: "±9 km",
      icon: "landmark" as const,
    },
  ],

  facilities: [
    {
      name: "Free Wi-Fi",
      description: "Tetap terhubung selama menginap.",
      icon: "wifi" as const,
    },
    {
      name: "Sarapan",
      description: "Nikmati sarapan lezat setiap pagi.",
      icon: "coffee" as const,
    },
    {
      name: "Parkir Gratis",
      description: "Area parkir tersedia untuk tamu.",
      icon: "car" as const,
    },
    {
      name: "Kolam Renang",
      description: "Bersenang-senang di kolam renang.",
      icon: "waves" as const,
    },
    {
      name: "AC",
      description: "Kamar ber-AC untuk kenyamanan optimal.",
      icon: "snowflake" as const,
    },
    {
      name: "Layanan Binatu",
      description: "Layanan cuci dan setrika pakaian.",
      icon: "shirt" as const,
    },
  ],

  rooms: [
    {
      id: 1,
      name: "Standard Room",
      price: 281856,
      priceFormatted: "Rp281.856",
      capacity: "2 Tamu",
      description: "Kamar nyaman dengan fasilitas standar untuk pengalaman menginap yang menyenangkan.",
      amenities: ["Wi-Fi Gratis", "AC", "TV", "Kamar Mandi Pribadi"],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=450&fit=crop",
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 350000,
      priceFormatted: "Rp350.000",
      capacity: "2 Tamu",
      description: "Kamar deluxe dengan ruang lebih luas dan fasilitas tambahan untuk kenyamanan ekstra.",
      amenities: ["Wi-Fi Gratis", "AC", "TV", "Kamar Mandi Pribadi", "Mini Bar"],
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=450&fit=crop",
    },
    {
      id: 3,
      name: "Family Room",
      price: 450000,
      priceFormatted: "Rp450.000",
      capacity: "4 Tamu",
      description: "Kamar luas ideal untuk keluarga dengan fasilitas lengkap.",
      amenities: ["Wi-Fi Gratis", "AC", "TV", "Kamar Mandi Pribadi", "Extra Bed"],
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=450&fit=crop",
    },
  ],

  gallery: [
    { id: 1, src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=450&fit=crop", alt: "Eksterior Candisari Hotel", category: "Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=600&h=450&fit=crop", alt: "Taman Hotel", category: "Hotel" },
    { id: 3, src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=450&fit=crop", alt: "Kamar Standard", category: "Rooms" },
    { id: 4, src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=450&fit=crop", alt: "Kolam Renang", category: "Facilities" },
    { id: 5, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=450&fit=crop", alt: "Restoran", category: "Food & Drinks" },
    { id: 6, src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=450&fit=crop", alt: "Lobi Hotel", category: "Hotel" },
    { id: 7, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=450&fit=crop", alt: "Pemandangan Taman", category: "Exterior" },
    { id: 8, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=450&fit=crop", alt: "Sarapan", category: "Food & Drinks" },
    { id: 9, src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=450&fit=crop", alt: "Fasilitas Hotel", category: "Facilities" },
  ],

  reviewItems: [
    {
      source: "Tripadvisor",
      rating: 3.4,
      totalReviews: 17,
      text: "Menginap d hotel ini sangat menyenangkan karna pelayanan yg ramah makanan yang enak dan yg pasti lokasinya strategis banget buat kmn2 pokoknya …",
    },
  ],

  meta: {
    title: "Candisari Hotel & Resto | Hotel Bintang 3 di Kebumen",
    description:
      "Candisari Hotel & Resto adalah hotel bintang 3 di Kebumen, Jawa Tengah, dengan suasana nyaman, taman rindang, kolam renang, restoran, Wi-Fi gratis, sarapan, dan parkir gratis.",
  },
};

export type HotelData = typeof hotel;
