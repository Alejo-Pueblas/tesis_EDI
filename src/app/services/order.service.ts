import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    {
      id: 1,
      clientId: 1,
      products: [{ productId: 1, quantity: 2, price: 15.99 }, { productId: 2, quantity: 1, price: 25.99 }],
      total: 57.97,
      status: 'delivered',
      date: '2024-11-01'
    },
    {
      id: 2,
      clientId: 1,
      products: [{ productId: 3, quantity: 1, price: 45.99 }],
      total: 45.99,
      status: 'shipped',
      date: '2024-11-05'
    },
    {
      id: 3,
      clientId: 2,
      products: [{ productId: 4, quantity: 3, price: 12.99 }],
      total: 38.97,
      status: 'delivered',
      date: '2024-11-10'
    }
  ];

  private ordersSubject = new BehaviorSubject<Order[]>(this.orders);
  orders$ = this.ordersSubject.asObservable();

  getOrders(): Observable<Order[]> {
    return this.orders$;
  }

  addOrder(order: Omit<Order, 'id'>): void {
    const newOrder = { ...order, id: this.orders.length + 1 };
    this.orders.push(newOrder);
    this.ordersSubject.next([...this.orders]);
  }

  updateOrder(id: number, updatedOrder: Order): void {
    const index = this.orders.findIndex(o => o.id === id);
    if (index !== -1) {
      this.orders[index] = updatedOrder;
      this.ordersSubject.next([...this.orders]);
    }
  }

  deleteOrder(id: number): void {
    this.orders = this.orders.filter(o => o.id !== id);
    this.ordersSubject.next([...this.orders]);
  }

  getOrdersByClientId(clientId: number): Order[] {
    return this.orders.filter(o => o.clientId === clientId);
  }

  getTotalRevenue(): number {
    return this.orders.reduce((sum, order) => sum + order.total, 0);
  }

  getOrderCountByStatus(status: string): number {
    return this.orders.filter(o => o.status === status).length;
  }
}
