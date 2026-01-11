export type ProductSize =
    | '180ml' | '900ml' | '80g' | '170g' | '400g' | '1kg' | '2kg' | '5kg' | '80g';

export type ProductCategory = 'drink' | 'cup' | 'strained';

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: ProductCategory;
    sizes: ProductSize[];
    storage?: string;
    nutritionalInfo?: {
        calories: number;
        protein: number;
        fat: number;
        carbs: number;
    }
}

export interface Job {
    id: string;
    title: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    description: string;
    department: string;
}
