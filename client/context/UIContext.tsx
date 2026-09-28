"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import {
  CheckCircle2,
  X,
  Sparkles,
  Heart,
  Info,
  Calendar,
  Users,
  MapPin,
  ShieldCheck,
  ChevronRight,
  Home,
  Check,
} from "lucide-react";
import { Listing } from "@/data/listings";

export interface ToastItem {
  id: string;
  title?: string;
  message: string;
  type?: "success" | "info" | "heart" | "airbnb";
  duration?: number;
}

export type ModalType =
  | "auth"
  | "reservation"
  | "host"
  | "wishlist"
  | "help"
  | "custom";

interface ReservationData {
  listing: Listing;
  dates: string;
  guests: number;
  totalPrice: number;
}

interface UIContextValue {
  showToast: (message: string, type?: ToastItem["type"], title?: string) => void;
  openAuthModal: (initialMode?: "login" | "signup") => void;
  openReservationModal: (data: ReservationData) => void;
  openHostModal: () => void;
  openWishlistModal: () => void;
  openHelpModal: () => void;
  closeModal: () => void;
}

const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({
  children,
  wishlistListings = [],
  onSelectListing,
  onRemoveFromWishlist,
}: {
  children: ReactNode;
  wishlistListings?: Listing[];
  onSelectListing?: (listing: Listing) => void;
  onRemoveFromWishlist?: (id: number) => void;
}) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [reservationData, setReservationData] = useState<ReservationData | null>(null);

  // Toast Handler
  const showToast = useCallback(
    (message: string, type: ToastItem["type"] = "airbnb", title?: string) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, title }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3500);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const openAuthModal = useCallback((mode: "login" | "signup" = "login") => {
    setAuthMode(mode);
    setActiveModal("auth");
  }, []);

  const openReservationModal = useCallback((data: ReservationData) => {
    setReservationData(data);
    setActiveModal("reservation");
  }, []);

  const openHostModal = useCallback(() => {
    setActiveModal("host");
  }, []);

  const openWishlistModal = useCallback(() => {
    setActiveModal("wishlist");
  }, []);

  const openHelpModal = useCallback(() => {
    setActiveModal("help");
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  return (
    <UIContext.Provider
      value={{
        showToast,
        openAuthModal,
        openReservationModal,
        openHostModal,
        openWishlistModal,
        openHelpModal,
        closeModal,
      }}
    >
      {children}

      {/* Floating Modern Airbnb Toast Container */}
      <div className="fixed bottom-6 right-6 z-70 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto bg-white border border-[#EBEBEB] text-[#222222] px-4 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.14)] flex items-start gap-3 animate-zoom-in transition-all"
            id={`toast-${toast.id}`}
          >
            {/* Icon depending on type */}
            <div className="mt-0.5 shrink-0">
              {toast.type === "heart" ? (
                <div className="w-8 h-8 rounded-full bg-[#FFF0F2] flex items-center justify-center text-[#FF385C]">
                  <Heart className="w-4 h-4 fill-[#FF385C]" />
                </div>
              ) : toast.type === "success" ? (
                <div className="w-8 h-8 rounded-full bg-[#E6F4EA] flex items-center justify-center text-[#137333]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#FF385C]/10 flex items-center justify-center text-[#FF385C]">
                  <Sparkles className="w-4 h-4" />
                </div>
              )}
            </div>

            <div className="flex-1">
              {toast.title && (
                <p className="text-xs font-bold uppercase tracking-wider text-[#717171] mb-0.5">
                  {toast.title}
                </p>
              )}
              <p className="text-sm font-medium leading-snug">{toast.message}</p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#717171] hover:text-[#222222] p-1 rounded-full hover:bg-[#F7F7F7] cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Active Modal Backdrop */}
      {activeModal && (
        <div
          className="fixed inset-0 z-70 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Modal Container */}
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-zoom-in overflow-hidden border border-[#EBEBEB]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 1. Auth Modal (Login / Signup) */}
            {activeModal === "auth" && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/airbnb-logo.png" alt="Airbnb" className="h-6 w-auto" />
                  <span className="text-base font-bold text-[#222222]">
                    {authMode === "login" ? "Welcome back" : "Create an account"}
                  </span>
                </div>

                <div className="flex border-b border-[#EBEBEB] mb-6">
                  <button
                    onClick={() => setAuthMode("login")}
                    className={`flex-1 pb-3 text-sm font-bold text-center border-b-2 cursor-pointer transition-colors ${
                      authMode === "login"
                        ? "border-[#222222] text-[#222222]"
                        : "border-transparent text-[#717171] hover:text-[#222222]"
                    }`}
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => setAuthMode("signup")}
                    className={`flex-1 pb-3 text-sm font-bold text-center border-b-2 cursor-pointer transition-colors ${
                      authMode === "signup"
                        ? "border-[#222222] text-[#222222]"
                        : "border-transparent text-[#717171] hover:text-[#222222]"
                    }`}
                  >
                    Sign up
                  </button>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    closeModal();
                    showToast(
                      authMode === "login"
                        ? "Successfully logged in as demo user!"
                        : "Account created successfully! Welcome to Airbnb.",
                      "success"
                    );
                  }}
                  className="space-y-4"
                >
                  {authMode === "signup" && (
                    <div>
                      <label className="text-xs font-semibold text-[#717171] block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        defaultValue="Dhruv Solanki"
                        required
                        className="w-full px-4 py-2.5 border border-[#DDDDDD] rounded-xl text-sm focus:outline-none focus:border-black font-normal"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-semibold text-[#717171] block mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      defaultValue="dhruv@example.com"
                      required
                      className="w-full px-4 py-2.5 border border-[#DDDDDD] rounded-xl text-sm focus:outline-none focus:border-black font-normal"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#717171] block mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      defaultValue="airbnb2026"
                      required
                      className="w-full px-4 py-2.5 border border-[#DDDDDD] rounded-xl text-sm focus:outline-none focus:border-black font-normal"
                    />
                  </div>

                  <p className="text-xs text-[#717171] leading-relaxed">
                    By selecting <strong>Continue</strong>, you agree to Airbnb&apos;s Terms of
                    Service, Payments Terms of Service, and Nondiscrimination Policy.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#FF385C] hover:bg-[#E00B41] active:scale-98 text-white font-semibold py-3 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                  >
                    Continue
                  </button>
                </form>
              </div>
            )}

            {/* 2. Reservation Confirmation Modal */}
            {activeModal === "reservation" && reservationData && (
              <div>
                <div className="text-center pb-4">
                  <div className="w-14 h-14 bg-[#E6F4EA] text-[#137333] rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#222222]">
                    Booking Confirmed!
                  </h2>
                  <p className="text-xs text-[#717171] mt-1">
                    Your reservation has been locked in and confirmation sent.
                  </p>
                </div>

                <div className="bg-[#F7F7F7] rounded-2xl p-4 my-4 border border-[#EBEBEB] space-y-3">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={reservationData.listing.images[0]}
                      alt={reservationData.listing.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#222222]">
                        {reservationData.listing.title}
                      </h4>
                      <p className="text-xs text-[#717171] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{reservationData.listing.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#EBEBEB] pt-3 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[#717171] block">Dates</span>
                      <span className="font-semibold text-[#222222]">
                        {reservationData.dates}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#717171] block">Guests</span>
                      <span className="font-semibold text-[#222222]">
                        {reservationData.guests || 2} guests
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#EBEBEB] pt-3 flex items-center justify-between">
                    <span className="text-xs text-[#717171]">Total Paid</span>
                    <span className="text-base font-bold text-[#222222]">
                      ₹{reservationData.totalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    closeModal();
                    showToast("Reservation saved to your account!", "success");
                  }}
                  className="w-full bg-[#222222] hover:bg-black text-white font-semibold py-3 rounded-xl transition-all text-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}

            {/* 3. Become a Host Modal */}
            {activeModal === "host" && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#FF385C]/10 text-[#FF385C] rounded-2xl flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#222222]">
                      Airbnb your home
                    </h2>
                    <p className="text-xs text-[#717171]">
                      You could earn estimated ₹45,000 / month
                    </p>
                  </div>
                </div>

                <div className="space-y-4 my-6">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F7F7]">
                    <ShieldCheck className="w-5 h-5 text-[#FF385C] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#222222]">
                        AirCover for Hosts
                      </h4>
                      <p className="text-xs text-[#717171]">
                        Top-to-bottom protection included every time you host. Up to $3M damage coverage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F7F7]">
                    <Sparkles className="w-5 h-5 text-[#FF385C] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#222222]">
                        One-to-one Superhost guidance
                      </h4>
                      <p className="text-xs text-[#717171]">
                        We will match you with a Superhost in Pune who will guide you from your first question to your first guest.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    closeModal();
                    showToast("Host onboarding initiated! Welcome aboard.", "airbnb");
                  }}
                  className="w-full bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold py-3 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                >
                  Airbnb Setup
                </button>
              </div>
            )}

            {/* 4. Wishlist Modal */}
            {activeModal === "wishlist" && (
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#EBEBEB]">
                  <Heart className="w-5 h-5 fill-[#FF385C] stroke-[#FF385C]" />
                  <h2 className="text-lg font-bold text-[#222222]">
                    Your Saved Wishlist ({wishlistListings.length})
                  </h2>
                </div>

                {wishlistListings.length === 0 ? (
                  <div className="text-center py-8">
                    <Heart className="w-12 h-12 stroke-[#DDDDDD] mx-auto mb-2" />
                    <p className="text-sm font-semibold text-[#222222]">No saves yet</p>
                    <p className="text-xs text-[#717171] mt-1">
                      As you search, click the heart icon on any card to save your favourite stays.
                    </p>
                  </div>
                ) : (
                  <div className="max-h-[60vh] overflow-y-auto space-y-3 pr-1">
                    {wishlistListings.map((listing) => (
                      <div
                        key={listing.id}
                        onClick={() => {
                          closeModal();
                          if (onSelectListing) onSelectListing(listing);
                        }}
                        className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F7F7F7] border border-[#EBEBEB] cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={listing.images[0]}
                            alt={listing.title}
                            className="w-14 h-14 rounded-xl object-cover"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-[#222222] group-hover:underline">
                              {listing.title}
                            </h4>
                            <p className="text-xs text-[#717171]">{listing.location}</p>
                            <p className="text-xs font-semibold text-[#222222] mt-0.5">
                              ₹{listing.price.toLocaleString("en-IN")} / night
                            </p>
                          </div>
                        </div>

                        {onRemoveFromWishlist && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveFromWishlist(listing.id);
                              showToast("Removed from wishlist", "info");
                            }}
                            className="p-2 text-[#717171] hover:text-[#FF385C] rounded-full hover:bg-white transition-colors"
                            title="Remove"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 5. Help Centre Modal */}
            {activeModal === "help" && (
              <div>
                <h2 className="text-xl font-bold text-[#222222] mb-1">
                  How can we help?
                </h2>
                <p className="text-xs text-[#717171] mb-4">
                  Search guides or get 24/7 guest support.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    "Cancelling your reservation",
                    "Changes to your reservation",
                    "Payment and refund policies",
                    "Finding reservation details",
                    "Contacting your host",
                  ].map((topic) => (
                    <div
                      key={topic}
                      onClick={() => {
                        closeModal();
                        showToast(`Help article: "${topic}" opened!`, "info");
                      }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F7F7F7] border border-[#EBEBEB] text-sm font-medium text-[#222222] cursor-pointer"
                    >
                      <span>{topic}</span>
                      <ChevronRight className="w-4 h-4 text-[#717171]" />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    closeModal();
                    showToast("Connecting to 24/7 support specialist...", "success");
                  }}
                  className="w-full bg-[#222222] hover:bg-black text-white font-semibold py-3 rounded-xl transition-all text-sm cursor-pointer"
                >
                  Contact 24/7 Support
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}
