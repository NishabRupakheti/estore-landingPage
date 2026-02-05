export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
  reviews: number;
  isNew?: boolean; 
  colors?: string[];
}

