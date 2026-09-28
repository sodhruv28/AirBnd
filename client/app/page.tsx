"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { ListingSection } from "@/components/ListingSection";
import { ListingDetail } from "@/components/ListingDetail";
import { PhotoTour } from "@/components/PhotoTour";
import { Lightbox } from "@/components/Lightbox";
import { Footer } from "@/components/Footer";
import { initialListings, Listing } from "@/data/listings";
import { UIProvider, useUI } from "@/context/UIContext";

function HomeContent() {
  const [activeTab, setActiveTab] = useState<"homes" | "experiences" | "services">("homes");
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [searchFilter, setSearchFilter] = useState<{
    destination: string;
    guests: number;
    dates: string;
  } | null>(null);

  const { showToast, openWishlistModal } = useUI();

  // Initialize wishlist from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("airbnb_wishlist");
      if (saved) {
        setWishlist(JSON.parse(saved));
      } else {
        setWishlist([1, 2]); // default initial favourites
      }
    } catch {
      setWishlist([1, 2]);
    }
  }, []);

  const handleToggleWishlist = (listingId: number) => {
    setWishlist((prev) => {
      const isRemoving = prev.includes(listingId);
      const updated = isRemoving
        ? prev.filter((id) => id !== listingId)
        : [...prev, listingId];
      try {
        localStorage.setItem("airbnb_wishlist", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      showToast(
        isRemoving ? "Removed from your wishlist" : "Saved to your wishlist!",
        "heart"
      );
      return updated;
    });
  };

  // Filter listings based on active search or show Pune & Goa sets
  const filteredListings = useMemo(() => {
    if (!searchFilter || (!searchFilter.destination && searchFilter.guests === 0)) {
      return null;
    }
    return initialListings.filter((item) => {
      const matchDest =
        !searchFilter.destination ||
        item.location.toLowerCase().includes(searchFilter.destination.toLowerCase()) ||
        item.title.toLowerCase().includes(searchFilter.destination.toLowerCase());
      const matchGuests = searchFilter.guests === 0 || item.guests >= searchFilter.guests;
      return matchDest && matchGuests;
    });
  }, [searchFilter]);

  const puneListings = useMemo(() => {
    return initialListings.filter((item) => item.location.toLowerCase().includes("pune"));
  }, []);

  const goaListings = useMemo(() => {
    return initialListings.filter((item) => item.location.toLowerCase().includes("goa"));
  }, []);

  const handleOpenPhotoTour = () => {
    setIsPhotoTourOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleGoHome = () => {
    setSelectedListing(null);
    setIsPhotoTourOpen(false);
    setIsLightboxOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar (Screen 1) */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab !== "homes") {
            showToast(`Switched to ${tab} tab! Showing curated ${tab}.`, "airbnb");
          }
        }}
        onHomeClick={handleGoHome}
        wishlistCount={wishlist.length}
        onOpenWishlist={openWishlistModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedListing ? (
          /* Listing Detail View with 5-photo mosaic and reservation bar */
          <ListingDetail
            listing={selectedListing}
            onBack={() => setSelectedListing(null)}
            onOpenPhotoTour={handleOpenPhotoTour}
            onOpenLightbox={handleOpenLightbox}
            isWishlisted={wishlist.includes(selectedListing.id)}
            onToggleWishlist={() => handleToggleWishlist(selectedListing.id)}
          />
        ) : (
          /* Screen 1: Home / Listing Page with Search & Carousels */
          <div>
            {/* Search Bar */}
            <SearchBar
              onSearch={(filter) => setSearchFilter(filter)}
              onClearSearch={() => setSearchFilter(null)}
              isFiltered={Boolean(searchFilter)}
            />

            {/* Filtered Search Results OR Grouped Carousel Sections */}
            {filteredListings ? (
              <div className="max-w-[1760px] mx-auto py-8">
                <ListingSection
                  title={`Search results (${filteredListings.length} found)`}
                  listings={filteredListings}
                  onSelectListing={(listing) => setSelectedListing(listing)}
                  wishlist={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  id="search-results-section"
                />
              </div>
            ) : (
              <div className="max-w-[1760px] mx-auto py-2">
                {/* Carousel Section 1: Places to stay in Pune */}
                <ListingSection
                  title="Places to stay in Pune"
                  listings={puneListings}
                  onSelectListing={(listing) => setSelectedListing(listing)}
                  wishlist={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  id="places-to-stay-in-pune"
                />

                {/* Carousel Section 2: Popular homes in North Goa */}
                <ListingSection
                  title="Popular homes in North Goa"
                  listings={goaListings}
                  onSelectListing={(listing) => setSelectedListing(listing)}
                  wishlist={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  id="popular-homes-in-north-goa"
                />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Screen 2: Photo Tour (Full Screen Gallery) */}
      <PhotoTour
        isOpen={isPhotoTourOpen}
        onClose={() => setIsPhotoTourOpen(false)}
        onSelectPhoto={(idx) => {
          setLightboxIndex(idx);
          setIsLightboxOpen(true);
        }}
        propertyTitle={selectedListing?.title || "Flat in Pashan"}
        isWishlisted={selectedListing ? wishlist.includes(selectedListing.id) : false}
        onToggleWishlist={() => {
          if (selectedListing) handleToggleWishlist(selectedListing.id);
        }}
      />

      {/* Screen 3: Lightbox (Single Photo Viewer with Keyboard Navigation) */}
      <Lightbox
        isOpen={isLightboxOpen}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        onBackToPhotoTour={() => {
          setIsLightboxOpen(false);
          setIsPhotoTourOpen(true);
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function Home() {
  const [wishlist, setWishlist] = useState<number[]>([1, 2]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("airbnb_wishlist");
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const wishlistListings = useMemo(() => {
    return initialListings.filter((l) => wishlist.includes(l.id));
  }, [wishlist]);

  const handleRemoveFromWishlist = (id: number) => {
    const updated = wishlist.filter((item) => item !== id);
    setWishlist(updated);
    try {
      localStorage.setItem("airbnb_wishlist", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <UIProvider
      wishlistListings={wishlistListings}
      onRemoveFromWishlist={handleRemoveFromWishlist}
    >
      <HomeContent />
    </UIProvider>
  );
}
