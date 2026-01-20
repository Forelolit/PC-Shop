export interface Products {
  id: number;
  title: string;
  description?: string;
  category?: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  images: string[] | null;
  thumbnail: string | null;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface ProductsResponse {
  products: Products[];
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
}
