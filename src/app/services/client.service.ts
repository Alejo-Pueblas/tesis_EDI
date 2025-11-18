import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    { id: 1, name: 'Empresa X', email: 'contacto@empresax.com', phone: '1123456789', type: 'revendedor' },
    { id: 2, name: 'Cliente Final Y', email: 'cliente@y.com', phone: '1198765432', type: 'cliente final' },
    { id: 3, name: 'Revendedor Z', email: 'revendedor@z.com', phone: '1112345678', type: 'revendedor' }
  ];

  private clientsSubject = new BehaviorSubject<Client[]>(this.clients);
  clients$ = this.clientsSubject.asObservable();

  getClients(): Observable<Client[]> {
    return this.clients$;
  }

  addClient(client: Omit<Client, 'id'>): void {
    const newClient = { ...client, id: this.clients.length + 1 };
    this.clients.push(newClient);
    this.clientsSubject.next([...this.clients]);
  }

  updateClient(id: number, updatedClient: Client): void {
    const index = this.clients.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clients[index] = updatedClient;
      this.clientsSubject.next([...this.clients]);
    }
  }

  deleteClient(id: number): void {
    this.clients = this.clients.filter(c => c.id !== id);
    this.clientsSubject.next([...this.clients]);
  }
}
