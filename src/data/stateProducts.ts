import { Product } from '../types/product';

export const stateProducts: Record<string, Product[]> = {
  "Rajasthan": [
    {
      id: "raj-1",
      name: "Blue Pottery Vase",
      description: "Traditional Jaipur Blue Pottery with intricate designs",
      price: 2500,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=400",
      category: "Pottery"
    },
    {
      id: "raj-2",
      name: "Rajasthani Puppet",
      description: "Handcrafted traditional puppet in vibrant colors",
      price: 800,
      image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=400",
      category: "Handicrafts"
    }
  ],
  "Gujarat": [
    {
      id: "guj-1",
      name: "Patola Silk Saree",
      description: "Double ikat woven Patola silk saree",
      price: 15000,
      image: "https://images.unsplash.com/photo-1610030469668-8e9f638121dd?auto=format&fit=crop&q=80&w=400",
      category: "Textiles"
    }
  ]
  // Add more states and products as needed
};