import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { ProductComponent } from './product/product.component';
import { RegisterFormComponent} from './register-form/register-form.component';

const routes: Routes = [
	{ path: '', component: ProductComponent },
	{ path: 'checkout', component: CheckoutListComponent },
	{ path: 'register', component: RegisterFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
