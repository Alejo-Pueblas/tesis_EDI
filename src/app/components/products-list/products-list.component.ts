import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  selectedFile: File | null = null;
  newProduct: Omit<Product, 'id'> = {
    name: '',
    description: '',
    price: 0,
    category: 'Cuidado Capilar',
    stock: 0,
    imageUrl: ''
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      // Para simulacion, creamos una URL para preview (en produccion podria subirse al servidor)
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newProduct.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addProduct(): void {
    if (this.isValidProduct()) {
      this.productService.addProduct(this.newProduct);
      this.resetForm();
    }
  }

  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.productService.deleteProduct(id);
    }
  }

  isValidProduct(): boolean {
    return !!(
      this.newProduct.name.trim() &&
      this.newProduct.price > 0 &&
      this.newProduct.stock >= 0
    );
  }

  resetForm(): void {
    this.newProduct = {
      name: '',
      description: '',
      price: 0,
      category: 'Cuidado Capilar',
      stock: 0,
      imageUrl: ''
    };
    this.selectedFile = null;
  }
}
