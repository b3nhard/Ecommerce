import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { CartItem } from '../../cartItem';
import { Product } from '../../product';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an item to the cart and return the updated cart', () => {
    const item: Product = {
      id: 1,
      title: 'Product 1',
      price: '10',
      image: 'https://fakestoreapi.com/img/100x100.jpg',
      description: 'Product 1 description',
      category: 'Category 1'
    };
    const expectedCart: Product[] = [{
      id: 1,
      title: 'Product 1',
      price: '10',
      image: 'https://fakestoreapi.com/img/100x100.jpg',
      description: 'Product 1 description',
      category: 'Category 1'
    }];
    const actualCart = service.addToCart(item);
    expect(actualCart).toEqual(expectedCart);
  });
});

