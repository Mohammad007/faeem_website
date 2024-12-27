import { Artisan } from '../types/artisan';

export const artisans: Record<string, Artisan[]> = {
  "Rajasthan": [
    {
      id: "raj-artisan-1",
      name: "Bhawani Singh",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
      craft: "Blue Pottery",
      location: "Jaipur, Rajasthan",
      experience: "25 years",
      description: "Bhawani Singh is a master craftsman specializing in traditional Jaipur Blue Pottery. With over two decades of experience, he has preserved and innovated this ancient craft, creating stunning pieces that blend traditional techniques with contemporary designs.",
      awards: [
        "National Award for Master Craftsperson 2019",
        "State Merit Certificate for Craftsmanship"
      ],
      products: [
        {
          id: "bp-1",
          name: "Blue Pottery Vase with Peacock Design",
          price: 3500,
          image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=400",
          description: "Hand-crafted blue pottery vase featuring intricate peacock motifs"
        },
        {
          id: "bp-2",
          name: "Decorative Wall Plate",
          price: 2800,
          image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=400",
          description: "Traditional wall plate with floral patterns"
        }
      ]
    },
    {
      id: "raj-artisan-2",
      name: "Lakshmi Devi",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400",
      craft: "Bandhani Textile Art",
      location: "Jodhpur, Rajasthan",
      experience: "30 years",
      description: "Lakshmi Devi is a renowned Bandhani artist known for her exceptional tie-dye techniques. Her work represents the rich textile heritage of Rajasthan, with each piece telling a unique story through intricate patterns and vibrant colors.",
      awards: [
        "Shilp Guru Award 2020",
        "Excellence in Handicrafts Award"
      ],
      products: [
        {
          id: "ban-1",
          name: "Bandhani Silk Dupatta",
          price: 4500,
          image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=400",
          description: "Pure silk dupatta with traditional bandhani work"
        },
        {
          id: "ban-2",
          name: "Designer Bandhani Saree",
          price: 12000,
          image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=400",
          description: "Handcrafted bandhani saree in contemporary design"
        }
      ]
    }
  ]
};