export interface Category {
  id: number;
  name: string;
  done: any;
}

export interface Items {
  id: number;
  name: string;
  link?: string;
  description?: string;
  category: number;
  price: number;
  done: any;
}
