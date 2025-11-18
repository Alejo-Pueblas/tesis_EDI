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
      imageUrl: 'https://www.lacoopeencasa.coop/media/lcec/publico/articulos/7/1/a/71a52d359f39b0a32ac75a3c21f63ffd'
    },
    {
      id: 2,
      name: 'Crema Hidratante',
      description: 'Crema facial hidratante para piel seca',
      category: 'Cuidado Facial',
      price: 25.99,
      stock: 30,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0k6TxibAE-VtokFtVv174wb2Hb0TTQNopVQ&s'
    },
    {
      id: 3,
      name: 'Perfume Floral',
      description: 'Perfume con aroma a flores fresas',
      category: 'Fragancias',
      price: 45.99,
      stock: 20,
      imageUrl: 'https://juleriaque.vtexassets.com/arquivos/ids/202820/gucci-flora-edp-7EF20E32F935F83EB688B311DBC782DC.jpg?v=638085749014330000'
    },
    {
      id: 4,
      name: 'Máscara de Pestañas',
      description: 'Máscara voluminizadora',
      category: 'Maquillaje',
      price: 12.99,
      stock: 40,
      imageUrl: 'https://farmacityar.vtexassets.com/arquivos/ids/253663-800-auto?v=638471593825730000&width=800&height=auto&aspect=true'
    },
    {
      id: 5,
      name: 'Aceite Capilar Reparador',
      description: 'Aceite esencial para reparar cabello dañado',
      category: 'Cuidado Capilar',
      price: 28.99,
      stock: 25,
      imageUrl: 'https://www.lorealprofessionnel.com.ar/-/media/project/loreal/brand-sites/lp/americas/latam/hair-care/absolut-repair/pdp/instant-resurfacing-10-in-1-perfecting-spray/1-slider.jpg?rev=316f70e50ee54655b66b8de3512240ec&cx=0.53&cy=0.5&cw=1920&ch=1920&hash=8A0913F8BAAA97BB4D9B6B108666C5E7'
    },
    {
      id: 6,
      name: 'Labial Mate',
      description: 'Labial de larga duración en tono rojo intenso',
      category: 'Maquillaje',
      price: 18.99,
      stock: 35,
      imageUrl: 'https://d22fxaf9t8d39k.cloudfront.net/173a95d19b4f526f2ced8f65d52438b07ba42f5a02e78c670086c1df52aee7a65253.jpg'
    },
    {
      id: 7,
      name: 'Sérum Antiarrugas',
      description: 'Sérum rejuvenecedor para piel madura',
      category: 'Cuidado Facial',
      price: 55.99,
      stock: 15,
      imageUrl: 'https://d2eebw31vcx88p.cloudfront.net/selmadigital/uploads/b62c93d4adde6795535c7068e601c32a0349ef5d.jpg.webp'
    },
    {
      id: 8,
      name: 'Jabón Exfoliante',
      description: 'Jabón corporal con exfoliantes naturales',
      category: 'Cuidado Corporal',
      price: 22.99,
      stock: 45,
      imageUrl: 'https://farmacityar.vtexassets.com/arquivos/ids/203919/126679_jabon-dove-exfoliante-pastilla-individual-x-90-grs_imagen-1.jpg?v=637377678171470000'
    },
    {
      id: 9,
      name: 'Perfume Citrico',
      description: 'Fragancia fresca con notas de cítricos y flores',
      category: 'Fragancias',
      price: 42.99,
      stock: 20,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCxO0E4wbhRXSxPz8jH1D1ux_KYQfLt-EeQ&s'
    },
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
