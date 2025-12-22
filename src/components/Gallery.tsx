"use client";

import { getGallery, urlFor } from "@/sanity/lib/client";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import galleryLocal from "@/data/galleryLocal";

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleries, setGalleries] = useState([]);

  const fetchGallery = async () => {
    try {
      const res = await getGallery();
      setGalleries(res);
    } catch (e) {
      // ignore Sanity errors in case local images are used
      setGalleries([]);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const openAlbum = (images: string[], startIndex = 0) => {
    setSelectedAlbum(images);
    setCurrentIndex(startIndex);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (selectedAlbum) {
      setCurrentIndex((prev) => (prev + 1) % selectedAlbum.length);
    }
  };

  const prevImage = () => {
    if (selectedAlbum) {
      setCurrentIndex((prev) => (prev - 1 + selectedAlbum.length) % selectedAlbum.length);
    }
  };

  const AlbumThumbnail = ({ images, label }: { images: string[]; label?: string }) => {
    return (
      <div
        onClick={() => openAlbum(images)}
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-300"
      >
        <div className="aspect-square relative overflow-hidden">
          <Image
            height={400}
            width={400}
            src={images[0]}
            alt={label || "gallery"}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-white font-bold text-lg mb-1">{label}</h4>
            <p className="text-white/80 text-sm">{images.length} photos</p>
          </div>
          <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="h-14 w-14 bg-white/30 rounded-full flex items-center justify-center">
              <ZoomIn size={24} className="text-white" />
            </span>
          </div>
        </div>
      </div>
    );
  };

  const allImages = [
    ...galleryLocal.nailArt,
    ...galleryLocal.makeup,
    ...galleryLocal.evening,
    ...galleryLocal.academic,
    ...(galleries && galleries.length ? galleries.map((it: any) => urlFor(it.image).url()) : []),
  ];

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

        {/* Local sections mapped to public folders - one thumbnail per album */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <AlbumThumbnail images={galleryLocal.nailArt} label="Nail Art" />
          <AlbumThumbnail images={galleryLocal.makeup} label="Makeup" />
          <AlbumThumbnail images={galleryLocal.evening} label="Evening Looks" />
          <AlbumThumbnail images={galleryLocal.academic} label="Academic Training" />
        </div>

        {/* View All Images button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => openAlbum(allImages)}
            className="px-6 py-3 bg-amber-500 text-white rounded-full shadow hover:bg-amber-600 transition"
          >
            View All Images
          </button>
        </div>
      </div>

      {/* Album Slider Modal */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Main Image */}
            <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
              <Image
                src={selectedAlbum[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg transition z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg transition z-10"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>

            {/* Close Button */}
            <button
              onClick={closeAlbum}
              className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg transition z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {selectedAlbum.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
