'use client';

import { Award, GraduationCap, Heart, Lightbulb, Sparkles, Star } from "lucide-react";
import Image from "next/image";

export default function OurStory () {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-6xl font-bold text-gray-800 mb-6 font-playfair ">
            Our <span className="text-[#CA8A04]">Story</span>{" "}
          </h2>
          <p className="text-gray-600 mb-4 text-lg font-thin">
            At 360 Salon & Academy, we believe beauty is an art form that
            deserves the finest canvas. Founded with a vision to redefine luxury
            in the beauty industry, we combine cutting-edge techniques with
            timeless elegance.
          </p>
          <p className="text-gray-600 mb-6 text-lg font-thin">
            Our academy empowers the next generation of beauty professionals
            with comprehensive training programs, while our salon provides an
            unparalleled experience for discerning clients who appreciate
            excellence.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="font-bold text-2xl text-gray-800">Luxury</p>
              <p className="text-gray-600 text-sm">
                Premium services with attention to every detail
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="font-bold text-2xl text-gray-800">Skill</p>
              <p className="text-gray-600 text-sm">
                Expert techniques and professional training
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="font-bold text-2xl text-gray-800">Confidence</p>
              <p className="text-gray-600 text-sm">
                Empowering beauty that radiates from within
              </p>
            </div>
          </div>
        </div>
        <div className="h-[650px] bg-gray-300 rounded-lg overflow-hidden">
          <Image
            height={650}
            width={400}
            src="/story.png"
            alt="Beauty professional"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};
