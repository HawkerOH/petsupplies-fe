import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from './product';
import { CartItem } from './cartitem';
import { CheckoutOrder } from './checkoutorder';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = "http://localhost:8080/petsupplies/api/product";

  order = new CheckoutOrder('', '', '', '' ,'' ,[]);

  constructor(private http: HttpClient) { }

  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  makeOrder(): Observable<CheckoutOrder> {
    return this.http.post<CheckoutOrder>(this.productsUrl, this.order, httpOptions);
  }

  getProductInCart(): Array<CartItem> {
    return this.order.cartItems;
  }

  addProductToCart(product: Product): void {
    for (let cartItem of this.order.cartItems) {
      if(cartItem !== undefined)
        if(cartItem.hasProduct(product)){
          cartItem.increaseQuantity();
          return;
        }
    }
    this.order.cartItems.push(new CartItem(product, 1));
  }

  amountOfProducts(): number {
    let total=0;
    for (let cartItem of this.order.cartItems)
      if(cartItem !== undefined)
        total+=cartItem.quantity;
    return total;
  }

  clearCart(): void {
    this.order = new CheckoutOrder('', '', '', '' ,'' ,[]);
  }

}
