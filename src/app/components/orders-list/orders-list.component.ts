import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  clients: any[] = [];
  newOrder: Omit<Order, 'id'> = {
    clientId: 0,
    products: [],
    total: 0,
    status: 'pending',
    date: new Date().toISOString().slice(0, 10)
  };

  constructor(
    private orderService: OrderService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.orderService.orders$.subscribe(orders => {
      this.orders = orders;
    });
    this.clientService.clients$.subscribe(clients => {
      this.clients = clients;
    });
  }

  addOrder(): void {
    if (this.newOrder.clientId > 0 && this.newOrder.total > 0) {
      this.orderService.addOrder(this.newOrder);
      this.newOrder = {
        clientId: 0,
        products: [],
        total: 0,
        status: 'pending',
        date: new Date().toISOString().slice(0, 10)
      };
    }
  }

  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id);
  }

  getClientName(clientId: number): string {
    const client = this.clients.find(c => c.id === clientId);
    return client ? client.name : `Cliente ${clientId}`;
  }
}
