export interface Product {
  id: number;
  name: string;
  img: string;
  rating: number;
  price: number;
  reviews: number;
  isNew?: boolean;
  colors?: string[];
  originalPrice?: number; // if this is present, it means the product is on sale and this is the original price before discount
}

