"use client";

import React from "react";
import { Globe } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F7F7] border-t border-[#DDDDDD] text-[#222222] mt-auto">
      {/* 3 Column Links */}
      <div className="max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Support */}
        <div>
          <h3 className="text-sm font-bold mb-4">Support</h3>
          <ul className="space-y-3 text-sm text-[#222222]">
            <li>
              <a href="#" className="hover:underline">
                Help Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AirCover
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Anti-discrimination
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Disability support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cancellation options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Report neighbourhood concern
              </a>
            </li>
          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="text-sm font-bold mb-4">Hosting</h3>
          <ul className="space-y-3 text-sm text-[#222222]">
            <li>
              <a href="#" className="hover:underline">
                Airbnb your home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AirCover for Hosts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hosting resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community forum
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hosting responsibly
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Airbnb-friendly apartments
              </a>
            </li>
          </ul>
        </div>

        {/* Airbnb */}
        <div>
          <h3 className="text-sm font-bold mb-4">Airbnb</h3>
          <ul className="space-y-3 text-sm text-[#222222]">
            <li>
              <a href="#" className="hover:underline">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                New features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gift cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Airbnb.org emergency stays
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Locale Bar */}
      <div className="border-t border-[#DDDDDD] max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#222222]">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center md:text-left text-[#717171]">
          <span>© 2026 Airbnb, Inc.</span>
          <span>·</span>
          <a href="#" className="hover:underline text-[#222222]">
            Privacy
          </a>
          <span>·</span>
          <a href="#" className="hover:underline text-[#222222]">
            Terms
          </a>
          <span>·</span>
          <a href="#" className="hover:underline text-[#222222]">
            Sitemap
          </a>
          <span>·</span>
          <a href="#" className="hover:underline text-[#222222]">
            Company details
          </a>
        </div>

        <div className="flex items-center gap-6 font-semibold">
          <button className="flex items-center gap-2 hover:underline cursor-pointer">
            <Globe className="w-4 h-4" />
            <span>English (IN)</span>
          </button>
          <button className="hover:underline cursor-pointer">
            <span>₹ INR</span>
          </button>
          <div className="flex items-center gap-4 text-[#222222]">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
