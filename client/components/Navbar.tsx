"use client";

import React, { useState } from "react";
import { Globe, Menu, User, Sparkles } from "lucide-react";

interface NavbarProps {
  activeTab: "homes" | "experiences" | "services";
  onTabChange: (tab: "homes" | "experiences" | "services") => void;
  onHomeClick: () => void;
  wishlistCount?: number;
  onOpenWishlist?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onHomeClick,
  wishlistCount = 0,
  onOpenWishlist,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#EBEBEB] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={onHomeClick}
            className="flex items-center gap-2 cursor-pointer select-none group"
            id="airbnb-logo-btn"
          >
            <svg
              className="w-8 h-8 fill-[#FF385C] transition-transform duration-200 group-hover:scale-105"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.77-3.69 8.806-8.5 8.806-3.238 0-6.107-1.848-7.5-4.63-1.393 2.782-4.262 4.63-7.5 4.63-4.81 0-8.5-4.036-8.5-8.806 0-1.28.324-2.529.971-3.711l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C8.537 1.963 9.992 1 12 1zm0 2c-1.343 0-2.385.665-3.418 2.508l-.51 1.005C10.158 10.287 6.028 18.94 5.068 21.2l-.128.312C4.428 22.536 4.148 23.513 4.148 24.5c0 3.655 2.757 6.806 6.352 6.806 2.668 0 5.076-1.748 6.012-4.375l.488-1.376.488 1.376c.936 2.627 3.344 4.375 6.012 4.375 3.595 0 6.352-3.151 6.352-6.806 0-.987-.28-1.964-.792-2.988l-.128-.312c-.96-2.26-5.09-10.913-7.004-14.687l-.51-1.005C20.385 3.665 19.343 3 18 3zm0 13c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
            </svg>
            <span className="text-[#FF385C] font-bold text-xl tracking-tight hidden sm:inline-block">
              airbnb
            </span>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-2 sm:gap-6">
            {/* Homes */}
            <button
              onClick={() => onTabChange("homes")}
              className={`group relative flex items-center gap-2.5 px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "homes"
                  ? "text-[#222222]"
                  : "text-[#717171] hover:text-[#222222]"
              }`}
              id="nav-tab-homes"
            >
              <span className="text-xl leading-none">🏡</span>
              <span>Homes</span>
              {activeTab === "homes" && (
                <span className="absolute bottom-[-16px] left-0 right-0 h-[2.5px] bg-[#222222] rounded-full transition-all duration-300" />
              )}
            </button>

            {/* Experiences */}
            <button
              onClick={() => onTabChange("experiences")}
              className={`group relative flex items-center gap-2 px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "experiences"
                  ? "text-[#222222]"
                  : "text-[#717171] hover:text-[#222222]"
              }`}
              id="nav-tab-experiences"
            >
              <span className="text-xl leading-none">🎈</span>
              <div className="flex items-center gap-1.5">
                <span>Experiences</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#222222] text-white px-1.5 py-0.5 rounded-full">
                  NEW
                </span>
              </div>
              {activeTab === "experiences" && (
                <span className="absolute bottom-[-16px] left-0 right-0 h-[2.5px] bg-[#222222] rounded-full transition-all duration-300" />
              )}
            </button>

            {/* Services */}
            <button
              onClick={() => onTabChange("services")}
              className={`group relative flex items-center gap-2 px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "services"
                  ? "text-[#222222]"
                  : "text-[#717171] hover:text-[#222222]"
              }`}
              id="nav-tab-services"
            >
              <span className="text-xl leading-none">🛎️</span>
              <div className="flex items-center gap-1.5">
                <span>Services</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#222222] text-white px-1.5 py-0.5 rounded-full">
                  NEW
                </span>
              </div>
              {activeTab === "services" && (
                <span className="absolute bottom-[-16px] left-0 right-0 h-[2.5px] bg-[#222222] rounded-full transition-all duration-300" />
              )}
            </button>
          </nav>

          {/* Right Action Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Become a host modal / onboarding")}
              className="hidden md:inline-flex items-center text-sm font-medium text-[#222222] hover:bg-[#F7F7F7] px-3.5 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Become a host
            </button>

            <button
              onClick={() => setShowLanguageModal(true)}
              className="p-2.5 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors cursor-pointer"
              title="Language and currency"
              id="globe-icon-btn"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* User Profile Pill */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-3 border border-[#DDDDDD] hover:shadow-md rounded-full py-1.5 px-3 transition-shadow duration-200 cursor-pointer bg-white"
                id="user-menu-btn"
              >
                <Menu className="w-4 h-4 text-[#222222]" />
                <div className="w-7 h-7 bg-[#717171] text-white rounded-full flex items-center justify-center overflow-hidden">
                  <User className="w-4 h-4 fill-white" />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] border border-[#EBEBEB] py-2 z-50 animate-zoom-in"
                  onMouseLeave={() => setIsMenuOpen(false)}
                >
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      alert("Sign up modal");
                    }}
                    className="w-full text-left px-4 py-3 text-sm font-semibold hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Sign up
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      alert("Log in modal");
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Log in
                  </button>
                  {onOpenWishlist && (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenWishlist();
                      }}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-[#F7F7F7] text-[#222222] transition-colors flex items-center justify-between"
                    >
                      <span>Wishlist</span>
                      {wishlistCount > 0 && (
                        <span className="text-xs bg-[#FF385C] text-white font-bold px-2 py-0.5 rounded-full">
                          {wishlistCount}
                        </span>
                      )}
                    </button>
                  )}
                  <div className="h-[1px] bg-[#EBEBEB] my-2" />
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      alert("Airbnb your home");
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Airbnb your home
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      alert("Host an experience");
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Host an experience
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      alert("Help Centre");
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Help Centre
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Language / Currency Modal */}
      {showLanguageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowLanguageModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#EBEBEB]">
              <h2 className="text-lg font-bold text-[#222222]">
                Language and currency
              </h2>
              <button
                onClick={() => setShowLanguageModal(false)}
                className="p-2 hover:bg-[#F7F7F7] rounded-full text-[#222222]"
              >
                ✕
              </button>
            </div>
            <div className="py-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[#717171] mb-2">
                  Suggested languages
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 border-2 border-[#222222] rounded-xl font-medium cursor-pointer">
                    <p className="text-sm text-[#222222]">English</p>
                    <p className="text-xs text-[#717171]">India</p>
                  </div>
                  <div className="p-3 border border-[#DDDDDD] rounded-xl hover:border-black font-medium cursor-pointer">
                    <p className="text-sm text-[#222222]">हिन्दी</p>
                    <p className="text-xs text-[#717171]">भारत</p>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <h3 className="text-sm font-semibold text-[#717171] mb-2">
                  Currency
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 border-2 border-[#222222] rounded-xl font-medium cursor-pointer">
                    <p className="text-sm text-[#222222]">Indian Rupee</p>
                    <p className="text-xs text-[#717171]">₹ INR</p>
                  </div>
                  <div className="p-3 border border-[#DDDDDD] rounded-xl hover:border-black font-medium cursor-pointer">
                    <p className="text-sm text-[#222222]">United States Dollar</p>
                    <p className="text-xs text-[#717171]">$ USD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
