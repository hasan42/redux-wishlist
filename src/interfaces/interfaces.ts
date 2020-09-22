export interface Category {
  id: number;
  name: string;
  done: any;
}

export interface Item {
  id: number;
  name: string;
  link?: string;
  description?: string;
  category: number;
  price: number;
  done: any;
}
