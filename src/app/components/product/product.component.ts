import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addCart = new EventEmitter<Product>();

  addToCart(product: Product) {
    console.log("Adding to cart...")
    this.addCart.emit(product);
  }


}
