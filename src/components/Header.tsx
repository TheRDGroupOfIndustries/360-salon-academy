"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!dropdownRef.current.contains(e.target)) {
        setShowAbout(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const openAbout = (e: any) => {
    e.preventDefault();
    // navigate to about section and show dropdown
    setShowAbout((s) => !s);
    if (typeof window !== "undefined") {
      window.location.hash = "#about";
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-30">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center ">
          <Image
            src="/new_logo.png"
            height={100}
            width={200}
            alt="logo"
            className="object-cover rounded-full "
          />
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 items-center relative">
            <a href="#home" className="text-gray-700 hover:text-yellow-600">
              Home
            </a>

            <button
              onClick={openAbout}
              className="text-gray-700 hover:text-yellow-600"
            >
              About
            </button>

            <a href="#services" className="text-gray-700 hover:text-yellow-600">
              Services
            </a>
            <a href="#academy" className="text-gray-700 hover:text-yellow-600">
              Academy
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-yellow-600">
              Gallery
            </a>
          </nav>

          <a
            href="#contact"
            className="bg-linear-to-tr from-yellow-500 to-yellow-600 hover:to-yellow-700 text-white px-6 py-2 rounded-md font-medium text-sm"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* About dropdown - shows the two PDFs in public folder */}
      {showAbout && (
        <div
          ref={dropdownRef}
          className="absolute left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg rounded-md w-80 z-40"
        >
          <div className="p-4">
            <h4 className="font-semibold mb-2">About - Documents</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/Makeup at 360 Salon.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-gray-700 hover:text-yellow-600"
                >
                  Explore More (Makeup PDF)
                </a>
              </li>
              <li>
                <a
                  href="/SKIN (5).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-gray-700 hover:text-yellow-600"
                >
                  Explore More (Skin PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
