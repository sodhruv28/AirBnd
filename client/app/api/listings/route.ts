import { NextResponse } from "next/server";
import { initialListings } from "@/data/listings";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location")?.toLowerCase();
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  let filtered = [...initialListings];

  if (location) {
    filtered = filtered.filter(
      (item) =>
        item.location.toLowerCase().includes(location) ||
        item.title.toLowerCase().includes(location)
    );
  }

  if (minPrice) {
    filtered = filtered.filter((item) => item.price >= Number(minPrice));
  }

  if (maxPrice) {
    filtered = filtered.filter((item) => item.price <= Number(maxPrice));
  }

  return NextResponse.json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
}
