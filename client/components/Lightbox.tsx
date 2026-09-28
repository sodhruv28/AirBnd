"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, LayoutGrid } from "lucide-react";
import { LightboxPhoto, lightboxPhotos } from "@/data/photoTour";
import { useKeyboard } from "@/hooks/useKeyboard";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  onBackToPhotoTour?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  onClose,
  onNavigate,
  onBackToPhotoTour,
}) => {
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | null>(null);

  const totalPhotos = lightboxPhotos.length;
  const currentPhoto: LightboxPhoto = lightboxPhotos[currentIndex] || lightboxPhotos[0];

  const handlePrev = () => {
    setSlideDirection("prev");
    const prevIdx = currentIndex === 0 ? totalPhotos - 1 : currentIndex - 1;
    onNavigate(prevIdx);
  };

  const handleNext = () => {
    setSlideDirection("next");
    const nextIdx = currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1;
    onNavigate(nextIdx);
  };

  // Keyboard navigation hook: ArrowLeft, ArrowRight, Escape
  useKeyboard(
    {
      onArrowLeft: handlePrev,
      onArrowRight: handleNext,
      onEscape: onClose,
    },
    isOpen
  );

  // Preload next and previous images
  useEffect(() => {
    if (!isOpen) return;
    const prevIdx = (currentIndex - 1 + totalPhotos) % totalPhotos;
    const nextIdx = (currentIndex + 1) % totalPhotos;
    const img1 = new Image();
    img1.src = lightboxPhotos[prevIdx].url;
    const img2 = new Image();
    img2.src = lightboxPhotos[nextIdx].url;
  }, [currentIndex, isOpen, totalPhotos]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      className="fixed inset-0 z-60 bg-[#FFFFFF] flex flex-col justify-between animate-fade-in select-none"
      id="screen3-lightbox-viewer"
    >
      {/* Top Header Bar */}
      <div className="h-16 px-6 sm:px-10 flex items-center justify-between border-b border-[#EBEBEB] bg-white z-20">
        {/* Left: Back to Photo Tour Grid Button */}
        <button
          onClick={onBackToPhotoTour || onClose}
          className="p-2.5 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors cursor-pointer"
          title="Back to Photo Tour"
          id="lightbox-grid-btn"
        >
          <LayoutGrid className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Center: Photo Title (e.g. Living room 1) */}
        <div className="text-sm font-semibold text-[#222222]">
          {currentPhoto.title}
        </div>

        {/* Right: Counter & Close Button */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#222222] font-medium" id="lightbox-counter">
            {currentIndex + 1} of {totalPhotos}
          </span>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors cursor-pointer"
            id="lightbox-close-btn"
            aria-label="Close photo viewer"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Main Image Area with Floating Nav Buttons */}
      <div
        className="flex-1 relative flex items-center justify-center p-4 sm:p-10 overflow-hidden"
        onClick={onClose}
      >
        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#DDDDDD] bg-white hover:border-black flex items-center justify-center text-[#222222] shadow-md transition-all hover:scale-105 active:scale-95 z-20 cursor-pointer"
          id="lightbox-prev-btn"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Image Container */}
        <div
          className="relative max-w-5xl max-h-[78vh] w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={currentPhoto.url}
            src={currentPhoto.url}
            alt={currentPhoto.title}
            className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl transition-all duration-300 animate-zoom-in"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#DDDDDD] bg-white hover:border-black flex items-center justify-center text-[#222222] shadow-md transition-all hover:scale-105 active:scale-95 z-20 cursor-pointer"
          id="lightbox-next-btn"
          aria-label="Next photo"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Footer / Indicator Bar */}
      <div className="h-12 border-t border-[#EBEBEB] bg-white flex items-center justify-center px-6">
        <span className="text-xs text-[#717171]">
          Use keyboard ← → to navigate, ESC to close
        </span>
      </div>
    </div>
  );
};
