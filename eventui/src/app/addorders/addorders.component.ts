import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../orders';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-addorders',
  templateUrl: './addorders.component.html',
  styleUrls: ['./addorders.component.css']
})
export class AddordersComponent {
  service: OrderserviceService;
  order: Orders;
  
  constructor(service: OrderserviceService , private router :Router){
    this.service = service;
    this.order = new Orders;
  }

  getOrder(){
    this.service.addOrder(this.order).subscribe();
    this.order = new Orders();
    this.redirectToView();
  }
  redirectToView(){
    this.router.navigate(['showOrders']).then(()=>window.location.reload());
  }
}
