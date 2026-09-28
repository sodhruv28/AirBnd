// photoTour.ts - Photo Tour Categories & Lightbox Items

export interface TourSection {
  id: string;
  name: string;
  details: string;
  images: string[];
  layoutColumns?: string[][];
}

export interface LightboxPhoto {
  url: string;
  sectionId: string;
  sectionName: string;
  photoNumber: number;
  title: string;
}

export const photoTourSections: TourSection[] = [
  {
    "id": "tour-living",
    "name": "Living room",
    "details": "Single bed · Books and reading material · TV · Cleaning available during stay · Patio or balcony · Private living room · Room-darkening blinds · Wifi · Ceiling fan · Cleaning products · Long-term stays allowed · Luggage drop-off allowed · Private entrance · Single-level home · Window guards · Lift · Kitchen · Free parking on premises · Bath",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=80"
    ],
    "layoutColumns": [
      [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=80"
      ],
      [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=80"
      ]
    ]
  },
  {
    "id": "tour-kitchen",
    "name": "Full kitchen",
    "details": "Cleaning available during stay · Cleaning products · Cooker · Cooking basics · Crockery and cutlery · Freezer",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d7c525?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1000&q=80"
    ],
    "layoutColumns": [
      [
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1556909212-d5b604d7c525?auto=format&fit=crop&w=1000&q=80"
      ],
      [
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1000&q=80"
      ]
    ]
  },
  {
    "id": "tour-dining",
    "name": "Dining area",
    "details": "Dining table · Cleaning available during stay · Cleaning products · Wifi",
    "images": [
      "https://images.unsplash.com/photo-1565538810844-1e119d82a221?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80"
    ],
    "layoutColumns": [
      [
        "https://images.unsplash.com/photo-1565538810844-1e119d82a221?auto=format&fit=crop&w=1000&q=80"
      ],
      [
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80"
      ]
    ]
  },
  {
    "id": "tour-bed1",
    "name": "Bedroom 1",
    "details": "King bed · Air conditioning · Bed linen · Clothes storage · Essentials · Extra pillows and blankets",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    "id": "tour-bed2",
    "name": "Bedroom 2",
    "details": "King bed · Air conditioning · Bed linen · Ceiling fan · Cleaning available during stay · Clothes storage",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    "id": "tour-bed3",
    "name": "Bedroom 3",
    "details": "Queen bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Extra pillows and blankets",
    "images": [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    "id": "tour-bath1",
    "name": "Full bathroom 1",
    "details": "Wifi · Washing machine · Tumble dryer · Shower gel · Shampoo · Hot water",
    "images": [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
    ],
    "layoutColumns": [
      [
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80"
      ],
      [
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
      ]
    ]
  },
  {
    "id": "tour-bath2",
    "name": "Full bathroom 2",
    "details": "Bath · Body soap · Cleaning available during stay · Conditioner · Essentials · Hairdryer",
    "images": [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80"
    ],
    "layoutColumns": [
      [
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80"
      ],
      [
        "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80"
      ]
    ]
  },
  {
    "id": "tour-bath3",
    "name": "Full bathroom 3",
    "details": "Wifi · Shampoo · Shower gel · Hot water · Essentials · Conditioner",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    "id": "tour-balcony",
    "name": "Balcony",
    "details": "Wifi · Outdoor furniture · Cleaning available during stay · Clothes drying rack",
    "images": [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
    ],
    "layoutColumns": [
      [
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80"
      ],
      [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
      ]
    ]
  },
  {
    "id": "tour-additional",
    "name": "Additional photos",
    "details": "Decor details · Gated society view · Gated parking",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
    ],
    "layoutColumns": [
      [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
      ],
      [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
      ]
    ]
  }
];

export const lightboxPhotos: LightboxPhoto[] = [
  {
    "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-living",
    "sectionName": "Living room",
    "photoNumber": 1,
    "title": "Living room 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-living",
    "sectionName": "Living room",
    "photoNumber": 2,
    "title": "Living room 2"
  },
  {
    "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-living",
    "sectionName": "Living room",
    "photoNumber": 3,
    "title": "Living room 3"
  },
  {
    "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-living",
    "sectionName": "Living room",
    "photoNumber": 4,
    "title": "Living room 4"
  },
  {
    "url": "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-living",
    "sectionName": "Living room",
    "photoNumber": 5,
    "title": "Living room 5"
  },
  {
    "url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-kitchen",
    "sectionName": "Full kitchen",
    "photoNumber": 1,
    "title": "Full kitchen 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1556909212-d5b604d7c525?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-kitchen",
    "sectionName": "Full kitchen",
    "photoNumber": 2,
    "title": "Full kitchen 2"
  },
  {
    "url": "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-kitchen",
    "sectionName": "Full kitchen",
    "photoNumber": 3,
    "title": "Full kitchen 3"
  },
  {
    "url": "https://images.unsplash.com/photo-1565538810844-1e119d82a221?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-dining",
    "sectionName": "Dining area",
    "photoNumber": 1,
    "title": "Dining area 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-dining",
    "sectionName": "Dining area",
    "photoNumber": 2,
    "title": "Dining area 2"
  },
  {
    "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bed1",
    "sectionName": "Bedroom 1",
    "photoNumber": 1,
    "title": "Bedroom 1 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bed2",
    "sectionName": "Bedroom 2",
    "photoNumber": 1,
    "title": "Bedroom 2 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bed3",
    "sectionName": "Bedroom 3",
    "photoNumber": 1,
    "title": "Bedroom 3 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bath1",
    "sectionName": "Full bathroom 1",
    "photoNumber": 1,
    "title": "Full bathroom 1 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bath1",
    "sectionName": "Full bathroom 1",
    "photoNumber": 2,
    "title": "Full bathroom 1 2"
  },
  {
    "url": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bath2",
    "sectionName": "Full bathroom 2",
    "photoNumber": 1,
    "title": "Full bathroom 2 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bath2",
    "sectionName": "Full bathroom 2",
    "photoNumber": 2,
    "title": "Full bathroom 2 2"
  },
  {
    "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bath2",
    "sectionName": "Full bathroom 2",
    "photoNumber": 3,
    "title": "Full bathroom 2 3"
  },
  {
    "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-bath3",
    "sectionName": "Full bathroom 3",
    "photoNumber": 1,
    "title": "Full bathroom 3 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-balcony",
    "sectionName": "Balcony",
    "photoNumber": 1,
    "title": "Balcony 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-balcony",
    "sectionName": "Balcony",
    "photoNumber": 2,
    "title": "Balcony 2"
  },
  {
    "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-additional",
    "sectionName": "Additional photos",
    "photoNumber": 1,
    "title": "Additional photos 1"
  },
  {
    "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    "sectionId": "tour-additional",
    "sectionName": "Additional photos",
    "photoNumber": 2,
    "title": "Additional photos 2"
  }
];
