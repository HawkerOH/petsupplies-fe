import { CartItem } from './cartitem';

export class CheckoutOrder {
	constructor(
		public email: string,
		public name: string,
		public street: string,
		public postalCode: string,
		public city: string,
		public cartItems: CartItem[]
		){}
}