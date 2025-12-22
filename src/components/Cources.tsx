'use client';

import { Check } from "lucide-react";
import Image from "next/image";

export const CoursesList = [
  {
    title: "Hair Styling Mastery",
    price: "₹1,99,999",
    duration: "12 Weeks",
    features: [
      "Advanced Cutting Techniques",
      "Color Theory & Application",
      "Styling & Finishing",
      "Business Skills",
    ],
    tag: "12 Weeks",
    image:
      "https://readdy.ai/api/search-image?query=professional%20hair%20styling%20course%20training%20session%2C%20students%20learning%20advanced%20cutting%20techniques%2C%20modern%20salon%20classroom%20setting%2C%20instructor%20demonstrating%20on%20mannequin%20heads%2C%20beauty%20academy%20environment%2C%20professional%20lighting&width=400&height=300&seq=hair-course&orientation=landscape",
  },
  {
    title: "Professional Makeup Artistry",
    price: "₹1,49,999",
    duration: "8 Weeks",
    features: [
      "Bridal & Event Makeup",
      "Editorial Techniques",
      "Color Matching",
      "Client Consultation",
    ],
    tag: "8 Weeks",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
  },
  {
    title: "Nail Art & Design",
    price: "₹50,000",
    duration: "1 Month",
    features: [
      "Nail Art All types",
      "Gel Polish Application",
      "Gel Extension",
      "Toe Extension",
      "Acrylic Extension",
      "Dip Powder Extension",
      "3D Nail Art",
    ],
    description:
      "Nail Extension — Basic to Advance. With Kit. 1 Month course with hands-on practice; practice material also provided.",
    tag: "1 Month",
    image:
      "https://readdy.ai/api/search-image?query=nail%20art%20training%20course%2C%20students%20learning%20nail%20design%20techniques%2C%20professional%20nail%20stations%2C%20gel%20polish%20and%20nail%20art%20supplies%2C%20hands-on%20nail%20education%2C%20beauty%20academy%20nail%20classroom&width=400&height=300&seq=nail-course&orientation=landscape",
  },
  {
    title: "Advanced Skin Therapy",
    price: "₹1,79,999",
    duration: "10 Weeks",
    features: [
      "Facial Treatments",
      "Skin Analysis",
      "Product Knowledge",
      "Treatment Planning",
    ],
    tag: "10 Weeks",
    image:
      "https://readdy.ai/api/search-image?query=skincare%20therapy%20training%20course%2C%20esthetician%20students%20learning%20facial%20treatments%2C%20professional%20spa%20classroom%2C%20skincare%20equipment%20and%20products%2C%20hands-on%20skin%20analysis%20training%2C%20beauty%20therapy%20education&width=400&height=300&seq=skin-course&orientation=landscape",
  },
];

const CourseCard = ({image, title, tag, price, duration, features, description}: any) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition group">
        <div className=" bg-gray-300 relative">
          <div className="h-60 overflow-hidden">
            <Image
            height={60}
            width={60}
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-200"
            />
          </div>
          <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {tag}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mt-3 mb-4 font-playfair">
            {title}
          </h3>

          <div className="flex items-center w-full justify-between mb-4">
            <p className="text-yellow-600 font-bold text-3xl mb-3">{price}</p>

            <p className="text-gray-600 mb-4">Duration: {duration}</p>
          </div>

          <ul className="space-y-2 text-gray-600 text-sm mb-4">
            {features.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-2">
                <Check size={16} className="text-[#CA8A04]" /> {f}
              </li>
            ))}
          </ul>

          {description && (
            <p className="text-gray-700 text-sm mb-4">{description}</p>
          )}

          <button className="border-yellow-500 border-2 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-200 cursor-pointer w-full">
            Enroll Now
          </button>
        </div>
      </div>
    );
}


export default function Cources () {
  return (
    <section className="py-20 bg-white" id="academy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Academy <span className="text-[#CA8A04]">Cources</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Transform your passion into a profession with our comprehensive
            beauty courses taught by industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CoursesList.map((course, index) => (
            <CourseCard {...course} key={index} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-linear-to-tr from-yellow-500 to-yellow-600 hover:to-yellow-700 text-white cursor-pointer px-10 py-4 rounded-md font-semibold">
            Get Course Information
          </button>
        </div>
      </div>
    </section>
  );
};
