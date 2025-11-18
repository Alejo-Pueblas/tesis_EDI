import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Shampoo Anticaspa',
      description: 'Shampoo para cabello graso y con caspa',
      category: 'Cuidado Capilar',
      price: 15.99,
      stock: 50,
      imageUrl: 'https://via.placeholder.com/150/FF6B6B/FFFFFF?text=Shampoo'
    },
    {
      id: 2,
      name: 'Crema Hidratante',
      description: 'Crema facial hidratante para piel seca',
      category: 'Cuidado Facial',
      price: 25.99,
      stock: 30,
      imageUrl: 'https://via.placeholder.com/150/4ECDC4/FFFFFF?text=Crema'
    },
    {
      id: 3,
      name: 'Perfume Floral',
      description: 'Perfume con aroma a flores fresas',
      category: 'Fragancias',
      price: 45.99,
      stock: 20,
      imageUrl: 'https://via.placeholder.com/150/45B7D1/FFFFFF?text=Perfume'
    },
    {
      id: 4,
      name: 'Máscara de Pestañas',
      description: 'Máscara voluminizadora',
      category: 'Maquillaje',
      price: 12.99,
      stock: 40,
      imageUrl: 'https://via.placeholder.com/150/F9CA24/FFFFFF?text=Mascara'
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productsSubject.asObservable();

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addProduct(product: Omit<Product, 'id'>): void {
    const newProduct = { ...product, id: this.products.length + 1 };
    this.products.push(newProduct);
    this.productsSubject.next([...this.products]);
  }

  updateProduct(id: number, updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.productsSubject.next([...this.products]);
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next([...this.products]);
  }

  searchProducts(query: string): Product[] {
    const lowerQuery = query.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    );
  }
}
