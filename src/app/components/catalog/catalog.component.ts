import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText: string = '';
  selectedCategory: string = '';
  selectedPriceRange: string = '';
  categories: string[] = [];

  priceRanges = [
    { value: '0-25', label: 'Hasta $25' },
    { value: '25-50', label: '$25 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-plus', label: 'Más de $100' }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.products$.subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
      this.updateCategories();
    });
  }

  updateCategories(): void {
    this.categories = [...new Set(this.products.map(p => p.category))].filter(cat => cat !== 'otro');
    this.categories.push('otro');
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      // Filtro por búsqueda de texto
      const matchesSearch = this.searchText === '' ||
        product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchText.toLowerCase());

      // Filtro por categoría
      const matchesCategory = this.selectedCategory === '' ||
        product.category === this.selectedCategory;

      // Filtro por rango de precio
      const matchesPriceRange = this.checkPriceRange(product.price);

      return matchesSearch && matchesCategory && matchesPriceRange;
    });
  }

  checkPriceRange(price: number): boolean {
    if (!this.selectedPriceRange) return true;

    switch (this.selectedPriceRange) {
      case '0-25': return price <= 25;
      case '25-50': return price > 25 && price <= 50;
      case '50-100': return price > 50 && price <= 100;
      case '100-plus': return price > 100;
      default: return true;
    }
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedCategory = '';
    this.selectedPriceRange = '';
    this.filteredProducts = this.products;
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Cuidado Capilar': '#007bff',
      'Cuidado Facial': '#28a745',
      'Fragancias': '#6f42c1',
      'Maquillaje': '#e83e8c',
      'Cuidado Corporal': '#fd7e14',
      'otro': '#6c757d'
    };
    return colors[category] || colors['otro'];
  }

  orderProduct(product: Product): void {
    alert(`¡Producto "${product.name}" solicitado!\n\nEn un sistema real, se enviaría el pedido automáticamente.`);
  }
}
