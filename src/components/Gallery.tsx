"use client";

import { getGallery, urlFor } from "@/sanity/lib/client";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState("");
  const [galleries, setGalleries] = useState([])

  const fetchGallery = async () => {
    const res = await getGallery();
    console.log("fetchGallery", res);
    setGalleries(res);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Our <span className="text-[#CA8A04]">Gallery</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Witness the artistry and transformations that happen at 360 Salon &
            Academy. From stunning makeovers to successful graduates, see our
            work in action.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleries.map((item: any, index) => (
            <div
              key={item.name}
              onClick={() => setSelectedImage(urlFor(item.image).url())}
              className="h-full w-full bg-gray-300 rounded-lg overflow-hidden relative group"
            >
              <Image
                height={200}
                width={200}
                src={urlFor(item.image).url()}
                alt={item.image?.alt || item.name}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-300"
              />

              <div className="absolute group-hover:opacity-100 opacity-0 transition-all duration-200 inset-0 bg-zinc-900/50 flex flex-col gap-2 items-center justify-center">
                <span className="px-4 py-1 bg-[#EAB308] font-semibold rounded-full">
                  {item.name}
                </span>

                <span className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                  <ZoomIn size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-40">
          <div className=" p-2">
            {/* IMAGE CONTAINER */}
            <div className="relative w-[650px] h-[600px] max-w-[90vw] max-h-[90vh] overflow-hidden">
              <Image
                src={selectedImage}
                alt=""
                fill
                className="object-contain shadow-2xl rounded-2xl"
                unoptimized
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage("")}
              className="absolute top-10 right-10 bg-white/80 hover:bg-white text-black rounded-full h-10 w-10 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
