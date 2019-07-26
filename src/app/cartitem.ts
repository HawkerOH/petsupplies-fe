import { Product } from './product';

export class CartItem {

  constructor(
    public product: Product, 
    public quantity: number
    ) {}

  public hasProduct(product: Product) : boolean {
  	return this.product.id == product.id;
  }

  public increaseQuantity() : void {
    if (this.quantity != 99)
  	  this.quantity++;
  }

  /* Returns false if one was removed */
  public decreaseQuantity(): void {
    if(this.quantity != 1)
      this.quantity--;
  }

  public getTotalPrice(): number {
    return this.product.price*this.quantity;
  }

}