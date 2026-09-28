// listings.ts - KriraAI Take-Home Task Data
export interface Host {
  name: string;
  avatar: string;
  joiningDate: string;
  isSuperhost: boolean;
  responseRate: string;
  responseTime: string;
}

export interface Amenity {
  name: string;
  icon: string;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  date: string;
  comment: string;
}

export interface Listing {
  id: number;
  title: string;
  location: string;
  category: string;
  type: string;
  rating: number;
  reviewsCount: number;
  price: number;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  images: string[];
  description: string;
  host: Host;
  amenities: Amenity[];
  reviews: Review[];
  isFavourite?: boolean;
  badge?: string;
  distance?: string;
  dates?: string;
  nights?: number;
}


export const initialListings: Listing[] = [
  {
    "id": 1,
    "title": "Flat in Pashan",
    "location": "Pashan, Pune, India",
    "category": "beachfront",
    "type": "Entire condominium",
    "rating": 4.96,
    "reviewsCount": 128,
    "price": 4087,
    "guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A beautiful, modern apartment located in the serene surroundings of Pashan. Features high-speed Wi-Fi, fully equipped kitchen, and balcony with garden view. Perfect for families and work-from-home professionals.",
    "host": {
      "name": "Rahul",
      "avatar": "https://i.pravatar.cc/150?img=11",
      "joiningDate": "June 2021",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within an hour"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "Free parking",
        "icon": "Car"
      },
      {
        "name": "Washer",
        "icon": "WashingMachine"
      },
      {
        "name": "TV",
        "icon": "Tv"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Sneha M.",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "date": "March 2024",
        "comment": "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back."
      },
      {
        "id": 2,
        "author": "James T.",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "date": "February 2024",
        "comment": "Great location, very comfortable. The apartment had everything we needed and more."
      },
      {
        "id": 3,
        "author": "Pooja K.",
        "avatar": "https://i.pravatar.cc/150?img=9",
        "date": "January 2024",
        "comment": "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."
      },
      {
        "id": 4,
        "author": "Arjun R.",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "date": "December 2023",
        "comment": "Super convenient location and everything worked perfectly. Highly recommend!"
      }
    ],
    "isFavourite": true,
    "badge": "Guest favourite",
    "nights": 2,
    "distance": "Pune, Maharashtra",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 2,
    "title": "Flat in Wadgaon Sheri",
    "location": "Wadgaon Sheri, Pune, India",
    "category": "cabins",
    "type": "Entire apartment",
    "rating": 4.93,
    "reviewsCount": 94,
    "price": 5136,
    "guests": 3,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Spacious and bright apartment in Wadgaon Sheri. Ideal for working professionals and families alike. Close to IT hubs and shopping malls.",
    "host": {
      "name": "Amit",
      "avatar": "https://i.pravatar.cc/150?img=22",
      "joiningDate": "September 2022",
      "isSuperhost": false,
      "responseRate": "95%",
      "responseTime": "within a few hours"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "TV",
        "icon": "Tv"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Meera S.",
        "avatar": "https://i.pravatar.cc/150?img=20",
        "date": "April 2024",
        "comment": "Lovely apartment, very well maintained. The neighbourhood is quiet and peaceful."
      },
      {
        "id": 2,
        "author": "Rahul D.",
        "avatar": "https://i.pravatar.cc/150?img=33",
        "date": "March 2024",
        "comment": "Exactly as described. Clean and comfortable stay."
      },
      {
        "id": 3,
        "author": "Sarah L.",
        "avatar": "https://i.pravatar.cc/150?img=44",
        "date": "February 2024",
        "comment": "Amazing experience. Host was very helpful and the place was immaculate."
      }
    ],
    "isFavourite": true,
    "nights": 2,
    "distance": "Pune, Maharashtra",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 3,
    "title": "Flat in Viman Nagar",
    "location": "Viman Nagar, Pune, India",
    "category": "trending",
    "type": "Private room in apartment",
    "rating": 4.96,
    "reviewsCount": 156,
    "price": 5250,
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565538810844-1e119d82a221?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Luxurious private room in the heart of Viman Nagar, close to major shopping centers and airport. Quiet, safe, and beautifully maintained.",
    "host": {
      "name": "Priya",
      "avatar": "https://i.pravatar.cc/150?img=9",
      "joiningDate": "December 2020",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within a few minutes"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "Workspace",
        "icon": "Monitor"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Sneha M.",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "date": "March 2024",
        "comment": "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back."
      },
      {
        "id": 2,
        "author": "James T.",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "date": "February 2024",
        "comment": "Great location, very comfortable. The apartment had everything we needed and more."
      },
      {
        "id": 3,
        "author": "Pooja K.",
        "avatar": "https://i.pravatar.cc/150?img=9",
        "date": "January 2024",
        "comment": "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."
      },
      {
        "id": 4,
        "author": "Arjun R.",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "date": "December 2023",
        "comment": "Super convenient location and everything worked perfectly. Highly recommend!"
      }
    ],
    "isFavourite": true,
    "badge": "Rare find",
    "nights": 2,
    "distance": "Pune, Maharashtra",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 4,
    "title": "Flat in Viman Nagar",
    "location": "Viman Nagar, Pune, India",
    "category": "mansions",
    "type": "Entire service apartment",
    "rating": 4.89,
    "reviewsCount": 88,
    "price": 10000,
    "guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "images": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A premium 3 BHK service apartment in Viman Nagar, perfect for groups and business travelers. Fully serviced with daily housekeeping.",
    "host": {
      "name": "Sanjay",
      "avatar": "https://i.pravatar.cc/150?img=30",
      "joiningDate": "March 2019",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within an hour"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "Pool",
        "icon": "Waves"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Meera S.",
        "avatar": "https://i.pravatar.cc/150?img=20",
        "date": "April 2024",
        "comment": "Lovely apartment, very well maintained. The neighbourhood is quiet and peaceful."
      },
      {
        "id": 2,
        "author": "Rahul D.",
        "avatar": "https://i.pravatar.cc/150?img=33",
        "date": "March 2024",
        "comment": "Exactly as described. Clean and comfortable stay."
      },
      {
        "id": 3,
        "author": "Sarah L.",
        "avatar": "https://i.pravatar.cc/150?img=44",
        "date": "February 2024",
        "comment": "Amazing experience. Host was very helpful and the place was immaculate."
      }
    ],
    "isFavourite": false,
    "badge": "Guest favourite",
    "nights": 2,
    "distance": "Pune, Maharashtra",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 5,
    "title": "Hotel in Wakad",
    "location": "Wakad, Pune, India",
    "category": "farms",
    "type": "Room in boutique hotel",
    "rating": 4.88,
    "reviewsCount": 230,
    "price": 3390,
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "images": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4db85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Boutique hotel experience in Wakad, featuring high-end amenities, rooftop pool, and clean, elegant environments. Great for business trips.",
    "host": {
      "name": "Grand Stay",
      "avatar": "https://i.pravatar.cc/150?img=44",
      "joiningDate": "January 2018",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within a few minutes"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Pool",
        "icon": "Waves"
      },
      {
        "name": "Gym",
        "icon": "Dumbbell"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Sneha M.",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "date": "March 2024",
        "comment": "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back."
      },
      {
        "id": 2,
        "author": "James T.",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "date": "February 2024",
        "comment": "Great location, very comfortable. The apartment had everything we needed and more."
      },
      {
        "id": 3,
        "author": "Pooja K.",
        "avatar": "https://i.pravatar.cc/150?img=9",
        "date": "January 2024",
        "comment": "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."
      },
      {
        "id": 4,
        "author": "Arjun R.",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "date": "December 2023",
        "comment": "Super convenient location and everything worked perfectly. Highly recommend!"
      }
    ],
    "isFavourite": false,
    "badge": "Rare find",
    "nights": 2,
    "distance": "Pune, Maharashtra",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 6,
    "title": "Flat in Viman Nagar",
    "location": "Viman Nagar, Pune, India",
    "category": "luxe",
    "type": "Entire residential home",
    "rating": 5,
    "reviewsCount": 42,
    "price": 7760,
    "guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d7c525?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Charming home in Viman Nagar, featuring a minimalist design and serene atmosphere. Perfect for a relaxing stay with all modern comforts.",
    "host": {
      "name": "Nisha",
      "avatar": "https://i.pravatar.cc/150?img=47",
      "joiningDate": "November 2021",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within an hour"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      },
      {
        "name": "Garden",
        "icon": "Flower2"
      },
      {
        "name": "Free parking",
        "icon": "Car"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Meera S.",
        "avatar": "https://i.pravatar.cc/150?img=20",
        "date": "April 2024",
        "comment": "Lovely apartment, very well maintained. The neighbourhood is quiet and peaceful."
      },
      {
        "id": 2,
        "author": "Rahul D.",
        "avatar": "https://i.pravatar.cc/150?img=33",
        "date": "March 2024",
        "comment": "Exactly as described. Clean and comfortable stay."
      },
      {
        "id": 3,
        "author": "Sarah L.",
        "avatar": "https://i.pravatar.cc/150?img=44",
        "date": "February 2024",
        "comment": "Amazing experience. Host was very helpful and the place was immaculate."
      }
    ],
    "isFavourite": false,
    "nights": 2,
    "distance": "Pune, Maharashtra",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 7,
    "title": "Flat in Wadgaon Sheri",
    "location": "Wadgaon Sheri, Pune, India",
    "category": "lakefront",
    "type": "Entire rental unit",
    "rating": 4.99,
    "reviewsCount": 77,
    "price": 4577,
    "guests": 3,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Stylishly designed unit in Wadgaon Sheri with all modern amenities. Walking distance to restaurants and cafes.",
    "host": {
      "name": "Karan",
      "avatar": "https://i.pravatar.cc/150?img=53",
      "joiningDate": "May 2023",
      "isSuperhost": false,
      "responseRate": "90%",
      "responseTime": "within a few hours"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "TV",
        "icon": "Tv"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Sneha M.",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "date": "March 2024",
        "comment": "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back."
      },
      {
        "id": 2,
        "author": "James T.",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "date": "February 2024",
        "comment": "Great location, very comfortable. The apartment had everything we needed and more."
      },
      {
        "id": 3,
        "author": "Pooja K.",
        "avatar": "https://i.pravatar.cc/150?img=9",
        "date": "January 2024",
        "comment": "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."
      },
      {
        "id": 4,
        "author": "Arjun R.",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "date": "December 2023",
        "comment": "Super convenient location and everything worked perfectly. Highly recommend!"
      }
    ],
    "isFavourite": false,
    "badge": "Guest favourite",
    "nights": 2,
    "distance": "Pune, Maharashtra",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 8,
    "title": "Flat in Viman Nagar",
    "location": "Viman Nagar, Pune, India",
    "category": "luxe",
    "type": "Entire residential home",
    "rating": 5,
    "reviewsCount": 22,
    "price": 5832,
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928680311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A beautiful home located in Viman Nagar with high-end furniture and premium fittings. A true home away from home.",
    "host": {
      "name": "Rohan",
      "avatar": "https://i.pravatar.cc/150?img=57",
      "joiningDate": "July 2022",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within an hour"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Meera S.",
        "avatar": "https://i.pravatar.cc/150?img=20",
        "date": "April 2024",
        "comment": "Lovely apartment, very well maintained. The neighbourhood is quiet and peaceful."
      },
      {
        "id": 2,
        "author": "Rahul D.",
        "avatar": "https://i.pravatar.cc/150?img=33",
        "date": "March 2024",
        "comment": "Exactly as described. Clean and comfortable stay."
      },
      {
        "id": 3,
        "author": "Sarah L.",
        "avatar": "https://i.pravatar.cc/150?img=44",
        "date": "February 2024",
        "comment": "Amazing experience. Host was very helpful and the place was immaculate."
      }
    ],
    "isFavourite": false,
    "nights": 2,
    "distance": "Pune, Maharashtra",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 9,
    "title": "Flat in Candolim",
    "location": "Candolim, Goa, India",
    "category": "beachfront",
    "type": "Entire apartment",
    "rating": 4.93,
    "reviewsCount": 142,
    "price": 10999,
    "guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "images": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4db85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Beautiful beachfront apartment in Candolim with gorgeous ocean views and private balcony. Steps away from the beach.",
    "host": {
      "name": "Maria",
      "avatar": "https://i.pravatar.cc/150?img=60",
      "joiningDate": "May 2019",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within minutes"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "Beach access",
        "icon": "Waves"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Sneha M.",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "date": "March 2024",
        "comment": "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back."
      },
      {
        "id": 2,
        "author": "James T.",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "date": "February 2024",
        "comment": "Great location, very comfortable. The apartment had everything we needed and more."
      },
      {
        "id": 3,
        "author": "Pooja K.",
        "avatar": "https://i.pravatar.cc/150?img=9",
        "date": "January 2024",
        "comment": "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."
      },
      {
        "id": 4,
        "author": "Arjun R.",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "date": "December 2023",
        "comment": "Super convenient location and everything worked perfectly. Highly recommend!"
      }
    ],
    "isFavourite": false,
    "badge": "Rare find",
    "nights": 2,
    "distance": "Goa, India",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 10,
    "title": "Flat in Nerul",
    "location": "Nerul, Goa, India",
    "category": "cabins",
    "type": "Entire condominium",
    "rating": 4.94,
    "reviewsCount": 81,
    "price": 12896,
    "guests": 3,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Modern condominium close to backwaters, featuring tranquil environments and breathtaking sunset views.",
    "host": {
      "name": "Kishore",
      "avatar": "https://i.pravatar.cc/150?img=64",
      "joiningDate": "August 2021",
      "isSuperhost": false,
      "responseRate": "90%",
      "responseTime": "within hours"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Meera S.",
        "avatar": "https://i.pravatar.cc/150?img=20",
        "date": "April 2024",
        "comment": "Lovely apartment, very well maintained. The neighbourhood is quiet and peaceful."
      },
      {
        "id": 2,
        "author": "Rahul D.",
        "avatar": "https://i.pravatar.cc/150?img=33",
        "date": "March 2024",
        "comment": "Exactly as described. Clean and comfortable stay."
      },
      {
        "id": 3,
        "author": "Sarah L.",
        "avatar": "https://i.pravatar.cc/150?img=44",
        "date": "February 2024",
        "comment": "Amazing experience. Host was very helpful and the place was immaculate."
      }
    ],
    "isFavourite": false,
    "badge": "Guest favourite",
    "nights": 2,
    "distance": "Goa, India",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 11,
    "title": "Apartment in Candolim",
    "location": "Candolim, Goa, India",
    "category": "trending",
    "type": "Entire apartment",
    "rating": 4.98,
    "reviewsCount": 112,
    "price": 8296,
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6a2806647f81?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Spacious apartment in the heart of Candolim, close to all beach shacks, restaurants and night markets.",
    "host": {
      "name": "Anjali",
      "avatar": "https://i.pravatar.cc/150?img=68",
      "joiningDate": "October 2020",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within an hour"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      },
      {
        "name": "Balcony",
        "icon": "Sun"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Sneha M.",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "date": "March 2024",
        "comment": "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back."
      },
      {
        "id": 2,
        "author": "James T.",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "date": "February 2024",
        "comment": "Great location, very comfortable. The apartment had everything we needed and more."
      },
      {
        "id": 3,
        "author": "Pooja K.",
        "avatar": "https://i.pravatar.cc/150?img=9",
        "date": "January 2024",
        "comment": "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."
      },
      {
        "id": 4,
        "author": "Arjun R.",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "date": "December 2023",
        "comment": "Super convenient location and everything worked perfectly. Highly recommend!"
      }
    ],
    "isFavourite": false,
    "badge": "Rare find",
    "nights": 2,
    "distance": "Goa, India",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 12,
    "title": "Flat in Anjuna",
    "location": "Anjuna, Goa, India",
    "category": "mansions",
    "type": "Entire flat",
    "rating": 4.92,
    "reviewsCount": 65,
    "price": 7989,
    "guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "images": [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Cozy flat close to Anjuna Flea Market. Features standard amenities and is perfect for exploring North Goa.",
    "host": {
      "name": "David",
      "avatar": "https://i.pravatar.cc/150?img=70",
      "joiningDate": "November 2018",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within minutes"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      },
      {
        "name": "Free parking",
        "icon": "Car"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Meera S.",
        "avatar": "https://i.pravatar.cc/150?img=20",
        "date": "April 2024",
        "comment": "Lovely apartment, very well maintained. The neighbourhood is quiet and peaceful."
      },
      {
        "id": 2,
        "author": "Rahul D.",
        "avatar": "https://i.pravatar.cc/150?img=33",
        "date": "March 2024",
        "comment": "Exactly as described. Clean and comfortable stay."
      },
      {
        "id": 3,
        "author": "Sarah L.",
        "avatar": "https://i.pravatar.cc/150?img=44",
        "date": "February 2024",
        "comment": "Amazing experience. Host was very helpful and the place was immaculate."
      }
    ],
    "isFavourite": false,
    "nights": 2,
    "distance": "Goa, India",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 13,
    "title": "Apartment in Candolim",
    "location": "Candolim, Goa, India",
    "category": "farms",
    "type": "Entire apartment",
    "rating": 4.94,
    "reviewsCount": 93,
    "price": 20339,
    "guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "images": [
      "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d7c525?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A super premium 3 BHK apartment with infinity pool access. Perfect for large groups and family vacations.",
    "host": {
      "name": "Sunil",
      "avatar": "https://i.pravatar.cc/150?img=73",
      "joiningDate": "December 2017",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within minutes"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Kitchen",
        "icon": "ChefHat"
      },
      {
        "name": "Pool",
        "icon": "Waves"
      },
      {
        "name": "Air conditioning",
        "icon": "Wind"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Sneha M.",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "date": "March 2024",
        "comment": "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back."
      },
      {
        "id": 2,
        "author": "James T.",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "date": "February 2024",
        "comment": "Great location, very comfortable. The apartment had everything we needed and more."
      },
      {
        "id": 3,
        "author": "Pooja K.",
        "avatar": "https://i.pravatar.cc/150?img=9",
        "date": "January 2024",
        "comment": "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."
      },
      {
        "id": 4,
        "author": "Arjun R.",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "date": "December 2023",
        "comment": "Super convenient location and everything worked perfectly. Highly recommend!"
      }
    ],
    "isFavourite": false,
    "badge": "Guest favourite",
    "nights": 2,
    "distance": "Goa, India",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 14,
    "title": "Villa in Anjuna",
    "location": "Anjuna, Goa, India",
    "category": "luxe",
    "type": "Entire luxury villa",
    "rating": 4.97,
    "reviewsCount": 54,
    "price": 19988,
    "guests": 8,
    "bedrooms": 4,
    "beds": 5,
    "bathrooms": 4,
    "images": [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An elegant villa nestled in the quiet lanes of Anjuna. Private pool, sprawling gardens and concierge service.",
    "host": {
      "name": "Goa Premium",
      "avatar": "https://i.pravatar.cc/150?img=76",
      "joiningDate": "June 2015",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within minutes"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Private Pool",
        "icon": "Waves"
      },
      {
        "name": "Chef services",
        "icon": "ChefHat"
      },
      {
        "name": "Garden",
        "icon": "Flower2"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Meera S.",
        "avatar": "https://i.pravatar.cc/150?img=20",
        "date": "April 2024",
        "comment": "Lovely apartment, very well maintained. The neighbourhood is quiet and peaceful."
      },
      {
        "id": 2,
        "author": "Rahul D.",
        "avatar": "https://i.pravatar.cc/150?img=33",
        "date": "March 2024",
        "comment": "Exactly as described. Clean and comfortable stay."
      },
      {
        "id": 3,
        "author": "Sarah L.",
        "avatar": "https://i.pravatar.cc/150?img=44",
        "date": "February 2024",
        "comment": "Amazing experience. Host was very helpful and the place was immaculate."
      }
    ],
    "isFavourite": false,
    "nights": 2,
    "distance": "Goa, India",
    "dates": "7 Jul - 12 Jul"
  },
  {
    "id": 15,
    "title": "Villa in Anjuna",
    "location": "Anjuna, Goa, India",
    "category": "lakefront",
    "type": "Entire luxury villa",
    "rating": 5,
    "reviewsCount": 30,
    "price": 30108,
    "guests": 10,
    "bedrooms": 5,
    "beds": 6,
    "bathrooms": 5,
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Ultra-luxury mansion in Anjuna with private pool and sprawling lawns. The pinnacle of Goa luxury living.",
    "host": {
      "name": "Goa Luxe",
      "avatar": "https://i.pravatar.cc/150?img=79",
      "joiningDate": "September 2016",
      "isSuperhost": true,
      "responseRate": "100%",
      "responseTime": "within minutes"
    },
    "amenities": [
      {
        "name": "Wi-Fi",
        "icon": "Wifi"
      },
      {
        "name": "Private Pool",
        "icon": "Waves"
      },
      {
        "name": "Ocean view",
        "icon": "Eye"
      },
      {
        "name": "Chef services",
        "icon": "ChefHat"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "author": "Sneha M.",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "date": "March 2024",
        "comment": "Absolutely stunning place! Everything was spotless and the host was super responsive. Would love to come back."
      },
      {
        "id": 2,
        "author": "James T.",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "date": "February 2024",
        "comment": "Great location, very comfortable. The apartment had everything we needed and more."
      },
      {
        "id": 3,
        "author": "Pooja K.",
        "avatar": "https://i.pravatar.cc/150?img=9",
        "date": "January 2024",
        "comment": "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."
      },
      {
        "id": 4,
        "author": "Arjun R.",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "date": "December 2023",
        "comment": "Super convenient location and everything worked perfectly. Highly recommend!"
      }
    ],
    "isFavourite": false,
    "badge": "Rare find",
    "nights": 2,
    "distance": "Goa, India",
    "dates": "7 Jul - 12 Jul"
  }
];
