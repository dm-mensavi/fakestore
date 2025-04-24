import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, LoadingSpinnerComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  searchTerm: string = '';
  loading = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = products;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.loading = false;
      },
    });

    this.productsService.getCategories().subscribe({
      next: (categories) => {
        this.categories = ['All', ...categories];
        this.selectedCategory = 'All';
      },
      error: (error) => console.error('Error fetching categories:', error),
    });
  }

  applyFilters(): void {
    let tempProducts = this.products;

    // Filter by category
    if (this.selectedCategory !== 'All') {
      tempProducts = tempProducts.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    // Filter by search term
    if (this.searchTerm) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.filteredProducts = tempProducts;
  }
}