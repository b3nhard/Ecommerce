import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() cartItems!: Product[];
  @Output() close = new EventEmitter<boolean>()
  @Output() clear = new EventEmitter<boolean>();
  closeCart() {
    this.close.emit(true)
  }
  clearCart() {
    this.clear.emit(true)
  }

  calculateTotal(items: Product[]) {
    let total = 0
    items.forEach(item => {
      total += parseFloat(item.price)
    })
    return total
  }

}
