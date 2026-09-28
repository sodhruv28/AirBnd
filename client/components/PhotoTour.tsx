"use client";

import React, { useEffect, useRef } from "react";
import { ChevronLeft, Share2, Heart } from "lucide-react";
import { photoTourSections, TourSection, LightboxPhoto, lightboxPhotos } from "@/data/photoTour";
import { useKeyboard } from "@/hooks/useKeyboard";
import { useUI } from "@/context/UIContext";

interface PhotoTourProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (photoIndex: number) => void;
  propertyTitle?: string;
  isWishlisted?: boolean;
  onToggleWishlist?: () => void;
}

export const PhotoTour: React.FC<PhotoTourProps> = ({
  isOpen,
  onClose,
  onSelectPhoto,
  propertyTitle = "Flat in Pashan",
  isWishlisted = false,
  onToggleWishlist,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { showToast } = useUI();

  // Keyboard navigation: Escape closes the Photo Tour
  useKeyboard(
    {
      onEscape: onClose,
    },
    isOpen
  );

  // Prevent background scroll when photo tour is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Find index of clicked photo in the global lightboxPhotos array
  const handlePhotoClick = (url: string) => {
    const idx = lightboxPhotos.findIndex((p) => p.url === url);
    onSelectPhoto(idx !== -1 ? idx : 0);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fade-in"
      id="screen2-photo-tour"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#EBEBEB] px-6 sm:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full hover:bg-[#F7F7F7] flex items-center justify-center transition-colors cursor-pointer text-[#222222]"
          id="photo-tour-close-btn"
          aria-label="Back to listing"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: propertyTitle, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                showToast("Photo tour link copied to clipboard!", "success", "Share Tour");
              }

            }}
            className="flex items-center gap-2 text-sm font-semibold text-[#222222] hover:bg-[#F7F7F7] px-3.5 py-2 rounded-lg transition-colors cursor-pointer underline"
          >
            <Share2 className="w-4 h-4 stroke-[2]" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            onClick={onToggleWishlist}
            className="flex items-center gap-2 text-sm font-semibold text-[#222222] hover:bg-[#F7F7F7] px-3.5 py-2 rounded-lg transition-colors cursor-pointer underline"
          >
            <Heart
              className={`w-4 h-4 stroke-[2] ${
                isWishlisted ? "fill-[#FF385C] stroke-[#FF385C]" : ""
              }`}
            />
            <span className="hidden sm:inline">Save</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-6">
          Photo tour
        </h1>

        {/* Room Category Navigation Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-14 pb-8 border-b border-[#EBEBEB]">
          {photoTourSections.map((section) => (
            <div
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group cursor-pointer flex flex-col gap-2"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-transparent group-hover:border-black transition-all duration-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={section.images[0]}
                  alt={section.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#222222] group-hover:underline">
                {section.name}
              </span>
            </div>
          ))}
        </div>

        {/* Detailed Sections with Room Info and Photos */}
        <div className="space-y-16">
          {photoTourSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <div className="mb-6 max-w-2xl">
                <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-2">
                  {section.name}
                </h2>
                <p className="text-sm sm:text-[15px] text-[#717171] leading-relaxed">
                  {section.details}
                </p>
              </div>

              {/* Photo Grid for this room */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.images.map((imgUrl, imgIdx) => (
                  <div
                    key={imgIdx}
                    onClick={() => handlePhotoClick(imgUrl)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`${section.name} photo ${imgIdx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
