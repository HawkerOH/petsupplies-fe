import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { FormsModule }   from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { RegisterFormComponent } from './register-form/register-form.component';

// the second parameter 'fr' is optional
registerLocaleData(localeNl, 'nl');

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CheckoutListComponent,
    RegisterFormComponent
  ],
  imports: [
  	NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }