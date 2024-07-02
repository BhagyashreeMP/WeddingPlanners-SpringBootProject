import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustserviceService } from '../custservice.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {
  service: CustserviceService;
  customer: Customer;
  
  constructor(service: CustserviceService , private router : Router){
    this.service = service;
    this.customer = new Customer;
  }

  getCustomer(){
    this.service.addCustomer(this.customer).subscribe();
    this.customer = new Customer();
    this.redirectToView();
  }
  redirectToView(){
    this.router.navigate(['custLogin']).then(()=>window.location.reload());
  }
}
