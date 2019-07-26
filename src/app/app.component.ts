import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductService } from './product.service';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'Pet Supplies 🐶';
  productsInCart = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.updateProductCount();
  }

  ngDoCheck() {
    this.updateProductCount();
  }

  updateProductCount() {
  	this.productsInCart = this.productService.amountOfProducts();
  }

  @HostListener('click')
  click() {
    this.updateProductCount();
  }
}
