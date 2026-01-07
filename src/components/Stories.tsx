'use client';

import { Star } from "lucide-react";
import Image from "next/image";

export const testimonials = [
  {
    name: "Vaishnavi Vishwakarma",
    role: "Salon Client",
    image: "/tests/WhatsApp Image 2026-01-05 at 6.32.20 PM.jpeg",
    rating: 5,
    message:
      "The team at 360 Salon made my special day absolutely perfect. Their attention to detail and artistic vision exceeded all my expectations. I felt like a true princess!",
  },
  {
    name: "Roshini Yadav",
    role: "Academy Graduate",
    image: "/tests/WhatsApp Image 2026-01-05 at 6.32.22 PM.jpeg",
    rating: 5,
    message:
      "The academy program transformed my passion into a thriving career. The instructors are world-class, and the hands-on training prepared me for real-world success.",
  },
  {
    name: "Shivani Rawat",
    role: "Regular Client",
    image: "/tests/WhatsApp Image 2026-01-05 at 6.32.25 PM.jpeg",
    rating: 5,
    message:
      "I've been coming to 360 Salon for over two years, and they never disappoint. The quality of service and the luxurious atmosphere keep me coming back every time.",
  },
  {
    name: "Neha Singh",
    role: "Academy Graduate",
    image: "/tests/WhatsApp Image 2026-01-05 at 6.32.27 PM.jpeg",
    rating: 5,
    message:
      "The nail art course at 360 Academy opened doors I never imagined. Now I run my own successful nail studio, thanks to the comprehensive training I received.",
  },
];

const RatingStars = ({ count }: { count: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, role, image, rating, message }: any) => {
  return (
    <div className="max-w-md w-full p-8 bg-[#F9FAFB] shadow-xl rounded-xl border border-zinc-100/50 relative">
      {/* Golden Top Bar */}
      <div className="absolute top-0 left-10 h-1 w-1/6 bg-linear-to-r from-yellow-500 to-yellow-600 rounded-full"></div>

      {/* Profile Section */}
      <div className="flex items-center space-x-4 mb-6 pt-">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover shadow-md"
          unoptimized
        />

        <div>
          <p className="text-lg font-bold text-zinc-800">{name}</p>
          <p className="text-sm font-medium text-amber-600">{role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <RatingStars count={rating} />
      </div>

      {/* Message */}
      <div className="relative">
        <p className="text- italic text-zinc-600 leading-relaxed font-serif pr-4">
          "{message}"
        </p>

        <div className="absolute bottom-[-15px] right-0 text-7xl font-extrabold text-zinc-200 opacity-80 pointer-events-none translate-x-1/4 translate-y-1/4">
          ”
        </div>
      </div>
    </div>
  );
};



export default function Stories () {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Client <span className="text-[#CA8A04]">Stories</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Hear from our satisfied clients and successful academy graduates who
            have experienced the 360 difference in beauty and education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              role={item.role}
              image={item.image}
              rating={item.rating}
              message={item.message}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
