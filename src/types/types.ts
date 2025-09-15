export interface Products {
  image: string | null;
  thumbnail: string | null;
  name: string;
  description?: string;
  discount?: number | null;
  price: number;
}
