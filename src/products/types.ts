export interface PackOption {
  id: string;
  bottles: number;
  title: string;
  badge?: string;
  originalPrice: number;
  finalPrice: number;
  savings: number;
  isPopular?: boolean;
}

export interface ProductConfig {
  slug: string;
  name: string;
  tagline: string;
  volume: string;
  flavor: string;
  badges: string[];
  packs: PackOption[];
  ingredients: {
    name: string;
    dose: string;
    color: string;
    benefit: string;
  }[];
  tinnitusClaims: string[];
  energyClaims: string[];
  routineSteps: {
    step: number;
    title: string;
    description: string;
    image: string;
  }[];
  reviews: {
    author: string;
    age: number;
    city: string;
    stars: number;
    comment: string;
    avatar: string;
    verified: boolean;
  }[];
}
