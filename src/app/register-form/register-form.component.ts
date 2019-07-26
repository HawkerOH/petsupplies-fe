import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../customer';
import { CustomerService} from '../customer.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

	model = new Customer(null, '', '', '', '', '' ,'');

  constructor(private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router) { }

  onSubmit() {
  	this.customerService.addCustomer(this.model)
      .subscribe();
  	this.router.navigate([''], { queryParams: { message: "customer-created" }});
  }

}
