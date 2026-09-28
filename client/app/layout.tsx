import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb | Holiday Rentals, Cabins, Beach Houses & More",
  description: "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.",
  icons: {
    icon: "https://a0.muscache.com/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Favicons/original/304e8c59-05df-4fab-9846-f69fd7f749b0.svg?im_w=240",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
