export enum Category {
  FURNITURE = 'Furniture',
  DECOR = 'Home Decor',
  SCULPTURE = 'Sculpture',
  KITCHEN = 'Kitchenware',
  TEXTILES = 'Textiles'
}

export enum WoodType {
  MAHOGANY = 'Mahogany',
  TEAK = 'Teak',
  EBONY = 'Ebony',
  ODUM = 'Odum (Iroko)',
  WAWA = 'Wawa'
}

export interface Artisan {
  id: string;
  name: string;
  location: string;
  bio: string;
  imageUrl: string;
  specialty: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  woodType: WoodType;
  artisanId: string;
  imageUrl: string;
  description: string;
  dimensions?: string;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomOrderState {
  description: string;
  woodType: string;
  budget: string;
  analysis: string;
  isAnalyzing: boolean;
}
