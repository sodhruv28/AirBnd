"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronRight as TitleChevron } from "lucide-react";
import { Listing } from "@/data/listings";
import { ListingCard } from "./ListingCard";

interface ListingSectionProps {
  title: string;
  listings: Listing[];
  onSelectListing: (listing: Listing) => void;
  wishlist: number[];
  onToggleWishlist: (listingId: number) => void;
  id?: string;
}

export const ListingSection: React.FC<ListingSectionProps> = ({
  title,
  listings,
  onSelectListing,
  wishlist,
  onToggleWishlist,
  id,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [listings]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 304 * 2; // ~2 cards width + gap
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  if (!listings || listings.length === 0) return null;

  return (
    <section className="py-6 border-b border-[#F0F0F0] last:border-none" id={id}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 px-6 sm:px-10 lg:px-16">
        <h2 className="text-xl sm:text-2xl font-bold text-[#222222] tracking-tight flex items-center gap-1.5 cursor-pointer hover:underline group">
          <span>{title}</span>
          <TitleChevron className="w-5 h-5 text-[#222222] transition-transform group-hover:translate-x-1" />
        </h2>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#222222] hover:border-black hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer bg-white"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#222222] hover:border-black hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer bg-white"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-6 sm:px-10 lg:px-16 pb-3 pt-1"
      >
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onSelect={onSelectListing}
            isWishlisted={wishlist.includes(listing.id)}
            onToggleWishlist={onToggleWishlist}
          />
        ))}
      </div>
    </section>
  );
};
