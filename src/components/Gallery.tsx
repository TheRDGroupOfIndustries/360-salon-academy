"use client";

import { getGallery, urlFor } from "@/sanity/lib/client";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import galleryLocal from "@/data/galleryLocal";

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<string[] | null>(null);
  // removed single-image preview state; modal shows only a grid
  const [galleries, setGalleries] = useState([]);
  // pagination for modal grid (3 thumbnails per page)
  const [page, setPage] = useState(0);
  const pageSize = 3;

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

  const openAlbum = (images: string[]) => {
    setSelectedAlbum(images);
    setPage(0);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setPage(0);
  };

  // removed single-image prev/next (not used when showing grid)

  const totalPages = selectedAlbum ? Math.ceil(selectedAlbum.length / pageSize) : 1;
  const prevPage = () => {
    setPage((p) => Math.max(0, p - 1));
  };
  const nextPage = () => {
    if (selectedAlbum) {
      setPage((p) => Math.min(totalPages - 1, p + 1));
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
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
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

  // thumbnails visible on the current page (3 per page => 3x1)
  const visibleThumbnails = selectedAlbum ? selectedAlbum.slice(page * pageSize, (page + 1) * pageSize) : [];

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

      {/* Album Grid Modal (6x6 grid, no large preview, only grid and page arrows) */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Close Button - fixed to backdrop, far top-right */}
          <button
            onClick={closeAlbum}
            className="fixed top-4 right-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg transition z-[60]"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          
          <div className="relative w-full max-w-[95%] h-[90vh] flex flex-col items-center justify-start p-6">
            {/* Top page arrows - larger and more visible */}
            <div className="w-full flex items-center justify-between mb-4 px-2">
              <button
                onClick={prevPage}
                disabled={page === 0}
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg transition disabled:opacity-30 disabled:bg-gray-500"
                aria-label="Previous page"
              >
                <ChevronLeft size={40} />
              </button>

              <div className="text-white/90 px-6 py-3 rounded-full bg-black/60 text-sm font-semibold">
                Page {page + 1} / {totalPages}
              </div>

              <button
                onClick={nextPage}
                disabled={page >= totalPages - 1}
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg transition disabled:opacity-30 disabled:bg-gray-500"
                aria-label="Next page"
              >
                <ChevronRight size={40} />
              </button>
            </div>

            {/* Grid 3x1 - 3 images per row, 1 row per page */}
            <div className="grid grid-cols-3 gap-6 w-full flex-1 max-h-[78vh]">
              {visibleThumbnails.map((image, idx) => {
                const globalIndex = page * pageSize + idx;
                return (
                  <div
                    key={globalIndex}
                    className="rounded overflow-hidden border-2 border-transparent"
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${globalIndex + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
