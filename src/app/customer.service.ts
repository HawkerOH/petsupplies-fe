import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
	customerUrl = "http://localhost:8080/petsupplies/api/customer";

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer): Observable<Customer> {
  	return this.http.post<Customer>(this.customerUrl, customer, httpOptions);
  }

}
