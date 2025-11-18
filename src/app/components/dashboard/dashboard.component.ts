import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalClients = 0;
  totalProducts = 0;
  totalRevenue = 0;
  totalOrders = 0;

  constructor(
    private clientService: ClientService,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.clientService.clients$.subscribe(clients => {
      this.totalClients = clients.length;
    });

    this.productService.products$.subscribe(products => {
      this.totalProducts = products.length;
    });

    this.orderService.orders$.subscribe(orders => {
      this.totalRevenue = this.orderService.getTotalRevenue();
      this.totalOrders = orders.length;
    });
  }
}
