export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: 'revendedor' | 'cliente final';
}
