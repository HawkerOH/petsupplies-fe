import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartItem } from '../cartitem';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css']
})
export class CheckoutListComponent implements OnInit {
  model;

  constructor(
  	private route: ActivatedRoute,
  	private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = this.productService.order;
  }

  onSubmit() {
    this.productService.makeOrder().subscribe();
    this.productService.clearCart();
    this.router.navigate([''], { queryParams: { message: "order-created" }});
  }

  totalPrice() : number {
  	let total = 0;
  	for (let item of this.model.cartItems)
  		if(item !== undefined)
  			total+=(item.product.price*item.quantity);
  	return total;
  }

  addOne(cartItem: CartItem): void {
  	cartItem.increaseQuantity();
  }

  removeOne(cartItem: CartItem): void {
    cartItem.decreaseQuantity();
  }

  removeItem(cartItem: CartItem): void {
    delete this.model.cartItems[this.model.cartItems.indexOf(cartItem)];
  }
}