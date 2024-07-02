import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-deleteorder',
  templateUrl: './deleteorder.component.html',
  styleUrls: ['./deleteorder.component.css']
})
export class DeleteorderComponent implements OnInit{
  service: OrderserviceService ;
  order : Orders;

constructor(service: OrderserviceService, private route : ActivatedRoute, private router: Router){
  this.service=service;
  this.order = new Orders;  
}
ngOnInit(): void {
  this.order.eventCode=this.route.snapshot.params['eventCode'];
  console.log(this.order.eventCode);
  this.service.deleteOrder(this.order).subscribe();
  this.redirectToView();
}

redirectToView(){
this.router.navigate(['showOrders']).then(()=>window.location.reload());
}
}
