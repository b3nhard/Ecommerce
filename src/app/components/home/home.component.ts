import { Component, OnInit } from '@angular/core';
import { StorenavComponent } from './storenav/storenav.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../product';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../../services/cart/cart.service';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StorenavComponent, NavbarComponent, ProductComponent, FooterComponent, CommonModule, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  cartItems: Product[] = [];
  categories: string[] = [];
  cartOpen: boolean = false


  constructor(private productService: ProductService, private cartService: CartService) { }

  addToCart(item: Product) {
    this.cartService.addToCart(item)
  }
  toggleCart() {
    this.cartOpen = !this.cartOpen
  }
  closeCart() {
    this.cartOpen = false
  }
  clearCart() {
    this.cartService.clearCart()
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
    this.cartItems = this.cartService.getCartItems()
    this.cartService.cartChanged.subscribe(cartItems => {
      this.cartItems = cartItems
    })
  }

}
