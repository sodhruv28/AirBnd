"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  Share2,
  Heart,
  Grid,
  Star,
  Award,
  ShieldCheck,
  DoorOpen,
  Wifi,
  Wind,
  Car,
  Tv,
  Check,
  MapPin,
  Calendar,
} from "lucide-react";
import { Listing } from "@/data/listings";

interface ListingDetailProps {
  listing: Listing;
  onBack: () => void;
  onOpenPhotoTour: () => void;
  onOpenLightbox: (photoIndex: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export const ListingDetail: React.FC<ListingDetailProps> = ({
  listing,
  onBack,
  onOpenPhotoTour,
  onOpenLightbox,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<"photos" | "amenities" | "reviews" | "location">("photos");

  const images = listing.images && listing.images.length >= 5
    ? listing.images
    : [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
      ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: listing.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Listing URL copied to clipboard!");
    }
  };

  const scrollToSection = (id: string, tab: typeof activeSubTab) => {
    setActiveSubTab(tab);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20 animate-fade-in" id="listing-detail-view">
      {/* Top Back Navigation Bar */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pt-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#222222] hover:underline mb-2 cursor-pointer group"
          id="back-to-homes-btn"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>All listings</span>
        </button>

        {/* Title & Action Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#222222]">
            {listing.title}
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-sm font-semibold text-[#222222] hover:bg-[#F7F7F7] px-3.5 py-2 rounded-lg transition-colors cursor-pointer underline"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button
              onClick={onToggleWishlist}
              className="flex items-center gap-2 text-sm font-semibold text-[#222222] hover:bg-[#F7F7F7] px-3.5 py-2 rounded-lg transition-colors cursor-pointer underline"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWishlisted ? "fill-[#FF385C] stroke-[#FF385C]" : ""
                }`}
              />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5-Photo Hero Mosaic Grid */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 mt-4">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[2/1] grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 bg-gray-100">
          {/* Main Hero Photo (Left 50%) */}
          <div
            onClick={onOpenPhotoTour}
            className="md:col-span-2 md:row-span-2 relative cursor-pointer overflow-hidden group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0]}
              alt={listing.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Top Middle */}
          <div
            onClick={onOpenPhotoTour}
            className="hidden md:block relative cursor-pointer overflow-hidden group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[1]}
              alt="Photo 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Top Right */}
          <div
            onClick={onOpenPhotoTour}
            className="hidden md:block relative cursor-pointer overflow-hidden group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[2]}
              alt="Photo 3"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Bottom Middle */}
          <div
            onClick={onOpenPhotoTour}
            className="hidden md:block relative cursor-pointer overflow-hidden group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[3]}
              alt="Photo 4"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Bottom Right */}
          <div
            onClick={onOpenPhotoTour}
            className="hidden md:block relative cursor-pointer overflow-hidden group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[4]}
              alt="Photo 5"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Floating 'Show all photos' Pill Button */}
          <button
            onClick={onOpenPhotoTour}
            className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-[#222222] font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg border border-[#222222]/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 z-10 cursor-pointer"
            id="show-all-photos-btn"
          >
            <Grid className="w-4 h-4" />
            <span>Show all photos</span>
          </button>
        </div>
      </div>

      {/* Sticky Secondary Nav Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#EBEBEB] mt-6">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 h-14 flex items-center justify-between">
          <div className="flex gap-8 text-sm font-semibold text-[#717171]">
            <button
              onClick={() => scrollToSection("photos-section", "photos")}
              className={`py-4 transition-colors cursor-pointer ${
                activeSubTab === "photos"
                  ? "text-[#222222] border-b-2 border-black"
                  : "hover:text-[#222222]"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => scrollToSection("amenities-section", "amenities")}
              className={`py-4 transition-colors cursor-pointer ${
                activeSubTab === "amenities"
                  ? "text-[#222222] border-b-2 border-black"
                  : "hover:text-[#222222]"
              }`}
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("reviews-section", "reviews")}
              className={`py-4 transition-colors cursor-pointer ${
                activeSubTab === "reviews"
                  ? "text-[#222222] border-b-2 border-black"
                  : "hover:text-[#222222]"
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("location-section", "location")}
              className={`py-4 transition-colors cursor-pointer ${
                activeSubTab === "location"
                  ? "text-[#222222] border-b-2 border-black"
                  : "hover:text-[#222222]"
              }`}
            >
              Location
            </button>
          </div>

          {/* Sticky Reserve CTA info */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-bold text-[#222222]">
                ₹{listing.price.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-normal text-[#717171]">
                  for {listing.nights || 2} nights
                </span>
              </div>
              <div className="text-xs text-[#717171] flex items-center justify-end gap-1">
                <Star className="w-3 h-3 fill-black text-black" />
                <span className="font-semibold text-black">{listing.rating.toFixed(2)}</span>
                <span>· {listing.reviewsCount || 128} reviews</span>
              </div>
            </div>
            <button
              onClick={() => alert(`Reservation confirmed for ${listing.title}!`)}
              className="bg-[#FF385C] hover:bg-[#E00B41] text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>

      {/* Main Details & Booking Sidebar Layout */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12" id="photos-section">
        {/* Left Column (Details) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Property Summary */}
          <div className="pb-6 border-b border-[#EBEBEB]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#222222]">
              {listing.type} in {listing.location}
            </h2>
            <p className="text-sm text-[#717171] mt-1">
              {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.bathrooms} bathrooms
            </p>
            <div className="mt-3 inline-flex items-center gap-2 bg-[#F7F7F7] px-3.5 py-1.5 rounded-full border border-[#EBEBEB]">
              <Star className="w-4 h-4 fill-[#222222]" />
              <span className="text-sm font-semibold text-[#222222]">{listing.rating.toFixed(2)}</span>
              <span className="text-[#717171]">·</span>
              <span className="text-sm font-semibold text-[#222222] underline cursor-pointer">
                {listing.reviewsCount || 128} reviews
              </span>
            </div>
          </div>

          {/* Host Info */}
          <div className="flex items-center gap-4 pb-6 border-b border-[#EBEBEB]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={listing.host?.avatar || "https://i.pravatar.cc/150?img=11"}
              alt={listing.host?.name || "Host"}
              className="w-14 h-14 rounded-full object-cover shadow-sm"
            />
            <div>
              <h3 className="text-base font-bold text-[#222222]">
                Hosted by {listing.host?.name || "Rahul"}
              </h3>
              <p className="text-xs text-[#717171]">
                {listing.host?.isSuperhost ? "Superhost · " : ""}
                Joined {listing.host?.joiningDate || "June 2021"}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-5 pb-6 border-b border-[#EBEBEB]">
            <div className="flex items-start gap-4">
              <DoorOpen className="w-6 h-6 text-[#222222] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#222222]">Self check-in</h4>
                <p className="text-xs text-[#717171]">Check yourself in with the digital smart lock.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 text-[#222222] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#222222]">Experienced host</h4>
                <p className="text-xs text-[#717171]">Rahul has 100% 5-star ratings from recent guests.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#222222] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#222222]">Free cancellation before 48 hours</h4>
                <p className="text-xs text-[#717171]">Get a full refund if you change your plans.</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pb-6 border-b border-[#EBEBEB]">
            <h3 className="text-lg font-bold text-[#222222] mb-3">About this space</h3>
            <p className="text-[15px] text-[#222222] leading-relaxed">
              {listing.description ||
                "A beautiful, modern apartment located in the serene surroundings of Pashan. Features high-speed Wi-Fi, fully equipped kitchen, and balcony with garden view. Perfect for families and work-from-home professionals."}
            </p>
          </div>

          {/* Amenities Section */}
          <div id="amenities-section" className="pb-8 border-b border-[#EBEBEB] scroll-mt-28">
            <h3 className="text-lg font-bold text-[#222222] mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm text-[#222222]">
                <Wifi className="w-5 h-5 text-[#717171]" />
                <span>Fast Wi-Fi (150 Mbps)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#222222]">
                <Wind className="w-5 h-5 text-[#717171]" />
                <span>Air conditioning</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#222222]">
                <Car className="w-5 h-5 text-[#717171]" />
                <span>Free parking on premises</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#222222]">
                <Tv className="w-5 h-5 text-[#717171]" />
                <span>55-inch 4K HDTV with Netflix</span>
              </div>
            </div>
            <button
              onClick={onOpenPhotoTour}
              className="mt-6 border border-[#222222] text-[#222222] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#F7F7F7] transition-colors cursor-pointer"
            >
              Show all amenities & photos
            </button>
          </div>

          {/* Reviews Section */}
          <div id="reviews-section" className="pb-8 border-b border-[#EBEBEB] scroll-mt-28">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 fill-[#222222]" />
              <h3 className="text-xl font-bold text-[#222222]">
                {listing.rating.toFixed(2)} · {listing.reviewsCount || 128} reviews
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(listing.reviews || [
                {
                  id: 1,
                  author: "Sneha M.",
                  avatar: "https://i.pravatar.cc/150?img=5",
                  date: "March 2024",
                  comment: "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back.",
                },
                {
                  id: 2,
                  author: "James T.",
                  avatar: "https://i.pravatar.cc/150?img=12",
                  date: "February 2024",
                  comment: "Great location, very comfortable. The apartment had everything we needed and more.",
                },
              ]).map((rev) => (
                <div key={rev.id} className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#EBEBEB]">
                  <div className="flex items-center gap-3 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#222222]">{rev.author}</div>
                      <div className="text-xs text-[#717171]">{rev.date}</div>
                    </div>
                  </div>
                  <p className="text-sm text-[#222222] leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div id="location-section" className="pb-8 scroll-mt-28">
            <h3 className="text-lg font-bold text-[#222222] mb-2">Where you will be</h3>
            <p className="text-sm text-[#717171] mb-4 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#222222]" />
              <span>{listing.location}</span>
            </p>
            <div className="h-64 rounded-2xl bg-[#E8F0FE] flex flex-col items-center justify-center p-6 text-center border border-[#DDDDDD]">
              <MapPin className="w-10 h-10 text-[#FF385C] mb-2 animate-bounce" />
              <div className="font-semibold text-[#222222]">{listing.location}</div>
              <p className="text-xs text-[#717171] max-w-md mt-1">
                Exact location information provided after booking confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Reservation Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 border border-[#DDDDDD] rounded-3xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.12)] bg-white space-y-5">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-2xl font-bold text-[#222222]">
                  ₹{listing.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-[#717171]"> / night</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-3.5 h-3.5 fill-black text-black" />
                <span className="font-semibold">{listing.rating.toFixed(2)}</span>
                <span className="text-[#717171]">({listing.reviewsCount || 128})</span>
              </div>
            </div>

            {/* Check-in / Checkout Box */}
            <div className="border border-[#B0B0B0] rounded-2xl overflow-hidden divide-y divide-[#B0B0B0]">
              <div className="grid grid-cols-2 divide-x divide-[#B0B0B0]">
                <div className="p-3">
                  <div className="text-[10px] font-bold uppercase text-[#222222]">CHECK-IN</div>
                  <div className="text-xs text-[#717171]">7 Jul 2026</div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] font-bold uppercase text-[#222222]">CHECKOUT</div>
                  <div className="text-xs text-[#717171]">9 Jul 2026</div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-[10px] font-bold uppercase text-[#222222]">GUESTS</div>
                <div className="text-xs text-[#222222] font-medium">1 guest</div>
              </div>
            </div>

            {/* Reserve Button */}
            <button
              onClick={() => alert(`Reservation booked for ₹${(listing.price * 2 + 1200).toLocaleString("en-IN")}!`)}
              className="w-full bg-[#FF385C] hover:bg-[#E00B41] active:scale-98 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md cursor-pointer text-center text-[15px]"
              id="reserve-card-btn"
            >
              Reserve
            </button>

            <p className="text-center text-xs text-[#717171]">
              You won&apos;t be charged yet
            </p>

            {/* Price Breakdown */}
            <div className="space-y-3 pt-3 text-sm text-[#222222] border-t border-[#EBEBEB]">
              <div className="flex justify-between">
                <span className="underline">₹{listing.price.toLocaleString("en-IN")} x 2 nights</span>
                <span>₹{(listing.price * 2).toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Airbnb service fee</span>
                <span>₹1,200</span>
              </div>
              <div className="border-t border-[#EBEBEB] pt-3 flex justify-between font-bold text-base">
                <span>Total before taxes</span>
                <span>₹{(listing.price * 2 + 1200).toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
