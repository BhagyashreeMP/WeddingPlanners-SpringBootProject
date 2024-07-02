import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit{
  service: OrderserviceService ;
  order : Orders;

constructor(service: OrderserviceService, private route :ActivatedRoute, private router: Router){
  this.service =service;
  this.order = new Orders;  
}
  ngOnInit(): void {
        this.order.eventCode=this.route.snapshot.params['eventCode'];
        this.order.orderCode=this.route.snapshot.params['orderCode'];
        this.order.custName=this.route.snapshot.params['custName'];
        this.order.location=this.route.snapshot.params['location'];
        this.order.date=this.route.snapshot.params['date'];
}
getUOrder(){
  this.service.updateOrder(this.order).subscribe();
  this.order=new Orders();
  this.redirectToView();
}

redirectToView(){
  this.router.navigate(['showOrders']).then(()=>window.location.reload());
}
}
