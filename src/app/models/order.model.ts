export interface Order {
  id: number;
  clientId: number;
  products: {productId: number, quantity: number, price: number}[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  date: string;
}
