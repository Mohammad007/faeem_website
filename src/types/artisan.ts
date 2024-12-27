export interface Artisan {
  id: string;
  name: string;
  image: string;
  craft: string;
  location: string;
  experience: string;
  description: string;
  awards: string[];
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  }[];
}