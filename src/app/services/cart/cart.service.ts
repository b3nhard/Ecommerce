import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../../cartItem';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartChanged: EventEmitter<Product[]> = new EventEmitter();

  // private baseUrl = 'https://fakestoreapi.com'


  /**
 * Returns the list of items currently in the cart.
 *
 * @returns The list of items currently in the cart.
 */
  getCartItems(): Product[] {
    const storedItems: string = localStorage.getItem("cartItems") as string;
    const cartItems = JSON.parse(storedItems) as Product[];
    if (cartItems) {
      return cartItems;
    } else {
      return [];
    }
  }




  /**
 * Adds an item to the cart.
 *
 * @param item - The item to add to the cart.
 * @returns The updated cart.
 */
  addToCart(item: Product): Product[] {
    console.log("Service: Adding to cart...");
    const cartItems = this.getCartItems();
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.cartChanged.emit(cartItems)
    return cartItems;
  }



  clearCart() {
    console.log("Service: Clearing cart...")
    localStorage.removeItem('cartItems')
    this.cartChanged.emit(this.getCartItems())
  }
}
