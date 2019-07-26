import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	products;
  message;
  showMessage = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
  	this.getProducts();
    this.route
      .queryParams
      .subscribe(params => {
        this.checkMessages(params['message']);
      });
  }

  getProducts() : void {
  	this.productService.getProducts()
  		.subscribe(products => this.products = products);
  }

  addToCart(product) : void {
    this.productService.addProductToCart(product);
  }

  checkMessages(param): void{
    this.showMessage =  param !== undefined;
    if(param=="customer-created")
      this.message = "Uw account is succesvol aangemaakt!";
    else if(param=="order-created")
      this.message = "Uw bestelling is succesvol geplaatst!";
  }

}
