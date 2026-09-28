"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin, X, Plus, Minus, Navigation } from "lucide-react";

interface SearchBarProps {
  onSearch: (filters: { destination: string; guests: number; dates: string }) => void;
  onClearSearch: () => void;
  isFiltered?: boolean;
}

const POPULAR_DESTINATIONS = [
  { name: "Pune, Maharashtra", desc: "Places to stay in Pune", icon: "🏙️" },
  { name: "North Goa, Goa", desc: "Popular beach destination", icon: "🏖️" },
  { name: "Mumbai, Maharashtra", desc: "City of dreams & Gateway of India", icon: "🌆" },
  { name: "Lonavala, Maharashtra", desc: "Scenic hill station for nature lovers", icon: "⛰️" },
  { name: "Udaipur, Rajasthan", desc: "Lakes & stunning architecture", icon: "🏰" },
];

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onClearSearch,
  isFiltered = false,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<"where" | "when" | "who" | null>(null);
  const [destination, setDestination] = useState<string>("");
  const [dates, setDates] = useState<string>("7 Jul - 18 Jul");
  const [guests, setGuests] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectDestination = (dest: string) => {
    setDestination(dest);
    setActiveDropdown("when");
  };

  const handleTriggerSearch = () => {
    setActiveDropdown(null);
    onSearch({ destination, guests, dates });
  };

  const handleReset = () => {
    setDestination("");
    setGuests(0);
    setActiveDropdown(null);
    onClearSearch();
  };

  return (
    <div className="w-full flex justify-center py-2 sm:py-4 px-3 sm:px-6 relative z-30" ref={containerRef}>
      <div className="relative inline-flex items-center bg-white border border-[#DDDDDD] rounded-full shadow-[0_3px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 max-w-3xl w-full">
        {/* Where Section */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "where" ? null : "where")}
          className={`flex-1 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-pointer transition-colors duration-200 ${
            activeDropdown === "where" ? "bg-[#EBEBEB] shadow-inner" : "hover:bg-[#F7F7F7]"
          }`}
          id="search-where-pill"
        >
          <div className="text-[11px] sm:text-xs font-bold text-[#222222] tracking-tight">Where</div>
          <div className="text-xs sm:text-sm text-[#717171] truncate font-normal">
            {destination || "Search destinations"}
          </div>
        </div>

        <div className="h-6 sm:h-8 w-[1px] bg-[#DDDDDD] self-center" />

        {/* When Section */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "when" ? null : "when")}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-pointer transition-colors duration-200 hidden sm:block ${
            activeDropdown === "when" ? "bg-[#EBEBEB] shadow-inner" : "hover:bg-[#F7F7F7]"
          }`}
          id="search-when-pill"
        >
          <div className="text-[11px] sm:text-xs font-bold text-[#222222] tracking-tight">When</div>
          <div className="text-xs sm:text-sm text-[#222222] font-normal truncate">{dates}</div>
        </div>

        <div className="h-6 sm:h-8 w-[1px] bg-[#DDDDDD] self-center hidden sm:block" />

        {/* Who Section */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "who" ? null : "who")}
          className={`flex-1 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-pointer transition-colors duration-200 ${
            activeDropdown === "who" ? "bg-[#EBEBEB] shadow-inner" : "hover:bg-[#F7F7F7]"
          }`}
          id="search-who-pill"
        >
          <div className="text-[11px] sm:text-xs font-bold text-[#222222] tracking-tight">Who</div>
          <div className="text-xs sm:text-sm text-[#717171] truncate font-normal">
            {guests > 0 ? `${guests} guest${guests > 1 ? "s" : ""}` : "Add guests"}
          </div>
        </div>

        {/* Action Button: Search or Clear */}
        <div className="pr-1.5 sm:pr-2 flex items-center gap-1">
          {isFiltered && (
            <button
              onClick={handleReset}
              className="p-1.5 sm:p-2 hover:bg-[#F7F7F7] rounded-full text-[#717171] hover:text-[#222222] transition-colors"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          )}

          <button
            onClick={handleTriggerSearch}
            className="w-9 h-9 sm:w-12 sm:h-12 bg-[#FF385C] hover:bg-[#E00B41] active:scale-95 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer ml-1 shrink-0"
            title="Search"
            id="search-submit-btn"
          >
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
          </button>
        </div>

        {/* Dropdown: Where */}
        {activeDropdown === "where" && (
          <div className="absolute top-[110%] left-0 w-full sm:w-[420px] bg-white border border-[#EBEBEB] rounded-3xl shadow-[0_8px_28px_rgba(0,0,0,0.18)] p-4 sm:p-6 z-50 animate-zoom-in">

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#717171] mb-3">
              Search by destination
            </h3>
            <input
              type="text"
              placeholder="e.g. Pune, Goa, Mumbai..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#DDDDDD] rounded-xl text-sm focus:outline-none focus:border-black mb-4 font-normal"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && handleTriggerSearch()}
            />

            <div className="space-y-1">
              {POPULAR_DESTINATIONS.map((dest) => (
                <div
                  key={dest.name}
                  onClick={() => handleSelectDestination(dest.name)}
                  className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#F7F7F7] cursor-pointer transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0F2F5] flex items-center justify-center text-lg">
                    {dest.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#222222]">{dest.name}</div>
                    <div className="text-xs text-[#717171]">{dest.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dropdown: When */}
        {activeDropdown === "when" && (
          <div className="absolute top-[110%] left-1/4 w-[360px] bg-white border border-[#EBEBEB] rounded-3xl shadow-[0_8px_28px_rgba(0,0,0,0.18)] p-6 z-50 animate-zoom-in">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#717171] mb-3">
              Select stay dates
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["7 Jul - 12 Jul", "7 Jul - 18 Jul", "Weekend trip", "Anytime"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setDates(item);
                    setActiveDropdown("who");
                  }}
                  className={`py-2 px-3 text-xs rounded-xl border font-medium transition-colors ${
                    dates === item
                      ? "border-[#222222] bg-[#222222] text-white"
                      : "border-[#DDDDDD] hover:border-black text-[#222222]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="text-xs text-[#717171]">
              Flexible dates show highest availability in popular destinations like Pune and Goa.
            </p>
          </div>
        )}

        {/* Dropdown: Who */}
        {activeDropdown === "who" && (
          <div className="absolute top-[110%] right-0 w-[360px] bg-white border border-[#EBEBEB] rounded-3xl shadow-[0_8px_28px_rgba(0,0,0,0.18)] p-6 z-50 animate-zoom-in">
            <div className="flex items-center justify-between py-2 border-b border-[#EBEBEB]">
              <div>
                <div className="text-sm font-semibold text-[#222222]">Guests</div>
                <div className="text-xs text-[#717171]">Ages 13 or above</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests(Math.max(0, guests - 1))}
                  disabled={guests <= 0}
                  className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-30 disabled:hover:border-[#DDDDDD] cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-5 text-center text-sm font-semibold">{guests}</span>
                <button
                  onClick={() => setGuests(guests + 1)}
                  className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-black hover:text-black cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setGuests(0)}
                className="text-xs font-semibold text-[#717171] underline hover:text-black"
              >
                Clear
              </button>
              <button
                onClick={handleTriggerSearch}
                className="bg-[#222222] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-black"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
