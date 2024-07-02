import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
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
