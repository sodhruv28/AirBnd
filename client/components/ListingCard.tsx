"use client";

import React, { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Listing } from "@/data/listings";

interface ListingCardProps {
  listing: Listing;
  onSelect: (listing: Listing) => void;
  isWishlisted: boolean;
  onToggleWishlist: (listingId: number) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  listing,
  onSelect,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [heartPopping, setHeartPopping] = useState(false);

  const images = listing.images && listing.images.length > 0
    ? listing.images
    : ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHeartPopping(true);
    setTimeout(() => setHeartPopping(false), 300);
    onToggleWishlist(listing.id);
  };

  return (
    <div
      onClick={() => onSelect(listing)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col w-[280px] shrink-0 select-none"
      id={`listing-card-${listing.id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        {/* Carousel Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentImageIndex]}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Guest Favourite Badge */}
        {listing.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
            <span className="text-xs font-semibold text-[#222222] tracking-tight">
              {listing.badge}
            </span>
          </div>
        )}

        {/* Heart / Save Button */}
        <button
          onClick={handleHeartClick}
          aria-label="Save this listing"
          className={`absolute top-3 right-3 p-1.5 transition-transform duration-150 hover:scale-110 cursor-pointer ${
            heartPopping ? "animate-heart-pop" : ""
          }`}
          id={`heart-btn-${listing.id}`}
        >
          <Heart
            className={`w-6 h-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-colors ${
              isWishlisted
                ? "fill-[#FF385C] stroke-[#FF385C]"
                : "fill-black/30 stroke-white stroke-[2]"
            }`}
          />
        </button>

        {/* Carousel Navigation Arrows */}
        {isHovered && images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-md transition-transform hover:scale-105 z-10 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-md transition-transform hover:scale-105 z-10 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </>
        )}

        {/* Carousel Indicator Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
            {images.slice(0, 5).map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  dotIdx === currentImageIndex
                    ? "w-4 bg-white"
                    : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Listing Meta Details */}
      <div className="mt-3 flex flex-col gap-0.5">
        <div className="flex items-center justify-between text-[15px] font-medium text-[#222222]">
          <span className="truncate pr-2 font-semibold">{listing.title}</span>
          <div className="flex items-center gap-1 shrink-0 font-normal">
            <Star className="w-3.5 h-3.5 fill-[#222222] stroke-[#222222]" />
            <span>{listing.rating.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-[14px] text-[#717171] truncate">
          {listing.location}
        </div>

        <div className="text-[14px] text-[#717171]">
          {listing.dates || "7 Jul - 12 Jul"}
        </div>

        <div className="mt-1 text-[15px] text-[#222222]">
          <span className="font-semibold">₹{listing.price.toLocaleString("en-IN")}</span>{" "}
          <span className="font-normal text-[#717171]">for {listing.nights || 2} nights</span>
        </div>
      </div>
    </div>
  );
};
