export interface Product {
  id: number;
  name: string;
  img: string;
  rating: number;
  price?: number;
  reviews?: number;
  isNew?: boolean;
  colors?: string[];
  originalPrice?: number;
  finalPrice?: number;
  ratingCount?: number;
}

