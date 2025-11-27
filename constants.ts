import { Artisan, Category, Product, WoodType } from './types';

export const ARTISANS: Artisan[] = [
  {
    id: 'a1',
    name: 'Kwame Osei',
    location: 'Kumasi, Ashanti Region',
    bio: 'With over 30 years of experience, Kwame specializes in intricate hand-carved stools and traditional Ashanti designs. He learned the craft from his grandfather.',
    imageUrl: 'https://picsum.photos/id/1005/400/400',
    specialty: 'Traditional Stools'
  },
  {
    id: 'a2',
    name: 'Ama Serwaa',
    location: 'Accra, Greater Accra',
    bio: 'Ama blends modern minimalist aesthetics with durable Ghanaian hardwoods. Her furniture is designed for contemporary urban living spaces.',
    imageUrl: 'https://picsum.photos/id/338/400/400',
    specialty: 'Modern Furniture'
  },
  {
    id: 'a3',
    name: 'Kofi Mensah',
    location: 'Aburi, Eastern Region',
    bio: 'Located in the heart of the wood carving mountains, Kofi creates breathtaking sculptures that tell the history of the Akan people.',
    imageUrl: 'https://picsum.photos/id/1011/400/400',
    specialty: 'Large Scale Sculptures'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ashanti Ceremonial Stool',
    price: 150,
    category: Category.FURNITURE,
    woodType: WoodType.ODUM,
    artisanId: 'a1',
    imageUrl: 'https://picsum.photos/id/103/600/600',
    description: 'Hand-carved Odum wood stool featuring Adinkra symbols representing wisdom and supremacy.',
    dimensions: '18" x 12" x 16"',
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'Accra Minimalist Coffee Table',
    price: 450,
    category: Category.FURNITURE,
    woodType: WoodType.TEAK,
    artisanId: 'a2',
    imageUrl: 'https://picsum.photos/id/1069/600/600',
    description: 'Sleek, low-profile coffee table made from reclaimed Teak. Perfect for modern living rooms.',
    dimensions: '40" x 20" x 14"',
    isFeatured: true
  },
  {
    id: 'p3',
    name: 'Ebony Mask Sculpture',
    price: 200,
    category: Category.SCULPTURE,
    woodType: WoodType.EBONY,
    artisanId: 'a3',
    imageUrl: 'https://picsum.photos/id/1025/600/600',
    description: 'Polished ebony wood mask depicting a tribal elder. A striking wall piece.',
    dimensions: '12" x 8" x 4"'
  },
  {
    id: 'p4',
    name: 'Woven Seat Dining Chair',
    price: 180,
    category: Category.FURNITURE,
    woodType: WoodType.MAHOGANY,
    artisanId: 'a2',
    imageUrl: 'https://picsum.photos/id/1062/600/600',
    description: 'Mahogany frame with locally sourced woven cane seating. Breathable and comfortable.',
    dimensions: '20" x 18" x 36"'
  },
  {
    id: 'p5',
    name: 'Hand-turned Serving Bowl',
    price: 65,
    category: Category.KITCHEN,
    woodType: WoodType.WAWA,
    artisanId: 'a1',
    imageUrl: 'https://picsum.photos/id/1080/600/600',
    description: 'Food-safe Wawa wood bowl, perfect for salads or fruits.',
    dimensions: '12" diameter',
    isFeatured: true
  },
  {
    id: 'p6',
    name: 'Abstract Unity Sculpture',
    price: 320,
    category: Category.SCULPTURE,
    woodType: WoodType.MAHOGANY,
    artisanId: 'a3',
    imageUrl: 'https://picsum.photos/id/1059/600/600',
    description: 'Intertwined figures representing family unity. Smooth finish.',
    dimensions: '15" x 15" x 30"'
  }
];
