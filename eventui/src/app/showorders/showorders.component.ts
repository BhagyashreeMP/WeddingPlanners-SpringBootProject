import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-showorders',
  templateUrl: './showorders.component.html',
  styleUrls: ['./showorders.component.css']
})
export class ShowordersComponent {
  service: OrderserviceService;
  order: Orders[];

  constructor(service: OrderserviceService,private route : ActivatedRoute, private router: Router){
    this.service=service;
    this.order = [];
  }
  ngOnInit(): void {
    this.service.viewAllOrders().subscribe((data)=>(this.order=data));  
  }
}
