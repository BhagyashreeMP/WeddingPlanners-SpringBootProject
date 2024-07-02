import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustserviceService } from '../custservice.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent {
  service: CustserviceService;
  customer: Customer[];

  constructor(service: CustserviceService,private route : ActivatedRoute, private router: Router){
    this.service=service;
    this.customer = [];
  }
  ngOnInit(): void {
    this.service.viewAllCustomers().subscribe((data)=>(this.customer=data));  
  }
}
