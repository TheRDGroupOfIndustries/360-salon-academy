"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Academy", href: "#academy" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-30">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center ">
          {/* <div className="bg-linear-to-r from-yellow-500 to-yellow-600 h-10 w-10 flex items-center justify-center p-4 rounded-full font-bold">
          </div> */}
          <Image
            src="/new_logo.png"
            height={100}
            width={200}
            alt="logo"
            className="object-cover rounded-full "
          />
          {/* <span className="text-2xl font-bold text-gray-800 font-playfair">
            360 Salon & Academy
          </span> */}
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-yellow-600">
              Services
            </a>
            <a href="#academy" className="text-gray-700 hover:text-yellow-600">
              Academy
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-yellow-600">
              Gallery
            </a>
            {/* <a href="#contact" className="text-gray-700 hover:text-yellow-600">
              Contact
            </a> */}
          </nav>
          <a
            href="#contact"
            className="bg-linear-to-tr from-yellow-500 to-yellow-600 hover:to-yellow-700 text-white px-6 py-2 rounded-md font-medium text-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
