"use client";

import React, { useState } from "react";
import { Globe, Menu, User } from "lucide-react";
import { useUI } from "@/context/UIContext";

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
  const { openAuthModal, openHostModal, openWishlistModal, openHelpModal, showToast } = useUI();

  const renderTabs = (isMobile: boolean = false) => (
    <nav className={`flex items-center ${isMobile ? "justify-center gap-5 sm:gap-8 w-full" : "gap-2 sm:gap-6"}`}>
      {/* Homes */}
      <button
        onClick={() => onTabChange("homes")}
        className={`group relative flex items-center gap-2 py-2 font-semibold transition-all duration-200 cursor-pointer ${
          isMobile ? "text-xs px-2" : "text-sm px-3"
        } ${activeTab === "homes" ? "text-[#222222]" : "text-[#717171] hover:text-[#222222]"}`}
        id={isMobile ? "nav-tab-homes-mobile" : "nav-tab-homes"}
      >
        <span className={isMobile ? "text-lg leading-none" : "text-xl leading-none"}>🏡</span>
        <span>Homes</span>
        {activeTab === "homes" && (
          <span className={`absolute left-0 right-0 bg-[#222222] rounded-full transition-all duration-300 ${
            isMobile ? "bottom-[-4px] h-[2px]" : "bottom-[-16px] h-[2.5px]"
          }`} />
        )}
      </button>

      {/* Experiences */}
      <button
        onClick={() => onTabChange("experiences")}
        className={`group relative flex items-center gap-1.5 py-2 font-semibold transition-all duration-200 cursor-pointer ${
          isMobile ? "text-xs px-2" : "text-sm px-3"
        } ${activeTab === "experiences" ? "text-[#222222]" : "text-[#717171] hover:text-[#222222]"}`}
        id={isMobile ? "nav-tab-experiences-mobile" : "nav-tab-experiences"}
      >
        <span className={isMobile ? "text-lg leading-none" : "text-xl leading-none"}>🎈</span>
        <div className="flex items-center gap-1">
          <span>Experiences</span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#222222] text-white px-1.5 py-0.2 rounded-full">
            NEW
          </span>
        </div>
        {activeTab === "experiences" && (
          <span className={`absolute left-0 right-0 bg-[#222222] rounded-full transition-all duration-300 ${
            isMobile ? "bottom-[-4px] h-[2px]" : "bottom-[-16px] h-[2.5px]"
          }`} />
        )}
      </button>

      {/* Services */}
      <button
        onClick={() => onTabChange("services")}
        className={`group relative flex items-center gap-1.5 py-2 font-semibold transition-all duration-200 cursor-pointer ${
          isMobile ? "text-xs px-2" : "text-sm px-3"
        } ${activeTab === "services" ? "text-[#222222]" : "text-[#717171] hover:text-[#222222]"}`}
        id={isMobile ? "nav-tab-services-mobile" : "nav-tab-services"}
      >
        <span className={isMobile ? "text-lg leading-none" : "text-xl leading-none"}>🛎️</span>
        <div className="flex items-center gap-1">
          <span>Services</span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#222222] text-white px-1.5 py-0.2 rounded-full">
            NEW
          </span>
        </div>
        {activeTab === "services" && (
          <span className={`absolute left-0 right-0 bg-[#222222] rounded-full transition-all duration-300 ${
            isMobile ? "bottom-[-4px] h-[2px]" : "bottom-[-16px] h-[2.5px]"
          }`} />
        )}
      </button>
    </nav>
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#EBEBEB] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        {/* Desktop Single-Row Navbar (>= 768px) */}
        <div className="hidden md:flex max-w-[1760px] mx-auto px-6 lg:px-16 h-20 items-center justify-between">
          {/* Logo */}
          <div
            onClick={onHomeClick}
            className="flex items-center cursor-pointer select-none group shrink-0"
            id="airbnb-logo-btn"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/airbnb-logo.png"
              alt="Airbnb"
              className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation Tabs */}
          {renderTabs(false)}

          {/* Right Action Menu */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={openHostModal}
              className="hidden lg:inline-flex items-center text-sm font-medium text-[#222222] hover:bg-[#F7F7F7] px-3.5 py-2.5 rounded-full transition-colors cursor-pointer"
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
                      openAuthModal("signup");
                    }}
                    className="w-full text-left px-4 py-3 text-sm font-semibold hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Sign up
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      openAuthModal("login");
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (onOpenWishlist) onOpenWishlist();
                      else openWishlistModal();
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
                  <div className="h-[1px] bg-[#EBEBEB] my-2" />
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      openHostModal();
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Airbnb your home
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      showToast("Host an Experience setup launched!", "airbnb");
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                  >
                    Host an experience
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      openHelpModal();
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

        {/* Mobile Responsive 2-Tier Navbar (< 768px) */}
        <div className="md:hidden flex flex-col">
          {/* Top Row: Logo & Actions */}
          <div className="flex items-center justify-between h-14 px-4 sm:px-6">
            <div
              onClick={onHomeClick}
              className="flex items-center cursor-pointer select-none"
              id="airbnb-logo-btn-mobile"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/airbnb-logo.png"
                alt="Airbnb"
                className="h-7 w-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setShowLanguageModal(true)}
                className="p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors cursor-pointer"
                title="Language and currency"
              >
                <Globe className="w-4 h-4" />
              </button>

              {/* Mobile User Profile Pill */}
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-2 border border-[#DDDDDD] hover:shadow-md rounded-full py-1 px-2.5 transition-shadow duration-200 cursor-pointer bg-white"
                >
                  <Menu className="w-3.5 h-3.5 text-[#222222]" />
                  <div className="w-6 h-6 bg-[#717171] text-white rounded-full flex items-center justify-center overflow-hidden">
                    <User className="w-3.5 h-3.5 fill-white" />
                  </div>
                </button>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] border border-[#EBEBEB] py-2 z-50 animate-zoom-in"
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        openAuthModal("signup");
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm font-semibold hover:bg-[#F7F7F7] text-[#222222]"
                    >
                      Sign up
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        openAuthModal("login");
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#F7F7F7] text-[#222222]"
                    >
                      Log in
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (onOpenWishlist) onOpenWishlist();
                        else openWishlistModal();
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#F7F7F7] text-[#222222] flex items-center justify-between"
                    >
                      <span>Wishlist</span>
                      {wishlistCount > 0 && (
                        <span className="text-xs bg-[#FF385C] text-white font-bold px-2 py-0.5 rounded-full">
                          {wishlistCount}
                        </span>
                      )}
                    </button>
                    <div className="h-[1px] bg-[#EBEBEB] my-1" />
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        openHostModal();
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#F7F7F7] text-[#222222]"
                    >
                      Airbnb your home
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        openHelpModal();
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#F7F7F7] text-[#222222]"
                    >
                      Help Centre
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Row: Centered Navigation Tabs */}
          <div className="border-t border-[#F7F7F7] pt-1 pb-2 px-2 flex justify-center">
            {renderTabs(true)}
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
