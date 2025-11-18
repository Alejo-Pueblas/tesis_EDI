import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  newClient: Omit<Client, 'id'> = { name: '', email: '', phone: '', type: 'revendedor' };

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.clients$.subscribe(clients => {
      this.clients = clients;
    });
  }

  addClient(): void {
    if (this.newClient.name && this.newClient.email && this.newClient.phone) {
      this.clientService.addClient(this.newClient);
      this.newClient = { name: '', email: '', phone: '', type: 'revendedor' };
    }
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id);
  }
}
